'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('assumption-is-not-evidence');

export default function AssumptionIsNotEvidencePage() {
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
              Assumption Is Not Evidence
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              An assumption is not evidence. A belief, a habit, a prior shift&apos;s story, a tribal
              &quot;we always do it this way,&quot; or an unverified model output is not a recorded
              fact on the Decision Case.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Facts come before assumptions. Clearance, authorization, and learning require a
              recorded check or a verified outcome. A confident guess is not that record. On the
              Decision Case, an assumption can stay visible if it is labeled as an assumption. It
              does not become observed fact because the room is sure.
            </p>

            <p>
              The handover says the gearbox was fine. The crew says they always stretch this
              preventive-maintenance interval. The model ranks the asset for deferral, and the tile
              looks confident. The meeting treats those sentences as the evidence and moves the
              case. They are not the evidence. The handover is a story. The interval is a habit.
              The rank is an output that has not been tied to the work history, the condition
              record, or the last check that produced it. A later reader cannot inspect a fact the
              case never held.
            </p>

            <p>
              This essay is the companion to{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>
              ,{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>
              , and{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>
              . Unknown Is Not Clear keeps missing evidence recorded as unknown, not as clear or
              ready. Blank Is Not Zero keeps an empty field from being stored as a measured zero.
              Silence Is Not Clearance keeps no reply, no alert, and an empty inbox from being
              read as approval. This essay is the statement people put in the gap. An assumption
              does not fill unknown and make it clear. It does not turn a blank into a measurement.
              It does not turn quiet into a named decision.
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
              . Evidence is step 02. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter keeps a visible split between observed fact, assumption, and what is still
              missing. The recommendation waits on that record. A proposal whose only basis is an
              unlabeled assumption has no basis a later reader can inspect. A proposal with no
              basis is not ready for a human decision.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a model line or a crew habit as a live fact.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              An assumption is not a recorded fact
            </h2>

            <p>
              A recorded fact is something a later reader can inspect on the case: approved
              knowledge, asset context, work history, condition information, or a check that was
              written down. An assumption is a statement about the asset or the work that does not
              have that record behind it. The Decision Case can hold the statement. The operator
              labels it as an assumption. The label is the mechanism. It keeps the statement from
              being stored in the observed-fact column.
            </p>

            <p>
              A belief is someone being sure. The alarm is a nuisance. The bearing will last the
              run. The last repair fixed the cause. Sure is a state of the person. It is not a
              recorded observation of the condition. The belief can be written on the case so the
              next reader sees what was believed. Writing it down does not make the condition what
              the person believed. Condition information is the reading, the inspection, or the
              work record. The belief is the other column.
            </p>

            <p>
              A habit is a repeated practice. The crew changes this class of component on a fixed
              interval, or they defer this class of alarm. A habit explains why a recommendation
              was drafted. It is not the failure record, the meter reading, or the last verified
              outcome. A CMMS row can show a last-done date if that date was entered against a
              closed work order. The sentence &quot;we always do it at this interval&quot; does not
              replace that date, and it does not show that the interval is still fit for this
              asset. The row is the record of what was entered. The habit is not a second
              measurement hiding inside the row.
            </p>

            <p>
              A prior shift&apos;s story is the handover. The pump was fine. The last job fixed it.
              The part is on the way. A story is what someone said at the relief. Work history on
              the case is the closed record of what was done and what was checked. If the prior
              case has no verification, the handover does not supply the check. The operator does
              not promote the spoken relief into observed fact. The story can sit on the case as an
              assumption, attributed to the shift that said it. Attribution is not verification.
            </p>

            <p>
              A tribal &quot;we always do it this way&quot; is the practice of the crew, the site,
              or the trade. It can be true as a description of what people usually do. It is not
              evidence that the practice is the right next action for this asset, this question, or
              this shift. The Decision Case does not treat the usual practice as clearance. Usual
              is not a recorded check. A later reader who sees only the phrase cannot reconstruct
              which asset configuration, which failure, or which maintenance record justified the
              work.
            </p>

            <p>
              An unverified model output is a rank, a health score, a suggested deferral, or a
              stretched preventive-maintenance interval that the case cannot reconstruct.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail: which asset configuration, which failure and maintenance
              records, and which human judgment produced the recommendation. An output without the
              trail is an assumption wearing a number. The dashboard can be confident.{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              is that sentence at full length: a strong gut feel, a high model score, years of
              tribal &quot;we&apos;ve always known,&quot; or a manager&apos;s certainty is still
              not a recorded check or a verified outcome. Confidence is not the lineage. Stage-1
              evidence is the record held on the case. A live connector
              that pulls historian or control-system tags sits outside this edition. A score that
              arrived without those records is not a tag, and it is not observed fact.
            </p>

            <p className="text-xl font-semibold text-white">
              An assumption can stay on the case, labeled. The label does not promote it to a
              recorded fact.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Facts before assumptions
            </h2>

            <p>
              Clearance is a recorded basis the next step can stand on. The evidence is present and
              fit, a named person has decided, and, where an action was authorized, the verification
              is on the case. An assumption is not that basis. A confident guess does not clear
              missing evidence, does not measure an empty field, and does not approve a
              recommendation nobody answered.
            </p>

            <p>
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              records what is missing as unknown, and it blocks evidence that is present and bad or
              not ready. Filling the unknown line with a belief, a handover, or a model rank does
              not change the state to clear. The missing record is still missing. The assumption is
              an additional statement. It belongs in the assumption column, or it stays off the
              case. It does not overwrite unknown.
            </p>

            <p>
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>{' '}
              keeps an empty field, a missing reading, or an unset value from being stored as a
              measured zero. Zero is a verified measurement of none. An assumption that there was
              no downtime, no cost, or no delay is not that measurement. Typing the assumption into
              the blank collects a guess. It does not collect the value. Recovery economic figures
              that were left blank stay blank. They are not inferred from what the last shift
              thought the job should have cost.
            </p>

            <p>
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              keeps silence, no reply, no alert, and an empty inbox from being read as
              authorization. A habit that &quot;nobody objected last time, so this is approved&quot;
              is an assumption about a missing response. The missing response is still not
              approved. The assumption does not write accept, reject, escalate, or return on the
              decision line. A quiet dashboard is still not controlled.
            </p>

            <p>
              Authorization is the named act. A person accepts, rejects, escalates, or returns the
              recommendation, and that act is recorded beside the proposal.{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              says the case stays a proposal until the act is on the record.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              says a drafted next action is not that act. A model line that says defer, and a crew
              habit that says defer, are both still proposals. Neither one accepts the operational
              consequence for the person who can accept it. The system does not treat the
              assumption as the acceptance.
            </p>

            <p>
              Learning is what a later question is allowed to inherit. The closed case shows what
              was believed, what was authorized, and what was checked.{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              says authorization records who decided, and the case stays open until the check is
              written down.{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              says the later question inherits that verified record, not a hope. What was believed
              may include a labeled assumption. Learning does not inherit the assumption as if the
              check had confirmed it. A later crew that repeats the story because &quot;it worked
              last time,&quot; without the verification on the prior case, is inheriting a story.
              The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a guess as a result.
            </p>

            <p className="text-xl font-semibold text-white">
              Clearance, authorization, and learning stand on a recorded check or a verified
              outcome. A confident guess does not stand in for either record.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Where an assumption sits on the Decision Case
            </h2>

            <p>
              The order is Question, Evidence, Recommendation, Human decision, Action,
              Verification, and Learning. An assumption does not complete a step by being
              confident. It stays labeled, or it stays off the record.
            </p>

            <p>
              Question is step 01. An assumption is not the question. &quot;We already know what to
              do&quot; does not open the case, and it does not close a question that was never
              written down.{' '}
              <Link
                href="/insights/question-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question Is Not Decision
              </Link>{' '}
              says recording a question is not the decision. Skipping the question because the crew
              is sure is not a decision either. The{' '}
              <Link
                href={fieldManualPath('question')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question
              </Link>{' '}
              chapter still requires the question on the case before evidence or recommendation.
            </p>

            <p>
              Evidence is step 02. This is the step the assumption tries to skip. Observed fact,
              assumption, and what is still missing stay in separate columns. Merging the
              assumption into observed fact is the failure. A CMMS comment, a failure code, and a
              last-done date are records of what was entered. A comment that repeats the tribal
              practice is not condition evidence. Work that was closed with a recorded check can
              be observed fact about that past work. The story told about that work, without the
              check, stays an assumption. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter keeps the split visible so the recommendation cannot hide which column it
              used.
            </p>

            <p>
              Recommendation is step 03. The proposal states a next action, the evidence it uses,
              and the uncertainty it leaves in view. If the basis is an assumption, the
              recommendation says so. Drafting the next action does not authorize the work, and it
              does not convert the assumption into fact. A rank the model produced is part of the
              proposal, or it is part of the uncertainty. It is not a silent upgrade into the
              evidence column. The{' '}
              <Link
                href={fieldManualPath('recommendation')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommendation
              </Link>{' '}
              chapter leaves authority where it already sits.
            </p>

            <p>
              Human decision is step 04. A named person accepts, rejects, escalates, or returns.
              Accepting a recommendation that rests on a labeled assumption is a decision about
              that proposal. It does not rewrite the assumption as observed fact. The person who
              decides can see the split. The system does not hide the assumption so the decision
              looks better supported than the record is. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter keeps who decided visible beside the recommendation. An assumption about what
              that person would have wanted has no name on the decision line.
            </p>

            <p>
              Action is step 05. Action records the work the human decision authorized. It does not
              turn the assumption into a completed repair, a written work order, or an isolation.
              Plant execute stays outside Stage-1. A confident deferral on a screen does not
              dispatch the work, and it does not mean the work was done. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter keeps that work with the systems of record the customer already runs, and
              with the people who already hold operating authority.{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps the same boundary. An assumption does not cross it.
            </p>

            <p>
              Verification is step 06. The check records whether the authorized action did what it
              was supposed to do, and which evidence would show that. An assumption that it worked
              is not the check. If the expected signal was not available, that unavailability is
              written down. It is not filled with a guess of success. The case stays open until the
              check is on the case. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is that recorded check. Stage-1 does not treat a live tag pull, or a model
              score standing in for one, as the proof.
            </p>

            <p>
              Learning is step 07. A later question can see the labeled assumption and the check
              that followed it, or the absence of the check. It cannot treat the assumption as the
              outcome. There is no verified outcome in a handover that was never checked. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes that rule.
            </p>

            <p className="text-xl font-semibold text-white">
              Each step needs its own record. An assumption does not complete the step it is
              standing in for.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes an assumption to a recorded fact.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              is the check after a named human has authorized an action. An assumption is earlier
              and different when it is used as evidence, and it is still not the check when someone
              uses it to close the case. The operator writes the observation. A belief that the
              work succeeded leaves the verification field empty. Empty stays empty until the check
              is recorded.
            </p>

            <p>
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              is the trail behind a recommendation. A model output, a bad-actor tag, or a stretched
              interval that cannot show its inputs is a claim with the trail missing. This essay is
              the content of that claim when the content is a belief, a habit, or a story. Lineage
              does not appear because the output is numeric. The records are either on the case or
              they are not. If they are not, the output stays an assumption.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. A simulated or seeded
              score is a practice record. It is not a live plant fact, and it is not a substitute
              for the assumption the operator still has to label. Naming the limit does not promote
              the practice record into observed fact. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live result the edition does not hold.
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
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              is step 02. Observed fact, assumption, and what is still missing stay distinct. A
              proposal with no basis is not ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A guess that the action worked is not the check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified record, not the assumption.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a model line or a crew habit as a live fact. Later
              editions can deepen a chapter. The spine stays in this order.
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
              work order, isolates equipment, or controls a plant. It does not claim that an
              assumption is evidence, that a belief or a habit is a recorded fact, or that an
              unverified model output is a verified outcome. It does not claim that self-guided
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
              live plant results, and a model line on a practice screen is not observed fact.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>
              , on why a strong gut feel, a high model score, years of tribal &quot;we&apos;ve
              always known,&quot; or a manager&apos;s certainty is still not a recorded check or a
              verified outcome. Companion reading:{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              on why missing evidence is recorded as unknown, not as clear or ready,{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>{' '}
              on why an empty field is not a measured zero,{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              on why silence, no reply, no alert, and an empty inbox are not authorization,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded, and{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              on why a recommendation you cannot reconstruct is not an industrial decision. A{' '}
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
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter is the public statement of the split between observed fact, assumption, and
              what is still missing.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the evidence, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the evidence split:
                observed fact, assumption, and what is still missing. An assumption is not
                evidence. Clearance, authorization, and learning still require a recorded check or
                a verified outcome. The Reliability Engineer workspace is where a signed-in
                Decision Case is completed. A Reliability Assessment is the bounded review when the
                question is whether the records can support a conclusion. None of those is a claim
                that Sync executes plant work, or that self-guided onboarding is a live product
                path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={fieldManualPath('evidence')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
                >
                  Read Evidence
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
          <InsightNextSteps slug="assumption-is-not-evidence" />
        </motion.article>
      </div>
    </main>
  );
}
