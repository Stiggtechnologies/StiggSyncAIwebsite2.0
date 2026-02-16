<?php
/**
 * Meta Pixel Installation Script for AIM
 * To be inserted in WordPress header
 * Date: 2026-02-11
 */

// Meta Pixel ID for AIM Website
$pixel_id = '1492939798724540';

?>
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
fbq('init', '<?php echo $pixel_id; ?>');
fbq('track', 'PageView');
</script>
<noscript>
<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=<?php echo $pixel_id; ?>&ev=PageView&noscript=1"/>
</noscript>
<!-- End Meta Pixel Code -->

<!-- Conversion Tracking Events -->
<script>
// Lead event (form submission)
function trackLead() {
    fbq('track', 'Lead', {
        value: 85.00,
        currency: 'CAD',
        content_name: 'Booking Form Submission'
    });
}

// Phone call click
function trackPhoneCall() {
    fbq('trackCustom', 'PhoneCall', {
        value: 85.00,
        currency: 'CAD'
    });
}

// Booking page visit
function trackBookingIntent() {
    fbq('track', 'InitiateCheckout', {
        value: 85.00,
        currency: 'CAD'
    });
}
</script>
