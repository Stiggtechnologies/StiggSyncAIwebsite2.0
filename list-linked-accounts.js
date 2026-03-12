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

const manager = client.Customer({
  customer_id: config.login_customer_id,
  refresh_token: config.refresh_token,
});

async function listAccounts() {
  try {
    console.log('Querying linked accounts under Manager:', config.login_customer_id);
    console.log('');
    
    const query = `
      SELECT
        customer_client.id,
        customer_client.descriptive_name,
        customer_client.status,
        customer_client.manager
      FROM customer_client
    `;
    
    const results = await manager.query(query);
    
    if (results.length === 0) {
      console.log('❌ No accounts found linked to this manager account.');
      console.log('');
      console.log('You need to link account 6741184707 to manager 8014740389');
      console.log('Steps:');
      console.log('1. In Manager Account → click Accounts menu');
      console.log('2. Click "+ Link existing account"');
      console.log('3. Enter: 674-118-4707');
      console.log('4. Send invitation');
      console.log('5. In regular account, accept the invitation');
      return;
    }
    
    console.log('✅ Found linked accounts:');
    results.forEach(row => {
      console.log(`- ID: ${row.customer_client.id}`);
      console.log(`  Name: ${row.customer_client.descriptive_name}`);
      console.log(`  Status: ${row.customer_client.status}`);
      console.log(`  Manager: ${row.customer_client.manager}`);
      console.log('');
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.errors) {
      error.errors.forEach(e => console.error(`  - ${e.message}`));
    }
  }
}

listAccounts();
