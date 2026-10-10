'use client';

import { useState } from 'react';
import Link from 'next/link';
import { APP_WORKSPACE_URL } from '@/lib/site-links';

import { buildContactEmailDraft, CONTACT_EMAIL, type ContactDraft } from '@/lib/contact-email';

const initialDraft: ContactDraft = { name: '', email: '', company: '', message: '' };

export default function ContactPage() {
  const [draft, setDraft] = useState<ContactDraft>(initialDraft);
  const [copyStatus, setCopyStatus] = useState('');
  const emailDraft = buildContactEmailDraft(draft);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setDraft((current) => ({ ...current, [name]: value }));
    setCopyStatus('');
  };

  const copyDraft = async () => {
    try {
      await navigator.clipboard.writeText(emailDraft.text);
      setCopyStatus('Draft copied. Paste it into your email app and send it to oadavis@syncai.ca.');
    } catch {
      setCopyStatus('Copy is unavailable. Copy your details manually and email oadavis@syncai.ca.');
    }
  };

  return (
    <main id="main-content" tabIndex={-1} className="bg-[#111214] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Contact</p>
            <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
              Put SyncAI to work for your team.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-[1.7] text-slate-400">
              Email us to discuss purchasing SyncAI, arrange a product walkthrough, or plan onboarding. Tell us about your team and the operating question you want to address.
            </p>
            <p className="mt-6 text-sm leading-7 text-slate-300">You can also contact <a href="mailto:oadavis@syncai.ca" className="text-cyan-300 underline">oadavis@syncai.ca</a> or <a href="tel:+17802152887" className="text-cyan-300 underline">780-215-2887</a>.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-start">
              <Link
                href="/strategic-pilot"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
              >
                Strategic pilot intake
              </Link>
              <a
                href={APP_WORKSPACE_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-md px-2 py-3 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >Existing customers: workspace →</a>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#17181B] p-6 sm:p-8">
            <div className="space-y-5">
              <div>
                <h2 className="text-2xl font-semibold text-white">Start a conversation by email</h2>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  <a href={`mailto:${CONTACT_EMAIL}`} className="break-all text-cyan-300 underline">{CONTACT_EMAIL}</a>
                </p>
                <p id="email-handoff-help" className="mt-3 text-sm leading-6 text-slate-400">
                  Open your email app, review your message, and send it there. This page does not send or submit messages.
                </p>
              </div>
              <noscript><p className="text-sm leading-6 text-slate-300">Draft preparation needs JavaScript. Email oadavis@syncai.ca directly and enter your message in your email app.</p></noscript>
              <fieldset className="space-y-5" data-clarity-mask="true">
                <legend className="mb-3 text-sm font-semibold text-slate-300">Draft details (optional)</legend>
                <p className="text-sm leading-6 text-slate-400">These fields prepare your email locally while you edit. Please include business contact details only, without confidential operational data. See our <Link href="/privacy" className="text-cyan-300 underline">privacy policy</Link>.</p>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name">
                    <input className={inputClass} name="name" autoComplete="name" maxLength={160} value={draft.name} onChange={handleChange} />
                  </Field>
                  <Field label="Work email">
                    <input className={inputClass} type="email" name="email" autoComplete="email" maxLength={254} value={draft.email} onChange={handleChange} />
                  </Field>
                </div>
                <Field label="Company">
                  <input className={inputClass} name="company" autoComplete="organization" maxLength={180} value={draft.company} onChange={handleChange} />
                </Field>
                <Field label="Message">
                  <textarea className={`${inputClass} min-h-40 resize-y`} name="message" maxLength={3000} value={draft.message} onChange={handleChange} />
                </Field>
              </fieldset>
              <a
                href={emailDraft.href}
                aria-describedby="email-handoff-help"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
              >Open email app</a>
              <button type="button" onClick={copyDraft} className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]">Copy email draft</button>
              <p className="text-sm leading-6 text-slate-400">No email app configured? Copy the draft and send it from your usual email service, or call <a href="tel:+17802152887" className="text-cyan-300 underline">780-215-2887</a>.</p>
              <p role="status" aria-live="polite" className="text-sm leading-6 text-slate-300">{copyStatus}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const inputClass =
  'w-full rounded-md border border-white/10 bg-[#111214] px-3.5 py-3 text-sm text-white outline-none placeholder:text-slate-700 focus:border-cyan-300/50 focus:ring-1 focus:ring-cyan-300/30';

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-300">{label}</span>
      {children}
    </label>
  );
}
