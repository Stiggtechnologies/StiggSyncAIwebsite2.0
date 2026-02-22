# Google Calendar OAuth Setup Guide

## Current Status
❌ **NOT CONFIGURED** - Google Calendar OAuth credentials missing

The calendar-morning-briefing cron job has been updated to work without direct calendar access, but full calendar integration requires OAuth setup.

## Why This Is Needed
- Automated calendar briefings
- Real-time meeting preparation
- Conflict detection
- Event creation/modification
- Meeting invite monitoring

## Setup Instructions

### Step 1: Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project: "OpenClaw Calendar Integration"
3. Enable Google Calendar API:
   - APIs & Services → Library
   - Search "Google Calendar API"
   - Click "Enable"

### Step 2: Create OAuth Credentials
1. Go to APIs & Services → Credentials
2. Click "Create Credentials" → "OAuth 2.0 Client ID"
3. Select Application Type: **Desktop app**
4. Name: "OpenClaw Calendar Client"
5. Download the JSON file → save as `google-calendar-credentials.json`

### Step 3: Generate Refresh Token
```bash
cd /Users/orvilledavis/.openclaw/workspace/skills/google-calendar

# Set credentials
export GOOGLE_CLIENT_ID="your-client-id-here"
export GOOGLE_CLIENT_SECRET="your-client-secret-here"

# Run auth flow
python3 -m google_calendar.auth
```

This will:
1. Open browser for authorization
2. Ask you to grant calendar access
3. Print a refresh token

### Step 4: Store Credentials in OpenClaw
```bash
# Store in OpenClaw secrets
openclaw secret set GOOGLE_CLIENT_ID "your-client-id-here"
openclaw secret set GOOGLE_CLIENT_SECRET "your-client-secret-here"
openclaw secret set GOOGLE_REFRESH_TOKEN "your-refresh-token-here"
openclaw secret set GOOGLE_CALENDAR_ID "primary"
```

### Step 5: Verify Setup
```bash
# Test calendar access
cd /Users/orvilledavis/.openclaw/workspace/skills/google-calendar
python3 google_calendar.py list --max 5
```

Expected output: List of your upcoming calendar events

### Step 6: Update Calendar Briefing Job
Once OAuth is configured, update the cron job to use the Google Calendar skill:

```bash
openclaw cron update ee53a12c-6198-40b8-a2f4-4f50d30e95a5 --patch '{
  "payload": {
    "kind": "agentTurn",
    "message": "Send Orville his daily morning briefing. Use Google Calendar skill to fetch today'\''s events. Include: 1) Today'\''s meetings with times and prep needed, 2) ACTION REQUIRED items from Gmail, 3) Upcoming deadlines in next 7 days, 4) Any conflicts or tight transitions.",
    "model": "moonshot/kimi-k2.5",
    "timeoutSeconds": 120
  }
}'
```

## Security Notes
- ✅ OAuth tokens are encrypted and stored securely
- ✅ Never commit credentials to git
- ✅ Tokens can be revoked at any time from Google Account settings
- ✅ Use least-privilege scopes (calendar.readonly for read-only access)

## Troubleshooting

### "Invalid credentials" error
- Verify client ID and secret are correct
- Check that Google Calendar API is enabled
- Regenerate refresh token

### "Token expired" error
- OpenClaw automatically refreshes tokens
- If issue persists, regenerate refresh token

### "Permission denied" error
- Verify OAuth consent screen is configured
- Check calendar sharing settings
- Ensure correct Google account is used

## Alternative: Service Account
For server-to-server access without user interaction:

1. Create service account in Google Cloud
2. Enable domain-wide delegation
3. Share calendar with service account email
4. Use service account credentials instead of OAuth

## Next Steps After Setup
1. Test calendar briefing job manually
2. Verify email-meeting-monitor integration
3. Enable pre-meeting reminder cron jobs
4. Set up calendar conflict detection

---

**Priority:** Medium  
**Estimated Setup Time:** 15 minutes  
**Last Updated:** 2026-02-20
