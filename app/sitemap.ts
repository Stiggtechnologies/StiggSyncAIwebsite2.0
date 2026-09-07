import type { MetadataRoute } from 'next';
import { insightArticles } from '@/lib/insights';
import { SITE_URL, absoluteUrl, indexableRoutes } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = indexableRoutes.map(({ path, priority, changeFrequency }) => ({
    url: path === '/' ? SITE_URL : absoluteUrl(path),
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const articles = insightArticles.map((article) => ({
    url: absoluteUrl(`/insights/${article.slug}`),
    lastModified: new Date(article.published),
    changeFrequency: 'monthly' as const,
    priority: 0.65,
  }));

  return [...routes, ...articles];
}
