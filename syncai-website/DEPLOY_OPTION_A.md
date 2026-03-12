# SyncAI Website — Option A Deployment Guide

**Status:** ✅ Ready to deploy  
**Architecture:** Static HTML + Supabase  
**Time to production:** 10-15 minutes

---

## What's Included

### Pages
- ✅ `/insights` — Insights hub with 3 article cards
- ✅ `/insights/why-cmms-alone-is-failing-2026` — Full article
- ✅ `/insights/economics-of-autonomous-maintenance` — Full article  
- ✅ `/insights/governance-in-industrial-ai` — Full article
- ✅ `/investors` — Investor narrative page
- ✅ `/` — Homepage (with Insights nav link)

### Features
- ✅ Gated PDF downloads (email capture)
- ✅ Newsletter signup forms
- ✅ Supabase email storage
- ✅ Reading progress bars
- ✅ Share buttons (Twitter, LinkedIn, copy link)
- ✅ SEO optimized (meta tags + schema.org)
- ✅ Mobile responsive
- ✅ Dark premium industrial theme

### Assets
- ✅ 3 PDF whitepapers (385-422 KB each)
- ✅ Supabase integration ready
- ✅ SQL migration script included

---

## Pre-Deployment Setup (5 minutes)

### 1. Create Supabase Table

**Login to Supabase Dashboard:**
https://app.supabase.com/project/dguwgnxjdivsrekjarlp/editor

**Run SQL migration:**
1. Go to SQL Editor
2. Open file: `supabase-migration.sql`
3. Copy entire contents
4. Paste into SQL Editor
5. Click "Run"

**Verify table created:**
```sql
SELECT * FROM newsletter_signups LIMIT 1;
```

---

## Deployment (1 minute)

### Deploy to Vercel Production

```bash
cd /Users/orvilledavis/.openclaw/workspace/syncai-website
vercel --prod
```

**That's it.** Vercel will:
- Build and deploy all files
- Auto-detect routes
- Update syncai.ca instantly

---

## Post-Deployment Testing (5 minutes)

### Test URLs
1. https://syncai.ca/insights
2. https://syncai.ca/insights/why-cmms-alone-is-failing-2026
3. https://syncai.ca/insights/economics-of-autonomous-maintenance
4. https://syncai.ca/insights/governance-in-industrial-ai
5. https://syncai.ca/investors

### Test Features
- [ ] Click "Download PDF" button → Modal opens
- [ ] Enter email → Submit → PDF downloads
- [ ] Check Supabase table: `SELECT * FROM newsletter_signups ORDER BY created_at DESC LIMIT 5;`
- [ ] Newsletter form on /insights → Submit → Email stored
- [ ] Share buttons work (Twitter, LinkedIn, copy)
- [ ] Reading progress bar animates on scroll
- [ ] Mobile responsive (test on phone)

---

## Email Capture Verification

**Check Supabase for new signups:**

```sql
-- All signups
SELECT email, source, article, created_at 
FROM newsletter_signups 
ORDER BY created_at DESC 
LIMIT 20;

-- PDF downloads only
SELECT email, article, created_at 
FROM newsletter_signups 
WHERE source LIKE 'pdf:%' 
ORDER BY created_at DESC;

-- Newsletter signups only
SELECT email, created_at 
FROM newsletter_signups 
WHERE source = 'insights' 
ORDER BY created_at DESC;
```

---

## Troubleshooting

### Supabase not working?

**Symptom:** Email capture shows "Supabase not loaded" in console

**Solution:** Add Supabase CDN to HTML pages (already included in article pages, but verify):

```html
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script src="js/supabase-config.js"></script>
```

**Verify credentials:**
- URL: `https://dguwgnxjdivsrekjarlp.supabase.co`
- Anon Key: Check `js/supabase-config.js`

### PDFs not downloading?

**Check file exists:**
```bash
ls -lh pdfs/
# Should show 3 files (385-422 KB each)
```

**Check PDF URLs in HTML:**
- `data-pdf-url="/pdfs/ai-readiness-assessment-2026.pdf"`
- `data-pdf-url="/pdfs/autonomous-maintenance-roi-model.pdf"`
- `data-pdf-url="/pdfs/ai-governance-framework-template.pdf"`

---

## Next Steps (Optional)

### Email Confirmation Sequence
Set up Supabase Edge Function to send confirmation emails:
- Use Resend, SendGrid, or Mailgun
- Trigger on `newsletter_signups` insert
- Send "Thank you" email with unsubscribe link

### Analytics
Add Google Analytics or Plausible:
```html
<!-- Add to <head> of all pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### SEO Verification
Test structured data:
- https://search.google.com/test/rich-results
- Paste article URL
- Verify Article schema detected

---

## Option B (Parked for Later)

**Next.js + MDX rebuild planned:**
- Component-based architecture
- Reusable KPI blocks
- Better content/code separation
- ~4-6 hours of work

**When to rebuild:**
- Need to add 10+ articles (content at scale)
- Want component library for consistency
- Need server-side rendering for SEO
- Want to integrate with CMS

**For now:** Ship Option A, iterate to Option B when needed.

---

## Summary

**Time Investment:**
- Supabase setup: 5 min
- Deployment: 1 min
- Testing: 5 min
- **Total: 11 minutes**

**What You Get:**
- Complete insights section (3 articles)
- Investor page
- Email capture infrastructure
- Gated PDF downloads
- SEO-optimized content
- Mobile-responsive design

**Status:** ✅ Production-ready  
**Next:** Run deployment command above

---

**Built by:** Axium  
**Date:** February 25, 2026 2:10 PM MST  
**Approach:** Option A (ship fast, iterate later)
