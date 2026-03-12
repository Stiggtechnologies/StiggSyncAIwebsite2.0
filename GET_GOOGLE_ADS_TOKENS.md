# Get Google Ads API Tokens

You need two tokens to use the Google Ads API:

## 1. Developer Token (One-time setup)

1. Go to: https://ads.google.com/aw/apicenter?ocid=6741184707
2. Click **API Center** in left menu (under Tools & Settings > Setup)
3. Click **Apply for access** (if you don't have a token yet)
4. Fill out the form - usually approved instantly for test access
5. Copy the Developer Token (looks like: `abcd1234EFGH5678-ijkl9012`)

**Paste it into `google-ads-config.yaml` where it says `INSERT_DEVELOPER_TOKEN_HERE`**

## 2. Refresh Token (One-time OAuth flow)

Run this command to generate your refresh token:

```bash
cd /Users/orvilledavis/.openclaw/workspace
node get-refresh-token.js
```

This will:
1. Open your browser to Google OAuth consent
2. You'll approve access to Google Ads API
3. It will print your refresh token
4. Copy the refresh token into `google-ads-config.yaml` where it says `INSERT_REFRESH_TOKEN_HERE`

## 3. Run the setup

Once both tokens are in `google-ads-config.yaml`:

```bash
node setup-aim-ads.js
```

This will create:
- 4 ad groups (WCB Work Injury, WCB Employer, MVA, Physiotherapy Edmonton)
- 15 keywords across all groups
- 9 responsive search ads (3 per ad group)

**Total time: ~10 seconds**

---

## Troubleshooting

**"Developer token not found"**: You need to apply at API Center (link above)

**"Invalid refresh token"**: Re-run `get-refresh-token.js` 

**"Customer not found"**: Customer ID is correct (6741184707)

**"Campaign not found"**: Campaign ID is correct (23589699257)
