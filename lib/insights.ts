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
    slug: 'anecdote-is-not-evidence',
    title: 'Anecdote Is Not Evidence',
    description:
      'Anecdote is not evidence. A single operator story, a hallway claim, one shift’s memory of “how it always fails,” a vendor demo vignette, or a loud near-miss retelling can feel persuasive. That is anecdote. Anecdote can prompt a question or a recommendation to gather approved evidence. It is not evidence, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Sync may surface an anecdote as a prompt to investigate when it is labeled unconfirmed. A named human still decides. Companion to Sample Is Not Population, Noise Is Not Signal, Symptom Is Not Cause, Assumption Is Not Evidence, Confidence Is Not Evidence, Correlation Is Not Causation, and Verification Is Not Optional.',
    excerpt:
      'A single operator story, a hallway claim, a memory of how it always fails, a vendor demo vignette, or a loud near-miss retelling can prompt a question. It is not evidence, not a diagnosis, not root cause, and not a Decision Case.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'sample-is-not-population',
    title: 'Sample Is Not Population',
    description:
      'Sample is not population. A handful of observed cases, a few plants, a short list of assets that alarmed, or the work orders that happened to be written is a sample. The fleet, the asset class, and the sites the claim is supposed to cover are the population. A sample can inform a recommendation to investigate. It is not population-level proof, not a diagnosis of the fleet, not root cause for the class, not authorization for fleet-wide corrective work, not a verified operational outcome for assets that were not observed, and not a Decision Case. Sync may surface a sample beside approved evidence. Sync refuses to treat a sample as population-level proof. A named human still records the Decision Case. Companion to Noise Is Not Signal, Symptom Is Not Cause, Threshold Is Not Diagnosis, Correlation Is Not Causation, Proxy Is Not Outcome, and Verification Is Not Optional.',
    excerpt:
      'A handful of observed cases or plants is not the fleet. A sample can inform a recommendation to investigate. It is not population-level proof and not a Decision Case.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'noise-is-not-signal',
    title: 'Noise Is Not Signal',
    description:
      'Noise is not signal. Sensor chatter, false positives, process variation, nuisance alarms, telemetry spikes without a confirmed asset state change, and operator anecdote volume can fill a dashboard. That is noise. Noise can inform a recommendation to investigate. It is not an actionable signal, not a diagnosis, not root cause, not authorization for corrective work, not a verified operational outcome, and not a Decision Case. Sync may surface correlated noise with approved evidence. A named human still records the Decision Case. Companion to Symptom Is Not Cause, Threshold Is Not Diagnosis, Alert Is Not Decision, Correlation Is Not Causation, Proxy Is Not Outcome, and Verification Is Not Optional.',
    excerpt:
      'Sensor chatter, false positives, nuisance alarms, and telemetry spikes without a confirmed asset state change can fill a dashboard. That is noise. Noise can inform a recommendation to investigate. It is not an actionable signal and not a Decision Case.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'symptom-is-not-cause',
    title: 'Symptom Is Not Cause',
    description:
      'Symptom is not cause. A vibration spike, a hot bearing, a pressure drop, an operator report, a CMMS complaint code, a red tile, or any other observed symptom can inform a recommendation. It does not name the failure mode, prove root cause, authorize corrective work, verify outcome, or replace a named human decision on the Decision Case. Sync may surface symptoms and correlate them with approved evidence. A named human still decides. Companion to Threshold Is Not Diagnosis, Alert Is Not Decision, Correlation Is Not Causation, Proxy Is Not Outcome, and Verification Is Not Optional.',
    excerpt:
      'A vibration spike, a hot bearing, a pressure drop, an operator report, a CMMS complaint code, or a red tile can inform a recommendation. It does not name the failure mode, prove root cause, authorize corrective work, or replace a named human decision.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'threshold-is-not-diagnosis',
    title: 'Threshold Is Not Diagnosis',
    description:
      'Threshold is not diagnosis. Crossing a numeric threshold, limit, alarm band, or set-point is not a diagnosis and not a Decision Case. A threshold breach can inform a recommendation. It does not name the failure mode, authorize action, verify outcome, or replace a named human decision. Sync may surface threshold breaches. A named human still decides. Companion to Alert Is Not Decision, Correlation Is Not Causation, Proxy Is Not Outcome, and Verification Is Not Optional.',
    excerpt:
      'Crossing a numeric threshold, limit, alarm band, or set-point is not a diagnosis and not a Decision Case. A breach can inform a recommendation. It does not name the failure mode, authorize action, verify outcome, or replace a named human decision.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'proxy-is-not-outcome',
    title: 'Proxy Is Not Outcome',
    description:
      'Proxy is not outcome. A KPI, a leading indicator, a model score, a green tile, a closed work-order count, an MTBF estimate, a sensor health %, or any other stand-in measure can inform a recommendation. It is not the verified operational outcome on the Decision Case. Treating a proxy as the outcome invents false closure, skips verification, and teaches the wrong lesson into Learning. Sync may surface proxies. A named human still decides. Companion to Trend Is Not Truth, Correlation Is Not Causation, and Verification Is Not Optional.',
    excerpt:
      'A KPI, a leading indicator, a model score, a green tile, a closed work-order count, an MTBF estimate, or a sensor health % can inform a recommendation. It is not the verified operational outcome. Sync may surface proxies. A named human still decides.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'trend-is-not-truth',
    title: 'Trend Is Not Truth',
    description:
      'Trend is not truth. A rising or falling line, a co-moving tag cluster, a week-over-week delta, or a “we’ve been trending this way” narrative is not a recorded causal check and not a verified outcome. A trend can inform a recommendation. It does not authorize action, clear a gate, or replace a named human decision on the Decision Case. Sync recommends. A named human decides. Companion to Correlation Is Not Causation and Confidence Is Not Evidence.',
    excerpt:
      'A rising or falling line, a co-moving tag cluster, a week-over-week delta, or a “we’ve been trending this way” narrative is not a recorded causal check and not a verified outcome. Sync recommends. A named human decides.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'correlation-is-not-causation',
    title: 'Correlation Is Not Causation',
    description:
      'Correlation is not causation. Co-moving tags, coincident alerts, and dashboard trends can show that signals moved together. They are not a recorded causal check, and they do not authorize action. Sync recommends. A named human decides. Companion to Confidence Is Not Evidence and Assumption Is Not Evidence.',
    excerpt:
      'Co-moving tags, coincident alerts, and dashboard trends are not a recorded causal check. They do not authorize action. Sync recommends. A named human decides.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'confidence-is-not-evidence',
    title: 'Confidence Is Not Evidence',
    description:
      'Confidence is not evidence. A strong gut feel, a high model score, years of tribal “we’ve always known,” or a manager’s certainty is still not a recorded check or verified outcome on the Decision Case. Clearance, authorization, and learning require a recorded fact — a check, a measurement, or a verified outcome — not how sure someone feels. Companion to Assumption Is Not Evidence.',
    excerpt:
      'A strong gut feel, a high model score, or a manager’s certainty is not a recorded check. Clearance, authorization, and learning still require a recorded fact, not how sure someone feels.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'assumption-is-not-evidence',
    title: 'Assumption Is Not Evidence',
    description:
      'An assumption is not evidence. A belief, a habit, a prior shift’s story, a tribal “we always do it this way,” or an unverified model output is not a recorded fact on the Decision Case. Clearance, authorization, and learning require a recorded check or a verified outcome, not a confident guess. Companion to Unknown Is Not Clear, Blank Is Not Zero, and Silence Is Not Clearance.',
    excerpt:
      'A belief, a habit, a prior shift’s story, or an unverified model output is not a recorded fact. Clearance, authorization, and learning still require a recorded check or a verified outcome.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
  {
    slug: 'silence-is-not-clearance',
    title: 'Silence Is Not Clearance',
    description:
      'Silence, no reply, no alert, and an empty inbox are not authorization and not clearance. A missing operator response is not approved. A quiet dashboard is not controlled. On the Decision Case, the named human decision and the recorded verification are the record. Companion to Unknown Is Not Clear and Blank Is Not Zero.',
    excerpt:
      'No reply is not approval. An empty inbox is not clearance. A quiet dashboard is not control. The Decision Case stays a proposal until a named person records the decision, and it stays open until verification is on the case.',
    category: 'Decision Case',
    readTime: '8 min read',
    published: '2026-09-25',
    author: 'Orville Davis',
  },
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
  'anecdote-is-not-evidence': {
    relatedSlug: 'sample-is-not-population',
    relatedNote: 'A handful of cases is not the fleet. A story about that handful is not evidence.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'noise-is-not-signal',
        note: 'Chatter on the dashboard is not an actionable signal. A story about that chatter is not evidence.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'An observed symptom is not the cause. A story about that symptom is not evidence.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A line that was crossed is not a diagnosis. A story about that line is not evidence.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'A belief is not a recorded fact. A retelling does not record it.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the story is true is not a recorded check.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Co-moving tags are not a cause. A hallway claim does not record one.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. Anecdote clearance is not the check.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A stand-in measure is not the verified outcome. A story is not the check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope is not the truth. A memory of the slope is not a recorded check.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert is not a decision. A story about the alert is not one either.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A display is not a decision. A vignette about the display is not evidence.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not a near-miss retelling.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A story does not record it as clear.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. An anecdote does not fill it.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A story about the quiet is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A story without a reconstructable trail is not observed fact.',
      },
    ],
  },
  'sample-is-not-population': {
    relatedSlug: 'noise-is-not-signal',
    relatedNote: 'Chatter on a dashboard is not an actionable signal. A handful of cases is not the fleet.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A story about the handful is not evidence and not the fleet.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A symptom seen on a few assets is not the cause for the population.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A line crossed on a sample is not a diagnosis of the fleet.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert on the observed units is still not a decision for the class.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Co-movement inside a sample is not a recorded causal check for the population.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A stand-in computed on the handful is not the verified operational outcome.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A settled sample is not the check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope drawn through the observed cases is still not a recorded check.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the handful represents the fleet is not a recorded check.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A tile on the assets that alarmed is a display. It is not the population.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not a sample stored as the fleet.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'We saw it here, so the fleet has it, is not a recorded fact.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A sample does not fill the unobserved field.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A sample does not record the fleet as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. Plants that did not report are not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A list without a trail of who was observed is not population-level proof.',
      },
    ],
  },
  'noise-is-not-signal': {
    relatedSlug: 'symptom-is-not-cause',
    relatedNote: 'An observed symptom is not the cause. Chatter on the dashboard is not an actionable signal.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A story about the chatter is not evidence and not an actionable signal.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A handful of cases is not the fleet. Chatter in that handful is still not an actionable signal.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A line that was crossed is not a diagnosis. Noise around the line is still noise.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert can report chatter. Seeing it is still not a decision.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Tags that move together are not a recorded causal check.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A stand-in measure is not the verified operational outcome.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. Clearing the chatter is not the check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope in the chatter is still not a recorded check.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the chatter names the mode is not a recorded check.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A full dashboard is a display. It is not the Decision Case.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not cleared noise.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'The room is loud, so the mode is known, is not a recorded fact.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. Chatter does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. Noise does not record it as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A quiet queue is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'Chatter without a reconstructable trail is not an actionable signal.',
      },
    ],
  },
  'symptom-is-not-cause': {
    relatedSlug: 'threshold-is-not-diagnosis',
    relatedNote: 'A line that was crossed is not the diagnosis. An observed symptom is not the cause.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A story about the symptom is not evidence and not the cause.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A symptom seen on a few assets is not the cause for the population.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Chatter around a symptom is not an actionable signal and not the cause.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'Acknowledging the symptom the alert reports is still not a decision.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Holding a symptom beside approved evidence does not prove the cause.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'Symptom clearance is not the verified operational outcome.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A symptom that went away is not the check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope that shows up as a symptom is still not a recorded cause.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the symptom names the mode is not a recorded check.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A red tile is a display. It is not the cause.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not the symptom stored as the cause.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: '“The bearing is hot, so we know the cause” is not a recorded fact.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A symptom does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A symptom does not record it as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A quiet asset is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A candidate cause without a reconstructable trail is not a cause.',
      },
    ],
  },
  'threshold-is-not-diagnosis': {
    relatedSlug: 'proxy-is-not-outcome',
    relatedNote: 'A stand-in is not the outcome. A threshold breach is not the diagnosis.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A story about the breach is not evidence and not a diagnosis.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A threshold crossed on a sample is not a diagnosis of the fleet.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Chatter that filled the dashboard is not an actionable signal and not a Decision Case.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'An observed symptom is not the cause and not the Decision Case.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert can report a breach. Seeing it is still not a decision.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Tags that cross together are not a named failure mode.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A return inside the band is not the check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope that later crosses a line is still not a recorded check.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the breach names the mode is not a recorded check.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A red band is a display. It is not the Decision Case.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not a hoped-for return inside the band.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: '“It crossed, so we know what failed” is not a recorded fact.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A breach does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A breach does not record it as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A quiet band is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A line without a reconstructable trail is not a diagnosis.',
      },
    ],
  },
  'proxy-is-not-outcome': {
    relatedSlug: 'trend-is-not-truth',
    relatedNote: 'A slope is not the truth. A proxy move is not the verified outcome.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A retelling of the proxy move is not evidence and not the outcome.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A proxy that moved on a few assets is not a population outcome.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'A noisy stand-in is not an actionable signal and not the verified outcome.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A symptom that cleared is not the verified outcome.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A line that was crossed is not a diagnosis and not the Decision Case.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Co-movement is not causation. A proxy that moved with the work is not the check.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'A high model score is not a recorded check, and it does not close the case.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A green tile is a display. It is not the verified outcome.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A proxy move is not the check.',
      },
      {
        slug: 'learning-requires-a-verified-outcome',
        note: 'Learning inherits the verified outcome, not a hoped-for proxy move.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'A stand-in story is not a recorded fact.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert beside a green tile is still an alert, not a decision.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A proxy does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A proxy does not record it as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A quiet proxy is not the decision.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A score without a reconstructable trail is not the outcome.',
      },
    ],
  },
  'trend-is-not-truth': {
    relatedSlug: 'correlation-is-not-causation',
    relatedNote: 'Co-movement is not causation. A slope is not the recorded truth.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A memory of how the line always fails is not a recorded check.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'A slope on a handful of tags is not fleet truth.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'A noisy slope is not an actionable signal and not a recorded check.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A slope that looks like a symptom is still not the cause.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'A line that was crossed is not a diagnosis and not a recorded check.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A stand-in measure is not the verified operational outcome.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure the line will continue is not a recorded check.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'A trend narrative is not a recorded fact.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A rising or falling line is a display. It does not authorize action.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert beside a slope is still an alert, not a decision.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A delta does not fill it.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A trend does not record it as clear.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. A quiet slope is not the decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A week-over-week delta is not the check.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A chart without a reconstructable trail is not observed truth.',
      },
    ],
  },
  'correlation-is-not-causation': {
    relatedSlug: 'confidence-is-not-evidence',
    relatedNote: 'Being sure is not a recorded check. A co-moving trend is not a causal check.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A hallway claim about co-movement is not a recorded causal check.',
      },
      {
        slug: 'sample-is-not-population',
        note: 'Co-movement in a sample is not a causal check for the population.',
      },
      {
        slug: 'noise-is-not-signal',
        note: 'Co-moving chatter is not a recorded causal check and not an actionable signal.',
      },
      {
        slug: 'symptom-is-not-cause',
        note: 'A symptom held beside co-moving tags still does not prove the cause.',
      },
      {
        slug: 'threshold-is-not-diagnosis',
        note: 'Tags that cross a band together still do not name the failure mode.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'A KPI, a score, or a closed count is not the verified outcome.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A rising or falling line is not a recorded check and not a verified outcome.',
      },
      {
        slug: 'assumption-is-not-evidence',
        note: 'A belief is not a recorded fact. Co-movement does not record the cause.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. A related chart does not record it as clear.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A trend does not fill it.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. Coincident alerts are not the decision.',
      },
      {
        slug: 'dashboard-is-not-decision',
        note: 'A dashboard trend is a display. It does not authorize action.',
      },
      {
        slug: 'alert-is-not-decision',
        note: 'An alert is not a decision. Two alerts in one window are still alerts.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. Co-movement is not the check.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A chart without a reconstructable trail is not observed causation.',
      },
    ],
  },
  'confidence-is-not-evidence': {
    relatedSlug: 'assumption-is-not-evidence',
    relatedNote: 'An assumption is not a recorded fact. Being sure does not make it one.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A confident retelling is not a recorded check.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Tags that move together are not a recorded causal check.',
      },
      {
        slug: 'trend-is-not-truth',
        note: 'A slope and a week-over-week delta are not a recorded check.',
      },
      {
        slug: 'proxy-is-not-outcome',
        note: 'Being sure a proxy moved is not the verified outcome.',
      },
      {
        slug: 'unknown-is-not-clear',
        note: 'Missing evidence stays unknown. Confidence does not record it as clear.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'A blank is not a measured zero. A high score does not fill it.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not clearance. Certainty about the quiet is not the decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A gut feel is not the check.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A high model score without a reconstructable trail is not observed fact.',
      },
    ],
  },
  'assumption-is-not-evidence': {
    relatedSlug: 'unknown-is-not-clear',
    relatedNote: 'Missing evidence stays unknown. An assumption does not record it as fact.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'anecdote-is-not-evidence',
        note: 'A prior shift story is not a recorded fact.',
      },
      {
        slug: 'correlation-is-not-causation',
        note: 'Co-moving tags are not a recorded causal check, and they do not authorize action.',
      },
      {
        slug: 'confidence-is-not-evidence',
        note: 'Being sure does not record the check. A high score is not the measurement.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'An empty field is not a measured zero. An assumption does not fill it.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Quiet is not approval. A story about that quiet is not the decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'The check is a record. A confident guess is not the check.',
      },
      {
        slug: 'evidence-lineage-is-not-optional',
        note: 'A model line without a reconstructable trail is not observed fact.',
      },
    ],
  },
  'silence-is-not-clearance': {
    relatedSlug: 'unknown-is-not-clear',
    relatedNote: 'Missing evidence stays unknown. Silence does not clear it.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'assumption-is-not-evidence',
        note: 'A belief or a model line is not a recorded fact.',
      },
      {
        slug: 'blank-is-not-zero',
        note: 'An empty field is not a measured zero, and silence does not fill it.',
      },
      {
        slug: 'recommend-is-not-authorize',
        note: 'A proposal is not authorization. No reply does not authorize it.',
      },
      {
        slug: 'human-decision-is-not-optional',
        note: 'A missing operator response is not the named decision.',
      },
      {
        slug: 'verification-is-not-optional',
        note: 'A quiet case is not the check that closes it.',
      },
    ],
  },
  'blank-is-not-zero': {
    relatedSlug: 'unknown-is-not-clear',
    relatedNote: 'Missing evidence is unknown. A blank is not a measured zero.',
    next: 'field-manual',
    includePilot: true,
    also: [
      {
        slug: 'assumption-is-not-evidence',
        note: 'An assumption does not turn a blank into a measurement.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'Silence does not turn a blank into a measured zero.',
      },
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
        slug: 'assumption-is-not-evidence',
        note: 'An assumption does not record missing evidence as fact.',
      },
      {
        slug: 'silence-is-not-clearance',
        note: 'No reply, no alert, and an empty inbox are not clearance.',
      },
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
