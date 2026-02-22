# UTM-Tagged Landing Page URLs for Meta Ads Campaign

**Campaign:** aim-meta-2026  
**Source:** facebook  
**Medium:** cpc  

Use these URLs as the destination for each ad creative.

---

## Ad 1: Professional Treatment (Physiotherapy - Edmonton North)

### Copy Variation A (Pain Point)
```
https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad1-painpoint&utm_term=physiotherapy-edmonton
```

### Copy Variation B (Benefits)
```
https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad1-benefits&utm_term=physiotherapy-edmonton
```

### Copy Variation C (Authority)
```
https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad1-authority&utm_term=physiotherapy-edmonton
```

---

## Ad 2: WCB Care (Work Injury)

### Copy Variation A (WCB Focus)
```
https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad2-wcb&utm_term=wcb-edmonton
```

### Copy Variation B (No Cost)
```
https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad2-wcb-nocost&utm_term=wcb-edmonton
```

---

## Ad 3: Recovery Success (General Physiotherapy)

### Copy Variation A (Recovery)
```
https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad3-recovery&utm_term=pain-free
```

### Copy Variation B (Multi-Service)
```
https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad3-multiservice&utm_term=physiotherapy
```

---

## Ad 4: MVA Focus (Motor Vehicle Accident)

### Copy Variation A (Direct)
```
https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad4-mva&utm_term=car-accident-edmonton
```

### Copy Variation B (Insurance Focus)
```
https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad4-mva-insurance&utm_term=mva-claims
```

---

## Ad 5: Team Trust (Retargeting)

### Retargeting Campaign
```
https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-retargeting&utm_content=ad5-trust&utm_term=edmonton-clinic
```

---

## Landing Page Variations (Phase 3 Testing)

### Service-Specific Pages

**Physiotherapy Service Page:**
```
https://aimphysiotherapy.ca/services/physiotherapy/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=[ad-variant]&utm_term=[keyword]
```

**MVA Treatment Page:**
```
https://aimphysiotherapy.ca/services/mva-physiotherapy/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=[ad-variant]&utm_term=[keyword]
```

**WCB Rehabilitation Page:**
```
https://aimphysiotherapy.ca/services/wcb-rehabilitation/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=[ad-variant]&utm_term=[keyword]
```

---

## URL Shortener (Optional)

For cleaner ad display, use bit.ly or similar to shorten UTM URLs:

**Example:**
- Full: `https://aimphysiotherapy.ca/?utm_source=facebook&utm_medium=cpc&utm_campaign=aim-meta-2026&utm_content=ad1-painpoint&utm_term=physiotherapy-edmonton`
- Short: `https://bit.ly/aim-meta-ad1a`

**Benefits:**
- Cleaner ad appearance
- Easier to manage
- Still tracks all UTM parameters

---

## GA4 Tracking Verification

After launching ads, verify tracking in Google Analytics:

1. Go to https://analytics.google.com/
2. Property: G-RNHNF423CW
3. Reports → Acquisition → Traffic Acquisition
4. Primary dimension: Session source/medium
5. Look for: facebook / cpc

Expected entries:
- facebook / cpc - Traffic from Meta Ads
- Campaign: aim-meta-2026
- Content: ad1-painpoint, ad1-benefits, etc.

---

## Facebook Ads Manager URL Setup

When creating ads in Ads Manager:

1. **Website URL field:** Paste the appropriate UTM-tagged URL above
2. **Display URL:** aimphysiotherapy.ca (clean version for ad display)
3. **Tracking:** Facebook Pixel will automatically track page views

---

## Quick Reference Table

| Ad Creative | Ad Copy | UTM Content | Landing Page |
|------------|---------|-------------|--------------|
| ad-1 | Pain Point | ad1-painpoint | Homepage |
| ad-1 | Benefits | ad1-benefits | Homepage |
| ad-1 | Authority | ad1-authority | Homepage |
| ad-2 | WCB Focus | ad2-wcb | Homepage |
| ad-2 | No Cost | ad2-wcb-nocost | Homepage |
| ad-3 | Recovery | ad3-recovery | Homepage |
| ad-3 | Multi-Service | ad3-multiservice | Homepage |
| ad-4 | MVA Direct | ad4-mva | Homepage |
| ad-4 | Insurance | ad4-mva-insurance | Homepage |
| ad-5 | Trust | ad5-trust | Homepage |

---

## Testing URL Tracking

Before launching ads, test each URL:

1. Click the UTM-tagged URL
2. Open browser dev tools (F12)
3. Check Network tab for:
   - Facebook Pixel fire: `fbevents.js`
   - GA4 tracking: `gtag/js`
4. Verify parameters captured in GA4 within 24 hours

---

**Created:** 2026-02-20 18:10 MST  
**Owner:** Axium
