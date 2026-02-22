# Facebook Ads Manager - Complete Upload Instructions

**Time Required:** 30-45 minutes (including A/B test setup)  
**Campaign ID:** 120245467482170492  
**Total Budget:** $66/day  
**Date:** 2026-02-20

---

## ⚠️ IMPORTANT: Before You Start

1. **Get Facebook Pixel ID:**
   - Business Settings → Data Sources → Pixels
   - Copy Pixel ID
   - Install tracking code from `tracking-code.html`

2. **Verify Domain:**
   - Ensure aimphysiotherapy.ca is verified in Business Manager

3. **Have Ready:**
   - All 5 ad creative images (in this folder)
   - UTM-tagged URLs (from `utm-tagged-urls.md`)
   - Ad copy (provided below)

---

## 📋 Step-by-Step Upload Process

### Step 1: Access Campaign (2 min)

1. Go to: https://business.facebook.com/adsmanager
2. Find campaign: **"AIM - Lead Generation"**
3. Campaign ID: 120245467482170492
4. Click into campaign

---

### Step 2: Verify Ad Account Settings (3 min)

1. **Currency:** CAD (Canadian Dollars)
2. **Time Zone:** America/Edmonton (MST)
3. **Billing:** Verify payment method added

---

### Step 3: Upload Ad Creatives (10 min)

#### Ad Set 1.1: Physiotherapy - Edmonton North ($24/day total)

**Ad 1A: Professional Treatment - Pain Point**
- Click "Create Ad"
- **Ad Name:** "Physio-North-PainPoint-A"
- **Format:** Single Image
- **Upload Image:** `ad-1-professional-treatment.jpg`
- **Primary Text:**
  ```
  Struggling with chronic pain? Don't let it control your life.
  
  ✅ Same-day appointments available
  ✅ Direct WCB billing
  ✅ No referral needed
  
  Book your FREE assessment today and start your recovery journey.
  Call 780-250-8188 or click to book online.
  ```
- **Headline:** Struggling with chronic pain?
- **Description:** Book your FREE assessment today
- **Call-to-Action Button:** Book Now
- **Website URL:** `https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad1-painpoint&utm_term=physiotherapy-edmonton`
- **Display URL:** aimphysiotherapy.ca
- **Budget:** $12/day
- Click "Publish"

**Ad 1B: Professional Treatment - Benefits**
- Duplicate Ad 1A
- **Ad Name:** "Physio-North-Benefits-B"
- **Primary Text:**
  ```
  Get Back to Life Pain-Free
  
  Professional physiotherapy that actually works:
  ✅ Expert therapists with 38+ years experience
  ✅ Same-day appointments
  ✅ Direct WCB billing
  ✅ Modern treatment techniques
  
  Don't wait - your recovery starts today.
  Call 780-250-8188 for your FREE assessment.
  ```
- **Headline:** Get Back to Life Pain-Free
- **Call-to-Action Button:** Call Now
- **Website URL:** `https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad1-benefits&utm_term=physiotherapy-edmonton`
- **Budget:** $12/day
- Click "Publish"

---

#### Ad Set 1.2: Motor Vehicle Accident Claims ($10/day total)

**Ad 4A: MVA Focus - Direct**
- Click "Create Ad"
- **Ad Name:** "MVA-Direct-A"
- **Format:** Single Image
- **Upload Image:** `ad-4-mva-focus.jpg`
- **Primary Text:**
  ```
  Injured in a Car Accident?
  
  We specialize in motor vehicle injury recovery:
  ✅ FREE initial assessment
  ✅ Direct insurance billing - no out-of-pocket costs
  ✅ We handle all the paperwork
  ✅ No referral needed
  
  Don't deal with pain alone. Call 780-250-8188 today.
  ```
- **Headline:** Injured in a Car Accident?
- **Description:** We handle insurance paperwork
- **Call-to-Action Button:** Call Now
- **Website URL:** `https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad4-mva&utm_term=car-accident-edmonton`
- **Display URL:** aimphysiotherapy.ca
- **Budget:** $10/day
- Click "Publish"

---

#### Ad Set 1.3: Work Injury Rehabilitation - WCB ($8/day total)

**Ad 2A: WCB Care - Focus**
- Click "Create Ad"
- **Ad Name:** "WCB-Focus-A"
- **Format:** Single Image
- **Upload Image:** `ad-2-wcb-care.jpg`
- **Primary Text:**
  ```
  Work Injury? We Direct Bill WCB
  
  No out-of-pocket costs. No hassle.
  
  ✅ Professional physiotherapy and rehabilitation
  ✅ Direct WCB billing - we handle everything
  ✅ Get back to work faster and stronger
  ✅ FREE assessment to get started
  
  Call 780-250-8188 today. We make recovery easy.
  ```
- **Headline:** Work Injury? We Direct Bill WCB
- **Description:** No out-of-pocket costs
- **Call-to-Action Button:** Call Now
- **Website URL:** `https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad2-wcb&utm_term=wcb-edmonton`
- **Display URL:** aimphysiotherapy.ca
- **Budget:** $8/day
- Click "Publish"

---

#### Variation Ads (Optional - for Week 2 A/B Testing) ($12/day total)

**Ad 3A: Recovery Success**
- Click "Create Ad"
- **Ad Name:** "Recovery-Success-A"
- **Format:** Single Image
- **Upload Image:** `ad-3-recovery-success.jpg`
- **Primary Text:**
  ```
  Get Back to Life Pain-Free
  
  Professional physiotherapy, massage therapy, and acupuncture under one roof.
  
  ✅ 5-star rated clinic
  ✅ We accept WCB and motor vehicle claims
  ✅ Same-day appointments available
  ✅ Expert team ready to help
  
  Call 780-250-8188 for your FREE assessment.
  ```
- **Headline:** Get Back to Life Pain-Free
- **Description:** Professional care under one roof
- **Call-to-Action Button:** Call Now
- **Website URL:** `https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad3-recovery&utm_term=pain-free`
- **Display URL:** aimphysiotherapy.ca
- **Budget:** $12/day
- Click "Publish"

---

### Step 4: Verify Pixel Tracking (5 min)

1. **Open Facebook Events Manager:**
   - https://business.facebook.com/events_manager
2. **Select your Pixel**
3. **Click "Test Events"**
4. **Visit:** aimphysiotherapy.ca with UTM parameter
5. **Verify events firing:**
   - PageView ✅
   - (After installing tracking code)

---

### Step 5: Set Up Conversion Events (5 min)

1. **Events Manager → Custom Conversions**
2. **Create New Custom Conversion:**

**Lead - Contact Form:**
- Name: "AIM - Contact Form Submission"
- Data Source: [Your Pixel]
- Rule: URL Contains "thank-you"
- Category: Lead
- Value: 50 CAD

**Lead - Phone Click:**
- Name: "AIM - Phone Click"
- Data Source: [Your Pixel]
- Event: Contact
- Category: Lead
- Value: 40 CAD

**Purchase - Booking:**
- Name: "AIM - Booking Confirmed"
- Data Source: [Your Pixel]
- Event: Purchase
- Category: Purchase
- Value: 85 CAD

Click "Create" for each

---

### Step 6: Final Ad Set Settings (5 min)

For each Ad Set, verify:

**Optimization:**
- Optimization Event: Conversions
- Conversion Event: Lead (Contact Form Submission)
- Bid Strategy: Lowest Cost

**Budget & Schedule:**
- Budget: [As specified above]
- Schedule: Continuous (run ads all the time)

**Audience:**
- Location: Edmonton, Alberta (25 km radius)
- Age: 25-65
- Gender: All
- Detailed Targeting: (Keep existing or add)
  - Interested in: Health & Wellness, Fitness, Physiotherapy
  - Behaviors: Recently moved, Workplace injuries

**Placements:**
- Automatic Placements (recommended)
- Or Manual: Facebook Feed, Instagram Feed, Stories

---

### Step 7: Launch Campaign (2 min)

1. **Review all ads** - Click "Review" button
2. **Check for errors** - Fix any warnings
3. **Verify budget totals:**
   - Ad Set 1.1 (Physio North): $24/day
   - Ad Set 1.2 (MVA): $10/day
   - Ad Set 1.3 (WCB): $8/day
   - Variation (Recovery): $12/day (optional)
   - **Total:** $54-66/day

4. **Click "Publish All"**

---

## 📊 Post-Launch Monitoring (First 48 Hours)

### Day 1 - Morning Check
- [ ] All ads "Active" (not in review)
- [ ] Impressions >100 per ad
- [ ] No disapproved ads
- [ ] Pixel tracking verified

### Day 1 - Evening Check
- [ ] Impressions >500 total
- [ ] CTR >0.5% (minimum)
- [ ] CPC <$5.00
- [ ] At least 1-2 leads

### Day 2 - Full Analysis
- [ ] Total spend within budget
- [ ] CTR comparison between ads
- [ ] Cost per lead calculation
- [ ] Quality score >5/10

---

## 🚨 Troubleshooting

**Ad Stuck in Review:**
- Normal: Can take 24 hours
- Check for policy violations
- Ensure no "free" claims without details

**Low CTR (<0.3%):**
- Wait 3 days minimum
- Then pause and try different creative

**High CPC (>$5.00):**
- Check audience overlap
- Narrow targeting
- Improve ad relevance

**No Conversions:**
- Verify pixel installed
- Check conversion event setup
- Test form submission manually

---

## ✅ Completion Checklist

- [ ] All 5 ad creatives uploaded to Meta Library
- [ ] 4 ads created and published (1A, 1B, 4A, 2A)
- [ ] UTM parameters added to all URLs
- [ ] Facebook Pixel installed on website
- [ ] Conversion events created
- [ ] Budget allocation correct
- [ ] Campaign published and active
- [ ] Monitoring schedule set

---

## 📞 Next Steps After Upload

1. **Wait 24 hours** for ads to get out of review
2. **Check performance** first thing Day 2
3. **Follow A/B Testing Strategy** (`AIM_AB_TESTING_STRATEGY.md`)
4. **Report weekly** to track progress toward +2 patients/day goal

---

**Estimated Upload Time:** 30-45 minutes  
**Created:** 2026-02-20 18:15 MST  
**Owner:** Axium → Orville (requires Facebook login)
