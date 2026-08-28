'use client';

import Link from 'next/link';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';

const CONSENT_KEY = 'syncai_analytics_consent_v1';
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID?.trim() || '';
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID?.trim() || '';
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID?.trim() || '';
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID?.trim() || '';

const CONVERSIONS = {
  PILOT_APPLICATION: process.env.NEXT_PUBLIC_GOOGLE_ADS_PILOT_CONVERSION?.trim() || '',
  CONTACT_SUBMIT: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONTACT_CONVERSION?.trim() || '',
  RELIABILITY_ASSESSMENT:
    process.env.NEXT_PUBLIC_GOOGLE_ADS_RIA_CONVERSION?.trim() || '',
} as const;

type ConsentState = 'unknown' | 'granted' | 'denied';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    lintrk?: (action: string, data?: Record<string, unknown>) => void;
  }
}

function analyticsConsentGranted() {
  if (typeof window === 'undefined') return false;
  return window.localStorage.getItem(CONSENT_KEY) === 'granted';
}

function trackGoogleConversion(sendTo: string, eventName: string) {
  if (!analyticsConsentGranted() || !window.gtag) return;

  if (sendTo) {
    window.gtag('event', 'conversion', { send_to: sendTo });
  }

  window.gtag('event', eventName, {
    event_category: 'high_value_lead',
  });
}

export function trackPilotApplication() {
  if (typeof window === 'undefined') return;
  trackGoogleConversion(CONVERSIONS.PILOT_APPLICATION, 'pilot_application_submit');
  if (analyticsConsentGranted()) {
    window.lintrk?.('track', { conversion_id: 'pilot_application' });
  }
}

export function trackContactSubmit() {
  if (typeof window === 'undefined') return;
  trackGoogleConversion(CONVERSIONS.CONTACT_SUBMIT, 'contact_submit');
  if (analyticsConsentGranted()) {
    window.lintrk?.('track', { conversion_id: 'contact_form' });
  }
}

export function trackReliabilityAssessmentInquiry() {
  if (typeof window === 'undefined') return;
  trackGoogleConversion(
    CONVERSIONS.RELIABILITY_ASSESSMENT,
    'reliability_assessment_inquiry',
  );
  if (analyticsConsentGranted()) {
    window.lintrk?.('track', { conversion_id: 'reliability_assessment' });
  }
}

function PageViewTracker({ enabled }: { enabled: boolean }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!enabled || typeof window === 'undefined' || !window.gtag) return;

    const query = searchParams?.toString();
    const pagePath = pathname + (query ? `?${query}` : '');

    if (GA4_ID) {
      window.gtag('config', GA4_ID, { page_path: pagePath });
    }

    if (ADS_ID) {
      window.gtag('config', ADS_ID, { page_path: pagePath });
    }
  }, [enabled, pathname, searchParams]);

  return null;
}

export default function Analytics() {
  const [consent, setConsent] = useState<ConsentState>('unknown');

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    setConsent(stored === 'granted' ? 'granted' : stored === 'denied' ? 'denied' : 'unknown');
  }, []);

  const googleLoaderId = useMemo(() => GA4_ID || ADS_ID, []);
  const enabled = consent === 'granted';

  const choose = (next: Exclude<ConsentState, 'unknown'>) => {
    window.localStorage.setItem(CONSENT_KEY, next);
    setConsent(next);
  };

  return (
    <>
      {enabled && googleLoaderId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleLoaderId}`}
            strategy="afterInteractive"
          />
          <Script id="syncai-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              ${GA4_ID ? `gtag('config', '${GA4_ID}', { send_page_view: false });` : ''}
              ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}
            `}
          </Script>
        </>
      )}

      {enabled && CLARITY_ID && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_ID}");
          `}
        </Script>
      )}

      {enabled && LINKEDIN_PARTNER_ID && (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`
            window._linkedin_partner_id = "${LINKEDIN_PARTNER_ID}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
            (function(l) {
              if (!l) {
                window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                window.lintrk.q=[];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
      )}

      <Suspense fallback={null}>
        <PageViewTracker enabled={enabled} />
      </Suspense>

      {consent === 'unknown' && (
        <div className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-3xl rounded-xl border border-white/15 bg-[#0B151F] p-5 shadow-2xl shadow-black/40 sm:p-6">
          <div className="grid gap-5 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="text-sm font-semibold text-white">Analytics choice</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                SyncAI uses optional analytics and advertising measurement only after you allow it. Necessary site functions work without these trackers.{' '}
                <Link href="/privacy" className="font-medium text-cyan-300 hover:text-cyan-200">
                  Privacy details
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:min-w-40">
              <button
                type="button"
                onClick={() => choose('granted')}
                className="rounded-md bg-cyan-300 px-4 py-2.5 text-sm font-bold text-slate-950 hover:bg-cyan-200"
              >
                Allow analytics
              </button>
              <button
                type="button"
                onClick={() => choose('denied')}
                className="rounded-md border border-white/15 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/[0.05]"
              >
                Necessary only
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
