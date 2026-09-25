'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('telemetry-is-not-truth');

export default function TelemetryIsNotTruthPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Telemetry Is Not Truth</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Telemetry is not truth. Telemetry is a stream of observations: tags, sensors,
              historians, SCADA, and CMMS counters. Truth for a plant decision is whether those
              readings, under their actual sensing, sampling, calibration, and context limits,
              justify the action or the clearance at hand. A dense, high-frequency, green-looking
              telemetry feed can still be wrong for the decision — wrong sensor, wrong unit, stale
              sample, aliased signal, or a proxy that does not track the failure mode. Treating
              telemetry as truth is another path to false clearance under the honesty boundary and
              the verification boundary. A feed can inform a recommendation to investigate. It is
              not the plant decision, not a diagnosis, not root cause, not authorization for
              corrective work, not a verified operational outcome, and not a Decision Case.
              Evidence from the plant beats the feed. Sync may surface telemetry beside approved
              evidence when the limits are named. Sync refuses false precision. A named human still
              decides.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case and in Recovery, telemetry is a stream of observations. Truth for
              the decision is whether those readings, under their actual sensing, sampling,
              calibration, and context limits, justify the action or the clearance at hand. Those
              are different records. A dense, high-frequency, green-looking feed can still be
              wrong for the decision: wrong sensor, wrong unit, stale sample, aliased signal, or a
              proxy that does not track the failure mode. Telemetry is not truth. It is not a
              diagnosis. It is not root cause. It is not authorization for corrective work. It is
              not a verified operational outcome. It is not a Decision Case. Treating telemetry as
              truth is false clearance. Verification stays open until a verified operational
              outcome is recorded from the plant, not from a green trace. The honesty boundary and
              the verification boundary still apply to the feed.
            </p>

            <p>
              In this essay, telemetry names those five records and no figure of speech. Tags are
              the named points a system stores: a pressure, a temperature, a speed, a state bit, a
              counter. Sensors are the devices that produce those points, each with a range, a
              location, and a way they can be wrong. Historians are the stores that keep the
              points over time, at the rate and the compression the historian was given. SCADA is
              the picture and the live list operators watch: screens, trends, and alarms built on
              those points. CMMS counters are the tallies a maintenance system increments: hours,
              starts, cycles, completed tasks. A stream of observations is that flow. It can be
              dense. It can be high-frequency. It can look green. Truth, in this essay, is not a
              mood and not a slogan. Truth for a plant decision is whether those readings, under
              the sensing, sampling, calibration, and context limits that actually apply, justify
              the action or the clearance the room is about to record. A feed that has not been
              held to those limits is not that justification.
            </p>

            <p>
              The meeting puts the feed on the screen. The tags are updating. The sensors are
              green. The historian trace is dense. The SCADA overview has no red tile. The CMMS
              counters are moving. Someone says the asset is known, and the room treats the stream
              as truth for the decision: run on, defer, or close. Nobody named the sensing. Nobody
              named the sampling. Nobody named the calibration. Nobody named the context. Nobody
              asked whether the point was the wrong sensor, the wrong unit, a stale sample, an
              aliased signal, or a proxy that does not track the failure mode. Nobody wrote
              accept, reject, escalate, or return. The Decision Case still has to show the
              question, the evidence, the recommendation, the named human decision, and the check.
              A telemetry feed is not that record, and it is not truth.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/accuracy-is-not-precision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accuracy Is Not Precision
              </Link>{' '}
              and stands beside{' '}
              <Link
                href="/insights/calibration-is-not-validation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Calibration Is Not Validation
              </Link>
              ,{' '}
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
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
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
              . Accuracy keeps repeatability — tight residuals, fine resolution, and stable
              decimals — from being stored as truth relative to the plant decision and observed
              outcomes. This essay keeps the stream itself — tags, sensors, historians, SCADA,
              CMMS counters — from being stored as truth for the action or the clearance. A precise
              feed can still be the wrong sensor, the wrong unit, a stale sample, an aliased
              signal, or a proxy that does not track the failure mode. Stable decimals on that feed
              are still not accuracy, and the feed is still not truth. Calibration keeps a model, a
              twin, a sensor, or a forecast tuned so historical residuals look small from being
              stored as validation that the representation is fit for the decision. A sensor that
              was calibrated is still a sensor. A small residual on that sensor is still not
              validation, and the feed is still not truth. Simulation keeps a controlled
              representation of possible futures from being stored as proof the plant will behave
              that way. Forecast keeps a forward-looking compression from being stored as a fact
              about the plant. Model keeps a compressed representation from being stored as the
              plant. Proxy keeps a stand-in, including a tag that does not track the failure mode,
              from being stored as the verified operational outcome. Verification keeps the case
              open until the observed outcome is on the case. Learning keeps a later question from
              inheriting telemetry clearance. A dense feed is still not truth.
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
              missing. A stream of tags, sensors, historians, SCADA, and CMMS counters is not a
              fourth column that records the decision, names the failure mode, authorizes the
              work, or closes the case. A proposal whose only basis is the feed has not shown that
              the readings, under their sensing, sampling, calibration, and context limits,
              justify the action. A proposal with no named human decision is not a Decision Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a telemetry feed as live plant control. Sync refuses false precision.
              A number the historian printed is not truth the edition did not hold.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A stream of observations is not the decision
            </h2>

            <p>
              A stream keeps the points it was given and drops the points it was not. Tags keep
              the names that were configured and drop the names that were never mapped. Sensors
              keep the physics they can see and drop the physics they cannot. Historians keep the
              samples they stored and drop the intervals they compressed away. SCADA keeps the
              screen that was drawn and drops the equipment that was not on the screen. CMMS
              counters keep the increments someone recorded and drop the work that was never
              written. Density is not a fault in the tool. High frequency is not a fault in the
              tool. A green-looking overview is not a fault in the display. Each of those is a
              limit of the record. The limit does not become truth because the feed looks
              finished.
            </p>

            <p>
              Sensing is what the device can actually observe: where it sits, what it touches,
              what it cannot see, and which failure mode it was never built to track. Sampling is
              how often the point is taken, how it is filtered, and what the historian throws
              away between stored values. An aliased signal is a sampling failure: the stored wave
              looks smooth, or looks like a slower wave, because the sample rate did not hold the
              motion that mattered. Calibration is whether the point still sits on a known
              reference, and when that reference was last shown. Context is the regime, the unit,
              the asset, the operating state, and the question the reading is being asked to
              answer. A reading without those four is an observation with the limit hidden. Hidden
              limits are how false clearance gets stored.
            </p>

            <p>
              The feed can still be wrong for the decision in ordinary ways. The wrong sensor is
              the point from a different asset, a different leg, or a spare that was never in the
              flow. The wrong unit is a number that looks familiar in a scale the decision does
              not use. A stale sample is a value that stopped updating while the screen still
              paints it as live. An aliased signal is a trace that cannot show the cycle the
              failure mode lives in. A proxy that does not track the failure mode is a tag that
              moves, or stays green, for a reason that is not the mode the room is deciding. A
              dense, high-frequency, green-looking telemetry feed can be any of those and still
              fill the wall. Filling the wall is not justification.
            </p>

            <p>
              A feed can inform a recommendation to investigate when sensing, sampling,
              calibration, and context limits are explicit, and when the case can still refuse if
              the readings do not justify the action. Without that refusal, the green trace is a
              claim with the limit hidden. Refusal is the recorded stop. The honesty boundary
              refuses to call a practice feed a live conclusion. The verification boundary refuses
              to call a feed a check. Unknown stays unknown. The operator must not treat a missing
              refusal as go.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Treating telemetry as truth is false clearance
            </h2>

            <p>
              False clearance is a record that says go, defer, or closed when the check is not on
              the case. The tags are in band, so the room stores in-band as ready. The sensors are
              green, so green is stored as healthy. The historian is dense, so density is stored
              as knowledge. The SCADA overview is quiet, so quiet is stored as controlled. The
              CMMS counters are incrementing, so the counters are stored as the work. Each of
              those moves is false clearance. Treating telemetry as truth is another path to false
              clearance under the honesty boundary and the verification boundary. The case looks
              released. The decision was not justified by the readings under their limits. The
              feed was treated as if it were the justification.
            </p>

            <p>
              False precision is the same failure in a finer unit. A tag printed to a decimal the
              sensing does not support, a historian value printed as if compression had not
              dropped the peak, a SCADA number printed in the wrong unit as if the scale were a
              measurement of the mode, a CMMS counter printed as if the tally were the outcome —
              those are false precision. Sync refuses false precision. This essay states no OEM
              limit, no sample rate, no residual tolerance, no remaining-life figure, no
              probability, and no savings figure. A number the meeting wants so the feed will look
              decisive is not a diagnosis, and this page does not publish one. The case holds the
              approved evidence that was stored, the sensing that was named, the sampling that was
              named, the calibration that was named, the context that was named, and what is still
              unknown. It does not hold a precision this essay made up.
            </p>

            <p>
              Evidence from the plant beats the feed. When the stream and the plant a later reader
              can inspect disagree, the case keeps the disagreement in view. It does not overwrite
              the inspection, the failed part, or the missing point with a green trace. It does
              not overwrite a stale sample with the last good value painted as live. It does not
              overwrite the wrong unit with a familiar number. A feed that cannot show its
              sensing, sampling, calibration, and context limits — and that cannot refuse when
              those readings do not justify the action — is not ready to sit beside the
              recommendation as if it were truth. A dense, high-frequency, green-looking telemetry
              feed that cannot show those limits is still wrong for the decision until the
              observed outcome of that decision is on the case.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The feed is not a diagnosis and not root cause
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect: what failed, on what
              evidence from the plant, and what is still missing. Root cause is a recorded causal
              check that names why, on that evidence, and leaves the remaining uncertainty in
              view. Tags name neither. Sensors name neither. Historians name neither. SCADA names
              neither. CMMS counters name neither. A green-looking feed names neither, unless the
              feed is a pointer to approved evidence that already names them — and then the
              evidence names them, not the stream. The feed is not a diagnosis. It is not root
              cause. It is not truth.
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
              cause. A sensor that shows the symptom has not recorded the cause.{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>{' '}
              keeps a numeric threshold, a limit, an alarm band, or a set-point from being stored
              as a diagnosis. A tag that sits inside a limit is still a tag.{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              keeps co-moving tags from being stored as a recorded causal check. A dense cluster
              of co-moving points is still co-movement.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps a rising or falling line from being stored as a recorded check. A slope drawn
              on the historian is a slope. The tags under it are not truth for the decision.{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>{' '}
              keeps chatter from being stored as an actionable signal. A high-frequency chatter
              that looks busy does not promote it. An aliased signal can hide the motion and still
              look smooth.
            </p>

            <p>
              <Link
                href="/insights/sample-is-not-population"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Sample Is Not Population
              </Link>{' '}
              keeps a handful of observed cases from being stored as the fleet. Sampling on one
              asset, one shift, or one compressed historian window is still that window. The
              sample rate does not make the window the population the decision claims to cover.{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              keeps an unverified input from being stored as a recorded fact. The belief that the
              tag is the right sensor, in the right unit, still live, and still tracking the mode
              is an assumption until those limits are named and the comparison is a measurement.
            </p>

            <p>
              If the case cannot show the asset configuration, the failure and maintenance
              history, the sensing and the sampling, and the human judgment that connects the feed
              to a mode, the trace is a picture without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. Tags do not shorten it. Sensors do not shorten it.
              Historians do not shorten it. SCADA does not shorten it. CMMS counters do not
              shorten it. The feed can cite the trail. Citing is not the same as being the trail,
              and citing is not truth for the decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sensing, sampling, calibration, and context stay on the case
            </h2>

            <p>
              Sensing that is not named is a refusal condition. The wrong sensor is the ordinary
              case: a tag name that points at a different transmitter, a redundant instrument that
              was never selected, a tap that is isolated, a probe that is not in the flow. A
              green-looking value from the wrong sensor does not justify the action. The room can
              note that a point updated. Noting it records that a stream was available. It does
              not record that the point was the one the decision needed.
            </p>

            <p>
              Sampling that is not named is a refusal condition. A stale sample is a point whose
              time is older than the decision, while the screen still paints it as current. An
              aliased signal is a stored shape that cannot represent the cycle, the impact, or the
              mode the question is about, because the sample interval was too coarse or the
              historian compressed the peak away. High frequency on a different tag does not
              repair the alias on this one. Density in the historian does not repair a gap the
              compression removed. When sampling is insufficient for the decision, the feed
              refuses. It does not become truth for a motion it did not hold.
            </p>

            <p>
              Calibration that is not named is a refusal condition.{' '}
              <Link
                href="/insights/calibration-is-not-validation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Calibration Is Not Validation
              </Link>{' '}
              already keeps a sensor tuned so historical residuals look small from being stored as
              fitness for the decision. This essay keeps the feed from being stored as truth even
              when someone says the instrument was calibrated. A calibrated wrong sensor is still
              the wrong sensor. A calibrated stale sample is still stale. A calibrated proxy that
              does not track the failure mode is still a proxy. The fit can be close to a
              reference and still not justify the action. Context that is not named is the same
              stop: the wrong unit, the wrong asset, the wrong operating regime, the wrong
              question. A number that is accurate in inches does not justify a decision that
              required millimetres, and this essay states no conversion and no OEM limit. The
              context has to be on the case or the reading stays short of truth for that decision.
            </p>

            <p>
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps a strong gut feel, a high model score, or a sure voice from being stored as a
              recorded check. Being sure the feed is dense enough is still not the check. A
              green-looking SCADA page is still not a recorded check.{' '}
              <Link
                href="/insights/anecdote-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Anecdote Is Not Evidence
              </Link>{' '}
              keeps a story from being stored as evidence. A hallway claim that the historian
              always shows the truth is still a story. The honesty boundary and the verification
              boundary are the same stop: if sensing, sampling, calibration, and context cannot be
              shown, or if the readings do not justify the action, the feed refuses, and the case
              stays unknown. A stream that cannot refuse is not truth.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Telemetry does not authorize corrective work
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
              keeps that proposal off the decision. A proposal that cites tags, sensors,
              historians, SCADA, or CMMS counters is still a proposal. A recommendation to
              investigate is still a proposal. The feed can be dense. The trace can be smooth. The
              overview can be green. Neither the density nor the color accepts the operational
              consequence. The feed is not authorization for corrective work.
            </p>

            <p>
              Corrective work is the change someone intends after a named decision: the repair,
              the deferral, the inspection, the isolation. A green tag does not authorize running
              on. A quiet SCADA page does not authorize deferral. A CMMS counter does not
              authorize the work the counter was used to justify. An aliased signal does not
              authorize the mode the signal could not show. Sync must not auto-authorize because
              the feed showed a next step. Sync recommends. A named human decides. If the only
              support is the stream, the proposal is not ready to be stored as authorized.
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
              Execution stays with authorized systems. A feed, however high-frequency, does not
              move execution onto Sync, and it does not replace the named decision that would have
              to come first.
            </p>

            <p>
              An alert the feed raised is still an alert.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keeps seeing, acknowledging, or silencing an alert from being stored as a decision.
              A dashboard of tags is still a display.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps that display off the decision. Color on SCADA does not put it back as
              authorization, verification of outcome, work-order execution, or plant control. A
              map of the same points is still a map.{' '}
              <Link
                href="/insights/map-is-not-terrain"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Map Is Not Terrain
              </Link>{' '}
              keeps a diagram, a CMMS schema, a dashboard, a digital twin, or a process map from
              being stored as the operating reality. A SCADA picture of tags is that kind of
              picture when the screen is treated as the plant.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A feed is not a verified operational outcome
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do on
              the plant. The case stays open until that check is on the case. Verification stays
              open until a verified operational outcome is recorded. A later trace that says the
              tag recovered is a later stream of observations. It is not, by itself, the check.
              The historian can fill in. The SCADA tile can turn green. The CMMS counter can
              increment. The feed does not record what the authorized change did. A stale sample
              after the work can look like recovery. The wrong sensor can look like recovery. A
              proxy that does not track the failure mode can look like recovery and still miss the
              mode.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              keeps the stand-in off the outcome. A sensor health percent is a stand-in. A green
              tile is a stand-in. A CMMS counter of closed tasks is a stand-in. A proxy that does
              not track the failure mode is a stand-in that misses the question. Telemetry
              clearance is not the check. Clearing the meeting because the feed looked dense, the
              trace looked smooth, or the overview looked green must not be read as verification
              of outcome. Sync must not auto-close because the feed was current. Sync must not
              treat telemetry clearance as Learning credit. A closed trace is not a closed case.
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
              requires a verified outcome, not a hoped-for state from tags, sensors, historians,
              SCADA, or CMMS counters. What was believed may include a labeled note that a feed
              was consulted and that its sensing, sampling, calibration, and context limits were
              explicit. Learning does not inherit the feed as if the check had named the cause and
              confirmed the result on the plant. A later crew that defers the work because the
              historian looked fine, without the verification on the prior case, is inheriting a
              stream. That is the wrong lesson into Learning. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a feed as a verified
              operational outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">A feed is not a Decision Case</h2>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that tags, sensors, historians,
              SCADA, or CMMS counters were opened does not record that question, and it does not
              record the decision. The case is the order: Question, Evidence, Recommendation,
              Human decision, then action, verification, and learning. A stream of observations is
              not that order.
            </p>

            <p>
              Treating telemetry as truth shortcuts the Question → Evidence → Recommendation →
              Human Decision path. The feed jumps to a conclusion. The evidence step is skipped,
              or it is filled with the trace and called justification. The recommendation is
              implied by the color. The human decision is treated as already made because the
              overview is green or the counters moved. That shortcut is not a case. A named human
              records the Decision Case only against approved evidence. Until the readings are on
              the case with their sensing, sampling, calibration, and context limits, and until
              those readings justify the action or the clearance, the feed remains a stream of
              observations.
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
              says until that act is recorded, the case is still a proposal. A feed does not
              replace a named human decision. The tags do not sign accept. The sensors do not sign
              reject. The historian does not escalate. SCADA does not return the proposal. The
              CMMS counters do not record who decided. The signed-in Decision Case keeps who
              decided visible beside the recommendation. The recorded act is mandatory.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync may surface telemetry when the limits are named
            </h2>

            <p>
              Sync may surface telemetry beside approved evidence, with the honesty boundary that
              the feed is a stream of observations and not truth for the decision. Surfacing means
              the tags, the sensors, the historians, the SCADA picture, or the CMMS counters can
              sit beside a question so a person can see the sensing, the sampling, the
              calibration, and the context. The label is part of the surface. Without that label,
              the screen hides the limit and offers false precision. The honesty boundary is not
              optional.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote a practice feed into plant truth. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live conclusion the edition does not hold. A
              simulated or seeded historian is a practice record. A SCADA picture fed by that
              practice record is a practice picture. A CMMS counter on a practice asset is a
              practice tally. None of them is a live operational outcome, and none of them is a
              substitute for the approved evidence the operator still has to attach. A
              green-looking practice feed is still not truth for a plant decision.
            </p>

            <p>
              Sync must not auto-close, auto-authorize, or treat telemetry clearance as Learning
              credit. Auto-close would store the feed as a finished case. Auto-authorize would
              store the green trace as permission for corrective work. Learning credit would let a
              later case inherit the stream. None of those acts is available to the system. A
              named human records the Decision Case only against approved evidence. Verification
              stays open until a verified operational outcome is recorded. Sync refuses false
              precision, including a sample rate, a tolerance, or a health percent this essay does
              not hold.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry is a practice record. A practice feed is still a stream of observations.
              It is not live plant evidence treated as truth, and it is not a substitute for the
              check the operator still has to record. Sync refuses to treat telemetry as truth.
            </p>

            <p>
              A model built on the feed is still a model.{' '}
              <Link
                href="/insights/model-is-not-reality"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Model Is Not Reality
              </Link>{' '}
              keeps a digital twin, a KPI model, a risk matrix, an RUL curve, a Monte Carlo run,
              or an LLM summary from being stored as the plant. Feeding that model a dense trace
              does not make the model the plant, and it does not make the trace truth. A forecast
              built on the same points is still a forecast.{' '}
              <Link
                href="/insights/forecast-is-not-fact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Forecast Is Not Fact
              </Link>{' '}
              keeps a projection, an RUL estimate, a demand plan, a Monte Carlo percentile, or an
              LLM-generated outlook from being stored as a fact about the plant. A simulation that
              consumes the feed is still a simulation.{' '}
              <Link
                href="/insights/simulation-is-not-proof"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Simulation Is Not Proof
              </Link>{' '}
              keeps a digital-twin run, a Monte Carlo fan, a what-if scenario, or a failure
              simulation from being stored as proof the plant will behave that way. The input
              stream does not promote the run.
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
              keeps an empty field from being stored as a measured zero. Filling the blank with
              the last historian value, a default from SCADA, or a zero from a CMMS counter that
              was never incremented collects a feed value. It does not collect the missing plant
              value. A stale sample written into a blank field is still stale. In Recovery,
              economic assumptions that were left blank stay blank. They are not inferred from a
              tag. A blank verification field is not a verified outcome of none, and a feed that
              shows no deviation does not close it. Storing blank as zero invents false certainty
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
              in Recovery, missing evidence stays unknown. Filling the unknown line with a tag, a
              sensor, a historian trace, a SCADA tile, or a CMMS counter does not change the state
              to clear, and it does not name root cause. Bad or not-ready evidence stays blocked.
              A feed that looks related to the blocked item does not relabel blocked as ready. The
              operator must not treat unknown as go because the feed was dense. Go would mean the
              readings, under their limits, justify the next recorded step. A stream of
              observations is not that justification by itself. A wrong unit that was not named is
              still unknown.
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
              is not approval. An empty inbox is not clearance. A quiet feed is not controlled. A
              SCADA page with no red tile is not a decision. A historian that does not show a
              spike does not write accept, reject, escalate, or return. It does not record a check
              that nobody performed. A green-looking overview does not turn the missing response
              into the named decision. A feed that stayed silent on its sensing, sampling,
              calibration, and context limits is still not clearance.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface telemetry. Sync may hold the tags, the sensors, the historians, the
              SCADA picture, or the CMMS counters beside a recommendation to gather approved
              evidence, with the honesty boundary that the feed is a stream of observations and
              that sensing, sampling, calibration, and context limits have to be explicit. That is
              a proposal. The person who can accept the operational consequence records the
              decision. Until that act is on the case, the case is still a proposal. The system
              does not auto-accept because the feed looked finished. Sync recommends. A named
              human decides.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of a feed is not control of the
              plant.{' '}
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              already keeps sensors, CMMS rows, dashboards, and patrol routes from being stored as
              control authority. A Decision Case that records a feed as a stream of observations
              does not put Sync in control of the work, the isolation, or the change. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. The feed is not the check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The trace is not the act.
            </p>

            <p className="text-xl font-semibold text-white">
              Tags, sensors, historians, SCADA, and CMMS counters are a stream of observations,
              not truth for the plant decision. Truth is whether those readings, under their
              actual sensing, sampling, calibration, and context limits, justify the action or the
              clearance at hand. A dense, high-frequency, green-looking feed can still be the
              wrong sensor, the wrong unit, a stale sample, an aliased signal, or a proxy that
              does not track the failure mode. Treating telemetry as truth is false clearance. It
              is not a diagnosis, not root cause, not authorization for corrective work, not a
              verified operational outcome, and not a Decision Case. Evidence from the plant beats
              the feed. Sync may surface telemetry when the limits are named. Sync refuses false
              precision. Sync must not auto-close, auto-authorize, or treat telemetry clearance as
              Learning credit. A named human still decides. Verification stays open until a
              verified operational outcome is recorded. Execution stays with authorized systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes a stream of tags, sensors, historians, SCADA, or CMMS counters to
              truth for the decision or to a Decision Case.
            </p>

            <p>
              Calibration Is Not Validation is the fit: a model, a twin, a sensor, or a forecast
              tuned so historical residuals look small, stored as if the representation were fit
              for the decision. This essay is the stream under that fit. A calibrated feed is
              still not truth, and the calibration is still not validation. Simulation Is Not
              Proof is the run of possible futures. A feed used as input does not make the run
              proof. Forecast Is Not Fact is the outlook. A historian of the past is not a fact
              about the decision still ahead, and a projection of that historian is not a fact.
              Model Is Not Reality is the compressed representation. A model fed by tags is still
              not the plant. Proxy Is Not Outcome is the stand-in, including a proxy that does not
              track the failure mode. Verification Is Not Optional is the check that still has to
              be written. Learning Requires a Verified Outcome is the lesson a later case may
              inherit. A green trace is still not evidence that the readings justify the action. A
              high-frequency window is still not a check. A quiet SCADA page is still not the
              outcome. A later sample does not close the case. The label stays. The limits stay
              unwritten until they are on the case. The decision stays unwritten until a named
              person records it.
            </p>

            <p>
              Map Is Not Terrain is the picture. A SCADA overview stored as the operating reality
              is still a map. Trend Is Not Truth is the slope. The tags under the slope are not a
              second kind of truth. Anecdote Is Not Evidence is the story. A retelling of what the
              historian showed is still not evidence.{' '}
              <Link
                href="/insights/anecdote-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Anecdote Is Not Evidence
              </Link>{' '}
              keeps the retelling off the case. Sample Is Not Population is the window stored as
              the fleet. Noise Is Not Signal is the chatter stored as an actionable signal.
              Symptom Is Not Cause is the observed symptom stored as the cause. Threshold Is Not
              Diagnosis is the line that was crossed. Assumption Is Not Evidence is the unnamed
              sensing limit stored in place of a fact. Confidence Is Not Evidence is the sure
              voice stored in place of a check. Correlation Is Not Causation is the chart of
              co-movement. Recommend Is Not Authorize is the drafted next action. A fluent trace
              is still not truth. A tight band on a tag is still not a check. A green tile is
              still not the outcome.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A feed does not interpret
              them into clearance. On this record, blank is not zero, unknown is not clear, and
              silence is not the named decision. A case that is unknown, blank, or quiet is not
              made ready by a dense historian, a green SCADA page, a moving CMMS counter, or a
              high-frequency tag from the wrong sensor.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified operational outcome, not telemetry clearance. The
              trail behind a recommendation is still evidence lineage. An alert is still not a
              decision. A dashboard is still not a decision, and it is still not the plant.
              Recommend is not authorize. Those records are either on the case or they are not. If
              they are not, a feed does not supply them. Evidence from the plant beats the feed.
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
              feed does not collapse that split into truth for the decision. A proposal with no
              basis is not ready for the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A feed that says the asset already recovered is not the check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not the tags, the sensors,
              the historians, the SCADA picture, or the CMMS counters the last shift treated as
              the lesson.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a stream of observations as live plant control, and
              they keep the edition from printing false precision. Later editions can deepen a
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
              states no savings figure, and claims no prevented failure. It states no OEM limit
              and supplies no sample rate, no residual tolerance, no remaining-life figure, no
              probability, and no customer result. It does not claim that Sync executes plant work, writes a work
              order, isolates equipment, or controls a plant. It does not
              claim that tags, sensors, historians, SCADA, or CMMS counters are truth for the
              decision, that a dense, high-frequency, green-looking feed justifies the action,
              that a stream of observations is a diagnosis, that a trace is root cause, that a
              green tile is authorization for corrective work, that a current feed is a verified
              operational outcome, or that telemetry is a Decision Case. It does not claim that
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
              records. They are not live plant results, and a practice feed is not truth for a
              plant decision. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/dashboard-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Control
              </Link>
              , on why a dashboard reads stored or streamed values and renders them as tiles,
              trends, and colors, and why that read is not a write that changes the plant.
              Companion reading:{' '}
              <Link
                href="/insights/accuracy-is-not-precision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accuracy Is Not Precision
              </Link>{' '}
              on why repeatability — tight residuals, fine resolution, and stable decimals — is
              not truth relative to the plant decision and observed outcomes,{' '}
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
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              on why a stand-in measure, including a proxy that does not track the failure mode,
              is not the verified operational outcome,{' '}
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
              on why a later case inherits the verified outcome, not telemetry clearance,{' '}
              <Link
                href="/insights/map-is-not-terrain"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Map Is Not Terrain
              </Link>{' '}
              on why a diagram, a CMMS schema, a dashboard, a digital twin, or a process map is a
              compressed representation and not the operating reality,{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              on why an unverified sensing limit is not a recorded fact,{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              on why a dense feed or a high score is not a recorded check,{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              on why a slope is not a recorded check and the tags under that slope are not truth,{' '}
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
              feed.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step.
                Telemetry is not truth. Tags, sensors, historians, SCADA, and CMMS counters are a
                stream of observations. Truth for a plant decision is whether those readings,
                under their actual sensing, sampling, calibration, and context limits, justify the
                action or the clearance. A dense, high-frequency, green-looking feed can still be
                the wrong sensor, the wrong unit, a stale sample, an aliased signal, or a proxy
                that does not track the failure mode. It can inform a recommendation to
                investigate. It is not a diagnosis, not root cause, not authorization for
                corrective work, not a verified operational outcome, and not a Decision Case.
                Treating telemetry as truth is false clearance. Evidence from the plant beats the
                feed. Sync refuses false precision. Sync may surface telemetry when the limits are
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
          <InsightNextSteps slug="telemetry-is-not-truth" />
        </motion.article>
      </div>
    </main>
  );
}
