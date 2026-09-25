import Link from 'next/link';
import ChapterProse from '@/components/manuals/ChapterProse';
import ManualByline from '@/components/manuals/ManualByline';
import { ManualChapterJsonLd } from '@/lib/manual-page';
import { fieldManual, fieldManualPath, getFieldManualChapter } from '@/lib/manuals';

export default function ManualChapterPage({ slug }: { slug: string }) {
  const chapter = getFieldManualChapter(slug);
  if (!chapter) return null;

  const index = fieldManual.chapters.findIndex((item) => item.slug === slug);
  const previous = index > 0 ? fieldManual.chapters[index - 1] : undefined;
  const next = index >= 0 ? fieldManual.chapters[index + 1] : undefined;

  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <ManualChapterJsonLd slug={slug} />
      <article className="border-b border-white/10">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            <Link href={fieldManualPath()} className="hover:text-cyan-200">
              Field Manual {fieldManual.version}
            </Link>
          </p>
          <p className="mt-8 font-mono text-xs uppercase tracking-[0.16em] text-slate-500">
            {chapter.number === '—' ? 'Standing rule' : `Chapter ${chapter.number}`}
            <span className="ml-3 text-cyan-300">{chapter.spine}</span>
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
            {chapter.title}
          </h1>
          <div className="mt-6">
            <ManualByline />
          </div>
          <div className="mt-10">
            <ChapterProse chapter={chapter} />
          </div>
        </div>
      </article>

      <nav className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto grid max-w-3xl gap-6 px-6 py-12 sm:grid-cols-2 lg:px-8">
          {previous ? (
            <Link href={fieldManualPath(previous.slug)} className="group">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Previous</p>
              <p className="mt-2 text-base font-semibold text-white group-hover:text-cyan-200">{previous.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={fieldManualPath(next.slug)} className="group sm:text-right">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Next</p>
              <p className="mt-2 text-base font-semibold text-white group-hover:text-cyan-200">{next.title}</p>
            </Link>
          ) : null}
        </div>
      </nav>

      <section>
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-8">
          <p className="text-sm leading-7 text-slate-500">
            {fieldManual.author} is the author. This stub is part of Field Manual {fieldManual.version}.
            It is doctrine for the Decision Case, and it is not a customer case study.
          </p>
          <Link
            href={fieldManualPath()}
            className="mt-6 inline-flex text-sm font-semibold text-cyan-300 hover:text-cyan-200"
          >
            Table of contents
          </Link>
        </div>
      </section>
    </main>
  );
}
