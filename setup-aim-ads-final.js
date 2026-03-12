#!/usr/bin/env node

const { GoogleAdsApi } = require('google-ads-api');
const yaml = require('js-yaml');
const fs = require('fs');

const config = yaml.load(fs.readFileSync('./google-ads-config.yaml', 'utf8'));

const client = new GoogleAdsApi({
  client_id: config.client_id,
  client_secret: config.client_secret,
  developer_token: config.developer_token,
});

// Access target customer through manager account
const customer = client.Customer({
  customer_id: config.target_customer_id,
  login_customer_id: config.customer_id, // Manager account for auth
  refresh_token: config.refresh_token,
});

const adGroups = [
  {
    name: 'WCB Work Injury',
    cpc_bid_micros: 4500000,
    keywords: [
      { text: 'wcb physiotherapy edmonton', match_type: 'PHRASE' },
      { text: 'wcb injury clinic edmonton', match_type: 'PHRASE' },
      { text: 'workers compensation physiotherapy', match_type: 'BROAD' }
    ]
  },
  {
    name: 'WCB Work Injury Employer',
    cpc_bid_micros: 3500000,
    keywords: [
      { text: 'wcb approved physiotherapy edmonton', match_type: 'PHRASE' },
      { text: 'employer injury management', match_type: 'BROAD' }
    ]
  },
  {
    name: 'MVA Motor Vehicle Accident',
    cpc_bid_micros: 5000000,
    keywords: [
      { text: 'motor vehicle accident physiotherapy edmonton', match_type: 'PHRASE' },
      { text: 'mva treatment edmonton', match_type: 'PHRASE' },
      { text: 'car accident injury clinic', match_type: 'BROAD' }
    ]
  },
  {
    name: 'Physiotherapy Edmonton',
    cpc_bid_micros: 4000000,
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

const adTemplates = {
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
};

async function createCampaign() {
  console.log('Creating Search campaign...');
  
  const campaign = {
    name: 'AIM - Search - Lead Generation - Feb 2026',
    status: 'ENABLED',
    advertising_channel_type: 'SEARCH',
    campaign_budget: {
      amount_micros: 44290000,
    },
    network_settings: {
      target_google_search: true,
      target_search_network: true,
      target_content_network: false,
    },
    bidding_strategy_type: 'MANUAL_CPC',
    manual_cpc: {
      enhanced_cpc_enabled: true,
    },
  };

  const response = await customer.campaigns.create([campaign]);
  const resourceName = response.results[0].resource_name;
  const campaignId = resourceName.split('/').pop();
  
  console.log(`✓ Created campaign (ID: ${campaignId})\n`);
  return campaignId;
}

async function createAdGroup(campaignId, name, cpcBidMicros) {
  const adGroup = {
    campaign: `customers/${config.target_customer_id}/campaigns/${campaignId}`,
    name: name,
    status: 'ENABLED',
    type: 'SEARCH_STANDARD',
    cpc_bid_micros: cpcBidMicros,
  };

  const response = await customer.adGroups.create([adGroup]);
  const resourceName = response.results[0].resource_name;
  const adGroupId = resourceName.split('/').pop();
  
  console.log(`✓ Created ad group: ${name}`);
  return adGroupId;
}

async function addKeywords(adGroupId, keywords) {
  const operations = keywords.map(kw => ({
    ad_group: `customers/${config.target_customer_id}/adGroups/${adGroupId}`,
    keyword: {
      text: kw.text,
      match_type: kw.match_type,
    },
    status: 'ENABLED',
  }));

  await customer.adGroupCriteria.create(operations);
  console.log(`  ✓ Added ${keywords.length} keywords`);
}

async function createAds(adGroupId) {
  const operations = [];
  
  for (let i = 0; i < 3; i++) {
    const shuffledHeadlines = [...adTemplates.headlines].sort(() => Math.random() - 0.5);
    const shuffledDescriptions = [...adTemplates.descriptions].sort(() => Math.random() - 0.5);
    
    operations.push({
      ad_group: `customers/${config.target_customer_id}/adGroups/${adGroupId}`,
      ad: {
        final_urls: [adTemplates.final_url],
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
  console.log('🚀 Google Ads Campaign Setup\n');
  console.log('Manager Account:', config.customer_id);
  console.log('Target Account:', config.target_customer_id);
  console.log('');
  
  try {
    const campaignId = await createCampaign();
    
    for (const group of adGroups) {
      console.log(`\nProcessing: ${group.name}`);
      
      try {
        const adGroupId = await createAdGroup(campaignId, group.name, group.cpc_bid_micros);
        await addKeywords(adGroupId, group.keywords);
        await createAds(adGroupId);
      } catch (error) {
        console.error(`✗ Error:`, error.message);
      }
    }
    
    console.log('\n✅ Complete!');
    console.log(`\nView: https://ads.google.com/aw/campaigns?campaignId=${campaignId}&ocid=${config.target_customer_id}`);
    
  } catch (error) {
    console.error('\n❌ Failed:', error.message);
    if (error.errors) {
      error.errors.forEach(e => console.error(`  - ${e.message}`));
    }
    process.exit(1);
  }
}

main();
