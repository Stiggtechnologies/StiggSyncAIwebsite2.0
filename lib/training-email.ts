import { CONTACT_EMAIL } from '@/lib/contact-email';

export type TrainingDraft = {
  name: string;
  email: string;
  company: string;
  groupSize: string;
  format: string;
  timing: string;
  notes: string;
};

/** Prepares local course context; the visitor sends it from their email app. */
export function buildTrainingEmailDraft(offerTitle: string, draft: TrainingDraft) {
  const course = offerTitle.trim().replace(/[\r\n]+/g, ' ');
  const subject = `SyncAI training inquiry — ${course}`;
  const body = [
    `Training course: ${course}`,
    `Name: ${draft.name.trim() || 'Not provided'}`,
    `Contact email: ${draft.email.trim() || 'Not provided'}`,
    `Company or site: ${draft.company.trim() || 'Not provided'}`,
    `Preferred format: ${draft.format.trim() || 'To be discussed'}`,
    `Approx. group size: ${draft.groupSize.trim() || 'Not provided'}`,
    `Preferred timing: ${draft.timing.trim() || 'To be discussed'}`,
    '',
    draft.notes.trim() || 'I would like to arrange a 20-minute call about this training course.',
  ].join('\n');

  return {
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    text: `To: ${CONTACT_EMAIL}\nSubject: ${subject}\n\n${body}`,
  };
}
