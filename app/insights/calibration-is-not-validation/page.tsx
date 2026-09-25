'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('calibration-is-not-validation');

export default function CalibrationIsNotValidationPage() {
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
              Calibration Is Not Validation
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Calibration is not validation. Calibration tunes a model, a twin, a sensor, or a
              forecast so historical residuals look small. Validation confirms the representation
              is fit for the decision under the honesty boundary and the verification boundary. A
              well-calibrated simulation, RUL curve, or digital twin can still be wrong for the
              plant decision at hand. Validation still requires observed outcomes, named coverage
              and assumptions, and refusal when evidence is insufficient. Treating calibration as
              validation is another path to false clearance. A calibration can inform a
              recommendation to investigate. It is not the plant, not a diagnosis, not root cause,
              not authorization for corrective work, not a verified operational outcome, and not a
              Decision Case. Evidence from the plant beats the calibration. Sync may surface a
              calibration beside approved evidence when coverage and assumptions are named. Sync
              refuses false precision. A named human still decides.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case and in Recovery, calibration tunes a model, a twin, a sensor, or a
              forecast so historical residuals look small. Validation confirms that representation
              is fit for the decision under the honesty boundary and the verification boundary.
              Those are different records. A well-calibrated simulation, RUL curve, or digital twin
              can still be wrong for the plant decision at hand. Calibration is not validation. It
              is not a diagnosis. It is not root cause. It is not authorization for corrective
              work. It is not a verified operational outcome. It is not a Decision Case. Treating
              calibration as validation is false clearance. Verification stays open until a
              verified operational outcome is recorded from the plant, not from a small residual.
              Validation still requires observed outcomes, named coverage and assumptions, and
              refusal when evidence is insufficient.
            </p>

            <p>
              In this essay, calibration names those four records and no figure of speech. A model
              is tuned so the difference between what it printed and what history already showed
              looks small. A twin — a digital twin — is tuned the same way against history the
              twin was allowed to see. A sensor is tuned so its reading sits close to a reference
              the history already held. A forecast is tuned so the outlook sits close to outcomes
              that have already occurred. The historical residual is that difference. Making it
              look small is calibration. Validation names a different question: whether that
              representation is fit for the decision now in front of a named person, under the
              honesty boundary and the verification boundary. Fitness is not a small residual.
              Fitness is observed outcomes for the decision at hand, coverage and assumptions
              named on the case, and refusal when evidence is insufficient. Treating the small
              residual as that fitness stores calibration as validation.
            </p>

            <p>
              The meeting puts the residual on the screen. The model was tuned until history looks
              close. The digital twin was tuned until the overlay looks close. The sensor was
              tuned until the reference looks close. The forecast was tuned until the past outlook
              looks close. Someone says the representation is validated, and the room treats the
              small historical residual as confirmation that the representation is fit for the
              plant decision at hand. A well-calibrated simulation is treated as proof of the next
              run. A well-calibrated RUL curve is treated as the life the asset still has. A
              well-calibrated digital twin is treated as the plant. Nobody wrote the coverage.
              Nobody named the assumptions. Nobody stated the refusal when evidence is
              insufficient. Nobody attached the observed outcome of the decision the room is about
              to make. Nobody wrote accept, reject, escalate, or return. The Decision Case still
              has to show the question, the evidence, the recommendation, the named human
              decision, and the check. A calibration is not that record, and it is not validation.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/simulation-is-not-proof"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Simulation Is Not Proof
              </Link>{' '}
              and stands beside{' '}
              <Link
                href="/insights/forecast-is-not-fact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Forecast Is Not Fact
              </Link>
              ,{' '}
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
              . Simulation keeps a controlled representation of possible futures — a digital-twin
              run, a Monte Carlo fan, a what-if scenario, a failure simulation — from being stored
              as proof the plant will behave that way. This essay keeps the tuning that makes
              historical residuals look small — the model, the twin, the sensor, the forecast —
              from being stored as validation that the representation is fit for the decision. A
              simulation that was calibrated against history is still not proof, and the
              calibration is still not validation. Forecast keeps a forward-looking compression
              from being stored as a fact about the plant. Tuning that forecast until past
              residuals look small does not make the outlook a fact, and it does not validate it
              for the decision. Model keeps the compressed representation from being stored as the
              plant. A model that is not the plant does not become the plant when its residuals
              look small. Map keeps a diagram of that fit from being stored as the operating
              reality. Verification keeps the case open until the observed outcome is on the case.
              Learning keeps a later question from inheriting calibration clearance. Proxy keeps a
              small residual used as a stand-in from being stored as the verified operational
              outcome. Recommend keeps a drafted next action, including a recommendation to
              investigate, from being stored as authorization. A small historical residual is still
              not validation.
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
              missing. A model, a twin, a sensor, or a forecast tuned so historical residuals look
              small is not a fourth column that records the plant, names the failure mode,
              authorizes the work, or closes the case. A proposal whose only basis is the
              calibration has no observed outcome of the decision a later reader can inspect. A
              proposal with no named human decision is not a Decision Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a calibration as approved evidence from the plant or as live plant
              control. Sync refuses false precision. A residual the tuning printed is not
              validation the edition did not hold.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Calibration tunes history so residuals look small
            </h2>

            <p>
              Calibration keeps the history it was tuned against and drops the decision that
              history has not yet met. The model keeps the residuals it was told to shrink and
              drops the operating regime the history did not contain. The twin keeps the overlay
              it was fitted to and drops the plant the twin was not built to hold. The sensor
              keeps the reference it was brought close to and drops the condition the reference
              never saw. The forecast keeps the past outlook it was pulled toward and drops the
              future the outlook has not met. Tuning is not a fault in the tool. It is the limit
              of the record. The limit does not become validation because the residual looks
              finished.
            </p>

            <p>
              A historical residual is a comparison with behavior the plant has already shown, or
              with a reference the history already held. It is not a comparison with the decision
              the room is about to make. The decision may sit in a different regime, on a
              different asset, under a different question, or after an intervention the history
              did not include. A well-calibrated simulation can still be wrong for that decision.
              A well-calibrated RUL curve can still be wrong for that decision. A well-calibrated
              digital twin can still be wrong for that decision. Small residuals on the history
              do not answer whether the representation is fit for the decision. That answer is
              validation, and validation is a different record.
            </p>

            <p>
              Coverage is the plant the calibration claims to have been checked against: the
              assets, the sites, the failure modes, the operating regimes, and the shifts that
              were actually inside the history. Assumptions are the claims the tuning needs and
              does not prove: which history was allowed in, which points were left out, which
              reference the sensor was brought toward, which loss the model was told to shrink,
              which horizon the forecast was scored on. Naming coverage and naming assumptions
              keeps the limit on the case. A calibration can inform a recommendation to
              investigate when those are explicit, and when the case can still refuse if evidence
              is insufficient. Without them, the small residual is a claim with the limit hidden.
              Hidden limits are how false clearance gets stored.
            </p>

            <p>
              Refusal is the recorded stop. Validation refuses when evidence is insufficient. That
              includes coverage that was not named, assumptions that were not named, and observed
              outcomes of the decision that are not on the case. Refusal is not a failure of the
              tuning. It is the honesty boundary on what may be called fit, and it is the
              verification boundary on what may be called validated. A residual that cannot refuse
              will clear a case it should have left unknown. Unknown stays unknown. The operator
              must not treat a missing refusal as go. A model, a twin, a sensor, or a forecast
              with small historical residuals is still a tuned representation. Calibration against
              past observed outcomes does not convert that representation into validation that it
              is fit for the decision at hand.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Treating calibration as validation is false clearance
            </h2>

            <p>
              False clearance is a record that says go, defer, or closed when the check is not on
              the case. The model residual is small, so the room stores small as ready. The twin
              overlay is close, so the overlay is stored as the plant. The sensor sits on the
              reference, so the reference is stored as the asset state. The forecast matches the
              recent past, so the outlook is stored as the decision. A well-calibrated simulation
              is stored as proof of the next run. A well-calibrated RUL curve is stored as the
              life that remains. A well-calibrated digital twin is stored as the asset. Each of
              those moves is false clearance. Treating calibration as validation is another path
              to false clearance. The case looks released. The plant decision was not the source
              of the release. The residual was.
            </p>

            <p>
              False precision is the same failure in a finer unit. A residual printed to a unit
              the evidence does not support, an RUL curve printed as if the remaining life were a
              measurement, a twin overlay printed as if every regime had been observed, a sensor
              offset printed as if the reference were the failure mode — those are false
              precision. Sync refuses false precision. This essay states no OEM limit, no
              remaining-life figure, no residual tolerance, no percentile, no probability, and no
              savings figure. A number the meeting wants so the calibration will look decisive is
              not a diagnosis, and this page does not publish one. The case holds the approved
              evidence that was stored, the coverage that was named, the assumptions that were
              named, the refusal when evidence is insufficient, and what is still unknown. It does
              not hold a precision this essay made up.
            </p>

            <p>
              Evidence from the plant beats the calibration. When the tuned representation and the
              plant disagree, the case keeps the disagreement in view. It does not overwrite the
              plant with the model, the twin, the sensor, or the forecast. It does not overwrite a
              missing plant record with a small historical residual. A calibration that cannot
              show its coverage and assumptions — and that cannot refuse when evidence is
              insufficient — is not ready to sit beside the recommendation as if it were
              validation. A well-calibrated simulation, RUL curve, or digital twin that cannot
              show those limits is still wrong for the decision until the observed outcome of that
              decision is on the case.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Calibration is not a diagnosis and not root cause
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect: what failed, on what
              evidence from the plant, and what is still missing. Root cause is a recorded causal
              check that names why, on that evidence, and leaves the remaining uncertainty in
              view. A model tuned so historical residuals look small names neither. A twin names
              neither. A sensor names neither. A forecast names neither. A well-calibrated
              simulation, RUL curve, or digital twin names neither, unless the fit is a pointer to
              approved evidence that already names them — and then the evidence names them, not
              the calibration. The calibration is not a diagnosis. It is not root cause. It is not
              validation.
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
              cause. A sensor tuned until that symptom sits close to a reference has not recorded
              the cause.{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>{' '}
              keeps a numeric threshold, a limit, an alarm band, or a set-point from being stored
              as a diagnosis. A limit a calibrated model is shown sitting inside is still a limit.{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              keeps co-moving tags from being stored as a recorded causal check. A residual shrunk
              across co-moving inputs is still co-movement.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps a rising or falling line from being stored as a recorded check. An RUL curve
              fitted to that line is a calibration. It is not the truth of the asset, and it is
              not validation that the curve is fit for the decision.{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>{' '}
              keeps chatter from being stored as an actionable signal. Tuning the chatter until
              residuals look small does not promote it.{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              keeps an unverified input from being stored as a recorded fact. The history the
              residual was scored on is an assumption until the coverage is named and the
              comparison is a measurement.
            </p>

            <p>
              If the case cannot show the asset configuration, the failure and maintenance
              history, the coverage of the calibration, and the human judgment that connects the
              fit to a mode, the residual is a picture without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. A model does not shorten it. A twin does not shorten
              it. A sensor does not shorten it. A forecast does not shorten it. The calibration
              can cite the trail. Citing is not the same as being the trail, and citing is not
              validation.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Named coverage, named assumptions, and refusal stay on the case
            </h2>

            <p>
              Coverage that is not named is a refusal condition. Assets that were not in the
              history, sites that were not in the twin, failure modes that were not in the
              reference, and shifts that were not in the forecast score are plant the calibration
              does not hold.{' '}
              <Link
                href="/insights/sample-is-not-population"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Sample Is Not Population
              </Link>{' '}
              keeps a handful of observed cases from being stored as the fleet. A calibration fit
              to that handful is still a fit to the handful. The residual does not fill the gap
              by looking small on the rows it had. When coverage is insufficient, validation
              refuses. It does not become fitness for the assets the history did not include.
            </p>

            <p>
              Assumptions that are not named are a refusal condition. Which points were dropped,
              which reference the sensor was pulled toward, which loss the model was told to
              shrink, and which horizon the forecast was scored on are assumptions until they are
              written on the case. The regime a digital twin expects is an assumption until the
              plant confirms it. The intervention a well-calibrated simulation was tuned beside is
              an assumption until the intervention occurs and the outcome is observed. Naming the
              assumption keeps it in the assumption column. Hiding it inside the residual stores
              it as validation.{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps a small residual, or a sure voice, from being stored as a recorded check. A
              tight historical fit is still not observed outcomes of the decision at hand.
            </p>

            <p>
              <Link
                href="/insights/anecdote-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Anecdote Is Not Evidence
              </Link>{' '}
              keeps a story from being stored as evidence. A model tuned to retell that story, or
              a twin fitted to a hallway claim, is still a calibration. It is not the observation
              the story was about, and it is not validation that the representation is fit for the
              decision. The honesty boundary and the verification boundary are the same stop: if
              coverage and assumptions cannot be shown, or if the observed outcome of the decision
              is not on the case, the representation refuses, and the case stays unknown. Refusal
              when evidence is insufficient is part of validation. A calibration that cannot
              refuse is not validation.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Calibration does not authorize corrective work
            </h2>

            <p>
              Authorization is the named act. A drafted next action is a proposal. Recommend is
              not authorize. A proposal that cites a model, a twin, a sensor, or a forecast with
              small historical residuals is still a proposal. A recommendation to investigate is
              still a proposal. The residual can be small. The RUL curve can be smooth. The
              digital twin can be fluent. Neither the smallness nor the fluency accepts the
              operational consequence. The calibration is not authorization for corrective work.
            </p>

            <p>
              Corrective work is the change someone intends after a named decision: the repair,
              the deferral, the inspection, the isolation, the intervention a well-calibrated
              simulation was tuned to favor. A small model residual does not authorize deferral. A
              close twin overlay does not authorize running on. A sensor on its reference does not
              authorize skipping the inspection. A forecast that matches the recent past does not
              authorize the plan. Sync must not auto-authorize because the historical residuals
              looked small. Sync recommends. A named human decides. If the only support is the
              calibration, the proposal is not ready to be stored as authorized.
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
              Execution stays with authorized systems. A calibration, however small the residual,
              does not move execution onto Sync, and it does not replace the named decision that
              would have to come first.
            </p>

            <p>
              An alert the calibration ranked is still an alert.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keeps seeing, acknowledging, or silencing an alert from being stored as a decision.
              A dashboard of residuals is still a display.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. A well-calibrated digital twin does not put it
              back as authorization, verification of outcome, work-order execution, or plant
              control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Validation still requires an observed outcome
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do on
              the plant. The case stays open until that check is on the case. Verification stays
              open until a verified operational outcome is recorded. Validation of the
              representation, for the decision at hand, still requires that observed outcome. It
              also requires named coverage and named assumptions, and refusal when evidence is
              insufficient. A later residual that says the model still fits history is a later
              calibration. It is not, by itself, the check. The RUL curve can look settled. The
              digital twin can be marked current in the planning tool. The sensor can sit on its
              reference. The fit does not record what the authorized change did, and it does not
              record that the representation was fit for this decision.
            </p>

            <p>
              Proxy Is Not Outcome keeps the stand-in off the outcome. A calibration used as a
              stand-in is a stand-in. A residual that shrank is a stand-in. Calibration clearance
              is not the check. Clearing the meeting because the residuals looked small, the twin
              looked close, or the RUL curve sounded finished must not be read as verification of
              outcome. Sync must not auto-close because the calibration was current. Sync must not
              treat calibration clearance as Learning credit. A closed tuning job is not a closed
              case. The honesty boundary and the verification boundary are one stop here: a small
              historical residual is not an observed outcome of the decision, and an observed
              outcome that was not recorded is not validation.
            </p>

            <p>
              Learning is what a later question is allowed to inherit. Learning Requires a
              Verified Outcome says the later question inherits that verified outcome, not a hope.
              Learning requires a verified outcome, not a hoped-for fitness from a model, a twin, a
              sensor, or a forecast whose historical residuals looked small. What was believed may
              include a labeled note that a calibration was consulted and that its coverage and
              assumptions were explicit, including the refusal when evidence was insufficient.
              Learning does not inherit the residual as if the check had named the cause and
              confirmed the result on the plant. A later crew that applies the intervention
              because the well-calibrated simulation said so, without the verification on the
              prior case, is inheriting a tuning. That is the wrong lesson into Learning. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a calibration as a verified
              operational outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A calibration is not a Decision Case
            </h2>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that a model, a twin, a
              sensor, or a forecast was tuned does not record that question, and it does not
              record the decision. The case is the order: Question, Evidence, Recommendation,
              Human decision, then action, verification, and learning. A tuning that makes
              historical residuals look small is not that order.
            </p>

            <p>
              Treating calibration as validation shortcuts the Question → Evidence → Recommendation
              → Human Decision path. The residual jumps to a conclusion. The evidence step is
              skipped, or it is filled with the calibration and called evidence from the plant.
              The recommendation is implied by the small residual, the RUL curve, or the digital
              twin. The human decision is treated as already made because the fit looks finished.
              That shortcut is not a case. A named human records the Decision Case only against
              approved evidence. Until observed outcomes from the plant are on the case, and until
              coverage and assumptions are named — with refusal when evidence is insufficient —
              the calibration remains a tuning. It is not validation that the representation is
              fit for the decision.
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
              says until that act is recorded, the case is still a proposal. A calibration does
              not replace a named human decision. The model does not sign accept. The twin does
              not sign reject. The sensor does not escalate. The forecast does not return the
              proposal. The residual does not record who decided. The signed-in Decision Case
              keeps who decided visible beside the recommendation. The recorded act is mandatory.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync may surface a calibration when coverage and assumptions are named
            </h2>

            <p>
              Sync may surface a calibration beside approved evidence, with the honesty boundary
              that the calibration tunes a model, a twin, a sensor, or a forecast so historical
              residuals look small, and that the tuning is not validation the representation is
              fit for the decision. Surfacing means the residual can sit beside a question so a
              person can see the coverage, the assumptions, and the refusal when evidence is
              insufficient. The label is part of the surface. Without that label, the screen hides
              the limit and offers false precision. The honesty boundary is not optional. Sync may
              surface a calibration when coverage and assumptions are named. It may not store the
              residual as validation.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote a practice fit into plant evidence, and it does not promote a practice
              fit into validation. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live conclusion the edition does not hold. A
              model tuned on simulated or seeded history is a practice fit. A digital twin fitted
              to practice records is a practice overlay. A sensor brought toward a practice
              reference is a practice offset. A forecast scored on practice outcomes is a practice
              outlook. None of them is a live operational outcome, and none of them is a
              substitute for the approved evidence the operator still has to attach. Calling any
              of them validation crosses the honesty boundary.
            </p>

            <p>
              Sync must not auto-close, auto-authorize, or treat calibration clearance as Learning
              credit. Auto-close would store the residual as a finished case. Auto-authorize would
              store the fit as permission for corrective work. Learning credit would let a later
              case inherit the tuning. None of those acts is available to the system. A named
              human records the Decision Case only against approved evidence. Verification stays
              open until a verified operational outcome is recorded. Sync refuses false precision,
              including a residual tolerance, an RUL figure, or a probability this essay does not
              hold. Sync refuses when evidence is insufficient.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry is a practice record. A practice calibration is still a tuning of
              historical residuals. It is not live plant evidence, it is not validation, and it is
              not a substitute for the check the operator still has to record. Sync refuses to
              treat calibration as validation that a model, a twin, a sensor, or a forecast is fit
              for the plant decision at hand.
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
              residual from the model, an overlay from the twin, a reference from the sensor, or
              an outlook from the forecast collects a tuning. It does not collect the missing
              plant value. In Recovery, economic assumptions that were left blank stay blank. They
              are not inferred from a calibration. A blank verification field is not a verified
              outcome of none, and a residual that shows no historical deviation does not close
              it. Storing blank as zero invents false certainty and corrupts Recovery,
              verification, and Decision Case math.
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
              in Recovery, missing evidence stays unknown. Filling the unknown line with a model,
              a twin, a sensor, or a forecast does not change the state to clear, and it does not
              name root cause. Bad or not-ready evidence stays blocked. A calibration that looks
              related to the blocked item does not relabel blocked as ready. The operator must not
              treat unknown as go because the residuals were small. Go would mean the evidence is
              sufficient for the next recorded step. A small historical residual is not
              sufficiency. Coverage or assumptions that were not named are still unknown, and
              insufficient evidence is a refusal, not a clearance.
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
              is not approval. An empty inbox is not clearance. A quiet calibration is not
              controlled. A residual with no exception is not a decision. A twin that does not
              mention a hold point does not write accept, reject, escalate, or return. It does not
              record a check that nobody performed. A small model residual does not turn the
              missing response into the named decision. A calibration that stayed silent on its
              refusal when evidence is insufficient is still not clearance.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface a calibration. Sync may hold the model, the twin, the sensor, or
              the forecast beside a recommendation to investigate, with the honesty boundary that
              the calibration makes historical residuals look small and that coverage and
              assumptions have to be explicit. That is a proposal. The person who can accept the
              operational consequence records the decision. Until that act is on the case, the
              case is still a proposal. The system does not auto-accept because the residual
              looked finished. Sync recommends. A named human decides.
            </p>

            <p>
              Being sure the calibration matches the asset is still not the match. A small
              historical residual is still not a recorded check. A smooth RUL curve is still not a
              recorded check. The edge of the fit is not evidence from the plant. A well-calibrated
              simulation taken from that fit is not proof either. Simulation Is Not Proof keeps
              that run from being stored as proof. This essay keeps the tuning — the model, the
              twin, the sensor, the forecast — from being stored as validation.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of a calibration is not control of
              the plant. A Decision Case that records a calibration as a tuning of historical
              residuals does not put Sync in control of the work, the isolation, or the change.
              The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. The calibration is not the check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The residual is not the act.
            </p>

            <p className="text-xl font-semibold text-white">
              Calibration tunes a model, a twin, a sensor, or a forecast so historical residuals
              look small. Validation confirms the representation is fit for the decision under the
              honesty boundary and the verification boundary. A well-calibrated simulation, RUL
              curve, or digital twin can still be wrong for the plant decision at hand. Validation
              still requires observed outcomes, named coverage and assumptions, and refusal when
              evidence is insufficient. Treating calibration as validation is false clearance. It
              is not a diagnosis, not root cause, not authorization for corrective work, not a
              verified operational outcome, and not a Decision Case. Evidence from the plant beats
              the calibration. Sync may surface a calibration when coverage and assumptions are
              named. Sync refuses false precision. Sync must not auto-close, auto-authorize, or
              treat calibration clearance as Learning credit. A named human still decides.
              Verification stays open until a verified operational outcome is recorded. Execution
              stays with authorized systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes a model, a twin, a sensor, or a forecast with small historical
              residuals to validation of fitness for the decision, or to a Decision Case.
            </p>

            <p>
              Simulation Is Not Proof is the controlled run stored as proof the plant will behave
              that way. A well-calibrated simulation is still that run. The tuning that made its
              historical residuals look small, stored as validation, is the failure this essay
              names. Forecast Is Not Fact is the forward-looking claim stored as a fact about the
              plant. Tuning the forecast until past residuals look small does not make the outlook
              a fact, and it does not validate it for the decision. Model Is Not Reality is the
              computed claim: a digital twin, a KPI model, a risk matrix, an RUL curve, a Monte
              Carlo run, or an LLM summary stored as the plant. This essay is the tuning of that
              representation against history. A model that is not the plant does not become the
              plant when residuals look small, and the fit does not become validation. Map Is Not
              Terrain is the picture. A diagram of a close overlay is still not the operating
              reality. Anecdote Is Not Evidence is the story. A fit built to retell a story is
              still not evidence. Sample Is Not Population is the handful stored as the fleet. A
              calibration of that handful is still not the population. Noise Is Not Signal is the
              chatter stored as an actionable signal. Symptom Is Not Cause is the observed symptom
              stored as the cause. Threshold Is Not Diagnosis is the line that was crossed,
              including a band a calibrated model sits inside. Assumption Is Not Evidence is the
              unverified input stored in place of a fact. Confidence Is Not Evidence is the small
              residual stored in place of a check. Correlation Is Not Causation is the chart of
              co-movement. Trend Is Not Truth is the slope of what was observed. Fitting the slope
              until residuals look small is a calibration, not validation. Proxy Is Not Outcome is
              the stand-in, including a residual read as the result. Verification Is Not Optional
              is the check that still has to be written. Learning Requires a Verified Outcome is
              the lesson a later case may inherit, and that lesson is the observed outcome, not
              calibration clearance. A small residual is still not evidence. A close twin is still
              not a check. A smooth RUL curve is still not the outcome. A later calibration does
              not close the case. The label stays. The evidence from the plant stays unwritten
              until it is on the case. The decision stays unwritten until a named person records
              it.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A calibration does not
              interpret them into clearance. On this record, blank is not zero, unknown is not
              clear, and silence is not the named decision. A case that is unknown, blank, or
              quiet is not made ready by a small model residual, a close digital twin, a sensor on
              its reference, or a forecast that matches the recent past.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified operational outcome, not a hoped-for fitness from the
              calibration. The trail behind a recommendation is still evidence lineage. An alert is
              still not a decision. A dashboard is still not a decision, and it is still not the
              plant. Recommend is not authorize. Those records are either on the case or they are
              not. If they are not, a calibration does not supply them. Evidence from the plant
              beats the calibration. Validation still requires observed outcomes.
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
              calibration does not collapse that split into evidence from the plant. A proposal
              with no basis is not ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A calibration that says the representation is already fit is not the
              check. Validation still requires the observed outcome on the case.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the model, the twin, the
              sensor, or the forecast the last shift treated as the lesson.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a tuned residual as live evidence or as plant
              control, and they keep the edition from printing false precision. Later editions can
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
              states no savings figure, and claims no prevented failure. It states no OEM limit
              and supplies no remaining-life figure, no residual tolerance, no percentile, no
              probability, and no customer result. It does not claim that Sync executes plant
              work, writes a work order, isolates equipment, or controls a plant. It does not
              claim that a model, a twin, a sensor, or a forecast tuned so historical residuals
              look small is validation that the representation is fit for the decision, that a
              well-calibrated simulation, RUL curve, or digital twin is evidence from the plant,
              that a calibration is a diagnosis, that a residual is root cause, that a fit is
              authorization for corrective work, that a small residual is a verified operational
              outcome, or that a calibration is a Decision Case. It does not claim that
              self-guided onboarding is a live product path.
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
              records. They are not live plant results, and a practice calibration is not
              validation of fitness for a plant decision. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/accuracy-is-not-precision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accuracy Is Not Precision
              </Link>
              , on why repeatability — tight residuals, fine resolution, and stable decimals — is
              not truth relative to the plant decision and observed outcomes.
              Companion reading:{' '}
              <Link
                href="/insights/simulation-is-not-proof"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Simulation Is Not Proof
              </Link>{' '}
              on why a digital-twin run, a Monte Carlo fan, a what-if scenario, or a failure
              simulation is a controlled representation of possible futures and not proof the
              plant will behave that way,{' '}
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
              on why a later case inherits the verified outcome, not calibration clearance,{' '}
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
              on why an unverified fit is not a recorded fact,{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              on why a small residual or a high score is not a recorded check,{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              on why a slope is not a recorded check and an RUL curve fitted to that slope is not
              validation,{' '}
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
              calibration.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Calibration is not validation. A model, a twin, a sensor, or a forecast tuned so
                historical residuals look small is not confirmation that the representation is fit
                for the decision. A well-calibrated simulation, RUL curve, or digital twin can
                still be wrong for the plant decision at hand. Validation still requires observed
                outcomes, named coverage and assumptions, and refusal when evidence is
                insufficient. It can inform a recommendation to investigate. It is not a diagnosis,
                not root cause, not authorization for corrective work, not a verified operational
                outcome, and not a Decision Case. Treating calibration as validation is false
                clearance. Evidence from the plant beats the calibration. Sync refuses false
                precision. Sync may surface a calibration when coverage and assumptions are named.
                A named human still decides. Verification stays open until a verified operational
                outcome is recorded. Execution stays with authorized systems. The Reliability
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
          <InsightNextSteps slug="calibration-is-not-validation" />
        </motion.article>
      </div>
    </main>
  );
}
