# META PIXEL INSTALLATION - AIM WEBSITE

**Pixel ID:** 1492939798724540  
**Website:** albertainjurymanagement.ca  
**Date:** 2026-02-11 03:09 MST

---

## OPTION 1: WordPress Plugin (EASIEST - 2 MINUTES)

1. Log into WordPress admin: https://albertainjurymanagement.ca/wp-admin
2. Go to **Plugins** → **Add New**
3. Search for **"Insert Headers and Footers"**
4. Click **Install Now** → **Activate**
5. Go to **Settings** → **Insert Headers and Footers**
6. Paste this code in the **"Scripts in Header"** box:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1492939798724540');
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1492939798724540&ev=PageView&noscript=1"/>
</noscript>
<!-- End Meta Pixel Code -->
```

7. Click **Save**
8. Done! Test with Meta Pixel Helper Chrome extension

---

## OPTION 2: Theme Editor (3 MINUTES)

1. Log into WordPress admin
2. Go to **Appearance** → **Theme File Editor**
3. Click **header.php** in the right sidebar
4. Find the `</head>` tag
5. Paste the code above BEFORE `</head>`
6. Click **Update File**
7. Done!

---

## OPTION 3: I Can Do It via cPanel (5 MINUTES)

If you give me your WordPress admin login, I can:
- Install the plugin
- Add the pixel code
- Test it's working
- Set up conversion tracking

**WordPress Login URL:** https://albertainjurymanagement.ca/wp-admin

---

## TESTING THE PIXEL

After installation, test it works:

1. Install **Meta Pixel Helper** Chrome extension:
   https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc

2. Visit your website: https://albertainjurymanagement.ca

3. Click the Pixel Helper icon (should show green checkmark)

4. Should see: "Pixel 1492939798724540 found on this page"

---

## CONVERSION EVENTS (OPTIONAL - ADD AFTER PIXEL WORKS)

Once pixel is working, add these tracking events:

### Track Phone Calls
Add to phone number link:
```html
<a href="tel:7802508188" onclick="fbq('trackCustom', 'PhoneCall', {value: 85.00, currency: 'CAD'});">780-250-8188</a>
```

### Track Form Submissions
Add to form submission:
```javascript
fbq('track', 'Lead', {
    value: 85.00,
    currency: 'CAD',
    content_name: 'Booking Form Submission'
});
```

### Track Booking Page Visits
Add to /book page:
```javascript
fbq('track', 'InitiateCheckout', {
    value: 85.00,
    currency: 'CAD'
});
```

---

## WHICH OPTION DO YOU PREFER?

- **Option 1 (Plugin):** Easiest, you can do yourself in 2 minutes
- **Option 2 (Theme Editor):** Fast, requires finding header.php
- **Option 3 (Axium does it):** Give me WordPress login and I'll handle everything

**Let me know which option you want!**
