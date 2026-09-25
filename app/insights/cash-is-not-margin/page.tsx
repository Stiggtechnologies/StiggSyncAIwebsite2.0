'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('cash-is-not-margin');

export default function CashIsNotMarginPage() {
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
              Cash Is Not Margin
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Cash collected is money received. Invoices paid means the customer settled the bill.
              Contribution margin is what remains after the cost to serve. Profitable ARR is
              recurring revenue that still covers that cost. Cash in the bank is still not the
              margin.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Cash is not margin. Cash collected is money received. Invoices paid means a named
              invoice was settled. Contribution margin is what remains of revenue after the cost to
              serve: the labor, the parts, the travel, the callback, and the other direct cost the
              work consumed. Profitable ARR is recurring revenue that still covers that cost to
              serve. Cash in the bank is not margin after the cost to serve. Treating cash
              collected or invoices paid as contribution margin or profitable ARR ships a commercial
              receipt into a profitability claim. Sync may surface cash collected or an invoice
              marked paid beside Evidence, Verification, Proof, Authorization, Accountability, and
              Closure. Surfacing is still a read. A paid invoice without the cost to serve leaves
              the margin unrecorded. Direct plant execute stays off. CMMS write-back is not a live
              product path. Billing write-back is not a live product path.
            </p>

            <p>
              A paid invoice looks like profit. The cash arrived. The accounts receivable line
              cleared. The board then treats the receipt as the economic result: the margin belongs
              to the payment, the profitable contract belongs to the payment, and the recurring
              revenue belongs to the payment. The receipt did none of that. It answered whether the
              money came in. It did not subtract the cost to serve. It did not compute contribution
              margin. It did not declare profitable ARR.
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
              . This essay is why cash collected cannot be read as margin. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold the record that cash was collected or that invoices were paid. The{' '}
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
              notes. None of those steps computes contribution margin. None of them declares
              profitable ARR.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Cash collected answers whether the money arrived
            </h2>

            <p>
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>{' '}
              sits one step earlier. Closing a work order, a ticket, or a shift is an operational
              close. Closure of the operating loop is the verified outcome recorded against named
              ownership. Cash collected is money received. Revenue recognized is the earning event
              on the books. This essay starts after that split has been kept. The record really can
              be cash collected. The invoice really can be paid. That commercial record can be
              honest and still not be contribution margin or profitable ARR.
            </p>

            <p>
              Two commercial words sit in the same sentence on the floor. Cash collected is money
              received: a deposit, a prepayment, a partial payment, or a cleared receipt. Invoices
              paid means a named invoice was settled. Those records can agree, and they can come
              apart. Cash can arrive before an invoice exists. An invoice can be marked paid in one
              system while the cash sits in another. Neither record subtracts the cost to serve.
              Neither record is contribution margin. Neither record is profitable ARR.
            </p>

            <p>
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>{' '}
              keeps the named owner off the measured result. A named human who remains responsible
              after the plant move is not loop closure. A paid invoice beside that owner is not
              margin after the cost to serve. Naming who owns the contract does not subtract the
              hours, the parts, or the return visit.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              already refuses the earlier collapse. A completed work order is a completion label
              under the criteria someone chose. It is not named observation against named criteria.
              A paid invoice on that completed order is a commercial receipt. It is not the check,
              and it is not contribution margin. The order can be complete, the invoice can be
              paid, and the cost to serve can still be unrecorded.
            </p>

            <p>
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps clearance off completion, and it keeps value realized off cash. A clearance
              stamp is not proof the work is finished or the value is realized. Value realized in
              that sentence is still an operating claim. Cash collected is a later commercial
              record. Contribution margin is later still: what remains after the cost to serve.
              A cleared asset, a finished work order, and a paid invoice can all be true while the
              margin is open.
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
              notes. That check is the measured result. It is not a margin calculation. Recording
              the check does not compute contribution margin and does not declare profitable ARR.
            </p>

            <p className="text-xl font-semibold text-white">
              Cash collected is money received. Invoices paid means the bill was settled.
              Contribution margin is what remains after the cost to serve. Profitable ARR is
              recurring revenue that still covers that cost. The receipt produces none of the last
              two.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Contribution margin and profitable ARR name the cost to serve
            </h2>

            <p>
              Contribution margin, in this essay, is revenue minus the variable cost to serve that
              revenue. The cost to serve is the direct cost the work consumed: technician hours,
              parts issued, travel and mobilization, a callback, rework, warranty labor the
              contract absorbs, and the second visit the first invoice did not price. The essay
              names that split. It does not compute a figure. It does not adopt a customer chart of
              accounts.
            </p>

            <p>
              Profitable ARR, in this essay, is recurring revenue that still covers the cost to
              serve. Booked recurring revenue, invoiced recurring revenue, and collected recurring
              revenue are three different records. Annualizing a contract does not subtract the
              cost of keeping it. An invoice against that contract can be paid while the crew, the
              parts, and the return visit are unrecorded. Collected ARR is cash against a recurring
              contract. It is not profitable ARR. Paying the invoice does not perform the
              subtraction.
            </p>

            <p>
              The receipt has a narrower object than the cost to serve. It answers whether the
              money arrived, or whether a named invoice was settled. A sentence that only says
              paid does not say the hours were inside the price, the parts were inside the price,
              or the callback was inside the price. The cash can be in the bank. The invoice can be
              paid. The contribution margin can still be open. The profitable ARR claim can still
              be open.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit invoices paid
              in place of that outcome, and it does not inherit cash collected as contribution
              margin or as profitable ARR. Sync must not auto-close, auto-authorize, or treat
              invoices paid as contribution margin, or as Learning credit.
            </p>

            <p>
              A service invoice can be paid while the crew returned. The first visit was invoiced.
              The customer paid. The second mobilization, the extra hours, and the parts on the
              return are cost to serve. They are not inside the receipt. A parts invoice can be
              paid while the cause returned. The cash is real. The margin is a different record.
              A contract labor invoice can be paid for the watch that was billed. The hours, the
              travel, and the callback the line did not subtract are still the cost to serve. None
              of those sentences is a customer result. Each is the ordinary split between a receipt
              and the cost the work consumed.
            </p>

            <p className="text-xl font-semibold text-white">
              Contribution margin is what remains after the cost to serve. Profitable ARR is
              recurring revenue that still covers that cost. Cash collected and invoices paid
              produce neither.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Cash in the bank is not margin after the cost to serve
            </h2>

            <p>
              The failure mode is ordinary. The invoice is paid, or the cash is collected, and the
              room treats the margin as known. The customer paid. The contract is profitable. The
              ARR is healthy. Each of those is a separate record. The receipt does not subtract the
              labor. The receipt does not subtract the parts. The receipt does not subtract the
              return visit. The board looks settled because the paid word was allowed to stand in
              for the cost to serve.
            </p>

            <p>
              Hours booked on a paid job are not contribution margin. Parts issued on a paid work
              order are not profitable ARR. A cleared payment on a recurring contract is not proof
              the contract still covers the cost to serve. Those records can inform a
              recommendation to investigate whether the cost to serve was recorded. They are not
              the margin. Evidence from the plant beats the receipt. If the evidence on the case
              shows the invoice paid and does not show the cost to serve, the case may store the
              payment and must not store the margin. If the evidence shows cash collected and does
              not show that recurring revenue still covers the cost to serve, the case may store
              the cash and must not store profitable ARR.
            </p>

            <p>
              Calling the receipt margin crosses the honesty and verification boundary. Sync states
              what was checked and what was not claimed. Cash collected was checked as money
              received, or invoices paid was checked as a settled bill. Contribution margin was not
              claimed. Profitable ARR was not claimed. Treating the receipt as the margin, or
              treating a margin note as if it verified the plant outcome, is the same confusion
              from the other side.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating cash as margin ships a receipt into a cost-to-serve claim. The invoice can
              be paid, and the cash can be in the bank, and the margin after the cost to serve can
              still be unrecorded.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing cash beside Evidence, Verification, Proof, Authorization, Accountability,
              and Closure is still a read
            </h2>

            <p>
              Sync may surface cash collected or an invoice marked paid beside Evidence,
              Verification, Proof, Authorization, Accountability, and Closure. Surfacing is still
              a read. The screen can show the receipt next to the evidence the case holds, next to
              the named observation the verification step stores, next to a closed chain when the
              claim, the conditions, the checks, and the lineage are named, next to the authorized
              state that answered who may start, next to the accountable owner who remains
              responsible after the plant move, and next to the operational close that is not the
              cash. Showing the receipt does not write a CMMS work order. Showing the receipt does
              not clear equipment to run. Showing the receipt does not collect cash. Showing the
              receipt does not recognize revenue. Showing the receipt does not compute contribution
              margin. Showing the receipt does not declare profitable ARR. A read of a paid invoice
              is still a read.
            </p>

            <p>
              Sync refuses false precision. Sync refuses when evidence is insufficient. A paid
              label with no named invoice and no named receipt is not cash the case can store as
              margin, and it is not a cost-to-serve record either. The label does not fill the gap.
              A dollar figure someone typed beside the receipt is not contribution margin unless the
              cost to serve is itself the evidence. This essay states no savings figure. It states
              no price. The absence of a number is the point. Cash is not margin, with or without a
              figure beside it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. A live connector that
              pulls invoices, receipts, cost ledgers, or margin reports sits outside this edition
              too. Simulated or seeded telemetry and assets are practice records. A practice record that says paid is not a customer plant release, and it is not contribution margin.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite cash collected or invoices paid when the receipt and the invoice
              are named. That citation is a commercial record. It is not a record of contribution
              margin. It is not a record of profitable ARR. A recommendation may say investigate
              because the cost to serve is unrecorded, or because the invoice is paid and the
              margin is still open. The proposal does not compute the margin.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not margin. An accountable owner remains responsible
              for results, exceptions, and learning after the plant move. That ownership is not the
              close, the close is not the cash, and the cash is not the margin. Authorized
              execution systems write the work order or the isolation. Sync does not write the work
              order. Sync does not mark an asset closed. Sync does not collect cash. Sync does not
              recognize revenue. Sync does not compute contribution margin. Sync does not declare
              profitable ARR. Sync does not write that state back. CMMS write-back is not a live
              product path. Billing write-back is not a live product path. Direct plant execute
              stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The
              check is named observation against named criteria, stored as achieved, not_achieved,
              or inconclusive, with measured notes. That record is the closure of the claim about
              the outcome. It does not, by itself, turn invoices paid into contribution margin, and
              it does not turn cash collected into profitable ARR. A named human decides.
              A named human remains accountable after the plant move. The commercial record stays open
              until cash collected or invoices paid is itself the evidence, in the system that owns
              that record. The margin stays open until the cost to serve is itself the evidence, in
              the system that owns that record. Sync does not own either system.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface cash collected or an invoice marked paid beside Evidence,
              Verification, Proof, Authorization, Accountability, and Closure. Surfacing is still
              a read. Sync refuses false precision. Sync refuses when evidence is insufficient.
              Sync does not collect cash. Sync does not recognize revenue. Sync does not compute
              contribution margin. Sync does not declare profitable ARR. A named human decides.
              A named human remains accountable after the plant move. Cash stays money received.
              Margin stays what remains after the cost to serve.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with
              measured notes. It does not keep invoices paid as contribution margin. It does not
              keep cash collected as profitable ARR. It does not keep cash in the bank as margin
              after the cost to serve. A later question that cites a paid invoice as if the margin
              were already known is citing a receipt. Sync must not auto-close, auto-authorize, or
              treat invoices paid as contribution margin, or as Learning credit.
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
              directly. Evidence may hold cash collected or invoices paid, and which invoice or
              receipt that record named. Human decision may hold who accepted the consequence.
              Action may hold the intent that decision routed. Verification may hold the named
              observation. Learning may hold achieved, not_achieved, or inconclusive, with measured
              notes. None of those steps is a paid invoice used as contribution margin or
              profitable ARR. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating cash in the bank as margin after the cost to serve.
              Later editions can deepen a chapter. The spine stays in this order.
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
              and no operating threshold. It does not claim that cash collected or invoices
              paid is contribution margin or profitable ARR. It does not claim that a receipt
              subtracts the cost to serve. It does not claim that Sync executes plant work. It does
              not claim CMMS write-back as a shipped product. It does not claim billing write-back,
              invoice posting, revenue recognition, margin calculation, or an ARR ledger as a
              shipped product.
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
              describes that journey. Walking those steps is not contribution margin. The
              verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, billing
              write-back, a cost-ledger pull, SMTP invite delivery, or automatic revocation of
              access on expiry as live. It does not describe Sync writing work orders, clearing
              equipment to run, marking a case plant-execute, collecting cash, recognizing revenue,
              computing contribution margin, declaring profitable ARR, starting equipment, releasing
              a hold, or controlling the plant. Simulated or seeded telemetry and assets are
              practice records. They are not live plant results, and they are not margin after the
              cost to serve. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>{' '}
              on why an operational close is not cash collected or revenue recognized,{' '}
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
              on why a later case inherits the measured result and not the receipt,{' '}
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
              the measured result. The paid invoice does not compute the margin.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/margin-is-not-profit"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Margin Is Not Profit
              </Link>
              , on why contribution margin and unit economics are still not bottom-line profit or
              durable profitable revenue. Gross margin after the cost to serve is not profitable
              ARR that compounds toward the portfolio northstar.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Cash
                collected is money received. Invoices paid means the bill was settled. Contribution
                margin is what remains after the cost to serve. Profitable ARR is recurring revenue
                that still covers that cost. Cash in the bank is not that margin. The Reliability
                Engineer workspace is where a signed-in Decision Case is completed. A Reliability
                Assessment is the bounded review when the question is whether the records can
                support a conclusion. None of those is a claim that Sync executes plant work,
                collects cash, recognizes revenue, computes contribution margin, declares
                profitable ARR, that CMMS write-back is live, or that self-guided onboarding is a
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
          <InsightNextSteps slug="cash-is-not-margin" />
        </motion.article>
      </div>
    </main>
  );
}
