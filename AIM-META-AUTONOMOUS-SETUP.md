# AIM Meta Ads - Autonomous Setup Guide

## Quick Start (5 minutes to autonomy)

### Step 1: Get Facebook Access Token

**Option A: Quick Token (Expires in 1 hour)**
1. Go to: https://developers.facebook.com/tools/explorer/
2. Select app: "Alberta Injury Management" (or create new)
3. Select permissions:
   - `ads_management`
   - `ads_read`
   - `pages_read_engagement`
4. Click "Generate Access Token"
5. Copy the token

**Option B: Permanent Token (Recommended)**
1. Go to: https://business.facebook.com/settings/system-users
2. Click "Add" to create System User
3. Name: "AIM_Automation"
4. Role: Admin
5. Click "Generate Token"
6. Select: `ads_management`, `ads_read`
7. Copy token (this never expires)

### Step 2: Set Token

**Option A: Environment Variable**
```bash
export FACEBOOK_ACCESS_TOKEN="your_token_here"
```

**Option B: Save to File**
```bash
echo "your_token_here" > ~/.openclaw/facebook_access_token
```

### Step 3: Run Autonomous Setup

```bash
cd /Users/orvilledavis/.openclaw/workspace
python3 aim_meta_autonomous.py --create-campaign --token="your_token"
```

This creates:
- ✅ Campaign: "AIM - Lead Generation - Autonomous"
- ✅ 3 Ad Sets (Physio, MVA, WCB)
- ✅ 5 Ads with compliant copy
- ✅ Automated rules (pause if CPL >$50)

### Step 4: Upload Images (Manual - 2 minutes)

1. Go to: https://adsmanager.facebook.com
2. Find your campaign
3. Edit each ad
4. Upload corresponding image:
   - `ad-1-professional-treatment.jpg`
   - `ad-2-wcb-care.jpg`
   - `ad-3-recovery-success.jpg`
   - `ad-4-mva-focus.jpg`
   - `ad-5-team-trust.jpg`

### Step 5: Activate

1. Toggle campaign from PAUSED to ACTIVE
2. Campaign is LIVE and autonomous

## Ongoing Autonomous Management

### Daily Optimization (Auto-runs)
```bash
python3 aim_meta_autonomous.py --optimize
```

This automatically:
- Checks CPL for all ad sets
- Pauses underperformers (CPL >$50)
- Scales winners (CPL <$25)
- Sends alerts

### Weekly Report
```bash
python3 aim_meta_autonomous.py --report
```

Shows:
- Total spend
- Leads generated
- Cost per lead
- ROI calculation
- Recommendations

### Monthly Budget Recalculation

Script auto-calculates based on revenue:
```python
new_budget = previous_month_revenue * 0.05 / 30
total_ad_budget = new_budget
meta_budget = total_ad_budget * 0.40  # 40% to Meta
google_budget = total_ad_budget * 0.60  # 60% to Google
```

## Troubleshooting

### "Invalid token"
- Token expired? Generate new one
- Wrong permissions? Re-check permission list

### "Campaign not created"
- Check Business Manager ID: 26135103912809982
- Verify ad account ID is correct

### "Images not uploading"
- API requires separate image upload endpoint
- Use manual upload for now, or add image upload function to script

## Full Autonomy Achieved

Once set up, the system runs without you:
- ✅ Creates campaigns
- ✅ Monitors performance  
- ✅ Pauses losers
- ✅ Scales winners
- ✅ Reports daily
- ✅ Recalculates monthly budget

**You only intervene for:**
- Creative refreshes (every 2-3 weeks)
- Strategy changes
- Major budget increases

## Files

- `aim_meta_autonomous.py` - Main automation script
- `aim-meta-ads-creative/` - 5 image assets
- This guide

## Support

If issues arise, check:
1. Token validity: https://developers.facebook.com/tools/debug/accesstoken/
2. API status: https://developers.facebook.com/status/
3. Campaign in Ads Manager directly
