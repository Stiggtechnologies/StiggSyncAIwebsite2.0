import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { articleSlugFromPath, changedInsightSlugs, parseInsightArticles } from './insights-catalog.mjs';
import { isXIsNotYTitle, qualityFailures, repeatedSixWordShare, titleSimilarity, wordsIn } from './insights-quality.mjs';

test('catalog parser reads the seven surviving articles', () => {
  const articles = parseInsightArticles(readFileSync(new URL('../lib/insights.ts', import.meta.url), 'utf8'));
  assert.deepEqual(
    articles.map((article) => article.slug),
    [
      'alert-is-not-decision',
      'recommend-is-not-authorize',
      'evidence-lineage-is-not-optional',
      'fracas-is-not-a-decision-system',
      'why-cmms-alone-is-failing-2026',
      'economics-of-autonomous-maintenance',
      'governance-in-industrial-ai',
    ],
  );
});

test('article paths ignore the Insights index', () => {
  assert.equal(articleSlugFromPath('app/insights/page.tsx'), null);
  assert.equal(articleSlugFromPath('app/insights/layout.tsx'), null);
  assert.equal(articleSlugFromPath('app/insights/fracas-is-not-a-decision-system/page.tsx'), 'fracas-is-not-a-decision-system');
});

test('an unchanged tree reports no article changes', () => {
  assert.deepEqual(changedInsightSlugs(process.cwd(), 'HEAD', 'HEAD'), []);
});

test('X Is Not Y titles fail and ordinary titles do not', () => {
  assert.equal(isXIsNotYTitle('Alert Is Not Decision'), true);
  assert.equal(isXIsNotYTitle('FRACAS Is Not a Decision System'), true);
  assert.equal(isXIsNotYTitle('Why CMMS Alone Is Failing in 2026'), false);
  const reasons = qualityFailures({
    title: 'Noise Is Not Signal',
    description: 'A short description.',
    body: longBody(1200),
    otherTitles: [],
  });
  assert.ok(reasons.some((reason) => reason.includes('X Is Not Y')));
});

test('titles more than 80% similar to an existing title fail', () => {
  const existing = 'Evidence standards for maintenance decisions';
  const proposed = 'Evidence standards for maintenance decision';
  assert.ok(titleSimilarity(existing, proposed) > 0.8);
  const reasons = qualityFailures({
    title: proposed,
    description: 'A short description.',
    body: longBody(1200),
    otherTitles: [existing],
  });
  assert.ok(reasons.some((reason) => reason.includes('similar to an existing title')));
  const distinct = qualityFailures({
    title: 'How a plant keeps a decision record',
    description: 'A short description.',
    body: longBody(1200),
    otherTitles: [existing],
  });
  assert.equal(distinct.some((reason) => reason.includes('similar')), false);
});

test('meta descriptions over 160 characters fail', () => {
  const pass = qualityFailures({
    title: 'A record the plant can reconstruct',
    description: 'x'.repeat(160),
    body: longBody(1200),
  });
  assert.equal(pass.some((reason) => reason.includes('meta description')), false);
  const fail = qualityFailures({
    title: 'A record the plant can reconstruct',
    description: 'x'.repeat(161),
    body: longBody(1200),
  });
  assert.ok(fail.some((reason) => reason.includes('meta description is 161 characters')));
});

test('bodies under 1,200 words fail', () => {
  const reasons = qualityFailures({
    title: 'A record the plant can reconstruct',
    description: 'A short description.',
    body: longBody(1199),
  });
  assert.ok(reasons.some((reason) => reason.includes('body is 1199 words')));
  const pass = qualityFailures({
    title: 'A record the plant can reconstruct',
    description: 'A short description.',
    body: longBody(1200),
  });
  assert.equal(pass.some((reason) => reason.includes('words')), false);
});

test('repeated 6-word phrases fail only above 5%', () => {
  const phrase = ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta'];
  const atLimit = [...phrase, ...Array.from({ length: 33 }, (_, index) => `gap${index}`), ...phrase];
  assert.equal(repeatedSixWordShare(atLimit), 0.05);

  const unique = qualityFailures({
    title: 'A record the plant can reconstruct',
    description: 'A short description.',
    body: longBody(1200),
  });
  assert.equal(unique.some((reason) => reason.includes('6-word')), false);

  const block = Array.from({ length: 200 }, (_, index) => `dup${index}`);
  const repeated = [...block, ...block, ...Array.from({ length: 800 }, (_, index) => `pad${index}`)];
  assert.ok(repeatedSixWordShare(repeated) > 0.05);
  assert.ok(wordsIn(repeated.join(' ')).length >= 1200);
  const reasons = qualityFailures({
    title: 'A record the plant can reconstruct',
    description: 'A short description.',
    body: repeated.join(' '),
  });
  assert.ok(reasons.some((reason) => reason.includes('6-word phrases are repeated')));
});

function longBody(count) {
  return Array.from({ length: count }, (_, index) => `word${index}`).join(' ');
}
