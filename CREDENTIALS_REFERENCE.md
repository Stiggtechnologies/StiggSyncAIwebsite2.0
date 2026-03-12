# API Credentials Reference

**Location:** `/Users/orvilledavis/.openclaw/workspace/.credentials-vault.env`

## Quick Access by Service

### For SyncAI Production Deployment

**OpenAI (use Axium primary):**
```bash
OPENAI_API_KEY_AXIUM
```

**Stripe (Stigg Technologies - use test for now):**
```bash
STRIPE_PUBLISHABLE_KEY_TEST
STRIPE_SECRET_KEY_TEST
```

**Twilio:**
```bash
TWILIO_API_KEY
```

### For Other Projects

**AIM OS / AIMOS:**
- `OPENAI_API_KEY_AIMOS`
- `OPENAI_API_KEY_AIMOS_ALT`

**CI/Automation:**
- `OPENAI_API_KEY_CI`
- `DEEPSEEK_API_KEY_CI`

**Security/Compliance:**
- `OPENAI_API_KEY_STIGG_SECURITY`
- `OPENAI_API_KEY_STIGG_RE`

**Alternative LLM Providers:**
- `DEEPSEEK_API_KEY` (primary)
- `ANTHROPIC_API_KEY_AXIUM` (Claude)
- `MOONSHOT_API_KEY` (Kimi K2.5)

**Other Services:**
- `GOOGLE_API_KEY`
- `PINECONE_API_KEY`
- `TELEGRAM_BOT_TOKEN_AXIUM`
- `TWITTER_API_KEY` / `TWITTER_API_KEY_SECRET`
- `GODADDY_API_KEY` / `GODADDY_API_SECRET`

## Security Notes

✅ **Secured:**
- File stored at `.credentials-vault.env`
- Added to `.gitignore`
- File permissions set to 600 (owner read/write only)

⚠️ **Best Practices:**
- Never commit credentials to git
- Rotate keys if exposed
- Use test keys for development
- Use production keys only in production environments
- Monitor API usage for anomalies

## Usage in Projects

**For SyncAI Supabase Edge Functions:**
```bash
# Set secrets in Supabase dashboard
supabase secrets set OPENAI_API_KEY="[from .credentials-vault.env]"
supabase secrets set STRIPE_SECRET_KEY="[from .credentials-vault.env]"
```

**For local development:**
```bash
# Source the credentials
source /Users/orvilledavis/.openclaw/workspace/.credentials-vault.env
```

**For Vercel deployment:**
Add via Vercel dashboard → Project Settings → Environment Variables

---

**Last Updated:** 2026-02-23 00:38 MST  
**Managed By:** Axium
