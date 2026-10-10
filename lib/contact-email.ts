/** Local draft preparation only. Delivery happens in the visitor's email app. */
export const CONTACT_EMAIL = 'oadavis@syncai.ca';

export type ContactDraft = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export function buildContactEmailDraft(draft: ContactDraft) {
  const company = draft.company.trim().replace(/[\r\n]+/g, ' ');
  const subject = company ? `SyncAI inquiry — ${company}` : 'SyncAI purchase, walkthrough or onboarding inquiry';
  const body = [
    draft.name.trim() ? `Name: ${draft.name.trim()}` : '',
    draft.email.trim() ? `Contact email: ${draft.email.trim()}` : '',
    company ? `Company: ${company}` : '',
    '',
    draft.message.trim() || 'I would like to discuss SyncAI purchasing, an evaluation or onboarding.',
  ].filter((line, index, lines) => line !== '' || lines.slice(0, index).some(Boolean)).join('\n');

  return {
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
    text: `To: ${CONTACT_EMAIL}\nSubject: ${subject}\n\n${body}`,
  };
}
