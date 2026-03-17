# AIM Call Tracking Setup Guide

## ✅ What's Already Built

1. **Database Schema** - Complete (call_tracking_numbers, call_tracking_sessions, call_tracking_calls)
2. **Twilio Webhook Edge Function** - Complete (logs calls + forwards to clinic)
3. **DNI JavaScript** - Complete (swaps phone numbers on website)
4. **Google Ads Conversion API** - Complete (sends conversions automatically)

---

## 🚀 Setup Steps (90 minutes total)

### Step 1: Buy Twilio Phone Numbers (15 min)

1. Go to [twilio.com](https://www.twilio.com) and sign up
2. Purchase 4 phone numbers in Edmonton (780) area code:
   - **WCB Campaign:** +1780250XXXX
   - **MVA Campaign:** +1780250YYYY  
   - **General Physio:** +1780250ZZZZ
   - **Back/Neck Pain:** +1780250WWWW

**Cost:** ~$1/month per number = **$4/month total**

### Step 2: Configure Twilio Webhooks (10 min)

For each number you purchased:

1. Go to Twilio Console → Phone Numbers → Manage → Active Numbers
2. Click on the number
3. Under "Voice & Fax", set:
   - **A CALL COMES IN:** Webhook
   - **URL:** `https://optlghedswctsklcxlkn.supabase.co/functions/v1/call-tracking-voice-webhook`
   - **HTTP:** POST
4. Under "Call Status Changes", set:
   - **URL:** (leave blank for now)
5. Click **Save**

### Step 3: Add Numbers to AIMOS Database (5 min)

Run this SQL in Supabase SQL Editor:

```sql
-- Replace with your actual Twilio numbers
INSERT INTO call_tracking_numbers (e164, friendly_name, default_source_type, default_source_detail, active)
VALUES
  ('+17802501001', 'WCB Campaign', 'google_ads', 'WCB Search Campaign', true),
  ('+17802501002', 'MVA Campaign', 'google_ads', 'MVA Search Campaign', true),
  ('+17802501003', 'General Physio', 'google_ads', 'General Physio Campaign', true),
  ('+17802501004', 'Back/Neck Pain', 'google_ads', 'Back/Neck Pain Campaign', true)
ON CONFLICT (e164) DO UPDATE
SET friendly_name = EXCLUDED.friendly_name,
    default_source_type = EXCLUDED.default_source_type,
    default_source_detail = EXCLUDED.default_source_detail,
    active = EXCLUDED.active;
```

### Step 4: Add DNI JavaScript to Website (15 min)

1. **Get Supabase Anon Key:**
   - Go to Supabase → Settings → API
   - Copy **anon public** key

2. **Update call-tracking.js:**
   ```bash
   # Edit this file:
   /Users/orvilledavis/.openclaw/workspace/AIMnewAIwebsite/public/call-tracking.js
   
   # Replace line 14:
   supabaseAnonKey: 'YOUR_SUPABASE_ANON_KEY'
   # With your actual key
   ```

3. **Update tracking numbers in call-tracking.js** (lines 18-47):
   Replace placeholder numbers with your actual Twilio numbers

4. **Add script to website:**
   Edit `/Users/orvilledavis/.openclaw/workspace/AIMnewAIwebsite/app/layout.tsx`:

   ```tsx
   {/* Add before closing </body> tag */}
   <Script src="/call-tracking.js" strategy="afterInteractive" />
   ```

5. **Deploy to Vercel:**
   ```bash
   cd /Users/orvilledavis/.openclaw/workspace/AIMnewAIwebsite
   git add .
   git commit -m "Add call tracking DNI script"
   git push
   ```

### Step 5: Set Up Google Ads API (30 min)

1. **Get Google Ads Developer Token:**
   - Go to [Google Ads API Center](https://ads.google.com/aw/apicenter)
   - Apply for developer token (usually approved instantly for existing accounts)
   - Copy your developer token

2. **Set Up OAuth2 Credentials:**
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create new project (or use existing)
   - Enable **Google Ads API**
   - Go to APIs & Services → Credentials
   - Create OAuth 2.0 Client ID (Desktop app)
   - Download JSON credentials

3. **Get Refresh Token:**
   ```bash
   # Use Google's OAuth2 Playground
   # https://developers.google.com/oauthplayground/
   
   # Or run this script (coming next)
   ```

4. **Add Environment Variables to Supabase:**
   - Go to Supabase → Settings → Edge Functions → Environment Variables
   - Add these:
   ```
   GOOGLE_ADS_DEVELOPER_TOKEN=YOUR_DEVELOPER_TOKEN
   GOOGLE_ADS_CLIENT_ID=YOUR_CLIENT_ID
   GOOGLE_ADS_CLIENT_SECRET=YOUR_CLIENT_SECRET
   GOOGLE_ADS_REFRESH_TOKEN=YOUR_REFRESH_TOKEN
   GOOGLE_ADS_CUSTOMER_ID=6741184707
   GOOGLE_ADS_CONVERSION_ACTION_ID=YOUR_CONVERSION_ACTION_ID
   ```

5. **Create Conversion Action in Google Ads:**
   - Go to Google Ads → Tools → Conversions
   - Click **+ New Conversion Action**
   - Select **Import** → **Other data sources** → **Track conversions from clicks**
   - Name: "Phone Call - Booked"
   - Category: "Submit lead form"
   - Value: $350
   - Count: One
   - Click-through conversion window: 30 days
   - Save and copy the **Conversion Action ID** (last part of URL)

### Step 6: Deploy Edge Functions (10 min)

```bash
cd /Users/orvilledavis/.openclaw/workspace/AIMOS

# Deploy Twilio webhook (already exists, but redeploy to ensure latest)
supabase functions deploy call-tracking-voice-webhook

# Deploy Google Ads conversion function
supabase functions deploy google-ads-conversion

# Set environment variables (repeat for all vars from Step 5)
supabase secrets set GOOGLE_ADS_DEVELOPER_TOKEN=YOUR_TOKEN
supabase secrets set TWILIO_FORWARD_TO_E164=+17802508188
```

### Step 7: Apply Database Migration (5 min)

```bash
cd /Users/orvilledavis/.openclaw/workspace/AIMOS
supabase db push
```

This will create the Google Ads conversion trigger.

### Step 8: Configure Database Settings (2 min)

Run this in Supabase SQL Editor:

```sql
-- Set Edge Function URL for triggers
ALTER DATABASE postgres SET app.settings.supabase_url = 'https://optlghedswctsklcxlkn.supabase.co';

-- Set service role key (get from Supabase → Settings → API)
ALTER DATABASE postgres SET app.settings.service_role_key = 'YOUR_SERVICE_ROLE_KEY';
```

---

## 🧪 Testing

### Test 1: DNI Script

1. Visit `https://aimphysiotherapy.ca/?utm_source=google&utm_medium=cpc&utm_campaign=test&gclid=test123`
2. Check browser console - should see:
   ```
   [AIM Call Tracking] Initializing...
   [AIM Call Tracking] Source type: google_ads
   [AIM Call Tracking] Session created: sess_xxxxx
   [AIM Call Tracking] Replaced phone numbers with: +1 (780) 250-1001
   ```
3. Phone numbers on page should be swapped to tracking number

### Test 2: Call Flow

1. Call one of your Twilio tracking numbers
2. Should immediately forward to +17802508188 (main clinic number)
3. Check Supabase → call_tracking_calls table - should see new row with:
   - `twilio_call_sid`
   - `from_number` (your test phone)
   - `to_number` (Twilio tracking number)
   - `source_type: 'google_ads'`
   - `gclid: 'test123'` (if you used test URL above)

### Test 3: Google Ads Conversion

1. Find a call in call_tracking_calls with a real GCLID
2. Update outcome:
   ```sql
   UPDATE call_tracking_calls
   SET outcome = 'booked',
       outcome_tagged_at = now()
   WHERE id = 'YOUR_CALL_ID';
   ```
3. Check Edge Function logs:
   - Go to Supabase → Edge Functions → google-ads-conversion → Logs
   - Should see: "Conversion uploaded successfully"
4. Check Google Ads → Tools → Conversions
   - Should see new conversion within 3-6 hours

---

## 📊 Using the System

### Daily Workflow

1. **Receptionist answers calls** (no change - phone rings normally)
2. **After call, tag outcome in AIMOS:**
   - Go to AIMOS → Call Tracking
   - Find the call
   - Select outcome: "booked", "callback", "no_answer", etc.
3. **System automatically:**
   - Sends conversion to Google Ads (if booked + has GCLID)
   - Links call to CRM lead
   - Updates attribution reports

### Viewing Reports

**In AIMOS:**
- Dashboard → Call Tracking
- Filter by campaign/source
- See which campaigns drive calls
- See booking conversion rate per campaign

**In Google Ads:**
- Campaigns → View "Phone Calls" column
- Attribution shows which keywords drove calls
- Optimize based on actual phone conversions

---

## 💰 Cost Summary

- **Twilio:** $4/month (4 phone numbers)
- **Call minutes:** ~$0.01/min (forwarding cost)
- **Expected:** ~$10-15/month total for call tracking

**ROI:** Know which $120/day ad spend is driving actual bookings vs wasted

---

## 🆘 Troubleshooting

### Calls Not Logging in Database

- Check Twilio webhook URL is correct
- Check Edge Function logs for errors
- Verify Supabase environment variables are set

### Phone Numbers Not Swapping

- Check browser console for JavaScript errors
- Verify Supabase anon key is set correctly
- Check call-tracking.js is loading (Network tab)

### Conversions Not Uploading to Google Ads

- Check Edge Function logs
- Verify Google Ads API credentials
- Check conversion action ID is correct
- Ensure calls have GCLID (Google Ads traffic only)

---

## 📞 Next Steps

1. ☐ Buy Twilio numbers (Step 1)
2. ☐ Configure webhooks (Step 2)
3. ☐ Add numbers to database (Step 3)
4. ☐ Deploy DNI script (Step 4)
5. ☐ Set up Google Ads API (Step 5)
6. ☐ Deploy Edge Functions (Step 6)
7. ☐ Test end-to-end (Testing section)
8. ☐ Train receptionist on outcome tagging

**Total setup time:** ~90 minutes  
**Monthly cost:** ~$10-15  
**Value:** Know exactly which Google Ads campaigns drive real bookings
