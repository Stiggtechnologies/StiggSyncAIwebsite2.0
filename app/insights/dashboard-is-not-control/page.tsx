'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('dashboard-is-not-control');

export default function DashboardIsNotControlPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Dashboard Is Not Control</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A dashboard reads a value and draws it. A tile, a trend, or a status color is that
              drawing. Control is a different call: a write that changes equipment state or
              authorizes maintenance, sent through a system that accepts the write.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Dashboard is not control. A dashboard reads a stored or streamed value — a historian
              tag, a CMMS count, a health score, an alarm state already held in the system that
              owns it — and renders that value as a tile, a trend, or a color. Refreshing the
              screen, filtering the rows, changing the time range, or drilling into a point
              repeats the read. It does not write a setpoint, start or stop equipment, open or
              close a valve, isolate a circuit, or create a work order. Control is that write. It
              requires a named actor and a system that already accepts the command. Sync may
              surface the read beside a Decision Case. Surfacing does not attach write credentials
              to the case. A named human decides. Authorized execution systems write the work order
              or the isolation. Direct plant execute stays off.
            </p>

            <p>
              A live screen looks like a station that can act. The number moves. The color
              changes. The meeting treats the person looking at the screen as if looking were
              commanding. It is not. The screen updated because a query returned a newer value.
              The plant may have changed, or it may not have. The color does not say which. The
              process can move on its own. A sensor can fail. Someone else can send a command
              from a system that accepts writes. The dashboard does not record which of those
              happened. It displays a value.
            </p>

            <p>
              Sync keeps that split on the signed-in Decision Case. A signed-in user completes the
              case in a fixed order: Question, Evidence, Recommendation, Human decision, Action,
              Verification, and Learning. {fieldManual.author} states that order in{' '}
              <Link
                href={fieldManualPath()}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Field Manual {fieldManual.version}
              </Link>
              . The manuals index lives at{' '}
              <Link href="/manuals" className="text-[#3B82F6] hover:text-white transition-colors">
                /manuals
              </Link>
              . This essay is why a rendered value cannot be read as control of the plant. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records work intent after a named decision. The intent is still not the
              write.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">A dashboard is a read</h2>

            <p>
              The display path has four steps. A source holds a value: a historian tag, a CMMS
              count, a calculated health score, or an alarm bit in the system that owns it. A
              query or a subscription copies the current value out. A renderer maps that copy to a
              tile, a line, or a color. A person looks at the renderer.
            </p>

            <p>
              None of those steps sends a command back. The system that stores the displayed value
              and the system that can change the asset are often different systems. When they are
              the same system, the display path and the command path are still different calls.
              One returns a value. The other accepts a write only if the caller holds the
              authority and the credentials that system requires.
            </p>

            <p className="text-xl font-semibold text-white">
              Refresh, filter, sort, time range, drill-down, export, and screenshot stay on the
              read path. Each one asks for values again or rearranges values already returned.
              None of them is a setpoint.
            </p>

            <p>
              <Link
                href="/insights/map-is-not-terrain"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Map Is Not Terrain
              </Link>{' '}
              already treats a dashboard as a compressed representation, not the operating
              reality. This essay is the call underneath the picture. The picture is a copy of a
              value at a time. It is not a command, and it is not the asset.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A command on the same screen is a different call
            </h2>

            <p>
              Some operator stations draw a trend and also offer a setpoint field, a start, or a
              stop. The trend is the read. The field is a write only when it is wired to a system
              that accepts the command, and only when the person using it holds the operating
              authority and the credentials that system requires. Sharing a screen does not merge
              the two calls. A chart placed next to a button is not the button.
            </p>

            <p>
              Sync does not provide that write. This edition does not describe plant execute. It
              does not describe Sync issuing setpoints, permissives, starts, stops, isolations, or
              work orders. A dashboard surfaced beside a Decision Case is the read. The case can
              store a copy of what the screen showed. That copy does not become a control station.
            </p>

            <p className="text-xl font-semibold text-white">
              A value rendered on the screen is not a command. Sync does not hold the credentials
              that would send one.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Control is the write</h2>

            <p>
              Control authority over equipment state or maintenance work sits with the people and
              the systems that already hold it. A setpoint, a start, a stop, or a permissive goes
              through the control system the site already uses, under the people who hold
              operating authority. Isolation is the site practice for taking equipment out of
              service. A work order is written in the customer CMMS or EAM, or the equivalent
              system of record.
            </p>

            <p>
              A tile does not hold those authorities by being visible. A trend does not hold them
              by updating. A Decision Case that stores a reading from the dashboard stores a
              record of a display. Storage is not a command.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may show the dashboard. A named human decides. Authorized execution systems
              write the work order or the isolation.
            </p>

            <p>
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              names the watched set: sensors, CMMS rows, patrol routes, and the tiles on a screen.
              Coverage is what is watched. It is not permission to order work, isolate equipment,
              or change the plant. This essay is the split under the tile. The tile is a read of a
              value. Control is a write. A current tile can exist with no write path from that
              screen. A write path can exist in the control system while the dashboard only reads.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Color does not name the actor
            </h2>

            <p>
              A green tile, a quiet board, or a red tile is a rendering rule applied to a value.
              The same color can come from the process sitting inside the rule, from a sensor that
              stopped reporting, or from a command someone else already sent. The color does not
              name who sent a write. It does not say whether any write was sent.
            </p>

            <p>
              A quiet dashboard is not clearance.{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              states that boundary for no reply, no alert, and an empty inbox. No alarm on a
              dashboard is not approval to run, and it is not evidence that a command is holding
              the asset.
            </p>

            <p>
              Seeing the color is not a Decision Case and not a decision.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps the display off the named act. The screen can change while no person has
              accepted, rejected, escalated, or returned a recommendation. This essay is the next
              boundary on the same screen. The display is not the decision, and the display is not
              the write.
            </p>

            <p>
              A missing tile is not a measured zero.{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>{' '}
              keeps an empty field from being stored as a measurement of none. An empty cell means
              the read did not return a value. It does not mean the asset was commanded to zero,
              and it does not mean the asset is under control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite what a display held when the source and the time are named. That
              citation is a record of a read. It is not a record that Sync commanded the asset.
              The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter publishes that step. Stage-1 evidence is the record held on the case. A live
              connector that pulls historian or control-system tags sits outside this edition.
              Simulated or seeded telemetry and assets are practice records. They are not customer
              plant control, and a practice dashboard is not a command.
            </p>

            <p>
              A recommendation may say investigate because of what the display showed. The
              proposal states a next action, the evidence it uses, and the uncertainty it leaves
              in view. Drafting it does not change the plant.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              states that split. A named person accepts, rejects, escalates, or returns. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter publishes the act. The act records who decided. It still does not write a
              setpoint, isolate equipment, or create a work order.
            </p>

            <p>
              If the named person approves work, the case may store the intent.{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps that intent off the plant. ACTION stays locked until authorized execution
              systems write the work order or isolate the equipment. A refreshed dashboard does
              not unlock it. A tile is not a work order. Sync does not write the work order. The
              systems that already hold execution authority write the work order or the isolation.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter publishes the check.{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              states the gate: the case stays open until the check is recorded. The check is the
              observed outcome of the write, not a later color on the screen. A tile that changes
              after someone else operated the plant is not Sync controlling the plant, and it is
              not the check.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              states what a later case may inherit. Learning keeps the closed case. It does not
              keep a color change, a refreshed tile, or a dashboard that was never tied to an
              authorized write. A later question that cites a green board as if the plant were
              under control is citing a rendering rule.
            </p>

            <p>
              A telemetry feed, a precise residual, or a calibration can be drawn on the same
              screen. Drawing it does not make the screen a command, and it does not make the
              drawing truth, accuracy, or validation.{' '}
              <Link
                href="/insights/telemetry-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Telemetry Is Not Truth
              </Link>{' '}
              keeps a stream of tags from being stored as the plant decision.{' '}
              <Link
                href="/insights/accuracy-is-not-precision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accuracy Is Not Precision
              </Link>{' '}
              keeps repeatability from being stored as truth relative to that decision.{' '}
              <Link
                href="/insights/calibration-is-not-validation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Calibration Is Not Validation
              </Link>{' '}
              keeps a small historical residual from being stored as fitness for the decision. The
              residual can sit in a tile. The tile is still a read.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Where the public statement lives
            </h2>

            <p>
              Field Manual {fieldManual.version} is the public contents of this loop. Start at the{' '}
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
              directly. Evidence may hold what a display showed. Action may hold work intent after
              a named decision. Neither step is a write to the plant. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a rendered value as plant control. Later editions
              can deepen a chapter. The spine stays in this order.
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
              This is an essay about the Decision Case order, not a customer case study. It names
              no plant, states no savings figure, and claims no prevented failure. It states no OEM limit
              and no operating threshold. It does not claim that a dashboard writes a
              setpoint, starts or stops equipment, isolates a circuit, creates a work order, or
              controls a plant. It does not claim that Sync executes plant work.
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
              describes that journey. This edition does not describe plant execute, a live connector tag pull,
              SMTP invite delivery, or automatic revocation of access on expiry as live. It does not
              describe Sync writing work orders, isolating equipment, or controlling the plant.
              Simulated or seeded telemetry and assets are practice records. They are not live plant
              results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/telemetry-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Telemetry Is Not Truth
              </Link>{' '}
              on why a stream of tags, sensors, historians, SCADA, and CMMS counters is not truth
              for the plant decision,{' '}
              <Link
                href="/insights/accuracy-is-not-precision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accuracy Is Not Precision
              </Link>{' '}
              on why repeatability is not truth relative to the plant decision,{' '}
              <Link
                href="/insights/calibration-is-not-validation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Calibration Is Not Validation
              </Link>{' '}
              on why a small historical residual is not fitness for the decision,{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              on why seeing a display is not a Decision Case and not a decision,{' '}
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              on why the watched set is not permission to order work,{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why a recorded ACTION disposition is not the write,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a drafted proposal is not permission,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded, and{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              on why a quiet dashboard is not authorization. A{' '}
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
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records intent. Authorized execution systems perform the write.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. A
                dashboard reads a value and draws it. Control is a write through a system that
                accepts the write. The Reliability Engineer workspace is where a signed-in
                Decision Case is completed. A Reliability Assessment is the bounded review when
                the question is whether the records can support a conclusion. None of those is a
                claim that Sync executes plant work, or that self-guided onboarding is a live
                product path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={fieldManualPath()}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
                >
                  Read Field Manual {fieldManual.version}
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
          <InsightNextSteps slug="dashboard-is-not-control" />
        </motion.article>
      </div>
    </main>
  );
}
