'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('closure-is-not-cash');

export default function ClosureIsNotCashPage() {
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
              Closure Is Not Cash
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Closing a work order, a ticket, or a shift records an operational close. Closure of
              the operating loop is the verified outcome recorded against named ownership. Cash
              collected is money received. Revenue recognized is the earning event on the books.
              The close is still not the cash.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Closure is not cash. Closing a work order, a ticket, or a shift is an operational
              close. Closure of the operating loop is a different record: the verified outcome
              recorded against named ownership, stored as achieved, not_achieved, or inconclusive,
              with measured notes. Cash collected is money received. Revenue recognized is the
              earning event recorded under the rules that govern the books. Neither commercial
              record is produced by the close. Treating the closed work order, the closed ticket,
              or the closed shift as cash collected or revenue recognized ships an operational
              stamp into the books. Sync may surface that closed record beside Evidence,
              Verification, Proof, Authorization, and Accountability. Surfacing is still a read. A
              closed work order without cash collected leaves the commercial record open. Direct
              plant execute stays off. CMMS write-back is not a live product path. Billing write-back is not a live product path.
            </p>

            <p>
              A closed work order looks like money. The job was finished. The ticket was closed.
              The shift was closed. The board then treats the close as the commercial result: the
              invoice belongs to the close, the receipt belongs to the close, and the revenue
              belongs to the close. The close did none of that. It answered what the operating
              record says happened. It did not collect the cash. It did not recognize the revenue.
              It did not post the invoice. It did not write the receipt.
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
              . This essay is why an operational close cannot be read as cash. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold the record of the closed work order, the closed ticket, or the
              closed shift. The{' '}
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
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records intent. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter keeps the closed case: achieved, not_achieved, or inconclusive, with measured
              notes. None of those steps collects cash. None of them recognizes revenue.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Closure answers what the operating loop measured
            </h2>

            <p>
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>{' '}
              sits one step earlier. Accountability is the continuing named ownership of results,
              exceptions, and learning after the plant move. Closure is the verified outcome
              recorded against that ownership: a measured result, not named intent. This essay
              starts after that split has been kept. The record really can be closure of the
              operating loop. A named observation can be stored as achieved, not_achieved, or
              inconclusive, with measured notes. That close can be honest and still not be cash
              collected or revenue recognized.
            </p>

            <p>
              Two uses of close sit in the same sentence on the floor. Closure of the operating
              loop is the verified outcome recorded against named ownership. A closed work order, a
              closed ticket, or a closed shift is the operational stamp people often treat as that
              close. The stamp can exist while the verified outcome is still open. The verified
              outcome can exist while the commercial record is still open. Each record answers a
              different question. None of them answers whether the cash was collected.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              already refuses the earlier collapse. A completed checklist, a completed work order,
              a completed case, or a complete badge is a completion label under the criteria
              someone chose. It is not named observation against named criteria. A completed work
              order is not verification, and it is not cash. Closing the work order in the CMMS
              records that the order met the completion rule that system uses. It does not record
              the verified outcome, and it does not record money received.
            </p>

            <p>
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps clearance off completion. A cleared flag, a cleared checklist, or a cleared
              for service string is a clearance decision, or a label someone attached to one. It
              is not proof the work is finished, the outcome is verified, or the value is realized.
              Value realized in that sentence is still an operating claim. It is not cash collected.
              It is not revenue recognized. A clearance stamp does not finish the work. A finished
              work order does not collect the cash.
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
              notes. That check is the measured result. It is the closure of the claim about what
              happened. It is not the invoice. Recording the check does not collect cash and does
              not recognize revenue.
            </p>

            <p className="text-xl font-semibold text-white">
              Closure of the operating loop is the verified outcome recorded against named
              ownership. A closed work order, a closed ticket, or a closed shift is an operational
              stamp. Neither record is cash collected. Neither record is revenue recognized.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Cash collected and revenue recognized are commercial records
            </h2>

            <p>
              Cash collected is money received. The receipt, the deposit, and the cleared payment
              are commercial records. They answer whether the cash came in. Revenue recognized is
              the earning event recorded on the books under the rules that govern that contract.
              It answers whether the earning event was recorded. Cash collected and revenue
              recognized are not the same commercial record. A payment can arrive before the
              earning event is recognized. An earning event can be recognized before the cash is
              collected. Neither event is produced by closing the work order, the ticket, or the
              shift.
            </p>

            <p>
              The operating close has a narrower object than the books. It is about what was
              measured in the plant, or about the stamp a system stored when someone marked the
              order, the ticket, or the shift closed. A sentence that only says closed does not
              say the invoice was issued, the cash was received, or the revenue was recognized.
              The work order can be closed. The ticket can be closed. The shift can be closed. The
              verified outcome can be recorded. The commercial record can still be open.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit a closed work
              order in place of that outcome, and it does not inherit cash collected or revenue
              recognized in place of either. Sync must not auto-close, auto-authorize, or treat a
              closed work order as cash collected, or as Learning credit.
            </p>

            <p>
              A closed shift is the crew record that the watch ended. The hours were marked. The
              handover was written. That record can be honest. It is not the invoice for the
              watch. It is not the cash receipt. It is not the revenue entry. A closed ticket is
              the queue record that the request left the open list. The requester can be answered
              and the ticket can be closed while nobody has collected cash and nobody has
              recognized revenue. A closed work order is the maintenance record that the order met
              its completion rule. Parts can be issued, labor can be booked, and the order can be
              closed while the commercial record is a different system, a different owner, and a
              different fact.
            </p>

            <p className="text-xl font-semibold text-white">
              Cash collected is money received. Revenue recognized is the earning event on the
              books. Closing a work order, a ticket, or a shift produces neither.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A closed work order does not collect the cash
            </h2>

            <p>
              The failure mode is ordinary. The work order is closed, the ticket is closed, or the
              shift is closed, and the room treats the commercial result as known. The job ran.
              Someone closed it. The money follows. Each of those is a separate record. The close
              does not receive the payment. The close does not recognize the revenue. The board
              looks settled because the closed word was allowed to stand in for the books.
            </p>

            <p>
              Labor hours on a closed shift are not cash collected. A parts issue on a closed work
              order is not revenue recognized. A customer reply on a closed ticket is not a
              receipt. Those records can inform a recommendation to investigate whether the
              commercial record exists. They are not the commercial record. Evidence from the plant beats the closed record. If the evidence on the case shows the work order closed and
              does not show cash collected, the case may store the close and must not store the
              cash. If the evidence shows the ticket closed and does not show revenue recognized,
              the case may store the close and must not store the revenue.
            </p>

            <p>
              Calling the close cash crosses the honesty and verification boundary. Sync states
              what was checked and what was not claimed. A closed work order was checked as an
              operational stamp, or a verified outcome was checked as named observation. Cash
              collected was not claimed. Revenue recognized was not claimed. Treating the close as
              the receipt, or treating the receipt as if it verified the plant outcome, is the
              same confusion from the other side.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating closure as cash ships an operational close into the books. The work order
              can be closed, the ticket can be closed, and the shift can be closed, and the cash
              can still be uncollected.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a closed record beside Evidence, Verification, Proof, Authorization, and
              Accountability is still a read
            </h2>

            <p>
              Sync may surface a closed work order, a closed ticket, or a closed shift beside
              Evidence, Verification, Proof, Authorization, and Accountability. Surfacing is still
              a read. The screen can show the close next to the evidence the case holds, next to
              the named observation the verification step stores, next to a closed chain when the
              claim, the conditions, the checks, and the lineage are named, next to the authorized
              state that answered who may start, and next to the accountable owner who remains
              responsible after the plant move. Showing the close does not write a CMMS work order.
              Showing the close does not clear equipment to run. Showing the close does not collect
              cash. Showing the close does not recognize revenue. Showing the close does not post
              an invoice. A read of a closed record is still a read.
            </p>

            <p>
              Sync refuses false precision. Sync refuses when evidence is insufficient. A closed
              label with no named work order, no named ticket, and no named shift is not a close
              the case can store as cash, and it is not a close the case can store as the verified
              outcome either. The label does not fill the gap. A dollar figure someone typed beside
              the close is not cash collected unless the commercial record is the evidence. This
              essay states no savings figure. It states no price. The absence of a number is the
              point. The close is not the cash, with or without a figure beside it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. A live connector that
              pulls invoices, receipts, or revenue entries sits outside this edition too. Simulated
              or seeded telemetry and assets are practice records. A practice record that says closed is not a customer plant release, and it is not cash collected.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite a closed work order, a closed ticket, or a closed shift when the
              close and the criteria of that close are named. That citation is an operational
              record. It is not a record that cash was collected. It is not a record that revenue
              was recognized. A recommendation may say investigate because the commercial record is
              unrecorded, or because the work order is closed and the verified outcome is still
              open. The proposal does not collect the cash.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not cash. An accountable owner remains responsible for
              results, exceptions, and learning after the plant move. That ownership is not the
              close, and the close is not the cash. Authorized execution systems write the work
              order or the isolation. Sync does not write the work order. Sync does not mark an
              asset closed. Sync does not collect cash. Sync does not recognize revenue. Sync does
              not write that state back. CMMS write-back is not a live product path. Billing write-back is not a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The
              check is named observation against named criteria, stored as achieved, not_achieved,
              or inconclusive, with measured notes. That record is the closure of the claim about
              the outcome. It does not, by itself, turn the closed work order into money received,
              and it does not turn a closed shift into revenue recognized. A named human decides.
              A named human remains accountable after the plant move. The operating loop stays open
              until the verified outcome is recorded. The commercial record stays open until cash
              collected or revenue recognized is itself the evidence, in the system that owns that
              record. Sync does not own that system.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a closed work order, a closed ticket, or a closed shift beside
              Evidence, Verification, Proof, Authorization, and Accountability. Surfacing is still
              a read. Sync refuses false precision. Sync refuses when evidence is insufficient.
              Sync does not collect cash. Sync does not recognize revenue. A named human decides.
              A named human remains accountable after the plant move. Closure stays the verified
              outcome, or the operational stamp people treat as that outcome. Cash stays
              uncollected until the commercial record says otherwise.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with
              measured notes. It does not keep a closed work order as cash collected. It does not
              keep a closed ticket as revenue recognized. It does not keep a closed shift as either.
              A later question that cites a closed order as if the cash were already collected is
              citing an operational stamp. Sync must not auto-close, auto-authorize, or treat a
              closed work order as cash collected, or as Learning credit.
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
              directly. Evidence may hold the closed work order, the closed ticket, or the closed
              shift, and which conditions that close named. Human decision may hold who accepted
              the consequence. Action may hold the intent that decision routed. Verification may
              hold the named observation. Learning may hold achieved, not_achieved, or inconclusive,
              with measured notes. None of those steps is a closed stamp used as cash collected or
              revenue recognized. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating an operational close as money received. Later
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
              and no operating threshold. It does not claim that closing a work order, a
              ticket, or a shift collects cash or recognizes revenue. It does not claim that a
              verified outcome is an invoice. It does not claim that Sync executes plant work. It
              does not claim CMMS write-back as a shipped product. It does not claim billing
              write-back, invoice posting, or revenue recognition as a shipped product.
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
              describes that journey. Walking those steps is not cash collected. The verification
              step is where named observation against named criteria is stored as achieved,
              not_achieved, or inconclusive, with measured notes. This edition does not describe
              plant execute, a live connector tag pull, CMMS write-back, billing write-back, SMTP
              invite delivery, or automatic revocation of access on expiry as live. It does not
              describe Sync writing work orders, clearing equipment to run, marking a case
              plant-execute, collecting cash, recognizing revenue, starting equipment, releasing a
              hold, or controlling the plant. Simulated or seeded telemetry and assets are practice
              records. They are not live plant results, and they are not cash collected.
              Self-guided onboarding is not claimed as a live product path.
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
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              on why a completed work order is a completion label and not the check,{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              on why a clearance stamp is not proof the work is finished or the value is realized,{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              on why a later case inherits the measured result and not cash,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded. A{' '}
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
              the measured result. The closed work order does not collect the cash.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Closure of
                the operating loop is the verified outcome recorded against named ownership.
                Closing a work order, a ticket, or a shift is an operational close. Cash collected
                is money received. Revenue recognized is the earning event on the books. The
                Reliability Engineer workspace is where a signed-in Decision Case is completed. A
                Reliability Assessment is the bounded review when the question is whether the
                records can support a conclusion. None of those is a claim that Sync executes plant
                work, collects cash, recognizes revenue, that CMMS write-back is live, or that
                self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="closure-is-not-cash" />
        </motion.article>
      </div>
    </main>
  );
}
