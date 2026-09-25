'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('human-decision-is-not-optional');

export default function HumanDecisionIsNotOptionalPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Insights
        </Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">
              {article?.category ?? 'Decision Case'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Human Decision Is Not Optional
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A named person accepts, rejects, escalates, or returns the recommendation. That act
              is the decision. Until it is recorded, the case is still a proposal. The signed-in
              Decision Case keeps who decided visible beside the recommendation.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              A named person accepts, rejects, escalates, or returns the recommendation. That act
              is the decision. Until that act is recorded, the case is still a proposal. Authority
              stays with the person who can accept the operational consequence. The signed-in
              Decision Case keeps the person and the proposal together. The recorded human decision
              is mandatory. A green dashboard does not imply it. The system does not accept the
              recommendation on that person&apos;s behalf.
            </p>

            <p>
              Reliability work skips the act because everything around it looks finished. The
              dashboard is green. The alert has been cleared. The question has been sharpened. The
              recommendation is already written. The meeting moves on. Later the record is cited as
              if someone had decided. No named person had accepted, rejected, escalated, or
              returned the recommendation. The case was still a proposal. Authority had not moved.
            </p>

            <p>
              Sync keeps that split on the signed-in Decision Case. A signed-in user completes the
              case in a fixed order: Question, Evidence, Recommendation, Human decision, Action,
              Verification, and Learning. {fieldManual.author} states that order in{' '}
              <Link
                href={fieldManualPath()}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Field Manual {fieldManual.version}
              </Link>
              . The manuals index lives at{' '}
              <Link href="/manuals" className="text-[#3B82F6] hover:text-white transition-colors">
                /manuals
              </Link>
              . This essay is why the{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              step cannot be skipped, implied, or filled in by the system. The manual is the public
              contents. The chapter is the act.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">That act is the decision</h2>

            <p>
              A named person accepts, rejects, escalates, or returns the recommendation. That act
              is the human decision. Accept, reject, escalate, and return are the same kind of
              record: a named person has acted on the recommendation, and the case holds that act.
              Until one of those acts is recorded, the case is still a proposal.
            </p>

            <p>
              The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter publishes that step. It is step 04 on the spine. It sits after the
              recommendation and before action. The signed-in loop keeps the act explicit: the case
              shows who decided, and the recommendation remains visible beside the decision.
            </p>

            <p className="text-xl font-semibold text-white">
              The recorded human decision is mandatory.
            </p>

            <p>
              Skipping the act does not leave a quieter version of the same case. It leaves a
              proposal. A recommendation that nobody has accepted, rejected, escalated, or returned
              is still waiting on the person who can accept the operational consequence.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Until the act is recorded, the case is still a proposal
            </h2>

            <p>
              Until that act is recorded, the case is still a proposal. The recommendation can be
              complete. The evidence can sit on the case. The wording can be ready for a meeting.
              None of that records the decision. The case holds a proposed next action, the evidence
              it uses, and the uncertainty it leaves in view. Authority stays where it already sits.
            </p>

            <p className="text-xl font-semibold text-white">
              Authority stays with the person who can accept the operational consequence.
            </p>

            <p>
              That person is the one who can accept, reject, escalate, or return. The software that
              drafted the proposal does not hold that authority. A status display does not hold it.
              Silence after the draft does not transfer it. The system does not auto-accept the
              recommendation. Stage-1 readiness means a signed-in user can complete the Decision
              Case, and completion includes this named act. It does not include a rule that treats
              an unreviewed proposal as accepted.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The case keeps the person beside the proposal
            </h2>

            <p>
              The signed-in Decision Case keeps the person and the proposal together. Who decided
              stays visible beside the recommendation. A later reader can see both on the same
              record: the proposal that was offered, and the named person who accepted, rejected,
              escalated, or returned it.
            </p>

            <p>
              The reader does not have to infer the decision from a green tile, a cleared alert, or
              the fact that a recommendation exists. The chapter&apos;s sentence is specific. The
              case shows who decided, and the recommendation remains visible beside the decision. A
              record that cannot name the person has not recorded the act.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A proposal is not that act
            </h2>

            <p>
              Recommend is not authorize. A recommendation states a proposed next action, the
              evidence it uses, and the uncertainty it leaves in view. Drafting the proposal leaves
              authority where it already sits. That split is the subject of{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>
              . A drafted proposal is not permission.
            </p>

            <p>
              This essay is the next sentence. The proposal and the recorded decision are different
              objects. The human decision is the act that has to be on the case before the proposal
              is treated as decided. Evidence is required before a recommendation is treated as a
              decision. The named act is required as well. One does not stand in for the other.
              Until accept, reject, escalate, or return is recorded, the recommendation remains a
              proposal.
            </p>

            <p>
              Read the two steps as separate chapters:{' '}
              <Link
                href={fieldManualPath('recommendation')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommendation
              </Link>{' '}
              and{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>
              . The first can be drafted. The second is the named person&apos;s act on that draft.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Inputs do not record the act
            </h2>

            <p>
              A green dashboard does not imply the decision.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              states that seeing plant or maintenance state — a KPI tile, a trend, a health score,
              a red, amber, or green status — is not a Decision Case and not a decision. A green
              dashboard can sit beside the case. It does not accept the recommendation.
            </p>

            <p>
              An alert does not imply the decision either.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              states that seeing, acknowledging, or silencing an alert is not the named act.
              Clearing a queue does not record who decided.
            </p>

            <p>
              A question does not imply it.{' '}
              <Link
                href="/insights/question-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question Is Not Decision
              </Link>{' '}
              states that recording or refining a reliability or maintenance question is not the
              decision. The question is step 01. It is written before evidence and before a
              recommendation. The human decision is step 04, after a recommendation exists to
              decide. An open question, a clarified question, and a rephrased question are still
              questions.
            </p>

            <p className="text-xl font-semibold text-white">
              Those inputs are not the decision. This essay is the recorded act itself.
            </p>

            <p>
              The dashboard, the alert, and the question can all be present. The recommendation can
              be present. The decision is still the named person&apos;s accept, reject, escalate, or
              return, written on the case. Until that act is recorded, the case is still a proposal.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The recorded act does not execute the work
            </h2>

            <p>
              Accepting a recommendation records who decided. It does not write a work order,
              isolate equipment, or change the plant.{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              states the next boundary. Action is the record of the work the human decision
              authorized. On the case it is a disposition: work intent, held with the decision that
              produced it. ACTION stays locked until authorized execution systems write the work
              order or isolate the equipment. Sync does not perform that write. The product does
              not dispatch unsupervised work to equipment.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              states the gate after that intent. Authorization records who decided. It does not
              record whether the action did what it was supposed to do. The signed-in Decision Case
              stays open until that check is on the case. The human decision is not the check.
              Learning keeps the closed case — who decided, what was authorized, and what was
              checked — so a later question can see it. Learning does not inherit an acceptance
              that was never recorded.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              states the limit that governs the act. A Decision Case that pretends plant authority
              Sync does not hold is not a Decision Case. Naming who decided does not give the
              product authority to execute the work. This essay does not claim that Sync executes
              plant work. It does not claim that self-guided onboarding is a live product path. The
              recorded decision is a named human act on a recommendation.
            </p>

            <p>
              Read the later steps in the{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter and the{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter. The standing rule sits in{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>
              . None of them treats a missing human decision as decided, and none of them treats
              the recorded act as plant execution.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Where the public statement lives
            </h2>

            <p>
              Field Manual {fieldManual.version} is the public contents of this loop. Start at the{' '}
              <Link href="/manuals" className="text-[#3B82F6] hover:text-white transition-colors">
                manuals index
              </Link>{' '}
              or open{' '}
              <Link
                href={fieldManualPath()}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {fieldManual.title}
              </Link>{' '}
              directly. Human decision is step 04. It sits after the recommendation and before
              action. Later editions can deepen a chapter. The spine stays in this order. The
              recorded act stays mandatory.
            </p>

            <div className="bg-[#1E293B]/50 border border-[#334155] rounded-xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Decision Case spine</h3>
              <ol className="space-y-3">
                {spineChapters.map((chapter) => (
                  <li key={chapter.slug} className="flex items-start gap-3">
                    <span className="font-mono text-sm text-[#3B82F6]">{chapter.number}</span>
                    <Link
                      href={fieldManualPath(chapter.slug)}
                      className="text-[#3B82F6] hover:text-white transition-colors"
                    >
                      {chapter.spine}
                    </Link>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm leading-6 text-gray-400">
                The standing rule sits beside the spine:{' '}
                <Link
                  href={fieldManualPath(honestyChapter.slug)}
                  className="text-[#3B82F6] hover:text-white transition-colors"
                >
                  {honestyChapter.title}
                </Link>
                .
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What this article is not claiming
            </h2>

            <p>
              This is an essay about the Decision Case order, not a customer case study. It names
              no plant, states no savings figure, and claims no prevented failure. It states no OEM
              limit and no operating threshold. It does not claim that Sync executes plant work,
              writes a work order, isolates equipment, or controls a plant. It does not claim that
              the system auto-accepts a recommendation. It does not claim that self-guided
              onboarding is a live product path.
            </p>

            <p>
              Stage-1 readiness means a signed-in user can complete the Decision Case — question,
              evidence, recommendation, human decision, action, verification, and learning — and{' '}
              <Link
                href={fieldManualPath()}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Field Manual {fieldManual.version}
              </Link>{' '}
              describes that journey. This edition does not describe plant execute, a live connector
              tag pull, SMTP invite delivery, or automatic revocation of access on expiry as live.
              It does not describe Sync writing work orders, isolating equipment, or controlling the
              plant. Simulated or seeded telemetry and assets are practice records. They are not
              live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>
              , on why missing evidence is recorded as unknown, not as clear or ready, and why the
              operator must not treat unknown as go. Companion reading:{' '}
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              on why a named decision does not turn a verified record into assurance,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a drafted proposal is not permission,{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              on why Sync states what is simulated, seeded, or out of scope,{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why a recorded ACTION disposition is not plant execution,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded, and{' '}
              <Link
                href="/insights/question-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question Is Not Decision
              </Link>{' '}
              on why recording a reliability or maintenance question is not the human decision. A{' '}
              <Link
                href="/reliability-assessment"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Reliability Assessment
              </Link>{' '}
              asks whether the records can support a conclusion. A{' '}
              <Link
                href="/strategic-pilot"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Strategic Pilot
              </Link>{' '}
              is a governed proof around one operating decision. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the public statement of the act this essay describes.
            </p>

            <p>
              <Link
                href="/insights/assured-is-not-proven"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assured Is Not Proven
              </Link>{' '}
              states the next split: time-bounded confidence that an asset stays known-good under
              operating conditions, with ownership and monitoring, is still not proof of a specific
              claim under named conditions.
            </p>

            <p>
              <Link
                href="/insights/proof-is-not-authorization"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proof Is Not Authorization
              </Link>{' '}
              states the split after the chain closes. Proof answers whether a claim held. A named
              person still has to accept the consequence before the work is authorized.
            </p>

            <p>
              <Link
                href="/insights/authorization-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorization Is Not Accountability
              </Link>{' '}
              states the split after that act. A named person may start the work. That act is not
              the continuing ownership of results, exceptions, and learning after the work runs.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the decision, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the human decision: a named
                person accepts, rejects, escalates, or returns, and until that act is recorded the
                case is still a proposal. The Reliability Engineer workspace is where a signed-in
                Decision Case is completed. A Reliability Assessment is the bounded review when the
                question is whether the records can support a conclusion. None of those is a claim
                that Sync executes plant work, or that self-guided onboarding is a live product
                path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={fieldManualPath('human-decision')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
                >
                  Read Human decision
                </Link>
                <a
                  href={APP_SETUP_URL}
                  className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Try Reliability Engineer
                </a>
                <Link
                  href="/reliability-assessment"
                  className="inline-flex items-center justify-center px-6 py-3 text-[#3B82F6] font-semibold hover:text-white transition-colors"
                >
                  Reliability Assessment
                </Link>
              </div>
            </div>
          </div>
          <InsightNextSteps slug="human-decision-is-not-optional" />
        </motion.article>
      </div>
    </main>
  );
}
