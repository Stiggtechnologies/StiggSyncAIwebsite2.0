import type { Metadata } from 'next';
import Link from 'next/link';
import { RIA_LEDE } from '@/lib/ria-copy';
import { DEFAULT_DESCRIPTION, DEFAULT_TITLE, pageMetadata } from '@/lib/seo';
import { APP_SETUP_URL } from '@/lib/site-links';

export const metadata: Metadata = pageMetadata({
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  path: '/',
});

const ways = [
  {
    name: 'Try it on a real question',
    body: 'Bring a technical question from your own operation and see how SyncAI reasons about it before you commit to a project.',
    cta: 'Open the workspace',
    href: APP_SETUP_URL,
    external: true,
  },
  {
    name: 'Reliability Intelligence Assessment',
    body: RIA_LEDE,
    cta: 'See the assessment',
    href: '/reliability-assessment',
    external: false,
  },
  {
    name: 'Strategic Pilot',
    body: 'Put one high-value workflow into use, with the evidence, the approval limits and the outcome check agreed up front.',
    cta: 'Talk about a pilot',
    href: '/strategic-pilot',
    external: false,
  },
  {
    name: 'Team training',
    body: 'One-day working sessions for planners and supervisors, superintendents and managers, and technicians and operators.',
    cta: 'See the sessions',
    href: '/training',
    external: false,
  },
];

const steps = [
  {
    title: 'Start from what you already have',
    body: 'Approved procedures, asset records, work history and condition data. No system has to be replaced.',
  },
  {
    title: 'Separate what is known from what is guessed',
    body: 'Observations, assumptions, competing explanations and missing information stay in separate columns. They are never blended into one confident answer.',
  },
  {
    title: 'Write the decision case',
    body: 'The reasoning is laid out, the gaps are named, and SyncAI recommends the next step with the least regret if it turns out to be wrong.',
  },
  {
    title: 'Send it to a named person',
    body: 'Someone with authority accepts, rejects, escalates or returns it for more evidence. SyncAI does not act on its own.',
  },
  {
    title: 'Check what happened',
    body: 'Once the work is done, the record shows whether the numbers moved, and that result goes into the next decision.',
  },
];

const work = [
  'Investigating a failure',
  'Reviewing maintenance tasks and intervals',
  'Deciding which work comes first',
  'Reading asset history and condition data',
  'Recommending actions with approval limits',
  'Keeping a record of who decided what, and why',
];

const principles = [
  {
    title: 'It works beside your systems',
    body: 'Your CMMS, EAM, ERP, historian and document systems stay the source of truth. SyncAI reads from them and does not write back.',
  },
  {
    title: 'A person always decides',
    body: 'Industrial recommendations touch safety, production and cost. Approval, escalation and accountability are part of how the product works.',
  },
  {
    title: 'Evidence comes first',
    body: 'SyncAI shows where the evidence is missing or contradicts itself, keeps the assumptions visible, and lets the accountable person see the basis.',
  },
];

const industries = [
  { name: 'Mining and heavy equipment', href: '/ai-for-mining-reliability' },
  { name: 'Energy and utilities', href: '/industries' },
  { name: 'Oil and gas', href: '/industries' },
  { name: 'Manufacturing', href: '/industries' },
  { name: 'Transportation and fleets', href: '/industries' },
  { name: 'Infrastructure and facilities', href: '/industries' },
];

const linkClass =
  'font-medium text-cyan-300 underline decoration-cyan-300/40 underline-offset-4 transition-colors hover:text-cyan-200 hover:decoration-cyan-200';

const cardHeading = { fontStretch: '100%' } as const;

export default function Home() {
  return (
    <main className="bg-ink pt-16 text-bone">
      {/* Hero */}
      <section className="border-b border-bone/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-20 lg:px-8 lg:pb-28">
          <div className="lg:pt-6">
            <h1 className="text-[2.6rem] font-bold leading-[1.04] tracking-[-0.02em] text-white sm:text-6xl lg:text-[4.4rem]">
              Decide with the evidence your operation already has.
            </h1>
            <p className="mt-8 max-w-[34rem] text-lg leading-[1.65] text-bone/75 sm:text-xl">
              SyncAI reads your work orders, asset records and operating data, shows what is proven and what is not, and sends every recommendation to a named person for approval.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={APP_SETUP_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-cyan-300 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-cyan-200"
              >
                Try Reliability Engineer
              </a>
              <Link
                href="/reliability-assessment"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-bone/25 px-7 py-3 text-sm font-semibold text-bone transition-colors hover:border-bone/60 hover:bg-bone/5"
              >
                Reliability Assessment
              </Link>
            </div>

            <p className="mt-10 max-w-[34rem] text-sm leading-6 text-bone/55">
              Not sure what SyncAI is, or isn&apos;t?{' '}
              <Link href="/company" className={linkClass}>
                Read what Sync is and is not
              </Link>
              .
            </p>
          </div>

          {/* The product, shown as the record it produces */}
          <figure aria-label="Example decision record" className="relative">
            <div className="border border-bone/15 bg-graphite shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
              <div className="flex items-start justify-between gap-4 border-b border-bone/10 px-5 py-4 sm:px-6">
                <div>
                  <p className="font-mono text-xs text-bone/50">Decision record · example</p>
                  <p className="mt-1 text-base font-semibold text-white">Compressor low lube-pressure trips</p>
                </div>
                <p className="shrink-0 border border-signal/60 px-2.5 py-1 text-xs font-semibold text-signal">
                  Awaiting approval
                </p>
              </div>

              <div className="space-y-6 px-5 py-6 sm:px-6">
                <div>
                  <h3 className="text-sm font-semibold text-white" style={cardHeading}>
                    The question
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-6 text-bone/80">
                    Seven low-lube-pressure trips in six weeks. Five happened within 20 minutes of startup. Lower the trip setpoint, or replace the bearings?
                  </p>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 sm:gap-0 sm:divide-x sm:divide-bone/10">
                  <div className="sm:pr-6">
                    <h3 className="text-sm font-semibold text-cyan-300" style={cardHeading}>
                      What the evidence shows
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-[0.95rem] leading-6 text-bone/80">
                      <li>Seven trips in six weeks</li>
                      <li>Five clustered just after startup</li>
                      <li>Historian scaling disagrees with field calibration</li>
                    </ul>
                  </div>
                  <div className="sm:pl-6">
                    <h3 className="text-sm font-semibold text-signal" style={cardHeading}>
                      What is not proven
                    </h3>
                    <ul className="mt-2 space-y-1.5 text-[0.95rem] leading-6 text-bone/80">
                      <li>That the bearings are damaged</li>
                      <li>That pressure was truly low</li>
                      <li>That a lower setpoint is safe</li>
                    </ul>
                  </div>
                </div>

                <div className="border-t border-bone/10 pt-5">
                  <h3 className="text-sm font-semibold text-white" style={cardHeading}>
                    Recommended next step
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-6 text-bone/80">
                    Leave the setpoint alone and hold off condemning the bearings. Reconcile the pressure scaling, capture a controlled startup sample, and inspect after the next trip before choosing a fix.
                  </p>
                </div>
              </div>

              <div className="border-t border-bone/10 px-5 py-3 font-mono text-xs text-bone/45 sm:px-6">
                Approver: Reliability Superintendent
              </div>
            </div>
            <figcaption className="mt-3 text-xs text-bone/45">
              An illustration of what SyncAI hands to the person who decides.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Ways to start */}
      <section className="border-b border-bone/10 bg-graphite">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.015em] text-white sm:text-5xl">
            Start small, and make each step earn the next one.
          </h2>

          <ul className="mt-14 border-t border-bone/20">
            {ways.map((way) => (
              <li
                key={way.name}
                className="grid gap-4 border-b border-bone/10 py-8 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)_minmax(0,2fr)] md:items-baseline md:gap-10"
              >
                <h3 className="text-xl font-semibold text-white sm:text-2xl">{way.name}</h3>
                <p className="max-w-xl text-[0.95rem] leading-7 text-bone/70">{way.body}</p>
                <p className="md:text-right">
                  {way.external ? (
                    <a href={way.href} className={`${linkClass} text-sm`}>
                      {way.cta}
                    </a>
                  ) : (
                    <Link href={way.href} className={`${linkClass} text-sm`}>
                      {way.cta}
                    </Link>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How a decision moves */}
      <section className="border-b border-bone/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-8">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.015em] text-white sm:text-5xl">
              How a decision moves from evidence to action.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-[1.65] text-bone/70">
              High-stakes industrial decisions should show their basis, admit their uncertainty, keep authority clear and be checked afterwards. This is the path SyncAI follows.
            </p>
          </div>

          <ol className="border-t border-bone/20">
            {steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-bone/10 py-8 sm:grid-cols-[3.5rem_1fr]">
                <span className="font-display text-3xl font-bold leading-none text-cyan-300/80">{index + 1}</span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 max-w-xl text-[0.95rem] leading-7 text-bone/70">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Where it starts */}
      <section className="border-b border-bone/10 bg-graphite">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:gap-24 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.015em] text-white sm:text-5xl">
              It starts with reliability, where the hard calls are made.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-[1.65] text-bone/70">
              Engineering knowledge, maintenance history, asset risk and operating conditions all meet in reliability work. That makes it the right place to prove SyncAI works before it goes any further.
            </p>
            <p className="mt-8">
              <a href={APP_SETUP_URL} className={linkClass}>
                Open the workspace
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold text-white" style={cardHeading}>
              Where teams use it
            </h3>
            <ul className="mt-4 border-t border-bone/20">
              {work.map((item) => (
                <li key={item} className="border-b border-bone/10 py-4 text-[0.95rem] leading-6 text-bone/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-bone/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.015em] text-white sm:text-5xl">
            Built to fit an industrial operator&apos;s controls.
          </h2>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {principles.map((item) => (
              <article key={item.title} className="border-t border-bone/20 pt-6">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-7 text-bone/70">{item.body}</p>
              </article>
            ))}
          </div>

          <p className="mt-14 max-w-3xl text-sm leading-6 text-bone/50">
            Security and deployment controls are described as implemented and validated. SyncAI does not claim a third-party certification until it has been formally achieved and is current. See{' '}
            <Link href="/security" className={linkClass}>
              Security
            </Link>
            ,{' '}
            <Link href="/architecture" className={linkClass}>
              Architecture
            </Link>
            ,{' '}
            <Link href="/insights" className={linkClass}>
              Insights
            </Link>{' '}
            and the{' '}
            <Link href="/manuals/field-manual" className={linkClass}>
              Field Manual
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-bone/10 bg-graphite">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:px-8">
          <div>
            <h2 className="text-4xl font-bold leading-[1.08] tracking-[-0.015em] text-white">
              For operations that run on their assets.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-bone/70">
              Most operations have plenty of data. What they lack is a consistent way to turn scattered technical evidence into decisions someone is accountable for.{' '}
              <Link href="/industries" className={linkClass}>
                See where we start
              </Link>
              .
            </p>
          </div>

          <ul className="grid border-t border-bone/20 sm:grid-cols-2 sm:gap-x-10">
            {industries.map((industry) => (
              <li key={industry.name} className="border-b border-bone/10">
                <Link
                  href={industry.href}
                  className="block py-5 text-lg font-medium text-bone transition-colors hover:text-cyan-300"
                >
                  {industry.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Close */}
      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:py-32 lg:grid-cols-[1fr_auto] lg:items-end lg:px-8">
          <div>
            <h2 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-[-0.015em] text-white sm:text-5xl">
              Tell us the decision that keeps coming back.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-[1.65] text-bone/70">
              We will tell you whether your records can support it, and what a first step would look like.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/reliability-assessment"
              className="inline-flex min-h-12 items-center justify-center rounded-sm bg-cyan-300 px-7 py-3 text-sm font-semibold text-ink transition-colors hover:bg-cyan-200"
            >
              Reliability Assessment
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-sm border border-bone/25 px-7 py-3 text-sm font-semibold text-bone transition-colors hover:border-bone/60 hover:bg-bone/5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
