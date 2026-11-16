import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Capabilities',
  description: 'A truthful capability map for SyncAI: governed industrial intelligence spanning reliability, asset context, operations, integrations, workforce and decision governance.',
  path: '/capabilities',
});

type Capability = { title: string; body: string; maturity: 'Implemented' | 'Available for a scoped pilot' | 'In development' | 'Planned'; };

const capabilities: Capability[] = [
  { title: 'Reliability engineering', body: 'Failure investigation, RCA/FRACAS support, bad-actor analysis, maintenance strategy review, RAM/RCM and FMEA/FMECA workflows.', maturity: 'Implemented' },
  { title: 'Asset and engineering context', body: 'Asset hierarchy, criticality, configuration history, canonical relationships, approved source mappings and evidence provenance.', maturity: 'Implemented' },
  { title: 'Decision governance', body: 'Evidence and uncertainty kept visible, role-aware review, approval limits, escalation, decision records and outcome verification.', maturity: 'Implemented' },
  { title: 'Operational intelligence', body: 'Condition evidence, production loss questions, OEE and work-priority analysis grounded in the customer’s operating data.', maturity: 'Available for a scoped pilot' },
  { title: 'Specialist agents', body: 'A shared Sync interface with domain workflows for reliability, planning, scheduling, condition monitoring, materials and turnarounds.', maturity: 'Available for a scoped pilot' },
  { title: 'Enterprise integrations', body: 'A governed pattern around CMMS/EAM, ERP, historians, SCADA, documents and industrial data; exact connections depend on scope and authorization.', maturity: 'Available for a scoped pilot' },
  { title: 'Geospatial and field context', body: 'Location, asset-map, hazard and spatial questions as part of operational context where the required data is available.', maturity: 'In development' },
  { title: 'Maintenance economics', body: 'Downtime cost, opportunity sizing, prioritization and value verification with customer-agreed baselines—not invented ROI claims.', maturity: 'In development' },
  { title: 'Workforce enablement', body: 'Guided workflows, training, competency and leadership views that help teams adopt a repeatable decision process.', maturity: 'Available for a scoped pilot' },
  { title: 'Broader autonomy and orchestration', body: 'Expanded cross-domain orchestration and controlled action pathways remain subject to validation, authority design and customer acceptance.', maturity: 'Planned' },
];

const maturityStyles: Record<Capability['maturity'], string> = {
  Implemented: 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200',
  'Available for a scoped pilot': 'border-cyan-300/30 bg-cyan-300/10 text-cyan-200',
  'In development': 'border-amber-300/30 bg-amber-300/10 text-amber-200',
  Planned: 'border-white/15 bg-white/[0.04] text-slate-300',
};

export default function CapabilitiesPage() {
  return (
    <main id="main-content" tabIndex={-1} className="bg-[#111214] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Capability map</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">Industrial AI infrastructure for the physical world.</h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-slate-400">Reliability engineering is the wedge. SyncAI’s broader intent is to connect technical evidence, specialist intelligence, operating context and human authority across asset-intensive work.</p>
          <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
            {(['Implemented', 'Available for a scoped pilot', 'In development', 'Planned'] as Capability['maturity'][]).map((label) => <span key={label} className={`rounded-full border px-3 py-1.5 ${maturityStyles[label]}`}>{label}</span>)}
          </div>
        </div>
      </section>
      <section className="border-b border-white/10 bg-[#151618]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
            {capabilities.map((capability) => <article key={capability.title} className="bg-[#151618] p-7 sm:p-8"><div className="flex flex-wrap items-start justify-between gap-3"><h2 className="text-xl font-semibold text-white">{capability.title}</h2><span className={`rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.1em] ${maturityStyles[capability.maturity]}`}>{capability.maturity}</span></div><p className="mt-4 text-sm leading-7 text-slate-400">{capability.body}</p></article>)}
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div><h2 className="text-3xl font-semibold tracking-[-0.03em] text-white">Capability is not the same as customer acceptance.</h2><p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">A scoped evaluation or pilot confirms the systems of record, data boundaries, workflow, approval authority and KPI that apply to your operation. Public pages do not claim certifications, customer outcomes or universal integrations that have not been formally established.</p></div>
          <Link href="/strategic-pilot" className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200">Discuss a scoped pilot</Link>
        </div>
      </section>
    </main>
  );
}
