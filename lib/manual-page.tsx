import type { Metadata } from 'next';
import { fieldManual, fieldManualPath, getFieldManualChapter } from '@/lib/manuals';
import { SITE_NAME, SITE_URL, absoluteUrl, pageMetadata } from '@/lib/seo';

const author = {
  '@type': 'Person' as const,
  name: fieldManual.author,
};

const publisher = {
  '@type': 'Organization' as const,
  name: SITE_NAME,
  url: SITE_URL,
};

export function fieldManualMetadata(): Metadata {
  return {
    ...pageMetadata({
      title: `${fieldManual.title} ${fieldManual.version}`,
      description: fieldManual.description,
      path: fieldManualPath(),
      ogTitle: `${fieldManual.title} ${fieldManual.version} | ${SITE_NAME}`,
      type: 'article',
    }),
    title: { absolute: `${fieldManual.title} ${fieldManual.version} | ${SITE_NAME}` },
    authors: [{ name: fieldManual.author }],
  };
}

export function manualChapterMetadata(slug: string): Metadata {
  const chapter = getFieldManualChapter(slug);
  if (!chapter) return fieldManualMetadata();

  const title = `${chapter.title} — ${fieldManual.title} ${fieldManual.version}`;
  return {
    ...pageMetadata({
      title,
      description: chapter.description,
      path: fieldManualPath(chapter.slug),
      ogTitle: `${title} | ${SITE_NAME}`,
      type: 'article',
    }),
    title: { absolute: `${title} | ${SITE_NAME}` },
    authors: [{ name: fieldManual.author }],
  };
}

export function FieldManualJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Book',
    name: fieldManual.title,
    bookEdition: fieldManual.version,
    description: fieldManual.description,
    datePublished: fieldManual.published,
    inLanguage: 'en-CA',
    author,
    publisher,
    url: absoluteUrl(fieldManualPath()),
    hasPart: fieldManual.chapters.map((chapter) => ({
      '@type': 'Chapter',
      name: chapter.title,
      url: absoluteUrl(fieldManualPath(chapter.slug)),
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}

export function ManualChapterJsonLd({ slug }: { slug: string }) {
  const chapter = getFieldManualChapter(slug);
  if (!chapter) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: chapter.title,
    description: chapter.description,
    datePublished: fieldManual.published,
    dateModified: fieldManual.published,
    author,
    publisher,
    isPartOf: {
      '@type': 'Book',
      name: fieldManual.title,
      bookEdition: fieldManual.version,
      url: absoluteUrl(fieldManualPath()),
    },
    mainEntityOfPage: absoluteUrl(fieldManualPath(chapter.slug)),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
