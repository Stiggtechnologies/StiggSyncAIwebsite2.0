#!/usr/bin/env node

/**
 * Upload AIM Search campaign to Google Ads via API from simplified bulk CSV.
 *
 * Input CSV format: AIM_SEARCH_CAMPAIGN_REBUILD_FEB2026.csv
 * Columns:
 * Action,Campaign,Ad Group,Keyword,Criterion Type,Status,Max CPC,Headline 1,Headline 2,Headline 3,Description 1,Description 2,Path 1,Path 2,Final URL
 */

const fs = require('fs');
const yaml = require('js-yaml');
const { GoogleAdsApi } = require('google-ads-api');

const CONFIG_PATH = './google-ads-config.yaml';
const CSV_PATH = process.argv[2] || './AIM_SEARCH_CAMPAIGN_REBUILD_FEB2026.csv';

function parseCsvLine(line) {
  // RFC4180-ish CSV parser (handles quotes and escaped double quotes)
  const out = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const ch = line[i];
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        cur += ch;
      }
    } else {
      if (ch === ',') {
        out.push(cur);
        cur = '';
      } else if (ch === '"') {
        inQuotes = true;
      } else {
        cur += ch;
      }
    }
  }
  out.push(cur);
  return out;
}

function microsFromCpc(cpc) {
  if (!cpc) return null;
  const n = Number(String(cpc).trim());
  if (!Number.isFinite(n)) return null;
  return Math.round(n * 1_000_000);
}

function normalizeKeyword(text) {
  if (!text) return null;
  let t = String(text).trim();
  // remove match-format markers
  if (t.startsWith('[') && t.endsWith(']')) t = t.slice(1, -1);
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    t = t.slice(1, -1);
  }
  return t.trim();
}

function matchTypeFromCriterionType(ct) {
  const s = String(ct || '').toLowerCase();
  if (s.includes('exact')) return 'EXACT';
  if (s.includes('phrase')) return 'PHRASE';
  if (s.includes('broad')) return 'BROAD';
  return null;
}

function isCommentOrBlank(line) {
  const t = line.trim();
  return !t || t.startsWith('#');
}

async function main() {
  const config = yaml.load(fs.readFileSync(CONFIG_PATH, 'utf8'));

  const client = new GoogleAdsApi({
    client_id: config.client_id,
    client_secret: config.client_secret,
    developer_token: config.developer_token,
  });

  const customer = client.Customer({
    customer_id: config.target_customer_id,
    login_customer_id: config.customer_id,
    refresh_token: config.refresh_token,
  });

  const csvRaw = fs.readFileSync(CSV_PATH, 'utf8');
  const lines = csvRaw.split(/\r?\n/).filter(l => !isCommentOrBlank(l));
  if (lines.length < 2) throw new Error('CSV appears empty after removing comments/blank lines');

  const header = parseCsvLine(lines[0]).map(h => h.trim());
  const idx = Object.fromEntries(header.map((h, i) => [h, i]));

  function col(row, name) {
    const i = idx[name];
    if (i === undefined) return '';
    return (row[i] ?? '').trim();
  }

  // Determine campaign name from first data row
  const firstRow = parseCsvLine(lines[1]);
  const campaignName = col(firstRow, 'Campaign');
  if (!campaignName) throw new Error('Could not determine Campaign name from CSV');

  console.log('🚀 Uploading campaign from CSV via Google Ads API');
  console.log('CSV:', CSV_PATH);
  console.log('Manager (login_customer_id):', config.customer_id);
  console.log('Target customer_id:', config.target_customer_id);
  console.log('Campaign name:', campaignName);
  console.log('');

  // 1) Create budget
  const dailyBudgetMicros = 75_000_000; // $75/day
  const budgetResponse = await customer.campaignBudgets.create([
    {
      name: `${campaignName} - Budget`,
      amount_micros: dailyBudgetMicros,
      delivery_method: 'STANDARD',
      explicitly_shared: false,
    },
  ]);
  const budgetResource = budgetResponse.results[0].resource_name;

  // 2) Create campaign
  const campaignResponse = await customer.campaigns.create([
    {
      name: campaignName,
      status: 'PAUSED', // safer: pause on creation; can enable in UI after review
      advertising_channel_type: 'SEARCH',
      campaign_budget: budgetResource,
      network_settings: {
        target_google_search: true,
        target_search_network: true,
        target_content_network: false,
        target_partner_search_network: false,
      },
      bidding_strategy_type: 'MANUAL_CPC',
      manual_cpc: { enhanced_cpc_enabled: true },
    },
  ]);

  const campaignResource = campaignResponse.results[0].resource_name;
  const campaignId = campaignResource.split('/').pop();
  console.log(`✓ Created campaign (ID: ${campaignId}) [PAUSED]`);

  // 3) Targeting: Edmonton (geo target constant 9051182), English.
  // NOTE: Radius targeting requires proximity (lat/lng). We apply city targeting only here.
  await customer.campaignCriteria.create([
    {
      campaign: campaignResource,
      location: { geo_target_constant: 'geoTargetConstants/9051182' },
      negative: false,
    },
    {
      campaign: campaignResource,
      language: { language_constant: 'languageConstants/1000' },
      negative: false,
    },
  ]);
  console.log('✓ Applied targeting: Edmonton + English (no radius)');

  // 4) Parse rows into structures
  const adGroupMap = new Map(); // name -> { id, resource }
  const keywordsByAdGroup = new Map(); // adGroupName -> [{text, match_type, cpc_micros}]
  const adsByAdGroup = new Map(); // adGroupName -> [{headlines[], descriptions[], path1, path2, finalUrl}]
  const campaignNegatives = []; // [{text, match_type}]

  for (let li = 1; li < lines.length; li++) {
    const row = parseCsvLine(lines[li]);
    const action = col(row, 'Action');
    if (action && action.toLowerCase() !== 'add') continue;

    const adGroupName = col(row, 'Ad Group');
    const keyword = col(row, 'Keyword');
    const criterionType = col(row, 'Criterion Type');
    const maxCpc = col(row, 'Max CPC');

    const h1 = col(row, 'Headline 1');
    const h2 = col(row, 'Headline 2');
    const h3 = col(row, 'Headline 3');
    const d1 = col(row, 'Description 1');
    const d2 = col(row, 'Description 2');
    const path1 = col(row, 'Path 1');
    const path2 = col(row, 'Path 2');
    const finalUrl = col(row, 'Final URL');

    // campaign negatives: have criterion type like 'Negative (phrase)' and no ad group
    if (!adGroupName && keyword && String(criterionType).toLowerCase().startsWith('negative')) {
      const kwText = normalizeKeyword(keyword);
      const mt = String(criterionType).toLowerCase().includes('exact') ? 'EXACT' : 'PHRASE';
      if (kwText) campaignNegatives.push({ text: kwText, match_type: mt });
      continue;
    }

    // keyword rows
    if (adGroupName && keyword && criterionType) {
      const mt = matchTypeFromCriterionType(criterionType);
      const kwText = normalizeKeyword(keyword);
      if (!mt || !kwText) continue;
      const cpc_micros = microsFromCpc(maxCpc);
      if (!keywordsByAdGroup.has(adGroupName)) keywordsByAdGroup.set(adGroupName, []);
      keywordsByAdGroup.get(adGroupName).push({ text: kwText, match_type: mt, cpc_micros });
      continue;
    }

    // ad rows: has headlines/descriptions
    if (adGroupName && (h1 || h2 || h3) && (d1 || d2)) {
      if (!adsByAdGroup.has(adGroupName)) adsByAdGroup.set(adGroupName, []);
      adsByAdGroup.get(adGroupName).push({
        headlines: [h1, h2, h3].filter(Boolean),
        descriptions: [d1, d2].filter(Boolean),
        path1,
        path2,
        finalUrl,
      });
      continue;
    }
  }

  const allAdGroupNames = Array.from(new Set([
    ...keywordsByAdGroup.keys(),
    ...adsByAdGroup.keys(),
  ]));

  if (!allAdGroupNames.length) {
    throw new Error('No ad groups found in CSV (after parsing)');
  }

  // 5) Create ad groups
  for (const name of allAdGroupNames) {
    const resp = await customer.adGroups.create([
      {
        campaign: campaignResource,
        name,
        status: 'ENABLED',
        type: 'SEARCH_STANDARD',
      },
    ]);
    const resName = resp.results[0].resource_name;
    const adGroupId = resName.split('/').pop();
    adGroupMap.set(name, { id: adGroupId, resource: resName });
    console.log(`✓ Created ad group: ${name} (ID: ${adGroupId})`);
  }

  // 6) Add campaign-level negative keywords
  if (campaignNegatives.length) {
    const ops = campaignNegatives.map(n => ({
      campaign: campaignResource,
      negative: true,
      keyword: {
        text: n.text,
        match_type: n.match_type,
      },
    }));
    // API has limits per mutate; chunk
    const chunkSize = 100;
    for (let i = 0; i < ops.length; i += chunkSize) {
      await customer.campaignCriteria.create(ops.slice(i, i + chunkSize));
    }
    console.log(`✓ Added ${campaignNegatives.length} campaign negative keywords`);
  }

  // 7) Add keywords
  for (const [adGroupName, kws] of keywordsByAdGroup.entries()) {
    const ag = adGroupMap.get(adGroupName);
    const ops = kws.map(k => {
      const op = {
        ad_group: ag.resource,
        status: 'ENABLED',
        keyword: {
          text: k.text,
          match_type: k.match_type,
        },
      };
      if (k.cpc_micros) op.cpc_bid_micros = k.cpc_micros;
      return op;
    });
    const chunkSize = 1000;
    for (let i = 0; i < ops.length; i += chunkSize) {
      await customer.adGroupCriteria.create(ops.slice(i, i + chunkSize));
    }
    console.log(`  ✓ ${adGroupName}: added ${kws.length} keywords`);
  }

  // 8) Add RSAs
  for (const [adGroupName, ads] of adsByAdGroup.entries()) {
    const ag = adGroupMap.get(adGroupName);
    const ops = ads.map(a => ({
      ad_group: ag.resource,
      status: 'ENABLED',
      ad: {
        final_urls: [a.finalUrl || 'https://aimphysiotherapy.ca/'],
        responsive_search_ad: {
          headlines: a.headlines.map(t => ({ text: t })),
          descriptions: a.descriptions.map(t => ({ text: t })),
          path1: a.path1 || undefined,
          path2: a.path2 || undefined,
        },
      },
    }));

    // Remove undefined path fields (google-ads-api will send them otherwise)
    ops.forEach(op => {
      if (op.ad.responsive_search_ad.path1 === undefined) delete op.ad.responsive_search_ad.path1;
      if (op.ad.responsive_search_ad.path2 === undefined) delete op.ad.responsive_search_ad.path2;
    });

    const chunkSize = 50;
    for (let i = 0; i < ops.length; i += chunkSize) {
      await customer.adGroupAds.create(ops.slice(i, i + chunkSize));
    }
    console.log(`  ✓ ${adGroupName}: created ${ads.length} RSA ads`);
  }

  console.log('\n✅ Upload complete. Campaign created PAUSED for safety.');
  console.log(`Open: https://ads.google.com/aw/campaigns?campaignId=${campaignId}&ocid=${config.target_customer_id}`);
  console.log('Next: review settings (budget/location/radius), then enable.');
}

main().catch(err => {
  console.error('\n❌ Upload failed:', err.message);
  if (err.errors) {
    for (const e of err.errors) console.error('  -', e.message);
  }
  process.exit(1);
});
