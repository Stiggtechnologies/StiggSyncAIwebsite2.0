'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('silence-is-not-clearance');

export default function SilenceIsNotClearancePage() {
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
              Silence Is Not Clearance
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Silence, no reply, no alert, and an empty inbox are not authorization and not
              clearance. A missing operator response is not approved. A quiet dashboard is not
              controlled.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Silence, no reply, no alert, and an empty inbox are not authorization and not
              clearance. A missing operator response is not approved. A quiet dashboard is not
              controlled. On the Decision Case, clearance is a recorded act or a recorded check.
              The absence of a message is the absence of a record.
            </p>

            <p>
              A recommendation sits unread through a shift. The inbox shows nothing new. No alarm
              pages. The dashboard tile stays quiet. The meeting treats that quiet as a yes: nobody
              objected, so the work is approved, and the asset is under control. It is not. No one
              accepted, rejected, escalated, or returned the recommendation. No one recorded a
              verification. The plant did not come under a new authority because a screen stayed
              dark.
            </p>

            <p>
              This essay is the companion to{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              and{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>
              . Unknown Is Not Clear already states that a green dashboard, an empty field, or
              silence is not clearance, and that missing evidence stays unknown. Blank Is Not Zero
              keeps an empty field from being stored as a measured zero. This essay is the quiet
              itself. No reply, no alert, and an empty inbox do not clear the unknown, and they do
              not fill the blank.
            </p>

            <p>
              {fieldManual.author} states the Decision Case order in{' '}
              <Link
                href={fieldManualPath()}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Field Manual {fieldManual.version}
              </Link>
              : Question, Evidence, Recommendation, Human decision, Action, Verification, and
              Learning. The manuals index lives at{' '}
              <Link href="/manuals" className="text-[#3B82F6] hover:text-white transition-colors">
                /manuals
              </Link>
              . Human decision is step 04. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter says a named person accepts, rejects, escalates, or returns the
              recommendation, and that until that act is recorded the case is still a proposal.
              Verification is step 06. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter records whether the authorized action did what it was supposed to do. The
              check is a record. The lack of a new alarm is not the check.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat silence as a live clearance.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Silence, no reply, no alert, and an empty inbox are not authorization and not
              clearance
            </h2>

            <p>
              Authorization is a named acceptance of a recommendation, recorded on the case.
              Clearance is a recorded basis the next step can stand on: evidence that is present
              and fit, that named decision, and, where an action was authorized, a recorded
              verification. Silence supplies none of those records.
            </p>

            <p>
              Silence is no comment, no objection, and no spoken word in the meeting or on the
              case. The room was quiet. The comment line is empty. That quiet does not write an
              acceptance, and it does not record the evidence as present. A later reader who treats
              the lack of objection as a yes is reading a decision the case does not hold.
            </p>

            <p>
              No reply is the recommendation sent and the operator unanswered. The message left the
              queue. The answer did not come back. A missing answer is not an approval. A timeout
              is not a disposition. The clock running out does not accept the operational
              consequence for the person who did not answer.
            </p>

            <p>
              No alert is the absence of a threshold breach, a pager page, or a new notice.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              already keeps a rule crossing, an acknowledgement, and a silenced notification off
              the decision. This essay is the other side of that signal. The alert that never came
              is not a finding that the condition is clear, and it is not authorization to proceed.
              The absence of the page is not the opposite of the page.
            </p>

            <p>
              An empty inbox is no new message. It is not a decision record. An inbox that stayed
              empty did not accept the work, did not reject it, and did not verify an outcome. The
              queue looks finished because nothing is waiting in it. Finished is a recorded
              disposition and, after an authorized action, a recorded check. An empty list is
              neither.
            </p>

            <p className="text-xl font-semibold text-white">
              Silence, no reply, no alert, and an empty inbox are the absence of a record. They are
              not authorization, and they are not clearance.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A missing operator response is not approved
            </h2>

            <p>
              Approved means a named person accepted the recommendation and that act is on the
              case. A missing operator response is not approved. The person who did not answer has
              not accepted the operational consequence. Authority stays with the person who can
              accept it. The system does not fill the silence with an acceptance.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              states the four dispositions: accept, reject, escalate, or return. Until one of them
              is recorded, the case is still a proposal. The recorded act is mandatory. It is not
              implied by a green dashboard, and it is not auto-accepted by the system. A missing
              response is not a fifth disposition called approved. Auto-accept on no reply is the
              same failure as auto-accept on a quiet tile. The signed-in Decision Case keeps who
              decided visible beside the recommendation. An empty decision line means no one
              decided.
            </p>

            <p>
              Escalation that received no reply is still an open escalation. A return that was
              never answered is still waiting. Neither one approves the original proposal. The
              work does not become authorized because the person it was sent to stayed silent. The
              case stays a proposal until a named person records the act.
            </p>

            <p>
              The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is that rule in the Field Manual. The case shows who decided, and the
              recommendation remains visible beside the decision. Silence has no name on that line.
              A later reader cannot reconstruct an approval from an inbox that nobody answered.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A quiet dashboard is not controlled
            </h2>

            <p>
              A quiet dashboard is not controlled. Quiet means the display is not showing a new
              alarm, a new gap, or a new tile. Controlled means a named authority holds the work,
              the isolation, or the change, through the systems that already have that authority,
              and the record says so. A dark screen is not that holding.
            </p>

            <p>
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps the display off the decision. A green tile is not authorization, not
              verification, and not plant control.{' '}
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              keeps a watched set off control authority. This essay is the quiet form of both. No
              alert, a cleared tile, or a screen with nothing on it does not mean the asset is
              under control. It does not put Sync in control of the plant. The absence of a page is
              not isolation, not a permit, and not a completed repair.
            </p>

            <p>
              Sync may show status. It does not execute plant work, write the work order, or
              isolate equipment. A quiet screen does not change that limit. Permit, isolation, and
              asset-state truth stay with the systems that already hold them. Silence in the
              dashboard does not clear that truth, and an empty inbox does not either.
            </p>

            <p>
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              already refuses to read a green dashboard as clearance of missing evidence. A quiet
              dashboard can sit on unknown labour, unknown staging, or a feed that was never
              configured. The color, and the lack of a new color, leave that evidence unknown. The
              operator must not treat the quiet as go.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Where silence sits on the Decision Case
            </h2>

            <p>
              The order is Question, Evidence, Recommendation, Human decision, Action,
              Verification, and Learning. Silence does not complete any step. It leaves the case
              where it already was.
            </p>

            <p>
              Question is step 01. Silence does not open the question, and it does not close it.
              An unasked question that nobody raised is not a recorded question, and it is not a
              decision that the question does not matter.{' '}
              <Link
                href="/insights/question-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question Is Not Decision
              </Link>{' '}
              says recording a question is not the decision. Not recording one because the room was
              quiet is not a decision either. The{' '}
              <Link
                href={fieldManualPath('question')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question
              </Link>{' '}
              chapter still requires the question on the case before evidence or recommendation.
            </p>

            <p>
              Evidence is step 02. No reply does not supply evidence. An empty inbox is not
              observed fact. What is still missing stays missing.{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              records that gap as unknown, not as clear or ready.{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>{' '}
              keeps the empty field from being stored as a measured zero. Silence is the third form
              of the same gap. The missing comment is not evidence the condition was checked and
              found clear, and it is not a measurement of none. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter keeps the split visible: observed fact, assumption, and what is still
              missing. A proposal with no basis is not ready for a human decision. Silence does not
              give it a basis.
            </p>

            <p>
              Recommendation is step 03. A proposal that sits without an answer is still a
              proposal. Drafting the next action does not authorize the work. Waiting out the inbox
              does not authorize it either. A recommendation nobody replied to has the same status
              it had when it was drafted. The{' '}
              <Link
                href={fieldManualPath('recommendation')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommendation
              </Link>{' '}
              chapter leaves authority where it already sits.
            </p>

            <p>
              Human decision is step 04. The named act is accept, reject, escalate, or return. A
              missing operator response is none of those. The case remains a proposal. The person
              who can accept the operational consequence has not done so. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter does not list silence as a disposition.
            </p>

            <p>
              Action is step 05. Action records the work the human decision authorized. There is
              no action record from a silence. Plant execute stays outside Stage-1. A quiet
              dashboard does not dispatch the work, and it does not mean the work was done. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter keeps that work with the systems of record the customer already runs, and
              with the people who already hold operating authority.
            </p>

            <p>
              Verification is step 06. Verification records whether the authorized action did what
              it was supposed to do. No new alert after the work is not that record. An empty
              inbox is not the check. The case stays open until the check is on the case. A
              verified outcome can say the expected signal was not available, or that the action
              did not produce the intended effect. Those are records. The signal that never came,
              with no check written down, is not. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is that recorded check. Stage-1 does not treat a live tag pull, or the
              absence of one, as the proof.
            </p>

            <p>
              Learning is step 07. Learning keeps the closed case so a later question can see what
              was believed, what was authorized, and what was checked. A later case cannot inherit
              a silence. There is no closed case in an empty inbox.{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              says the later question inherits the verified record, not a hoped-for quiet. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes that rule. It does not publish a silence as a result.
            </p>

            <p className="text-xl font-semibold text-white">
              Each step needs a record. Silence leaves every step unrecorded.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Recommend is not authorize, and the human decision is still required
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them turns silence into clearance.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              says a drafted next action is a proposal. Evidence is required before that proposal
              is treated as a decision. Acceptance stays with a named person. Silence is not the
              missing authorization. A recommendation waiting in an inbox is still a
              recommendation. No reply does not convert the proposal into a decision, and an empty
              inbox the next morning does not either. The contrast is the direction of the quiet.
              Recommend Is Not Authorize refuses to treat the draft as the yes. This essay refuses
              to treat the lack of an answer as the yes. Both leave the case a proposal.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              says the recorded act is mandatory: not optional, not implied by a green dashboard,
              and not auto-accepted by the system. This essay names the quiet people try to use as
              that implication. No reply, no objection, no alert, and an empty inbox are not the
              act. The named person still has to accept, reject, escalate, or return. Until that
              line is filled, the recommendation remains visible as a proposal, and who decided
              stays blank. A blank decision line is not a decision of none. It is the decision not
              yet made.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              says authorization records who decided, and the case stays open until the check is
              recorded. A quiet dashboard after the work is not that check. No alert is not
              evidence the action did what it was supposed to do. The operator writes the
              observation, including an observation that the expected signal was not available.
              The empty verification field stays empty until then.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. A quiet practice screen
              is not a live clearance. Simulated or seeded telemetry can sit without an alarm. That
              quiet is a practice record. It is not proof the plant is controlled, and it is not
              permission to market the silence as an approved outcome. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps recommend from being authorize, and it keeps Stage-1 from claiming a
              live result the edition does not hold. Silence is not a way around that boundary.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Where the public statement lives
            </h2>

            <p>
              Field Manual {fieldManual.version} is the public contents of the Decision Case. Start
              at the{' '}
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
              directly.{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              is step 04. A missing operator response is not the named act, and the case stays a
              proposal until the act is recorded.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. No alert and an empty inbox are not the check.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating silence as authorization or as control. Later editions
              can deepen a chapter. The spine stays in this order.
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
              This is an essay about the record, not a customer case study. It names no plant,
              states no savings figure, and claims no prevented failure. It states no OEM limit and
              no operating threshold. It does not claim that Sync executes plant work, writes a
              work order, isolates equipment, or controls a plant. It does not claim that silence
              is clearance, that a missing operator response is approved, or that a quiet dashboard
              is controlled. It does not claim that self-guided onboarding is a live product path.
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
              live plant results, and a quiet practice screen is not a live clearance. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              on why missing evidence is recorded as unknown, not as clear or ready, and why
              silence is not that clearance,{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>{' '}
              on why an empty field is not a measured zero,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a proposal is not authorization,{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              on why a named person must record the disposition,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded, and{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              on why a status display is not the decision. A{' '}
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
              chapter is the public statement of the named act, and the{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the public statement of the check.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Record the decision, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order. Silence, no reply, no alert,
                and an empty inbox are not authorization and not clearance. A missing operator
                response is not approved. A quiet dashboard is not controlled. The Reliability
                Engineer workspace is where a signed-in Decision Case is completed. A Reliability
                Assessment is the bounded review when the question is whether the records can
                support a conclusion. None of those is a claim that Sync executes plant work, or
                that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="silence-is-not-clearance" />
        </motion.article>
      </div>
    </main>
  );
}
