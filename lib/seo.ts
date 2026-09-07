import type { Metadata } from 'next';

export const SITE_URL = 'https://syncai.ca';
export const SITE_NAME = 'SyncAI';
export const DEFAULT_TITLE = 'SyncAI — Governed Industrial Intelligence';
export const DEFAULT_DESCRIPTION =
  'Governed industrial intelligence for reliability, maintenance, and asset-intensive operations. Ground decisions in approved knowledge, asset context, and operating evidence.';

export type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  type?: 'website' | 'article';
  index?: boolean;
};

export function absoluteUrl(path: string) {
  if (!path || path === '/') return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  type = 'website',
  index = true,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = ogTitle ?? (path === '/' ? title : `${title} | ${SITE_NAME}`);

  return {
    title: path === '/' ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: false },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: 'en_CA',
      images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: DEFAULT_TITLE }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: ['/opengraph-image'],
    },
  };
}

export const noindexMetadata = (title: string, path: string): Metadata =>
  pageMetadata({
    title,
    description: DEFAULT_DESCRIPTION,
    path,
    index: false,
  });

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  email: 'info@syncai.ca',
  description: DEFAULT_DESCRIPTION,
  brand: { '@type': 'Brand', name: SITE_NAME },
  parentOrganization: { '@type': 'Organization', name: 'Stigg' },
  sameAs: [SITE_URL],
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
};

export const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  url: SITE_URL,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'Governed industrial intelligence for mining, energy, and oil and gas reliability. SyncAI recommends from approved evidence; a named human decides. Direct plant execute is disabled.',
  provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
};

type SitemapEntry = {
  path: string;
  priority: number;
  changeFrequency: 'weekly' | 'monthly' | 'yearly';
};

/** Public, indexable marketing routes. Redirect-only and noindex routes stay out. */
export const indexableRoutes: SitemapEntry[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/reliability-assessment', priority: 0.95, changeFrequency: 'weekly' },
  { path: '/strategic-pilot', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/architecture', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/industries', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/security', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ai-for-mining-reliability', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/insights', priority: 0.75, changeFrequency: 'weekly' },
  { path: '/company', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.4, changeFrequency: 'yearly' },
];
