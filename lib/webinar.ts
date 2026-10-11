import { buildContactEmailDraft, type ContactDraft } from '@/lib/contact-email';

export const webinar = {
  slug: 'maintenance-decisions',
  title: 'From Maintenance Evidence to a Defensible Next Action',
  presenter: 'Orville Davis',
  format: 'On-demand webinar',
  recordingStatus: 'Recording in preparation',
  plannedDurationMinutes: 35,
  recordedDate: null,
  productVersion: null,
  bookingUrl: null,
  checklistUrl: null,
  primaryCta: 'Discuss a 30-minute reliability workflow consultation',
  consentVersion: 'webinar-interest-draft-v3',
  chapters: [
    ['Frame the operating question', 'Define the asset, decision and person accountable.'],
    ['Examine the records', 'Separate observations, assumptions and missing evidence.'],
    ['Compare the next actions', 'Explain the alternatives and what would change the recommendation.'],
    ['Keep approval human', 'Record who approved, challenged or returned the case for evidence.'],
    ['Verify the outcome', 'Agree what to check after the action, without assuming savings.'],
  ],
} as const;

/** Local review only. Even a production environment with this flag cannot expose the draft. */
export function webinarDraftEnabled(env: Record<string, string | undefined>) {
  return env.NODE_ENV === 'development' && env.WEBINAR_DRAFT_ENABLED === 'true';
}

export type WebinarInterest = Omit<ContactDraft, 'message'> & { recordingUpdate: boolean; marketingFollowup?: boolean; qaInvitations?: boolean; role?: string };

export function validateWebinarInterest(value: WebinarInterest) {
  const errors: Partial<Record<'name' | 'email' | 'company' | 'role', string>> = {};
  if (value.name.length > 160) errors.name = 'Keep your first name within 160 characters.';
  if (value.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.email.trim())) errors.email = 'Enter a valid work email.';
  if (value.company.length > 180) errors.company = 'Keep your organization within 180 characters.';
  if ((value.role?.length || 0) > 160) errors.role = 'Keep your role within 160 characters.';
  return errors;
}

/** Prepares a local draft; never sends, subscribes or writes a customer record. */
export function prepareWebinarInterest(value: WebinarInterest) {
  const errors = validateWebinarInterest(value);
  if (Object.keys(errors).length) return { ok: false as const, errors };
  const draft = buildContactEmailDraft({ ...value, message: [
    value.role?.trim() ? `Role: ${value.role.trim()}` : '',
    `I am interested in the ${webinar.format.toLowerCase()}: ${webinar.title}.`,
    'I understand the recording is in preparation and this is an interest request, not confirmed registration.',
    value.recordingUpdate
      ? 'Send the replay link and pilot readiness checklist to this email address when the approved assets are available. Requested delivery is separate from marketing permissions.'
      : 'No requested-link email delivery. Please respond only to this interest inquiry.',
    value.marketingFollowup ? 'I also agree to receive three follow-up emails from Stigg Security Inc. DBA SyncAI about this webinar, pilot readiness and a reliability workflow consultation. I can unsubscribe at any time.' : 'No permission for marketing follow-ups.',
    value.qaInvitations ? 'Send me invitations to future SyncAI live Q&A sessions. I can unsubscribe at any time.' : 'No permission for future Q&A invitations.',
    `Interest wording: ${webinar.consentVersion}`,
  ].join('\n\n') });
  return { ok: true as const, draft };
}

// Server-verified lifecycle events must never be emitted by this draft.
export const WEBINAR_LIFECYCLE_EVENTS = ['registration_accepted', 'playback_started', 'playback_25', 'playback_50', 'playback_75', 'playback_completed', 'resource_clicked', 'assessment_cta_clicked', 'meeting_booked', 'qualified_meeting_held', 'opportunity_created'] as const;
export const WEBINAR_EVENTS = ['interest_draft_prepared', 'draft_copy_success', 'draft_copy_failed', 'watch_structure_opened', 'discussion_cta_clicked'] as const;
export type WebinarEvent = typeof WEBINAR_EVENTS[number];

/** Explicit opt-in plus existing analytics consent; no email, names, organization or URL parameters. */
export function measureWebinar(event: WebinarEvent) {
  if (typeof window === 'undefined' || process.env.NEXT_PUBLIC_WEBINAR_MEASUREMENT_ENABLED !== 'true') return;
  try {
    if (window.localStorage.getItem('syncai_analytics_consent_v1') !== 'granted') return;
    if (!WEBINAR_EVENTS.includes(event)) return;
    window.gtag?.('event', `webinar_${event}`, { webinar_id: webinar.slug });
  } catch { /* Blocked browser storage must never block the customer journey. */ }
}

/** Future send policy: check immediately before every optional send, including queued/retried messages. No sender is activated here. */
export function maySendWebinarFollowup(permission: { marketingFollowup: boolean; qaInvitations: boolean; unsubscribed: boolean }, purpose: 'marketing' | 'qa') {
  if (permission.unsubscribed) return false;
  return purpose === 'marketing' ? permission.marketingFollowup === true : permission.qaInvitations === true;
}
