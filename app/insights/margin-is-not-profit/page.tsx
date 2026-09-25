'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('margin-is-not-profit');

export default function MarginIsNotProfitPage() {
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
              Margin Is Not Profit
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Contribution margin is what remains after the cost to serve. Unit economics is that
              remainder on a unit of work or a unit of recurring revenue. Gross margin after the
              cost to serve is the same family of claim. Bottom-line profit is what remains after
              the costs that remainder does not carry. Durable profitable revenue still compounds
              toward the portfolio northstar. The unit remainder is still not the profit.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Margin is not profit. Contribution margin is what remains of revenue after the cost
              to serve: the labor, the parts, the travel, the callback, and the other direct cost
              the work consumed. Unit economics is that remainder stated on a unit. Gross margin
              after the cost to serve is the same family of claim. Bottom-line profit is what
              remains after the costs the unit remainder does not carry. Profitable ARR, in this
              essay, is durable profitable revenue: recurring revenue that remains profitable after
              those costs and still compounds toward the portfolio northstar. A positive
              contribution margin is not bottom-line profit. It is not profitable ARR. Treating
              contribution margin, unit economics, or gross margin after the cost to serve as
              bottom-line profit or profitable ARR ships a unit remainder into a profit claim.
              Sync may surface a contribution margin or a unit-economics note beside Evidence,
              Verification, Proof, Authorization, Accountability, and Closure. Surfacing is still a read. A margin note without the costs above the unit leaves the profit unrecorded.
              Direct plant execute stays off. CMMS write-back is not a live product path. Billing
              write-back is not a live product path.
            </p>

            <p>
              A healthy unit margin looks like profit. The job covered its hours. The contract
              covered its parts. The recurring line covered the cost to serve. The board then
              treats the remainder as the economic result: the bottom line belongs to the unit, the
              profitable contract belongs to the unit, and the compounding revenue belongs to the
              unit. The remainder did none of that. It answered what was left after the direct cost
              the work consumed. It did not subtract the costs that sit above the unit. It did not
              compute bottom-line profit. It did not declare profitable ARR.
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
              . This essay is why contribution margin cannot be read as profit. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold the record that a unit remainder was named after the cost to serve.
              The{' '}
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
              notes. None of those steps computes bottom-line profit. None of them declares
              profitable ARR. None of them claims durable profitable revenue.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Contribution margin answers what remains after the cost to serve
            </h2>

            <p>
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              sits one step earlier. Cash collected is money received. Invoices paid means a named
              invoice was settled. Contribution margin is what remains of revenue after the cost to
              serve. That essay used profitable ARR for recurring revenue that still covers the
              cost to serve. That use kept a receipt from standing in for a contribution claim.
              This essay does not reuse that name for the same record. Here, profitable ARR is
              durable profitable revenue that compounds toward the portfolio northstar. Covering
              the cost to serve can be true. That coverage is contribution margin on recurring
              revenue. It is not this profitable ARR. The earlier essay refused to let cash stand
              in for the unit remainder. This essay refuses to let the unit remainder stand in for
              the profit.
            </p>

            <p>
              Three commercial phrases sit in the same sentence on the floor. Contribution margin
              is revenue minus the variable cost to serve. Unit economics is that remainder on a
              unit of work, a unit of contract, or a unit of recurring revenue. Gross margin after
              the cost to serve is the same family of claim: what remains of revenue after the
              direct cost the work consumed. This essay treats the three phrases as one record, the
              unit remainder. It does not adopt a customer chart of accounts. It does not compute a
              figure. The three phrases can be honest and still not be bottom-line profit. They can
              be honest and still not be durable profitable revenue.
            </p>

            <p>
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>{' '}
              keeps the operational close off the receipt. Closing a work order, a ticket, or a
              shift is not cash collected or revenue recognized. A contribution margin beside that
              close is not bottom-line profit. Naming the unit remainder does not subtract the
              costs that sit above the unit.
            </p>

            <p>
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>{' '}
              keeps the named owner off the measured result. A named human who remains responsible
              after the plant move is not loop closure. A margin note beside that owner is not
              bottom-line profit. Naming who owns the contract does not carry the overhead, the
              financing, or the period cost.
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
              A contribution margin on that completed order is a unit remainder. It is not the
              check, and it is not bottom-line profit. The order can be complete, the unit can
              cover the cost to serve, and the profit can still be unrecorded.
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
              that sentence is still an operating claim. Gross margin after the cost to serve is a
              later commercial record. Bottom-line profit is later still. A cleared asset, a
              finished work order, and a positive unit remainder can all be true while the profit
              is open.
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
              notes. That check is the measured result. It is not a profit calculation. Recording
              the check does not compute bottom-line profit and does not declare profitable ARR.
            </p>

            <p className="text-xl font-semibold text-white">
              Contribution margin is what remains after the cost to serve. Unit economics is that
              remainder on a unit. Gross margin after the cost to serve is the same family of
              claim. Bottom-line profit and durable profitable revenue are later records. The unit
              remainder produces neither.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Bottom-line profit names the costs the unit remainder does not carry
            </h2>

            <p>
              Bottom-line profit, in this essay, is what remains after the costs the unit remainder
              does not carry. Those costs sit above the job: overhead the unit does not absorb,
              allocated cost, financing, and the period cost that does not travel with the hours,
              the parts, or the callback. The essay names that split. It does not compute a figure.
              It does not adopt a customer profit-and-loss statement. It does not list a chart of
              accounts.
            </p>

            <p>
              Durable profitable revenue, in this essay, is recurring revenue that remains
              profitable after those costs and still compounds toward the portfolio northstar. The
              portfolio northstar is the commercial aim the unit remainder is often asked to stand
              in for. The essay names the aim. It does not set a target. It states no rate. It
              states no multiple. Booked recurring revenue, invoiced recurring revenue, collected
              recurring revenue, and contribution-positive recurring revenue are four different
              records. None of them is durable profitable revenue by the act of covering the cost
              to serve.
            </p>

            <p>
              The unit remainder has a narrower object than bottom-line profit. It answers what was
              left after the direct cost the work consumed. A sentence that only says the margin
              held does not say the overhead was inside the result, the financing was inside the
              result, or the period cost was inside the result. The contribution margin can be
              positive. The gross margin after the cost to serve can be positive. The bottom-line
              profit can still be open. The profitable ARR claim can still be open.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit contribution
              margin in place of that outcome, and it does not inherit a unit remainder as
              bottom-line profit or as profitable ARR. Sync must not auto-close, auto-authorize, or
              treat contribution margin as bottom-line profit, or as Learning credit.
            </p>

            <p>
              A service job can cover its hours, its parts, and its return visit and still leave
              the overhead, the idle time, and the cost of keeping the contract above the unit. A
              contract can show a positive unit remainder while financing and allocated cost sit
              above it. Recurring revenue can cover the cost to serve in the period that was
              measured and still not compound toward the portfolio northstar. None of those
              sentences is a customer result. Each is the ordinary split between a unit remainder
              and the profit the remainder does not record.
            </p>

            <p className="text-xl font-semibold text-white">
              Bottom-line profit is what remains after the costs the unit remainder does not carry.
              Durable profitable revenue is recurring revenue that remains profitable after those
              costs and still compounds toward the portfolio northstar. Contribution margin and
              unit economics produce neither.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Gross margin after the cost to serve is not durable profitable revenue
            </h2>

            <p>
              The failure mode is ordinary. The unit remainder is positive, and the room treats the
              profit as known. The contract is profitable. The ARR is healthy. The portfolio
              northstar is treated as met. Each of those is a separate record. The contribution margin does not
              subtract the overhead. The unit economics do not subtract the financing. The gross
              margin after the cost to serve does not subtract the period cost, and it does not
              show that the revenue compounds. The board looks settled because the margin word was
              allowed to stand in for the profit.
            </p>

            <p>
              Hours inside a positive contribution margin are not bottom-line profit. Parts inside
              a positive unit remainder are not profitable ARR. A gross margin after the cost to
              serve on a recurring contract is not proof the contract remains profitable after the
              costs above the unit, and it is not proof the revenue compounds toward the portfolio
              northstar. Those records can inform a recommendation to investigate whether the costs
              above the unit were recorded. They are not the profit. Evidence from the plant beats the margin. If the evidence on the case shows the contribution margin and does not
              show the costs above the unit, the case may store the unit remainder and must not
              store bottom-line profit. If the evidence shows gross margin after the cost to serve
              and does not show that recurring revenue remains profitable and compounds, the case
              may store the gross margin and must not store profitable ARR.
            </p>

            <p>
              Calling the unit remainder profit crosses the honesty and verification boundary. Sync
              states what was checked and what was not claimed. Contribution margin was checked as
              a unit remainder after the cost to serve, or unit economics was checked as that
              remainder on a unit, or gross margin after the cost to serve was checked as the same
              family of claim. Bottom-line profit was not claimed. Profitable ARR was not claimed.
              Durable profitable revenue was not claimed. Treating the margin as the profit, or
              treating a profit note as if it verified the plant outcome, is the same confusion
              from the other side.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating margin as profit ships a unit remainder into a bottom-line claim. The
              contribution margin can be positive, and the gross margin after the cost to serve can
              be positive, and the durable profitable revenue can still be unrecorded.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing margin beside Evidence, Verification, Proof, Authorization, Accountability,
              and Closure is still a read
            </h2>

            <p>
              Sync may surface a contribution margin or a unit-economics note beside Evidence,
              Verification, Proof, Authorization, Accountability, and Closure. Surfacing is still
              a read. The screen can show the unit remainder next to the evidence the case holds,
              next to the named observation the verification step stores, next to a closed chain
              when the claim, the conditions, the checks, and the lineage are named, next to the
              authorized state that answered who may start, next to the accountable owner who
              remains responsible after the plant move, and next to the operational close that is
              not the cash and not the profit. Showing the margin does not write a CMMS work order.
              Showing the margin does not clear equipment to run. Showing the margin does not
              collect cash. Showing the margin does not recognize revenue. Showing the margin does
              not compute contribution margin. Showing the margin does not compute bottom-line
              profit. Showing the margin does not declare profitable ARR. A read of a unit
              remainder is still a read.
            </p>

            <p>
              Sync refuses false precision. Sync refuses when evidence is insufficient. A margin
              label with no named cost to serve and no named remainder is not profit the case can
              store, and it is not a unit remainder either. The label does not fill the gap. A
              dollar figure someone typed beside the margin is not bottom-line profit unless the
              costs above the unit are themselves the evidence. This essay states no savings
              figure. It states no price. It states no rate of compounding. The absence of a number
              is the point. Margin is not profit, with or without a figure beside it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. A live connector that
              pulls invoices, receipts, cost ledgers, margin reports, or profit statements sits
              outside this edition too. Simulated or seeded telemetry and assets are practice
              records. A practice record that says margin is not a customer plant release, and it
              is not bottom-line profit.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite contribution margin, unit economics, or gross margin after the cost
              to serve when the remainder and the cost to serve are named. That citation is a unit
              remainder. It is not a record of bottom-line profit. It is not a record of profitable
              ARR. It is not a record of durable profitable revenue. A recommendation may say
              investigate because the costs above the unit are unrecorded, or because the
              contribution margin is positive and the profit is still open. The proposal does not
              compute the profit.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not profit. An accountable owner remains responsible
              for results, exceptions, and learning after the plant move. That ownership is not the
              close, the close is not the cash, the cash is not the margin, and the margin is not
              the profit. Authorized execution systems write the work order or the isolation. Sync
              does not write the work order. Sync does not mark an asset closed. Sync does not
              collect cash. Sync does not recognize revenue. Sync does not compute contribution
              margin. Sync does not compute bottom-line profit. Sync does not declare profitable
              ARR. Sync does not write that state back. CMMS write-back is not a live product path.
              Billing write-back is not a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The
              check is named observation against named criteria, stored as achieved, not_achieved,
              or inconclusive, with measured notes. That record is the closure of the claim about
              the outcome. It does not, by itself, turn contribution margin into bottom-line
              profit, and it does not turn gross margin after the cost to serve into profitable
              ARR. A named human decides. A named human remains accountable after the plant move.
              The unit remainder stays open until the cost to serve is itself the evidence, in the
              system that owns that record. The profit stays open until the costs above the unit,
              and the claim that the revenue compounds, are themselves the evidence, in the system
              that owns that record. Sync does not own either system.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a contribution margin or a unit-economics note beside Evidence,
              Verification, Proof, Authorization, Accountability, and Closure. Surfacing is still
              a read. Sync refuses false precision. Sync refuses when evidence is insufficient.
              Sync does not compute contribution margin. Sync does not compute bottom-line profit.
              Sync does not declare profitable ARR. A named human decides. A named human remains
              accountable after the plant move. Margin stays what remains after the cost to serve.
              Profit stays what remains after the costs that remainder does not carry.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with
              measured notes. It does not keep contribution margin as bottom-line profit. It does
              not keep unit economics as profitable ARR. It does not keep gross margin after the
              cost to serve as durable profitable revenue that compounds toward the portfolio
              northstar. A later question that cites a positive margin as if the profit were
              already known is citing a unit remainder. Sync must not auto-close, auto-authorize,
              or treat contribution margin as bottom-line profit, or as Learning credit.
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
              directly. Evidence may hold a contribution margin or a unit remainder, and which cost
              to serve that record named. Human decision may hold who accepted the consequence.
              Action may hold the intent that decision routed. Verification may hold the named
              observation. Learning may hold achieved, not_achieved, or inconclusive, with measured
              notes. None of those steps is a unit remainder used as bottom-line profit or
              profitable ARR. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating gross margin after the cost to serve as durable
              profitable revenue. Later editions can deepen a chapter. The spine stays in this
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

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What this article is not claiming
            </h2>

            <p>
              This is an essay about the Decision Case order, not a customer case study. It names
              no plant, states no savings figure, and claims no prevented failure. It states no OEM limit
              and no operating threshold. It does not claim that contribution margin, unit
              economics, or gross margin after the cost to serve is bottom-line profit or
              profitable ARR. It does not claim that a unit remainder subtracts the costs above the
              unit. It does not claim that covering the cost to serve makes recurring revenue
              compound toward the portfolio northstar. It does not claim that Sync executes plant
              work. It does not claim CMMS write-back as a shipped product. It does not claim
              billing write-back, invoice posting, revenue recognition, margin calculation, profit
              calculation, or an ARR ledger as a shipped product.
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
              describes that journey. Walking those steps is not bottom-line profit. The
              verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, billing
              write-back, a cost-ledger pull, a profit-statement pull, SMTP invite delivery, or
              automatic revocation of access on expiry as live. It does not describe Sync writing
              work orders, clearing equipment to run, marking a case plant-execute, collecting
              cash, recognizing revenue, computing contribution margin, computing bottom-line
              profit, declaring profitable ARR, starting equipment, releasing a hold, or
              controlling the plant. Simulated or seeded telemetry and assets are practice records.
              They are not live plant results, and they are not durable profitable revenue.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              on why cash collected and invoices paid are not contribution margin,{' '}
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
              on why a later case inherits the measured result and not the margin,{' '}
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
              the measured result. The unit remainder does not compute the profit.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries.
                Contribution margin is what remains after the cost to serve. Unit economics is that
                remainder on a unit. Gross margin after the cost to serve is the same family of
                claim. Bottom-line profit is what remains after the costs that remainder does not
                carry. Profitable ARR is durable profitable revenue that still compounds toward the
                portfolio northstar. The unit remainder is not that profit. The Reliability
                Engineer workspace is where a signed-in Decision Case is completed. A Reliability
                Assessment is the bounded review when the question is whether the records can
                support a conclusion. None of those is a claim that Sync executes plant work,
                computes contribution margin, computes bottom-line profit, declares profitable ARR,
                that CMMS write-back is live, or that self-guided onboarding is a live product
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
          <InsightNextSteps slug="margin-is-not-profit" />
        </motion.article>
      </div>
    </main>
  );
}
