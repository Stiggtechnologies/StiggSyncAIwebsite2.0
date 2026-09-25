import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = process.cwd();

function read(rel) {
  return readFileSync(join(root, rel), 'utf8');
}

function fail(message) {
  console.error(message);
  process.exit(1);
}

const insightsSrc = read('lib/insights.ts');
const articlesStart = insightsSrc.indexOf('export const insightArticles');
const articlesEnd = insightsSrc.indexOf('\nexport ', articlesStart + 1);
if (articlesStart < 0 || articlesEnd < 0) fail('lib/insights.ts is missing the insightArticles catalog');
const slugs = [...insightsSrc.slice(articlesStart, articlesEnd).matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map(
  (match) => match[1],
);
if (slugs.length === 0) fail('No Insights slugs found in lib/insights.ts');

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
for (const slug of slugs) {
  if (!stepKeys.includes(slug)) fail(`insightNextSteps is missing catalog slug ${slug}`);
}
if (stepKeys.length !== slugs.length) {
  fail(`insightNextSteps has ${stepKeys.length} entries; catalog has ${slugs.length}`);
}

const stepBodies = [...stepsSection.matchAll(/relatedSlug: '([a-z0-9-]+)',\n\s+relatedNote: '([^']+)',\n\s+next: '(field-manual|strategic-pilot)',/g)];
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

function stepBlock(slug) {
  const key = `'${slug}': {`;
  const start = stepsSection.indexOf(key);
  if (start < 0) fail(`insightNextSteps is missing ${slug}`);
  const next = stepsSection.indexOf("\n  '", start + key.length);
  return stepsSection.slice(start, next === -1 ? undefined : next);
}

const actionBlock = stepBlock('action-is-not-execution');
for (const required of [
  'recommend-is-not-authorize',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
]) {
  if (!actionBlock.includes(`'${required}'`)) {
    fail(`action-is-not-execution related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(actionBlock)) {
  fail('action-is-not-execution related reading must include the Strategic Pilot');
}

const coverageBlock = stepBlock('coverage-is-not-control');
for (const required of [
  'action-is-not-execution',
  'verification-is-not-optional',
  'recommend-is-not-authorize',
]) {
  if (!coverageBlock.includes(`'${required}'`)) {
    fail(`coverage-is-not-control related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(coverageBlock)) {
  fail('coverage-is-not-control related reading must include the Strategic Pilot');
}

const questionBlock = stepBlock('question-is-not-decision');
for (const required of [
  'coverage-is-not-control',
  'action-is-not-execution',
  'recommend-is-not-authorize',
  'verification-is-not-optional',
]) {
  if (!questionBlock.includes(`'${required}'`)) {
    fail(`question-is-not-decision related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(questionBlock)) {
  fail('question-is-not-decision related reading must include the Strategic Pilot');
}

const coveragePage = read('app/insights/coverage-is-not-control/page.tsx');
if (
  !coveragePage.includes('The series continues with') ||
  !coveragePage.includes('/insights/question-is-not-decision')
) {
  fail('coverage-is-not-control must point the series forward to question-is-not-decision');
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
  if (!read(intentPage).includes('href="/insights/')) {
    fail(`${intentPage} must link to an Insights essay`);
  }
}

console.log(`Insights SEO check ok (${slugs.length} catalog slugs).`);
