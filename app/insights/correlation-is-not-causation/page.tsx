'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('correlation-is-not-causation');

export default function CorrelationIsNotCausationPage() {
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
              Correlation Is Not Causation
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Correlation is not causation. Co-moving tags, coincident alerts, and dashboard trends
              can show that signals moved together. They are not a recorded causal check, and they
              do not authorize action.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. On the Decision Case, co-movement is a report
              about timing. It is not the record that one condition caused another, and it is not
              the record that an action is authorized.
            </p>

            <p>
              Two tags rise on the same screen. Two alerts land in the same hour. A dashboard trend
              turns down while a second trend turns up, and the meeting treats the pair as the
              cause. Nobody wrote the check that one produced the other. Nobody stored the
              measurement that would show the link. Nobody closed a verified outcome against an
              authorized change. The Decision Case still has to show the inspection, the reading, or
              the verification that was actually recorded. Moving together is not that line.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              and stands beside{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>
              . Confidence keeps a strong gut feel, a high model score, years of tribal certainty,
              or a manager&apos;s certainty from being stored as a recorded check or a verified
              outcome. Assumption keeps a belief, a habit, a prior shift&apos;s story, or an
              unverified model output from being stored as a recorded fact. This essay is the chart
              people treat as the cause. A pair of lines that move together does not move the
              statement into the observed-fact column. Correlation is not causation. A labeled
              assumption that two signals travel together is still an assumption. Being sure about
              the pair does not record the cause.
            </p>

            <p>
              Facts come before assumptions. The same gap has three neighboring forms.{' '}
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
              keeps no reply, no alert, and an empty inbox from being read as approval. Correlation
              is what the room uses to skip those records. Two tags that rose together do not record
              the missing evidence as clear. A trend drawn across a blank does not measure none.
              Coincident alerts do not write the decision the operator never recorded.
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
              missing. Correlation is not a fourth column that overrides the split. A proposal whose
              only basis is that two signals moved together has no causal basis a later reader can
              inspect. A proposal with no basis is not ready for a human decision.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat co-moving tags, coincident alerts, or dashboard trends as a live causal
              fact.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Correlation is not a recorded causal check
            </h2>

            <p>
              A recorded causal check is something a later reader can inspect on the case: the
              condition that was present, the change a named person authorized, the measurement
              taken before and after that change, and the verification that the authorized action
              did what it was supposed to do. Correlation is a statement about co-occurrence. It
              names that signals moved in the same window. It does not name which one produced the
              other, whether a third condition produced both, or whether either produced the outcome
              the question is about. Those are different records. The chart does not write the
              check.
            </p>

            <p>
              The meeting can note the pair. Noting it records that someone saw the pair. It does
              not record the cause. Cause information is the check: what was observed, what was
              changed under a named decision, and what the verification showed. The co-movement
              stays in the assumption column, or it stays off the case as a display. Tightness of
              the fit does not change the column. A cleaner trend is still not a recorded causal
              check.
            </p>

            <p>
              Sync may hold the pair beside a recommendation. Holding it does not authorize the
              work. The recommendation is a proposal. The person who can accept the operational
              consequence records accept, reject, escalate, or return. If the only support is that
              the lines moved together, the proposal is not ready for that act. The system does not
              auto-accept because the trends agree.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Co-moving tags are not the cause
            </h2>

            <p>
              Co-moving tags are two or more signals that rise and fall in the same window. A
              temperature and a vibration. A flow and a pressure. A motor current and a downstream
              level. The screen makes the pair look like an explanation. The pair is a timing
              report. Shared load, a common upstream, a season, a shift change, a clock that is
              off, or a third driver the case never named can move both tags without either being
              the cause the question needs. The operator can write that the tags moved together.
              The sentence does not identify which condition produced the failure, the delay, or
              the next action.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. A pair of tags that arrived without
              the records behind them is not a causal check. Simulated or seeded telemetry is a
              practice record. Co-moving practice tags are still practice tags. They are not a live
              plant fact, and they are not a substitute for the assumption the operator still has
              to label.{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote the pair into observed causation. The{' '}
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
              and the human judgment that produced the line, the co-moving pair is a chart without
              a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. Correlation does not shorten it. The pair can sit on the
              case as a display, labeled as a display. The label does not promote the pair into
              observed fact, and it does not promote it into a verified outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Coincident alerts are not the decision
            </h2>

            <p>
              Coincident alerts are notifications that fire in the same window. Two threshold
              breaches. An anomaly flag beside a pager page. A red tile and a silenced channel that
              landed together. Seeing both, acknowledging both, or clearing both is not a Decision
              Case and not a decision.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              already keeps the alert off the decision. Coincidence does not put it back. Two alerts
              in one hour do not record that one caused the other. They do not record that either
              caused the outcome the question is about.
            </p>

            <p>
              Clearing the pair, muting the channel, or auto-closing the ticket must not be read as
              authorization, verification of outcome, work-order execution, or plant control. The
              operator can note that the alerts were coincident. The note is a timing report. It is
              not accept, reject, escalate, or return. It is not the check that nobody performed.
              Sync may emit alerts and recommendations. A named human still opens the case on a
              question, cites approved evidence, and decides.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Dashboard trends do not authorize action
            </h2>

            <p>
              Dashboard trends are the lines on the display: a falling health score, a rising
              count, two series that cross, a week that looks worse than the week before. The
              display can surface that something changed in the window the chart covers.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. A trend that moves with another trend is still a
              display. Green, a crossing pair, or a steep slope does not authorize the work, verify
              the outcome, write the work order, or control the plant.
            </p>

            <p>
              The operator reads the trend as a report about the chart. The operator does not read
              it as the causal check. A recommendation drafted from the trend is still a
              recommendation. Sync recommends. Humans decide. The named person accepts, rejects,
              escalates, or returns against evidence a later reader can inspect. If the only support
              is the slope, the proposal is not ready for that act.
            </p>

            <p>
              This essay states no OEM limit and no operating threshold. A trend that crosses a
              line the meeting invented is not a recorded causal check, and this page does not
              supply the line. The case holds the measurement that was stored, or it holds unknown.
              It does not hold a limit this essay made up so the chart would look decisive.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Unknown, blank, and silence stay what they are
            </h2>

            <p>
              Unknown stays unknown. Filling the unknown line with a co-moving pair, a coincident
              alert, or a dashboard trend does not change the state to clear. Bad or not-ready
              evidence stays blocked. A trend that looks related to the blocked item does not
              relabel blocked as ready. The operator must not treat unknown as go because two
              signals moved together. Go would mean the evidence is sufficient for the next
              recorded step. Co-movement is not sufficiency.
            </p>

            <p>
              Blank stays blank. Zero is a verified measurement of none. A trend drawn through an
              empty field collects a line. It does not collect the value. Recovery figures that
              were left blank stay blank. They are not inferred from a chart that moved in the same
              week. A blank verification field is not a verified outcome of none, and a coincident
              alert does not close it.
            </p>

            <p>
              Silence stays silence. No reply is not approval. An empty inbox is not clearance. A
              quiet dashboard is not controlled. A trend on a quiet screen is still a trend. It
              does not write accept, reject, escalate, or return. It does not record a check that
              nobody performed. Correlation about the quiet does not turn the missing response into
              the named decision.
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
              keeps that proposal off the decision. A proposal that cites co-moving tags is still a
              proposal. The chart can be tight. The model can be sure. Neither the chart nor the
              score accepts the operational consequence.{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              says a named person accepts, rejects, escalates, or returns. Until that act is
              recorded, the case is still a proposal. Correlation does not authorize action. The
              system does not auto-accept because two alerts fired together.
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
              may include a labeled note that two tags moved together. Learning does not inherit
              the co-movement as if the check had confirmed the cause. A later crew that repeats
              the work because the last chart looked related, without the verification on the prior
              case, is inheriting a display. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish correlation as a result.
            </p>

            <p className="text-xl font-semibold text-white">
              Co-moving tags, coincident alerts, and dashboard trends are not a recorded causal
              check. They do not authorize action. Sync recommends. A named human decides.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes correlation to a recorded cause.
            </p>

            <p>
              Assumption Is Not Evidence is the statement. Confidence Is Not Evidence is the surety
              attached to the statement. Correlation Is Not Causation is the chart attached to both.
              A belief labeled as an assumption does not become evidence because two lines moved
              together. A high model score on that pair does not become a measurement. The label
              stays. The observed-fact column stays empty until a check, a measurement, or a
              verified outcome is on the case.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. Correlation does not
              interpret them into clearance. A case that is unknown, blank, or quiet is not made
              ready by a chart that looks related. A related chart is not a measurement.
            </p>

            <p>
              The check that closes the case is still verification. The trail behind a
              recommendation is still evidence lineage. An alert is still not a decision. A
              dashboard is still not a decision. A later case still inherits the verified outcome,
              not the correlation that traveled with an unverified story. Those records are either
              on the case or they are not. If they are not, co-movement does not supply them.
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
              is step 02. Observed fact, assumption, and what is still missing stay distinct.
              Correlation does not collapse that split. A proposal with no basis is not ready for
              the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A trend that moved after the work is not the check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the chart the last shift
              treated as the cause.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating co-moving tags, coincident alerts, or dashboard trends
              as a live causal fact. Later editions can deepen a chapter. The spine stays in this
              order.
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
              work order, isolates equipment, or controls a plant. It does not claim that
              correlation is causation, that co-moving tags are a recorded causal check, that
              coincident alerts are a decision, or that dashboard trends authorize action. It does
              not claim that self-guided onboarding is a live product path.
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
              live plant results, and co-moving tags on a practice screen are not a recorded causal
              check. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
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
                observed fact, assumption, and what is still missing. Correlation is not causation.
                Co-moving tags, coincident alerts, and dashboard trends are not a recorded causal
                check, and they do not authorize action. Sync recommends. A named human decides.
                The Reliability Engineer workspace is where a signed-in Decision Case is completed.
                A Reliability Assessment is the bounded review when the question is whether the
                records can support a conclusion. None of those is a claim that Sync executes plant
                work, or that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="correlation-is-not-causation" />
        </motion.article>
      </div>
    </main>
  );
}
