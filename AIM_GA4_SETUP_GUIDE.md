# Google Analytics 4 Setup for AIM Physiotherapy
*Configuration Guide | Property: AIM Physiotherapy | Domain: aimphysiotherapy.ca*

---

## 🎯 WHY GA4 IS CRITICAL

### For SEO Campaign
- Track organic traffic growth from target keywords
- Measure page performance (bounce rate, time on page)
- Monitor Core Web Vitals (page speed impact on rankings)
- Identify top-performing content for optimization

### For Google Ads
- Cross-domain tracking (ads → website → booking)
- Conversion attribution (which ads lead to appointments)
- Audience building (remarketing lists)
- Cost per acquisition by campaign/ad group

### For After-Hours System
- Track call-to-website conversion paths
- Measure after-hours lead quality vs business hours
- Attribution: after-hours → booking conversion rate

### For Meta Ads
- Cross-platform attribution (Facebook → Google Analytics)
- Audience overlap analysis
- Assisted conversions tracking

---

## 📋 GA4 PROPERTY SETUP

### Step 1: Create GA4 Property (5 minutes)

1. Go to https://analytics.google.com
2. Sign in with: **orvilledavis95@gmail.com**
3. Click "Admin" (gear icon, bottom left)
4. Click "Create Property"
5. Enter:
   - **Property Name:** AIM Physiotherapy
   - **Reporting Time Zone:** America/Edmonton
   - **Currency:** Canadian Dollar (CAD)
6. Click "Next"
7. Select industry: **Healthcare**
8. Business size: **Small (1-10 employees)**
9. Click "Create"

### Step 2: Set Up Data Stream (Web)

1. Choose "Web" platform
2. Enter:
   - **Website URL:** https://aimphysiotherapy.ca
   - **Stream Name:** AIM Website
3. Enable "Enhanced Measurement" (toggle ON)
   - Page views (automatic)
   - Scrolls
   - Outbound clicks
   - Site search
   - Form interactions
   - Video engagement
   - File downloads
4. Click "Create Stream"
5. **Copy the Measurement ID** (looks like: G-XXXXXXXXXX)

---

## 🔧 IMPLEMENTATION OPTIONS

### Option A: Google Tag Manager (Recommended)
**Best for:** Flexibility, future tracking changes, multiple tags

1. Create GTM container: https://tagmanager.google.com
2. Install GTM container code in website `<head>` and `<body>`
3. Add GA4 Configuration tag in GTM
4. Publish GTM container

### Option B: Direct gtag.js Installation
**Best for:** Simple setup, no additional tools needed

Add this code to **every page** in the `<head>` section:

```html
<!-- Google tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX', {
    'send_page_view': true,
    'cookie_flags': 'SameSite=None;Secure',
    'custom_map': {
      'dimension1': 'user_type',
      'dimension2': 'clinic_location'
    }
  });
</script>
```

**Replace G-XXXXXXXXXX with your actual Measurement ID**

---

## 🎯 CONVERSION TRACKING SETUP

### Goal 1: Phone Call Clicks
**Type:** Event
**Trigger:** Click on tel: link

```javascript
gtag('event', 'phone_call_click', {
  'event_category': 'engagement',
  'event_label': 'header_phone',
  'value': 85  // Value of a call
});
```

### Goal 2: Online Booking Started
**Type:** Event
**Trigger:** Click on booking button/link

```javascript
gtag('event', 'begin_checkout', {
  'event_category': 'conversion',
  'event_label': 'booking_started'
});
```

### Goal 3: Online Booking Completed
**Type:** Conversion Event
**Trigger:** Booking confirmation page

```javascript
gtag('event', 'purchase', {
  'event_category': 'conversion',
  'event_label': 'appointment_booked',
  'value': 200,  // Average appointment value
  'currency': 'CAD'
});
```

### Goal 4: Form Submissions
**Type:** Event
**Trigger:** Contact form submission

```javascript
gtag('event', 'form_submit', {
  'event_category': 'lead',
  'event_label': 'contact_form',
  'value': 50
});
```

### Goal 5: Scroll Depth (Content Engagement)
**Type:** Event (automatic with Enhanced Measurement)

Tracks:
- 25% scroll
- 50% scroll
- 75% scroll
- 90% scroll

---

## 🔗 GOOGLE ADS LINKING

### Link GA4 to Google Ads

1. In GA4: Admin → Product Links → Google Ads Links
2. Click "Link"
3. Select your Google Ads account
4. Enable "Enable Personalized Advertising"
5. Enable "Enable Auto-Tagging"
6. Click "Next" → "Submit"

### Import Conversions to Google Ads

1. In Google Ads: Tools & Settings → Conversions
2. Click "New Conversion Action" → "Import"
3. Select "Google Analytics 4 properties"
4. Select your GA4 property
5. Import these events:
   - purchase (appointment_booked)
   - phone_call_click
   - form_submit
6. Set conversion values to match GA4

---

## 📊 CUSTOM DIMENSIONS (Recommended)

### Set Up in GA4:

| Dimension Name | Scope | Description |
|----------------|-------|-------------|
| user_type | User | New vs Returning |
| clinic_location | Session | Which clinic (if multiple) |
| service_interest | Event | Service page viewed |
| traffic_source_detail | Session | Campaign/medium detail |

### Implementation:

```javascript
gtag('config', 'G-XXXXXXXXXX', {
  'custom_map': {
    'dimension1': 'user_type',
    'dimension2': 'clinic_location',
    'dimension3': 'service_interest'
  }
});

// Send custom dimension with event
gtag('event', 'page_view', {
  'service_interest': 'sports_physiotherapy'
});
```

---

## 🎨 AUDIENCES FOR REMARKETING

### Create These Audiences in GA4:

1. **All Website Visitors** (30 days)
   - Basis for remarketing

2. **Service Page Viewers** (14 days)
   - Viewed /services/sports-physiotherapy or /services/orthotics
   - High intent audience

3. **Booking Starters (No Complete)** (7 days)
   - Started booking but didn't finish
   - Abandoned cart equivalent

4. **High-Value Visitors** (30 days)
   - Session duration > 2 minutes
   - 2+ pages viewed
   - Quality traffic

5. **Phone Call Clickers** (14 days)
   - Clicked phone number
   - Hot lead audience

### Use in Google Ads:
- Import audiences from GA4
- Create remarketing campaigns
- Similar audiences (lookalikes)

---

## 📈 REPORTS TO MONITOR

### Daily (Automated Email)
1. **Traffic Overview**
   - Sessions by channel
   - Users vs new users
   - Bounce rate

2. **Conversions**
   - Phone calls
   - Form submissions
   - Booking starts
   - Booking completions

### Weekly (Manual Review)
1. **SEO Performance**
   - Organic traffic trend
   - Top landing pages
   - Keyword rankings (connect Search Console)

2. **Google Ads Attribution**
   - Assisted conversions
   - Path to conversion
   - ROAS by campaign

3. **User Behavior**
   - Top pages by time on page
   - Scroll depth analysis
   - Exit pages

### Monthly (Strategic Review)
1. **Channel Performance**
   - Sessions, conversions, CPA by channel
   - Month-over-month growth
   - Channel mix analysis

2. **Content Performance**
   - Blog post performance
   - Service page rankings
   - Content ROI

3. **Audience Insights**
   - Demographics
   - Interests
   - Geographic performance

---

## 🔐 PRIVACY & COMPLIANCE

### Required for Healthcare (PIPEDA/PHIPA)

1. **Data Retention:**
   - Set to 14 months (maximum for healthcare)
   - GA4: Admin → Data Settings → Data Retention

2. **IP Anonymization:**
   - GA4 anonymizes IP by default ✅
   - Verify in data stream settings

3. **Consent Mode:**
   - Implement if using cookie consent banner
   - Respects user privacy preferences

4. **Data Sharing:**
   - Disable "Google products & services" (optional)
   - Disable "Benchmarking" (recommended)
   - Disable "Technical support" (recommended)

5. **Terms Acceptance:**
   - Accept GA4 Terms of Service
   - Accept Data Processing Terms

---

## 🚀 POST-SETUP CHECKLIST

### Immediate (Today)
- [ ] Create GA4 property
- [ ] Install tracking code on website
- [ ] Verify data is flowing (real-time report)
- [ ] Link Google Ads account
- [ ] Import conversions to Google Ads

### Week 1
- [ ] Set up conversion events
- [ ] Create custom dimensions
- [ ] Build remarketing audiences
- [ ] Connect Google Search Console
- [ ] Set up automated email reports

### Week 2
- [ ] Review first week of data
- [ ] Adjust conversion values if needed
- [ ] Create custom reports
- [ ] Train staff on GA4 interface
- [ ] Document baseline metrics

---

## 🎯 SUCCESS METRICS (30-60-90 Day Targets)

### 30 Days
- [ ] 100+ daily sessions
- [ ] 60%+ organic traffic
- [ ] 2%+ conversion rate
- [ ] <50% bounce rate

### 60 Days
- [ ] 200+ daily sessions
- [ ] 50+ phone call clicks/month
- [ ] 20+ form submissions/month
- [ ] 10+ online bookings/month

### 90 Days
- [ ] 300+ daily sessions
- [ ] Page #1 rankings for 5+ keywords
- [ ] 15+ patients/day from all channels
- [ ] <40% bounce rate
- [ ] 3%+ conversion rate

---

## 📞 SUPPORT & RESOURCES

### Google Analytics Help
- GA4 Setup Assistant: https://support.google.com/analytics/answer/9304153
- Conversion Tracking: https://support.google.com/analytics/answer/9267568
- Google Ads Linking: https://support.google.com/google-ads/answer/9523866

### AIM-Specific Questions
- Contact Axium for implementation assistance
- Reference: `AIM_GA4_SETUP_GUIDE.md`

---

*Document Version: 1.0*  
*Last Updated: 2026-02-19*  
*Property: AIM Physiotherapy*  
*Domain: aimphysiotherapy.ca*