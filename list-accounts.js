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

const customer = client.Customer({
  customer_id: config.login_customer_id,
  refresh_token: config.refresh_token,
});

async function listAccounts() {
  console.log('Listing accounts under Manager Account:', config.login_customer_id);
  console.log('');
  
  try {
    const query = `
      SELECT
        customer_client.id,
        customer_client.descriptive_name,
        customer_client.manager,
        customer_client.status
      FROM customer_client
      WHERE customer_client.status = 'ENABLED'
    `;
    
    const results = await customer.query(query);
    
    console.log('Found accounts:');
    for (const row of results) {
      console.log(`- ID: ${row.customer_client.id}`);
      console.log(`  Name: ${row.customer_client.descriptive_name}`);
      console.log(`  Manager: ${row.customer_client.manager}`);
      console.log(`  Status: ${row.customer_client.status}`);
      console.log('');
    }
    
  } catch (error) {
    console.error('Error:', error.message);
    if (error.errors) {
      error.errors.forEach(e => console.error(`- ${e.message}`));
    }
  }
}

listAccounts();
