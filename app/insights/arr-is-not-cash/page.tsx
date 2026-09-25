'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('arr-is-not-cash');

export default function ArrIsNotCashPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">ARR Is Not Cash</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              ARR is the annualized value of recurring contracted subscription revenue that renews.
              Cash is money received (collected). Contracted annualized recurring revenue can sit on
              the books while cash is uncollected. Cash can arrive from non-recurring work without
              growing ARR.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              ARR is not cash. ARR is the annualized value of recurring contracted subscription
              revenue that renews. Cash is money received (collected). Contracted annualized
              recurring revenue can sit on the books while cash is uncollected. Cash can arrive from
              non-recurring work without growing ARR. One-time project sales, professional services,
              hardware, and non-recurring fees can bring cash without growing ARR. Treating ARR as
              cash records an annualized contract as a receipt nobody has collected, under the
              honesty and verification boundary. Sync may surface an ARR figure or a cash-collected
              figure beside Evidence, Verification, and the closed outcome. Surfacing is still a
              read. An ARR figure on the books while cash is uncollected leaves the cash
              uncollected. Cash from non-recurring work leaves ARR unchanged. Direct plant execute stays off.
              CMMS write-back is not a live product path. Billing write-back is not a
              live product path. Sync does not book revenue. Sync does not recognize revenue. Sync
              does not measure ARR. Sync does not measure ARR for the customer. Sync does not
              collect cash. Sync does not attribute a change in cash, risk, or capacity. Sync does
              not execute plant work.
            </p>

            <p>
              An ARR figure looks like the close of the commercial question. The contract is named.
              Someone says the annualized value renews. The record is then read as cash: the
              contracted amount was received, the uncollected balance was collected, and money from
              non-recurring work grew ARR. The ARR figure did none of that. It answered the
              annualized value of recurring contracted subscription revenue that renews. It did not
              record money received. It did not show that cash was collected. It did not show that
              cash from non-recurring work grew ARR.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is
              not margin. Margin is not profit. Profit is not value. Value is not outcome. Outcome
              is not impact. Impact is not revenue. Revenue is not ARR. ARR is not cash. Each word
              can be true in its own place. None of the earlier words fills the last one. A closed
              work order, cash collected, a unit remainder, a profit figure, a measured outcome, an
              attributed change, a recognized sale, and an annualized contract are activity, money,
              accounting, a recorded result, a claim about that result, a period booking, and a
              recurring contract. Cash is money received. ARR is the annualized value of recurring
              contracted subscription revenue that renews. An annualized contract on the books is
              not that receipt.
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
              . This essay is why ARR cannot be read as cash. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold an ARR figure, a note that cash was collected, or a note that someone
              else stated either figure, when the source of that note is named. The{' '}
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
              notes. None of those steps collects cash. None of them treats ARR as cash. None of
              them measures ARR for the customer. None of them attributes cash, risk, or capacity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              ARR is recurring contracted subscription revenue, not cash
            </h2>

            <p>
              <Link
                href="/insights/revenue-is-not-arr"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Revenue Is Not ARR
              </Link>{' '}
              sits one step earlier. Recognized revenue is sales booked in a period. ARR is the
              annualized value of recurring contracted subscription revenue that renews. One-time
              project sales, professional services, hardware, and non-recurring fees can grow
              recognized revenue without growing ARR. ARR can hold while period revenue dips. This
              essay starts after that split has been kept. Revenue is not ARR. The next refusal is
              that ARR is not cash. The annualized contract can sit on the books and cash can still
              be uncollected. Cash can arrive from non-recurring work and ARR can still stay put.
            </p>

            <p>
              <Link
                href="/insights/impact-is-not-revenue"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Impact Is Not Revenue
              </Link>{' '}
              sits one step before that. Business impact is attribution that a named decision
              changed cash, risk, or capacity. Impact is not revenue. The revenue is not ARR. The
              ARR is not cash. An attributed change is not money received.
            </p>

            <p>
              <Link
                href="/insights/outcome-is-not-impact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Outcome Is Not Impact
              </Link>{' '}
              sits one step before that. A measured outcome is named observation against named
              criteria, stored as achieved, not_achieved, or inconclusive, with measured notes.
              Outcome is not impact. The impact is not the revenue. The revenue is not ARR. The ARR
              is not cash.
            </p>

            <p>
              <Link
                href="/insights/value-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Value Is Not Outcome
              </Link>{' '}
              sits one step before that. Value is the verified operational outcome a Decision Case
              was opened to change. A reported outcome, including a favorable KPI move, is not that
              value unless it is the verified change the case named and authorized. The value is not
              the outcome. The outcome is not the impact. The impact is not the revenue. The revenue
              is not ARR. The ARR is not cash.
            </p>

            <p>
              <Link
                href="/insights/profit-is-not-value"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Profit Is Not Value
              </Link>{' '}
              keeps the accounting result off the verified operational outcome. Profit is an
              accounting result under named cost rules. That figure is not the value, the value is
              not the impact, the impact is not recognized sales, recognized sales in a period are
              not ARR, and ARR is not cash. A profit figure beside an ARR figure still does not
              record money received.
            </p>

            <p>
              <Link
                href="/insights/margin-is-not-profit"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Margin Is Not Profit
              </Link>{' '}
              keeps the unit remainder off bottom-line profit. Contribution margin is what remains
              after the cost to serve. That essay names profitable ARR as a later claim: recurring
              revenue that remains profitable after the costs the unit remainder does not carry, and
              still compounds toward the portfolio northstar. This essay does not reach that claim.
              ARR is not cash. ARR, even when the cash is uncollected, is not profitable ARR. Cash
              from non-recurring work is not ARR, and it is not profitable ARR. A positive unit
              remainder beside an ARR figure still does not collect the cash.
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
              A named accountable human can own the result, and cash can still be uncollected. An
              ARR figure does not collect it.
            </p>

            <p>
              ARR has a different object than cash. ARR is the annualized value of recurring
              contracted subscription revenue that renews. Cash is money received (collected). A
              sentence that only states ARR does not say the money was received. A sentence that
              only states cash collected does not say the source renews, and it does not say ARR
              grew. The contract can sit on the books. The cash can still be uncollected. The cash
              can arrive from non-recurring work. ARR can still stay put.
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
              for the outcome after the work runs, not ARR, and not cash. An authorized state can
              sit beside an ARR figure while cash is still uncollected. Recommend is not authorize.
              A recommendation that cites the ARR figure does not accept the consequence, and it
              does not collect the cash.
            </p>

            <p>
              Cash discipline earlier in the stack uses the same cash object.{' '}
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>{' '}
              keeps the operational close off the receipt. Closure is not cash. Cash collected is
              money received. Revenue recognized, in that essay, is the earning event recorded on
              the books.{' '}
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              keeps the receipt off the unit remainder. Cash is not margin. Invoices paid means the
              customer settled the bill. Cash in the bank is money received. It is not contribution
              margin, and it is not ARR. Margin is not profit. Profit is not value. A shutdown can
              collect cash, show a margin, print a profit, store a measured outcome, carry an impact
              claim, recognize a sale, and hold an ARR figure — and the cash against that ARR figure
              can still be uncollected. Cash from one-time project sales, professional services,
              hardware, and non-recurring fees can arrive without growing ARR. None of those earlier
              records turns the annualized contract into money received.
            </p>

            <p>
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps the write off the case. The Action chapter records intent. ACTION remains a
              locked disposition until authorized execution systems write the work order or isolate
              the equipment. An ARR figure does not unlock that write. It does not collect cash. It
              does not measure ARR. It does not attribute cash, risk, or capacity to the decision.
              Sync does not write the work order. Sync does not clear equipment to run. Sync does
              not mark the case plant-execute. Sync does not book revenue. Sync does not recognize
              revenue. Sync does not measure ARR. Sync does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              ARR answers the annualized value of recurring contracted subscription revenue that
              renews. It does not record cash collected.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Cash is money received</h2>

            <p>
              Cash is not a property of the ARR figure. Cash is money received (collected). Invoices
              paid means the customer settled the bill. ARR can sit on the books while that
              settlement has not happened. Cash can arrive from non-recurring work without growing
              ARR. Recognized sales in a period are a different record again. The books can
              recognize a sale, the contract can renew, and the cash can still be uncollected. The
              cash can be received, and the source can still be non-recurring work, so ARR does not
              grow. Named intent is what the decision meant to do. The outcome is what was measured.
              Impact is the attributed change. Revenue is the recognized sale. ARR is the annualized
              recurring contract. Cash is the receipt.
            </p>

            <p>
              This essay states no ARR number, no cash amount, and no MRR number. Monthly recurring
              revenue, when someone states it, is still not ARR unless it is the annualized value of
              recurring contracted subscription revenue that renews, and that annualized value is
              still not cash. Stating an annualized figure does not show the money was received.
              Stating a cash figure does not show the source was recurring contracted subscription
              revenue that renews, and it does not show that ARR grew.
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
              notes. That check is the measured result. It is not, by itself, ARR, and it is not, by
              itself, cash. A recorded outcome without money received leaves the cash uncollected. An
              ARR figure without money received leaves the cash uncollected. Cash from non-recurring
              work leaves ARR unchanged.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit ARR in place of
              that outcome, and it does not inherit cash in place of that outcome. A later shutdown
              that cites last time as if the ARR figure were already cash is citing an annualized
              contract as a receipt. Sync must not auto-close, auto-authorize, or treat ARR as cash
              as Learning credit.
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
              that comes after. ARR, in this essay, is the annualized value of recurring contracted
              subscription revenue that renews. Cash is money received. Neither is a claim that the
              asset stays known-good, and neither is produced by storing achieved. A verified
              outcome can be not_achieved or inconclusive. Those results still close the claim about
              what was observed. They are not cash collected.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              is the same refusal one step earlier in the evidence. Two records that move together
              are not a cause. Cash that moved in the same period as an ARR figure is not, by that
              movement, proof that the receipt is the recurring contract, and it is not proof that
              ARR grew. The coincidence can inform a recommendation to investigate. It is not cash
              collected against the contract, and it is not proof the money renews.
            </p>

            <p className="text-xl font-semibold text-white">
              ARR is not cash. ARR is the annualized value of recurring contracted subscription
              revenue that renews. Contracted annualized recurring revenue can sit on the books
              while cash is uncollected. Cash can arrive from non-recurring work without growing
              ARR.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Uncollected ARR, and cash from non-recurring work
            </h2>

            <p>
              The failure mode is ordinary after a contract is on the books. ARR is recorded, and
              the record is read as cash collected. The contract can renew and the cash can still be
              uncollected. Contracted annualized recurring revenue can sit on the books while cash
              is uncollected. The opposite failure is just as ordinary. Cash arrived, and the record
              is read as growth in ARR. The cash can be from non-recurring work. It can be a one-time
              project sale. It can be professional services. It can be hardware. It can be a
              non-recurring fee. Each of those can bring cash without growing ARR, because none of
              them is, by itself, recurring contracted subscription revenue that renews. The contract
              looks settled because the ARR word was allowed to stand in for money received, or the
              receipt was allowed to stand in for a change in ARR. This essay states no savings figure,
              and it does not turn uncollected cash or a non-recurring receipt into one.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              already refuses to treat a KPI, a leading indicator, a model score, a green tile, or a
              closed work-order count as the verified operational outcome. An ARR figure is a
              commercial record, not that outcome, and not cash. A proxy is not the outcome. A
              measured outcome is not the impact. An impact claim is not recognized sales. A
              recognized sale is not ARR. ARR is not cash.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A cash figure painted beside that tile is not a stronger green.
              It is a display. Go still required a named human decision. The result after the plant
              move still requires a verified outcome. Revenue still requires recognized sales. ARR
              still requires the annualized recurring contract. Cash still requires money received.
              The color supplies none of them.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              keeps a completion label off the check. A completed workflow is a completion label
              under the criteria someone chose. It is not named observation, not ARR, and not cash
              collected.{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps a clearance stamp off a finished claim. A cleared flag is not proof the work is
              finished, and it is not proof that an ARR figure is cash.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps the proposal off the decision. A recommendation may say investigate because cash
              is uncollected against contracted ARR, or because cash arrived from non-recurring work
              without growing ARR. That proposal does not authorize the work, and it does not
              collect the cash. Recommend is not authorize.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling ARR cash crosses that
              boundary. Treating contracted annualized recurring revenue as money received, while
              the cash is uncollected, is the same confusion. Treating cash from non-recurring work
              as growth in ARR is the same confusion. Sync refuses false precision. Sync refuses
              when evidence is insufficient. Sync does not measure ARR. Sync does not measure ARR
              for the customer. Sync does not collect cash. Sync does not book revenue. Sync does
              not recognize revenue.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating ARR as cash records an annualized contract as a receipt nobody has collected.
              ARR can sit on the books while cash is uncollected. Cash can arrive from non-recurring
              work without growing ARR.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing an ARR figure or a cash figure is still a read
            </h2>

            <p>
              Sync may surface an ARR figure or a cash-collected figure beside Evidence,
              Verification, and the closed outcome. Surfacing is still a read. The screen can show
              achieved, not_achieved, or inconclusive next to the criteria the case holds, next to
              an ARR figure someone recorded elsewhere, and next to a note that money was received.
              Showing the figure does not write a CMMS work order. Showing the figure does not clear
              equipment to run. Showing the figure does not treat the case as plant-execute. Showing
              the figure does not book revenue. Showing the figure does not recognize revenue.
              Showing the figure does not measure ARR. Showing the figure does not measure ARR for
              the customer. Showing the figure does not collect cash. Showing the figure does not
              attribute a change in cash, risk, or capacity. A read of an ARR figure is still a
              read. An annualized contract without money received leaves the cash uncollected.
            </p>

            <p>
              Evidence from the plant beats the ARR figure when the figure is being used as cash. If
              the evidence on the case does not support the named observation, the case refuses. If
              the evidence records ARR and does not record money received, the case may store the
              ARR figure as a contract record and must not store the figure as cash collected. If
              the evidence records cash from non-recurring work, the case may cite the receipt and
              must not store the receipt as growth in ARR. The label does not fill the gap, and it
              does not close it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. Simulated or seeded telemetry and
              assets are practice records. A practice record that says ARR is cash is not a customer
              plant release, and it is not money received.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite an ARR figure when the source of that figure is named, and when the
              citation says it is a claim about recurring contracted subscription revenue rather than
              a measurement Sync performed, and rather than cash collected. Evidence may cite cash
              collected when the source of the receipt is named. Those citations are records of ARR
              figures and of receipts someone else stated. They are not records that Sync collected
              the cash. They are not records that Sync measured ARR for the customer. They are not
              records that the ARR figure is cash. A recommendation may say investigate because cash
              is uncollected against contracted ARR, or because cash arrived from non-recurring work
              without growing ARR. The proposal does not collect the cash. Recommend is not
              authorize.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not cash collected. An ARR label does not perform the
              write and does not turn the contract into money received. Authorized execution systems
              write the work order or the isolation. Sync does not write the work order. Sync does
              not mark an asset closed. Sync does not write that state back. CMMS write-back is not
              a live product path. Billing write-back is not a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The check
              is named observation against named criteria, stored as achieved, not_achieved, or
              inconclusive, with measured notes. That record is the outcome the case is allowed to
              close when the criteria named an operational result. It does not, by itself, turn the
              outcome into ARR, and it does not turn ARR into cash. A named human decides. A named
              human remains accountable after the plant move. Cash stays uncollected until money
              received is a separate commercial record. ARR stays the annualized value of recurring
              contracted subscription revenue that renews even when cash arrives from non-recurring
              work. This essay does not supply either record as the other. Sync does not attribute a
              change in cash, risk, or capacity. Sync does not book revenue. Sync does not recognize
              revenue. Sync does not measure ARR. Sync does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface an ARR figure or a cash-collected figure beside Evidence,
              Verification, and the closed outcome. Surfacing is still a read. Sync refuses false
              precision. Sync refuses when evidence is insufficient. A named human decides. A named
              human remains accountable after the plant move. ARR stays the annualized value of
              recurring contracted subscription revenue that renews. Cash stays money received.
              Contracted annualized recurring revenue on the books while cash is uncollected leaves
              the cash uncollected. Cash from non-recurring work without a recurring contract leaves
              ARR unchanged.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with measured
              notes. It does not keep ARR as cash. A later question that cites an ARR figure as if
              the cash were already collected is citing an annualized contract. A later question that
              cites cash from non-recurring work as if ARR had already grown is citing a receipt.
              Sync must not auto-close, auto-authorize, or treat ARR as cash as Learning credit.
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
              directly. Evidence may hold the ARR figure, the cash figure, or the measured result
              that was shown. Human decision may hold who accepted the consequence. Action may hold
              the intent that decision routed. Verification may hold the named observation. Learning
              may hold achieved, not_achieved, or inconclusive, with measured notes — the measured
              outcome, not cash collected. None of those steps is ARR used as cash. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating an annualized contract as money received. Later
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
              no plant, states no savings figure, states no price, and claims no prevented failure.
              It states no OEM limit and no operating threshold. It states no ARR number, no cash
              amount, and no MRR number. It does not claim that ARR is cash, writes a CMMS work
              order, clears equipment to run, books revenue, recognizes revenue, measures ARR,
              measures ARR for the customer, collects cash, or attributes a change in cash, risk, or
              capacity. It does not claim that Sync executes plant work. It does not claim CMMS
              write-back as a shipped product. It does not claim billing write-back as a shipped
              product. It does not invent a customer, a price, or a return.
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
              describes that journey. Walking those steps is not a claim that ARR is cash. The
              verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, billing
              write-back, SMTP invite delivery, or automatic revocation of access on expiry as live.
              It does not describe Sync writing work orders, clearing equipment to run, marking a
              case plant-execute, starting equipment, releasing a hold, controlling the plant,
              booking revenue, recognizing revenue, measuring ARR, or collecting cash. Simulated or
              seeded telemetry and assets are practice records. They are not live plant results.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              keeps a named person on the decision. The ARR figure does not accept, reject,
              escalate, or return. The cash figure does not either. A specific Sync decision, in this
              essay, is a named human decision recorded on a Sync case. Sync did not make it. A
              named human decides. A named human remains accountable after the plant move.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/revenue-is-not-arr"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Revenue Is Not ARR
              </Link>{' '}
              on why a period booking is not the annualized contract,{' '}
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>{' '}
              on why an operational close is not cash collected or revenue recognized,{' '}
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              on why money received is not the unit remainder,{' '}
              <Link
                href="/insights/margin-is-not-profit"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Margin Is Not Profit
              </Link>{' '}
              on why the unit remainder is not bottom-line profit or profitable ARR,{' '}
              <Link
                href="/insights/profit-is-not-value"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Profit Is Not Value
              </Link>{' '}
              on why an accounting result is not the verified operational outcome,{' '}
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>{' '}
              on why a named owner is not the verified outcome,{' '}
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
              on why a later case inherits the measured result and not a cash claim,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a proposal is not the decision,{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              on why the limit has to be stated, and{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              on why cash that moved with an ARR figure is not a cause. A{' '}
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
              the measured result. The ARR figure does not record the cash.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. ARR is the
                annualized value of recurring contracted subscription revenue that renews. Cash is
                money received (collected). Contracted annualized recurring revenue can sit on the
                books while cash is uncollected. Cash can arrive from non-recurring work without
                growing ARR. The Reliability Engineer workspace is where a signed-in Decision Case
                is completed. A Reliability Assessment is the bounded review when the question is
                whether the records can support a conclusion. None of those is a claim that Sync
                executes plant work, books revenue, recognizes revenue, measures ARR, measures ARR
                for the customer, collects cash, attributes cash, risk, or capacity, declares a
                return, that CMMS write-back is live, that billing write-back is live, or that
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
          <InsightNextSteps slug="arr-is-not-cash" />
        </motion.article>
      </div>
    </main>
  );
}
