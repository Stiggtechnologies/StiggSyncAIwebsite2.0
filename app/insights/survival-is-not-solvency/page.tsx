'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('survival-is-not-solvency');

export default function SurvivalIsNotSolvencyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Survival Is Not Solvency</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Survival is whether the business can keep meeting obligations (payroll, vendors, debt
              service, plant continuity) through the next decision horizon. Solvency is whether
              assets and claims structure can cover liabilities and pay debts as they come due over
              a structural horizon — balance-sheet and claim quality, not just near-term obligation
              continuity. A firm can survive a horizon and still be insolvent. A solvent firm can
              still fail survival.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Survival is not solvency. Survival is whether the business can keep meeting obligations
              (payroll, vendors, debt service, plant continuity) through the next decision horizon.
              Solvency is whether assets and claims structure can cover liabilities and pay debts as
              they come due over a structural horizon — balance-sheet and claim quality, not just
              near-term obligation continuity. A firm can survive a horizon and still be insolvent,
              or headed there. A solvent firm can still fail survival in a short horizon when
              liquidity timing fails or a concentration shock hits. Treating survival as solvency
              records near-term obligation continuity as a claim about assets, claims, and debts as
              they come due that nobody has shown, under the honesty and verification boundary. Sync
              may surface a survival note or a solvency note beside Evidence, Verification, and the
              closed outcome. Surfacing is still a read. A firm that meets the next decision horizon
              can still lack the assets and claims to cover liabilities over the structural horizon.
              A firm whose assets and claims can cover those liabilities can still miss payroll,
              vendors, debt service, or plant continuity inside that short horizon. Direct plant execute stays off. CMMS write-back is not a live product path. Billing write-back is not a live product path. Sync does not book revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync does not measure ARR for the customer. Sync does not measure cash. Sync does not measure cash for the customer. Sync does not measure runway. Sync does not measure runway for the customer. Sync does not measure survival. Sync does not measure survival for the customer. Sync does not measure solvency. Sync does not measure solvency for the customer. Sync does not collect cash. Sync does not attribute a change in cash, risk, or capacity. Sync does not execute plant work.
            </p>

            <p>
              A survival note looks like the close of the solvency question. The horizon is named.
              Someone reads that payroll, vendors, debt service, and plant continuity can be met
              through the next decision horizon and treats the business as able to cover liabilities
              and pay debts as they come due. The note did none of that by itself. It answered
              whether obligations can be met through the next decision horizon, when the note is
              that survival and the obligations are named. It did not state whether assets and the
              claims structure can cover liabilities over a structural horizon. It did not state the
              ranking and terms of those claims. It did not state that debts which fall due after
              the decision horizon can be paid. It did not state that the assets can be realized on
              the terms the claims require.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is not margin. Margin is not profit. Profit is not value. Value is not outcome. Outcome is not impact. Impact is not revenue. Revenue is not ARR. ARR is not cash. Cash is not runway. Runway is not survival. Survival is not solvency. Each word can be true in its
              own place. None of the earlier words fills the last one. A closed work order, cash
              collected, a unit remainder, a profit figure, a measured outcome, an attributed change,
              a recognized sale, an annualized contract, a spendable balance, a duration at the
              current net burn, and obligation continuity through the next decision horizon are
              activity, money, accounting, a recorded result, a claim about that result, a period
              booking, a recurring contract, a balance, a calculated duration, and a near-term
              continuity claim. Survival is whether the business can keep meeting obligations through
              the next decision horizon. Solvency is whether assets and claims structure can cover
              liabilities and pay debts as they come due over a structural horizon. A survival note
              is not that claim.
            </p>

            <p>
              This essay does not collapse solvency into runway, cash, ARR, margin, or profit.{' '}
              <Link
                href="/insights/runway-is-not-survival"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Runway Is Not Survival
              </Link>{' '}
              already refuses to treat a duration as survival. Runway is how long operations can
              continue at the current net burn before cash is exhausted: cash divided by burn rate,
              with explicit assumptions. That refusal stops at the next decision horizon. It does
              not ask whether the balance sheet and the claims can carry debts as they come due
              after that horizon. Cash that can be spent now is still not runway. Runway is still
              not survival. Survival is still not solvency. A positive runway number, a spendable
              cash balance, an annualized contract, a unit remainder, and a profit figure can all
              sit beside a survival note and still leave solvency unshown.
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
              . This essay is why survival cannot be read as solvency. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold a survival note, a solvency note, or a note that someone else stated
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
              notes. None of those steps shows solvency. None of them treats survival as solvency.
              None of them measures survival for the customer. None of them measures solvency for
              the customer. None of them attributes cash, risk, or capacity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Meeting obligations through the next decision horizon is not solvency
            </h2>

            <p>
              <Link
                href="/insights/runway-is-not-survival"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Runway Is Not Survival
              </Link>{' '}
              sits one step earlier. Runway is how long operations can continue at the current net burn before cash is exhausted: cash divided by burn rate, with explicit assumptions.
              Survival is whether the business can keep meeting obligations (payroll, vendors, debt
              service, plant continuity) through the next decision horizon — not just whether a
              runway number is positive. A long runway can still miss survival. A short runway can
              still survive a decision horizon. This essay starts after that split has been kept.
              Runway is not survival. The next refusal is that survival is not solvency. Obligation
              continuity through the next decision horizon can hold, and the firm can still be
              insolvent, or headed there, because assets and claims cannot cover liabilities over
              the structural horizon. A solvent firm can still fail that short horizon. Runway is
              not survival is a different refusal.
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
              solvency. Money received that can be spent now is not whether assets and claims
              structure can cover liabilities and pay debts as they come due. Cash is not runway is
              a different refusal from this one, and it is a different refusal from runway is not
              survival.
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
              solvency. An annualized contract is not balance-sheet and claim quality over a
              structural horizon.
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
              The survival is not solvency. A period booking is not whether liabilities can be
              covered as debts come due.
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
              not solvency. An attributed change is not solvency over a structural horizon.
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
              not solvency.
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
              The survival is not solvency.
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
              not ARR, ARR is not cash, cash is not runway, runway is not survival, and survival is
              not solvency. A profit figure beside a survival note still does not state whether
              assets and claims can cover liabilities.
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
              does not reach that claim, and it does not treat contribution margin as solvency. Cash
              is not margin. Cash is not runway. Runway is not survival. Survival is not solvency. A
              positive unit remainder beside a survival note still does not show solvency.
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
              A named accountable human can own the result, and solvency can still be unshown. A
              survival note does not show it.
            </p>

            <p>
              Survival has a different object than solvency. Survival is whether the business can
              keep meeting obligations (payroll, vendors, debt service, plant continuity) through
              the next decision horizon. Solvency is whether assets and claims structure can cover
              liabilities and pay debts as they come due over a structural horizon. A sentence that
              only states survival does not say the assets and the claims cover the liabilities. A
              sentence that only states solvency does not say the next decision horizon will be met.
              The survival note can hold. The firm can still be insolvent, or headed there. The
              solvency note can hold. Liquidity timing can still fail, and a concentration shock can
              still miss the short horizon.
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
              for the outcome after the work runs, not survival, and not solvency. An authorized
              state can sit beside a survival note while solvency is still unshown. Recommend is not
              authorize. A recommendation that cites the survival note does not accept the
              consequence, and it does not show solvency.
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
              still not survival. Survival is still not solvency. Margin is not profit. Profit is
              not value. A shutdown can collect cash, show a margin, print a profit, store a
              measured outcome, carry an impact claim, recognize a sale, hold an ARR figure, state a
              runway, and meet obligations through the next decision horizon — and the survival note
              can still fail to state whether assets and claims cover liabilities over the
              structural horizon. None of those earlier records turns the survival note into
              solvency.
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
              the equipment. A survival note does not unlock that write. It does not show solvency.
              It does not measure survival. It does not measure solvency. It does not attribute
              cash, risk, or capacity to the decision. Sync does not write the work order. Sync does
              not clear equipment to run. Sync does not mark the case plant-execute. Sync does not
              book revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync does
              not measure cash. Sync does not measure runway. Sync does not measure survival. Sync
              does not measure solvency. Sync does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Survival answers whether obligations can be met through the next decision horizon. It
              does not record whether assets and claims structure can cover liabilities and pay
              debts as they come due over a structural horizon.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Solvency is assets and claims over a structural horizon
            </h2>

            <p>
              Solvency is not a property of the survival note. Solvency is whether assets and claims
              structure can cover liabilities and pay debts as they come due over a structural
              horizon — balance-sheet and claim quality, not just near-term obligation continuity.
              The next decision horizon is the period the named decision has to cover: the time
              until the next decision that can change whether payroll, vendors, debt service, and
              plant continuity are met. The structural horizon is the longer period over which debts
              come due and the assets and the claims must still be able to pay them. Claims
              structure is the ranking and the terms of claims on the assets: who is owed, on what
              terms, and with what priority. A solvency note that omits the assets, the claims, the
              liabilities, or the structural horizon is a different claim from the solvency this
              essay names. A survival note that names only the next decision horizon is survival. It
              is not that solvency.
            </p>

            <p>
              This essay states no cash amount, no asset value, no liability total, no ratio, no
              burn rate, no runway length, no survival length, and no solvency length. Stating that
              obligations can be met through the next decision horizon does not show the assets.
              Stating that a survival note is positive does not show solvency. The structural
              question is whether the assets and the claims can cover the liabilities and pay the
              debts as they come due. That question does not state whether liquidity timing fails
              inside the next decision horizon, and it does not state whether a concentration shock
              hits before that horizon closes.
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
              notes. That check is the measured result. It is not, by itself, survival, and it is
              not, by itself, solvency. A recorded outcome without named assets, claims, liabilities,
              and a structural horizon leaves solvency unshown. A survival note without those
              records leaves solvency unshown. A survival note used as solvency leaves the balance
              sheet and the claims unshown.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit a survival
              note in place of that outcome, and it does not inherit solvency in place of that
              outcome. A later shutdown that cites last time as if the survival note were already
              solvency is citing near-term obligation continuity as a claim about assets and claims.
              Sync must not auto-close, auto-authorize, or treat survival as solvency as Learning credit.
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
              that comes after. Survival, in this essay, is whether obligations can be met through
              the next decision horizon. Solvency is whether assets and claims can cover liabilities
              over a structural horizon. Neither is a claim that the asset stays known-good, and
              neither is produced by storing achieved. A verified outcome can be not_achieved or
              inconclusive. Those results still close the claim about what was observed. They are
              not solvency.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              is the same refusal one step earlier in the evidence. Two records that move together
              are not a cause. A solvency note that moved in the same period as a survival note is
              not, by that movement, proof that obligation continuity is solvency, and it is not
              proof that the liabilities were covered. The coincidence can inform a recommendation
              to investigate. It is not solvency, and it is not proof the survival note showed the
              structural horizon.
            </p>

            <p className="text-xl font-semibold text-white">
              Survival is not solvency. Survival is whether the business can keep meeting obligations
              (payroll, vendors, debt service, plant continuity) through the next decision horizon.
              Solvency is whether assets and claims structure can cover liabilities and pay debts as
              they come due over a structural horizon — balance-sheet and claim quality, not just
              near-term obligation continuity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A firm can survive a horizon and still be insolvent, and a solvent firm can still fail
              survival
            </h2>

            <p>
              The failure mode is ordinary after a survival note is on the books. Survival is
              recorded, and the record is read as solvency. A firm can survive a horizon and still
              be insolvent, or headed there. Survive means payroll, vendors, debt service, and plant
              continuity can be met through the next decision horizon. Insolvent, in this essay,
              means assets and claims structure cannot cover liabilities or pay debts as they come
              due over the structural horizon. Headed there means that structural claim is already
              failing even while the next decision horizon is still being met. The survival note
              does not repair the claims. Debts that fall due after the decision horizon are a
              separate miss: the horizon can be met and the later debts can still be uncovered.
              Assets that cannot be realized on the terms the claims require are a separate miss:
              the assets can be named and still fail to pay those claims as they come due. A claims
              structure the horizon does not yet call is a separate miss: priority and terms can
              already make the structural horizon fail while payroll, vendors, debt service, and
              plant continuity are still being met. Meeting the next decision horizon does not
              answer those questions. The survival note does not answer them.
            </p>

            <p>
              The opposite case is just as ordinary. A solvent firm can still fail survival in a
              short horizon when liquidity timing fails or a concentration shock hits. Solvent, in
              this essay, means assets and claims structure can cover liabilities and pay debts as
              they come due over the structural horizon. Liquidity timing fails means the means to
              meet payroll, vendors, debt service, or plant continuity is not available when those
              obligations fall due inside the next decision horizon, even though the structural
              claim can still hold. A concentration shock means a concentration of inflows, or of
              the capacity the horizon depends on, fails inside that short horizon. Solvency did not
              schedule the timing. The balance sheet did not absorb the shock inside the decision
              horizon. Neither case is proved by a survival note, and neither case is proved by
              calling the firm solvent. This is not the runway formula. Runway is how long
              operations can continue at the current net burn before cash is exhausted: cash divided
              by burn rate, with explicit assumptions. That duration is a different refusal, already
              stated in Runway Is Not Survival. This essay states no savings figure, and it does not
              turn a survived horizon or a solvent balance sheet into one.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              already refuses to treat a KPI, a leading indicator, a model score, a green tile, or a
              closed work-order count as the verified operational outcome. A survival note is a
              near-term continuity claim, not that outcome, and not solvency. A proxy is not the
              outcome. A measured outcome is not the impact. An impact claim is not recognized
              sales. A recognized sale is not ARR. ARR is not cash. Cash is not runway. Runway is
              not survival. Survival is not solvency.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A solvency note painted beside that tile is not a stronger
              green. It is a display. Go still required a named human decision. The result after the
              plant move still requires a verified outcome. Survival still requires named
              obligations through the next decision horizon. Solvency still requires assets and
              claims that can cover liabilities over a structural horizon. The color supplies none
              of them.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              keeps a completion label off the check. A completed workflow is a completion label
              under the criteria someone chose. It is not named observation, not survival, and not
              solvency.{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps a clearance stamp off a finished claim. A cleared flag is not proof the work is
              finished, and it is not proof that a survival note is solvency.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps the proposal off the decision. A recommendation may say investigate because the
              firm survived the horizon and the structural claim is unshown, because the firm is
              headed toward a claims structure that cannot cover liabilities, because liquidity
              timing fails inside the horizon, or because a concentration shock is being read as if
              solvency had already absorbed it. That proposal does not authorize the work, and it
              does not show solvency. Recommend is not authorize.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling survival solvency
              crosses that boundary. Treating a survived horizon as solvency while assets and claims
              cannot cover liabilities, or while the firm is headed there, is the same confusion.
              Treating a solvent balance sheet as survival, while liquidity timing fails or a
              concentration shock hits, is the same confusion. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync does not measure survival. Sync does not
              measure survival for the customer. Sync does not measure solvency. Sync does not
              measure solvency for the customer. Sync does not measure runway. Sync does not measure
              runway for the customer. Sync does not measure cash. Sync does not measure cash for
              the customer. Sync does not collect cash. Sync does not book revenue. Sync does not
              recognize revenue. Sync does not measure ARR. Sync does not measure ARR for the
              customer.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating survival as solvency records near-term obligation continuity as a claim about
              assets and claims. A firm can survive a horizon and still be insolvent, or headed
              there, when assets and claims structure cannot cover liabilities or pay debts as they
              come due over a structural horizon. A solvent firm can still fail survival in a short
              horizon when liquidity timing fails or a concentration shock hits.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a survival note or a solvency note is still a read
            </h2>

            <p>
              Sync may surface a survival note or a solvency note beside Evidence, Verification, and
              the closed outcome. Surfacing is still a read. The screen can show achieved,
              not_achieved, or inconclusive next to the criteria the case holds, next to a survival
              note someone recorded elsewhere, and next to a note that assets, claims, liabilities,
              and a structural horizon were stated. Showing the note does not write a CMMS work
              order. Showing the note does not clear equipment to run. Showing the note does not
              treat the case as plant execute. Showing the note does not book revenue. Showing the
              note does not recognize revenue. Showing the note does not measure ARR. Showing the
              note does not measure ARR for the customer. Showing the note does not measure cash.
              Showing the note does not measure cash for the customer. Showing the note does not
              measure runway. Showing the note does not measure runway for the customer. Showing the
              note does not measure survival. Showing the note does not measure survival for the
              customer. Showing the note does not measure solvency. Showing the note does not
              measure solvency for the customer. Showing the note does not collect cash. Showing the
              note does not attribute a change in cash, risk, or capacity. A read of a survival note
              is still a read. Obligation continuity without named assets, claims, liabilities, and
              a structural horizon leaves solvency unshown.
            </p>

            <p>
              Evidence from the plant beats the survival note when the note is being used as
              solvency. If the evidence on the case does not support the named observation, the case
              refuses. If the evidence records a survival note and does not record the assets, the
              claims, the liabilities, and the structural horizon, the case may store the note as
              survival and must not store the note as solvency. If the evidence records a horizon
              that was met while the firm is insolvent, or headed there, the case may cite that
              record and must not store the survival note as solvency. If the evidence records
              liquidity timing that fails, or a concentration shock, the case may cite that record
              and must not treat solvency as proof the next decision horizon was met. The label does
              not fill the gap, and it does not close it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. A live connector tag pull is not a
              claim of this edition. Simulated or seeded telemetry and assets are practice records.
              A practice record that says survival is solvency is not a customer plant release, and
              it is not a shown solvency.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite a survival note when the source of that note is named, and when the
              citation says it is whether the business can keep meeting obligations (payroll,
              vendors, debt service, plant continuity) through the next decision horizon — rather
              than a measurement Sync performed, and rather than solvency. Evidence may cite a
              solvency note when the source is named and the assets, the claims structure, the
              liabilities, and the structural horizon are named: whether those assets and claims can
              cover the liabilities and pay debts as they come due. Those citations are records of
              statements someone else made. They are not records that Sync measured survival for the
              customer. They are not records that Sync measured solvency for the customer. They are
              not records that the survival note is solvency. A recommendation may say investigate
              because the horizon was met and the structural claim is unshown, because the firm is
              insolvent or headed there, because liquidity timing fails, or because a concentration
              shock is being treated as if solvency had already absorbed it. The proposal does not
              show solvency. Recommend is not authorize.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not solvency. A survival label does not perform the
              write and does not turn the horizon into solvency. Authorized execution systems write
              the work order or the isolation. Sync does not write the work order. Sync does not
              mark an asset closed. Sync does not write that state back. CMMS write-back is not a
              live product path. Billing write-back is not a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The check
              is named observation against named criteria, stored as achieved, not_achieved, or
              inconclusive, with measured notes. That record is the outcome the case is allowed to
              close when the criteria named an operational result. It does not, by itself, turn the
              outcome into survival, and it does not turn survival into solvency. A named human
              decides. A named human remains accountable after the plant move. Solvency stays
              unshown until the assets, the claims, the liabilities, and the structural horizon are
              a separate record. Survival stays whether obligations can be met through the next
              decision horizon even when someone calls the note solvency. This essay does not supply
              either record as the other. Sync does not attribute a change in cash, risk, or
              capacity. Sync does not book revenue. Sync does not recognize revenue. Sync does not
              measure ARR. Sync does not measure cash. Sync does not measure runway. Sync does not
              measure survival. Sync does not measure solvency. Sync does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a survival note or a solvency note beside Evidence, Verification, and
              the closed outcome. Surfacing is still a read. Sync refuses false precision. Sync
              refuses when evidence is insufficient. A named human decides. A named human remains
              accountable after the plant move. Survival stays whether the business can keep meeting
              obligations (payroll, vendors, debt service, plant continuity) through the next
              decision horizon. Solvency stays whether assets and claims structure can cover
              liabilities and pay debts as they come due over a structural horizon — balance-sheet
              and claim quality, not just near-term obligation continuity. A survived horizon that
              leaves liabilities uncovered leaves solvency unmet. A solvent structure that still
              misses the horizon through liquidity timing or a concentration shock leaves the
              survival note unproved by the balance sheet.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with measured
              notes. It does not keep survival as solvency. A later question that cites a survival
              note as if solvency were already shown is citing near-term obligation continuity. A
              later question that cites a survived horizon while the firm is insolvent, or headed
              there, is citing a note that is not solvency. A later question that cites solvency as
              if the next decision horizon had been met, while liquidity timing fails or a
              concentration shock hits, is citing a structural claim that did not prove the horizon.
              Sync must not auto-close, auto-authorize, or treat survival as solvency as Learning credit.
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
              directly. Evidence may hold the survival note, the solvency note, or the measured
              result that was shown. Human decision may hold who accepted the consequence. Action
              may hold the intent that decision routed. Verification may hold the named observation.
              Learning may hold achieved, not_achieved, or inconclusive, with measured notes — the
              measured outcome, not solvency. None of those steps is survival used as solvency. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a survival note as whether assets and claims cover
              liabilities. Later editions can deepen a chapter. The spine stays in this order.
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
              It states no OEM limit and no operating threshold. It states no cash amount, no asset
              value, no liability total, no ratio, no burn rate, no runway length, no survival
              length, and no solvency length. It does not claim that survival is solvency, writes a
              CMMS work order, clears equipment to run, books revenue, recognizes revenue, measures
              ARR, measures ARR for the customer, measures cash, measures cash for the customer,
              measures runway, measures runway for the customer, measures survival, measures
              survival for the customer, measures solvency, measures solvency for the customer,
              collects cash, or attributes a change in cash, risk, or capacity. It does not claim
              that Sync executes plant work. It does not claim CMMS write-back as a shipped product.
              It does not claim billing write-back as a shipped product. It does not invent a customer, a price, or a return. It does not treat a runway figure, a cash balance,
              contribution margin, invoices paid, profitable ARR, or a profit figure as the
              question. Runway is not survival is a different refusal. Cash is not runway is a
              different refusal.
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
              describes that journey. Walking those steps is not a claim that survival is solvency.
              The verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, billing
              write-back, SMTP invite delivery, or automatic revocation of access on expiry as live.
              It does not describe Sync writing work orders, clearing equipment to run, marking a
              case plant-execute, starting equipment, releasing a hold, controlling the plant,
              booking revenue, recognizing revenue, measuring ARR, measuring cash, measuring runway,
              measuring survival, measuring solvency, or collecting cash. Simulated or seeded
              telemetry and assets are practice records. They are not live plant results.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              keeps a named person on the decision. The survival note does not accept, reject,
              escalate, or return. The solvency note does not either. A specific Sync decision, in
              this essay, is a named human decision recorded on a Sync case. Sync did not make it. A
              named human decides. A named human remains accountable after the plant move.
            </p>

            <p>
              Companion reading:{' '}
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
              on why a later case inherits the measured result and not a solvency claim,{' '}
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
              on why a solvency note that moved with a survival note is not a cause. A{' '}
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
              the measured result. The survival note does not record the solvency.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Survival is
                whether the business can keep meeting obligations (payroll, vendors, debt service,
                plant continuity) through the next decision horizon. Solvency is whether assets and
                claims structure can cover liabilities and pay debts as they come due over a
                structural horizon — balance-sheet and claim quality, not just near-term obligation
                continuity. A firm can survive a horizon and still be insolvent. A solvent firm can
                still fail survival. The Reliability Engineer workspace is where a signed-in
                Decision Case is completed. A Reliability Assessment is the bounded review when the
                question is whether the records can support a conclusion. None of those is a claim
                that Sync executes plant work, books revenue, recognizes revenue, measures ARR,
                measures ARR for the customer, measures cash, measures cash for the customer,
                measures runway, measures runway for the customer, measures survival, measures
                survival for the customer, measures solvency, measures solvency for the customer,
                collects cash, attributes cash, risk, or capacity, declares a return, that CMMS
                write-back is live, that billing write-back is live, or that self-guided onboarding
                is a live product path.
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
          <InsightNextSteps slug="survival-is-not-solvency" />
        </motion.article>
      </div>
    </main>
  );
}
