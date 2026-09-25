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
    slug: 'action-is-not-execution',
    title: 'Action Is Not Execution',
    description:
      'Recording an ACTION disposition on a Decision Case is work intent, not plant execution. Sync may recommend and a named human may decide. ACTION stays locked until authorized execution systems write the work order or isolate the equipment.',
    excerpt:
      'An ACTION disposition records the work a human decision intends. It does not write a work order, isolate equipment, or change the plant. Execution stays with the systems that already hold that authority.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'learning-requires-a-verified-outcome',
    title: 'Learning Requires a Verified Outcome',
    description:
      'After verification is recorded, Learning closes the loop for the next case. A hoped-for outcome, an unauthorized recommendation, and an unchecked action are not that record. Field Manual v0 states the order.',
    excerpt:
      'Verification records the check. Learning is what a later question is allowed to inherit: the closed case, not a hope, a draft that was never authorized, or an action that was never checked.',
    category: 'Decision Case',
    readTime: '7 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'verification-is-not-optional',
    title: 'Verification Is Not Optional',
    description:
      'After a named human authorizes an action, the Decision Case is not closed until verification is recorded. Learning requires a verified outcome, not a hoped-for one. Field Manual v0 states the order.',
    excerpt:
      'Authorization records who decided. It does not record whether the action did what it was supposed to do. The signed-in Decision Case stays open until that check is on the case.',
    category: 'Decision Case',
    readTime: '7 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
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

export type InsightNextDestination = 'field-manual' | 'strategic-pilot';

export type InsightNextStep = {
  relatedSlug: string;
  relatedNote: string;
  next: InsightNextDestination;
  /** Further essays in Related reading, after the primary companion. */
  also?: readonly { slug: string; note: string }[];
  /** Also link Strategic Pilot when the doctrinal next step is the Field Manual. */
  includePilot?: boolean;
};

/**
 * One companion essay, plus the commercial or doctrinal next step.
 * Field Manual when the essay is about the Decision Case order.
 * Strategic Pilot when the essay already points at a governed proof of one decision.
 * `also` adds further essays. `includePilot` adds the Strategic Pilot beside the Field Manual.
 */
export const insightNextSteps: Record<string, InsightNextStep> = {
  'action-is-not-execution': {
    relatedSlug: 'recommend-is-not-authorize',
    relatedNote: 'A named decision still does not execute the work.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'verification-is-not-optional',
        note: 'The case stays open until the check is recorded.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'A later case inherits the verified outcome, not the work intent.',
      },
    ],
  },
  'learning-requires-a-verified-outcome': {
    relatedSlug: 'verification-is-not-optional',
    relatedNote: 'The check a later case is allowed to inherit.',
    next: 'field-manual',
  },
  'verification-is-not-optional': {
    relatedSlug: 'learning-requires-a-verified-outcome',
    relatedNote: 'What a closed case is allowed to pass forward.',
    next: 'field-manual',
  },
  'recommend-is-not-authorize': {
    relatedSlug: 'evidence-lineage-is-not-optional',
    relatedNote: 'A proposal still needs a record you can reconstruct.',
    next: 'field-manual',
  },
  'evidence-lineage-is-not-optional': {
    relatedSlug: 'recommend-is-not-authorize',
    relatedNote: 'The record is the basis. Authorization stays with a named person.',
    next: 'strategic-pilot',
  },
  'fracas-is-not-a-decision-system': {
    relatedSlug: 'evidence-lineage-is-not-optional',
    relatedNote: 'A failure code still needs a reconstructable record.',
    next: 'field-manual',
  },
  'why-cmms-alone-is-failing-2026': {
    relatedSlug: 'fracas-is-not-a-decision-system',
    relatedNote: 'The system of record still leaves the decision unproven.',
    next: 'strategic-pilot',
  },
  'economics-of-autonomous-maintenance': {
    relatedSlug: 'learning-requires-a-verified-outcome',
    relatedNote: 'A savings figure still needs a verified outcome.',
    next: 'field-manual',
  },
  'governance-in-industrial-ai': {
    relatedSlug: 'recommend-is-not-authorize',
    relatedNote: 'Oversight is the named human decision.',
    next: 'field-manual',
  },
};

export type FurtherReadingItem = {
  slug: string;
  note: string;
};

/** Evidence grade, named approval, and the check before a conclusion is treated as closed. */
export const riaFurtherReading: readonly FurtherReadingItem[] = [
  {
    slug: 'evidence-lineage-is-not-optional',
    note: 'A recommendation you cannot reconstruct is not an industrial decision.',
  },
  {
    slug: 'recommend-is-not-authorize',
    note: 'A drafted next action is a proposal. A named person decides.',
  },
  {
    slug: 'verification-is-not-optional',
    note: 'Authorization records who decided. The case stays open until the check is recorded.',
  },
];

/** Named approval, the outcome check, and what a later case is allowed to inherit. */
export const strategicPilotFurtherReading: readonly FurtherReadingItem[] = [
  {
    slug: 'recommend-is-not-authorize',
    note: 'A drafted next action is a proposal. A named person decides.',
  },
  {
    slug: 'verification-is-not-optional',
    note: 'Authorization records who decided. The case stays open until the check is recorded.',
  },
  {
    slug: 'learning-requires-a-verified-outcome',
    note: 'A later case inherits the closed record, not a hoped-for outcome.',
  },
];

export function assertInsightLinkGraph(): void {
  const slugs = new Set(insightArticles.map((article) => article.slug));

  for (const article of insightArticles) {
    const step = insightNextSteps[article.slug];
    if (!step) {
      throw new Error(`Missing insight next step for ${article.slug}`);
    }
    if (step.relatedSlug === article.slug || !slugs.has(step.relatedSlug)) {
      throw new Error(`Bad related essay for ${article.slug}`);
    }
    if (!step.relatedNote.trim()) {
      throw new Error(`Missing related note for ${article.slug}`);
    }
    const seen = new Set<string>([article.slug, step.relatedSlug]);
    for (const item of step.also ?? []) {
      if (seen.has(item.slug) || !slugs.has(item.slug) || !item.note.trim()) {
        throw new Error(`Bad extra related essay for ${article.slug}`);
      }
      seen.add(item.slug);
    }
    if (step.next !== 'field-manual' && step.next !== 'strategic-pilot') {
      throw new Error(`Bad next step for ${article.slug}`);
    }
  }

  for (const list of [riaFurtherReading, strategicPilotFurtherReading]) {
    if (list.length < 2 || list.length > 3) {
      throw new Error('Further reading must list two or three Insights essays');
    }
    for (const item of list) {
      if (!slugs.has(item.slug) || !item.note.trim()) {
        throw new Error(`Bad further reading item ${item.slug}`);
      }
    }
  }
}

assertInsightLinkGraph();
