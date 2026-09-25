'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('profit-is-not-value');

export default function ProfitIsNotValuePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Profit Is Not Value</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Profit is an accounting result for a named period under the cost rules someone chose.
              Value is the verified operational outcome the Decision Case was opened to change.
              A turnaround that beat its cost target, or a maintenance result that printed black,
              is still not that outcome.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Profit is not value. A profit figure is an accounting result for a named period under
              the cost rules, allocations, and cost base someone chose. That figure answers whether
              the recorded remainder met those rules. Value is a different record. It is the
              verified operational outcome the Decision Case was opened to change: restored
              capacity, a constraint released, a loss avoided, stored as achieved, not_achieved, or
              inconclusive, with measured notes. Treating the profit figure as value ships an
              accounting result into a finished claim about plant value nobody has measured. Sync
              may surface a profit figure beside Evidence, Verification, and the closed outcome.
              Surfacing is still a read. A black maintenance result without a verified outcome
              leaves the value unrecorded. Direct plant execute stays off. CMMS write-back is not a
              live product path. Billing write-back is not a live product path.
            </p>

            <p>
              A profit figure looks like the close of the shutdown. The turnaround beat its cost
              target. The maintenance P&L printed black. The job made its number. The meeting then
              treats the operating decision as finished: the value belongs to the profit, the
              outcome belongs to the profit, and the close belongs to the profit. The figure did
              none of that. It answered whether the recorded remainder met the cost rules. It did
              not record the verified operational outcome. It did not store achieved, not_achieved,
              or inconclusive. It did not measure what the case was opened to change.
            </p>

            <p>
              The accounting stack is the same kind of refusal this series keeps. Closure is not
              cash. Cash left in the shutdown account, or cash not spent, is a collected or
              unspent amount. Cash is not margin. Margin is the remainder after the direct cost of
              the job, before the period allocations and overhead that turn a job result into a
              period result. Margin is not profit. Profit is the accounting result for the named
              period after those rules. Profit is not value. Each word can be true in its own
              place. None of the earlier words fills the last one. Hours burned, work orders
              closed, and a black P&L are activity and accounting. Value is the verified outcome.
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
              . This essay is why a profit figure cannot be read as value. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold the record of the cost rules, the period, and the figure. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter records named observation against the criteria the decision named. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records who accepted the consequence. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter keeps the closed case. A profit figure is not that close, and it is not the
              value of the outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Profit is an accounting result under named cost rules
            </h2>

            <p>
              <Link
                href="/insights/margin-is-not-profit"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Margin Is Not Profit
              </Link>{' '}
              sits one step earlier. Contribution margin and unit economics are what remain of
              revenue after the cost to serve. Bottom-line profit is what remains after the costs
              that remainder does not carry. This essay starts after that split has been kept. The
              unit remainder can be named, and the accounting result can still be a different
              claim. A profit figure can be recorded. The value of the decision can still be
              unrecorded.
            </p>

            <p>
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>{' '}
              sits further back in the operating loop. Accountability is the continuing named
              ownership of results, exceptions, and learning after the plant move. Closure is the
              verified outcome recorded against that ownership: a measured result, not named intent.
              The operating loop can be closed with a measured result, and the accounting result
              can still be a different claim. A named accountable human without a verified outcome
              leaves the operating loop open. A profit figure does not close it, and it does not
              convert the close into value.
            </p>

            <p>
              Profit has a narrower object than the value. It is about whether the recorded
              remainder met the cost rules for a named period. It is not about whether capacity was
              restored, whether the constraint was released, or whether the loss the case named was
              avoided. A sentence that only states the profit figure does not say the outcome was
              achieved, not_achieved, or inconclusive. The figure can be recorded. The verified
              operational outcome can still be unrecorded.
            </p>

            <p>
              <Link
                href="/insights/authorization-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorization Is Not Accountability
              </Link>{' '}
              sits further back. A named human decision that accepts consequence and routes intent
              to authorized execution systems answers who may start. That act is not accountability
              for the outcome after the work runs, not closure of the operating loop, and not a
              profit figure. An authorized state can sit beside a black maintenance result while
              the verified outcome is still open. The profit figure does not fill the gap the
              authorization left, and the authorization does not turn the figure into value.
            </p>

            <p>
              Cash discipline is the same refusal, one step earlier in the accounting stack.{' '}
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>{' '}
              keeps the operational close off the receipt. Closure is not cash. A verified outcome
              is a measured result. Cash is an amount collected, committed, or left unspent.{' '}
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              keeps the receipt off the unit remainder. Cash is not margin. Margin on the job is
              the remainder after direct cost. Margin is not profit. Profit applies the period, the
              allocations, and the cost base. A shutdown can leave cash in the account, show a
              margin on the direct work, and still print a period result that the cost rules call
              profit — or the reverse. None of those three records is the value of the operating
              decision.
            </p>

            <p>
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps the write off the case. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records intent. ACTION remains a locked disposition until authorized
              execution systems write the work order or isolate the equipment. A profit figure does
              not unlock that write. It does not record that the work produced the outcome the
              decision named. Sync does not write the work order. Sync does not clear equipment to
              run. Sync does not mark the case plant-execute.
            </p>

            <p className="text-xl font-semibold text-white">
              Profit answers whether the recorded remainder met the cost rules for a named period.
              It does not record the verified operational outcome the case was opened to change.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Value is the verified operational outcome
            </h2>

            <p>
              Value is not a property of the profit figure. It is the verified operational outcome
              recorded against the decision: a measured result, not an accounting remainder.
              Restored capacity, a released constraint, deferred scope that stayed deferred, a bad
              actor still in service after return to service — each of those is an outcome the
              case can name. The case stores achieved, not_achieved, or inconclusive, with measured
              notes. Until that record exists, the value stays unrecorded, however completely the
              profit figure is stated. Named intent is what the decision meant to do. Value is
              what was measured after the plant move.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              states the gate for the check. The case stays open until named observation against
              named criteria is recorded as achieved, not_achieved, or inconclusive, with measured
              notes. That check is the measured result. It is not, by itself, the profit figure,
              and the profit figure is not, by itself, the check. A black P&L without that record
              leaves the value unrecorded.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit a profit
              figure in place of that outcome. A later shutdown that cites last turnaround&apos;s
              profit as if the constraint were already released is citing an accounting result.
              Sync must not auto-close, auto-authorize, or treat profit as value as Learning credit.
            </p>

            <p>
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              keeps a verified stamp off standing confidence. A verified work package, inspection,
              or AI recommendation closes a claim about the past. Assurance is the standing claim
              that comes after. Value, in this essay, is the verified operational outcome recorded
              against the decision. It is not a claim that the asset stays known-good, and it is
              not a claim that the profit will repeat. A verified outcome can be not_achieved or
              inconclusive. Those results still close the claim about what happened. They are not a
              green standing state, and they are not produced by a profit figure.
            </p>

            <p className="text-xl font-semibold text-white">
              Value is the verified operational outcome — measured result, not the profit figure. A
              profit figure without that record leaves the value unrecorded.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A profit figure does not record the value
            </h2>

            <p>
              The failure mode is ordinary on a shutdown. The profit figure is shown beside a
              maintenance decision or a production decision, and the room treats the value as
              known. The outage window closed. The cost target was met. The unit came back. Each of
              those is a separate record. The figure does not measure whether the deferred scope
              stayed open, whether the bad actor is still installed, or whether the constraint
              still binds. The accounting result can have been recorded. The verified operational
              outcome can still be open. The board looks settled because the profit word was
              allowed to stand in for the measured result.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A profit figure painted on that tile is not a stronger green.
              It is an accounting result sitting on a display. Go still required a named human
              decision. The result after the plant move still requires a verified outcome. The
              color supplies neither the decision, the outcome, nor the value.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling profit value crosses
              that boundary. Treating a verified outcome as if it were only a P&L line, or treating
              the P&L line as if it were the measured result, is the same confusion from the other
              side.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating profit as value ships an accounting result into a finished claim about plant
              value nobody has measured. The figure can be recorded and the value can still be
              open.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a profit figure beside Evidence and Verification is still a read
            </h2>

            <p>
              Sync may surface a profit figure beside Evidence, Verification, and the closed
              outcome. Surfacing is still a read. The screen can show the figure next to the cost
              rules the case holds, next to the named observation the verification step stores, and
              next to achieved, not_achieved, or inconclusive when that record exists. Showing the
              figure does not write a CMMS work order. Showing the figure does not clear equipment
              to run. Showing the figure does not treat the case as plant-execute. Showing the
              figure does not record the verified operational outcome. A read of a profit figure is
              still a read. A black maintenance result without a verified outcome leaves the value
              unrecorded.
            </p>

            <p>
              Evidence from the plant beats the profit figure. If the evidence on the case does not
              support the cost rules, the period, or the figure, the case refuses. If the evidence
              records the accounting result and does not record the verified outcome, the case may
              store the figure and must not store the figure as value. The label does not fill the
              gap, and it does not close it. Sync refuses false precision. Sync refuses when evidence is insufficient.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded telemetry
              and assets are practice records. A practice record that says profitable is not a customer plant release, and it is not the value of an operating decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite a profit figure when the period, the cost rules, the allocations,
              and the cost base are named. That citation is a record of an accounting result. It is
              not a record that the operational outcome was measured. A recommendation may say
              investigate because the figure is unrecorded, or because the figure is recorded and
              the verified outcome is still open. The proposal does not record the value.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not value. A profit label does not perform the write
              and does not record the measured result the work was meant to produce. Authorized
              execution systems write the work order or the isolation. Sync does not write the work
              order. Sync does not mark an asset closed. Sync does not write that state back. CMMS
              write-back is not a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The
              check is named observation against named criteria, stored as achieved, not_achieved,
              or inconclusive, with measured notes. That record is the value claim the case is
              allowed to close, when the criteria named an operational outcome. It does not, by
              itself, turn the profit figure into that outcome, and it does not turn an earlier
              cost target into the value. A named human decides. A named human remains accountable
              after the plant move. The value stays unrecorded until the verified operational
              outcome is stored.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a profit figure beside Evidence, Verification, and the closed
              outcome. Surfacing is still a read. Sync refuses false precision. Sync refuses when evidence is insufficient. A named human decides. A named human remains accountable
              after the plant move. The profit figure stays an accounting result under named cost
              rules. Value stays open until the verified operational outcome is recorded. A black
              maintenance result without a verified outcome leaves the value unrecorded.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with
              measured notes. It does not keep profit as value. A later question that cites a
              profit figure as if the outcome were already measured is citing an accounting result.
              Sync must not auto-close, auto-authorize, or treat profit as value as Learning credit.
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
              directly. Evidence may hold the cost rules, the period, and the figure that was
              shown. Human decision may hold who accepted the consequence. Action may hold the
              intent that decision routed. Verification may hold the named observation. Learning
              may hold achieved, not_achieved, or inconclusive, with measured notes — the verified
              operational outcome, not the profit figure. None of those steps is a profit figure
              used as value. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating an accounting result as the measured result. Later
              editions can deepen a chapter. The spine stays in this order.
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
              and no operating threshold. It does not claim that a profit figure is the value
              of an operating decision, writes a CMMS work order, clears equipment to run, or
              records the measured result. It does not claim that Sync executes plant work. It does
              not claim CMMS write-back as a shipped product.
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
              describes that journey. Walking those steps is not a claim that profit is value. The
              verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, SMTP invite
              delivery, or automatic revocation of access on expiry as live. It does not describe
              Sync writing work orders, clearing equipment to run, marking a case plant-execute,
              starting equipment, releasing a hold, or controlling the plant. Simulated or seeded telemetry
              and assets are practice records. They are not live plant results.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              keeps a completion label off the check. A completed work order is not verification
              that the outcome happened. A profit figure beside that label is not the verified
              operational outcome.{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps a clearance stamp off a finished claim. A cleared flag is not proof the value
              is realized. The profit figure does not realize it.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>{' '}
              on why a named owner is not the verified outcome,{' '}
              <Link
                href="/insights/authorization-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorization Is Not Accountability
              </Link>{' '}
              on why a named decision that accepts consequence is not continuing ownership of the
              outcome,{' '}
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
              on why a later case inherits the measured result and not an accounting figure,{' '}
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              on why a verified record closes a claim about the past and is not assurance,{' '}
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              on why a green tile is not permission to run,{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why recorded intent is not plant execution,{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              on why the limit has to be stated, and{' '}
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
              is a governed proof around one operating decision. The verification chapter records
              the measured result. The profit figure does not record the value.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Profit is
                an accounting result under named cost rules. Value is the verified operational
                outcome stored as achieved, not_achieved, or inconclusive, with measured notes. The
                Reliability Engineer workspace is where a signed-in Decision Case is completed. A
                Reliability Assessment is the bounded review when the question is whether the
                records can support a conclusion. None of those is a claim that Sync executes plant
                work, that CMMS write-back is live, or that self-guided onboarding is a live
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
          <InsightNextSteps slug="profit-is-not-value" />
        </motion.article>
      </div>
    </main>
  );
}
