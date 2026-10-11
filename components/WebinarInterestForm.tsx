'use client';
import Link from 'next/link';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { CONTACT_EMAIL } from '@/lib/contact-email';
import { measureWebinar, prepareWebinarInterest, webinar, type WebinarInterest } from '@/lib/webinar';
const inputClass = 'w-full rounded-md border border-white/20 bg-ink p-3 text-bone focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300';
export default function WebinarInterestForm() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const [interest, setInterest] = useState<WebinarInterest>({ name: '', email: '', company: '', role: '', recordingUpdate: true, marketingFollowup: false, qaInvitations: false });
  const [errors, setErrors] = useState<Partial<Record<'name' | 'email' | 'company' | 'role', string>>>({});
  const [draft, setDraft] = useState<{ text: string; href: string } | null>(null);
  const [copyStatus, setCopyStatus] = useState('');
  const prepared = useRef(false);
  const firstInput = useRef<HTMLInputElement>(null);
  const confirmation = useRef<HTMLHeadingElement>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!ready || prepared.current) return;
    const result = prepareWebinarInterest(interest);
    if (!result.ok) {
      setErrors(result.errors);
      const key = Object.keys(result.errors)[0];
      event.currentTarget.querySelector<HTMLInputElement>('[name="' + key + '"]')?.focus();
      return;
    }
    prepared.current = true;
    setErrors({}); setDraft(result.draft);
    measureWebinar('interest_draft_prepared');
    requestAnimationFrame(() => confirmation.current?.focus());
  }
  async function copy() {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft.text);
      setCopyStatus('Email draft copied. Send it from your email service when you are ready.');
      measureWebinar('draft_copy_success');
    } catch {
      setCopyStatus('Copy is unavailable. Select the email draft below and copy it manually, or use your email app.');
      measureWebinar('draft_copy_failed');
    }
  }
  return <section aria-label="Webinar interest" className="min-w-0 rounded-xl border border-white/15 bg-graphite p-6 sm:p-8" data-clarity-mask="true">
    {!draft ? <>
      <h2 className="text-2xl font-semibold">Send me the replay and checklist</h2>
      <p id="interest-help" className="mt-3 leading-7 text-slate-400">The recording and checklist are not available yet. This draft prepares your link request locally; you choose whether to send it. Nothing is submitted, delivered or subscribed here.</p>
      <form onSubmit={submit} noValidate aria-describedby="interest-help" className="mt-6 space-y-5">
        <fieldset disabled={!ready} className="space-y-5">
        {(['email', 'name', 'company', 'role'] as const).map(key => <div key={key}>
          <label className="mb-2 block text-sm font-medium" htmlFor={'webinar-' + key}>{key === 'name' ? 'First name' : key === 'email' ? 'Work email' : key === 'role' ? 'Role' : 'Company'} ({key === 'email' ? 'required' : 'optional'})</label>
          <input ref={key === 'email' ? firstInput : undefined} id={'webinar-' + key} name={key} className={inputClass} type={key === 'email' ? 'email' : 'text'} autoComplete={key === 'company' ? 'organization' : key === 'name' ? 'given-name' : key === 'role' ? 'organization-title' : 'email'} required={key === 'email'} maxLength={key === 'email' ? 254 : key === 'company' ? 180 : 160} value={interest[key] || ''} aria-invalid={!!errors[key]} aria-describedby={errors[key] ? 'webinar-' + key + '-error' : undefined} onChange={event => setInterest({ ...interest, [key]: event.target.value })} />
          {errors[key] && <p id={'webinar-' + key + '-error'} className="mt-2 text-sm text-orange-300">{errors[key]}</p>}
        </div>)}
        <label className="flex gap-3 text-sm leading-6 text-slate-300"><input className="mt-1 h-5 w-5 shrink-0 accent-[#D6B885]" type="checkbox" name="marketingFollowup" checked={!!interest.marketingFollowup} onChange={event => setInterest({ ...interest, marketingFollowup: event.target.checked })} />I also agree to receive three follow-up emails from Stigg Security Inc. DBA SyncAI about this webinar, pilot readiness and a reliability workflow consultation. I can unsubscribe at any time.</label>
        <label className="flex gap-3 text-sm leading-6 text-slate-300"><input className="mt-1 h-5 w-5 shrink-0 accent-[#D6B885]" type="checkbox" name="qaInvitations" checked={!!interest.qaInvitations} onChange={event => setInterest({ ...interest, qaInvitations: event.target.checked })} />Send me invitations to future SyncAI live Q&amp;A sessions. I can unsubscribe at any time.</label>
        <p className="text-sm leading-6 text-slate-400">Once published, the recording can be watched on this page without registration, email delivery or marketing permission. These choices only become part of an inquiry if you choose to send the email.</p>
        <p className="text-sm leading-6 text-slate-400">Follow-up permissions are draft wording for review. No sequence is active. No contact details are saved here. If you send an email, SyncAI receives its contents. <Link href="/privacy" className="text-cyan-300 underline">Privacy details</Link>.</p>
        <button type="submit" className="min-h-12 w-full rounded-md bg-cyan-300 px-4 py-3 font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">Prepare link-request email</button>
        </fieldset>
        <noscript><p>Email <a className="underline" href={'mailto:' + CONTACT_EMAIL}>{CONTACT_EMAIL}</a> with your webinar question. No recording is available yet.</p></noscript>
      </form>
    </> : <>
      <h2 ref={confirmation} tabIndex={-1} className="text-2xl font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300">Your email draft is ready</h2>
      <p className="mt-4 leading-7 text-slate-300">Nothing has been sent. Your interest is not registered and access is not confirmed. Send the draft from your email service if you want SyncAI to receive your request.</p>
      <a href={draft.href} className="mt-6 flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-4 py-3 font-semibold text-ink">Open email app</a>
      <button type="button" onClick={copy} className="mt-3 min-h-12 w-full rounded-md border border-white/20 p-3">Copy email draft</button>
      <label htmlFor="webinar-draft" className="mt-6 block text-sm">Email draft — select manually if copying is unavailable</label>
      <textarea id="webinar-draft" readOnly value={draft.text} className={inputClass + ' mt-2 min-h-64 resize-y text-sm'} />
      <p role="status" aria-live="polite" className="mt-3 text-sm leading-6 text-slate-300">{copyStatus}</p>
      <button type="button" onClick={() => { prepared.current = false; setDraft(null); setCopyStatus(''); requestAnimationFrame(() => firstInput.current?.focus()); }} className="mt-4 min-h-12 text-cyan-300 underline">Edit this request</button>
      <p className="mt-6 leading-7 text-slate-400">While the recording is in preparation, <Link href="/manuals/field-manual" className="text-cyan-300 underline">use the Field Manual</Link> or <Link href="/contact" onClick={() => measureWebinar('discussion_cta_clicked')} className="text-cyan-300 underline">{webinar.primaryCta.toLowerCase()}</Link>. A time is agreed with you; this does not book an appointment.</p>
      <p className="mt-3 text-sm leading-6 text-slate-400">The consultation is an initial scoping conversation, separate from the paid 6–8 week Reliability Intelligence Assessment.</p>
    </>}
  </section>;
}
