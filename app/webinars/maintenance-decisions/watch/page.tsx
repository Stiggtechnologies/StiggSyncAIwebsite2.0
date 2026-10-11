import Link from 'next/link';
import { webinar } from '@/lib/webinar';
export default function WebinarWatchDraft() {
  return <main id="main-content" className="mx-auto max-w-5xl px-6 pb-24 pt-32 sm:px-10">
    <p className="text-sm text-cyan-300">Private watch-page draft · recording in preparation</p>
    <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl">{webinar.title}.</h1>
    <p className="mt-5 leading-7 text-slate-300">On-demand webinar presented by {webinar.presenter}. Planned duration: 35 minutes. No recording is available yet.</p>
    <p className="mt-4 leading-7 text-slate-400">Once published, watch the recording here without registration or marketing permission. Optional email delivery, marketing follow-ups and Q&amp;A invitations are separate choices. No instant replay is available in this draft.</p>
    <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2"><div><dt className="text-slate-400">Recorded date</dt><dd>Not recorded</dd></div><div><dt className="text-slate-400">Product version shown</dt><dd>To be verified after recording</dd></div></dl>
    <section aria-label="Recording status" className="mt-10 flex min-h-64 flex-col justify-center rounded-xl border border-white/15 bg-graphite p-6 sm:p-10">
      <h2 className="text-2xl font-semibold">A human-led session, in preparation.</h2>
      <p className="mt-4 max-w-2xl leading-7 text-slate-400">The approved recording, reviewed captions and transcript belong here. No video or third-party player is loaded in this draft.</p>
      <Link href="/webinars/maintenance-decisions" className="mt-6 inline-flex min-h-12 items-center text-cyan-300 underline">Prepare an interest request →</Link>
    </section>
    <h2 className="mt-12 text-2xl font-semibold">Planned chapters</h2>
    <p className="mt-3 text-sm leading-6 text-slate-400">Chapter links and timestamps will be added to the approved recording. These outline items do not seek or play a video.</p>
    <ol className="mt-5 space-y-5">{webinar.chapters.map(([title, detail], index) => <li key={title} className="border-t border-white/10 pt-5"><h3 className="font-semibold"><span className="mr-3 font-mono text-cyan-300">0{index + 1}</span>{title}</h3><p className="mt-2 leading-7 text-slate-400">{detail}</p></li>)}</ol>
    <section className="mt-12 border-t border-white/15 pt-8"><h2 className="text-2xl font-semibold">Put the method to work</h2><div className="mt-5 grid gap-4 sm:grid-cols-2">
      <Link href="/contact" className="rounded-md bg-cyan-300 p-5 font-semibold text-ink">{webinar.primaryCta} →</Link>
      <div className="rounded-md border border-white/15 p-5"><h3 className="font-semibold">Get the pilot readiness checklist</h3><p className="mt-2 leading-6 text-slate-400">In preparation. A reviewed download will be linked here before launch.</p></div>
      <Link href="/manuals/field-manual" className="rounded-md border border-white/15 p-5 text-cyan-300 underline">Use the online Field Manual →</Link>
      <Link href="/resources/product-demo" className="rounded-md border border-white/15 p-5 text-cyan-300 underline">Explore the public demo guide →</Link>
    </div><p className="mt-5 text-sm leading-6 text-slate-400">The consultation is an initial scoping call, separate from the paid 6–8 week Reliability Intelligence Assessment. The current route prepares an email inquiry; a meeting time must be agreed with you.</p></section>
    <section className="mt-10 space-y-4"><h2 className="text-2xl font-semibold">Before you watch</h2><p className="leading-7 text-slate-400">The example is illustrative, not a customer outcome or forecast. No production integration commitment is made; access and technical requirements are scoped separately.</p></section>
    <section className="mt-10"><h2 className="text-2xl font-semibold">Bring your questions</h2><p className="mt-3 leading-7 text-slate-400">The planned format is recorded, not live. Any live Q&amp;A will have its own separately dated page; no live dates are confirmed.</p></section>
  </main>;
}
