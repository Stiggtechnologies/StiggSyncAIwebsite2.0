'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('liquidity-is-not-flexibility');

export default function LiquidityIsNotFlexibilityPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Liquidity Is Not Flexibility</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Liquidity is whether cash and near-cash can meet obligations as they come due in the near term (payroll, vendors, debt service windows) without forced asset sales or covenant breaches. Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window without breaking obligations, covenants, or continuity — the ability to choose and change course, not merely to pay what is already due. Liquidity is not flexibility. A liquid
              firm can still lack flexibility. An inflexible firm can still be liquid. A firm that
              can change course inside a named decision window can still fail a liquidity window. A
              liquidity note alone proves neither.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Liquidity is not flexibility. Liquidity is whether cash and near-cash can meet
              obligations as they come due in the near term (payroll, vendors, debt service windows)
              without forced asset sales or covenant breaches. Flexibility is whether the firm can
              reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named
              decision window without breaking obligations, covenants, or continuity — the ability
              to choose and change course, not merely to pay what is already due. A liquid firm can
              still lack flexibility when the cash and near-cash that meet payroll, vendors, and
              debt service are already committed to those obligations, so a reallocation inside the
              named decision window would break obligations, covenants, or continuity. An inflexible
              firm can still be liquid when those windows are met and the firm still cannot change
              course. A firm that can reallocate inside the named decision window can still fail a
              liquidity window, because the ability to choose is not payment of what is already due.
              None of that is proved by a liquidity note alone. Treating liquidity as flexibility
              records the ability to pay what is already due as a claim about choosing and changing
              course that nobody has shown, under the honesty and verification boundary. Sync may
              surface a liquidity note or a flexibility note beside Evidence, Verification, and the
              closed outcome. Surfacing is still a read. A firm that can meet the near-term windows
              can still be unable to reallocate. A firm that can reallocate can still miss what is
              already due. Direct plant execute stays off. CMMS write-back is not a live product
              path. Billing write-back is not a live product path. Sync does not book revenue. Sync
              does not recognize revenue. Sync does not measure ARR. Sync does not measure ARR for
              the customer. Sync does not measure cash. Sync does not measure cash for the customer.
              Sync does not measure runway. Sync does not measure runway for the customer. Sync does
              not measure survival. Sync does not measure survival for the customer. Sync does not
              measure solvency. Sync does not measure solvency for the customer. Sync does not
              measure liquidity. Sync does not measure liquidity for the customer. Sync does not
              measure flexibility. Sync does not measure flexibility for the customer. Sync does not
              collect cash. Sync does not attribute a change in cash, risk, or capacity. Sync does
              not execute plant work.
            </p>

            <p>
              A liquidity note looks like the close of the flexibility question. The near-term
              windows are named. Someone reads that cash and near-cash can meet payroll, vendors,
              and debt service windows without forced asset sales or covenant breaches and treats
              the firm as able to reallocate capital, capacity, staffing, vendor mix, or plant
              priorities inside a named decision window without breaking obligations, covenants, or
              continuity. The note did none of that by itself. It answered whether cash and
              near-cash can meet what is already due, when the note is that liquidity and those
              records are named. It did not state whether the firm can choose and change course. It
              did not name the decision window. It did not state that capital can be reallocated
              inside that window. It did not state that capacity, staffing, vendor mix, or plant
              priorities can move. It did not state that the move leaves obligations, covenants, and
              continuity intact. Paying what is already due is not that ability.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is
              not margin. Margin is not profit. Profit is not value. Value is not outcome. Outcome
              is not impact. Impact is not revenue. Revenue is not ARR. ARR is not cash. Cash is not
              runway. Runway is not survival. Survival is not solvency. Solvency is not liquidity.
              Liquidity is not flexibility. Each word can be true in its own place. None of the
              earlier words fills the last one. A closed work order, cash collected, a unit
              remainder, a profit figure, a measured outcome, an attributed change, a recognized
              sale, an annualized contract, a spendable balance, a duration at the current net burn,
              obligation continuity through the next decision horizon, assets and claims that can
              cover liabilities over a structural horizon, and cash and near-cash that meet the
              near-term windows are activity, money, accounting, a recorded result, a claim about
              that result, a period booking, a recurring contract, a balance, a calculated duration,
              a near-term continuity claim, a structural claim, and a near-term cash claim.
              Liquidity is whether cash and near-cash can meet obligations as they come due in the
              near term (payroll, vendors, debt service windows) without forced asset sales or
              covenant breaches. Flexibility is whether the firm can reallocate capital, capacity,
              staffing, vendor mix, or plant priorities inside a named decision window without
              breaking obligations, covenants, or continuity — the ability to choose and change
              course, not merely to pay what is already due. A liquidity note is not that
              flexibility claim.
            </p>

            <p>
              This essay does not collapse flexibility into liquidity, solvency, survival, runway,
              cash, ARR, margin, or profit.{' '}
              <Link
                href="/insights/solvency-is-not-liquidity"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Solvency Is Not Liquidity
              </Link>{' '}
              already refuses to treat solvency as liquidity. Solvency is whether assets and claims structure can cover liabilities and pay debts as they come due over a structural
              horizon — balance-sheet and claim quality, not near-term cash timing alone. Liquidity,
              in that essay, is whether cash and near-cash can meet obligations as they come due in
              the near term (payroll, vendors, debt service windows) without forced asset sales or
              covenant breaches. That refusal stops at the near-term cash window. It does not ask
              whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant
              priorities inside a named decision window without breaking obligations, covenants, or
              continuity. Solvency is not liquidity is a different refusal. Liquidity is not
              flexibility is the next refusal. A met liquidity window, a solvent structure, a
              survived horizon, a runway number, a spendable cash balance, an annualized contract, a
              unit remainder, and a profit figure can all sit beside a liquidity note and still
              leave flexibility unshown.
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
              . This essay is why liquidity cannot be read as flexibility. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold a liquidity note, a flexibility note, or a note that someone else
              stated either record, when the source of that note is named. The{' '}
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
              notes. None of those steps shows flexibility. None of them treats liquidity as
              flexibility. None of them measures liquidity for the customer. None of them measures
              flexibility for the customer. None of them attributes cash, risk, or capacity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Paying what is already due is not room to change course
            </h2>

            <p>
              <Link
                href="/insights/solvency-is-not-liquidity"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Solvency Is Not Liquidity
              </Link>{' '}
              sits one step earlier. Solvency is whether assets and claims structure can cover
              liabilities and pay debts as they come due over a structural horizon — balance-sheet
              and claim quality, not near-term cash timing alone. Liquidity is whether cash and
              near-cash can meet obligations as they come due in the near term (payroll, vendors,
              debt service windows) without forced asset sales or covenant breaches. A solvent firm
              can still fail a liquidity window. An illiquid firm can still be solvent on a
              structural horizon. This essay starts after that split has been kept. Solvency is not
              liquidity. The next refusal is that liquidity is not flexibility. The near-term
              windows can be met, and the firm can still lack the ability to reallocate capital,
              capacity, staffing, vendor mix, or plant priorities inside a named decision window
              without breaking obligations, covenants, or continuity. A firm that can change course
              can still fail the liquidity window. Solvency is not liquidity is a different refusal.
            </p>

            <p>
              <Link
                href="/insights/survival-is-not-solvency"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Survival Is Not Solvency
              </Link>{' '}
              sits one step before that. Survival is whether the business can keep meeting obligations (payroll, vendors, debt service, plant continuity) through the next
              decision horizon. Solvency is whether assets and claims structure can cover
              liabilities and pay debts as they come due over a structural horizon. The survival is
              not solvency. The solvency is not liquidity. The liquidity is not flexibility.
              Obligation continuity through the next decision horizon is not whether the firm can
              choose and change course inside a named decision window. That horizon is a different
              object from the named decision window this essay uses for flexibility, and it is a
              different object from the liquidity window.
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
              The survival is not solvency. The solvency is not liquidity. The liquidity is not
              flexibility. A duration at the current net burn is not room to reallocate.
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
              solvency. The solvency is not liquidity. The liquidity is not flexibility. Money
              received that can be spent now is not the ability to choose and change course, and it
              is not, by itself, proof the near-term windows are met without forced asset sales or
              covenant breaches. Cash is not runway is a different refusal from this one.
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
              solvency. The solvency is not liquidity. The liquidity is not flexibility. An
              annualized contract is not flexibility, and it is not the near-term cash window.
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
              The survival is not solvency. The solvency is not liquidity. The liquidity is not
              flexibility. A period booking is not room to change course.
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
              not solvency. The solvency is not liquidity. The liquidity is not flexibility. An
              attributed change is not proof the firm can reallocate inside a named decision window
              without breaking obligations, covenants, or continuity.
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
              outcome is not the impact. Outcome is not impact. The impact is not the revenue. The revenue is not ARR. The
              ARR is not cash. The cash is not runway. The runway is not survival. The survival is
              not solvency. The solvency is not liquidity. The liquidity is not flexibility.
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
              The survival is not solvency. The solvency is not liquidity. The liquidity is not
              flexibility.
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
              solvency, solvency is not liquidity, and liquidity is not flexibility. A profit figure
              beside a liquidity note still does not state whether the firm can change course.
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
              does not reach that claim, and it does not treat contribution margin as flexibility.
              Cash is not margin. Cash is not runway. Runway is not survival. Survival is not
              solvency. Solvency is not liquidity. Liquidity is not flexibility. A positive unit
              remainder beside a liquidity note still does not show flexibility.
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
              A named accountable human can own the result, and flexibility can still be unshown. A
              liquidity note does not show it.
            </p>

            <p>
              Liquidity has a different object than flexibility. Liquidity is whether cash and
              near-cash can meet obligations as they come due in the near term (payroll, vendors,
              debt service windows) without forced asset sales or covenant breaches. Flexibility is
              whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant
              priorities inside a named decision window without breaking obligations, covenants, or
              continuity — the ability to choose and change course, not merely to pay what is
              already due. A sentence that only states liquidity does not say the firm can
              reallocate. A sentence that only states flexibility does not say the near-term windows
              are met. The liquidity note can hold. The firm can still lack flexibility. The
              flexibility note can hold because a named reallocation inside the named decision
              window leaves obligations, covenants, and continuity intact. The firm can still fail
              the liquidity window. A liquidity note alone proves neither the window as flexibility
              nor the reallocation as liquidity.
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
              for the outcome after the work runs, not liquidity, and not flexibility. An authorized
              state can sit beside a liquidity note while flexibility is still unshown. Recommend is
              not authorize. A recommendation that cites the liquidity note does not accept the
              consequence, and it does not show flexibility.
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
              Liquidity is still not flexibility. Margin is not profit. Profit is not value. A
              shutdown can collect cash, show a margin, print a profit, store a measured outcome,
              carry an impact claim, recognize a sale, hold an ARR figure, state a runway, meet
              obligations through the next decision horizon, state that assets and claims cover
              liabilities, and meet the near-term windows — and the liquidity note can still fail to
              state whether the firm can reallocate inside a named decision window without breaking
              obligations, covenants, or continuity. None of those earlier records turns the
              liquidity note into flexibility.
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
              the equipment. A liquidity note does not unlock that write. It does not show
              flexibility. It does not measure liquidity. It does not measure flexibility. It does
              not attribute cash, risk, or capacity to the decision. Sync does not write the work
              order. Sync does not clear equipment to run. Sync does not mark the case plant-execute.
              Sync does not book revenue. Sync does not recognize revenue. Sync does not measure
              ARR. Sync does not measure cash. Sync does not measure runway. Sync does not measure
              survival. Sync does not measure solvency. Sync does not measure liquidity. Sync does
              not measure flexibility. Sync does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Liquidity answers whether cash and near-cash can meet obligations as they come due in
              the near term without forced asset sales or covenant breaches. It does not record
              whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant
              priorities inside a named decision window without breaking obligations, covenants, or
              continuity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Flexibility is the ability to choose and change course
            </h2>

            <p>
              Flexibility is not a property of the liquidity note. Flexibility is whether the firm
              can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a
              named decision window without breaking obligations, covenants, or continuity — the
              ability to choose and change course, not merely to pay what is already due. A named
              decision window, in this essay, is the period inside which that choice would have to
              be made. It is not the liquidity window, which is the near-term period in which
              payroll, vendors, and debt service come due. It is not the next decision horizon
              survival names, and it is not the structural horizon solvency names. Capital,
              capacity, staffing, vendor mix, and plant priorities are the objects that would have
              to move. Without breaking obligations, covenants, or continuity means the move does
              not miss what is already due, does not breach a covenant the claims still carry, and
              does not interrupt the continuity the firm still has to keep. A flexibility note that
              omits the named decision window, the reallocation, or that refusal is a different
              claim from the flexibility this essay names. A liquidity note that names only cash,
              near-cash, and the near-term windows is liquidity. It is not that flexibility. Paying
              what is already due is not the ability to change course.
            </p>

            <p>
              This essay states no cash amount, no near-cash amount, no asset value, no liability
              total, no ratio, no burn rate, no runway length, no survival length, no solvency
              length, no liquidity length, and no flexibility length. Stating that the near-term
              windows are met does not show the reallocation. Stating that a liquidity note is
              positive does not show flexibility. Stating that payroll, vendors, and debt service
              can be paid does not show that capital, capacity, staffing, vendor mix, or plant
              priorities can move inside a named decision window without breaking obligations,
              covenants, or continuity. The flexibility question is whether the firm can choose and
              change course on those terms. That question does not state whether the liquidity
              window is met, and a liquidity note alone proves neither the reallocation nor the
              windows as the other claim.
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
              notes. That check is the measured result. It is not, by itself, liquidity, and it is
              not, by itself, flexibility. A recorded outcome without a named decision window and a
              named reallocation that leaves obligations, covenants, and continuity intact leaves
              flexibility unshown. A liquidity note without those records leaves flexibility
              unshown. A liquidity note used as flexibility leaves the ability to change course
              unshown.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit a liquidity
              note in place of that outcome, and it does not inherit flexibility in place of that
              outcome. A later shutdown that cites last time as if the liquidity note were already
              flexibility is citing the ability to pay what is already due as a claim about choosing
              and changing course. Sync must not auto-close, auto-authorize, or treat liquidity as
              flexibility as Learning credit.
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
              that comes after. Liquidity, in this essay, is whether cash and near-cash can meet the
              near-term windows. Flexibility is whether the firm can reallocate inside a named
              decision window without breaking obligations, covenants, or continuity. Neither is a
              claim that the asset stays known-good, and neither is produced by storing achieved. A
              verified outcome can be not_achieved or inconclusive. Those results still close the
              claim about what was observed. They are not flexibility.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              is the same refusal one step earlier in the evidence. Two records that move together
              are not a cause. A flexibility note that moved in the same period as a liquidity note
              is not, by that movement, proof that paying what is already due is flexibility, and it
              is not proof that the firm could change course. The coincidence can inform a
              recommendation to investigate. It is not flexibility, and it is not proof the
              liquidity note showed the reallocation.
            </p>

            <p className="text-xl font-semibold text-white">
              Liquidity is not flexibility. Liquidity is whether cash and near-cash can meet
              obligations as they come due in the near term (payroll, vendors, debt service windows)
              without forced asset sales or covenant breaches. Flexibility is whether the firm can
              reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named
              decision window without breaking obligations, covenants, or continuity — the ability
              to choose and change course, not merely to pay what is already due.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A liquid firm can still lack flexibility, and an inflexible firm can still be liquid
            </h2>

            <p>
              The failure mode is ordinary after a liquidity note is on the books. Liquidity is
              recorded, and the record is read as flexibility. A liquid firm can still lack
              flexibility when the cash and near-cash that meet payroll, vendors, and debt service
              windows are already committed to those obligations, so reallocating capital, capacity,
              staffing, vendor mix, or plant priorities inside the named decision window would break
              obligations, covenants, or continuity. Liquid, in this essay, means cash and near-cash
              can meet obligations as they come due in the near term without forced asset sales or
              covenant breaches. Lack flexibility means the firm cannot reallocate those objects
              inside the named decision window without breaking obligations, covenants, or
              continuity. Already committed means the means that meet what is already due are not
              spare means for a different course. The liquidity note does not free capital. Meeting
              payroll does not free capacity, staffing, vendor mix, or plant priorities. Paying
              vendors does not name a decision window. Meeting debt service does not show that a
              move leaves continuity intact. The ability to pay what is already due does not answer
              those questions. The liquidity note does not answer them. A liquidity note alone
              proves none of them.
            </p>

            <p>
              The opposite case is just as ordinary. An inflexible firm can still be liquid.
              Inflexible, in this essay, means the firm cannot reallocate capital, capacity,
              staffing, vendor mix, or plant priorities inside a named decision window without
              breaking obligations, covenants, or continuity. Liquid still means the near-term
              windows can be met without forced asset sales or covenant breaches. The firm can pay
              what is already due and still be unable to choose a different course. The other
              direction holds as well. A firm that can reallocate inside the named decision window
              without breaking obligations, covenants, or continuity can still fail a liquidity
              window, because flexibility does not pay what is already due. The reallocation did not
              meet payroll, vendors, or debt service. The named decision window did not close the
              liquidity window. Liquidity did not, by itself, make the firm flexible. Flexibility
              did not, by itself, make the firm liquid. Neither case is proved by a liquidity note.
              This is not the solvency note. Solvency is whether assets and claims structure can
              cover liabilities over a structural horizon. That structural claim is a different
              refusal, already stated in Solvency Is Not Liquidity. This essay states no savings
              figure, and it does not turn a met liquidity window or a named reallocation into one.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              already refuses to treat a KPI, a leading indicator, a model score, a green tile, or a
              closed work-order count as the verified operational outcome. A liquidity note is a
              near-term cash claim, not that outcome, and not flexibility. A note that only says the
              windows were met is a proxy for flexibility when the named decision window and the
              reallocation are not the record. It is not the ability to change course. A proxy is
              not the outcome. A measured outcome is not the impact. An impact claim is not
              recognized sales. A recognized sale is not ARR. ARR is not cash. Cash is not runway.
              Runway is not survival. Survival is not solvency. Solvency is not liquidity. Liquidity
              is not flexibility.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A flexibility note painted beside that tile is not a stronger
              green. It is a display. Go still required a named human decision. The result after the
              plant move still requires a verified outcome. Liquidity still requires cash and
              near-cash that can meet the near-term windows without forced asset sales or covenant
              breaches. Flexibility still requires that the firm can reallocate inside a named
              decision window without breaking obligations, covenants, or continuity. The color
              supplies none of them.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              keeps a completion label off the check. A completed workflow is a completion label
              under the criteria someone chose. It is not named observation, not liquidity, and not
              flexibility.{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps a clearance stamp off a finished claim. A cleared flag is not proof the work is
              finished, and it is not proof that a liquidity note is flexibility.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps the proposal off the decision. A recommendation may say investigate because the
              firm is liquid and flexibility is unshown, because the means that meet the windows are
              already committed, because a reallocation would break obligations, covenants, or
              continuity, or because a firm that can change course is being read as liquid while the
              liquidity window is unshown. That proposal does not authorize the work, and it does
              not show flexibility. Recommend is not authorize.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling liquidity flexibility
              crosses that boundary. Treating a met liquidity window as flexibility while the firm
              cannot reallocate inside the named decision window without breaking obligations,
              covenants, or continuity is the same confusion. Treating an inflexible firm as
              illiquid, while cash and near-cash still meet the near-term windows, is the same
              confusion. Treating a firm that can change course as liquid, while what is already due
              is unmet, is the same confusion. A liquidity note does not repair any of those misses.
              Sync refuses false precision. Sync refuses when evidence is insufficient. Sync does
              not measure flexibility. Sync does not measure flexibility for the customer. Sync does
              not measure liquidity. Sync does not measure liquidity for the customer. Sync does not
              measure solvency. Sync does not measure solvency for the customer. Sync does not
              measure survival. Sync does not measure survival for the customer. Sync does not
              measure runway. Sync does not measure runway for the customer. Sync does not measure
              cash. Sync does not measure cash for the customer. Sync does not collect cash. Sync
              does not book revenue. Sync does not recognize revenue. Sync does not measure ARR.
              Sync does not measure ARR for the customer.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating liquidity as flexibility records the ability to pay what is already due as a
              claim about choosing and changing course. A liquid firm can still lack flexibility
              when meeting the near-term windows leaves no room to reallocate without breaking
              obligations, covenants, or continuity. An inflexible firm can still be liquid. A firm
              that can change course inside a named decision window can still fail a liquidity
              window. A liquidity note alone proves neither.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a liquidity note or a flexibility note is still a read
            </h2>

            <p>
              Sync may surface a liquidity note or a flexibility note beside Evidence, Verification,
              and the closed outcome. Surfacing is still a read. The screen can show achieved,
              not_achieved, or inconclusive next to the criteria the case holds, next to a liquidity
              note someone recorded elsewhere, and next to a note that a named decision window and a
              reallocation were stated. Showing the note does not write a CMMS work order. Showing
              the note does not clear equipment to run. Showing the note does not treat the case as
              plant execute. Showing the note does not book revenue. Showing the note does not
              recognize revenue. Showing the note does not measure ARR. Showing the note does not
              measure ARR for the customer. Showing the note does not measure cash. Showing the note
              does not measure cash for the customer. Showing the note does not measure runway.
              Showing the note does not measure runway for the customer. Showing the note does not
              measure survival. Showing the note does not measure survival for the customer. Showing
              the note does not measure solvency. Showing the note does not measure solvency for the
              customer. Showing the note does not measure liquidity. Showing the note does not
              measure liquidity for the customer. Showing the note does not measure flexibility.
              Showing the note does not measure flexibility for the customer. Showing the note does
              not collect cash. Showing the note does not attribute a change in cash, risk, or
              capacity. A read of a liquidity note is still a read. Cash and near-cash that meet the
              near-term windows, without a named decision window and a reallocation that leaves
              obligations, covenants, and continuity intact, leave flexibility unshown.
            </p>

            <p>
              Evidence from the plant beats the liquidity note when the note is being used as
              flexibility. If the evidence on the case does not support the named observation, the
              case refuses. If the evidence records a liquidity note and does not record the named
              decision window and the reallocation, the case may store the note as liquidity and
              must not store the note as flexibility. If the evidence records a liquid firm that
              lacks flexibility because the means that meet the windows are already committed, or
              because a reallocation would break obligations, covenants, or continuity, the case may
              cite that record and must not store the liquidity note as flexibility. If the evidence
              records an inflexible firm that remains liquid because cash and near-cash still meet
              the near-term windows, the case may cite that record and must not treat inflexibility
              as proof the liquidity window failed. If the evidence records a firm that can change
              course while the liquidity window is unmet, the case may cite that record and must not
              treat flexibility as proof what is already due was paid. The label does not fill the
              gap, and it does not close it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. A live connector tag pull is not a
              claim of this edition. Simulated or seeded telemetry and assets are practice records.
              A practice record that says liquidity is flexibility is not a customer plant release,
              and it is not a shown flexibility.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite a liquidity note when the source of that note is named, and when the
              citation says it is whether cash and near-cash can meet obligations as they come due
              in the near term (payroll, vendors, debt service windows) without forced asset sales
              or covenant breaches — rather than a measurement Sync performed, and rather than
              flexibility. Evidence may cite a flexibility note when the source is named and the
              named decision window is named: whether the firm can reallocate capital, capacity,
              staffing, vendor mix, or plant priorities inside that window without breaking
              obligations, covenants, or continuity. Those citations are records of statements
              someone else made. They are not records that Sync measured liquidity for the customer.
              They are not records that Sync measured flexibility for the customer. They are not
              records that the liquidity note is flexibility. A recommendation may say investigate
              because the windows are met and the ability to change course is unshown, because the
              means are already committed, because a reallocation would break obligations,
              covenants, or continuity, or because a firm that can change course is being treated as
              liquid while what is already due is unmet. The proposal does not show flexibility.
              Recommend is not authorize.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not flexibility. A liquidity label does not perform the
              write and does not turn the near-term windows into flexibility. Authorized execution
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
              outcome into liquidity, and it does not turn liquidity into flexibility. A named human
              decides. A named human remains accountable after the plant move. Flexibility stays
              unshown until the named decision window and the reallocation are a separate record.
              Liquidity stays whether cash and near-cash can meet the near-term windows even when
              someone calls the note flexibility. This essay does not supply either record as the
              other. Sync does not attribute a change in cash, risk, or capacity. Sync does not book
              revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync does not
              measure cash. Sync does not measure runway. Sync does not measure survival. Sync does
              not measure solvency. Sync does not measure liquidity. Sync does not measure
              flexibility. Sync does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a liquidity note or a flexibility note beside Evidence, Verification,
              and the closed outcome. Surfacing is still a read. Sync refuses false precision. Sync
              refuses when evidence is insufficient. A named human decides. A named human remains
              accountable after the plant move. Liquidity stays whether cash and near-cash can meet
              obligations as they come due in the near term (payroll, vendors, debt service windows)
              without forced asset sales or covenant breaches. Flexibility stays whether the firm
              can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a
              named decision window without breaking obligations, covenants, or continuity — the
              ability to choose and change course, not merely to pay what is already due. A liquid
              firm that still cannot change course leaves flexibility unmet. A firm that can change
              course, while the liquidity window is unmet, leaves the liquidity question unproved by
              the flexibility note and the flexibility question unproved by the liquidity note.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with measured
              notes. It does not keep liquidity as flexibility. A later question that cites a
              liquidity note as if flexibility were already shown is citing the ability to pay what
              is already due. A later question that cites a liquid firm while a reallocation would
              break obligations, covenants, or continuity is citing a note that is not flexibility.
              A later question that cites inflexibility as if the liquidity window had failed, while
              cash and near-cash still meet those windows, is citing a course-of-action record that
              did not prove the near-term cash claim. A later question that cites flexibility as if
              what is already due had been paid is citing a reallocation that did not meet the
              windows. A liquidity note alone proves none of those later questions. Sync must not
              auto-close, auto-authorize, or treat liquidity as flexibility as Learning credit.
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
              directly. Evidence may hold the liquidity note, the flexibility note, or the measured
              result that was shown. Human decision may hold who accepted the consequence. Action
              may hold the intent that decision routed. Verification may hold the named observation.
              Learning may hold achieved, not_achieved, or inconclusive, with measured notes — the
              measured outcome, not flexibility. None of those steps is liquidity used as
              flexibility. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a liquidity note as whether the firm can choose and
              change course. Later editions can deepen a chapter. The spine stays in this order.
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
              runway length, no survival length, no solvency length, no liquidity length, and no
              flexibility length. It does not claim that liquidity is flexibility, writes a CMMS
              work order, clears equipment to run, books revenue, recognizes revenue, measures ARR,
              measures ARR for the customer, measures cash, measures cash for the customer, measures
              runway, measures runway for the customer, measures survival, measures survival for the
              customer, measures solvency, measures solvency for the customer, measures liquidity,
              measures liquidity for the customer, measures flexibility, measures flexibility for
              the customer, collects cash, or attributes a change in cash, risk, or capacity. It
              does not claim that Sync executes plant work. It does not claim CMMS write-back as a
              shipped product. It does not claim billing write-back as a shipped product. It does not invent a customer, a price, or a return. It does not treat a liquidity note, a
              solvency note, a survival note, a runway figure, a cash balance, contribution margin,
              invoices paid, profitable ARR, or a profit figure as the question. Solvency is not
              liquidity is a different refusal. Survival is not solvency is a different refusal.
              Runway is not survival is a different refusal. Cash is not runway is a different
              refusal.
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
              describes that journey. Walking those steps is not a claim that liquidity is
              flexibility. The verification step is where named observation against named criteria
              is stored as achieved, not_achieved, or inconclusive, with measured notes. This
              edition does not describe plant execute, a live connector tag pull, CMMS write-back,
              billing write-back, SMTP invite delivery, or automatic revocation of access on expiry
              as live. It does not describe Sync writing work orders, clearing equipment to run,
              marking a case plant-execute, starting equipment, releasing a hold, controlling the
              plant, booking revenue, recognizing revenue, measuring ARR, measuring cash, measuring
              runway, measuring survival, measuring solvency, measuring liquidity, measuring
              flexibility, or collecting cash. Simulated or seeded telemetry and assets are practice
              records. They are not live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              keeps a named person on the decision. The liquidity note does not accept, reject,
              escalate, or return. The flexibility note does not either. A specific Sync decision,
              in this essay, is a named human decision recorded on a Sync case. Sync did not make
              it. A named human decides. A named human remains accountable after the plant move.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/solvency-is-not-liquidity"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Solvency Is Not Liquidity
              </Link>{' '}
              on why balance-sheet and claim quality over a structural horizon is not whether cash
              and near-cash meet the near-term windows,{' '}
              <Link
                href="/insights/survival-is-not-solvency"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Survival Is Not Solvency
              </Link>{' '}
              on why obligation continuity through the next decision horizon is not that structural
              claim,{' '}
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
              on why a later case inherits the measured result and not a flexibility claim,{' '}
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
              on why a flexibility note that moved with a liquidity note is not a cause. A{' '}
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
              the measured result. The liquidity note does not record the flexibility.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Liquidity is
                whether cash and near-cash can meet obligations as they come due in the near term
                (payroll, vendors, debt service windows) without forced asset sales or covenant
                breaches. Flexibility is whether the firm can reallocate capital, capacity,
                staffing, vendor mix, or plant priorities inside a named decision window without
                breaking obligations, covenants, or continuity — the ability to choose and change
                course, not merely to pay what is already due. A liquid firm can still lack
                flexibility. An inflexible firm can still be liquid. A firm that can change course
                can still fail a liquidity window. A liquidity note alone proves neither. The
                Reliability Engineer workspace is where a signed-in Decision Case is completed. A
                Reliability Assessment is the bounded review when the question is whether the
                records can support a conclusion. None of those is a claim that Sync executes plant
                work, books revenue, recognizes revenue, measures ARR, measures ARR for the
                customer, measures cash, measures cash for the customer, measures runway, measures
                runway for the customer, measures survival, measures survival for the customer,
                measures solvency, measures solvency for the customer, measures liquidity, measures
                liquidity for the customer, measures flexibility, measures flexibility for the
                customer, collects cash, attributes cash, risk, or capacity, declares a return, that
                CMMS write-back is live, that billing write-back is live, or that self-guided
                onboarding is a live product path.
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
          <InsightNextSteps slug="liquidity-is-not-flexibility" />
        </motion.article>
      </div>
    </main>
  );
}
