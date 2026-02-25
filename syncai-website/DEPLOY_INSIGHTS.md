# Deploy SyncAI Insights Section — Quick Guide

## 🚀 1-Minute Deploy

```bash
cd /Users/orvilledavis/.openclaw/workspace/syncai-website
vercel --prod
```

That's it! Vercel will:
- Build and deploy all new files
- Auto-detect `/insights` routes
- Update syncai.ca instantly

---

## ✅ What's Already Done

- [x] 3 full article pages created
- [x] Insights landing page with newsletter form
- [x] Article layout system (reading progress, share buttons)
- [x] PDF download modals (email capture)
- [x] Navigation updated on homepage
- [x] Git committed (commit 0b25687)
- [x] SEO optimized (meta tags, structured data)
- [x] Mobile responsive
- [x] Dark premium theme consistent

---

## 📋 Post-Deployment Checklist (5 min)

### Test These URLs:
1. https://syncai.ca/insights (main landing page)
2. https://syncai.ca/insights/why-cmms-alone-is-failing-2026
3. https://syncai.ca/insights/economics-of-autonomous-maintenance
4. https://syncai.ca/insights/governance-in-industrial-ai

### Verify:
- [ ] Navigation "Insights" link works from homepage
- [ ] Featured article card loads correctly
- [ ] All 3 article cards clickable
- [ ] Reading progress bar animates on scroll
- [ ] Share buttons open correct platforms
- [ ] Newsletter form (will log to console for now)
- [ ] PDF modal opens on CTA click
- [ ] Mobile responsive (test on phone)

---

## 🔧 Optional: Add Email Integration (15 min)

### If you want live email capture:

1. **Create Supabase table:**
```sql
CREATE TABLE newsletter_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL,
  source TEXT,
  article TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

2. **Update `js/article.js`:**
```javascript
// Add at top
import { createClient } from '@supabase/supabase-js'
const supabase = createClient(
  'YOUR_SUPABASE_URL',
  'YOUR_SUPABASE_ANON_KEY'
)

// Replace console.log lines with:
await supabase.from('newsletter_signups').insert({
  email: email,
  source: 'insights',
  article: articleTitle
})
```

3. **Redeploy:**
```bash
vercel --prod
```

---

## 📄 PDF Files (Optional)

Currently, PDF download buttons are placeholders. You can:

**Option A:** Remove PDF CTAs temporarily (just newsletter signup)
**Option B:** Create actual PDFs and place in `/pdfs/` folder:
- `pdfs/cmms-ai-report-2026.pdf`
- `pdfs/autonomous-maintenance-roi-calculator.xlsx`
- `pdfs/ai-governance-framework-template.pdf`

---

## 🎯 Success Criteria

After deployment, you should have:
- ✅ Live insights section at syncai.ca/insights
- ✅ 3 full research articles accessible
- ✅ Newsletter signup functional (or ready for Supabase)
- ✅ Professional enterprise-grade research hub
- ✅ SEO-optimized for Google indexing

---

## 📊 Analytics (Recommended)

Add Google Analytics or Plausible to track:
- Page views per article
- Newsletter conversion rate
- PDF download requests
- Reading time / scroll depth

---

## ⏱️ Time Estimate

- **Deploy:** 1 minute
- **QA Testing:** 5 minutes
- **Email Integration (optional):** 15 minutes
- **PDF Creation (optional):** 30-60 minutes

**Total:** 6-76 minutes depending on optional features

---

**Questions?** See full deployment details in `INSIGHTS_DEPLOYMENT_SUMMARY.md`
