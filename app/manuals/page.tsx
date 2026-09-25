import type { Metadata } from 'next';
import Link from 'next/link';
import ManualByline from '@/components/manuals/ManualByline';
import { fieldManual, fieldManualPath, manuals } from '@/lib/manuals';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Manuals',
  description:
    'Public Sync field manuals. Field Manual v0, by Orville Davis, states the Decision Case and the Stage-1 boundaries around it.',
  path: '/manuals',
});

export default function ManualsPage() {
  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Manuals</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            Field manuals
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-slate-400">
            Public doctrine for how a Sync decision is formed. These pages state the order of the
            work and the limits of what this edition claims. They are not customer stories.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <div className="divide-y divide-white/10 border-y border-white/10">
            {manuals.map((manual) => (
              <article key={manual.slug} className="py-10">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Decision Case
                  <span className="ml-3 font-normal tracking-normal text-slate-500">
                    {manual.version} · {manual.published}
                  </span>
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-white">
                  <Link href={fieldManualPath()} className="hover:text-cyan-200">
                    {manual.title}
                  </Link>
                </h2>
                <div className="mt-3">
                  <ManualByline />
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{manual.excerpt}</p>
                <Link
                  href={fieldManualPath()}
                  className="mt-5 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
                >
                  Read the manual →
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
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Related reading</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white">
                Practice notes live in Insights. The manual states the case.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                {fieldManual.author} is the author of the field manual. Insights remains the place
                for reliability essays. Neither catalog publishes a customer result.
              </p>
            </div>
            <Link
              href="/insights"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
            >
              Insights
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
