'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('ready-is-not-cleared');

export default function ReadyIsNotClearedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready Is Not Cleared</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A green ready flag, a ready checklist, a ready-to-start badge, or a &quot;system
              ready,&quot; &quot;crew ready,&quot; or &quot;parts ready&quot; string is a readiness
              label under the thresholds someone chose. It is not clearance to run, release, start
              work, leave equipment in service, or close a Decision Case.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Ready is not cleared. The word is a readiness label applied to a stored or computed
              value: a flag, a checklist, a badge, or a status string already held in the system
              that owns it, compared with the thresholds someone chose. Showing that comparison as
              ready does not run the asset, release the work, start the job, leave equipment in
              service, or close a Decision Case. Clearance remains a named human decision against
              observed outcomes, named coverage and assumptions, and refusal when evidence is
              missing. Treating ready as cleared is another path to false clearance under the
              honesty and verification boundary. Sync may surface the label beside a Decision Case
              when the threshold, the coverage, and the assumptions are named. Surfacing is still a
              read. A named human decides. Verification stays open until a verified operational
              outcome is recorded. Direct plant execute stays off.
            </p>

            <p>
              A ready flag looks like a release. The checklist is complete. The badge says ready
              to start. The status line reads system ready, crew ready, or parts ready. The meeting
              treats the label as if the plant had been cleared to run, a release had been granted,
              work had been started, equipment had been left in service, or the Decision Case had
              been closed. It has not. The screen updated because a query returned a value that met
              a rule, or a list of boxes that a person, a procedure, or a configuration marked.
              Someone chose those boxes and those limits. The label does not say who accepted the
              consequence, for which mode, or against which observed outcome. The checklist can be
              complete and the asset can still be unfit for the decision in the room. A point can
              be bypassed. A part can be marked ready because a bin location matched a string. A
              crew can be marked ready because a roster field was filled. A status is not
              clearance. The string that says ready is a status.
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
              . This essay is why a readiness label cannot be read as clearance. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records who accepted, rejected, escalated, or returned. The label does not
              record that act.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Ready is a label under a threshold
            </h2>

            <p>
              The label has four steps. A source holds a value: a green ready flag, a ready
              checklist, a ready-to-start badge, or a status string. A rule compares that value
              with limits or required boxes a person, a procedure, or a configuration chose. A
              renderer shows ready when the comparison passes. A person looks at the renderer.
            </p>

            <p>
              None of those steps is clearance. The comparison can be true and the asset can still
              be the wrong one to start. The boxes can have been written for a different operating
              mode. The checklist can be a rollup of items that do not include the failure the
              question is about. The status string can be the last good value the source stored,
              not a fresh observation of the plant.
            </p>

            <p className="text-xl font-semibold text-white">
              A green ready flag, a ready checklist, a ready-to-start badge, and a system ready,
              crew ready, or parts ready string are the same kind of label. Each one shows a
              readiness claim under the thresholds someone chose.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already treats a green tile, a green status, a green health score, or an all-green
              dashboard as a display of a stored or computed value under the thresholds someone
              chose. This essay is the call the word ready invites on that same class of display.
              The color can be green and the word can be ready. Neither one is clearance to run,
              release, start work, leave equipment in service, or close a Decision Case. Painting
              the flag green does not add a decision the color did not have.
            </p>

            <p>
              <Link
                href="/insights/dashboard-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Control
              </Link>{' '}
              already treats the screen as a read. Refreshing, filtering, or drilling into the
              badge does not write a setpoint, an isolation, a release, or a work order. The badge
              says ready because a value met a rule. Meeting the rule is not clearance to run,
              release, start work, or leave equipment in service.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The threshold was chosen
            </h2>

            <p>
              Ready does not arrive from the asset. It arrives from a comparison. The boxes on the
              checklist, the conditions behind the badge, and the words that paint the status line
              are settings. They can come from an OEM sheet, a site procedure, a model, or a
              default left in a configuration. This essay states no OEM limit and no operating
              threshold. It states that whatever limits are in use were chosen, and that the label
              only reports the comparison.
            </p>

            <p>
              A short list and a long list paint the same word when every required box is marked.
              The word does not show which boxes were required. It does not show the mode the list
              was written for. It does not show the points the list left out. Naming the threshold,
              the coverage, and the assumptions is part of the evidence. Leaving them unnamed and
              reading the word as cleared skips that record.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A ready label can still be the wrong evidence
            </h2>

            <p>
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              names the watched set. Parts ready is ready for the points on the list. Equipment
              that is not on the list is not cleared by the word on the points that are. Coverage
              of a watched set is not permission to order work, isolate equipment, or change the
              plant. A complete ready checklist for that set is not clearance to run the equipment
              the set does not watch, and it is not clearance to run the equipment it does watch.
            </p>

            <p>
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              states the other side of the same rule. A threshold breach, an open checklist item,
              or a pager page can surface that something crossed a limit. Seeing it, acknowledging
              it, or silencing it is not a decision. A ready status is the same class of display on
              the inside of the rule. The absence of an open item is not a decision to go. Closing
              an alert because the badge returned to ready is not authorization, not verification
              of outcome, and not plant control.
            </p>

            <p className="text-xl font-semibold text-white">
              Evidence from the plant beats the label. If the evidence is missing, the case
              refuses. A ready flag does not fill the gap.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Clearance is a named decision
            </h2>

            <p>
              Run, release, start work, leave in service, and close a Decision Case are decisions
              about the plant or about the case. Each one needs a named person who can accept the
              operational consequence, a record of what was observed, the coverage and assumptions
              that bound the evidence, and a refusal when that evidence is missing. The label is
              none of those records. A status is not clearance.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              states the act. A named person accepts, rejects, escalates, or returns the
              recommendation. Until that act is recorded, the case is still a proposal. A ready
              checklist does not imply the act. The system does not accept the recommendation
              because the badge says ready.
            </p>

            <p>
              A quiet board is not clearance either.{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              states that boundary for no reply, no alert, and an empty inbox. Ready is not a
              stronger form of quiet. It is a word applied when a value met a rule. Quiet and ready
              can both be true while the decision to run has not been made. A status string that
              says system ready, crew ready, or parts ready is still a status. It is not the named
              decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite what a label held when the source, the time, the threshold, the
              coverage, and the assumptions are named. That citation is a record of a read and a
              comparison. It is not a record that the asset was cleared to run, that work was
              released, or that the case was closed. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter publishes that step. Stage-1 evidence is the record held on the case. A live
              connector that pulls historian or control-system tags sits outside this edition.
              Simulated or seeded telemetry and assets are practice records. A practice ready flag is not a customer plant release.
            </p>

            <p>
              A recommendation may say investigate because of what the label showed, or it may say
              the word is not enough. The proposal states a next action, the evidence it uses, and
              the uncertainty it leaves in view. Drafting it does not change the plant.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              states that split. A named person accepts, rejects, escalates, or returns. The act
              records who decided. It still does not start work because a badge says ready.
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
              systems write the work order or isolate the equipment. A ready-to-start badge does
              not unlock it. Sync does not write the work order. Sync does not start the asset. The
              systems that already hold execution authority write the work order or the isolation.
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
              observed outcome, not a later ready flag. A checklist that returns to complete after
              someone else operated the plant is not the check, and it does not close the case.
              Sync must not auto-close, auto-authorize, or treat ready clearance as Learning credit.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              states what a later case may inherit. Learning keeps the closed case. It does not
              keep a label. A later question that cites system ready, crew ready, or parts ready as
              if the plant had been cleared is citing a readiness label.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a readiness label beside approved evidence when the threshold,
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
              directly. Evidence may hold what a label showed and which threshold painted it. Human
              decision may hold who accepted the consequence. Verification may hold the observed
              outcome. None of those steps is a ready flag. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a readiness label as clearance. Later editions can
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
              This is an essay about the Decision Case order, not a customer case study. It names
              no plant, states no savings figure, and claims no prevented failure. It states no OEM
              limit and no operating threshold. It does not claim that a ready flag runs an asset,
              releases work, starts work, leaves equipment in service, closes a Decision Case, or
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
              SMTP invite delivery, or automatic revocation of access on expiry as live.
              It does not describe Sync writing work orders, starting equipment, or controlling the
              plant. Simulated or seeded telemetry and assets are practice records. They are not
              live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              on why a green tile is a stored or computed value and not permission to go,{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              on why no reply, no alert, and an empty inbox are not clearance,{' '}
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
              on why work intent on the case is not a start,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a proposal is not permission,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded,{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              on why a named person still has to accept, reject, escalate, or return, and{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              on why a later case inherits the closed record. A status is not clearance.{' '}
              <Link
                href="/insights/status-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Status Is Not Clearance
              </Link>{' '}
              states why a status field, a status tile, a status badge, or an all systems status OK
              string is a label on stored or computed values and not clearance to run, release,
              start work, leave equipment in service, or close a Decision Case. A{' '}
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
              chapter records the act. The label does not.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. A ready
                flag, a ready checklist, a ready-to-start badge, or a system ready, crew ready, or
                parts ready string is a readiness label under the thresholds someone chose.
                Clearance still requires a named human decision against observed outcomes, named
                coverage and assumptions, and refusal when evidence is missing. The Reliability
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
          <InsightNextSteps slug="ready-is-not-cleared" />
        </motion.article>
      </div>
    </main>
  );
}
