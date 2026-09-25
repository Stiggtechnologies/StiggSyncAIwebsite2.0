'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('forecast-is-not-fact');

export default function ForecastIsNotFactPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Forecast Is Not Fact</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Forecast is not fact. A forecast, a projection, an RUL estimate, a demand plan, a
              Monte Carlo percentile, or an LLM-generated outlook is a forward-looking
              compression. It is useful for planning only when assumptions, uncertainty bands, and
              refusal conditions are explicit. Treating the forecast as a fact about the plant is
              how operators get false clearance. A forecast can inform a recommendation to
              investigate or prepare. It is not the plant state, not a diagnosis, not root cause,
              not authorization for corrective work, not a verified operational outcome, and not a
              Decision Case. Evidence from the plant beats the forecast. Sync may surface a
              forecast beside approved evidence when assumptions and uncertainty are named. Sync
              refuses false precision. A named human still decides.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case and in Recovery, a forecast, a projection, an RUL estimate, a
              demand plan, a Monte Carlo percentile, or an LLM-generated outlook is a
              forward-looking compression. It is not the plant state. It is useful for planning
              only when assumptions, uncertainty bands, and refusal conditions are on the record.
              It is not a diagnosis. It is not root cause. It is not authorization for corrective
              work. It is not a verified operational outcome. It is not a Decision Case. Treating
              the forecast as a fact about the plant is false clearance. Verification stays open
              until a verified operational outcome is recorded from the plant, not from the
              outlook.
            </p>

            <p>
              In this essay, forecast names those six records and no figure of speech. A forecast
              is a stated claim about a future that has not been observed. A projection is that
              claim extended from a present record, a trend, or a model. An RUL estimate is a
              remaining-useful-life figure offered as if the remaining life were already known. A
              demand plan is a planned quantity of work, parts, or capacity offered as if the
              demand had already occurred. A Monte Carlo percentile is one point taken from a
              spread of simulated futures. An LLM-generated outlook is a compressed sentence about
              a future the model was asked to write. Fact names a recorded plant state a later
              reader can inspect: what the asset did, what evidence was approved, and what outcome
              was verified. Those are different records. Treating the forecast as fact stores the
              forward-looking compression as if it were the plant.
            </p>

            <p>
              The meeting puts the forecast on the screen. The projection is smooth. The RUL
              estimate is long. The demand plan is balanced. The Monte Carlo percentile sits
              inside a band the room does not write down. The LLM-generated outlook reads as if
              the next quarter were already known. Someone says the asset is cleared, and the room
              treats the outlook as a fact about the plant. Nobody wrote the assumptions. Nobody
              named the uncertainty bands. Nobody stated the refusal conditions. Nobody attached
              approved evidence from the plant. Nobody wrote accept, reject, escalate, or return.
              The Decision Case still has to show the question, the evidence, the recommendation,
              the named human decision, and the check. A forecast is not that record, and it is
              not the plant state.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/model-is-not-reality"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Model Is Not Reality
              </Link>{' '}
              and stands beside{' '}
              <Link
                href="/insights/map-is-not-terrain"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Map Is Not Terrain
              </Link>
              ,{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
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
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>
              , and{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>
              . Model keeps a digital twin, a KPI model, a risk matrix, an RUL curve, a Monte
              Carlo run, or an LLM summary from being stored as the plant. This essay keeps the
              forward-looking claim — the forecast, the projection, the RUL estimate, the demand
              plan, the Monte Carlo percentile, the LLM-generated outlook — from being stored as a
              fact about the plant when assumptions, uncertainty bands, and refusal conditions are
              not explicit. Map keeps a diagram of that future from being stored as the operating
              reality. Proxy keeps a forecast used as a stand-in from being stored as the verified
              operational outcome. Assumption keeps an unverified outlook from being stored as a
              recorded fact. Confidence keeps a tight band, or a sure voice, from being stored as
              a recorded check. Trend keeps a slope of what was observed from being stored as
              truth; extending that slope into a forecast does not make the extension a fact.
              Recommend keeps a drafted next action, including a recommendation to investigate or
              prepare, from being stored as authorization. A precise outlook is still not the
              plant state.
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
              missing. A forecast, a projection, an RUL estimate, a demand plan, a Monte Carlo
              percentile, or an LLM-generated outlook is not a fourth column that records the
              plant state, names the failure mode, authorizes the work, or closes the case. A
              proposal whose only basis is the forecast has no evidence from the plant a later
              reader can inspect. A proposal with no named human decision is not a Decision Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a forecast as approved evidence from the plant or as live plant
              control. Sync refuses false precision. A number the outlook printed is not a fact
              the edition did not hold.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A forecast is useful for planning only when its limits are explicit
            </h2>

            <p>
              A forward-looking compression keeps a claim about a future and drops the future that
              has not happened. The forecast keeps the statement it was given and drops the plant
              state that statement does not yet describe. The projection keeps the line it
              extended and drops the operating regimes that were not in the window. The RUL
              estimate keeps the remaining-life figure and drops the degradation modes that were
              not observed. The demand plan keeps the planned quantity and drops the demand that
              has not occurred. The Monte Carlo percentile keeps one point from a simulated spread
              and drops the inputs that were assumed rather than measured. The LLM-generated
              outlook keeps the sentences it wrote and drops the records it did not cite.
              Compression is not a fault in the tool. It is the limit of the record. The limit
              does not become a fact because the outlook looks finished.
            </p>

            <p>
              Assumptions are the claims the forecast needs and does not prove: the failure mode
              it was built for, the operating regime it expects, the demand it was told to expect,
              the distributions it was fed, the documents the outlook was allowed to read.
              Uncertainty bands are the spread the forecast is willing to show, and the spread it
              must show when a single point would be false precision. Refusal conditions are the
              states in which the forecast must say it does not know: unmet assumptions, a band
              too wide to plan on, a disagreement with evidence from the plant, or a precision the
              evidence cannot support. A forecast can inform a recommendation to investigate or
              prepare when those three are explicit. Without them, the outlook is a claim with the
              limit hidden. Hidden limits are how false clearance gets stored.
            </p>

            <p>
              Planning is not a fact about the plant. A recommendation to investigate asks a named
              person to go look. A recommendation to prepare asks a named person to hold a window,
              a spare, or a question open. Neither request records the future as if it had already
              occurred. Neither request is authorization for corrective work. The meeting can note
              that a forecast was produced. Noting it records that a forecast, a projection, an
              RUL estimate, a demand plan, a Monte Carlo percentile, or an LLM-generated outlook
              was available. It does not record the plant state, and it does not open the Decision
              Case. The fact stays in the approved evidence a later reader can inspect, or it
              stays missing. The forecast stays a forward-looking compression with named limits,
              or it stays off the case as an unverified outlook. Treating the forecast as fact
              invents a plant the record does not hold. The room thinks the asset is cleared. The
              evidence from the plant was never written. That skip is the failure this essay
              names.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Treating the forecast as a fact about the plant is false clearance
            </h2>

            <p>
              False clearance is a record that says go, defer, or closed when the check is not on
              the case. The forecast is favorable, so the room stores favorable as ready. The
              projection is inside band, so the band is stored as the outcome. The RUL estimate is
              long, so deferral is stored as authorized. The demand plan is balanced, so the plan
              is stored as the work that will happen. The Monte Carlo percentile is comfortable,
              so the comfort is stored as certainty. The LLM-generated outlook says the bearing
              will be fine, so the sentence is stored as the inspection that has not happened.
              Each of those moves is false clearance. The case looks released. The plant was not
              the source of the release.
            </p>

            <p>
              False precision is the same failure in a finer unit. A remaining-life line printed
              to a day the evidence does not support, a percentile printed as if the point were a
              measurement, a demand quantity printed as if the plan were observed demand, an
              LLM-generated outlook that sounds specific about a mode nobody cited — those are
              false precision. Sync refuses false precision. This essay states no OEM limit, no
              remaining-life figure, no percentile, no demand quantity, and no probability. A
              number the meeting wants so the forecast will look decisive is not a diagnosis, and
              this page does not publish one. The case holds the approved evidence that was
              stored, the assumptions that were named, the uncertainty bands that were named, the
              refusal conditions that were named, and what is still unknown. It does not hold a
              precision this essay made up.
            </p>

            <p>
              Evidence from the plant beats the forecast. When the outlook and the plant disagree,
              the case keeps the disagreement in view. It does not overwrite the plant with the
              forecast, the projection, the RUL estimate, the demand plan, the percentile, or the
              outlook. It does not overwrite a missing plant record with a confident future. A
              forecast that cannot show its assumptions, uncertainty bands, and refusal conditions
              is not ready to sit beside the recommendation as if it were evidence.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The forecast is not a diagnosis and not root cause
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect: what failed, on what
              evidence from the plant, and what is still missing. Root cause is a recorded causal
              check that names why, on that evidence, and leaves the remaining uncertainty in
              view. A forecast names neither. A projection names neither. An RUL estimate names
              neither. A demand plan names neither. A Monte Carlo percentile names neither. An
              LLM-generated outlook names neither, unless the outlook is a pointer to approved
              evidence that already names them — and then the evidence names them, not the
              outlook. The forecast is not a diagnosis. It is not root cause. It is not the plant
              state.
            </p>

            <p>
              <Link
                href="/insights/symptom-is-not-cause"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Symptom Is Not Cause
              </Link>{' '}
              keeps a vibration spike, a hot bearing, a pressure drop, an operator report, a CMMS
              complaint code, a red tile, or any other observed symptom from being stored as the
              cause. A forecast that labels the symptom as the future mode has not recorded the
              cause.{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>{' '}
              keeps a numeric threshold, a limit, an alarm band, or a set-point from being stored
              as a diagnosis. A limit the RUL estimate is projected to cross is still a limit.{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              keeps co-moving tags from being stored as a recorded causal check. A Monte Carlo
              percentile drawn from co-moving inputs is still co-movement.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps a rising or falling line from being stored as a recorded check. A projection
              of that line is a forecast. It is not the truth of the asset, and it is not a fact
              about a future plant state.{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>{' '}
              keeps chatter from being stored as an actionable signal. Projecting the chatter does
              not promote it.
            </p>

            <p>
              If the case cannot show the asset configuration, the failure and maintenance
              history, and the human judgment that connects the forecast to a mode, the outlook is
              a number or a paragraph without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. A forecast does not shorten it. A projection does not
              shorten it. An RUL estimate does not shorten it. A demand plan does not shorten it.
              A Monte Carlo percentile does not shorten it. An LLM-generated outlook does not
              shorten it. The outlook can cite the trail. Citing is not the same as being the
              trail.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Assumptions, uncertainty bands, and refusal conditions stay on the case
            </h2>

            <p>
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              keeps a belief, a habit, a prior shift story, or an unverified model output from
              being stored as a recorded fact. The inputs to a Monte Carlo percentile are
              assumptions until they are measurements. The regime a projection expects is an
              assumption until the plant confirms it. The demand a plan was told to expect is an
              assumption until the demand occurs. The documents an LLM-generated outlook was
              allowed to read are a scope, not a proof that the scope was the plant. Naming the
              assumption keeps it in the assumption column. Hiding it inside the forecast stores
              it as fact.
            </p>

            <p>
              An uncertainty band is the spread the forecast owes the case. A point with no band
              is false precision. A band that is named can inform a recommendation to investigate
              or prepare. A band that is silent is how the percentile gets stored as the plant. A
              narrow band is still not a recorded check.{' '}
              <Link
                href="/insights/sample-is-not-population"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Sample Is Not Population
              </Link>{' '}
              keeps a handful of observed cases from being stored as the fleet. A forecast fit to
              that handful is still a forecast of the handful. Assets that were not instrumented,
              sites that were not in the window, failure modes that were not in the history, and
              shifts that were not in the outlook are coverage the band has to show or the refusal
              has to name. The forecast does not fill the gap by being confident about the rows it
              had.
            </p>

            <p>
              A refusal condition is the recorded stop. The forecast refuses when an assumption is
              unmet, when the uncertainty band is too wide for the question, when the output would
              be false precision, or when evidence from the plant contradicts the outlook. Refusal
              is not a failure of the tool. It is the honesty boundary on the output. A forecast
              that cannot refuse will clear a case it should have left unknown. Unknown stays
              unknown. The operator must not treat a missing refusal as go.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The forecast does not authorize corrective work
            </h2>

            <p>
              Authorization is the named act. A drafted next action is a proposal. Recommend is
              not authorize.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps that proposal off the decision. A proposal that cites a forecast, a
              projection, an RUL estimate, a demand plan, a Monte Carlo percentile, or an
              LLM-generated outlook is still a proposal. A recommendation to investigate or
              prepare is still a proposal. The estimate can be smooth. The outlook can be fluent.
              Neither the smoothness nor the fluency accepts the operational consequence. The
              forecast is not authorization for corrective work.
            </p>

            <p>
              Corrective work is the change someone intends after a named decision: the repair,
              the deferral, the inspection, the isolation. A long RUL estimate does not authorize
              deferral. A balanced demand plan does not authorize the work the plan was used to
              justify. A comfortable Monte Carlo percentile does not authorize running on. An
              LLM-generated outlook does not authorize the next sentence as the work order. Sync
              must not auto-authorize because the forecast showed a next step. Sync recommends. A
              named human decides. If the only support is the forward-looking compression, the
              proposal is not ready to be stored as authorized.
            </p>

            <p>
              Recording an ACTION disposition is work intent. It is not plant execution.{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps that intent off the plant. Sync does not write the work order. The systems
              that already hold execution authority write the work order or the isolation.
              Execution stays with authorized systems. A forecast, however precise, does not move
              execution onto Sync, and it does not replace the named decision that would have to
              come first.
            </p>

            <p>
              An alert the forecast ranked is still an alert.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keeps seeing, acknowledging, or silencing an alert from being stored as a decision.
              A dashboard of outlooks is still a display.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. A smooth projection does not put it back as
              authorization, verification of outcome, work-order execution, or plant control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A forecast is not a verified operational outcome
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do on
              the plant. The case stays open until that check is on the case. Verification stays
              open until a verified operational outcome is recorded. A later forecast that says
              the asset will have recovered is a later forward-looking compression. It is not, by
              itself, the check. The projection can move. The RUL estimate can lengthen. The
              demand plan can be marked complete in the planning tool. The Monte Carlo percentile
              can look safer. The LLM-generated outlook can say the work is done. The outlook does
              not record what the authorized change did.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              keeps the stand-in off the outcome. A forecast used as a stand-in is a stand-in. A
              percentile that moved is a stand-in. Forecast clearance is not the check. Clearing
              the meeting because the estimate looked long, the plan looked balanced, or the
              outlook sounded finished must not be read as verification of outcome. Sync must not
              auto-close because the forecast was current. Sync must not treat forecast clearance
              as Learning credit. A closed outlook is not a closed case.
            </p>

            <p>
              Learning is what a later question is allowed to inherit.{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              says the later question inherits that verified outcome, not a hope. Learning
              requires a verified outcome, not a hoped-for state from a forecast, a projection, an
              RUL estimate, a demand plan, a Monte Carlo percentile, or an LLM-generated outlook.
              What was believed may include a labeled note that a forecast was consulted and that
              its assumptions, uncertainty bands, and refusal conditions were explicit. Learning
              does not inherit the outlook as if the check had named the cause and confirmed the
              result on the plant. A later crew that defers the work because the forecast said so,
              without the verification on the prior case, is inheriting a forward-looking
              compression. That is the wrong lesson into Learning. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a forecast as a verified
              operational outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A forecast is not a Decision Case
            </h2>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that a forecast, a projection,
              an RUL estimate, a demand plan, a Monte Carlo percentile, or an LLM-generated
              outlook was opened does not record that question, and it does not record the
              decision. The case is the order: Question, Evidence, Recommendation, Human decision,
              then action, verification, and learning. A forward-looking compression is not that
              order.
            </p>

            <p>
              Treating the forecast as fact shortcuts the Question → Evidence → Recommendation →
              Human Decision path. The outlook jumps to a conclusion. The evidence step is
              skipped, or it is filled with the forecast and called evidence from the plant. The
              recommendation is implied by the estimate, the plan, or the outlook. The human
              decision is treated as already made because the projection is favorable or the
              percentile is comfortable. That shortcut is not a case. A named human records the
              Decision Case only against approved evidence. Until evidence from the plant is on
              the case, and until assumptions, uncertainty bands, and refusal conditions are
              explicit, the forecast remains a forward-looking compression.
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
              says until that act is recorded, the case is still a proposal. A forecast does not
              replace a named human decision. The forecast does not sign accept. The projection
              does not sign reject. The RUL estimate does not escalate. The demand plan does not
              return the proposal. The Monte Carlo percentile does not record who decided. The
              LLM-generated outlook does not stand in for the name. The signed-in Decision Case
              keeps who decided visible beside the recommendation. The recorded act is mandatory.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync may surface a forecast when assumptions and uncertainty are named
            </h2>

            <p>
              Sync may surface a forecast beside approved evidence, with the honesty boundary that
              the forecast is a forward-looking compression and not a fact about the plant.
              Surfacing means the forecast, the projection, the RUL estimate, the demand plan, the
              Monte Carlo percentile, or the LLM-generated outlook can sit beside a question so a
              person can see the assumptions, the uncertainty bands, and the refusal conditions.
              The label is part of the surface. Without that label, the screen hides the limit and
              offers false precision. The honesty boundary is not optional. Sync may surface a
              forecast when assumptions and uncertainty are named. It may not store the outlook as
              the plant state.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote a practice outlook into plant evidence. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live conclusion the edition does not hold. A
              forecast fed by simulated or seeded telemetry is a practice outlook. A Monte Carlo
              percentile on assumed inputs is a practice point. An LLM-generated outlook of
              practice records is a practice paragraph. None of them is a live operational
              outcome, and none of them is a substitute for the approved evidence the operator
              still has to attach.
            </p>

            <p>
              Sync must not auto-close, auto-authorize, or treat forecast clearance as Learning
              credit. Auto-close would store the outlook as a finished case. Auto-authorize would
              store the estimate or the plan as permission for corrective work. Learning credit
              would let a later case inherit the outlook. None of those acts is available to the
              system. A named human records the Decision Case only against approved evidence.
              Verification stays open until a verified operational outcome is recorded. Sync
              refuses false precision, including a remaining-life figure, a percentile, a demand
              quantity, or a probability this essay does not hold.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry is a practice record. A practice forecast is still a forward-looking
              compression. It is not live plant evidence, and it is not a substitute for the check
              the operator still has to record. Sync refuses to treat a forecast as a fact about
              the plant.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Blank is not zero. Unknown is not clear. Silence is not clearance.
            </h2>

            <p>
              Blank is not zero.{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>{' '}
              keeps an empty field from being stored as a measured zero. Filling the blank with a
              point from the forecast, a default from the projection, a planned quantity from the
              demand plan, or a sentence from the LLM-generated outlook collects an outlook. It
              does not collect the missing plant value. In Recovery, economic assumptions that were
              left blank stay blank. They are not inferred from an RUL estimate or a Monte Carlo
              percentile. A blank verification field is not a verified outcome of none, and a
              forecast that shows no future deviation does not close it. Storing blank as zero
              invents false certainty and corrupts Recovery, verification, and Decision Case math.
            </p>

            <p>
              Unknown is not clear.{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              records missing evidence as unknown, not as clear or ready. In the Decision Case and
              in Recovery, missing evidence stays unknown. Filling the unknown line with a
              forecast, a projection, an RUL estimate, a demand plan, a percentile, or an outlook
              does not change the state to clear, and it does not name root cause. Bad or
              not-ready evidence stays blocked. A forecast that looks related to the blocked item
              does not relabel blocked as ready. The operator must not treat unknown as go because
              the outlook was complete. Go would mean the evidence is sufficient for the next
              recorded step. A forward-looking compression is not sufficiency. An uncertainty band
              that was not named is still unknown.
            </p>

            <p>
              Silence is not clearance.{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              keeps no reply, no alert, and an empty inbox from being read as approval. No reply
              is not approval. An empty inbox is not clearance. A quiet forecast is not
              controlled. A demand plan with no exception is not a decision. An LLM-generated
              outlook that does not mention a hold point does not write accept, reject, escalate,
              or return. It does not record a check that nobody performed. A favorable projection
              does not turn the missing response into the named decision. A forecast that stayed
              silent on its refusal conditions is still not clearance.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface a forecast. Sync may hold the forecast, the projection, the RUL
              estimate, the demand plan, the Monte Carlo percentile, or the LLM-generated outlook
              beside a recommendation to investigate or prepare, with the honesty boundary that
              the forecast is a forward-looking compression and that assumptions, uncertainty
              bands, and refusal conditions have to be explicit. That is a proposal. The person
              who can accept the operational consequence records the decision. Until that act is
              on the case, the case is still a proposal. The system does not auto-accept because
              the outlook looked finished. Sync recommends. A named human decides.
            </p>

            <p>
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps a strong gut feel, a high model score, or a manager certainty from being
              stored as a recorded check. Being sure the forecast matches the future asset is
              still not the match. A narrow uncertainty band is still not a recorded check. A
              fluent LLM-generated outlook is still not a recorded check. The percentile on the
              forecast is not evidence from the plant.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of a forecast is not control of
              the plant. A Decision Case that records a forecast as a forward-looking compression
              does not put Sync in control of the work, the isolation, or the change. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. The forecast is not the check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The outlook is not the act.
            </p>

            <p className="text-xl font-semibold text-white">
              A forecast, a projection, an RUL estimate, a demand plan, a Monte Carlo percentile,
              or an LLM-generated outlook is a forward-looking compression, not a fact about the
              plant. It is useful for planning only when its assumptions, uncertainty bands, and
              refusal conditions are explicit. Treating the forecast as a fact about the plant is
              false clearance. It is not the plant state, not a diagnosis, not root cause, not
              authorization for corrective work, not a verified operational outcome, and not a
              Decision Case. Evidence from the plant beats the forecast. Sync may surface a
              forecast when assumptions and uncertainty are named. Sync refuses false precision.
              Sync must not auto-close, auto-authorize, or treat forecast clearance as Learning
              credit. A named human still decides. Verification stays open until a verified
              operational outcome is recorded. Execution stays with authorized systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes a forecast, a projection, an RUL estimate, a demand plan, a Monte
              Carlo percentile, or an LLM-generated outlook to a fact about the plant or to a
              Decision Case.
            </p>

            <p>
              Model Is Not Reality is the computed claim: a digital twin, a KPI model, a risk
              matrix, an RUL curve, a Monte Carlo run, or an LLM summary stored as the plant. This
              essay is the forward-looking claim that can be produced from that model. A model
              that is not the plant does not become the plant when it is asked for a future. Map
              Is Not Terrain is the picture. A diagram of a forecast is still not the operating
              reality.{' '}
              <Link
                href="/insights/anecdote-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Anecdote Is Not Evidence
              </Link>{' '}
              is the story. An LLM-generated outlook of a story is still not evidence. Sample Is
              Not Population is the handful stored as the fleet. A forecast of that handful is
              still not the population. Noise Is Not Signal is the chatter stored as an actionable
              signal. Symptom Is Not Cause is the observed symptom stored as the cause. Threshold
              Is Not Diagnosis is the line that was crossed, including a line a projection says
              will be crossed. Assumption Is Not Evidence is the unverified outlook stored in
              place of a fact. Confidence Is Not Evidence is the tight band stored in place of a
              check. Correlation Is Not Causation is the chart of co-movement. Trend Is Not Truth
              is the slope of what was observed. Extending the slope is a forecast, not a fact.
              Proxy Is Not Outcome is the stand-in, including a forecast read as the result.
              Verification Is Not Optional is the check that still has to be written. A fluent
              outlook is still not evidence. A tight band is still not a check. A balanced demand
              plan is still not the outcome. A later forecast does not close the case. The label
              stays. The evidence from the plant stays unwritten until it is on the case. The
              decision stays unwritten until a named person records it.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A forecast does not
              interpret them into clearance. On this record, blank is not zero, unknown is not
              clear, and silence is not the named decision. A case that is unknown, blank, or
              quiet is not made ready by a favorable forecast, a smooth projection, a long RUL
              estimate, a balanced demand plan, a comfortable Monte Carlo percentile, or a
              finished LLM-generated outlook.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified operational outcome, not a hoped-for state from the
              forecast. The trail behind a recommendation is still evidence lineage. An alert is
              still not a decision. A dashboard is still not a decision, and it is still not the
              plant. Recommend is not authorize. Those records are either on the case or they are
              not. If they are not, a forecast does not supply them. Evidence from the plant beats
              the forecast.
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
              forecast does not collapse that split into evidence from the plant. A proposal with
              no basis is not ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A forecast that says the work will already have recovered is not the
              check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the forecast, the
              projection, the RUL estimate, the demand plan, the Monte Carlo percentile, or the
              LLM-generated outlook the last shift treated as the lesson.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a forward-looking compression as live evidence or as
              plant control, and they keep the edition from printing false precision. Later
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
              states no savings figure, and claims no prevented failure. It states no OEM limit
              and supplies no remaining-life figure, no percentile, no demand quantity, and no
              probability. It does not claim that Sync executes plant work, writes a work order,
              isolates equipment, or controls a plant. It does not claim that a forecast, a
              projection, an RUL estimate, a demand plan, a Monte Carlo percentile, or an
              LLM-generated outlook is a fact about the plant, that a forward-looking compression
              is evidence from the plant, that a forecast is a diagnosis, that an outlook is root
              cause, that an estimate or a plan is authorization for corrective work, that a
              comfortable percentile is a verified operational outcome, or that a forecast is a
              Decision Case. It does not claim that self-guided onboarding is a live product path.
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
              describes that journey. This edition does not describe plant execute, a live
              connector tag pull, SMTP invite delivery, or automatic revocation of access on
              expiry as live. It does not describe Sync writing work orders, isolating equipment,
              or controlling the plant. Simulated or seeded telemetry and assets are practice
              records. They are not live plant results, and a practice forecast is not a fact
              about the plant. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/simulation-is-not-proof"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Simulation Is Not Proof
              </Link>
              , on why a digital-twin run, a Monte Carlo fan, a what-if scenario, or a failure
              simulation is a controlled representation of possible futures and not proof the
              plant will behave that way. Companion reading:{' '}
              <Link
                href="/insights/model-is-not-reality"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Model Is Not Reality
              </Link>{' '}
              on why a digital twin, a KPI model, a risk matrix, an RUL curve, a Monte Carlo run,
              or an LLM summary is a compressed representation and not the plant,{' '}
              <Link
                href="/insights/map-is-not-terrain"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Map Is Not Terrain
              </Link>{' '}
              on why a diagram, a CMMS schema, a dashboard, a digital twin, or a process map is a
              compressed representation and not the operating reality,{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              on why a stand-in measure is not the verified operational outcome,{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              on why an unverified outlook is not a recorded fact,{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              on why a tight band or a high score is not a recorded check,{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              on why a slope is not a recorded check and a projection of that slope is not a fact,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a drafted next action, including a recommendation to investigate or prepare,
              is still a proposal,{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              on why a display is not authorization,{' '}
              <Link
                href="/insights/sample-is-not-population"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Sample Is Not Population
              </Link>{' '}
              on why a handful of observed cases or plants is not the fleet,{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>{' '}
              on why sensor chatter is not an actionable signal,{' '}
              <Link
                href="/insights/symptom-is-not-cause"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Symptom Is Not Cause
              </Link>{' '}
              on why an observed symptom is not the cause,{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>{' '}
              on why crossing a numeric threshold is not a diagnosis,{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              on why co-moving tags are not a recorded causal check,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded,{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              on why seeing, acknowledging, or silencing an alert is not a decision,{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              on why silence, no reply, no alert, and an empty inbox are not authorization,{' '}
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
              on why a later case inherits the verified outcome, not a hoped-for state from a
              forecast,{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why work intent is not plant execution,{' '}
              <Link
                href="/insights/anecdote-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Anecdote Is Not Evidence
              </Link>{' '}
              on why a story is not evidence,{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>{' '}
              on why an empty field is not a measured zero,{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              on why missing evidence is recorded as unknown, not as clear or ready, and{' '}
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
              forecast.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Forecast is not fact. A forecast, a projection, an RUL estimate, a demand plan, a
                Monte Carlo percentile, or an LLM-generated outlook is a forward-looking
                compression, not a fact about the plant. It is useful for planning only when
                assumptions, uncertainty bands, and refusal conditions are explicit. It can inform
                a recommendation to investigate or prepare. It is not the plant state, not a
                diagnosis, not root cause, not authorization for corrective work, not a verified
                operational outcome, and not a Decision Case. Treating the forecast as a fact
                about the plant is false clearance. Evidence from the plant beats the forecast.
                Sync refuses false precision. Sync may surface a forecast when assumptions and
                uncertainty are named. A named human still decides. Verification stays open until
                a verified operational outcome is recorded. Execution stays with authorized
                systems. The Reliability Engineer workspace is where a signed-in Decision Case is
                completed. A Reliability Assessment is the bounded review when the question is
                whether the records can support a conclusion. None of those is a claim that Sync
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
          <InsightNextSteps slug="forecast-is-not-fact" />
        </motion.article>
      </div>
    </main>
  );
}
