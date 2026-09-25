'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('map-is-not-terrain');

export default function MapIsNotTerrainPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Map Is Not Terrain</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Map is not terrain. A diagram, a CMMS schema, a dashboard, a digital twin, or a
              process map is a compressed representation. The operating reality is the terrain:
              the asset as it is running, including degradation the drawing does not show, local
              exceptions the schema does not hold, and unverified outcomes the model displays as
              done. A map can inform a recommendation to investigate. It is not evidence from the
              plant, not a diagnosis, not root cause, not authorization for corrective work, not a
              verified operational outcome, and not a Decision Case. Evidence from the plant beats
              the model. On this record, blank is not zero, unknown is not clear, and recommend is
              not authorize. Sync may surface a map beside approved evidence. A named human still
              decides.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync recommends. A named human decides. Execution stays with authorized systems. On
              the Decision Case and in Recovery, a diagram, a CMMS schema, a dashboard, a digital
              twin, or a process map is a compressed representation. It is not the operating
              reality. Evidence from the plant beats the model. The map is not a diagnosis. It is
              not root cause. It is not authorization for corrective work. It is not a verified
              operational outcome. It is not a Decision Case. Blank is not zero. Unknown is not
              clear. Recommend is not authorize. Verification stays open until a verified
              operational outcome is recorded from the plant, not from the model.
            </p>

            <p>
              In this essay, map names those five records and no figure of speech. A diagram is a
              drawing: a P&amp;ID, a reliability block, a one-line, a layout. A CMMS schema is the
              field list the work-management system stores: asset id, failure code, status, dates,
              and the blanks between them. A dashboard is the tile set a person can see. A digital
              twin is a model state held in software and synchronized, simulated, or seeded to look
              like the asset. A process map is the drawn sequence of steps. Terrain names the
              operating reality of the asset: what is degrading, which local exceptions the crew
              actually runs, and which outcomes have been verified. Those are different records.
              Treating the map as the terrain stores the compressed representation as if it were
              the plant.
            </p>

            <p>
              The meeting puts the diagram on the wall. The CMMS schema is open. The dashboard is
              green. The digital twin matches the last model run. The process map shows the
              sequence the procedure says the crew follows. Someone says the asset is known, and
              the room treats the screen as the Decision Case. Nobody walked the degradation the
              drawing left off. Nobody wrote the local exception the schema has no field for.
              Nobody attached approved evidence from the plant. Nobody separated an unverified
              outcome from a check. Nobody wrote accept, reject, escalate, or return. The Decision
              Case still has to show the question, the evidence, the recommendation, the named
              human decision, and the check. A compressed representation is not that record, and
              it is not the operating reality.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/anecdote-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Anecdote Is Not Evidence
              </Link>{' '}
              and stands beside{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
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
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>
              ,{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
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
                href="/insights/sample-is-not-population"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Sample Is Not Population
              </Link>
              . Anecdote keeps a single operator story, a hallway claim, a memory of how it always
              fails, a vendor demo vignette, or a near-miss retelling from being stored as
              evidence. A story about the diagram is still a story. Dashboard keeps a display from
              being stored as a decision. This essay keeps that same display, and the diagram, the
              CMMS schema, the digital twin, and the process map, from being stored as the
              operating reality. Proxy keeps a KPI, a leading indicator, a model score, a green
              tile, a closed work-order count, an MTBF estimate, or a sensor health % from being
              stored as the verified operational outcome. A tile on the twin is still a stand-in.
              Blank keeps an empty field from being stored as a measured zero. Unknown keeps
              missing evidence from being stored as clear. Recommend keeps a drafted next action
              from being stored as authorization. Sample keeps a handful of observed cases from
              being stored as the fleet. A process map drawn from that handful is still not the
              population, and it is still not the plant.
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
              missing. A diagram, a CMMS schema, a dashboard, a digital twin, or a process map is
              not a fourth column that records the plant, names the failure mode, authorizes the
              work, or closes the case. A proposal whose only basis is the model has no evidence
              from the plant a later reader can inspect. A proposal with no named human decision
              is not a Decision Case.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a diagram, a schema, a dashboard, a digital twin, or a process map as
              approved evidence from the plant or as live plant control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A map is a compressed representation, not the operating reality
            </h2>

            <p>
              A compressed representation keeps some of the plant and drops the rest. The diagram
              keeps the lines that were drawn and drops the degradation that was not. The CMMS
              schema keeps the fields that were defined and drops the local exceptions that have
              no column. The dashboard keeps the tiles that were configured and drops the state
              the tiles do not show. The digital twin keeps the model state that was computed,
              simulated, or seeded and drops whatever the model was not given. The process map
              keeps the sequence that was drawn and drops the steps the crew actually inserted,
              skipped, or reversed. Compression is not a fault in the tool. It is the limit of the
              record. The limit does not become the operating reality because the picture is
              complete on the screen.
            </p>

            <p>
              The meeting can note that the map exists. Noting it records that a diagram, a
              schema, a dashboard, a twin, or a process map was available. It does not record the
              operating reality, and it does not open the Decision Case. The fact stays in the
              approved evidence a later reader can inspect, or it stays missing. The map stays a
              compressed representation, or it stays off the case as the model. Treating the map
              as the terrain invents a plant the record does not hold. The room thinks the asset
              is known. The evidence from the plant was never written. That skip is the failure
              this essay names.
            </p>

            <p>
              A map can inform a recommendation to investigate. Informing a recommendation records
              that a named person still has something to decide, and that the next proposal may be
              to go get evidence from the plant. It does not store the diagram as the asset, the
              schema as the work history, the dashboard as the state, the digital twin as the
              unit, or the process map as the shift. If the only support is the compressed
              representation, the proposal is not evidence and it is not a closed case. The system
              does not auto-accept because the model looked current.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The map is not a diagnosis and not root cause
            </h2>

            <p>
              A diagnosis names a failure mode a later reader can inspect: what failed, on what
              evidence from the plant, and what is still missing. Root cause is a recorded causal
              check that names why, on that evidence, and leaves the remaining uncertainty in
              view. A diagram names neither. A CMMS schema names neither. A dashboard names
              neither. A digital twin names neither. A process map names neither. The drawing can
              show a symbol where a failure mode might sit. The failure code in the schema can
              show a label someone typed. The red tile can show that a rule fired. The twin can
              show a model state labeled with a mode. The process map can show a step named
              &quot;inspect.&quot; None of those records is the diagnosis, and none of them is
              root cause.
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
              cause. A symptom drawn onto a diagram is still a symptom.{' '}
              <Link
                href="/insights/threshold-is-not-diagnosis"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Threshold Is Not Diagnosis
              </Link>{' '}
              keeps a numeric threshold, a limit, an alarm band, or a set-point from being stored
              as a diagnosis. A limit printed on the process map is still a limit.{' '}
              <Link
                href="/insights/noise-is-not-signal"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Noise Is Not Signal
              </Link>{' '}
              keeps sensor chatter, false positives, process variation, nuisance alarms, telemetry
              spikes without a confirmed asset state change, and operator anecdote volume from
              being stored as an actionable signal. Chatter plotted on the dashboard is still
              noise.{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              keeps co-moving tags from being stored as a recorded causal check. Arrows on a
              diagram do not record the cause.{' '}
              <Link
                href="/insights/trend-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Trend Is Not Truth
              </Link>{' '}
              keeps a rising or falling line from being stored as a recorded check. A slope on the
              twin is not the truth of the asset.
            </p>

            <p>
              This essay states no OEM limit and supplies no plant failure mode. A cause the
              meeting read off a diagram is not root cause, and this page does not publish the
              model as if it were. The case holds the approved evidence that was stored, the
              question that was asked, and what is still unknown. It does not hold a diagnosis
              this essay made up so the map would look decisive.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Evidence from the plant beats the model
            </h2>

            <p>
              Evidence from the plant beats the model. The model is the map: the diagram, the
              CMMS schema, the dashboard, the digital twin, the process map, and any unverified
              model output those records carry. Evidence from the plant is the part of the case a
              later reader can inspect as observed fact — a check, a measurement, a work history,
              a condition record, a named source — not the picture that stands in for it. When the
              model and the plant disagree, the case keeps the disagreement in view. It does not
              overwrite the plant with the model. It does not overwrite a missing plant record
              with a confident twin.
            </p>

            <p>
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              keeps a belief, a habit, a prior shift&apos;s story, or an unverified model output
              from being stored as a recorded fact. An unverified model of the plant is that
              output when the digital twin, the diagram, or the process map is used as if the
              check had already been made.{' '}
              <Link
                href="/insights/confidence-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confidence Is Not Evidence
              </Link>{' '}
              keeps a strong gut feel, a high model score, or a manager&apos;s certainty from
              being stored as a recorded check. Being sure the twin matches the asset is still not
              the match. The score on the model is not evidence from the plant.
            </p>

            <p>
              If the case cannot show the asset configuration, the failure and maintenance
              history, and the human judgment that connects the map to a mode, the compressed
              representation is a picture without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. A diagram does not shorten it. A schema does not
              shorten it. A dashboard does not shorten it. A digital twin does not shorten it. A
              process map does not shorten it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Operators who treat the map as the terrain miss the plant
            </h2>

            <p>
              Operators who treat the map as the terrain miss degradation. Degradation is the
              change in the asset that the drawing does not have to show: wear, corrosion, looseness,
              heat, leakage, a bearing that is hotter than the symbol, a thickness that is less
              than the line weight. The diagram can be current as a drawing and stale as a plant.
              The digital twin can be current as a model run and stale as metal. Missing the
              degradation means the case proceeds on the representation. The operating reality has
              already moved.
            </p>

            <p>
              Operators who treat the map as the terrain miss local exceptions. A local exception
              is a way this asset, this crew, this shift, or this site actually runs that the CMMS
              schema and the process map do not hold. A bypass that is not a field. A temporary
              repair that is not a status. A sequence the procedure draws one way and the floor
              runs another. The schema can be valid and still not contain the exception. The
              process map can be approved and still not be the sequence that was run. Storing the
              schema or the process map as the terrain stores the rule and drops the exception.
              The exception is part of the operating reality. It stays unknown until evidence from
              the plant records it.
            </p>

            <p>
              Operators who treat the map as the terrain miss unverified outcomes. An unverified
              outcome is a result the model, the dashboard, or the closed-count field displays
              without the check on the case. The twin says the state recovered. The tile is green.
              The work order in the schema is closed. None of those displays is the verified
              operational outcome. The outcome stays unverified until verification records what
              the authorized action did on the plant. A map that looks finished is still a
              compressed representation of a check that was not written.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The map does not authorize corrective work
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
              keeps that proposal off the decision. A proposal that cites a diagram, a CMMS
              schema, a dashboard, a digital twin, or a process map is still a proposal. The
              drawing can be specific. The twin can be polished. Neither the detail nor the polish
              accepts the operational consequence. The map is not authorization for corrective
              work.
            </p>

            <p>
              Corrective work is the change someone intends after a named decision: the repair,
              the adjustment, the inspection, the isolation. Recording that intent is not the same
              as executing it, and displaying a process map is not the same as recording the
              intent. Sync must not auto-authorize because the model showed a next step. Sync
              recommends. A named human decides. If the only support is the compressed
              representation, the proposal is not ready to be stored as authorized.
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
              Execution stays with authorized systems. A process map, however complete, does not
              move execution onto Sync, and it does not replace the named decision that would have
              to come first.
            </p>

            <p>
              An alert drawn on the dashboard is still an alert.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keeps seeing, acknowledging, or silencing an alert from being stored as a decision.
              A dashboard is still a display. Dashboard Is Not Decision keeps that display off the
              decision. Color on a digital twin does not put it back as authorization,
              verification of outcome, work-order execution, or plant control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A map is not a verified operational outcome
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do
              on the plant. The case stays open until that check is on the case. Verification
              stays open until a verified operational outcome is recorded. A later model state
              that &quot;it recovered&quot; is a later compressed representation. It is not, by
              itself, the check. The dashboard can be described as clear because the tile went
              green, because the twin stepped back inside a band, because the schema status
              flipped to closed, or because the process map&apos;s last box was checked. The
              display does not record what the authorized change did.
            </p>

            <p>
              Map clearance is not the check. Clearing the picture from the meeting — nodding
              because the diagram looks right, moving on because the dashboard is green, closing
              the queue because the digital twin shows nominal — must not be read as verification
              of outcome. Sync must not auto-close because the map was current. Sync must not
              treat map clearance as Learning credit. A closed model view is not a closed case.
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
              requires a verified outcome, not a hoped-for state from a digital twin. What was
              believed may include a labeled note that a diagram, a schema, a dashboard, a twin,
              or a process map was consulted and that it was a compressed representation.
              Learning does not inherit the map as if the check had named the cause and confirmed
              the result on the plant. A later crew that repeats the work because &quot;the model
              said so,&quot; without the verification on the prior case, is inheriting a
              compressed representation. That is the wrong lesson into Learning. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish a diagram, a CMMS schema,
              a dashboard, a digital twin, or a process map as a verified operational outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">A map is not a Decision Case</h2>

            <p>
              A Decision Case opens on a question a named person can decide. The question is
              recorded before evidence or recommendation. Recording that a diagram, a CMMS schema,
              a dashboard, a digital twin, or a process map was opened does not record that
              question, and it does not record the decision. The case is the order: Question,
              Evidence, Recommendation, Human decision, then action, verification, and learning. A
              compressed representation is not that order.
            </p>

            <p>
              Treating the map as the terrain shortcuts the Question → Evidence → Recommendation →
              Human Decision path. The model jumps to a conclusion. The evidence step is skipped,
              or it is filled with the model and called evidence from the plant. The
              recommendation is implied by the next box on the process map. The human decision is
              treated as already made because the dashboard is green or the twin is nominal. That
              shortcut is not a case. A named human records the Decision Case only against
              approved evidence. Until evidence from the plant is on the case, the map remains a
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
              says until that act is recorded, the case is still a proposal. A map does not
              replace a named human decision. The diagram does not sign accept. The CMMS schema
              does not sign reject. The dashboard does not escalate. The digital twin does not
              return the proposal. The process map does not record who decided. The signed-in
              Decision Case keeps who decided visible beside the recommendation. The recorded act
              is mandatory.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Treating the map as the terrain invents false certainty
            </h2>

            <p>
              False certainty is a record that looks finished and is not. The diagram was
              detailed, so the room stores it as the asset. The schema had a failure code, so the
              code is stored as root cause. The dashboard was green, so green is stored as
              clearance. The digital twin had a high model score, so the score is stored as a
              check. The process map was approved, so the drawn sequence is stored as the sequence
              that was run. Each of those moves invents false certainty. The case looks known.
              The evidence from the plant was never attached. Degradation, local exceptions, and
              unverified outcomes stay off the record while the map looks complete.
            </p>

            <p>
              The same move floods work queues with model conviction. A conviction is a push to
              act. A queue is a list of work. Model conviction can put a job on that list because
              the twin, the diagram, or the process map is sure, not because a named person
              recorded a decision against approved evidence. The queue then teaches the wrong
              lesson: the current map is how work gets born. The Decision Case teaches the other
              lesson. Work intent waits on the named act. The named act waits on evidence from the
              plant. The map can start the question. It cannot fill the queue by itself.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              keeps the case open until the check is written down. A settled dashboard is not that
              check. A settled twin is not that check. A closed status in the CMMS schema is not
              that check unless the verified operational outcome is on the case.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync may surface a map when the limit is named
            </h2>

            <p>
              Sync may surface a map beside approved evidence, with the honesty boundary that the
              map is a compressed representation and not the operating reality. Surfacing means
              the diagram, the CMMS schema, the dashboard, the digital twin, or the process map
              can sit beside a question so a person can see that the model is not yet evidence
              from the plant. The label is part of the surface. Without that label, the screen
              hides the limit. The honesty boundary is not optional.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote a practice twin into plant evidence. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live conclusion the edition does not hold. A
              digital twin fed by simulated or seeded telemetry is a practice model. It is not a
              live operational outcome, and it is not a substitute for the approved evidence the
              operator still has to attach.
            </p>

            <p>
              Sync must not auto-close, auto-authorize, or treat map clearance as Learning credit.
              Auto-close would store the model as a finished case. Auto-authorize would store the
              process map as permission for corrective work. Learning credit would let a later
              case inherit the diagram. None of those acts is available to the system. A named
              human records the Decision Case only against approved evidence. Verification stays
              open until a verified operational outcome is recorded.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry is a practice record. A practice digital twin is still a compressed
              representation. It is not live plant evidence, and it is not a substitute for the
              check the operator still has to record. Sync refuses to treat a map as the operating
              reality.
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
              keeps an empty field from being stored as a measured zero. A blank in the CMMS
              schema is an empty field. It is not a measurement of none. Filling the blank with a
              default from the diagram, a zero from the dashboard scale, or a nominal value from
              the digital twin collects a model number. It does not collect the missing plant
              value. In Recovery, economic assumptions that were left blank stay blank. They are
              not inferred from a process map. A blank verification field is not a verified
              outcome of none, and a model that shows &quot;no deviation&quot; does not close it.
              Storing blank as zero invents false certainty and corrupts Recovery, verification,
              and Decision Case math.
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
              in Recovery, missing evidence stays unknown. Filling the unknown line with a diagram,
              a schema status, a green tile, a twin state, or a process-map box does not change
              the state to clear, and it does not name root cause. Bad or not-ready evidence stays
              blocked. A model that looks related to the blocked item does not relabel blocked as
              ready. The operator must not treat unknown as go because the map was complete. Go
              would mean the evidence is sufficient for the next recorded step. A compressed
              representation is not sufficiency.
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
              is not approval. An empty inbox is not clearance. A quiet dashboard is not
              controlled. A diagram with no alarm symbol is not a decision. A process map that
              does not draw a hold point does not write accept, reject, escalate, or return. It
              does not record a check that nobody performed. A nominal twin does not turn the
              missing response into the named decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync recommends. Humans decide.
            </h2>

            <p>
              Sync may surface a map. Sync may hold the diagram, the CMMS schema, the dashboard,
              the digital twin, or the process map beside a recommendation to gather approved
              evidence from the plant, with the honesty boundary that the map is a compressed
              representation. That is a proposal. The person who can accept the operational
              consequence records the decision. Until that act is on the case, the case is still a
              proposal. The system does not auto-accept because the model looked finished. Sync
              recommends. A named human decides.
            </p>

            <p>
              Execution stays with authorized systems. Coverage of a model is not control of the
              plant. A Decision Case that records a map as a compressed representation does not
              put Sync in control of the work, the isolation, or the change. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. The map is not the check. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The model is not the act.
            </p>

            <p className="text-xl font-semibold text-white">
              A diagram, a CMMS schema, a dashboard, a digital twin, or a process map is a
              compressed representation, not the operating reality. It is not evidence from the
              plant, not a diagnosis, not root cause, not authorization for corrective work, not a
              verified operational outcome, and not a Decision Case. Operators who treat the map
              as the terrain miss degradation, local exceptions, and unverified outcomes. Evidence
              from the plant beats the model. Blank is not zero. Unknown is not clear. Recommend
              is not authorize. Sync may surface a map when the limit is named. Sync must not
              auto-close, auto-authorize, or treat map clearance as Learning credit. A named human
              still decides. Verification stays open until a verified operational outcome is
              recorded. Execution stays with authorized systems.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes a diagram, a CMMS schema, a dashboard, a digital twin, or a process
              map to the operating reality or to a Decision Case.
            </p>

            <p>
              Anecdote Is Not Evidence is the story. Sample Is Not Population is the handful
              stored as the fleet. Noise Is Not Signal is the chatter stored as an actionable
              signal. Symptom Is Not Cause is the observed symptom stored as the cause. Threshold
              Is Not Diagnosis is the line that was crossed. Assumption Is Not Evidence is the
              belief, including an unverified model output, stored in place of a fact. Confidence
              Is Not Evidence is the certainty stored in place of a check. Correlation Is Not
              Causation is the chart of co-movement. Trend Is Not Truth is the slope. Proxy Is Not
              Outcome is the stand-in measure. Verification Is Not Optional is the check that
              still has to be written. Map Is Not Terrain is the compressed representation itself:
              the diagram, the CMMS schema, the dashboard, the digital twin, the process map. A
              story about the map is still not evidence. A handful of plants on the process map is
              still not the population. Chatter on the dashboard is still not a signal. A symptom
              drawn on the diagram is still not the cause. A limit on the map is still not a
              diagnosis. An unverified twin is still not a recorded fact. A high model score is
              still not a check. Arrows are still not causation. A slope is still not the truth. A
              green tile is still not the outcome. A later model state does not close the case.
              The label stays. The evidence from the plant stays unwritten until it is on the
              case. The decision stays unwritten until a named person records it.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. A map does not interpret
              them into clearance. On this record, blank is not zero, unknown is not clear, and
              silence is not the named decision. A case that is unknown, blank, or quiet is not
              made ready by a diagram, a schema default, a green dashboard, a nominal twin, or a
              completed box on a process map.
            </p>

            <p>
              The check that closes the case is still verification. The lesson a later case may
              inherit is still the verified operational outcome, not a hoped-for state from the
              model. The trail behind a recommendation is still evidence lineage. An alert is
              still not a decision. A dashboard is still not a decision, and it is still not the
              terrain. Recommend is not authorize. Those records are either on the case or they
              are not. If they are not, a map does not supply them. Evidence from the plant beats
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
              map does not collapse that split into evidence from the plant. A proposal with no
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
              is step 07. A later case inherits the verified outcome, not the diagram, the schema,
              the dashboard, the digital twin, or the process map the last shift treated as the
              lesson.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a compressed representation as live evidence or as
              plant control. Later editions can deepen a chapter. The spine stays in this order.
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
              and supplies no failure mode from a diagram. It does not claim that Sync executes plant work,
              writes a work order, isolates equipment, or controls a plant. It does
              not claim that a diagram, a CMMS schema, a dashboard, a digital twin, or a process
              map is the operating reality, that a compressed representation is evidence from the
              plant, that a model is a diagnosis, that a schema failure code is root cause, that a
              process map is authorization for corrective work, that a green twin is a verified
              operational outcome, or that a map is a Decision Case. It does not claim that
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
              records. They are not live plant results, and a practice digital twin is not the
              operating reality. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/model-is-not-reality"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Model Is Not Reality
              </Link>
              , on why a digital twin, a KPI model, a risk matrix, an RUL curve, a Monte Carlo
              run, or an LLM summary is a compressed representation and not the plant. Companion
              reading:{' '}
              <Link
                href="/insights/anecdote-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Anecdote Is Not Evidence
              </Link>{' '}
              on why a single operator story, a hallway claim, a memory of how it always fails, a
              vendor demo vignette, or a loud near-miss retelling is not evidence and not a
              Decision Case,{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              on why a display is not authorization,{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              on why a stand-in measure is not the verified operational outcome,{' '}
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
              on why missing evidence is recorded as unknown, not as clear or ready,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a drafted next action is still a proposal,{' '}
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
              on why sensor chatter and telemetry spikes without a confirmed asset state change
              are not an actionable signal,{' '}
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
              on why a rising or falling line is not a recorded check,{' '}
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
              on why work intent is not plant execution, and{' '}
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
              map.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the check, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the verification step. Map
                is not terrain. A diagram, a CMMS schema, a dashboard, a digital twin, or a
                process map is a compressed representation, not the operating reality. It can
                inform a recommendation to investigate. It is not a diagnosis, not root cause, not
                authorization for corrective work, not a verified operational outcome, and not a
                Decision Case. Evidence from the plant beats the model. Blank is not zero. Unknown
                is not clear. Recommend is not authorize. Sync may surface a map when the limit is
                named. A named human still decides. Verification stays open until a verified
                operational outcome is recorded. Execution stays with authorized systems. The
                Reliability Engineer workspace is where a signed-in Decision Case is completed. A
                Reliability Assessment is the bounded review when the question is whether the
                records can support a conclusion. None of those is a claim that Sync executes
                plant work, or that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="map-is-not-terrain" />
        </motion.article>
      </div>
    </main>
  );
}
