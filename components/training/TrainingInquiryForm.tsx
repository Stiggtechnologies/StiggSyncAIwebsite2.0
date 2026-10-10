'use client';

import { useState } from 'react';
import { CONTACT_EMAIL } from '@/lib/contact-email';
import { buildTrainingEmailDraft, type TrainingDraft } from '@/lib/training-email';

type Props = {
  offerTitle: string;
};

const inputClass =
  'w-full rounded-md border border-white/10 bg-[#111214] px-3.5 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">{label}</span>
      {children}
    </label>
  );
}

export default function TrainingInquiryForm({ offerTitle }: Props) {
  const [form, setForm] = useState<TrainingDraft>({
    name: '',
    email: '',
    company: '',
    groupSize: '',
    format: 'In-house at our site',
    timing: '',
    notes: '',
  });
  const [copyStatus, setCopyStatus] = useState('');
  const emailDraft = buildTrainingEmailDraft(offerTitle, form);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setCopyStatus('');
  };

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(emailDraft.text);
      setCopyStatus(`Draft copied. Paste it into your email app and send it to ${CONTACT_EMAIL}.`);
    } catch {
      setCopyStatus(`Copy is unavailable. Copy your details manually and email ${CONTACT_EMAIL}.`);
    }
  };

  return (
    <div className="space-y-5" data-training-inquiry="true">
      <h3 className="text-xl font-semibold text-white">Prepare your training inquiry</h3>
      <p id="training-email-help" className="text-sm leading-6 text-slate-400">Open your email app, review your message, and send it there. This page does not send or submit requests.</p>
      <p className="text-sm leading-6 text-slate-400">The course and optional details below prepare an email locally. Include business contact details only, without confidential operational data.</p>
      <noscript><p className="text-sm leading-6 text-slate-300">Draft preparation needs JavaScript. Open your email app and enter your details there; the selected course is already included.</p></noscript>
      <fieldset className="space-y-5" data-clarity-mask="true">
      <legend className="mb-3 text-sm font-semibold text-slate-300">Inquiry details (optional)</legend>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input className={inputClass} name="name" value={form.name} onChange={onChange} autoComplete="name" maxLength={160} />
        </Field>
        <Field label="Work email">
          <input className={inputClass} type="email" name="email" value={form.email} onChange={onChange} autoComplete="email" maxLength={254} />
        </Field>
      </div>
      <Field label="Company or site">
        <input className={inputClass} name="company" value={form.company} onChange={onChange} autoComplete="organization" maxLength={180} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred format">
          <select className={inputClass} name="format" value={form.format} onChange={onChange}>
            <option>In-house at our site</option>
            <option>Live virtual</option>
            <option>Open enrollment seats</option>
          </select>
        </Field>
        <Field label="Approx. group size">
          <input className={inputClass} name="groupSize" value={form.groupSize} onChange={onChange} maxLength={80} placeholder="e.g. 15" />
        </Field>
      </div>
      <Field label="Preferred timing">
        <input className={inputClass} name="timing" value={form.timing} onChange={onChange} maxLength={180} placeholder="e.g. November, around a shutdown" />
      </Field>
      <Field label="Anything we should know (optional)">
        <textarea
          className={`${inputClass} min-h-28 resize-y`}
          name="notes"
          maxLength={2500}
          value={form.notes}
          onChange={onChange}
          placeholder="Your CMMS, crews or shifts, sites"
        />
      </Field>

      </fieldset>
      <a href={emailDraft.href} aria-describedby="training-email-help" className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200">Open email app</a>
      <button type="button" onClick={copyDraft} className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]">Copy email draft</button>
      <p className="text-sm leading-6 text-slate-400">No email app configured? Copy the draft and send it from your usual email service to <a href={`mailto:${CONTACT_EMAIL}`} className="text-cyan-300 underline">{CONTACT_EMAIL}</a>.</p>
      <p role="status" aria-live="polite" className="text-sm leading-6 text-slate-300">{copyStatus}</p>
    </div>
  );
}
