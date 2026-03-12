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

async function test() {
  try {
    console.log('Testing basic query...');
    const result = await customer.query('SELECT customer.id FROM customer LIMIT 1');
    console.log('✅ Success! Customer ID:', result[0].customer.id);
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Full error:', error);
  }
}

test();
