'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('status-is-not-clearance');

export default function StatusIsNotClearancePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Status Is Not Clearance</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A status field, a status tile, a status badge, or an &quot;all systems status OK&quot;
              string is a label on stored or computed values under the thresholds someone chose. It
              is not clearance to run, release, start work, leave equipment in service, or close a
              Decision Case.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Status is not clearance. The field, the tile, the badge, and the &quot;all systems
              status OK&quot; string are labels on stored or computed values: a historian tag, a
              CMMS state, a calculated health word, or an alarm bit already held in the system that
              owns it, compared with the thresholds someone chose. Printing OK on that comparison
              does not run the asset, release a hold, start work, leave equipment in service, or
              close a Decision Case. Clearance is a named human decision against observed outcomes,
              named coverage and assumptions, and refusal when evidence is not enough.               Treating the label as clearance is another path to false clearance under the honesty and verification boundary. Sync may surface the status beside a Decision Case when the
              threshold, the coverage, and the assumptions are named. Surfacing is still a read. A
              named human decides. Verification stays open until a verified operational outcome is
              recorded. Direct plant execute stays off.
            </p>

            <p>
              An OK badge looks like a release. The status field says normal. The tile says in
              service. The header string says all systems status OK. The meeting treats the label
              as if the plant had been cleared to run, a hold had been lifted, work had been
              started, equipment had been left in service, or a Decision Case had been closed. It
              has not. The screen updated because a query returned a value that met a rule, or
              because a system stored a word for that comparison. The rule can be a high limit, a
              low limit, a score band, or a status word. Someone chose those limits. The label does
              not say who decided, for which mode, or against which observed outcome. The process
              can sit inside the band and still be unfit for the decision in the room. A sensor can
              be frozen on a good value. A point can be bypassed. A calculation can store OK
              without seeing the failure mode the question is about.
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
              . This essay is why a status label cannot be read as clearance. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records who accepted, rejected, escalated, or returned. The status field does
              not record that act.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Status is a label on a value under a threshold
            </h2>

            <p>
              The label has four steps. A source holds a value: a historian tag, a CMMS state, a
              calculated health score, or an alarm bit. A rule compares that value with limits a
              person, a procedure, or a configuration chose. A stored word or a renderer maps the
              comparison to a status field, a status tile, a status badge, or an all systems status
              OK string when the value sits inside the rule. A person reads the label.
            </p>

            <p>
              None of those steps is clearance. The comparison can be true and the asset can still
              be the wrong one to run. The band can have been set for a different operating mode.
              The word can be a rollup of points that do not include the failure the question is
              about. The status field can be the last good word the source stored, not a fresh
              observation of the plant.
            </p>

            <p className="text-xl font-semibold text-white">
              A status field, a status tile, a status badge, and an all systems status OK string
              are the same kind of label. Each one names a stored or computed value under the
              thresholds someone chose.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already treats the color as a rendering rule. Painting the comparison green does not
              run the asset. This essay is the word that often sits on that same comparison. The
              tile can be green, gray, or uncolored. The field can say OK, normal, available, or
              all systems status OK. The string is still a label. Meeting the rule is not clearance
              to run, release, start work, leave equipment in service, or close a Decision Case.
            </p>

            <p>
              <Link
                href="/insights/dashboard-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Control
              </Link>{' '}
              treats the screen as a read. Refreshing, filtering, or drilling into the status tile
              does not write a setpoint, an isolation, or a work order. The badge on that read is
              still a read. A status string does not become a command because it says OK.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The threshold was chosen
            </h2>

            <p>
              Status does not arrive from the asset. It arrives from a comparison. The high limit,
              the low limit, the score band, and the status word that fills the field are settings.
              They can come from an OEM sheet, a site procedure, a model, or a default left in a
              configuration. This essay states no OEM limit and no operating threshold. It states
              that whatever limits are in use were chosen, and that the label only reports the
              comparison.
            </p>

            <p>
              A tight band and a loose band can store the same OK when the value sits inside. The
              badge does not show which band was used. It does not show the mode the band was
              written for. It does not show the points the rollup left out. Naming the threshold,
              the coverage, and the assumptions is part of the evidence. Leaving them unnamed and
              reading the status as clearance skips that record.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A status string can still be the wrong evidence
            </h2>

            <p>
              <Link
                href="/insights/telemetry-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Telemetry Is Not Truth
              </Link>{' '}
              keeps a stream of tags, sensors, historians, SCADA, and CMMS counters from being
              stored as the plant decision. A dense feed can compute an all systems status OK
              string and still be the wrong sensor, the wrong unit, a stale sample, an aliased
              signal, or a proxy that does not track the failure mode. The label does not correct
              any of those. It reports that the values which arrived sat inside the thresholds
              someone chose.
            </p>

            <p>
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              names the watched set. An all systems status OK string is OK for the points the
              status was computed from. Equipment that is not in that set is not cleared by the
              label on the points that are. Coverage of a watched set is not permission to order
              work, isolate equipment, or change the plant. A status badge for that set is not
              clearance to run the equipment the set does not watch, and it is not clearance to run
              the equipment it does watch.
            </p>

            <p className="text-xl font-semibold text-white">
              Evidence from the plant beats the label. If the evidence is not enough, the case
              refuses. A status field does not fill the gap.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Clearance is a named decision
            </h2>

            <p>
              Run, release, start work, leave in service, and close a Decision Case are decisions.
              Each one needs a named person who can accept the operational consequence, a record of
              what was observed, the coverage and assumptions that bound the evidence, and a
              refusal when that evidence is not enough. The status string is none of those records.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              states the act. A named person accepts, rejects, escalates, or returns the
              recommendation. Until that act is recorded, the case is still a proposal. An all
              systems status OK string does not imply the act. The system does not accept the
              recommendation because a badge says OK.
            </p>

            <p>
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              states the other side of the same rule. A threshold breach, a red tile, or a pager
              page can surface that something crossed a limit. Seeing it, acknowledging it, or
              silencing it is not a decision. A status of OK is the label on the inside of the
              rule. The absence of an alert is not clearance. Returning a field to OK because an
              alert cleared is not authorization, not verification of outcome, and not plant
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
              states that boundary for no reply, no alert, and an empty inbox. Status OK is not a
              stronger form of quiet. Quiet is the absence of a message. The status string is an
              affirmative label applied when a value met a rule. Quiet and OK can both be true
              while the decision to run, release, or start work has not been made.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite what a status field held when the source, the time, the threshold,
              the coverage, and the assumptions are named. That citation is a record of a read and
              a comparison. It is not a record that the asset was cleared to run, that work was
              released, or that the case was closed. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter publishes that step. Stage-1 evidence is the record held on the case. A live
              connector that pulls historian or control-system tags sits outside this edition.
              Simulated or seeded telemetry and assets are practice records. A practice status that says OK is not a customer plant release.
            </p>

            <p>
              A recommendation may say investigate because of what the status showed, or it may say
              the label is not enough. The proposal states a next action, the evidence it uses, and
              the uncertainty it leaves in view. Drafting it does not change the plant.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              states that split. A named person accepts, rejects, escalates, or returns. The act
              records who decided. It still does not start work because a badge says OK.
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
              systems write the work order or isolate the equipment. A status field does not unlock
              it. Sync does not write the work order. Sync does not start the asset. Sync does not
              release a hold. The systems that already hold execution authority write the work
              order or the isolation. Authorized execution systems perform that write. Direct plant
              execute stays off.
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
              observed outcome, not a later status badge. A field that returns to OK after someone
              else operated the plant is not the check, and it does not close a Decision Case. Sync
              must not auto-close, auto-authorize, or treat status clearance as Learning credit.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              states what a later case may inherit. Learning keeps the closed case. It does not
              keep a status word. A later question that cites an all systems status OK string as if
              the plant had been cleared is citing a label.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a status beside approved evidence when the threshold, coverage, and
              assumptions are named. Sync refuses false precision. Sync refuses when evidence is insufficient. A named human still decides.
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
              directly. Evidence may hold what a status field showed and which threshold stored the
              word. Human decision may hold who accepted the consequence. Verification may hold the
              observed outcome. None of those steps is a status badge. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a label as clearance. Later editions can deepen a
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
              limit and no operating threshold. It does not claim that a status field runs an
              asset, releases a hold, starts work, leaves equipment in service, closes a Decision
              Case, or controls a plant. It does not claim that Sync executes plant work.
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
              It does not describe Sync writing work orders, starting equipment, releasing a hold,
              or controlling the plant. Simulated or seeded telemetry and assets are practice
              records. They are not live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/ready-is-not-cleared"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Ready Is Not Cleared
              </Link>
              , on why a green ready flag, a ready checklist, a ready-to-start badge, or a system
              ready, crew ready, or parts ready string is a readiness label under the thresholds
              someone chose, and why that label is not clearance to run, release, start work, leave
              equipment in service, or close a Decision Case. Companion reading:{' '}
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              on why a green tile is a display under a threshold and not permission to go,{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              on why no reply and an empty inbox are not authorization,{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              on why a rule crossing is not the decision,{' '}
              <Link
                href="/insights/dashboard-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Control
              </Link>{' '}
              on why a dashboard reads a value and does not write the plant,{' '}
              <Link
                href="/insights/telemetry-is-not-truth"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Telemetry Is Not Truth
              </Link>{' '}
              on why a stream of tags is not truth for the plant decision,{' '}
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
              chapter records the act. The status label does not.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. A status
                field is a label on stored or computed values under the thresholds someone chose.
                Clearance still requires a named human decision against observed outcomes. The
                Reliability Engineer workspace is where a signed-in Decision Case is completed. A
                Reliability Assessment is the bounded review when the question is whether the
                records can support a conclusion. None of those is a claim that Sync executes plant
                work, or that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="status-is-not-clearance" />
        </motion.article>
      </div>
    </main>
  );
}
