'use client';

import { useState } from 'react';

type Props = {
  offerTitle: string;
};

const inputClass =
  'w-full rounded-md border border-white/10 bg-[#081018] px-3.5 py-3 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">{label}</span>
      {children}
    </label>
  );
}

export default function TrainingInquiryForm({ offerTitle }: Props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    groupSize: '',
    format: 'In-house at our site',
    timing: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    const message = [
      `TRAINING INQUIRY: ${offerTitle}`,
      `Preferred format: ${form.format}`,
      `Approx. group size: ${form.groupSize || 'not given'}`,
      `Preferred timing: ${form.timing || 'not given'}`,
      '',
      form.notes || '(no additional notes)',
    ].join('\n');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message,
        }),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok || !payload?.success) {
        throw new Error(payload?.error || 'We could not send your request.');
      }
      setIsSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'We could not send your request. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="py-8">
        <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-200">
          ✓
        </div>
        <h3 className="text-2xl font-semibold text-white">Request received</h3>
        <p className="mt-3 text-sm leading-6 text-slate-400">
          Thanks. We will reply to the email address you provided to set up a 20-minute call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name">
          <input className={inputClass} name="name" value={form.name} onChange={onChange} required />
        </Field>
        <Field label="Work email">
          <input className={inputClass} type="email" name="email" value={form.email} onChange={onChange} required />
        </Field>
      </div>
      <Field label="Company or site">
        <input className={inputClass} name="company" value={form.company} onChange={onChange} required />
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
          <input className={inputClass} name="groupSize" value={form.groupSize} onChange={onChange} placeholder="e.g. 15" />
        </Field>
      </div>
      <Field label="Preferred timing">
        <input className={inputClass} name="timing" value={form.timing} onChange={onChange} placeholder="e.g. November, around a shutdown" />
      </Field>
      <Field label="Anything we should know (optional)">
        <textarea
          className={`${inputClass} min-h-28 resize-y`}
          name="notes"
          value={form.notes}
          onChange={onChange}
          placeholder="Your CMMS, crews or shifts, sites"
        />
      </Field>

      {error ? (
        <div role="alert" className="rounded-md border border-red-300/20 bg-red-300/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'Sending…' : 'Request a 20-minute call'}
      </button>
    </form>
  );
}
