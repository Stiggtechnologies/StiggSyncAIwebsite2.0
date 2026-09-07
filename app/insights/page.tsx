import Link from 'next/link';
import { insightArticles } from '@/lib/insights';

export default function InsightsPage() {
  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Insights</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            Industrial AI insights
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-slate-400">
            Analysis on reliability evidence, industrial AI governance, and why maintenance systems
            still leave the decision unproven.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {insightArticles.map((article) => (
              <article key={article.slug} className="py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  {article.category}
                  <span className="ml-3 font-normal tracking-normal text-slate-500">{article.readTime}</span>
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  <Link href={`/insights/${article.slug}`} className="hover:text-cyan-200">
                    {article.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-400">{article.excerpt}</p>
                <Link
                  href={`/insights/${article.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  Read article →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-8 rounded-xl border border-white/10 bg-[#0B151F] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Start with evidence</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white">
                A bounded assessment, not a generic AI report.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                If the records cannot support the conclusion, the assessment says so. That is the
                product.
              </p>
            </div>
            <Link
              href="/reliability-assessment"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
            >
              Reliability Assessment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
