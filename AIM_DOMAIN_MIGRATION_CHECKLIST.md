# AIM Domain Migration - Action Checklist

**Domain:** albertainjurymanagement.ca → aimphysiotherapy.ca  
**Status:** 🟡 ON HOLD - SSL provisioning for new domain  
**SEO Authority:** HIGH VALUE ($10k-20k to rebuild)  
**Priority:** MEDIUM (not urgent but important)

---

## ⚠️ CRITICAL: DO NOT CUT OVER UNTIL

✅ **aimphysiotherapy.ca SSL certificate active and verified**

Check SSL status:
```bash
curl -I https://aimphysiotherapy.ca 2>&1 | grep -i "SSL\|certificate"
```

Expected: Valid SSL certificate from Let's Encrypt or similar CA

---

## 📋 Pre-Migration Checklist

### 1. Verify GA4 Traffic Data ⏳
**Action:** Access Google Analytics to understand current traffic patterns

```bash
# GA4 Property ID: G-RNHNF423CW
```

**Steps:**
1. Login to Google Analytics: https://analytics.google.com/
2. Select property: G-RNHNF423CW
3. Check last 90 days traffic:
   - Total users
   - Top landing pages
   - Traffic sources (organic, direct, referral)
   - Conversion events
4. Export data for baseline comparison

**Why:** Need baseline metrics to verify migration success

---

### 2. Check Google Search Console Rankings ⏳
**Action:** Verify current keyword rankings and index status

**Steps:**
1. Login to Google Search Console: https://search.google.com/search-console
2. Select property: albertainjurymanagement.ca
3. Performance report (last 90 days):
   - Top queries (keywords)
   - Average position
   - Click-through rate
   - Impressions
4. Coverage report:
   - Indexed pages (should be ~30)
   - Any errors or warnings
5. Export CSV of top 50 keywords

**Key URLs to verify:**
- /physiotherapy-edmonton/
- /pain-management-treatment-edmonton/
- /sports-physiotherapy-edmonton/
- /concussion-treatment-edmonton/
- /mva-physiotherapy-edmonton/

**Why:** Need to preserve rankings for high-value keywords

---

### 3. Create 301 Redirect Mapping ⏳
**Action:** Map all 30 pages from old domain to new domain

**Method:** Create spreadsheet with columns:
- Old URL (albertainjurymanagement.ca)
- New URL (aimphysiotherapy.ca)
- Priority (High/Medium/Low based on traffic)

**Example Mapping:**
```
Old: https://albertainjurymanagement.ca/physiotherapy-edmonton/
New: https://aimphysiotherapy.ca/services/physiotherapy/
Priority: HIGH (1,900 monthly searches)

Old: https://albertainjurymanagement.ca/pain-management-treatment-edmonton/
New: https://aimphysiotherapy.ca/services/pain-management/
Priority: HIGH (590 monthly searches)

Old: https://albertainjurymanagement.ca/sports-physiotherapy-edmonton/
New: https://aimphysiotherapy.ca/services/sports-physiotherapy/
Priority: HIGH (720 monthly searches)

... [map all 30 pages]
```

**Tool:** Use Screaming Frog or manual sitemap review to get all URLs

**Deliverable:** CSV file with complete mapping

**Why:** 301 redirects preserve SEO authority and prevent 404 errors

---

### 4. Configure WordPress Redirection Plugin ⏳
**Action:** Implement 301 redirects using Redirection plugin

**Steps:**
1. Login to WordPress admin: albertainjurymanagement.ca/wp-admin
2. Install plugin: **Redirection** by John Godley
3. Activate plugin
4. Tools → Redirection
5. Import CSV redirect mapping (from step 3)
6. Or add manually:
   - Source URL: `/physiotherapy-edmonton/`
   - Target URL: `https://aimphysiotherapy.ca/services/physiotherapy/`
   - Redirect Type: 301 Moved Permanently
7. Test each redirect:
   ```bash
   curl -I https://albertainjurymanagement.ca/physiotherapy-edmonton/
   # Should return: HTTP/1.1 301 Moved Permanently
   # Location: https://aimphysiotherapy.ca/services/physiotherapy/
   ```

**Why:** Automatic redirect prevents traffic loss

---

### 5. Set Domain Expiration Monitoring ⏳
**Action:** Ensure domain doesn't expire accidentally

**Registrar:** Namespro Solutions Inc. (NOT GoDaddy)  
**Current Expiration:** February 2028 (2+ years remaining)

**Steps:**
1. Login to Namespro account
2. Verify billing information current
3. Enable auto-renewal (if available)
4. Set calendar reminders:
   - 6 months before expiration (Aug 2027)
   - 3 months before expiration (Nov 2027)
   - 1 month before expiration (Jan 2028)
5. Add backup payment method
6. Document login credentials securely

**Cost:** ~$15/year (worth it for $10k-20k SEO authority)

**Why:** Losing the domain = losing all SEO authority permanently

---

## 🚀 Migration Day Checklist (When SSL Active)

### Pre-Cutover (Morning of Migration)
- [ ] Backup WordPress site completely
- [ ] Export GA4 data (last 90 days baseline)
- [ ] Export Search Console data
- [ ] Verify all 301 redirects working on old domain
- [ ] Take screenshots of Google rankings
- [ ] Notify team of migration window

### During Cutover (30-60 minutes)
- [ ] Verify aimphysiotherapy.ca SSL active
- [ ] Update DNS if needed
- [ ] Test new site thoroughly
- [ ] Submit sitemap to Google Search Console (new property)
- [ ] Use "Change of Address" tool in Search Console
- [ ] Update Google My Business listing
- [ ] Update GA4 data stream
- [ ] Test 301 redirects from old to new domain

### Post-Cutover Monitoring (First 30 Days)
- [ ] Monitor Google Analytics daily (first week)
- [ ] Check Search Console for 404 errors
- [ ] Monitor keyword rankings weekly
- [ ] Track organic traffic trends
- [ ] Fix any broken redirects immediately
- [ ] Watch for indexing issues

---

## 📊 Success Metrics

**Short-term (0-7 days):**
- 301 redirects working: 100%
- No 404 errors
- GA4 traffic continues (may dip 10-20% temporarily)

**Medium-term (7-30 days):**
- Traffic returns to baseline
- New domain indexed by Google
- Rankings stabilize or improve
- No penalties or warnings

**Long-term (30-90 days):**
- Rankings equal or better than before
- Organic traffic equal or better
- New domain established as authoritative

---

## 🚨 Rollback Plan

If migration causes issues:

**Immediate Rollback (0-24 hours):**
1. Revert DNS changes
2. Point traffic back to albertainjurymanagement.ca
3. Remove "Change of Address" from Search Console
4. Monitor for recovery

**Partial Rollback (24-72 hours):**
1. Keep 301 redirects active
2. Run both domains in parallel
3. Investigate and fix issues
4. Re-attempt migration when ready

**Criteria for Rollback:**
- >50% traffic drop that doesn't recover in 48 hours
- Critical rankings lost (position drops >10)
- Indexing errors or penalties
- Site functionality broken

---

## 📝 Notes

**Why Keep Old Domain Forever?**
- Cost: $15/year
- Value: $10k-20k in SEO authority
- Insurance: Prevents competitors from buying it
- 301 redirects: Need to stay active long-term

**Alternative Approach:**
Run both domains in parallel for 90 days before full cutover.

---

## ⏭️ Next Steps

1. **Immediate:** Check SSL status of aimphysiotherapy.ca
2. **This Week:** Complete steps 1-5 above
3. **When SSL Active:** Schedule migration day
4. **Post-Migration:** Monitor closely for 30 days

---

**Priority:** MEDIUM (important but not urgent)  
**Risk Level:** MEDIUM (can lose SEO authority if done wrong)  
**Time Investment:** 4-6 hours total  
**ROI:** Preserves $10k-20k in SEO value  

**Created:** 2026-02-20 17:35 MST  
**Owner:** Axium
