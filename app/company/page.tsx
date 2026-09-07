import type { Metadata } from 'next';
import Link from 'next/link';
import { RIA_LEDE } from '@/lib/ria-copy';
import { APP_SETUP_URL } from '@/lib/site-links';
import { organizationSchema, pageMetadata, softwareApplicationSchema } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Company',
  description:
    'SyncAI is governed industrial intelligence for mining, energy, and oil and gas reliability. Ask, evidence, recommend, a named human decides, then verify. Not plant execute. Not generic chat.',
  path: '/company',
});

const loop = [
  {
    step: '01',
    title: 'Ask',
    body: 'Start with a real reliability or maintenance question: a trip pattern, a backlog call, a strategy review, or a failure that will not stay closed.',
  },
  {
    step: '02',
    title: 'Evidence',
    body: 'Ground the question in approved procedures, asset context, work history, condition evidence, and the operating facts that can actually be shown.',
  },
  {
    step: '03',
    title: 'Recommend',
    body: 'Structure a reviewable technical recommendation. Keep observed facts, hypotheses, competing explanations, and missing information distinct.',
  },
  {
    step: '04',
    title: 'Human decide',
    body: 'A named person accepts, rejects, escalates, or returns the recommendation. Recommend is not authorize. Approval stays explicit.',
  },
  {
    step: '05',
    title: 'Verify',
    body: 'Close the loop with the evidence and KPIs that show whether the intervention worked. Carry that record forward.',
  },
];

const notThis = [
  {
    title: 'Not plant execute',
    body: 'SyncAI does not dispatch unsupervised work to the plant. Direct plant execute is disabled. Authorized work proceeds through the customer’s existing systems of record and operating authority.',
  },
  {
    title: 'Not generic chat',
    body: 'This is not an open-ended chatbot on industrial data. The product is a decision workspace: evidence grades, competing explanations, and a lowest-regret next action a human can review.',
  },
  {
    title: 'Not a CMMS replacement',
    body: 'CMMS, EAM, ERP, historian, and inspection systems remain systems of record. SyncAI is designed to sit across that estate, not rip and replace it.',
  },
  {
    title: 'Not self-serve onboarding as a product',
    body: 'There is a live Reliability Engineer workspace for a technical question. Commercial entry is a bounded Reliability Intelligence Assessment or a Strategic Pilot — not a claim that seamless self-guided onboarding is live.',
  },
];

const whoFor = [
  {
    name: 'Mining & heavy equipment',
    body: 'Haul, load, and plant assets where work history, condition evidence, and production pressure rarely sit in one decision-ready place.',
    href: '/ai-for-mining-reliability',
  },
  {
    name: 'Energy & utilities',
    body: 'Aging generation, transmission, and plant assets that need a defensible recommendation before any change to protection, outage, or work strategy.',
    href: '/industries',
  },
  {
    name: 'Oil & gas',
    body: 'Critical rotating and static equipment, fragmented work history, and backlog-driven prioritization that still require a named approver.',
    href: '/industries',
  },
];

export default function CompanyPage() {
  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Company</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            Governed intelligence for mining, energy, and oil and gas reliability.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-slate-400">
            SyncAI is a product of Stigg. It helps reliability and maintenance teams investigate
            failures, prioritize work, and move recommendations through controlled human approval —
            using the evidence the operation already has.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">What Sync is</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              An industrial intelligence layer above the systems you already run.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-slate-400">
            <p>
              The common problem is not a shortage of data. It is converting fragmented technical
              evidence into a consistent, accountable next action at operating speed.
            </p>
            <p>
              SyncAI connects approved knowledge, asset context, work history, and operating evidence
              so a recommendation can be reviewed. The basis stays visible. Uncertainty stays named.
              A human remains the approver.
            </p>
            <p className="font-semibold text-slate-200">
              Recommend is not authorize. Plant execute is not a marketed capability.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Who it is for</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Reliability teams in asset-intensive operations. Beachhead first.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              The first commercial motion is mining, energy, and oil and gas. Other asset-intensive
              industries are later — not live tenant templates.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 lg:grid-cols-3">
            {whoFor.map((item) => (
              <Link key={item.name} href={item.href} className="bg-[#081018] p-7 hover:bg-[#0B151F]">
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.body}</p>
                <p className="mt-5 text-sm font-semibold text-cyan-300">Read the industry fit →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">The governed loop</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Ask → Evidence → Recommend → Human decide → Verify
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              High-consequence industrial decisions should show their basis, expose uncertainty, keep
              authority clear, and verify the outcome.
            </p>
          </div>
          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {loop.map((item) => (
              <div key={item.step} className="grid gap-4 py-7 md:grid-cols-[90px_220px_1fr] md:items-start">
                <span className="font-mono text-sm text-slate-600">{item.step}</span>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="max-w-3xl text-sm leading-6 text-slate-400">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
            <Link href="/architecture" className="text-cyan-300 hover:text-cyan-200">
              Architecture →
            </Link>
            <Link href="/security" className="text-cyan-300 hover:text-cyan-200">
              Security &amp; approval primitives →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">What it is not</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Keep the product boundary honest.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
            {notThis.map((item) => (
              <article key={item.title} className="bg-[#081018] p-7 sm:p-8">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Who builds it</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white">
            SyncAI is a product of Stigg.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-7 text-slate-400">
            <p>
              The company page does not list a fabricated team, advisor bench, or headcount. Contact
              is{' '}
              <a href="mailto:info@syncai.ca" className="font-semibold text-cyan-300 hover:text-cyan-200">
                info@syncai.ca
              </a>
              .
            </p>
            <p>
              Commercial work today is a bounded Reliability Intelligence Assessment and, where the
              evidence supports it, a Strategic Pilot. There are no customer case studies or savings
              claims published on this site.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 rounded-xl border border-white/10 bg-[#0B151F] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">How to start</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                Establish the reliability truth, then operationalize only what the evidence supports.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{RIA_LEDE}</p>
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
