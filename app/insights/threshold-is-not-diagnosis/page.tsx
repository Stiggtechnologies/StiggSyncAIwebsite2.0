'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('threshold-is-not-diagnosis');

export default function ThresholdIsNotDiagnosisPage() {
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
              Threshold Is Not Diagnosis
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Threshold is not diagnosis. Crossing a numeric threshold, limit, alarm band, or
              set-point is not a diagnosis and not a Decision Case. A threshold breach can inform a
              recommendation. It does not name the failure mode, authorize action, verify outcome,
              or replace a named human decision. Sync may surface threshold breaches. A named human
              still decides.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case, a threshold breach is a number that crossed a line. It is not a
              diagnosis. It is not the case. A threshold breach can inform a recommendation. It does
              not name the failure mode, authorize action, verify outcome, or replace a named human
              decision.
            </p>

            <p>
              The number crossed the line. The alarm band lit. The set-point was left behind. The
              limit on the screen is red. Someone says the asset is diagnosed, and the room treats
              the sentence as the Decision Case. Nobody named the failure mode. Nobody recorded the
              evidence that would let a later reader tell why the number moved. Nobody wrote accept,
              reject, escalate, or return. Nobody stored the verification. The Decision Case still
              has to show the question, the evidence, the recommendation, the named human decision,
              and the check. A line that was crossed is not that record.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
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
              , and{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>
              . Proxy keeps a KPI, a leading indicator, a model score, a green tile, a closed
              work-order count, an MTBF estimate, a sensor health %, or any other stand-in from
              being stored as the verified operational outcome. Alert keeps seeing, acknowledging,
              or silencing an alert from being stored as a decision. A threshold breach can be what
              the alert reports. The breach is still not the diagnosis, and it is still not the
              case. Correlation keeps co-moving tags, coincident alerts, and dashboard trends from
              being stored as a recorded causal check, and it keeps them from authorizing action.
              Two tags crossing bands in the same window are still co-movement. They do not name
              the failure mode. Verification keeps the case open until the check is written down. A
              return inside the band is not that check.
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
              from being stored as a recorded fact. &quot;It crossed the limit, so we know what
              failed&quot; is that story when the story is a line.{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps a strong gut feel, a high model score, or a manager&apos;s certainty from being
              stored as a recorded check. Being sure the breach means one failure mode does not
              record that mode.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps a rising or falling line, a co-moving tag cluster, a week-over-week delta, and
              a trend narrative from being stored as a recorded causal check or a verified outcome.
              A line that later crosses a band is still a line.{' '}
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
              band is not clearance. A breach does not fill the blank with a failure mode, and it
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
              missing. A threshold breach can be an observed fact that a number crossed a stored
              line. It is not a fourth column that names the failure mode, authorizes the work, or
              closes the case. A proposal whose only basis is that a line was crossed has no
              diagnosis a later reader can inspect. A proposal with no named human decision is not
              a Decision Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a numeric threshold, a limit, an alarm band, or a set-point as a
              diagnosis or as live plant control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A threshold breach is not a diagnosis
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect: what failed, on what
              evidence, and what is still missing. A numeric threshold is a line on a number. A
              limit is a bound. An alarm band is a range the display treats as out. A set-point is
              a target the control or the procedure was given. Crossing any of them says the number
              left the line. It does not say why. Those are different records. The band does not
              write the failure mode.
            </p>

            <p>
              The meeting can note the breach. Noting it records that someone saw the number cross
              the line. It does not record the diagnosis, and it does not open the Decision Case.
              The failure mode stays in the evidence a later reader can inspect, or it stays
              missing. The breach stays a fact about the number, or it stays off the case as a
              display. Treating the breach as the diagnosis invents a name the record does not
              hold. The room thinks the mode is known. The mode was never written. That skip is the
              failure this essay names.
            </p>

            <p>
              Sync may surface threshold breaches. Holding a breach beside a recommendation can
              inform that recommendation. Informing a recommendation does not name the failure
              mode. The recommendation is a proposal. The person who can accept the operational
              consequence records accept, reject, escalate, or return. If the only support is that
              a line was crossed, the proposal is not a diagnosis and it is not a closed case. The
              system does not auto-accept because the number left the band.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A limit, an alarm band, and a set-point are not the case
            </h2>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that a limit, an alarm band, or
              a set-point was crossed does not record that question, and it does not record the
              decision. The case is the order: question, evidence, recommendation, human decision,
              action, verification, and learning. A red line is not that order.
            </p>

            <p>
              A dashboard can show the breach.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. Color does not put it back as a case. Red is not
              a diagnosis. A return to green is not a verified outcome. Amber is not a partial
              decision. A green tile, an improved trend, or a cleared alert tile must not be read
              as authorization, verification of outcome, work-order execution, or plant control.
            </p>

            <p>
              An alert that fired because the number crossed the band is still an alert. Seeing,
              acknowledging, or silencing it is not a Decision Case and not a decision. Clearing
              the queue because the number &quot;came back inside&quot; must not be read as
              authorization, verification of outcome, work-order execution, or plant control. Sync
              may emit alerts, coverage gaps, and recommendations. Sync may surface threshold
              breaches. A named human still opens a Decision Case on a question, cites approved
              evidence, and accepts, rejects, escalates, or returns.
            </p>

            <p>
              This essay states no OEM limit and supplies no plant set-point. A line the meeting
              invented is not a diagnosis, and this page does not publish the number. The case
              holds the measurement that was stored, the line that was stored, and what is still
              unknown. It does not hold a limit this essay made up so the band would look decisive.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A breach does not name the failure mode
            </h2>

            <p>
              The same numeric threshold can be crossed for more than one reason. The instrument
              can be wrong. The window can be wrong. The set-point can have been moved. A related
              condition can have moved the number without being the mode the room wants to name.
              Co-moving tags that cross together are still co-movement. They are not a recorded
              causal check, and they do not authorize action. Naming the mode is a recorded claim.
              The breach is not that claim.
            </p>

            <p>
              If the case cannot show the asset configuration, the failure and maintenance history,
              and the human judgment that connects the breach to a mode, the line is a number
              without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. A threshold does not shorten it. The breach can sit on
              the case as an observed fact, labeled as a fact about the number. The label does not
              promote the line into a failure mode.{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote a practice breach into a plant diagnosis. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live diagnosis the edition does not hold.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry is a practice record. A practice breach is still a practice number. It is
              not a live plant diagnosis, and it is not a substitute for the failure mode the
              operator still has to name from evidence.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A breach does not authorize action
            </h2>

            <p>
              Authorization is the named act. A drafted next action is a proposal.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps that proposal off the decision. A proposal that cites a threshold breach is
              still a proposal. The band can be red. The limit can be behind the number. Neither
              the color nor the line accepts the operational consequence. A threshold breach can
              inform a recommendation. It does not authorize action.
            </p>

            <p>
              The system does not auto-accept because the number left the set-point. Sync
              recommends. A named human decides. If the only support is the breach, the proposal is
              not ready to be stored as authorized. A hoped-for reading of the line is not the
              decision.
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
              stays with authorized systems. A threshold breach, however it is surfaced, does not
              move execution onto Sync, and it does not replace the named decision that would have
              to come first.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Crossing the line does not verify the outcome
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do.
              The case stays open until that check is on the case. A number that returns inside the
              alarm band is a later reading. It is not, by itself, the check. The band can be
              re-entered because the window changed, because the set-point moved, because the
              instrument changed, or because a different condition moved the number. The return
              does not record what the authorized change did.
            </p>

            <p>
              A proxy that moved after the breach is still a proxy. A closed work-order count is
              still a count. A green tile is still a display. None of them verify outcome.
              Verification still records the actual check. Treating the return inside the band as
              the outcome invents false closure. The case looks finished. The check was never
              written.
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
              a verified outcome, not a hoped-for return inside the band. What was believed may
              include a labeled note that a numeric threshold was crossed. Learning does not
              inherit the breach as if the check had named the failure mode and confirmed the
              result. A later crew that repeats the work because the last number &quot;already
              crossed,&quot; without the verification on the prior case, is inheriting a line. That
              is the wrong lesson. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a threshold breach as a
              diagnosis.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A breach does not replace a named human decision
            </h2>

            <p>
              A named person accepts, rejects, escalates, or returns the recommendation. That act
              is the decision.{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              says until that act is recorded, the case is still a proposal. A threshold breach
              does not replace a named human decision. The line does not sign accept. The alarm
              band does not sign reject. The set-point does not escalate. The limit does not
              return the proposal. The signed-in Decision Case keeps who decided visible beside the
              recommendation. The recorded act is mandatory.
            </p>

            <p>
              A gate on the Decision Case is a recorded step that is either satisfied or not:
              evidence a later reader can inspect, a named human decision, a verification written
              down. A numeric threshold does not satisfy the gate. A limit does not open it. An
              alarm band does not stand in for the missing record. A set-point does not close it. A
              threshold breach can inform. It does not name the failure mode, authorize action,
              verify outcome, or replace a named human decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Unknown, blank, and silence stay what they are
            </h2>

            <p>
              Unknown stays unknown. Filling the unknown line with a threshold breach does not
              change the state to clear, and it does not name the failure mode. Bad or not-ready
              evidence stays blocked. A breach that looks related to the blocked item does not
              relabel blocked as ready. The operator must not treat unknown as go because the
              number left the band. Go would mean the evidence is sufficient for the next recorded
              step. A threshold breach is not sufficiency.
            </p>

            <p>
              Blank stays blank. Zero is a verified measurement of none. A breach written into an
              empty field collects a flag. It does not collect the missing value. Recovery figures
              that were left blank stay blank. They are not inferred from a limit that was crossed.
              A blank verification field is not a verified outcome of none, and a return inside the
              band does not close it.
            </p>

            <p>
              Silence stays silence. No reply is not approval. An empty inbox is not clearance. A
              quiet dashboard is not controlled. A number sitting inside the band on a quiet screen
              is still a number. It does not write accept, reject, escalate, or return. It does not
              record a check that nobody performed. A narrative about the quiet band does not turn
              the missing response into the named decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface threshold breaches. Sync may hold the breach beside a recommendation.
              That is a proposal. The person who can accept the operational consequence records the
              decision. Until that act is on the case, the case is still a proposal. The system
              does not auto-accept because the number crossed a line. Sync recommends. A named
              human decides.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of the tag is not control of the
              plant. A Decision Case that records a threshold breach does not put Sync in control
              of the work, the isolation, or the change. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. The breach is not the check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The line is not the act.
            </p>

            <p className="text-xl font-semibold text-white">
              Crossing a numeric threshold, limit, alarm band, or set-point is not a diagnosis and
              not a Decision Case. A threshold breach can inform a recommendation. It does not name
              the failure mode, authorize action, verify outcome, or replace a named human
              decision. Sync may surface threshold breaches. A named human still decides. Execution
              stays with authorized systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes a threshold breach to a diagnosis or to a Decision Case.
            </p>

            <p>
              Proxy Is Not Outcome is the stand-in the room stores in place of the check. Alert Is
              Not Decision is the signal that something crossed a rule. Correlation Is Not
              Causation is the chart of co-movement. Verification Is Not Optional is the check that
              still has to be written. Threshold Is Not Diagnosis is the line itself: the numeric
              threshold, the limit, the alarm band, the set-point. A KPI does not become a
              diagnosis because it crossed a mark. An alert does not become the case because the
              band lit. Tags that travel together do not name the failure mode because they crossed
              together. A later reading inside the band does not close the case. The label stays.
              The diagnosis stays unwritten until the evidence names the mode. The decision stays
              unwritten until a named person records it.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A threshold breach does not
              interpret them into clearance. A case that is unknown, blank, or quiet is not made
              ready by a number that left a line. A crossed line is not a measurement of the
              missing field, and it is not the named decision.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified outcome, not a hoped-for return inside the band. The
              trail behind a recommendation is still evidence lineage. An alert is still not a
              decision. A dashboard is still not a decision. A trend is still not the truth. Those
              records are either on the case or they are not. If they are not, a threshold breach
              does not supply them.
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
              threshold breach does not collapse that split into a diagnosis. A proposal with no
              basis is not ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A number that returns inside the band is not the check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the breach the last shift
              treated as the diagnosis.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a numeric threshold, a limit, an alarm band, or a
              set-point as a live diagnosis or as plant control. Later editions can deepen a
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
              supplies no plant set-point. It does not claim that Sync executes plant work, writes
              a work order, isolates equipment, or controls a plant. It does not claim that a
              threshold breach is a diagnosis, that crossing a numeric threshold, limit, alarm
              band, or set-point is a Decision Case, that a breach names the failure mode, that a
              breach authorizes action, that a breach verifies outcome, or that a breach replaces a
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
              live plant results, and a threshold breach on a practice screen is not a diagnosis.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
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
              on why a later case inherits the verified outcome, not a hoped-for return inside the
              band,{' '}
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
              threshold breach.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Threshold is not diagnosis. Crossing a numeric threshold, limit, alarm band, or
                set-point is not a diagnosis and not a Decision Case. A threshold breach can inform
                a recommendation. It does not name the failure mode, authorize action, verify
                outcome, or replace a named human decision. Sync may surface threshold breaches. A
                named human still decides. Execution stays with authorized systems. The Reliability
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
          <InsightNextSteps slug="threshold-is-not-diagnosis" />
        </motion.article>
      </div>
    </main>
  );
}
