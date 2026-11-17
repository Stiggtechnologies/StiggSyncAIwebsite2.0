import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Capabilities',
  description: 'Explore SyncAI capabilities across reliability, asset context, specialist agents, operations and governance, with availability by workflow.',
  path: '/capabilities',
});

type Capability = { title: string; body: string; maturity: 'Implemented foundation' | 'Available for a scoped pilot' | 'In development' | 'Planned'; };

const capabilities: Capability[] = [
  { title: 'Reliability engineering', body: 'A pilot-capable foundation for failure investigation, RCA/FRACAS support, bad-actor analysis, maintenance strategy review, RAM/RCM and FMEA/FMECA workflows. Field validation and acceptance remain scope-dependent.', maturity: 'Available for a scoped pilot' },
  { title: 'Asset and engineering context', body: 'Asset and evidence records support hierarchy, criticality, configuration and review. Mapping those records to a site’s actual systems and asset history is part of onboarding.', maturity: 'Implemented foundation' },
  { title: 'Decision governance', body: 'Organization-scoped decision records and human approval gates are implemented. Review roles, escalation rules, authority limits and outcome checks are agreed for the workflow.', maturity: 'Implemented foundation' },
  { title: 'Operational intelligence', body: 'Bounded pilot analysis can use condition evidence, production-loss questions, OEE and work-priority data where the customer’s operating records support the question.', maturity: 'Available for a scoped pilot' },
  { title: 'Specialist agents', body: 'Sync provides a shared interface for reliability questions and can route them to a domain specialist where enabled. Planning, scheduling, condition monitoring, materials and turnaround workflows are evaluated individually for pilot scope.', maturity: 'Implemented foundation' },
  { title: 'Enterprise integrations', body: 'A scoped evaluation can start with approved exports and documents. Live connectivity to maintenance, ERP, historian and control systems requires connector-specific approval and validation.', maturity: 'In development' },
  { title: 'Geospatial and field context', body: 'Location, asset-map, hazard and spatial questions as part of operational context where the required data is available.', maturity: 'In development' },
  { title: 'Maintenance economics', body: 'Downtime cost and opportunity sizing use explicit input assumptions. Value verification requires a customer-agreed baseline and measured results.', maturity: 'In development' },
  { title: 'Workforce enablement', body: 'Team training and guided decision reviews help planners, supervisors and technicians build a repeatable process. Productized competency and leadership workflows are scoped separately.', maturity: 'Available for a scoped pilot' },
  { title: 'Broader autonomy and orchestration', body: 'Expanded cross-domain orchestration and controlled action pathways remain subject to validation, authority design and customer acceptance.', maturity: 'Planned' },
];

const maturityStyles: Record<Capability['maturity'], string> = {
  'Implemented foundation': 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  'Available for a scoped pilot': 'border-cyan-300/30 bg-cyan-300/10 text-cyan-200',
  'In development': 'border-amber-300/30 bg-amber-300/10 text-amber-200',
  Planned: 'border-white/15 bg-white/[0.04] text-slate-300',
};

const maturityDefinitions: Record<Capability['maturity'], string> = {
  'Implemented foundation': 'Working software or controls exist. Site configuration and validation depend on the workflow.',
  'Available for a scoped pilot': 'Available for supervised evaluation with agreed data, access and acceptance criteria.',
  'In development': 'Components exist or are being built. End-to-end availability still needs validation.',
  Planned: 'Part of the product direction. Availability and timing are to be determined.',
};

export default function CapabilitiesPage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-[#111214] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Capability map</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">Industrial AI infrastructure for the physical world.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-slate-400">Start with reliability engineering. Use SyncAI to bring together operating evidence, asset context and specialist analysis for decisions that stay with your team.</p>
          <dl className="mt-10 grid max-w-5xl gap-5 text-sm sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(maturityDefinitions).map(([label, definition]) => (
              <div key={label}>
                <dt className={`inline-block rounded-full border px-3 py-1.5 ${maturityStyles[label as Capability['maturity']]}`}>{label}</dt>
                <dd className="mt-2 leading-6 text-slate-300">{definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
      <section className="border-b border-white/10 bg-[#151618]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
            {capabilities.map((capability) => (
              <article key={capability.title} className="bg-[#151618] p-7 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h2 className="text-xl font-semibold text-white">{capability.title}</h2>
                  <span className={`rounded-full border px-2.5 py-1 text-xs font-semibold ${maturityStyles[capability.maturity]}`}>{capability.maturity}</span>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{capability.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white">Choose a workflow to evaluate.</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">A scoped evaluation confirms the authorized records, workflow, approval authority and outcome measure for your operation.</p>
            <div className="mt-5 flex flex-wrap gap-5">
              <Link href="/architecture#sync-agent-workflow" className="font-semibold text-cyan-300 underline underline-offset-4">How Sync routes and governs work</Link>
              <Link href="/industries#industry-coverage" className="font-semibold text-cyan-300 underline underline-offset-4">Explore industry use cases</Link>
            </div>
          </div>
          <Link href="/strategic-pilot" className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200">Discuss a scoped pilot</Link>
        </div>
      </section>
    </main>
  );
}
