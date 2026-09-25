'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('trend-is-not-truth');

export default function TrendIsNotTruthPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Trend Is Not Truth</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Trend is not truth. A rising or falling line, a co-moving tag cluster, a week-over-week
              delta, or a &quot;we&apos;ve been trending this way&quot; narrative is not a recorded
              causal check and not a verified outcome. A trend can inform a recommendation. It does
              not authorize action, clear a gate, or replace a named human decision.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. On the Decision Case, a trend is a description
              of direction over a window. It is not the record that a condition is true, that one
              condition caused another, or that an action is authorized.
            </p>

            <p>
              The line on the dashboard has been falling for three weeks. A co-moving tag cluster
              is moving the same way. The week-over-week delta is negative. Someone says the plant
              has been trending this way, and the meeting treats the sentence as the result. Nobody
              wrote the check that the slope names a cause. Nobody stored the measurement that
              would show the condition. Nobody closed a verified outcome against an authorized
              change. The Decision Case still has to show the inspection, the reading, or the
              verification that was actually recorded. A rising or falling line is not that line
              on the case.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              and stands beside{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>
              . Correlation keeps co-moving tags, coincident alerts, and dashboard trends from
              being stored as a recorded causal check, and it keeps them from authorizing action.
              Confidence keeps a strong gut feel, a high model score, years of tribal certainty, or
              a manager&apos;s certainty from being stored as a recorded check or a verified
              outcome. This essay is the direction itself, and the story the room tells about the
              direction. A slope does not move the statement into the observed-fact column. A
              week-over-week delta does not verify the outcome. Trend is not truth. Being sure the
              line will continue does not record the cause.
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
              from being stored as a recorded fact. &quot;We&apos;ve been trending this way&quot;
              is that story when the story is a slope.{' '}
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
              keeps no reply, no alert, and an empty inbox from being read as approval. A trend is
              what the room uses to skip those records. A falling line does not record the missing
              evidence as clear. A delta drawn across a blank does not measure none. A narrative
              about the slope does not write the decision the operator never recorded.
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
              missing. A trend is not a fourth column that overrides the split. A proposal whose
              only basis is that a line has been rising or falling has no causal basis a later
              reader can inspect. A proposal with no basis is not ready for a human decision.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a rising or falling line, a co-moving tag cluster, a week-over-week
              delta, or a trend narrative as a live fact.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A trend is not a recorded causal check
            </h2>

            <p>
              A recorded causal check is something a later reader can inspect on the case: the
              condition that was present, the change a named person authorized, the measurement
              taken before and after that change, and the verification that the authorized action
              did what it was supposed to do. A trend is a statement about direction. It names that
              a displayed value moved up or down across a window. It does not name which condition
              produced the move, whether a third condition produced it, or whether the move is the
              outcome the question is about. Those are different records. The chart does not write
              the check.
            </p>

            <p>
              The meeting can note the slope. Noting it records that someone saw the slope. It does
              not record the cause, and it does not record a verified outcome. Cause information is
              the check: what was observed, what was changed under a named decision, and what the
              verification showed. The direction stays in the assumption column, or it stays off the
              case as a display. Steepness does not change the column. A cleaner line is still not
              a recorded causal check.
            </p>

            <p>
              Sync may hold the trend beside a recommendation. Holding it can inform that
              recommendation. Informing a recommendation does not authorize the work. The
              recommendation is a proposal. The person who can accept the operational consequence
              records accept, reject, escalate, or return. If the only support is that the line has
              been moving, the proposal is not ready for that act. The system does not auto-accept
              because the slope agrees with the draft.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A rising or falling line is not the outcome
            </h2>

            <p>
              A rising or falling line is one series on a display: a health score, a count, a
              temperature, a vibration, a backlog. The display can surface that the plotted value
              changed in the window the chart covers.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. Direction does not put it back. A line that falls
              is not a verified outcome of improvement. A line that rises is not a verified outcome
              of failure. Green, red, or a steep slope does not authorize the work, verify the
              outcome, write the work order, or control the plant.
            </p>

            <p>
              The operator reads the line as a report about the chart. The operator does not read
              it as the causal check and does not read it as the result. A recommendation drafted
              from the line is still a recommendation. Sync recommends. Humans decide. The named
              person accepts, rejects, escalates, or returns against evidence a later reader can
              inspect. If the only support is the slope, the proposal is not ready for that act.
            </p>

            <p>
              This essay states no OEM limit and no operating threshold. A line that crosses a mark
              the meeting invented is not a recorded causal check, and this page does not supply
              the mark. The case holds the measurement that was stored, or it holds unknown. It
              does not hold a limit this essay made up so the chart would look decisive.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A co-moving tag cluster is not the truth
            </h2>

            <p>
              A co-moving tag cluster is a set of signals that rise and fall together in the same
              window. The cluster has a direction. The direction is still a timing report. Shared
              load, a common upstream, a season, a shift change, a clock that is off, or a third
              driver the case never named can move the cluster without any member being the cause
              the question needs. The operator can write that the cluster has been trending. The
              sentence does not identify which condition produced the failure, the delay, or the
              next action. Correlation already keeps co-movement from being stored as causation.
              The cluster&apos;s slope does not restore that claim under a different name.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. A cluster that arrived without the
              records behind it is not a causal check and not a verified outcome. Simulated or
              seeded telemetry is a practice record. A practice cluster that trends is still a
              practice cluster. It is not a live plant fact, and it is not a substitute for the
              assumption the operator still has to label.{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote the slope into observed truth. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live result the edition does not hold.
            </p>

            <p>
              If the case cannot show the asset configuration, the failure and maintenance history,
              and the human judgment that produced the line, the cluster is a chart without a
              trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. A trend does not shorten it. The cluster can sit on the
              case as a display, labeled as a display. The label does not promote the slope into
              observed fact, and it does not promote it into a verified outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A week-over-week delta is not a check
            </h2>

            <p>
              A week-over-week delta is arithmetic on two displays: this window minus the window
              before it. The number can be useful as a report about the chart. It is not the
              inspection. It is not the measurement of the condition the question names. It is not
              the verification that an authorized action did what it was supposed to do. A negative
              delta does not record improvement. A positive delta does not record a failure. The
              sign is a comparison of plotted values. The sign is not a recorded causal check.
            </p>

            <p>
              The delta inherits every gap in the two points it subtracts. If either point is
              unknown, the delta is not a fact about the plant. If either point is blank, the delta
              is not a measurement of none. If either point is a practice tag, the delta is a
              practice number. Subtracting two displays does not create the record the case was
              missing. The operator can note the delta. The note stays a note until a check, a
              measurement, or a verified outcome is written on the case.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              &quot;We&apos;ve been trending this way&quot; is not the decision
            </h2>

            <p>
              &quot;We&apos;ve been trending this way&quot; is a narrative. It compresses a chart,
              a memory, and a room into one sentence. The sentence can inform a recommendation. It
              does not authorize action. It does not clear a gate. It does not replace a named
              human decision. The narrative is closer to an assumption than to an observed fact: a
              prior shift&apos;s story about direction, told as if the telling were the check.
              Labeling it as an assumption keeps it in the right column. Repeating it until the
              room is sure does not move it.
            </p>

            <p>
              An alert that fired while the line was moving is still an alert.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keeps seeing, acknowledging, or silencing that alert off the decision. A trend beside
              the alert does not put it back. Clearing the queue because the line &quot;has been
              trending this way&quot; must not be read as authorization, verification of outcome,
              work-order execution, or plant control. Sync may emit alerts, coverage gaps, and
              recommendations. A named human still opens a Decision Case on a question, cites
              approved evidence, and accepts, rejects, escalates, or returns.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A trend does not clear a gate
            </h2>

            <p>
              A gate on the Decision Case is a recorded step that is either satisfied or not:
              evidence a later reader can inspect, a named human decision, a verification written
              down. A falling line does not satisfy the gate. A rising line does not open it. A
              co-moving tag cluster does not stand in for the missing record. A week-over-week
              delta does not close it. The narrative does not initial it. Trends can inform a
              recommendation. They do not authorize action, clear a gate, or replace the named
              human decision the case still requires.
            </p>

            <p>
              If the gate is evidence, the case shows the observed fact, the labeled assumption, and
              what is still missing. A slope in the assumption column does not fill the observed-fact
              column. If the gate is the human decision, the case shows accept, reject, escalate, or
              return by a named person. The chart does not sign that act. If the gate is
              verification, the case shows the check against the authorized action. A later slope is
              not that check.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Unknown, blank, and silence stay what they are
            </h2>

            <p>
              Unknown stays unknown. Filling the unknown line with a rising or falling line, a
              co-moving tag cluster, or a week-over-week delta does not change the state to clear.
              Bad or not-ready evidence stays blocked. A trend that looks related to the blocked
              item does not relabel blocked as ready. The operator must not treat unknown as go
              because the chart has been moving. Go would mean the evidence is sufficient for the
              next recorded step. Direction is not sufficiency.
            </p>

            <p>
              Blank stays blank. Zero is a verified measurement of none. A trend drawn through an
              empty field collects a line. It does not collect the value. Recovery figures that
              were left blank stay blank. They are not inferred from a week that looked better. A
              blank verification field is not a verified outcome of none, and a delta does not
              close it.
            </p>

            <p>
              Silence stays silence. No reply is not approval. An empty inbox is not clearance. A
              quiet dashboard is not controlled. A trend on a quiet screen is still a trend. It
              does not write accept, reject, escalate, or return. It does not record a check that
              nobody performed. A narrative about the quiet slope does not turn the missing
              response into the named decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Authorization is the named act, and the act still needs a basis the case can show. A
              drafted next action is a proposal.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps that proposal off the decision. A proposal that cites a trend is still a
              proposal. The line can be steep. The model can be sure. Neither the line nor the
              score accepts the operational consequence.{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              says a named person accepts, rejects, escalates, or returns. Until that act is
              recorded, the case is still a proposal. A trend does not authorize action. The system
              does not auto-accept because the week-over-week delta agrees.
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
              says the later question inherits that verified outcome, not a hope. What was believed
              may include a labeled note that a line was rising or falling. Learning does not
              inherit the slope as if the check had confirmed the cause. A later crew that repeats
              the work because the last chart &quot;had been trending this way,&quot; without the
              verification on the prior case, is inheriting a display. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a trend as a result.
            </p>

            <p className="text-xl font-semibold text-white">
              A rising or falling line, a co-moving tag cluster, a week-over-week delta, and a
              &quot;we&apos;ve been trending this way&quot; narrative are not a recorded causal
              check and not a verified outcome. They can inform a recommendation. They do not
              authorize action, clear a gate, or replace a named human decision. Sync recommends. A
              named human decides.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes a trend to recorded truth.
            </p>

            <p>
              Correlation Is Not Causation is the chart of co-movement. Confidence Is Not Evidence
              is the surety attached to a statement. Assumption Is Not Evidence is the statement.
              Trend Is Not Truth is the direction, the delta, and the narrative that the direction
              is already the result. A belief labeled as an assumption does not become evidence
              because a line moved. A high model score on that slope does not become a measurement.
              Tags that travel together do not become a cause because the cluster has a direction.
              The label stays. The observed-fact column stays empty until a check, a measurement, or
              a verified outcome is on the case.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A trend does not interpret
              them into clearance. A case that is unknown, blank, or quiet is not made ready by a
              line that has been moving. A moving line is not a measurement.
            </p>

            <p>
              The check that closes the case is still verification. The trail behind a
              recommendation is still evidence lineage. An alert is still not a decision. A
              dashboard is still not a decision. A later case still inherits the verified outcome,
              not the slope that traveled with an unverified story. Those records are either on the
              case or they are not. If they are not, direction does not supply them.
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
              trend does not collapse that split. A proposal with no basis is not ready for the
              human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A line that moved after the work is not the check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the chart the last shift
              treated as the truth.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a rising or falling line, a co-moving tag cluster, a
              week-over-week delta, or a trend narrative as a live fact. Later editions can deepen a
              chapter. The spine stays in this order.
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
              work order, isolates equipment, or controls a plant. It does not claim that a trend
              is truth, that a rising or falling line is a recorded causal check, that a co-moving
              tag cluster is a verified outcome, that a week-over-week delta authorizes action, or
              that a &quot;we&apos;ve been trending this way&quot; narrative clears a gate or
              replaces a named human decision. It does not claim that self-guided onboarding is a
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
              live plant results, and a trending line on a practice screen is not a recorded causal
              check. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>
              , on why a KPI, a leading indicator, a model score, a green tile, a closed work-order
              count, an MTBF estimate, a sensor health %, or any other stand-in measure is not the
              verified operational outcome on the Decision Case. Companion reading:{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              on why co-moving tags, coincident alerts, and dashboard trends are not a recorded
              causal check and do not authorize action,{' '}
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
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              on why seeing or clearing an alert is not a decision,{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              on why a display is not authorization,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded,{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              on why a recommendation you cannot reconstruct is not an industrial decision, and{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              on why a later case inherits the verified outcome, not a chart. A{' '}
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
                observed fact, assumption, and what is still missing. Trend is not truth. A rising
                or falling line, a co-moving tag cluster, a week-over-week delta, or a narrative
                that the plant has been trending this way can inform a recommendation. They are not
                a recorded causal check and not a verified outcome. They do not authorize action,
                clear a gate, or replace a named human decision. Sync recommends. A named human
                decides. The Reliability Engineer workspace is where a signed-in Decision Case is
                completed. A Reliability Assessment is the bounded review when the question is
                whether the records can support a conclusion. None of those is a claim that Sync
                executes plant work, or that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="trend-is-not-truth" />
        </motion.article>
      </div>
    </main>
  );
}
