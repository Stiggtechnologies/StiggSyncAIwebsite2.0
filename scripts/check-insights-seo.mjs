import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const root = process.cwd();

function read(rel) {
  return readFileSync(join(root, rel), 'utf8');
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

const kept = [
  'alert-is-not-decision',
  'recommend-is-not-authorize',
  'evidence-lineage-is-not-optional',
  'fracas-is-not-a-decision-system',
  'why-cmms-alone-is-failing-2026',
  'economics-of-autonomous-maintenance',
  'governance-in-industrial-ai',
];

const preservedEssays = new Set([
  'fracas-is-not-a-decision-system',
  'evidence-lineage-is-not-optional',
  'recommend-is-not-authorize',
  'alert-is-not-decision',
]);

const insightsSrc = read('lib/insights.ts');
const articlesStart = insightsSrc.indexOf('export const insightArticles');
const articlesEnd = insightsSrc.indexOf('\nexport ', articlesStart + 1);
if (articlesStart < 0 || articlesEnd < 0) fail('lib/insights.ts is missing the insightArticles catalog');
const slugs = [...insightsSrc.slice(articlesStart, articlesEnd).matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map(
  (match) => match[1],
);
if (slugs.join() !== kept.join()) {
  fail(`Insights catalog must be the 7 surviving essays in catalog order.\nGot: ${slugs.join(', ')}`);
}

const insightPage = read('lib/insight-page.tsx');
const requiredMeta = [
  'title: article.title',
  'description: article.description',
  'path,',
  'alternates: { canonical: url }',
  "type: 'article'",
  'url: absoluteUrl(path)',
  'publishedTime: article.published',
  'modifiedTime: article.published',
  'images: [DEFAULT_OG_IMAGE]',
  "card: 'summary_large_image'",
];

const seo = read('lib/seo.ts');
for (const needle of requiredMeta) {
  const haystack = needle.startsWith('alternates') || needle.startsWith('card:') ? seo : insightPage + seo;
  if (!haystack.includes(needle)) {
    fail(`Insights meta contract missing: ${needle}`);
  }
}

if (!insightPage.includes('pageMetadata(')) {
  fail('insightMetadata must build canonical and Twitter tags through pageMetadata');
}

const sitemap = read('lib/sitemap.ts');
if (!sitemap.includes('insightArticles.map((article) => `/insights/${article.slug}`)')) {
  fail('Sitemap must list every Insights URL from lib/insights.ts (no one-off slug list).');
}
if (!sitemap.includes('insightArticles.find') || !sitemap.includes('?.published')) {
  fail('Sitemap lastmod for Insights must use the catalog publish date.');
}

for (const slug of slugs) {
  const pagePath = join('app/insights', slug, 'page.tsx');
  const layoutPath = join('app/insights', slug, 'layout.tsx');
  if (!existsSync(join(root, pagePath))) fail(`Missing Insights page for catalog slug ${slug}`);
  if (!existsSync(join(root, layoutPath))) fail(`Missing Insights layout metadata for catalog slug ${slug}`);
  const layout = read(layoutPath);
  const call = `insightMetadata('${slug}')`;
  if (!layout.includes('export const metadata') || !layout.includes(call)) {
    fail(`${layoutPath} must export metadata from ${call}`);
  }
  const page = read(pagePath);
  if (!page.includes(`<InsightNextSteps slug="${slug}" />`)) {
    fail(`${pagePath} must render <InsightNextSteps slug="${slug}" />`);
  }
}

function section(name) {
  const marker = `export const ${name}`;
  const start = insightsSrc.indexOf(marker);
  if (start < 0) fail(`lib/insights.ts is missing ${marker}`);
  const nextExport = insightsSrc.indexOf('\nexport ', start + marker.length);
  return insightsSrc.slice(start, nextExport === -1 ? undefined : nextExport);
}

const stepsSection = section('insightNextSteps');
const stepKeys = [...stepsSection.matchAll(/^\s+'([a-z0-9-]+)': \{$/gm)].map((match) => match[1]);
if (stepKeys.join() !== slugs.join()) {
  fail(`insightNextSteps keys must match the catalog.\nGot: ${stepKeys.join(', ')}`);
}

const stepBodies = [
  ...stepsSection.matchAll(
    /relatedSlug: '([a-z0-9-]+)',\n\s+relatedNote: '([^']+)',\n\s+next: '(field-manual|strategic-pilot)',/g,
  ),
];
if (stepBodies.length !== slugs.length) fail('insightNextSteps entries must set relatedSlug, relatedNote, and next');
for (const [, relatedSlug, relatedNote] of stepBodies) {
  if (!slugs.includes(relatedSlug)) fail(`Related essay slug is not in the catalog: ${relatedSlug}`);
  if (!relatedNote.trim()) fail('Related reading notes must be non-empty');
}

const alsoBlocks = [...stepsSection.matchAll(/also: \[([\s\S]*?)\],/g)];
for (const [, body] of alsoBlocks) {
  const items = [...body.matchAll(/slug: '([a-z0-9-]+)',\s*\n\s*note: '([^']+)',/g)];
  if (items.length === 0) fail('also related reading must list slug and note');
  for (const [, relatedSlug, relatedNote] of items) {
    if (!slugs.includes(relatedSlug)) fail(`also related slug is not in the catalog: ${relatedSlug}`);
    if (!relatedNote.trim()) fail('also related notes must be non-empty');
  }
}

function readingSlugs(name) {
  const block = section(name);
  const found = [...block.matchAll(/slug: '([a-z0-9-]+)'/g)].map((match) => match[1]);
  if (found.length < 2 || found.length > 3) {
    fail(`${name} must list 2–3 Insights essays (found ${found.length})`);
  }
  for (const slug of found) {
    if (!slugs.includes(slug)) fail(`${name} cites unknown Insights slug ${slug}`);
  }
  return found;
}

readingSlugs('riaFurtherReading');
readingSlugs('strategicPilotFurtherReading');

const readingComponent = read('components/insights/InsightReading.tsx');
for (const needle of ['/reliability-assessment', "href: '/strategic-pilot'", 'fieldManualPath()', 'includePilot']) {
  if (!readingComponent.includes(needle)) fail(`Insight reading strip is missing ${needle}`);
}

const riaPage = read('app/reliability-assessment/page.tsx');
if (!riaPage.includes('<FurtherReading items={riaFurtherReading} />')) {
  fail('Reliability Assessment page must render FurtherReading from riaFurtherReading');
}
const pilotPage = read('app/strategic-pilot/page.tsx');
if (!pilotPage.includes('<FurtherReading items={strategicPilotFurtherReading} />')) {
  fail('Strategic Pilot page must render FurtherReading from strategicPilotFurtherReading');
}

for (const intentPage of [
  'app/industries/page.tsx',
  'app/ai-for-mining-reliability/page.tsx',
  'app/architecture/page.tsx',
  'app/security/page.tsx',
  'app/company/page.tsx',
]) {
  const src = read(intentPage);
  const linked = [...src.matchAll(/href="\/insights\/([a-z0-9-]+)"/g)].map((match) => match[1]);
  if (linked.length === 0) fail(`${intentPage} must link to an Insights essay`);
  for (const slug of linked) {
    if (!slugs.includes(slug)) fail(`${intentPage} links to unpublished Insights slug ${slug}`);
  }
}

const redirects = require(join(root, 'lib/insight-redirects.js'));
if (!Array.isArray(redirects) || redirects.length !== 263) {
  fail(`Expected 263 Insights redirects, got ${Array.isArray(redirects) ? redirects.length : typeof redirects}`);
}

const nextConfig = read('next.config.js');
if (!nextConfig.includes("require('./lib/insight-redirects')") || !nextConfig.includes('async redirects()')) {
  fail('next.config.js must serve lib/insight-redirects from redirects()');
}

const destinationCounts = {};
const sources = new Set();
for (const redirect of redirects) {
  if (redirect.statusCode !== 301) fail(`Redirect ${redirect.source} must be status 301`);
  if (sources.has(redirect.source)) fail(`Duplicate redirect ${redirect.source}`);
  sources.add(redirect.source);
  if (!redirect.source.startsWith('/insights/')) fail(`Unexpected redirect source ${redirect.source}`);
  const slug = redirect.source.slice('/insights/'.length);
  if (slugs.includes(slug)) fail(`Surviving essay must not redirect: ${slug}`);
  if (existsSync(join(root, 'app/insights', slug))) fail(`Unpublished essay folder still exists: ${slug}`);
  if (!redirect.destination || redirect.destination === redirect.source) {
    fail(`Bad destination for ${redirect.source}`);
  }
  const destSlug = redirect.destination.startsWith('/insights/')
    ? redirect.destination.slice('/insights/'.length)
    : null;
  if (destSlug && !slugs.includes(destSlug)) fail(`${redirect.source} redirects to unknown slug ${destSlug}`);
  if (!destSlug && redirect.destination !== '/insights') {
    fail(`${redirect.source} has unexpected destination ${redirect.destination}`);
  }
  destinationCounts[redirect.destination] = (destinationCounts[redirect.destination] || 0) + 1;
}

const expectedDestinations = {
  '/insights/fracas-is-not-a-decision-system': 12,
  '/insights/evidence-lineage-is-not-optional': 16,
  '/insights/recommend-is-not-authorize': 11,
  '/insights/alert-is-not-decision': 8,
  '/insights': 216,
};
for (const [destination, count] of Object.entries(expectedDestinations)) {
  if (destinationCounts[destination] !== count) {
    fail(`Expected ${count} redirects to ${destination}, got ${destinationCounts[destination] || 0}`);
  }
}
if (Object.keys(destinationCounts).length !== Object.keys(expectedDestinations).length) {
  fail(`Unexpected redirect destinations: ${Object.keys(destinationCounts).join(', ')}`);
}

const insightDirs = readdirSync(join(root, 'app/insights'), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name);
for (const dir of insightDirs) {
  if (!slugs.includes(dir)) fail(`Insights folder is not in the catalog: ${dir}`);
}

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name === '.git' || name === '.next') continue;
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) walk(full, files);
    else if (/\.(tsx|ts|jsx|js|mjs|md|json|html)$/.test(name)) files.push(full);
  }
  return files;
}

const removedSlug = new Set([...sources].map((source) => source.slice('/insights/'.length)));
const linkRe = /\/insights\/([a-z0-9-]+)/g;
for (const file of walk(root)) {
  const rel = relative(root, file);
  if (rel === 'lib/insight-redirects.js' || rel.startsWith('scripts/')) continue;
  const preserved = [...preservedEssays].some((slug) => rel === join('app/insights', slug, 'page.tsx'));
  const text = readFileSync(file, 'utf8');
  const hits = [...text.matchAll(linkRe)].map((match) => match[1]).filter((slug) => removedSlug.has(slug));
  if (hits.length === 0) continue;
  if (preserved) continue;
  fail(`${rel} still links to unpublished Insights slugs: ${[...new Set(hits)].join(', ')}`);
}

console.log(`Insights SEO check ok (${slugs.length} catalog slugs, ${redirects.length} redirects).`);
