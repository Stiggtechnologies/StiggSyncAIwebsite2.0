'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('model-is-not-reality');

export default function ModelIsNotRealityPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Model Is Not Reality</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Model is not reality. A digital twin, a KPI model, a risk matrix, an RUL curve, a
              Monte Carlo run, or an LLM summary is a compressed representation. It is useful for
              decisions only when its assumptions, coverage gaps, and refusal conditions are
              explicit. Treating the model as the plant is how operators get false clearance. A
              model can inform a recommendation to investigate. It is not the plant, not a
              diagnosis, not root cause, not authorization for corrective work, not a verified
              operational outcome, and not a Decision Case. Evidence from the plant beats the
              model. Sync may surface a model beside approved evidence when the limits are named.
              Sync refuses false precision. A named human still decides.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case and in Recovery, a digital twin, a KPI model, a risk matrix, an
              RUL curve, a Monte Carlo run, or an LLM summary is a compressed representation. It
              is not the plant. It is useful only when assumptions, coverage gaps, and refusal
              conditions are on the record. It is not a diagnosis. It is not root cause. It is not
              authorization for corrective work. It is not a verified operational outcome. It is
              not a Decision Case. Treating the model as reality is false clearance. Verification
              stays open until a verified operational outcome is recorded from the plant, not from
              the model.
            </p>

            <p>
              In this essay, model names those six records and no figure of speech. A digital twin
              is a computed state held in software and synchronized, simulated, or seeded to look
              like the asset. A KPI model is a formula or score that stands in for an operational
              result. A risk matrix is a grid of likelihood and consequence that paints a cell. An
              RUL curve is a remaining-useful-life line projected from a degradation model. A
              Monte Carlo run is a spread of simulated outcomes from assumed inputs. An LLM
              summary is a compressed retelling of records the model was given. Reality names the
              plant: the asset as it is running, the evidence a later reader can inspect, and the
              outcome that was actually verified. Those are different records. Treating the model
              as reality stores the compressed representation as if it were the plant.
            </p>

            <p>
              The meeting puts the digital twin on the screen. The KPI model is green. The risk
              matrix cell is low. The RUL curve is long. The Monte Carlo band is tight. The LLM
              summary reads as if the case were already written. Someone says the asset is known,
              and the room treats the output as clearance. Nobody wrote the assumptions. Nobody
              named the coverage gaps. Nobody stated the refusal conditions. Nobody attached
              approved evidence from the plant. Nobody wrote accept, reject, escalate, or return.
              The Decision Case still has to show the question, the evidence, the recommendation,
              the named human decision, and the check. A model output is not that record, and it
              is not the plant.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/map-is-not-terrain"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Map Is Not Terrain
              </Link>{' '}
              and stands beside{' '}
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
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>
              , and{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>
              . Map keeps a diagram, a CMMS schema, a dashboard, a digital twin, or a process map
              from being stored as the operating reality. This essay keeps the computed claim —
              the twin as a model, the KPI model, the risk matrix, the RUL curve, the Monte Carlo
              run, the LLM summary — from being stored as the plant when assumptions, coverage
              gaps, and refusal conditions are not explicit. Proxy keeps a KPI, a leading
              indicator, a model score, a green tile, a closed work-order count, an MTBF estimate,
              or a sensor health % from being stored as the verified operational outcome. A KPI
              model is that stand-in when the score is treated as the result. Assumption keeps an
              unverified model output from being stored as a recorded fact. Confidence keeps a
              high model score from being stored as a recorded check. Recommend keeps a drafted
              next action from being stored as authorization. Dashboard keeps the display from
              being stored as a decision. A precise picture of a model is still not the plant.
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
              missing. A digital twin, a KPI model, a risk matrix, an RUL curve, a Monte Carlo
              run, or an LLM summary is not a fourth column that records the plant, names the
              failure mode, authorizes the work, or closes the case. A proposal whose only basis
              is the model has no evidence from the plant a later reader can inspect. A proposal
              with no named human decision is not a Decision Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a model output as approved evidence from the plant or as live plant
              control. Sync refuses false precision. A number the model printed is not a fact the
              edition did not hold.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A model is useful only when its limits are explicit
            </h2>

            <p>
              A compressed representation keeps some of the plant and drops the rest. The digital
              twin keeps the state it was given and drops the state it was not. The KPI model
              keeps the inputs in the formula and drops the operational result those inputs stand
              in for. The risk matrix keeps the cell that was painted and drops the basis that was
              not written. The RUL curve keeps the projected line and drops the degradation modes
              that were not in the window. The Monte Carlo run keeps the spread of simulated
              outcomes and drops the inputs that were assumed rather than measured. The LLM
              summary keeps the sentences it wrote and drops the records it did not cite.
              Compression is not a fault in the tool. It is the limit of the record. The limit
              does not become the plant because the output looks finished.
            </p>

            <p>
              Assumptions are the claims the model needs and does not prove: the failure mode it
              was built for, the operating regime it expects, the distributions it was fed, the
              documents the summary was allowed to read. Coverage gaps are the assets, sites,
              modes, sensors, or time windows the model was not given. Refusal conditions are the
              states in which the model must say it does not know: missing coverage, unmet
              assumptions, a disagreement with evidence from the plant, or a precision the
              evidence cannot support. A model can inform a recommendation to investigate when
              those three are explicit. Without them, the output is a claim with the limit hidden.
              Hidden limits are how false clearance gets stored.
            </p>

            <p>
              The meeting can note that a model was run. Noting it records that a digital twin, a
              KPI model, a risk matrix, an RUL curve, a Monte Carlo run, or an LLM summary was
              available. It does not record the plant, and it does not open the Decision Case. The
              fact stays in the approved evidence a later reader can inspect, or it stays missing.
              The model stays a compressed representation with named limits, or it stays off the
              case as an unverified output. Treating the model as reality invents a plant the
              record does not hold. The room thinks the asset is cleared. The evidence from the
              plant was never written. That skip is the failure this essay names.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Treating the model as the plant is false clearance
            </h2>

            <p>
              False clearance is a record that says go, defer, or closed when the check is not on
              the case. The digital twin is nominal, so the room stores nominal as ready. The KPI
              model is inside band, so the band is stored as the outcome. The risk matrix cell is
              green, so green is stored as acceptable. The RUL curve is long, so deferral is
              stored as authorized. The Monte Carlo band is narrow, so the narrowness is stored as
              certainty. The LLM summary says the bearing is fine, so the sentence is stored as
              the inspection. Each of those moves is false clearance. The case looks released. The
              plant was not the source of the release.
            </p>

            <p>
              False precision is the same failure in a finer unit. A remaining-life line printed
              to a day the evidence does not support, a probability printed to a tenth the inputs
              do not support, a risk score printed as if the cell were a measurement, an LLM
              sentence that sounds specific about a mode nobody cited — those are false precision.
              Sync refuses false precision. This essay states no OEM limit, no remaining-life
              figure, no probability, and no risk score. A number the meeting wants so the model
              will look decisive is not a diagnosis, and this page does not publish one. The case
              holds the approved evidence that was stored, the assumptions that were named, the
              coverage gaps that were named, the refusal conditions that were named, and what is
              still unknown. It does not hold a precision this essay made up.
            </p>

            <p>
              Evidence from the plant beats the model. When the model and the plant disagree, the
              case keeps the disagreement in view. It does not overwrite the plant with the twin,
              the KPI, the cell, the curve, the band, or the summary. It does not overwrite a
              missing plant record with a confident output. A model that cannot show its
              assumptions, coverage gaps, and refusal conditions is not ready to sit beside the
              recommendation as if it were evidence.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The model is not a diagnosis and not root cause
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect: what failed, on what
              evidence from the plant, and what is still missing. Root cause is a recorded causal
              check that names why, on that evidence, and leaves the remaining uncertainty in
              view. A digital twin names neither. A KPI model names neither. A risk matrix names
              neither. An RUL curve names neither. A Monte Carlo run names neither. An LLM summary
              names neither, unless the summary is a pointer to approved evidence that already
              names them — and then the evidence names them, not the summary. The model is not a
              diagnosis. It is not root cause.
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
              cause. A model that labels the symptom as the mode has not recorded the cause.{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>{' '}
              keeps a numeric threshold, a limit, an alarm band, or a set-point from being stored
              as a diagnosis. A limit inside a KPI model or on an RUL curve is still a limit.{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              keeps co-moving tags from being stored as a recorded causal check. A Monte Carlo of
              co-moving inputs is still co-movement.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps a rising or falling line from being stored as a recorded check. An RUL curve
              is a projected slope. It is not the truth of the asset.{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>{' '}
              keeps chatter from being stored as an actionable signal. Fitting the chatter does
              not promote it.
            </p>

            <p>
              If the case cannot show the asset configuration, the failure and maintenance
              history, and the human judgment that connects the model to a mode, the output is a
              number or a paragraph without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. A digital twin does not shorten it. A KPI model does
              not shorten it. A risk matrix does not shorten it. An RUL curve does not shorten it.
              A Monte Carlo run does not shorten it. An LLM summary does not shorten it. The
              summary can cite the trail. Citing is not the same as being the trail.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Assumptions, coverage gaps, and refusal conditions stay on the case
            </h2>

            <p>
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              keeps a belief, a habit, a prior shift&apos;s story, or an unverified model output
              from being stored as a recorded fact. The inputs to a Monte Carlo run are
              assumptions until they are measurements. The regime a digital twin expects is an
              assumption until the plant confirms it. The documents an LLM summary was allowed to
              read are a scope, not a proof that the scope was the plant. Naming the assumption
              keeps it in the assumption column. Hiding it inside the output stores it as fact.
            </p>

            <p>
              A coverage gap is a part of the population the model did not see.{' '}
              <Link
                href="/insights/sample-is-not-population"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Sample Is Not Population
              </Link>{' '}
              keeps a handful of observed cases from being stored as the fleet. A model fit to
              that handful is still a model of the handful. Assets that were not instrumented,
              sites that were not in the window, failure modes that were not in the history, and
              shifts that were not in the summary are coverage gaps. A gap that is named can
              inform a recommendation to investigate. A gap that is silent is how the model gets
              stored as the fleet. The model does not fill the gap by being confident about the
              rows it had.
            </p>

            <p>
              A refusal condition is the recorded stop. The model refuses when an assumption is
              unmet, when a coverage gap is material to the question, when the output would be
              false precision, or when evidence from the plant contradicts the output. Refusal is
              not a failure of the tool. It is the honesty boundary on the output. A model that
              cannot refuse will clear a case it should have left unknown. Unknown stays unknown.
              The operator must not treat a missing refusal as go.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The model does not authorize corrective work
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
              keeps that proposal off the decision. A proposal that cites a digital twin, a KPI
              model, a risk matrix, an RUL curve, a Monte Carlo run, or an LLM summary is still a
              proposal. The curve can be smooth. The summary can be fluent. Neither the smoothness
              nor the fluency accepts the operational consequence. The model is not authorization
              for corrective work.
            </p>

            <p>
              Corrective work is the change someone intends after a named decision: the repair,
              the deferral, the inspection, the isolation. A long RUL curve does not authorize
              deferral. A low cell on a risk matrix does not authorize running on. A Monte Carlo
              band does not authorize the work the band was used to justify. An LLM summary does
              not authorize the next sentence as the work order. Sync must not auto-authorize
              because the model showed a next step. Sync recommends. A named human decides. If the
              only support is the compressed representation, the proposal is not ready to be
              stored as authorized.
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
              Execution stays with authorized systems. A model, however precise, does not move
              execution onto Sync, and it does not replace the named decision that would have to
              come first.
            </p>

            <p>
              An alert the model ranked is still an alert.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keeps seeing, acknowledging, or silencing an alert from being stored as a decision.
              A dashboard of model scores is still a display.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. Color on a digital twin does not put it back as
              authorization, verification of outcome, work-order execution, or plant control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A model is not a verified operational outcome
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do on
              the plant. The case stays open until that check is on the case. Verification stays
              open until a verified operational outcome is recorded. A later model state that says
              the asset recovered is a later compressed representation. It is not, by itself, the
              check. The KPI can move. The risk cell can change color. The RUL curve can lengthen.
              The Monte Carlo band can tighten. The LLM summary can say the work is done. The
              output does not record what the authorized change did.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              keeps the stand-in off the outcome. A KPI model score is a stand-in. A green tile on
              a digital twin is a stand-in. Model clearance is not the check. Clearing the meeting
              because the curve looked long, the cell looked low, or the summary sounded finished
              must not be read as verification of outcome. Sync must not auto-close because the
              model was current. Sync must not treat model clearance as Learning credit. A closed
              model view is not a closed case.
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
              requires a verified outcome, not a hoped-for state from a digital twin, a KPI model,
              a risk matrix, an RUL curve, a Monte Carlo run, or an LLM summary. What was believed
              may include a labeled note that a model was consulted and that its assumptions,
              coverage gaps, and refusal conditions were explicit. Learning does not inherit the
              output as if the check had named the cause and confirmed the result on the plant. A
              later crew that defers the work because &quot;the model said so,&quot; without the
              verification on the prior case, is inheriting a compressed representation. That is
              the wrong lesson into Learning. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a model output as a
              verified operational outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A model is not a Decision Case
            </h2>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that a digital twin, a KPI
              model, a risk matrix, an RUL curve, a Monte Carlo run, or an LLM summary was opened
              does not record that question, and it does not record the decision. The case is the
              order: Question, Evidence, Recommendation, Human decision, then action, verification,
              and learning. A compressed representation is not that order.
            </p>

            <p>
              Treating the model as reality shortcuts the Question → Evidence → Recommendation →
              Human Decision path. The output jumps to a conclusion. The evidence step is skipped,
              or it is filled with the model and called evidence from the plant. The
              recommendation is implied by the curve, the cell, or the summary. The human decision
              is treated as already made because the twin is nominal or the KPI is green. That
              shortcut is not a case. A named human records the Decision Case only against
              approved evidence. Until evidence from the plant is on the case, and until
              assumptions, coverage gaps, and refusal conditions are explicit, the model remains a
              compressed representation.
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
              says until that act is recorded, the case is still a proposal. A model does not
              replace a named human decision. The digital twin does not sign accept. The KPI model
              does not sign reject. The risk matrix does not escalate. The RUL curve does not
              return the proposal. The Monte Carlo run does not record who decided. The LLM
              summary does not stand in for the name. The signed-in Decision Case keeps who
              decided visible beside the recommendation. The recorded act is mandatory.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync may surface a model when the limits are named
            </h2>

            <p>
              Sync may surface a model beside approved evidence, with the honesty boundary that
              the model is a compressed representation and not the plant. Surfacing means the
              digital twin, the KPI model, the risk matrix, the RUL curve, the Monte Carlo run, or
              the LLM summary can sit beside a question so a person can see the assumptions, the
              coverage gaps, and the refusal conditions. The label is part of the surface. Without
              that label, the screen hides the limit and offers false precision. The honesty
              boundary is not optional.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote a practice model into plant evidence. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live conclusion the edition does not hold. A
              digital twin fed by simulated or seeded telemetry is a practice model. A Monte Carlo
              run on assumed inputs is a practice spread. An LLM summary of practice records is a
              practice paragraph. None of them is a live operational outcome, and none of them is
              a substitute for the approved evidence the operator still has to attach.
            </p>

            <p>
              Sync must not auto-close, auto-authorize, or treat model clearance as Learning
              credit. Auto-close would store the output as a finished case. Auto-authorize would
              store the curve or the cell as permission for corrective work. Learning credit would
              let a later case inherit the summary. None of those acts is available to the system.
              A named human records the Decision Case only against approved evidence. Verification
              stays open until a verified operational outcome is recorded. Sync refuses false
              precision, including a remaining-life figure, a probability, or a risk score this
              essay does not hold.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry is a practice record. A practice model is still a compressed
              representation. It is not live plant evidence, and it is not a substitute for the
              check the operator still has to record. Sync refuses to treat a model as the plant.
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
              nominal value from the digital twin, a default from the KPI model, a midpoint from
              the risk matrix, or a sentence from the LLM summary collects a model value. It does
              not collect the missing plant value. In Recovery, economic assumptions that were left
              blank stay blank. They are not inferred from an RUL curve or a Monte Carlo run. A
              blank verification field is not a verified outcome of none, and a model that shows
              &quot;no deviation&quot; does not close it. Storing blank as zero invents false certainty
              and corrupts Recovery, verification, and Decision Case math.
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
              in Recovery, missing evidence stays unknown. Filling the unknown line with a twin
              state, a KPI, a risk cell, a remaining-life line, a simulated band, or a summary
              does not change the state to clear, and it does not name root cause. Bad or
              not-ready evidence stays blocked. A model that looks related to the blocked item
              does not relabel blocked as ready. The operator must not treat unknown as go because
              the model was complete. Go would mean the evidence is sufficient for the next
              recorded step. A compressed representation is not sufficiency. A coverage gap that
              was not named is still unknown.
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
              is not approval. An empty inbox is not clearance. A quiet model is not controlled. A
              risk matrix with no red cell is not a decision. An LLM summary that does not mention
              a hold point does not write accept, reject, escalate, or return. It does not record
              a check that nobody performed. A nominal twin does not turn the missing response
              into the named decision. A model that stayed silent on its refusal conditions is
              still not clearance.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface a model. Sync may hold the digital twin, the KPI model, the risk
              matrix, the RUL curve, the Monte Carlo run, or the LLM summary beside a
              recommendation to gather approved evidence from the plant, with the honesty boundary
              that the model is a compressed representation and that assumptions, coverage gaps,
              and refusal conditions have to be explicit. That is a proposal. The person who can
              accept the operational consequence records the decision. Until that act is on the
              case, the case is still a proposal. The system does not auto-accept because the
              model looked finished. Sync recommends. A named human decides.
            </p>

            <p>
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps a strong gut feel, a high model score, or a manager&apos;s certainty from
              being stored as a recorded check. Being sure the twin matches the asset is still not
              the match. A narrow Monte Carlo band is still not a recorded check. A fluent LLM
              summary is still not a recorded check. The score on the model is not evidence from
              the plant.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of a model is not control of the
              plant. A Decision Case that records a model as a compressed representation does not
              put Sync in control of the work, the isolation, or the change. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. The model is not the check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The output is not the act.
            </p>

            <p className="text-xl font-semibold text-white">
              A digital twin, a KPI model, a risk matrix, an RUL curve, a Monte Carlo run, or an
              LLM summary is a compressed representation, not the plant. It is useful for
              decisions only when its assumptions, coverage gaps, and refusal conditions are
              explicit. Treating the model as reality is false clearance. It is not a diagnosis,
              not root cause, not authorization for corrective work, not a verified operational
              outcome, and not a Decision Case. Evidence from the plant beats the model. Sync may
              surface a model when the limits are named. Sync refuses false precision. Sync must
              not auto-close, auto-authorize, or treat model clearance as Learning credit. A named
              human still decides. Verification stays open until a verified operational outcome is
              recorded. Execution stays with authorized systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes a digital twin, a KPI model, a risk matrix, an RUL curve, a Monte
              Carlo run, or an LLM summary to the plant or to a Decision Case.
            </p>

            <p>
              Map Is Not Terrain is the picture: a diagram, a CMMS schema, a dashboard, a digital
              twin, or a process map stored as the operating reality. This essay is the computed
              claim on top of that picture. A twin that is a map is still not the terrain. A twin
              that is a model is still not the plant, and it is useful only with its limits
              explicit. Anecdote Is Not Evidence is the story. An LLM summary of a story is still
              not evidence.{' '}
              <Link
                href="/insights/anecdote-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Anecdote Is Not Evidence
              </Link>{' '}
              keeps the retelling off the case. Sample Is Not Population is the handful stored as
              the fleet. A model of that handful is still not the population. Noise Is Not Signal
              is the chatter stored as an actionable signal. Symptom Is Not Cause is the observed
              symptom stored as the cause. Threshold Is Not Diagnosis is the line that was
              crossed. Assumption Is Not Evidence is the unverified model output stored in place
              of a fact. Confidence Is Not Evidence is the high score stored in place of a check.
              Correlation Is Not Causation is the chart of co-movement. Trend Is Not Truth is the
              slope, including an RUL curve read as truth. Proxy Is Not Outcome is the stand-in,
              including a KPI model read as the result. Verification Is Not Optional is the check
              that still has to be written. A fluent summary is still not evidence. A tight band
              is still not a check. A green cell is still not the outcome. A later model state
              does not close the case. The label stays. The evidence from the plant stays
              unwritten until it is on the case. The decision stays unwritten until a named person
              records it.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A model does not interpret
              them into clearance. On this record, blank is not zero, unknown is not clear, and
              silence is not the named decision. A case that is unknown, blank, or quiet is not
              made ready by a nominal twin, a green KPI, a low risk cell, a long RUL curve, a
              narrow Monte Carlo band, or a finished LLM summary.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified operational outcome, not a hoped-for state from the
              model. The trail behind a recommendation is still evidence lineage. An alert is
              still not a decision. A dashboard is still not a decision, and it is still not the
              plant. Recommend is not authorize. Those records are either on the case or they are
              not. If they are not, a model does not supply them. Evidence from the plant beats
              the model.
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
              model does not collapse that split into evidence from the plant. A proposal with no
              basis is not ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A model that says the work &quot;already recovered&quot; is not the
              check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the digital twin, the
              KPI model, the risk matrix, the RUL curve, the Monte Carlo run, or the LLM summary
              the last shift treated as the lesson.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a compressed representation as live evidence or as
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
              and supplies no remaining-life figure, no probability, and no risk score. It does
              not claim that Sync executes plant work, writes a work order, isolates equipment, or
              controls a plant. It does not claim that a digital twin, a KPI model, a risk matrix,
              an RUL curve, a Monte Carlo run, or an LLM summary is the plant, that a compressed
              representation is evidence from the plant, that a model is a diagnosis, that a model
              output is root cause, that a curve or a cell is authorization for corrective work,
              that a green score is a verified operational outcome, or that a model is a Decision
              Case. It does not claim that self-guided onboarding is a live product path.
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
              records. They are not live plant results, and a practice model is not the plant.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/forecast-is-not-fact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Forecast Is Not Fact
              </Link>
              , on why a forecast, a projection, an RUL estimate, a demand plan, a Monte Carlo
              percentile, or an LLM-generated outlook is a forward-looking compression and not a
              fact about the plant. Companion reading:{' '}
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
              on why an unverified model output is not a recorded fact,{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              on why a high model score is not a recorded check,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a drafted next action is still a proposal,{' '}
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
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              on why a slope is not a recorded check,{' '}
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
              model,{' '}
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
              model.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Model is not reality. A digital twin, a KPI model, a risk matrix, an RUL curve, a
                Monte Carlo run, or an LLM summary is a compressed representation, not the plant.
                It is useful only when assumptions, coverage gaps, and refusal conditions are
                explicit. It can inform a recommendation to investigate. It is not a diagnosis,
                not root cause, not authorization for corrective work, not a verified operational
                outcome, and not a Decision Case. Treating the model as the plant is false
                clearance. Evidence from the plant beats the model. Sync refuses false precision.
                Sync may surface a model when the limits are named. A named human still decides.
                Verification stays open until a verified operational outcome is recorded. Execution
                stays with authorized systems. The Reliability Engineer workspace is where a
                signed-in Decision Case is completed. A Reliability Assessment is the bounded
                review when the question is whether the records can support a conclusion. None of
                those is a claim that Sync executes plant work, or that self-guided onboarding is
                a live product path.
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
          <InsightNextSteps slug="model-is-not-reality" />
        </motion.article>
      </div>
    </main>
  );
}
