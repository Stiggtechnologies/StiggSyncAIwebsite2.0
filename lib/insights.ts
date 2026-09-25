export type InsightArticle = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  readTime: string;
  published: string;
  author?: string;
};

export const insightArticles: InsightArticle[] = [
  {
    slug: 'recommend-is-not-authorize',
    title: 'Recommend Is Not Authorize',
    description:
      'Recommend is not authorize. On the signed-in Decision Case, evidence is required before a recommendation is treated as a decision. Field Manual v0 states the order.',
    excerpt:
      'A drafted next action is a proposal. The signed-in Decision Case keeps the human decision separate, and evidence is required before that proposal is treated as a decision.',
    category: 'Decision Case',
    readTime: '7 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'evidence-lineage-is-not-optional',
    title: 'Evidence Lineage Is Not Optional',
    description:
      'A recommendation you cannot reconstruct is not an industrial decision. ISO 14224, SAE JA1011, and API RP 580 already require the evidence trail.',
    excerpt:
      'A haul-fleet planner ranks a truck for deferral. A superintendent gets a pump family tagged “bad actor.” A reliability engineer is handed PM intervals the model wants to stretch. The dashboard is confident. The record behind it is not.',
    category: 'Reliability Engineering',
    readTime: '8 min read',
    published: '2026-09-23',
  },
  {
    slug: 'fracas-is-not-a-decision-system',
    title: 'FRACAS Is Not a Decision System',
    description:
      'Closing the loop from failure code to approved action — why codes alone do not change reliability outcomes. FRACAS reports and analyzes; it does not authorize the next action.',
    excerpt:
      'Closing the loop from failure code to approved action — why codes alone do not change reliability outcomes.',
    category: 'Reliability Engineering',
    readTime: '10 min read',
    published: '2026-09-07',
  },
  {
    slug: 'why-cmms-alone-is-failing-2026',
    title: 'Why CMMS Alone Is Failing in 2026',
    description:
      'CMMS systems record work. They do not prove the reliability decision. Why maintenance teams still need evidence, approval, and verification above the system of record.',
    excerpt:
      'Modern maintenance demands have outpaced what traditional CMMS platforms can deliver. Organizations are adding a governed intelligence layer — not replacing the system of record.',
    category: 'Industry Analysis',
    readTime: '8 min read',
    published: '2026-02-19',
  },
  {
    slug: 'economics-of-autonomous-maintenance',
    title: 'The Economics of Autonomous Maintenance',
    description:
      'How to frame maintenance economics when evidence, named human approval, and outcome verification come before any savings claim. Industry discussion ranges are not SyncAI customer results.',
    excerpt:
      'How maintenance economics should be framed when evidence, approval, and verification come before any claim of savings.',
    category: 'ROI & Business Case',
    readTime: '12 min read',
    published: '2026-02-19',
  },
  {
    slug: 'governance-in-industrial-ai',
    title: 'Governance in Industrial AI: Human Oversight at Scale',
    description:
      'Recommend is not authorize. How industrial AI stays auditable when a named human still accepts, rejects, escalates, or returns every recommendation.',
    excerpt:
      'How enterprises can keep operational accountability when a model can draft a recommendation faster than a human can review it.',
    category: 'Security & Governance',
    readTime: '10 min read',
    published: '2026-02-19',
  },
];

export function getInsightArticle(slug: string) {
  return insightArticles.find((article) => article.slug === slug);
}
