import Link from 'next/link';
import { webinar } from '@/lib/webinar';
import WebinarInterestForm from '@/components/WebinarInterestForm';
export default function WebinarLanding() {
  return <main id="main-content" className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-10">
    <p className="mb-6 border-l-2 border-cyan-300 pl-4 text-sm text-cyan-300">Private preparation draft · not accepting registrations</p>
    <div className="grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
      <section><p className="font-mono text-xs uppercase tracking-widest text-cyan-300">On-demand webinar · recording in preparation</p>
        <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">{webinar.title}.</h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">A planned 35-minute session for maintenance and reliability leaders. Take an illustrative asset alert through evidence, alternatives, human approval and verification.</p>
        <p className="mt-4 leading-7 text-slate-400">Presented by {webinar.presenter}. The recording is not available yet, and no release date or live Q&amp;A date is confirmed.</p>
        <h2 className="mt-10 text-2xl font-semibold">The working session outline</h2>
        <ol className="mt-5 space-y-5">{webinar.chapters.map(([title, detail], index) => <li key={title} className="flex gap-4 border-t border-white/10 pt-4"><span className="font-mono text-cyan-300">0{index + 1}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-1 leading-7 text-slate-400">{detail}</p></div></li>)}</ol>
        <Link href="/webinars/maintenance-decisions/watch" className="mt-8 inline-flex min-h-12 items-center text-cyan-300 underline underline-offset-4">Review the watch-page structure →</Link>
      </section><WebinarInterestForm />
    </div>
  </main>;
}
