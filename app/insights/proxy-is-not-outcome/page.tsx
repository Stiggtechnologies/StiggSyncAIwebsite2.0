'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('proxy-is-not-outcome');

export default function ProxyIsNotOutcomePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Proxy Is Not Outcome</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Proxy is not outcome. A KPI, a leading indicator, a model score, a green tile, a
              closed work-order count, an MTBF estimate, a sensor health %, or any other stand-in
              measure can inform a recommendation. It is not the verified operational outcome on
              the Decision Case. Treating a proxy as the outcome invents false closure, skips
              verification, and teaches the wrong lesson into Learning. Sync may surface proxies. A
              named human still decides. Verification still records the actual check.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. On the Decision Case, a proxy is a stand-in
              measure. It is not the verified operational outcome. A proxy can inform. It does not
              authorize, clear a gate, or replace a verified outcome.
            </p>

            <p>
              The KPI moved. The leading indicator moved with it. The model score is high. The tile
              is green. The closed work-order count is up. The MTBF estimate looks better than last
              quarter. Sensor health % is in the band the meeting likes. Someone says the outcome
              is in, and the room treats the sentence as the result. Nobody wrote the check that
              the authorized action did what it was supposed to do. Nobody stored the measurement
              the question actually named. The Decision Case still has to show the inspection, the
              reading, or the verification that was actually recorded. A stand-in that moved is not
              that record.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              and stands beside{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              and{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>
              . Trend keeps a rising or falling line, a co-moving tag cluster, a week-over-week
              delta, and a trend narrative from being stored as a recorded causal check or a
              verified outcome. Correlation keeps co-moving tags, coincident alerts, and dashboard
              trends from being stored as causation, and it keeps them from authorizing action.
              Confidence keeps a strong gut feel, a high model score, years of tribal certainty, or
              a manager&apos;s certainty from being stored as a recorded check. This essay is the
              stand-in itself: the number the room uses when it wants the case to look closed. A
              proxy can inform a recommendation. It does not authorize, clear a gate, or replace a
              verified outcome. Being sure the proxy will keep moving does not record the check.
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
              from being stored as a recorded fact. &quot;The proxy moved, so the outcome is
              in&quot; is that story when the story is a stand-in.{' '}
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
              keeps no reply, no alert, and an empty inbox from being read as approval. A proxy is
              what the room uses to skip those records. A green tile does not record the missing
              evidence as clear. A count drawn across a blank does not measure none. A narrative
              about the KPI does not write the decision the operator never recorded.
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
              missing. A proxy is not a fourth column that overrides the split. A proposal whose
              only basis is that a stand-in moved has no outcome a later reader can inspect as
              verified. A proposal with no verified outcome is not ready to be treated as closed.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a KPI, a leading indicator, a model score, a green tile, a closed
              work-order count, an MTBF estimate, or a sensor health % as the live result.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A proxy is not a verified outcome
            </h2>

            <p>
              A verified operational outcome is something a later reader can inspect on the case:
              the condition that was present, the change a named person authorized, the measurement
              taken against that change, and the verification that the authorized action did what
              it was supposed to do. A proxy is a stand-in. It names a number that is easier to
              display than the outcome the question asked for. It does not name whether that
              outcome occurred. Those are different records. The tile does not write the check.
            </p>

            <p>
              The meeting can note the proxy. Noting it records that someone saw the stand-in. It
              does not record the outcome, and it does not record a verified check. The outcome
              stays in the verification column, or it stays missing. The proxy stays in the
              assumption column, or it stays off the case as a display. A cleaner number is still
              not a verified outcome. Treating the proxy as the outcome invents false closure. The
              case looks finished. The check was never written. That skip is the failure this essay
              names.
            </p>

            <p>
              Sync may surface proxies. Holding a proxy beside a recommendation can inform that
              recommendation. Informing a recommendation does not authorize the work. The
              recommendation is a proposal. The person who can accept the operational consequence
              records accept, reject, escalate, or return. If the only support is that a stand-in
              moved, the proposal is not a closed case. The system does not auto-accept because the
              proxy agrees with the draft. Verification still records the actual check.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A KPI and a leading indicator are not the outcome
            </h2>

            <p>
              A KPI is a chosen number: a count, a rate, a ratio, a score the plant already
              reports. A leading indicator is a number chosen because it is expected to move before
              the outcome the question is about. Both can inform a recommendation. Neither is the
              verified operational outcome. The KPI can rise while the condition the question named
              is unchanged. The leading indicator can fall because the window changed, the
              definition changed, or a third condition moved it. The operator reads the number as a
              report about the stand-in. The operator does not read it as the result.
            </p>

            <p>
              A recommendation drafted from the KPI is still a recommendation. Sync recommends.
              Humans decide. The named person accepts, rejects, escalates, or returns against
              evidence a later reader can inspect. If the only support is that the indicator moved
              the way the room hoped, the proposal is not ready to be stored as closed. A hoped-for
              proxy move is not the check.
            </p>

            <p>
              This essay states no OEM limit and no operating threshold. A KPI that crosses a mark
              the meeting invented is not a verified outcome, and this page does not supply the
              mark. The case holds the measurement that was stored, or it holds unknown. It does
              not hold a limit this essay made up so the tile would look decisive.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A model score and a green tile are not the check
            </h2>

            <p>
              A model score is a number a model produced. A high score can inform a recommendation.
              It is not a recorded check, and it is not a verified outcome. Confidence already keeps
              that score out of the observed-fact column. Calling the same score a proxy does not
              put it back. The score can be steep. The room can be sure. Neither the score nor the
              surety accepts the operational consequence, and neither one writes the verification.
            </p>

            <p>
              A green tile is a display.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. Color does not put it back as an outcome. Green
              is not a verified outcome of improvement. Red is not a verified outcome of failure.
              Amber is not a partial check. A green tile, an improved trend, or a cleared alert
              tile must not be read as authorization, verification of outcome, work-order
              execution, or plant control.
            </p>

            <p>
              An alert that fired while the tile was green is still an alert.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keeps seeing, acknowledging, or silencing that alert off the decision. A proxy beside
              the alert does not put it back. Clearing the queue because the score &quot;looks
              healthy&quot; must not be read as authorization, verification of outcome, work-order
              execution, or plant control. Sync may emit alerts, coverage gaps, and recommendations.
              Sync may surface proxies. A named human still opens a Decision Case on a question,
              cites approved evidence, and accepts, rejects, escalates, or returns.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A closed work-order count is not the result
            </h2>

            <p>
              A closed work-order count is a count of records marked closed in the system that
              holds work. The count can inform a recommendation. It is not the verified operational
              outcome on the Decision Case. A record can be closed because the clock ran out,
              because the status was changed, or because the queue was cleared. Closure of a work
              record is not the check that the authorized action did what it was supposed to do.
              More closed records are not, by themselves, a better plant.
            </p>

            <p>
              Sync does not write the work order. An ACTION disposition on the Decision Case is
              work intent. It is not plant execution. The systems that already hold execution
              authority write the work order or the isolation. A count of those records, however it
              is surfaced, stays a count. It does not move execution onto Sync, and it does not
              replace verification. The case stays open until the check is on the case, even when
              the closed work-order count has already moved.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              An MTBF estimate and a sensor health % are not the plant check
            </h2>

            <p>
              An MTBF estimate is an estimate of mean time between failures. It is a calculation on
              a history, a window, and a definition of failure. The estimate can inform a
              recommendation. It is not the verified operational outcome of the action this case
              authorized. A better estimate can appear because the window dropped an old failure,
              because the failure definition changed, or because the history is incomplete. The
              estimate does not record what this authorized change did.
            </p>

            <p>
              A sensor health % is a coverage display: how much of a watched set is reporting, or
              how a health figure was scored. Sensors, rows, and patrol routes are coverage. They
              are not control of the plant, and a percentage of that coverage is not the outcome
              the question asked for. A high sensor health % does not mean the failure mode was
              removed. A low one does not, by itself, authorize the work. Stage-1 evidence is the
              record held on the case. A live connector that pulls historian or control-system tags
              sits outside this edition. Simulated or seeded telemetry is a practice record. A
              practice health percentage is still a practice number. It is not a live plant result,
              and it is not a substitute for the verification the operator still has to write.
            </p>

            <p>
              If the case cannot show the asset configuration, the failure and maintenance history,
              and the human judgment that produced the estimate or the percentage, the figure is a
              number without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. A proxy does not shorten it. The figure can sit on the
              case as a display, labeled as a display. The label does not promote the stand-in into
              a verified outcome.{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote the proxy into the result. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live result the edition does not hold.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A proxy does not clear a gate
            </h2>

            <p>
              A gate on the Decision Case is a recorded step that is either satisfied or not:
              evidence a later reader can inspect, a named human decision, a verification written
              down. A KPI does not satisfy the gate. A leading indicator does not open it. A model
              score does not stand in for the missing record. A green tile does not close it. A
              closed work-order count does not initial it. An MTBF estimate does not replace it. A
              sensor health % does not clear it. A proxy can inform. It does not authorize, clear a
              gate, or replace a verified outcome.
            </p>

            <p>
              If the gate is evidence, the case shows the observed fact, the labeled assumption, and
              what is still missing. A proxy in the assumption column does not fill the
              observed-fact column. If the gate is the human decision, the case shows accept,
              reject, escalate, or return by a named person. The tile does not sign that act. If
              the gate is verification, the case shows the check against the authorized action. A
              later movement in the proxy is not that check. Skipping the check because the stand-in
              already moved is false closure.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Unknown, blank, and silence stay what they are
            </h2>

            <p>
              Unknown stays unknown. Filling the unknown line with a KPI, a model score, or a
              sensor health % does not change the state to clear. Bad or not-ready evidence stays
              blocked. A proxy that looks related to the blocked item does not relabel blocked as
              ready. The operator must not treat unknown as go because the stand-in has moved. Go
              would mean the evidence is sufficient for the next recorded step. A proxy is not
              sufficiency.
            </p>

            <p>
              Blank stays blank. Zero is a verified measurement of none. A proxy written into an
              empty field collects a number. It does not collect the value. Recovery figures that
              were left blank stay blank. They are not inferred from a KPI that looked better. A
              blank verification field is not a verified outcome of none, and a closed work-order
              count does not close it.
            </p>

            <p>
              Silence stays silence. No reply is not approval. An empty inbox is not clearance. A
              quiet dashboard is not controlled. A proxy on a quiet screen is still a proxy. It
              does not write accept, reject, escalate, or return. It does not record a check that
              nobody performed. A narrative about the quiet green tile does not turn the missing
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
              keeps that proposal off the decision. A proposal that cites a proxy is still a
              proposal. The KPI can be favorable. The model score can be high. Neither the number
              nor the score accepts the operational consequence.{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              says a named person accepts, rejects, escalates, or returns. Until that act is
              recorded, the case is still a proposal. A proxy does not authorize action. The system
              does not auto-accept because the stand-in agrees. Sync recommends. A named human
              decides.
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
              written down. Verification still records the actual check. A proxy move is not that
              check.{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              says the later question inherits that verified outcome, not a hope. Learning requires
              a verified outcome, not a hoped-for proxy move. What was believed may include a
              labeled note that a KPI, a score, or a count moved. Learning does not inherit the
              proxy as if the check had confirmed the outcome. A later crew that repeats the work
              because the last stand-in &quot;already moved,&quot; without the verification on the
              prior case, is inheriting a display. That is the wrong lesson. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a proxy as a result.
            </p>

            <p className="text-xl font-semibold text-white">
              A KPI, a leading indicator, a model score, a green tile, a closed work-order count, an
              MTBF estimate, a sensor health %, and any other stand-in measure are not the verified
              operational outcome. They can inform a recommendation. They do not authorize, clear a
              gate, or replace a verified outcome. Treating a proxy as the outcome invents false
              closure, skips verification, and teaches the wrong lesson into Learning. Sync
              recommends. A named human decides. Verification still records the actual check.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes a proxy to a verified outcome.
            </p>

            <p>
              Trend Is Not Truth is the direction, the delta, and the narrative that the direction
              is already the result. Correlation Is Not Causation is the chart of co-movement.
              Confidence Is Not Evidence is the surety attached to a statement, including a high
              model score. Proxy Is Not Outcome is the stand-in the room stores in place of the
              check: the KPI, the leading indicator, the score, the green tile, the closed
              work-order count, the MTBF estimate, the sensor health %. A slope does not become an
              outcome because someone calls it a KPI. Tags that travel together do not become the
              result because a count moved with them. Being sure does not close the case. The label
              stays. The verified-outcome column stays empty until the check is on the case.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A proxy does not interpret
              them into clearance. A case that is unknown, blank, or quiet is not made ready by a
              stand-in that has moved. A moving stand-in is not a measurement.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified outcome, not a hoped-for proxy move. The trail behind a
              recommendation is still evidence lineage. An alert is still not a decision. A
              dashboard is still not a decision. Those records are either on the case or they are
              not. If they are not, a proxy does not supply them.
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
              proxy does not collapse that split. A proposal with no basis is not ready for the
              human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A stand-in that moved after the work is not the check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the proxy the last shift
              treated as the result.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a KPI, a leading indicator, a model score, a green
              tile, a closed work-order count, an MTBF estimate, or a sensor health % as a live
              fact. Later editions can deepen a chapter. The spine stays in this order.
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
              work order, isolates equipment, or controls a plant. It does not claim that a proxy
              is the outcome, that a KPI is a verified operational outcome, that a leading
              indicator is the check, that a model score closes the case, that a green tile
              authorizes action, that a closed work-order count is the result, that an MTBF
              estimate replaces verification, or that a sensor health % clears a gate or replaces a
              named human decision. It does not claim that self-guided onboarding is a live product
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
              live plant results, and a proxy on a practice screen is not a verified outcome.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              on why a rising or falling line, a co-moving tag cluster, a week-over-week delta, or
              a trend narrative is not a recorded causal check and not a verified outcome,{' '}
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
              on why a later case inherits the verified outcome, not a hoped-for proxy move. A{' '}
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
              proxy.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Proxy is not outcome. A KPI, a leading indicator, a model score, a green tile, a
                closed work-order count, an MTBF estimate, a sensor health %, or any other stand-in
                measure can inform a recommendation. They are not the verified operational outcome.
                They do not authorize, clear a gate, or replace a verified outcome. Learning
                requires a verified outcome, not a hoped-for proxy move. Sync recommends. A named
                human decides. Verification still records the actual check. The Reliability
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
          <InsightNextSteps slug="proxy-is-not-outcome" />
        </motion.article>
      </div>
    </main>
  );
}
