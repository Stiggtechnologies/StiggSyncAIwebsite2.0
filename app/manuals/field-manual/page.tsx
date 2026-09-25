import Link from 'next/link';
import ChapterProse from '@/components/manuals/ChapterProse';
import ManualByline from '@/components/manuals/ManualByline';
import { FieldManualJsonLd, fieldManualMetadata } from '@/lib/manual-page';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';

export const metadata = fieldManualMetadata();

const spineLabel = spineChapters.map((chapter) => chapter.spine).join(' → ');

export default function FieldManualPage() {
  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <FieldManualJsonLd />
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <Link href="/manuals" className="hover:text-cyan-200">
              Manuals
            </Link>
          </p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            {fieldManual.title}
          </h1>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
            Version {fieldManual.version}
          </p>
          <div className="mt-6">
            <ManualByline />
          </div>
          <p className="mt-8 text-lg leading-[1.7] text-slate-300">
            Version 0 is the public contents of the Decision Case. A signed-in user can complete
            that case on the product. This edition describes the journey and the boundaries around
            it.
          </p>
          <p className="mt-5 font-mono text-sm leading-7 text-cyan-200">{spineLabel}</p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Contents</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">Decision Case spine</h2>
          <ol className="mt-8 divide-y divide-white/10 border-y border-white/10">
            {spineChapters.map((chapter) => (
              <li key={chapter.slug} className="grid gap-3 py-6 sm:grid-cols-[4rem_1fr] sm:items-baseline">
                <span className="font-mono text-sm text-slate-500">{chapter.number}</span>
                <div>
                  <Link
                    href={fieldManualPath(chapter.slug)}
                    className="text-lg font-semibold text-white hover:text-cyan-200"
                  >
                    {chapter.spine}
                  </Link>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{chapter.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <h2 className="mt-14 text-3xl font-semibold tracking-[-0.03em] text-white">Honesty boundaries</h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            These rules apply to every chapter. They are part of the contents, beside the spine.
          </p>
          <div className="mt-6 rounded-xl border border-white/10 bg-[#081018] p-6 sm:p-8">
            <Link
              href={fieldManualPath(honestyChapter.slug)}
              className="text-lg font-semibold text-white hover:text-cyan-200"
            >
              {honestyChapter.title}
            </Link>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li>Recommend is not authorize.</li>
              <li>Evidence is required before a recommendation is treated as a decision.</li>
              <li>
                Stage-1 readiness is the signed-in Decision Case. Plant execute, live connector tag
                pull, SMTP invite delivery, and automatic revocation of access on expiry are outside
                this edition.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Chapters</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
            First-edition stubs
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-400">
            Each stub is the public statement of that step. Later editions can deepen a chapter.
            The spine stays in this order.
          </p>
          <div className="mt-12 space-y-16">
            {fieldManual.chapters.map((chapter) => (
              <article key={chapter.slug} id={chapter.slug} className="scroll-mt-24">
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-cyan-300">
                  {chapter.number === '—' ? 'Standing rule' : chapter.number}
                  <span className="ml-3 text-slate-500">{chapter.spine}</span>
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  <Link href={fieldManualPath(chapter.slug)} className="hover:text-cyan-200">
                    {chapter.title}
                  </Link>
                </h3>
                <div className="mt-5">
                  <ChapterProse chapter={chapter} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 lg:px-8">
          <p className="text-sm leading-7 text-slate-500">
            {fieldManual.author} is the author of this field manual. SyncAI publishes it at{' '}
            <Link href={fieldManualPath()} className="text-cyan-300 hover:text-cyan-200">
              syncai.ca/manuals/field-manual
            </Link>
            . Version {fieldManual.version} is doctrine for the Decision Case. It is not a customer
            case study.
          </p>
          <div className="mt-8 flex flex-wrap gap-5 text-sm font-semibold">
            <Link href="/manuals" className="text-cyan-300 hover:text-cyan-200">
              All manuals
            </Link>
            <Link href="/insights" className="text-cyan-300 hover:text-cyan-200">
              Insights
            </Link>
            <Link href="/architecture" className="text-cyan-300 hover:text-cyan-200">
              Architecture
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
