'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('learning-is-not-judgment');

export default function LearningIsNotJudgmentPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Learning Is Not Judgment</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Learning is an updated decision rule, model, or operating practice the firm adopts because a verified result changed what it will do next under a named decision window — tempered belief that changes future allocation, not a dashboard tile, a learning_events row, a retrospective note, or a results number sitting unread. Judgment is the situated call under incomplete information that commits plant work, capital, or risk now under a named decision owner and window — accountable choice with consequence, not an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a learning note alone. Learning is not judgment. A firm with learning can still lack judgment. A firm with judgment can still lack learning. A learning note alone proves neither. A judgment note alone proves neither. A learning note is not a green. A judgment note is not a green. An adopted rule sitting unused is not a green. A recommendation tile is not a green. A scored suggestion is not a green. Results is not learning. Execution is not results. Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result) — realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone. An adopted rule is not judgment. A learning note is not the situated call.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Learning is not judgment. Learning is an updated decision rule, model, or operating
              practice the firm adopts because a verified result changed what it will do next under a
              named decision window — tempered belief that changes future allocation, not a dashboard
              tile, a learning_events row, a retrospective note, or a results number sitting unread.
              Judgment is the situated call under incomplete information that commits plant work,
              capital, or risk now under a named decision owner and window — accountable choice with
              consequence, not an adopted rule sitting unused, a recommendation tile, a scored
              suggestion, or a learning note alone. A firm with learning can still lack judgment when
              that adopted rule is on the record and the firm has not made the situated call that
              commits plant work, capital, or risk now under a named decision owner and window. A
              firm with judgment can still lack learning when that call is on the record and the firm
              has not adopted an updated decision rule, model, or operating practice because a
              verified result changed what it will do next under a named decision window. An adopted
              rule sitting unused is not that call. A recommendation tile is not that call. A scored
              suggestion is not that call. A learning note alone is not that call. None of that is
              proved by a learning note alone. Treating learning as judgment records an adopted rule
              as a claim about a situated call that nobody has made, under the honesty and
              verification boundary. Sync may surface a learning note or a judgment/decision support
              note beside Evidence, Verification, and the closed outcome. Sync may surface a learning
              note or a judgment/decision support note beside Evidence/Verification/closed outcome.
              Surfacing is still a read. A firm that holds the updated rule can still have no call
              that commits plant work, capital, or risk now. A firm that has made that call can still
              have no updated rule under the named decision window. Direct plant execute stays off.
              CMMS write-back is not a live product path. Billing write-back is not a live product
              path. Sync does not book revenue. Sync does not recognize revenue. Sync does not
              measure ARR. Sync does not measure ARR for the customer. Sync does not measure cash.
              Sync does not measure cash for the customer. Sync does not measure runway. Sync does
              not measure runway for the customer. Sync does not measure survival. Sync does not
              measure survival for the customer. Sync does not measure solvency. Sync does not
              measure solvency for the customer. Sync does not measure liquidity. Sync does not
              measure liquidity for the customer. Sync does not measure flexibility. Sync does not
              measure flexibility for the customer. Sync does not measure optionality. Sync does not
              measure optionality for the customer. Sync does not measure strategy. Sync does not
              measure strategy for the customer. Sync does not measure execution. Sync does not
              measure execution for the customer. Sync does not measure results. Sync does not
              measure results for the customer. Sync does not measure learning. Sync does not measure
              learning for the customer. Sync does not measure judgment. Sync does not measure
              judgment for the customer. Sync does not collect cash. Sync does not attribute a change
              in cash, risk, or capacity. Sync does not execute plant work.
            </p>

            <p>
              A learning note looks like the close of the judgment question. Someone reads that the
              firm adopted an updated decision rule, model, or operating practice because a verified
              result changed what it will do next under a named decision window, and treats the firm
              as having made the situated call under incomplete information that commits plant work,
              capital, or risk now under a named decision owner and window. The note did none of that
              by itself. It answered whether that updated rule was stated as tempered belief that
              changes future allocation, when the note is that learning and the decision window is
              named. It did not state the situated call. It did not state the named decision owner.
              It did not state that plant work, capital, or risk is committed now. It did not state
              the consequence of that call. An adopted rule sitting unused is still unused. A
              recommendation tile that repeats the rule is still a tile. A scored suggestion that
              sits beside the rule is still a suggestion. A learning note alone is still a note.
              None of those is an accountable choice with consequence. The named decision window
              inside the learning definition is the window under which the firm will or will not do
              the next thing under the adopted rule. The named decision owner and window inside the
              judgment definition are the owner and the window under which the call commits plant
              work, capital, or risk now. Adopting the rule under the learning window does not make
              the call under the judgment window. The tempered belief is not the accountable choice.
              The accountable choice is not the tempered belief.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is
              not margin. Margin is not profit. Profit is not value. Value is not outcome. Outcome
              is not impact. Impact is not revenue. Revenue is not ARR. ARR is not cash. Cash is not
              runway. Runway is not survival. Survival is not solvency. Solvency is not liquidity.
              Liquidity is not flexibility. Flexibility is not optionality. Optionality is not
              strategy. Strategy is not execution. Execution is not results. Results is not learning.
              Learning is not judgment. Each word can be true in its own place. None of the earlier
              words fills the last one. A closed work order, cash collected, a unit remainder, a
              profit figure, a measured outcome, an attributed change in cash, risk, or capacity, a
              recognized sale, an annualized contract, a spendable balance, a duration at the current
              net burn, obligation continuity through the next decision horizon, assets and claims
              that can cover liabilities over a structural horizon, cash and near-cash that meet the
              near-term windows, a reallocation inside a named decision window, unused rights on
              paper, a committed path, work completed inside the named decision window, an attributed
              measured change under a named measurement window, and an updated decision rule under a
              named decision window are activity, money, accounting, a recorded result, a claim about
              that result, a period booking, a recurring contract, a balance, a calculated duration,
              a near-term continuity claim, a structural claim, a near-term cash claim, a
              course-of-action claim, theoretical choice inventory, a resource allocation, realized
              performance, consequence under the honesty and verification boundary, and tempered
              belief that changes future allocation. They are not, by those records, the situated
              call under incomplete information that commits plant work, capital, or risk now under a
              named decision owner and window. Liquidity is whether cash and near-cash can meet
              obligations as they come due in the near term (payroll, vendors, debt service windows)
              without forced asset sales or covenant breaches. Flexibility is whether the firm can
              reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named
              decision window without breaking obligations, covenants, or continuity — the ability to
              choose and change course, not merely to pay what is already due. Optionality is whether
              unused rights, capacity lines, budget envelopes, or contractual choices exist on paper
              (or in a plan) that could be exercised in some future state — theoretical choice
              inventory, not proof those choices are executable inside a named decision window (lead
              times, skills, covenants, plant continuity, and cash may still block exercise).
              Strategy is a named choice among alternatives with allocated resources, a named decision
              window, accountable owner, and success criteria the firm is actually committing to
              execute — a committed path and resource allocation, not proof the work was completed
              inside that window. Execution is work actually completed inside the named decision
              window with evidence of done outcomes (closed work, shipped change, verified plant
              result) — realized performance against the committed path, not the strategy note,
              roadmap slide, or allocated budget envelope alone. Results is the attributed, measured
              change in plant capacity, risk, cost, or production the firm can show followed from
              completed work under a named measurement window — consequence under the honesty and
              verification boundary, not the WO close, shipped-change ticket, or single verified
              plant check alone. Learning is an updated decision rule, model, or operating practice
              the firm adopts because a verified result changed what it will do next under a named
              decision window — tempered belief that changes future allocation, not a dashboard tile,
              a learning_events row, a retrospective note, or a results number sitting unread.
              Judgment is the situated call under incomplete information that commits plant work,
              capital, or risk now under a named decision owner and window — accountable choice with
              consequence, not an adopted rule sitting unused, a recommendation tile, a scored
              suggestion, or a learning note alone. A learning note is not that judgment claim.
            </p>

            <p>
              Flexibility is not optionality. Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window without breaking obligations, covenants, or continuity — the ability to choose and change course, not merely to pay what is already due. Liquidity is not flexibility. Liquidity is whether cash and near-cash can meet obligations as they come due in the near term (payroll, vendors, debt service windows) without forced asset sales or covenant breaches. Solvency is not liquidity. Solvency is whether assets and claims structure can cover liabilities and pay debts as they come due over a structural horizon — balance-sheet and claim quality, not near-term cash timing alone. Survival is not solvency. Survival is whether the business can keep meeting obligations (payroll, vendors, debt service, plant continuity) through the next decision horizon. Runway is not survival. Runway is how long operations can continue at the current net burn before cash is exhausted: cash divided by burn rate, with explicit assumptions. Cash is not runway. Cash is money received (collected) that can be spent now. ARR is not cash. ARR is the annualized value of recurring contracted subscription revenue that renews. Revenue is not ARR. Impact is not revenue. Outcome is not impact. Value is not outcome. Profit is not value. Margin is not profit. Contribution margin is not bottom-line profit. Cash is not margin. Closure is not cash. Optionality is not strategy. Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state — theoretical choice inventory, not proof those choices are executable inside a named decision window (lead times, skills, covenants, plant continuity, and cash may still block exercise). Strategy, in that earlier essay, is a committed path, not a menu of unused rights. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync does not measure solvency for the customer. Sync does not measure liquidity for the customer. Sync does not measure flexibility for the customer. Sync does not measure optionality for the customer. Sync does not measure strategy for the customer. Sync does not measure execution for the customer. Sync does not measure results for the customer. Sync does not measure learning for the customer. Sync does not measure judgment for the customer. Sync does not attribute a change in cash, risk, or capacity. Sync does not collect cash. Those checks do not show judgment.
            </p>

            <p>
              This essay does not collapse judgment into learning, results, execution, strategy,
              optionality, flexibility, liquidity, solvency, survival, runway, cash, ARR, margin, or
              profit.{' '}
              <Link
                href="/insights/results-is-not-learning"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Results Is Not Learning
              </Link>{' '}
              already refuses to treat results as learning. Results, in that essay, is the
              attributed, measured change in plant capacity, risk, cost, or production the firm can
              show followed from completed work under a named measurement window — consequence under
              the honesty and verification boundary, not the WO close, shipped-change ticket, or
              single verified plant check alone. Learning, in that essay, is an updated decision
              rule, model, or operating practice the firm adopts because a verified result changed
              what it will do next under a named decision window — tempered belief that changes
              future allocation, not a dashboard tile, a learning_events row, a retrospective note,
              or a results number sitting unread. That refusal stops at the adopted rule. It does not
              ask whether a named decision owner made the situated call under incomplete information
              that commits plant work, capital, or risk now. Results is not learning is a different
              refusal. Learning is not judgment is the next refusal. A met learning note, a met
              results note, a met execution note, a met strategy note, a met optionality note, a met
              flexibility note, a met liquidity window, a solvent structure, a survived horizon, a
              runway number, a spendable cash balance, an annualized contract, a unit remainder, and
              a profit figure can all sit beside a learning note and still leave judgment unshown.
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
              . This essay is why learning cannot be read as judgment. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold a learning note, a judgment/decision support note, or an evidence note
              that someone else stated, when the source of that note is named. The{' '}
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
              notes. That chapter name is the step in the order. It is not, by the step name, this
              essay definition of learning, and it is not this essay definition of judgment. None of
              those steps shows judgment. None of them treats learning as judgment. None of them
              measures learning for the customer. None of them measures judgment for the customer.
              None of them attributes cash, risk, or capacity. None of them makes the situated call
              for the customer.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              An adopted rule is not the call that commits work now
            </h2>

            <p>
              <Link
                href="/insights/results-is-not-learning"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Results Is Not Learning
              </Link>{' '}
              sits one step earlier. Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from completed work under a named measurement window — consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone. Learning, there,
              is tempered belief that changes future allocation. A firm with results can still lack
              learning. A firm with learning can still lack results. This essay starts after that
              split has been kept. Results is not learning. The next refusal is that learning is not
              judgment. The updated rule can be adopted under the named decision window, and the
              situated call under a named decision owner and window can still be absent. That call
              can be on a record, and the updated decision rule, model, or operating practice can
              still be absent. Results is not learning is a different refusal. This essay does not
              rewrite Results Is Not Learning.
            </p>

            <p>
              <Link
                href="/insights/execution-is-not-results"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Execution Is Not Results
              </Link>{' '}
              sits one step before that. Execution is work actually completed inside the named
              decision window with evidence of done outcomes (closed work, shipped change, verified
              plant result) — realized performance against the committed path, not the strategy note,
              roadmap slide, or allocated budget envelope alone. Results is consequence under the
              honesty and verification boundary. The execution is not results. The results are not
              learning. The learning is not judgment. Completed work inside the named decision window
              is not the situated call that commits plant work, capital, or risk now.
            </p>

            <p>
              <Link
                href="/insights/strategy-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Strategy Is Not Execution
              </Link>{' '}
              sits one step before that. Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute — a committed path and resource allocation, not proof the work was completed inside that window. Execution is realized performance against
              that path. The strategy is not execution. The execution is not results. The results are
              not learning. The learning is not judgment. A committed path is not the situated call
              under incomplete information. The accountable owner inside the strategy definition is
              not, by that naming, the named decision owner of this essay definition of judgment.
            </p>

            <p>
              <Link
                href="/insights/optionality-is-not-strategy"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Optionality Is Not Strategy
              </Link>{' '}
              sits one step before that. Optionality is whether unused rights, capacity lines,
              budget envelopes, or contractual choices exist on paper (or in a plan) that could be
              exercised in some future state — theoretical choice inventory, not proof those choices
              are executable inside a named decision window (lead times, skills, covenants, plant
              continuity, and cash may still block exercise). Strategy is a committed path, not a
              menu of unused rights. The optionality is not strategy. The strategy is not execution.
              The execution is not results. The results are not learning. The learning is not
              judgment. Unused rights on paper are not an accountable choice with consequence.
            </p>

            <p>
              <Link
                href="/insights/flexibility-is-not-optionality"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Flexibility Is Not Optionality
              </Link>{' '}
              sits one step before that. Flexibility is whether the firm can reallocate capital,
              capacity, staffing, vendor mix, or plant priorities inside a named decision window
              without breaking obligations, covenants, or continuity — the ability to choose and
              change course, not merely to pay what is already due. Optionality is theoretical choice
              inventory. The flexibility is not optionality. The optionality is not strategy. The
              strategy is not execution. The execution is not results. The results are not learning.
              The learning is not judgment. The ability to change course is not the call that commits
              plant work, capital, or risk now.
            </p>

            <p>
              <Link
                href="/insights/liquidity-is-not-flexibility"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Liquidity Is Not Flexibility
              </Link>{' '}
              sits one step before that. Liquidity is whether cash and near-cash can meet obligations
              as they come due in the near term (payroll, vendors, debt service windows) without
              forced asset sales or covenant breaches. Flexibility is whether the firm can reallocate
              inside a named decision window. The liquidity is not flexibility. The flexibility is
              not optionality. The optionality is not strategy. The strategy is not execution. The
              execution is not results. The results are not learning. The learning is not judgment.
              Cash and near-cash that meet the near-term windows are not judgment.
            </p>

            <p>
              <Link
                href="/insights/solvency-is-not-liquidity"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Solvency Is Not Liquidity
              </Link>{' '}
              sits one step before that. Solvency is whether assets and claims structure can cover
              liabilities and pay debts as they come due over a structural horizon — balance-sheet
              and claim quality, not near-term cash timing alone. Liquidity is whether cash and
              near-cash can meet the near-term windows. The solvency is not liquidity. The liquidity
              is not flexibility. The flexibility is not optionality. The optionality is not
              strategy. The strategy is not execution. The execution is not results. The results are
              not learning. The learning is not judgment. Balance-sheet and claim quality over a
              structural horizon is not judgment.
            </p>

            <p>
              <Link
                href="/insights/survival-is-not-solvency"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Survival Is Not Solvency
              </Link>{' '}
              sits one step before that. Survival is whether the business can keep meeting
              obligations (payroll, vendors, debt service, plant continuity) through the next
              decision horizon. Solvency is whether assets and claims structure can cover liabilities
              and pay debts as they come due over a structural horizon. The survival is not solvency.
              The solvency is not liquidity. The liquidity is not flexibility. The flexibility is not
              optionality. The optionality is not strategy. The strategy is not execution. The
              execution is not results. The results are not learning. The learning is not judgment.
              Obligation continuity through the next decision horizon is not judgment. That horizon
              is a different object from the named decision window under which learning asks whether
              the firm adopted what it will do next, and from the named decision owner and window
              under which judgment asks whether the call commits plant work, capital, or risk now.
            </p>

            <p>
              <Link
                href="/insights/runway-is-not-survival"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Runway Is Not Survival
              </Link>{' '}
              sits one step before that. Runway is how long operations can continue at the current
              net burn before cash is exhausted: cash divided by burn rate, with explicit
              assumptions. Survival is whether obligations can be met through the next decision
              horizon — not just whether a runway number is positive. The runway is not survival. The
              survival is not solvency. The solvency is not liquidity. The liquidity is not
              flexibility. The flexibility is not optionality. The optionality is not strategy. The
              strategy is not execution. The execution is not results. The results are not learning.
              The learning is not judgment. A duration at the current net burn is not the situated
              call.
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
              solvency. The solvency is not liquidity. The liquidity is not flexibility. The
              flexibility is not optionality. The optionality is not strategy. The strategy is not
              execution. The execution is not results. The results are not learning. The learning is
              not judgment. Money received that can be spent now is not judgment. Cash is not runway
              is a different refusal from this one.
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
              cash. The cash is not runway. The runway is not survival. The survival is not solvency.
              The solvency is not liquidity. The liquidity is not flexibility. The flexibility is not
              optionality. The optionality is not strategy. The strategy is not execution. The
              execution is not results. The results are not learning. The learning is not judgment.
              An annualized contract is not judgment.
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
              flexibility. The flexibility is not optionality. The optionality is not strategy. The
              strategy is not execution. The execution is not results. The results are not learning.
              The learning is not judgment. A period booking is not the situated call under a named
              decision owner and window.
            </p>

            <p>
              <Link
                href="/insights/impact-is-not-revenue"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Impact Is Not Revenue
              </Link>{' '}
              sits one step before that. Business impact is attribution that a named decision changed
              cash, risk, or capacity. Impact is not revenue. The revenue is not ARR. The ARR is not
              cash. The cash is not runway. The runway is not survival. The survival is not solvency.
              The solvency is not liquidity. The liquidity is not flexibility. The flexibility is not
              optionality. The optionality is not strategy. The strategy is not execution. The
              execution is not results. The results are not learning. The learning is not judgment.
              An attributed change in cash, risk, or capacity is not, by that claim, the situated
              call that commits plant work, capital, or risk now. Impact is not revenue is a
              different refusal. This essay does not rewrite that one, and it does not treat an
              impact claim as judgment.
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
              outcome is not the impact. Outcome is not impact. The impact is not the revenue. The
              revenue is not ARR. The ARR is not cash. The cash is not runway. The runway is not
              survival. The survival is not solvency. The solvency is not liquidity. The liquidity is
              not flexibility. The flexibility is not optionality. The optionality is not strategy.
              The strategy is not execution. The execution is not results. The results are not
              learning. The learning is not judgment. This essay does not rewrite Outcome Is Not
              Impact. A measured outcome is not judgment. A single verified plant check can be that
              kind of observation. It is still not the situated call under the named decision owner
              and window.
            </p>

            <p>
              <Link
                href="/insights/value-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Value Is Not Outcome
              </Link>{' '}
              keeps a reported outcome off the verified operational outcome the Decision Case was
              opened to change. A reported outcome, including a favorable KPI move, is not that value
              unless it is the verified change the case named and authorized. The value is not the
              outcome. The outcome is not the impact. The impact is not the revenue. The revenue is
              not ARR. The ARR is not cash. The cash is not runway. The runway is not survival. The
              survival is not solvency. The solvency is not liquidity. The liquidity is not
              flexibility. The flexibility is not optionality. The optionality is not strategy. The
              strategy is not execution. The execution is not results. The results are not learning.
              The learning is not judgment. This essay does not rewrite Value Is Not Outcome. Value
              is not judgment. A verified change the case named is not, by that naming, the situated
              call that commits plant work, capital, or risk now.
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
              solvency, solvency is not liquidity, liquidity is not flexibility, flexibility is not
              optionality, optionality is not strategy, strategy is not execution, execution is not
              results, results are not learning, and learning is not judgment. A profit figure beside
              a learning note still does not state the situated call under a named decision owner and
              window.
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
              does not reach that claim, and it does not treat contribution margin as judgment. Cash
              is not margin. Cash is not runway. Runway is not survival. Survival is not solvency.
              Solvency is not liquidity. Liquidity is not flexibility. Flexibility is not
              optionality. Optionality is not strategy. Strategy is not execution. Execution is not
              results. Results is not learning. Learning is not judgment. A positive unit remainder
              beside a learning note still does not show judgment.
            </p>

            <p>
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>{' '}
              sits further back in the operating loop. Accountability is the continuing named
              ownership of results, exceptions, and learning after the plant move. That word results,
              in that essay, is ownership after the plant move. That word learning, in that essay, is
              ownership of what follows the move. Learning, in this essay, is an updated decision
              rule, model, or operating practice the firm adopts because a verified result changed
              what it will do next under a named decision window. Judgment, in this essay, is the
              situated call under incomplete information that commits plant work, capital, or risk
              now under a named decision owner and window. The words are not the same objects.
              Closure is the verified outcome recorded against that ownership: a measured result, not
              named intent. A named accountable human can own the later record, and judgment in this
              essay can still be unshown. A learning note does not show it. An adopted rule sitting
              unused does not show it.
            </p>

            <p>
              Learning has a different object than judgment. Learning is an updated decision rule,
              model, or operating practice the firm adopts because a verified result changed what it
              will do next under a named decision window — tempered belief that changes future
              allocation, not a dashboard tile, a learning_events row, a retrospective note, or a
              results number sitting unread. Judgment is the situated call under incomplete
              information that commits plant work, capital, or risk now under a named decision owner
              and window — accountable choice with consequence, not an adopted rule sitting unused, a
              recommendation tile, a scored suggestion, or a learning note alone. A sentence that
              only states learning does not say the named decision owner made the call. A sentence
              that only states judgment does not, by the call alone, say the firm adopted the updated
              rule under the named decision window. The learning note can hold. The firm can still
              lack judgment. The judgment note can hold because the situated call was stated under a
              named decision owner and window. The firm can still lack learning, because that call is
              not, by itself, tempered belief that changes future allocation. A learning note alone
              proves neither the tempered belief as judgment nor the situated call as learning. A
              judgment note alone proves neither.
            </p>

            <p>
              <Link
                href="/insights/authorization-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorization Is Not Accountability
              </Link>{' '}
              sits further back. A named human decision that accepts consequence and routes intent to
              authorized execution systems answers who may start. That act is not accountability for
              the outcome after the work runs, not learning in the sense this essay names, and not
              judgment. An authorized state can sit beside a learning note while the situated call
              under the named decision owner and window is still unmade. This essay does not rewrite
              Authorization Is Not Accountability. Recommend is not authorize. A recommendation that
              cites the learning note does not accept the consequence, and it does not show judgment.
              A recommendation tile is not the call.
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
              money received. Revenue recognized, in that essay, is the earning event recorded on the
              books. A WO close in this essay is not the adopted rule, and it is not judgment.{' '}
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
              Liquidity is still not flexibility. Flexibility is still not optionality. Optionality
              is still not strategy. Strategy is still not execution. Execution is still not results.
              Results is still not learning. Learning is still not judgment. Margin is not profit.
              Profit is not value. A shutdown can collect cash, show a margin, print a profit, store
              a measured outcome, carry an impact claim, recognize a sale, hold an ARR figure, state
              a runway, meet obligations through the next decision horizon, state that assets and
              claims cover liabilities, meet the near-term windows, reallocate inside a named
              decision window, hold unused rights on paper, name a committed path, close work inside
              the named decision window, show an attributed measured change under a named measurement
              window, and adopt an updated decision rule under a named decision window — and the
              learning note can still fail to show the situated call that commits plant work,
              capital, or risk now under a named decision owner and window. None of those earlier
              records turns the learning note into judgment.
            </p>

            <p>
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              is a different essay, a different title, and a different refusal. This essay does not
              rewrite Action Is Not Execution. That essay keeps the write off the case. The Action
              chapter records intent. ACTION remains a locked disposition until authorized execution
              systems write the work order or isolate the equipment. Execution, in that essay, names
              that write. Execution, in Execution Is Not Results, names work actually completed
              inside the named decision window with evidence of done outcomes. Learning, in this
              essay, names the updated rule the firm adopts for what it will do next. Judgment, in
              this essay, names the situated call that commits plant work, capital, or risk now.
              Those objects stay apart. A learning note does not unlock that write. A judgment note
              does not unlock that write. Neither shows judgment as plant work. Neither measures
              learning. Neither measures judgment. Neither attributes cash, risk, or capacity to the
              decision. Sync does not write the work order. Sync does not clear equipment to run.
              Sync does not mark the case plant-execute. Sync does not book revenue. Sync does not
              recognize revenue. Sync does not measure ARR. Sync does not measure cash. Sync does not
              measure runway. Sync does not measure survival. Sync does not measure solvency. Sync
              does not measure liquidity. Sync does not measure flexibility. Sync does not measure
              optionality. Sync does not measure strategy. Sync does not measure execution. Sync does
              not measure results. Sync does not measure learning. Sync does not measure judgment.
              Sync does not collect cash. Direct plant execute stays off.
            </p>

            <p className="text-xl font-semibold text-white">
              Learning answers whether the firm adopts an updated decision rule, model, or operating
              practice because a verified result changed what it will do next under a named decision
              window. It does not record the situated call under incomplete information that commits
              plant work, capital, or risk now under a named decision owner and window.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Judgment is the situated call under incomplete information
            </h2>

            <p>
              Judgment is not a property of the learning note. Judgment is the situated call under
              incomplete information that commits plant work, capital, or risk now under a named
              decision owner and window — accountable choice with consequence, not an adopted rule
              sitting unused, a recommendation tile, a scored suggestion, or a learning note alone.
              The call, in this essay, is that commitment now, by that named owner, inside that
              window, while the information is still incomplete. It is not the updated rule by
              itself. It is not the attributed change. It is not the completed work. It is not the
              committed path. It is not theoretical choice inventory. It is not the ability to
              reallocate inside the flexibility window. It is not the liquidity window, which is the
              near-term period in which payroll, vendors, and debt service come due. It is not the
              next decision horizon survival names, and it is not the structural horizon solvency
              names. The named decision owner and window for judgment are not the named decision
              window for learning, and they are not the named measurement window for results. The
              phrase incomplete information inside the judgment definition is the condition of the
              call. It is not, by that phrase, a license to skip the adopted rule, and it is not a
              learning note. The firm still has to adopt the updated rule under the named decision
              window before learning is on the record, and still has to make the situated call under
              the named decision owner and window before judgment is on the record. An adopted rule
              sitting unused is not the call. A recommendation tile is not the call. A scored
              suggestion is not the call. A learning note alone is not the call. A dashboard tile is
              not the call. A learning_events row is not the call. A retrospective note is not the
              call. A results number sitting unread is not the call. A learning note that names the
              adopted rule and does not show the situated call is learning. It is not that judgment.
              A judgment note that names only the call, without the updated rule adopted under the
              named decision window, is not this essay definition of learning. A paper close is not
              the accountable choice. This essay does not paint a paper record as a green.
            </p>

            <p>
              This essay states no cash amount, no near-cash amount, no asset value, no liability
              total, no ratio, no burn rate, no runway length, no survival length, no solvency
              length, no liquidity length, no flexibility length, no optionality length, no strategy
              length, no execution length, no results length, no learning length, and no judgment
              length. It states no lead time, no headcount, no closed-work count, no capacity figure,
              no risk figure, no cost figure, no production figure, and no measurement score. Stating
              that an updated rule was adopted under the named decision window does not show the
              situated call. Stating that a learning note is positive does not show judgment. Stating
              that an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a
              learning note alone exists does not show the call that commits plant work, capital, or
              risk now. The judgment question is whether a named decision owner makes that call under
              incomplete information inside the named window. That question does not prove the
              updated rule was adopted, and a learning note alone proves neither the accountable
              choice nor the tempered belief as the other claim. A learning note is not a green. A
              judgment note is not a green. An adopted rule sitting unused is not a green. A
              recommendation tile is not a green. A scored suggestion is not a green. A dashboard
              tile is not a green. A learning_events row is not a green. A retrospective note is not
              a green. A results number sitting unread is not a green. A WO close is not a green. A
              shipped-change ticket is not a green. A single verified plant check is not a green.
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
              notes. That check is the measured result of the case. It is not, by itself, learning in
              the sense this essay names, and it is not, by itself, judgment. A recorded outcome
              without the situated call under a named decision owner and window leaves judgment
              unshown. A learning note without that call leaves judgment unshown. A learning note
              used as judgment leaves the accountable choice unshown. This essay does not rewrite
              Verification Is Not Optional.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning, in that essay, inherits
              achieved, not_achieved, or inconclusive, with measured notes. It does not inherit a
              learning note in place of that outcome, and it does not inherit a judgment note in
              place of that outcome. That inheritance rule is a different refusal. This essay does
              not rewrite Learning Requires a Verified Outcome. Learning, in this essay, is an
              updated decision rule, model, or operating practice the firm adopts because a verified
              result changed what it will do next under a named decision window. Judgment, in this
              essay, is the situated call. A later shutdown that cites last time as if the learning
              note were already that call is citing tempered belief as a claim about an accountable
              choice. Sync must not auto-close, auto-authorize, or treat learning as judgment as
              Learning credit.
            </p>

            <p>
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              keeps a verified stamp off standing confidence. A verified work package, inspection, or
              AI recommendation closes a claim about the past. Assurance is the standing claim that
              comes after. Learning, in this essay, is tempered belief that changes future allocation,
              not a retrospective note. Judgment is an accountable choice with consequence, not a
              scored suggestion. Neither is a claim that the asset stays known-good, and neither is
              produced by storing achieved. A verified outcome can be not_achieved or inconclusive.
              Those results, in the verification sense, still close the claim about what was
              observed. They are not this essay definition of learning, and they are not this essay
              definition of judgment. This essay does not rewrite Verified Is Not Assured.
            </p>

            <p>
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              is a different essay, a different title, and a different refusal. An alert can surface
              that something crossed a rule. Seeing, acknowledging, or silencing that signal is not a
              Decision Case and not a decision in that essay. Judgment, in this essay, is the
              situated call under incomplete information that commits plant work, capital, or risk
              now under a named decision owner and window. An alert is not that call. A learning note
              beside an alert is not that call. This essay does not rewrite Alert Is Not Decision,
              and that essay does not rewrite this one.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              is the same refusal one step earlier in the evidence. Two records that move together
              are not a cause. A judgment note that moved in the same period as a learning note is
              not, by that movement, proof that an adopted rule is judgment, and it is not proof that
              the situated call was made because that rule was adopted. The coincidence can inform a
              recommendation to investigate. It is not judgment, and it is not proof the learning
              note showed the call.
            </p>

            <p className="text-xl font-semibold text-white">
              Learning is not judgment. Learning is an updated decision rule, model, or operating
              practice the firm adopts because a verified result changed what it will do next under a
              named decision window — tempered belief that changes future allocation, not a dashboard
              tile, a learning_events row, a retrospective note, or a results number sitting unread.
              Judgment is the situated call under incomplete information that commits plant work,
              capital, or risk now under a named decision owner and window — accountable choice with
              consequence, not an adopted rule sitting unused, a recommendation tile, a scored
              suggestion, or a learning note alone.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A firm with learning can still lack judgment, and a firm with judgment can still lack
              learning
            </h2>

            <p>
              The failure mode is ordinary after a learning note is on the books. Learning is
              recorded, and the record is read as judgment. A firm with learning can still lack
              judgment when the updated decision rule, model, or operating practice the firm adopts
              because a verified result changed what it will do next under a named decision window is
              on the record, and the firm has not made the situated call under incomplete information
              that commits plant work, capital, or risk now under a named decision owner and window.
              Learning, in this essay, means that adopted rule is there. Lack judgment means the call
              under the named decision owner and window is not there. The learning note does not make
              the call. An adopted rule sitting unused does not commit plant work, capital, or risk
              now. A recommendation tile does not name the decision owner. A scored suggestion does
              not accept the consequence. A learning note alone does not change what is committed
              now. The adopted rule does not answer whether the call was made. The learning note does
              not answer that. A learning note alone proves none of it. A rule that was adopted and
              never tied to that call is not judgment. A tile that names the rule and does not show
              the call is not judgment. This essay does not paint either absence as a green.
            </p>

            <p>
              The opposite case is just as ordinary. A firm with judgment can still lack learning.
              Judgment means the situated call under incomplete information that commits plant work,
              capital, or risk now under a named decision owner and window — accountable choice with
              consequence, not an adopted rule sitting unused, a recommendation tile, a scored
              suggestion, or a learning note alone. Lack learning means the firm has not adopted an
              updated decision rule, model, or operating practice because a verified result changed
              what it will do next under a named decision window. A call can be on a record while
              that updated rule is absent, which means the call has not been shown as following from
              learning this essay names. The other direction holds as well. A firm that holds the
              updated rule can still have no situated call under the named decision owner and window.
              Learning did not, by itself, make the accountable choice exist. Judgment did not, by
              itself, make the tempered belief exist. Neither case is proved by a learning note. This
              is not the results note. Results is the attributed, measured change in plant capacity,
              risk, cost, or production the firm can show followed from completed work under a named
              measurement window. That consequence claim is a different refusal, already stated in
              Results Is Not Learning. This essay states no savings figure, and it does not turn a
              learning note or a situated call into one. It does not turn an adopted rule into a
              green. It does not turn a judgment note into a green.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              already refuses to treat a KPI, a leading indicator, a model score, a green tile, or a
              closed work-order count as the verified operational outcome. A learning note is a claim
              about an updated decision rule under a named decision window, not that outcome, and not
              judgment. A note that only says the rule was adopted is a proxy for judgment when the
              situated call under a named decision owner and window is not the record. It is not the
              accountable choice. An adopted rule sitting unused is a proxy. A recommendation tile is
              a proxy. A scored suggestion is a proxy. A learning note alone is a proxy when it is
              being used as the call. This essay does not rewrite Proxy Is Not Outcome. A proxy is
              not the outcome. A measured outcome is not the impact. An impact claim is not
              recognized sales. A recognized sale is not ARR. ARR is not cash. Cash is not runway.
              Runway is not survival. Survival is not solvency. Solvency is not liquidity. Liquidity
              is not flexibility. Flexibility is not optionality. Optionality is not strategy.
              Strategy is not execution. Execution is not results. Results is not learning. Learning
              is not judgment.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A judgment note painted beside that tile is not a stronger green.
              A learning note is not a green. A judgment note is not a green. An adopted rule sitting
              unused is not a green. A recommendation tile is not a green. A scored suggestion is not
              a green. A dashboard tile is not a green. A learning_events row is not a green. A
              retrospective note is not a green. A results number sitting unread is not a green. It
              is a display of a number, or it is only a note. Go still required a named human
              decision. The result after the plant move still requires a verified outcome. Learning
              still requires the updated decision rule, model, or operating practice the firm adopts
              because a verified result changed what it will do next under a named decision window,
              and still does not prove the situated call. Judgment still requires the situated call
              under incomplete information that commits plant work, capital, or risk now under a
              named decision owner and window. The color supplies none of them. A paper green
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
              under the criteria someone chose. It is not named observation, not learning from a
              results note, and not judgment.{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps a clearance stamp off a finished claim. A cleared flag is not proof the work is
              finished, and it is not proof that a learning note is judgment.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps the proposal off the decision. A recommendation may say investigate because the
              adopted rule is shown and judgment is unshown, because no situated call sits under the
              named decision owner and window, because an adopted rule sitting unused, a
              recommendation tile, a scored suggestion, or a learning note alone is being read as the
              accountable choice, or because a call still leaves the updated rule off the record.
              That proposal does not authorize the work, and it does not show judgment. Recommend is
              not authorize. This essay does not rewrite Recommend Is Not Authorize. A recommendation
              essay is a different title and a different refusal from learning is not judgment.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling learning judgment
              crosses that boundary. Treating an adopted rule as judgment while no situated call
              under a named decision owner and window commits plant work, capital, or risk now is the
              same confusion. Treating a situated call as learning, while no updated decision rule,
              model, or operating practice was adopted under a named decision window, is the same
              confusion. Treating a recommendation tile as a green is the same confusion. Treating a
              judgment note as a green is the same confusion. A learning note does not repair any of
              those misses. Sync refuses false precision. Sync refuses when evidence is insufficient.
              Sync does not measure judgment. Sync does not measure judgment for the customer. Sync
              does not measure learning. Sync does not measure learning for the customer. Sync does
              not measure results. Sync does not measure results for the customer. Sync does not
              measure execution. Sync does not measure execution for the customer. Sync does not
              measure strategy. Sync does not measure strategy for the customer. Sync does not
              measure optionality. Sync does not measure optionality for the customer. Sync does not
              measure flexibility. Sync does not measure flexibility for the customer. Sync does not
              measure liquidity. Sync does not measure liquidity for the customer. Sync does not
              measure solvency. Sync does not measure solvency for the customer. Sync does not
              measure survival. Sync does not measure survival for the customer. Sync does not
              measure runway. Sync does not measure runway for the customer. Sync does not measure
              cash. Sync does not measure cash for the customer. Sync does not collect cash. Sync
              does not book revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync
              does not measure ARR for the customer.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating learning as judgment records an adopted rule as a claim about a situated call.
              A firm with learning can still lack judgment when that adopted rule is not the situated
              call under incomplete information that commits plant work, capital, or risk now under a
              named decision owner and window. A firm with judgment can still lack learning when that
              call is not an updated decision rule, model, or operating practice the firm adopts
              under a named decision window. A learning note alone proves neither. A judgment note
              alone proves neither.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a learning note or a judgment note is still a read
            </h2>

            <p>
              Sync may surface a learning note or a judgment/decision support note beside Evidence,
              Verification, and the closed outcome. Surfacing is still a read. The screen can show
              achieved, not_achieved, or inconclusive next to the criteria the case holds, next to a
              learning note someone recorded elsewhere, and next to a judgment/decision support note
              that a call was stated. Showing the note does not write a CMMS work order. Showing the
              note does not clear equipment to run. Showing the note does not treat the case as plant
              execute. Showing the note does not book revenue. Showing the note does not recognize
              revenue. Showing the note does not measure ARR. Showing the note does not measure ARR
              for the customer. Showing the note does not measure cash. Showing the note does not
              measure cash for the customer. Showing the note does not measure runway. Showing the
              note does not measure runway for the customer. Showing the note does not measure
              survival. Showing the note does not measure survival for the customer. Showing the note
              does not measure solvency. Showing the note does not measure solvency for the customer.
              Showing the note does not measure liquidity. Showing the note does not measure
              liquidity for the customer. Showing the note does not measure flexibility. Showing the
              note does not measure flexibility for the customer. Showing the note does not measure
              optionality. Showing the note does not measure optionality for the customer. Showing
              the note does not measure strategy. Showing the note does not measure strategy for the
              customer. Showing the note does not measure execution. Showing the note does not
              measure execution for the customer. Showing the note does not measure results. Showing
              the note does not measure results for the customer. Showing the note does not measure
              learning. Showing the note does not measure learning for the customer. Showing the note
              does not measure judgment. Showing the note does not measure judgment for the customer.
              Showing the note does not collect cash. Showing the note does not attribute a change in
              cash, risk, or capacity. Showing the note does not make the situated call for the
              customer. A read of a learning note is still a read. An adopted rule, without the call
              under the named decision owner and window, leaves judgment unshown. Direct plant
              execute stays off.
            </p>

            <p>
              Evidence from the plant beats the learning note when the note is being used as
              judgment. If the evidence on the case does not support the named observation, the case
              refuses. If the evidence records a learning note and does not record the situated call
              under incomplete information that commits plant work, capital, or risk now under a
              named decision owner and window, the case may store the note as learning and must not
              store the note as judgment. If the evidence records a firm with learning that lacks
              judgment because the call was not made, the case may cite that record and must not
              store the learning note as judgment. If the evidence records a situated call that still
              lacks learning because no updated decision rule, model, or operating practice sits
              under the named decision window, the case may cite that record and must not treat the
              call as proof the rule was adopted. If the evidence records an adopted rule sitting
              unused, a recommendation tile, a scored suggestion, or a learning note alone while the
              call is absent, the case may cite that record and must not treat the unused rule, the
              tile, the suggestion, or the note as judgment. The label does not fill the gap, and it
              does not close it. The adopted rule does not paint a green. The judgment note does not
              paint a green.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. A live connector tag pull is not a
              claim of this edition. Simulated or seeded telemetry and assets are practice records.
              A practice record that says learning is judgment is not a customer plant release, and it
              is not shown judgment.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What the Decision Case may store</h2>

            <p>
              Evidence may cite a learning note when the source of that note is named, and when the
              citation says it is an updated decision rule, model, or operating practice the firm
              adopts because a verified result changed what it will do next under a named decision
              window — tempered belief that changes future allocation, not a dashboard tile, a
              learning_events row, a retrospective note, or a results number sitting unread — rather
              than a measurement Sync performed, and rather than judgment. Evidence may cite a
              judgment/decision support note when the source is named and the citation says it is the
              situated call under incomplete information that commits plant work, capital, or risk
              now under a named decision owner and window — accountable choice with consequence, not
              an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a
              learning note alone. Those citations are records of statements someone else made. They
              are not records that Sync measured learning for the customer. They are not records that
              Sync measured judgment for the customer. They are not records that the learning note is
              judgment. A recommendation may say investigate because the adopted rule is shown and
              the call is unshown, because the note is only an adopted rule sitting unused, a
              recommendation tile, a scored suggestion, or a learning note alone, or because a call
              still leaves the updated rule unshown. The proposal does not show judgment. Recommend
              is not authorize.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              judgment, and named intent is not learning in the sense this essay names. A learning
              label does not perform the write and does not turn the adopted rule into judgment. A
              judgment label does not perform the write and does not turn the situated call into the
              adopted rule. Authorized execution systems write the work order or the isolation. That
              write is the object{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps off the case. It is not this essay definition of judgment, and this essay does
              not replace that one. Sync does not write the work order. Sync does not mark an asset
              closed. Sync does not write that state back. CMMS write-back is not a live product
              path. Billing write-back is not a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The check
              is named observation against named criteria, stored as achieved, not_achieved, or
              inconclusive, with measured notes. That record is the outcome the case is allowed to
              close when the criteria named an operational result. It does not, by itself, turn the
              outcome into learning, and it does not turn learning into judgment. A named human
              decides. A named human remains accountable after the plant move. Judgment stays unshown
              until the situated call is a separate record under a named decision owner and window.
              Learning stays an updated decision rule, model, or operating practice the firm adopts
              because a verified result changed what it will do next under a named decision window
              even when someone calls the note judgment. This essay does not supply either record as
              the other. Sync does not attribute a change in cash, risk, or capacity. Sync does not
              book revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync does not
              measure cash. Sync does not measure runway. Sync does not measure survival. Sync does
              not measure solvency. Sync does not measure liquidity. Sync does not measure
              flexibility. Sync does not measure optionality. Sync does not measure strategy. Sync
              does not measure execution. Sync does not measure results. Sync does not measure
              learning. Sync does not measure judgment. Sync does not collect cash.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a learning note or a judgment/decision support note beside Evidence,
              Verification, and the closed outcome. Surfacing is still a read. Sync refuses false
              precision. Sync refuses when evidence is insufficient. A named human decides. A named
              human remains accountable after the plant move. Learning stays an updated decision
              rule, model, or operating practice the firm adopts because a verified result changed
              what it will do next under a named decision window — tempered belief that changes
              future allocation, not a dashboard tile, a learning_events row, a retrospective note,
              or a results number sitting unread. Judgment stays the situated call under incomplete
              information that commits plant work, capital, or risk now under a named decision owner
              and window — accountable choice with consequence, not an adopted rule sitting unused, a
              recommendation tile, a scored suggestion, or a learning note alone. A firm that has
              adopted that rule and has not made the call leaves judgment unmet. A firm whose call is
              not that adopted rule leaves the learning question unproved by the judgment note and
              the judgment question unproved by the learning note.
            </p>

            <p>
              The Learning step keeps the closed case: achieved, not_achieved, or inconclusive, with
              measured notes. It does not keep learning as judgment. A later question that cites a
              learning note as if judgment were already shown is citing an adopted rule. A later
              question that cites an adopted rule sitting unused, a recommendation tile, a scored
              suggestion, or a learning note alone while no situated call sits under the named
              decision owner and window is citing a note that is not judgment. A later question that
              cites judgment as if the updated rule were already under the named decision window,
              while that record is absent, is citing a call that did not prove learning. A learning
              note alone proves none of those later questions. Sync must not auto-close,
              auto-authorize, or treat learning as judgment as Learning credit. This essay does not
              rewrite Learning Requires a Verified Outcome. That essay keeps the inheritance of the
              verified outcome. This essay keeps the situated call off the learning note.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Where the public statement lives</h2>

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
              directly. Evidence may hold the learning note, the judgment/decision support note, or
              the measured result that was shown. Human decision may hold who accepted the
              consequence. Action may hold the intent that decision routed. Verification may hold the
              named observation. Learning may hold achieved, not_achieved, or inconclusive, with
              measured notes — the measured outcome of the case, not this essay definition of
              learning, and not learning used as judgment. None of those steps is learning used as
              judgment. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a learning note as the situated call under the named
              decision owner and window. Later editions can deepen a chapter. The spine stays in this
              order.
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

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What this article is not claiming</h2>

            <p>
              This is an essay about the Decision Case order, not a customer case study. It names no
              plant, states no savings figure, states no price, and claims no prevented failure. It
              states no OEM limit and no operating threshold. It states no cash amount, no near-cash
              amount, no asset value, no liability total, no ratio, no burn rate, no runway length,
              no survival length, no solvency length, no liquidity length, no flexibility length, no
              optionality length, no strategy length, no execution length, no results length, no
              learning length, and no judgment length. It does not claim that learning is judgment,
              writes a CMMS work order, clears equipment to run, books revenue, recognizes revenue,
              measures ARR, measures ARR for the customer, measures cash, measures cash for the
              customer, measures runway, measures runway for the customer, measures survival, measures
              survival for the customer, measures solvency, measures solvency for the customer,
              measures liquidity, measures liquidity for the customer, measures flexibility, measures
              flexibility for the customer, measures optionality, measures optionality for the
              customer, measures strategy, measures strategy for the customer, measures execution,
              measures execution for the customer, measures results, measures results for the
              customer, measures learning, measures learning for the customer, measures judgment,
              measures judgment for the customer, collects cash, or attributes a change in cash,
              risk, or capacity. It does not claim that Sync executes plant work. It does not claim
              CMMS write-back as a shipped product. It does not claim billing write-back as a shipped
              product. It does not invent a customer, a price, or a return. It does not invent a case
              number. It does not treat a learning note, a judgment note, a results note, an
              execution note, a strategy note, an optionality note, a flexibility note, a liquidity
              note, a solvency note, a survival note, a runway figure, a cash balance, contribution
              margin, invoices paid, profitable ARR, a profit figure, a WO close, a shipped-change
              ticket, a single verified plant check, a dashboard tile, a learning_events row, a
              retrospective note, a results number sitting unread, an adopted rule sitting unused, a
              recommendation tile, or a scored suggestion as the question. It does not treat an
              adopted rule as a green. It does not treat a judgment note as a green. Results is not
              learning is a different refusal. Execution is not results is a different refusal.
              Strategy is not execution is a different refusal. Optionality is not strategy is a
              different refusal. Flexibility is not optionality is a different refusal. Liquidity is
              not flexibility is a different refusal. Solvency is not liquidity is a different
              refusal. Survival is not solvency is a different refusal. Runway is not survival is a
              different refusal. Cash is not runway is a different refusal. Action is not execution
              is a different refusal. Outcome is not impact is a different refusal. Value is not
              outcome is a different refusal. Proxy is not outcome is a different refusal. Learning
              requires a verified outcome is a different refusal. Verification is not optional is a
              different refusal. Verified is not assured is a different refusal. Alert is not
              decision               is a different refusal. Authorization is not accountability is a different
              refusal. Recommend is not authorize is a different refusal. This essay does not rewrite Action Is Not Execution. This essay does not rewrite Outcome Is Not Impact. This essay does not rewrite Learning Requires a Verified Outcome. This essay does not rewrite Verification Is Not Optional. This essay does not rewrite Results Is Not Learning. This essay does not rewrite Authorization Is Not Accountability.
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
              describes that journey. Walking those steps is not a claim that learning is judgment.
              The verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, billing write-back,
              SMTP invite delivery, or automatic revocation of access on expiry as live. It does not
              describe Sync writing work orders, clearing equipment to run, marking a case
              plant-execute, starting equipment, releasing a hold, controlling the plant, booking
              revenue, recognizing revenue, measuring ARR, measuring cash, measuring runway,
              measuring survival, measuring solvency, measuring liquidity, measuring flexibility,
              measuring optionality, measuring strategy, measuring execution, measuring results,
              measuring learning, measuring judgment, or collecting cash. Simulated or seeded
              telemetry and assets are practice records. They are not live plant judgment.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              keeps a named person on the decision. The learning note does not accept, reject,
              escalate, or return. The judgment note does not either, when the note is only a
              judgment/decision support note on the screen. A specific Sync decision, in this essay,
              is a named human decision recorded on a Sync case. Sync did not make it. A named human
              decides. A named human remains accountable after the plant move.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/results-is-not-learning"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Results Is Not Learning
              </Link>{' '}
              on why an attributed measured change under a named measurement window is not the
              updated decision rule under a named decision window,{' '}
              <Link
                href="/insights/execution-is-not-results"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Execution Is Not Results
              </Link>{' '}
              on why work completed inside the named decision window is not that attributed change,{' '}
              <Link
                href="/insights/strategy-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Strategy Is Not Execution
              </Link>{' '}
              on why a committed path and resource allocation are not work completed inside the
              window,{' '}
              <Link
                href="/insights/optionality-is-not-strategy"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Optionality Is Not Strategy
              </Link>{' '}
              on why unused rights on paper are not a committed path,{' '}
              <Link
                href="/insights/flexibility-is-not-optionality"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Flexibility Is Not Optionality
              </Link>{' '}
              on why the ability to reallocate inside a named decision window is not unused rights on
              paper,{' '}
              <Link
                href="/insights/liquidity-is-not-flexibility"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Liquidity Is Not Flexibility
              </Link>{' '}
              on why cash and near-cash that meet the near-term windows are not the ability to
              reallocate inside a named decision window,{' '}
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
              on why a later case inherits the measured result and not a judgment claim in this essay
              sense,{' '}
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              on why a verified record is not standing assurance,{' '}
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
              on why the limit has to be stated,{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why recorded intent is not the write,{' '}
              <Link
                href="/insights/outcome-is-not-impact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Outcome Is Not Impact
              </Link>{' '}
              on why a measured outcome is not business impact,{' '}
              <Link
                href="/insights/value-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Value Is Not Outcome
              </Link>{' '}
              on why a reported outcome is not the verified change,{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              on why a KPI or a closed count is not the verified operational outcome,{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              on why a signal that something crossed a rule is not a decision,{' '}
              <Link
                href="/insights/authorization-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorization Is Not Accountability
              </Link>{' '}
              on why who may start is not ownership after the plant move, and{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              on why a judgment note that moved with a learning note is not a cause. A{' '}
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
              is a governed proof around one operating decision. The verification chapter records the
              measured result. The learning note does not record the judgment.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Learning is
                an updated decision rule, model, or operating practice the firm adopts because a
                verified result changed what it will do next under a named decision window — tempered
                belief that changes future allocation, not a dashboard tile, a learning_events row, a
                retrospective note, or a results number sitting unread. Judgment is the situated call
                under incomplete information that commits plant work, capital, or risk now under a
                named decision owner and window — accountable choice with consequence, not an adopted
                rule sitting unused, a recommendation tile, a scored suggestion, or a learning note
                alone. A firm with learning can still lack judgment. A firm with judgment can still
                lack learning. A learning note alone proves neither. The Reliability Engineer
                workspace is where a signed-in Decision Case is completed. A Reliability Assessment
                is the bounded review when the question is whether the records can support a
                conclusion. None of those is a claim that Sync executes plant work, books revenue,
                recognizes revenue, measures ARR, measures ARR for the customer, measures cash,
                measures cash for the customer, measures runway, measures runway for the customer,
                measures survival, measures survival for the customer, measures solvency, measures
                solvency for the customer, measures liquidity, measures liquidity for the customer,
                measures flexibility, measures flexibility for the customer, measures optionality,
                measures optionality for the customer, measures strategy, measures strategy for the
                customer, measures execution, measures execution for the customer, measures results,
                measures results for the customer, measures learning, measures learning for the
                customer, measures judgment, measures judgment for the customer, collects cash,
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
          <InsightNextSteps slug="learning-is-not-judgment" />
        </motion.article>
      </div>
    </main>
  );
}
