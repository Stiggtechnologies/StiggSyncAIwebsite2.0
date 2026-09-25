import type { Metadata } from 'next';
import { insightArticles } from '@/lib/insights';
import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl, pageMetadata } from '@/lib/seo';

export function insightMetadata(slug: string): Metadata {
  const article = insightArticles.find((item) => item.slug === slug);
  if (!article) {
    return pageMetadata({
      title: 'Insights',
      description: 'SyncAI industrial AI insights.',
      path: '/insights',
    });
  }

  const socialTitle = `${article.title} | ${SITE_NAME}`;
  const path = `/insights/${article.slug}`;

  return {
    ...pageMetadata({
      title: article.title,
      description: article.description,
      path,
      ogTitle: socialTitle,
      type: 'article',
    }),
    title: { absolute: socialTitle },
    openGraph: {
      title: socialTitle,
      description: article.description,
      url: absoluteUrl(path),
      siteName: SITE_NAME,
      type: 'article',
      locale: 'en_CA',
      images: [DEFAULT_OG_IMAGE],
      publishedTime: article.published,
      modifiedTime: article.published,
      section: article.category,
      ...(article.author ? { authors: [article.author] } : {}),
    },
    ...(article.author ? { authors: [{ name: article.author }] } : {}),
  };
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
    author: article.author
      ? { '@type': 'Person', name: article.author }
      : { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: absoluteUrl(`/insights/${article.slug}`),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
