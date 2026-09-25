'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('anecdote-is-not-evidence');

export default function AnecdoteIsNotEvidencePage() {
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
              Anecdote Is Not Evidence
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Anecdote is not evidence. A single operator story, a hallway claim, one shift&apos;s
              memory of &quot;how it always fails,&quot; a vendor demo vignette, or a loud
              near-miss retelling can feel persuasive. That is anecdote. Anecdote can prompt a
              question or a recommendation to gather approved evidence. It is not evidence, not a
              diagnosis, not root cause, not authorization for corrective work, not a verified
              operational outcome, and not a Decision Case. Sync may surface an anecdote as a
              prompt to investigate when it is labeled unconfirmed. A named human still decides.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case, an anecdote is a story someone can retell. It is not evidence. It
              is not a diagnosis. It is not root cause. It is not authorization for corrective
              work. It is not a verified operational outcome. It is not the case. Anecdote can
              prompt a question or a recommendation to gather approved evidence. It does not close
              the path from question to evidence to recommendation to human decision.
            </p>

            <p>
              Someone tells a single operator story. Someone repeats a hallway claim. One
              shift&apos;s memory of &quot;how it always fails&quot; lands in the meeting as if it
              were the record. A vendor demo vignette is played as if the screen were the asset. A
              loud near-miss retelling fills the room, and the volume is treated as proof. Nobody
              wrote the question. Nobody attached approved evidence. Nobody recorded accept,
              reject, escalate, or return. Nobody stored the verification. The Decision Case still
              has to show the question, the evidence, the recommendation, the named human decision,
              and the check. A story is not that record.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/sample-is-not-population"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Sample Is Not Population
              </Link>{' '}
              and stands beside{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>
              ,{' '}
              <Link
                href="/insights/symptom-is-not-cause"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Symptom Is Not Cause
              </Link>
              ,{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>
              ,{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>
              ,{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>
              ,{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>
              , and{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>
              . Sample keeps a handful of observed cases or plants from being stored as the fleet or
              as population-level proof. A story about that handful is still not evidence. Noise
              keeps sensor chatter, false positives, process variation, nuisance alarms,
              telemetry spikes without a confirmed asset state change, and operator anecdote volume
              from being stored as an actionable signal. A story about that chatter is still not
              evidence. Symptom keeps a vibration spike, a hot bearing, a pressure drop, an operator
              report, a CMMS complaint code, a red tile, or any other observed symptom from being
              stored as the cause. The retelling is still not the cause. Threshold keeps a numeric
              threshold, a limit, an alarm band, or a set-point from being stored as a diagnosis or
              as a Decision Case. Assumption keeps a belief, a
              habit, a prior shift&apos;s story, or an unverified model output from being stored as
              a recorded fact. Confidence keeps a strong gut feel, a high model score, or a
              manager&apos;s certainty from being stored as a recorded check. Correlation keeps
              co-moving tags, coincident alerts, and dashboard trends from being stored as a
              recorded causal check, and it keeps them from authorizing action. Verification keeps
              the case open until the check is written down. A vivid retelling is not that check.
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
              missing. An anecdote is not a fourth column that records the fact, names the failure
              mode, authorizes the work, or closes the case. A proposal whose only basis is a story
              has no evidence a later reader can inspect. A proposal with no named human decision
              is not a Decision Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat an operator story, a hallway claim, or a vendor demo vignette as
              approved evidence or as live plant control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              An anecdote is not evidence
            </h2>

            <p>
              Evidence is the part of the case a later reader can inspect. An anecdote is a
              retelling. A single operator story is one person&apos;s account. A hallway claim is a
              sentence that traveled without a record. One shift&apos;s memory of &quot;how it
              always fails&quot; is a habit of recollection. A vendor demo vignette is a staged
              scene. A loud near-miss retelling is a memory of a scare, told at volume. Each can
              feel persuasive. Persuasion is not a recorded fact. Those are different records. The
              story does not write the evidence.
            </p>

            <p>
              The meeting can note that the story was told. Noting it records that someone spoke.
              It does not record the evidence, and it does not open the Decision Case. The fact
              stays in the approved evidence a later reader can inspect, or it stays missing. The
              anecdote stays a prompt, or it stays off the case as a story. Treating the anecdote
              as evidence invents a fact the record does not hold. The room thinks the case is
              known. The evidence was never written. That skip is the failure this essay names.
            </p>

            <p>
              Anecdote can prompt a question or a recommendation to gather approved evidence.
              Prompting a question records that a named person still has something to decide.
              Recommending that approved evidence be gathered is a proposal to go get the record.
              Neither act stores the story as the record. If the only support is the retelling, the
              proposal is not evidence and it is not a closed case. The system does not auto-accept
              because the story was loud.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A story is not a diagnosis and not root cause
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect: what failed, on what
              evidence, and what is still missing. Root cause is a recorded causal check that names
              why, on evidence, and leaves the remaining uncertainty in view. An anecdote names
              neither. The operator story can say what someone believes failed. The hallway claim
              can say what the corridor has decided. The memory of how it always fails can name a
              familiar villain. The vendor demo vignette can show a failure mode on a screen that
              is not this asset. The near-miss retelling can make the scare feel like the cause.
              None of those sentences is the diagnosis, and none of them is root cause.
            </p>

            <p>
              A numeric threshold that was crossed is still not a diagnosis.{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              keeps a KPI, a leading indicator, a model score, a green tile, a closed work-order
              count, an MTBF estimate, or a sensor health % from being stored as the verified
              operational outcome. A story about that proxy is still a story.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps a rising or falling line from being stored as a recorded check. A memory of the
              slope is not the slope, and it is not the cause.{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              already keeps co-movement off the causal check. A hallway claim that two tags
              &quot;always move together, so this is why&quot; does not record the cause.
            </p>

            <p>
              This essay states no OEM limit and supplies no plant failure mode. A cause the
              meeting invented from a story is not root cause, and this page does not publish the
              story as if it were. The case holds the approved evidence that was stored, the
              question that was asked, and what is still unknown. It does not hold a diagnosis this
              essay made up so the retelling would look decisive.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Anecdote does not authorize corrective work
            </h2>

            <p>
              Authorization is the named act. A drafted next action is a proposal.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps that proposal off the decision. A proposal that cites an operator story, a
              hallway claim, or a near-miss retelling is still a proposal. The story can be
              specific. The vignette can be polished. Neither the detail nor the polish accepts the
              operational consequence. Anecdote is not authorization for corrective work.
            </p>

            <p>
              Corrective work is the change someone intends after a named decision: the repair, the
              adjustment, the inspection, the isolation. Recording that intent is not the same as
              executing it, and hearing a story is not the same as recording the intent. Sync must
              not auto-authorize because a near-miss was retold. Sync recommends. A named human
              decides. If the only support is the anecdote, the proposal is not ready to be stored
              as authorized. Personal conviction is not the decision.
            </p>

            <p>
              Recording an ACTION disposition is work intent. It is not plant execution.{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps that intent off the plant. Sync does not write the work order. The systems that
              already hold execution authority write the work order or the isolation. Execution
              stays with authorized systems. An anecdote, however vivid, does not move execution
              onto Sync, and it does not replace the named decision that would have to come first.
            </p>

            <p>
              An alert that someone remembers from the story is still an alert.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keeps seeing, acknowledging, or silencing an alert from being stored as a decision. A
              dashboard that the vignette pointed at is still a display.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. Color in a retelling does not put it back as
              authorization, verification of outcome, work-order execution, or plant control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A retelling is not a verified operational outcome
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do.
              The case stays open until that check is on the case. Verification stays open until a
              verified operational outcome is recorded. A later story that &quot;it worked&quot; is
              a later retelling. It is not, by itself, the check. The near-miss can be described as
              cleared because the shift ended, because the noise stopped, because the vendor said
              the demo recovered, or because nobody complained. The retelling does not record what
              the authorized change did.
            </p>

            <p>
              Anecdote clearance is not the check. Clearing the story from the meeting — nodding,
              moving on, closing the queue because the tale felt finished — must not be read as
              verification of outcome. Sync must not auto-close because the anecdote was heard.
              Sync must not treat anecdote clearance as Learning credit. A closed conversation is
              not a closed case.
            </p>

            <p>
              Learning is what a later question is allowed to inherit.{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              says the later question inherits that verified outcome, not a hope. Learning requires
              a verified outcome, not a hoped-for moral from a near-miss retelling. What was
              believed may include a labeled note that a story was told and that it was unconfirmed.
              Learning does not inherit the anecdote as if the check had named the cause and
              confirmed the result. A later crew that repeats the work because &quot;last time the
              story said so,&quot; without the verification on the prior case, is inheriting a
              story. That is the wrong lesson into Learning. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish an operator story as a
              verified operational outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Anecdote is not a Decision Case
            </h2>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that a story was told does not
              record that question, and it does not record the decision. The case is the order:
              Question, Evidence, Recommendation, Human decision, then action, verification, and
              learning. A hallway claim is not that order.
            </p>

            <p>
              Treating anecdote as evidence shortcuts the Question → Evidence → Recommendation →
              Human Decision path. The story jumps to a conclusion. The evidence step is skipped.
              The recommendation is implied by the punchline. The human decision is treated as
              already made because the room agreed with the teller. That shortcut is not a case. A
              named human records the Decision Case only against approved evidence. Until that
              evidence is on the case, the story remains a prompt.
            </p>

            <p>
              A named person accepts, rejects, escalates, or returns the recommendation. That act
              is the decision.{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              says until that act is recorded, the case is still a proposal. An anecdote does not
              replace a named human decision. The operator story does not sign accept. The hallway
              claim does not sign reject. The vendor demo vignette does not escalate. The near-miss
              retelling does not return the proposal. The signed-in Decision Case keeps who decided
              visible beside the recommendation. The recorded act is mandatory.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Treating anecdote as evidence invents false certainty
            </h2>

            <p>
              False certainty is a record that looks finished and is not. The story was specific, so
              the room stores it as fact. The teller has years on the asset, so the memory is stored
              as a check. The vignette had a chart, so the chart is stored as causation. The
              near-miss was frightening, so the fright is stored as root cause. Each of those moves
              invents false certainty. The case looks known. The approved evidence was never
              attached.
            </p>

            <p>
              The same move floods work queues with personal conviction. A conviction is a push to
              act. A queue is a list of work. Personal conviction can put a job on that list
              because someone is sure, not because a named person recorded a decision against
              approved evidence. The queue then teaches the wrong lesson: the loud story is how
              work gets born. The Decision Case teaches the other lesson. Work intent waits on the
              named act. The named act waits on evidence. The story can start the question. It
              cannot fill the queue by itself.
            </p>

            <p>
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps being sure from being stored as a recorded check. An anecdote told with
              certainty is still an anecdote.{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              keeps the prior shift&apos;s story from being stored as a recorded fact. One
              shift&apos;s memory of how it always fails is that story when the story is a habit.
              If the case cannot show the asset configuration, the failure and maintenance history,
              and the human judgment that connects the retelling to a mode, the story is a sentence
              without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. An anecdote does not shorten it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync may surface an anecdote when it is unconfirmed
            </h2>

            <p>
              Sync may surface an anecdote as a prompt to investigate when paired with the honesty
              boundary that it is unconfirmed. Surfacing means the story can sit beside a question
              so a person can see that the story is not yet evidence. The label is part of the
              surface. Unconfirmed means the record does not claim the story is fact, diagnosis,
              root cause, authorization, or a verified operational outcome. Holding the story
              without that label would hide the limit. The honesty boundary is not optional.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote a practice story into plant evidence. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live conclusion the edition does not hold. A
              vendor demo vignette is a practice scene. It is not a live operational outcome, and
              it is not a substitute for the approved evidence the operator still has to attach.
            </p>

            <p>
              Sync must not auto-close, auto-authorize, or treat anecdote clearance as Learning
              credit. Auto-close would store the story as a finished case. Auto-authorize would
              store the story as permission for corrective work. Learning credit would let a later
              case inherit the retelling. None of those acts is available to the system. A named
              human records the Decision Case only against approved evidence. Verification stays
              open until a verified operational outcome is recorded.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry is a practice record. A practice anecdote is still a practice story. It is
              not live plant evidence, and it is not a substitute for the check the operator still
              has to record.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Unknown, blank, and silence stay what they are
            </h2>

            <p>
              Unknown stays unknown.{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              records missing evidence as unknown, not as clear or ready. Filling the unknown line
              with an operator story does not change the state to clear, and it does not name root
              cause. Bad or not-ready evidence stays blocked. A hallway claim that sounds related
              to the blocked item does not relabel blocked as ready. The operator must not treat
              unknown as go because the story was persuasive. Go would mean the evidence is
              sufficient for the next recorded step. An anecdote is not sufficiency.
            </p>

            <p>
              Blank stays blank.{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>{' '}
              keeps an empty field from being stored as a measured zero. A story written into an
              empty field collects a sentence. It does not collect the missing value. Recovery
              figures that were left blank stay blank. They are not inferred from a near-miss
              retelling. A blank verification field is not a verified outcome of none, and a story
              that &quot;nothing happened after&quot; does not close it.
            </p>

            <p>
              Silence stays silence.{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              keeps no reply, no alert, and an empty inbox from being read as approval. No reply is
              not approval. An empty inbox is not clearance. A quiet dashboard is not controlled. A
              story about that quiet does not write accept, reject, escalate, or return. It does
              not record a check that nobody performed. A narrative about the quiet shift does not
              turn the missing response into the named decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface an anecdote. Sync may hold the story beside a recommendation to
              gather approved evidence, with the honesty boundary that the story is unconfirmed.
              That is a proposal. The person who can accept the operational consequence records the
              decision. Until that act is on the case, the case is still a proposal. The system
              does not auto-accept because a story was told. Sync recommends. A named human
              decides.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of a conversation is not control of
              the plant. A Decision Case that records an anecdote as an unconfirmed prompt does not
              put Sync in control of the work, the isolation, or the change. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. The retelling is not the check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The story is not the act.
            </p>

            <p className="text-xl font-semibold text-white">
              A single operator story, a hallway claim, one shift&apos;s memory of how it always
              fails, a vendor demo vignette, or a loud near-miss retelling is not evidence, not a
              diagnosis, not root cause, not authorization for corrective work, not a verified
              operational outcome, and not a Decision Case. Anecdote can prompt a question or a
              recommendation to gather approved evidence. Sync may surface an anecdote when it is
              unconfirmed. Sync must not auto-close, auto-authorize, or treat anecdote clearance as
              Learning credit. A named human still decides. Verification stays open until a
              verified operational outcome is recorded. Execution stays with authorized systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes an anecdote to evidence or to a Decision Case.
            </p>

            <p>
              Threshold Is Not Diagnosis is the line that was crossed. Assumption Is Not Evidence
              is the belief stored in place of a fact. Confidence Is Not Evidence is the certainty
              stored in place of a check. Correlation Is Not Causation is the chart of co-movement.
              Verification Is Not Optional is the check that still has to be written. Anecdote Is
              Not Evidence is the story itself: the operator story, the hallway claim, the memory
              of how it always fails, the vendor demo vignette, the near-miss retelling. A crossed
              line does not become evidence because someone tells it well. A belief does not become
              a fact because it is repeated in the hall. Being sure does not record the check. Tags
              that travel together do not become root cause because a vignette said they did. A
              later retelling does not close the case. The label stays. The evidence stays
              unwritten until approved evidence is on the case. The decision stays unwritten until
              a named person records it.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. An anecdote does not
              interpret them into clearance. A case that is unknown, blank, or quiet is not made
              ready by a story. A retelling is not a measurement of the missing field, and it is
              not the named decision.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified operational outcome, not a hoped-for moral from a
              near-miss. The trail behind a recommendation is still evidence lineage. An alert is
              still not a decision. A dashboard is still not a decision. A trend is still not the
              truth. A proxy is still not the outcome. Those records are either on the case or they
              are not. If they are not, an anecdote does not supply them.
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
              is step 02. Observed fact, assumption, and what is still missing stay distinct. An
              anecdote does not collapse that split into evidence. A proposal with no basis is not
              ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A story that the work &quot;already worked&quot; is not the check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the anecdote the last
              shift treated as the lesson.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating an unconfirmed story as live evidence or as plant
              control. Later editions can deepen a chapter. The spine stays in this order.
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
              supplies no failure mode from a story. It does not claim that Sync executes plant
              work, writes a work order, isolates equipment, or controls a plant. It does not claim
              that an anecdote is evidence, that an operator story is a diagnosis, that a hallway
              claim is root cause, that a vendor demo vignette is authorization for corrective
              work, that a near-miss retelling is a verified operational outcome, or that a story
              is a Decision Case. It does not claim that self-guided onboarding is a live product
              path.
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
              live plant results, and an anecdote on a practice screen is not evidence.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/sample-is-not-population"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Sample Is Not Population
              </Link>{' '}
              on why a handful of observed cases or plants is not the fleet and not population-level
              proof,{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>{' '}
              on why sensor chatter, false positives, process variation, nuisance alarms, telemetry
              spikes without a confirmed asset state change, and operator anecdote volume are not an
              actionable signal and not a Decision Case,{' '}
              <Link
                href="/insights/symptom-is-not-cause"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Symptom Is Not Cause
              </Link>{' '}
              on why a vibration spike, a hot bearing, a pressure drop, an operator report, a CMMS
              complaint code, a red tile, or any other observed symptom is not the cause and not a
              Decision Case,{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>{' '}
              on why crossing a numeric threshold, limit, alarm band, or set-point is not a
              diagnosis and not a Decision Case,{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              on why a belief, a habit, a prior shift&apos;s story, or an unverified model output
              is not a recorded fact,{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              on why a strong gut feel, a high model score, or a manager&apos;s certainty is not a
              recorded check,{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              on why co-moving tags, coincident alerts, and dashboard trends are not a recorded
              causal check and do not authorize action,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded,{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              on why a stand-in measure is not the verified operational outcome,{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              on why a rising or falling line is not a recorded causal check,{' '}
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
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              on why seeing, acknowledging, or silencing an alert is not a decision,{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              on why a display is not authorization,{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              on why a recommendation you cannot reconstruct is not an industrial decision,{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              on why a later case inherits the verified outcome, not a hoped-for moral from a
              story,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a drafted next action is still a proposal, and{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              on why the named act is mandatory. A{' '}
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
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the public statement of the check this essay refuses to replace with an
              anecdote.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Anecdote is not evidence. A single operator story, a hallway claim, a memory of how
                it always fails, a vendor demo vignette, or a loud near-miss retelling can prompt a
                question. It is not a diagnosis, not root cause, not authorization for corrective
                work, not a verified operational outcome, and not a Decision Case. Sync may surface
                an anecdote when it is unconfirmed. A named human still decides. Verification stays
                open until a verified operational outcome is recorded. Execution stays with
                authorized systems. The Reliability Engineer workspace is where a signed-in
                Decision Case is completed. A Reliability Assessment is the bounded review when the
                question is whether the records can support a conclusion. None of those is a claim
                that Sync executes plant work, or that self-guided onboarding is a live product
                path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={fieldManualPath('verification')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
                >
                  Read Verification
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
          <InsightNextSteps slug="anecdote-is-not-evidence" />
        </motion.article>
      </div>
    </main>
  );
}
