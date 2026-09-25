'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('cash-is-not-runway');

export default function CashIsNotRunwayPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cash Is Not Runway</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Cash is money received (collected) that can be spent now. Runway is how long
              operations can continue at the current net burn before cash is exhausted: cash
              divided by burn rate, with explicit assumptions. A cash balance can look healthy
              while runway is short if burn is high or collections are lumpy. Runway can look long
              while cash is trapped in receivables or restricted accounts.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Cash is not runway. Cash is money received (collected) that can be spent now. Runway
              is how long operations can continue at the current net burn before cash is exhausted.
              That duration is cash divided by burn rate, with explicit assumptions. A cash balance
              can look healthy while runway is short if burn is high or collections are lumpy.
              Runway can look long while cash is trapped in receivables or restricted accounts.
              Treating a cash balance as runway records a balance as a duration nobody has measured,
              under the honesty and verification boundary. Sync may surface a cash figure or a
              runway figure beside Evidence, Verification, and the closed outcome. Surfacing is
              still a read. A cash balance that looks healthy while burn is high, or while
              collections are lumpy, leaves runway short. A runway figure that counts receivables
              or restricted accounts leaves spendable cash smaller than the figure used. Direct
              plant execute stays off. CMMS write-back is not a live product path. Billing
              write-back is not a live product path. Sync does not book revenue. Sync does not
              recognize revenue. Sync does not measure ARR. Sync does not measure ARR for the
              customer. Sync does not measure cash. Sync does not measure cash for the customer.
              Sync does not measure runway. Sync does not measure runway for the customer. Sync
              does not collect cash. Sync does not attribute a change in cash, risk, or capacity.
              Sync does not execute plant work.
            </p>

            <p>
              A cash balance looks like the close of the duration question. The balance is named.
              Someone divides it by a burn rate and reads the result as how long operations can
              continue. The balance did none of that by itself. It answered how much money received
              can be spent now, when the figure is that cash. It did not state the current net
              burn. It did not state the assumptions. It did not show that receivables or restricted
              accounts were kept out of the numerator.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is
              not margin. Margin is not profit. Profit is not value. Value is not outcome. Outcome
              is not impact. Impact is not revenue. Revenue is not ARR. ARR is not cash. Cash is not
              runway. Each word can be true in its own place. None of the earlier words fills the
              last one. A closed work order, cash collected, a unit remainder, a profit figure, a
              measured outcome, an attributed change, a recognized sale, an annualized contract, and
              a spendable balance are activity, money, accounting, a recorded result, a claim about
              that result, a period booking, a recurring contract, and a balance. Cash is money
              received that can be spent now. Runway is how long operations can continue at the
              current net burn before cash is exhausted. A balance on the books is not that
              duration.
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
              . This essay is why cash cannot be read as runway. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold a cash figure, a runway figure, or a note that someone else stated
              either figure, when the source of that note is named. The{' '}
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
              notes. None of those steps measures runway. None of them treats cash as runway. None
              of them measures cash for the customer. None of them measures runway for the customer.
              None of them attributes cash, risk, or capacity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Cash that can be spent now is not a duration
            </h2>

            <p>
              <Link
                href="/insights/arr-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                ARR Is Not Cash
              </Link>{' '}
              sits one step earlier. ARR is the annualized value of recurring contracted
              subscription revenue that renews. Cash is money received (collected). Contracted
              annualized recurring revenue can sit on the books while cash is uncollected. Cash can
              arrive from non-recurring work without growing ARR. This essay starts after that split
              has been kept. ARR is not cash. The next refusal is that cash is not runway. Money
              received that can be spent now can sit in the balance, and the time operations can
              continue at the current net burn can still be short. A runway figure can look long
              while the cash it used is trapped in receivables or restricted accounts.
            </p>

            <p>
              <Link
                href="/insights/revenue-is-not-arr"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Revenue Is Not ARR
              </Link>{' '}
              sits one step before that. Recognized revenue is sales booked in a period. ARR is the
              annualized value of recurring contracted subscription revenue that renews. The revenue
              is not ARR. The ARR is not cash. The cash is not runway. A period booking is not how
              long operations can continue.
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
              ARR is not cash. The cash is not runway. An attributed change is not a duration at the
              current net burn.
            </p>

            <p>
              <Link
                href="/insights/outcome-is-not-impact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Outcome Is Not Impact
              </Link>{' '}
              sits one step before that. A measured outcome is named observation against named
              criteria, stored as achieved, not_achieved, or inconclusive, with measured notes. The
              outcome is not the impact. The impact is not the revenue. The revenue is not ARR. The
              ARR is not cash. The cash is not runway.
            </p>

            <p>
              <Link
                href="/insights/value-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Value Is Not Outcome
              </Link>{' '}
              keeps a reported outcome off the verified operational outcome the Decision Case was
              opened to change. A reported outcome, including a favorable KPI move, is not that
              value unless it is the verified change the case named and authorized. The value is not
              the outcome. The outcome is not the impact. The impact is not the revenue. The revenue
              is not ARR. The ARR is not cash. The cash is not runway.
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
              not ARR, ARR is not cash, and cash is not runway. A profit figure beside a cash
              balance still does not state how long operations can continue.
            </p>

            <p>
              <Link
                href="/insights/margin-is-not-profit"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Margin Is Not Profit
              </Link>{' '}
              keeps the unit remainder off bottom-line profit. Contribution margin is what remains
              after the cost to serve. That essay names profitable ARR as a later claim. This essay
              does not reach that claim. Cash is not margin. Cash is not runway. A positive unit
              remainder beside a cash balance still does not measure runway.
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
              A named accountable human can own the result, and runway can still be unmeasured. A
              cash balance does not measure it.
            </p>

            <p>
              Cash has a different object than runway. Cash is money received (collected) that can
              be spent now. Runway is how long operations can continue at the current net burn
              before cash is exhausted. A sentence that only states a cash balance does not say how
              long operations can continue. A sentence that only states runway does not say the
              numerator was money that can be spent now. The balance can look healthy. The burn can
              still be high. Collections can still be lumpy. Receivables and restricted accounts can
              still be inside the figure someone divided.
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
              for the outcome after the work runs, not cash, and not runway. An authorized state can
              sit beside a cash balance while runway is still unmeasured. Recommend is not
              authorize. A recommendation that cites the cash balance does not accept the
              consequence, and it does not measure runway.
            </p>

            <p>
              Cash discipline earlier in the stack uses the same cash object and a different next
              refusal.{' '}
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
              margin, and it is not profitable ARR. That refusal stops at the cost to serve. This
              essay does not repeat it. Cash that can be spent now is still not runway. Margin is
              not profit. Profit is not value. A shutdown can collect cash, show a margin, print a
              profit, store a measured outcome, carry an impact claim, recognize a sale, and hold an
              ARR figure — and the cash balance can still fail to state how long operations can
              continue at the current net burn. None of those earlier records turns the balance into
              runway.
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
              the equipment. A cash figure does not unlock that write. It does not measure runway.
              It does not measure cash. It does not attribute cash, risk, or capacity to the
              decision. Sync does not write the work order. Sync does not clear equipment to run.
              Sync does not mark the case plant-execute. Sync does not book revenue. Sync does not
              recognize revenue. Sync does not measure ARR. Sync does not measure cash. Sync does
              not measure runway. Sync does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Cash answers money received (collected) that can be spent now. It does not record how
              long operations can continue at the current net burn before cash is exhausted.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Runway is cash divided by burn rate
            </h2>

            <p>
              Runway is not a property of the cash balance. Runway is how long operations can
              continue at the current net burn before cash is exhausted. The calculation is cash
              divided by burn rate. Current net burn is the rate at which that cash is exhausted:
              cash leaving operations minus cash coming in, over the period the rate was measured.
              The assumptions have to be named. Which cash is in the numerator. Whether that cash is
              money received that can be spent now. Whether receivables are excluded. Whether
              restricted accounts are excluded. Which period the burn rate was measured over.
              Whether that rate is assumed to stay constant. Whether future collections are included.
              A runway figure that omits those assumptions is a different claim from the duration
              this essay names.
            </p>

            <p>
              This essay states no cash amount, no burn rate, and no runway length. Stating a cash
              balance does not show the current net burn. Stating a runway figure does not show the
              numerator was money that can be spent now, and it does not show that the assumptions
              were named. Monthly recurring revenue, when someone states it, is still not cash, and
              a cash balance is still not runway.
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
              notes. That check is the measured result. It is not, by itself, cash, and it is not,
              by itself, runway. A recorded outcome without a named burn rate leaves runway
              unmeasured. A cash balance without that rate leaves runway unmeasured. A runway figure
              that uses receivables or restricted accounts leaves the spendable duration unmeasured.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit a cash balance
              in place of that outcome, and it does not inherit runway in place of that outcome. A
              later shutdown that cites last time as if the cash balance were already runway is
              citing a balance as a duration. Sync must not auto-close, auto-authorize, or treat
              cash as runway as Learning credit.
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
              that comes after. Cash, in this essay, is money received (collected) that can be spent
              now. Runway is how long operations can continue at the current net burn before cash is
              exhausted. Neither is a claim that the asset stays known-good, and neither is produced
              by storing achieved. A verified outcome can be not_achieved or inconclusive. Those
              results still close the claim about what was observed. They are not runway.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              is the same refusal one step earlier in the evidence. Two records that move together
              are not a cause. A runway figure that moved in the same period as a cash balance is
              not, by that movement, proof that the balance is the duration, and it is not proof
              that the burn rate was the current net burn. The coincidence can inform a
              recommendation to investigate. It is not runway, and it is not proof the assumptions
              were named.
            </p>

            <p className="text-xl font-semibold text-white">
              Cash is not runway. Cash is money received (collected) that can be spent now. Runway
              is cash divided by burn rate, with explicit assumptions. A cash balance can look
              healthy while runway is short if burn is high or collections are lumpy. Runway can
              look long while cash is trapped in receivables or restricted accounts.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A healthy balance, a short runway, and trapped cash
            </h2>

            <p>
              The failure mode is ordinary after a balance is on the books. Cash is recorded, and
              the record is read as runway. The balance can look healthy and the runway can still be
              short if burn is high. The same balance divided by a higher current net burn is a
              shorter duration. The size of the balance does not state the duration. Collections can
              be lumpy: cash arrives in uneven amounts at uneven times. A balance taken after a
              collection can look healthy. The current net burn can exhaust that cash before the
              next collection. If the runway figure includes a future collection, that assumption
              has to be named. If it does not, the duration is only as long as money that can be
              spent now lasts at the current net burn.
            </p>

            <p>
              The opposite failure is just as ordinary. Runway looks long, and the cash used in the
              division cannot be spent now. Receivables are amounts not yet received. They are not
              money received (collected) that can be spent now. Restricted accounts hold money that
              cannot be spent now. They are not cash in this essay. Counting either in the numerator
              lengthens the stated runway past the time operations can continue on money that can be
              spent now. Runway can look long while cash is trapped in receivables or restricted
              accounts. The balance looks settled because the cash word was allowed to stand in for
              the duration, or the runway word was allowed to stand in for money that can be spent
              now. This essay states no savings figure, and it does not turn a short runway or
              trapped cash into one.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              already refuses to treat a KPI, a leading indicator, a model score, a green tile, or a
              closed work-order count as the verified operational outcome. A cash balance is a
              commercial record, not that outcome, and not runway. A proxy is not the outcome. A
              measured outcome is not the impact. An impact claim is not recognized sales. A
              recognized sale is not ARR. ARR is not cash. Cash is not runway.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A runway figure painted beside that tile is not a stronger
              green. It is a display. Go still required a named human decision. The result after the
              plant move still requires a verified outcome. Cash still requires money received that
              can be spent now. Runway still requires cash divided by the current net burn, with the
              assumptions named. The color supplies none of them.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              keeps a completion label off the check. A completed workflow is a completion label
              under the criteria someone chose. It is not named observation, not cash, and not
              runway.{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps a clearance stamp off a finished claim. A cleared flag is not proof the work is
              finished, and it is not proof that a cash balance is runway.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps the proposal off the decision. A recommendation may say investigate because burn
              is high, because collections are lumpy, or because the runway figure counts
              receivables or restricted accounts. That proposal does not authorize the work, and it
              does not measure runway. Recommend is not authorize.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling cash runway crosses
              that boundary. Treating a healthy-looking balance as a long duration, while burn is
              high or collections are lumpy, is the same confusion. Treating receivables or
              restricted accounts as cash that can be spent now is the same confusion. Sync refuses
              false precision. Sync refuses when evidence is insufficient. Sync does not measure
              cash. Sync does not measure cash for the customer. Sync does not measure runway. Sync
              does not measure runway for the customer. Sync does not collect cash. Sync does not
              book revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync does
              not measure ARR for the customer.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating cash as runway records a balance as a duration nobody has measured. A cash
              balance can look healthy while runway is short if burn is high or collections are
              lumpy. Runway can look long while cash is trapped in receivables or restricted
              accounts.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a cash figure or a runway figure is still a read
            </h2>

            <p>
              Sync may surface a cash figure or a runway figure beside Evidence, Verification, and
              the closed outcome. Surfacing is still a read. The screen can show achieved,
              not_achieved, or inconclusive next to the criteria the case holds, next to a cash
              figure someone recorded elsewhere, and next to a note that a runway figure was stated
              with named assumptions. Showing the figure does not write a CMMS work order. Showing
              the figure does not clear equipment to run. Showing the figure does not treat the case
              as plant execute. Showing the figure does not book revenue. Showing the figure does
              not recognize revenue. Showing the figure does not measure ARR. Showing the figure
              does not measure ARR for the customer. Showing the figure does not measure cash.
              Showing the figure does not measure cash for the customer. Showing the figure does not
              measure runway. Showing the figure does not measure runway for the customer. Showing
              the figure does not collect cash. Showing the figure does not attribute a change in
              cash, risk, or capacity. A read of a cash figure is still a read. A balance without a
              named burn rate and named assumptions leaves runway unmeasured.
            </p>

            <p>
              Evidence from the plant beats the cash figure when the figure is being used as runway.
              If the evidence on the case does not support the named observation, the case refuses.
              If the evidence records a cash balance and does not record the current net burn and
              the assumptions, the case may store the balance as cash and must not store the balance
              as runway. If the evidence records receivables or restricted accounts inside the
              numerator, the case may cite that figure and must not store it as money received that
              can be spent now. The label does not fill the gap, and it does not close it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. A live connector tag pull is not a
              claim of this edition. Simulated or seeded telemetry and assets are practice records.
              A practice record that says cash is runway is not a customer plant release, and it is
              not a measured duration.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite a cash figure when the source of that figure is named, and when the
              citation says it is money received (collected) that can be spent now rather than a
              measurement Sync performed, and rather than runway. Evidence may cite a runway figure
              when the source is named and the assumptions are named: the cash in the numerator, the
              burn rate, the period of that rate, whether the rate is assumed constant, and whether
              future collections, receivables, or restricted accounts are included. Those citations
              are records of figures someone else stated. They are not records that Sync measured
              cash for the customer. They are not records that Sync measured runway for the customer.
              They are not records that the cash figure is runway. A recommendation may say
              investigate because burn is high, because collections are lumpy, or because the runway
              figure counts cash that cannot be spent now. The proposal does not measure runway.
              Recommend is not authorize.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not runway. A cash label does not perform the write and
              does not turn the balance into a duration. Authorized execution systems write the work
              order or the isolation. Sync does not write the work order. Sync does not mark an
              asset closed. Sync does not write that state back. CMMS write-back is not a live
              product path. Billing write-back is not a live product path. Direct plant execute
              stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The check
              is named observation against named criteria, stored as achieved, not_achieved, or
              inconclusive, with measured notes. That record is the outcome the case is allowed to
              close when the criteria named an operational result. It does not, by itself, turn the
              outcome into cash, and it does not turn cash into runway. A named human decides. A
              named human remains accountable after the plant move. Runway stays unmeasured until
              cash divided by the current net burn is a separate record with the assumptions named.
              Cash stays money received that can be spent now even when a runway figure looks long.
              This essay does not supply either record as the other. Sync does not attribute a
              change in cash, risk, or capacity. Sync does not book revenue. Sync does not recognize
              revenue. Sync does not measure ARR. Sync does not measure cash. Sync does not measure
              runway. Sync does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a cash figure or a runway figure beside Evidence, Verification, and
              the closed outcome. Surfacing is still a read. Sync refuses false precision. Sync
              refuses when evidence is insufficient. A named human decides. A named human remains
              accountable after the plant move. Cash stays money received (collected) that can be
              spent now. Runway stays how long operations can continue at the current net burn
              before cash is exhausted: cash divided by burn rate, with explicit assumptions. A cash
              balance that looks healthy while burn is high or collections are lumpy leaves runway
              short. A runway figure that looks long while cash is trapped in receivables or
              restricted accounts leaves spendable cash smaller than the figure used.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with measured
              notes. It does not keep cash as runway. A later question that cites a cash balance as
              if the duration were already measured is citing a balance. A later question that cites
              a long runway while the numerator includes receivables or restricted accounts is
              citing a figure that is not money that can be spent now. Sync must not auto-close,
              auto-authorize, or treat cash as runway as Learning credit.
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
              directly. Evidence may hold the cash figure, the runway figure, or the measured result
              that was shown. Human decision may hold who accepted the consequence. Action may hold
              the intent that decision routed. Verification may hold the named observation. Learning
              may hold achieved, not_achieved, or inconclusive, with measured notes — the measured
              outcome, not runway. None of those steps is cash used as runway. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a cash balance as how long operations can continue.
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
              no plant, states no savings figure, states no price, and claims no prevented failure.
              It states no OEM limit and no operating threshold. It states no cash amount, no burn
              rate, and no runway length. It does not claim that cash is runway, writes a CMMS work
              order, clears equipment to run, books revenue, recognizes revenue, measures ARR,
              measures ARR for the customer, measures cash, measures cash for the customer, measures
              runway, measures runway for the customer, collects cash, or attributes a change in
              cash, risk, or capacity. It does not claim that Sync executes plant work. It does not
              claim CMMS write-back as a shipped product. It does not claim billing write-back as a
              shipped product. It does not invent a customer, a price, or a return. It does not
              treat contribution margin, invoices paid, or profitable ARR as the question. Cash is
              not margin is a different refusal.
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
              describes that journey. Walking those steps is not a claim that cash is runway. The
              verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, billing
              write-back, SMTP invite delivery, or automatic revocation of access on expiry as live.
              It does not describe Sync writing work orders, clearing equipment to run, marking a
              case plant-execute, starting equipment, releasing a hold, controlling the plant,
              booking revenue, recognizing revenue, measuring ARR, measuring cash, measuring runway,
              or collecting cash. Simulated or seeded telemetry and assets are practice records.
              They are not live plant results. Self-guided onboarding is not claimed as a live
              product path.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              keeps a named person on the decision. The cash figure does not accept, reject,
              escalate, or return. The runway figure does not either. A specific Sync decision, in
              this essay, is a named human decision recorded on a Sync case. Sync did not make it. A
              named human decides. A named human remains accountable after the plant move.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/arr-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                ARR Is Not Cash
              </Link>{' '}
              on why an annualized contract is not money received,{' '}
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
              on why money received is not the unit remainder — a different refusal from this one,{' '}
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
              on why a later case inherits the measured result and not a runway claim,{' '}
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
              on why a runway figure that moved with a cash balance is not a cause. A{' '}
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
              the measured result. The cash figure does not record the runway.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Cash is
                money received (collected) that can be spent now. Runway is how long operations can
                continue at the current net burn before cash is exhausted: cash divided by burn
                rate, with explicit assumptions. A cash balance can look healthy while runway is
                short if burn is high or collections are lumpy. Runway can look long while cash is
                trapped in receivables or restricted accounts. The Reliability Engineer workspace is
                where a signed-in Decision Case is completed. A Reliability Assessment is the
                bounded review when the question is whether the records can support a conclusion.
                None of those is a claim that Sync executes plant work, books revenue, recognizes
                revenue, measures ARR, measures ARR for the customer, measures cash, measures cash
                for the customer, measures runway, measures runway for the customer, collects cash,
                attributes cash, risk, or capacity, declares a return, that CMMS write-back is live,
                that billing write-back is live, or that self-guided onboarding is a live product
                path.
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
          <InsightNextSteps slug="cash-is-not-runway" />
        </motion.article>
      </div>
    </main>
  );
}
