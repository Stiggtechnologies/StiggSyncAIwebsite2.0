'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('simulation-is-not-proof');

export default function SimulationIsNotProofPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Simulation Is Not Proof</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Simulation is not proof. A digital-twin run, a Monte Carlo fan, a what-if scenario,
              or a failure simulation is a controlled representation of possible futures. It is not
              proof that an asset, a plan, or an intervention will behave that way in the plant.
              Proof still requires observed outcomes under the honesty boundary and the
              verification boundary. Sync refuses when coverage, assumptions, or calibration are
              insufficient. Treating the simulation as proof is how operators get false clearance.
              A simulation can inform a recommendation to investigate. It is not the plant, not a
              diagnosis, not root cause, not authorization for corrective work, not a verified
              operational outcome, and not a Decision Case. Evidence from the plant beats the
              simulation. Sync may surface a simulation beside approved evidence when coverage,
              assumptions, and calibration are named. Sync refuses false precision. A named human
              still decides.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case and in Recovery, a digital-twin run, a Monte Carlo fan, a what-if
              scenario, or a failure simulation is a controlled representation of possible futures.
              It is not proof that an asset, a plan, or an intervention will behave that way in
              the plant. It is useful for planning only when coverage, assumptions, and
              calibration are on the record, and only when the run can refuse if any of those is
              insufficient. It is not a diagnosis. It is not root cause. It is not authorization
              for corrective work. It is not a verified operational outcome. It is not a Decision
              Case. Treating the simulation as proof is false clearance. Verification stays open
              until a verified operational outcome is recorded from the plant, not from the run.
              Proof still requires observed outcomes.
            </p>

            <p>
              In this essay, simulation names those four records and no figure of speech. A
              digital-twin run is a controlled execution of a twin through a future the twin was
              told to accept. A Monte Carlo fan is a spread of those runs, drawn from assumed
              distributions and shown as a set of possible futures. A what-if scenario is one
              stipulated change — a plan, a deferral, or an intervention — run forward under
              controls the plant has not yet met. A failure simulation is a stipulated failure
              mode run forward as if that mode had already been observed on the asset. Proof names
              an observed outcome a later reader can inspect: what the asset did, what evidence
              was approved, and what check was recorded. Those are different records. Treating the
              simulation as proof stores the controlled representation as if it were the plant.
            </p>

            <p>
              The meeting puts the simulation on the screen. The digital-twin run is smooth. The
              Monte Carlo fan sits inside a band the room does not write down. The what-if
              scenario shows the intervention succeeding. The failure simulation shows the mode
              the room already expected. Someone says the asset is cleared, and the room treats
              the run as proof the plant will behave that way. Nobody wrote the coverage. Nobody
              named the assumptions. Nobody stated the calibration, or the refusal when
              calibration is insufficient. Nobody attached approved evidence from the plant.
              Nobody wrote accept, reject, escalate, or return. The Decision Case still has to
              show the question, the evidence, the recommendation, the named human decision, and
              the check. A simulation is not that record, and it is not proof.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/forecast-is-not-fact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Forecast Is Not Fact
              </Link>{' '}
              and stands beside{' '}
              <Link
                href="/insights/model-is-not-reality"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Model Is Not Reality
              </Link>
              ,{' '}
              <Link
                href="/insights/map-is-not-terrain"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Map Is Not Terrain
              </Link>
              ,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>
              ,{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
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
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>
              . Forecast keeps a forward-looking compression — a forecast, a projection, an RUL
              estimate, a demand plan, a Monte Carlo percentile, an LLM-generated outlook — from
              being stored as a fact about the plant. This essay keeps the controlled run of
              possible futures — the digital-twin run, the Monte Carlo fan, the what-if scenario,
              the failure simulation — from being stored as proof that the asset, the plan, or the
              intervention will behave that way in the plant. Model keeps the compressed
              representation from being stored as the plant. A model that is not the plant does
              not become proof when it is executed through a future. Map keeps a diagram of that
              future from being stored as the operating reality. Verification keeps the case open
              until the observed outcome is on the case. Learning keeps a later question from
              inheriting simulation clearance. Proxy keeps a run used as a stand-in from being
              stored as the verified operational outcome. Recommend keeps a drafted next action,
              including a recommendation to investigate, from being stored as authorization. A
              precise fan is still not proof.
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
              missing. A digital-twin run, a Monte Carlo fan, a what-if scenario, or a failure
              simulation is not a fourth column that records the plant, names the failure mode,
              authorizes the work, or closes the case. A proposal whose only basis is the
              simulation has no observed outcome a later reader can inspect. A proposal with no
              named human decision is not a Decision Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a simulation as approved evidence from the plant or as live plant
              control. Sync refuses false precision. A number the run printed is not proof the
              edition did not hold.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A simulation is a controlled representation of possible futures
            </h2>

            <p>
              A controlled representation keeps the futures it was told to run and drops the plant
              those futures have not yet met. The digital-twin run keeps the twin it was given and
              drops the operating regimes the twin was not built to hold. The Monte Carlo fan
              keeps the spread it sampled and drops the inputs that were assumed rather than
              measured. The what-if scenario keeps the stipulated plan or intervention and drops
              the plant that has not yet received that change. The failure simulation keeps the
              stipulated mode and drops the observation that the mode occurred. Control is not a
              fault in the tool. It is the limit of the record. The limit does not become proof
              because the fan looks finished.
            </p>

            <p>
              Coverage is the plant the run claims to speak for: the assets, the sites, the
              failure modes, the operating regimes, and the shifts that were actually inside the
              representation. Assumptions are the claims the simulation needs and does not prove:
              the distributions it was fed, the intervention it was told to apply, the mode it was
              told had failed, the documents the twin was allowed to read. Calibration is the
              recorded check that the representation has been compared with observed plant
              behavior, and the recorded gap where that comparison is missing. A simulation can
              inform a recommendation to investigate when those three are explicit. Without them,
              the run is a claim with the limit hidden. Hidden limits are how false clearance gets
              stored.
            </p>

            <p>
              Refusal is the recorded stop. The simulation refuses when coverage is insufficient,
              when assumptions are insufficient, or when calibration is insufficient. Refusal is
              not a failure of the tool. It is the honesty boundary on the output, and it is the
              verification boundary on what may be called proof. A run that cannot refuse will
              clear a case it should have left unknown. Unknown stays unknown. The operator must
              not treat a missing refusal as go. A calibrated twin is still a representation.
              Calibration against past observed outcomes does not convert a future run into proof
              that the asset, the plan, or the intervention will behave that way. Proof of that
              behavior still requires the observed outcome of that behavior.
            </p>

            <p>
              Planning is not proof. A recommendation to investigate asks a named person to go
              look, including to look at whether coverage, assumptions, and calibration can
              support the run. That request does not record the future as if it had already
              occurred. It is not authorization for corrective work. The meeting can note that a
              simulation was produced. Noting it records that a digital-twin run, a Monte Carlo
              fan, a what-if scenario, or a failure simulation was available. It does not record
              the plant, and it does not open the Decision Case. The observed outcome stays in the
              approved evidence a later reader can inspect, or it stays missing. The simulation
              stays a controlled representation with named limits, or it stays off the case as an
              unverified run. Treating the simulation as proof invents a plant the record does not
              hold. The room thinks the intervention will work. The evidence from the plant was
              never written. That skip is the failure this essay names.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Treating the simulation as proof is false clearance
            </h2>

            <p>
              False clearance is a record that says go, defer, or closed when the check is not on
              the case. The digital-twin run is favorable, so the room stores favorable as ready.
              The Monte Carlo fan is tight, so the band is stored as the outcome. The what-if
              scenario shows the plan succeeding, so the plan is stored as the work that will
              happen. The failure simulation shows a mode the room can name, so the name is stored
              as the cause. Each of those moves is false clearance. The case looks released. The
              plant was not the source of the release. The run was.
            </p>

            <p>
              False precision is the same failure in a finer unit. A remaining path printed to a
              day the evidence does not support, a fan printed as if the edges were measurements,
              a what-if printed as if the intervention had already been observed, a failure
              simulation that sounds specific about a mode nobody cited — those are false
              precision. Sync refuses false precision. This essay states no OEM limit, no
              remaining-life figure, no percentile, no probability, and no savings figure. A
              number the meeting wants so the simulation will look decisive is not a diagnosis,
              and this page does not publish one. The case holds the approved evidence that was
              stored, the coverage that was named, the assumptions that were named, the
              calibration that was named, the refusal conditions that were named, and what is
              still unknown. It does not hold a precision this essay made up.
            </p>

            <p>
              Evidence from the plant beats the simulation. When the run and the plant disagree,
              the case keeps the disagreement in view. It does not overwrite the plant with the
              digital-twin run, the Monte Carlo fan, the what-if scenario, or the failure
              simulation. It does not overwrite a missing plant record with a confident future.
              A simulation that cannot show its coverage, assumptions, and calibration — and that
              cannot refuse when any of those is insufficient — is not ready to sit beside the
              recommendation as if it were proof.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The simulation is not a diagnosis and not root cause
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect: what failed, on what
              evidence from the plant, and what is still missing. Root cause is a recorded causal
              check that names why, on that evidence, and leaves the remaining uncertainty in
              view. A digital-twin run names neither. A Monte Carlo fan names neither. A what-if
              scenario names neither. A failure simulation names neither, unless the run is a
              pointer to approved evidence that already names them — and then the evidence names
              them, not the simulation. The simulation is not a diagnosis. It is not root cause.
              It is not proof.
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
              cause. A failure simulation that labels the symptom as the future mode has not
              recorded the cause.{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>{' '}
              keeps a numeric threshold, a limit, an alarm band, or a set-point from being stored
              as a diagnosis. A limit the digital-twin run is shown crossing is still a limit.{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              keeps co-moving tags from being stored as a recorded causal check. A Monte Carlo fan
              drawn from co-moving inputs is still co-movement.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps a rising or falling line from being stored as a recorded check. A fan of
              futures built on that line is a simulation. It is not the truth of the asset, and it
              is not proof of a future plant state.{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>{' '}
              keeps chatter from being stored as an actionable signal. Simulating the chatter does
              not promote it.{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              keeps an unverified input from being stored as a recorded fact. The distributions
              inside the fan are assumptions until they are measurements.
            </p>

            <p>
              If the case cannot show the asset configuration, the failure and maintenance
              history, the coverage of the run, and the human judgment that connects the
              simulation to a mode, the run is a picture without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. A digital-twin run does not shorten it. A Monte Carlo
              fan does not shorten it. A what-if scenario does not shorten it. A failure
              simulation does not shorten it. The run can cite the trail. Citing is not the same
              as being the trail, and citing is not proof.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Coverage, assumptions, and calibration stay on the case
            </h2>

            <p>
              Coverage that is insufficient is a refusal condition. Assets that were not in the
              twin, sites that were not in the fan, failure modes that were not in the history,
              and shifts that were not in the scenario are plant the simulation does not hold.{' '}
              <Link
                href="/insights/sample-is-not-population"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Sample Is Not Population
              </Link>{' '}
              keeps a handful of observed cases from being stored as the fleet. A simulation fit
              to that handful is still a representation of the handful. The fan does not fill the
              gap by being confident about the rows it had. When coverage is insufficient, the
              run refuses. It does not become proof of the assets it did not include.
            </p>

            <p>
              Assumptions that are insufficient are a refusal condition. The inputs to a Monte
              Carlo fan are assumptions until they are measurements. The regime a digital-twin run
              expects is an assumption until the plant confirms it. The intervention a what-if
              scenario applies is an assumption until the intervention occurs and the outcome is
              observed. The mode a failure simulation stipulates is an assumption until the mode
              is on approved evidence. Naming the assumption keeps it in the assumption column.
              Hiding it inside the simulation stores it as proof.{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps a tight fan, or a sure voice, from being stored as a recorded check. A narrow
              band is still not observed outcomes.
            </p>

            <p>
              Calibration that is insufficient is a refusal condition. Calibration asks whether
              the representation has been compared with behavior the plant has already shown, and
              whether that comparison is on the case. A twin that has not been checked against
              observed outcomes is not ready to be stored as proof of a future the plant has not
              shown. A fan whose edges were never compared with what the asset did is false
              precision. A what-if whose controls were never seen in the plant is a stipulated
              story. A failure simulation whose mode was never confirmed is a labeled guess.
              Sufficient calibration still does not promote the future run into proof. It records
              that the representation was honest about the past it was checked against. The future
              behavior remains unproved until its own observed outcome is on the case.
            </p>

            <p>
              <Link
                href="/insights/anecdote-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Anecdote Is Not Evidence
              </Link>{' '}
              keeps a story from being stored as evidence. A failure simulation built to retell
              that story is still a controlled representation. It is not the observation the story
              was about, and it is not proof the mode will recur. The honesty/verification
              boundary is the same stop: if coverage, assumptions, or calibration cannot be shown,
              the simulation refuses, and the case stays unknown.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The simulation does not authorize corrective work
            </h2>

            <p>
              Authorization is the named act. A drafted next action is a proposal. Recommend is
              not authorize. A proposal that cites a digital-twin run, a Monte Carlo fan, a
              what-if scenario, or a failure simulation is still a proposal. A recommendation to
              investigate is still a proposal. The run can be smooth. The scenario can be fluent.
              Neither the smoothness nor the fluency accepts the operational consequence. The
              simulation is not authorization for corrective work.
            </p>

            <p>
              Corrective work is the change someone intends after a named decision: the repair,
              the deferral, the inspection, the isolation, the intervention the what-if was built
              to show. A favorable digital-twin run does not authorize deferral. A tight Monte
              Carlo fan does not authorize running on. A what-if scenario that shows the plan
              succeeding does not authorize the plan. A failure simulation does not authorize the
              work the mode was used to justify. Sync must not auto-authorize because the
              simulation showed a next step. Sync recommends. A named human decides. If the only
              support is the controlled representation, the proposal is not ready to be stored as
              authorized.
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
              Execution stays with authorized systems. A simulation, however precise, does not
              move execution onto Sync, and it does not replace the named decision that would
              have to come first.
            </p>

            <p>
              An alert the simulation ranked is still an alert.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keeps seeing, acknowledging, or silencing an alert from being stored as a decision.
              A dashboard of runs is still a display.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. A smooth digital-twin run does not put it back
              as authorization, verification of outcome, work-order execution, or plant control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Proof still requires an observed outcome
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do on
              the plant. The case stays open until that check is on the case. Verification stays
              open until a verified operational outcome is recorded. Proof is that observed
              outcome, not the run that said the outcome would occur. A later digital-twin run
              that says the asset will have recovered is a later controlled representation. It is
              not, by itself, the check. The Monte Carlo fan can look safer. The what-if scenario
              can be marked complete in the planning tool. The failure simulation can say the mode
              was avoided. The run does not record what the authorized change did.
            </p>

            <p>
              Proxy Is Not Outcome keeps the stand-in off the outcome. A simulation used as a
              stand-in is a stand-in. A fan that moved is a stand-in. Simulation clearance is not
              the check. Clearing the meeting because the twin looked favorable, the fan looked
              tight, or the scenario sounded finished must not be read as verification of outcome.
              Sync must not auto-close because the simulation was current. Sync must not treat
              simulation clearance as Learning credit. A closed run is not a closed case. The
              honesty boundary and the verification boundary are one stop here: a simulated result
              is not an observed outcome, and an observed outcome that was not recorded is not
              proof.
            </p>

            <p>
              Learning is what a later question is allowed to inherit. Learning Requires a
              Verified Outcome says the later question inherits that verified outcome, not a hope.
              Learning requires a verified outcome, not a hoped-for state from a digital-twin run,
              a Monte Carlo fan, a what-if scenario, or a failure simulation. What was believed
              may include a labeled note that a simulation was consulted and that its coverage,
              assumptions, and calibration were explicit, including the refusal when any of those
              was insufficient. Learning does not inherit the run as if the check had named the
              cause and confirmed the result on the plant. A later crew that applies the
              intervention because the what-if said so, without the verification on the prior
              case, is inheriting a controlled representation. That is the wrong lesson into
              Learning. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a simulation as a verified
              operational outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A simulation is not a Decision Case
            </h2>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that a digital-twin run, a
              Monte Carlo fan, a what-if scenario, or a failure simulation was opened does not
              record that question, and it does not record the decision. The case is the order:
              Question, Evidence, Recommendation, Human decision, then action, verification, and
              learning. A controlled representation of possible futures is not that order.
            </p>

            <p>
              Treating the simulation as proof shortcuts the Question → Evidence → Recommendation
              → Human Decision path. The run jumps to a conclusion. The evidence step is skipped,
              or it is filled with the simulation and called evidence from the plant. The
              recommendation is implied by the scenario or the fan. The human decision is treated
              as already made because the twin is favorable or the fan is tight. That shortcut is
              not a case. A named human records the Decision Case only against approved evidence.
              Until observed outcomes from the plant are on the case, and until coverage,
              assumptions, and calibration are explicit — with refusal when any of them is
              insufficient — the simulation remains a controlled representation.
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
              says until that act is recorded, the case is still a proposal. A simulation does not
              replace a named human decision. The digital-twin run does not sign accept. The Monte
              Carlo fan does not sign reject. The what-if scenario does not escalate. The failure
              simulation does not return the proposal. The run does not record who decided. The
              signed-in Decision Case keeps who decided visible beside the recommendation. The
              recorded act is mandatory.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync may surface a simulation when coverage, assumptions, and calibration are named
            </h2>

            <p>
              Sync may surface a simulation beside approved evidence, with the honesty boundary
              that the simulation is a controlled representation of possible futures and not proof
              the plant will behave that way. Surfacing means the digital-twin run, the Monte
              Carlo fan, the what-if scenario, or the failure simulation can sit beside a question
              so a person can see the coverage, the assumptions, the calibration, and the refusal
              conditions. The label is part of the surface. Without that label, the screen hides
              the limit and offers false precision. The honesty boundary is not optional. Sync may
              surface a simulation when coverage, assumptions, and calibration are named. It may
              not store the run as proof.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote a practice run into plant evidence, and it does not promote a practice
              run into proof. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live conclusion the edition does not hold. A
              digital-twin run fed by simulated or seeded telemetry is a practice representation.
              A Monte Carlo fan on assumed inputs is a practice spread. A what-if scenario on
              practice records is a practice plan. A failure simulation of a mode that was not
              observed is a practice mode. None of them is a live operational outcome, and none of
              them is a substitute for the approved evidence the operator still has to attach.
              Calling any of them proof crosses the honesty boundary.
            </p>

            <p>
              Sync must not auto-close, auto-authorize, or treat simulation clearance as Learning
              credit. Auto-close would store the run as a finished case. Auto-authorize would
              store the scenario or the fan as permission for corrective work. Learning credit
              would let a later case inherit the run. None of those acts is available to the
              system. A named human records the Decision Case only against approved evidence.
              Verification stays open until a verified operational outcome is recorded. Sync
              refuses false precision, including a figure, a percentile, or a probability this
              essay does not hold. Sync refuses when coverage, assumptions, or calibration are
              insufficient.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry is a practice record. A practice simulation is still a controlled
              representation of possible futures. It is not live plant evidence, it is not proof,
              and it is not a substitute for the check the operator still has to record. Sync
              refuses to treat a simulation as proof that an asset, a plan, or an intervention
              will behave that way in the plant.
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
              point from the digital-twin run, a band from the Monte Carlo fan, a planned quantity
              from the what-if scenario, or a mode from the failure simulation collects a
              representation. It does not collect the missing plant value. In Recovery, economic
              assumptions that were left blank stay blank. They are not inferred from a
              simulation. A blank verification field is not a verified outcome of none, and a run
              that shows no future deviation does not close it. Storing blank as zero invents
              false certainty and corrupts Recovery, verification, and Decision Case math.
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
              digital-twin run, a Monte Carlo fan, a what-if scenario, or a failure simulation
              does not change the state to clear, and it does not name root cause. Bad or
              not-ready evidence stays blocked. A simulation that looks related to the blocked
              item does not relabel blocked as ready. The operator must not treat unknown as go
              because the run was complete. Go would mean the evidence is sufficient for the next
              recorded step. A controlled representation is not sufficiency. Coverage, assumptions,
              or calibration that were not named are still unknown, and insufficient coverage,
              assumptions, or calibration are a refusal, not a clearance.
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
              is not approval. An empty inbox is not clearance. A quiet simulation is not
              controlled. A what-if scenario with no exception is not a decision. A failure
              simulation that does not mention a hold point does not write accept, reject,
              escalate, or return. It does not record a check that nobody performed. A favorable
              digital-twin run does not turn the missing response into the named decision. A
              simulation that stayed silent on its refusal conditions is still not clearance.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface a simulation. Sync may hold the digital-twin run, the Monte Carlo
              fan, the what-if scenario, or the failure simulation beside a recommendation to
              investigate, with the honesty boundary that the simulation is a controlled
              representation of possible futures and that coverage, assumptions, and calibration
              have to be explicit. That is a proposal. The person who can accept the operational
              consequence records the decision. Until that act is on the case, the case is still a
              proposal. The system does not auto-accept because the run looked finished. Sync
              recommends. A named human decides.
            </p>

            <p>
              Being sure the simulation matches the future asset is still not the match. A narrow
              Monte Carlo fan is still not a recorded check. A fluent what-if scenario is still
              not a recorded check. The edge of the fan is not evidence from the plant. The
              percentile on a forecast taken from the fan is not proof either. Forecast Is Not
              Fact keeps that point from being stored as a fact. This essay keeps the fan, the
              run, the scenario, and the failure simulation from being stored as proof.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of a simulation is not control of
              the plant. A Decision Case that records a simulation as a controlled representation
              does not put Sync in control of the work, the isolation, or the change. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. The simulation is not the check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The run is not the act.
            </p>

            <p className="text-xl font-semibold text-white">
              A digital-twin run, a Monte Carlo fan, a what-if scenario, or a failure simulation
              is a controlled representation of possible futures, not proof that an asset, a plan,
              or an intervention will behave that way in the plant. Proof still requires observed
              outcomes under the honesty boundary and the verification boundary. Sync refuses when
              coverage, assumptions, or calibration are insufficient. Treating the simulation as
              proof is false clearance. It is not a diagnosis, not root cause, not authorization
              for corrective work, not a verified operational outcome, and not a Decision Case.
              Evidence from the plant beats the simulation. Sync may surface a simulation when
              coverage, assumptions, and calibration are named. Sync refuses false precision. Sync
              must not auto-close, auto-authorize, or treat simulation clearance as Learning
              credit. A named human still decides. Verification stays open until a verified
              operational outcome is recorded. Execution stays with authorized systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes a digital-twin run, a Monte Carlo fan, a what-if scenario, or a
              failure simulation to proof of plant behavior or to a Decision Case.
            </p>

            <p>
              Forecast Is Not Fact is the forward-looking claim stored as a fact about the plant.
              A Monte Carlo percentile taken from this fan is that claim. The fan itself, stored
              as proof the plant will stay inside it, is the failure this essay names. Model Is
              Not Reality is the computed claim: a digital twin, a KPI model, a risk matrix, an
              RUL curve, a Monte Carlo run, or an LLM summary stored as the plant. This essay is
              the controlled execution of that representation through possible futures. A model
              that is not the plant does not become the plant when it is run forward, and the run
              does not become proof. Map Is Not Terrain is the picture. A diagram of a simulated
              future is still not the operating reality. Anecdote Is Not Evidence is the story. A
              failure simulation of a story is still not evidence. Sample Is Not Population is the
              handful stored as the fleet. A simulation of that handful is still not the
              population. Noise Is Not Signal is the chatter stored as an actionable signal.
              Symptom Is Not Cause is the observed symptom stored as the cause. Threshold Is Not
              Diagnosis is the line that was crossed, including a line a run says will be crossed.
              Assumption Is Not Evidence is the unverified input stored in place of a fact.
              Confidence Is Not Evidence is the tight fan stored in place of a check. Correlation
              Is Not Causation is the chart of co-movement. Trend Is Not Truth is the slope of
              what was observed. Extending the slope through a fan is a simulation, not proof.
              Proxy Is Not Outcome is the stand-in, including a run read as the result.
              Verification Is Not Optional is the check that still has to be written. Learning
              Requires a Verified Outcome is the lesson a later case may inherit, and that lesson
              is the observed outcome, not simulation clearance. A fluent scenario is still not
              evidence. A tight fan is still not a check. A successful what-if is still not the
              outcome. A later simulation does not close the case. The label stays. The evidence
              from the plant stays unwritten until it is on the case. The decision stays unwritten
              until a named person records it.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A simulation does not
              interpret them into clearance. On this record, blank is not zero, unknown is not
              clear, and silence is not the named decision. A case that is unknown, blank, or
              quiet is not made ready by a favorable digital-twin run, a tight Monte Carlo fan, a
              successful what-if scenario, or a finished failure simulation.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified operational outcome, not a hoped-for state from the
              simulation. The trail behind a recommendation is still evidence lineage. An alert is
              still not a decision. A dashboard is still not a decision, and it is still not the
              plant. Recommend is not authorize. Those records are either on the case or they are
              not. If they are not, a simulation does not supply them. Evidence from the plant
              beats the simulation. Proof still requires observed outcomes.
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
              simulation does not collapse that split into evidence from the plant. A proposal
              with no basis is not ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A simulation that says the work will already have recovered is not the
              check. Proof still requires the observed outcome on the case.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the digital-twin run,
              the Monte Carlo fan, the what-if scenario, or the failure simulation the last shift
              treated as the lesson.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a controlled representation as live evidence or as
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
              and supplies no remaining-life figure, no percentile, no probability, and no
              customer result. It does not claim that Sync executes plant work, writes a work
              order, isolates equipment, or controls a plant. It does not claim that a digital-twin
              run, a Monte Carlo fan, a what-if scenario, or a failure simulation is proof that an
              asset, a plan, or an intervention will behave that way in the plant, that a
              controlled representation is evidence from the plant, that a simulation is a
              diagnosis, that a run is root cause, that a scenario is authorization for corrective
              work, that a tight fan is a verified operational outcome, or that a simulation is a
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
              records. They are not live plant results, and a practice simulation is not proof of
              plant behavior. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/calibration-is-not-validation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Calibration Is Not Validation
              </Link>
              , on why tuning a model, a twin, a sensor, or a forecast so historical residuals
              look small is not validation that the representation is fit for the decision.
              Companion reading:{' '}
              <Link
                href="/insights/forecast-is-not-fact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Forecast Is Not Fact
              </Link>{' '}
              on why a forecast, a projection, an RUL estimate, a demand plan, a Monte Carlo
              percentile, or an LLM-generated outlook is a forward-looking compression and not a
              fact about the plant,{' '}
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
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded,{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              on why a later case inherits the verified outcome, not simulation clearance,{' '}
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
              on why an unverified run is not a recorded fact,{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              on why a tight fan or a high score is not a recorded check,{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              on why a slope is not a recorded check and a fan built on that slope is not proof,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a drafted next action, including a recommendation to investigate, is still a
              proposal,{' '}
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
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why work intent is not plant execution,{' '}
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
              simulation.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Simulation is not proof. A digital-twin run, a Monte Carlo fan, a what-if
                scenario, or a failure simulation is a controlled representation of possible
                futures, not proof that an asset, a plan, or an intervention will behave that way
                in the plant. Proof still requires observed outcomes. Sync refuses when coverage,
                assumptions, or calibration are insufficient. It can inform a recommendation to
                investigate. It is not a diagnosis, not root cause, not authorization for
                corrective work, not a verified operational outcome, and not a Decision Case.
                Treating the simulation as proof is false clearance. Evidence from the plant beats
                the simulation. Sync refuses false precision. Sync may surface a simulation when
                coverage, assumptions, and calibration are named. A named human still decides.
                Verification stays open until a verified operational outcome is recorded.
                Execution stays with authorized systems. The Reliability Engineer workspace is
                where a signed-in Decision Case is completed. A Reliability Assessment is the
                bounded review when the question is whether the records can support a conclusion.
                None of those is a claim that Sync executes plant work, or that self-guided
                onboarding is a live product path.
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
          <InsightNextSteps slug="simulation-is-not-proof" />
        </motion.article>
      </div>
    </main>
  );
}
