StiggSyncAIwebsite2.0

## Insights publish gate

A pull request that adds or changes an article under `app/insights/<slug>/`, or its entry in `lib/insights.ts`, has to pass two checks. Deleting an article does not. The Insights index (`app/insights/page.tsx`) does not.

**Insights owner approval.** The pull request needs the `owner-approved` label. Orville Davis adds that label when he approves the article. Without it, the check fails and names the slugs.

**Insights content quality.** Each added or changed article is checked in full. The check fails, and prints the reason, when any of these is true:

- More than 5% of the body's 6-word phrases are repeated. A phrase is six consecutive words, and the percentage counts every time a phrase appears if that wording appears more than once.
- The title matches "X Is Not Y", or is more than 80% similar to another Insights title.
- The catalog meta description is longer than 160 characters.
- The article body is under 1,200 words.

Editing one of the surviving "Is Not" essays re-runs these rules, so that edit needs both the label and a title that no longer matches the pattern.
