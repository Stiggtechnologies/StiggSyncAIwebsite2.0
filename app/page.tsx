import Link from 'next/link';

const decisionPath = [
  {
    step: '01',
    title: 'Ground the question',
    body: 'Start with approved procedures, asset configuration, work history, condition evidence, and the operating context that actually governs the decision.',
  },
  {
    step: '02',
    title: 'Separate fact from hypothesis',
    body: 'SyncAI keeps observed evidence, assumptions, competing explanations, and missing information distinct instead of blending them into a confident answer.',
  },
  {
    step: '03',
    title: 'Build the decision case',
    body: 'The Reliability Engineer structures the technical reasoning, identifies what is blocked, and recommends the lowest-regret next action.',
  },
  {
    step: '04',
    title: 'Route human authority',
    body: 'Approval boundaries stay explicit. Recommendations can be reviewed, escalated, accepted, rejected, or returned for more evidence.',
  },
  {
    step: '05',
    title: 'Verify the outcome',
    body: 'Close the loop with the evidence and KPIs that prove whether the intervention worked—and feed that learning back into the operating system.',
  },
];

const capabilities = [
  'Failure investigation and evidence-led diagnosis',
  'Maintenance strategy and task optimization',
  'Work prioritization and risk-based decision support',
  'Reliability analysis across asset history and condition evidence',
  'Governed recommendations with approval boundaries',
  'Decision records, traceability, and outcome verification',
];

const enterprisePrinciples = [
  {
    title: 'Works with the systems you already run',
    body: 'SyncAI is designed to sit across the industrial information estate rather than force a rip-and-replace of the CMMS, EAM, ERP, historian, document, and inspection systems that remain systems of record.',
  },
  {
    title: 'Human authority is part of the architecture',
    body: 'Industrial recommendations can affect safety, production, cost, and asset life. SyncAI treats approval, escalation, and accountability as product primitives—not afterthoughts.',
  },
  {
    title: 'Evidence before automation',
    body: 'The platform is designed to expose missing or conflicting evidence, preserve assumptions, and keep the basis of a recommendation visible to the people accountable for the decision.',
  },
];

const industries = [
  'Mining & heavy equipment',
  'Energy & utilities',
  'Oil & gas',
  'Manufacturing',
  'Transportation & fleets',
  'Infrastructure & facilities',
];

export default function Home() {
  return (
    <main className="bg-[#081018] text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-16 px-6 py-28 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">
              Governed industrial intelligence
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              Better industrial decisions, grounded in the evidence your operation already has.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              SyncAI connects approved knowledge, asset context, work history, and operating evidence so reliability and maintenance teams can investigate failures, prioritize work, and move recommendations through controlled human approval.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://app.syncai.ca/demo/copilot#syncai-chat"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200"
              >
                Try Reliability Engineer
              </a>
              <Link
                href="/strategic-pilot"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.05]"
              >
                Discuss a Strategic Pilot
              </Link>
            </div>

            <div className="mt-12 grid max-w-2xl gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-white">Evidence-led</p>
                <p className="mt-1 text-sm text-slate-500">Facts, hypotheses, gaps</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Human-governed</p>
                <p className="mt-1 text-sm text-slate-500">Approval stays explicit</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Operational</p>
                <p className="mt-1 text-sm text-slate-500">Built around asset work</p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0B151F] shadow-2xl shadow-black/30">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-sm font-semibold text-white">Reliability Engineer</p>
                <p className="text-xs text-slate-500">Decision workspace</p>
              </div>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-200">
                Human approval required
              </span>
            </div>

            <div className="space-y-5 p-5 sm:p-6">
              <div className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Question</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Seven low-lube-pressure trips in six weeks. Five occurred within 20 minutes of startup. Should we lower the trip setpoint or replace the bearings?
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-white/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">Established facts</p>
                  <ul className="mt-3 space-y-2 text-sm leading-5 text-slate-300">
                    <li>• 7 trips / 6 weeks</li>
                    <li>• 5 clustered after startup</li>
                    <li>• Historian scaling conflicts with field calibration</li>
                  </ul>
                </div>
                <div className="rounded-lg border border-white/10 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">What is not proven</p>
                  <ul className="mt-3 space-y-2 text-sm leading-5 text-slate-300">
                    <li>• Bearing damage</li>
                    <li>• True low-pressure condition</li>
                    <li>• Safe basis for a lower trip setpoint</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-cyan-300/20 bg-cyan-300/[0.045] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200">Lowest-regret next action</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Do not change the protection setpoint or condemn the bearings yet. Reconcile pressure scaling, capture a controlled startup sample, and complete a governed post-trip inspection before selecting the intervention.
                </p>
              </div>

              <div className="flex flex-col justify-between gap-3 border-t border-white/10 pt-4 text-xs text-slate-500 sm:flex-row">
                <span>Evidence → reasoning → authority → verification</span>
                <span>Decision basis remains reviewable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">The operating model</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              One governed path from operational evidence to controlled action.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              SyncAI is designed around the way high-consequence industrial decisions should be made: show the basis, expose uncertainty, keep authority clear, and verify the outcome.
            </p>
          </div>

          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {decisionPath.map((item) => (
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
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">The wedge</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Start with a Reliability Engineer that can work like an experienced technical partner.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Reliability is where engineering knowledge, maintenance history, asset risk, work execution, and operating context collide. It is the proving ground for SyncAI’s broader industrial intelligence layer.
            </p>
            <a
              href="https://app.syncai.ca/demo/copilot#syncai-chat"
              className="mt-8 inline-flex items-center text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              Open the live workspace →
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((capability) => (
              <div key={capability} className="min-h-28 rounded-lg border border-white/10 bg-white/[0.02] p-5">
                <div className="mb-4 h-px w-8 bg-cyan-300/60" />
                <p className="text-sm font-semibold leading-6 text-slate-200">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Enterprise design principles</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              AI that fits the control environment of an industrial operator.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-3">
            {enterprisePrinciples.map((item) => (
              <article key={item.title} className="bg-[#0A131C] p-7 sm:p-8">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.body}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Role-based access', 'Approval workflows', 'Decision traceability', 'Evidence provenance', 'Outcome verification', 'Multi-tenant controls'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-400">
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 max-w-3xl text-xs leading-5 text-slate-600">
            Security and deployment capabilities are described by implemented controls and validated configuration. SyncAI does not represent third-party certifications as complete unless they have been formally achieved and are current.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Where it fits</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
                Built for asset-intensive organizations.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                The common problem is not a shortage of data. It is converting fragmented technical evidence into consistent, accountable decisions at operating speed.
              </p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {industries.map((industry) => (
                <div key={industry} className="bg-[#081018] px-6 py-7 text-sm font-semibold text-slate-200">
                  {industry}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 rounded-xl border border-white/10 bg-[#0B151F] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Start with a real operating question</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Bring us one reliability problem where the decision matters.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                We’ll define the evidence boundary, the human approval gates, and how value will be verified before scaling the deployment.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href="https://app.syncai.ca/demo/copilot#syncai-chat"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
              >
                Try Reliability Engineer
              </a>
              <Link
                href="/strategic-pilot"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
              >
                Discuss a Pilot
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
