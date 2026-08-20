'use client';

import { useState } from 'react';
import { trackReliabilityAssessmentInquiry } from '@/components/Analytics';

type FormState = {
  name: string;
  email: string;
  company: string;
  title: string;
  industry: string;
  assetScope: string;
  systemOfRecord: string;
  primaryPain: string;
  message: string;
};

const initialState: FormState = {
  name: '', email: '', company: '', title: '', industry: '', assetScope: '', systemOfRecord: '', primaryPain: '', message: '',
};

export default function ReliabilityAssessmentInquiryForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const update = (field: keyof FormState, value: string) => setForm((current) => ({ ...current, [field]: value }));

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('submitting');
    setErrorMessage('');
    const params = new URLSearchParams(window.location.search);

    try {
      const response = await fetch('/api/reliability-assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          attribution: {
            utmSource: params.get('utm_source') || '',
            utmMedium: params.get('utm_medium') || '',
            utmCampaign: params.get('utm_campaign') || '',
            utmContent: params.get('utm_content') || '',
            referrer: document.referrer || '',
          },
        }),
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };
      if (!response.ok) throw new Error(result.error || 'We could not submit your request.');
      trackReliabilityAssessmentInquiry();
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
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-200">Request recorded</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">Your assessment inquiry is in the SyncAI intake workflow.</h3>
        <p className="mt-3 text-sm leading-6 text-slate-300">A SyncAI team member will review the scope and follow up to confirm fit, data availability, and the 30-minute assessment call.</p>
      </div>
    );
  }

  const inputClass = 'mt-2 w-full rounded-md border border-white/15 bg-[#081018] px-4 py-3 text-white outline-none transition focus:border-cyan-300';
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-300">Name *<input required type="text" value={form.name} onChange={(event) => update('name', event.target.value)} className={inputClass} autoComplete="name" /></label>
        <label className="block text-sm font-medium text-slate-300">Work email *<input required type="email" value={form.email} onChange={(event) => update('email', event.target.value)} className={inputClass} autoComplete="email" /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-300">Company *<input required type="text" value={form.company} onChange={(event) => update('company', event.target.value)} className={inputClass} autoComplete="organization" /></label>
        <label className="block text-sm font-medium text-slate-300">Role / title<input type="text" value={form.title} onChange={(event) => update('title', event.target.value)} className={inputClass} autoComplete="organization-title" /></label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-slate-300">Industry<input type="text" value={form.industry} onChange={(event) => update('industry', event.target.value)} className={inputClass} placeholder="Mining, energy, manufacturing..." /></label>
        <label className="block text-sm font-medium text-slate-300">CMMS / EAM / system of record<input type="text" value={form.systemOfRecord} onChange={(event) => update('systemOfRecord', event.target.value)} className={inputClass} placeholder="SAP, Maximo, Dynamics, other" /></label>
      </div>
      <label className="block text-sm font-medium text-slate-300">Fleet, site, plant area, or asset family *<input required type="text" value={form.assetScope} onChange={(event) => update('assetScope', event.target.value)} className={inputClass} placeholder="e.g. haul-truck fleet, primary crushing, packaging line" /></label>
      <label className="block text-sm font-medium text-slate-300">What reliability question are you trying to answer? *<textarea required value={form.primaryPain} onChange={(event) => update('primaryPain', event.target.value)} rows={4} className={`${inputClass} resize-y`} placeholder="Recurring failures, bad actors, PM effectiveness, downtime exposure, evidence integrity, or another decision that matters." /></label>
      <label className="block text-sm font-medium text-slate-300">Additional context<textarea value={form.message} onChange={(event) => update('message', event.target.value)} rows={4} className={`${inputClass} resize-y`} placeholder="Optional context about history, scale, urgency, or stakeholders." /></label>
      {status === 'error' && <p className="rounded-md border border-red-300/20 bg-red-300/[0.05] px-4 py-3 text-sm text-red-200" role="alert">{errorMessage}</p>}
      <button type="submit" disabled={status === 'submitting'} className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60">{status === 'submitting' ? 'Recording request…' : 'Request a 30-minute assessment call'}</button>
      <p className="text-xs leading-5 text-slate-500">Do not submit confidential maintenance records, credentials, or production data through this public form. Data-transfer requirements are agreed separately after scope confirmation.</p>
    </form>
  );
}
