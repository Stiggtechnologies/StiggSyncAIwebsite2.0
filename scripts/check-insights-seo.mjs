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

const dashboardBlock = stepBlock('dashboard-is-not-decision');
for (const required of [
  'question-is-not-decision',
  'coverage-is-not-control',
  'recommend-is-not-authorize',
  'verification-is-not-optional',
]) {
  if (!dashboardBlock.includes(`'${required}'`)) {
    fail(`dashboard-is-not-decision related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(dashboardBlock)) {
  fail('dashboard-is-not-decision related reading must include the Strategic Pilot');
}

const questionPage = read('app/insights/question-is-not-decision/page.tsx');
if (
  !questionPage.includes('The series continues with') ||
  !questionPage.includes('/insights/dashboard-is-not-decision')
) {
  fail('question-is-not-decision must point the series forward to dashboard-is-not-decision');
}

const dashboardPage = read('app/insights/dashboard-is-not-decision/page.tsx');
for (const required of [
  '/insights/question-is-not-decision',
  '/insights/coverage-is-not-control',
  '/insights/recommend-is-not-authorize',
  '/insights/verification-is-not-optional',
  "fieldManualPath('human-decision')",
  "fieldManualPath('verification')",
]) {
  if (!dashboardPage.includes(required)) {
    fail(`dashboard-is-not-decision page must include ${required}`);
  }
}
if (
  !dashboardPage.includes('The series continues with') ||
  !dashboardPage.includes('/insights/alert-is-not-decision')
) {
  fail('dashboard-is-not-decision must point the series forward to alert-is-not-decision');
}

const alertBlock = stepBlock('alert-is-not-decision');
for (const required of [
  'dashboard-is-not-decision',
  'question-is-not-decision',
  'recommend-is-not-authorize',
  'verification-is-not-optional',
  'action-is-not-execution',
]) {
  if (!alertBlock.includes(`'${required}'`)) {
    fail(`alert-is-not-decision related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(alertBlock)) {
  fail('alert-is-not-decision related reading must include the Strategic Pilot');
}

const alertPage = read('app/insights/alert-is-not-decision/page.tsx');
for (const required of [
  '/insights/dashboard-is-not-decision',
  '/insights/question-is-not-decision',
  '/insights/recommend-is-not-authorize',
  '/insights/verification-is-not-optional',
  '/insights/action-is-not-execution',
  "fieldManualPath('human-decision')",
  "fieldManualPath('verification')",
]) {
  if (!alertPage.includes(required)) {
    fail(`alert-is-not-decision page must include ${required}`);
  }
}
if (
  !alertPage.includes('The series continues with') ||
  !alertPage.includes('/insights/honesty-boundary-is-not-optional')
) {
  fail('alert-is-not-decision must point the series forward to honesty-boundary-is-not-optional');
}

const honestyBlock = stepBlock('honesty-boundary-is-not-optional');
for (const required of [
  'alert-is-not-decision',
  'dashboard-is-not-decision',
  'recommend-is-not-authorize',
  'action-is-not-execution',
  'verification-is-not-optional',
]) {
  if (!honestyBlock.includes(`'${required}'`)) {
    fail(`honesty-boundary-is-not-optional related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(honestyBlock)) {
  fail('honesty-boundary-is-not-optional related reading must include the Strategic Pilot');
}

const honestyPage = read('app/insights/honesty-boundary-is-not-optional/page.tsx');
for (const required of [
  '/insights/alert-is-not-decision',
  '/insights/dashboard-is-not-decision',
  '/insights/recommend-is-not-authorize',
  '/insights/action-is-not-execution',
  '/insights/verification-is-not-optional',
  "fieldManualPath('honesty-boundaries')",
]) {
  if (!honestyPage.includes(required)) {
    fail(`honesty-boundary-is-not-optional page must include ${required}`);
  }
}
if (
  !honestyPage.includes('The series continues with') ||
  !honestyPage.includes('/insights/human-decision-is-not-optional')
) {
  fail('honesty-boundary-is-not-optional must point the series forward to human-decision-is-not-optional');
}

const humanBlock = stepBlock('human-decision-is-not-optional');
for (const required of [
  'honesty-boundary-is-not-optional',
  'recommend-is-not-authorize',
  'question-is-not-decision',
  'action-is-not-execution',
  'verification-is-not-optional',
]) {
  if (!humanBlock.includes(`'${required}'`)) {
    fail(`human-decision-is-not-optional related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(humanBlock)) {
  fail('human-decision-is-not-optional related reading must include the Strategic Pilot');
}

const humanPage = read('app/insights/human-decision-is-not-optional/page.tsx');
for (const required of [
  '/insights/recommend-is-not-authorize',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/action-is-not-execution',
  '/insights/verification-is-not-optional',
  '/insights/question-is-not-decision',
  "fieldManualPath('human-decision')",
  'still a proposal',
  'auto-accept',
  'Self-guided onboarding is not claimed as a live product path',
]) {
  if (!humanPage.includes(required)) {
    fail(`human-decision-is-not-optional page must include ${required}`);
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
  if (!read(intentPage).includes('href="/insights/')) {
    fail(`${intentPage} must link to an Insights essay`);
  }
}

console.log(`Insights SEO check ok (${slugs.length} catalog slugs).`);
