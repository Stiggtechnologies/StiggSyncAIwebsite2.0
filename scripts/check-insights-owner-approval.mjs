import { execFileSync } from 'node:child_process';
import { changedInsightSlugs } from './insights-catalog.mjs';

const repo = process.cwd();
const base = process.env.BASE_SHA || execFileSync('git', ['merge-base', 'HEAD', 'origin/main'], { cwd: repo, encoding: 'utf8' }).trim();
const slugs = changedInsightSlugs(repo, base, 'HEAD');

if (slugs.length === 0) {
  console.log('Insights owner approval: no Insights articles added or changed.');
  process.exit(0);
}

const labels = (process.env.PR_LABELS || '')
  .split(',')
  .map((label) => label.trim())
  .filter(Boolean);

if (!labels.includes('owner-approved')) {
  console.error(
    `Insights owner approval failed. This pull request adds or changes Insights articles (${slugs.join(', ')}) without the owner-approved label.`,
  );
  console.error('Add the owner-approved label after Orville Davis approves the article.');
  process.exit(1);
}

console.log(`Insights owner approval passed for ${slugs.join(', ')}.`);
