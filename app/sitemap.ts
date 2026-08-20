import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://syncai.ca';
  const lastModified = new Date();

  const routes = [
    '',
    '/reliability-assessment',
    '/strategic-pilot',
    '/architecture',
    '/industries',
    '/security',
    '/insights',
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
    changeFrequency: route === '' || route === '/reliability-assessment' ? 'weekly' : 'monthly',
    priority:
      route === ''
        ? 1
        : route === '/reliability-assessment'
          ? 0.95
          : route === '/strategic-pilot'
            ? 0.9
            : 0.8,
  }));
}
