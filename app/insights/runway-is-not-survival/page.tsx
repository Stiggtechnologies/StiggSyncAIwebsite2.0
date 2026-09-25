'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('runway-is-not-survival');

export default function RunwayIsNotSurvivalPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Runway Is Not Survival</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Runway is how long operations can continue at the current net burn before cash is
              exhausted: cash divided by burn rate, with explicit assumptions. Survival is whether
              the business can keep meeting obligations (payroll, vendors, debt service, plant continuity)
              through the next decision horizon — not just whether a runway number is positive.
              A long runway can still miss survival. A short runway can still survive a decision horizon.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Runway is not survival. Runway is how long operations can continue at the current net burn before cash is exhausted.
              That duration is cash divided by burn rate, with explicit assumptions. Survival is whether the business can keep meeting obligations
              (payroll, vendors, debt service, plant continuity) through the next decision horizon — not just whether a runway number is positive.
              A long runway can still miss survival if burn assumptions are wrong, receivables never convert, a single customer concentration collapses,
              or critical capacity (people, permits, plant) fails before cash does. A short runway can still survive a decision horizon if cash inflows are contracted,
              burn is cuttable on a named date, or a financing path is already closed — none of which the runway formula itself proves.
              Treating a runway figure as survival records a duration as a claim that obligations will be met through the next decision horizon nobody has shown,
              under the honesty and verification boundary. Sync may surface a runway figure or a survival note beside Evidence, Verification, and the closed outcome.
              Surfacing is still a read. A long runway with wrong burn assumptions, receivables that never convert, a single customer concentration that collapses,
              or critical capacity that fails before cash does leaves survival unmet. A short runway with contracted inflows, burn cuttable on a named date,
              or a financing path already closed can still meet obligations through that horizon. Direct plant execute stays off.
              CMMS write-back is not a live product path. Billing write-back is not a live product path. Sync does not book revenue. Sync does not
              recognize revenue. Sync does not measure ARR. Sync does not measure ARR for the customer.
              Sync does not measure cash. Sync does not measure cash for the customer.
              Sync does not measure runway. Sync does not measure runway for the customer.
              Sync does not measure survival. Sync does not measure survival for the customer. Sync
              does not collect cash. Sync does not attribute a change in cash, risk, or capacity.
              Sync does not execute plant work.
            </p>

            <p>
              A runway figure looks like the close of the survival question. The duration is named.
              Someone reads a positive number and treats the business as able to keep meeting
              obligations through the next decision horizon. The figure did none of that by itself.
              It answered how long operations can continue at the current net burn before cash is
              exhausted, when the figure is that runway and the assumptions are named. It did not
              state whether payroll, vendors, debt service, and plant continuity can be met through
              that horizon. It did not show that the burn assumptions hold. It did not show that
              receivables convert. It did not show that a single customer concentration holds. It
              did not show that critical capacity (people, permits, plant) lasts until cash does.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is
              not margin. Margin is not profit. Profit is not value. Value is not outcome. Outcome is not impact.
              Impact is not revenue. Revenue is not ARR. ARR is not cash. Cash is not
              runway. Runway is not survival. Each word can be true in its own place. None of the
              earlier words fills the last one. A closed work order, cash collected, a unit
              remainder, a profit figure, a measured outcome, an attributed change, a recognized
              sale, an annualized contract, a spendable balance, and a duration at the current net
              burn are activity, money, accounting, a recorded result, a claim about that result, a
              period booking, a recurring contract, a balance, and a calculated duration. Runway is
              how long operations can continue at the current net burn before cash is exhausted.
              Survival is whether the business can keep meeting obligations through the next
              decision horizon. A runway number is not that claim.
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
              . This essay is why runway cannot be read as survival. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold a runway figure, a note that obligations were named, or a note that
              someone else stated either record, when the source of that note is named. The{' '}
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
              notes. None of those steps shows survival. None of them treats runway as survival.
              None of them measures runway for the customer. None of them measures survival for the
              customer. None of them attributes cash, risk, or capacity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A duration at the current net burn is not survival
            </h2>

            <p>
              <Link
                href="/insights/cash-is-not-runway"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Runway
              </Link>{' '}
              sits one step earlier. Cash is money received (collected) that can be spent now.
              Runway is how long operations can continue at the current net burn before cash is
              exhausted: cash divided by burn rate, with explicit assumptions. A cash balance can
              look healthy while runway is short if burn is high or collections are lumpy. Runway
              can look long while cash is trapped in receivables or restricted accounts. This essay
              starts after that split has been kept. Cash is not runway. The next refusal is that
              runway is not survival. A duration at the current net burn can be positive, and the
              business can still fail to meet payroll, vendors, debt service, or plant continuity
              through the next decision horizon. A short runway can still survive that horizon when
              the conditions this essay names are already true. Cash is not runway is a different refusal.
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
              cash. The cash is not runway. The runway is not survival. An annualized contract is
              not whether obligations will be met through the next decision horizon.
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
              is not ARR. The ARR is not cash. The cash is not runway. The runway is not survival. A
              period booking is not whether the business can keep meeting obligations.
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
              ARR is not cash. The cash is not runway. The runway is not survival. An attributed
              change is not survival through the next decision horizon.
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
              ARR is not cash. The cash is not runway. The runway is not survival.
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
              not ARR, ARR is not cash, cash is not runway, and runway is not survival. A profit
              figure beside a runway number still does not state whether obligations will be met.
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
              does not reach that claim. Cash is not margin. Cash is not runway. Runway is not
              survival. A positive unit remainder beside a runway figure still does not show
              survival.
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
              A named accountable human can own the result, and survival can still be unshown. A
              runway figure does not show it.
            </p>

            <p>
              Runway has a different object than survival. Runway is how long operations can
              continue at the current net burn before cash is exhausted. Survival is whether the
              business can keep meeting obligations (payroll, vendors, debt service, plant continuity)
              through the next decision horizon. A sentence that only states a runway number does
              not say those obligations will be met. A sentence that only states survival does not
              say the duration was cash divided by burn rate, with explicit assumptions. The runway
              number can be long. Burn assumptions can still be wrong. Receivables can still never
              convert. A single customer concentration can still collapse. Critical capacity can
              still fail before cash does. The runway number can be short. Contracted inflows, a
              named cut date, or a financing path already closed can still carry the horizon.
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
              for the outcome after the work runs, not runway, and not survival. An authorized state
              can sit beside a runway figure while survival is still unshown. Recommend is not
              authorize. A recommendation that cites the runway figure does not accept the
              consequence, and it does not show survival.
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
              still not survival. Margin is not profit. Profit is not value. A shutdown can collect
              cash, show a margin, print a profit, store a measured outcome, carry an impact claim,
              recognize a sale, hold an ARR figure, and state a runway — and the runway figure can
              still fail to state whether obligations will be met through the next decision horizon.
              None of those earlier records turns the duration into survival.
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
              the equipment. A runway figure does not unlock that write. It does not show survival.
              It does not measure runway. It does not measure survival. It does not attribute cash,
              risk, or capacity to the decision. Sync does not write the work order. Sync does not
              clear equipment to run. Sync does not mark the case plant-execute. Sync does not book
              revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync does not
              measure cash. Sync does not measure runway. Sync does not measure survival. Sync does
              not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Runway answers how long operations can continue at the current net burn before cash is exhausted.
              It does not record whether the business can keep meeting obligations through the next decision horizon.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Survival is obligations through the next decision horizon
            </h2>

            <p>
              Survival is not a property of the runway figure. Survival is whether the business can
              keep meeting obligations (payroll, vendors, debt service, plant continuity) through the
              next decision horizon — not just whether a runway number is positive. The next
              decision horizon is the period the named decision has to cover: the time until the
              next decision that can change burn, inflows, financing, or capacity. The obligations
              have to be named. Payroll is pay owed to people. Vendors are amounts owed to
              suppliers. Debt service is amounts owed on debt. Plant continuity is whether the plant
              can keep operating through that horizon. A survival note that omits those obligations,
              or that omits the horizon, is a different claim from the survival this essay names.
            </p>

            <p>
              This essay states no cash amount, no burn rate, no runway length, and no survival
              length. Stating a runway figure does not show the obligations. Stating that a runway
              number is positive does not show survival. The runway formula is cash divided by burn
              rate, with explicit assumptions. That formula does not state whether burn assumptions
              are wrong, whether receivables never convert, whether a single customer concentration
              collapses, or whether critical capacity (people, permits, plant) fails before cash does.
              It also does not state whether cash inflows are contracted, whether burn is cuttable on
              a named date, or whether a financing path is already closed.
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
              notes. That check is the measured result. It is not, by itself, runway, and it is not,
              by itself, survival. A recorded outcome without named obligations and a named horizon
              leaves survival unshown. A runway figure without those records leaves survival unshown.
              A positive runway number used as survival leaves the obligations unshown.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit a runway figure
              in place of that outcome, and it does not inherit survival in place of that outcome. A
              later shutdown that cites last time as if the runway figure were already survival is
              citing a duration as a claim about obligations. Sync must not auto-close,
              auto-authorize, or treat runway as survival as Learning credit.
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
              that comes after. Runway, in this essay, is how long operations can continue at the
              current net burn before cash is exhausted. Survival is whether obligations can be met
              through the next decision horizon. Neither is a claim that the asset stays known-good,
              and neither is produced by storing achieved. A verified outcome can be not_achieved or
              inconclusive. Those results still close the claim about what was observed. They are
              not survival.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              is the same refusal one step earlier in the evidence. Two records that move together
              are not a cause. A survival note that moved in the same period as a runway figure is
              not, by that movement, proof that the duration is survival, and it is not proof that
              the obligations were met. The coincidence can inform a recommendation to investigate.
              It is not survival, and it is not proof the runway formula showed the horizon.
            </p>

            <p className="text-xl font-semibold text-white">
              Runway is not survival. Runway is cash divided by burn rate, with explicit assumptions.
              Survival is whether the business can keep meeting obligations (payroll, vendors, debt service, plant continuity)
              through the next decision horizon — not just whether a runway number is positive.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A long runway can miss survival, and a short runway can still survive
            </h2>

            <p>
              The failure mode is ordinary after a runway figure is on the books. Runway is
              recorded, and the record is read as survival. A long runway can still miss survival if
              burn assumptions are wrong. The formula uses a burn rate. If that rate is not the
              current net burn, or if the rate is assumed constant when it is not, the duration is
              not the time operations can continue. The length of the stated runway does not repair
              a wrong assumption. Receivables never convert is a separate miss: amounts counted as
              future cash that are not received. A runway figure that depends on those receivables
              can look long and still miss survival when the cash does not arrive. A single customer
              concentration collapses is a separate miss: one customer accounts for enough of the
              inflows that losing that concentration removes the cash the duration assumed. Critical
              capacity (people, permits, plant) fails before cash does is a separate miss: the people,
              the permits, or the plant required to keep operating fail while cash remains. Cash
              still on hand does not meet plant continuity if the plant cannot run. It does not meet
              payroll if the people required to operate are gone. It does not meet the horizon if a
              permit required to operate has failed. Survival asks whether those obligations can be
              met. The runway number does not answer them.
            </p>

            <p>
              The opposite case is just as ordinary. A short runway can still survive a decision
              horizon if cash inflows are contracted, burn is cuttable on a named date, or a
              financing path is already closed — none of which the runway formula itself proves.
              Cash inflows are contracted means the inflows that cover the horizon are already under
              contract, not merely assumed inside the burn rate. Burn is cuttable on a named date
              means a named date already exists on which burn will be reduced, and that date falls
              inside the horizon. A financing path is already closed means the financing that covers
              the horizon is already committed. The formula cash divided by burn rate does not
              record any of those three. A short positive number, or a short number that is still
              positive, is not proof they exist. A negative or exhausted reading is not proof they
              are absent. This essay states no savings figure, and it does not turn a long runway or
              a short runway into one.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              already refuses to treat a KPI, a leading indicator, a model score, a green tile, or a
              closed work-order count as the verified operational outcome. A runway figure is a
              calculated duration, not that outcome, and not survival. A proxy is not the outcome. A
              measured outcome is not the impact. An impact claim is not recognized sales. A
              recognized sale is not ARR. ARR is not cash. Cash is not runway. Runway is not
              survival.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A survival note painted beside that tile is not a stronger
              green. It is a display. Go still required a named human decision. The result after the
              plant move still requires a verified outcome. Runway still requires cash divided by
              the current net burn, with the assumptions named. Survival still requires named
              obligations through the next decision horizon. The color supplies none of them.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              keeps a completion label off the check. A completed workflow is a completion label
              under the criteria someone chose. It is not named observation, not runway, and not
              survival.{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps a clearance stamp off a finished claim. A cleared flag is not proof the work is
              finished, and it is not proof that a runway figure is survival.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps the proposal off the decision. A recommendation may say investigate because burn
              assumptions are wrong, because receivables never convert, because a single customer
              concentration collapses, because critical capacity fails before cash does, or because
              a short runway is being read as if contracted inflows, a named cut date, or a closed
              financing path were already proved. That proposal does not authorize the work, and it
              does not show survival. Recommend is not authorize.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling runway survival crosses
              that boundary. Treating a long runway as survival while burn assumptions are wrong,
              receivables never convert, a single customer concentration collapses, or critical
              capacity fails before cash does is the same confusion. Treating a short runway as
              failure to survive, while cash inflows are contracted, burn is cuttable on a named
              date, or a financing path is already closed, is the same confusion. Sync refuses
              false precision. Sync refuses when evidence is insufficient. Sync does not measure
              runway. Sync does not measure runway for the customer. Sync does not measure survival.
              Sync does not measure survival for the customer. Sync does not measure cash. Sync does
              not measure cash for the customer. Sync does not collect cash. Sync does not book
              revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync does not
              measure ARR for the customer.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating runway as survival records a duration as a claim that obligations will be met.
              A long runway can still miss survival if burn assumptions are wrong, receivables never convert,
              a single customer concentration collapses, or critical capacity (people, permits, plant) fails before cash does.
              A short runway can still survive a decision horizon if cash inflows are contracted, burn is cuttable on a named date,
              or a financing path is already closed — none of which the runway formula itself proves.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a runway figure or a survival note is still a read
            </h2>

            <p>
              Sync may surface a runway figure or a survival note beside Evidence, Verification, and
              the closed outcome. Surfacing is still a read. The screen can show achieved,
              not_achieved, or inconclusive next to the criteria the case holds, next to a runway
              figure someone recorded elsewhere, and next to a note that obligations and a decision
              horizon were stated. Showing the figure does not write a CMMS work order. Showing the
              figure does not clear equipment to run. Showing the figure does not treat the case as
              plant execute. Showing the figure does not book revenue. Showing the figure does not
              recognize revenue. Showing the figure does not measure ARR. Showing the figure does
              not measure ARR for the customer. Showing the figure does not measure cash. Showing
              the figure does not measure cash for the customer. Showing the figure does not measure
              runway. Showing the figure does not measure runway for the customer. Showing the
              figure does not measure survival. Showing the figure does not measure survival for the
              customer. Showing the figure does not collect cash. Showing the figure does not
              attribute a change in cash, risk, or capacity. A read of a runway figure is still a
              read. A duration without named obligations and a named decision horizon leaves
              survival unshown.
            </p>

            <p>
              Evidence from the plant beats the runway figure when the figure is being used as
              survival. If the evidence on the case does not support the named observation, the case
              refuses. If the evidence records a runway figure and does not record the obligations
              and the horizon, the case may store the figure as runway and must not store the figure
              as survival. If the evidence records wrong burn assumptions, receivables that never
              convert, a single customer concentration that collapses, or critical capacity that
              fails before cash does, the case may cite that record and must not store the runway
              figure as survival. If the evidence records contracted inflows, burn cuttable on a
              named date, or a financing path already closed, the case may cite that record and must
              not treat the runway formula as the proof of it. The label does not fill the gap, and
              it does not close it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. A live connector tag pull is not a
              claim of this edition. Simulated or seeded telemetry and assets are practice records.
              A practice record that says runway is survival is not a customer plant release, and it
              is not a shown survival.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite a runway figure when the source of that figure is named, and when
              the citation says it is how long operations can continue at the current net burn
              before cash is exhausted — cash divided by burn rate, with explicit assumptions —
              rather than a measurement Sync performed, and rather than survival. Evidence may cite
              a survival note when the source is named and the obligations and the horizon are
              named: payroll, vendors, debt service, plant continuity, and the next decision
              horizon. Those citations are records of statements someone else made. They are not
              records that Sync measured runway for the customer. They are not records that Sync
              measured survival for the customer. They are not records that the runway figure is
              survival. A recommendation may say investigate because burn assumptions are wrong,
              because receivables never convert, because a single customer concentration collapses,
              because critical capacity fails before cash does, or because a short runway is being
              treated as if contracted inflows, a named cut date, or a closed financing path were
              already proved by the formula. The proposal does not show survival. Recommend is not
              authorize.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not survival. A runway label does not perform the write
              and does not turn the duration into survival. Authorized execution systems write the
              work order or the isolation. Sync does not write the work order. Sync does not mark an
              asset closed. Sync does not write that state back. CMMS write-back is not a live
              product path. Billing write-back is not a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The check
              is named observation against named criteria, stored as achieved, not_achieved, or
              inconclusive, with measured notes. That record is the outcome the case is allowed to
              close when the criteria named an operational result. It does not, by itself, turn the
              outcome into runway, and it does not turn runway into survival. A named human decides.
              A named human remains accountable after the plant move. Survival stays unshown until
              the obligations and the next decision horizon are a separate record. Runway stays how
              long operations can continue at the current net burn before cash is exhausted even
              when someone calls the number survival. This essay does not supply either record as
              the other. Sync does not attribute a change in cash, risk, or capacity. Sync does not
              book revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync does
              not measure cash. Sync does not measure runway. Sync does not measure survival. Sync
              does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a runway figure or a survival note beside Evidence, Verification, and
              the closed outcome. Surfacing is still a read. Sync refuses false precision. Sync
              refuses when evidence is insufficient. A named human decides. A named human remains
              accountable after the plant move. Runway stays how long operations can continue at the
              current net burn before cash is exhausted: cash divided by burn rate, with explicit
              assumptions. Survival stays whether the business can keep meeting obligations through
              the next decision horizon — not just whether a runway number is positive. A long
              runway that misses those obligations leaves survival unmet. A short runway that still
              meets them through contracted inflows, a named cut date, or a financing path already
              closed leaves the formula unproved as survival.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with measured
              notes. It does not keep runway as survival. A later question that cites a runway
              figure as if survival were already shown is citing a duration. A later question that
              cites a long runway while burn assumptions are wrong, receivables never convert, a
              single customer concentration collapses, or critical capacity fails before cash does
              is citing a figure that is not survival. A later question that cites a short runway as
              if survival had failed, while cash inflows are contracted, burn is cuttable on a named
              date, or a financing path is already closed, is citing a formula that did not prove
              the horizon. Sync must not auto-close, auto-authorize, or treat runway as survival as
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
              directly. Evidence may hold the runway figure, the survival note, or the measured
              result that was shown. Human decision may hold who accepted the consequence. Action
              may hold the intent that decision routed. Verification may hold the named observation.
              Learning may hold achieved, not_achieved, or inconclusive, with measured notes — the
              measured outcome, not survival. None of those steps is runway used as survival. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a runway figure as whether obligations will be met.
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
              rate, no runway length, and no survival length. It does not claim that runway is
              survival, writes a CMMS work order, clears equipment to run, books revenue, recognizes
              revenue, measures ARR, measures ARR for the customer, measures cash, measures cash for
              the customer, measures runway, measures runway for the customer, measures survival,
              measures survival for the customer, collects cash, or attributes a change in cash,
              risk, or capacity. It does not claim that Sync executes plant work. It does not claim
              CMMS write-back as a shipped product. It does not claim billing write-back as a
              shipped product. It does not invent a customer, a price, or a return. It does not
              treat a cash balance, contribution margin, invoices paid, or profitable ARR as the
              question. Cash is not runway is a different refusal.
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
              describes that journey. Walking those steps is not a claim that runway is survival.
              The verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, billing
              write-back, SMTP invite delivery, or automatic revocation of access on expiry as live.
              It does not describe Sync writing work orders, clearing equipment to run, marking a
              case plant-execute, starting equipment, releasing a hold, controlling the plant,
              booking revenue, recognizing revenue, measuring ARR, measuring cash, measuring runway,
              measuring survival, or collecting cash. Simulated or seeded telemetry and assets are
              practice records. They are not live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              keeps a named person on the decision. The runway figure does not accept, reject,
              escalate, or return. The survival note does not either. A specific Sync decision, in
              this essay, is a named human decision recorded on a Sync case. Sync did not make it. A
              named human decides. A named human remains accountable after the plant move.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/cash-is-not-runway"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Runway
              </Link>{' '}
              on why money received that can be spent now is not a duration at the current net burn,{' '}
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
              on why a later case inherits the measured result and not a survival claim,{' '}
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
              on why a survival note that moved with a runway figure is not a cause. A{' '}
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
              the measured result. The runway figure does not record the survival.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Runway is
                how long operations can continue at the current net burn before cash is exhausted:
                cash divided by burn rate, with explicit assumptions. Survival is whether the
                business can keep meeting obligations (payroll, vendors, debt service, plant continuity)
                through the next decision horizon — not just whether a runway number is positive.
                A long runway can still miss survival. A short runway can still survive a decision
                horizon. The runway formula itself proves neither. The Reliability Engineer workspace
                is where a signed-in Decision Case is completed. A Reliability Assessment is the
                bounded review when the question is whether the records can support a conclusion.
                None of those is a claim that Sync executes plant work, books revenue, recognizes
                revenue, measures ARR, measures ARR for the customer, measures cash, measures cash
                for the customer, measures runway, measures runway for the customer, measures
                survival, measures survival for the customer, collects cash, attributes cash, risk,
                or capacity, declares a return, that CMMS write-back is live, that billing
                write-back is live, or that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="runway-is-not-survival" />
        </motion.article>
      </div>
    </main>
  );
}
