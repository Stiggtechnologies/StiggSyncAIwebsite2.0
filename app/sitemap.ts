import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://syncai.ca';
  const lastModified = new Date();

  const routes = [
    '',
    '/architecture',
    '/industries',
    '/ai-readiness',
    '/insights',
    '/strategic-pilot',
    '/security',
    '/company',
    '/privacy',
    '/terms',
    '/philosophy',
    '/faq',
    '/contact',
    '/operator-brief',
    '/ai-for-mining-reliability',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/ai-readiness' ? 0.9 : 0.8,
  }));
}
