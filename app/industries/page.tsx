import type { Metadata } from 'next';
import Link from 'next/link';
import { RIA_LEDE } from '@/lib/ria-copy';
import { pageMetadata } from '@/lib/seo';
import { APP_CUSTOMER_SIGN_IN_URL } from '@/lib/site-links';

export const metadata: Metadata = pageMetadata({
  title: 'Industries',
  description:
    'Explore SyncAI use cases for mining, energy, manufacturing, transport, infrastructure and other asset-intensive industries, from scoped pilots to draft templates.',
  path: '/industries',
});

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
    name: 'Oil & gas, oil sands, and midstream',
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
  { name: 'Heavy manufacturing & processing', status: 'Draft template', body: 'Investigate recurring line losses using work history, downtime events and quality records.' },
  { name: 'Chemicals & petrochemicals', status: 'Draft template', body: 'Bring inspection and maintenance records together for a process-equipment integrity review.' },
  { name: 'Battery & energy storage', status: 'Draft template', body: 'Review thermal events, degradation evidence and inspection history with the asset owner.' },
  { name: 'Food & beverage', status: 'Draft template', body: 'Review refrigeration failures and cold-chain excursions alongside work and condition records.' },
  { name: 'Pharmaceuticals & life sciences', status: 'Draft template', body: 'Trace equipment maintenance and change history for a quality-team review.' },
  { name: 'Healthcare facilities & equipment', status: 'Draft template', body: 'Review equipment availability, criticality and calibration history with facilities and biomedical teams.' },
  { name: 'Transportation, rail & logistics', status: 'Draft template', body: 'Compare recurring fleet failures and work backlog by route, duty cycle or depot.' },
  { name: 'Aviation maintenance & MRO', status: 'Draft template', body: 'Organize configuration, inspection and maintenance evidence for an authorized reviewer.' },
  { name: 'Marine shipping & ports', status: 'Draft template', body: 'Investigate repeat propulsion or terminal-equipment failures using service and inspection records.' },
  { name: 'Buildings & facilities', status: 'Draft template', body: 'Review recurring HVAC, electrical and building-system failures across sites.' },
  { name: 'Civil infrastructure & water', status: 'Draft template', body: 'Prioritize inspection follow-up for bridges, pumps and public-works assets.' },
  { name: 'Data centers & critical digital infrastructure', status: 'Draft template', body: 'Compare cooling and backup-power maintenance issues using incident and condition records.' },
  { name: 'Aerospace, launch & defence support', status: 'Draft templates', body: 'Organize equipment maintenance, configuration and inspection records for authorized technical review.' },
  { name: 'Pulp, paper & packaging', status: 'Fit to assess', body: 'Investigate repeat failures on mills, converting lines and packaging equipment.' },
  { name: 'Equipment rental & multi-site operators', status: 'Fit to assess', body: 'Compare maintenance backlog, repeat failures and availability across branches and fleets.' },
  { name: 'Construction & industrial services', status: 'Exploratory', body: 'Review project equipment history, field-service evidence and handover records.' },
  { name: 'Agriculture & agricultural equipment', status: 'Exploratory', body: 'Assess whether service and inspection records can support seasonal equipment-readiness decisions.' },
];

export default function IndustriesPage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-[#111214] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Where it fits</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            Clear decisions for asset-intensive operations.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-slate-400">
            SyncAI brings asset records, operating evidence and engineering knowledge into one reviewable decision. Start with a reliability workflow or explore how the same approach could fit your industry.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#151618]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">The operating model</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              One accountable path from evidence to action.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              Recommendations retain their supporting evidence and uncertainty, and a{' '}
              <Link href="/insights/recommend-is-not-authorize" className="font-semibold text-cyan-300 hover:text-cyan-200">
                named human remains the approver
              </Link>
              .
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
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Operating environments</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Built around real maintenance questions.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              The common problem is not a shortage of data. It is converting fragmented technical evidence into consistent, accountable decisions — with approval still explicit. A closed failure report is still short of that approval:{' '}
              <Link href="/insights/fracas-is-not-a-decision-system" className="font-semibold text-cyan-300 hover:text-cyan-200">
                FRACAS Is Not a Decision System
              </Link>
              .
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-3">
            {beachhead.map((industry) => (
              <article key={industry.name} className="bg-[#111214] p-7 sm:p-8">
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

      <section className="border-b border-white/10 bg-[#151618]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div id="industry-coverage" className="scroll-mt-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Broader industry fit</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
                Explore use cases by industry.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                Draft templates contain industry-specific methods that still need domain and customer review. Fit-to-assess use cases can be discussed using your records. Exploratory use cases need further discovery before a pilot can be scoped.
              </p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {laterIndustries.map((industry) => (
                <article key={industry.name} className="bg-[#151618] px-6 py-7">
                  <h3 className="text-lg font-semibold text-slate-200">{industry.name}</h3>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-300">{industry.status}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{industry.body}</p>
                </article>
              ))}
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">
            Bring an operating question from your sector. Assessments use customer-provided exports, and any pilot scope depends on the evidence, deployment requirements and review authority. Explore the <Link href="/capabilities" className="font-semibold text-cyan-300 underline underline-offset-4">capability map</Link> to see which workflows can be evaluated.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 rounded-xl border border-white/10 bg-[#17181B] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">How to start</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Choose the platform, an assessment, or a focused pilot.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                {RIA_LEDE}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href={APP_CUSTOMER_SIGN_IN_URL}
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
              >Customer sign-in</a>
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
