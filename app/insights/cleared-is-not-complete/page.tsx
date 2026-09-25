'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('cleared-is-not-complete');

export default function ClearedIsNotCompletePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cleared Is Not Complete</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A cleared flag, a cleared checklist, a cleared-to-proceed badge, or a &quot;cleared
              for start,&quot; &quot;cleared for service,&quot; or &quot;case cleared&quot; string
              is a clearance decision, or a label someone attached to one. It is not proof the work is finished,
              the outcome is verified, the value is realized, or the Decision Case can
              honestly close.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Cleared is not complete. The flag, the checklist, the badge, and the string can be a
              clearance decision: a named person accepted a consequence and a system stored that
              word. They can also be a label someone attached to a comparison, a list of boxes, or
              a status that was never that decision. Either way, the stamp is not the finish.
              Completion remains observed outcomes plus named verification. The named record is
              achieved, not_achieved, or inconclusive, with measured notes. Treating the clearance
              stamp as completion is false closure under the honesty and verification boundary.
              Sync may surface a cleared flag beside a Decision Case when the decision, the
              coverage, and the assumptions are named. Surfacing is still a read. A named human
              decides. Verification stays open until a verified operational outcome is recorded.
              Direct plant execute stays off.
            </p>

            <p>
              A cleared stamp looks like a finish line. Cleared for start looks like the job has
              been released and, in the same glance, like the job is done. Cleared for service
              looks like the asset has been proven fit to return. Case cleared looks like the
              Decision Case can close. The meeting treats the word as if the work were finished,
              the outcome verified, the value realized, and the case ready to leave the board. It
              is not. The screen updated because someone recorded a clearance, or because a query
              mapped a checklist, a flag, or a stored word onto that string. The stamp does not say
              what was observed after the decision. It does not say whether the intended effect
              occurred. It does not say the operational value the decision named has been seen. It
              does not close the case.
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
              . This essay is why a clearance stamp cannot be read as completion. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records who accepted, rejected, escalated, or returned. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter records what was observed after that act. The cleared string does not replace
              either record.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A clearance stamp is a decision, or a label on one
            </h2>

            <p>
              The stamp has two honest origins, and neither origin is completion.
            </p>

            <p>
              The first origin is a clearance decision. A named person accepted, rejected,
              escalated, or returned a recommendation, and a system stored a word for that act:
              cleared for start, cleared for service, or case cleared. The flag, the checklist
              sign-off, or the cleared-to-proceed badge can be that same act rendered as a mark.
              The word then names who was willing to accept a consequence at that moment, under the
              evidence then on the case. It does not name what the plant did afterward.
            </p>

            <p>
              The second origin is a label someone attached to a comparison. A checklist of boxes,
              a permit field, a CMMS state, or a calculated word was mapped to cleared because a
              rule was met or a box was ticked. No named person accepted the operational
              consequence. The badge still says cleared-to-proceed. That label is not the decision,
              and it is not the finish.{' '}
              <Link
                href="/insights/status-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Status Is Not Clearance
              </Link>{' '}
              already treats a status field, a status tile, a status badge, and an all systems
              status OK string as labels on stored or computed values. This essay starts one step
              later. A status of OK is not clearance. A cleared flag can be clearance, or a label
              attached to a clearance. Completion is a further record.
            </p>

            <p className="text-xl font-semibold text-white">
              A cleared flag, a cleared checklist, a cleared-to-proceed badge, and a cleared for
              start, cleared for service, or case cleared string are the same kind of stamp. Each
              one can record a clearance decision or carry a label someone attached to one. None of
              them is proof the work is finished.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              treats the color as a rendering rule. Painting a comparison green does not run the
              asset and does not finish the work. A cleared-to-proceed badge often sits on that
              same screen. The tile can be green and the badge can say cleared. The color is not
              permission to go. The badge is not the observed outcome.
            </p>

            <p>
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              states the boundary for no reply, no alert, and an empty inbox. Quiet is the absence
              of a message. Cleared is an affirmative stamp. Quiet is not clearance. An affirmative
              cleared string is not a stronger form of quiet, and it is not completion. Both can be
              on the board while verification is still empty.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Cleared for start is not the work, and not the finish
            </h2>

            <p>
              Cleared for start names a permission to begin, when it names a real decision at all.
              Beginning is not finishing. The job can still be unwritten, unstarted, partial, or
              stopped. The stamp does not show which of those is true.
            </p>

            <p>
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps work intent off the plant. ACTION stays locked until authorized execution
              systems write the work order or isolate the equipment. A cleared-for-start string
              does not unlock it. Sync does not write the work order. Sync does not start the
              asset. Sync does not release a hold. The systems that already hold execution
              authority write the work order or the isolation. Authorized execution systems perform
              that write. Direct plant execute stays off. A stamp that says the start was cleared
              is not that write, and it is not proof the write was finished.
            </p>

            <p>
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              names the watched set. A cleared flag on that set is cleared for the points and the
              tasks the flag was computed from. Equipment and work outside the set are not finished
              by the stamp on the set. Coverage of a watched set is not permission to order work,
              isolate equipment, or change the plant. A cleared checklist for that set is not
              control, and it is not proof the watched work is finished.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Cleared for service is not a verified return
            </h2>

            <p>
              Cleared for service is a decision to leave equipment in service, or a label someone
              attached to that decision. The asset can still be unfit. The repair can still be
              incomplete. The measurement that would show a return can still be missing. The stamp
              reports the clearance word. It does not report the observed state after the word was
              stored.
            </p>

            <p>
              A checklist can be fully ticked and still be the wrong list. The boxes can cover
              permits, parts, and isolation points, and still omit the failure mode the question
              was about. Ticking the last box stores cleared. It does not measure the outcome. This
              essay states no OEM limit and no operating threshold. It states that whatever boxes
              and limits are in use were chosen, and that a completed list only reports those
              boxes.
            </p>

            <p className="text-xl font-semibold text-white">
              Evidence from the plant beats the stamp. If the evidence is not enough, the case
              refuses. A cleared flag does not fill the gap, and it does not close it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Case cleared is not a closed Decision Case
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
              are what the case is allowed to treat as complete. Case cleared is not one of them.
            </p>

            <p>
              A narrow result is still a result. not_achieved is a finished record of a failed
              effect. Inconclusive is a finished record of a check that could not decide. Both are
              learnable. A cleared stamp with an empty verification field is not finished. It is an
              open case wearing a completion word.
            </p>

            <p>
              Value realized is the same gate, stated as the operational effect the decision named.
              The stamp does not show that the effect occurred. This essay states no savings figure
              and claims no prevented failure. A dollar, a count, or a story of value that is not
              in the measured notes is not the verification record.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              states what a later case may inherit. Learning keeps the closed case. It does not
              keep a clearance stamp. A later question that cites case cleared as if the outcome
              had been verified is citing a label. Sync must not auto-close, auto-authorize, or
              treat cleared completion as Learning credit.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              states the act that clearance requires when the stamp is real. A named person
              accepts, rejects, escalates, or returns the recommendation. That act is not
              verification. Recording it does not finish the work, verify the outcome, realize the
              value, or honestly close the Decision Case.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite what a cleared flag, checklist, badge, or string held when the
              source, the time, who attached the word, the coverage, and the assumptions are named.
              That citation is a record of a stamp. It is not a record that the work finished, that
              the outcome was verified, or that the case was closed. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter publishes that step. Stage-1 evidence is the record held on the case. A live
              connector that pulls historian or control-system tags sits outside this edition.
              Simulated or seeded telemetry and assets are practice records. A practice flag that says cleared is not a customer plant release.
            </p>

            <p>
              A recommendation may say investigate because of what the stamp showed, or it may say
              the stamp is not enough. The proposal states a next action, the evidence it uses, and
              the uncertainty it leaves in view. Drafting it does not change the plant.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              states that split. A proposal that cites cleared for service is still a proposal.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records that intent. The intent is not execution. A cleared-for-start badge
              does not perform the write and does not prove the write was completed.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The check
              is the observed outcome, stored as achieved, not_achieved, or inconclusive, with
              measured notes. A field that says case cleared after someone else operated the plant
              is not the check, and it does not close a Decision Case. Sync refuses false precision.
              Sync refuses when evidence is insufficient. A named human still decides.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a cleared flag beside approved evidence when the decision, coverage,
              and assumptions are named. Sync refuses false precision. Sync refuses when evidence
              is insufficient. A named human still decides. The case stays open until named
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
              directly. Evidence may hold what a cleared string showed and who attached it. Human
              decision may hold who accepted the consequence. Verification may hold the observed
              outcome. None of those steps is a cleared badge used as a close. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a clearance stamp as completion. Later editions can
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
              limit and no operating threshold. It does not claim that a cleared flag finishes the
              work, verifies the outcome, realizes the value, closes a Decision Case, or controls a
              plant. It does not claim that Sync executes plant work.
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
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>
              , on why a completed checklist, a completed work order, a completed case, a 100%
              complete string, or a complete badge is a completion label under the criteria someone
              chose, and why that label is not verification that the outcome happened, the measured
              result matches the Decision Case, learning closed with achieved, not_achieved, or
              inconclusive, or that the case can honestly close. Companion reading:{' '}
              <Link
                href="/insights/status-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Status Is Not Clearance
              </Link>{' '}
              on why a status label is not clearance,{' '}
              <Link
                href="/insights/ready-is-not-cleared"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Ready Is Not Cleared
              </Link>{' '}
              on why a readiness label is not clearance,{' '}
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              on why a green tile is not permission to go,{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              on why no reply and an empty inbox are not authorization,{' '}
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
              on why a later case inherits the verified outcome,{' '}
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
              on why the watched set is not permission to order work, and{' '}
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
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter records the observed outcome. The clearance stamp does not.
            </p>

            <p>
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>{' '}
              states the split after the close. A clearance stamp is not proof the value is
              realized. Closing a work order, a ticket, or a shift is not cash collected or revenue
              recognized.
            </p>

            <p>
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              states the split after the receipt. A clearance stamp is not proof the value is
              realized. Cash in the bank is not margin after the cost to serve.
            </p>

            <p>
              <Link
                href="/insights/margin-is-not-profit"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Margin Is Not Profit
              </Link>{' '}
              states the split after the unit remainder. A clearance stamp is not proof the value is
              realized. Gross margin after the cost to serve is not durable profitable revenue.
            </p>

            <p>
              <Link
                href="/insights/profit-is-not-value"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Profit Is Not Value
              </Link>{' '}
              states the split after the accounting result. A clearance stamp is not proof the value
              is realized. A profit figure is not that verified operational outcome.
            </p>

            <p>
              <Link
                href="/insights/value-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Value Is Not Outcome
              </Link>{' '}
              states the split after the reported result. A clearance stamp is not proof the value
              is realized. A reported outcome is not the verified change the case named and
              authorized.
            </p>

            <p>
              <Link
                href="/insights/outcome-is-not-impact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Outcome Is Not Impact
              </Link>{' '}
              states the split after the measured result. A clearance stamp is not proof the impact
              is realized. A green KPI is not attribution to a decision.
            </p>

            <p>
              <Link
                href="/insights/impact-is-not-revenue"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Impact Is Not Revenue
              </Link>{' '}
              states the split after the attribution. A clearance stamp is not proof the sale is
              recognized. Risk avoided is not revenue.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. A cleared
                flag is a clearance decision, or a label someone attached to one. Completion still
                requires observed outcomes and named verification: achieved, not_achieved, or
                inconclusive, with measured notes. The Reliability Engineer workspace is where a
                signed-in Decision Case is completed. A Reliability Assessment is the bounded
                review when the question is whether the records can support a conclusion. None of
                those is a claim that Sync executes plant work, or that self-guided onboarding is a
                live product path.
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
          <InsightNextSteps slug="cleared-is-not-complete" />
        </motion.article>
      </div>
    </main>
  );
}
