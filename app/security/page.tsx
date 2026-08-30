import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Security',
  description:
    'SyncAI security is described by implemented controls: encryption, row-level security, audit logging, and named human approval. Third-party certifications are claimed only when current. Enterprise SSO is a later product step.',
  alternates: { canonical: 'https://syncai.ca/security' },
  openGraph: {
    title: 'Security | SyncAI',
    description:
      'Encryption, RLS, audit logs, and human approval as a product primitive. Certifications are represented only when formally achieved and current.',
    url: 'https://syncai.ca/security',
    siteName: 'SyncAI',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'SyncAI Security' }],
  },
};

const implementedControls = [
  {
    title: 'Human approval is a primitive',
    body: 'SyncAI recommends. A named human accepts, rejects, escalates, or returns the recommendation. Direct plant execute is disabled. Approval, escalation, and accountability are product architecture — not a policy overlay.',
  },
  {
    title: 'Audit log and decision traceability',
    body: 'Recommendations, evidence references, approval actions, and workflow state are designed to remain reviewable. The basis of a decision should not disappear into an opaque chat transcript.',
  },
  {
    title: 'Encryption',
    body: 'Operational information is encrypted in transit and at rest in the hosted environment. Customer-specific encryption and residency requirements are described against the actual engagement, not as a generic guarantee.',
  },
  {
    title: 'Row-level security',
    body: 'Multi-tenant isolation is enforced with row-level security (RLS) in the data layer, alongside application role boundaries. Customer configuration determines who can see and act on operational information.',
  },
  {
    title: 'Role-aware access',
    body: 'Access is scoped by role and the information boundary agreed for the workspace. Least privilege is the design intent. Enterprise SSO is a later product step, not a current capability.',
  },
  {
    title: 'Evidence before automation',
    body: 'The platform keeps observed evidence, assumptions, and missing information distinct. People accountable for the decision can see why a recommendation was made.',
  },
];

const notClaimed = [
  {
    title: 'Enterprise SSO',
    body: 'Identity-provider SSO is a later product step. It is not a shipping capability on this site.',
  },
  {
    title: 'Packaged on-prem',
    body: 'There is no packaged on-premise product to order from this page. Deployment and data-handling requirements are defined during security and data discovery.',
  },
  {
    title: 'Third-party certifications',
    body: 'SOC 2, HIPAA, and similar attestations are represented publicly only when formally achieved and current. Architecture discussions distinguish implemented controls from certification status.',
  },
];

export default function SecurityPage() {
  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Security & governance</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            Describe the controls that exist. Keep human approval in the architecture.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-400">
            SyncAI is governed industrial intelligence. Security and deployment capabilities are described by implemented controls and validated configuration — not by a certification badge or a packaged on-prem SKU.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Implemented controls</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Encryption, isolation, auditability, and named authority.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
            {implementedControls.map((control) => (
              <article key={control.title} className="bg-[#0A131C] p-7 sm:p-8">
                <h3 className="text-lg font-semibold text-white">{control.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{control.body}</p>
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
                Industrial recommendations can affect safety, production, cost, and asset life. SyncAI therefore treats recommendation and authority as separate layers. A named human remains accountable.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0B151F] p-7 sm:p-9">
              <div className="grid gap-4 sm:grid-cols-4">
                {['Recommendation', 'Evidence review', 'Named approval', 'Controlled work'].map((item, index) => (
                  <div key={item} className="rounded-lg border border-white/10 p-4">
                    <p className="font-mono text-xs text-slate-600">0{index + 1}</p>
                    <p className="mt-5 text-sm font-semibold text-slate-200">{item}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-6 text-slate-500">
                Exact approval paths are configured for the customer’s operating model, roles, and risk boundaries. Direct plant execute stays off.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">What we do not claim</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Later product steps are not current capabilities.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              SyncAI does not represent third-party certifications as complete unless they have been formally achieved and are current.
            </p>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-3">
            {notClaimed.map((item) => (
              <article key={item.title} className="bg-[#0A131C] p-7 sm:p-8">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Data handling</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Work from the customer-approved information boundary.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              SyncAI is designed to use the records and systems the customer authorizes. Assessment work starts from customer-provided exports. Integration requirements for a later deployment are defined during security and data discovery — not assumed as live production connectors today.
            </p>
            <p className="mt-5 text-base leading-7 text-slate-400">
              We do not train foundation models on customer operational data without explicit consent. Competitive and operating information stays the customer’s.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 rounded-xl border border-white/10 bg-[#0B151F] p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold tracking-[-0.03em] text-white">Security contact</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
                For vulnerability reports, architecture questions, or customer-specific control discussions against an agreed scope.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:security@syncai.ca"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
              >
                security@syncai.ca
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
              >
                General inquiries
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
