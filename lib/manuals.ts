export const FIELD_MANUAL_AUTHOR = 'Orville Davis';

export type ManualChapter = {
  slug: string;
  number: string;
  spine: string;
  title: string;
  description: string;
  paragraphs: readonly string[];
};

export type FieldManual = {
  slug: string;
  version: string;
  title: string;
  description: string;
  excerpt: string;
  published: string;
  author: string;
  chapters: readonly ManualChapter[];
};

/**
 * Public doctrine for the signed-in Decision Case.
 * Stage-1 describes that loop. It does not describe plant execute,
 * live connector tag pull, SMTP invite delivery, or auto-revoke on expiry.
 */
export const fieldManual: FieldManual = {
  slug: 'field-manual',
  version: 'v0',
  title: 'Sync Field Manual',
  description:
    'Field Manual v0 by Orville Davis. The Decision Case runs question, evidence, recommendation, human decision, action, verification, and learning. Recommend is not authorize. Evidence is required. Stage-1 readiness is the signed-in case.',
  excerpt:
    'The public contents of the Decision Case: question, evidence, recommendation, human decision, action, verification, and learning — with the Stage-1 boundaries held in view.',
  published: '2026-09-25',
  author: FIELD_MANUAL_AUTHOR,
  chapters: [
    {
      slug: 'question',
      number: '01',
      spine: 'Question',
      title: 'Question',
      description:
        'A Decision Case opens on a reliability or maintenance question a person can decide. The question is recorded before evidence or authority.',
      paragraphs: [
        'A Decision Case opens on a question a reliability or maintenance person can decide: what happened, what should happen next, or what can wait. The question is the case. On the signed-in product, that question is recorded as the first step of the loop, before evidence is attached and before anyone is asked to approve.',
        'This chapter states that order. It does not name a site, a unit, or a result. A question that never acquires an evidence record remains a question.',
      ],
    },
    {
      slug: 'evidence',
      number: '02',
      spine: 'Evidence',
      title: 'Evidence',
      description:
        'Evidence is the inspectable record on the case: observed fact, assumption, and what is still missing. Stage-1 does not claim a live connector tag pull.',
      paragraphs: [
        'Evidence is the part of the case a later reader can inspect: approved knowledge, asset context, work history, condition information, and a visible split between observed fact, assumption, and what is still missing. The recommendation waits on that record. A proposal with no basis is not ready for a human decision.',
        'Stage-1 evidence is the record held on the case. A live connector that pulls historian or control-system tags sits outside this edition.',
      ],
    },
    {
      slug: 'recommendation',
      number: '03',
      spine: 'Recommendation',
      title: 'Recommendation',
      description:
        'A recommendation is a reviewable proposal: the next action, its evidence, and its uncertainty. Drafting the proposal does not authorize the work.',
      paragraphs: [
        'The recommendation states a proposed next action, the evidence it uses, and the uncertainty it leaves in view. The signed-in Decision Case can hold that proposal so a person can read it. Drafting the proposal leaves authority where it already sits.',
        'Recommend is not authorize. Acceptance, rejection, escalation, and return belong to the human decision, under a named person.',
      ],
    },
    {
      slug: 'human-decision',
      number: '04',
      spine: 'Human decision',
      title: 'Human decision',
      description:
        'A named person accepts, rejects, escalates, or returns the recommendation. That act is the decision. The case keeps the person and the proposal together.',
      paragraphs: [
        'A named person accepts, rejects, escalates, or returns the recommendation. That act is the human decision. The signed-in loop keeps it explicit: the case shows who decided, and the recommendation remains visible beside the decision.',
        'Until that act is recorded, the case is still a proposal. Authority stays with the person who can accept the operational consequence.',
      ],
    },
    {
      slug: 'action',
      number: '05',
      spine: 'Action',
      title: 'Action',
      description:
        'Action records the work the human decision authorized. Plant execute is outside Stage-1. Work continues through the customer’s systems of record.',
      paragraphs: [
        'Action is the record of the work the human decision authorized. It states what was approved to happen next and keeps that statement on the case, beside the question and the evidence. The signed-in loop includes this step so the decision and the intended work stay in one record.',
        'Plant execute is outside Stage-1. The product does not dispatch unsupervised work to equipment. Work that follows the decision moves through the customer’s systems of record and the people who already hold operating authority.',
      ],
    },
    {
      slug: 'verification',
      number: '06',
      spine: 'Verification',
      title: 'Verification',
      description:
        'Verification records whether the authorized action did what it was supposed to do. Stage-1 does not treat a live tag pull as that proof.',
      paragraphs: [
        'Verification records whether the authorized action did what it was supposed to do, and which evidence would show that. The Decision Case keeps the check on the same record as the question, the recommendation, and the human decision.',
        'Stage-1 verification is that recorded check. A live pull of control-system tags is not the proof this edition describes.',
      ],
    },
    {
      slug: 'learning',
      number: '07',
      spine: 'Learning',
      title: 'Learning',
      description:
        'Learning keeps the closed case so a later question can see what was believed, authorized, and checked. This chapter states the rule. It reports no customer result.',
      paragraphs: [
        'Learning keeps the closed case — question, evidence, recommendation, human decision, action, and verification — so a later question can see what was believed, what was authorized, and what was checked. The signed-in loop ends on that record.',
        'This chapter publishes the rule. It names no plant, states no savings figure, and claims no prevented failure.',
      ],
    },
    {
      slug: 'honesty-boundaries',
      number: '—',
      spine: 'Boundaries',
      title: 'Honesty boundaries',
      description:
        'Recommend is not authorize. Evidence is required. Stage-1 readiness is the signed-in Decision Case. Plant execute, live tag pull, SMTP invites, and auto-revoke on expiry are not described as live.',
      paragraphs: [
        'Three boundaries govern every chapter in this edition. Recommend is not authorize: a drafted proposal does not permit the work. Evidence is required: a recommendation that cannot show its basis is not treated as a decision. Stage-1 readiness means a signed-in user can complete the Decision Case — question, evidence, recommendation, human decision, action, verification, and learning — and this manual describes that journey.',
        'Stage-1 is the limit of the claim. This edition does not describe plant execute, a live connector tag pull, SMTP invite delivery, or automatic revocation of access on expiry as live. It contains no customer case study.',
      ],
    },
  ],
};

export const manuals = [fieldManual] as const;

export function getFieldManualChapter(slug: string) {
  return fieldManual.chapters.find((chapter) => chapter.slug === slug);
}

export function fieldManualPath(chapterSlug?: string) {
  const base = `/manuals/${fieldManual.slug}`;
  return chapterSlug ? `${base}/${chapterSlug}` : base;
}

export const spineChapters = fieldManual.chapters.filter((chapter) => chapter.slug !== 'honesty-boundaries');

export const honestyChapter = fieldManual.chapters.find((chapter) => chapter.slug === 'honesty-boundaries')!;
