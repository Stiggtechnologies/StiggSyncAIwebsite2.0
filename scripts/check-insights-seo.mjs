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
if (
  !humanPage.includes('The series continues with') ||
  !humanPage.includes('/insights/unknown-is-not-clear')
) {
  fail('human-decision-is-not-optional must point the series forward to unknown-is-not-clear');
}

const unknownBlock = stepBlock('unknown-is-not-clear');
for (const required of [
  'human-decision-is-not-optional',
  'assumption-is-not-evidence',
  'silence-is-not-clearance',
  'verification-is-not-optional',
  'recommend-is-not-authorize',
  'honesty-boundary-is-not-optional',
  'dashboard-is-not-decision',
]) {
  if (!unknownBlock.includes(`'${required}'`)) {
    fail(`unknown-is-not-clear related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(unknownBlock)) {
  fail('unknown-is-not-clear related reading must include the Strategic Pilot');
}

const unknownPage = read('app/insights/unknown-is-not-clear/page.tsx');
for (const required of [
  '/insights/human-decision-is-not-optional',
  '/insights/assumption-is-not-evidence',
  '/insights/silence-is-not-clearance',
  '/insights/verification-is-not-optional',
  '/insights/recommend-is-not-authorize',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/alert-is-not-decision',
  '/insights/dashboard-is-not-decision',
  '/insights/question-is-not-decision',
  "fieldManualPath('evidence')",
  'blank is not zero',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
]) {
  if (!unknownPage.includes(required)) {
    fail(`unknown-is-not-clear page must include ${required}`);
  }
}
if (
  !unknownPage.includes('The series continues with') ||
  !unknownPage.includes('/insights/blank-is-not-zero')
) {
  fail('unknown-is-not-clear must point the series forward to blank-is-not-zero');
}

const blankBlock = stepBlock('blank-is-not-zero');
for (const required of [
  'unknown-is-not-clear',
  'assumption-is-not-evidence',
  'silence-is-not-clearance',
  'verification-is-not-optional',
  'human-decision-is-not-optional',
  'honesty-boundary-is-not-optional',
  'dashboard-is-not-decision',
]) {
  if (!blankBlock.includes(`'${required}'`)) {
    fail(`blank-is-not-zero related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(blankBlock)) {
  fail('blank-is-not-zero related reading must include the Strategic Pilot');
}

const blankPage = read('app/insights/blank-is-not-zero/page.tsx');
for (const required of [
  '/insights/unknown-is-not-clear',
  '/insights/assumption-is-not-evidence',
  '/insights/silence-is-not-clearance',
  '/insights/verification-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/recommend-is-not-authorize',
  '/insights/learning-requires-a-verified-outcome',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  'verified measurement of none',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
]) {
  if (!blankPage.includes(required)) {
    fail(`blank-is-not-zero page must include ${required}`);
  }
}
if (
  !blankPage.includes('The series continues with') ||
  !blankPage.includes('/insights/silence-is-not-clearance')
) {
  fail('blank-is-not-zero must point the series forward to silence-is-not-clearance');
}

const silenceBlock = stepBlock('silence-is-not-clearance');
for (const required of [
  'unknown-is-not-clear',
  'assumption-is-not-evidence',
  'blank-is-not-zero',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'verification-is-not-optional',
]) {
  if (!silenceBlock.includes(`'${required}'`)) {
    fail(`silence-is-not-clearance related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(silenceBlock)) {
  fail('silence-is-not-clearance related reading must include the Strategic Pilot');
}
if (silenceBlock.includes("next: 'strategic-pilot'")) {
  fail('silence-is-not-clearance next step is the Field Manual');
}

const silencePage = read('app/insights/silence-is-not-clearance/page.tsx');
for (const required of [
  '/insights/unknown-is-not-clear',
  '/insights/assumption-is-not-evidence',
  '/insights/blank-is-not-zero',
  '/insights/recommend-is-not-authorize',
  '/insights/human-decision-is-not-optional',
  '/insights/verification-is-not-optional',
  '/insights/alert-is-not-decision',
  '/insights/dashboard-is-not-decision',
  "fieldManualPath('human-decision')",
  "fieldManualPath('verification')",
  "fieldManualPath('honesty-boundaries')",
  'not authorization',
  'not clearance',
  'missing operator response',
  'quiet dashboard',
  'empty inbox',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!silencePage.includes(required)) {
    fail(`silence-is-not-clearance page must include ${required}`);
  }
}
if (
  !silencePage.includes('The series continues with') ||
  !silencePage.includes('/insights/assumption-is-not-evidence')
) {
  fail('silence-is-not-clearance must point the series forward to assumption-is-not-evidence');
}

const assumptionBlock = stepBlock('assumption-is-not-evidence');
for (const required of [
  'unknown-is-not-clear',
  'confidence-is-not-evidence',
  'correlation-is-not-causation',
  'blank-is-not-zero',
  'silence-is-not-clearance',
  'verification-is-not-optional',
  'evidence-lineage-is-not-optional',
]) {
  if (!assumptionBlock.includes(`'${required}'`)) {
    fail(`assumption-is-not-evidence related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(assumptionBlock)) {
  fail('assumption-is-not-evidence related reading must include the Strategic Pilot');
}
if (assumptionBlock.includes("next: 'strategic-pilot'")) {
  fail('assumption-is-not-evidence next step is the Field Manual');
}

const assumptionPage = read('app/insights/assumption-is-not-evidence/page.tsx');
for (const required of [
  '/insights/unknown-is-not-clear',
  '/insights/blank-is-not-zero',
  '/insights/silence-is-not-clearance',
  '/insights/verification-is-not-optional',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'not a recorded fact',
  'recorded check',
  'verified outcome',
  'unverified model output',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!assumptionPage.includes(required)) {
    fail(`assumption-is-not-evidence page must include ${required}`);
  }
}
if (
  !assumptionPage.includes('The series continues with') ||
  !assumptionPage.includes('/insights/confidence-is-not-evidence')
) {
  fail('assumption-is-not-evidence must point the series forward to confidence-is-not-evidence');
}

const confidenceBlock = stepBlock('confidence-is-not-evidence');
for (const required of [
  'assumption-is-not-evidence',
  'correlation-is-not-causation',
  'trend-is-not-truth',
  'proxy-is-not-outcome',
  'unknown-is-not-clear',
  'blank-is-not-zero',
  'silence-is-not-clearance',
  'verification-is-not-optional',
  'evidence-lineage-is-not-optional',
]) {
  if (!confidenceBlock.includes(`'${required}'`)) {
    fail(`confidence-is-not-evidence related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(confidenceBlock)) {
  fail('confidence-is-not-evidence related reading must include the Strategic Pilot');
}
if (confidenceBlock.includes("next: 'strategic-pilot'")) {
  fail('confidence-is-not-evidence next step is the Field Manual');
}

const confidencePage = read('app/insights/confidence-is-not-evidence/page.tsx');
for (const required of [
  '/insights/assumption-is-not-evidence',
  '/insights/unknown-is-not-clear',
  '/insights/blank-is-not-zero',
  '/insights/silence-is-not-clearance',
  '/insights/verification-is-not-optional',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'strong gut feel',
  'high model score',
  'we&apos;ve always known',
  'manager&apos;s certainty',
  'recorded check',
  'verified outcome',
  'not how sure someone feels',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!confidencePage.includes(required)) {
    fail(`confidence-is-not-evidence page must include ${required}`);
  }
}
if (
  !confidencePage.includes('The series continues with') ||
  !confidencePage.includes('/insights/correlation-is-not-causation')
) {
  fail('confidence-is-not-evidence must point the series forward to correlation-is-not-causation');
}

const correlationBlock = stepBlock('correlation-is-not-causation');
for (const required of [
  'confidence-is-not-evidence',
  'trend-is-not-truth',
  'proxy-is-not-outcome',
  'threshold-is-not-diagnosis',
  'symptom-is-not-cause',
  'noise-is-not-signal',
  'assumption-is-not-evidence',
  'unknown-is-not-clear',
  'blank-is-not-zero',
  'silence-is-not-clearance',
  'dashboard-is-not-decision',
  'alert-is-not-decision',
  'verification-is-not-optional',
  'evidence-lineage-is-not-optional',
]) {
  if (!correlationBlock.includes(`'${required}'`)) {
    fail(`correlation-is-not-causation related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(correlationBlock)) {
  fail('correlation-is-not-causation related reading must include the Strategic Pilot');
}
if (correlationBlock.includes("next: 'strategic-pilot'")) {
  fail('correlation-is-not-causation next step is the Field Manual');
}

const correlationPage = read('app/insights/correlation-is-not-causation/page.tsx');
for (const required of [
  '/insights/confidence-is-not-evidence',
  '/insights/assumption-is-not-evidence',
  '/insights/unknown-is-not-clear',
  '/insights/blank-is-not-zero',
  '/insights/silence-is-not-clearance',
  '/insights/alert-is-not-decision',
  '/insights/dashboard-is-not-decision',
  '/insights/verification-is-not-optional',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/recommend-is-not-authorize',
  '/insights/human-decision-is-not-optional',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'co-moving tags',
  'coincident alerts',
  'dashboard trends',
  'recorded causal check',
  'do not authorize action',
  'Sync recommends',
  'human decides',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!correlationPage.includes(required)) {
    fail(`correlation-is-not-causation page must include ${required}`);
  }
}
if (
  !correlationPage.includes('The series continues with') ||
  !correlationPage.includes('/insights/trend-is-not-truth')
) {
  fail('correlation-is-not-causation must point the series forward to trend-is-not-truth');
}

const trendBlock = stepBlock('trend-is-not-truth');
for (const required of [
  'correlation-is-not-causation',
  'proxy-is-not-outcome',
  'threshold-is-not-diagnosis',
  'symptom-is-not-cause',
  'noise-is-not-signal',
  'confidence-is-not-evidence',
  'assumption-is-not-evidence',
  'dashboard-is-not-decision',
  'alert-is-not-decision',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'silence-is-not-clearance',
  'verification-is-not-optional',
  'evidence-lineage-is-not-optional',
]) {
  if (!trendBlock.includes(`'${required}'`)) {
    fail(`trend-is-not-truth related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(trendBlock)) {
  fail('trend-is-not-truth related reading must include the Strategic Pilot');
}
if (trendBlock.includes("next: 'strategic-pilot'")) {
  fail('trend-is-not-truth next step is the Field Manual');
}

const trendPage = read('app/insights/trend-is-not-truth/page.tsx');
for (const required of [
  '/insights/correlation-is-not-causation',
  '/insights/confidence-is-not-evidence',
  '/insights/assumption-is-not-evidence',
  '/insights/unknown-is-not-clear',
  '/insights/blank-is-not-zero',
  '/insights/silence-is-not-clearance',
  '/insights/alert-is-not-decision',
  '/insights/dashboard-is-not-decision',
  '/insights/verification-is-not-optional',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/recommend-is-not-authorize',
  '/insights/human-decision-is-not-optional',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'rising or falling line',
  'co-moving tag cluster',
  'week-over-week delta',
  'we&apos;ve been trending this way',
  'recorded causal check',
  'verified outcome',
  'do not authorize action',
  'clear a gate',
  'named human decision',
  'Sync recommends',
  'human decides',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!trendPage.includes(required)) {
    fail(`trend-is-not-truth page must include ${required}`);
  }
}
if (
  !trendPage.includes('The series continues with') ||
  !trendPage.includes('/insights/proxy-is-not-outcome')
) {
  fail('trend-is-not-truth must point the series forward to proxy-is-not-outcome');
}

const proxyBlock = stepBlock('proxy-is-not-outcome');
for (const required of [
  'trend-is-not-truth',
  'noise-is-not-signal',
  'threshold-is-not-diagnosis',
  'symptom-is-not-cause',
  'correlation-is-not-causation',
  'confidence-is-not-evidence',
  'dashboard-is-not-decision',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'assumption-is-not-evidence',
  'alert-is-not-decision',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!proxyBlock.includes(`'${required}'`)) {
    fail(`proxy-is-not-outcome related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(proxyBlock)) {
  fail('proxy-is-not-outcome related reading must include the Strategic Pilot');
}
if (proxyBlock.includes("next: 'strategic-pilot'")) {
  fail('proxy-is-not-outcome next step is the Field Manual');
}

const proxyPage = read('app/insights/proxy-is-not-outcome/page.tsx');
for (const required of [
  '/insights/trend-is-not-truth',
  '/insights/correlation-is-not-causation',
  '/insights/confidence-is-not-evidence',
  '/insights/assumption-is-not-evidence',
  '/insights/unknown-is-not-clear',
  '/insights/blank-is-not-zero',
  '/insights/silence-is-not-clearance',
  '/insights/alert-is-not-decision',
  '/insights/dashboard-is-not-decision',
  '/insights/verification-is-not-optional',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/recommend-is-not-authorize',
  '/insights/human-decision-is-not-optional',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'leading indicator',
  'model score',
  'green tile',
  'closed work-order count',
  'MTBF estimate',
  'sensor health %',
  'verified operational outcome',
  'false closure',
  'skips verification',
  'hoped-for proxy move',
  'does not authorize',
  'clear a gate',
  'named human decides',
  'Sync recommends',
  'Sync may surface proxies',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!proxyPage.includes(required)) {
    fail(`proxy-is-not-outcome page must include ${required}`);
  }
}
if (
  !proxyPage.includes('The series continues with') ||
  !proxyPage.includes('/insights/threshold-is-not-diagnosis')
) {
  fail('proxy-is-not-outcome must point the series forward to threshold-is-not-diagnosis');
}

const thresholdBlock = stepBlock('threshold-is-not-diagnosis');
for (const required of [
  'proxy-is-not-outcome',
  'symptom-is-not-cause',
  'noise-is-not-signal',
  'alert-is-not-decision',
  'correlation-is-not-causation',
  'verification-is-not-optional',
  'trend-is-not-truth',
  'confidence-is-not-evidence',
  'dashboard-is-not-decision',
  'learning-requires-a-verified-outcome',
  'assumption-is-not-evidence',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!thresholdBlock.includes(`'${required}'`)) {
    fail(`threshold-is-not-diagnosis related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(thresholdBlock)) {
  fail('threshold-is-not-diagnosis related reading must include the Strategic Pilot');
}
if (thresholdBlock.includes("next: 'strategic-pilot'")) {
  fail('threshold-is-not-diagnosis next step is the Field Manual');
}

const thresholdPage = read('app/insights/threshold-is-not-diagnosis/page.tsx');
for (const required of [
  '/insights/proxy-is-not-outcome',
  '/insights/alert-is-not-decision',
  '/insights/correlation-is-not-causation',
  '/insights/verification-is-not-optional',
  '/insights/trend-is-not-truth',
  '/insights/confidence-is-not-evidence',
  '/insights/assumption-is-not-evidence',
  '/insights/unknown-is-not-clear',
  '/insights/blank-is-not-zero',
  '/insights/silence-is-not-clearance',
  '/insights/dashboard-is-not-decision',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/recommend-is-not-authorize',
  '/insights/human-decision-is-not-optional',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'numeric threshold',
  'alarm band',
  'set-point',
  'not a diagnosis',
  'not a Decision Case',
  'failure mode',
  'authorize action',
  'verify outcome',
  'named human decision',
  'inform a recommendation',
  'Sync may surface threshold breaches',
  'Sync recommends',
  'named human decides',
  'authorized systems',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!thresholdPage.includes(required)) {
    fail(`threshold-is-not-diagnosis page must include ${required}`);
  }
}
if (
  !thresholdPage.includes('The series continues with') ||
  !thresholdPage.includes('/insights/symptom-is-not-cause')
) {
  fail('threshold-is-not-diagnosis must point the series forward to symptom-is-not-cause');
}

const symptomBlock = stepBlock('symptom-is-not-cause');
for (const required of [
  'threshold-is-not-diagnosis',
  'noise-is-not-signal',
  'alert-is-not-decision',
  'correlation-is-not-causation',
  'proxy-is-not-outcome',
  'verification-is-not-optional',
  'trend-is-not-truth',
  'confidence-is-not-evidence',
  'dashboard-is-not-decision',
  'learning-requires-a-verified-outcome',
  'assumption-is-not-evidence',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!symptomBlock.includes(`'${required}'`)) {
    fail(`symptom-is-not-cause related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(symptomBlock)) {
  fail('symptom-is-not-cause related reading must include the Strategic Pilot');
}
if (symptomBlock.includes("next: 'strategic-pilot'")) {
  fail('symptom-is-not-cause next step is the Field Manual');
}

const symptomPage = read('app/insights/symptom-is-not-cause/page.tsx');
for (const required of [
  '/insights/threshold-is-not-diagnosis',
  '/insights/alert-is-not-decision',
  '/insights/correlation-is-not-causation',
  '/insights/proxy-is-not-outcome',
  '/insights/verification-is-not-optional',
  '/insights/trend-is-not-truth',
  '/insights/confidence-is-not-evidence',
  '/insights/assumption-is-not-evidence',
  '/insights/unknown-is-not-clear',
  '/insights/blank-is-not-zero',
  '/insights/silence-is-not-clearance',
  '/insights/dashboard-is-not-decision',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/recommend-is-not-authorize',
  '/insights/human-decision-is-not-optional',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'vibration spike',
  'hot bearing',
  'pressure drop',
  'operator report',
  'CMMS complaint code',
  'red tile',
  'not a diagnosis',
  'not a Decision Case',
  'failure mode',
  'prove root cause',
  'authorize corrective work',
  'verify outcome',
  'named human decision',
  'inform a recommendation',
  'Sync may surface symptoms',
  'correlate them with approved evidence',
  'false certainty',
  'misroutes work orders',
  'wrong lesson',
  'candidate cause',
  'cited evidence',
  'auto-close',
  'auto-authorize',
  'symptom clearance',
  'verified operational outcome',
  'A named human records the decision',
  'Sync recommends',
  'named human decides',
  'authorized systems',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!symptomPage.includes(required)) {
    fail(`symptom-is-not-cause page must include ${required}`);
  }
}
if (
  !symptomPage.includes('The series continues with') ||
  !symptomPage.includes('/insights/noise-is-not-signal')
) {
  fail('symptom-is-not-cause must point the series forward to noise-is-not-signal');
}

const noiseBlock = stepBlock('noise-is-not-signal');
for (const required of [
  'symptom-is-not-cause',
  'threshold-is-not-diagnosis',
  'alert-is-not-decision',
  'correlation-is-not-causation',
  'proxy-is-not-outcome',
  'verification-is-not-optional',
  'trend-is-not-truth',
  'confidence-is-not-evidence',
  'dashboard-is-not-decision',
  'learning-requires-a-verified-outcome',
  'assumption-is-not-evidence',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!noiseBlock.includes(`'${required}'`)) {
    fail(`noise-is-not-signal related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(noiseBlock)) {
  fail('noise-is-not-signal related reading must include the Strategic Pilot');
}
if (noiseBlock.includes("next: 'strategic-pilot'")) {
  fail('noise-is-not-signal next step is the Field Manual');
}

const noisePage = read('app/insights/noise-is-not-signal/page.tsx');
for (const required of [
  '/insights/symptom-is-not-cause',
  '/insights/threshold-is-not-diagnosis',
  '/insights/alert-is-not-decision',
  '/insights/correlation-is-not-causation',
  '/insights/proxy-is-not-outcome',
  '/insights/verification-is-not-optional',
  '/insights/trend-is-not-truth',
  '/insights/confidence-is-not-evidence',
  '/insights/assumption-is-not-evidence',
  '/insights/unknown-is-not-clear',
  '/insights/blank-is-not-zero',
  '/insights/silence-is-not-clearance',
  '/insights/dashboard-is-not-decision',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/recommend-is-not-authorize',
  '/insights/human-decision-is-not-optional',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'sensor chatter',
  'false positives',
  'process variation',
  'nuisance alarms',
  'telemetry spikes',
  'confirmed asset state change',
  'operator anecdote',
  'actionable signal',
  'not a diagnosis',
  'root cause',
  'authorization for corrective work',
  'verified operational outcome',
  'not a Decision Case',
  'false certainty',
  'work queues',
  'craft time',
  'wrong lesson',
  'correlated noise',
  'approved evidence',
  'recommend investigation',
  'auto-close',
  'auto-authorize',
  'auto-clear',
  'Learning credit',
  'named human',
  'Verification stays open',
  'Sync may surface',
  'Sync recommends',
  'named human decides',
  'authorized systems',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!noisePage.includes(required)) {
    fail(`noise-is-not-signal page must include ${required}`);
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
