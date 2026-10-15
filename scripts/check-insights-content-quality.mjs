import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { changedInsightSlugs, parseInsightArticles } from './insights-catalog.mjs';
import { headingText, qualityFailures, visibleText } from './insights-quality.mjs';

const repo = process.cwd();
const base = process.env.BASE_SHA || execFileSync('git', ['merge-base', 'HEAD', 'origin/main'], { cwd: repo, encoding: 'utf8' }).trim();
const slugs = changedInsightSlugs(repo, base, 'HEAD');

if (slugs.length === 0) {
  console.log('Insights content quality: no Insights articles added or changed.');
  process.exit(0);
}

const catalog = parseInsightArticles(readFileSync(join(repo, 'lib/insights.ts'), 'utf8'));
const bySlug = new Map(catalog.map((article) => [article.slug, article]));
const failures = [];

for (const slug of slugs) {
  const article = bySlug.get(slug);
  const pagePath = join(repo, 'app/insights', slug, 'page.tsx');
  const page = existsSync(pagePath) ? readFileSync(pagePath, 'utf8') : '';
  const heading = headingText(page);
  const title = article?.title || heading;
  const reasons = qualityFailures({
    title,
    headings: heading && heading !== title ? [heading] : [],
    description: article?.description || '',
    body: visibleText(page),
    otherTitles: catalog.filter((item) => item.slug !== slug).map((item) => item.title),
  });
  if (!article) {
    reasons.unshift(`missing catalog entry in lib/insights.ts`);
  }
  if (!page) {
    reasons.unshift(`missing app/insights/${slug}/page.tsx`);
  }
  if (reasons.length) failures.push({ slug, reasons });
}

if (failures.length) {
  console.error('Insights content quality failed.');
  for (const failure of failures) {
    console.error(`\n${failure.slug}:`);
    for (const reason of failure.reasons) console.error(`- ${reason}`);
  }
  process.exit(1);
}

console.log(`Insights content quality passed for ${slugs.join(', ')}.`);
