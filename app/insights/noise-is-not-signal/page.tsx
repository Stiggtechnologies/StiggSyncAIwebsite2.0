'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('noise-is-not-signal');

export default function NoiseIsNotSignalPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Noise Is Not Signal</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Noise is not signal. Sensor chatter, false positives, process variation, nuisance
              alarms, telemetry spikes without a confirmed asset state change, and operator anecdote
              volume can fill a dashboard. That is noise. Noise can inform a recommendation to
              investigate. It is not an actionable signal, not a diagnosis, not root cause, not
              authorization for corrective work, not a verified operational outcome, and not a
              Decision Case. Sync may surface correlated noise with approved evidence and recommend
              investigation. A named human still records the Decision Case.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case, a dashboard full of chatter is noise. Noise can inform a
              recommendation to investigate. It is not an actionable signal. It is not a diagnosis.
              It is not root cause. It is not authorization for corrective work. It is not a
              verified operational outcome. It is not a Decision Case. Verification stays open until
              a verified operational outcome is recorded.
            </p>

            <p>
              The screen is busy. Sensor chatter keeps the trend line moving. False positives light
              the same tile every shift. Process variation walks the number through a band that was
              never a failure mode. Nuisance alarms stack in the queue. Telemetry spikes without a
              confirmed asset state change look urgent because the line jumped. Operator anecdote
              volume fills the meeting: everyone has a story, and the stories do not agree. Someone
              says the asset is known, and the room treats the sentence as the Decision Case.
              Nobody named the question. Nobody cited approved evidence a later reader can inspect.
              Nobody wrote accept, reject, escalate, or return. Nobody stored the verification. The
              Decision Case still has to show the question, the evidence, the recommendation, the
              named human decision, and the check. A loud dashboard is not that record.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/symptom-is-not-cause"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Symptom Is Not Cause
              </Link>{' '}
              and stands beside{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>
              ,{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>
              ,{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>
              ,{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>
              , and{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>
              . Symptom keeps a vibration spike, a hot bearing, a pressure drop, an operator report,
              a CMMS complaint code, a red tile, or any other observed symptom from being stored as
              the cause. Noise can sit around that symptom. The symptom is still not the cause, and
              the chatter is still not an actionable signal. Threshold keeps a numeric threshold, a
              limit, an alarm band, or a set-point from being stored as a diagnosis or as the
              Decision Case. A breach can be what the noise is pointing at. The breach is still not
              the diagnosis. Alert keeps seeing, acknowledging, or silencing an
              alert from being stored as a decision. A nuisance alarm is still an alert. Correlation
              keeps co-moving tags, coincident alerts, and dashboard trends from being stored as a
              recorded causal check, and it keeps them from authorizing action. Tags that chatter
              together are still co-movement. Proxy keeps a KPI, a leading indicator, a model
              score, a green tile, a closed work-order count, an MTBF estimate, a sensor health %,
              or any other stand-in from being stored as the verified operational outcome. A quiet
              tile after the queue was cleared is still a stand-in. Verification keeps the case
              open until the check is written down. Clearing the noise is not that check.
            </p>

            <p>
              Facts come before assumptions. The same gap has neighboring forms.{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              keeps a belief, a habit, a prior shift&apos;s story, or an unverified model output
              from being stored as a recorded fact. &quot;The room is loud, so we know what
              failed&quot; is that story when the story is volume.{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps a strong gut feel, a high model score, or a manager&apos;s certainty from being
              stored as a recorded check. Being sure the chatter names one failure mode does not
              record that mode.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps a rising or falling line, a co-moving tag cluster, a week-over-week delta, and
              a trend narrative from being stored as a recorded causal check or a verified outcome.
              A slope inside the chatter is still a line.{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              records missing evidence as unknown, not as clear or ready.{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>{' '}
              keeps an empty field from being stored as a measured zero.{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              keeps no reply, no alert, and an empty inbox from being read as approval. A quiet
              queue is not clearance. Noise does not fill the blank with a failure mode, and it
              does not turn the missing reply into the named decision.
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
              missing. Sensor chatter can be an observed fact that the display was busy. It is not
              a fourth column that names the failure mode, authorizes the work, or closes the case.
              A proposal whose only basis is that the dashboard was loud has no actionable signal a
              later reader can inspect. A proposal with no named human decision is not a Decision
              Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat sensor chatter, false positives, process variation, nuisance alarms,
              telemetry spikes, or operator anecdote volume as an actionable signal or as live plant
              control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Chatter on a dashboard is not an actionable signal
            </h2>

            <p>
              An actionable signal is a recorded claim a later reader can inspect: what changed in
              the asset state, on what approved evidence, and what is still missing. Sensor chatter
              is movement on a tag. False positives are alarms that fired without that change.
              Process variation is the number walking inside the way the process already runs.
              Nuisance alarms are the queue that trained the room to look away. Telemetry spikes
              without a confirmed asset state change are jumps that were not tied to a state the
              case can name. Operator anecdote volume is how many stories arrived, not which story
              was checked. Those records can fill a dashboard. That is noise. Noise is not an
              actionable signal.
            </p>

            <p>
              The meeting can note the chatter. Noting it records that someone saw the dashboard
              fill. It does not record an actionable signal, and it does not open the Decision Case.
              The asset state stays in the evidence a later reader can inspect, or it stays missing.
              The chatter stays a fact about the display, or it stays off the case as volume.
              Treating noise as signal invents false certainty. The room thinks the mode is known.
              The mode was never written. That skip is the failure this essay names.
            </p>

            <p>
              Noise can inform a recommendation to investigate. Informing a recommendation does not
              make the chatter the signal. The recommendation is a proposal. The person who can
              accept the operational consequence records accept, reject, escalate, or return. If
              the only support is that the dashboard was loud, the proposal is not an actionable
              signal and it is not a closed case. The system does not auto-accept because the queue
              was full.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              False positives, process variation, and nuisance alarms are not a diagnosis
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect. A false positive names a
              rule that fired. Process variation names a number that moved the way the process
              moves. A nuisance alarm names a page the room has learned to silence. None of them
              names why the asset changed, and none of them is a diagnosis. Noise is not a
              diagnosis. The diagnosis stays unwritten until approved evidence names the mode.
            </p>

            <p>
              A dashboard can show the volume.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. Color does not put it back as a case. A red tile
              full of nuisance alarms is not a diagnosis. A return to a quiet screen is not a
              verified outcome. A green tile after the queue was cleared is not a partial decision.
              A green tile, an improved trend, or a cleared alert tile must not be read as
              authorization, verification of outcome, work-order execution, or plant control.
            </p>

            <p>
              An alert that fired inside the chatter is still an alert. Seeing, acknowledging, or
              silencing it is not a Decision Case and not a decision. Clearing the queue because
              the chatter &quot;settled&quot; must not be read as authorization, verification of
              outcome, work-order execution, or plant control. Sync may emit alerts, coverage gaps,
              and recommendations. Sync may surface correlated noise with approved evidence. A
              named human still opens a Decision Case on a question, cites approved evidence, and
              accepts, rejects, escalates, or returns.
            </p>

            <p>
              This essay states no OEM limit and supplies no plant alarm count. A threshold the
              meeting invented so the chatter would look decisive is not a diagnosis, and this page
              does not publish the number. The case holds the measurement that was stored, the
              chatter that was stored, and what is still unknown. It does not hold a limit this
              essay made up so the noise would look like a signal.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A spike without a confirmed asset state change is not root cause
            </h2>

            <p>
              Root cause is a recorded claim: the condition that produced the change, on evidence a
              later reader can reconstruct. Telemetry spikes without a confirmed asset state change
              are a jump on a tag. The jump can have more than one source. The instrument can be
              wrong. The window can be wrong. Process variation can have walked the number through
              the spike. A related tag can have moved without being the cause the room wants to
              name. Co-moving chatter is still co-movement. It is not a recorded causal check, and
              it does not authorize action. Naming root cause is a recorded claim. The spike is not
              that claim. Noise is not root cause.
            </p>

            <p>
              If the case cannot show the asset configuration, the failure and maintenance history,
              and the human judgment that connects the spike to a state change, the jump is a number
              without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. Noise does not shorten it. The chatter can sit on the
              case as an observed fact, labeled as a fact about the display. The label does not
              promote the volume into root cause.{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote practice chatter into a plant root cause. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live signal the edition does not hold.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. Simulated or seeded telemetry is a
              practice record. Practice chatter is still practice volume. It is not a live plant
              signal, and it is not a substitute for the asset state the operator still has to
              confirm from evidence.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Anecdote volume is not authorization for corrective work
            </h2>

            <p>
              Authorization is the named act. A drafted next action is a proposal.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps that proposal off the decision. A proposal that cites sensor chatter, false
              positives, or operator anecdote volume is still a proposal. The queue can be long.
              The stories can agree with each other. Neither the length nor the agreement accepts
              the operational consequence. Noise can inform a recommendation to investigate. It is
              not authorization for corrective work.
            </p>

            <p>
              The system does not auto-authorize because the anecdotes piled up. Sync recommends. A
              named human decides. If the only support is the volume, the proposal is not ready to
              be stored as authorized. A hoped-for reading of the chatter is not the decision. Sync
              must not auto-close, auto-authorize, or auto-clear alarms as verified outcomes.
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
              stays with authorized systems. Noise, however it is surfaced, does not move execution
              onto Sync, and it does not replace the named decision that would have to come first.
              Corrective work stays unauthorized until that named act is on the case.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Clearing the noise does not verify the outcome
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do.
              The case stays open until that check is on the case. Verification stays open until a
              verified operational outcome is recorded. A queue that goes quiet is a later display.
              It is not, by itself, the check. The chatter can drop because the window changed,
              because the nuisance alarms were silenced, because the instrument changed, or because
              a different condition moved the number. The quiet does not record what the authorized
              change did.
            </p>

            <p>
              A proxy that moved after the noise dropped is still a proxy. A closed work-order
              count is still a count. A green tile is still a display. None of them verify outcome.
              Verification still records the actual check. Treating noise clearance as the outcome
              invents false closure. The case looks finished. The check was never written. Sync
              must not auto-clear alarms as verified outcomes, and it must not treat noise clearance
              as Learning credit.
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
              a verified outcome, not a hoped-for quiet queue. Treating noise as signal teaches the
              wrong lesson into Learning. What was believed may include a labeled note that the
              dashboard was loud. Learning does not inherit the chatter as if the check had named
              the failure mode and confirmed the result. A later crew that repeats the work because
              the last shift &quot;already cleared the alarms,&quot; without the verification on the
              prior case, is inheriting noise. That is the wrong lesson. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish cleared chatter as Learning
              credit.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Noise is not a Decision Case</h2>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that the dashboard was loud
              does not record that question, and it does not record the decision. The case is the
              order: question, evidence, recommendation, human decision, action, verification, and
              learning. A full queue is not that order. Noise is not a Decision Case.
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
              says until that act is recorded, the case is still a proposal. A named human records
              the Decision Case. Noise does not. Sensor chatter does not sign accept. A false
              positive does not sign reject. Process variation does not escalate. A nuisance alarm
              does not return the proposal. Operator anecdote volume does not stand in for the
              name. The signed-in Decision Case keeps who decided visible beside the recommendation.
              The recorded act is mandatory.
            </p>

            <p>
              A gate on the Decision Case is a recorded step that is either satisfied or not:
              evidence a later reader can inspect, a named human decision, a verification written
              down. Noise does not satisfy the gate. Sensor chatter does not open it. False
              positives do not stand in for the missing record. Nuisance alarms do not close it.
              Noise can inform a recommendation to investigate. It does not name the failure mode,
              authorize corrective work, verify outcome, or replace a named human decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync may recommend investigation. It must not auto-close.
            </h2>

            <p>
              Sync may surface correlated noise with approved evidence and recommend investigation.
              Holding chatter beside approved evidence can inform that recommendation. The
              correlation is still not causation. The approved evidence is what a later reader can
              inspect. The recommendation is a proposal to investigate, not a stored outcome. Sync
              must not auto-close, auto-authorize, or auto-clear alarms as verified outcomes. Sync
              must not treat noise clearance as Learning credit.
            </p>

            <p>
              Correlated noise is still noise. Two tags that chatter in the same window can be
              shown together. Showing them together does not record the cause, and it does not
              close the case. Approved evidence is the part the recommendation is allowed to cite.
              Volume is not approved evidence. An anecdote count is not approved evidence. A spike
              without a confirmed asset state change is not approved evidence that the asset
              changed. The recommendation can say: investigate. It cannot say: done.
            </p>

            <p>
              Treating noise as signal invents false certainty, floods work queues, burns craft time,
              and teaches the wrong lesson into Learning. A queue full of nuisance alarms
              sends people after chatter. Craft time goes into silencing what was never a case.
              The next shift inherits the habit: loud meant act, quiet meant closed. That lesson is
              the one this essay refuses. Work queues stay for work a named human authorized.
              Investigation stays a recommendation until that person records it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Unknown, blank, and silence stay what they are
            </h2>

            <p>
              Unknown stays unknown. Filling the unknown line with sensor chatter does not change
              the state to clear, and it does not name the failure mode. Bad or not-ready evidence
              stays blocked. Chatter that looks related to the blocked item does not relabel
              blocked as ready. The operator must not treat unknown as go because the dashboard was
              loud. Go would mean the evidence is sufficient for the next recorded step. Noise is
              not sufficiency.
            </p>

            <p>
              Blank stays blank. Zero is a verified measurement of none. Chatter written into an
              empty field collects a flag. It does not collect the missing value. Recovery figures
              that were left blank stay blank. They are not inferred from nuisance alarms. A blank
              verification field is not a verified outcome of none, and a quiet queue does not close
              it.
            </p>

            <p>
              Silence stays silence. No reply is not approval. An empty inbox is not clearance. A
              quiet dashboard is not controlled. A screen that stopped chattering is still a screen.
              It does not write accept, reject, escalate, or return. It does not record a check that
              nobody performed. A narrative about the quiet queue does not turn the missing response
              into the named decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface correlated noise with approved evidence and recommend investigation.
              That is a proposal. The person who can accept the operational consequence records the
              decision. Until that act is on the case, the case is still a proposal. The system does
              not auto-close because the chatter dropped. Sync recommends. A named human decides. A
              named human records the Decision Case. Verification stays open until a verified
              operational outcome is recorded.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of the tag is not control of the
              plant. A Decision Case that records noise does not put Sync in control of the work,
              the isolation, or the change. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. Cleared chatter is not the check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The queue is not the act.
            </p>

            <p className="text-xl font-semibold text-white">
              Sensor chatter, false positives, process variation, nuisance alarms, telemetry spikes
              without a confirmed asset state change, and operator anecdote volume can fill a
              dashboard. That is noise. Noise can inform a recommendation to investigate. It is not
              an actionable signal, not a diagnosis, not root cause, not authorization for
              corrective work, not a verified operational outcome, and not a Decision Case. Sync may
              surface correlated noise with approved evidence and recommend investigation. Sync must
              not auto-close, auto-authorize, or auto-clear alarms as verified outcomes, and it must
              not treat noise clearance as Learning credit. A named human records the Decision Case.
              Verification stays open until a verified operational outcome is recorded. Execution
              stays with authorized systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes noise to an actionable signal or to a Decision Case.
            </p>

            <p>
              Symptom Is Not Cause is the observed symptom the room stores as the cause. Threshold
              Is Not Diagnosis is the line that was crossed. Alert Is Not Decision is the
              signal that something crossed a rule. Correlation Is Not Causation is the chart of
              co-movement. Proxy Is Not Outcome is the stand-in the room stores in place of the
              check. Verification Is Not Optional is the check that still has to be written. Noise
              Is Not Signal is the volume itself: sensor chatter, false positives, process
              variation, nuisance alarms, telemetry spikes without a confirmed asset state change,
              and operator anecdote volume. A line that was crossed does not become an actionable
              signal because the dashboard was loud around it. An alert does not become the case
              because the queue was full. Tags that travel together do not name root cause because
              they chattered together. A KPI that settled does not close the case. A later quiet
              screen does not write the check. The label stays. The signal stays unwritten until
              approved evidence confirms the asset state change. The decision stays unwritten until
              a named person records it.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. Noise does not interpret
              them into clearance. A case that is unknown, blank, or quiet is not made ready by a
              dashboard that was loud, and it is not made ready by a dashboard that went quiet. Loud
              is not a measurement of the missing field, and quiet is not the named decision.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified outcome, not cleared noise and not Learning credit taken
              from a quiet queue. The trail behind a recommendation is still evidence lineage. An
              alert is still not a decision. A dashboard is still not a decision. A trend is still
              not the truth. A threshold is still not a diagnosis. Those records are either on the
              case or they are not. If they are not, noise does not supply them.
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
              is step 02. Observed fact, assumption, and what is still missing stay distinct. Noise
              does not collapse that split into an actionable signal. A proposal with no basis is
              not ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A queue that goes quiet is not the check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the chatter the last shift
              treated as the signal.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating sensor chatter, false positives, process variation,
              nuisance alarms, telemetry spikes, or operator anecdote volume as a live signal or as
              plant control. Later editions can deepen a chapter. The spine stays in this order.
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
              supplies no plant alarm count. It does not claim that Sync executes plant work, writes
              a work order, isolates equipment, or controls a plant. It does not claim that noise is
              an actionable signal, that sensor chatter, false positives, process variation,
              nuisance alarms, telemetry spikes, or operator anecdote volume are a diagnosis, that
              noise is root cause, that noise is authorization for corrective work, that cleared
              noise is a verified operational outcome, or that noise is a Decision Case. It does not
              claim that self-guided onboarding is a live product path.
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
              live plant results, and chatter on a practice screen is not an actionable signal.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
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
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              on why seeing, acknowledging, or silencing an alert is not a decision,{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              on why co-moving tags, coincident alerts, and dashboard trends are not a recorded
              causal check and do not authorize action,{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              on why a KPI, a leading indicator, a model score, a green tile, a closed work-order
              count, an MTBF estimate, a sensor health %, or any other stand-in measure is not the
              verified operational outcome,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded,{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              on why a rising or falling line, a co-moving tag cluster, a week-over-week delta, or
              a trend narrative is not a recorded causal check and not a verified outcome,{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              on why a strong gut feel, a high model score, or a manager&apos;s certainty is not a
              recorded check,{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              on why a belief, a habit, a prior shift&apos;s story, or an unverified model output
              is not a recorded fact,{' '}
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
              on why a later case inherits the verified outcome, not cleared noise,{' '}
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
              chapter is the public statement of the check this essay refuses to replace with
              cleared noise.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Noise is not signal. Sensor chatter, false positives, process variation, nuisance
                alarms, telemetry spikes without a confirmed asset state change, and operator
                anecdote volume can fill a dashboard. Noise can inform a recommendation to
                investigate. It is not an actionable signal and not a Decision Case. Sync may
                surface correlated noise with approved evidence and recommend investigation. A named
                human still decides. Execution stays with authorized systems. The Reliability
                Engineer workspace is where a signed-in Decision Case is completed. A Reliability
                Assessment is the bounded review when the question is whether the records can
                support a conclusion. None of those is a claim that Sync executes plant work, or
                that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="noise-is-not-signal" />
        </motion.article>
      </div>
    </main>
  );
}
