'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('solvency-is-not-liquidity');

export default function SolvencyIsNotLiquidityPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Solvency Is Not Liquidity</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Solvency is whether assets and claims structure can cover liabilities and pay debts as
              they come due over a structural horizon — balance-sheet and claim quality, not
              near-term cash timing alone. Liquidity is whether cash and near-cash can meet
              obligations as they come due in the near term (payroll, vendors, debt service windows)
              without forced asset sales or covenant breaches. Solvency is not liquidity. A solvent
              firm can still fail a liquidity window. An illiquid firm can still be solvent on a
              structural horizon. A solvency ratio alone proves neither.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Solvency is not liquidity. Solvency is whether assets and claims structure can cover
              liabilities and pay debts as they come due over a structural horizon — balance-sheet
              and claim quality, not near-term cash timing alone. Liquidity is whether cash and
              near-cash can meet obligations as they come due in the near term (payroll, vendors,
              debt service windows) without forced asset sales or covenant breaches. A solvent firm
              can still fail a liquidity window when receivables lag, a concentration payment slips,
              credit lines are drawn, or timing gaps hit before claims structure heals. An illiquid
              firm can still be solvent on a structural horizon if assets cover claims and a named
              liquidity bridge is already closed — none of which a solvency ratio alone proves.
              Treating solvency as liquidity records balance-sheet and claim quality as a claim
              about near-term cash and near-cash that nobody has shown, under the honesty and
              verification boundary. Sync may surface a solvency note or a liquidity note beside
              Evidence, Verification, and the closed outcome. Surfacing is still a read. A firm
              whose assets and claims can cover liabilities can still miss the near-term cash
              window. A firm that meets that window with a named liquidity bridge already closed can
              still be the solvent firm the ratio did not prove. Direct plant execute stays off.
              CMMS write-back is not a live product path. Billing write-back is not a live product
              path. Sync does not book revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync does not measure ARR for the customer. Sync does not measure cash. Sync does not measure cash for the customer. Sync does not measure runway. Sync does not measure runway for the customer. Sync does not measure survival. Sync does not measure survival for the customer. Sync does not measure solvency. Sync does not measure solvency for the customer. Sync does not measure liquidity. Sync does not measure liquidity for the customer. Sync does not collect cash. Sync does not attribute a change in cash, risk, or capacity. Sync does not execute plant work.
            </p>

            <p>
              A solvency note looks like the close of the liquidity question. The structural horizon
              is named. Someone reads that assets and claims structure can cover liabilities and pay
              debts as they come due and treats cash and near-cash as able to meet payroll, vendors,
              and debt service windows without forced asset sales or covenant breaches. The note did
              none of that by itself. It answered whether assets and the claims structure can cover
              liabilities over a structural horizon, when the note is that solvency and those
              records are named. It did not state whether cash and near-cash can meet the near-term
              obligations. It did not state that receivables will arrive inside the window. It did
              not state that a concentration payment will land. It did not state that credit lines
              remain undrawn, or that a drawn line is still available. It did not state that timing
              gaps close before the claims structure heals. It did not state that a named liquidity
              bridge is already closed.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is
              not margin. Margin is not profit. Profit is not value. Value is not outcome. Outcome is not impact. Impact is not revenue. Revenue is not ARR. ARR is not cash. Cash is not
              runway. Runway is not survival. Survival is not solvency. Solvency is not liquidity.
              Liquidity is not flexibility. Each word can be true in its own place. None of the
              earlier words fills the last one.
              A closed work order, cash collected, a unit remainder, a profit figure, a measured
              outcome, an attributed change, a recognized sale, an annualized contract, a spendable
              balance, a duration at the current net burn, obligation continuity through the next
              decision horizon, and assets and claims that can cover liabilities over a structural
              horizon are activity, money, accounting, a recorded result, a claim about that result,
              a period booking, a recurring contract, a balance, a calculated duration, a near-term
              continuity claim, and a structural claim. Solvency is whether assets and claims
              structure can cover liabilities and pay debts as they come due over a structural
              horizon. Liquidity is whether cash and near-cash can meet obligations as they come due in the near term (payroll, vendors, debt service windows) without forced asset sales or covenant breaches. Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window without breaking obligations, covenants, or continuity — the ability to choose and change course, not merely to pay what is already due. A solvency note is
              not that liquidity claim. A liquidity note is not that flexibility claim.
            </p>

            <p>
              This essay does not collapse liquidity into survival, runway, cash, ARR, margin, or
              profit.{' '}
              <Link
                href="/insights/survival-is-not-solvency"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Survival Is Not Solvency
              </Link>{' '}
              already refuses to treat survival as solvency. Survival is whether the business can
              keep meeting obligations (payroll, vendors, debt service, plant continuity) through
              the next decision horizon. Solvency, in that essay, is whether assets and claims
              structure can cover liabilities and pay debts as they come due over a structural
              horizon — balance-sheet and claim quality, not just near-term obligation continuity.
              That refusal stops at the structural claim. It does not ask whether cash and near-cash
              can meet the near-term windows without forced asset sales or covenant breaches.
              Survival is not solvency is a different refusal. Solvency is not liquidity is the next
              refusal. A positive structural claim, a survived horizon, a runway number, a spendable
              cash balance, an annualized contract, a unit remainder, and a profit figure can all
              sit beside a solvency note and still leave liquidity unshown.
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
              . This essay is why solvency cannot be read as liquidity. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold a solvency note, a liquidity note, or a note that someone else stated
              either record, when the source of that note is named. The{' '}
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
              notes. None of those steps shows liquidity. None of them treats solvency as liquidity.
              None of them measures solvency for the customer. None of them measures liquidity for
              the customer. None of them attributes cash, risk, or capacity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Assets and claims over a structural horizon are not a liquidity window
            </h2>

            <p>
              <Link
                href="/insights/survival-is-not-solvency"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Survival Is Not Solvency
              </Link>{' '}
              sits one step earlier. Survival is whether the business can keep meeting obligations
              (payroll, vendors, debt service, plant continuity) through the next decision horizon.
              Solvency is whether assets and claims structure can cover liabilities and pay debts as
              they come due over a structural horizon. A firm can survive a horizon and still be
              insolvent, or headed there. A solvent firm can still fail survival in a short horizon
              when liquidity timing fails or a concentration shock hits. This essay starts after
              that split has been kept. Survival is not solvency. The next refusal is that solvency
              is not liquidity. The structural claim can hold, and the firm can still fail a
              liquidity window, because cash and near-cash cannot meet payroll, vendors, and debt
              service windows without forced asset sales or covenant breaches. An illiquid firm can
              still be solvent on that structural horizon. Survival is not solvency is a different
              refusal.
            </p>

            <p>
              <Link
                href="/insights/runway-is-not-survival"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Runway Is Not Survival
              </Link>{' '}
              sits one step before that. Runway is how long operations can continue at the current net burn before cash is exhausted: cash divided by burn rate, with explicit
              assumptions. Survival is whether obligations can be met through the next decision
              horizon — not just whether a runway number is positive. The runway is not survival.
              The survival is not solvency. The solvency is not liquidity. A duration at the current
              net burn is not whether cash and near-cash can meet the near-term windows.
            </p>

            <p>
              <Link
                href="/insights/cash-is-not-runway"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Runway
              </Link>{' '}
              sits one step before that. Cash is money received (collected) that can be spent now.
              Runway is how long operations can continue at the current net burn before cash is
              exhausted. The cash is not runway. The runway is not survival. The survival is not
              solvency. The solvency is not liquidity. Money received that can be spent now is not
              whether cash and near-cash meet obligations without forced asset sales or covenant
              breaches, and it is not the structural claim. Cash is not runway is a different
              refusal from this one, and it is a different refusal from runway is not survival.
            </p>

            <p>
              <Link
                href="/insights/arr-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                ARR Is Not Cash
              </Link>{' '}
              sits one step before that. ARR is the annualized value of recurring contracted
              subscription revenue that renews. Cash is money received (collected). The ARR is not
              cash. The cash is not runway. The runway is not survival. The survival is not
              solvency. The solvency is not liquidity. An annualized contract is not near-term cash
              and near-cash, and it is not balance-sheet and claim quality over a structural
              horizon.
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
              is not ARR. The ARR is not cash. The cash is not runway. The runway is not survival.
              The survival is not solvency. The solvency is not liquidity. A period booking is not
              a liquidity window.
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
              ARR is not cash. The cash is not runway. The runway is not survival. The survival is
              not solvency. The solvency is not liquidity. An attributed change is not proof that
              cash and near-cash meet the near-term obligations.
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
              ARR is not cash. The cash is not runway. The runway is not survival. The survival is
              not solvency. The solvency is not liquidity.
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
              is not ARR. The ARR is not cash. The cash is not runway. The runway is not survival.
              The survival is not solvency. The solvency is not liquidity.
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
              not ARR, ARR is not cash, cash is not runway, runway is not survival, survival is not
              solvency, and solvency is not liquidity. A profit figure beside a solvency note still
              does not state whether cash and near-cash can meet the near-term windows.
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
              does not reach that claim, and it does not treat contribution margin as liquidity.
              Cash is not margin. Cash is not runway. Runway is not survival. Survival is not
              solvency. Solvency is not liquidity. A positive unit remainder beside a solvency note
              still does not show liquidity.
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
              A named accountable human can own the result, and liquidity can still be unshown. A
              solvency note does not show it.
            </p>

            <p>
              Solvency has a different object than liquidity. Solvency is whether assets and claims
              structure can cover liabilities and pay debts as they come due over a structural
              horizon — balance-sheet and claim quality, not near-term cash timing alone. Liquidity
              is whether cash and near-cash can meet obligations as they come due in the near term
              (payroll, vendors, debt service windows) without forced asset sales or covenant
              breaches. A sentence that only states solvency does not say the cash and the near-cash
              meet those windows. A sentence that only states liquidity does not say the assets and
              the claims cover the liabilities over the structural horizon. The solvency note can
              hold. The firm can still fail a liquidity window. The liquidity note can hold because
              a named liquidity bridge is already closed. The firm can still be the solvent firm only
              if assets cover claims — and a solvency ratio alone does not prove that bridge, that
              coverage, or the window.
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
              for the outcome after the work runs, not solvency, and not liquidity. An authorized
              state can sit beside a solvency note while liquidity is still unshown. Recommend is
              not authorize. A recommendation that cites the solvency note does not accept the
              consequence, and it does not show liquidity.
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
              essay does not repeat it. Cash that can be spent now is still not runway. Runway is
              still not survival. Survival is still not solvency. Solvency is still not liquidity.
              Margin is not profit. Profit is not value. A shutdown can collect cash, show a margin,
              print a profit, store a measured outcome, carry an impact claim, recognize a sale,
              hold an ARR figure, state a runway, meet obligations through the next decision
              horizon, and state that assets and claims cover liabilities — and the solvency note
              can still fail to state whether cash and near-cash meet the near-term windows without
              forced asset sales or covenant breaches. None of those earlier records turns the
              solvency note into liquidity.
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
              the equipment. A solvency note does not unlock that write. It does not show liquidity.
              It does not measure solvency. It does not measure liquidity. It does not attribute
              cash, risk, or capacity to the decision. Sync does not write the work order. Sync does
              not clear equipment to run. Sync does not mark the case plant-execute. Sync does not
              book revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync does
              not measure cash. Sync does not measure runway. Sync does not measure survival. Sync
              does not measure solvency. Sync does not measure liquidity. Sync does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Solvency answers whether assets and claims structure can cover liabilities and pay
              debts as they come due over a structural horizon. It does not record whether cash and
              near-cash can meet obligations as they come due in the near term without forced asset
              sales or covenant breaches.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Liquidity is cash and near-cash against the near-term windows
            </h2>

            <p>
              Liquidity is not a property of the solvency note. Liquidity is whether cash and
              near-cash can meet obligations as they come due in the near term (payroll, vendors,
              debt service windows) without forced asset sales or covenant breaches. Near-cash, in
              this essay, is the means already available to meet those windows on the same terms as
              cash, without selling assets the claims still require and without breaking a covenant
              the claims still carry. A liquidity window is the near-term period in which those
              obligations come due. A liquidity note that omits the cash, the near-cash, the
              windows, or the refusal of forced asset sales and covenant breaches is a different
              claim from the liquidity this essay names. A solvency note that names only assets,
              claims, liabilities, and a structural horizon is solvency. It is not that liquidity.
              Near-term cash timing alone is not solvency. Balance-sheet and claim quality is not
              the window.
            </p>

            <p>
              This essay states no cash amount, no near-cash amount, no asset value, no liability
              total, no ratio, no burn rate, no runway length, no survival length, no solvency
              length, and no liquidity length. Stating that assets and claims can cover liabilities
              does not show the cash. Stating that a solvency note is positive does not show
              liquidity. Stating a solvency ratio does not show that receivables will not lag, that
              a concentration payment will not slip, that credit lines are not drawn, or that timing
              gaps will not hit before claims structure heals. The near-term question is whether
              cash and near-cash can meet payroll, vendors, and debt service windows without forced
              asset sales or covenant breaches. That question does not state whether the structural
              horizon is covered, and a solvency ratio alone proves neither the window nor the
              bridge.
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
              notes. That check is the measured result. It is not, by itself, solvency, and it is
              not, by itself, liquidity. A recorded outcome without named cash, near-cash, and the
              near-term windows leaves liquidity unshown. A solvency note without those records
              leaves liquidity unshown. A solvency note used as liquidity leaves the window unshown.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit a solvency
              note in place of that outcome, and it does not inherit liquidity in place of that
              outcome. A later shutdown that cites last time as if the solvency note were already
              liquidity is citing balance-sheet and claim quality as a claim about near-term cash
              and near-cash. Sync must not auto-close, auto-authorize, or treat solvency as
              liquidity as Learning credit.
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
              that comes after. Solvency, in this essay, is whether assets and claims can cover
              liabilities over a structural horizon. Liquidity is whether cash and near-cash can
              meet the near-term windows. Neither is a claim that the asset stays known-good, and
              neither is produced by storing achieved. A verified outcome can be not_achieved or
              inconclusive. Those results still close the claim about what was observed. They are
              not liquidity.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              is the same refusal one step earlier in the evidence. Two records that move together
              are not a cause. A liquidity note that moved in the same period as a solvency note is
              not, by that movement, proof that balance-sheet and claim quality is liquidity, and it
              is not proof that the windows were met. The coincidence can inform a recommendation to
              investigate. It is not liquidity, and it is not proof the solvency note showed the
              cash and the near-cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Solvency is not liquidity. Solvency is whether assets and claims structure can cover
              liabilities and pay debts as they come due over a structural horizon — balance-sheet
              and claim quality, not near-term cash timing alone. Liquidity is whether cash and
              near-cash can meet obligations as they come due in the near term (payroll, vendors,
              debt service windows) without forced asset sales or covenant breaches.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A solvent firm can still fail a liquidity window, and an illiquid firm can still be
              solvent
            </h2>

            <p>
              The failure mode is ordinary after a solvency note is on the books. Solvency is
              recorded, and the record is read as liquidity. A solvent firm can still fail a
              liquidity window when receivables lag, a concentration payment slips, credit lines are
              drawn, or timing gaps hit before claims structure heals. Solvent, in this essay, means
              assets and claims structure can cover liabilities and pay debts as they come due over
              the structural horizon. Fail a liquidity window means cash and near-cash cannot meet
              payroll, vendors, or debt service windows without forced asset sales or covenant
              breaches. Receivables lag means amounts already recorded as due have not become cash
              or near-cash inside the window. A concentration payment slips means a payment the
              window depends on does not arrive when the window requires it. Credit lines are drawn
              means the unused line the window was counting as near-cash is no longer available on
              those terms. Timing gaps hit before claims structure heals means the near-term miss
              arrives before the assets and the claims can be realized on the terms the structural
              horizon names. The solvency note does not schedule the receivables. The balance sheet
              does not land the concentration payment. A drawn line is not restored by calling the
              firm solvent. Claims structure that has not healed does not fill the gap. Meeting the
              structural horizon does not answer those questions. The solvency note does not answer
              them. A solvency ratio alone proves none of them.
            </p>

            <p>
              The opposite case is just as ordinary. An illiquid firm can still be solvent on a
              structural horizon if assets cover claims and a named liquidity bridge is already
              closed — none of which a solvency ratio alone proves. Illiquid, in this essay, means
              cash and near-cash cannot, on their own, meet the near-term windows without forced
              asset sales or covenant breaches. Assets cover claims means the structural record
              names assets and a claims structure that can cover the liabilities and pay debts as
              they come due over that horizon. A named liquidity bridge is already closed means a
              named arrangement that supplies the near-term cash or near-cash is already in place,
              with the name and the close recorded, rather than hoped for. The ratio did not close
              the bridge. The ratio did not show that assets cover claims. The ratio did not show
              that the firm can meet the window without forced asset sales or covenant breaches.
              Solvency did not, by itself, make the firm liquid. Liquidity did not, by itself, make
              the firm solvent. Neither case is proved by a solvency note, and neither case is
              proved by a solvency ratio. This is not the survival note. Survival is whether the
              business can keep meeting obligations through the next decision horizon. That
              continuity is a different refusal, already stated in Survival Is Not Solvency. This
              essay states no savings figure, and it does not turn a solvent balance sheet or a
              closed bridge into one.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              already refuses to treat a KPI, a leading indicator, a model score, a green tile, or a
              closed work-order count as the verified operational outcome. A solvency note is a
              structural claim, not that outcome, and not liquidity. A solvency ratio is a proxy for
              the structural question when the assets, the claims, the liabilities, and the horizon
              are not the record. It is not the liquidity window. A proxy is not the outcome. A
              measured outcome is not the impact. An impact claim is not recognized sales. A
              recognized sale is not ARR. ARR is not cash. Cash is not runway. Runway is not
              survival. Survival is not solvency. Solvency is not liquidity.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A liquidity note painted beside that tile is not a stronger
              green. It is a display. Go still required a named human decision. The result after the
              plant move still requires a verified outcome. Solvency still requires assets and
              claims that can cover liabilities over a structural horizon. Liquidity still requires
              cash and near-cash that can meet the near-term windows without forced asset sales or
              covenant breaches. The color supplies none of them.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              keeps a completion label off the check. A completed workflow is a completion label
              under the criteria someone chose. It is not named observation, not solvency, and not
              liquidity.{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps a clearance stamp off a finished claim. A cleared flag is not proof the work is
              finished, and it is not proof that a solvency note is liquidity.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps the proposal off the decision. A recommendation may say investigate because the
              firm is solvent and the liquidity window is unshown, because receivables lag, because
              a concentration payment slips, because credit lines are drawn, because timing gaps hit
              before claims structure heals, or because an illiquid firm is being read as insolvent
              while assets cover claims and a named liquidity bridge is already closed. That
              proposal does not authorize the work, and it does not show liquidity. Recommend is not
              authorize.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling solvency liquidity
              crosses that boundary. Treating a solvent structure as liquidity while receivables lag,
              a concentration payment slips, credit lines are drawn, or timing gaps hit before
              claims structure heals is the same confusion. Treating an illiquid firm as insolvent,
              while assets cover claims and a named liquidity bridge is already closed, is the same
              confusion. A solvency ratio does not repair either miss. Sync refuses false precision.
              Sync refuses when evidence is insufficient. Sync does not measure liquidity. Sync does
              not measure liquidity for the customer. Sync does not measure solvency. Sync does not
              measure solvency for the customer. Sync does not measure survival. Sync does not
              measure survival for the customer. Sync does not measure runway. Sync does not measure
              runway for the customer. Sync does not measure cash. Sync does not measure cash for
              the customer. Sync does not collect cash. Sync does not book revenue. Sync does not
              recognize revenue. Sync does not measure ARR. Sync does not measure ARR for the
              customer.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating solvency as liquidity records balance-sheet and claim quality as a claim
              about near-term cash and near-cash. A solvent firm can still fail a liquidity window
              when receivables lag, a concentration payment slips, credit lines are drawn, or timing
              gaps hit before claims structure heals. An illiquid firm can still be solvent on a
              structural horizon if assets cover claims and a named liquidity bridge is already
              closed — none of which a solvency ratio alone proves.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a solvency note or a liquidity note is still a read
            </h2>

            <p>
              Sync may surface a solvency note or a liquidity note beside Evidence, Verification, and
              the closed outcome. Surfacing is still a read. The screen can show achieved,
              not_achieved, or inconclusive next to the criteria the case holds, next to a solvency
              note someone recorded elsewhere, and next to a note that cash, near-cash, and the
              near-term windows were stated. Showing the note does not write a CMMS work order.
              Showing the note does not clear equipment to run. Showing the note does not treat the
              case as plant execute. Showing the note does not book revenue. Showing the note does
              not recognize revenue. Showing the note does not measure ARR. Showing the note does
              not measure ARR for the customer. Showing the note does not measure cash. Showing the
              note does not measure cash for the customer. Showing the note does not measure runway.
              Showing the note does not measure runway for the customer. Showing the note does not
              measure survival. Showing the note does not measure survival for the customer. Showing
              the note does not measure solvency. Showing the note does not measure solvency for the
              customer. Showing the note does not measure liquidity. Showing the note does not
              measure liquidity for the customer. Showing the note does not collect cash. Showing
              the note does not attribute a change in cash, risk, or capacity. A read of a solvency
              note is still a read. Balance-sheet and claim quality without named cash, near-cash,
              and the near-term windows leaves liquidity unshown.
            </p>

            <p>
              Evidence from the plant beats the solvency note when the note is being used as
              liquidity. If the evidence on the case does not support the named observation, the
              case refuses. If the evidence records a solvency note and does not record the cash,
              the near-cash, and the near-term windows, the case may store the note as solvency and
              must not store the note as liquidity. If the evidence records a solvent firm that
              fails a liquidity window because receivables lag, a concentration payment slips, credit
              lines are drawn, or timing gaps hit before claims structure heals, the case may cite
              that record and must not store the solvency note as liquidity. If the evidence records
              an illiquid firm that remains solvent because assets cover claims and a named
              liquidity bridge is already closed, the case may cite that record and must not treat
              illiquidity as proof the structural horizon failed, and must not treat the ratio as
              proof the bridge closed. The label does not fill the gap, and it does not close it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. A live connector tag pull is not a
              claim of this edition. Simulated or seeded telemetry and assets are practice records.
              A practice record that says solvency is liquidity is not a customer plant release, and
              it is not a shown liquidity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite a solvency note when the source of that note is named, and when the
              citation says it is whether assets and claims structure can cover liabilities and pay
              debts as they come due over a structural horizon — balance-sheet and claim quality,
              not near-term cash timing alone — rather than a measurement Sync performed, and rather
              than liquidity. Evidence may cite a liquidity note when the source is named and the
              cash, the near-cash, and the near-term windows are named: whether those means can meet
              payroll, vendors, and debt service windows without forced asset sales or covenant
              breaches. Those citations are records of statements someone else made. They are not
              records that Sync measured solvency for the customer. They are not records that Sync
              measured liquidity for the customer. They are not records that the solvency note is
              liquidity. A recommendation may say investigate because the structural claim holds and
              the window is unshown, because receivables lag, because a concentration payment slips,
              because credit lines are drawn, because timing gaps hit before claims structure heals,
              or because an illiquid firm is being treated as insolvent while assets cover claims
              and a named liquidity bridge is already closed. The proposal does not show liquidity.
              Recommend is not authorize.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not liquidity. A solvency label does not perform the
              write and does not turn the structural horizon into liquidity. Authorized execution
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
              outcome into solvency, and it does not turn solvency into liquidity. A named human
              decides. A named human remains accountable after the plant move. Liquidity stays
              unshown until the cash, the near-cash, and the near-term windows are a separate
              record. Solvency stays whether assets and claims can cover liabilities over a
              structural horizon even when someone calls the note liquidity. This essay does not
              supply either record as the other. Sync does not attribute a change in cash, risk, or
              capacity. Sync does not book revenue. Sync does not recognize revenue. Sync does not
              measure ARR. Sync does not measure cash. Sync does not measure runway. Sync does not
              measure survival. Sync does not measure solvency. Sync does not measure liquidity.
              Sync does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a solvency note or a liquidity note beside Evidence, Verification, and
              the closed outcome. Surfacing is still a read. Sync refuses false precision. Sync
              refuses when evidence is insufficient. A named human decides. A named human remains
              accountable after the plant move. Solvency stays whether assets and claims structure
              can cover liabilities and pay debts as they come due over a structural horizon —
              balance-sheet and claim quality, not near-term cash timing alone. Liquidity stays
              whether cash and near-cash can meet obligations as they come due in the near term
              (payroll, vendors, debt service windows) without forced asset sales or covenant
              breaches. A solvent structure that still misses the window leaves liquidity unmet. An
              illiquid firm whose assets cover claims, with a named liquidity bridge already closed,
              leaves the solvency question unproved by the ratio and the liquidity question unproved
              by the structural note.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with measured
              notes. It does not keep solvency as liquidity. A later question that cites a solvency
              note as if liquidity were already shown is citing balance-sheet and claim quality. A
              later question that cites a solvent firm while receivables lag, a concentration
              payment slips, credit lines are drawn, or timing gaps hit before claims structure
              heals is citing a note that is not liquidity. A later question that cites illiquidity
              as if the structural horizon had failed, while assets cover claims and a named
              liquidity bridge is already closed, is citing a near-term cash record that did not
              prove the structural claim. A solvency ratio alone proves none of those later
              questions. Sync must not auto-close, auto-authorize, or treat solvency as liquidity as
              Learning credit.
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
              directly. Evidence may hold the solvency note, the liquidity note, or the measured
              result that was shown. Human decision may hold who accepted the consequence. Action
              may hold the intent that decision routed. Verification may hold the named observation.
              Learning may hold achieved, not_achieved, or inconclusive, with measured notes — the
              measured outcome, not liquidity. None of those steps is solvency used as liquidity. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a solvency note as whether cash and near-cash meet the
              near-term windows. Later editions can deepen a chapter. The spine stays in this order.
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
              It states no OEM limit and no operating threshold. It states no cash amount, no
              near-cash amount, no asset value, no liability total, no ratio, no burn rate, no
              runway length, no survival length, no solvency length, and no liquidity length. It
              does not claim that solvency is liquidity, writes a CMMS work order, clears equipment
              to run, books revenue, recognizes revenue, measures ARR, measures ARR for the
              customer, measures cash, measures cash for the customer, measures runway, measures
              runway for the customer, measures survival, measures survival for the customer,
              measures solvency, measures solvency for the customer, measures liquidity, measures
              liquidity for the customer, collects cash, or attributes a change in cash, risk, or
              capacity. It does not claim that Sync executes plant work. It does not claim CMMS
              write-back as a shipped product. It does not claim billing write-back as a shipped
              product. It does not invent a customer, a price, or a return. It does not treat a
              survival note, a runway figure, a cash balance, contribution margin, invoices paid,
              profitable ARR, or a profit figure as the question. Survival is not solvency is a
              different refusal. Runway is not survival is a different refusal. Cash is not runway
              is a different refusal.
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
              describes that journey. Walking those steps is not a claim that solvency is liquidity.
              The verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, billing
              write-back, SMTP invite delivery, or automatic revocation of access on expiry as live.
              It does not describe Sync writing work orders, clearing equipment to run, marking a
              case plant-execute, starting equipment, releasing a hold, controlling the plant,
              booking revenue, recognizing revenue, measuring ARR, measuring cash, measuring runway,
              measuring survival, measuring solvency, measuring liquidity, or collecting cash.
              Simulated or seeded telemetry and assets are practice records. They are not live plant
              results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              keeps a named person on the decision. The solvency note does not accept, reject,
              escalate, or return. The liquidity note does not either. A specific Sync decision, in
              this essay, is a named human decision recorded on a Sync case. Sync did not make it. A
              named human decides. A named human remains accountable after the plant move.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/survival-is-not-solvency"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Survival Is Not Solvency
              </Link>{' '}
              on why obligation continuity through the next decision horizon is not whether assets
              and claims cover liabilities,{' '}
              <Link
                href="/insights/runway-is-not-survival"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Runway Is Not Survival
              </Link>{' '}
              on why a duration at the current net burn is not whether obligations will be met
              through the next decision horizon,{' '}
              <Link
                href="/insights/cash-is-not-runway"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Runway
              </Link>{' '}
              on why money received that can be spent now is not that duration,{' '}
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
              on why a later case inherits the measured result and not a liquidity claim,{' '}
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
              on why a liquidity note that moved with a solvency note is not a cause. A{' '}
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
              the measured result. The solvency note does not record the liquidity.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/liquidity-is-not-flexibility"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Liquidity Is Not Flexibility
              </Link>
              , on why liquidity is still not flexibility. Liquidity is whether cash and near-cash
              can meet obligations as they come due in the near term (payroll, vendors, debt service
              windows) without forced asset sales or covenant breaches. Flexibility is whether the
              firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities
              inside a named decision window without breaking obligations, covenants, or continuity
              — the ability to choose and change course, not merely to pay what is already due. A
              liquid firm can still lack flexibility when the means that meet those windows cannot
              be reallocated without breaking obligations, covenants, or continuity. An inflexible
              firm can still be liquid. A firm that can change course inside a named decision window
              can still fail a liquidity window. A liquidity note alone proves neither.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Solvency is
                whether assets and claims structure can cover liabilities and pay debts as they come
                due over a structural horizon — balance-sheet and claim quality, not near-term cash
                timing alone. Liquidity is whether cash and near-cash can meet obligations as they
                come due in the near term (payroll, vendors, debt service windows) without forced
                asset sales or covenant breaches. A solvent firm can still fail a liquidity window.
                An illiquid firm can still be solvent on a structural horizon if assets cover claims
                and a named liquidity bridge is already closed. A solvency ratio alone proves
                neither. The Reliability Engineer workspace is where a signed-in Decision Case is
                completed. A Reliability Assessment is the bounded review when the question is
                whether the records can support a conclusion. None of those is a claim that Sync
                executes plant work, books revenue, recognizes revenue, measures ARR, measures ARR
                for the customer, measures cash, measures cash for the customer, measures runway,
                measures runway for the customer, measures survival, measures survival for the
                customer, measures solvency, measures solvency for the customer, measures liquidity,
                measures liquidity for the customer, collects cash, attributes cash, risk, or
                capacity, declares a return, that CMMS write-back is live, that billing write-back
                is live, or that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="solvency-is-not-liquidity" />
        </motion.article>
      </div>
    </main>
  );
}
