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

// Test manager account access
const manager = client.Customer({
  customer_id: config.customer_id,
  refresh_token: config.refresh_token,
});

async function test() {
  try {
    console.log('Testing Manager Account access:', config.customer_id);
    const result = await manager.query('SELECT customer.id, customer.descriptive_name FROM customer');
    console.log('✅ Success!');
    console.log('Manager ID:', result[0].customer.id);
    console.log('Name:', result[0].customer.descriptive_name);
    console.log('');
    
    // Try to list linked accounts
    console.log('Querying linked accounts...');
    const accounts = await manager.query(`
      SELECT customer_client.id, customer_client.descriptive_name, customer_client.status 
      FROM customer_client 
      WHERE customer_client.status = 'ENABLED'
    `);
    
    if (accounts.length === 0) {
      console.log('❌ No linked accounts found.');
      console.log('Account 6741184707 needs to accept the link invitation.');
    } else {
      console.log('✅ Found linked accounts:');
      accounts.forEach(acc => {
        console.log(`- ${acc.customer_client.id}: ${acc.customer_client.descriptive_name} (${acc.customer_client.status})`);
      });
    }
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.errors) {
      error.errors.forEach(e => console.error(`  - ${e.message}`));
    }
  }
}

test();
