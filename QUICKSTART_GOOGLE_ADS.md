# Google Ads API Setup - Quick Start

## What This Does

Automatically creates your complete Google Ads campaign:
- ✅ 4 ad groups with specific bids
- ✅ 15 targeted keywords  
- ✅ 9 responsive search ads (3 per group)

**Total setup time: ~5 minutes**

---

## Step 1: Get Developer Token

1. Visit: https://ads.google.com/aw/apicenter?ocid=6741184707
2. Click **Apply for access** under "API Center"
3. Fill out form → Usually approved instantly for test access
4. Copy the Developer Token

**Paste it into `google-ads-config.yaml` line 2**

---

## Step 2: Generate Refresh Token

```bash
cd /Users/orvilledavis/.openclaw/workspace
node get-refresh-token.js
```

This will:
- Open your browser for Google OAuth
- Approve access
- Auto-save the refresh token to `google-ads-config.yaml`

---

## Step 3: Run Setup

```bash
node setup-aim-ads.js
```

Watch it create:
- WCB Work Injury ad group ($4.50 bid)
- WCB Employer ad group ($3.50 bid)  
- MVA ad group ($5.00 bid)
- Physiotherapy Edmonton ad group ($4.00 bid)

Each with keywords and 3 responsive search ads.

**Done in ~10 seconds.**

---

## What Gets Created

### Ad Groups & Keywords:
1. **WCB Work Injury** - 3 keywords (wcb physiotherapy, injury clinic, etc.)
2. **WCB Employer** - 2 keywords (approved physio, employer injury mgmt)
3. **MVA** - 3 keywords (mva treatment, car accident clinic, etc.)
4. **Physiotherapy Edmonton** - 7 keywords (physio edmonton, sports injury, etc.)

### Responsive Search Ads:
- 10 rotating headlines (Expert Injury Treatment, WCB Specialists, etc.)
- 4 rotating descriptions (optimized for conversions)
- Final URL: albertainjurymanagement.ca
- Display paths: /edmonton/injury-care

---

## Files:
- `google-ads-config.yaml` - Your credentials
- `get-refresh-token.js` - OAuth helper
- `setup-aim-ads.js` - Main setup script
- `GET_GOOGLE_ADS_TOKENS.md` - Detailed troubleshooting

**Questions?** Run the script and check the output.
