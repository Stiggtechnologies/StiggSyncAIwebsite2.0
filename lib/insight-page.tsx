import type { Metadata } from 'next';
import { insightArticles } from '@/lib/insights';
import { SITE_NAME, SITE_URL, absoluteUrl, pageMetadata } from '@/lib/seo';

export function insightMetadata(slug: string): Metadata {
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) {
    return pageMetadata({
      title: 'Insights',
      description: 'SyncAI industrial AI insights.',
      path: '/insights',
    });
  }

  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/insights/${article.slug}`,
    type: 'article',
  });
}

export function InsightJsonLd({ slug }: { slug: string }) {
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    datePublished: article.published,
    dateModified: article.published,
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
