'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('accuracy-is-not-precision');

export default function AccuracyIsNotPrecisionPage() {
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
              Accuracy Is Not Precision
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Accuracy is not precision. Precision is repeatability: tight residuals, fine
              resolution, and stable decimals. Accuracy is truth relative to the plant decision
              and observed outcomes. A precise RUL, vibration feature, digital-twin residual, or
              forecast can still be wrong for the decision at hand. Treating precision as accuracy
              is another path to false clearance under the honesty boundary and the verification
              boundary. A precise reading can inform a recommendation to investigate. It is not
              the plant, not a diagnosis, not root cause, not authorization for corrective work,
              not a verified operational outcome, and not a Decision Case. Evidence from the plant
              beats the precise reading. Sync may surface a precise reading beside approved
              evidence when the limit of that precision is named. Sync refuses false precision.
              Sync refuses to store precision as accuracy. A named human still decides.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case and in Recovery, precision is repeatability. The same RUL prints
              again. The same vibration feature repeats. The same digital-twin residual stays
              tight. The same forecast keeps its decimals. Accuracy is a different question: is
              that number true relative to the plant decision and relative to the observed
              outcomes of that decision. A precise RUL, vibration feature, digital-twin residual,
              or forecast can still be wrong for the decision at hand. Accuracy is not precision.
              It is not a diagnosis. It is not root cause. It is not authorization for corrective
              work. It is not a verified operational outcome. It is not a Decision Case. Treating
              precision as accuracy is false clearance. Verification stays open until a verified
              operational outcome is recorded from the plant, not from a stable decimal.
            </p>

            <p>
              In this essay, precision names repeatability and no figure of speech. Tight
              residuals means the difference between what the representation printed and what it
              printed again stays small. Fine resolution means the number is drawn in a small
              unit. Stable decimals means the printed places do not wander when the same question
              is asked again. Those three are precision. Accuracy names whether the number is true
              for the decision a named person is about to make, checked against observed outcomes
              from the plant. Repeatability is not that truth. A number can repeat, sit on a fine
              unit, and hold its decimals, and still be the wrong answer for run, defer, inspect,
              or repair. Treating the repeatable number as that truth stores precision as
              accuracy.
            </p>

            <p>
              The meeting puts the number on the screen. The RUL prints to a fine resolution and
              prints the same way when the calculation is run again. The vibration feature sits
              on stable decimals. The digital-twin residual is tight. The forecast does not move
              its places. Someone says the number is accurate, and the room treats the
              repeatability as truth relative to the plant decision. A precise RUL is treated as
              the life the asset still has. A precise vibration feature is treated as the failure
              mode. A precise digital-twin residual is treated as the plant. A precise forecast is
              treated as the outcome that will occur. Nobody wrote whether the number is true for
              this decision. Nobody attached the observed outcome. Nobody wrote accept, reject,
              escalate, or return. The Decision Case still has to show the question, the evidence,
              the recommendation, the named human decision, and the check. A precise reading is
              not that record, and it is not accuracy.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/calibration-is-not-validation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Calibration Is Not Validation
              </Link>{' '}
              and stands beside{' '}
              <Link
                href="/insights/simulation-is-not-proof"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Simulation Is Not Proof
              </Link>
              ,{' '}
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
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>
              , and{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>
              . Calibration keeps the tuning that makes historical residuals look small from being
              stored as validation that the representation is fit for the decision. This essay
              keeps the property of the number that comes out — tight residuals, fine resolution,
              stable decimals — from being stored as accuracy. A well-calibrated reading can still
              be precise and wrong. A precise reading can exist without that tuning, and it is
              still not accuracy. Simulation keeps a controlled representation of possible futures
              from being stored as proof the plant will behave that way. A precise run of that
              representation is still not proof, and the precision is still not accuracy. Forecast
              keeps a forward-looking compression from being stored as a fact about the plant.
              Stable decimals on the outlook do not make it a fact, and they do not make it
              accurate for the decision. Model keeps the compressed representation from being
              stored as the plant. A model that is not the plant does not become the plant when
              its output repeats. Verification keeps the case open until the observed outcome is
              on the case. Learning keeps a later question from inheriting precision clearance. A
              tight residual is still not accuracy.
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
              missing. A precise RUL, vibration feature, digital-twin residual, or forecast is not
              a fourth column that records the plant, names the failure mode, authorizes the work,
              or closes the case. A proposal whose only basis is the precision has no observed
              outcome of the decision a later reader can inspect. A proposal with no named human
              decision is not a Decision Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a precise reading as approved evidence from the plant or as live
              plant control. Sync refuses false precision. A decimal the reading printed is not
              accuracy the edition did not hold.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Precision is repeatability
            </h2>

            <p>
              Precision keeps the agreement of the number with itself and drops the agreement of
              the number with the plant decision. The RUL keeps the places it was allowed to print
              and drops whether that life is the life the decision needs. The vibration feature
              keeps the repeat of the feature and drops whether the feature is the mode. The
              digital-twin residual keeps the tightness of the residual and drops whether the
              residual is true for this asset, this regime, and this question. The forecast keeps
              the stable decimals and drops the outcome the outlook has not met. Repeatability is
              not a fault in the instrument. It is the limit of what precision records. The limit
              does not become accuracy because the decimals look finished.
            </p>

            <p>
              Tight residuals are a comparison of the representation with itself, or with a
              history it was already close to. They are not a comparison with the decision the
              room is about to make. Fine resolution is the size of the unit on the page. It is
              not the size of the truth. Stable decimals are the places that do not move when the
              same calculation is asked again. They are not a record that the calculation is true
              relative to the plant. The decision may sit in a different regime, on a different
              asset, under a different question, or after an intervention the number did not
              include. A precise RUL can still be wrong for that decision. A precise vibration
              feature can still be wrong for that decision. A precise digital-twin residual can
              still be wrong for that decision. A precise forecast can still be wrong for that
              decision. Repeatability does not answer accuracy. Accuracy is a different record.
            </p>

            <p>
              False precision is the same family in a unit the evidence does not support. A
              residual printed finer than the measurement, an RUL printed as if remaining life
              were a measured quantity, a vibration feature printed to places the sensor did not
              hold, a forecast printed as if the future had already been observed — those are
              false precision. Sync refuses false precision. Precision that the instrument really
              does repeat is still not accuracy. This essay states no OEM limit, no remaining-life
              figure, no residual tolerance, no percentile, no probability, and no savings figure.
              A number the meeting wants so the reading will look decisive is not a diagnosis, and
              this page does not publish one. The case holds the approved evidence that was
              stored, the limit of the precision that was named, and what is still unknown. It
              does not hold a precision this essay made up.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Accuracy is truth relative to the plant decision
            </h2>

            <p>
              Accuracy asks a question precision does not ask. Relative to which decision. Relative
              to which observed outcome. A number that is true for a planning horizon can be wrong
              for a run-or-stop decision on this shift. A vibration feature that repeats on a test
              stand can be wrong for the asset in the plant. A digital-twin residual that is tight
              against the history the twin was shown can be wrong for the regime the decision is
              in. A forecast that holds its decimals can be wrong for the intervention the room is
              about to authorize. Truth here is not a feeling that the number looks finished.
              Truth is the observed outcome of the decision, on the case, under the honesty
              boundary and the verification boundary.
            </p>

            <p>
              The honesty boundary says what the number is allowed to claim. A precise reading of
              a practice record is a practice number. A precise reading of simulated or seeded
              history is not a live plant result. Naming that limit does not promote the number
              into accuracy. The verification boundary says what may be called checked. Accuracy
              for the decision at hand still requires the observed outcome. Until that outcome is
              on the case, the precise reading is a repeatable number whose truth for this
              decision is unknown. Unknown stays unknown. The operator must not treat a stable
              decimal as go.
            </p>

            <p>
              Evidence from the plant beats the precise reading. When the number and the plant
              disagree, the case keeps the disagreement in view. It does not overwrite the plant
              with the RUL, the vibration feature, the digital-twin residual, or the forecast. It
              does not overwrite a missing plant record with fine resolution. A precise reading
              that cannot show what decision it is true for — and that cannot refuse when the
              observed outcome is not on the case — is not ready to sit beside the recommendation
              as if it were accuracy.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A precise number can still be wrong for the decision
            </h2>

            <p>
              A precise RUL repeats. The places are stable. The resolution is fine. None of that
              records the life the decision needs. Remaining life, if it is to be used at all, is
              a claim about a future the plant has not yet shown, and{' '}
              <Link
                href="/insights/forecast-is-not-fact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Forecast Is Not Fact
              </Link>{' '}
              already keeps that claim from being stored as a fact.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps the slope the RUL was drawn from from being stored as a recorded check. A
              precise RUL is still that claim. It can inform a recommendation to investigate. It
              is not accuracy relative to the decision to run, defer, or repair, until the
              observed outcome of that decision is on the case.
            </p>

            <p>
              A precise vibration feature repeats. The feature can be computed again and land on
              the same decimals. That repeatability is not the failure mode.{' '}
              <Link
                href="/insights/symptom-is-not-cause"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Symptom Is Not Cause
              </Link>{' '}
              keeps a vibration spike, a hot bearing, a pressure drop, an operator report, a CMMS
              complaint code, a red tile, or any other observed symptom from being stored as the
              cause. A feature extracted from that symptom, however stable the decimals, has not
              recorded the cause.{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>{' '}
              keeps chatter from being stored as an actionable signal. A precise feature of the
              chatter is still chatter.{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>{' '}
              keeps a numeric threshold, a limit, an alarm band, or a set-point from being stored
              as a diagnosis. A feature that sits inside a band to a fine resolution is still not
              a diagnosis.
            </p>

            <p>
              A precise digital-twin residual is tight. The twin can be asked again and the
              residual can stay small. Tightness is precision.{' '}
              <Link
                href="/insights/model-is-not-reality"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Model Is Not Reality
              </Link>{' '}
              keeps the twin, and every other compressed representation, from being stored as the
              plant. A residual that repeats does not close that gap.{' '}
              <Link
                href="/insights/calibration-is-not-validation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Calibration Is Not Validation
              </Link>{' '}
              keeps the tuning that made historical residuals look small from being stored as
              validation. This essay is the next stop: even when the residual is precise, precision
              is not accuracy relative to the plant decision. A well-calibrated, precise residual
              can still be wrong for the decision at hand.{' '}
              <Link
                href="/insights/simulation-is-not-proof"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Simulation Is Not Proof
              </Link>{' '}
              keeps a run of that twin from being stored as proof the plant will behave that way.
              A precise run is still not proof.
            </p>

            <p>
              A precise forecast holds its decimals. The outlook can be regenerated and the places
              can match. That match is repeatability. It is not a fact about the plant, and it is
              not accuracy for the decision the forecast was brought into. Assumptions that were
              not named, uncertainty that was not named, and refusal when the outlook cannot be
              checked are still missing. A stable decimal does not supply them.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Treating precision as accuracy is false clearance
            </h2>

            <p>
              False clearance is a record that says go, defer, or closed when the check is not on
              the case. The RUL repeats, so the room stores repeat as ready. The vibration feature
              holds its decimals, so the feature is stored as the mode. The digital-twin residual
              is tight, so the residual is stored as the asset. The forecast is stable, so the
              outlook is stored as the decision. Each of those moves is false clearance. Treating
              precision as accuracy is another path to false clearance under the honesty boundary
              and the verification boundary. The case looks released. The plant decision was not
              the source of the release. The repeatable number was.
            </p>

            <p>
              The honesty boundary is crossed when a precise practice number is called a live
              conclusion, or when fine resolution is called truth the edition does not hold. The
              verification boundary is crossed when a stable decimal is called the check. Both
              boundaries refuse the same substitution: precision stored as accuracy. Sync refuses
              false precision, and Sync refuses to store precision as accuracy. A reading that
              cannot refuse will clear a case it should have left unknown.
            </p>

            <p>
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps a small residual, a high score, or a sure voice from being stored as a
              recorded check. Precision is a cousin of that failure. The number looks sure because
              it repeats. Sureness of the print is not a recorded check, and it is not accuracy.{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              keeps an unverified input from being stored as a recorded fact. The regime the
              precise number assumes is an assumption until the plant confirms it. Fine resolution
              does not confirm it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Precision is not a diagnosis and not root cause
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect: what failed, on what
              evidence from the plant, and what is still missing. Root cause is a recorded causal
              check that names why, on that evidence, and leaves the remaining uncertainty in
              view. A precise RUL names neither. A precise vibration feature names neither. A
              precise digital-twin residual names neither. A precise forecast names neither. The
              precision is not a diagnosis. It is not root cause. It is not accuracy.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              keeps co-moving tags from being stored as a recorded causal check. A precise
              co-movement, printed to stable decimals, is still co-movement.{' '}
              <Link
                href="/insights/map-is-not-terrain"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Map Is Not Terrain
              </Link>{' '}
              keeps a diagram, a CMMS schema, a dashboard, a digital twin, or a process map from
              being stored as the operating reality. A precise diagram is still not the terrain.
              The resolution of the drawing does not become the plant.
            </p>

            <p>
              If the case cannot show the asset configuration, the failure and maintenance
              history, and the human judgment that connects the precise reading to a mode, the
              number is a picture without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. An RUL does not shorten it. A vibration feature does
              not shorten it. A digital-twin residual does not shorten it. A forecast does not
              shorten it. The precise reading can cite the trail. Citing is not the same as being
              the trail, and citing is not accuracy.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Precision does not authorize corrective work
            </h2>

            <p>
              Authorization is the named act. A drafted next action is a proposal. Recommend is
              not authorize. A proposal that cites a precise RUL, vibration feature, digital-twin
              residual, or forecast is still a proposal. A recommendation to investigate is still
              a proposal. The decimals can be stable. The residual can be tight. The resolution
              can be fine. Neither the stability nor the tightness accepts the operational
              consequence. The precision is not authorization for corrective work.
            </p>

            <p>
              Corrective work is the change someone intends after a named decision: the repair,
              the deferral, the inspection, the isolation. A precise RUL does not authorize
              deferral. A precise vibration feature does not authorize the repair. A tight
              digital-twin residual does not authorize running on. A forecast with stable decimals
              does not authorize the plan. Sync must not auto-authorize because the number
              repeated. Sync recommends. A named human decides. If the only support is the
              precision, the proposal is not ready to be stored as authorized.
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
              Execution stays with authorized systems. A precise reading, however stable the
              decimals, does not move execution onto Sync, and it does not replace the named
              decision that would have to come first.
            </p>

            <p>
              An alert the precise reading ranked is still an alert.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keeps seeing, acknowledging, or silencing an alert from being stored as a decision.
              A dashboard of stable decimals is still a display.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. A precise digital-twin residual does not put
              the display back as authorization, verification of outcome, work-order execution, or
              plant control.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps the drafted next action, including a recommendation to investigate, from being
              stored as authorization.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Accuracy still requires an observed outcome
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do on
              the plant. The case stays open until that check is on the case. Verification stays
              open until a verified operational outcome is recorded. Accuracy relative to the
              plant decision still requires that observed outcome. A later print that says the
              number still repeats is a later precision. It is not, by itself, the check. The RUL
              can look settled. The vibration feature can look stable. The digital-twin residual
              can be marked current in the planning tool. The forecast can hold its decimals. The
              repeat does not record what the authorized change did, and it does not record that
              the number was true for this decision.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              keeps the stand-in off the outcome. A precise reading used as a stand-in is a
              stand-in. A tight residual is a stand-in. Precision clearance is not the check.
              Clearing the meeting because the decimals were stable, the residual was tight, or
              the RUL sounded finished must not be read as verification of outcome. Sync must not
              auto-close because the number was precise. Sync must not treat precision clearance
              as Learning credit. A closed calculation is not a closed case. The honesty boundary
              and the verification boundary are one stop here: a stable decimal is not an observed
              outcome of the decision, and an observed outcome that was not recorded is not
              accuracy.
            </p>

            <p>
              Learning is what a later question is allowed to inherit. Learning Requires a
              Verified Outcome says the later question inherits that verified outcome, not a hope.
              Learning requires a verified outcome, not a hoped-for truth from an RUL, a vibration
              feature, a digital-twin residual, or a forecast whose decimals were stable. What was
              believed may include a labeled note that a precise reading was consulted and that
              its limit was explicit, including the refusal when the observed outcome was not on
              the case. Learning does not inherit the decimals as if the check had named the cause
              and confirmed the result on the plant. A later crew that applies the intervention
              because the precise forecast said so, without the verification on the prior case, is
              inheriting a repeatable number. That is the wrong lesson into Learning. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish precision as a verified
              operational outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A precise reading is not a Decision Case
            </h2>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that an RUL, a vibration
              feature, a digital-twin residual, or a forecast was precise does not record that
              question, and it does not record the decision. The case is the order: Question,
              Evidence, Recommendation, Human decision, then action, verification, and learning. A
              number that repeats is not that order.
            </p>

            <p>
              Treating precision as accuracy shortcuts the Question → Evidence → Recommendation →
              Human Decision path. The decimals jump to a conclusion. The evidence step is
              skipped, or it is filled with the precise reading and called evidence from the
              plant. The recommendation is implied by the stable RUL, the vibration feature, or
              the digital-twin residual. The human decision is treated as already made because the
              number looks finished. That shortcut is not a case. A named human records the
              Decision Case only against approved evidence. Until observed outcomes from the plant
              are on the case, the precise reading remains repeatability. It is not accuracy
              relative to the decision.
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
              says until that act is recorded, the case is still a proposal. A precise reading
              does not replace a named human decision. The RUL does not sign accept. The vibration
              feature does not sign reject. The digital-twin residual does not escalate. The
              forecast does not return the proposal. The decimals do not record who decided. The
              signed-in Decision Case keeps who decided visible beside the recommendation. The
              recorded act is mandatory.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync may surface a precise reading when the limit is named
            </h2>

            <p>
              Sync may surface a precise reading beside approved evidence, with the honesty
              boundary that precision is repeatability — tight residuals, fine resolution, stable
              decimals — and that the reading is not accuracy relative to the plant decision.
              Surfacing means the number can sit beside a question so a person can see the limit:
              what the number repeats, what decision it has not been checked against, and the
              refusal when the observed outcome is not on the case. The label is part of the
              surface. Without that label, the screen hides the limit and offers false precision.
              The honesty boundary is not optional. Sync may surface a precise reading when that
              limit is named. It may not store the decimals as accuracy.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote a practice number into plant evidence, and it does not promote a
              practice number into accuracy. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live conclusion the edition does not hold. An
              RUL computed on simulated or seeded history is a practice number. A vibration
              feature taken from practice records is a practice feature. A digital-twin residual
              fitted to practice records is a practice residual. A forecast scored on practice
              outcomes is a practice outlook. None of them is a live operational outcome, and none
              of them is a substitute for the approved evidence the operator still has to attach.
              Calling any of them accuracy crosses the honesty boundary. Calling any of them
              accurate because the decimals were stable crosses it the same way.
            </p>

            <p>
              Sync must not auto-close, auto-authorize, or treat precision clearance as Learning
              credit. Auto-close would store the decimals as a finished case. Auto-authorize would
              store the repeat as permission for corrective work. Learning credit would let a
              later case inherit the precision. None of those acts is available to the system. A
              named human records the Decision Case only against approved evidence. Verification
              stays open until a verified operational outcome is recorded. Sync refuses false
              precision, including an RUL figure, a residual tolerance, or a probability this
              essay does not hold. Sync refuses when the observed outcome is not on the case.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry is a practice record. A practice number that repeats is still precision.
              It is not live plant evidence, it is not accuracy, and it is not a substitute for
              the check the operator still has to record. Sync refuses to treat precision as
              accuracy for the plant decision at hand.
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
              precise RUL, a vibration feature, a digital-twin residual, or a forecast collects a
              repeatable number. It does not collect the missing plant value. In Recovery,
              economic assumptions that were left blank stay blank. They are not inferred from a
              stable decimal. A blank verification field is not a verified outcome of none, and a
              residual that shows no scatter does not close it. Storing blank as zero invents
              false certainty and corrupts Recovery, verification, and Decision Case math. Fine
              resolution on a filled blank is still false certainty.
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
              in Recovery, missing evidence stays unknown. Filling the unknown line with a precise
              reading does not change the state to clear, and it does not name root cause. Bad or
              not-ready evidence stays blocked. A precise number that looks related to the blocked
              item does not relabel blocked as ready. The operator must not treat unknown as go
              because the decimals were stable. Go would mean the evidence is sufficient for the
              next recorded step. Repeatability is not sufficiency. A decision the number has not
              been checked against is still unknown, and an outcome that was not observed is a
              refusal, not a clearance.
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
              is not approval. An empty inbox is not clearance. A quiet precise reading is not
              controlled. A number with no scatter is not a decision. A residual that does not
              mention a hold point does not write accept, reject, escalate, or return. It does not
              record a check that nobody performed. Stable decimals do not turn the missing
              response into the named decision. A precise reading that stayed silent on whether it
              is true for this decision is still not clearance.
            </p>

            <p>
              <Link
                href="/insights/sample-is-not-population"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Sample Is Not Population
              </Link>{' '}
              keeps a handful of observed cases from being stored as the fleet. A precise number
              computed on that handful is still a number on the handful. The decimals do not fill
              the assets the sample did not include.{' '}
              <Link
                href="/insights/anecdote-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Anecdote Is Not Evidence
              </Link>{' '}
              keeps a story from being stored as evidence. A precise retelling of that story is
              still not the observation the story was about, and it is not accuracy for the
              decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface a precise reading. Sync may hold the RUL, the vibration feature,
              the digital-twin residual, or the forecast beside a recommendation to investigate,
              with the honesty boundary that precision is repeatability and that accuracy still
              requires observed outcomes. That is a proposal. The person who can accept the
              operational consequence records the decision. Until that act is on the case, the
              case is still a proposal. The system does not auto-accept because the decimals
              looked finished. Sync recommends. A named human decides.
            </p>

            <p>
              Being sure the number matches the asset is still not the match. A tight residual is
              still not a recorded check. A stable RUL is still not a recorded check. The edge of
              the print is not evidence from the plant. A precise simulation taken from that print
              is not proof either. Simulation Is Not Proof keeps that run from being stored as
              proof. Calibration Is Not Validation keeps the tuning from being stored as
              validation. This essay keeps the repeatability — tight residuals, fine resolution,
              stable decimals — from being stored as accuracy.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of a precise reading is not
              control of the plant. A Decision Case that records a precise reading as
              repeatability does not put Sync in control of the work, the isolation, or the
              change. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. The precise reading is not the check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The decimals are not the act.
            </p>

            <p className="text-xl font-semibold text-white">
              Precision is repeatability: tight residuals, fine resolution, and stable decimals.
              Accuracy is truth relative to the plant decision and observed outcomes. A precise
              RUL, vibration feature, digital-twin residual, or forecast can still be wrong for
              the decision at hand. Treating precision as accuracy is false clearance under the
              honesty boundary and the verification boundary. It is not a diagnosis, not root
              cause, not authorization for corrective work, not a verified operational outcome,
              and not a Decision Case. Evidence from the plant beats the precise reading. Sync may
              surface a precise reading when the limit of that precision is named. Sync refuses
              false precision. Sync must not auto-close, auto-authorize, or treat precision
              clearance as Learning credit. A named human still decides. Verification stays open
              until a verified operational outcome is recorded. Execution stays with authorized
              systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes a precise RUL, vibration feature, digital-twin residual, or forecast
              to accuracy relative to the plant decision, or to a Decision Case.
            </p>

            <p>
              Calibration Is Not Validation is the tuning stored as fitness for the decision. A
              precise residual can be the output of that tuning, or it can be a number that
              repeats without the tuning having been named. Either way, precision is not
              validation, and it is not accuracy. Simulation Is Not Proof is the controlled run
              stored as proof the plant will behave that way. A precise run is still that run.
              Forecast Is Not Fact is the forward-looking claim stored as a fact about the plant.
              Stable decimals do not make the outlook a fact, and they do not make it accurate for
              the decision. Model Is Not Reality is the computed claim stored as the plant. Fine
              resolution does not make the model the plant. Map Is Not Terrain is the picture. A
              precise diagram is still not the operating reality. Anecdote Is Not Evidence is the
              story. A precise retelling is still not evidence. Sample Is Not Population is the
              handful stored as the fleet. Noise Is Not Signal is the chatter stored as an
              actionable signal. Symptom Is Not Cause is the observed symptom stored as the cause.
              Threshold Is Not Diagnosis is the line that was crossed. Assumption Is Not Evidence
              is the unverified input stored in place of a fact. Confidence Is Not Evidence is the
              sure voice stored in place of a check. Correlation Is Not Causation is the chart of
              co-movement. Trend Is Not Truth is the slope of what was observed. Proxy Is Not
              Outcome is the stand-in, including a precise number read as the result. Verification
              Is Not Optional is the check that still has to be written. Learning Requires a
              Verified Outcome is the lesson a later case may inherit, and that lesson is the
              observed outcome, not precision clearance. A tight residual is still not evidence. A
              stable decimal is still not a check. A fine resolution is still not the outcome. A
              later precise reading does not close the case. The label stays. The evidence from
              the plant stays unwritten until it is on the case. The decision stays unwritten
              until a named person records it.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A precise reading does not
              interpret them into clearance. On this record, blank is not zero, unknown is not
              clear, and silence is not the named decision. A case that is unknown, blank, or
              quiet is not made ready by a precise RUL, a stable vibration feature, a tight
              digital-twin residual, or a forecast that holds its decimals.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified operational outcome, not a hoped-for accuracy from the
              precise reading. The trail behind a recommendation is still evidence lineage. An
              alert is still not a decision. A dashboard is still not a decision, and it is still
              not the plant. Recommend is not authorize. Those records are either on the case or
              they are not. If they are not, precision does not supply them. Evidence from the
              plant beats the precise reading. Accuracy still requires observed outcomes.
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
              precise reading does not collapse that split into evidence from the plant. A
              proposal with no basis is not ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A precise reading that says the number is already true is not the check.
              Accuracy still requires the observed outcome on the case.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the RUL, the vibration
              feature, the digital-twin residual, or the forecast the last shift treated as the
              lesson.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a stable decimal as live evidence or as plant
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
              probability, and no customer result. It does not claim that Sync executes plant work,
              writes a work order, isolates equipment, or controls a plant. It does not
              claim that a precise RUL, vibration feature, digital-twin residual, or forecast is
              accuracy relative to the plant decision, that repeatability is evidence from the
              plant, that precision is a diagnosis, that stable decimals are root cause, that fine
              resolution is authorization for corrective work, that a tight residual is a verified
              operational outcome, or that a precise reading is a Decision Case. It does not claim
              that self-guided onboarding is a live product path.
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
              records. They are not live plant results, and a practice number that repeats is not
              accuracy for a plant decision. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/telemetry-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Telemetry Is Not Truth
              </Link>
              , on why a stream of tags, sensors, historians, SCADA, and CMMS counters is not
              truth for the plant decision. Companion reading:{' '}
              <Link
                href="/insights/calibration-is-not-validation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Calibration Is Not Validation
              </Link>{' '}
              on why tuning a model, a twin, a sensor, or a forecast so historical residuals look
              small is not validation that the representation is fit for the decision,{' '}
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
              on why a later case inherits the verified outcome, not precision clearance,{' '}
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
              on why an unverified input is not a recorded fact,{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              on why a stable decimal or a high score is not a recorded check,{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              on why a slope is not a recorded check and a precise RUL drawn from that slope is
              not accuracy,{' '}
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
              chapter is the public statement of the check this essay refuses to replace with
              precision.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Accuracy is not precision. Tight residuals, fine resolution, and stable decimals
                are repeatability. They are not truth relative to the plant decision and observed
                outcomes. A precise RUL, vibration feature, digital-twin residual, or forecast can
                still be wrong for the decision at hand. It can inform a recommendation to
                investigate. It is not a diagnosis, not root cause, not authorization for
                corrective work, not a verified operational outcome, and not a Decision Case.
                Treating precision as accuracy is false clearance under the honesty boundary and
                the verification boundary. Evidence from the plant beats the precise reading. Sync
                refuses false precision. Sync may surface a precise reading when the limit is
                named. A named human still decides. Verification stays open until a verified
                operational outcome is recorded. Execution stays with authorized systems. The
                Reliability Engineer workspace is where a signed-in Decision Case is completed. A
                Reliability Assessment is the bounded review when the question is whether the
                records can support a conclusion. None of those is a claim that Sync executes plant work,
                or that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="accuracy-is-not-precision" />
        </motion.article>
      </div>
    </main>
  );
}
