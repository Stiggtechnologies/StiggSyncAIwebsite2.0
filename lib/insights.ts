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
    slug: 'blank-is-not-zero',
    title: 'Blank Is Not Zero',
    description:
      'An empty field, a missing reading, or an unset value is not a measured zero. Blank means unknown or not yet collected. Zero means a verified measurement of none. Treating blank as zero invents false certainty, hides unknown constraints, and corrupts Recovery, verification, and Decision Case math. Companion to Unknown Is Not Clear.',
    excerpt:
      'Blank means the value was not collected. Zero means a verified measurement of none. Storing a blank as zero invents a result and hides the unknown constraint on the Decision Case, in Recovery, and in verification.',
    category: 'Decision Case',
    readTime: '7 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'unknown-is-not-clear',
    title: 'Unknown Is Not Clear',
    description:
      'In the Decision Case and in Recovery, missing evidence is recorded as unknown, not as clear or ready. Bad or not-ready evidence is blocked. A green dashboard, an empty field, or silence is not clearance. The operator must not treat unknown as go. A blank economic assumption is not zero.',
    excerpt:
      'Missing evidence stays unknown. Bad or not-ready evidence is blocked. A green dashboard, an empty field, or silence is not clearance, and the operator must not treat unknown as go.',
    category: 'Decision Case',
    readTime: '7 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'human-decision-is-not-optional',
    title: 'Human Decision Is Not Optional',
    description:
      'A named person accepts, rejects, escalates, or returns the recommendation. That act is the decision. Until it is recorded, the case is still a proposal, and authority stays with the person who can accept the operational consequence. The signed-in Decision Case keeps who decided visible beside the recommendation. The recorded act is mandatory: not optional, not implied by a green dashboard, and not auto-accepted by the system.',
    excerpt:
      'A named person accepts, rejects, escalates, or returns the recommendation. Until that act is recorded, the case is still a proposal. The signed-in Decision Case keeps who decided visible beside the recommendation.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'honesty-boundary-is-not-optional',
    title: 'Honesty Boundary Is Not Optional',
    description:
      'Sync states what is simulated, seeded, or out of scope. Calling a pilot “production,” hiding simulation, or marketing self-guided as live when it is not, crosses the honesty boundary. Naming the boundary is not weakness — it is the industrial requirement. A Decision Case that pretends plant authority Sync does not hold is not a Decision Case.',
    excerpt:
      'Calling a pilot production, hiding simulation, or marketing self-guided as live when it is not, crosses the honesty boundary. Naming what is simulated, seeded, or out of scope is the industrial requirement.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'alert-is-not-decision',
    title: 'Alert Is Not Decision',
    description:
      'An alert — a threshold breach, an anomaly flag, a red tile, a pager page, or a silenced notification — can surface that something crossed a rule. Seeing, acknowledging, or silencing an alert is not a Decision Case and not a decision. Sync may emit alerts, coverage gaps, and recommendations. A named human still opens a Decision Case on a question, cites approved evidence, and accepts, rejects, escalates, or returns.',
    excerpt:
      'Clearing an alert queue, muting a channel, or auto-closing a ticket must not be read as authorization, verification of outcome, work-order execution, or plant control.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'dashboard-is-not-decision',
    title: 'Dashboard Is Not Decision',
    description:
      'A dashboard can surface plant or maintenance state: KPI tiles, trend charts, health scores, and red, amber, and green status. Seeing that display is not a Decision Case and not a decision. Sync may show coverage, recommendations, and status. A named human still opens the case on a question, cites approved evidence, and accepts, rejects, escalates, or returns.',
    excerpt:
      'A green dashboard, an improved trend, or a cleared alert tile must not be read as authorization, verification of outcome, work-order execution, or plant control.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'question-is-not-decision',
    title: 'Question Is Not Decision',
    description:
      'A Decision Case opens on a reliability or maintenance question a named person can decide. The question is recorded before evidence or recommendation. Recording or refining a question is not the decision. Sync may hold the question and gather approved evidence. A named human accepts, rejects, escalates, or returns.',
    excerpt:
      'An open question, a clarified question, or a rephrased question is still a question. Sync may hold it and gather approved evidence. It is not authorization, execution, or plant control.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'coverage-is-not-control',
    title: 'Coverage Is Not Control',
    description:
      'Plant coverage is not control authority over work, isolation, or change. Sync may show coverage and recommend. A named human decides. Authorized execution systems write the work order or the isolation. A Decision Case that records a coverage gap does not put Sync in control of the plant.',
    excerpt:
      'Sensors, CMMS rows, dashboards, and patrol routes are coverage. They are not control authority over work, isolation, or change. A Decision Case that records a coverage gap does not put Sync in control of the plant.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
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
  'blank-is-not-zero': {
    relatedSlug: 'unknown-is-not-clear',
    relatedNote: 'Missing evidence is unknown. A blank is not a measured zero.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'verification-is-not-optional',
        note: 'A blank verification field is not a verified outcome of none.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'A named act does not turn an empty field into a measurement.',
      },
      {
        slug: 'honesty-boundary-is-not-optional',
        note: 'Stating the limit does not store a blank as zero.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A green tile does not fill an empty field with zero.',
      },
    ],
  },
  'unknown-is-not-clear': {
    relatedSlug: 'human-decision-is-not-optional',
    relatedNote: 'A named act still leaves missing evidence unknown.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'verification-is-not-optional',
        note: 'The check still needs a record. Unknown is not that check.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A proposal is not clearance of missing evidence.',
      },
      {
        slug: 'honesty-boundary-is-not-optional',
        note: 'Stating the limit does not record missing evidence as clear.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A green display is not clearance, and it is not the decision.',
      },
    ],
  },
  'human-decision-is-not-optional': {
    relatedSlug: 'honesty-boundary-is-not-optional',
    relatedNote: 'Naming the limit does not record who decided.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'recommend-is-not-authorize',
        note: 'A drafted proposal is not the recorded decision.',
      },
      {
        slug: 'question-is-not-decision',
        note: 'A recorded question is still not the named act.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'The recorded decision is still not plant execution.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The case stays open until the check is recorded.',
      },
    ],
  },
  'honesty-boundary-is-not-optional': {
    relatedSlug: 'alert-is-not-decision',
    relatedNote: 'A rule crossing is still not the decision.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'dashboard-is-not-decision',
        note: 'A status display is still not the decision.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A drafted proposal is not permission.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'Work intent on the case is still not plant execution.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The case stays open until the check is recorded.',
      },
    ],
  },
  'alert-is-not-decision': {
    relatedSlug: 'dashboard-is-not-decision',
    relatedNote: 'A status display is still not the decision.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'question-is-not-decision',
        note: 'Opening a question is still not the decision.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'An alert beside a proposal is not a named decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'A silenced notification is not the check that closes the case.',
      },
      {
        slug: 'action-is-not-execution',
        note: 'Clearing a queue does not write the work order.',
      },
    ],
  },
  'dashboard-is-not-decision': {
    relatedSlug: 'question-is-not-decision',
    relatedNote: 'Opening a question is still not the decision.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'coverage-is-not-control',
        note: 'A dashboard is part of what is watched. It is not control of the plant.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A status display is not a named decision on a recommendation.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'A green tile is not the check that closes the case.',
      },
    ],
  },
  'question-is-not-decision': {
    relatedSlug: 'coverage-is-not-control',
    relatedNote: 'A watched set is still not control of the plant.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'action-is-not-execution',
        note: 'Work intent on the case is still not execution.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A drafted proposal is not the named decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The case stays open until the check is recorded.',
      },
    ],
  },
  'coverage-is-not-control': {
    relatedSlug: 'action-is-not-execution',
    relatedNote: 'A recorded intent still does not execute the work.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'verification-is-not-optional',
        note: 'The case stays open until the check is recorded.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A coverage recommendation is a proposal. A named person decides.',
      },
    ],
  },
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
