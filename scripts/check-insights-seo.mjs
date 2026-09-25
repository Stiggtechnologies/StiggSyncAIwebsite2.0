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
const runwayIndex = slugs.indexOf('cash-is-not-runway');
const collectedIndex = slugs.indexOf('arr-is-not-cash');
const arrIndex = slugs.indexOf('revenue-is-not-arr');
const revenueIndex = slugs.indexOf('impact-is-not-revenue');
const impactIndex = slugs.indexOf('outcome-is-not-impact');
const outcomeIndex = slugs.indexOf('value-is-not-outcome');
const valueIndex = slugs.indexOf('profit-is-not-value');
const profitIndex = slugs.indexOf('margin-is-not-profit');
const marginIndex = slugs.indexOf('cash-is-not-margin');
const cashIndex = slugs.indexOf('closure-is-not-cash');
const closureIndex = slugs.indexOf('accountability-is-not-closure');
const accountabilityIndex = slugs.indexOf('authorization-is-not-accountability');
const proofIndex = slugs.indexOf('proof-is-not-authorization');
const assuredIndex = slugs.indexOf('assured-is-not-proven');
const verifiedIndex = slugs.indexOf('verified-is-not-assured');
const completeIndex = slugs.indexOf('complete-is-not-verified');
const clearedIndex = slugs.indexOf('cleared-is-not-complete');
const readyIndex = slugs.indexOf('ready-is-not-cleared');
const statusIndex = slugs.indexOf('status-is-not-clearance');
const greenIndex = slugs.indexOf('green-is-not-go');
if (
  !(
    runwayIndex >= 0 &&
    collectedIndex > runwayIndex &&
    arrIndex > collectedIndex &&
    revenueIndex > arrIndex &&
    impactIndex > revenueIndex &&
    outcomeIndex > impactIndex &&
    valueIndex > outcomeIndex &&
    profitIndex > valueIndex &&
    marginIndex > profitIndex &&
    cashIndex > marginIndex &&
    closureIndex > cashIndex &&
    accountabilityIndex > closureIndex &&
    proofIndex > accountabilityIndex &&
    assuredIndex > proofIndex &&
    verifiedIndex > assuredIndex &&
    completeIndex > verifiedIndex &&
    clearedIndex > completeIndex &&
    readyIndex > clearedIndex &&
    statusIndex > readyIndex &&
    greenIndex > statusIndex
  )
) {
  fail(
    'Insights catalog order must list cash-is-not-runway, then arr-is-not-cash, then revenue-is-not-arr, then impact-is-not-revenue, then outcome-is-not-impact, then value-is-not-outcome, then profit-is-not-value, then margin-is-not-profit, then cash-is-not-margin, then closure-is-not-cash, then accountability-is-not-closure, then authorization-is-not-accountability, then proof-is-not-authorization, then assured-is-not-proven, then verified-is-not-assured, then complete-is-not-verified, then cleared-is-not-complete, then ready-is-not-cleared, then status-is-not-clearance, then green-is-not-go',
  );
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
  'ready-is-not-cleared',
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
  'ready-is-not-cleared',
  'green-is-not-go',
  'dashboard-is-not-control',
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
  'dashboard-is-not-control',
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
  'ready-is-not-cleared',
  'green-is-not-go',
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
  'ready-is-not-cleared',
  'green-is-not-go',
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
  'ready-is-not-cleared',
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
  'anecdote-is-not-evidence',
  'telemetry-is-not-truth',
  'accuracy-is-not-precision',
  'calibration-is-not-validation',
  'simulation-is-not-proof',
  'forecast-is-not-fact',
  'model-is-not-reality',
  'map-is-not-terrain',
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
  'anecdote-is-not-evidence',
  'telemetry-is-not-truth',
  'accuracy-is-not-precision',
  'calibration-is-not-validation',
  'simulation-is-not-proof',
  'forecast-is-not-fact',
  'model-is-not-reality',
  'map-is-not-terrain',
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
  'anecdote-is-not-evidence',
  'model-is-not-reality',
  'map-is-not-terrain',
  'sample-is-not-population',
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
  'anecdote-is-not-evidence',
  'telemetry-is-not-truth',
  'accuracy-is-not-precision',
  'calibration-is-not-validation',
  'simulation-is-not-proof',
  'forecast-is-not-fact',
  'model-is-not-reality',
  'map-is-not-terrain',
  'sample-is-not-population',
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
  'anecdote-is-not-evidence',
  'telemetry-is-not-truth',
  'accuracy-is-not-precision',
  'calibration-is-not-validation',
  'simulation-is-not-proof',
  'forecast-is-not-fact',
  'model-is-not-reality',
  'map-is-not-terrain',
  'sample-is-not-population',
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
  'anecdote-is-not-evidence',
  'model-is-not-reality',
  'map-is-not-terrain',
  'sample-is-not-population',
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
  'anecdote-is-not-evidence',
  'model-is-not-reality',
  'map-is-not-terrain',
  'sample-is-not-population',
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
  'anecdote-is-not-evidence',
  'model-is-not-reality',
  'map-is-not-terrain',
  'sample-is-not-population',
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
if (
  !noisePage.includes('The series continues with') ||
  !noisePage.includes('/insights/sample-is-not-population')
) {
  fail('noise-is-not-signal must point the series forward to sample-is-not-population');
}

const sampleBlock = stepBlock('sample-is-not-population');
for (const required of [
  'anecdote-is-not-evidence',
  'model-is-not-reality',
  'map-is-not-terrain',
  'noise-is-not-signal',
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
  if (!sampleBlock.includes(`'${required}'`)) {
    fail(`sample-is-not-population related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(sampleBlock)) {
  fail('sample-is-not-population related reading must include the Strategic Pilot');
}
if (sampleBlock.includes("next: 'strategic-pilot'")) {
  fail('sample-is-not-population next step is the Field Manual');
}

const samplePage = read('app/insights/sample-is-not-population/page.tsx');
for (const required of [
  '/insights/noise-is-not-signal',
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
  'handful of observed cases',
  'plants',
  'fleet',
  'population',
  'population-level proof',
  'not a diagnosis',
  'root cause',
  'authorization for corrective work',
  'verified operational outcome',
  'not a Decision Case',
  'false certainty',
  'work queues',
  'craft time',
  'wrong lesson',
  'approved evidence',
  'recommend investigation',
  'auto-close',
  'auto-authorize',
  'auto-clear',
  'Learning credit',
  'named human',
  'Verification stays open',
  'Sync may surface',
  'Sync refuses to treat a sample as population-level proof',
  'Sync recommends',
  'named human decides',
  'authorized systems',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!samplePage.includes(required)) {
    fail(`sample-is-not-population page must include ${required}`);
  }
}
if (
  !samplePage.includes('The series continues with') ||
  !samplePage.includes('/insights/anecdote-is-not-evidence')
) {
  fail('sample-is-not-population must point the series forward to anecdote-is-not-evidence');
}

const anecdoteBlock = stepBlock('anecdote-is-not-evidence');
for (const required of [
  'model-is-not-reality',
  'map-is-not-terrain',
  'sample-is-not-population',
  'noise-is-not-signal',
  'symptom-is-not-cause',
  'threshold-is-not-diagnosis',
  'assumption-is-not-evidence',
  'confidence-is-not-evidence',
  'correlation-is-not-causation',
  'verification-is-not-optional',
  'proxy-is-not-outcome',
  'trend-is-not-truth',
  'alert-is-not-decision',
  'dashboard-is-not-decision',
  'learning-requires-a-verified-outcome',
  'unknown-is-not-clear',
  'blank-is-not-zero',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!anecdoteBlock.includes(`'${required}'`)) {
    fail(`anecdote-is-not-evidence related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(anecdoteBlock)) {
  fail('anecdote-is-not-evidence related reading must include the Strategic Pilot');
}
if (anecdoteBlock.includes("next: 'strategic-pilot'")) {
  fail('anecdote-is-not-evidence next step is the Field Manual');
}

const anecdotePage = read('app/insights/anecdote-is-not-evidence/page.tsx');
for (const required of [
  '/insights/sample-is-not-population',
  '/insights/noise-is-not-signal',
  '/insights/symptom-is-not-cause',
  '/insights/threshold-is-not-diagnosis',
  '/insights/assumption-is-not-evidence',
  '/insights/confidence-is-not-evidence',
  '/insights/correlation-is-not-causation',
  '/insights/verification-is-not-optional',
  '/insights/proxy-is-not-outcome',
  '/insights/trend-is-not-truth',
  '/insights/alert-is-not-decision',
  '/insights/dashboard-is-not-decision',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/recommend-is-not-authorize',
  '/insights/human-decision-is-not-optional',
  '/insights/unknown-is-not-clear',
  '/insights/blank-is-not-zero',
  '/insights/silence-is-not-clearance',
  '/insights/evidence-lineage-is-not-optional',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'operator story',
  'hallway claim',
  'how it always fails',
  'vendor demo vignette',
  'near-miss',
  'not evidence',
  'not a diagnosis',
  'not root cause',
  'not authorization for corrective work',
  'verified operational outcome',
  'not a Decision Case',
  'false certainty',
  'personal conviction',
  'approved evidence',
  'unconfirmed',
  'honesty boundary',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'Sync may surface an anecdote',
  'Verification stays open',
  'named human',
  'Sync recommends',
  'named human decides',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!anecdotePage.includes(required)) {
    fail(`anecdote-is-not-evidence page must include ${required}`);
  }
}
if (
  !anecdotePage.includes('The series continues with') ||
  !anecdotePage.includes('/insights/map-is-not-terrain')
) {
  fail('anecdote-is-not-evidence must point the series forward to map-is-not-terrain');
}

const mapBlock = stepBlock('map-is-not-terrain');
for (const required of [
  'telemetry-is-not-truth',
  'accuracy-is-not-precision',
  'calibration-is-not-validation',
  'simulation-is-not-proof',
  'forecast-is-not-fact',
  'model-is-not-reality',
  'anecdote-is-not-evidence',
  'dashboard-is-not-decision',
  'proxy-is-not-outcome',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'sample-is-not-population',
  'noise-is-not-signal',
  'symptom-is-not-cause',
  'threshold-is-not-diagnosis',
  'assumption-is-not-evidence',
  'confidence-is-not-evidence',
  'correlation-is-not-causation',
  'verification-is-not-optional',
  'trend-is-not-truth',
  'alert-is-not-decision',
  'learning-requires-a-verified-outcome',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!mapBlock.includes(`'${required}'`)) {
    fail(`map-is-not-terrain related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(mapBlock)) {
  fail('map-is-not-terrain related reading must include the Strategic Pilot');
}
if (mapBlock.includes("next: 'strategic-pilot'")) {
  fail('map-is-not-terrain next step is the Field Manual');
}

const mapPage = read('app/insights/map-is-not-terrain/page.tsx');
for (const required of [
  '/insights/anecdote-is-not-evidence',
  '/insights/dashboard-is-not-decision',
  '/insights/proxy-is-not-outcome',
  '/insights/blank-is-not-zero',
  '/insights/unknown-is-not-clear',
  '/insights/recommend-is-not-authorize',
  '/insights/sample-is-not-population',
  '/insights/noise-is-not-signal',
  '/insights/symptom-is-not-cause',
  '/insights/threshold-is-not-diagnosis',
  '/insights/assumption-is-not-evidence',
  '/insights/confidence-is-not-evidence',
  '/insights/correlation-is-not-causation',
  '/insights/trend-is-not-truth',
  '/insights/verification-is-not-optional',
  '/insights/alert-is-not-decision',
  '/insights/silence-is-not-clearance',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/human-decision-is-not-optional',
  '/insights/action-is-not-execution',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'diagram',
  'CMMS schema',
  'dashboard',
  'digital twin',
  'process map',
  'compressed representation',
  'operating reality',
  'degradation',
  'local exceptions',
  'unverified outcomes',
  'Evidence from the plant beats the model',
  'not a diagnosis',
  'not root cause',
  'not authorization for corrective work',
  'verified operational outcome',
  'not a Decision Case',
  'blank is not zero',
  'unknown is not clear',
  'recommend is not authorize',
  'false certainty',
  'approved evidence',
  'honesty boundary',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'Sync may surface a map',
  'Verification stays open',
  'named human',
  'Sync recommends',
  'named human decides',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!mapPage.includes(required)) {
    fail(`map-is-not-terrain page must include ${required}`);
  }
}
if (
  !mapPage.includes('The series continues with') ||
  !mapPage.includes('/insights/model-is-not-reality')
) {
  fail('map-is-not-terrain must point the series forward to model-is-not-reality');
}

const modelBlock = stepBlock('model-is-not-reality');
for (const required of [
  'telemetry-is-not-truth',
  'accuracy-is-not-precision',
  'calibration-is-not-validation',
  'simulation-is-not-proof',
  'forecast-is-not-fact',
  'map-is-not-terrain',
  'proxy-is-not-outcome',
  'assumption-is-not-evidence',
  'confidence-is-not-evidence',
  'recommend-is-not-authorize',
  'dashboard-is-not-decision',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'sample-is-not-population',
  'anecdote-is-not-evidence',
  'noise-is-not-signal',
  'symptom-is-not-cause',
  'threshold-is-not-diagnosis',
  'correlation-is-not-causation',
  'trend-is-not-truth',
  'verification-is-not-optional',
  'alert-is-not-decision',
  'learning-requires-a-verified-outcome',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!modelBlock.includes(`'${required}'`)) {
    fail(`model-is-not-reality related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(modelBlock)) {
  fail('model-is-not-reality related reading must include the Strategic Pilot');
}
if (modelBlock.includes("next: 'strategic-pilot'")) {
  fail('model-is-not-reality next step is the Field Manual');
}

const modelPage = read('app/insights/model-is-not-reality/page.tsx');
for (const required of [
  '/insights/map-is-not-terrain',
  '/insights/proxy-is-not-outcome',
  '/insights/assumption-is-not-evidence',
  '/insights/confidence-is-not-evidence',
  '/insights/recommend-is-not-authorize',
  '/insights/dashboard-is-not-decision',
  '/insights/blank-is-not-zero',
  '/insights/unknown-is-not-clear',
  '/insights/sample-is-not-population',
  '/insights/anecdote-is-not-evidence',
  '/insights/noise-is-not-signal',
  '/insights/symptom-is-not-cause',
  '/insights/threshold-is-not-diagnosis',
  '/insights/correlation-is-not-causation',
  '/insights/trend-is-not-truth',
  '/insights/verification-is-not-optional',
  '/insights/alert-is-not-decision',
  '/insights/silence-is-not-clearance',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/human-decision-is-not-optional',
  '/insights/action-is-not-execution',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'digital twin',
  'KPI model',
  'risk matrix',
  'RUL curve',
  'Monte Carlo',
  'LLM summary',
  'compressed representation',
  'assumptions',
  'coverage gaps',
  'refusal conditions',
  'false clearance',
  'false precision',
  'Evidence from the plant beats the model',
  'not a diagnosis',
  'not root cause',
  'not authorization for corrective work',
  'verified operational outcome',
  'not a Decision Case',
  'false certainty',
  'approved evidence',
  'honesty boundary',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'Sync may surface a model',
  'Sync refuses false precision',
  'Verification stays open',
  'named human',
  'Sync recommends',
  'named human decides',
  'authorized systems',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!modelPage.includes(required)) {
    fail(`model-is-not-reality page must include ${required}`);
  }
}
if (
  !modelPage.includes('The series continues with') ||
  !modelPage.includes('/insights/forecast-is-not-fact')
) {
  fail('model-is-not-reality must point the series forward to forecast-is-not-fact');
}

const forecastBlock = stepBlock('forecast-is-not-fact');
for (const required of [
  'telemetry-is-not-truth',
  'accuracy-is-not-precision',
  'calibration-is-not-validation',
  'simulation-is-not-proof',
  'model-is-not-reality',
  'map-is-not-terrain',
  'proxy-is-not-outcome',
  'assumption-is-not-evidence',
  'confidence-is-not-evidence',
  'trend-is-not-truth',
  'recommend-is-not-authorize',
  'dashboard-is-not-decision',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'sample-is-not-population',
  'anecdote-is-not-evidence',
  'noise-is-not-signal',
  'symptom-is-not-cause',
  'threshold-is-not-diagnosis',
  'correlation-is-not-causation',
  'verification-is-not-optional',
  'alert-is-not-decision',
  'learning-requires-a-verified-outcome',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!forecastBlock.includes(`'${required}'`)) {
    fail(`forecast-is-not-fact related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(forecastBlock)) {
  fail('forecast-is-not-fact related reading must include the Strategic Pilot');
}
if (forecastBlock.includes("next: 'strategic-pilot'")) {
  fail('forecast-is-not-fact next step is the Field Manual');
}

const forecastPage = read('app/insights/forecast-is-not-fact/page.tsx');
for (const required of [
  '/insights/model-is-not-reality',
  '/insights/map-is-not-terrain',
  '/insights/proxy-is-not-outcome',
  '/insights/assumption-is-not-evidence',
  '/insights/confidence-is-not-evidence',
  '/insights/trend-is-not-truth',
  '/insights/recommend-is-not-authorize',
  '/insights/dashboard-is-not-decision',
  '/insights/blank-is-not-zero',
  '/insights/unknown-is-not-clear',
  '/insights/sample-is-not-population',
  '/insights/anecdote-is-not-evidence',
  '/insights/noise-is-not-signal',
  '/insights/symptom-is-not-cause',
  '/insights/threshold-is-not-diagnosis',
  '/insights/correlation-is-not-causation',
  '/insights/verification-is-not-optional',
  '/insights/alert-is-not-decision',
  '/insights/silence-is-not-clearance',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/human-decision-is-not-optional',
  '/insights/action-is-not-execution',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'forecast',
  'projection',
  'RUL estimate',
  'demand plan',
  'Monte Carlo percentile',
  'LLM-generated outlook',
  'forward-looking compression',
  'assumptions',
  'uncertainty bands',
  'refusal conditions',
  'false clearance',
  'false precision',
  'Evidence from the plant beats the forecast',
  'not the plant state',
  'not a diagnosis',
  'not root cause',
  'not authorization for corrective work',
  'verified operational outcome',
  'not a Decision Case',
  'investigate or prepare',
  'false certainty',
  'approved evidence',
  'honesty boundary',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'forecast clearance',
  'Sync may surface a forecast',
  'Sync refuses false precision',
  'Verification stays open',
  'named human',
  'Sync recommends',
  'named human decides',
  'authorized systems',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!forecastPage.includes(required)) {
    fail(`forecast-is-not-fact page must include ${required}`);
  }
}
if (
  !forecastPage.includes('The series continues with') ||
  !forecastPage.includes('/insights/simulation-is-not-proof')
) {
  fail('forecast-is-not-fact must point the series forward to simulation-is-not-proof');
}

const simulationBlock = stepBlock('simulation-is-not-proof');
for (const required of [
  'telemetry-is-not-truth',
  'accuracy-is-not-precision',
  'calibration-is-not-validation',
  'forecast-is-not-fact',
  'model-is-not-reality',
  'map-is-not-terrain',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'proxy-is-not-outcome',
  'assumption-is-not-evidence',
  'confidence-is-not-evidence',
  'trend-is-not-truth',
  'recommend-is-not-authorize',
  'dashboard-is-not-decision',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'sample-is-not-population',
  'anecdote-is-not-evidence',
  'noise-is-not-signal',
  'symptom-is-not-cause',
  'threshold-is-not-diagnosis',
  'correlation-is-not-causation',
  'alert-is-not-decision',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!simulationBlock.includes(`'${required}'`)) {
    fail(`simulation-is-not-proof related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(simulationBlock)) {
  fail('simulation-is-not-proof related reading must include the Strategic Pilot');
}
if (simulationBlock.includes("next: 'strategic-pilot'")) {
  fail('simulation-is-not-proof next step is the Field Manual');
}

const simulationPage = read('app/insights/simulation-is-not-proof/page.tsx');
for (const required of [
  '/insights/forecast-is-not-fact',
  '/insights/model-is-not-reality',
  '/insights/map-is-not-terrain',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/proxy-is-not-outcome',
  '/insights/assumption-is-not-evidence',
  '/insights/confidence-is-not-evidence',
  '/insights/trend-is-not-truth',
  '/insights/recommend-is-not-authorize',
  '/insights/dashboard-is-not-decision',
  '/insights/blank-is-not-zero',
  '/insights/unknown-is-not-clear',
  '/insights/sample-is-not-population',
  '/insights/anecdote-is-not-evidence',
  '/insights/noise-is-not-signal',
  '/insights/symptom-is-not-cause',
  '/insights/threshold-is-not-diagnosis',
  '/insights/correlation-is-not-causation',
  '/insights/alert-is-not-decision',
  '/insights/silence-is-not-clearance',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/action-is-not-execution',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'digital-twin run',
  'Monte Carlo fan',
  'what-if scenario',
  'failure simulation',
  'controlled representation',
  'possible futures',
  'coverage',
  'assumptions',
  'calibration',
  'observed outcomes',
  'honesty boundary',
  'refusal',
  'false clearance',
  'false precision',
  'Evidence from the plant beats the simulation',
  'not proof',
  'not a diagnosis',
  'not root cause',
  'not authorization for corrective work',
  'verified operational outcome',
  'not a Decision Case',
  'false certainty',
  'approved evidence',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'simulation clearance',
  'Sync may surface a simulation',
  'Sync refuses false precision',
  'Verification stays open',
  'named human',
  'Sync recommends',
  'named human decides',
  'authorized systems',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!simulationPage.includes(required)) {
    fail(`simulation-is-not-proof page must include ${required}`);
  }
}
if (
  !simulationPage.includes('The series continues with') ||
  !simulationPage.includes('/insights/calibration-is-not-validation')
) {
  fail('simulation-is-not-proof must point the series forward to calibration-is-not-validation');
}

const calibrationBlock = stepBlock('calibration-is-not-validation');
for (const required of [
  'green-is-not-go',
  'dashboard-is-not-control',
  'telemetry-is-not-truth',
  'accuracy-is-not-precision',
  'simulation-is-not-proof',
  'forecast-is-not-fact',
  'model-is-not-reality',
  'map-is-not-terrain',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'proxy-is-not-outcome',
  'assumption-is-not-evidence',
  'confidence-is-not-evidence',
  'trend-is-not-truth',
  'recommend-is-not-authorize',
  'dashboard-is-not-decision',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'sample-is-not-population',
  'anecdote-is-not-evidence',
  'noise-is-not-signal',
  'symptom-is-not-cause',
  'threshold-is-not-diagnosis',
  'correlation-is-not-causation',
  'alert-is-not-decision',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!calibrationBlock.includes(`'${required}'`)) {
    fail(`calibration-is-not-validation related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(calibrationBlock)) {
  fail('calibration-is-not-validation related reading must include the Strategic Pilot');
}
if (calibrationBlock.includes("next: 'strategic-pilot'")) {
  fail('calibration-is-not-validation next step is the Field Manual');
}

const calibrationPage = read('app/insights/calibration-is-not-validation/page.tsx');
for (const required of [
  '/insights/simulation-is-not-proof',
  '/insights/forecast-is-not-fact',
  '/insights/model-is-not-reality',
  '/insights/map-is-not-terrain',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/proxy-is-not-outcome',
  '/insights/assumption-is-not-evidence',
  '/insights/confidence-is-not-evidence',
  '/insights/trend-is-not-truth',
  '/insights/recommend-is-not-authorize',
  '/insights/dashboard-is-not-decision',
  '/insights/blank-is-not-zero',
  '/insights/unknown-is-not-clear',
  '/insights/sample-is-not-population',
  '/insights/anecdote-is-not-evidence',
  '/insights/noise-is-not-signal',
  '/insights/symptom-is-not-cause',
  '/insights/threshold-is-not-diagnosis',
  '/insights/correlation-is-not-causation',
  '/insights/alert-is-not-decision',
  '/insights/silence-is-not-clearance',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/action-is-not-execution',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'historical residuals',
  'model',
  'twin',
  'sensor',
  'forecast',
  'well-calibrated simulation',
  'RUL curve',
  'digital twin',
  'fit for the decision',
  'honesty boundary',
  'verification boundary',
  'observed outcomes',
  'named coverage',
  'assumptions',
  'refusal when evidence is insufficient',
  'false clearance',
  'false precision',
  'Evidence from the plant beats the calibration',
  'not validation',
  'not a diagnosis',
  'not root cause',
  'not authorization for corrective work',
  'verified operational outcome',
  'not a Decision Case',
  'false certainty',
  'approved evidence',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'calibration clearance',
  'Sync may surface a calibration',
  'Sync refuses false precision',
  'Verification stays open',
  'named human',
  'Sync recommends',
  'named human decides',
  'authorized systems',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!calibrationPage.includes(required)) {
    fail(`calibration-is-not-validation page must include ${required}`);
  }
}
if (
  !calibrationPage.includes('The series continues with') ||
  !calibrationPage.includes('/insights/accuracy-is-not-precision')
) {
  fail('calibration-is-not-validation must point the series forward to accuracy-is-not-precision');
}

const accuracyBlock = stepBlock('accuracy-is-not-precision');
for (const required of [
  'green-is-not-go',
  'dashboard-is-not-control',
  'telemetry-is-not-truth',
  'calibration-is-not-validation',
  'simulation-is-not-proof',
  'forecast-is-not-fact',
  'model-is-not-reality',
  'map-is-not-terrain',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'proxy-is-not-outcome',
  'assumption-is-not-evidence',
  'confidence-is-not-evidence',
  'trend-is-not-truth',
  'recommend-is-not-authorize',
  'dashboard-is-not-decision',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'sample-is-not-population',
  'anecdote-is-not-evidence',
  'noise-is-not-signal',
  'symptom-is-not-cause',
  'threshold-is-not-diagnosis',
  'correlation-is-not-causation',
  'alert-is-not-decision',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!accuracyBlock.includes(`'${required}'`)) {
    fail(`accuracy-is-not-precision related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(accuracyBlock)) {
  fail('accuracy-is-not-precision related reading must include the Strategic Pilot');
}
if (accuracyBlock.includes("next: 'strategic-pilot'")) {
  fail('accuracy-is-not-precision next step is the Field Manual');
}

const accuracyPage = read('app/insights/accuracy-is-not-precision/page.tsx');
for (const required of [
  '/insights/calibration-is-not-validation',
  '/insights/simulation-is-not-proof',
  '/insights/forecast-is-not-fact',
  '/insights/model-is-not-reality',
  '/insights/map-is-not-terrain',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/proxy-is-not-outcome',
  '/insights/assumption-is-not-evidence',
  '/insights/confidence-is-not-evidence',
  '/insights/trend-is-not-truth',
  '/insights/recommend-is-not-authorize',
  '/insights/dashboard-is-not-decision',
  '/insights/blank-is-not-zero',
  '/insights/unknown-is-not-clear',
  '/insights/sample-is-not-population',
  '/insights/anecdote-is-not-evidence',
  '/insights/noise-is-not-signal',
  '/insights/symptom-is-not-cause',
  '/insights/threshold-is-not-diagnosis',
  '/insights/correlation-is-not-causation',
  '/insights/alert-is-not-decision',
  '/insights/silence-is-not-clearance',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/action-is-not-execution',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'tight residuals',
  'fine resolution',
  'stable decimals',
  'repeatability',
  'vibration feature',
  'digital-twin residual',
  'RUL',
  'forecast',
  'plant decision',
  'observed outcomes',
  'honesty boundary',
  'verification boundary',
  'false clearance',
  'false precision',
  'Evidence from the plant beats the precise reading',
  'not accuracy',
  'not a diagnosis',
  'not root cause',
  'not authorization for corrective work',
  'verified operational outcome',
  'not a Decision Case',
  'false certainty',
  'approved evidence',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'precision clearance',
  'Sync may surface a precise reading',
  'Sync refuses false precision',
  'Verification stays open',
  'named human',
  'Sync recommends',
  'named human decides',
  'authorized systems',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!accuracyPage.includes(required)) {
    fail(`accuracy-is-not-precision page must include ${required}`);
  }
}

if (
  !accuracyPage.includes('The series continues with') ||
  !accuracyPage.includes('/insights/telemetry-is-not-truth')
) {
  fail('accuracy-is-not-precision must point the series forward to telemetry-is-not-truth');
}

const telemetryBlock = stepBlock('telemetry-is-not-truth');
for (const required of [
  'green-is-not-go',
  'dashboard-is-not-control',
  'accuracy-is-not-precision',
  'calibration-is-not-validation',
  'simulation-is-not-proof',
  'forecast-is-not-fact',
  'model-is-not-reality',
  'map-is-not-terrain',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'proxy-is-not-outcome',
  'assumption-is-not-evidence',
  'confidence-is-not-evidence',
  'trend-is-not-truth',
  'recommend-is-not-authorize',
  'dashboard-is-not-decision',
  'blank-is-not-zero',
  'unknown-is-not-clear',
  'sample-is-not-population',
  'anecdote-is-not-evidence',
  'noise-is-not-signal',
  'symptom-is-not-cause',
  'threshold-is-not-diagnosis',
  'correlation-is-not-causation',
  'alert-is-not-decision',
  'silence-is-not-clearance',
  'evidence-lineage-is-not-optional',
]) {
  if (!telemetryBlock.includes(`'${required}'`)) {
    fail(`telemetry-is-not-truth related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(telemetryBlock)) {
  fail('telemetry-is-not-truth related reading must include the Strategic Pilot');
}
if (telemetryBlock.includes("next: 'strategic-pilot'")) {
  fail('telemetry-is-not-truth next step is the Field Manual');
}

const telemetryPage = read('app/insights/telemetry-is-not-truth/page.tsx');
for (const required of [
  '/insights/accuracy-is-not-precision',
  '/insights/calibration-is-not-validation',
  '/insights/simulation-is-not-proof',
  '/insights/forecast-is-not-fact',
  '/insights/model-is-not-reality',
  '/insights/map-is-not-terrain',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/proxy-is-not-outcome',
  '/insights/assumption-is-not-evidence',
  '/insights/confidence-is-not-evidence',
  '/insights/trend-is-not-truth',
  '/insights/recommend-is-not-authorize',
  '/insights/dashboard-is-not-decision',
  '/insights/blank-is-not-zero',
  '/insights/unknown-is-not-clear',
  '/insights/sample-is-not-population',
  '/insights/anecdote-is-not-evidence',
  '/insights/noise-is-not-signal',
  '/insights/symptom-is-not-cause',
  '/insights/threshold-is-not-diagnosis',
  '/insights/correlation-is-not-causation',
  '/insights/alert-is-not-decision',
  '/insights/silence-is-not-clearance',
  '/insights/evidence-lineage-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/action-is-not-execution',
  "fieldManualPath('evidence')",
  "fieldManualPath('verification')",
  "fieldManualPath('learning')",
  'tags',
  'sensors',
  'historians',
  'SCADA',
  'CMMS counters',
  'stream of observations',
  'sensing',
  'sampling',
  'calibration',
  'context limits',
  'justify the action',
  'high-frequency',
  'green-looking',
  'wrong sensor',
  'wrong unit',
  'stale sample',
  'aliased signal',
  'proxy that does not track the failure mode',
  'honesty boundary',
  'verification boundary',
  'false clearance',
  'false precision',
  'Evidence from the plant beats the feed',
  'not a diagnosis',
  'not root cause',
  'not authorization for corrective work',
  'verified operational outcome',
  'not a Decision Case',
  'false certainty',
  'approved evidence',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'telemetry clearance',
  'Sync may surface telemetry',
  'Sync refuses false precision',
  'Verification stays open',
  'named human',
  'Sync recommends',
  'named human decides',
  'authorized systems',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
]) {
  if (!telemetryPage.includes(required)) {
    fail(`telemetry-is-not-truth page must include ${required}`);
  }
}
if (
  !telemetryPage.includes('The series continues with') ||
  !telemetryPage.includes('/insights/dashboard-is-not-control')
) {
  fail('telemetry-is-not-truth must point the series forward to dashboard-is-not-control');
}

const dashboardControlBlock = stepBlock('dashboard-is-not-control');
for (const required of [
  'ready-is-not-cleared',
  'green-is-not-go',
  'telemetry-is-not-truth',
  'accuracy-is-not-precision',
  'calibration-is-not-validation',
  'dashboard-is-not-decision',
  'coverage-is-not-control',
  'action-is-not-execution',
  'recommend-is-not-authorize',
  'verification-is-not-optional',
  'silence-is-not-clearance',
  'blank-is-not-zero',
  'map-is-not-terrain',
  'learning-requires-a-verified-outcome',
]) {
  if (!dashboardControlBlock.includes(`'${required}'`)) {
    fail(`dashboard-is-not-control related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(dashboardControlBlock)) {
  fail('dashboard-is-not-control related reading must include the Strategic Pilot');
}
if (dashboardControlBlock.includes("next: 'strategic-pilot'")) {
  fail('dashboard-is-not-control next step is the Field Manual');
}

const dashboardControlPage = read('app/insights/dashboard-is-not-control/page.tsx');
for (const required of [
  '/insights/telemetry-is-not-truth',
  '/insights/accuracy-is-not-precision',
  '/insights/calibration-is-not-validation',
  '/insights/dashboard-is-not-decision',
  '/insights/coverage-is-not-control',
  '/insights/action-is-not-execution',
  '/insights/recommend-is-not-authorize',
  '/insights/verification-is-not-optional',
  '/insights/silence-is-not-clearance',
  '/insights/blank-is-not-zero',
  '/insights/map-is-not-terrain',
  '/insights/learning-requires-a-verified-outcome',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  'historian tag',
  'setpoint',
  'work order',
  'isolate',
  'Refreshing',
  'filtering',
  'read path',
  'None of them is a setpoint',
  'A value rendered on the screen is not a command',
  'named human',
  'Authorized execution systems',
  'Direct plant execute stays off',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice dashboard is not a command',
]) {
  if (!dashboardControlPage.includes(required)) {
    fail(`dashboard-is-not-control page must include ${required}`);
  }
}
if (
  !dashboardControlPage.includes('The series continues with') ||
  !dashboardControlPage.includes('/insights/green-is-not-go')
) {
  fail('dashboard-is-not-control must point the series forward to green-is-not-go');
}

const verificationBlock = stepBlock('verification-is-not-optional');
if (!verificationBlock.includes("'green-is-not-go'")) {
  fail('verification-is-not-optional related reading must cite green-is-not-go');
}
if (!verificationBlock.includes("'ready-is-not-cleared'")) {
  fail('verification-is-not-optional related reading must cite ready-is-not-cleared');
}

const greenBlock = stepBlock('green-is-not-go');
for (const required of [
  'ready-is-not-cleared',
  'status-is-not-clearance',
  'dashboard-is-not-control',
  'alert-is-not-decision',
  'telemetry-is-not-truth',
  'accuracy-is-not-precision',
  'calibration-is-not-validation',
  'coverage-is-not-control',
  'verification-is-not-optional',
  'human-decision-is-not-optional',
  'silence-is-not-clearance',
  'recommend-is-not-authorize',
  'action-is-not-execution',
  'learning-requires-a-verified-outcome',
]) {
  if (!greenBlock.includes(`'${required}'`)) {
    fail(`green-is-not-go related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(greenBlock)) {
  fail('green-is-not-go related reading must include the Strategic Pilot');
}
if (greenBlock.includes("next: 'strategic-pilot'")) {
  fail('green-is-not-go next step is the Field Manual');
}

const greenPage = read('app/insights/green-is-not-go/page.tsx');
for (const required of [
  '/insights/dashboard-is-not-control',
  '/insights/alert-is-not-decision',
  '/insights/telemetry-is-not-truth',
  '/insights/accuracy-is-not-precision',
  '/insights/calibration-is-not-validation',
  '/insights/coverage-is-not-control',
  '/insights/verification-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/silence-is-not-clearance',
  '/insights/recommend-is-not-authorize',
  '/insights/action-is-not-execution',
  '/insights/learning-requires-a-verified-outcome',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  'green tile',
  'green status',
  'green health score',
  'all-green dashboard',
  'stored or computed value',
  'thresholds someone chose',
  'not permission to run',
  'leave equipment in service',
  'named human',
  'observed outcomes',
  'named coverage and assumptions',
  'refusal when evidence is insufficient',
  'false clearance',
  'honesty and verification boundary',
  'Evidence from the plant beats the color',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'green clearance',
  'Direct plant execute stays off',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice board painted green is not a customer plant release',
]) {
  if (!greenPage.includes(required)) {
    fail(`green-is-not-go page must include ${required}`);
  }
}
if (
  !greenPage.includes('The series continues with') ||
  !greenPage.includes('/insights/status-is-not-clearance')
) {
  fail('green-is-not-go must point the series forward to status-is-not-clearance');
}
if (!greenPage.includes('/insights/ready-is-not-cleared')) {
  fail('green-is-not-go must keep the ready-is-not-cleared link');
}

for (const [slug, label] of [
  ['silence-is-not-clearance', 'silence-is-not-clearance'],
  ['alert-is-not-decision', 'alert-is-not-decision'],
  ['dashboard-is-not-control', 'dashboard-is-not-control'],
  ['telemetry-is-not-truth', 'telemetry-is-not-truth'],
  ['coverage-is-not-control', 'coverage-is-not-control'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
  ['human-decision-is-not-optional', 'human-decision-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'status-is-not-clearance'")) {
    fail(`${label} related reading must cite status-is-not-clearance`);
  }
}

const statusBlock = stepBlock('status-is-not-clearance');
for (const required of [
  'ready-is-not-cleared',
  'green-is-not-go',
  'silence-is-not-clearance',
  'alert-is-not-decision',
  'dashboard-is-not-control',
  'telemetry-is-not-truth',
  'coverage-is-not-control',
  'verification-is-not-optional',
  'human-decision-is-not-optional',
  'recommend-is-not-authorize',
  'action-is-not-execution',
  'learning-requires-a-verified-outcome',
]) {
  if (!statusBlock.includes(`'${required}'`)) {
    fail(`status-is-not-clearance related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(statusBlock)) {
  fail('status-is-not-clearance related reading must include the Strategic Pilot');
}
if (statusBlock.includes("next: 'strategic-pilot'")) {
  fail('status-is-not-clearance next step is the Field Manual');
}

const statusPage = read('app/insights/status-is-not-clearance/page.tsx');
for (const required of [
  '/insights/ready-is-not-cleared',
  '/insights/green-is-not-go',
  '/insights/silence-is-not-clearance',
  '/insights/alert-is-not-decision',
  '/insights/dashboard-is-not-control',
  '/insights/telemetry-is-not-truth',
  '/insights/coverage-is-not-control',
  '/insights/verification-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/recommend-is-not-authorize',
  '/insights/action-is-not-execution',
  '/insights/learning-requires-a-verified-outcome',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  'status field',
  'status tile',
  'status badge',
  'all systems status OK',
  'label on stored or computed values',
  'thresholds someone chose',
  'not clearance to run',
  'start work',
  'leave equipment in service',
  'close a Decision Case',
  'named human decision',
  'observed outcomes',
  'named coverage and assumptions',
  'refusal when evidence is not enough',
  'evidence is not enough',
  'false clearance',
  'honesty and verification boundary',
  'Evidence from the plant beats the label',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'status clearance',
  'Direct plant execute stays off',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice status that says OK is not a customer plant release',
]) {
  if (!statusPage.includes(required)) {
    fail(`status-is-not-clearance page must include ${required}`);
  }
}
if (
  !statusPage.includes('The series continues with') ||
  !statusPage.includes('/insights/ready-is-not-cleared')
) {
  fail('status-is-not-clearance must point the series forward to ready-is-not-cleared');
}

const readyBlock = stepBlock('ready-is-not-cleared');
for (const required of [
  'status-is-not-clearance',
  'green-is-not-go',
  'silence-is-not-clearance',
  'dashboard-is-not-control',
  'alert-is-not-decision',
  'coverage-is-not-control',
  'action-is-not-execution',
  'recommend-is-not-authorize',
  'verification-is-not-optional',
  'human-decision-is-not-optional',
  'learning-requires-a-verified-outcome',
]) {
  if (!readyBlock.includes(`'${required}'`)) {
    fail(`ready-is-not-cleared related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(readyBlock)) {
  fail('ready-is-not-cleared related reading must include the Strategic Pilot');
}
if (readyBlock.includes("next: 'strategic-pilot'")) {
  fail('ready-is-not-cleared next step is the Field Manual');
}

const readyPage = read('app/insights/ready-is-not-cleared/page.tsx');
for (const required of [
  '/insights/status-is-not-clearance',
  '/insights/green-is-not-go',
  '/insights/silence-is-not-clearance',
  '/insights/dashboard-is-not-control',
  '/insights/alert-is-not-decision',
  '/insights/coverage-is-not-control',
  '/insights/action-is-not-execution',
  '/insights/recommend-is-not-authorize',
  '/insights/verification-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  'ready flag',
  'ready checklist',
  'ready-to-start badge',
  'system ready',
  'crew ready',
  'parts ready',
  'readiness label',
  'thresholds someone chose',
  'not clearance',
  'close a Decision Case',
  'A status is not clearance',
  'named human',
  'observed outcomes',
  'named coverage and assumptions',
  'refusal when evidence is missing',
  'false clearance',
  'honesty and verification boundary',
  'Evidence from the plant beats the label',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'ready clearance',
  'Direct plant execute stays off',
  'states no OEM limit',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice ready flag is not a customer plant release',
]) {
  if (!readyPage.includes(required)) {
    fail(`ready-is-not-cleared page must include ${required}`);
  }
}

if (
  !statusPage.includes('The series continues with') ||
  !statusPage.includes('/insights/cleared-is-not-complete')
) {
  fail('status-is-not-clearance must point the series forward to cleared-is-not-complete');
}

for (const [slug, label] of [
  ['status-is-not-clearance', 'status-is-not-clearance'],
  ['green-is-not-go', 'green-is-not-go'],
  ['silence-is-not-clearance', 'silence-is-not-clearance'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['action-is-not-execution', 'action-is-not-execution'],
  ['coverage-is-not-control', 'coverage-is-not-control'],
]) {
  if (!stepBlock(slug).includes("'cleared-is-not-complete'")) {
    fail(`${label} related reading must cite cleared-is-not-complete`);
  }
}

const clearedBlock = stepBlock('cleared-is-not-complete');
for (const required of [
  'status-is-not-clearance',
  'green-is-not-go',
  'silence-is-not-clearance',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'action-is-not-execution',
  'coverage-is-not-control',
]) {
  if (!clearedBlock.includes(`'${required}'`)) {
    fail(`cleared-is-not-complete related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(clearedBlock)) {
  fail('cleared-is-not-complete related reading must include the Strategic Pilot');
}
if (clearedBlock.includes("next: 'strategic-pilot'")) {
  fail('cleared-is-not-complete next step is the Field Manual');
}

const clearedPage = read('app/insights/cleared-is-not-complete/page.tsx');
for (const required of [
  '/insights/status-is-not-clearance',
  '/insights/green-is-not-go',
  '/insights/silence-is-not-clearance',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/action-is-not-execution',
  '/insights/coverage-is-not-control',
  '/insights/human-decision-is-not-optional',
  '/insights/recommend-is-not-authorize',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  'cleared flag',
  'cleared checklist',
  'cleared-to-proceed badge',
  'cleared for start',
  'cleared for service',
  'case cleared',
  'clearance decision',
  'label someone attached',
  'not proof the work is finished',
  'the outcome is verified',
  'the value is realized',
  'honestly close',
  'observed outcomes',
  'named verification',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'false closure',
  'honesty and verification boundary',
  'Evidence from the plant beats the stamp',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'cleared completion',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice flag that says cleared is not a customer plant release',
]) {
  if (!clearedPage.includes(required)) {
    fail(`cleared-is-not-complete page must include ${required}`);
  }
}

if (
  !clearedPage.includes('The series continues with') ||
  !clearedPage.includes('/insights/complete-is-not-verified')
) {
  fail('cleared-is-not-complete must point the series forward to complete-is-not-verified');
}

if (!readyPage.includes('/insights/complete-is-not-verified')) {
  fail('ready-is-not-cleared must link complete-is-not-verified');
}
if (!statusPage.includes('/insights/complete-is-not-verified')) {
  fail('status-is-not-clearance must link complete-is-not-verified');
}

for (const [slug, label] of [
  ['cleared-is-not-complete', 'cleared-is-not-complete'],
  ['ready-is-not-cleared', 'ready-is-not-cleared'],
  ['status-is-not-clearance', 'status-is-not-clearance'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['action-is-not-execution', 'action-is-not-execution'],
]) {
  if (!stepBlock(slug).includes("'complete-is-not-verified'")) {
    fail(`${label} related reading must cite complete-is-not-verified`);
  }
}

const completeBlock = stepBlock('complete-is-not-verified');
for (const required of [
  'verified-is-not-assured',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'status-is-not-clearance',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'action-is-not-execution',
]) {
  if (!completeBlock.includes(`'${required}'`)) {
    fail(`complete-is-not-verified related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(completeBlock)) {
  fail('complete-is-not-verified related reading must include the Strategic Pilot');
}
if (completeBlock.includes("next: 'strategic-pilot'")) {
  fail('complete-is-not-verified next step is the Field Manual');
}

const completePage = read('app/insights/complete-is-not-verified/page.tsx');
for (const required of [
  '/insights/cleared-is-not-complete',
  '/insights/ready-is-not-cleared',
  '/insights/status-is-not-clearance',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/action-is-not-execution',
  '/insights/human-decision-is-not-optional',
  '/insights/recommend-is-not-authorize',
  '/insights/coverage-is-not-control',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'completed checklist',
  'completed work order',
  'completed case',
  '100% complete',
  'complete badge',
  'completion label',
  'criteria someone chose',
  'named observation',
  'named criteria',
  'outcome happened',
  'measured result matches the Decision Case',
  'honestly close',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'completion stamp',
  'false closure',
  'honesty and verification boundary',
  'Evidence from the plant beats the badge',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'complete closure',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'CMMS write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice badge that says complete is not a customer plant release',
]) {
  if (!completePage.includes(required)) {
    fail(`complete-is-not-verified page must include ${required}`);
  }
}

if (
  !completePage.includes('The series continues with') ||
  !completePage.includes('/insights/verified-is-not-assured')
) {
  fail('complete-is-not-verified must point the series forward to verified-is-not-assured');
}

for (const [slug, label] of [
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['green-is-not-go', 'green-is-not-go'],
  ['honesty-boundary-is-not-optional', 'honesty-boundary-is-not-optional'],
  ['human-decision-is-not-optional', 'human-decision-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'verified-is-not-assured'")) {
    fail(`${label} related reading must cite verified-is-not-assured`);
  }
}

const verifiedBlock = stepBlock('verified-is-not-assured');
for (const required of [
  'complete-is-not-verified',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'green-is-not-go',
  'honesty-boundary-is-not-optional',
  'human-decision-is-not-optional',
]) {
  if (!verifiedBlock.includes(`'${required}'`)) {
    fail(`verified-is-not-assured related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(verifiedBlock)) {
  fail('verified-is-not-assured related reading must include the Strategic Pilot');
}
if (verifiedBlock.includes("next: 'strategic-pilot'")) {
  fail('verified-is-not-assured next step is the Field Manual');
}

const verifiedPage = read('app/insights/verified-is-not-assured/page.tsx');
for (const required of [
  '/insights/complete-is-not-verified',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/green-is-not-go',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/human-decision-is-not-optional',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'work package',
  'inspection',
  'AI recommendation',
  'evidence collected',
  'checks passed',
  'lineage present',
  'claim about the past',
  'continuing fitness',
  'time-bounded',
  'known-good',
  'operating conditions',
  'ownership',
  'monitoring',
  'human authority boundary',
  'false greens',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'honesty and verification boundary',
  'Evidence from the plant beats the verified stamp',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'verified assurance',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'CMMS write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says verified is not a customer plant release',
]) {
  if (!verifiedPage.includes(required)) {
    fail(`verified-is-not-assured page must include ${required}`);
  }
}

for (const page of [
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/green-is-not-go/page.tsx',
  'app/insights/honesty-boundary-is-not-optional/page.tsx',
  'app/insights/human-decision-is-not-optional/page.tsx',
]) {
  if (!read(page).includes('/insights/verified-is-not-assured')) {
    fail(`${page} must link verified-is-not-assured`);
  }
}

if (
  !verifiedPage.includes('The series continues with') ||
  !verifiedPage.includes('/insights/assured-is-not-proven')
) {
  fail('verified-is-not-assured must point the series forward to assured-is-not-proven');
}

for (const [slug, label] of [
  ['verified-is-not-assured', 'verified-is-not-assured'],
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
  ['simulation-is-not-proof', 'simulation-is-not-proof'],
  ['green-is-not-go', 'green-is-not-go'],
  ['honesty-boundary-is-not-optional', 'honesty-boundary-is-not-optional'],
  ['human-decision-is-not-optional', 'human-decision-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'assured-is-not-proven'")) {
    fail(`${label} related reading must cite assured-is-not-proven`);
  }
}

const assuredBlock = stepBlock('assured-is-not-proven');
for (const required of [
  'verified-is-not-assured',
  'complete-is-not-verified',
  'verification-is-not-optional',
  'simulation-is-not-proof',
  'green-is-not-go',
  'honesty-boundary-is-not-optional',
  'human-decision-is-not-optional',
]) {
  if (!assuredBlock.includes(`'${required}'`)) {
    fail(`assured-is-not-proven related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(assuredBlock)) {
  fail('assured-is-not-proven related reading must include the Strategic Pilot');
}
if (assuredBlock.includes("next: 'strategic-pilot'")) {
  fail('assured-is-not-proven next step is the Field Manual');
}

const assuredPage = read('app/insights/assured-is-not-proven/page.tsx');
for (const required of [
  '/insights/verified-is-not-assured',
  '/insights/complete-is-not-verified',
  '/insights/verification-is-not-optional',
  '/insights/simulation-is-not-proof',
  '/insights/green-is-not-go',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/human-decision-is-not-optional',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'time-bounded',
  'known-good',
  'operating conditions',
  'ownership',
  'monitoring',
  'closed evidentiary chain',
  'specific claim',
  'named conditions',
  'reproducible checks',
  'lineage',
  'decision authority',
  'refuse when evidence is incomplete',
  'standing and probabilistic',
  'claim-scoped',
  'falsifiable',
  'false certainty',
  'maintenance and production decisions',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'honesty and verification boundary',
  'Evidence from the plant beats the assurance',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'assured proof',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'CMMS write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says assured is not a customer plant release',
]) {
  if (!assuredPage.includes(required)) {
    fail(`assured-is-not-proven page must include ${required}`);
  }
}

for (const page of [
  'app/insights/verified-is-not-assured/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/simulation-is-not-proof/page.tsx',
  'app/insights/green-is-not-go/page.tsx',
  'app/insights/honesty-boundary-is-not-optional/page.tsx',
  'app/insights/human-decision-is-not-optional/page.tsx',
]) {
  if (!read(page).includes('/insights/assured-is-not-proven')) {
    fail(`${page} must link assured-is-not-proven`);
  }
}

if (
  !assuredPage.includes('The series continues with') ||
  !assuredPage.includes('/insights/proof-is-not-authorization')
) {
  fail('assured-is-not-proven must point the series forward to proof-is-not-authorization');
}

for (const [slug, label] of [
  ['assured-is-not-proven', 'assured-is-not-proven'],
  ['verified-is-not-assured', 'verified-is-not-assured'],
  ['green-is-not-go', 'green-is-not-go'],
  ['action-is-not-execution', 'action-is-not-execution'],
  ['human-decision-is-not-optional', 'human-decision-is-not-optional'],
  ['honesty-boundary-is-not-optional', 'honesty-boundary-is-not-optional'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'proof-is-not-authorization'")) {
    fail(`${label} related reading must cite proof-is-not-authorization`);
  }
}

const proofBlock = stepBlock('proof-is-not-authorization');
for (const required of [
  'assured-is-not-proven',
  'verified-is-not-assured',
  'green-is-not-go',
  'action-is-not-execution',
  'human-decision-is-not-optional',
  'honesty-boundary-is-not-optional',
  'verification-is-not-optional',
]) {
  if (!proofBlock.includes(`'${required}'`)) {
    fail(`proof-is-not-authorization related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(proofBlock)) {
  fail('proof-is-not-authorization related reading must include the Strategic Pilot');
}
if (proofBlock.includes("next: 'strategic-pilot'")) {
  fail('proof-is-not-authorization next step is the Field Manual');
}

const proofPage = read('app/insights/proof-is-not-authorization/page.tsx');
for (const required of [
  '/insights/assured-is-not-proven',
  '/insights/verified-is-not-assured',
  '/insights/green-is-not-go',
  '/insights/action-is-not-execution',
  '/insights/human-decision-is-not-optional',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/verification-is-not-optional',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'closed evidentiary chain',
  'specific claim',
  'named conditions',
  'reproducible checks',
  'lineage',
  'decision authority',
  'refuse when evidence is incomplete',
  'claim-scoped',
  'falsifiable',
  'authorization',
  'accepts consequence',
  'authorized execution systems',
  'write a CMMS work order',
  'clear equipment to run',
  'plant-execute',
  'Surfacing is still a read',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'honesty and verification boundary',
  'Evidence from the plant beats the chain',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'proven authorization',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'CMMS write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says proven is not a customer plant release',
  'A named human decides',
]) {
  if (!proofPage.includes(required)) {
    fail(`proof-is-not-authorization page must include ${required}`);
  }
}

for (const page of [
  'app/insights/assured-is-not-proven/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
  'app/insights/green-is-not-go/page.tsx',
  'app/insights/action-is-not-execution/page.tsx',
  'app/insights/human-decision-is-not-optional/page.tsx',
  'app/insights/honesty-boundary-is-not-optional/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
]) {
  if (!read(page).includes('/insights/proof-is-not-authorization')) {
    fail(`${page} must link proof-is-not-authorization`);
  }
}

if (
  !proofPage.includes('The series continues with') ||
  !proofPage.includes('/insights/authorization-is-not-accountability')
) {
  fail('proof-is-not-authorization must point the series forward to authorization-is-not-accountability');
}

for (const [slug, label] of [
  ['proof-is-not-authorization', 'proof-is-not-authorization'],
  ['assured-is-not-proven', 'assured-is-not-proven'],
  ['verified-is-not-assured', 'verified-is-not-assured'],
  ['green-is-not-go', 'green-is-not-go'],
  ['action-is-not-execution', 'action-is-not-execution'],
  ['human-decision-is-not-optional', 'human-decision-is-not-optional'],
  ['honesty-boundary-is-not-optional', 'honesty-boundary-is-not-optional'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'authorization-is-not-accountability'")) {
    fail(`${label} related reading must cite authorization-is-not-accountability`);
  }
}

const accountabilityBlock = stepBlock('authorization-is-not-accountability');
for (const required of [
  'proof-is-not-authorization',
  'assured-is-not-proven',
  'verified-is-not-assured',
  'green-is-not-go',
  'action-is-not-execution',
  'human-decision-is-not-optional',
  'honesty-boundary-is-not-optional',
  'verification-is-not-optional',
]) {
  if (!accountabilityBlock.includes(`'${required}'`)) {
    fail(`authorization-is-not-accountability related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(accountabilityBlock)) {
  fail('authorization-is-not-accountability related reading must include the Strategic Pilot');
}
if (accountabilityBlock.includes("next: 'strategic-pilot'")) {
  fail('authorization-is-not-accountability next step is the Field Manual');
}

const accountabilityPage = read('app/insights/authorization-is-not-accountability/page.tsx');
for (const required of [
  '/insights/proof-is-not-authorization',
  '/insights/assured-is-not-proven',
  '/insights/verified-is-not-assured',
  '/insights/green-is-not-go',
  '/insights/action-is-not-execution',
  '/insights/human-decision-is-not-optional',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/verification-is-not-optional',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'who may start',
  'continuing named ownership',
  'results, exceptions, and learning',
  'after the work runs',
  'authorized state',
  'Surfacing is still a read',
  'after the plant move',
  'accepts consequence',
  'authorized execution systems',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'honesty and verification boundary',
  'Evidence from the plant beats the authorized state',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'authorized accountability',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'CMMS write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says authorized is not a customer plant release',
  'A named human decides',
  'A named human remains accountable',
]) {
  if (!accountabilityPage.includes(required)) {
    fail(`authorization-is-not-accountability page must include ${required}`);
  }
}

for (const page of [
  'app/insights/proof-is-not-authorization/page.tsx',
  'app/insights/assured-is-not-proven/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
  'app/insights/green-is-not-go/page.tsx',
  'app/insights/action-is-not-execution/page.tsx',
  'app/insights/human-decision-is-not-optional/page.tsx',
  'app/insights/honesty-boundary-is-not-optional/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
]) {
  if (!read(page).includes('/insights/authorization-is-not-accountability')) {
    fail(`${page} must link authorization-is-not-accountability`);
  }
}

if (
  !accountabilityPage.includes('The series continues with') ||
  !accountabilityPage.includes('/insights/accountability-is-not-closure')
) {
  fail('authorization-is-not-accountability must point the series forward to accountability-is-not-closure');
}

for (const [slug, label] of [
  ['authorization-is-not-accountability', 'authorization-is-not-accountability'],
  ['proof-is-not-authorization', 'proof-is-not-authorization'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
  ['verified-is-not-assured', 'verified-is-not-assured'],
]) {
  if (!stepBlock(slug).includes("'accountability-is-not-closure'")) {
    fail(`${label} related reading must cite accountability-is-not-closure`);
  }
}

const closureBlock = stepBlock('accountability-is-not-closure');
for (const required of [
  'authorization-is-not-accountability',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'verified-is-not-assured',
]) {
  if (!closureBlock.includes(`'${required}'`)) {
    fail(`accountability-is-not-closure related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(closureBlock)) {
  fail('accountability-is-not-closure related reading must include the Strategic Pilot');
}
if (closureBlock.includes("next: 'strategic-pilot'")) {
  fail('accountability-is-not-closure next step is the Field Manual');
}

const closurePage = read('app/insights/accountability-is-not-closure/page.tsx');
for (const required of [
  '/insights/authorization-is-not-accountability',
  '/insights/proof-is-not-authorization',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/verification-is-not-optional',
  '/insights/verified-is-not-assured',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'who remains responsible',
  'verified outcome',
  'measured result',
  'named intent',
  'operating loop',
  'accountable owner',
  'Surfacing is still a read',
  'after the plant move',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'honesty and verification boundary',
  'Evidence from the plant beats the accountable owner',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'accountable closure',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'CMMS write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says accountable is not a customer plant release',
  'A named human decides',
  'A named human remains accountable',
  'leaves the operating loop open',
]) {
  if (!closurePage.includes(required)) {
    fail(`accountability-is-not-closure page must include ${required}`);
  }
}

for (const page of [
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/proof-is-not-authorization/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/accountability-is-not-closure')) {
    fail(`${page} must link accountability-is-not-closure`);
  }
}

if (
  !closurePage.includes('The series continues with') ||
  !closurePage.includes('/insights/closure-is-not-cash')
) {
  fail('accountability-is-not-closure must point the series forward to closure-is-not-cash');
}

for (const [slug, label] of [
  ['accountability-is-not-closure', 'accountability-is-not-closure'],
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['cleared-is-not-complete', 'cleared-is-not-complete'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'closure-is-not-cash'")) {
    fail(`${label} related reading must cite closure-is-not-cash`);
  }
}

const cashBlock = stepBlock('closure-is-not-cash');
for (const required of [
  'accountability-is-not-closure',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
]) {
  if (!cashBlock.includes(`'${required}'`)) {
    fail(`closure-is-not-cash related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(cashBlock)) {
  fail('closure-is-not-cash related reading must include the Strategic Pilot');
}
if (cashBlock.includes("next: 'strategic-pilot'")) {
  fail('closure-is-not-cash next step is the Field Manual');
}

const cashPage = read('app/insights/closure-is-not-cash/page.tsx');
for (const required of [
  '/insights/accountability-is-not-closure',
  '/insights/complete-is-not-verified',
  '/insights/cleared-is-not-complete',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/verification-is-not-optional',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'work order',
  'ticket',
  'shift',
  'cash collected',
  'revenue recognized',
  'verified outcome',
  'operating loop',
  'Surfacing is still a read',
  'honesty and verification boundary',
  'Evidence from the plant beats the closed record',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'closed work order as cash collected',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'CMMS write-back',
  'Billing write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'Sync does not collect cash',
  'Sync does not recognize revenue',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says closed is not a customer plant release',
  'A named human decides',
  'A named human remains accountable',
]) {
  if (!cashPage.includes(required)) {
    fail(`closure-is-not-cash page must include ${required}`);
  }
}

for (const page of [
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
]) {
  if (!read(page).includes('/insights/closure-is-not-cash')) {
    fail(`${page} must link closure-is-not-cash`);
  }
}

if (
  !cashPage.includes('The series continues with') ||
  !cashPage.includes('/insights/cash-is-not-margin')
) {
  fail('closure-is-not-cash must point the series forward to cash-is-not-margin');
}

for (const [slug, label] of [
  ['closure-is-not-cash', 'closure-is-not-cash'],
  ['accountability-is-not-closure', 'accountability-is-not-closure'],
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['cleared-is-not-complete', 'cleared-is-not-complete'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'cash-is-not-margin'")) {
    fail(`${label} related reading must cite cash-is-not-margin`);
  }
}

const marginBlock = stepBlock('cash-is-not-margin');
for (const required of [
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
]) {
  if (!marginBlock.includes(`'${required}'`)) {
    fail(`cash-is-not-margin related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(marginBlock)) {
  fail('cash-is-not-margin related reading must include the Strategic Pilot');
}
if (marginBlock.includes("next: 'strategic-pilot'")) {
  fail('cash-is-not-margin next step is the Field Manual');
}

const marginPage = read('app/insights/cash-is-not-margin/page.tsx');
for (const required of [
  '/insights/closure-is-not-cash',
  '/insights/accountability-is-not-closure',
  '/insights/complete-is-not-verified',
  '/insights/cleared-is-not-complete',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/verification-is-not-optional',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'cash collected',
  'invoices paid',
  'contribution margin',
  'profitable ARR',
  'cost to serve',
  'cash in the bank',
  'Surfacing is still a read',
  'honesty and verification boundary',
  'Evidence from the plant beats the receipt',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'invoices paid as contribution margin',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'CMMS write-back',
  'Billing write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'Sync does not collect cash',
  'Sync does not recognize revenue',
  'Sync does not compute contribution margin',
  'Sync does not declare profitable ARR',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says paid is not a customer plant release',
  'A named human decides',
  'A named human remains accountable',
]) {
  if (!marginPage.includes(required)) {
    fail(`cash-is-not-margin page must include ${required}`);
  }
}

for (const page of [
  'app/insights/closure-is-not-cash/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
]) {
  if (!read(page).includes('/insights/cash-is-not-margin')) {
    fail(`${page} must link cash-is-not-margin`);
  }
}

if (
  !marginPage.includes('The series continues with') ||
  !marginPage.includes('/insights/margin-is-not-profit')
) {
  fail('cash-is-not-margin must point the series forward to margin-is-not-profit');
}

for (const [slug, label] of [
  ['cash-is-not-margin', 'cash-is-not-margin'],
  ['accountability-is-not-closure', 'accountability-is-not-closure'],
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['cleared-is-not-complete', 'cleared-is-not-complete'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'margin-is-not-profit'")) {
    fail(`${label} related reading must cite margin-is-not-profit`);
  }
}

const profitBlock = stepBlock('margin-is-not-profit');
for (const required of [
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
]) {
  if (!profitBlock.includes(`'${required}'`)) {
    fail(`margin-is-not-profit related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(profitBlock)) {
  fail('margin-is-not-profit related reading must include the Strategic Pilot');
}
if (profitBlock.includes("next: 'strategic-pilot'")) {
  fail('margin-is-not-profit next step is the Field Manual');
}

const profitPage = read('app/insights/margin-is-not-profit/page.tsx');
for (const required of [
  '/insights/cash-is-not-margin',
  '/insights/closure-is-not-cash',
  '/insights/accountability-is-not-closure',
  '/insights/complete-is-not-verified',
  '/insights/cleared-is-not-complete',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/verification-is-not-optional',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'contribution margin',
  'unit economics',
  'bottom-line profit',
  'profitable ARR',
  'cost to serve',
  'gross margin',
  'durable profitable revenue',
  'portfolio northstar',
  'Surfacing is still a read',
  'honesty and verification boundary',
  'Evidence from the plant beats the margin',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'contribution margin as bottom-line profit',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'CMMS write-back',
  'Billing write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'Sync does not compute contribution margin',
  'Sync does not compute bottom-line profit',
  'Sync does not declare profitable ARR',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says margin is not a customer plant release',
  'A named human decides',
  'A named human remains accountable',
]) {
  if (!profitPage.includes(required)) {
    fail(`margin-is-not-profit page must include ${required}`);
  }
}

for (const page of [
  'app/insights/cash-is-not-margin/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
]) {
  if (!read(page).includes('/insights/margin-is-not-profit')) {
    fail(`${page} must link margin-is-not-profit`);
  }
}

if (
  !profitPage.includes('The series continues with') ||
  !profitPage.includes('/insights/profit-is-not-value')
) {
  fail('margin-is-not-profit must point the series forward to profit-is-not-value');
}

for (const [slug, label] of [
  ['margin-is-not-profit', 'margin-is-not-profit'],
  ['accountability-is-not-closure', 'accountability-is-not-closure'],
  ['authorization-is-not-accountability', 'authorization-is-not-accountability'],
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['cleared-is-not-complete', 'cleared-is-not-complete'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
  ['verified-is-not-assured', 'verified-is-not-assured'],
]) {
  if (!stepBlock(slug).includes("'profit-is-not-value'")) {
    fail(`${label} related reading must cite profit-is-not-value`);
  }
}

const valueBlock = stepBlock('profit-is-not-value');
for (const required of [
  'value-is-not-outcome',
  'margin-is-not-profit',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'verified-is-not-assured',
]) {
  if (!valueBlock.includes(`'${required}'`)) {
    fail(`profit-is-not-value related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(valueBlock)) {
  fail('profit-is-not-value related reading must include the Strategic Pilot');
}
if (valueBlock.includes("next: 'strategic-pilot'")) {
  fail('profit-is-not-value next step is the Field Manual');
}

const valuePage = read('app/insights/profit-is-not-value/page.tsx');
for (const required of [
  '/insights/margin-is-not-profit',
  '/insights/cash-is-not-margin',
  '/insights/closure-is-not-cash',
  '/insights/accountability-is-not-closure',
  '/insights/authorization-is-not-accountability',
  '/insights/complete-is-not-verified',
  '/insights/cleared-is-not-complete',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/verified-is-not-assured',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'profit figure',
  'accounting result',
  'verified operational outcome',
  'cost rules',
  'Margin is not profit',
  'Cash is not margin',
  'Closure is not cash',
  'measured result',
  'named intent',
  'operating loop',
  'Surfacing is still a read',
  'after the plant move',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'honesty and verification boundary',
  'Evidence from the plant beats the profit figure',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'profit as value',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'CMMS write-back',
  'Billing write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says profitable is not a customer plant release',
  'A named human decides',
  'A named human remains accountable',
  'leaves the value unrecorded',
]) {
  if (!valuePage.includes(required)) {
    fail(`profit-is-not-value page must include ${required}`);
  }
}

for (const page of [
  'app/insights/margin-is-not-profit/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/profit-is-not-value')) {
    fail(`${page} must link profit-is-not-value`);
  }
}

if (
  !valuePage.includes('The series continues with') ||
  !valuePage.includes('/insights/value-is-not-outcome')
) {
  fail('profit-is-not-value must point the series forward to value-is-not-outcome');
}

for (const [slug, label] of [
  ['profit-is-not-value', 'profit-is-not-value'],
  ['cash-is-not-margin', 'cash-is-not-margin'],
  ['accountability-is-not-closure', 'accountability-is-not-closure'],
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['cleared-is-not-complete', 'cleared-is-not-complete'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'value-is-not-outcome'")) {
    fail(`${label} related reading must cite value-is-not-outcome`);
  }
}

const outcomeBlock = stepBlock('value-is-not-outcome');
for (const required of [
  'profit-is-not-value',
  'margin-is-not-profit',
  'accountability-is-not-closure',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'proxy-is-not-outcome',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
]) {
  if (!outcomeBlock.includes(`'${required}'`)) {
    fail(`value-is-not-outcome related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(outcomeBlock)) {
  fail('value-is-not-outcome related reading must include the Strategic Pilot');
}
if (outcomeBlock.includes("next: 'strategic-pilot'")) {
  fail('value-is-not-outcome next step is the Field Manual');
}

const outcomePage = read('app/insights/value-is-not-outcome/page.tsx');
for (const required of [
  '/insights/profit-is-not-value',
  '/insights/margin-is-not-profit',
  '/insights/accountability-is-not-closure',
  '/insights/cash-is-not-margin',
  '/insights/closure-is-not-cash',
  '/insights/proxy-is-not-outcome',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/verification-is-not-optional',
  '/reliability-assessment',
  '/strategic-pilot',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'reported outcome',
  'favorable KPI',
  'verified change',
  'named and authorized',
  'accounting result',
  'cost rules',
  'verified operational outcome',
  'Surfacing is still a read',
  'honesty and verification boundary',
  'Evidence from the plant beats the reported outcome',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'reported outcome as value',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'CMMS write-back',
  'Billing write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'APP_SETUP_URL',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says a favorable KPI is not a customer plant release',
  'A named human decides',
  'A named human remains accountable',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'leaves the value unrecorded',
  'Margin is not profit',
  'Profit is not value',
  'Value is not outcome',
]) {
  if (!outcomePage.includes(required)) {
    fail(`value-is-not-outcome page must include ${required}`);
  }
}

for (const page of [
  'app/insights/profit-is-not-value/page.tsx',
  'app/insights/cash-is-not-margin/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
]) {
  if (!read(page).includes('/insights/value-is-not-outcome')) {
    fail(`${page} must link value-is-not-outcome`);
  }
}

if (
  !outcomePage.includes('The series continues with') ||
  !outcomePage.includes('/insights/outcome-is-not-impact')
) {
  fail('value-is-not-outcome must point the series forward to outcome-is-not-impact');
}

for (const [slug, label] of [
  ['value-is-not-outcome', 'value-is-not-outcome'],
  ['profit-is-not-value', 'profit-is-not-value'],
  ['cash-is-not-margin', 'cash-is-not-margin'],
  ['accountability-is-not-closure', 'accountability-is-not-closure'],
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['cleared-is-not-complete', 'cleared-is-not-complete'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'outcome-is-not-impact'")) {
    fail(`${label} related reading must cite outcome-is-not-impact`);
  }
}

const impactBlock = stepBlock('outcome-is-not-impact');
for (const required of [
  'value-is-not-outcome',
  'profit-is-not-value',
  'proxy-is-not-outcome',
  'margin-is-not-profit',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'verified-is-not-assured',
  'recommend-is-not-authorize',
  'green-is-not-go',
  'correlation-is-not-causation',
]) {
  if (!impactBlock.includes(`'${required}'`)) {
    fail(`outcome-is-not-impact related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(impactBlock)) {
  fail('outcome-is-not-impact related reading must include the Strategic Pilot');
}
if (impactBlock.includes("next: 'strategic-pilot'")) {
  fail('outcome-is-not-impact next step is the Field Manual');
}

const impactPage = read('app/insights/outcome-is-not-impact/page.tsx');
for (const required of [
  '/insights/value-is-not-outcome',
  '/insights/profit-is-not-value',
  '/insights/proxy-is-not-outcome',
  '/insights/margin-is-not-profit',
  '/insights/cash-is-not-margin',
  '/insights/closure-is-not-cash',
  '/insights/accountability-is-not-closure',
  '/insights/authorization-is-not-accountability',
  '/insights/complete-is-not-verified',
  '/insights/cleared-is-not-complete',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/verified-is-not-assured',
  '/insights/recommend-is-not-authorize',
  '/insights/green-is-not-go',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/correlation-is-not-causation',
  '/insights/action-is-not-execution',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'measured outcome',
  'business impact',
  'cash, risk, or capacity',
  'green KPI',
  'completed workflow',
  'Profit is not value',
  'Value is not outcome',
  'Margin is not profit',
  'Cash is not margin',
  'Closure is not cash',
  'measured result',
  'named intent',
  'operating loop',
  'Surfacing is still a read',
  'after the plant move',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'honesty and verification boundary',
  'Evidence from the plant beats the outcome',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'outcome as impact',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'states no price',
  'CMMS write-back',
  'Billing write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Sync does not declare impact',
  'Sync does not compute a return',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says the outcome',
  'A named human decides',
  'A named human remains accountable',
  'leaves the impact unrecorded',
]) {
  if (!impactPage.includes(required)) {
    fail(`outcome-is-not-impact page must include ${required}`);
  }
}

for (const page of [
  'app/insights/value-is-not-outcome/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/outcome-is-not-impact')) {
    fail(`${page} must link outcome-is-not-impact`);
  }
}

if (
  !impactPage.includes('The series continues with') ||
  !impactPage.includes('/insights/impact-is-not-revenue')
) {
  fail('outcome-is-not-impact must point the series forward to impact-is-not-revenue');
}

for (const [slug, label] of [
  ['outcome-is-not-impact', 'outcome-is-not-impact'],
  ['value-is-not-outcome', 'value-is-not-outcome'],
  ['profit-is-not-value', 'profit-is-not-value'],
  ['cash-is-not-margin', 'cash-is-not-margin'],
  ['accountability-is-not-closure', 'accountability-is-not-closure'],
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['cleared-is-not-complete', 'cleared-is-not-complete'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'impact-is-not-revenue'")) {
    fail(`${label} related reading must cite impact-is-not-revenue`);
  }
}

const revenueBlock = stepBlock('impact-is-not-revenue');
for (const required of [
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'proxy-is-not-outcome',
  'margin-is-not-profit',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'verified-is-not-assured',
  'recommend-is-not-authorize',
  'green-is-not-go',
  'correlation-is-not-causation',
]) {
  if (!revenueBlock.includes(`'${required}'`)) {
    fail(`impact-is-not-revenue related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(revenueBlock)) {
  fail('impact-is-not-revenue related reading must include the Strategic Pilot');
}
if (revenueBlock.includes("next: 'strategic-pilot'")) {
  fail('impact-is-not-revenue next step is the Field Manual');
}

const revenuePage = read('app/insights/impact-is-not-revenue/page.tsx');
for (const required of [
  '/insights/outcome-is-not-impact',
  '/insights/value-is-not-outcome',
  '/insights/profit-is-not-value',
  '/insights/proxy-is-not-outcome',
  '/insights/margin-is-not-profit',
  '/insights/cash-is-not-margin',
  '/insights/closure-is-not-cash',
  '/insights/accountability-is-not-closure',
  '/insights/authorization-is-not-accountability',
  '/insights/complete-is-not-verified',
  '/insights/cleared-is-not-complete',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/verified-is-not-assured',
  '/insights/recommend-is-not-authorize',
  '/insights/green-is-not-go',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/correlation-is-not-causation',
  '/insights/action-is-not-execution',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'business impact',
  'recognized sales',
  'cash, risk, or capacity',
  'risk avoided',
  'capacity freed',
  'cost deferred',
  'Outcome is not impact',
  'Value is not outcome',
  'Profit is not value',
  'Margin is not profit',
  'Cash is not margin',
  'Closure is not cash',
  'Impact is not revenue',
  'Surfacing is still a read',
  'after the plant move',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'honesty and verification boundary',
  'Evidence from the plant beats',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'impact as revenue',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'states no price',
  'CMMS write-back',
  'Billing write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'Sync does not book revenue',
  'Sync does not recognize revenue',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Sync does not declare impact',
  'Sync does not compute a return',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says an impact claim is revenue',
  'A named human decides',
  'A named human remains accountable',
  'leaves the revenue unrecorded',
  'leaves the impact unrecorded',
]) {
  if (!revenuePage.includes(required)) {
    fail(`impact-is-not-revenue page must include ${required}`);
  }
}

for (const page of [
  'app/insights/outcome-is-not-impact/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/impact-is-not-revenue')) {
    fail(`${page} must link impact-is-not-revenue`);
  }
}

if (
  !revenuePage.includes('The series continues with') ||
  !revenuePage.includes('/insights/revenue-is-not-arr')
) {
  fail('impact-is-not-revenue must point the series forward to revenue-is-not-arr');
}

for (const [slug, label] of [
  ['impact-is-not-revenue', 'impact-is-not-revenue'],
  ['outcome-is-not-impact', 'outcome-is-not-impact'],
  ['value-is-not-outcome', 'value-is-not-outcome'],
  ['profit-is-not-value', 'profit-is-not-value'],
  ['cash-is-not-margin', 'cash-is-not-margin'],
  ['accountability-is-not-closure', 'accountability-is-not-closure'],
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['cleared-is-not-complete', 'cleared-is-not-complete'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'revenue-is-not-arr'")) {
    fail(`${label} related reading must cite revenue-is-not-arr`);
  }
}

const arrBlock = stepBlock('revenue-is-not-arr');
for (const required of [
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'proxy-is-not-outcome',
  'margin-is-not-profit',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'verified-is-not-assured',
  'recommend-is-not-authorize',
  'green-is-not-go',
  'correlation-is-not-causation',
]) {
  if (!arrBlock.includes(`'${required}'`)) {
    fail(`revenue-is-not-arr related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(arrBlock)) {
  fail('revenue-is-not-arr related reading must include the Strategic Pilot');
}
if (arrBlock.includes("next: 'strategic-pilot'")) {
  fail('revenue-is-not-arr next step is the Field Manual');
}

const arrPage = read('app/insights/revenue-is-not-arr/page.tsx');
for (const required of [
  '/insights/impact-is-not-revenue',
  '/insights/outcome-is-not-impact',
  '/insights/value-is-not-outcome',
  '/insights/profit-is-not-value',
  '/insights/proxy-is-not-outcome',
  '/insights/margin-is-not-profit',
  '/insights/cash-is-not-margin',
  '/insights/closure-is-not-cash',
  '/insights/accountability-is-not-closure',
  '/insights/authorization-is-not-accountability',
  '/insights/complete-is-not-verified',
  '/insights/cleared-is-not-complete',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/verified-is-not-assured',
  '/insights/recommend-is-not-authorize',
  '/insights/green-is-not-go',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/correlation-is-not-causation',
  '/insights/action-is-not-execution',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'recognized revenue',
  'recognized sales',
  'annualized',
  'recurring contracted subscription revenue',
  'one-time',
  'professional services',
  'hardware',
  'non-recurring',
  'period revenue',
  'Impact is not revenue',
  'Revenue is not ARR',
  'Outcome is not impact',
  'Value is not outcome',
  'Profit is not value',
  'Margin is not profit',
  'Cash is not margin',
  'Closure is not cash',
  'Surfacing is still a read',
  'after the plant move',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'honesty and verification boundary',
  'Evidence from the plant beats',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'revenue as ARR',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'states no price',
  'CMMS write-back',
  'Billing write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'Sync does not book revenue',
  'Sync does not recognize revenue',
  'Sync does not measure ARR',
  'Sync does not measure ARR for the customer',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says recognized revenue is ARR',
  'A named human decides',
  'A named human remains accountable',
  'leaves ARR unrecorded',
  'ARR can hold',
]) {
  if (!arrPage.includes(required)) {
    fail(`revenue-is-not-arr page must include ${required}`);
  }
}

for (const page of [
  'app/insights/impact-is-not-revenue/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/revenue-is-not-arr')) {
    fail(`${page} must link revenue-is-not-arr`);
  }
}

if (
  !arrPage.includes('The series continues with') ||
  !arrPage.includes('/insights/arr-is-not-cash')
) {
  fail('revenue-is-not-arr must point the series forward to arr-is-not-cash');
}

for (const [slug, label] of [
  ['revenue-is-not-arr', 'revenue-is-not-arr'],
  ['impact-is-not-revenue', 'impact-is-not-revenue'],
  ['outcome-is-not-impact', 'outcome-is-not-impact'],
  ['value-is-not-outcome', 'value-is-not-outcome'],
  ['profit-is-not-value', 'profit-is-not-value'],
  ['cash-is-not-margin', 'cash-is-not-margin'],
  ['accountability-is-not-closure', 'accountability-is-not-closure'],
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['cleared-is-not-complete', 'cleared-is-not-complete'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'arr-is-not-cash'")) {
    fail(`${label} related reading must cite arr-is-not-cash`);
  }
}

const collectedBlock = stepBlock('arr-is-not-cash');
for (const required of [
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'proxy-is-not-outcome',
  'margin-is-not-profit',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'verified-is-not-assured',
  'recommend-is-not-authorize',
  'green-is-not-go',
  'correlation-is-not-causation',
]) {
  if (!collectedBlock.includes(`'${required}'`)) {
    fail(`arr-is-not-cash related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(collectedBlock)) {
  fail('arr-is-not-cash related reading must include the Strategic Pilot');
}
if (collectedBlock.includes("next: 'strategic-pilot'")) {
  fail('arr-is-not-cash next step is the Field Manual');
}

const collectedPage = read('app/insights/arr-is-not-cash/page.tsx');
for (const required of [
  '/insights/revenue-is-not-arr',
  '/insights/impact-is-not-revenue',
  '/insights/outcome-is-not-impact',
  '/insights/value-is-not-outcome',
  '/insights/profit-is-not-value',
  '/insights/proxy-is-not-outcome',
  '/insights/margin-is-not-profit',
  '/insights/cash-is-not-margin',
  '/insights/closure-is-not-cash',
  '/insights/accountability-is-not-closure',
  '/insights/authorization-is-not-accountability',
  '/insights/complete-is-not-verified',
  '/insights/cleared-is-not-complete',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/verified-is-not-assured',
  '/insights/recommend-is-not-authorize',
  '/insights/green-is-not-go',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/correlation-is-not-causation',
  '/insights/action-is-not-execution',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'annualized value of recurring contracted subscription revenue that renews',
  'money received (collected)',
  'ARR is not cash',
  'Revenue is not ARR',
  'Impact is not revenue',
  'Outcome is not impact',
  'Value is not outcome',
  'Profit is not value',
  'Margin is not profit',
  'Cash is not margin',
  'Closure is not cash',
  'on the books',
  'while cash is uncollected',
  'without growing ARR',
  'non-recurring work',
  'one-time',
  'professional services',
  'hardware',
  'non-recurring fees',
  'recognized revenue',
  'recognized sales',
  'Surfacing is still a read',
  'after the plant move',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'honesty and verification boundary',
  'Evidence from the plant beats',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'ARR as cash',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'states no price',
  'CMMS write-back',
  'Billing write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'Sync does not book revenue',
  'Sync does not recognize revenue',
  'Sync does not measure ARR',
  'Sync does not measure ARR for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says ARR is cash',
  'A named human decides',
  'A named human remains accountable',
  'leaves the cash uncollected',
]) {
  if (!collectedPage.includes(required)) {
    fail(`arr-is-not-cash page must include ${required}`);
  }
}

for (const page of [
  'app/insights/revenue-is-not-arr/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/arr-is-not-cash')) {
    fail(`${page} must link arr-is-not-cash`);
  }
}

if (
  !collectedPage.includes('The series continues with') ||
  !collectedPage.includes('/insights/cash-is-not-runway')
) {
  fail('arr-is-not-cash must point the series forward to cash-is-not-runway');
}

for (const [slug, label] of [
  ['arr-is-not-cash', 'arr-is-not-cash'],
  ['revenue-is-not-arr', 'revenue-is-not-arr'],
  ['impact-is-not-revenue', 'impact-is-not-revenue'],
  ['outcome-is-not-impact', 'outcome-is-not-impact'],
  ['value-is-not-outcome', 'value-is-not-outcome'],
  ['profit-is-not-value', 'profit-is-not-value'],
  ['cash-is-not-margin', 'cash-is-not-margin'],
  ['accountability-is-not-closure', 'accountability-is-not-closure'],
  ['complete-is-not-verified', 'complete-is-not-verified'],
  ['cleared-is-not-complete', 'cleared-is-not-complete'],
  ['learning-requires-a-verified-outcome', 'learning-requires-a-verified-outcome'],
  ['verification-is-not-optional', 'verification-is-not-optional'],
]) {
  if (!stepBlock(slug).includes("'cash-is-not-runway'")) {
    fail(`${label} related reading must cite cash-is-not-runway`);
  }
}

const runwayBlock = stepBlock('cash-is-not-runway');
for (const required of [
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'proxy-is-not-outcome',
  'margin-is-not-profit',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'verification-is-not-optional',
  'learning-requires-a-verified-outcome',
  'verified-is-not-assured',
  'recommend-is-not-authorize',
  'green-is-not-go',
  'correlation-is-not-causation',
]) {
  if (!runwayBlock.includes(`'${required}'`)) {
    fail(`cash-is-not-runway related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(runwayBlock)) {
  fail('cash-is-not-runway related reading must include the Strategic Pilot');
}
if (runwayBlock.includes("next: 'strategic-pilot'")) {
  fail('cash-is-not-runway next step is the Field Manual');
}

const runwayPage = read('app/insights/cash-is-not-runway/page.tsx');
for (const required of [
  '/insights/arr-is-not-cash',
  '/insights/revenue-is-not-arr',
  '/insights/impact-is-not-revenue',
  '/insights/outcome-is-not-impact',
  '/insights/value-is-not-outcome',
  '/insights/profit-is-not-value',
  '/insights/proxy-is-not-outcome',
  '/insights/margin-is-not-profit',
  '/insights/cash-is-not-margin',
  '/insights/closure-is-not-cash',
  '/insights/accountability-is-not-closure',
  '/insights/authorization-is-not-accountability',
  '/insights/complete-is-not-verified',
  '/insights/cleared-is-not-complete',
  '/insights/verification-is-not-optional',
  '/insights/learning-requires-a-verified-outcome',
  '/insights/verified-is-not-assured',
  '/insights/recommend-is-not-authorize',
  '/insights/green-is-not-go',
  '/insights/honesty-boundary-is-not-optional',
  '/insights/human-decision-is-not-optional',
  '/insights/correlation-is-not-causation',
  '/insights/action-is-not-execution',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'money received (collected) that can be spent now',
  'Cash is not runway',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'explicit assumptions',
  'cash balance can look healthy while runway is short',
  'burn is high',
  'collections are lumpy',
  'Runway can look long while cash is trapped',
  'receivables',
  'restricted accounts',
  'ARR is not cash',
  'Revenue is not ARR',
  'Impact is not revenue',
  'Outcome is not impact',
  'Value is not outcome',
  'Profit is not value',
  'Margin is not profit',
  'Cash is not margin',
  'Closure is not cash',
  'annualized value of recurring contracted subscription revenue that renews',
  'contribution margin',
  'Surfacing is still a read',
  'after the plant move',
  'named observation',
  'named criteria',
  'achieved',
  'not_achieved',
  'inconclusive',
  'measured notes',
  'honesty and verification boundary',
  'Evidence from the plant beats',
  'Sync refuses false precision',
  'Sync refuses when evidence is insufficient',
  'auto-close',
  'auto-authorize',
  'Learning credit',
  'cash as runway',
  'Direct plant execute stays off',
  'states no OEM limit',
  'states no savings figure',
  'states no price',
  'CMMS write-back',
  'Billing write-back',
  'Self-guided onboarding is not claimed as a live product path',
  'Sync executes plant work',
  'Sync does not book revenue',
  'Sync does not recognize revenue',
  'Sync does not measure ARR',
  'Sync does not measure ARR for the customer',
  'Sync does not measure cash',
  'Sync does not measure cash for the customer',
  'Sync does not measure runway',
  'Sync does not measure runway for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says cash is runway',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
]) {
  if (!runwayPage.includes(required)) {
    fail(`cash-is-not-runway page must include ${required}`);
  }
}

for (const page of [
  'app/insights/arr-is-not-cash/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/cash-is-not-runway')) {
    fail(`${page} must link cash-is-not-runway`);
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
