import type { Metadata } from 'next';
import Link from 'next/link';
import { APP_SETUP_URL } from '@/lib/site-links';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'SyncAI’s beachhead is mining, energy, and oil and gas. Governed industrial intelligence: recommend, evidence, named human approval, work, and verify. Other industries are later, not live templates.',
  alternates: { canonical: 'https://syncai.ca/industries' },
  openGraph: {
    title: 'Industries | SyncAI',
    description:
      'Mining, energy, and oil and gas first. Other asset-intensive industries later — not as live tenant templates.',
    url: 'https://syncai.ca/industries',
    siteName: 'SyncAI',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SyncAI Industries' }],
  },
};

const operatingLoop = [
  { step: '01', title: 'Recommend', body: 'Structure a technical recommendation from approved knowledge, asset context, work history, and operating evidence.' },
  { step: '02', title: 'Evidence', body: 'Keep observed facts, assumptions, competing explanations, and missing information distinct and reviewable.' },
  { step: '03', title: 'Named human approval', body: 'A named person accepts, rejects, escalates, or returns the recommendation. Direct plant execute is disabled.' },
  { step: '04', title: 'Work', body: 'Authorized work proceeds through the customer’s existing systems of record and operating authority — not through an unsupervised agent.' },
  { step: '05', title: 'Verify', body: 'Close the loop with the evidence and KPIs that show whether the intervention worked.' },
];

const beachhead = [
  {
    name: 'Mining & heavy equipment',
    problem:
      'Haul, load, and plant assets generate work history, condition evidence, and production pressure that rarely sit in one decision-ready place. Teams still have to investigate failures, rank work, and defend the next action.',
    fit: [
      'Failure investigation against work history and condition evidence',
      'Risk-based work prioritization recommendations',
      'Maintenance strategy review with explicit evidence grades',
      'Decision records that stay reviewable after the shift ends',
    ],
  },
  {
    name: 'Energy & utilities',
    problem:
      'Aging generation, transmission, and plant assets raise reliability questions that outpace calendar PM and manual reporting. The need is a defensible recommendation, not an unsupervised dispatch.',
    fit: [
      'Evidence-led reliability analysis on a bounded asset domain',
      'Prioritization support that names what the records prove — and what they do not',
      'Approval boundaries before any change to protection, outage, or work strategy',
      'Outcome verification against the KPI the operator already uses',
    ],
  },
  {
    name: 'Oil & gas',
    problem:
      'Critical rotating and static equipment, fragmented work history, and backlog-driven prioritization make it hard to convert technical evidence into an accountable next action.',
    fit: [
      'Governed recommendations for investigation and work priority',
      'Separation of established facts from unproven failure modes',
      'Named human authority before work is released',
      'Traceability from evidence to the decision that was actually taken',
    ],
  },
];

const laterIndustries = [
  'Manufacturing',
  'Transportation & fleets',
  'Infrastructure & facilities',
];

export default function IndustriesPage() {
  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Where it fits</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            Mining, energy, and oil and gas first.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-slate-400">
            SyncAI is governed industrial intelligence: recommend → evidence → named human approval → work → verify. The beachhead is reliability and maintenance work in mining, energy, and oil and gas — not a catalog of live industry templates.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">The operating model</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              The same governed path in every beachhead operation.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              SyncAI does not autonomously coordinate the plant. It does not file regulatory submittals. It does not provision a vertical tenant in 60 seconds. Recommendations stay reviewable, and a named human remains the approver.
            </p>
          </div>

          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {operatingLoop.map((item) => (
              <div key={item.step} className="grid gap-4 py-7 md:grid-cols-[90px_260px_1fr] md:items-start">
                <span className="font-mono text-sm text-slate-600">{item.step}</span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="max-w-3xl text-sm leading-6 text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Beachhead</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Three operating environments we will take first.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              The common problem is not a shortage of data. It is converting fragmented technical evidence into consistent, accountable decisions — with approval still explicit.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-3">
            {beachhead.map((industry) => (
              <article key={industry.name} className="bg-[#081018] p-7 sm:p-8">
                <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{industry.problem}</p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Where SyncAI fits</p>
                <ul className="mt-3 space-y-2">
                  {industry.fit.map((item) => (
                    <li key={item} className="text-sm leading-6 text-slate-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Later, not live</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
                Other asset-intensive industries can wait.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                These environments share the same class of reliability problem. They are not live industry templates, and this page does not offer a deploy button for them.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-1">
              {laterIndustries.map((industry) => (
                <div key={industry} className="bg-[#0A131C] px-6 py-7 text-sm font-semibold text-slate-200">
                  {industry}
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">
            SyncAI is not production-certified. There are no live production CMMS, historian, or ERP connectors on this path. There are no named customer savings on this page. Assessment and pilot work starts from customer-provided records and a bounded operating question.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 rounded-xl border border-white/10 bg-[#0B151F] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">How to start</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Reliability Engineer, then a $35K / 6–8 week assessment, then a bounded Strategic Pilot.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                Try the workspace on a real technical question. If the records support it, establish a decision-grade baseline. Operationalize only a bounded workflow with explicit evidence, approval, and verification.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={APP_SETUP_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
              >
                Try Reliability Engineer
              </a>
              <Link
                href="/reliability-assessment"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
              >
                Reliability Assessment
              </Link>
              <Link
                href="/strategic-pilot"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
              >
                Strategic Pilot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
