# AIM Google Ads Campaign - Manual Upload Guide

**Status:** API upload blocked (customer account not accessible with test developer token)  
**Solution:** Manual upload via Google Ads Editor or web interface  
**Time Required:** 15-20 minutes

---

## Campaign Ready to Upload

**File:** `/Users/orvilledavis/.openclaw/workspace/AIM_SEARCH_CAMPAIGN_REBUILD_FEB2026.csv`

**Campaign Details:**
- **Name:** AIM - Search - Physio Leads - Feb 2026
- **Type:** Search (NOT Performance Max)
- **Budget:** $75/day
- **Location:** Edmonton + 25km radius (St. Albert, Sherwood Park, Leduc)
- **Keywords:** 18 high-intent (physiotherapy, WCB, MVA, injury treatment)
- **Ads:** 12 responsive search ads across 4 ad groups

---

## Option 1: Upload via Google Ads Editor (RECOMMENDED)

### Step 1: Install Google Ads Editor
- Download: https://ads.google.com/home/tools/ads-editor/
- Install and sign in with: orvilledavis95@gmail.com
- Select account: 6741184707

### Step 2: Import CSV
1. Open Google Ads Editor
2. Click **Account** → **Import** → **From file**
3. Select: `AIM_SEARCH_CAMPAIGN_REBUILD_FEB2026.csv`
4. Choose format: **CSV**
5. Click **Import**

### Step 3: Review Campaign
- Check campaign settings (budget, location, etc.)
- Review ad groups and keywords
- Verify ads look correct

### Step 4: Post to Google Ads
1. Click **Post** button (top right)
2. Review changes
3. Click **Post** to upload to Google Ads

**Done!** Campaign should be live within 5-10 minutes.

---

## Option 2: Manual Creation (Web Interface)

If CSV import doesn't work, create manually:

### Campaign Settings
```
Campaign Name: AIM - Search - Physio Leads - Feb 2026
Campaign Type: Search
Budget: $75/day
Bid Strategy: Maximize Conversions (or Manual CPC if you prefer control)
Location: Edmonton + 25km radius
Language: English
Networks: Google Search (uncheck Display Network)
Start Date: Immediately
```

### Ad Groups & Keywords

**Ad Group 1: Injury Treatment**
Keywords (Broad Match Modified):
- physiotherapy edmonton
- injury treatment edmonton
- sports injury clinic edmonton
- pain relief edmonton
- physiotherapist near me

Bid: $3-5 per click

**Ad Group 2: WCB/MVA**
Keywords (Phrase Match):
- "WCB physiotherapy"
- "motor vehicle accident physiotherapy"
- "WCB physio Edmonton"
- "MVA treatment Edmonton"

Bid: $4-6 per click (higher intent)

**Ad Group 3: Sports Physio**
Keywords:
- sports physiotherapy edmonton
- sports injury clinic
- athletic therapy edmonton
- running injury treatment

Bid: $3-5 per click

**Ad Group 4: Massage Therapy**
Keywords:
- massage therapy edmonton
- registered massage therapist
- therapeutic massage edmonton

Bid: $2-4 per click

### Responsive Search Ads (Use for All Ad Groups)

**Ad 1:**
- Headline 1: Fast Pain Relief in Edmonton
- Headline 2: Book Your Assessment Today
- Headline 3: Direct WCB & MVA Billing
- Description 1: Expert physiotherapy for injuries, pain, and recovery. Same/next-day appointments available.
- Description 2: Experienced team. Insurance accepted. Call now or book online.
- Final URL: https://aimphysiotherapy.ca

**Ad 2:**
- Headline 1: Edmonton Physiotherapy Clinic
- Headline 2: WCB & Insurance Direct Billing
- Headline 3: Get Back to What You Love
- Description 1: Specialized injury treatment and pain management. Fast access to care.
- Description 2: 4.9★ rating. Professional team. Book your appointment today.
- Final URL: https://aimphysiotherapy.ca

**Ad 3:**
- Headline 1: Injury & Pain Treatment
- Headline 2: Same-Day Appointments Available
- Headline 3: Alberta Injury Management
- Description 1: Comprehensive physiotherapy services. WCB, MVA, and private insurance accepted.
- Description 2: Expert care in Edmonton. Call (780) 250-8188 or book online.
- Final URL: https://aimphysiotherapy.ca

*(Create 3-5 ads per ad group using variations of the above)*

---

## Step 5: Set Up Conversion Tracking

**CRITICAL:** Without conversion tracking, you can't measure ROI.

### Phone Call Conversions
1. Go to **Tools & Settings** → **Conversions**
2. Click **+ New Conversion Action**
3. Select **Phone calls**
4. Choose **Calls from ads using call extensions**
5. Set:
   - Conversion name: "Phone Calls"
   - Value: $50 (average patient value)
   - Count: One (don't count multiple calls from same person)
   - Click-through window: 30 days

### Website Form Conversions (if you add online booking)
1. Create conversion action for "Online Booking"
2. Install Google Ads conversion tag on confirmation page
3. Set value: $50

---

## Post-Launch Checklist (First 48 Hours)

- [ ] Verify ads are showing (search "physiotherapy edmonton" in Edmonton)
- [ ] Check Quality Score (should be 5-7 minimum)
- [ ] Monitor cost per click (should be $3-6 average)
- [ ] Track phone calls (manually log source of each call)
- [ ] Verify budget is spending (~$75/day)
- [ ] Check ad position (should be top 3 for most keywords)

---

## Troubleshooting

**If ads aren't showing:**
- Check campaign status (should be "Eligible")
- Verify billing is set up
- Check keyword status (should not be "Low search volume")
- Ensure budget isn't exhausted

**If CPC is too high (>$8):**
- Lower max CPC bids
- Add negative keywords (cheap, free, jobs, salary, school)
- Improve ad relevance (match ad copy to keywords)

**If no conversions after 7 days:**
- Verify phone number is correct in ads
- Check if conversion tracking is working
- Review call logs (are people actually calling?)
- Consider lowering bids to get more volume

---

## Next Steps After Campaign Launch

1. **Week 1:** Monitor daily, adjust bids, add negative keywords
2. **Week 2:** Scale budget if CPA <$50 ($75/day → $150/day)
3. **Week 3:** Add more ad groups (specific services, conditions)
4. **Week 4:** Test different ad copy, landing pages

---

## Need Help?

If you get stuck, here are the exact files:
- Campaign CSV: `/Users/orvilledavis/.openclaw/workspace/AIM_SEARCH_CAMPAIGN_REBUILD_FEB2026.csv`
- Detailed keyword list: `/Users/orvilledavis/.openclaw/workspace/aim_google_ads_keywords.csv`
- Ad copy templates: `/Users/orvilledavis/.openclaw/workspace/aim_google_ads_ads.csv`

Or contact Google Ads support: 1-866-246-6453 (they can help with CSV import)

---

**Once campaign is live, reply back and I'll start monitoring performance daily.**
