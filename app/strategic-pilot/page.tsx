'use client';

import { useState } from 'react';
import Link from 'next/link';

const phases = [
  {
    label: '01',
    title: 'Define the decision',
    body: 'Select a real reliability or maintenance problem with an accountable owner, known systems of record, and a clear operating consequence.',
  },
  {
    label: '02',
    title: 'Set the evidence boundary',
    body: 'Agree what SyncAI may use: approved documents, asset data, work history, condition evidence, and the minimum sanitized export needed for the first proof.',
  },
  {
    label: '03',
    title: 'Run the governed proof',
    body: 'Evaluate the technical output, evidence traceability, approval path, and workflow fit before expanding scope or increasing automation.',
  },
  {
    label: '04',
    title: 'Verify value',
    body: 'Measure the agreed baseline and outcome. Scale only when the evidence supports the business case and operating controls.',
  },
];

type FormState = {
  name: string;
  title: string;
  company: string;
  industry: string;
  email: string;
  assetScope: string;
  systemOfRecord: string;
  primaryPain: string;
  message: string;
};

const initialState: FormState = {
  name: '',
  title: '',
  company: '',
  industry: '',
  email: '',
  assetScope: '',
  systemOfRecord: '',
  primaryPain: '',
  message: '',
};

export default function StrategicPilotPage() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/pilot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok || !payload?.success) {
        throw new Error(payload?.error || 'We could not submit your request.');
      }

      setIsSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'We could not submit your request. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Strategic pilot</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            Start with one consequential operating decision. Prove the system before you scale it.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            A SyncAI pilot is a governed deployment around a defined reliability or maintenance problem—not an open-ended AI experiment. We establish the evidence boundary, human authority, and value-verification method at the start.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">How the pilot works</p>
            <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
              {phases.map((phase) => (
                <div key={phase.label} className="grid gap-3 py-6 sm:grid-cols-[48px_1fr]">
                  <span className="font-mono text-xs text-slate-600">{phase.label}</span>
                  <div>
                    <h2 className="text-lg font-semibold text-white">{phase.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{phase.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-[#0B151F] p-6">
              <p className="text-sm font-semibold text-white">What a good first use case looks like</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
                <li>• The decision matters enough that experienced people already spend time on it.</li>
                <li>• There is usable history, documentation, or operating evidence—even if it is fragmented.</li>
                <li>• A technical owner can review the reasoning and approve the action boundary.</li>
                <li>• There is a baseline or outcome that can be measured after intervention.</li>
              </ul>
            </div>

            <div className="mt-6 text-sm text-slate-500">
              Want to see the product first?{' '}
              <a
                href="https://app.syncai.ca/demo/copilot#syncai-chat"
                className="font-semibold text-cyan-300 hover:text-cyan-200"
              >
                Open the Reliability Engineer workspace →
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-xl border border-white/10 bg-[#0B151F] p-6 sm:p-8">
              {isSubmitted ? (
                <div className="py-10">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-200">
                    ✓
                  </div>
                  <h2 className="text-2xl font-semibold text-white">Request received</h2>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                    Your request has been recorded in SyncAI’s pilot-intake workflow. A member of the team can now review the operating context you submitted and follow up using the email provided.
                  </p>
                  <Link href="/" className="mt-8 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200">
                    Return to SyncAI →
                  </Link>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Pilot intake</p>
                    <h2 className="mt-2 text-2xl font-semibold text-white">Describe the first decision to solve.</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Required fields are used to create a reviewable pilot request. Do not include confidential data or credentials.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Name" required>
                        <input
                          className={inputClass}
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                        />
                      </Field>
                      <Field label="Role / title">
                        <input
                          className={inputClass}
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          autoComplete="organization-title"
                        />
                      </Field>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field label="Company" required>
                        <input
                          className={inputClass}
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          autoComplete="organization"
                        />
                      </Field>
                      <Field label="Work email" required>
                        <input
                          className={inputClass}
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          autoComplete="email"
                        />
                      </Field>
                    </div>

                    <Field label="Industry">
                      <select className={inputClass} name="industry" value={formData.industry} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="mining">Mining & heavy equipment</option>
                        <option value="energy">Energy & utilities</option>
                        <option value="oil-gas">Oil & gas</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="transportation">Transportation & fleets</option>
                        <option value="infrastructure">Infrastructure & facilities</option>
                        <option value="other">Other</option>
                      </select>
                    </Field>

                    <Field label="Asset or system scope" required hint="Example: haul-truck fleet, primary crusher circuit, packaging line">
                      <input
                        className={inputClass}
                        name="assetScope"
                        value={formData.assetScope}
                        onChange={handleChange}
                        required
                      />
                    </Field>

                    <Field label="System of record" hint="CMMS / EAM / historian / document system">
                      <input
                        className={inputClass}
                        name="systemOfRecord"
                        value={formData.systemOfRecord}
                        onChange={handleChange}
                        placeholder="e.g. SAP PM, Maximo, PI"
                      />
                    </Field>

                    <Field label="Primary reliability or maintenance problem" required>
                      <textarea
                        className={`${inputClass} min-h-28 resize-y`}
                        name="primaryPain"
                        value={formData.primaryPain}
                        onChange={handleChange}
                        required
                        placeholder="What decision or recurring problem should the first proof address?"
                      />
                    </Field>

                    <Field label="Additional context" hint="Optional. Do not include passwords, secrets, or sensitive exports.">
                      <textarea
                        className={`${inputClass} min-h-24 resize-y`}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
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
                      className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {isSubmitting ? 'Submitting…' : 'Submit pilot request'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const inputClass =
  'w-full rounded-md border border-white/10 bg-[#081018] px-3.5 py-3 text-sm text-white outline-none placeholder:text-slate-700 focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30';

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">
        {label}
        {required ? <span className="ml-1 text-cyan-300">*</span> : null}
      </span>
      {children}
      {hint ? <span className="mt-1.5 block text-xs leading-5 text-slate-600">{hint}</span> : null}
    </label>
  );
}
