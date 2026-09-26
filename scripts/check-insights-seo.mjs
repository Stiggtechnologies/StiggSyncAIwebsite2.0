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
const recoveryAssuredIndex = slugs.indexOf('recoverable-is-not-assured');
const recoverableIndex = slugs.indexOf('rehearsed-is-not-recoverable');
const rehearsedIndex = slugs.indexOf('transferable-is-not-rehearsed');
const transferableIndex = slugs.indexOf('governed-is-not-transferable');
const governedIndex = slugs.indexOf('owned-is-not-governed');
const ownedIndex = slugs.indexOf('compounded-is-not-owned');
const compoundedIndex = slugs.indexOf('scaled-is-not-compounded');
const scaledIndex = slugs.indexOf('sustained-is-not-scaled');
const sustainedIndex = slugs.indexOf('adopted-is-not-sustained');
const adoptedIndex = slugs.indexOf('trusted-is-not-adopted');
const trustedIndex = slugs.indexOf('proven-is-not-trusted');
const provenIndex = slugs.indexOf('resolved-is-not-proven');
const resolvedIndex = slugs.indexOf('closed-is-not-resolved');
const closedIndex = slugs.indexOf('executed-is-not-closed');
const executedIndex = slugs.indexOf('authorized-is-not-executed');
const authorizedIndex = slugs.indexOf('verified-is-not-authorized');
const signoffIndex = slugs.indexOf('accepted-is-not-verified');
const acceptedIndex = slugs.indexOf('complete-is-not-accepted');
const acceptanceIndex = slugs.indexOf('closure-is-not-complete');
const finishedIndex = slugs.indexOf('control-is-not-closure');
const controlIndex = slugs.indexOf('ownership-is-not-control');
const claimIndex = slugs.indexOf('accountability-is-not-ownership');
const ownerIndex = slugs.indexOf('authority-is-not-accountability');
const authorityIndex = slugs.indexOf('judgment-is-not-authority');
const judgmentIndex = slugs.indexOf('learning-is-not-judgment');
const learningIndex = slugs.indexOf('results-is-not-learning');
const resultsIndex = slugs.indexOf('execution-is-not-results');
const executionIndex = slugs.indexOf('strategy-is-not-execution');
const strategyIndex = slugs.indexOf('optionality-is-not-strategy');
const optionalityIndex = slugs.indexOf('flexibility-is-not-optionality');
const flexibilityIndex = slugs.indexOf('liquidity-is-not-flexibility');
const liquidityIndex = slugs.indexOf('solvency-is-not-liquidity');
const solvencyIndex = slugs.indexOf('survival-is-not-solvency');
const survivalIndex = slugs.indexOf('runway-is-not-survival');
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
    recoveryAssuredIndex >= 0 &&
    recoverableIndex > recoveryAssuredIndex &&
    rehearsedIndex > recoverableIndex &&
    transferableIndex > rehearsedIndex &&
    governedIndex > transferableIndex &&
    ownedIndex > governedIndex &&
    compoundedIndex > ownedIndex &&
    scaledIndex > compoundedIndex &&
    sustainedIndex > scaledIndex &&
    adoptedIndex > sustainedIndex &&
    trustedIndex > adoptedIndex &&
    provenIndex > trustedIndex &&
    resolvedIndex > provenIndex &&
    closedIndex > resolvedIndex &&
    executedIndex > closedIndex &&
    authorizedIndex > executedIndex &&
    signoffIndex > authorizedIndex &&
    acceptedIndex > signoffIndex &&
    acceptanceIndex > acceptedIndex &&
    finishedIndex > acceptanceIndex &&
    controlIndex > finishedIndex &&
    claimIndex > controlIndex &&
    ownerIndex > claimIndex &&
    authorityIndex > ownerIndex &&
    judgmentIndex > authorityIndex &&
    learningIndex > judgmentIndex &&
    resultsIndex > learningIndex &&
    executionIndex > resultsIndex &&
    strategyIndex > executionIndex &&
    optionalityIndex > strategyIndex &&
    flexibilityIndex > optionalityIndex &&
    liquidityIndex > flexibilityIndex &&
    solvencyIndex > liquidityIndex &&
    survivalIndex > solvencyIndex &&
    runwayIndex > survivalIndex &&
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
    'Insights catalog order must list recoverable-is-not-assured, then rehearsed-is-not-recoverable, then transferable-is-not-rehearsed, then governed-is-not-transferable, then owned-is-not-governed, then compounded-is-not-owned, then scaled-is-not-compounded, then sustained-is-not-scaled, then adopted-is-not-sustained, then trusted-is-not-adopted, then proven-is-not-trusted, then resolved-is-not-proven, then closed-is-not-resolved, then executed-is-not-closed, then authorized-is-not-executed, then verified-is-not-authorized, then accepted-is-not-verified, then complete-is-not-accepted, then closure-is-not-complete, then control-is-not-closure, then ownership-is-not-control, then accountability-is-not-ownership, then authority-is-not-accountability, then judgment-is-not-authority, then learning-is-not-judgment, then results-is-not-learning, then execution-is-not-results, then strategy-is-not-execution, then optionality-is-not-strategy, then flexibility-is-not-optionality, then liquidity-is-not-flexibility, then solvency-is-not-liquidity, then survival-is-not-solvency, then runway-is-not-survival, then cash-is-not-runway, then arr-is-not-cash, then revenue-is-not-arr, then impact-is-not-revenue, then outcome-is-not-impact, then value-is-not-outcome, then profit-is-not-value, then margin-is-not-profit, then cash-is-not-margin, then closure-is-not-cash, then accountability-is-not-closure, then authorization-is-not-accountability, then proof-is-not-authorization, then assured-is-not-proven, then verified-is-not-assured, then complete-is-not-verified, then cleared-is-not-complete, then ready-is-not-cleared, then status-is-not-clearance, then green-is-not-go',
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

if (
  !runwayPage.includes('The series continues with') ||
  !runwayPage.includes('/insights/runway-is-not-survival')
) {
  fail('cash-is-not-runway must point the series forward to runway-is-not-survival');
}

for (const [slug, label] of [
  ['cash-is-not-runway', 'cash-is-not-runway'],
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
  if (!stepBlock(slug).includes("'runway-is-not-survival'")) {
    fail(`${label} related reading must cite runway-is-not-survival`);
  }
}

const survivalBlock = stepBlock('runway-is-not-survival');
for (const required of [
  'cash-is-not-runway',
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
  if (!survivalBlock.includes(`'${required}'`)) {
    fail(`runway-is-not-survival related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(survivalBlock)) {
  fail('runway-is-not-survival related reading must include the Strategic Pilot');
}
if (survivalBlock.includes("next: 'strategic-pilot'")) {
  fail('runway-is-not-survival next step is the Field Manual');
}

const survivalPage = read('app/insights/runway-is-not-survival/page.tsx');
for (const required of [
  '/insights/cash-is-not-runway',
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
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'explicit assumptions',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'not just whether a runway number is positive',
  'A long runway can still miss survival',
  'burn assumptions are wrong',
  'receivables never convert',
  'single customer concentration collapses',
  'critical capacity (people, permits, plant) fails before cash does',
  'A short runway can still survive a decision horizon',
  'cash inflows are contracted',
  'burn is cuttable on a named date',
  'financing path is already closed',
  'none of which the runway formula itself proves',
  'Cash is not runway',
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
  'runway as survival',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says runway is survival',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
]) {
  if (!survivalPage.includes(required)) {
    fail(`runway-is-not-survival page must include ${required}`);
  }
}

for (const page of [
  'app/insights/cash-is-not-runway/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/runway-is-not-survival')) {
    fail(`${page} must link runway-is-not-survival`);
  }
}

if (
  !survivalPage.includes('The series continues with') ||
  !survivalPage.includes('/insights/survival-is-not-solvency')
) {
  fail('runway-is-not-survival must point the series forward to survival-is-not-solvency');
}

for (const [slug, label] of [
  ['runway-is-not-survival', 'runway-is-not-survival'],
  ['cash-is-not-runway', 'cash-is-not-runway'],
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
  if (!stepBlock(slug).includes("'survival-is-not-solvency'")) {
    fail(`${label} related reading must cite survival-is-not-solvency`);
  }
}

const solvencyBlock = stepBlock('survival-is-not-solvency');
for (const required of [
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!solvencyBlock.includes(`'${required}'`)) {
    fail(`survival-is-not-solvency related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(solvencyBlock)) {
  fail('survival-is-not-solvency related reading must include the Strategic Pilot');
}
if (solvencyBlock.includes("next: 'strategic-pilot'")) {
  fail('survival-is-not-solvency next step is the Field Manual');
}

const solvencyPage = read('app/insights/survival-is-not-solvency/page.tsx');
for (const required of [
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Solvency is whether assets and claims structure can cover liabilities',
  'pay debts as they come due',
  'structural horizon',
  'balance-sheet and claim quality',
  'not just near-term obligation continuity',
  'A firm can survive a horizon and still be insolvent',
  'headed there',
  'A solvent firm can still fail survival',
  'liquidity timing',
  'concentration shock',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'survival as solvency',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says survival is solvency',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse solvency into runway',
]) {
  if (!solvencyPage.includes(required)) {
    fail(`survival-is-not-solvency page must include ${required}`);
  }
}

for (const page of [
  'app/insights/runway-is-not-survival/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/survival-is-not-solvency')) {
    fail(`${page} must link survival-is-not-solvency`);
  }
}

if (
  !solvencyPage.includes('The series continues with') ||
  !solvencyPage.includes('/insights/solvency-is-not-liquidity')
) {
  fail('survival-is-not-solvency must point the series forward to solvency-is-not-liquidity');
}

for (const [slug, label] of [
  ['survival-is-not-solvency', 'survival-is-not-solvency'],
  ['runway-is-not-survival', 'runway-is-not-survival'],
  ['cash-is-not-runway', 'cash-is-not-runway'],
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
  if (!stepBlock(slug).includes("'solvency-is-not-liquidity'")) {
    fail(`${label} related reading must cite solvency-is-not-liquidity`);
  }
}

const liquidityBlock = stepBlock('solvency-is-not-liquidity');
for (const required of [
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!liquidityBlock.includes(`'${required}'`)) {
    fail(`solvency-is-not-liquidity related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(liquidityBlock)) {
  fail('solvency-is-not-liquidity related reading must include the Strategic Pilot');
}
if (liquidityBlock.includes("next: 'strategic-pilot'")) {
  fail('solvency-is-not-liquidity next step is the Field Manual');
}

const liquidityPage = read('app/insights/solvency-is-not-liquidity/page.tsx');
for (const required of [
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'pay debts as they come due',
  'structural horizon',
  'balance-sheet and claim quality',
  'not near-term cash timing alone',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'A solvent firm can still fail a liquidity window',
  'receivables lag',
  'a concentration payment slips',
  'credit lines are drawn',
  'timing gaps hit before claims structure heals',
  'An illiquid firm can still be solvent',
  'assets cover claims',
  'a named liquidity bridge is already closed',
  'none of which a solvency ratio alone proves',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'solvency as liquidity',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says solvency is liquidity',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse liquidity into survival',
]) {
  if (!liquidityPage.includes(required)) {
    fail(`solvency-is-not-liquidity page must include ${required}`);
  }
}

for (const page of [
  'app/insights/survival-is-not-solvency/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/solvency-is-not-liquidity')) {
    fail(`${page} must link solvency-is-not-liquidity`);
  }
}

if (
  !liquidityPage.includes('The series continues with') ||
  !liquidityPage.includes('/insights/liquidity-is-not-flexibility')
) {
  fail('solvency-is-not-liquidity must point the series forward to liquidity-is-not-flexibility');
}

for (const [slug, label] of [
  ['solvency-is-not-liquidity', 'solvency-is-not-liquidity'],
  ['survival-is-not-solvency', 'survival-is-not-solvency'],
  ['runway-is-not-survival', 'runway-is-not-survival'],
  ['cash-is-not-runway', 'cash-is-not-runway'],
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
  if (!stepBlock(slug).includes("'liquidity-is-not-flexibility'")) {
    fail(`${label} related reading must cite liquidity-is-not-flexibility`);
  }
}

const flexibilityBlock = stepBlock('liquidity-is-not-flexibility');
for (const required of [
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!flexibilityBlock.includes(`'${required}'`)) {
    fail(`liquidity-is-not-flexibility related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(flexibilityBlock)) {
  fail('liquidity-is-not-flexibility related reading must include the Strategic Pilot');
}
if (flexibilityBlock.includes("next: 'strategic-pilot'")) {
  fail('liquidity-is-not-flexibility next step is the Field Manual');
}

const flexibilityPage = read('app/insights/liquidity-is-not-flexibility/page.tsx');
for (const required of [
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'A liquid firm can still lack flexibility',
  'An inflexible firm can still be liquid',
  'can still fail a liquidity window',
  'A liquidity note alone proves neither',
  'paying what is already due',
  'named decision window',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'liquidity as flexibility',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says liquidity is flexibility',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse flexibility into liquidity',
]) {
  if (!flexibilityPage.includes(required)) {
    fail(`liquidity-is-not-flexibility page must include ${required}`);
  }
}

for (const page of [
  'app/insights/solvency-is-not-liquidity/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/liquidity-is-not-flexibility')) {
    fail(`${page} must link liquidity-is-not-flexibility`);
  }
}

for (const [slug, label] of [
  ['liquidity-is-not-flexibility', 'liquidity-is-not-flexibility'],
  ['solvency-is-not-liquidity', 'solvency-is-not-liquidity'],
  ['survival-is-not-solvency', 'survival-is-not-solvency'],
  ['runway-is-not-survival', 'runway-is-not-survival'],
  ['cash-is-not-runway', 'cash-is-not-runway'],
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
  if (!stepBlock(slug).includes("'flexibility-is-not-optionality'")) {
    fail(`${label} related reading must cite flexibility-is-not-optionality`);
  }
}

const optionalityBlock = stepBlock('flexibility-is-not-optionality');
for (const required of [
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!optionalityBlock.includes(`'${required}'`)) {
    fail(`flexibility-is-not-optionality related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(optionalityBlock)) {
  fail('flexibility-is-not-optionality related reading must include the Strategic Pilot');
}
if (optionalityBlock.includes("next: 'strategic-pilot'")) {
  fail('flexibility-is-not-optionality next step is the Field Manual');
}

const optionalityPage = read('app/insights/flexibility-is-not-optionality/page.tsx');
for (const required of [
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside the named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'A flexible firm can still lack optionality',
  'A firm with optionality on paper can still lack flexibility',
  'An optionality note alone proves neither',
  'A choice that exists on paper is not a green',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface a flexibility note or an optionality note',
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
  'flexibility as optionality',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says flexibility is optionality',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse optionality into flexibility',
]) {
  if (!optionalityPage.includes(required)) {
    fail(`flexibility-is-not-optionality page must include ${required}`);
  }
}

if (
  !flexibilityPage.includes('The series continues with') ||
  !flexibilityPage.includes('/insights/flexibility-is-not-optionality')
) {
  fail('liquidity-is-not-flexibility must point the series forward to flexibility-is-not-optionality');
}

for (const page of [
  'app/insights/liquidity-is-not-flexibility/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/flexibility-is-not-optionality')) {
    fail(`${page} must link flexibility-is-not-optionality`);
  }
}

for (const [slug, label] of [
  ['flexibility-is-not-optionality', 'flexibility-is-not-optionality'],
  ['liquidity-is-not-flexibility', 'liquidity-is-not-flexibility'],
  ['solvency-is-not-liquidity', 'solvency-is-not-liquidity'],
  ['survival-is-not-solvency', 'survival-is-not-solvency'],
  ['runway-is-not-survival', 'runway-is-not-survival'],
  ['cash-is-not-runway', 'cash-is-not-runway'],
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
  if (!stepBlock(slug).includes("'optionality-is-not-strategy'")) {
    fail(`${label} related reading must cite optionality-is-not-strategy`);
  }
}

const strategyBlock = stepBlock('optionality-is-not-strategy');
for (const required of [
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!strategyBlock.includes(`'${required}'`)) {
    fail(`optionality-is-not-strategy related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(strategyBlock)) {
  fail('optionality-is-not-strategy related reading must include the Strategic Pilot');
}
if (strategyBlock.includes("next: 'strategic-pilot'")) {
  fail('optionality-is-not-strategy next step is the Field Manual');
}

const strategyPage = read('app/insights/optionality-is-not-strategy/page.tsx');
for (const required of [
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path, not a menu of unused rights',
  'A firm with optionality can still lack strategy',
  'A firm with a strategy can still lack optionality',
  'A strategy note alone proves neither',
  'A choice that exists on paper is not a green',
  'A committed path is not a green',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface an optionality note or a strategy note',
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
  'optionality as strategy',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says optionality is strategy',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse strategy into optionality',
]) {
  if (!strategyPage.includes(required)) {
    fail(`optionality-is-not-strategy page must include ${required}`);
  }
}

if (
  !optionalityPage.includes('The series continues with') ||
  !optionalityPage.includes('/insights/optionality-is-not-strategy')
) {
  fail('flexibility-is-not-optionality must point the series forward to optionality-is-not-strategy');
}

for (const page of [
  'app/insights/flexibility-is-not-optionality/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/optionality-is-not-strategy')) {
    fail(`${page} must link optionality-is-not-strategy`);
  }
}

for (const [slug, label] of [
  ['optionality-is-not-strategy', 'optionality-is-not-strategy'],
  ['flexibility-is-not-optionality', 'flexibility-is-not-optionality'],
  ['liquidity-is-not-flexibility', 'liquidity-is-not-flexibility'],
  ['solvency-is-not-liquidity', 'solvency-is-not-liquidity'],
  ['survival-is-not-solvency', 'survival-is-not-solvency'],
  ['runway-is-not-survival', 'runway-is-not-survival'],
  ['cash-is-not-runway', 'cash-is-not-runway'],
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
  if (!stepBlock(slug).includes("'strategy-is-not-execution'")) {
    fail(`${label} related reading must cite strategy-is-not-execution`);
  }
}

const executionBlock = stepBlock('strategy-is-not-execution');
for (const required of [
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!executionBlock.includes(`'${required}'`)) {
    fail(`strategy-is-not-execution related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(executionBlock)) {
  fail('strategy-is-not-execution related reading must include the Strategic Pilot');
}
if (executionBlock.includes("next: 'strategic-pilot'")) {
  fail('strategy-is-not-execution next step is the Field Manual');
}

const executionPage = read('app/insights/strategy-is-not-execution/page.tsx');
for (const required of [
  '/insights/optionality-is-not-strategy',
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  'Strategy is not execution',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path and resource allocation, not proof the work was completed inside that window',
  'Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result)',
  'realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone',
  'A firm with a strategy can still lack execution',
  'A firm with execution can still lack strategy',
  'A strategy note alone proves neither',
  'An execution note alone proves neither',
  'A committed path is not a green',
  'An execution note is not a green',
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'a committed path, not a menu of unused rights',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface a strategy note or an execution note',
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
  'strategy as execution',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not measure execution',
  'Sync does not measure execution for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says strategy is execution',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse execution into strategy',
  'does not rewrite Action Is Not Execution',
  'ACTION remains a locked disposition',
]) {
  if (!executionPage.includes(required)) {
    fail(`strategy-is-not-execution page must include ${required}`);
  }
}

if (
  !strategyPage.includes('The series continues with') ||
  !strategyPage.includes('/insights/strategy-is-not-execution')
) {
  fail('optionality-is-not-strategy must point the series forward to strategy-is-not-execution');
}

for (const page of [
  'app/insights/optionality-is-not-strategy/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/strategy-is-not-execution')) {
    fail(`${page} must link strategy-is-not-execution`);
  }
}

for (const [slug, label] of [
  ['strategy-is-not-execution', 'strategy-is-not-execution'],
  ['optionality-is-not-strategy', 'optionality-is-not-strategy'],
  ['flexibility-is-not-optionality', 'flexibility-is-not-optionality'],
  ['liquidity-is-not-flexibility', 'liquidity-is-not-flexibility'],
  ['solvency-is-not-liquidity', 'solvency-is-not-liquidity'],
  ['survival-is-not-solvency', 'survival-is-not-solvency'],
  ['runway-is-not-survival', 'runway-is-not-survival'],
  ['cash-is-not-runway', 'cash-is-not-runway'],
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
  if (!stepBlock(slug).includes("'execution-is-not-results'")) {
    fail(`${label} related reading must cite execution-is-not-results`);
  }
}

const resultsBlock = stepBlock('execution-is-not-results');
for (const required of [
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!resultsBlock.includes(`'${required}'`)) {
    fail(`execution-is-not-results related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(resultsBlock)) {
  fail('execution-is-not-results related reading must include the Strategic Pilot');
}
if (resultsBlock.includes("next: 'strategic-pilot'")) {
  fail('execution-is-not-results next step is the Field Manual');
}

const resultsPage = read('app/insights/execution-is-not-results/page.tsx');
for (const required of [
  '/insights/strategy-is-not-execution',
  '/insights/optionality-is-not-strategy',
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  'Execution is not results',
  'Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result)',
  'realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone',
  'Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from that completed work under a named measurement window',
  'consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone',
  'A firm with execution can still lack results',
  'A firm with results can still lack execution',
  'An execution note alone proves neither',
  'A results note alone proves neither',
  'An execution note is not a green',
  'A results note is not a green',
  'Strategy is not execution',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path and resource allocation, not proof the work was completed inside that window',
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'a committed path, not a menu of unused rights',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'named measurement window',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface an execution note or a results/evidence note',
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
  'execution as results',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not measure execution',
  'Sync does not measure execution for the customer',
  'Sync does not measure results',
  'Sync does not measure results for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says execution is results',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse results into execution',
  'does not rewrite Action Is Not Execution',
  'does not rewrite Outcome Is Not Impact',
  'does not rewrite Value Is Not Outcome',
  'does not rewrite Proxy Is Not Outcome',
  'ACTION remains a locked disposition',
]) {
  if (!resultsPage.includes(required)) {
    fail(`execution-is-not-results page must include ${required}`);
  }
}

if (
  !executionPage.includes('The series continues with') ||
  !executionPage.includes('/insights/execution-is-not-results')
) {
  fail('strategy-is-not-execution must point the series forward to execution-is-not-results');
}

for (const page of [
  'app/insights/strategy-is-not-execution/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/execution-is-not-results')) {
    fail(`${page} must link execution-is-not-results`);
  }
}

for (const [slug, label] of [
  ['execution-is-not-results', 'execution-is-not-results'],
  ['strategy-is-not-execution', 'strategy-is-not-execution'],
  ['optionality-is-not-strategy', 'optionality-is-not-strategy'],
  ['flexibility-is-not-optionality', 'flexibility-is-not-optionality'],
  ['liquidity-is-not-flexibility', 'liquidity-is-not-flexibility'],
  ['solvency-is-not-liquidity', 'solvency-is-not-liquidity'],
  ['survival-is-not-solvency', 'survival-is-not-solvency'],
  ['runway-is-not-survival', 'runway-is-not-survival'],
  ['cash-is-not-runway', 'cash-is-not-runway'],
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
  if (!stepBlock(slug).includes("'results-is-not-learning'")) {
    fail(`${label} related reading must cite results-is-not-learning`);
  }
}

const learningBlock = stepBlock('results-is-not-learning');
for (const required of [
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!learningBlock.includes(`'${required}'`)) {
    fail(`results-is-not-learning related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(learningBlock)) {
  fail('results-is-not-learning related reading must include the Strategic Pilot');
}
if (learningBlock.includes("next: 'strategic-pilot'")) {
  fail('results-is-not-learning next step is the Field Manual');
}

const learningPage = read('app/insights/results-is-not-learning/page.tsx');
for (const required of [
  '/insights/execution-is-not-results',
  '/insights/strategy-is-not-execution',
  '/insights/optionality-is-not-strategy',
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  'Results is not learning',
  'Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from completed work under a named measurement window',
  'consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone',
  'Learning is an updated decision rule, model, or operating practice the firm adopts because a verified result changed what it will do next under a named decision window',
  'tempered belief that changes future allocation, not a dashboard tile, a learning_events row, a retrospective note, or a results number sitting unread',
  'A firm with results can still lack learning',
  'A firm with learning can still lack results',
  'A results note alone proves neither',
  'A learning note alone proves neither',
  'A results note is not a green',
  'A learning note is not a green',
  'Execution is not results',
  'Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result)',
  'realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone',
  'Strategy is not execution',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path and resource allocation, not proof the work was completed inside that window',
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'a committed path, not a menu of unused rights',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'named measurement window',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface a results/evidence note or a learning note',
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
  'results as learning',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not measure execution',
  'Sync does not measure execution for the customer',
  'Sync does not measure results',
  'Sync does not measure results for the customer',
  'Sync does not measure learning',
  'Sync does not measure learning for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says results is learning',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse learning into results',
  'does not rewrite Action Is Not Execution',
  'does not rewrite Outcome Is Not Impact',
  'does not rewrite Value Is Not Outcome',
  'does not rewrite Proxy Is Not Outcome',
  'does not rewrite Learning Requires a Verified Outcome',
  'does not rewrite Verification Is Not Optional',
  'does not rewrite Verified Is Not Assured',
  'ACTION remains a locked disposition',
  'learning_events',
]) {
  if (!learningPage.includes(required)) {
    fail(`results-is-not-learning page must include ${required}`);
  }
}

if (
  !resultsPage.includes('The series continues with') ||
  !resultsPage.includes('/insights/results-is-not-learning')
) {
  fail('execution-is-not-results must point the series forward to results-is-not-learning');
}

for (const page of [
  'app/insights/execution-is-not-results/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/results-is-not-learning')) {
    fail(`${page} must link results-is-not-learning`);
  }
}

for (const [slug, label] of [
  ['results-is-not-learning', 'results-is-not-learning'],
  ['execution-is-not-results', 'execution-is-not-results'],
  ['strategy-is-not-execution', 'strategy-is-not-execution'],
  ['optionality-is-not-strategy', 'optionality-is-not-strategy'],
  ['flexibility-is-not-optionality', 'flexibility-is-not-optionality'],
  ['liquidity-is-not-flexibility', 'liquidity-is-not-flexibility'],
  ['solvency-is-not-liquidity', 'solvency-is-not-liquidity'],
  ['survival-is-not-solvency', 'survival-is-not-solvency'],
  ['runway-is-not-survival', 'runway-is-not-survival'],
  ['cash-is-not-runway', 'cash-is-not-runway'],
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
  if (!stepBlock(slug).includes("'learning-is-not-judgment'")) {
    fail(`${label} related reading must cite learning-is-not-judgment`);
  }
}

const judgmentBlock = stepBlock('learning-is-not-judgment');
for (const required of [
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!judgmentBlock.includes(`'${required}'`)) {
    fail(`learning-is-not-judgment related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(judgmentBlock)) {
  fail('learning-is-not-judgment related reading must include the Strategic Pilot');
}
if (judgmentBlock.includes("next: 'strategic-pilot'")) {
  fail('learning-is-not-judgment next step is the Field Manual');
}

const judgmentPage = read('app/insights/learning-is-not-judgment/page.tsx');
for (const required of [
  '/insights/results-is-not-learning',
  '/insights/execution-is-not-results',
  '/insights/strategy-is-not-execution',
  '/insights/optionality-is-not-strategy',
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  '/insights/alert-is-not-decision',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'Learning is not judgment',
  'Learning is an updated decision rule, model, or operating practice the firm adopts because a verified result changed what it will do next under a named decision window',
  'tempered belief that changes future allocation, not a dashboard tile, a learning_events row, a retrospective note, or a results number sitting unread',
  'Judgment is the situated call under incomplete information that commits plant work, capital, or risk now under a named decision owner and window',
  'accountable choice with consequence, not an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a learning note alone',
  'A firm with learning can still lack judgment',
  'A firm with judgment can still lack learning',
  'A learning note alone proves neither',
  'A judgment note alone proves neither',
  'A learning note is not a green',
  'A judgment note is not a green',
  'Results is not learning',
  'Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from completed work under a named measurement window',
  'consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone',
  'Execution is not results',
  'Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result)',
  'realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone',
  'Strategy is not execution',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path and resource allocation, not proof the work was completed inside that window',
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'a committed path, not a menu of unused rights',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'named measurement window',
  'named decision owner',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface a learning note or a judgment/decision support note',
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
  'learning as judgment',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not measure execution',
  'Sync does not measure execution for the customer',
  'Sync does not measure results',
  'Sync does not measure results for the customer',
  'Sync does not measure learning',
  'Sync does not measure learning for the customer',
  'Sync does not measure judgment',
  'Sync does not measure judgment for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says learning is judgment',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse judgment into learning',
  'does not rewrite Action Is Not Execution',
  'does not rewrite Outcome Is Not Impact',
  'does not rewrite Value Is Not Outcome',
  'does not rewrite Proxy Is Not Outcome',
  'does not rewrite Learning Requires a Verified Outcome',
  'does not rewrite Verification Is Not Optional',
  'does not rewrite Verified Is Not Assured',
  'does not rewrite Results Is Not Learning',
  'does not rewrite Alert Is Not Decision',
  'does not rewrite Authorization Is Not Accountability',
  'does not rewrite Recommend Is Not Authorize',
  'ACTION remains a locked disposition',
  'learning_events',
  'adopted rule sitting unused',
  'recommendation tile',
  'scored suggestion',
]) {
  if (!judgmentPage.includes(required)) {
    fail(`learning-is-not-judgment page must include ${required}`);
  }
}

if (
  !learningPage.includes('The series continues with') ||
  !learningPage.includes('/insights/learning-is-not-judgment')
) {
  fail('results-is-not-learning must point the series forward to learning-is-not-judgment');
}

for (const page of [
  'app/insights/results-is-not-learning/page.tsx',
  'app/insights/accountability-is-not-closure/page.tsx',
  'app/insights/authorization-is-not-accountability/page.tsx',
  'app/insights/complete-is-not-verified/page.tsx',
  'app/insights/cleared-is-not-complete/page.tsx',
  'app/insights/learning-requires-a-verified-outcome/page.tsx',
  'app/insights/verification-is-not-optional/page.tsx',
  'app/insights/verified-is-not-assured/page.tsx',
]) {
  if (!read(page).includes('/insights/learning-is-not-judgment')) {
    fail(`${page} must link learning-is-not-judgment`);
  }
}

for (const [slug, label] of [
  ['learning-is-not-judgment', 'learning-is-not-judgment'],
  ['results-is-not-learning', 'results-is-not-learning'],
  ['execution-is-not-results', 'execution-is-not-results'],
  ['strategy-is-not-execution', 'strategy-is-not-execution'],
  ['optionality-is-not-strategy', 'optionality-is-not-strategy'],
  ['flexibility-is-not-optionality', 'flexibility-is-not-optionality'],
  ['liquidity-is-not-flexibility', 'liquidity-is-not-flexibility'],
  ['solvency-is-not-liquidity', 'solvency-is-not-liquidity'],
  ['survival-is-not-solvency', 'survival-is-not-solvency'],
  ['runway-is-not-survival', 'runway-is-not-survival'],
  ['cash-is-not-runway', 'cash-is-not-runway'],
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
  if (!stepBlock(slug).includes("'judgment-is-not-authority'")) {
    fail(`${label} related reading must cite judgment-is-not-authority`);
  }
}

const authorityBlock = stepBlock('judgment-is-not-authority');
for (const required of [
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!authorityBlock.includes(`'${required}'`)) {
    fail(`judgment-is-not-authority related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(authorityBlock)) {
  fail('judgment-is-not-authority related reading must include the Strategic Pilot');
}
if (authorityBlock.includes("next: 'strategic-pilot'")) {
  fail('judgment-is-not-authority next step is the Field Manual');
}

const authorityPage = read('app/insights/judgment-is-not-authority/page.tsx');
for (const required of [
  '/insights/learning-is-not-judgment',
  '/insights/results-is-not-learning',
  '/insights/execution-is-not-results',
  '/insights/strategy-is-not-execution',
  '/insights/optionality-is-not-strategy',
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  '/insights/alert-is-not-decision',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'Judgment is not authority',
  'Judgment is the situated call under incomplete information that commits plant work, capital, or risk now under a named decision owner and window',
  'accountable choice with consequence, not an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a learning note alone',
  'Authority is the formal, named right to bind the firm to plant work, capital, or risk within a defined scope and window',
  'decision rights on the org chart or charter, not the quality of the call, not a title without scope, not a recommendation, and not judgment sitting with someone who cannot bind',
  'A firm with judgment can still lack authority',
  'A firm with authority can still lack judgment',
  'A judgment note alone proves neither',
  'An authority note alone proves neither',
  'A judgment note is not a green',
  'An authority note is not a green',
  'Learning is not judgment',
  'Learning is an updated decision rule, model, or operating practice the firm adopts because a verified result changed what it will do next under a named decision window',
  'tempered belief that changes future allocation, not a dashboard tile, a learning_events row, a retrospective note, or a results number sitting unread',
  'Results is not learning',
  'Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from completed work under a named measurement window',
  'consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone',
  'Execution is not results',
  'Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result)',
  'realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone',
  'Strategy is not execution',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path and resource allocation, not proof the work was completed inside that window',
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'a committed path, not a menu of unused rights',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'named measurement window',
  'named decision owner',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface a judgment/decision support note or an authority/decision-rights note',
  'Evidence/Verification/closed outcome',
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
  'judgment as authority',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not measure execution',
  'Sync does not measure execution for the customer',
  'Sync does not measure results',
  'Sync does not measure results for the customer',
  'Sync does not measure learning',
  'Sync does not measure learning for the customer',
  'Sync does not measure judgment',
  'Sync does not measure judgment for the customer',
  'Sync does not measure authority',
  'Sync does not measure authority for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says judgment is authority',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse authority into judgment',
  'does not rewrite Action Is Not Execution',
  'does not rewrite Outcome Is Not Impact',
  'does not rewrite Value Is Not Outcome',
  'does not rewrite Proxy Is Not Outcome',
  'does not rewrite Learning Requires a Verified Outcome',
  'does not rewrite Verification Is Not Optional',
  'does not rewrite Verified Is Not Assured',
  'does not rewrite Results Is Not Learning',
  'does not rewrite Learning Is Not Judgment',
  'does not rewrite Alert Is Not Decision',
  'does not rewrite Authorization Is Not Accountability',
  'does not rewrite Accountability Is Not Closure',
  'does not rewrite Recommend Is Not Authorize',
  'ACTION remains a locked disposition',
  'learning_events',
  'adopted rule sitting unused',
  'recommendation tile',
  'scored suggestion',
  'title without scope',
  'org chart or charter',
]) {
  if (!authorityPage.includes(required)) {
    fail(`judgment-is-not-authority page must include ${required}`);
  }
}

if (
  !judgmentPage.includes('The series continues with') ||
  !judgmentPage.includes('/insights/judgment-is-not-authority')
) {
  fail('learning-is-not-judgment must point the series forward to judgment-is-not-authority');
}

for (const page of [
  'app/insights/learning-is-not-judgment/page.tsx',
  'app/insights/results-is-not-learning/page.tsx',
  'app/insights/execution-is-not-results/page.tsx',
]) {
  if (!read(page).includes('/insights/judgment-is-not-authority') && !read(page).includes('Judgment is not authority')) {
    fail(`${page} must carry the chain through judgment-is-not-authority`);
  }
}


for (const slug of [
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'accountability-is-not-closure',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
]) {
  if (!stepBlock(slug).includes("'authority-is-not-accountability'")) {
    fail(`${slug} related reading must cite authority-is-not-accountability`);
  }
}

const ownerBlock = stepBlock('authority-is-not-accountability');
for (const required of [

  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!ownerBlock.includes(`'${required}'`)) {
    fail(`authority-is-not-accountability related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(ownerBlock)) {
  fail('authority-is-not-accountability related reading must include the Strategic Pilot');
}
if (ownerBlock.includes("next: 'strategic-pilot'")) {
  fail('authority-is-not-accountability next step is the Field Manual');
}

const ownerPage = read('app/insights/authority-is-not-accountability/page.tsx');
for (const required of [

  '/insights/learning-is-not-judgment',
  '/insights/results-is-not-learning',
  '/insights/execution-is-not-results',
  '/insights/strategy-is-not-execution',
  '/insights/optionality-is-not-strategy',
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  '/insights/alert-is-not-decision',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'Judgment is not authority',
  'Judgment is the situated call under incomplete information that commits plant work, capital, or risk now under a named decision owner and window',
  'accountable choice with consequence, not an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a learning note alone',
  'Authority is the formal, named right to bind the firm to plant work, capital, or risk within a defined scope and window',
  'decision rights on the org chart or charter, not the quality of the call, not a title without scope, not a recommendation, and not judgment sitting with someone who cannot bind',
  'A firm with judgment can still lack authority',
  'A firm with authority can still lack judgment',
  'A judgment note alone proves neither',
  'An authority note alone proves neither',
  'A judgment note is not a green',
  'An authority note is not a green',
  'Learning is not judgment',
  'Learning is an updated decision rule, model, or operating practice the firm adopts because a verified result changed what it will do next under a named decision window',
  'tempered belief that changes future allocation, not a dashboard tile, a learning_events row, a retrospective note, or a results number sitting unread',
  'Results is not learning',
  'Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from completed work under a named measurement window',
  'consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone',
  'Execution is not results',
  'Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result)',
  'realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone',
  'Strategy is not execution',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path and resource allocation, not proof the work was completed inside that window',
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'a committed path, not a menu of unused rights',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'named measurement window',
  'named decision owner',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface a judgment/decision support note or an authority/decision-rights note',
  'Evidence/Verification/closed outcome',
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
  'judgment as authority',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not measure execution',
  'Sync does not measure execution for the customer',
  'Sync does not measure results',
  'Sync does not measure results for the customer',
  'Sync does not measure learning',
  'Sync does not measure learning for the customer',
  'Sync does not measure judgment',
  'Sync does not measure judgment for the customer',
  'Sync does not measure authority',
  'Sync does not measure authority for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says judgment is authority',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse authority into judgment',
  'does not rewrite Action Is Not Execution',
  'does not rewrite Outcome Is Not Impact',
  'does not rewrite Value Is Not Outcome',
  'does not rewrite Proxy Is Not Outcome',
  'does not rewrite Learning Requires a Verified Outcome',
  'does not rewrite Verification Is Not Optional',
  'does not rewrite Verified Is Not Assured',
  'does not rewrite Results Is Not Learning',
  'does not rewrite Learning Is Not Judgment',
  'does not rewrite Alert Is Not Decision',
  'does not rewrite Authorization Is Not Accountability',
  'does not rewrite Accountability Is Not Closure',
  'does not rewrite Recommend Is Not Authorize',
  'ACTION remains a locked disposition',
  'learning_events',
  'adopted rule sitting unused',
  'recommendation tile',
  'scored suggestion',
  'title without scope',
  'org chart or charter',
  '/insights/judgment-is-not-authority',
  'Authority is not accountability',
  'Authority is the formal, named right to bind the firm within a defined scope and window',
  'Accountability is owning the outcome of that bound decision — who answers for results, misses, and remediation',
  'A charter without an outcome owner is not accountability',
  'Sitting with the result without the right to bind is not authority',
  'A title is neither',
  'A firm with authority can still lack accountability',
  'A firm with accountability can still lack authority',
  'An accountability note alone proves neither',
  'An accountability note is not a green',
  'Sync does not measure accountability',
  'Sync does not measure accountability for the customer',
  'Sync may surface an authority/decision-rights note or an accountability/outcome-owner note',
  'does not collapse accountability into authority',
  'does not rewrite Judgment Is Not Authority',
  'practice record that says authority is accountability',
  'authority as accountability',
  'who answers for results, misses, and remediation',
  'org chart or charter',

]) {
  if (!ownerPage.includes(required)) {
    fail(`authority-is-not-accountability page must include ${required}`);
  }
}

if (
  !authorityPage.includes('The series continues with') ||
  !authorityPage.includes('/insights/authority-is-not-accountability')
) {
  fail('judgment-is-not-authority must point the series forward to authority-is-not-accountability');
}

for (const page of [
  'app/insights/judgment-is-not-authority/page.tsx',
  'app/insights/learning-is-not-judgment/page.tsx',
  'app/insights/results-is-not-learning/page.tsx',
  'app/insights/execution-is-not-results/page.tsx',
]) {
  if (!read(page).includes('/insights/authority-is-not-accountability') && !read(page).includes('Authority is not accountability')) {
    fail(`${page} must carry the chain through authority-is-not-accountability`);
  }
}


for (const slug of [
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
]) {
  if (!stepBlock(slug).includes("'accountability-is-not-ownership'")) {
    fail(`${slug} related reading must cite accountability-is-not-ownership`);
  }
}

const claimBlock = stepBlock('accountability-is-not-ownership');
for (const required of [
  'authority-is-not-accountability',

  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  if (!claimBlock.includes(`'${required}'`)) {
    fail(`accountability-is-not-ownership related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(claimBlock)) {
  fail('accountability-is-not-ownership related reading must include the Strategic Pilot');
}
if (claimBlock.includes("next: 'strategic-pilot'")) {
  fail('accountability-is-not-ownership next step is the Field Manual');
}

const claimPage = read('app/insights/accountability-is-not-ownership/page.tsx');
for (const required of [

  '/insights/learning-is-not-judgment',
  '/insights/results-is-not-learning',
  '/insights/execution-is-not-results',
  '/insights/strategy-is-not-execution',
  '/insights/optionality-is-not-strategy',
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
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
  '/insights/alert-is-not-decision',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'Judgment is not authority',
  'Judgment is the situated call under incomplete information that commits plant work, capital, or risk now under a named decision owner and window',
  'accountable choice with consequence, not an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a learning note alone',
  'Authority is the formal, named right to bind the firm to plant work, capital, or risk within a defined scope and window',
  'decision rights on the org chart or charter, not the quality of the call, not a title without scope, not a recommendation, and not judgment sitting with someone who cannot bind',
  'A firm with judgment can still lack authority',
  'A firm with authority can still lack judgment',
  'A judgment note alone proves neither',
  'An authority note alone proves neither',
  'A judgment note is not a green',
  'An authority note is not a green',
  'Learning is not judgment',
  'Learning is an updated decision rule, model, or operating practice the firm adopts because a verified result changed what it will do next under a named decision window',
  'tempered belief that changes future allocation, not a dashboard tile, a learning_events row, a retrospective note, or a results number sitting unread',
  'Results is not learning',
  'Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from completed work under a named measurement window',
  'consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone',
  'Execution is not results',
  'Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result)',
  'realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone',
  'Strategy is not execution',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path and resource allocation, not proof the work was completed inside that window',
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'a committed path, not a menu of unused rights',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'named measurement window',
  'named decision owner',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface a judgment/decision support note or an authority/decision-rights note',
  'Evidence/Verification/closed outcome',
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
  'judgment as authority',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not measure execution',
  'Sync does not measure execution for the customer',
  'Sync does not measure results',
  'Sync does not measure results for the customer',
  'Sync does not measure learning',
  'Sync does not measure learning for the customer',
  'Sync does not measure judgment',
  'Sync does not measure judgment for the customer',
  'Sync does not measure authority',
  'Sync does not measure authority for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says judgment is authority',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse authority into judgment',
  'does not rewrite Action Is Not Execution',
  'does not rewrite Outcome Is Not Impact',
  'does not rewrite Value Is Not Outcome',
  'does not rewrite Proxy Is Not Outcome',
  'does not rewrite Learning Requires a Verified Outcome',
  'does not rewrite Verification Is Not Optional',
  'does not rewrite Verified Is Not Assured',
  'does not rewrite Results Is Not Learning',
  'does not rewrite Learning Is Not Judgment',
  'does not rewrite Alert Is Not Decision',
  'does not rewrite Authorization Is Not Accountability',
  'does not rewrite Accountability Is Not Closure',
  'does not rewrite Recommend Is Not Authorize',
  'ACTION remains a locked disposition',
  'learning_events',
  'adopted rule sitting unused',
  'recommendation tile',
  'scored suggestion',
  'title without scope',
  'org chart or charter',
  '/insights/judgment-is-not-authority',
  'Authority is not accountability',
  'Authority is the formal, named right to bind the firm within a defined scope and window',
  'Accountability is owning the outcome of that bound decision — who answers for results, misses, and remediation',
  'A charter without an outcome owner is not accountability',
  'Sitting with the result without the right to bind is not authority',
  'A title is neither',
  'A firm with authority can still lack accountability',
  'A firm with accountability can still lack authority',
  'An accountability note alone proves neither',
  'An accountability note is not a green',
  'Sync does not measure accountability',
  'Sync does not measure accountability for the customer',
  'Sync may surface an authority/decision-rights note or an accountability/outcome-owner note',
  'does not collapse accountability into authority',
  'does not rewrite Judgment Is Not Authority',
  'practice record that says authority is accountability',
  'authority as accountability',
  'who answers for results, misses, and remediation',
  'org chart or charter',


  "/insights/authority-is-not-accountability",
  "Accountability is not ownership",
  "Accountability is owning the outcome of a bound decision — who answers for results, misses, and remediation under a named decision window",
  "outcome ownership after authority was exercised",
  "Ownership is the residual economic claim on an asset, equity, IP, or cash flow",
  "residual rights and upside/downside on the balance sheet, not the duty to answer for a named plant outcome",
  "A residual claim without an outcome owner is not accountability",
  "Answering for results without a residual claim is not ownership",
  "A firm with accountability can still lack ownership",
  "A firm with ownership can still lack accountability",
  "An ownership note alone proves neither",
  "An ownership note is not a green",
  "Sync does not measure ownership",
  "Sync does not measure ownership for the customer",
  "Sync may surface an accountability/outcome-owner note or an ownership/residual-claim note",
  "does not collapse ownership into accountability",
  "does not rewrite Authority Is Not Accountability",
  "does not rewrite Closure Is Not Cash",
  "practice record that says accountability is ownership",
  "accountability as ownership",
  "The outcome owner is not the residual claimant",
  "What an ownership note is allowed to be",
]) {
  if (!claimPage.includes(required)) {
    fail(`accountability-is-not-ownership page must include ${required}`);
  }
}

if (
  !ownerPage.includes('The series continues with') ||
  !ownerPage.includes('/insights/accountability-is-not-ownership')
) {
  fail('authority-is-not-accountability must point the series forward to accountability-is-not-ownership');
}

for (const page of [
  'app/insights/authority-is-not-accountability/page.tsx',
  'app/insights/judgment-is-not-authority/page.tsx',
  'app/insights/learning-is-not-judgment/page.tsx',
  'app/insights/results-is-not-learning/page.tsx',
  'app/insights/execution-is-not-results/page.tsx',
]) {
  if (!read(page).includes('/insights/accountability-is-not-ownership') && !read(page).includes('Accountability is not ownership')) {
    fail(`${page} must carry the chain through accountability-is-not-ownership`);
  }
}


for (const slug of [
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes("'ownership-is-not-control'")) {
    fail(`${slug} related reading must cite ownership-is-not-control`);
  }
}

const controlBlock = stepBlock('ownership-is-not-control');
for (const required of [
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!controlBlock.includes(`'${required}'`)) {
    fail(`ownership-is-not-control related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(controlBlock)) {
  fail('ownership-is-not-control related reading must include the Strategic Pilot');
}
if (controlBlock.includes("next: 'strategic-pilot'")) {
  fail('ownership-is-not-control next step is the Field Manual');
}

const controlPage = read('app/insights/ownership-is-not-control/page.tsx');
for (const required of [
  '/insights/accountability-is-not-ownership',
  '/insights/authority-is-not-accountability',
  '/insights/accountability-is-not-closure',
  '/insights/coverage-is-not-control',
  '/insights/dashboard-is-not-control',
  '/insights/closure-is-not-cash',
  '/insights/judgment-is-not-authority',
  '/insights/learning-is-not-judgment',
  '/insights/results-is-not-learning',
  '/insights/execution-is-not-results',
  '/insights/strategy-is-not-execution',
  '/insights/optionality-is-not-strategy',
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
  '/insights/arr-is-not-cash',
  '/insights/revenue-is-not-arr',
  '/insights/impact-is-not-revenue',
  '/insights/outcome-is-not-impact',
  '/insights/value-is-not-outcome',
  '/insights/profit-is-not-value',
  '/insights/proxy-is-not-outcome',
  '/insights/margin-is-not-profit',
  '/insights/cash-is-not-margin',
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
  '/insights/alert-is-not-decision',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'Ownership is not control',
  'Ownership is the residual economic claim on an asset, equity, IP, or cash flow',
  'residual rights and upside/downside on the balance sheet, not the power to direct the asset',
  'Control is the practical power to set or change direction of the asset or plant',
  'who can steer capital allocation, operating priorities, or binding plant moves in practice',
  'direction power, not a residual claim',
  'A residual claim without direction power is not control',
  'Direction power without a residual claim is not ownership',
  'A title is neither',
  'A firm with ownership can still lack control',
  'A firm with control can still lack ownership',
  'An ownership note alone proves neither',
  'A control note alone proves neither',
  'An ownership note is not a green',
  'A control note is not a green',
  'practical steering power over the asset/plant, not the formal decision-rights charter alone',
  'The residual claimant is not the person who steers',
  'What a control note is allowed to be',
  'Sync does not measure ownership',
  'Sync does not measure ownership for the customer',
  'Sync does not measure control',
  'Sync does not measure control for the customer',
  'Sync may surface an ownership/residual-claim note or a control/direction-power note',
  'does not collapse control into ownership',
  'does not collapse control into authority',
  'does not collapse ownership into accountability',
  'does not rewrite Accountability Is Not Ownership',
  'does not rewrite Authority Is Not Accountability',
  'does not rewrite Coverage Is Not Control',
  'does not rewrite Dashboard Is Not Control',
  'does not rewrite Closure Is Not Cash',
  'practice record that says ownership is control',
  'ownership as control',
  'Judgment is not authority',
  'Judgment is the situated call under incomplete information that commits plant work, capital, or risk now under a named decision owner and window',
  'accountable choice with consequence, not an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a learning note alone',
  'Authority is the formal, named right to bind the firm to plant work, capital, or risk within a defined scope and window',
  'decision rights on the org chart or charter, not the quality of the call, not a title without scope, not a recommendation, and not judgment sitting with someone who cannot bind',
  'A firm with judgment can still lack authority',
  'A firm with authority can still lack judgment',
  'A judgment note alone proves neither',
  'An authority note alone proves neither',
  'A judgment note is not a green',
  'An authority note is not a green',
  'Learning is not judgment',
  'Learning is an updated decision rule, model, or operating practice the firm adopts because a verified result changed what it will do next under a named decision window',
  'tempered belief that changes future allocation, not a dashboard tile, a learning_events row, a retrospective note, or a results number sitting unread',
  'Results is not learning',
  'Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from completed work under a named measurement window',
  'consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone',
  'Execution is not results',
  'Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result)',
  'realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone',
  'Strategy is not execution',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path and resource allocation, not proof the work was completed inside that window',
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'a committed path, not a menu of unused rights',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'named measurement window',
  'named decision owner',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface a judgment/decision support note or an authority/decision-rights note',
  'Evidence/Verification/closed outcome',
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
  'judgment as authority',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not measure execution',
  'Sync does not measure execution for the customer',
  'Sync does not measure results',
  'Sync does not measure results for the customer',
  'Sync does not measure learning',
  'Sync does not measure learning for the customer',
  'Sync does not measure judgment',
  'Sync does not measure judgment for the customer',
  'Sync does not measure authority',
  'Sync does not measure authority for the customer',
  'Sync does not measure accountability',
  'Sync does not measure accountability for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says judgment is authority',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse authority into judgment',
  'does not rewrite Action Is Not Execution',
  'does not rewrite Outcome Is Not Impact',
  'does not rewrite Value Is Not Outcome',
  'does not rewrite Proxy Is Not Outcome',
  'does not rewrite Learning Requires a Verified Outcome',
  'does not rewrite Verification Is Not Optional',
  'does not rewrite Verified Is Not Assured',
  'does not rewrite Results Is Not Learning',
  'does not rewrite Learning Is Not Judgment',
  'does not rewrite Alert Is Not Decision',
  'does not rewrite Authorization Is Not Accountability',
  'does not rewrite Accountability Is Not Closure',
  'does not rewrite Recommend Is Not Authorize',
  'ACTION remains a locked disposition',
  'learning_events',
  'adopted rule sitting unused',
  'recommendation tile',
  'scored suggestion',
  'title without scope',
  'org chart or charter',
  'Authority is not accountability',
  'Authority is the formal, named right to bind the firm within a defined scope and window',
  'Accountability is owning the outcome of that bound decision — who answers for results, misses, and remediation',
  'A charter without an outcome owner is not accountability',
  'Sitting with the result without the right to bind is not authority',
  'A firm with authority can still lack accountability',
  'A firm with accountability can still lack authority',
  'An accountability note alone proves neither',
  'An accountability note is not a green',
  'Sync may surface an authority/decision-rights note or an accountability/outcome-owner note',
  'does not collapse accountability into authority',
  'practice record that says authority is accountability',
  'authority as accountability',
  'who answers for results, misses, and remediation',
  'Accountability is not ownership',
  'Accountability is owning the outcome of a bound decision — who answers for results, misses, and remediation under a named decision window',
  'outcome ownership after authority was exercised',
  'residual rights and upside/downside on the balance sheet, not the duty to answer for a named plant outcome',
  'A residual claim without an outcome owner is not accountability',
  'Answering for results without a residual claim is not ownership',
  'A firm with accountability can still lack ownership',
  'A firm with ownership can still lack accountability',
  'Sync may surface an accountability/outcome-owner note or an ownership/residual-claim note',
]) {
  if (!controlPage.includes(required)) {
    fail(`ownership-is-not-control page must include ${required}`);
  }
}

if (
  !claimPage.includes('The series continues with') ||
  !claimPage.includes('/insights/ownership-is-not-control')
) {
  fail('accountability-is-not-ownership must point the series forward to ownership-is-not-control');
}


for (const slug of [
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes("'control-is-not-closure'")) {
    fail(`${slug} related reading must cite control-is-not-closure`);
  }
}

const finishedBlock = stepBlock('control-is-not-closure');
for (const required of [
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!finishedBlock.includes(`'${required}'`)) {
    fail(`control-is-not-closure related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(finishedBlock)) {
  fail('control-is-not-closure related reading must include the Strategic Pilot');
}
if (finishedBlock.includes("next: 'strategic-pilot'")) {
  fail('control-is-not-closure next step is the Field Manual');
}

const finishedPage = read('app/insights/control-is-not-closure/page.tsx');
for (const required of [
  '/insights/accountability-is-not-ownership',
  '/insights/authority-is-not-accountability',
  '/insights/accountability-is-not-closure',
  '/insights/coverage-is-not-control',
  '/insights/dashboard-is-not-control',
  '/insights/closure-is-not-cash',
  '/insights/judgment-is-not-authority',
  '/insights/learning-is-not-judgment',
  '/insights/results-is-not-learning',
  '/insights/execution-is-not-results',
  '/insights/strategy-is-not-execution',
  '/insights/optionality-is-not-strategy',
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
  '/insights/arr-is-not-cash',
  '/insights/revenue-is-not-arr',
  '/insights/impact-is-not-revenue',
  '/insights/outcome-is-not-impact',
  '/insights/value-is-not-outcome',
  '/insights/profit-is-not-value',
  '/insights/proxy-is-not-outcome',
  '/insights/margin-is-not-profit',
  '/insights/cash-is-not-margin',
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
  '/insights/alert-is-not-decision',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'Ownership is not control',
  'Ownership is the residual economic claim on an asset, equity, IP, or cash flow',
  'residual rights and upside/downside on the balance sheet, not the power to direct the asset',
  'Control is the practical power to set or change direction of the asset or plant',
  'who can steer capital allocation, operating priorities, or binding plant moves in practice',
  'direction power, not a residual claim',
  'A residual claim without direction power is not control',
  'Direction power without a residual claim is not ownership',
  'A title is neither',
  'A firm with ownership can still lack control',
  'A firm with control can still lack ownership',
  'An ownership note alone proves neither',
  'A control note alone proves neither',
  'An ownership note is not a green',
  'A control note is not a green',
  'practical steering power over the asset/plant, not the formal decision-rights charter alone',
  'The residual claimant is not the person who steers',
  'What a control note is allowed to be',
  'Sync does not measure ownership',
  'Sync does not measure ownership for the customer',
  'Sync does not measure control',
  'Sync does not measure control for the customer',
  'Sync may surface an ownership/residual-claim note or a control/direction-power note',
  'does not collapse control into ownership',
  'does not collapse control into authority',
  'does not collapse ownership into accountability',
  'does not rewrite Accountability Is Not Ownership',
  'does not rewrite Authority Is Not Accountability',
  'does not rewrite Coverage Is Not Control',
  'does not rewrite Dashboard Is Not Control',
  'does not rewrite Closure Is Not Cash',
  'practice record that says ownership is control',
  'ownership as control',
  'Judgment is not authority',
  'Judgment is the situated call under incomplete information that commits plant work, capital, or risk now under a named decision owner and window',
  'accountable choice with consequence, not an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a learning note alone',
  'Authority is the formal, named right to bind the firm to plant work, capital, or risk within a defined scope and window',
  'decision rights on the org chart or charter, not the quality of the call, not a title without scope, not a recommendation, and not judgment sitting with someone who cannot bind',
  'A firm with judgment can still lack authority',
  'A firm with authority can still lack judgment',
  'A judgment note alone proves neither',
  'An authority note alone proves neither',
  'A judgment note is not a green',
  'An authority note is not a green',
  'Learning is not judgment',
  'Learning is an updated decision rule, model, or operating practice the firm adopts because a verified result changed what it will do next under a named decision window',
  'tempered belief that changes future allocation, not a dashboard tile, a learning_events row, a retrospective note, or a results number sitting unread',
  'Results is not learning',
  'Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from completed work under a named measurement window',
  'consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone',
  'Execution is not results',
  'Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result)',
  'realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone',
  'Strategy is not execution',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path and resource allocation, not proof the work was completed inside that window',
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'a committed path, not a menu of unused rights',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'named measurement window',
  'named decision owner',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface a judgment/decision support note or an authority/decision-rights note',
  'Evidence/Verification/closed outcome',
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
  'judgment as authority',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not measure execution',
  'Sync does not measure execution for the customer',
  'Sync does not measure results',
  'Sync does not measure results for the customer',
  'Sync does not measure learning',
  'Sync does not measure learning for the customer',
  'Sync does not measure judgment',
  'Sync does not measure judgment for the customer',
  'Sync does not measure authority',
  'Sync does not measure authority for the customer',
  'Sync does not measure accountability',
  'Sync does not measure accountability for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says judgment is authority',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse authority into judgment',
  'does not rewrite Action Is Not Execution',
  'does not rewrite Outcome Is Not Impact',
  'does not rewrite Value Is Not Outcome',
  'does not rewrite Proxy Is Not Outcome',
  'does not rewrite Learning Requires a Verified Outcome',
  'does not rewrite Verification Is Not Optional',
  'does not rewrite Verified Is Not Assured',
  'does not rewrite Results Is Not Learning',
  'does not rewrite Learning Is Not Judgment',
  'does not rewrite Alert Is Not Decision',
  'does not rewrite Authorization Is Not Accountability',
  'does not rewrite Accountability Is Not Closure',
  'does not rewrite Recommend Is Not Authorize',
  'ACTION remains a locked disposition',
  'learning_events',
  'adopted rule sitting unused',
  'recommendation tile',
  'scored suggestion',
  'title without scope',
  'org chart or charter',
  'Authority is not accountability',
  'Authority is the formal, named right to bind the firm within a defined scope and window',
  'Accountability is owning the outcome of that bound decision — who answers for results, misses, and remediation',
  'A charter without an outcome owner is not accountability',
  'Sitting with the result without the right to bind is not authority',
  'A firm with authority can still lack accountability',
  'A firm with accountability can still lack authority',
  'An accountability note alone proves neither',
  'An accountability note is not a green',
  'Sync may surface an authority/decision-rights note or an accountability/outcome-owner note',
  'does not collapse accountability into authority',
  'practice record that says authority is accountability',
  'authority as accountability',
  'who answers for results, misses, and remediation',
  'Accountability is not ownership',
  'Accountability is owning the outcome of a bound decision — who answers for results, misses, and remediation under a named decision window',
  'outcome ownership after authority was exercised',
  'residual rights and upside/downside on the balance sheet, not the duty to answer for a named plant outcome',
  'A residual claim without an outcome owner is not accountability',
  'Answering for results without a residual claim is not ownership',
  'A firm with accountability can still lack ownership',
  'A firm with ownership can still lack accountability',
  'Sync may surface an accountability/outcome-owner note or an ownership/residual-claim note',

  'Control is not closure',
  'Closure is a finished work-state',
  'ticket, work order, investigation, or decision cycle marked done with a named end condition',
  'administrative or operational completion, not the power to steer',
  'direction power, not a residual claim and not a formal authority charter alone',
  'Direction power without a finished end-state is not closure',
  'A closed ticket without practical steering power is not control',
  'A firm with control can still lack closure',
  'A firm with closure can still lack control',
  'A closure note alone proves neither',
  'A closure note is not a green',
  'The person who steers is not the closed ticket',
  'What a closure note is allowed to be',
  'Direction power is not a finished end-state',
  'Sync does not measure closure',
  'Sync does not measure closure for the customer',
  'Sync may surface a control/direction-power note or a closure/end-state note',
  'does not collapse closure into control',
  'does not collapse closure into cash',
  'does not collapse closure into accountability',
  'does not rewrite Ownership Is Not Control',
  'does not rewrite Cleared Is Not Complete',
  'does not rewrite Complete Is Not Verified',
  'named answerability for an outcome within a defined scope and window',
  'practice record that says control is closure',
  'control as closure',
  '/insights/ownership-is-not-control',
  'who can steer capital allocation, operating priorities, or binding plant moves in practice',
  'practical steering power over the asset/plant, not the formal decision-rights charter alone',
  'Control is the practical power to set or change direction of the asset or plant',
]) {
  if (!finishedPage.includes(required)) {
    fail(`control-is-not-closure page must include ${required}`);
  }
}

if (
  !controlPage.includes('The series continues with') ||
  !controlPage.includes('/insights/control-is-not-closure')
) {
  fail('ownership-is-not-control must point the series forward to control-is-not-closure');
}


for (const slug of [
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes("'closure-is-not-complete'")) {
    fail(`${slug} related reading must cite closure-is-not-complete`);
  }
}

const acceptanceBlock = stepBlock('closure-is-not-complete');
for (const required of [
  'control-is-not-closure',
  'ready-is-not-cleared',

  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!acceptanceBlock.includes(`'${required}'`)) {
    fail(`closure-is-not-complete related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(acceptanceBlock)) {
  fail('closure-is-not-complete related reading must include the Strategic Pilot');
}
if (acceptanceBlock.includes("next: 'strategic-pilot'")) {
  fail('closure-is-not-complete next step is the Field Manual');
}

const acceptancePage = read('app/insights/closure-is-not-complete/page.tsx');
for (const required of [
  'Closure is not complete',
  'administrative or operational completion stamp, not proof that every acceptance criterion was met',
  'every named acceptance criterion for that case satisfied under a named measurement window',
  'acceptance completeness, not merely a closed stamp',
  'A closed ticket without every acceptance criterion satisfied is not complete',
  'A complete acceptance pack without a named end-condition stamp is not closure',
  'A firm with closure can still lack completeness',
  'A firm with completeness can still lack closure',
  'A completeness note alone proves neither',
  'A completeness note is not a green',
  'The closed stamp is not the acceptance pack',
  'What a completeness note is allowed to be',
  'A finished end-state is not acceptance completeness',
  'Sync does not measure completeness',
  'Sync does not measure completeness for the customer',
  'Sync may surface a closure/end-state note or a completeness/acceptance-pack note',
  'does not collapse completeness into closure',
  'does not collapse complete into cleared',
  'does not collapse complete into verified',
  'does not rewrite Control Is Not Closure',
  'does not rewrite Ready Is Not Cleared',
  'practice record that says closure is complete',
  'closure as complete',
  'ready or permission gate past a clearance check',
  'independent check against evidence',
  '/insights/control-is-not-closure',
  '/insights/ready-is-not-cleared',


  '/insights/accountability-is-not-ownership',
  '/insights/authority-is-not-accountability',
  '/insights/accountability-is-not-closure',
  '/insights/coverage-is-not-control',
  '/insights/dashboard-is-not-control',
  '/insights/closure-is-not-cash',
  '/insights/judgment-is-not-authority',
  '/insights/learning-is-not-judgment',
  '/insights/results-is-not-learning',
  '/insights/execution-is-not-results',
  '/insights/strategy-is-not-execution',
  '/insights/optionality-is-not-strategy',
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
  '/insights/arr-is-not-cash',
  '/insights/revenue-is-not-arr',
  '/insights/impact-is-not-revenue',
  '/insights/outcome-is-not-impact',
  '/insights/value-is-not-outcome',
  '/insights/profit-is-not-value',
  '/insights/proxy-is-not-outcome',
  '/insights/margin-is-not-profit',
  '/insights/cash-is-not-margin',
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
  '/insights/alert-is-not-decision',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'Ownership is not control',
  'Ownership is the residual economic claim on an asset, equity, IP, or cash flow',
  'residual rights and upside/downside on the balance sheet, not the power to direct the asset',
  'Control is the practical power to set or change direction of the asset or plant',
  'who can steer capital allocation, operating priorities, or binding plant moves in practice',
  'direction power, not a residual claim',
  'A residual claim without direction power is not control',
  'Direction power without a residual claim is not ownership',
  'A title is neither',
  'A firm with ownership can still lack control',
  'A firm with control can still lack ownership',
  'An ownership note alone proves neither',
  'A control note alone proves neither',
  'An ownership note is not a green',
  'A control note is not a green',
  'practical steering power over the asset/plant, not the formal decision-rights charter alone',
  'The residual claimant is not the person who steers',
  'What a control note is allowed to be',
  'Sync does not measure ownership',
  'Sync does not measure ownership for the customer',
  'Sync does not measure control',
  'Sync does not measure control for the customer',
  'Sync may surface an ownership/residual-claim note or a control/direction-power note',
  'does not collapse control into ownership',
  'does not collapse control into authority',
  'does not collapse ownership into accountability',
  'does not rewrite Accountability Is Not Ownership',
  'does not rewrite Authority Is Not Accountability',
  'does not rewrite Coverage Is Not Control',
  'does not rewrite Dashboard Is Not Control',
  'does not rewrite Closure Is Not Cash',
  'practice record that says ownership is control',
  'ownership as control',
  'Judgment is not authority',
  'Judgment is the situated call under incomplete information that commits plant work, capital, or risk now under a named decision owner and window',
  'accountable choice with consequence, not an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a learning note alone',
  'Authority is the formal, named right to bind the firm to plant work, capital, or risk within a defined scope and window',
  'decision rights on the org chart or charter, not the quality of the call, not a title without scope, not a recommendation, and not judgment sitting with someone who cannot bind',
  'A firm with judgment can still lack authority',
  'A firm with authority can still lack judgment',
  'A judgment note alone proves neither',
  'An authority note alone proves neither',
  'A judgment note is not a green',
  'An authority note is not a green',
  'Learning is not judgment',
  'Learning is an updated decision rule, model, or operating practice the firm adopts because a verified result changed what it will do next under a named decision window',
  'tempered belief that changes future allocation, not a dashboard tile, a learning_events row, a retrospective note, or a results number sitting unread',
  'Results is not learning',
  'Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from completed work under a named measurement window',
  'consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone',
  'Execution is not results',
  'Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result)',
  'realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone',
  'Strategy is not execution',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path and resource allocation, not proof the work was completed inside that window',
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'a committed path, not a menu of unused rights',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'named measurement window',
  'named decision owner',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface a judgment/decision support note or an authority/decision-rights note',
  'Evidence/Verification/closed outcome',
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
  'judgment as authority',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not measure execution',
  'Sync does not measure execution for the customer',
  'Sync does not measure results',
  'Sync does not measure results for the customer',
  'Sync does not measure learning',
  'Sync does not measure learning for the customer',
  'Sync does not measure judgment',
  'Sync does not measure judgment for the customer',
  'Sync does not measure authority',
  'Sync does not measure authority for the customer',
  'Sync does not measure accountability',
  'Sync does not measure accountability for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says judgment is authority',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse authority into judgment',
  'does not rewrite Action Is Not Execution',
  'does not rewrite Outcome Is Not Impact',
  'does not rewrite Value Is Not Outcome',
  'does not rewrite Proxy Is Not Outcome',
  'does not rewrite Learning Requires a Verified Outcome',
  'does not rewrite Verification Is Not Optional',
  'does not rewrite Verified Is Not Assured',
  'does not rewrite Results Is Not Learning',
  'does not rewrite Learning Is Not Judgment',
  'does not rewrite Alert Is Not Decision',
  'does not rewrite Authorization Is Not Accountability',
  'does not rewrite Accountability Is Not Closure',
  'does not rewrite Recommend Is Not Authorize',
  'ACTION remains a locked disposition',
  'learning_events',
  'adopted rule sitting unused',
  'recommendation tile',
  'scored suggestion',
  'title without scope',
  'org chart or charter',
  'Authority is not accountability',
  'Authority is the formal, named right to bind the firm within a defined scope and window',
  'Accountability is owning the outcome of that bound decision — who answers for results, misses, and remediation',
  'A charter without an outcome owner is not accountability',
  'Sitting with the result without the right to bind is not authority',
  'A firm with authority can still lack accountability',
  'A firm with accountability can still lack authority',
  'An accountability note alone proves neither',
  'An accountability note is not a green',
  'Sync may surface an authority/decision-rights note or an accountability/outcome-owner note',
  'does not collapse accountability into authority',
  'practice record that says authority is accountability',
  'authority as accountability',
  'who answers for results, misses, and remediation',
  'Accountability is not ownership',
  'Accountability is owning the outcome of a bound decision — who answers for results, misses, and remediation under a named decision window',
  'outcome ownership after authority was exercised',
  'residual rights and upside/downside on the balance sheet, not the duty to answer for a named plant outcome',
  'A residual claim without an outcome owner is not accountability',
  'Answering for results without a residual claim is not ownership',
  'A firm with accountability can still lack ownership',
  'A firm with ownership can still lack accountability',
  'Sync may surface an accountability/outcome-owner note or an ownership/residual-claim note',

  'Control is not closure',
  'Closure is a finished work-state',
  'ticket, work order, investigation, or decision cycle marked done with a named end condition',
  'administrative or operational completion, not the power to steer',
  'direction power, not a residual claim and not a formal authority charter alone',
  'Direction power without a finished end-state is not closure',
  'A closed ticket without practical steering power is not control',
  'A firm with control can still lack closure',
  'A firm with closure can still lack control',
  'A closure note alone proves neither',
  'A closure note is not a green',
  'The person who steers is not the closed ticket',
  'What a closure note is allowed to be',
  'Direction power is not a finished end-state',
  'Sync does not measure closure',
  'Sync does not measure closure for the customer',
  'Sync may surface a control/direction-power note or a closure/end-state note',
  'does not collapse closure into control',
  'does not collapse closure into cash',
  'does not collapse closure into accountability',
  'does not rewrite Ownership Is Not Control',
  'does not rewrite Cleared Is Not Complete',
  'does not rewrite Complete Is Not Verified',
  'named answerability for an outcome within a defined scope and window',
  'practice record that says control is closure',
  'control as closure',
  '/insights/ownership-is-not-control',
  'who can steer capital allocation, operating priorities, or binding plant moves in practice',
  'practical steering power over the asset/plant, not the formal decision-rights charter alone',
  'Control is the practical power to set or change direction of the asset or plant',
]) {
  if (!acceptancePage.includes(required)) {
    fail(`closure-is-not-complete page must include ${required}`);
  }
}

if (
  !finishedPage.includes('The series continues with') ||
  !finishedPage.includes('/insights/closure-is-not-complete')
) {
  fail('control-is-not-closure must point the series forward to closure-is-not-complete');
}


for (const slug of [
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes("'complete-is-not-accepted'")) {
    fail(`${slug} related reading must cite complete-is-not-accepted`);
  }
}

const acceptedBlock = stepBlock('complete-is-not-accepted');
const acceptedReadingRequired = [
  'control-is-not-closure',
  'ready-is-not-cleared',

  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
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
  'coverage-is-not-control',
  'dashboard-is-not-control',
  'closure-is-not-complete',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'assured-is-not-proven',
];
for (const required of acceptedReadingRequired) {
  if (!acceptedBlock.includes(`'${required}'`)) {
    fail(`complete-is-not-accepted related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(acceptedBlock)) {
  fail('complete-is-not-accepted related reading must include the Strategic Pilot');
}
if (acceptedBlock.includes("next: 'strategic-pilot'")) {
  fail('complete-is-not-accepted next step is the Field Manual');
}

const acceptedPage = read('app/insights/complete-is-not-accepted/page.tsx');
const acceptedPageRequired = [
  'Closure is not complete',
  'administrative or operational completion stamp, not proof that every acceptance criterion was met',
  'every named acceptance criterion for that case satisfied under a named measurement window',
  'acceptance completeness, not merely a closed stamp',
  'A closed ticket without every acceptance criterion satisfied is not complete',
  'A complete acceptance pack without a named end-condition stamp is not closure',
  'A firm with closure can still lack completeness',
  'A firm with completeness can still lack closure',
  'A completeness note alone proves neither',
  'A completeness note is not a green',
  'The closed stamp is not the acceptance pack',
  'What a completeness note is allowed to be',
  'A finished end-state is not acceptance completeness',
  'Sync does not measure completeness',
  'Sync does not measure completeness for the customer',
  'Sync may surface a closure/end-state note or a completeness/acceptance-pack note',
  'does not collapse completeness into closure',
  'does not collapse complete into cleared',
  'does not collapse complete into verified',
  'does not rewrite Control Is Not Closure',
  'does not rewrite Ready Is Not Cleared',
  'practice record that says closure is complete',
  'closure as complete',
  'ready or permission gate past a clearance check',
  'independent check against evidence',
  '/insights/control-is-not-closure',
  '/insights/ready-is-not-cleared',


  '/insights/accountability-is-not-ownership',
  '/insights/authority-is-not-accountability',
  '/insights/accountability-is-not-closure',
  '/insights/coverage-is-not-control',
  '/insights/dashboard-is-not-control',
  '/insights/closure-is-not-cash',
  '/insights/judgment-is-not-authority',
  '/insights/learning-is-not-judgment',
  '/insights/results-is-not-learning',
  '/insights/execution-is-not-results',
  '/insights/strategy-is-not-execution',
  '/insights/optionality-is-not-strategy',
  '/insights/flexibility-is-not-optionality',
  '/insights/liquidity-is-not-flexibility',
  '/insights/solvency-is-not-liquidity',
  '/insights/survival-is-not-solvency',
  '/insights/runway-is-not-survival',
  '/insights/cash-is-not-runway',
  '/insights/arr-is-not-cash',
  '/insights/revenue-is-not-arr',
  '/insights/impact-is-not-revenue',
  '/insights/outcome-is-not-impact',
  '/insights/value-is-not-outcome',
  '/insights/profit-is-not-value',
  '/insights/proxy-is-not-outcome',
  '/insights/margin-is-not-profit',
  '/insights/cash-is-not-margin',
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
  '/insights/alert-is-not-decision',
  "fieldManualPath('action')",
  "fieldManualPath('verification')",
  "fieldManualPath('human-decision')",
  "fieldManualPath('evidence')",
  "fieldManualPath('learning')",
  'Ownership is not control',
  'Ownership is the residual economic claim on an asset, equity, IP, or cash flow',
  'residual rights and upside/downside on the balance sheet, not the power to direct the asset',
  'Control is the practical power to set or change direction of the asset or plant',
  'who can steer capital allocation, operating priorities, or binding plant moves in practice',
  'direction power, not a residual claim',
  'A residual claim without direction power is not control',
  'Direction power without a residual claim is not ownership',
  'A title is neither',
  'A firm with ownership can still lack control',
  'A firm with control can still lack ownership',
  'An ownership note alone proves neither',
  'A control note alone proves neither',
  'An ownership note is not a green',
  'A control note is not a green',
  'practical steering power over the asset/plant, not the formal decision-rights charter alone',
  'The residual claimant is not the person who steers',
  'What a control note is allowed to be',
  'Sync does not measure ownership',
  'Sync does not measure ownership for the customer',
  'Sync does not measure control',
  'Sync does not measure control for the customer',
  'Sync may surface an ownership/residual-claim note or a control/direction-power note',
  'does not collapse control into ownership',
  'does not collapse control into authority',
  'does not collapse ownership into accountability',
  'does not rewrite Accountability Is Not Ownership',
  'does not rewrite Authority Is Not Accountability',
  'does not rewrite Coverage Is Not Control',
  'does not rewrite Dashboard Is Not Control',
  'does not rewrite Closure Is Not Cash',
  'practice record that says ownership is control',
  'ownership as control',
  'Judgment is not authority',
  'Judgment is the situated call under incomplete information that commits plant work, capital, or risk now under a named decision owner and window',
  'accountable choice with consequence, not an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a learning note alone',
  'Authority is the formal, named right to bind the firm to plant work, capital, or risk within a defined scope and window',
  'decision rights on the org chart or charter, not the quality of the call, not a title without scope, not a recommendation, and not judgment sitting with someone who cannot bind',
  'A firm with judgment can still lack authority',
  'A firm with authority can still lack judgment',
  'A judgment note alone proves neither',
  'An authority note alone proves neither',
  'A judgment note is not a green',
  'An authority note is not a green',
  'Learning is not judgment',
  'Learning is an updated decision rule, model, or operating practice the firm adopts because a verified result changed what it will do next under a named decision window',
  'tempered belief that changes future allocation, not a dashboard tile, a learning_events row, a retrospective note, or a results number sitting unread',
  'Results is not learning',
  'Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from completed work under a named measurement window',
  'consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone',
  'Execution is not results',
  'Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result)',
  'realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone',
  'Strategy is not execution',
  'Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute',
  'a committed path and resource allocation, not proof the work was completed inside that window',
  'Optionality is not strategy',
  'Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state',
  'theoretical choice inventory, not proof those choices are executable inside a named decision window',
  'lead times, skills, covenants, plant continuity, and cash may still block exercise',
  'a committed path, not a menu of unused rights',
  'Flexibility is not optionality',
  'Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window',
  'without breaking obligations, covenants, or continuity',
  'the ability to choose and change course, not merely to pay what is already due',
  'Liquidity is not flexibility',
  'Liquidity is whether cash and near-cash can meet obligations as they come due in the near term',
  'payroll, vendors, debt service windows',
  'without forced asset sales or covenant breaches',
  'named decision window',
  'named measurement window',
  'named decision owner',
  'Solvency is not liquidity',
  'Solvency is whether assets and claims structure can cover liabilities',
  'structural horizon',
  'balance-sheet and claim quality',
  'Survival is not solvency',
  'whether the business can keep meeting obligations',
  'payroll, vendors, debt service, plant continuity',
  'next decision horizon',
  'Runway is not survival',
  'how long operations can continue at the current net burn before cash is exhausted',
  'cash divided by burn rate',
  'Cash is not runway',
  'money received (collected) that can be spent now',
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
  'Sync may surface a judgment/decision support note or an authority/decision-rights note',
  'Evidence/Verification/closed outcome',
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
  'judgment as authority',
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
  'Sync does not measure survival',
  'Sync does not measure survival for the customer',
  'Sync does not measure solvency',
  'Sync does not measure solvency for the customer',
  'Sync does not measure liquidity',
  'Sync does not measure liquidity for the customer',
  'Sync does not measure flexibility',
  'Sync does not measure flexibility for the customer',
  'Sync does not measure optionality',
  'Sync does not measure optionality for the customer',
  'Sync does not measure strategy',
  'Sync does not measure strategy for the customer',
  'Sync does not measure execution',
  'Sync does not measure execution for the customer',
  'Sync does not measure results',
  'Sync does not measure results for the customer',
  'Sync does not measure learning',
  'Sync does not measure learning for the customer',
  'Sync does not measure judgment',
  'Sync does not measure judgment for the customer',
  'Sync does not measure authority',
  'Sync does not measure authority for the customer',
  'Sync does not measure accountability',
  'Sync does not measure accountability for the customer',
  'Sync does not collect cash',
  'Sync does not attribute a change in cash, risk, or capacity',
  'Recommend is not authorize',
  'APP_SETUP_URL',
  '/reliability-assessment',
  '/strategic-pilot',
  'plant execute',
  'live connector tag pull',
  'Simulated or seeded telemetry',
  'practice record that says judgment is authority',
  'A named human decides',
  'A named human remains accountable',
  'different refusal',
  'does not invent a customer',
  'does not collapse authority into judgment',
  'does not rewrite Action Is Not Execution',
  'does not rewrite Outcome Is Not Impact',
  'does not rewrite Value Is Not Outcome',
  'does not rewrite Proxy Is Not Outcome',
  'does not rewrite Learning Requires a Verified Outcome',
  'does not rewrite Verification Is Not Optional',
  'does not rewrite Verified Is Not Assured',
  'does not rewrite Results Is Not Learning',
  'does not rewrite Learning Is Not Judgment',
  'does not rewrite Alert Is Not Decision',
  'does not rewrite Authorization Is Not Accountability',
  'does not rewrite Accountability Is Not Closure',
  'does not rewrite Recommend Is Not Authorize',
  'ACTION remains a locked disposition',
  'learning_events',
  'adopted rule sitting unused',
  'recommendation tile',
  'scored suggestion',
  'title without scope',
  'org chart or charter',
  'Authority is not accountability',
  'Authority is the formal, named right to bind the firm within a defined scope and window',
  'Accountability is owning the outcome of that bound decision — who answers for results, misses, and remediation',
  'A charter without an outcome owner is not accountability',
  'Sitting with the result without the right to bind is not authority',
  'A firm with authority can still lack accountability',
  'A firm with accountability can still lack authority',
  'An accountability note alone proves neither',
  'An accountability note is not a green',
  'Sync may surface an authority/decision-rights note or an accountability/outcome-owner note',
  'does not collapse accountability into authority',
  'practice record that says authority is accountability',
  'authority as accountability',
  'who answers for results, misses, and remediation',
  'Accountability is not ownership',
  'Accountability is owning the outcome of a bound decision — who answers for results, misses, and remediation under a named decision window',
  'outcome ownership after authority was exercised',
  'residual rights and upside/downside on the balance sheet, not the duty to answer for a named plant outcome',
  'A residual claim without an outcome owner is not accountability',
  'Answering for results without a residual claim is not ownership',
  'A firm with accountability can still lack ownership',
  'A firm with ownership can still lack accountability',
  'Sync may surface an accountability/outcome-owner note or an ownership/residual-claim note',

  'Control is not closure',
  'Closure is a finished work-state',
  'ticket, work order, investigation, or decision cycle marked done with a named end condition',
  'administrative or operational completion, not the power to steer',
  'direction power, not a residual claim and not a formal authority charter alone',
  'Direction power without a finished end-state is not closure',
  'A closed ticket without practical steering power is not control',
  'A firm with control can still lack closure',
  'A firm with closure can still lack control',
  'A closure note alone proves neither',
  'A closure note is not a green',
  'The person who steers is not the closed ticket',
  'What a closure note is allowed to be',
  'Direction power is not a finished end-state',
  'Sync does not measure closure',
  'Sync does not measure closure for the customer',
  'Sync may surface a control/direction-power note or a closure/end-state note',
  'does not collapse closure into control',
  'does not collapse closure into cash',
  'does not collapse closure into accountability',
  'does not rewrite Ownership Is Not Control',
  'does not rewrite Cleared Is Not Complete',
  'does not rewrite Complete Is Not Verified',
  'named answerability for an outcome within a defined scope and window',
  'practice record that says control is closure',
  'control as closure',
  '/insights/ownership-is-not-control',
  'who can steer capital allocation, operating priorities, or binding plant moves in practice',
  'practical steering power over the asset/plant, not the formal decision-rights charter alone',
  'Control is the practical power to set or change direction of the asset or plant',
  'Complete is not accepted',
  'every named acceptance criterion for a case satisfied under a named measurement window',
  'acceptance completeness, not a closed stamp and not a human sign-off',
  'named human formally accepting that acceptance pack (or the case outcome it covers) under a named decision window',
  'human acceptance/sign-off, not merely that the criteria measured as met',
  'A complete acceptance pack without named human acceptance is not accepted',
  'A named human acceptance without every named acceptance criterion satisfied under the measurement window is not complete',
  'A firm with completeness can still lack acceptance',
  'A firm with acceptance can still lack completeness',
  'An acceptance note alone proves neither',
  'An acceptance note is not a green',
  'The acceptance pack is not the sign-off',
  'What an acceptance note is allowed to be',
  'Measured completeness is not named acceptance',
  'Sync does not measure acceptance',
  'Sync does not measure acceptance for the customer',
  'Sync may surface a completeness/acceptance-pack note or an acceptance/sign-off note',
  'does not collapse acceptance into completeness',
  'does not collapse complete into accepted',
  'does not collapse accepted into authorized',
  'does not rewrite Closure Is Not Complete',
  'does not rewrite Assured Is Not Proven',
  'does not rewrite Human Decision Is Not Optional',
  'does not rewrite Proof Is Not Authorization',
  'practice record that says complete is accepted',
  'complete as accepted',
  'separates measured completeness from named acceptance',
  '/insights/closure-is-not-complete',
  '/insights/proof-is-not-authorization',
  '/insights/assured-is-not-proven',
];
for (const required of acceptedPageRequired) {
  if (!acceptedPage.includes(required)) {
    fail(`complete-is-not-accepted page must include ${required}`);
  }
}

if (
  !acceptancePage.includes('The series continues with') ||
  !acceptancePage.includes('/insights/complete-is-not-accepted')
) {
  fail('closure-is-not-complete must point the series forward to complete-is-not-accepted');
}

for (const slug of [
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes("'accepted-is-not-verified'")) {
    fail(`${slug} related reading must cite accepted-is-not-verified`);
  }
}

const signoffBlock = stepBlock('accepted-is-not-verified');
for (const required of ['complete-is-not-accepted', ...acceptedReadingRequired]) {
  if (!signoffBlock.includes(`'${required}'`)) {
    fail(`accepted-is-not-verified related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(signoffBlock)) {
  fail('accepted-is-not-verified related reading must include the Strategic Pilot');
}
if (signoffBlock.includes("next: 'strategic-pilot'")) {
  fail('accepted-is-not-verified next step is the Field Manual');
}

const signoffPage = read('app/insights/accepted-is-not-verified/page.tsx');
for (const required of [
  ...acceptedPageRequired,
  'Accepted is not verified',
  'human acceptance/sign-off, not an independent check',
  'independent check of that pack or outcome against named evidence under a named measurement window',
  'verification against evidence, not the acceptance stamp and not measured completeness alone',
  'A named human acceptance without an independent evidence check is not verified',
  'An independent verification without named human acceptance of the pack is not accepted',
  'A firm with acceptance can still lack verification',
  'A firm with verification can still lack acceptance',
  'A verification note alone proves neither',
  'A verification note is not a green',
  'The sign-off is not the evidence check',
  'What a verification note is allowed to be',
  'Named acceptance is not independent verification',
  'Sync does not measure verification',
  'Sync does not measure verification for the customer',
  'Sync does not accept or verify for the customer',
  'Sync may surface an acceptance/sign-off note or a verification/evidence-check note',
  'does not collapse verification into acceptance',
  'does not collapse accepted into verified',
  'does not collapse verified into assured',
  'does not collapse verified into proven',
  'does not rewrite Complete Is Not Accepted',
  'practice record that says accepted is verified',
  'accepted as verified',
  'separates named human acceptance from verification',
  '/insights/complete-is-not-accepted',
  'Complete Is Not Verified separates measured completeness from verification',
]) {
  if (!signoffPage.includes(required)) {
    fail(`accepted-is-not-verified page must include ${required}`);
  }
}

if (
  !acceptedPage.includes('The series continues with') ||
  !acceptedPage.includes('/insights/accepted-is-not-verified')
) {
  fail('complete-is-not-accepted must point the series forward to accepted-is-not-verified');
}

for (const slug of ['accepted-is-not-verified', ...[
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]]) {
  if (!stepBlock(slug).includes("'verified-is-not-authorized'")) {
    fail(`${slug} related reading must cite verified-is-not-authorized`);
  }
}

const authorizedBlock = stepBlock('verified-is-not-authorized');
for (const required of ['accepted-is-not-verified', 'complete-is-not-accepted', ...acceptedReadingRequired]) {
  if (!authorizedBlock.includes(`'${required}'`)) {
    fail(`verified-is-not-authorized related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(authorizedBlock)) {
  fail('verified-is-not-authorized related reading must include the Strategic Pilot');
}
if (authorizedBlock.includes("next: 'strategic-pilot'")) {
  fail('verified-is-not-authorized next step is the Field Manual');
}

const authorizedPage = read('app/insights/verified-is-not-authorized/page.tsx');
for (const required of [
  ...[
    'Accepted is not verified',
    'human acceptance/sign-off, not an independent check',
    'independent check of that pack or outcome against named evidence under a named measurement window',
    'verification against evidence, not the acceptance stamp and not measured completeness alone',
    'A named human acceptance without an independent evidence check is not verified',
    'An independent verification without named human acceptance of the pack is not accepted',
    'A firm with acceptance can still lack verification',
    'A firm with verification can still lack acceptance',
    'A verification note alone proves neither',
    'A verification note is not a green',
    'The sign-off is not the evidence check',
    'What a verification note is allowed to be',
    'Named acceptance is not independent verification',
    'Sync does not measure verification',
    'Sync does not measure verification for the customer',
    'Sync does not accept or verify for the customer',
    'Sync may surface an acceptance/sign-off note or a verification/evidence-check note',
    'does not collapse verification into acceptance',
    'does not collapse accepted into verified',
    'does not collapse verified into assured',
    'does not collapse verified into proven',
    'does not rewrite Complete Is Not Accepted',
    'practice record that says accepted is verified',
    'accepted as verified',
    'separates named human acceptance from verification',
    '/insights/complete-is-not-accepted',
    'Complete Is Not Verified separates measured completeness from verification',
  ],
  ...acceptedPageRequired,
  'Verified is not authorized',
  'verification against evidence, not permission to act',
  'authorization to act, not merely that evidence checked out',
  'named human (or named accountable role) granting permission to execute a binding plant/operating/capital move under a named decision window',
  'An independent verification without named authorization is not authorized',
  'A named authorization without an independent evidence check is not verified',
  'A firm with verification can still lack authorization',
  'A firm with authorization can still lack verification',
  'An authorization note alone proves neither',
  'An authorization note is not a green',
  'The evidence check is not the permission to act',
  'What an authorization note is allowed to be',
  'Independent verification is not named authorization',
  'Sync does not measure authorization',
  'Sync does not measure authorization for the customer',
  'Sync does not verify or authorize for the customer',
  'Sync may surface a verification/evidence-check note or an authorization/permission-to-act note',
  'does not collapse authorization into verification',
  'does not collapse verified into authorized',
  'does not collapse authorized into assured',
  'does not collapse authorized into proven',
  'does not rewrite Accepted Is Not Verified',
  'practice record that says verified is authorized',
  'verified as authorized',
  'separates independent verification from authorization',
  '/insights/accepted-is-not-verified',
]) {
  if (!authorizedPage.includes(required)) {
    fail(`verified-is-not-authorized page must include ${required}`);
  }
}

if (
  !signoffPage.includes('The series continues with') ||
  !signoffPage.includes('/insights/verified-is-not-authorized')
) {
  fail('accepted-is-not-verified must point the series forward to verified-is-not-authorized');
}


for (const slug of ['verified-is-not-authorized', 'action-is-not-execution', ...[
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]]) {
  if (!stepBlock(slug).includes("'authorized-is-not-executed'")) {
    fail(`${slug} related reading must cite authorized-is-not-executed`);
  }
}

const executedBlock = stepBlock('authorized-is-not-executed');
for (const required of ['verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', ...acceptedReadingRequired]) {
  if (!executedBlock.includes(`'${required}'`)) {
    fail(`authorized-is-not-executed related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(executedBlock)) {
  fail('authorized-is-not-executed related reading must include the Strategic Pilot');
}
if (executedBlock.includes("next: 'strategic-pilot'")) {
  fail('authorized-is-not-executed next step is the Field Manual');
}

const executedPageRequired = [
  'Accepted is not verified',
  'human acceptance/sign-off, not an independent check',
  'independent check of that pack or outcome against named evidence under a named measurement window',
  'verification against evidence, not the acceptance stamp and not measured completeness alone',
  'A named human acceptance without an independent evidence check is not verified',
  'An independent verification without named human acceptance of the pack is not accepted',
  'A firm with acceptance can still lack verification',
  'A firm with verification can still lack acceptance',
  'A verification note alone proves neither',
  'A verification note is not a green',
  'The sign-off is not the evidence check',
  'What a verification note is allowed to be',
  'Named acceptance is not independent verification',
  'Sync does not measure verification',
  'Sync does not measure verification for the customer',
  'Sync does not accept or verify for the customer',
  'Sync may surface an acceptance/sign-off note or a verification/evidence-check note',
  'does not collapse verification into acceptance',
  'does not collapse accepted into verified',
  'does not collapse verified into assured',
  'does not collapse verified into proven',
  'does not rewrite Complete Is Not Accepted',
  'practice record that says accepted is verified',
  'accepted as verified',
  'separates named human acceptance from verification',
  '/insights/complete-is-not-accepted',
  'Complete Is Not Verified separates measured completeness from verification',
  ...acceptedPageRequired,
  'Verified is not authorized',
  'verification against evidence, not permission to act',
  'authorization to act, not merely that evidence checked out',
  'named human (or named accountable role) granting permission to execute a binding plant/operating/capital move under a named decision window',
  'An independent verification without named authorization is not authorized',
  'A named authorization without an independent evidence check is not verified',
  'A firm with verification can still lack authorization',
  'A firm with authorization can still lack verification',
  'An authorization note alone proves neither',
  'An authorization note is not a green',
  'The evidence check is not the permission to act',
  'What an authorization note is allowed to be',
  'Independent verification is not named authorization',
  'Sync does not measure authorization',
  'Sync does not measure authorization for the customer',
  'Sync does not verify or authorize for the customer',
  'Sync may surface a verification/evidence-check note or an authorization/permission-to-act note',
  'does not collapse authorization into verification',
  'does not collapse verified into authorized',
  'does not collapse authorized into assured',
  'does not collapse authorized into proven',
  'does not rewrite Accepted Is Not Verified',
  'practice record that says verified is authorized',
  'verified as authorized',
  'separates independent verification from authorization',
  '/insights/accepted-is-not-verified',
  'Authorized is not executed',
  'authorization to act, not proof the move happened',
  'execution happened, not merely that someone said yes',
  'named execution window (who/what/when/where against plant or operating evidence)',
  'A named authorization without execution evidence is not executed',
  'Plant activity without a named authorization is not authorized',
  'A status light, ticket state, or CMMS checkbox is neither',
  'A firm with authorization can still lack execution',
  'A firm with execution can still lack authorization',
  'An execution note alone proves neither',
  'An execution note is not a green',
  'The permission to act is not the completed move',
  'What an execution note is allowed to be',
  'Named authorization is not completed execution',
  'Sync does not authorize or execute for the customer',
  'Sync may surface an authorization/permission-to-act note or an execution/completed-move note',
  'does not collapse execution into authorization',
  'does not collapse authorized into executed',
  'does not collapse executed into results',
  'does not rewrite Verified Is Not Authorized',
  'does not rewrite Action Is Not Execution',
  'does not rewrite Strategy Is Not Execution',
  'does not rewrite Execution Is Not Results',
  'practice record that says authorized is executed',
  'authorized as executed',
  'separates named permission from completed execution',
  '/insights/verified-is-not-authorized',
  'does not collapse into Verified Is Not Authorized',
  'does not collapse into Action Is Not Execution',
  'does not collapse into Strategy Is Not Execution',
  'does not collapse into Execution Is Not Results',
  'does not collapse into Recommend Is Not Authorize',
  'does not collapse into Proof Is Not Authorization',
  'does not collapse into Human Decision Is Not Optional',
  'Evidence from the plant beats the authorization note when the note is being used as execution',
  'Evidence from the plant beats the execution note when the note is being used as authorization',
  '/insights/action-is-not-execution',
  '/insights/strategy-is-not-execution',
  '/insights/execution-is-not-results',
  '/insights/recommend-is-not-authorize',
  '/insights/proof-is-not-authorization',
  '/insights/human-decision-is-not-optional',
  '/insights/cleared-is-not-complete',
  '/insights/ready-is-not-cleared',
];
const executedPage = read('app/insights/authorized-is-not-executed/page.tsx');
for (const required of executedPageRequired) {
  if (!executedPage.includes(required)) {
    fail(`authorized-is-not-executed page must include ${required}`);
  }
}

const closedPageRequired = [
  ...executedPageRequired,
  'Executed is not closed',
  'execution happened, not that the case is finished administratively',
  'formally closing the case/work/exception under a named closure window',
  'administrative/work-state closure, not merely that the move ran',
  'Execution evidence without named closure is not closed',
  'A closed stamp without execution evidence is not executed',
  'A CMMS checkbox, ticket state, or status light is neither',
  'A firm with execution can still lack closure',
  'A firm with closure can still lack execution',
  'A closure note alone proves neither',
  'A closure note is not a green',
  'The completed move is not the closed case',
  'What a closure note is allowed to be',
  'Completed execution is not named closure',
  'Sync does not execute or close cases for the customer',
  'Sync does not authorize, execute, or close for the customer',
  'Sync may surface an execution/completed-move note or a closure/end-state note',
  'does not collapse closure into execution',
  'does not collapse executed into closed',
  'does not rewrite Authorized Is Not Executed',
  'does not rewrite Closure Is Not Complete',
  'does not rewrite Control Is Not Closure',
  'does not rewrite Accountability Is Not Closure',
  'does not rewrite Cleared Is Not Complete',
  'does not rewrite Ready Is Not Cleared',
  'does not rewrite Closure Is Not Cash',
  'practice record that says executed is closed',
  'executed as closed',
  'separates completed execution from named closure',
  '/insights/authorized-is-not-executed',
  'does not collapse into Authorized Is Not Executed',
  'does not collapse into Closure Is Not Complete',
  'does not collapse into Control Is Not Closure',
  'does not collapse into Accountability Is Not Closure',
  'does not collapse into Cleared Is Not Complete',
  'does not collapse into Ready Is Not Cleared',
  'does not collapse into Closure Is Not Cash',
  'Evidence from the plant beats the execution note when the note is being used as closure',
  'Evidence from the plant beats the closure note when the note is being used as execution',
  '/insights/closure-is-not-complete',
  '/insights/control-is-not-closure',
  '/insights/accountability-is-not-closure',
  '/insights/closure-is-not-cash',
  '/insights/evidence-lineage-is-not-optional',
  'Evidence lineage is not optional',
  'Human decision is not optional',
];
const closedPage = read('app/insights/executed-is-not-closed/page.tsx');
for (const required of closedPageRequired) {
  if (!closedPage.includes(required)) {
    fail(`executed-is-not-closed page must include ${required}`);
  }
}

if (
  !authorizedPage.includes('The series continues with') ||
  !authorizedPage.includes('/insights/authorized-is-not-executed')
) {
  fail('verified-is-not-authorized must point the series forward to authorized-is-not-executed');
}

for (const slug of ['authorized-is-not-executed', 'verified-is-not-authorized', 'action-is-not-execution', ...[
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]]) {
  if (!stepBlock(slug).includes("'executed-is-not-closed'")) {
    fail(`${slug} related reading must cite executed-is-not-closed`);
  }
}

const closedBlock = stepBlock('executed-is-not-closed');
for (const required of ['authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', ...acceptedReadingRequired]) {
  if (!closedBlock.includes(`'${required}'`)) {
    fail(`executed-is-not-closed related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(closedBlock)) {
  fail('executed-is-not-closed related reading must include the Strategic Pilot');
}
if (closedBlock.includes("next: 'strategic-pilot'")) {
  fail('executed-is-not-closed next step is the Field Manual');
}

if (
  !executedPage.includes('The series continues with') ||
  !executedPage.includes('/insights/executed-is-not-closed')
) {
  fail('authorized-is-not-executed must point the series forward to executed-is-not-closed');
}


const resolvedPageRequired = [
  ...closedPageRequired,
  'Closed is not resolved',
  'administrative closure of the record, not proof the underlying defect, risk, or exception is gone',
  'the problem is gone, not merely that someone closed the ticket',
  'A named closure without resolution evidence is not resolved',
  'Plant activity that clears a symptom without a named closure is not closed',
  'A firm with closure can still lack resolution',
  'A firm with resolution can still lack closure',
  'A resolution note alone proves neither',
  'A resolution note is not a green',
  'The closed record is not the resolved exception',
  'What a resolution note is allowed to be',
  'Named closure is not resolution evidence',
  'Sync does not close or resolve cases for the customer',
  'Sync must not auto-close, auto-authorize, or auto-resolve',
  'Sync may surface a closure/end-state note or a resolution/cleared-exception note',
  'does not collapse resolution into closure',
  'does not collapse closed into resolved',
  'does not rewrite Executed Is Not Closed',
  'does not rewrite Closure Is Not Complete',
  'does not rewrite Control Is Not Closure',
  'does not rewrite Cleared Is Not Complete',
  'does not rewrite Ready Is Not Cleared',
  'does not rewrite Closure Is Not Cash',
  'does not rewrite Complete Is Not Accepted',
  'does not rewrite Accepted Is Not Verified',
  'practice record that says closed is resolved',
  'closed as resolved',
  'separates named administrative closure from resolution evidence',
  '/insights/executed-is-not-closed',
  'does not collapse into Executed Is Not Closed',
  'does not collapse into Closure Is Not Complete',
  'does not collapse into Control Is Not Closure',
  'does not collapse into Cleared Is Not Complete',
  'does not collapse into Ready Is Not Cleared',
  'does not collapse into Closure Is Not Cash',
  'does not collapse into Complete Is Not Accepted',
  'does not collapse into Accepted Is Not Verified',
  'Evidence from the plant beats the closure note when the note is being used as resolution',
  'Evidence from the plant beats the resolution note when the note is being used as closure',
  'Sync does not measure resolution',
  'Sync does not measure resolution for the customer',
  'Recommend is not authorize',
  'Surfacing is still a read',
  'Sync refuses false precision',
  'Direct plant execute stays off',
  'CMMS write-back is not a live product path',
  'Billing write-back is not a live product path',
  'Evidence lineage is not optional',
  'Human decision is not optional',
];
const resolvedPage = read('app/insights/closed-is-not-resolved/page.tsx');
for (const required of resolvedPageRequired) {
  if (!resolvedPage.includes(required)) {
    fail(`closed-is-not-resolved page must include ${required}`);
  }
}

for (const slug of ['executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'action-is-not-execution', ...[
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]]) {
  if (!stepBlock(slug).includes("'closed-is-not-resolved'")) {
    fail(`${slug} related reading must cite closed-is-not-resolved`);
  }
}

const resolvedBlock = stepBlock('closed-is-not-resolved');
for (const required of ['executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', ...acceptedReadingRequired]) {
  if (!resolvedBlock.includes(`'${required}'`)) {
    fail(`closed-is-not-resolved related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(resolvedBlock)) {
  fail('closed-is-not-resolved related reading must include the Strategic Pilot');
}
if (resolvedBlock.includes("next: 'strategic-pilot'")) {
  fail('closed-is-not-resolved next step is the Field Manual');
}

if (
  !closedPage.includes('The series continues with') ||
  !closedPage.includes('/insights/closed-is-not-resolved')
) {
  fail('executed-is-not-closed must point the series forward to closed-is-not-resolved');
}

const provenPageRequired = [
  ...resolvedPageRequired,
  'Resolved is not proven',
  'the instance is gone, not merely that someone closed the ticket',
  'the claim that it stays gone is evidenced, not assumed from a single clear',
  'A named resolution without proof criteria is not proven',
  'A lab, model, or simulation result without plant resolution of the live exception is not resolved',
  'A CMMS checkbox, ticket state, status light, or one-off clear is neither',
  'A firm with resolution can still lack proof',
  'A firm with proof can still lack resolution',
  'A proof note alone proves neither',
  'A proof note is not a green',
  'The cleared instance is not the proven failure mode',
  'What a proof note is allowed to be',
  'Named resolution is not proof',
  'Sync does not resolve or prove cases for the customer',
  'Sync must not auto-close, auto-authorize, auto-resolve, or auto-prove',
  'Sync may surface a resolution/cleared-exception note or a proof/non-recurrence note',
  'does not collapse proof into resolution',
  'does not collapse resolved into proven',
  'does not rewrite Closed Is Not Resolved',
  'does not rewrite Simulation Is Not Proof',
  'does not rewrite Proof Is Not Authorization',
  'does not rewrite Verified Is Not Assured',
  'does not rewrite Accepted Is Not Verified',
  'does not rewrite Complete Is Not Accepted',
  'does not rewrite Cleared Is Not Complete',
  'does not rewrite Ready Is Not Cleared',
  'practice record that says resolved is proven',
  'resolved as proven',
  'separates a cleared instance from evidence the failure mode will not recur',
  '/insights/closed-is-not-resolved',
  '/insights/simulation-is-not-proof',
  'does not collapse into Closed Is Not Resolved',
  'does not collapse into Simulation Is Not Proof',
  'does not collapse into Proof Is Not Authorization',
  'does not collapse into Verified Is Not Assured',
  'does not collapse into Accepted Is Not Verified',
  'does not collapse into Complete Is Not Accepted',
  'does not collapse into Cleared Is Not Complete',
  'does not collapse into Ready Is Not Cleared',
  'Evidence from the plant beats the resolution note when the note is being used as proof',
  'Evidence from the plant beats the proof note when the note is being used as resolution',
  'Sync does not measure proof',
  'Sync does not measure proof for the customer',
  'Recommend is not authorize',
  'Surfacing is still a read',
  'Sync refuses false precision',
  'Direct plant execute stays off',
  'CMMS write-back is not a live product path',
  'Billing write-back is not a live product path',
  'Evidence lineage is not optional',
  'Human decision is not optional',
];
const provenPage = read('app/insights/resolved-is-not-proven/page.tsx');
for (const required of provenPageRequired) {
  if (!provenPage.includes(required)) {
    fail(`resolved-is-not-proven page must include ${required}`);
  }
}

for (const slug of ['closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'action-is-not-execution', 'simulation-is-not-proof', ...[
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]]) {
  if (!stepBlock(slug).includes("'resolved-is-not-proven'")) {
    fail(`${slug} related reading must cite resolved-is-not-proven`);
  }
}

const provenBlock = stepBlock('resolved-is-not-proven');
for (const required of ['closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!provenBlock.includes(`'${required}'`)) {
    fail(`resolved-is-not-proven related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(provenBlock)) {
  fail('resolved-is-not-proven related reading must include the Strategic Pilot');
}
if (provenBlock.includes("next: 'strategic-pilot'")) {
  fail('resolved-is-not-proven next step is the Field Manual');
}

if (
  !resolvedPage.includes('The series continues with') ||
  !resolvedPage.includes('/insights/resolved-is-not-proven')
) {
  fail('closed-is-not-resolved must point the series forward to resolved-is-not-proven');
}


const trustedPageRequired = [
  ...provenPageRequired,
  'Proven is not trusted',
  'reliance is granted, not inferred from proof alone',
  'who trusts what, for which assets/classes, until when, under what revoke conditions',
  'A named proof without a named trust decision (owner, scope, duration, revoke) is not trusted',
  'a status of trust, tribal confidence, or vendor assurance without proof criteria against plant reality is not proven',
  'A firm with proof can still lack trust',
  'A firm with trust can still lack proof',
  'A trust note alone proves neither',
  'A trust note is not a green',
  'The proven claim is not the trusted reliance',
  'What a trust note is allowed to be',
  'Named proof is not trust',
  'Sync does not prove or grant trust for the customer',
  'Sync must not auto-close, auto-authorize, auto-resolve, auto-prove, or auto-trust',
  'Sync may surface a proof/non-recurrence note or a trust/reliance note',
  'does not collapse trust into proof',
  'does not collapse proven into trusted',
  'does not rewrite Resolved Is Not Proven',
  'does not rewrite Verified Is Not Authorized',
  'practice record that says proven is trusted',
  'proven as trusted',
  'separates a proven non-recurrence claim from a standing reliance decision',
  '/insights/resolved-is-not-proven',
  'does not collapse into Resolved Is Not Proven',
  'does not collapse into Verified Is Not Authorized',
  'Evidence from the plant beats the proof note when the note is being used as trust',
  'Evidence from the plant beats the trust note when the note is being used as proof',
  'Sync does not measure trust',
  'Sync does not measure trust for the customer',
  'treat proven as trusted as Learning credit',
];
const trustedPage = read('app/insights/proven-is-not-trusted/page.tsx');
for (const required of trustedPageRequired) {
  if (!trustedPage.includes(required)) {
    fail(`proven-is-not-trusted page must include ${required}`);
  }
}

for (const slug of ['resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'action-is-not-execution', 'simulation-is-not-proof', ...[
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]]) {
  if (!stepBlock(slug).includes("'proven-is-not-trusted'")) {
    fail(`${slug} related reading must cite proven-is-not-trusted`);
  }
}

const trustedBlock = stepBlock('proven-is-not-trusted');
for (const required of ['resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!trustedBlock.includes(`'${required}'`)) {
    fail(`proven-is-not-trusted related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(trustedBlock)) {
  fail('proven-is-not-trusted related reading must include the Strategic Pilot');
}
if (trustedBlock.includes("next: 'strategic-pilot'")) {
  fail('proven-is-not-trusted next step is the Field Manual');
}

if (
  !provenPage.includes('The series continues with') ||
  !provenPage.includes('/insights/proven-is-not-trusted')
) {
  fail('resolved-is-not-proven must point the series forward to proven-is-not-trusted');
}


const adoptedPageRequired = [
  ...trustedPageRequired,
  'Trusted is not adopted',
  'reliance has become operating practice, not a signed note',
  'procedures, training, CMMS job plans, spare strategy, shift handoffs, and named owners who practice it',
  'a proven claim may be relied on for a named scope and duration without re-proving every instance',
  'A trust note alone is not adoption',
  'An adoption roll-out note alone is not trust',
  'A firm can trust a claim and still not adopt it',
  'A firm can adopt a practice and still lack a named trust decision',
  'The trusted reliance is not the adopted practice',
  'What an adoption note is allowed to be',
  'Named trust is not adoption',
  'Sync does not measure adoption',
  'Sync does not measure adoption for the customer',
  'Sync does not measure trust or adoption for the customer',
  'Sync must not auto-trust or auto-adopt',
  'Sync may surface a trust/reliance note or an adoption/operating-practice note',
  'does not collapse adoption into trust',
  'does not collapse trusted into adopted',
  'does not rewrite Proven Is Not Trusted',
  'does not rewrite Learning Is Not Judgment',
  'practice record that says trusted is adopted',
  'trusted as adopted',
  'separates a standing reliance decision from operating practice',
  '/insights/proven-is-not-trusted',
  'does not collapse into Proven Is Not Trusted',
  'does not collapse into Learning Is Not Judgment',
  'Evidence from the plant beats the trust note when the note is being used as adoption',
  'Evidence from the plant beats the adoption note when the note is being used as trust',
  'treat trusted as adopted as Learning credit',
];
const adoptedPage = read('app/insights/trusted-is-not-adopted/page.tsx');
for (const required of adoptedPageRequired) {
  if (!adoptedPage.includes(required)) {
    fail(`trusted-is-not-adopted page must include ${required}`);
  }
}

for (const slug of ['proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'action-is-not-execution', 'simulation-is-not-proof', ...[
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]]) {
  if (!stepBlock(slug).includes('trusted-is-not-adopted')) {
    fail(`${slug} related reading must cite trusted-is-not-adopted`);
  }
}

const adoptedBlock = stepBlock('trusted-is-not-adopted');
for (const required of ['proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!adoptedBlock.includes(`'${required}'`)) {
    fail(`trusted-is-not-adopted related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(adoptedBlock)) {
  fail('trusted-is-not-adopted related reading must include the Strategic Pilot');
}
if (adoptedBlock.includes("next: 'strategic-pilot'")) {
  fail('trusted-is-not-adopted next step is the Field Manual');
}

if (
  !trustedPage.includes('The series continues with') ||
  !trustedPage.includes('/insights/trusted-is-not-adopted')
) {
  fail('proven-is-not-trusted must point the series forward to trusted-is-not-adopted');
}



const sustainedPageRequired = [
  ...adoptedPageRequired,
  'Adopted is not sustained',
  'the practice stays the default after the rollout spotlight ends, not only during the change window',
  'who keeps it alive, for which assets/classes, measured how, until when, under what revoke or re-train conditions',
  'An adoption roll-out note alone is not sustainment',
  'A sustainment KPI alone is not adoption',
  'A firm can adopt a practice and still lose it when the sponsor leaves, the audit ends, or the next outage hits',
  'A firm can sustain a thin ritual and still never have adopted the trusted claim as real operating practice',
  'The adopted practice is not the sustained practice',
  'What a sustainment note is allowed to be',
  'Named adoption is not sustainment',
  'Sync does not measure sustainment',
  'Sync does not measure sustainment for the customer',
  'Sync does not measure adoption or sustainment for the customer',
  'Sync must not auto-adopt or auto-sustain',
  'Sync may surface an adoption/operating-practice note or a sustainment/hold note',
  'does not collapse sustainment into adoption',
  'does not collapse adopted into sustained',
  'does not rewrite Trusted Is Not Adopted',
  'does not rewrite Ownership Is Not Control',
  'practice record that says adopted is sustained',
  'adopted as sustained',
  'separates adopted operating practice from sustainment under named pressure',
  '/insights/trusted-is-not-adopted',
  'does not collapse into Trusted Is Not Adopted',
  'does not collapse into Ownership Is Not Control',
  'does not collapse into Control Is Not Closure',
  'does not collapse into Closure Is Not Complete',
  'does not collapse into Complete Is Not Accepted',
  'does not collapse into Accepted Is Not Verified',
  'does not collapse into Verified Is Not Authorized',
  'does not collapse into Authorized Is Not Executed',
  'does not collapse into Executed Is Not Closed',
  'does not collapse into Closed Is Not Resolved',
  'does not collapse into Resolved Is Not Proven',
  'does not collapse into Proven Is Not Trusted',
  'Evidence from the plant beats the adoption note when the note is being used as sustainment',
  'Evidence from the plant beats the sustainment note when the note is being used as adoption',
  'treat adopted as sustained as Learning credit',
  'Sync refuses to pretend adoption or sustainment is a status light',
  'reliance has become operating practice, not a signed note',
];
const sustainedPage = read('app/insights/adopted-is-not-sustained/page.tsx');
for (const required of sustainedPageRequired) {
  if (!sustainedPage.includes(required)) {
    fail(`adopted-is-not-sustained page must include ${required}`);
  }
}

for (const slug of ['trusted-is-not-adopted', 'proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'action-is-not-execution', 'simulation-is-not-proof', ...[
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]]) {
  if (!stepBlock(slug).includes('adopted-is-not-sustained')) {
    fail(`${slug} related reading must cite adopted-is-not-sustained`);
  }
}

const sustainedBlock = stepBlock('adopted-is-not-sustained');
for (const required of ['trusted-is-not-adopted', 'proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!sustainedBlock.includes(`'${required}'`)) {
    fail(`adopted-is-not-sustained related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(sustainedBlock)) {
  fail('adopted-is-not-sustained related reading must include the Strategic Pilot');
}
if (sustainedBlock.includes("next: 'strategic-pilot'")) {
  fail('adopted-is-not-sustained next step is the Field Manual');
}

if (
  !adoptedPage.includes('The series continues with') ||
  !adoptedPage.includes('/insights/adopted-is-not-sustained')
) {
  fail('trusted-is-not-adopted must point the series forward to adopted-is-not-sustained');
}



const scaledPageRequired = [
  ...sustainedPageRequired,
  'Sustained is not scaled',
  'deliberately extended across named additional sites, crews, asset classes, or operating contexts',
  'named owners, transfer conditions, and evidence it still holds under the new load',
  'not a single-site sustainment KPI copied into a slide',
  'A firm can sustain a practice on one line/crew and still not have scaled it',
  'A firm can push a roll-out across sites and still never have sustained it under named pressure on the first site',
  'A sustainment KPI alone is not scale',
  'A multi-site roll-out plan alone is not sustainment',
  'The sustained practice is not the scaled practice',
  'What a scale note is allowed to be',
  'Named sustainment is not scale',
  'Sync does not measure scale',
  'Sync does not measure scale for the customer',
  'Sync does not measure sustainment or scale for the customer',
  'Sync must not auto-sustain or auto-scale',
  'Sync may surface a sustainment/hold note or a scale/transfer note',
  'does not collapse scale into sustainment',
  'does not collapse sustained into scaled',
  'does not rewrite Adopted Is Not Sustained',
  'does not rewrite Trusted Is Not Adopted',
  'does not rewrite Proven Is Not Trusted',
  'does not rewrite Ownership Is Not Control',
  'does not rewrite Control Is Not Closure',
  'practice record that says sustained is scaled',
  'sustained as scaled',
  'separates a sustained practice from deliberate extension across named additional contexts',
  '/insights/adopted-is-not-sustained',
  'does not collapse into Adopted Is Not Sustained',
  'does not collapse into Trusted Is Not Adopted',
  'does not collapse into Proven Is Not Trusted',
  'does not collapse into Ownership Is Not Control',
  'does not collapse into Control Is Not Closure',
  'Evidence from the plant beats the sustainment note when the note is being used as scale',
  'Evidence from the plant beats the scale note when the note is being used as sustainment',
  'treat sustained as scaled as Learning credit',
  'Sync refuses to pretend sustainment or scale is a status light',
];
const scaledPage = read('app/insights/sustained-is-not-scaled/page.tsx');
for (const required of scaledPageRequired) {
  if (!scaledPage.includes(required)) {
    fail(`sustained-is-not-scaled page must include ${required}`);
  }
}

for (const slug of [
  'adopted-is-not-sustained',
  'trusted-is-not-adopted',
  'proven-is-not-trusted',
  'resolved-is-not-proven',
  'closed-is-not-resolved',
  'executed-is-not-closed',
  'authorized-is-not-executed',
  'verified-is-not-authorized',
  'action-is-not-execution',
  'simulation-is-not-proof',
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes('sustained-is-not-scaled')) {
    fail(`${slug} related reading must cite sustained-is-not-scaled`);
  }
}

const scaledBlock = stepBlock('sustained-is-not-scaled');
for (const required of ['adopted-is-not-sustained', 'trusted-is-not-adopted', 'proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!scaledBlock.includes(`'${required}'`)) {
    fail(`sustained-is-not-scaled related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(scaledBlock)) {
  fail('sustained-is-not-scaled related reading must include the Strategic Pilot');
}
if (scaledBlock.includes("next: 'strategic-pilot'")) {
  fail('sustained-is-not-scaled next step is the Field Manual');
}

if (
  !sustainedPage.includes('The series continues with') ||
  !sustainedPage.includes('/insights/sustained-is-not-scaled')
) {
  fail('adopted-is-not-sustained must point the series forward to sustained-is-not-scaled');
}


const compoundedPageRequired = [
  ...scaledPageRequired,
  'Scaled is not compounded',
  'each new site/crew/class makes the next one cheaper, faster, or more reliable',
  'named learning, tooling, staffing, and exception paths transfer and accumulate',
  'unit economics and failure modes improve with volume',
  'not a linear headcount multiply of the same fragile setup',
  'A firm can scale a practice across ten sites and still not have compounded it',
  'A firm can compound learning on one line and still never have scaled it',
  'A multi-site roll-out alone is not compounding',
  'A better KPI chart alone is not scale',
  'The scaled practice is not the compounded practice',
  'What a compounding note is allowed to be',
  'Named scale is not compounding',
  'Sync does not measure compounding',
  'Sync does not measure compounding for the customer',
  'Sync does not measure scale or compounding for the customer',
  'Sync must not auto-scale or auto-compound',
  'Sync may surface a scale/transfer note or a compounding/accumulation note',
  'does not collapse compounding into scale',
  'does not collapse scaled into compounded',
  'does not rewrite Sustained Is Not Scaled',
  'does not rewrite Adopted Is Not Sustained',
  'does not rewrite Trusted Is Not Adopted',
  'does not rewrite Liquidity Is Not Flexibility',
  'does not rewrite Cash Is Not Margin',
  'practice record that says scaled is compounded',
  'scaled as compounded',
  'separates a scaled practice from compounding that accumulates across volume',
  '/insights/sustained-is-not-scaled',
  'does not collapse into Sustained Is Not Scaled',
  'does not collapse into Adopted Is Not Sustained',
  'does not collapse into Trusted Is Not Adopted',
  'does not collapse into Liquidity Is Not Flexibility',
  'does not collapse into Cash Is Not Margin',
  'Evidence from the plant beats the scale note when the note is being used as compounding',
  'Evidence from the plant beats the compounding note when the note is being used as scale',
  'treat scaled as compounded as Learning credit',
  'Sync refuses to pretend scale or compounding is a status light',
];
const compoundedPage = read('app/insights/scaled-is-not-compounded/page.tsx');
for (const required of compoundedPageRequired) {
  if (!compoundedPage.includes(required)) {
    fail(`scaled-is-not-compounded page must include ${required}`);
  }
}

for (const slug of [
  'sustained-is-not-scaled',
  'adopted-is-not-sustained',
  'trusted-is-not-adopted',
  'proven-is-not-trusted',
  'resolved-is-not-proven',
  'closed-is-not-resolved',
  'executed-is-not-closed',
  'authorized-is-not-executed',
  'verified-is-not-authorized',
  'action-is-not-execution',
  'simulation-is-not-proof',
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes('scaled-is-not-compounded')) {
    fail(`${slug} related reading must cite scaled-is-not-compounded`);
  }
}

const compoundedBlock = stepBlock('scaled-is-not-compounded');
for (const required of ['sustained-is-not-scaled', 'adopted-is-not-sustained', 'trusted-is-not-adopted', 'proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!compoundedBlock.includes(`'${required}'`)) {
    fail(`scaled-is-not-compounded related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(compoundedBlock)) {
  fail('scaled-is-not-compounded related reading must include the Strategic Pilot');
}
if (compoundedBlock.includes("next: 'strategic-pilot'")) {
  fail('scaled-is-not-compounded next step is the Field Manual');
}

if (
  !scaledPage.includes('The series continues with') ||
  !scaledPage.includes('/insights/scaled-is-not-compounded')
) {
  fail('sustained-is-not-scaled must point the series forward to scaled-is-not-compounded');
}


const ownedPageRequired = [
  ...compoundedPageRequired,
  'Compounded is not owned',
  'a named accountable owner can change, stop, transfer, audit, or withhold the compounding system',
  'playbooks, tooling, staffing rights, exception paths, residual claim on the learning',
  'clear authority and evidence the owner still holds it',
  'not the org somehow got better',
  'not a shared drive nobody owns',
  'not a KPI chart that improved while no one can redirect the machine',
  'A firm can compound learning across ten sites and still not own the compounding system',
  'A firm can own a practice tightly on one line and still never have compounded it',
  'Multi-site improvement alone is not ownership',
  'A better unit-cost chart alone is not ownership',
  'The compounded practice is not the owned practice',
  'What an ownership note is allowed to be',
  'Named compounding is not ownership',
  'Sync does not measure ownership',
  'Sync does not measure ownership for the customer',
  'Sync does not measure compounding or ownership for the customer',
  'Sync must not auto-compound or auto-assign ownership',
  'Sync may surface a compounding/accumulation note or an ownership/accountable-owner note',
  'does not collapse ownership into compounding',
  'does not collapse compounded into owned',
  'does not rewrite Scaled Is Not Compounded',
  'does not rewrite Sustained Is Not Scaled',
  'does not rewrite Adopted Is Not Sustained',
  'does not rewrite Ownership Is Not Control',
  'does not rewrite Control Is Not Closure',
  'does not rewrite Cash Is Not Margin',
  'practice record that says compounded is owned',
  'compounded as owned',
  'separates a compounded practice from ownership of the compounding system',
  '/insights/scaled-is-not-compounded',
  'does not collapse into Scaled Is Not Compounded',
  'does not collapse into Sustained Is Not Scaled',
  'does not collapse into Adopted Is Not Sustained',
  'does not collapse into Ownership Is Not Control',
  'does not collapse into Control Is Not Closure',
  'does not collapse into Cash Is Not Margin',
  'Evidence from the plant beats the compounding note when the note is being used as ownership',
  'Evidence from the plant beats the ownership note when the note is being used as compounding',
  'treat compounded as owned as Learning credit',
  'Sync refuses to pretend compounding or ownership is a status light',
];
const ownedPage = read('app/insights/compounded-is-not-owned/page.tsx');
for (const required of ownedPageRequired) {
  if (!ownedPage.includes(required)) {
    fail(`compounded-is-not-owned page must include ${required}`);
  }
}

for (const slug of [
  'scaled-is-not-compounded',
  'sustained-is-not-scaled',
  'adopted-is-not-sustained',
  'trusted-is-not-adopted',
  'proven-is-not-trusted',
  'resolved-is-not-proven',
  'closed-is-not-resolved',
  'executed-is-not-closed',
  'authorized-is-not-executed',
  'verified-is-not-authorized',
  'action-is-not-execution',
  'simulation-is-not-proof',
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes('compounded-is-not-owned')) {
    fail(`${slug} related reading must cite compounded-is-not-owned`);
  }
}

const ownedBlock = stepBlock('compounded-is-not-owned');
for (const required of ['scaled-is-not-compounded', 'sustained-is-not-scaled', 'adopted-is-not-sustained', 'trusted-is-not-adopted', 'proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!ownedBlock.includes(`'${required}'`)) {
    fail(`compounded-is-not-owned related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(ownedBlock)) {
  fail('compounded-is-not-owned related reading must include the Strategic Pilot');
}
if (ownedBlock.includes("next: 'strategic-pilot'")) {
  fail('compounded-is-not-owned next step is the Field Manual');
}

if (
  !compoundedPage.includes('The series continues with') ||
  !compoundedPage.includes('/insights/compounded-is-not-owned')
) {
  fail('scaled-is-not-compounded must point the series forward to compounded-is-not-owned');
}


const governedPageRequired = [
  ...ownedPageRequired,
  'Owned is not governed',
  'ownership sits inside explicit rules of engagement',
  'who may authorize, what evidence is required, when to escalate',
  'how exceptions are bounded',
  'how conflicts of interest are handled',
  'how the owner is audited or replaced',
  'safe, compliant, and transferable under stress',
  'not merely that a name is on it',
  'A firm can own a practice tightly on one line and still not govern it',
  'no escalation ladder, no dual-control on high-risk changes, no audit trail, no succession',
  'A firm can write governance binders and still not own the compounding system that actually runs the plant',
  'A name on a RACI alone is not governance',
  'A policy PDF alone is not ownership',
  'The owned practice is not the governed practice',
  'What a governance note is allowed to be',
  'Named ownership is not governance',
  'Sync does not measure governance',
  'Sync does not measure governance for the customer',
  'Sync does not measure ownership or governance for the customer',
  'Sync must not auto-assign owners or auto-approve governed actions',
  'Sync may surface an ownership/accountable-owner note or a governance/rules-of-engagement note',
  'does not collapse governance into ownership',
  'does not collapse owned into governed',
  'does not rewrite Compounded Is Not Owned',
  'does not rewrite Ownership Is Not Control',
  'does not rewrite Control Is Not Closure',
  'does not rewrite Accountability Is Not Ownership',
  'does not rewrite Verified Is Not Authorized',
  'does not rewrite Green Is Not Go',
  'practice record that says owned is governed',
  'owned as governed',
  'separates an owned compounding system from governance of that system',
  '/insights/compounded-is-not-owned',
  'does not collapse into Compounded Is Not Owned',
  'does not collapse into Ownership Is Not Control',
  'does not collapse into Control Is Not Closure',
  'does not collapse into Accountability Is Not Ownership',
  'does not collapse into Verified Is Not Authorized',
  'does not collapse into Green Is Not Go',
  'Evidence from the plant beats the ownership note when the note is being used as governance',
  'Evidence from the plant beats the governance note when the note is being used as ownership',
  'treat owned as governed as Learning credit',
  'Sync refuses to pretend ownership or governance is a status light',
];
const governedPage = read('app/insights/owned-is-not-governed/page.tsx');
for (const required of governedPageRequired) {
  if (!governedPage.includes(required)) {
    fail(`owned-is-not-governed page must include ${required}`);
  }
}

for (const slug of [
  'compounded-is-not-owned',
  'scaled-is-not-compounded',
  'sustained-is-not-scaled',
  'adopted-is-not-sustained',
  'trusted-is-not-adopted',
  'proven-is-not-trusted',
  'resolved-is-not-proven',
  'closed-is-not-resolved',
  'executed-is-not-closed',
  'authorized-is-not-executed',
  'verified-is-not-authorized',
  'action-is-not-execution',
  'simulation-is-not-proof',
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes('owned-is-not-governed')) {
    fail(`${slug} related reading must cite owned-is-not-governed`);
  }
}

const governedBlock = stepBlock('owned-is-not-governed');
for (const required of ['compounded-is-not-owned', 'scaled-is-not-compounded', 'sustained-is-not-scaled', 'adopted-is-not-sustained', 'trusted-is-not-adopted', 'proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!governedBlock.includes(`'${required}'`)) {
    fail(`owned-is-not-governed related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(governedBlock)) {
  fail('owned-is-not-governed related reading must include the Strategic Pilot');
}
if (governedBlock.includes("next: 'strategic-pilot'")) {
  fail('owned-is-not-governed next step is the Field Manual');
}

if (
  !ownedPage.includes('The series continues with') ||
  !ownedPage.includes('/insights/owned-is-not-governed')
) {
  fail('compounded-is-not-owned must point the series forward to owned-is-not-governed');
}


const transferablePageRequired = [
  ...governedPageRequired,
  'Governed is not transferable',
  'stays safe and compliant under named stress',
  'not a binder nobody practices',
  "someone's name is on it",
  'can change hands',
  'successor owner, new operator, crew/site turnover, contractor exit, or organizational handoff',
  'evidence continuity',
  'playbooks, tooling rights, exception paths, residual claim on the learning, and audit trail',
  'under the new named owner within a named window',
  'someone will figure it out',
  'not a RACI update with no rehearsal',
  'the departing owner takes in their head',
  'A firm can govern a practice tightly on one line and still not make it transferable',
  'rules exist only while the current owner is present',
  'succession is untested',
  'exception authority dies with a contractor',
  'A firm can transfer a thin ritual and still never have governed the compounding system that actually runs the plant',
  'A succession plan PDF alone is not transferability',
  'A governance binder alone is not transfer',
  'The governed practice is not the transferable practice',
  'What a transfer note is allowed to be',
  'Named governance is not transferability',
  'Sync does not measure transferability',
  'Sync does not measure transferability for the customer',
  'Sync does not measure governance or transferability for the customer',
  'Sync must not auto-assign owners, auto-approve governed actions, or auto-transfer ownership',
  'Sync must not auto-transfer ownership',
  'Sync may surface a governance/rules-of-engagement note or a transfer/handoff note',
  'does not collapse transferability into governance',
  'does not collapse governed into transferable',
  'does not rewrite Owned Is Not Governed',
  'does not rewrite Compounded Is Not Owned',
  'does not rewrite Ownership Is Not Control',
  'does not rewrite Control Is Not Closure',
  'does not rewrite Accountability Is Not Ownership',
  'does not rewrite Verified Is Not Authorized',
  'does not rewrite Green Is Not Go',
  'practice record that says governed is transferable',
  'governed as transferable',
  'separates a governed owned compounding system from transfer of that system',
  '/insights/owned-is-not-governed',
  'does not collapse into Owned Is Not Governed',
  'does not collapse into Compounded Is Not Owned',
  'does not collapse into Ownership Is Not Control',
  'does not collapse into Control Is Not Closure',
  'does not collapse into Accountability Is Not Ownership',
  'does not collapse into Verified Is Not Authorized',
  'does not collapse into Green Is Not Go',
  'Evidence from the plant beats the governance note when the note is being used as transferability',
  'Evidence from the plant beats the transfer note when the note is being used as governance',
  'treat governed as transferable as Learning credit',
  'Sync refuses to pretend governance or transferability is a status light',
];
const transferablePage = read('app/insights/governed-is-not-transferable/page.tsx');
for (const required of transferablePageRequired) {
  if (!transferablePage.includes(required)) {
    fail(`governed-is-not-transferable page must include ${required}`);
  }
}

for (const slug of [
  'owned-is-not-governed',
  'compounded-is-not-owned',
  'scaled-is-not-compounded',
  'sustained-is-not-scaled',
  'adopted-is-not-sustained',
  'trusted-is-not-adopted',
  'proven-is-not-trusted',
  'resolved-is-not-proven',
  'closed-is-not-resolved',
  'executed-is-not-closed',
  'authorized-is-not-executed',
  'verified-is-not-authorized',
  'action-is-not-execution',
  'simulation-is-not-proof',
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes('governed-is-not-transferable')) {
    fail(`${slug} related reading must cite governed-is-not-transferable`);
  }
}

const transferableBlock = stepBlock('governed-is-not-transferable');
for (const required of ['owned-is-not-governed', 'compounded-is-not-owned', 'scaled-is-not-compounded', 'sustained-is-not-scaled', 'adopted-is-not-sustained', 'trusted-is-not-adopted', 'proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!transferableBlock.includes(`'${required}'`)) {
    fail(`governed-is-not-transferable related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(transferableBlock)) {
  fail('governed-is-not-transferable related reading must include the Strategic Pilot');
}
if (transferableBlock.includes("next: 'strategic-pilot'")) {
  fail('governed-is-not-transferable next step is the Field Manual');
}

if (
  !governedPage.includes('The series continues with') ||
  !governedPage.includes('/insights/governed-is-not-transferable')
) {
  fail('owned-is-not-governed must point the series forward to governed-is-not-transferable');
}


const rehearsedPageRequired = [
  ...transferablePageRequired,
  'Transferable is not rehearsed',
  'the named handoff has been run under stress',
  'named successor actually exercising authority',
  'exception paths, and evidence continuity inside a named window',
  'tabletop, shadow-run, or live cutover drill',
  'observed pass/fail and residual gaps closed',
  'not a succession PDF that has never been practiced',
  'not a RACI cell updated in a meeting',
  'not a shared folder the departing owner walked someone through once',
  'A firm can make a practice transferable on paper and still not rehearse it',
  'handoff pack exists, successor named, but no drill under load',
  'exception authority untested with the new owner',
  'A firm can rehearse a thin ritual and still never have made the compounding system transferable',
  'a laminated card walkthrough that never moves playbooks, tooling rights, or residual claim',
  'A succession plan PDF alone is not rehearsal',
  'A one-time hallway briefing alone is not transferability',
  'The transferable practice is not the rehearsed practice',
  'What a rehearsal note is allowed to be',
  'Named transferability is not rehearsal',
  'Sync does not measure rehearsal',
  'Sync does not measure rehearsal for the customer',
  'Sync does not measure transferability or rehearsal for the customer',
  'Sync must not auto-transfer ownership or auto-credit Learning for an unrehearsed handoff',
  'Sync must not auto-credit Learning for an unrehearsed handoff',
  'Sync may surface a transfer/handoff note or a rehearsal/drill note',
  'does not collapse rehearsal into transferability',
  'does not collapse transferable into rehearsed',
  'does not rewrite Governed Is Not Transferable',
  'does not collapse into Governed Is Not Transferable',
  'practice record that says transferable is rehearsed',
  'transferable as rehearsed',
  'separates a transferable governed owned compounding system from rehearsal of that handoff',
  '/insights/governed-is-not-transferable',
  'Evidence from the plant beats the transfer note when the note is being used as rehearsal',
  'Evidence from the plant beats the rehearsal note when the note is being used as transferability',
  'treat transferable as rehearsed as Learning credit',
  'Sync refuses to pretend transferability or rehearsal is a status light',
  'Direct plant execute stays off',
  'CMMS write-back is not a live product path',
  'Billing write-back is not a live product path',
];
const rehearsedPage = read('app/insights/transferable-is-not-rehearsed/page.tsx');
for (const required of rehearsedPageRequired) {
  if (!rehearsedPage.includes(required)) {
    fail(`transferable-is-not-rehearsed page must include ${required}`);
  }
}

for (const slug of [
  'governed-is-not-transferable',
  'owned-is-not-governed',
  'compounded-is-not-owned',
  'scaled-is-not-compounded',
  'sustained-is-not-scaled',
  'adopted-is-not-sustained',
  'trusted-is-not-adopted',
  'proven-is-not-trusted',
  'resolved-is-not-proven',
  'closed-is-not-resolved',
  'executed-is-not-closed',
  'authorized-is-not-executed',
  'verified-is-not-authorized',
  'action-is-not-execution',
  'simulation-is-not-proof',
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes('transferable-is-not-rehearsed')) {
    fail(`${slug} related reading must cite transferable-is-not-rehearsed`);
  }
}

const rehearsedBlock = stepBlock('transferable-is-not-rehearsed');
for (const required of ['governed-is-not-transferable', 'owned-is-not-governed', 'compounded-is-not-owned', 'scaled-is-not-compounded', 'sustained-is-not-scaled', 'adopted-is-not-sustained', 'trusted-is-not-adopted', 'proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!rehearsedBlock.includes(`'${required}'`)) {
    fail(`transferable-is-not-rehearsed related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(rehearsedBlock)) {
  fail('transferable-is-not-rehearsed related reading must include the Strategic Pilot');
}
if (rehearsedBlock.includes("next: 'strategic-pilot'")) {
  fail('transferable-is-not-rehearsed next step is the Field Manual');
}

if (
  !transferablePage.includes('The series continues with') ||
  !transferablePage.includes('/insights/transferable-is-not-rehearsed')
) {
  fail('governed-is-not-transferable must point the series forward to transferable-is-not-rehearsed');
}


const recoverablePageRequired = [
  ...rehearsedPageRequired,
  'Rehearsed is not recoverable',
  'after a real disruption (or a named recovery drill that actually breaks the live path)',
  'the named successor restores the governed owned compounding system',
  'to a named service level inside a named RTO/RPO',
  'evidence continuity still holding under their authority',
  'not a green tabletop score',
  'not a laminated recovery card',
  'not a hope that the old owner will pick up the phone',
  'A firm can rehearse a handoff under load and still not be recoverable',
  'drill passed, successor signed the checklist, but no proven restore',
  'A firm can chase recoverability theater and still never have rehearsed the transfer',
  'a disaster-recovery runbook that restores servers while ownership, exception authority, and residual claim stay with the departed owner',
  'A tabletop pass alone is not recoverability',
  'A backup job green light alone is not rehearsal',
  'The rehearsed practice is not the recoverable practice',
  'What a recovery note is allowed to be',
  'Named rehearsal is not recoverability',
  'Sync does not measure recoverability',
  'Sync does not measure recoverability for the customer',
  'Sync does not measure rehearsal or recoverability for the customer',
  'Sync must not auto-transfer ownership, auto-declare RTO met, or auto-credit Learning for an unrecovered handoff',
  'Sync must not auto-declare RTO met',
  'Sync must not auto-credit Learning for an unrecovered handoff',
  'Sync may surface a rehearsal/drill note or a recovery/restore note',
  'does not collapse recoverability into rehearsal',
  'does not collapse rehearsed into recoverable',
  'does not rewrite Transferable Is Not Rehearsed',
  'does not collapse into Transferable Is Not Rehearsed',
  'practice record that says rehearsed is recoverable',
  'rehearsed as recoverable',
  'separates a rehearsed handoff from recoverability of that governed owned compounding system',
  '/insights/transferable-is-not-rehearsed',
  'Evidence from the plant beats the rehearsal note when the note is being used as recoverability',
  'Evidence from the plant beats the recovery note when the note is being used as rehearsal',
  'treat rehearsed as recoverable as Learning credit',
  'Sync refuses to pretend rehearsal or recoverability is a status light',
  'Direct plant execute stays off',
  'CMMS write-back is not a live product path',
  'Billing write-back is not a live product path',
];
const recoverablePage = read('app/insights/rehearsed-is-not-recoverable/page.tsx');
for (const required of recoverablePageRequired) {
  if (!recoverablePage.includes(required)) {
    fail(`rehearsed-is-not-recoverable page must include ${required}`);
  }
}

for (const slug of [
  'transferable-is-not-rehearsed',
  'governed-is-not-transferable',
  'owned-is-not-governed',
  'compounded-is-not-owned',
  'scaled-is-not-compounded',
  'sustained-is-not-scaled',
  'adopted-is-not-sustained',
  'trusted-is-not-adopted',
  'proven-is-not-trusted',
  'resolved-is-not-proven',
  'closed-is-not-resolved',
  'executed-is-not-closed',
  'authorized-is-not-executed',
  'verified-is-not-authorized',
  'action-is-not-execution',
  'simulation-is-not-proof',
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes('rehearsed-is-not-recoverable')) {
    fail(`${slug} related reading must cite rehearsed-is-not-recoverable`);
  }
}

const recoverableBlock = stepBlock('rehearsed-is-not-recoverable');
for (const required of ['transferable-is-not-rehearsed', 'governed-is-not-transferable', 'owned-is-not-governed', 'compounded-is-not-owned', 'scaled-is-not-compounded', 'sustained-is-not-scaled', 'adopted-is-not-sustained', 'trusted-is-not-adopted', 'proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!recoverableBlock.includes(`'${required}'`)) {
    fail(`rehearsed-is-not-recoverable related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(recoverableBlock)) {
  fail('rehearsed-is-not-recoverable related reading must include the Strategic Pilot');
}
if (recoverableBlock.includes("next: 'strategic-pilot'")) {
  fail('rehearsed-is-not-recoverable next step is the Field Manual');
}

if (
  !rehearsedPage.includes('The series continues with') ||
  !rehearsedPage.includes('/insights/rehearsed-is-not-recoverable')
) {
  fail('transferable-is-not-rehearsed must point the series forward to rehearsed-is-not-recoverable');
}

const recoveryAssuredPageRequired = [
  ...recoverablePageRequired,
  'Recoverable is not assured',
  'independent, recurring verification that recovery capability still holds',
  'under the current named owner, tooling rights, exception paths, and evidence continuity',
  'a dated assurance record that the restore path was re-proven inside the named window, with residual gaps closed',
  'not a one-time restore credit from last year’s drill',
  'not a binder that says "DR tested,"',
  'not a status light that never re-broke the live path',
  'A firm can be recoverable once and still not be assured',
  'one successful restore under the new owner, then tooling rights drift, successor leaves, or the break-drill is never repeated',
  'A firm can chase assurance theater and still never have been recoverable',
  'an annual tabletop certificate while no named successor has ever restored to a named service level inside a named RTO/RPO with evidence continuity',
  'A one-time restore alone is not assurance',
  'An assurance PDF alone is not recoverability',
  'The recoverable practice is not the assured practice',
  'What an assurance record is allowed to be',
  'Named recoverability is not assurance',
  'Sync does not measure assurance',
  'Sync does not measure assurance for the customer',
  'Sync does not measure recoverability or assurance for the customer',
  'Sync must not auto-issue assurance',
  'Sync must not auto-transfer ownership, auto-declare RTO met, auto-credit Learning for an unrecovered handoff, or auto-issue assurance',
  'Sync may surface a recovery/restore note or an assurance record',
  'does not collapse assurance into recoverability',
  'does not collapse recoverable into assured',
  'does not rewrite Rehearsed Is Not Recoverable',
  'does not collapse into Rehearsed Is Not Recoverable',
  'does not collapse into Assured Is Not Proven',
  'does not rewrite Assured Is Not Proven',
  'practice record that says recoverable is assured',
  'recoverable as assured',
  'separates a recoverable restore from assurance that recovery capability still holds',
  '/insights/rehearsed-is-not-recoverable',
  'Evidence from the plant beats the recovery note when the note is being used as assurance',
  'Evidence from the plant beats the assurance record when the record is being used as recoverability',
  'treat recoverable as assured as Learning credit',
  'Sync refuses to pretend recoverability or assurance is a status light',
  'Direct plant execute stays off',
  'CMMS write-back is not a live product path',
  'Billing write-back is not a live product path',
  'Evidence lineage is not optional',
  'Human decision is not optional',
  'Recommend is not authorize',
];
const recoveryAssuredPage = read('app/insights/recoverable-is-not-assured/page.tsx');
for (const required of recoveryAssuredPageRequired) {
  if (!recoveryAssuredPage.includes(required)) {
    fail(`recoverable-is-not-assured page must include ${required}`);
  }
}

for (const slug of [
  'rehearsed-is-not-recoverable',
  'transferable-is-not-rehearsed',
  'governed-is-not-transferable',
  'owned-is-not-governed',
  'compounded-is-not-owned',
  'scaled-is-not-compounded',
  'sustained-is-not-scaled',
  'adopted-is-not-sustained',
  'trusted-is-not-adopted',
  'proven-is-not-trusted',
  'resolved-is-not-proven',
  'closed-is-not-resolved',
  'executed-is-not-closed',
  'authorized-is-not-executed',
  'verified-is-not-authorized',
  'action-is-not-execution',
  'simulation-is-not-proof',
  'accepted-is-not-verified',
  'complete-is-not-accepted',
  'closure-is-not-complete',
  'control-is-not-closure',
  'ownership-is-not-control',
  'accountability-is-not-ownership',
  'authority-is-not-accountability',
  'judgment-is-not-authority',
  'learning-is-not-judgment',
  'results-is-not-learning',
  'execution-is-not-results',
  'strategy-is-not-execution',
  'optionality-is-not-strategy',
  'flexibility-is-not-optionality',
  'liquidity-is-not-flexibility',
  'solvency-is-not-liquidity',
  'survival-is-not-solvency',
  'runway-is-not-survival',
  'cash-is-not-runway',
  'arr-is-not-cash',
  'revenue-is-not-arr',
  'impact-is-not-revenue',
  'outcome-is-not-impact',
  'value-is-not-outcome',
  'profit-is-not-value',
  'cash-is-not-margin',
  'closure-is-not-cash',
  'accountability-is-not-closure',
  'authorization-is-not-accountability',
  'complete-is-not-verified',
  'cleared-is-not-complete',
  'ready-is-not-cleared',
  'verified-is-not-assured',
  'assured-is-not-proven',
  'recommend-is-not-authorize',
  'human-decision-is-not-optional',
  'proof-is-not-authorization',
  'learning-requires-a-verified-outcome',
  'verification-is-not-optional',
  'coverage-is-not-control',
  'dashboard-is-not-control',
]) {
  if (!stepBlock(slug).includes('recoverable-is-not-assured')) {
    fail(`${slug} related reading must cite recoverable-is-not-assured`);
  }
}

const recoveryAssuredBlock = stepBlock('recoverable-is-not-assured');
for (const required of ['rehearsed-is-not-recoverable', 'transferable-is-not-rehearsed', 'governed-is-not-transferable', 'owned-is-not-governed', 'compounded-is-not-owned', 'scaled-is-not-compounded', 'sustained-is-not-scaled', 'adopted-is-not-sustained', 'trusted-is-not-adopted', 'proven-is-not-trusted', 'resolved-is-not-proven', 'closed-is-not-resolved', 'executed-is-not-closed', 'authorized-is-not-executed', 'verified-is-not-authorized', 'accepted-is-not-verified', 'complete-is-not-accepted', 'action-is-not-execution', 'simulation-is-not-proof', ...acceptedReadingRequired]) {
  if (!recoveryAssuredBlock.includes(`'${required}'`)) {
    fail(`recoverable-is-not-assured related reading must cite ${required}`);
  }
}
if (!/includePilot:\s*true/.test(recoveryAssuredBlock)) {
  fail('recoverable-is-not-assured related reading must include the Strategic Pilot');
}
if (recoveryAssuredBlock.includes("next: 'strategic-pilot'")) {
  fail('recoverable-is-not-assured next step is the Field Manual');
}

if (
  !recoverablePage.includes('The series continues with') ||
  !recoverablePage.includes('/insights/recoverable-is-not-assured')
) {
  fail('rehearsed-is-not-recoverable must point the series forward to recoverable-is-not-assured');
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
