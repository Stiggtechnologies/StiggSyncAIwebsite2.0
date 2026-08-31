'use client';

import { useState } from 'react';
import Link from 'next/link';
import { APP_SETUP_URL } from '@/lib/site-links';

type ContactForm = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialForm: ContactForm = {
  name: '',
  email: '',
  company: '',
  message: '',
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactForm>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const payload = await response.json().catch(() => null);
      if (!response.ok || !payload?.success) {
        throw new Error(payload?.error || 'We could not send your message.');
      }

      setIsSubmitted(true);
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : 'We could not send your message. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
              Talk to the people building SyncAI.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-[1.7] text-slate-400">
              Use this form for product, partnership, security, or enterprise deployment questions. For a defined operating use case, the strategic-pilot intake gives us more technical context.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
              <Link
                href="/strategic-pilot"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
              >
                Strategic pilot intake
              </Link>
              <a
                href={APP_SETUP_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-md px-2 py-3 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                Try Reliability Engineer →
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0B151F] p-6 sm:p-8">
            {isSubmitted ? (
              <div className="py-10">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-200">
                  ✓
                </div>
                <h2 className="text-2xl font-semibold text-white">Message sent</h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Your message was delivered to the SyncAI team using the email address you provided for reply.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name">
                    <input className={inputClass} name="name" value={formData.name} onChange={handleChange} required />
                  </Field>
                  <Field label="Work email">
                    <input
                      className={inputClass}
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Field>
                </div>
                <Field label="Company">
                  <input className={inputClass} name="company" value={formData.company} onChange={handleChange} required />
                </Field>
                <Field label="Message">
                  <textarea
                    className={`${inputClass} min-h-40 resize-y`}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
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
                  {isSubmitting ? 'Sending…' : 'Send message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

const inputClass =
  'w-full rounded-md border border-white/10 bg-[#081018] px-3.5 py-3 text-sm text-white outline-none placeholder:text-slate-700 focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">{label}</span>
      {children}
    </label>
  );
}
