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

console.log('Testing API access...');
console.log('Developer Token:', config.developer_token);
console.log('Manager Account:', config.login_customer_id);
console.log('');

// Try Manager Account directly
const manager = client.Customer({
  customer_id: config.login_customer_id,
  refresh_token: config.refresh_token,
});

async function test() {
  try {
    console.log('Attempting to access Manager Account...');
    const accounts = await manager.customerClients.list();
    console.log('✅ Success! Found', accounts.length, 'linked accounts:');
    accounts.forEach(acc => {
      console.log(`- ${acc.customer_client.id}: ${acc.customer_client.descriptive_name}`);
    });
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.errors) {
      error.errors.forEach(e => console.error(`  - ${e.message}`));
    }
  }
}

test();
