import Link from 'next/link';
import { RIA_LEDE } from '@/lib/ria-copy';
import { APP_SETUP_URL } from '@/lib/site-links';

const challenges = [
  {
    title: 'Unplanned equipment stops',
    body: 'Haul, load, and plant assets generate work history and condition evidence that rarely sit in one decision-ready place when a truck or circuit is down.',
  },
  {
    title: 'Reactive work pressure',
    body: 'Production pressure and incomplete failure coding make it hard to defend the next action — replace, inspect, defer, or change the strategy.',
  },
  {
    title: 'Thin experienced coverage',
    body: 'Reliability and maintenance judgment is concentrated in a few people. The record of why a call was made often leaves with the shift.',
  },
  {
    title: 'Parts and strategy guesses',
    body: 'Inventory and PM decisions get made from incomplete identity, mixed OEM/dealer history, and metrics that look precise without being decision-grade.',
  },
];

const fit = [
  'Failure investigation against work history and condition evidence',
  'Risk-based work prioritization recommendations',
  'Maintenance strategy review with explicit evidence grades',
  'Decision records that stay reviewable after the shift ends',
];

const equipment = [
  'Haul trucks',
  'Excavators',
  'Crushers',
  'Conveyors',
  'Drill rigs',
  'Loaders',
  'Grinding mills',
  'Pumps & compressors',
];

export default function MiningReliabilityPage() {
  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Mining & heavy equipment</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            AI for mining reliability — recommend, then a named human decides.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-slate-400">
            SyncAI is governed industrial intelligence for mining and heavy-equipment reliability.
            Bring a real failure, backlog, or strategy question. The product structures evidence,
            uncertainty, and a lowest-regret next action. Direct plant execute is disabled.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/reliability-assessment"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
            >
              Reliability Assessment
            </Link>
            <a
              href={APP_SETUP_URL}
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
            >
              Try Reliability Engineer
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">The operating problem</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Mining sites are not short of data. They are short of a defensible next action.
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 md:grid-cols-2">
            {challenges.map((item) => (
              <article key={item.title} className="bg-[#0A131C] p-7">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Where SyncAI fits</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
              Evidence-led recommendations for a bounded mining domain.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              This page does not claim predicted failures on a clock, downtime percentages, or
              customer savings. Those numbers are not published here because SyncAI does not
              manufacture results the records cannot support.
            </p>
          </div>
          <div className="grid gap-3">
            {fit.map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.02] p-5">
                <p className="text-sm font-semibold leading-6 text-slate-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Typical asset classes</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white">
            Built around the equipment reliability teams already argue about.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 md:grid-cols-4">
            {equipment.map((item) => (
              <div key={item} className="bg-[#0A131C] px-5 py-6 text-sm font-semibold text-slate-200">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">
            Asset classes listed here describe fit, not a live connector catalog. Assessment and
            pilot work starts from customer-provided records and a bounded operating question.{' '}
            <Link href="/industries" className="font-semibold text-cyan-300 hover:text-cyan-200">
              Energy and oil and gas
            </Link>
            {' · '}
            <Link href="/company" className="font-semibold text-cyan-300 hover:text-cyan-200">
              What Sync is
            </Link>
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 rounded-xl border border-white/10 bg-[#0B151F] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">How to start</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                One bounded entry product.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">{RIA_LEDE}</p>
            </div>
            <div className="flex flex-col gap-3">
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
