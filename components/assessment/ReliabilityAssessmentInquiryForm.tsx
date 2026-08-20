'use client';

import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  company: string;
  assetScope: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  email: '',
  company: '',
  assetScope: '',
  message: '',
};

export default function ReliabilityAssessmentInquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const message = [
      'Reliability Intelligence Assessment inquiry',
      '',
      `Asset / site / fleet scope: ${form.assetScope}`,
      '',
      form.message || 'No additional notes provided.',
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

      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || 'We could not submit your request.');
      }

      setStatus('success');
      setForm(initialState);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'We could not submit your request.');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-xl border border-emerald-300/20 bg-emerald-300/[0.05] p-7" role="status">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">Request received</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">We have your assessment inquiry.</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          A SyncAI team member will review the scope you provided and follow up to confirm fit, data availability, and the 30-minute assessment call.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-300">
          Name
          <input
            required
            type="text"
            value={form.name}
            onChange={(event) => update('name', event.target.value)}
            className="mt-2 w-full rounded-md border border-white/15 bg-[#081018] px-4 py-3 text-white outline-none transition focus:border-cyan-300"
            autoComplete="name"
          />
        </label>
        <label className="block text-sm font-medium text-slate-300">
          Work email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => update('email', event.target.value)}
            className="mt-2 w-full rounded-md border border-white/15 bg-[#081018] px-4 py-3 text-white outline-none transition focus:border-cyan-300"
            autoComplete="email"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-slate-300">
        Company
        <input
          required
          type="text"
          value={form.company}
          onChange={(event) => update('company', event.target.value)}
          className="mt-2 w-full rounded-md border border-white/15 bg-[#081018] px-4 py-3 text-white outline-none transition focus:border-cyan-300"
          autoComplete="organization"
        />
      </label>

      <label className="block text-sm font-medium text-slate-300">
        Fleet, site, plant area, or asset family
        <input
          required
          type="text"
          value={form.assetScope}
          onChange={(event) => update('assetScope', event.target.value)}
          className="mt-2 w-full rounded-md border border-white/15 bg-[#081018] px-4 py-3 text-white outline-none transition focus:border-cyan-300"
          placeholder="e.g. haul-truck fleet, primary crushing, packaging line"
        />
      </label>

      <label className="block text-sm font-medium text-slate-300">
        What reliability question are you trying to answer?
        <textarea
          value={form.message}
          onChange={(event) => update('message', event.target.value)}
          rows={5}
          className="mt-2 w-full resize-y rounded-md border border-white/15 bg-[#081018] px-4 py-3 text-white outline-none transition focus:border-cyan-300"
          placeholder="Optional: recurring failures, bad actors, PM effectiveness, downtime exposure, data integrity, or another decision you need to make."
        />
      </label>

      {status === 'error' && (
        <p className="rounded-md border border-red-300/20 bg-red-300/[0.05] px-4 py-3 text-sm text-red-200" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Submitting…' : 'Request a 30-minute assessment call'}
      </button>

      <p className="text-xs leading-5 text-slate-500">
        This form is for the fixed-scope Reliability Intelligence Assessment. Do not submit confidential maintenance records here; data-transfer requirements are agreed separately after scope confirmation.
      </p>
    </form>
  );
}
