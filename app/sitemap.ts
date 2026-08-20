import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://syncai.ca';

  const routes = [
    { path: '', priority: 1, changeFrequency: 'weekly' as const },
    { path: '/reliability-assessment', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/strategic-pilot', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/architecture', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/industries', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/security', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/ai-for-mining-reliability', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/insights', priority: 0.75, changeFrequency: 'weekly' as const },
    { path: '/company', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/philosophy', priority: 0.65, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    priority,
    changeFrequency,
  }));
}
