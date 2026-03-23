'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// ── Config ──────────────────────────────────────────────────
// NOTE: Create a separate GA4 property for syncai.ca in Google Analytics
// then replace G-SYNCAI_REPLACE with the real Measurement ID
const GA4_ID = 'G-SYNCAI_REPLACE';
const ADS_ID = 'AW-16713550918';      // Same Google Ads account as AIM (or create separate)
// LinkedIn: get from Campaign Manager → Account Assets → Insight Tag
const LINKEDIN_PARTNER_ID = 'LINKEDIN_REPLACE';

export const CONVERSIONS = {
  PILOT_APPLICATION: `${ADS_ID}/pilot_application`,
  OPERATOR_BRIEF:    `${ADS_ID}/operator_brief_download`,
  CONTACT_SUBMIT:    `${ADS_ID}/contact_submit`,
  AI_READINESS:      `${ADS_ID}/ai_readiness_visit`,
} as const;
// ────────────────────────────────────────────────────────────

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
    lintrk: (action: string, data?: Record<string, unknown>) => void;
  }
}

// ── Conversion helpers ───────────────────────────────────────

export function trackPilotApplication() {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', 'conversion', {
    send_to: CONVERSIONS.PILOT_APPLICATION,
    value: 5000,
    currency: 'CAD',
  });
  window.gtag?.('event', 'pilot_application_submit', {
    event_category: 'high_value_lead',
  });
  // LinkedIn conversion event
  window.lintrk?.('track', { conversion_id: 'pilot_application' });
}

export function trackOperatorBriefDownload() {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', 'conversion', {
    send_to: CONVERSIONS.OPERATOR_BRIEF,
    value: 500,
    currency: 'CAD',
  });
  window.gtag?.('event', 'operator_brief_download', {
    event_category: 'lead_magnet',
  });
  window.lintrk?.('track', { conversion_id: 'content_download' });
}

export function trackContactSubmit() {
  if (typeof window === 'undefined') return;
  window.gtag?.('event', 'conversion', {
    send_to: CONVERSIONS.CONTACT_SUBMIT,
    value: 1000,
    currency: 'CAD',
  });
  window.lintrk?.('track', { conversion_id: 'contact_form' });
}

// ── Route tracker ────────────────────────────────────────────
function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gtag) return;
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    window.gtag('config', GA4_ID, { page_path: url });
    window.gtag('config', ADS_ID, { page_path: url });
  }, [pathname, searchParams]);

  return null;
}

// ── Main component ───────────────────────────────────────────
export default function Analytics() {
  return (
    <>
      {/* Google Analytics + Ads */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
        strategy="afterInteractive"
      />
      <Script id="syncai-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA4_ID}', { send_page_view: false });
          gtag('config', '${ADS_ID}');
        `}
      </Script>

      {/* LinkedIn Insight Tag */}
      <Script id="linkedin-insight" strategy="afterInteractive">
        {`
          _linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          (function(l) {
            if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
            window.lintrk.q=[]}
            var s = document.getElementsByTagName("script")[0];
            var b = document.createElement("script");
            b.type = "text/javascript"; b.async = true;
            b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            s.parentNode.insertBefore(b, s);
          })(window.lintrk);
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          alt=""
          src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
        />
      </noscript>

      <PageViewTracker />
    </>
  );
}
