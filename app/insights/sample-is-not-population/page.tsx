'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('sample-is-not-population');

export default function SampleIsNotPopulationPage() {
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
              Sample Is Not Population
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Sample is not population. A handful of observed cases, a few plants, a short list of
              assets that alarmed, or the work orders that happened to be written is a sample. The
              fleet, the asset class, and the sites the sentence is about are the population. A
              sample can inform a recommendation to investigate. It is not population-level proof,
              not a diagnosis of the fleet, not root cause for the class, not authorization for
              corrective work across assets that were not observed, not a verified operational
              outcome for the unobserved remainder, and not a Decision Case. Sync may surface a
              sample beside approved evidence and recommend investigation. Sync refuses to treat a
              sample as population-level proof. A named human still records the Decision Case.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case, a handful of observed cases is a sample. A few plants are a
              sample. The fleet is the population. A sample can inform a recommendation to
              investigate. It is not population-level proof. It is not a diagnosis. It is not root
              cause. It is not authorization for corrective work. It is not a verified operational
              outcome. It is not a Decision Case. Verification stays open until a verified
              operational outcome is recorded for the claim the case actually made.
            </p>

            <p>
              The meeting has a handful of observed cases. Work orders from the assets that
              alarmed. Notes from the plants that reported. A short list of units someone walked
              last month. The stories agree with each other, because the stories are the ones that
              got written down. Someone says the fleet is known, and the room treats the sentence
              as the Decision Case. Nobody named which population the sentence covers. Nobody
              separated the sample from the units that were not observed. Nobody cited approved
              evidence a later reader can inspect for the unobserved remainder. Nobody wrote
              accept, reject, escalate, or return. Nobody stored the verification. The Decision
              Case still has to show the question, the evidence, the recommendation, the named
              human decision, and the check. A handful of cases is not that record, and it is not
              the fleet.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>{' '}
              and stands beside{' '}
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
              . Noise keeps sensor chatter, false positives, process variation, nuisance alarms,
              telemetry spikes without a confirmed asset state change, and operator anecdote volume
              from being stored as an actionable signal. A loud handful is still a sample, and the
              chatter inside it is still noise. Symptom keeps a vibration spike, a hot bearing, a
              pressure drop, an operator report, a CMMS complaint code, a red tile, or any other
              observed symptom from being stored as the cause. A symptom seen on the assets that
              were looked at is still not the cause for the class. Threshold keeps a numeric
              threshold, a limit, an alarm band, or a set-point from being stored as a diagnosis or
              as the Decision Case. A line crossed inside the sample is still not a diagnosis of
              the fleet. Alert keeps seeing, acknowledging, or silencing an alert from being stored
              as a decision. Correlation keeps co-moving tags, coincident alerts, and dashboard
              trends from being stored as a recorded causal check, and it keeps them from
              authorizing action. Co-movement inside a handful of cases is still co-movement.
              Proxy keeps a KPI, a leading indicator, a model score, a green tile, a closed
              work-order count, an MTBF estimate, a sensor health %, or any other stand-in from
              being stored as the verified operational outcome. A stand-in computed on the sample
              is still a stand-in. Verification keeps the case open until the check is written
              down. A sample that looks settled is not that check.
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
              from being stored as a recorded fact. &quot;We saw it on these units, so the fleet
              has it&quot; is that story when the story is a sample.{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps a strong gut feel, a high model score, or a manager&apos;s certainty from being
              stored as a recorded check. Being sure the handful represents the population does not
              record that representation.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps a rising or falling line, a co-moving tag cluster, a week-over-week delta, and
              a trend narrative from being stored as a recorded causal check or a verified outcome.
              A slope drawn through the observed cases is still a line.{' '}
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
              keeps no reply, no alert, and an empty inbox from being read as approval. Plants that
              did not report are not a clear fleet. A sample does not fill the blank for the units
              that were never observed, and it does not turn the missing reply into population-level
              proof.
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
              missing. A handful of observed cases can be an observed fact that those cases were
              looked at. It is not a fourth column that proves the population, authorizes fleet-wide
              work, or closes the case. A proposal whose only basis is the sample has no
              population-level proof a later reader can inspect. A proposal with no named human
              decision is not a Decision Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a handful of observed cases, a few plants, or the assets that happened
              to alarm as population-level proof or as live plant control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A handful of observed cases is not the population
            </h2>

            <p>
              A population is the set the claim is about: the fleet, the asset class, the sites,
              the units a later reader would have to cover if the sentence is going to stand. A
              sample is the subset that was actually observed. A handful of observed cases is that
              subset. The work orders that were written are that subset. The assets that alarmed
              are that subset. The plants that sent a note are that subset. Those records can be
              real. They are still a sample. A sample is not the population.
            </p>

            <p>
              Selection is part of the record. Who entered the sample is a fact about what was
              looked at. The cases that were written down entered. The assets that alarmed entered.
              The plants that reported entered. The units nobody walked did not. The sites that
              stayed quiet did not. A later reader has to be able to see that boundary. Treating
              the sample as the population hides the boundary. The room thinks the fleet was
              measured. The fleet was not in the room. That skip is the failure this essay names.
            </p>

            <p>
              The meeting can note the handful. Noting it records that those cases were observed.
              It does not record population-level proof, and it does not open a Decision Case that
              covers the unobserved remainder. The population stays in the evidence a later reader
              can inspect, or it stays missing. The sample stays a fact about what was looked at,
              or it stays off the case as a story about the fleet. Treating a sample as
              population-level proof invents false certainty. The mode for the class was never
              written. Sync refuses to treat a sample as population-level proof.
            </p>

            <p>
              A sample can inform a recommendation to investigate. Informing a recommendation does
              not make the handful the population. The recommendation is a proposal. The person who
              can accept the operational consequence records accept, reject, escalate, or return.
              If the only support is the cases that happened to be observed, the proposal is not
              population-level proof and it is not a closed case for the fleet. The system does not
              auto-accept because the handful agreed with itself.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A few plants are not a diagnosis of the fleet
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect, and it names the assets
              that mode is claimed for. A few plants name where someone looked. They do not name
              the failure mode for the plants that were not in the sample, and they do not name it
              for the fleet. A sample is not a diagnosis. The diagnosis of the population stays
              unwritten until approved evidence names the mode for the set the claim covers.
            </p>

            <p>
              A dashboard can show the handful.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. Color does not turn a sample into the fleet. A
              red tile on the assets that alarmed is not a diagnosis of the class. A return to a
              quiet screen on those same assets is not a verified outcome for the population. A
              green tile after the observed cases were closed is not a partial decision about the
              units that were never opened. A green tile, an improved trend, or a cleared alert
              tile must not be read as authorization, verification of outcome, work-order
              execution, or plant control.
            </p>

            <p>
              An alert that fired inside the sample is still an alert. Seeing, acknowledging, or
              silencing it is not a Decision Case and not a decision. Closing the observed cases
              because they &quot;all looked the same&quot; must not be read as authorization,
              verification of outcome, work-order execution, or plant control for the fleet. Sync
              may emit alerts, coverage gaps, and recommendations. Sync may surface a sample
              beside approved evidence. A named human still opens a Decision Case on a question,
              cites approved evidence, and accepts, rejects, escalates, or returns.
            </p>

            <p>
              This essay states no OEM limit and supplies no fleet count. A headcount the meeting
              invented so the handful would look like the population is not a diagnosis, and this
              page does not publish the number. The case holds the cases that were stored, the
              boundary of what was observed, and what is still unknown. It does not hold a
              population this essay made up so the sample would look like proof.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A sample does not name root cause for the class
            </h2>

            <p>
              Root cause is a recorded claim: the condition that produced the change, on evidence a
              later reader can reconstruct, for the assets the claim covers. A handful of observed
              cases can show a condition on those cases. The same condition can have more than one
              source. The instrument can be local to the units that were walked. The duty cycle can
              be local to the plants that reported. A maintenance practice can be local to the
              crew that wrote the work orders. Co-movement inside the sample is still co-movement.
              It is not a recorded causal check for the population, and it does not authorize
              action on the class. Naming root cause for the fleet is a recorded claim. The sample
              is not that claim. A sample is not root cause.
            </p>

            <p>
              If the case cannot show which units were in the sample, which units were not, the
              asset configuration of each, the failure and maintenance history, and the human
              judgment that connects the observed condition to a state change, the handful is a
              list without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. A sample does not shorten it, and it does not extend
              the trail to assets that were never cited. The handful can sit on the case as an
              observed fact, labeled as a fact about what was looked at. The label does not promote
              the list into root cause for the class.{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote a practice sample into a fleet root cause. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming population-level proof the edition does not hold.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry is a practice record. A practice sample is still a practice subset. It is
              not a live plant population, and it is not a substitute for the fleet the operator
              still has to bound from evidence. Sync refuses to treat a sample as population-level
              proof, including when the sample is seeded.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Agreement inside the sample is not authorization for corrective work
            </h2>

            <p>
              Authorization is the named act. A drafted next action is a proposal.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps that proposal off the decision. A proposal that cites a handful of observed
              cases, a few plants, or the assets that alarmed is still a proposal. The cases can
              agree with each other. The plants that reported can tell the same story. Neither the
              agreement nor the repetition accepts the operational consequence for the population.
              A sample can inform a recommendation to investigate. It is not authorization for
              corrective work on assets the sample did not cover, and it is not authorization for
              corrective work on the assets it did cover until a named person records that act.
            </p>

            <p>
              The system does not auto-authorize because the sample agreed with itself. Sync
              recommends. A named human decides. If the only support is the handful, the proposal
              is not ready to be stored as population-level proof, and it is not ready to be stored
              as authorized fleet work. A hoped-for reading of the sample is not the decision. Sync
              must not auto-close, auto-authorize, or auto-clear the unobserved remainder as a
              verified outcome.
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
              stays with authorized systems. A sample, however it is surfaced, does not move
              execution onto Sync, and it does not replace the named decision that would have to
              come first. Corrective work stays unauthorized until that named act is on the case,
              and fleet-wide corrective work stays unauthorized when the evidence is only the
              sample.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A settled sample does not verify the outcome for the population
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do,
              on the assets the authorization covered. The case stays open until that check is on
              the case. Verification stays open until a verified operational outcome is recorded. A
              handful of cases that later look quiet is a later display of the sample. It is not,
              by itself, the check, and it is not a check of the population. The observed cases can
              settle because the window changed, because those units were worked, because the
              instrument changed, or because a different condition moved the number. The quiet does
              not record what happened on the units that were never in the sample.
            </p>

            <p>
              A proxy that moved on the sample is still a proxy. A closed work-order count is still
              a count of what was closed. A green tile is still a display. An MTBF estimate built
              from the handful is still an estimate of the handful. None of them verify outcome for
              the population. Verification still records the actual check. Treating a settled
              sample as the outcome invents false closure. The fleet looks finished. The check was
              never written for the set the sentence claimed. Sync must not auto-clear the
              unobserved assets as verified outcomes, and it must not treat a settled sample as
              Learning credit.
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
              a verified outcome, not a hoped-for reading of the sample onto the fleet. Treating a
              sample as population-level proof teaches the wrong lesson into Learning. What was
              believed may include a labeled note that a handful of cases were observed. Learning
              does not inherit the handful as if the check had covered the population and confirmed
              the result. A later crew that repeats the work across the class because the last
              review &quot;already saw it on those units,&quot; without the population boundary and
              the verification on the prior case, is inheriting a sample. That is the wrong lesson.
              The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a sample as Learning credit
              for the fleet.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A sample is not a Decision Case
            </h2>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that a handful of cases were
              observed does not record that question, and it does not record the decision. The
              question has to say what is being decided, and for which set. &quot;These units&quot;
              is a different question from &quot;this fleet.&quot; Collapsing them is how a sample
              gets stored as the population. The case is the order: question, evidence,
              recommendation, human decision, action, verification, and learning. A short list is
              not that order. A sample is not a Decision Case.
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
              the Decision Case. A sample does not. A handful of observed cases does not sign
              accept for the fleet. A few plants do not sign reject for the sites that did not
              report. The assets that alarmed do not escalate the class. Agreement inside the
              sample does not return the proposal. The signed-in Decision Case keeps who decided
              visible beside the recommendation. The recorded act is mandatory. The population the
              act covers has to be visible too.
            </p>

            <p>
              A gate on the Decision Case is a recorded step that is either satisfied or not:
              evidence a later reader can inspect, a named human decision, a verification written
              down. A sample does not satisfy a gate that was written for the population. A handful
              of observed cases does not open a fleet gate. A few plants do not stand in for the
              missing record on the sites that were not observed. The unobserved remainder does not
              close because the sample looked consistent. A sample can inform a recommendation to
              investigate. It does not name the failure mode for the class, authorize corrective
              work for the fleet, verify outcome for assets that were not observed, or replace a
              named human decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync may recommend investigation. It must not treat the sample as proof.
            </h2>

            <p>
              Sync may surface a sample beside approved evidence and recommend investigation of
              what the sample does not cover. Holding the handful beside approved evidence can
              inform that recommendation. The sample is still not the population. The approved
              evidence is what a later reader can inspect. The recommendation is a proposal to
              investigate, not a stored population-level proof. Sync refuses to treat a sample as
              population-level proof. Sync must not auto-close, auto-authorize, or auto-clear the
              fleet as a verified outcome of the sample. Sync must not treat a settled sample as
              Learning credit.
            </p>

            <p>
              A sample held next to approved evidence is still a sample. Two plants that reported
              the same condition can be shown together. Showing them together does not record the
              condition on the plants that did not report, and it does not close the case. Approved
              evidence is the part the recommendation is allowed to cite. A count of observed cases
              is not approved evidence that the count is the fleet. A list of plants that reported
              is not approved evidence about the plants that did not. The recommendation can say:
              investigate the boundary. It cannot say: the population is known.
            </p>

            <p>
              Treating a sample as population-level proof invents false certainty, floods work queues,
              burns craft time, and teaches the wrong lesson into Learning. A campaign
              written from a handful of observed cases sends people after a class the evidence did
              not cover. Craft time goes into repeating a finding that was never shown to be the
              fleet. The next review inherits the habit: the cases we saw meant the population,
              and a quiet remainder meant clear. That lesson is the one this essay refuses. Work
              queues stay for work a named human authorized, on the assets that authorization
              named. Investigation of the unobserved remainder stays a recommendation until that
              person records it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Unknown, blank, and silence stay what they are
            </h2>

            <p>
              Unknown stays unknown. Filling the unknown line with a handful of observed cases does
              not change the state to clear, and it does not name the failure mode for the
              population. Bad or not-ready evidence stays blocked. A sample that looks related to
              the blocked item does not relabel blocked as ready for the fleet. The operator must
              not treat unknown as go because a few plants reported. Go would mean the evidence is
              sufficient for the next recorded step on the set the question names. A sample is not
              sufficiency for a population it does not cover.
            </p>

            <p>
              Blank stays blank. Zero is a verified measurement of none. A sample written into an
              empty field collects a flag about what was looked at. It does not collect the missing
              value for the units that were not looked at. Recovery figures that were left blank
              stay blank. They are not inferred from the plants that reported. A blank verification
              field is not a verified outcome of none, and a quiet remainder does not close it. The
              absence of a report is not a measured zero on the fleet.
            </p>

            <p>
              Silence stays silence. No reply is not approval. An empty inbox is not clearance. A
              quiet dashboard is not controlled. Plants that did not report are still unobserved.
              They do not write accept, reject, escalate, or return. They do not record a check
              that nobody performed on those sites. A narrative about the plants that did report
              does not turn the missing response into population-level proof.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface a sample beside approved evidence and recommend investigation. That
              is a proposal. The person who can accept the operational consequence records the
              decision, and the decision names the set it covers. Until that act is on the case,
              the case is still a proposal. The system does not auto-close the fleet because the
              handful settled. Sync recommends. A named human decides. A named human records the
              Decision Case. Verification stays open until a verified operational outcome is
              recorded. Sync refuses to treat a sample as population-level proof.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of a sample is not control of the
              plant, and it is not coverage of the population. A Decision Case that records a
              sample does not put Sync in control of the work, the isolation, or the change. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. A settled handful is not the check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The sample is not the act.
            </p>

            <p className="text-xl font-semibold text-white">
              A handful of observed cases, a few plants, the assets that alarmed, and the work
              orders that happened to be written are a sample. The fleet, the asset class, and the
              sites the sentence is about are the population. A sample can inform a recommendation
              to investigate. It is not population-level proof, not a diagnosis, not root cause,
              not authorization for corrective work, not a verified operational outcome, and not a
              Decision Case. Sync may surface a sample beside approved evidence and recommend
              investigation. Sync refuses to treat a sample as population-level proof. Sync must
              not auto-close, auto-authorize, or auto-clear the unobserved remainder as a verified
              outcome, and it must not treat a settled sample as Learning credit. A named human
              records the Decision Case. Verification stays open until a verified operational
              outcome is recorded. Execution stays with authorized systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes a sample to population-level proof or to a Decision Case.
            </p>

            <p>
              Noise Is Not Signal is the volume on the display. Symptom Is Not Cause is the
              observed symptom the room stores as the cause. Threshold Is Not Diagnosis is the line
              that was crossed. Alert Is Not Decision is the signal that something crossed a rule.
              Correlation Is Not Causation is the chart of co-movement. Proxy Is Not Outcome is the
              stand-in the room stores in place of the check. Verification Is Not Optional is the
              check that still has to be written. Sample Is Not Population is the boundary of what
              was observed: a handful of cases, a few plants, the assets that alarmed, the work
              orders that were written. Chatter inside that handful is still noise. A symptom on
              those assets is still not the cause for the class. A line crossed on the sample is
              still not a diagnosis of the fleet. An alert on the observed units is still not the
              case. Tags that travel together inside the sample do not name root cause for the
              population. A KPI computed on the handful does not close the fleet. A later quiet
              screen on the sample does not write the check for the units that were never looked
              at. The label stays. The population stays unproven until approved evidence covers the
              set the claim names. The decision stays unwritten until a named person records it.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A sample does not interpret
              them into clearance. A case that is unknown, blank, or quiet is not made ready by a
              handful of observed cases, and it is not made ready by plants that did not report.
              Observed is not a measurement of the missing field, and unobserved is not the named
              decision.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified outcome, not a sample stored as the population and not
              Learning credit taken from a settled handful. The trail behind a recommendation is
              still evidence lineage, including the trail that says who was in the sample and who
              was not. An alert is still not a decision. A dashboard is still not a decision. A
              trend is still not the truth. A threshold is still not a diagnosis. Noise is still
              not an actionable signal. Those records are either on the case or they are not. If
              they are not, a sample does not supply them for the fleet.
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
              sample does not collapse that split into population-level proof. A proposal with no
              basis for the set it names is not ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A handful that later looks quiet is not the check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the sample the last
              review treated as the fleet.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a handful of observed cases, a few plants, or a
              practice list as population-level proof or as plant control. Later editions can
              deepen a chapter. The spine stays in this order.
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
              supplies no fleet count. It does not claim that Sync executes plant work, writes a
              work order, isolates equipment, or controls a plant. It does not claim that a sample
              is population-level proof, that a handful of observed cases or a few plants are a
              diagnosis of the fleet, that a sample is root cause for the class, that agreement
              inside the sample is authorization for corrective work, that a settled sample is a
              verified operational outcome for the population, or that a sample is a Decision Case.
              It does not claim that self-guided onboarding is a live product path.
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
              live plant results, and a practice sample is not population-level proof.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>{' '}
              on why sensor chatter, false positives, process variation, nuisance alarms, telemetry
              spikes without a confirmed asset state change, and operator anecdote volume are not
              an actionable signal and not a Decision Case,{' '}
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
              on why a later case inherits the verified outcome, not a sample stored as the fleet,{' '}
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
              sample.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Sample is not population. A handful of observed cases or a few plants is not the
                fleet. A sample can inform a recommendation to investigate. It is not
                population-level proof and not a Decision Case. Sync may surface a sample beside
                approved evidence and recommend investigation. Sync refuses to treat a sample as
                population-level proof. A named human still decides. Execution stays with
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
          <InsightNextSteps slug="sample-is-not-population" />
        </motion.article>
      </div>
    </main>
  );
}
