# Google Ads API Setup - 15 Minutes

## Step 1: Enable Google Ads API (5 min)

1. Go to: https://console.cloud.google.com/
2. Select your project (or create one: "AIM Google Ads")
3. Enable the API:
   - Search for "Google Ads API"
   - Click "Enable"

## Step 2: Create OAuth Credentials (5 min)

1. In Google Cloud Console, go to: **APIs & Services > Credentials**
2. Click **"+ CREATE CREDENTIALS" > OAuth client ID**
3. Choose **"Desktop app"**
4. Name it: "OpenClaw Google Ads Manager"
5. Click **Create**
6. Download the JSON file (it will be called something like `client_secret_xxx.json`)

## Step 3: Get Developer Token (5 min)

1. Go to Google Ads: https://ads.google.com
2. Navigate to: **Tools & Settings (wrench icon) > Setup > API Center**
3. Copy your **Developer Token** (it's a long string like `AbCdEf12345...`)

## Step 4: Provide to Axium

Send me these 3 things:

1. **Client ID** (from the OAuth JSON file)
2. **Client Secret** (from the OAuth JSON file)
3. **Developer Token** (from API Center)
4. **Customer ID** (your Google Ads account ID, format: 123-456-7890)

I'll handle the OAuth flow and store credentials securely.

---

## What This Enables

Once set up, I can:
- Create/modify campaigns, ad groups, keywords, ads
- Adjust bids and budgets
- Pull performance reports
- Optimize in real-time
- Zero manual uploads needed

No more CSV errors. No more manual work.
