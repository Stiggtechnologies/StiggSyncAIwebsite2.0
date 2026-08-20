import AssessmentForm from '@/components/assessment/AssessmentForm';

export default function AIReadinessPage() {
  return (
    <main className="min-h-screen bg-[#081018] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Planning tool</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            Industrial AI readiness assessment
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Structure the operating context for an AI deployment: asset complexity, downtime exposure, governance pressure, current systems, and organizational readiness.
          </p>

          <div className="mt-8 rounded-lg border border-amber-300/20 bg-amber-300/[0.05] p-5 text-sm leading-6 text-amber-100/80">
            The financial range in this tool is an <strong>illustrative scenario model</strong>, not a forecast, customer outcome, or SyncAI performance claim. It applies explicit sensitivity factors to the cost inputs you provide so you can see which value pools may justify deeper validation.
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <AssessmentForm />
        </div>
      </section>
    </main>
  );
}
