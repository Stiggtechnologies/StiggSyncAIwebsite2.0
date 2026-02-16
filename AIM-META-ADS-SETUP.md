# AIM META (FACEBOOK) ADS - COMPLETE SETUP PLAN

**TARGET:** 20 new patients/day (contribute 5-8 patients/day from Meta platform)
**OWNER:** Axium (full authority granted 2026-02-08)
**STATUS:** Build from scratch → Deploy → Scale

---

## ACCOUNT SETUP REQUIREMENTS

### Meta Business Manager Setup
- [ ] Create Business Manager account (business.facebook.com)
- [ ] Add Alberta Injury Management business details
- [ ] Verify business (tax ID, business documents)
- [ ] Add payment method (credit card for ad spend)
- [ ] Link Instagram account (if available for dual-platform ads)

### Access & Permissions
- [ ] Admin access: orvilledavis95@gmail.com
- [ ] Pixel installation on website (albertainjurymanagement.ca)
- [ ] Conversions API setup (enhanced tracking + iOS 14+ resilience)
- [ ] Domain verification for better ad performance

---

## CAMPAIGN STRUCTURE (3-Tier Approach)

### CAMPAIGN 1: Lead Generation - Core Services
**Objective:** Lead Generation
**Budget:** $30/day starting (scale to $50/day after validation)
**Placement:** Facebook + Instagram Feed, Stories

**Ad Sets:**
1. **Physiotherapy - Edmonton North**
   - Targeting: 25-65 years, 10km radius around clinic
   - Interests: Health & wellness, fitness, injury recovery
   - Placements: Feed + Stories
   - Budget: $12/day

2. **Motor Vehicle Accident Claims**
   - Targeting: 25-55 years, 15km radius
   - Behaviors: Recently moved, life events (accidents)
   - Custom Audiences: Website visitors (warm retargeting)
   - Budget: $10/day

3. **Work Injury Rehabilitation**
   - Targeting: 30-60 years, 15km radius
   - Job titles: Trades, construction, warehouse, healthcare workers
   - Interests: Workers compensation, occupational health
   - Budget: $8/day

**Creative Strategy:**
- Pain point hooks: "Injured in a car accident? WCB claim delayed?"
- Social proof: Patient testimonials, clinic environment
- Clear CTA: "Book Free Assessment" / "Call Now: 780-250-8188"
- Video ads: 15-30 second testimonials + clinic walk-through
- Carousel ads: Services offered (physio, massage, acupuncture, etc.)

---

### CAMPAIGN 2: Retargeting - Website Visitors
**Objective:** Conversions (Phone Calls + Form Submissions)
**Budget:** $15/day
**Placement:** All placements (Feed, Stories, Messenger)

**Ad Sets:**
1. **Warm Audience - Visited Landing Page**
   - Custom Audience: Visited website in last 30 days but didn't convert
   - Message: "Still in pain? Book your free assessment today"
   - Urgency: Limited appointment slots, same-day availability

2. **Hot Audience - Started Booking but Didn't Complete**
   - Custom Audience: Visited /book page but didn't submit form
   - Message: Direct offer, remove friction, phone call option
   - Incentive: "Call now for same-day booking"

**Creative Strategy:**
- Direct response ads: Clear benefit statements
- Urgency triggers: "Limited slots today" / "Walk-ins welcome"
- Multiple CTAs: Phone call + form submission + Messenger

---

### CAMPAIGN 3: Lookalike Audiences (Scale Phase)
**Objective:** Traffic → Lead Generation
**Budget:** $20/day (launch after 30 days of data collection)
**Placement:** Advantage+ (Meta auto-optimization)

**Ad Sets:**
1. **Lookalike - Converters (1% similarity)**
   - Source: People who called or booked in last 60 days
   - Targeting: Edmonton + surrounding areas (30km)
   - Let Meta optimize placements and creative

2. **Lookalike - High-Value Patients (5% similarity)**
   - Source: Patients with 5+ visits or high revenue
   - Broader reach for brand awareness + consideration

**Creative Strategy:**
- Educational content: "What to expect at your first visit"
- Authority positioning: Credentials, years in practice
- Testimonial-driven social proof

---

## CONVERSION TRACKING SETUP

### Meta Pixel Events
```javascript
// Homepage view
fbq('track', 'PageView');

// Services page view
fbq('track', 'ViewContent', {
  content_name: 'Physiotherapy Services',
  content_category: 'Healthcare Services'
});

// Booking page visit (intent signal)
fbq('track', 'InitiateCheckout', {
  value: 85.00,
  currency: 'CAD'
});

// Form submission (lead conversion)
fbq('track', 'Lead', {
  value: 85.00,
  currency: 'CAD',
  content_name: 'Booking Form Submission'
});

// Phone call click (alternative conversion)
fbq('trackCustom', 'PhoneCall', {
  value: 85.00,
  currency: 'CAD'
});
```

### Conversion Values
- **Lead (Form):** $85 CAD (matches Google Ads call value)
- **Phone Call Click:** $85 CAD (qualified intent)
- **Booking Page Visit:** $0 (optimization signal, not conversion)

---

## LANDING PAGE STRATEGY

### Primary Landing Page: `/services/physiotherapy`
- Headline: "Edmonton's Trusted Injury Recovery Clinic"
- Subheadline: "WCB & Motor Vehicle Accident Claims Accepted"
- CTA: "Book Free Assessment" (prominent phone + form)
- Social proof: Google reviews, testimonials, credentials
- Trust signals: Direct billing, no referral needed, same-day appointments

### Secondary Landing Page: `/mva-claims`
- Targeted for motor vehicle accident ad set
- Specific messaging around MVA claim process
- Clear pathway: Injured → Call → Assessment → Treatment → Recovery
- FAQ section addressing common MVA claim questions

### Booking Page: `/book`
- Simple form: Name, phone, email, injury type, preferred date/time
- Alternative: Click-to-call button (mobile-optimized)
- Confirmation message with next steps

---

## CREATIVE ASSETS NEEDED

### Images (5-10 variations)
- [ ] Clinic exterior (professional, welcoming)
- [ ] Treatment rooms (clean, modern equipment)
- [ ] Staff photos (friendly, professional)
- [ ] Patient testimonials (with permission, faces optional)
- [ ] Before/after mobility demonstrations (ethical, realistic)

### Videos (3-5 variations)
- [ ] 15-second clinic overview ("Welcome to AIM")
- [ ] 30-second patient testimonial (real patient, real results)
- [ ] 60-second "What to expect" walkthrough
- [ ] 15-second MVA claim explainer ("We handle the paperwork")

### Ad Copy Variations (10+ hooks)
1. "Injured? We accept WCB & motor vehicle claims."
2. "Back pain holding you back? Book a free assessment today."
3. "Motor vehicle accident? Get fast, professional treatment."
4. "No referral needed. Same-day appointments available."
5. "Edmonton's most trusted injury rehabilitation clinic."
6. "Work injury? We direct bill WCB."
7. "Physiotherapy, massage, acupuncture under one roof."
8. "Free initial assessment for MVA claimants."
9. "Stop suffering. Start recovering. Call today."
10. "Professional injury care when you need it most."

---

## BUDGET ALLOCATION & SCALING PLAN

### Phase 1: Testing (Days 1-14)
- **Total Budget:** $30/day ($210/week)
- **Goal:** Validate messaging, targeting, creative performance
- **Success Metric:** <$50 cost per lead (form + call)
- **Action:** Pause underperforming ad sets, double down on winners

### Phase 2: Optimization (Days 15-30)
- **Total Budget:** $50/day ($350/week)
- **Goal:** Refine audience targeting, improve conversion rate
- **Success Metric:** 3-5 new patients/day from Meta ads
- **Action:** Launch retargeting campaigns, test video ads

### Phase 3: Scale (Days 31-60)
- **Total Budget:** $75/day ($525/week)
- **Goal:** Consistent lead flow, lookalike audience expansion
- **Success Metric:** 5-8 new patients/day from Meta ads
- **Action:** Launch lookalike campaigns, increase budget on top performers

### Phase 4: Mature (Days 61+)
- **Total Budget:** $100/day ($700/week)
- **Goal:** Maintain 20 patients/day (combined Google + Meta)
- **Success Metric:** <$20 cost per patient acquisition
- **ROI Target:** 5:1 minimum (every $1 ad spend → $5 patient revenue)

---

## COMPLIANCE & REGULATORY CONSIDERATIONS

### Healthcare Advertising Requirements (Alberta/Canada)
- ✅ No misleading claims about treatment outcomes
- ✅ Clear disclosure of credentials (registered physiotherapists)
- ✅ Accurate representation of services offered
- ✅ Privacy compliance (no patient data in ads without consent)
- ✅ Truth in advertising (verifiable testimonials only)
- ✅ No "guarantees" of specific results
- ✅ Proper disclosures for direct billing arrangements

### Meta Advertising Policies
- ✅ Healthcare services allowed (not pharmaceutical products)
- ✅ No "miracle cure" or exaggerated claims
- ✅ Before/after images must be realistic, not misleading
- ✅ Testimonials must include disclaimer if not typical results
- ✅ No targeting based on health conditions (use interest-based)

---

## PERFORMANCE TRACKING & REPORTING

### Daily Monitoring Dashboard
- **Spend:** Actual vs budget
- **Impressions:** Reach and frequency
- **CTR:** Click-through rate by ad set
- **Cost per Click:** CPC trends
- **Conversions:** Leads (form + call) by source
- **Cost per Lead:** CPL by campaign

### Weekly KPIs
- **New Patients:** From Meta ads (attribution via call tracking + form source)
- **Cost per Patient:** Total ad spend / new patients
- **ROI:** Patient revenue / ad spend
- **Top Performers:** Best ads, audiences, placements
- **Optimization Actions:** Pause/scale decisions

### Monthly Review
- **Patient LTV:** Average patient value over 90 days
- **Channel Mix:** Meta vs Google Ads performance
- **Budget Reallocation:** Shift budget to highest ROI channel
- **Creative Refresh:** Replace ad fatigue with new assets

---

## IMMEDIATE NEXT STEPS (Priority Order)

### 🔴 CRITICAL (Do First)
1. **Create Meta Business Manager account**
   - Use orvilledavis95@gmail.com
   - Add business details, payment method
   - Verify business (may take 1-3 days)

2. **Install Meta Pixel on website**
   - Add pixel code to header (all pages)
   - Set up standard events (PageView, Lead, InitiateCheckout)
   - Test pixel with Meta Pixel Helper (Chrome extension)

3. **Verify domain ownership**
   - Add DNS TXT record or upload HTML file
   - Required for iOS 14+ tracking and ad delivery

### 🟡 HIGH PRIORITY (Do Next)
4. **Create initial campaigns**
   - Campaign 1: Lead Generation - Core Services
   - Start with $30/day budget
   - Launch 3 ad sets (Physio, MVA, Work Injury)

5. **Prepare creative assets**
   - Minimum 5 image ads per ad set
   - 1-2 video ads (if available)
   - 10 ad copy variations

6. **Set up conversion tracking**
   - Form submissions → Lead event
   - Phone call clicks → Custom event
   - Test conversion flows end-to-end

### 🟢 MEDIUM PRIORITY (Do Soon)
7. **Build custom audiences**
   - Website visitors (30 days)
   - Landing page visitors (no conversion)
   - /book page visitors (abandoned booking)

8. **Create retargeting campaigns**
   - Launch after 7 days of data collection
   - Start with $15/day budget

9. **Set up automated rules**
   - Pause ad sets if CPL > $75
   - Increase budget if CPL < $30 and spending <80% of budget
   - Alert if daily spend exceeds $100

### 🔵 LOW PRIORITY (Do Later)
10. **Build lookalike audiences**
    - Requires 100+ conversions (30-60 days)
    - Launch after sufficient data collection

11. **A/B test landing pages**
    - Test different headlines, CTAs, layouts
    - Requires traffic volume to be statistically significant

12. **Implement Conversions API**
    - Server-side tracking for enhanced data
    - Improves attribution and iOS 14+ performance

---

## BLOCKERS & DEPENDENCIES

### Manual Interventions Required
- [ ] **Meta Business Manager setup** (Orville: create account, verify business)
- [ ] **Payment method** (Orville: add credit card to Business Manager)
- [ ] **Website pixel installation** (Orville or web dev: add pixel code to header)
- [ ] **Domain verification** (Orville or web dev: DNS or file upload)
- [ ] **Creative asset sourcing** (Orville: provide photos/videos or authorize stock usage)

### Technical Dependencies
- [ ] Website must be live and accessible (✅ confirmed working)
- [ ] Booking page must be functional (🔄 in progress from previous work)
- [ ] Phone tracking system (optional but recommended for attribution)
- [ ] CRM integration (optional for advanced lead management)

---

## RISK MITIGATION

### Ad Disapproval Prevention
- **Review all ad copy** against Meta's healthcare advertising policies
- **Pre-flight creative assets** to ensure compliance
- **Have backup ads ready** in case primary ads are rejected
- **Clear disclaimers** on testimonials and before/after content

### Budget Protection
- **Daily spend limits** set in Business Manager ($100 max to prevent runaway spend)
- **Automated rules** to pause underperforming campaigns
- **Weekly budget reviews** to ensure ROI targets are met
- **Kill switch threshold:** If ad spend >5% of revenue, immediate pause + alert

### Performance Monitoring
- **Daily dashboard checks** for anomalies (spend spikes, CTR drops)
- **Weekly optimization cycles** to improve performance
- **Monthly strategic reviews** to adjust targeting and budget allocation
- **Quarterly creative refreshes** to combat ad fatigue

---

## SUCCESS CRITERIA

### 30-Day Goals
- ✅ Meta Business Manager account live and verified
- ✅ Pixel installed and tracking conversions
- ✅ 3 campaigns launched with $30-50/day budget
- ✅ 20+ leads generated from Meta ads
- ✅ <$50 cost per lead
- ✅ 3-5 new patients from Meta platform

### 60-Day Goals
- ✅ Retargeting campaigns launched and optimizing
- ✅ 50+ leads generated from Meta ads
- ✅ <$40 cost per lead
- ✅ 5-8 new patients/day from Meta platform
- ✅ Combined Google + Meta = 15+ patients/day

### 90-Day Goals (Target Achievement)
- ✅ Lookalike audiences launched and scaling
- ✅ 100+ leads generated from Meta ads
- ✅ <$30 cost per lead
- ✅ 8-10 new patients/day from Meta platform
- ✅ **Combined Google + Meta = 20 patients/day (TARGET MET)**
- ✅ Profitable ROI: 5:1 or better (every $1 spent → $5 revenue)

---

## STATUS: READY TO EXECUTE

**AUTONOMOUS EXECUTION BLOCKED ON:**
1. Meta Business Manager account creation (manual step)
2. Payment method addition (requires credit card)
3. Website pixel installation (requires website access or dev support)

**ONCE UNBLOCKED, AXIUM WILL:**
1. Create full campaign structure in Meta Ads Manager
2. Launch initial $30/day test campaigns
3. Monitor daily performance and optimize
4. Scale budget based on performance data
5. Report weekly results in executive dashboard

**ESTIMATED TIME TO LIVE:** 2-3 days after manual blockers cleared

---

**NEXT:** Orville to complete manual setup steps, then Axium executes full Meta Ads deployment autonomously.
