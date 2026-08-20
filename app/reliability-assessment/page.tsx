import type { Metadata } from 'next';
import Link from 'next/link';
import ReliabilityAssessmentInquiryForm from '@/components/assessment/ReliabilityAssessmentInquiryForm';

export const metadata: Metadata = {
  title: 'Reliability Intelligence Assessment | SyncAI',
  description:
    'A fixed-scope, 6–8 week reliability assessment that turns existing maintenance records into a decision-grade baseline, evidence-graded findings, prioritized opportunities, and a 90-day action plan.',
  alternates: {
    canonical: 'https://syncai.ca/reliability-assessment',
  },
};

const deliverables = [
  'Executive Reliability Brief',
  'Criticality Register',
  'Failure Taxonomy & Mapping',
  'Evidence Integrity Matrix',
  'Reliability Performance Baseline',
  'Bad-Actor / Repeat-Failure Analysis',
  'Reliability Opportunity Register',
  'Executive Decision Register',
  '90-Day Action Plan',
  'Final Executive Workshop',
];

const evidenceLevels = [
  {
    label: 'Supported',
    body: 'Evidence is sufficiently complete and internally consistent for the stated conclusion.',
    action: 'Can support a management decision subject to normal engineering authority.',
  },
  {
    label: 'Partially supported',
    body: 'The direction may be useful, but one or more material limitations remain.',
    action: 'Use for prioritization; close the named evidence gap before an irreversible action.',
  },
  {
    label: 'Unsupported',
    body: 'The available records cannot defend the requested conclusion.',
    action: 'Do not decide from the metric. Secure the missing evidence first.',
  },
];

const bestFit = [
  'Mining & heavy equipment',
  'Rental & construction fleets',
  'Energy & process operations',
  'Manufacturing',
  'Utilities & infrastructure',
  'Marine, ports & MRO',
];

export default function ReliabilityAssessmentPage() {
  return (
    <main className="min-h-screen bg-[#081018] pt-16 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Reliability Intelligence Assessment
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
              Know what your maintenance data actually proves.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
              A fixed-scope, 6–8 week assessment that turns the maintenance records you already have into a defensible reliability baseline, evidence-graded findings, prioritized opportunities, and a 90-day action plan—without installing software or giving SyncAI access to your production systems.
            </p>

            <div className="mt-9 flex flex-wrap gap-3 text-sm">
              {['US$35,000 fixed fee', '6–8 weeks', 'One bounded operating domain'].map((item) => (
                <span key={item} className="rounded-full border border-white/15 px-4 py-2 text-slate-200">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#assessment-call"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-200"
              >
                Request a 30-minute assessment call
              </a>
              <a
                href="https://app.syncai.ca/demo/copilot#syncai-chat"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.05]"
              >
                Try Reliability Engineer
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0B151F] p-7 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Standard assessment scope</p>
            <dl className="mt-6 divide-y divide-white/10">
              <div className="grid gap-2 py-4 sm:grid-cols-[170px_1fr]">
                <dt className="text-sm font-semibold text-white">Assets</dt>
                <dd className="text-sm text-slate-400">Up to 500 assets</dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[170px_1fr]">
                <dt className="text-sm font-semibold text-white">History</dt>
                <dd className="text-sm text-slate-400">Up to 36 months</dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[170px_1fr]">
                <dt className="text-sm font-semibold text-white">Records</dt>
                <dd className="text-sm text-slate-400">Up to 250,000 maintenance records</dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[170px_1fr]">
                <dt className="text-sm font-semibold text-white">Workshops</dt>
                <dd className="text-sm text-slate-400">Three structured customer workshops</dd>
              </div>
              <div className="grid gap-2 py-4 sm:grid-cols-[170px_1fr]">
                <dt className="text-sm font-semibold text-white">Deployment credit</dt>
                <dd className="text-sm text-slate-400">Up to US$15,000 toward a qualifying SyncAI deployment initiated within 90 days</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
          <div className="grid gap-4 text-sm font-semibold text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            <p>No software installation.</p>
            <p>No credentials.</p>
            <p>No production-system access.</p>
            <p>No unsupported ROI.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">The problem</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Maintenance systems can produce numbers without proving the decision behind them.
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-400">
              Asset hierarchies drift. Dealer and OEM work may sit outside the CMMS. Failure codes become inconsistent. Downtime context can be incomplete. A dashboard can still produce a precise MTBF, PM-compliance percentage, or savings estimate even when the source evidence is not decision-grade.
            </p>
            <p className="mt-5 text-base font-semibold leading-7 text-slate-200">
              SyncAI starts with one rule: if the evidence cannot support the conclusion, we say so.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0B151F] p-7 sm:p-8">
            <p className="text-sm font-semibold text-white">You provide exports only</p>
            <div className="mt-5 grid gap-3 text-sm text-slate-400 sm:grid-cols-2">
              {[
                'Asset register',
                'Work-order history',
                'PM plans / library',
                'Downtime or meter history',
                'Dealer / OEM records where available',
                'Utilization, production, OEE, or equivalent operating measure',
              ].map((item) => (
                <div key={item} className="border-t border-white/10 pt-3">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">What you receive</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              A management-ready reliability baseline, not a generic AI report.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {deliverables.map((item, index) => (
              <div key={item} className="min-h-32 bg-[#0A131C] p-5">
                <p className="font-mono text-xs text-slate-600">{String(index + 1).padStart(2, '0')}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Evidence Integrity Standard</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
                Every material conclusion gets an evidence grade.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-400">
                Severity and confidence are kept separate. A high-consequence issue can still have low confidence; in that case, the lowest-regret action may be to secure the missing evidence rather than claim causality.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {evidenceLevels.map((level) => (
                <div key={level.label} className="grid gap-3 py-6 md:grid-cols-[180px_1fr]">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-cyan-200">{level.label}</h3>
                  <div>
                    <p className="text-sm leading-6 text-slate-300">{level.body}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{level.action}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Best fit</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
                Built for bounded reliability questions in asset-intensive operations.
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {bestFit.map((item) => (
                  <div key={item} className="rounded-lg border border-white/10 bg-white/[0.02] px-5 py-4 text-sm font-semibold text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#081018] p-7 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">Commercial structure</p>
              <p className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">US$35,000</p>
              <p className="mt-2 text-sm text-slate-400">Fixed fee · 6–8 weeks · Standard flagship scope</p>
              <p className="mt-6 text-sm leading-6 text-slate-300">
                The assessment is a bounded product, not open-ended consulting. Out-of-scope custom analysis is separately scoped rather than allowed to expand the engagement indefinitely.
              </p>
              <p className="mt-5 text-sm leading-6 text-slate-400">
                Multi-site, multi-fleet, portfolio, and cross-domain assessments are available under an enterprise scope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">From assessment to continuous intelligence</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Establish the governed baseline first. Operationalize only what the evidence supports.
            </h2>
          </div>

          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-3">
            <div className="bg-[#081018] p-7">
              <p className="font-mono text-xs text-slate-600">01</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Assess</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Establish the canonical asset, failure, evidence, opportunity, and decision baseline.</p>
            </div>
            <div className="bg-[#081018] p-7">
              <p className="font-mono text-xs text-slate-600">02</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Operationalize</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Select one to three high-confidence workflows to move into governed SyncAI execution.</p>
            </div>
            <div className="bg-[#081018] p-7">
              <p className="font-mono text-xs text-slate-600">03</p>
              <h3 className="mt-4 text-xl font-semibold text-white">Verify & expand</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">Track 30/60/90-day outcomes, verify value, and expand only where the operating evidence justifies it.</p>
            </div>
          </div>

          <div className="mt-8">
            <Link href="/strategic-pilot" className="text-sm font-semibold text-cyan-300 hover:text-cyan-200">
              Explore the Strategic Pilot →
            </Link>
          </div>
        </div>
      </section>

      <section id="assessment-call" className="bg-[#0A131C]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Start with scope</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Request a 30-minute assessment call.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              We will confirm the bounded asset domain, the records available, the management question, and whether the Standard assessment is the right commercial fit.
            </p>
            <p className="mt-5 text-sm leading-6 text-slate-500">
              Customer-specific security representations are made against the actual environment and agreed scope. SyncAI does not rely on unverified certification or deployment claims.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#0B151F] p-6 sm:p-8">
            <ReliabilityAssessmentInquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}
