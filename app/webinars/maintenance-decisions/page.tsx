import Link from 'next/link';
import { webinar } from '@/lib/webinar';
import WebinarInterestForm from '@/components/WebinarInterestForm';
export default function WebinarLanding() {
  return <main id="main-content" className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-10">
    <p className="mb-6 border-l-2 border-cyan-300 pl-4 text-sm text-cyan-300">Private preparation draft · not accepting registrations</p>
    <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
      <section><p className="font-mono text-xs uppercase tracking-widest text-cyan-300">On-demand webinar · recording in preparation</p>
        <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">{webinar.title}.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">For mining reliability and maintenance leaders · planned on-demand format, 35 minutes.</p>
        <p className="mt-4 leading-7 text-slate-400">Work orders, inspection findings and operating history can point in different directions. The planned recorded SyncAI session walks through a practical way to review that evidence before choosing the next maintenance action. Follow an illustrative reliability case from the initial question to a recommendation an accountable person can review. See how to make missing information visible, compare possible explanations and define what would confirm whether the action worked.</p>
        <p className="mt-4 leading-7 text-slate-400">Presented by {webinar.presenter}, Founder, SyncAI. The recording is not available yet; no recording date is confirmed. On-page viewing will not require registration or marketing permission.</p>
        <button type="button" disabled aria-describedby="recording-unavailable" className="mt-6 min-h-12 rounded-md border border-white/20 px-5 py-3 text-slate-400">Watch the on-demand session</button>
        <p id="recording-unavailable" className="mt-2 text-sm text-slate-400">Unavailable until the approved recording is published.</p>
        <a href={webinar.checklistUrl} download className="mt-6 inline-flex min-h-12 items-center text-cyan-300 underline">Get the pilot readiness checklist (PDF, 3 pages) →</a><p className="text-sm text-slate-400">No email or marketing permission required. The recording remains in preparation.</p>
        <h2 className="mt-10 text-2xl font-semibold">The working session outline</h2>
        <ol className="mt-5 space-y-5">{webinar.chapters.map(([title, detail], index) => <li key={title} className="flex gap-4 border-t border-white/10 pt-4"><span className="shrink-0 whitespace-nowrap font-mono tabular-nums text-cyan-300">0{index + 1}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 leading-7 text-slate-400">{detail}</p></div></li>)}</ol>
        <Link href="/webinars/maintenance-decisions/watch" className="mt-8 inline-flex min-h-12 items-center text-cyan-300 underline underline-offset-4">Review the watch-page structure →</Link>
        <div className="mt-8 border-t border-white/15 pt-6"><Link href="/contact" className="inline-flex min-h-12 items-center text-cyan-300 underline">{webinar.primaryCta} →</Link><p className="mt-3 leading-7 text-slate-400">We will discuss the question you need to answer, the records available and what a practical next step could involve. Any assessment, pilot or deployment would be scoped separately. The current contact route prepares an email request; it does not book a meeting.</p></div>
      </section><WebinarInterestForm />
    </div>
  </main>;
}
