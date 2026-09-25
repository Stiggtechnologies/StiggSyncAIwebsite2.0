'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('complete-is-not-verified');

export default function CompleteIsNotVerifiedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Complete Is Not Verified</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A completed checklist, a completed work order, a completed case, a &quot;100%
              complete&quot; string, or a &quot;complete&quot; badge is a completion label under the
              criteria someone chose. It is not verification that the outcome happened, the measured
              result matches the Decision Case, learning closed with achieved, not_achieved, or
              inconclusive, or that the case can honestly close.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Complete is not verified. The checklist, the work order, the case, the percent, and
              the badge are a completion label under the criteria someone chose. They can record
              that every box on a chosen list was marked, that a work system stored a finished
              state, or that a rollup reached 100%. They do not record that the outcome happened.
              They do not record that the measured result matches the Decision Case. They do not
              close learning with achieved, not_achieved, or inconclusive. They do not let the case
              honestly close. Verification remains named observation against named criteria — not
              the completion stamp. Treating that stamp as verification is false closure under the
              honesty and verification boundary. Sync may surface a completion label beside a
              Decision Case when the criteria, the coverage, and the assumptions are named.
              Surfacing is still a read. A named human decides. Verification stays open until a
              verified operational outcome is recorded. Direct plant execute stays off.
            </p>

            <p>
              A complete badge looks like the end of the argument. The checklist is done. The work
              order says completed. The case says completed. The bar reads 100% complete. The
              meeting treats the word as if the outcome had been seen, the measurement had matched
              what the decision named, learning had closed, and the Decision Case could leave the
              board. It has not. The screen updated because a query counted marked boxes, or because
              a system stored a word for that count. Someone chose those boxes, those states, and
              that percent. The label does not say what was observed after the work. It does not
              say whether the intended effect occurred. It does not say the measured notes match the
              criteria the decision named. It does not close the case.
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
              . This essay is why a completion label cannot be read as verification. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter records named observation against the criteria the decision named. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter keeps that record. The complete badge does not replace either one.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A completion label is a comparison under chosen criteria
            </h2>

            <p>
              The label has four steps. A source holds a mark: a completed checklist, a completed
              work order, a completed case, a percent, or a badge. A rule compares that mark with
              criteria a person, a procedure, or a configuration chose. A renderer shows complete,
              100% complete, or a complete badge when the comparison passes. A person reads the
              renderer.
            </p>

            <p>
              None of those steps is verification. The comparison can be true and the outcome can
              still be absent. The criteria can have been written for a different question than the
              one on the Decision Case. The percent can be a rollup of boxes that do not include
              the failure mode the decision named. The badge can be the last word a system stored,
              not a fresh observation of the plant.
            </p>

            <p className="text-xl font-semibold text-white">
              A completed checklist, a completed work order, a completed case, a 100% complete
              string, and a complete badge are the same kind of label. Each one reports a
              completion claim under the criteria someone chose. None of them is named observation.
            </p>

            <p>
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              already treats a cleared flag, a cleared checklist, a cleared-to-proceed badge, and a
              cleared for start, cleared for service, or case cleared string as a clearance
              decision, or a label someone attached to one. That stamp is not proof the work is
              finished. This essay starts one step later. A cleared stamp is not completion. A
              complete badge can be the finish label someone attached when their chosen criteria
              were met. That label is still not verification. Verification remains named observation
              against named criteria — not the completion stamp.
            </p>

            <p>
              <Link
                href="/insights/ready-is-not-cleared"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Ready Is Not Cleared
              </Link>{' '}
              and{' '}
              <Link
                href="/insights/status-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Status Is Not Clearance
              </Link>{' '}
              sit earlier on the same board. A ready flag is a readiness label. A status of OK is a
              label on a stored or computed value. Neither is clearance. A complete badge is not a
              stronger form of ready, and it is not a stronger form of OK. It is a later word,
              applied when a different comparison passed. The word still does not observe the
              outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The criteria were chosen
            </h2>

            <p>
              Complete does not arrive from the asset. It arrives from a comparison. The boxes on
              the checklist, the states that close a work order, the fields that mark a case, and
              the rule that paints 100% are settings. They can come from a procedure, a work-system
              configuration, a model, or a default left in a form. This essay states no OEM limit
              and no operating threshold. It states that whatever criteria are in use were chosen,
              and that the label only reports the comparison.
            </p>

            <p>
              A short list and a long list paint the same badge when every required box is marked.
              The badge does not show which boxes were required. It does not show the question the
              list was written for. It does not show the points the list left out. Naming the
              criteria, the coverage, and the assumptions is part of the evidence. Leaving them
              unnamed and reading the badge as verification skips that record.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A completed checklist is not the observed outcome
            </h2>

            <p>
              A completed checklist reports that the boxes someone required were marked. Marking
              the last box stores complete. It does not measure the plant. The boxes can cover
              permits, parts, and signatures, and still omit the effect the decision named. The
              list can be fully ticked and the outcome can still be missing.
            </p>

            <p>
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              names the watched set. A completed checklist for that set is complete for the points
              and the tasks the list contained. Equipment and effects outside the list are not
              verified by the badge on the list. Coverage of a watched set is not permission to
              order work, isolate equipment, or change the plant. A complete badge for that set is
              not control, and it is not named observation of the outcome.
            </p>

            <p className="text-xl font-semibold text-white">
              Evidence from the plant beats the badge. If the evidence is not enough, the case
              refuses. A completed checklist does not fill the gap, and it does not close it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A completed work order is not verification
            </h2>

            <p>
              A completed work order is a state in the system that already holds the work. That
              system can store complete when its own criteria are met: hours entered, a code
              selected, a supervisor field filled. The state reports that comparison. It does not
              report that the measured result matches the Decision Case.
            </p>

            <p>
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps work intent off the plant. ACTION stays locked until authorized execution
              systems write the work order or isolate the equipment. A complete badge does not
              unlock that write, and a later completed state does not become the verification
              record. Sync does not write the work order. Sync does not mark a work order complete.
              Sync does not write that state back. CMMS write-back is not a live product path. The
              systems that already hold execution authority write the work order or the isolation.
              Authorized execution systems perform that write. Direct plant execute stays off. A
              label that says the work order is complete is not that write, and it is not proof the
              outcome happened.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              100% complete is not a match to the Decision Case
            </h2>

            <p>
              A 100% complete string is a rollup. It is the share of chosen criteria that were
              marked, not the share of the outcome that was observed. One hundred percent of the
              wrong list is still the wrong list. The percent can be exact and still be false
              precision. The number does not show the criteria. It does not show the measurement.
              It does not show whether that measurement matches what the decision named.
            </p>

            <p>
              Sync refuses false precision. A badge that prints 100% does not add a decimal of
              proof the comparison did not have. The measured result matches the Decision Case only
              when named observation, against the criteria the decision named, says so. The percent
              is not that observation.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A completed case is not an honest close
            </h2>

            <p>
              Close is a verification record. The case stays open until that record exists.{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              states the gate. Named verification stores the observed outcome as achieved,
              not_achieved, or inconclusive, with measured notes. Achieved means the check named in
              the decision was observed and the intended effect was seen. not_achieved means the
              check was observed and the intended effect was not seen. Inconclusive means the check
              could not decide, and the measured notes say why. Those three words, with the notes,
              are what learning is allowed to close on. A completed case is not one of them. A
              complete badge is not one of them. The case cannot honestly close on the completion
              stamp.
            </p>

            <p>
              A narrow result is still a result. not_achieved is a finished record of a failed
              effect. Inconclusive is a finished record of a check that could not decide. Both are
              learnable. A complete badge with an empty verification field is not finished. It is
              an open case wearing a completion word. The outcome may not have happened. The
              measured result may not match the Decision Case. Learning has not closed.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              states what a later case may inherit. Learning keeps the closed case: achieved,
              not_achieved, or inconclusive, with measured notes. It does not keep a completion
              label. A later question that cites 100% complete, or a completed case, as if the
              outcome had been verified is citing a label. Sync must not auto-close,
              auto-authorize, or treat complete closure as Learning credit.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              states the act that still has to be recorded when a person accepts a consequence. A
              named person accepts, rejects, escalates, or returns the recommendation. That act is
              not verification. Recording it does not show that the outcome happened, and a
              complete badge does not record the check.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite what a completed checklist, completed work order, completed case,
              100% complete string, or complete badge held when the source, the time, who attached
              the word, the criteria, the coverage, and the assumptions are named. That citation is
              a record of a label. It is not a record that the outcome happened, that the measured
              result matches the Decision Case, or that the case was closed. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter publishes that step. Stage-1 evidence is the record held on the case. A live
              connector that pulls historian or control-system tags sits outside this edition.
              Simulated or seeded telemetry and assets are practice records. A practice badge that says complete is not a customer plant release.
            </p>

            <p>
              A recommendation may say investigate because of what the label showed, or it may say
              the label is not enough. The proposal states a next action, the evidence it uses, and
              the uncertainty it leaves in view. Drafting it does not change the plant.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              states that split. A proposal that cites a completed checklist is still a proposal.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records that intent. The intent is not execution. A complete badge does not
              perform the write, does not mark a work order complete, and does not prove the
              outcome was verified.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The check
              is named observation against named criteria, stored as achieved, not_achieved, or
              inconclusive, with measured notes. A field that says complete after someone else
              operated the plant is not the check, and it does not honestly close a Decision Case.
              The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records who accepted the consequence. That record is not the observation.
              Sync refuses false precision. Sync refuses when evidence is insufficient. A named
              human still decides.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a completion label beside approved evidence when the criteria,
              coverage, and assumptions are named. Sync refuses false precision. Sync refuses when
              evidence is insufficient. A named human still decides. The case stays open until named
              verification records achieved, not_achieved, or inconclusive, with measured notes.
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
              directly. Evidence may hold what a completion label showed and which criteria painted
              it. Human decision may hold who accepted the consequence. Verification may hold the
              named observation. Learning may hold achieved, not_achieved, or inconclusive, with
              measured notes. None of those steps is a complete badge used as a close. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a completion stamp as verification. Later editions can
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
              limit and no operating threshold. It does not claim that a complete badge verifies an
              outcome, matches a measured result to a Decision Case, closes learning, honestly
              closes a case, or controls a plant. It does not claim that Sync executes plant work.
              It does not claim CMMS write-back as a shipped product.
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
              describes that journey. Walking those steps is not a complete badge. The verification
              step is where named observation is stored. This edition does not describe plant
              execute, a live connector tag pull, CMMS write-back, SMTP invite delivery, or
              automatic revocation of access on expiry as live. It does not describe Sync writing
              work orders, marking a work order complete, starting equipment, releasing a hold, or
              controlling the plant. Simulated or seeded telemetry and assets are practice records.
              They are not live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>
              , on why a work package, an inspection, or an AI recommendation marked verified —
              evidence collected, checks passed, lineage present — closes a claim about the past
              and is not assurance that the asset stays in a known-good state under operating
              conditions. Companion reading:{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              on why a cleared flag is not proof the work is finished,{' '}
              <Link
                href="/insights/ready-is-not-cleared"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Ready Is Not Cleared
              </Link>{' '}
              on why a readiness label is not clearance,{' '}
              <Link
                href="/insights/status-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Status Is Not Clearance
              </Link>{' '}
              on why a status label is not clearance,{' '}
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
              on why a later case inherits achieved, not_achieved, or inconclusive,{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why work intent is not the write,{' '}
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              on why the watched set is not permission to order work,{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              on why a named person still has to accept, reject, escalate, or return, and{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a proposal is not permission. A{' '}
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
              chapter records named observation against named criteria. The completion stamp does
              not.
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

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. A completed
                checklist, a completed work order, a completed case, a 100% complete string, or a
                complete badge is a completion label under the criteria someone chose. Verification
                still requires named observation against named criteria: achieved, not_achieved, or
                inconclusive, with measured notes. The Reliability Engineer workspace is where a
                signed-in Decision Case is completed. A Reliability Assessment is the bounded
                review when the question is whether the records can support a conclusion. None of
                those is a claim that Sync executes plant work, that CMMS write-back is live, or
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
          <InsightNextSteps slug="complete-is-not-verified" />
        </motion.article>
      </div>
    </main>
  );
}
