/**
 * Quality rules for an Insights article.
 * A repeated 6-word phrase is six consecutive words whose exact wording
 * appears more than once. The repeated share is those occurrences divided
 * by every 6-word window in the body. Words are lowercase letters and digits.
 */

export function normalizeTitle(title) {
  return String(title || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');
}

export function isXIsNotYTitle(title) {
  return /^\s*.+\s+is\s+not\s+.+\s*$/i.test(String(title || '').trim());
}

export function titleSimilarity(a, b) {
  const left = normalizeTitle(a);
  const right = normalizeTitle(b);
  if (!left && !right) return 1;
  if (left === right) return 1;
  const distance = levenshtein(left, right);
  return 1 - distance / Math.max(left.length, right.length);
}

export function wordsIn(text) {
  return (String(text || '').toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) || []);
}

/** Share of 6-word windows whose wording appears more than once. 0 when the body is shorter than six words. */
export function repeatedSixWordShare(words) {
  if (!words || words.length < 6) return 0;
  const total = words.length - 5;
  const counts = new Map();
  for (let i = 0; i < total; i++) {
    const phrase = words.slice(i, i + 6).join(' ');
    counts.set(phrase, (counts.get(phrase) || 0) + 1);
  }
  let repeated = 0;
  for (const count of counts.values()) {
    if (count > 1) repeated += count;
  }
  return repeated / total;
}

export function visibleText(source) {
  const start = String(source || '').search(/<motion\.article\b|<article\b/);
  let text = start >= 0 ? source.slice(start) : String(source || '');
  text = text.replace(/^import .*$/gm, ' ');
  text = text.replace(/\{[^{}]*\}/g, ' ');
  text = text.replace(/<[^>]+>/g, ' ');
  text = text
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&apos;|&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>');
  return text.replace(/\s+/g, ' ').trim();
}

export function headingText(source) {
  const match = String(source || '').match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
  if (!match) return '';
  return visibleText(match[1]);
}

/**
 * @returns {string[]} human-readable reasons. Empty when the article passes.
 */
export function qualityFailures({ title, headings = [], description, body, otherTitles = [] }) {
  const reasons = [];
  const titles = [];
  for (const value of [title, ...headings]) {
    const cleaned = String(value || '').replace(/\s+/g, ' ').trim();
    if (cleaned && !titles.includes(cleaned)) titles.push(cleaned);
  }

  for (const value of titles) {
    if (isXIsNotYTitle(value)) {
      reasons.push(`title matches the "X Is Not Y" pattern: "${value}"`);
    }
    for (const other of otherTitles) {
      const similarity = titleSimilarity(value, other);
      if (similarity > 0.8) {
        const percent = Math.round(similarity * 1000) / 10;
        reasons.push(
          `title is ${percent}% similar to an existing title "${String(other).replace(/\s+/g, ' ').trim()}" (maximum 80%)`,
        );
      }
    }
  }

  const descriptionText = String(description || '');
  if (descriptionText.length > 160) {
    reasons.push(`meta description is ${descriptionText.length} characters (maximum 160)`);
  }

  const words = wordsIn(body);
  if (words.length < 1200) {
    reasons.push(`body is ${words.length} words (minimum 1,200)`);
  }

  const share = repeatedSixWordShare(words);
  if (share > 0.05) {
    const percent = Math.round(share * 1000) / 10;
    reasons.push(`${percent}% of 6-word phrases are repeated (maximum 5%)`);
  }

  return reasons;
}

function levenshtein(a, b) {
  const rows = b.length + 1;
  let previous = Array.from({ length: rows }, (_, index) => index);
  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(current[j - 1] + 1, previous[j] + 1, previous[j - 1] + cost);
    }
    previous = current;
  }
  return previous[b.length];
}
