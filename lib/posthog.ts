import posthog from 'posthog-js';

let initialized = false;

export function initPostHog() {
  if (typeof window === 'undefined') return;
  if (initialized) return;

  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

  if (posthogKey) {
    posthog.init(posthogKey, {
      api_host: posthogHost,
      capture_pageview: false,
      persistence: 'localStorage',
    });
    initialized = true;
  }
}

export function trackEvent(
  eventName: string,
  properties?: Record<string, string | number | boolean>
) {
  if (typeof window === 'undefined') return;

  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!posthogKey) {
    console.log('[PostHog] Event tracked (dev mode):', eventName, properties);
    return;
  }

  posthog.capture(eventName, properties);
}

export const ASSESSMENT_EVENTS = {
  STARTED: 'ai_assessment_started',
  COMPLETED: 'ai_assessment_completed',
  ROI_CALCULATED: 'roi_calculated',
  HIGH_PRIORITY_LEAD: 'high_priority_lead_generated',
  STEP_ABANDONED: 'ai_assessment_step_abandoned',
  STEP_COMPLETED: 'ai_assessment_step_completed',
} as const;
