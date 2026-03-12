#!/usr/bin/env node

const { GoogleAdsApi } = require('google-ads-api');
const yaml = require('js-yaml');
const fs = require('fs');

// Load config
const config = yaml.load(fs.readFileSync('./google-ads-config.yaml', 'utf8'));

// Initialize Google Ads API client
const client = new GoogleAdsApi({
  client_id: config.client_id,
  client_secret: config.client_secret,
  developer_token: config.developer_token,
});

const customer = client.Customer({
  customer_id: config.login_customer_id,
  refresh_token: config.refresh_token,
});

const CAMPAIGN_ID = '23589699257';

// Ad group definitions
const adGroups = [
  {
    name: 'WCB Work Injury',
    cpc_bid_micros: 4500000, // $4.50
    keywords: [
      { text: 'wcb physiotherapy edmonton', match_type: 'PHRASE' },
      { text: 'wcb injury clinic edmonton', match_type: 'PHRASE' },
      { text: 'workers compensation physiotherapy', match_type: 'BROAD' }
    ]
  },
  {
    name: 'WCB Work Injury Employer',
    cpc_bid_micros: 3500000, // $3.50
    keywords: [
      { text: 'wcb approved physiotherapy edmonton', match_type: 'PHRASE' },
      { text: 'employer injury management', match_type: 'BROAD' }
    ]
  },
  {
    name: 'MVA Motor Vehicle Accident',
    cpc_bid_micros: 5000000, // $5.00
    keywords: [
      { text: 'motor vehicle accident physiotherapy edmonton', match_type: 'PHRASE' },
      { text: 'mva treatment edmonton', match_type: 'PHRASE' },
      { text: 'car accident injury clinic', match_type: 'BROAD' }
    ]
  },
  {
    name: 'Physiotherapy Edmonton',
    cpc_bid_micros: 4000000, // $4.00
    keywords: [
      { text: 'physiotherapy edmonton', match_type: 'PHRASE' },
      { text: 'physio clinic edmonton', match_type: 'PHRASE' },
      { text: 'physical therapy edmonton', match_type: 'PHRASE' },
      { text: 'edmonton physiotherapist', match_type: 'BROAD' },
      { text: 'sports injury physiotherapy', match_type: 'BROAD' },
      { text: 'injury rehabilitation edmonton', match_type: 'BROAD' },
      { text: 'pain management physiotherapy', match_type: 'BROAD' }
    ]
  }
];

// Responsive search ads (3 per ad group, shared headlines/descriptions)
const adTemplates = [
  {
    headlines: [
      'Expert Injury Treatment',
      'WCB & MVA Specialists',
      'Fast Recovery Edmonton',
      'Alberta Injury Management',
      'Book Your Appointment',
      'Same-Day Appointments',
      'Experienced Physiotherapists',
      'Pain Relief Experts',
      'Get Back to Work Faster',
      'Trusted Injury Clinic'
    ],
    descriptions: [
      'Specialized care for work & motor vehicle injuries. WCB approved. Book online today!',
      'Expert physiotherapy in Edmonton. Direct billing available. Call now for same-day service.',
      'Recover faster with personalized treatment plans. 20+ years experience. Visit us today!',
      'Comprehensive injury management. Trusted by employers across Alberta. Get started now.'
    ],
    final_url: 'https://albertainjurymanagement.ca'
  }
];

async function createAdGroup(name, cpcBidMicros) {
  const adGroup = {
    campaign: `customers/${config.login_customer_id}/campaigns/${CAMPAIGN_ID}`,
    name: name,
    status: 'ENABLED',
    type: 'SEARCH_STANDARD',
    cpc_bid_micros: cpcBidMicros,
  };

  const response = await customer.adGroups.create([adGroup]);
  const resourceName = response.results[0].resource_name;
  const adGroupId = resourceName.split('/').pop();
  
  console.log(`✓ Created ad group: ${name} (ID: ${adGroupId})`);
  return adGroupId;
}

async function addKeywords(adGroupId, keywords) {
  const operations = keywords.map(kw => ({
    ad_group: `customers/${config.login_customer_id}/adGroups/${adGroupId}`,
    keyword: {
      text: kw.text,
      match_type: kw.match_type,
    },
    status: 'ENABLED',
  }));

  await customer.adGroupCriteria.create(operations);
  console.log(`  ✓ Added ${keywords.length} keywords`);
}

async function createAds(adGroupId, template) {
  const operations = [];
  
  // Create 3 variations by shuffling headlines/descriptions
  for (let i = 0; i < 3; i++) {
    const shuffledHeadlines = [...template.headlines].sort(() => Math.random() - 0.5).slice(0, 15);
    const shuffledDescriptions = [...template.descriptions].sort(() => Math.random() - 0.5).slice(0, 4);
    
    operations.push({
      ad_group: `customers/${config.login_customer_id}/adGroups/${adGroupId}`,
      ad: {
        final_urls: [template.final_url],
        responsive_search_ad: {
          headlines: shuffledHeadlines.map(text => ({ text })),
          descriptions: shuffledDescriptions.map(text => ({ text })),
          path1: 'edmonton',
          path2: 'injury-care',
        }
      },
      status: 'ENABLED',
    });
  }

  await customer.adGroupAds.create(operations);
  console.log(`  ✓ Created 3 responsive search ads`);
}

async function main() {
  console.log('Starting Google Ads campaign setup...\n');
  
  for (const group of adGroups) {
    console.log(`\nProcessing: ${group.name}`);
    
    try {
      const adGroupId = await createAdGroup(group.name, group.cpc_bid_micros);
      await addKeywords(adGroupId, group.keywords);
      await createAds(adGroupId, adTemplates[0]);
    } catch (error) {
      console.error(`✗ Error creating ${group.name}:`, error.message);
      if (error.errors) {
        error.errors.forEach(e => console.error(`  - ${e.message}`));
      }
    }
  }
  
  console.log('\n✓ Campaign setup complete!');
  console.log(`\nView campaign: https://ads.google.com/aw/campaigns?campaignId=${CAMPAIGN_ID}&ocid=${config.login_customer_id}`);
}

main().catch(console.error);
