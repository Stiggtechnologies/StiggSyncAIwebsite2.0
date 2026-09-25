'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('symptom-is-not-cause');

export default function SymptomIsNotCausePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Symptom Is Not Cause</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Symptom is not cause. A vibration spike, a hot bearing, a pressure drop, an operator
              report, a CMMS complaint code, a red tile, or any other observed symptom can inform a
              recommendation. It does not name the failure mode, prove root cause, authorize
              corrective work, verify outcome, or replace a named human decision on the Decision
              Case. Sync may surface symptoms and correlate them with approved evidence. A named
              human still decides.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case, a symptom is an observation. It is not the cause. Observing or
              acknowledging a symptom is not a diagnosis and not a Decision Case. A vibration
              spike, a hot bearing, a pressure drop, an operator report, a CMMS complaint code, a
              red tile, or any other observed symptom can inform a recommendation. It does not name
              the failure mode, prove root cause, authorize corrective work, verify outcome, or
              replace a named human decision.
            </p>

            <p>
              The bearing is hot. Vibration is up. Pressure dropped. The operator wrote the report.
              The CMMS complaint code is on the ticket. The tile is red. Someone says the cause is
              known, and the room treats the sentence as the Decision Case. Nobody named the
              failure mode. Nobody recorded the evidence that would let a later reader tell why the
              symptom appeared. Nobody wrote accept, reject, escalate, or return. Nobody stored the
              verification. The Decision Case still has to show the question, the evidence, the
              recommendation, the named human decision, and the check. An observed symptom is not
              that record.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>{' '}
              and stands beside{' '}
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
              . Threshold keeps a numeric threshold, a limit, an alarm band, or a set-point from
              being stored as a diagnosis or as the Decision Case. A symptom can be what the breach
              looks like on the asset. The symptom is still not the cause, and it is still not the
              case. Alert keeps seeing, acknowledging, or silencing an alert from being stored as a
              decision. A symptom can be what the alert reports. Acknowledging the symptom is still
              not the decision. Correlation keeps co-moving tags, coincident alerts, and dashboard
              trends from being stored as a recorded causal check, and it keeps them from
              authorizing action. Sync may surface symptoms and correlate them with approved
              evidence. That correlation does not prove root cause, and it does not authorize
              corrective work. Proxy keeps a KPI, a leading indicator, a model score, a green tile,
              a closed work-order count, an MTBF estimate, a sensor health %, or any other stand-in
              from being stored as the verified operational outcome. Symptom clearance is not that
              outcome. Verification keeps the case open until the check is written down. A symptom
              that went away is not that check.
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
              from being stored as a recorded fact. &quot;The bearing is hot, so we know the
              cause&quot; is that story when the story is a symptom.{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps a strong gut feel, a high model score, or a manager&apos;s certainty from being
              stored as a recorded check. Being sure the symptom names one failure mode does not
              record that mode.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps a rising or falling line, a co-moving tag cluster, a week-over-week delta, and
              a trend narrative from being stored as a recorded causal check or a verified outcome.
              A line that later shows up as a vibration spike is still a line.{' '}
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
              asset is not clearance. A symptom does not fill the blank with a failure mode, and it
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
              missing. A symptom can be an observed fact: the vibration that was stored, the
              temperature that was stored, the pressure that was stored, the words the operator
              wrote, the complaint code that was selected, the color the tile showed. It is not a
              fourth column that names the failure mode, proves root cause, authorizes the work, or
              closes the case. A proposal whose only basis is that a symptom was seen has no cause
              a later reader can inspect. A proposal with no named human decision is not a Decision
              Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a vibration spike, a hot bearing, a pressure drop, an operator report,
              a CMMS complaint code, or a red tile as a cause or as live plant control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Observing a symptom is not a diagnosis
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect: what failed, on what
              evidence, and what is still missing. A symptom is what was observed. A vibration
              spike is a reading that left its prior level. A hot bearing is a temperature, a
              touch, or a report that the bearing was hot. A pressure drop is a reading that fell.
              An operator report is words a person wrote. A CMMS complaint code is a label stored
              on a maintenance record. A red tile is a color on a display. Each of them says
              something was seen. None of them says why. Those are different records. The symptom
              does not write the failure mode.
            </p>

            <p>
              The meeting can note the symptom. Noting it records that someone saw it or
              acknowledged it. Observing or acknowledging a symptom is not a diagnosis and not a
              Decision Case. The failure mode stays in the evidence a later reader can inspect, or
              it stays missing. The symptom stays a fact about what was observed, or it stays off
              the case as a display. Treating the observation as the diagnosis invents a name the
              record does not hold. The room thinks the mode is known. The mode was never written.
              That skip is the failure this essay names.
            </p>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that a vibration spike, a hot
              bearing, a pressure drop, an operator report, a CMMS complaint code, or a red tile
              was seen does not record that question, and it does not record the decision. The case
              is the order: question, evidence, recommendation, human decision, action,
              verification, and learning. An observed symptom is not that order.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Treating the symptom as the cause invents false certainty
            </h2>

            <p>
              The same symptom can appear for more than one reason. The instrument can be wrong.
              The window can be wrong. The complaint code can be the code the list offered. The
              operator can have reported what was obvious and missed what was not. A related
              condition can have produced the symptom without being the mode the room wants to
              name. Co-moving tags that rise with the symptom are still co-movement. They are not a
              recorded causal check, and they do not authorize corrective work. Naming the cause is
              a recorded claim. The symptom is not that claim.
            </p>

            <p>
              Treating a symptom as the cause invents false certainty. The case stores a name the
              evidence did not support. A later reader cannot tell which mode was ruled out,
              because none was written. The room proceeds as if the cause were known. The cause was
              the symptom, restated. That restatement is not a failure mode.
            </p>

            <p>
              False certainty misroutes work orders. The room sends corrective work against a cause
              the evidence does not name. The bearing is greased because it was hot. The coupling
              is aligned because vibration was up. The strainer is cleaned because pressure
              dropped. Each of those may be the right work. None of them is made right by the
              symptom. Sync does not write the work order. Recording an ACTION disposition is work
              intent. It is not plant execution.{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps that intent off the plant. The systems that already hold execution authority
              write the work order or the isolation. A symptom, however it is surfaced, does not
              choose the work, does not authorize corrective work, and does not move execution onto
              Sync.
            </p>

            <p>
              The wrong route teaches the wrong lesson into Learning. A later question is allowed
              to inherit what the closed case actually checked.{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              says the later question inherits that verified outcome, not a hope. If the prior case
              stored the symptom as the cause, the next crew inherits a name. The next vibration
              spike is treated as the same mode. The next hot bearing gets the same work. The
              lesson was never checked. That is the wrong lesson. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a symptom as a cause.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A candidate cause is still a recommendation
            </h2>

            <p>
              Sync may surface symptoms and correlate them with approved evidence. Holding a
              symptom beside approved evidence can inform a recommendation. Informing a
              recommendation does not name the failure mode, and it does not prove root cause. The
              correlation is a record that the symptom and the cited evidence were seen together.
              It is not a recorded causal check. Two records that travel together are still
              co-movement until a named person records the check the question asked for.
            </p>

            <p>
              Sync may recommend investigation or a candidate cause with cited evidence. The
              recommendation is a proposal. Investigation is a proposed next look: what to inspect,
              against which evidence, and what is still missing. A candidate cause is a proposed
              name for the failure mode, attached to the evidence the proposal cites. Neither one
              is the decision. The person who can accept the operational consequence records
              accept, reject, escalate, or return. If the only support is that a symptom was seen,
              the proposal is not a diagnosis and it is not a closed case.
            </p>

            <p>
              Cited evidence is the trail a later reader can inspect: the asset configuration, the
              failure and maintenance history, the measurement that was stored, and the human
              judgment that connects them.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. A symptom does not shorten it. A candidate cause without
              that trail is a name without a record. The symptom can sit on the case as an observed
              fact, labeled as a fact about what was seen. The label does not promote the symptom
              into a cause.
            </p>

            <p>
              The system must not auto-close, auto-authorize, or treat symptom clearance as a
              verified outcome. The system does not auto-accept because the vibration is up, because
              the bearing is hot, because the pressure dropped, or because the complaint code
              matches a prior ticket. Sync recommends. A named human decides. A drafted next action
              is a proposal.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps that proposal off the decision. A proposal that cites a symptom is still a
              proposal. The tile can be red. The report can be specific. Neither the color nor the
              report accepts the operational consequence. A symptom can inform a recommendation. It
              does not authorize corrective work.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A complaint code and a red tile are not the cause
            </h2>

            <p>
              A CMMS complaint code is a label chosen from a list and stored on a maintenance
              record. The code can inform a recommendation. It does not name the failure mode. The
              list can be short. The prior shift can have used the same code. The code can describe
              the symptom in different words: hot, noisy, low pressure, vibration. Restating the
              symptom as a code does not prove root cause. The code stays a label, or it stays off
              the case. It does not become the diagnosis because it was typed into a ticket.
            </p>

            <p>
              A red tile is a display.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. Color does not put it back as a cause. Red is
              not a diagnosis. A return to green is not a verified outcome. Amber is not a partial
              decision. A green tile, an improved trend, or a cleared alert tile must not be read
              as authorization, verification of outcome, work-order execution, or plant control.
            </p>

            <p>
              An alert that fired because the symptom was seen is still an alert. Seeing,
              acknowledging, or silencing it is not a Decision Case and not a decision. Clearing
              the queue because the symptom &quot;went away&quot; must not be read as
              authorization, verification of outcome, work-order execution, or plant control. Sync
              may emit alerts, coverage gaps, and recommendations. Sync may surface symptoms. A
              named human still opens a Decision Case on a question, cites approved evidence, and
              accepts, rejects, escalates, or returns.
            </p>

            <p>
              This essay states no OEM limit and supplies no plant set-point. A vibration number
              the meeting invented is not a cause, and this page does not publish the number. The
              case holds the measurement that was stored, the report that was stored, the code that
              was stored, and what is still unknown. It does not hold a cause this essay made up so
              the symptom would look decisive.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Symptom clearance does not verify the outcome
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do.
              The case stays open until that check is on the case. A symptom that is no longer
              observed is a later reading. It is not, by itself, the check. The vibration can fall
              because the window changed. The bearing can cool because the load changed. The
              pressure can recover because a valve moved. The operator can stop reporting because
              the shift ended. The complaint code can be closed because the ticket was closed. The
              tile can turn green because the display rule changed. Symptom clearance does not
              record what the authorized change did.
            </p>

            <p>
              Treating symptom clearance as a verified outcome invents false closure. The case looks
              finished. The check was never written. A proxy that moved after the symptom left is
              still a proxy. A closed work-order count is still a count. A green tile is still a
              display. None of them verify outcome. Verification still records the actual check.
              The system must not auto-close because the symptom cleared, and it must not
              auto-authorize the next job because the last symptom left the screen.
            </p>

            <p>
              Learning requires a verified outcome, not a hoped-for clearance. What was believed may
              include a labeled note that a vibration spike, a hot bearing, a pressure drop, an
              operator report, a CMMS complaint code, or a red tile was observed. Learning does not
              inherit the symptom as if the check had named the failure mode and confirmed the
              result. A later crew that repeats the work because the last symptom &quot;already
              cleared,&quot; without the verification on the prior case, is inheriting an
              observation. That is the wrong lesson.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A symptom does not replace a named human decision
            </h2>

            <p>
              A named person accepts, rejects, escalates, or returns the recommendation. That act
              is the decision. A named human records the decision.{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              says until that act is recorded, the case is still a proposal. A symptom does not
              replace a named human decision on the Decision Case. The vibration spike does not
              sign accept. The hot bearing does not sign reject. The pressure drop does not
              escalate. The operator report does not return the proposal. The complaint code does
              not initial the case. The red tile does not decide. The signed-in Decision Case keeps
              who decided visible beside the recommendation. The recorded act is mandatory.
            </p>

            <p>
              Verification stays on the case until a verified operational outcome is recorded. A
              gate on the Decision Case is a recorded step that is either satisfied or not:
              evidence a later reader can inspect, a named human decision, a verification written
              down. A symptom does not satisfy the gate. A complaint code does not open it. A red
              tile does not stand in for the missing record. Symptom clearance does not close it. A
              symptom can inform a recommendation. It does not name the failure mode, prove root
              cause, authorize corrective work, verify outcome, or replace a named human decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Unknown, blank, and silence stay what they are
            </h2>

            <p>
              Unknown stays unknown. Filling the unknown line with a symptom does not change the
              state to clear, and it does not name the failure mode. Bad or not-ready evidence
              stays blocked. A symptom that looks related to the blocked item does not relabel
              blocked as ready. The operator must not treat unknown as go because the bearing is
              hot. Go would mean the evidence is sufficient for the next recorded step. A symptom
              is not sufficiency.
            </p>

            <p>
              Blank stays blank. Zero is a verified measurement of none. A symptom written into an
              empty field collects a flag. It does not collect the missing value. Recovery figures
              that were left blank stay blank. They are not inferred from a vibration spike or a
              pressure drop. A blank verification field is not a verified outcome of none, and
              symptom clearance does not close it.
            </p>

            <p>
              Silence stays silence. No reply is not approval. An empty inbox is not clearance. A
              quiet dashboard is not controlled. An asset that is quiet on a quiet screen is still
              an observation, or the absence of one. It does not write accept, reject, escalate, or
              return. It does not record a check that nobody performed. A narrative about the quiet
              asset does not turn the missing response into the named decision.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian, CMMS, or control-system tags sits outside this edition. Simulated or seeded
              telemetry is a practice record. A practice symptom is still a practice observation.
              It is not a live plant cause, and it is not a substitute for the failure mode the
              operator still has to name from evidence.{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote a practice symptom into a plant cause. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live cause the edition does not hold.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface symptoms and correlate them with approved evidence. Sync may
              recommend investigation or a candidate cause with cited evidence. That is a proposal.
              The person who can accept the operational consequence records the decision. Until
              that act is on the case, the case is still a proposal. The system does not
              auto-close, auto-authorize, or treat symptom clearance as a verified outcome. Sync
              recommends. A named human decides.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of the tag is not control of the
              plant. A Decision Case that records a symptom does not put Sync in control of the
              work, the isolation, or the change. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. The symptom is not the check. Symptom clearance is not the
              check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The observation is not the act. Verification stays on the
              case until a verified operational outcome is recorded.
            </p>

            <p className="text-xl font-semibold text-white">
              Symptom is not cause. Observing or acknowledging a vibration spike, a hot bearing, a
              pressure drop, an operator report, a CMMS complaint code, a red tile, or any other
              observed symptom is not a diagnosis and not a Decision Case. Treating the symptom as
              the cause invents false certainty, misroutes work orders, and teaches the wrong
              lesson into Learning. The symptom can inform a recommendation. It does not name the
              failure mode, prove root cause, authorize corrective work, verify outcome, or replace
              a named human decision. Sync may surface symptoms and correlate them with approved
              evidence. Sync may recommend investigation or a candidate cause with cited evidence.
              It must not auto-close, auto-authorize, or treat symptom clearance as a verified
              outcome. A named human records the decision. Verification stays on the case until a
              verified operational outcome is recorded. Sync recommends. A named human decides.
              Execution stays with authorized systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes an observed symptom to a cause or to a Decision Case.
            </p>

            <p>
              Threshold Is Not Diagnosis is the line itself: the numeric threshold, the limit, the
              alarm band, the set-point. Alert Is Not Decision is the signal that something crossed
              a rule. Correlation Is Not Causation is the chart of co-movement. Proxy Is Not
              Outcome is the stand-in the room stores in place of the check. Verification Is Not
              Optional is the check that still has to be written. Symptom Is Not Cause is the
              observation: the vibration spike, the hot bearing, the pressure drop, the operator
              report, the CMMS complaint code, the red tile. A line that was crossed does not become
              a cause because someone felt the bearing. An alert does not become the case because
              the symptom was acknowledged. Tags that travel with the symptom do not prove root
              cause. A KPI that moved when the symptom left does not close the case. A later quiet
              reading does not write the check. The label stays. The cause stays unwritten until
              the evidence names the mode. The decision stays unwritten until a named person
              records it.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A symptom does not
              interpret them into clearance. A case that is unknown, blank, or quiet is not made
              ready by a vibration spike, a hot bearing, or a red tile. An observation is not a
              measurement of the missing field, and it is not the named decision.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified outcome, not a hoped-for clearance of the symptom. The
              trail behind a recommendation is still evidence lineage. An alert is still not a
              decision. A dashboard is still not a decision. A trend is still not the truth. A
              threshold breach is still not a diagnosis. Those records are either on the case or
              they are not. If they are not, a symptom does not supply them.
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
              symptom does not collapse that split into a cause. A proposal with no basis is not
              ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. Symptom clearance is not the check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the symptom the last
              shift treated as the cause.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a vibration spike, a hot bearing, a pressure drop, an
              operator report, a CMMS complaint code, or a red tile as a live cause or as plant
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
              supplies no plant set-point. It does not claim that Sync executes plant work, writes
              a work order, isolates equipment, or controls a plant. It does not claim that a
              symptom is a cause, that observing or acknowledging a symptom is a diagnosis, that a
              vibration spike, a hot bearing, a pressure drop, an operator report, a CMMS complaint
              code, or a red tile is a Decision Case, that a symptom names the failure mode, that a
              symptom proves root cause, that a symptom authorizes corrective work, that symptom
              clearance verifies outcome, or that a symptom replaces a named human decision. It
              does not claim that Sync auto-closes a case, auto-authorizes work, or treats symptom
              clearance as a verified outcome. It does not claim that self-guided onboarding is a
              live product path.
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
              live plant results, and a symptom on a practice screen is not a cause.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
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
              on why a later case inherits the verified outcome, not a hoped-for clearance of the
              symptom,{' '}
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
              chapter is the public statement of the check this essay refuses to replace with a
              symptom.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Symptom is not cause. A vibration spike, a hot bearing, a pressure drop, an
                operator report, a CMMS complaint code, a red tile, or any other observed symptom
                can inform a recommendation. It does not name the failure mode, prove root cause,
                authorize corrective work, verify outcome, or replace a named human decision. Sync
                may surface symptoms and correlate them with approved evidence. Sync may recommend
                investigation or a candidate cause with cited evidence. It must not auto-close,
                auto-authorize, or treat symptom clearance as a verified outcome. A named human
                records the decision. Verification stays on the case until a verified operational
                outcome is recorded. Sync recommends. A named human decides. Execution stays with
                authorized systems. The Reliability Engineer workspace is where a signed-in Decision
                Case is completed. A Reliability Assessment is the bounded review when the question
                is whether the records can support a conclusion. None of those is a claim that Sync
                executes plant work, or that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="symptom-is-not-cause" />
        </motion.article>
      </div>
    </main>
  );
}
