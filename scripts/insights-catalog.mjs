import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

function scanString(source, index) {
  const quote = source[index];
  let i = index + 1;
  while (i < source.length) {
    if (source[i] === '\\') {
      i += 2;
      continue;
    }
    if (source[i] === quote) return i + 1;
    i++;
  }
  throw new Error('Unterminated string in lib/insights.ts');
}

function matchBrace(source, open) {
  let depth = 0;
  let i = open;
  while (i < source.length) {
    const char = source[i];
    if (char === "'" || char === '"' || char === '`') {
      i = scanString(source, i);
      continue;
    }
    if (char === '{') depth++;
    else if (char === '}') {
      depth--;
      if (depth === 0) return i;
    }
    i++;
  }
  throw new Error('Unbalanced brace in lib/insights.ts');
}

function readQuoted(source, from) {
  const quoteAt = source.indexOf("'", from);
  if (quoteAt < 0) throw new Error('Missing string in an Insights catalog entry');
  const end = scanString(source, quoteAt);
  return source.slice(quoteAt + 1, end - 1).replace(/\\'/g, "'").replace(/\\\\/g, '\\');
}

export function parseInsightArticles(source) {
  const start = source.indexOf('export const insightArticles');
  if (start < 0) throw new Error('lib/insights.ts is missing insightArticles');
  const open = source.indexOf('[', source.indexOf('= [', start));
  if (open < 0) throw new Error('lib/insights.ts is missing the insightArticles array');
  const articles = [];
  let i = open + 1;
  while (i < source.length) {
    while (/\s/.test(source[i])) i++;
    if (source[i] === ']') break;
    if (source[i] !== '{') {
      throw new Error(`Expected an Insights catalog object, found ${JSON.stringify(source.slice(i, i + 24))}`);
    }
    const end = matchBrace(source, i);
    const body = source.slice(i, end + 1);
    articles.push({
      slug: readQuoted(body, body.indexOf('slug:')),
      title: readQuoted(body, body.indexOf('title:')),
      description: readQuoted(body, body.indexOf('description:')),
      raw: body,
    });
    i = end + 1;
    while (source[i] === ',' || /\s/.test(source[i])) {
      if (source[i] === ']') break;
      i++;
    }
  }
  return articles;
}

export function articleSlugFromPath(file) {
  const match = String(file).replaceAll('\\', '/').match(/^app\/insights\/([^/]+)\/.+/);
  return match ? match[1] : null;
}

function git(repo, args) {
  return execFileSync('git', args, { cwd: repo, encoding: 'utf8' });
}

export function showFile(repo, rev, file) {
  try {
    return git(repo, ['show', `${rev}:${file}`]);
  } catch (error) {
    const message = `${error.stderr || ''}\n${error.message || ''}`;
    if (message.includes('does not exist') || message.includes('exists on disk, but not')) return null;
    throw error;
  }
}

export function changedInsightSlugs(repo, base, head = 'HEAD') {
  const nameStatus = git(repo, ['diff', '--name-status', '--find-renames', `${base}...${head}`]);
  const slugs = new Set();
  for (const line of nameStatus.split('\n')) {
    if (!line.trim()) continue;
    const parts = line.split('\t');
    const status = parts[0];
    if (status.startsWith('D')) continue;
    const path = status.startsWith('R') || status.startsWith('C') ? parts[2] : parts[1];
    const slug = articleSlugFromPath(path);
    if (slug) slugs.add(slug);
  }

  const before = new Map(articlesIn(showFile(repo, base, 'lib/insights.ts')).map((article) => [article.slug, article]));
  const afterSource = head === 'WORKTREE' ? readFileSync(`${repo}/lib/insights.ts`, 'utf8') : showFile(repo, head, 'lib/insights.ts');
  const after = articlesIn(afterSource);
  for (const article of after) {
    const previous = before.get(article.slug);
    if (!previous || previous.raw !== article.raw) slugs.add(article.slug);
  }

  return [...slugs].sort();
}

function articlesIn(source) {
  if (!source || !source.includes('export const insightArticles')) return [];
  return parseInsightArticles(source);
}
