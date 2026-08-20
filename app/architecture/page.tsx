import Link from 'next/link';

const layers = [
  {
    number: '01',
    title: 'Systems of record',
    body: 'CMMS/EAM, ERP, historians, inspection systems, approved documents, work history, asset configuration, and other operating sources remain the authoritative systems around the platform.',
    details: ['Structured and unstructured evidence', 'Asset and work context', 'Approved knowledge sources'],
  },
  {
    number: '02',
    title: 'Evidence and context layer',
    body: 'SyncAI normalizes the context needed for a decision while keeping source provenance and the distinction between observed evidence, assumptions, and missing information visible.',
    details: ['Source-aware retrieval', 'Asset context', 'Evidence provenance'],
  },
  {
    number: '03',
    title: 'Industrial intelligence',
    body: 'Domain workflows combine deterministic analysis with AI reasoning to investigate, compare options, and build a reviewable technical recommendation.',
    details: ['Reliability analysis', 'Decision-case workflows', 'Domain-specific reasoning'],
  },
  {
    number: '04',
    title: 'Governance and authority',
    body: 'Recommendations move through role-aware review, escalation, and approval paths before controlled action. Human accountability stays explicit.',
    details: ['Approval gates', 'Role-based access', 'Decision traceability'],
  },
  {
    number: '05',
    title: 'Verification',
    body: 'The operating loop closes by measuring the agreed outcome, preserving the decision record, and making the result available for subsequent work.',
    details: ['Outcome evidence', 'KPI verification', 'Closed-loop learning'],
  },
];

const securityControls = [
  {
    title: 'Access control',
    body: 'Multi-tenant boundaries and role-aware access are implemented in the application and data layer. Customer configuration determines who can see and act on operational information.',
  },
  {
    title: 'Auditability',
    body: 'Decision records, evidence references, approvals, and workflow state are designed to remain reviewable instead of disappearing into an opaque chat transcript.',
  },
  {
    title: 'Data handling',
    body: 'SyncAI is designed to work from the customer-approved information boundary. Deployment and integration requirements are defined during security and data discovery.',
  },
  {
    title: 'Certification claims',
    body: 'Third-party certifications are represented publicly only when formally achieved and current. Architecture discussions distinguish implemented controls from certification status.',
  },
];

export default function ArchitecturePage() {
  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Architecture</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            An industrial intelligence layer built around evidence, authority, and verification.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            SyncAI is designed to sit across the existing operating information estate, help teams build technically defensible decisions, and preserve the governance required to act on them.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">System model</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Five layers from source evidence to verified outcome.
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-y border-white/10">
            {layers.map((layer) => (
              <article key={layer.number} className="grid gap-5 py-8 lg:grid-cols-[90px_280px_1fr]">
                <span className="font-mono text-sm text-slate-600">{layer.number}</span>
                <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
                <div>
                  <p className="max-w-3xl text-sm leading-7 text-slate-400">{layer.body}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {layer.details.map((detail) => (
                      <span key={detail} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-500">
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Human authority</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
                The model is not the final approver.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                Industrial decisions can change safety exposure, production risk, maintenance spend, and asset life. SyncAI therefore treats recommendations and authority as separate layers.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0B151F] p-7 sm:p-9">
              <div className="grid gap-4 sm:grid-cols-4">
                {['Recommendation', 'Technical review', 'Authorized decision', 'Controlled action'].map((item, index) => (
                  <div key={item} className="rounded-lg border border-white/10 p-4">
                    <p className="font-mono text-xs text-slate-600">0{index + 1}</p>
                    <p className="mt-5 text-sm font-semibold text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-slate-500">
                Exact approval paths are configured for the customer’s operating model, roles, risk boundaries, and systems of record.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Security posture</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Describe the controls that exist. Do not overstate the ones still being validated.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
            {securityControls.map((control) => (
              <article key={control.title} className="bg-[#0A131C] p-7 sm:p-8">
                <h3 className="text-lg font-semibold text-white">{control.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{control.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 rounded-xl border border-white/10 bg-[#0B151F] p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white">Map SyncAI to your operating environment.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                A pilot starts by defining systems of record, evidence boundaries, decision authority, security requirements, and the KPI that will verify value.
              </p>
            </div>
            <Link
              href="/strategic-pilot"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
            >
              Discuss a Strategic Pilot
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
