'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('green-is-not-go');

export default function GreenIsNotGoPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Green Is Not Go</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A green tile, a green status, a green health score, or an all-green dashboard is a
              display of a stored or computed value under the thresholds someone chose. It is not
              permission to run, clear, start, or leave equipment in service.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Green is not go. The color is a rendering rule applied to a stored or computed
              value: a historian tag, a CMMS state, a calculated health score, or an alarm bit
              already held in the system that owns it, compared with the thresholds someone
              chose. Painting that comparison green does not run the asset, clear a hold, start
              equipment, or leave equipment in service. Go and clearance still require a named
              human decision against observed outcomes, named coverage and assumptions, and
              refusal when evidence is insufficient. Treating green as go is another path to
              false clearance under the honesty and verification boundary. Sync may surface the
              color beside a Decision Case when the threshold, the coverage, and the assumptions
              are named. Surfacing is still a read. A named human decides. Verification stays
              open until a verified operational outcome is recorded. Direct plant execute stays
              off.
            </p>

            <p>
              A green board looks like a release. The tiles are the same color. The health score
              sits inside the band. The meeting treats the color as if the plant had been cleared
              to run, a hold had been lifted, a start had been approved, or equipment had been
              left in service. It has not. The screen updated because a query returned a value
              that met a rule. The rule can be a high limit, a low limit, a score band, or a
              status word. Someone chose those limits. The color does not say who, for which
              mode, or against which observed outcome. The process can sit inside the band and
              still be unfit for the decision in the room. A sensor can be frozen on a good
              value. A point can be bypassed. A calculation can paint green without seeing the
              failure mode the question is about.
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
              . This essay is why a green display cannot be read as permission to go. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records who accepted, rejected, escalated, or returned. The color does not
              record that act.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Green is a value under a threshold
            </h2>

            <p>
              The color has four steps. A source holds a value: a historian tag, a CMMS state, a
              calculated health score, or an alarm bit. A rule compares that value with limits a
              person, a procedure, or a configuration chose. A renderer maps the comparison to
              green when the value sits inside the rule. A person looks at the renderer.
            </p>

            <p>
              None of those steps is a release. The comparison can be true and the asset can still
              be the wrong one to start. The band can have been set for a different operating
              mode. The score can be a rollup of points that do not include the failure the
              question is about. The status word can be the last good value the source stored,
              not a fresh observation of the plant.
            </p>

            <p className="text-xl font-semibold text-white">
              A green tile, a green status, a green health score, and an all-green dashboard are
              the same kind of display. Each one shows a stored or computed value under the
              thresholds someone chose.
            </p>

            <p>
              <Link
                href="/insights/dashboard-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Control
              </Link>{' '}
              already treats the screen as a read. Refreshing, filtering, or drilling into the
              tile does not write a setpoint, an isolation, or a work order. This essay is the
              call the color invites on that same read. The tile is green because a value met a
              rule. Meeting the rule is not permission to run, clear, start, or leave equipment
              in service.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The threshold was chosen
            </h2>

            <p>
              Green does not arrive from the asset. It arrives from a comparison. The high limit,
              the low limit, the score band, and the status word that paints the tile are
              settings. They can come from an OEM sheet, a site procedure, a model, or a default
              left in a configuration. This essay states no OEM limit and no operating threshold.
              It states that whatever limits are in use were chosen, and that the color only
              reports the comparison.
            </p>

            <p>
              A tight band and a loose band paint the same color when the value sits inside. The
              color does not show which band was used. It does not show the mode the band was
              written for. It does not show the points the score left out. Naming the threshold,
              the coverage, and the assumptions is part of the evidence. Leaving them unnamed and
              reading the color as go skips that record.
            </p>

            <p>
              <Link
                href="/insights/calibration-is-not-validation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Calibration Is Not Validation
              </Link>{' '}
              keeps a small historical residual from being stored as fitness for the decision. A
              calibration can move a score into the band and paint the tile green. The residual
              is still not validation. The green tile is still not go.{' '}
              <Link
                href="/insights/accuracy-is-not-precision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accuracy Is Not Precision
              </Link>{' '}
              keeps repeatability from being stored as truth relative to the plant decision. A
              precise health score can sit in the same place every time and still be the wrong
              quantity for the decision. Painting that repeatable number green does not make it
              accuracy, and it does not make it permission.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A green feed can still be the wrong evidence
            </h2>

            <p>
              <Link
                href="/insights/telemetry-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Telemetry Is Not Truth
              </Link>{' '}
              keeps a stream of tags, sensors, historians, SCADA, and CMMS counters from being
              stored as the plant decision. A dense feed can look green and still be the wrong
              sensor, the wrong unit, a stale sample, an aliased signal, or a proxy that does not
              track the failure mode. The color does not correct any of those. It reports that
              the values which arrived sat inside the thresholds someone chose.
            </p>

            <p>
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              names the watched set. An all-green dashboard is green for the points on the
              screen. Equipment that is not on the screen is not cleared by the color of the
              points that are. Coverage of a watched set is not permission to order work, isolate
              equipment, or change the plant. A full green board of that set is not permission to
              run the equipment the set does not watch, and it is not permission to run the
              equipment it does watch.
            </p>

            <p className="text-xl font-semibold text-white">
              Evidence from the plant beats the color. If the evidence is insufficient, the case
              refuses. A green tile does not fill the gap.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Go is a named decision
            </h2>

            <p>
              Run, clear, start, and leave in service are decisions about the plant. Each one
              needs a named person who can accept the operational consequence, a record of what
              was observed, the coverage and assumptions that bound the evidence, and a refusal
              when that evidence does not support the call. The color is none of those records.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              states the act. A named person accepts, rejects, escalates, or returns the
              recommendation. Until that act is recorded, the case is still a proposal. A green
              dashboard does not imply the act. The system does not accept the recommendation
              because the tiles are green.
            </p>

            <p>
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              states the other color. A threshold breach, a red tile, or a pager page can surface
              that something crossed a rule. Seeing it, acknowledging it, or silencing it is not
              a decision. A green status is the same class of display on the inside of the rule.
              The absence of red is not a decision to go. Clearing an alert because the tile
              returned to green is not authorization, not verification of outcome, and not plant
              control.
            </p>

            <p>
              A quiet board is not clearance either.{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              states that boundary for no reply, no alert, and an empty inbox. Green is not a
              stronger form of quiet. It is a color applied when a value met a rule. Quiet and
              green can both be true while the decision to run has not been made.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite what a display held when the source, the time, the threshold, the
              coverage, and the assumptions are named. That citation is a record of a read and a
              comparison. It is not a record that the asset was cleared to run. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter publishes that step. Stage-1 evidence is the record held on the case. A live
              connector that pulls historian or control-system tags sits outside this edition.
              Simulated or seeded telemetry and assets are practice records. A practice board painted green is not a customer plant release.
            </p>

            <p>
              A recommendation may say investigate because of what the display showed, or it may
              say the color is not enough. The proposal states a next action, the evidence it
              uses, and the uncertainty it leaves in view. Drafting it does not change the plant.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              states that split. A named person accepts, rejects, escalates, or returns. The act
              records who decided. It still does not start equipment because a tile is green.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records that intent.{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps that intent off the plant. ACTION stays locked until authorized execution
              systems write the work order or isolate the equipment. A green tile does not unlock
              it. Sync does not write the work order. Sync does not start the asset. The systems
              that already hold execution authority write the work order or the isolation.
              Authorized execution systems perform that write. Direct plant execute stays off.
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
              observed outcome, not a later green tile. A health score that returns to the band
              after someone else operated the plant is not the check. Sync must not auto-close,
              auto-authorize, or treat green clearance as Learning credit.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              states what a later case may inherit. Learning keeps the closed case. It does not
              keep a color. A later question that cites an all-green dashboard as if the plant
              had been cleared is citing a rendering rule.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a green status beside approved evidence when the threshold,
              coverage, and assumptions are named. Sync refuses false precision. Sync refuses when evidence is insufficient. A named human still decides.
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
              directly. Evidence may hold what a display showed and which threshold painted it.
              Human decision may hold who accepted the consequence. Verification may hold the
              observed outcome. None of those steps is a green tile. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a color as clearance. Later editions can deepen a
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
              This is an essay about the Decision Case order, not a customer case study. It names
              no plant, states no savings figure, and claims no prevented failure. It states no OEM
              limit and no operating threshold. It does not claim that a green tile runs an asset,
              clears a hold, starts equipment, leaves equipment in service, or controls a plant.
              It does not claim that Sync executes plant work.
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
              SMTP invite delivery, or automatic revocation of access on expiry as live.
              It does not describe Sync writing work orders, starting equipment, or controlling the
              plant. Simulated or seeded telemetry and assets are practice records. They are not
              live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/status-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Status Is Not Clearance
              </Link>
              , on why a status field, a status tile, a status badge, or an all systems status OK
              string is a label on stored or computed values under the thresholds someone chose,
              and why that label is not clearance to run, release, start work, leave equipment in
              service, or close a Decision Case. Companion reading:{' '}
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              on why a verified stamp is a past check and not assurance, and not a stronger form of
              green,{' '}
              <Link
                href="/insights/ready-is-not-cleared"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Ready Is Not Cleared
              </Link>{' '}
              on why a green ready flag, a ready checklist, a ready-to-start badge, or a system
              ready, crew ready, or parts ready string is a readiness label under the thresholds
              someone chose, and why that label is not clearance to run, release, start work, leave
              equipment in service, or close a Decision Case,{' '}
              <Link
                href="/insights/dashboard-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Control
              </Link>{' '}
              on why a dashboard reads a value and does not write the plant,{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              on why a rule crossing is not the decision,{' '}
              <Link
                href="/insights/telemetry-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Telemetry Is Not Truth
              </Link>{' '}
              on why a stream of tags is not truth for the plant decision,{' '}
              <Link
                href="/insights/accuracy-is-not-precision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accuracy Is Not Precision
              </Link>{' '}
              on why repeatability is not truth relative to that decision,{' '}
              <Link
                href="/insights/calibration-is-not-validation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Calibration Is Not Validation
              </Link>{' '}
              on why a small historical residual is not fitness for the decision,{' '}
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              on why the watched set is not permission to order work,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded, and{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              on why a named person still has to accept, reject, escalate, or return. A{' '}
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
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records the act. The color does not.
            </p>

            <p>
              <Link
                href="/insights/assured-is-not-proven"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assured Is Not Proven
              </Link>{' '}
              states the next split: time-bounded confidence that an asset stays known-good under
              operating conditions, with ownership and monitoring, is still not proof of a specific
              claim under named conditions.
            </p>

            <p>
              <Link
                href="/insights/proof-is-not-authorization"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proof Is Not Authorization
              </Link>{' '}
              states the split after the chain closes. A closed chain is not permission to run,
              and it does not clear equipment to run.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. A green
                tile is a stored or computed value under the thresholds someone chose. Go still
                requires a named human decision against observed outcomes. The Reliability
                Engineer workspace is where a signed-in Decision Case is completed. A Reliability
                Assessment is the bounded review when the question is whether the records can
                support a conclusion. None of those is a claim that Sync executes plant work, or
                that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="green-is-not-go" />
        </motion.article>
      </div>
    </main>
  );
}
