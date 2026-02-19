# Quick Start: Google Analytics 4 for AIM

## ⚡ IMMEDIATE ACTION NEEDED

### Step 1: Create GA4 Property (5 minutes)
1. Go to https://analytics.google.com
2. Sign in with: **orvilledavis95@gmail.com**
3. Admin → Create Property
4. Name: "AIM Physiotherapy"
5. Time Zone: America/Edmonton
6. Currency: CAD
7. Industry: Healthcare

### Step 2: Add Data Stream
1. Select "Web"
2. URL: https://aimphysiotherapy.ca
3. Enable "Enhanced Measurement"
4. **COPY THE MEASUREMENT ID** (G-XXXXXXXXXX)

### Step 3: Install Tracking Code
Add this to your website `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📧 SEND ME THE MEASUREMENT ID

Once you have the Measurement ID (starts with G-), send it to me and I'll:

1. ✅ Install it on the website
2. ✅ Set up conversion tracking (phone calls, bookings)
3. ✅ Link to Google Ads
4. ✅ Create remarketing audiences
5. ✅ Set up automated reports

---

## 🎯 WHY THIS MATTERS

| Without GA4 | With GA4 |
|-------------|----------|
| Don't know which keywords convert | Track organic → booking funnel |
| Can't prove SEO ROI | Measure $ per patient by channel |
| No remarketing possible | Build audiences for Google Ads |
| Flying blind | Data-driven decisions |

---

## ⏱️ TIME REQUIRED

- **Your time:** 5 minutes to create property
- **My time:** 15 minutes to configure everything
- **Total:** 20 minutes for complete tracking

---

**Full detailed guide:** `AIM_GA4_SETUP_GUIDE.md`