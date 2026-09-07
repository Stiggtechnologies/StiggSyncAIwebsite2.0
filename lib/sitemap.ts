import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { insightArticles } from '@/lib/insights';
import { SITE_URL } from '@/lib/seo';

export type SitemapEntry = {
  path: string;
  changefreq: 'weekly' | 'monthly' | 'yearly';
  priority: number;
};

/** Never index these: leftover chrome, stale copy, or redirect-only. */
export const SITEMAP_EXCLUDE = new Set([
  '/aws',
  '/microsoft',
  '/salesforce',
  '/investors',
  '/faq',
  '/philosophy',
  '/ai-readiness',
  '/operator-brief',
]);

/** Always present even if filesystem discovery is unavailable at runtime. */
export const REQUIRED_SITEMAP_PATHS = [
  '/',
  '/reliability-assessment',
  '/strategic-pilot',
  '/architecture',
  '/industries',
  '/security',
  '/ai-for-mining-reliability',
  '/insights',
  '/company',
  '/contact',
  '/privacy',
  '/terms',
] as const;

const ROUTE_META: Record<string, Pick<SitemapEntry, 'changefreq' | 'priority'>> = {
  '/': { changefreq: 'weekly', priority: 1 },
  '/reliability-assessment': { changefreq: 'weekly', priority: 0.95 },
  '/strategic-pilot': { changefreq: 'monthly', priority: 0.9 },
  '/architecture': { changefreq: 'monthly', priority: 0.85 },
  '/industries': { changefreq: 'monthly', priority: 0.85 },
  '/security': { changefreq: 'monthly', priority: 0.8 },
  '/ai-for-mining-reliability': { changefreq: 'monthly', priority: 0.8 },
  '/insights': { changefreq: 'weekly', priority: 0.75 },
  '/company': { changefreq: 'monthly', priority: 0.7 },
  '/contact': { changefreq: 'monthly', priority: 0.7 },
  '/privacy': { changefreq: 'yearly', priority: 0.4 },
  '/terms': { changefreq: 'yearly', priority: 0.4 },
};

const PAGE_FILES = ['page.tsx', 'page.ts', 'page.jsx', 'page.js'];
const LAYOUT_FILES = ['layout.tsx', 'layout.ts', 'layout.jsx', 'layout.js'];

function appDir() {
  return join(process.cwd(), 'app');
}

function firstExisting(dir: string, names: string[]) {
  for (const name of names) {
    const full = join(dir, name);
    if (existsSync(full)) return full;
  }
  return null;
}

function walkPageRoutes(dir: string, routes: string[] = []): string[] {
  if (!existsSync(dir)) return routes;

  for (const name of readdirSync(dir)) {
    if (name.startsWith('_') || name === 'api') continue;
    const full = join(dir, name);
    let stat;
    try {
      stat = statSync(full);
    } catch {
      continue;
    }

    if (stat.isDirectory()) {
      walkPageRoutes(full, routes);
      continue;
    }

    if (!PAGE_FILES.includes(name)) continue;
    const rel = relative(appDir(), dir).replace(/\\/g, '/');
    if (rel.startsWith('api/') || rel === 'api') continue;
    routes.push(rel === '' ? '/' : `/${rel}`);
  }

  return routes;
}

function pageSource(routePath: string) {
  const dir = routePath === '/' ? appDir() : join(appDir(), routePath.slice(1));
  const file = firstExisting(dir, PAGE_FILES);
  if (!file) return '';
  try {
    return readFileSync(file, 'utf8');
  } catch {
    return '';
  }
}

function hasNoindexLayout(routePath: string) {
  const segments = routePath === '/' ? [] : routePath.split('/').filter(Boolean);
  const dirs: string[] = [appDir()];
  let current = appDir();
  for (const segment of segments) {
    current = join(current, segment);
    dirs.push(current);
  }

  for (const dir of dirs.reverse()) {
    const file = firstExisting(dir, LAYOUT_FILES);
    if (!file) continue;
    let src = '';
    try {
      src = readFileSync(file, 'utf8');
    } catch {
      continue;
    }
    if (src.includes('noindexMetadata') || /index:\s*false/.test(src)) return true;
  }

  return false;
}

function isIndexable(routePath: string) {
  if (SITEMAP_EXCLUDE.has(routePath)) return false;
  if (hasNoindexLayout(routePath)) return false;
  const src = pageSource(routePath);
  if (src && /permanentRedirect\s*\(/.test(src)) return false;
  return true;
}

function metaFor(path: string): Pick<SitemapEntry, 'changefreq' | 'priority'> {
  if (ROUTE_META[path]) return ROUTE_META[path];
  if (path.startsWith('/insights/')) return { changefreq: 'monthly', priority: 0.65 };
  return { changefreq: 'monthly', priority: 0.6 };
}

export function collectSitemapPaths(): string[] {
  const paths = new Set<string>(REQUIRED_SITEMAP_PATHS);

  try {
    for (const route of walkPageRoutes(appDir())) {
      if (isIndexable(route)) paths.add(route);
    }
  } catch {
    // Runtime bundles may not include app/. Required + catalog still ship.
  }

  for (const article of insightArticles) {
    paths.add(`/insights/${article.slug}`);
  }

  const sorted = Array.from(paths).filter((path) => !SITEMAP_EXCLUDE.has(path));
  sorted.sort((a, b) => {
    if (a === '/') return -1;
    if (b === '/') return 1;
    return a.localeCompare(b);
  });
  return sorted;
}

export function getSitemapEntries(): SitemapEntry[] {
  return collectSitemapPaths().map((path) => ({ path, ...metaFor(path) }));
}

export function locFor(path: string) {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}

export function renderSitemapXml(entries = getSitemapEntries()): string {
  const urls = entries
    .map((entry) => {
      const loc = locFor(entry.path);
      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function getSitemapXml(): string {
  try {
    return renderSitemapXml();
  } catch {
    const fallback: SitemapEntry[] = REQUIRED_SITEMAP_PATHS.map((path) => ({
      path,
      ...metaFor(path),
    }));
    for (const article of insightArticles) {
      fallback.push({ path: `/insights/${article.slug}`, ...metaFor(`/insights/${article.slug}`) });
    }
    return renderSitemapXml(fallback);
  }
}
