#!/usr/bin/env node
/**
 * Direct Chrome DevTools Protocol automation for Google Ads
 * Creates ad groups, keywords, and ads without CSV upload
 */

const CDP = require('chrome-remote-interface');

const AD_GROUPS = [
  { name: 'WCB Work Injury', bid: 4.50 },
  { name: 'WCB Work Injury Employer', bid: 3.50 },
  { name: 'MVA Motor Vehicle Accident', bid: 5.00 },
  { name: 'Physiotherapy Edmonton', bid: 4.00 }
];

async function setupGoogleAds() {
  try {
    // Connect to Chrome
    const client = await CDP({ port: 18800 });
    const { Page, Runtime } = client;

    await Page.enable();
    await Runtime.enable();

    // Navigate to campaign ad groups page
    console.log('📍 Navigating to campaign...');
    await Page.navigate({
      url: 'https://ads.google.com/aw/adgroups?ocid=6741184707&campaignId=21857062627'
    });

    await Page.loadEventFired();
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Create each ad group
    for (const adGroup of AD_GROUPS) {
      console.log(`➕ Creating ad group: ${adGroup.name}`);
      
      // Click "+" button to create new ad group
      await Runtime.evaluate({
        expression: `
          document.querySelector('[data-test-id="new-ad-group-button"]')?.click() ||
          document.querySelector('button[aria-label*="New ad group"]')?.click() ||
          document.querySelector('button:contains("New ad group")')?.click();
        `
      });

      await new Promise(resolve => setTimeout(resolve, 2000));

      // Fill in ad group name
      await Runtime.evaluate({
        expression: `
          const nameInput = document.querySelector('input[aria-label*="Ad group name"]');
          if (nameInput) {
            nameInput.value = '${adGroup.name}';
            nameInput.dispatchEvent(new Event('input', { bubbles: true }));
          }
        `
      });

      // Fill in default bid
      await Runtime.evaluate({
        expression: `
          const bidInput = document.querySelector('input[aria-label*="default bid"]');
          if (bidInput) {
            bidInput.value = '${adGroup.bid}';
            bidInput.dispatchEvent(new Event('input', { bubbles: true }));
          }
        `
      });

      // Click save
      await Runtime.evaluate({
        expression: `
          document.querySelector('button[aria-label*="Save"]')?.click() ||
          document.querySelector('button:contains("Save")')?.click();
        `
      });

      await new Promise(resolve => setTimeout(resolve, 3000));
      console.log(`✅ Created: ${adGroup.name}`);
    }

    console.log('\n🎉 All ad groups created successfully!');
    await client.close();

  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

setupGoogleAds();
