import Link from 'next/link';
import {
  getInsightArticle,
  insightNextSteps,
  type FurtherReadingItem,
} from '@/lib/insights';
import { fieldManual, fieldManualPath } from '@/lib/manuals';

const linkClass = 'font-semibold text-[#3B82F6] transition-colors hover:text-white';

export function InsightNextSteps({ slug }: { slug: string }) {
  const step = insightNextSteps[slug];
  const related = step ? getInsightArticle(step.relatedSlug) : undefined;
  if (!step || !related) return null;

  const next =
    step.next === 'field-manual'
      ? {
          href: fieldManualPath(),
          label: `Field Manual ${fieldManual.version}`,
          note: 'The public contents of the Decision Case.',
        }
      : {
          href: '/strategic-pilot',
          label: 'Strategic Pilot',
          note: 'A governed proof around one operating decision.',
        };

  const also = (step.also ?? []).flatMap((item) => {
    const article = getInsightArticle(item.slug);
    if (!article || article.slug === related.slug) return [];
    return [
      {
        href: `/insights/${article.slug}`,
        label: article.title,
        note: item.note,
      },
    ];
  });

  const pilot =
    step.includePilot && step.next !== 'strategic-pilot'
      ? [
          {
            href: '/strategic-pilot',
            label: 'Strategic Pilot',
            note: 'A governed proof around one operating decision.',
          },
        ]
      : [];

  const items = [
    {
      href: `/insights/${related.slug}`,
      label: related.title,
      note: step.relatedNote,
    },
    ...also,
    {
      href: '/reliability-assessment',
      label: 'Reliability Assessment',
      note: 'Whether the records can support a conclusion.',
    },
    ...pilot,
    next,
  ];

  return (
    <nav aria-label="Related reading" className="not-prose mt-12 border-t border-white/10 pt-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Related reading</p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.href} className="text-sm leading-6">
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
            <span className="text-slate-500"> — {item.note}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function FurtherReading({ items }: { items: readonly FurtherReadingItem[] }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Further reading</p>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
        Essays on the same boundary. Arguments about evidence, approval, and verification. No customer
        results are cited here.
      </p>
      <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {items.map((item) => {
          const article = getInsightArticle(item.slug);
          if (!article) return null;
          return (
            <li key={item.slug} className="py-4">
              <Link
                href={`/insights/${article.slug}`}
                className="text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                {article.title}
              </Link>
              <p className="mt-1 text-sm leading-6 text-slate-500">{item.note}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
