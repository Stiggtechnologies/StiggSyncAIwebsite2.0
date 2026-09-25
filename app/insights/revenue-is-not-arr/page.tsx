'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('revenue-is-not-arr');

export default function RevenueIsNotArrPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Revenue Is Not ARR</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Recognized revenue is sales booked in a period. ARR is the annualized value of
              recurring contracted subscription revenue that renews. One-time project sales,
              professional services, hardware, and non-recurring fees can grow revenue without
              growing ARR. ARR can hold while period revenue dips.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Revenue is not ARR. Recognized revenue is sales booked in a period: the earning event
              recorded on the books for that period. ARR is the annualized value of recurring
              contracted subscription revenue that renews. One-time project sales, professional
              services, hardware, and non-recurring fees can grow recognized revenue without growing
              ARR. ARR can hold while period revenue dips, because a renewal can stay in force while
              a one-time booking from the prior period is absent. Treating recognized revenue as ARR
              ships a period booking into a recurring contracted claim nobody has annualized, under
              the honesty and verification boundary. Sync may surface a recognized-revenue figure or
              an ARR figure beside Evidence, Verification, and the closed outcome. Surfacing is
              still a read. A period of recognized sales without a recurring contracted subscription
              leaves ARR unrecorded. An ARR figure that holds while period revenue dips leaves the
              dip as a period record, not a change in ARR. Direct plant execute stays off. CMMS
              write-back is not a live product path. Billing write-back is not a live product path.
              Sync does not book revenue. Sync does not recognize revenue. Sync does not measure
              ARR. Sync does not measure ARR for the customer. Sync does not attribute a change in cash, risk, or capacity. Sync does not execute plant work.
            </p>

            <p>
              A revenue figure looks like the close of the commercial question. The period is named.
              Someone says the books recognized the sales. The meeting then treats ARR as known: the
              booking belongs to the recurring contract, the one-time project belongs to the
              subscription, and the professional services, the hardware, and the non-recurring fee
              belong to the annualized value. The period booking did none of that. It answered what
              was recognized as sales in that period. It did not annualize a contract. It did not
              show that the revenue renews. It did not show that ARR moved because the period moved.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is
              not margin. Margin is not profit. Profit is not value. Value is not outcome. Outcome
              is not impact. Impact is not revenue. Revenue is not ARR. Each word can be true in its
              own place. None of the earlier words fills the last one. A closed work order, cash
              collected, a unit remainder, a profit figure, a measured outcome, an attributed
              change, and a recognized sale are activity, money, accounting, a recorded result, a
              claim about that result, and a period booking. ARR is the annualized value of
              recurring contracted subscription revenue that renews. A sale on the books for a period
              is not that annualized value.
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
              . This essay is why recognized revenue cannot be read as ARR. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold a recognized-revenue figure, a note that a sale was booked in a
              period, or a note that someone else stated an ARR figure, when the source of that note
              is named. The{' '}
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
              notes. None of those steps books revenue. None of them treats recognized revenue as
              ARR. None of them measures ARR for the customer. None of them attributes cash, risk,
              or capacity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Revenue is sales booked in a period, not ARR
            </h2>

            <p>
              <Link
                href="/insights/impact-is-not-revenue"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Impact Is Not Revenue
              </Link>{' '}
              sits one step earlier. Business impact is attribution that a named decision changed
              cash, risk, or capacity. Revenue, in that essay, is recognized sales: the earning
              event recorded on the books. This essay starts after that split has been kept. Impact
              is not revenue. The next refusal is that revenue is not ARR. The recognized sale can
              be on the books for the period and ARR can still be absent. ARR can hold and the
              period revenue can still dip.
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
              Outcome is not impact. The impact is not the revenue. The revenue is not ARR.
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
              is not ARR.
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
              not the impact, the impact is not recognized sales, and recognized sales in a period
              are not ARR. A profit figure beside a revenue figure still does not annualize a
              contract.
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
              Recognized revenue in a period is not ARR. ARR, even when it holds, is not profitable
              ARR. A positive unit remainder beside a recognized sale still does not make the sale
              recurring contracted subscription revenue.
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
              A named accountable human can own the result, and ARR can still be unrecorded. A
              recognized sale does not close it into ARR.
            </p>

            <p>
              Revenue has a different object than ARR. It is about what was recognized as sales in a
              named period under the rules the books use. It is not about the annualized value of
              recurring contracted subscription revenue that renews. A sentence that only states the
              period booking does not say the revenue renews. A sentence that only states ARR does
              not say what the period booked. The revenue can be recognized. ARR can still be open.
              ARR can hold. The period revenue can still dip.
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
              for the outcome after the work runs, not recognized revenue, and not ARR. An
              authorized state can sit beside a period booking while ARR is still open. Recommend is
              not authorize. A recommendation that cites the revenue figure does not accept the
              consequence, and it does not measure ARR.
            </p>

            <p>
              Cash discipline is the same refusal, earlier in the accounting stack.{' '}
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>{' '}
              keeps the operational close off the receipt. Closure is not cash. Revenue recognized,
              in that essay, is the earning event recorded on the books. This essay uses that object
              as the period record. Recognized revenue is sales booked in a period. Cash collected
              is money received. Neither record is ARR.{' '}
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              keeps the receipt off the unit remainder. Cash is not margin. Margin is not profit.
              Profit is not value. A shutdown can collect cash, show a margin, print a profit, store
              a measured outcome, carry an impact claim, and recognize a sale — and still not be
              ARR. None of those earlier records annualizes a recurring contract.
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
              the equipment. A revenue figure does not unlock that write. It does not book revenue.
              It does not measure ARR. It does not attribute cash, risk, or capacity to the
              decision. Sync does not write the work order. Sync does not clear equipment to run.
              Sync does not mark the case plant-execute. Sync does not book revenue. Sync does not
              recognize revenue. Sync does not measure ARR.
            </p>

            <p className="text-xl font-semibold text-white">
              Recognized revenue answers what was booked as sales in a period. It does not record
              ARR.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              ARR is recurring contracted subscription revenue, annualized
            </h2>

            <p>
              ARR is not a property of the period booking. It is the annualized value of recurring
              contracted subscription revenue that renews. Cash collected is a different record.
              Contribution margin is a different record. Recognized sales in a period are a
              different record again. The books can recognize a sale and the contract can still lack
              a renewal. The contract can renew and the period can still book less, because a
              one-time item from the prior period is gone. Named intent is what the decision meant
              to do. The outcome is what was measured. Impact is the attributed change. Revenue is
              the recognized sale. ARR is the annualized recurring contract.
            </p>

            <p>
              This essay states no ARR number and no MRR number. Monthly recurring revenue, when
              someone states it, is still not ARR unless it is the annualized value of recurring
              contracted subscription revenue that renews. Stating a monthly figure does not
              annualize the contract. Stating an annualized figure does not, by itself, show that
              the revenue was recognized in the period, and it does not show that the period booking
              was only the renewal.
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
              notes. That check is the measured result. It is not, by itself, the revenue, and it is
              not, by itself, ARR. A recorded outcome without a recognized sale leaves the revenue
              unrecorded. A recognized sale without a recurring contracted subscription leaves ARR
              unrecorded.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit recognized
              revenue in place of that outcome, and it does not inherit ARR in place of that
              outcome. A later shutdown that cites last time as if the period booking were already
              ARR is citing a commercial record as an annualized contract. Sync must not auto-close,
              auto-authorize, or treat revenue as ARR as Learning credit.
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
              that comes after. Revenue, in the previous essay, is recognized sales. ARR, in this
              essay, is the annualized value of recurring contracted subscription revenue that
              renews. Neither is a claim that the asset stays known-good, and neither is produced by
              storing achieved. A verified outcome can be not_achieved or inconclusive. Those
              results still close the claim about what was observed. They are not ARR.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              is the same refusal one step earlier in the evidence. Two records that move together
              are not a cause. Recognized revenue that moved in the same period as an ARR figure is
              not, by that movement, proof that the booking is the recurring contract. The
              coincidence can inform a recommendation to investigate. It is not ARR, and it is not
              proof the period sale renews.
            </p>

            <p className="text-xl font-semibold text-white">
              Revenue is not ARR. ARR is the annualized value of recurring contracted subscription
              revenue that renews. Recognized sales in a period without that contract leave ARR
              unrecorded. ARR can hold while period revenue dips.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              One-time sales, services, hardware, and fees are not ARR
            </h2>

            <p>
              The failure mode is ordinary after a period closes. Recognized revenue rose, and the
              room treats the rise as ARR. The rise can be a one-time project sale. It can be
              professional services. It can be hardware. It can be a non-recurring fee. Each of
              those can grow recognized revenue without growing ARR, because none of them is, by
              itself, recurring contracted subscription revenue that renews. The opposite failure is
              just as ordinary. Period revenue dips, and the room treats the dip as a fall in ARR.
              ARR can hold. The prior period can have included a one-time booking that this period
              does not repeat, while the recurring contract still renews. The board looks settled
              because the revenue word was allowed to stand in for ARR, or the dip was allowed to
              stand in for a change in ARR. This essay states no savings figure, and it does not
              turn a deferred cost or a missing one-time booking into one.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              already refuses to treat a KPI, a leading indicator, a model score, a green tile, or
              a closed work-order count as the verified operational outcome. A revenue figure is a
              commercial record, not that outcome, and not ARR. A proxy is not the outcome. A
              measured outcome is not the impact. An impact claim is not recognized sales. A
              recognized sale is not ARR.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. An ARR figure painted beside that tile is not a stronger green.
              It is a display. Go still required a named human decision. The result after the plant
              move still requires a verified outcome. Revenue still requires recognized sales. ARR
              still requires the annualized recurring contract. The color supplies none of the four.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              keeps a completion label off the check. A completed workflow is a completion label
              under the criteria someone chose. It is not named observation, not revenue, and not
              ARR.{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps a clearance stamp off a finished claim. A cleared flag is not proof the work is
              finished, and it is not proof that a period booking is ARR.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps the proposal off the decision. A recommendation may say investigate because ARR
              is unrecorded, because recognized revenue rose on a one-time project sale, professional
              services, hardware, or a non-recurring fee, or because ARR held while period revenue
              dipped. That proposal does not authorize the work, and it does not measure ARR.
              Recommend is not authorize.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling recognized revenue ARR
              crosses that boundary. Treating a one-time project sale, professional services,
              hardware, or a non-recurring fee as recurring contracted subscription revenue is the
              same confusion. Treating a dip in period revenue as a change in ARR, while the
              recurring contract still renews, is the same confusion. Sync refuses false precision.
              Sync refuses when evidence is insufficient. Sync does not measure ARR. Sync does not
              measure ARR for the customer. Sync does not book revenue. Sync does not recognize
              revenue.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating revenue as ARR ships a period booking into a recurring contracted claim
              nobody has annualized. Recognized revenue can rise and ARR can stay put. ARR can hold
              while period revenue dips.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a revenue figure or an ARR figure is still a read
            </h2>

            <p>
              Sync may surface a recognized-revenue figure or an ARR figure beside Evidence,
              Verification, and the closed outcome. Surfacing is still a read. The screen can show
              achieved, not_achieved, or inconclusive next to the criteria the case holds, next to a
              note that sales were booked in a period, and next to an ARR figure someone recorded
              elsewhere. Showing the figure does not write a CMMS work order. Showing the figure
              does not clear equipment to run. Showing the figure does not treat the case as
              plant-execute. Showing the figure does not book revenue. Showing the figure does not
              recognize revenue. Showing the figure does not measure ARR. Showing the figure does
              not measure ARR for the customer. Showing the figure does not attribute a change in
              cash, risk, or capacity. A read of a revenue figure is still a read. A recognized sale
              without a recurring contracted subscription leaves ARR unrecorded.
            </p>

            <p>
              Evidence from the plant beats the revenue figure when the figure is being used as ARR.
              If the evidence on the case does not support the named observation, the case refuses.
              If the evidence records recognized sales in a period and does not record a recurring
              contracted subscription that renews, the case may store the booking as a period record
              and must not store the booking as ARR. If the evidence records an ARR figure and the
              period revenue dipped, the case may cite both records and must not store the dip as a
              change in ARR. The label does not fill the gap, and it does not close it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. Simulated or seeded telemetry and
              assets are practice records. A practice record that says recognized revenue is ARR is
              not a customer plant release, and it is not an annualized recurring contract.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite recognized revenue when the period and the source of the booking are
              named. Evidence may cite an ARR figure when the source of that figure is named, and
              when the citation says it is a claim about recurring contracted subscription revenue
              rather than a measurement Sync performed. Those citations are records of period
              bookings and of ARR figures someone else stated. They are not records that Sync booked
              the sale. They are not records that Sync measured ARR for the customer. They are not
              records that the period booking is ARR. A recommendation may say investigate because
              ARR is unrecorded, because recognized revenue grew on a one-time item, or because ARR
              held while period revenue dipped. The proposal does not measure ARR. Recommend is not
              authorize.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not ARR. A revenue label does not perform the write and
              does not annualize the contract the work was meant to support. Authorized execution
              systems write the work order or the isolation. Sync does not write the work order.
              Sync does not mark an asset closed. Sync does not write that state back. CMMS
              write-back is not a live product path. Billing write-back is not a live product path.
              Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The check
              is named observation against named criteria, stored as achieved, not_achieved, or
              inconclusive, with measured notes. That record is the outcome the case is allowed to
              close when the criteria named an operational result. It does not, by itself, turn the
              outcome into recognized revenue, and it does not turn recognized revenue into ARR. A
              named human decides. A named human remains accountable after the plant move. ARR stays
              unrecorded until the annualized value of recurring contracted subscription revenue
              that renews is a separate commercial record. The period revenue stays a period record
              even when ARR holds. This essay does not supply either record as the other. Sync does
              not attribute a change in cash, risk, or capacity. Sync does not book revenue. Sync
              does not recognize revenue. Sync does not measure ARR.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a recognized-revenue figure or an ARR figure beside Evidence,
              Verification, and the closed outcome. Surfacing is still a read. Sync refuses false
              precision. Sync refuses when evidence is insufficient. A named human decides. A named
              human remains accountable after the plant move. Recognized revenue stays sales booked
              in a period. ARR stays the annualized value of recurring contracted subscription
              revenue that renews. One-time project sales, professional services, hardware, and
              non-recurring fees without that contract leave ARR unrecorded. ARR can hold while
              period revenue dips.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with measured
              notes. It does not keep revenue as ARR. A later question that cites recognized sales
              as if ARR were already measured is citing a period booking. A later question that
              cites an ARR figure as if the period dip had already changed it is citing a separate
              commercial record. Sync must not auto-close, auto-authorize, or treat revenue as ARR
              as Learning credit.
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
              directly. Evidence may hold the revenue figure, the ARR figure, or the measured result
              that was shown. Human decision may hold who accepted the consequence. Action may hold
              the intent that decision routed. Verification may hold the named observation. Learning
              may hold achieved, not_achieved, or inconclusive, with measured notes — the measured
              outcome, not ARR. None of those steps is recognized revenue used as ARR. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a period booking as an annualized recurring contract.
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
              It states no OEM limit and no operating threshold. It states no ARR number and no MRR
              number. It does not claim that recognized revenue is ARR, writes a CMMS work order,
              clears equipment to run, books revenue, recognizes revenue, measures ARR, measures ARR
              for the customer, or attributes a change in cash, risk, or capacity. It does not claim
              that Sync executes plant work. It does not claim CMMS write-back as a shipped product.
              It does not claim billing write-back as a shipped product. It does not invent a
              customer, a price, or a return.
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
              describes that journey. Walking those steps is not a claim that revenue is ARR. The
              verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, billing write-back,
              SMTP invite delivery, or automatic revocation of access on expiry as live. It does not
              describe Sync writing work orders, clearing equipment to run, marking a case
              plant-execute, starting equipment, releasing a hold, controlling the plant, booking
              revenue, recognizing revenue, or measuring ARR. Simulated or seeded telemetry and
              assets are practice records. They are not live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              keeps a named person on the decision. The revenue figure does not accept, reject,
              escalate, or return. The ARR figure does not either. A specific Sync decision, in this
              essay, is a named human decision recorded on a Sync case. Sync did not make it. A
              named human decides. A named human remains accountable after the plant move.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/impact-is-not-revenue"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Impact Is Not Revenue
              </Link>{' '}
              on why attribution is not recognized sales,{' '}
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
              on why a later case inherits the measured result and not an ARR claim,{' '}
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
              on why a booking that moved with an ARR figure is not a cause. A{' '}
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
              the measured result. The revenue figure does not record ARR.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Recognized
                revenue is sales booked in a period. ARR is the annualized value of recurring
                contracted subscription revenue that renews. One-time project sales, professional
                services, hardware, and non-recurring fees can grow revenue without growing ARR. ARR
                can hold while period revenue dips. The Reliability Engineer workspace is where a
                signed-in Decision Case is completed. A Reliability Assessment is the bounded review
                when the question is whether the records can support a conclusion. None of those is
                a claim that Sync executes plant work, books revenue, recognizes revenue, measures
                ARR, measures ARR for the customer, attributes cash, risk, or capacity, declares a
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
          <InsightNextSteps slug="revenue-is-not-arr" />
        </motion.article>
      </div>
    </main>
  );
}
