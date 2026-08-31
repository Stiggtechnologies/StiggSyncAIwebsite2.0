'use client';

import Link from 'next/link';
import { ScoreResult, ROIResult, AssessmentData } from '@/lib/assessment-types';
import { formatFullCurrency } from '@/lib/assessment-scoring';
import { APP_SETUP_URL } from '@/lib/site-links';

interface ResultsDisplayProps {
  assessment: AssessmentData;
  score: ScoreResult;
  roi: ROIResult;
}

export default function ResultsDisplay({ assessment, score, roi }: ResultsDisplayProps) {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Assessment complete</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] text-white">Readiness summary</h1>
        <p className="mt-2 text-slate-500">{assessment.company}</p>
      </div>

      <section className="mb-6 rounded-xl border border-white/10 bg-[#0B151F] p-7 sm:p-8">
        <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <p className="text-sm text-slate-500">Readiness score</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-6xl font-semibold tracking-[-0.04em] text-white">{score.totalScore}</span>
              <span className="text-xl text-slate-600">/100</span>
            </div>
          </div>
          <div className="sm:text-right">
            <p className="text-sm text-slate-500">Classification</p>
            <p className="mt-2 text-xl font-semibold text-cyan-300">{score.classification}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 sm:grid-cols-5">
          <Score label="Operational complexity" value={score.breakdown.operationalComplexity} max={25} />
          <Score label="Downtime exposure" value={score.breakdown.downtimeExposure} max={25} />
          <Score label="Reactive ratio" value={score.breakdown.reactiveRatio} max={15} />
          <Score label="Governance pressure" value={score.breakdown.governancePressure} max={15} />
          <Score label="AI alignment" value={score.breakdown.aiStrategicAlignment} max={20} />
        </div>
      </section>

      <section className="mb-6 rounded-xl border border-amber-300/20 bg-amber-300/[0.035] p-7 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-200">Illustrative scenario — not a forecast</p>
        <h2 className="mt-3 text-2xl font-semibold text-white">Potential value pools to validate</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
          This range is calculated mechanically from the operating-cost inputs you supplied. It assumes a 10–20% sensitivity on unplanned downtime cost, 5–12% on maintenance labour cost, and 3–8% on spare-parts inventory value. Those percentages are scenario assumptions—not observed SyncAI customer outcomes or guaranteed savings.
        </p>

        <p className="mt-8 text-4xl font-semibold tracking-[-0.03em] text-white">
          {formatFullCurrency(roi.totalLow)} – {formatFullCurrency(roi.totalHigh)}
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <Scenario label="Downtime sensitivity" low={roi.downtimeLow} high={roi.downtimeHigh} />
          <Scenario label="Labour sensitivity" low={roi.laborLow} high={roi.laborHigh} />
          <Scenario label="Inventory sensitivity" low={roi.inventoryLow} high={roi.inventoryHigh} />
        </div>
      </section>

      <section className="rounded-xl border border-white/10 bg-[#0B151F] p-7 sm:p-8">
        <h2 className="text-2xl font-semibold text-white">What should happen next</h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
          Do not treat the scenario range as a business case. Select one material use case, establish its real baseline, define the evidence and approval boundary, and verify the measured outcome during a controlled pilot.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/strategic-pilot"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
          >
            Define a pilot
          </Link>
          <a
            href={APP_SETUP_URL}
            className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
          >
            Try Reliability Engineer
          </a>
        </div>
      </section>
    </div>
  );
}

function Score({ label, value, max }: { label: string; value: number; max: number }) {
  return (
    <div className="rounded-lg border border-white/10 p-3">
      <p className="text-lg font-semibold text-white">
        {Math.round(value)}/{max}
      </p>
      <p className="mt-1 text-xs leading-4 text-slate-500">{label}</p>
    </div>
  );
}

function Scenario({ label, low, high }: { label: string; low: number; high: number }) {
  return (
    <div className="rounded-lg border border-white/10 bg-[#081018] p-4">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-sm font-semibold text-slate-200">
        {formatFullCurrency(low)} – {formatFullCurrency(high)}
      </p>
    </div>
  );
}
