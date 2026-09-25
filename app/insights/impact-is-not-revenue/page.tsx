'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('impact-is-not-revenue');

export default function ImpactIsNotRevenuePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Impact Is Not Revenue</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Business impact is attribution that a named decision changed cash, risk, or capacity.
              Revenue is recognized sales. Impact can exist without a new recognized sale. Recognized
              sales can rise without attributable impact from a specific decision recorded on a Sync
              case.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Impact is not revenue. Business impact is attribution that a named decision changed
              cash, risk, or capacity. Revenue is recognized sales: the earning event recorded on
              the books. Risk avoided, capacity freed, and cost deferred can be that attributed
              change and still not be a new recognized sale. Recognized sales can rise because a
              contract renewed or a shipment was invoiced, and that rise can still lack attributable
              impact from a specific Sync decision. Treating the impact as revenue ships an
              attribution claim into the books nobody has recorded, under the honesty and
              verification boundary. Sync may surface a measured outcome or a revenue figure beside
              Evidence, Verification, and the closed outcome. Surfacing is still a read. An
              attributed change without a new recognized sale leaves the revenue unrecorded. A
              recognized sale without attribution leaves the impact unrecorded. Direct plant execute stays off. CMMS write-back is not a live product path. Billing write-back is not a
              live product path. Sync does not book revenue. Sync does not recognize revenue. Sync
              does not attribute a change in cash, risk, or capacity. Sync does not execute plant
              work.
            </p>

            <p>
              An impact claim looks like the close of the commercial question. The decision is
              named. Someone says the cash changed, the risk changed, or the capacity changed
              because of it. The meeting then treats the revenue as known: the sale belongs to the
              impact, the invoice belongs to the impact, and the recognized earning belongs to the
              impact. The attribution did none of that. It answered whether a named decision was
              tied to a change in cash, risk, or capacity. It did not record a sale. It did not
              book revenue. It did not show that recognized sales moved because that decision was
              made.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is
              not margin. Margin is not profit. Profit is not value. Value is not outcome. Outcome
              is not impact. Impact is not revenue. Each word can be true in its own place. None of
              the earlier words fills the last one. A closed work order, cash collected, a unit
              remainder, a profit figure, a measured outcome, and an attributed change are activity,
              money, accounting, a recorded result, and a claim about that result. Revenue is
              recognized sales. Impact is attribution. A sale on the books is not that attribution.
              Risk avoided, capacity freed, or cost deferred is not a new recognized sale.
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
              . This essay is why business impact cannot be read as revenue. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold a revenue figure, a note that risk was avoided, a note that capacity
              was freed, or a note that cost was deferred, when the source of that note is named.
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
              notes. None of those steps books revenue. None of them treats an impact claim as
              recognized sales. None of them attributes cash, risk, or capacity.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Impact is attribution, not a recognized sale
            </h2>

            <p>
              <Link
                href="/insights/outcome-is-not-impact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Outcome Is Not Impact
              </Link>{' '}
              sits one step earlier. A measured outcome is named observation against named criteria,
              stored as achieved, not_achieved, or inconclusive, with measured notes. Business
              impact is a later claim: that a named decision changed cash, risk, or capacity. This
              essay starts after that split has been kept. Outcome is not impact. The next refusal
              is that impact is not revenue. The attribution can be stated and the recognized sale
              can still be absent. The recognized sale can be present and the attribution can still
              be open.
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
              the outcome. The outcome is not the impact. The impact is not the revenue.
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
              not the impact, and the impact is not recognized sales. A profit figure beside an
              impact claim still does not book revenue.
            </p>

            <p>
              <Link
                href="/insights/margin-is-not-profit"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Margin Is Not Profit
              </Link>{' '}
              keeps the unit remainder off bottom-line profit. Contribution margin is what remains
              after the cost to serve. That remainder is not profit, the profit is not the value,
              and the impact is not revenue. A positive unit remainder beside a recognized sale
              still does not attribute the sale to a named decision.
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
              A named accountable human can own the result, and the revenue can still be unrecorded.
              An impact claim does not close it into recognized sales.
            </p>

            <p>
              Impact has a different object than revenue. It is about whether a named decision
              changed cash, whether it changed risk, or whether it changed capacity, and whether
              that change is attributed to the decision. It is not about whether a sale was
              recognized on the books. A sentence that only states the attribution does not say a
              sale was earned. A sentence that only states recognized sales does not say the named
              decision caused them. The impact can be claimed. The revenue can still be unrecorded.
              The revenue can be recorded. The impact can still be open.
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
              for the outcome after the work runs, not impact, and not revenue. An authorized state
              can sit beside a recognized sale while the attribution is still open. Recommend is not authorize. A recommendation that cites the impact does not accept the consequence, and
              it does not book the sale.
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
              in that essay, is the earning event recorded on the books. This essay uses the same
              object. Revenue is recognized sales. Cash collected is money received. Neither record
              is produced by an impact claim.{' '}
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              keeps the receipt off the unit remainder. Cash is not margin. Margin is not profit.
              Profit is not value. A shutdown can collect cash, show a margin, print a profit, store
              a measured outcome, and carry an impact claim — and still not be a new recognized
              sale, or still not attribute the sale that was recognized to the named decision. None
              of those earlier records is revenue.
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
              the equipment. An impact claim does not unlock that write. It does not book revenue.
              It does not attribute cash, risk, or capacity to the decision. Sync does not write the
              work order. Sync does not clear equipment to run. Sync does not mark the case
              plant-execute. Sync does not book revenue. Sync does not recognize revenue.
            </p>

            <p className="text-xl font-semibold text-white">
              Impact answers whether a named decision is tied to a change in cash, risk, or
              capacity. It does not record recognized sales.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Revenue is recognized sales, not the attributed change
            </h2>

            <p>
              Revenue is not a property of the impact claim. It is recognized sales: the earning
              event recorded on the books under the rules the books use. Cash collected is a
              different record. Contribution margin is a different record. An impact claim that
              names risk avoided, capacity freed, or cost deferred is a different record again. The
              books can recognize a sale and the case can still lack attribution to a named
              decision. The case can hold the attribution and the books can still show no new
              recognized sale. Named intent is what the decision meant to do. The outcome is what
              was measured. Impact is the attributed change. Revenue is the recognized sale.
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
              notes. That check is the measured result. It is not, by itself, the impact, and it is
              not, by itself, the revenue. A recorded outcome without attribution leaves the impact
              unrecorded. An impact claim without a recognized sale leaves the revenue unrecorded.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit an impact
              claim in place of that outcome, and it does not inherit revenue in place of that
              outcome. A later shutdown that cites last time as if the recognized sale were already
              the impact is citing a commercial record as an attribution. Sync must not auto-close,
              auto-authorize, or treat impact as revenue as Learning credit.
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
              that comes after. Impact, in the previous essay, is attribution that a named decision
              changed cash, risk, or capacity. Revenue, in this essay, is recognized sales. Neither
              is a claim that the asset stays known-good, and neither is produced by storing
              achieved. A verified outcome can be not_achieved or inconclusive. Those results still
              close the claim about what was observed. They are not revenue.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              is the same refusal one step earlier in the evidence. Two records that move together
              are not a cause. Recognized sales that moved in the same period as a decision are not,
              by that movement, attribution to the decision. The coincidence can inform a
              recommendation to investigate. It is not the impact, and it is not proof the sale
              belongs to the decision.
            </p>

            <p className="text-xl font-semibold text-white">
              Business impact is not revenue. Revenue is recognized sales. An attributed change
              without a new recognized sale leaves the revenue unrecorded. A recognized sale without
              attribution leaves the impact unrecorded.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Risk avoided, capacity freed, or cost deferred is not a new recognized sale
            </h2>

            <p>
              The failure mode is ordinary after a job. The impact is stated beside a maintenance
              decision or a production decision, and the room treats the revenue as known. The risk
              was avoided. The capacity was freed. The cost was deferred. Or the opposite failure:
              recognized sales rose, and the room treats the rise as the impact of the decision on
              the case. Each of those is a separate record. Risk avoided is a change in risk, if the
              attribution holds. It is not a sale. Capacity freed is a change in capacity, if the
              attribution holds. It is not a sale. Cost deferred is spend that did not happen, if
              the attribution holds. It is not a sale, and it is not a savings figure this essay is
              willing to state. A rising revenue figure does not, by itself, attribute the sale to
              the decision. The board looks settled because the impact word was allowed to stand in
              for the revenue, or the revenue word was allowed to stand in for the impact.
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
              commercial record, not that outcome, and not the impact. A proxy is not the outcome. A
              measured outcome is not the impact. An impact claim is not recognized sales.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A revenue figure painted beside that tile is not a stronger
              green. It is a display. Go still required a named human decision. The result after the
              plant move still requires a verified outcome. Impact still requires attribution.
              Revenue still requires recognized sales. The color supplies none of the four.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              keeps a completion label off the check. A completed workflow is a completion label
              under the criteria someone chose. It is not named observation, not impact, and not
              revenue.{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps a clearance stamp off a finished claim. A cleared flag is not proof the work is
              finished, and it is not proof that recognized sales belong to the decision.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps the proposal off the decision. A recommendation may say investigate because the
              impact is unrecorded, because the impact is claimed and no new sale was recognized, or
              because recognized sales rose and the attribution is still open. That proposal does
              not authorize the work, and it does not record the revenue. Recommend is not
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
              Sync states what was checked and what was not claimed. Calling an impact claim revenue
              crosses that boundary. Treating risk avoided, capacity freed, or cost deferred as a
              recognized sale is the same confusion. Treating a rise in recognized sales as
              attributable impact from a specific Sync decision, without that attribution, is the
              same confusion. Sync refuses false precision. Sync refuses when evidence is insufficient. Sync does not declare impact. Sync does not compute a return. Sync does
              not book revenue. Sync does not recognize revenue.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating impact as revenue ships an attribution claim into a finished sale nobody has
              recorded. The impact can be claimed and the revenue can still be open. The revenue can
              be recorded and the impact can still be open.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a revenue figure beside Evidence and Verification is still a read
            </h2>

            <p>
              Sync may surface a measured outcome or a revenue figure beside Evidence, Verification,
              and the closed outcome. Surfacing is still a read. The screen can show achieved,
              not_achieved, or inconclusive next to the criteria the case holds, next to a note that
              risk was avoided, capacity was freed, or cost was deferred, and next to a recognized
              sale someone recorded elsewhere. Showing the figure does not write a CMMS work order.
              Showing the figure does not clear equipment to run. Showing the figure does not treat
              the case as plant-execute. Showing the figure does not book revenue. Showing the
              figure does not recognize revenue. Showing the figure does not attribute a change in
              cash, risk, or capacity. A read of a revenue figure is still a read. A recognized sale
              without attribution leaves the impact unrecorded.
            </p>

            <p>
              Evidence from the plant beats the impact claim when the claim is being used as
              revenue. If the evidence on the case does not support the named observation, the case
              refuses. If the evidence records an attributed change and does not record a recognized
              sale, the case may store the claim as a claim and must not store the claim as revenue.
              If the evidence records a recognized sale and does not record attribution to the named
              decision, the case may cite the sale and must not store the sale as impact. The label
              does not fill the gap, and it does not close it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. Simulated or seeded telemetry and
              assets are practice records. A practice record that says an impact claim is revenue is
              not a customer plant release, and it is not a recognized sale.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite an impact claim when the decision, the change in cash, risk, or
              capacity, and the attribution are named as a claim rather than as a booking. Evidence
              may cite a revenue figure when the source of that figure is named. Those citations are
              records of claims and of recognized sales someone else recorded. They are not records
              that Sync booked the sale. They are not records that the sale is the impact. A
              recommendation may say investigate because the impact is unrecorded, because the
              impact is claimed and no new sale was recognized, or because recognized sales rose and
              the attribution is still open. The proposal does not record the revenue. Recommend is
              not authorize.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not revenue. An impact label does not perform the write
              and does not book the sale the work was meant to produce. Authorized execution systems
              write the work order or the isolation. Sync does not write the work order. Sync does
              not mark an asset closed. Sync does not write that state back. CMMS write-back is not
              a live product path. Billing write-back is not a live product path. Direct plant
              execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The check
              is named observation against named criteria, stored as achieved, not_achieved, or
              inconclusive, with measured notes. That record is the outcome the case is allowed to
              close when the criteria named an operational result. It does not, by itself, turn the
              outcome into impact, and it does not turn the impact into recognized sales. A named
              human decides. A named human remains accountable after the plant move. The revenue
              stays unrecorded until recognized sales are a separate commercial record. The impact
              stays unrecorded until attribution to a decision that changed cash, risk, or capacity
              is a separate, evidenced claim. This essay does not supply either record as the other.
              Sync does not attribute a change in cash, risk, or capacity. Sync does not book
              revenue. Sync does not recognize revenue.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a measured outcome or a revenue figure beside Evidence, Verification,
              and the closed outcome. Surfacing is still a read. Sync refuses false precision. Sync refuses when evidence is insufficient. A named human decides. A named human remains
              accountable after the plant move. The impact stays attribution. Revenue stays
              recognized sales. Risk avoided, capacity freed, or cost deferred without a new
              recognized sale leaves the revenue unrecorded. A recognized sale without attribution
              to a specific decision on the case leaves the impact unrecorded.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with measured
              notes. It does not keep impact as revenue. A later question that cites an impact claim
              as if recognized sales were already booked is citing an attribution. A later question
              that cites recognized sales as if the decision on the case had already earned them is
              citing a commercial record. Sync must not auto-close, auto-authorize, or treat impact
              as revenue as Learning credit.
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
              directly. Evidence may hold the revenue figure, the impact claim, or the measured
              result that was shown. Human decision may hold who accepted the consequence. Action
              may hold the intent that decision routed. Verification may hold the named observation.
              Learning may hold achieved, not_achieved, or inconclusive, with measured notes — the
              measured outcome, not the revenue. None of those steps is an impact claim used as
              recognized sales. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating an attribution as a sale on the books. Later editions
              can deepen a chapter. The spine stays in this order.
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
              It states no OEM limit and no operating threshold. It does not claim that business
              impact is revenue, writes a CMMS work order, clears equipment to run, books revenue,
              recognizes revenue, or attributes a change in cash, risk, or capacity. It does not
              claim that Sync executes plant work. It does not claim CMMS write-back as a shipped
              product. It does not claim billing write-back as a shipped product. It does not invent
              a customer, a price, or a return.
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
              describes that journey. Walking those steps is not a claim that impact is revenue. The
              verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, billing write-back,
              SMTP invite delivery, or automatic revocation of access on expiry as live. It does not
              describe Sync writing work orders, clearing equipment to run, marking a case
              plant-execute, starting equipment, releasing a hold, controlling the plant, booking
              revenue, or recognizing revenue. Simulated or seeded telemetry and assets are practice
              records. They are not live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              keeps a named person on the decision. The impact claim does not accept, reject,
              escalate, or return. The revenue record does not either. A specific Sync decision, in
              this essay, is a named human decision recorded on a Sync case. Sync did not make it.
              A named human decides. A named human remains accountable after the plant move.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/outcome-is-not-impact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Outcome Is Not Impact
              </Link>{' '}
              on why a measured outcome is not attribution,{' '}
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
              on why a later case inherits the measured result and not a revenue claim,{' '}
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
              on why a sale that moved with the decision is not a cause. A{' '}
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
              the measured result. The impact claim does not record the revenue.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Business
                impact is attribution that a named decision changed cash, risk, or capacity. Revenue
                is recognized sales. Risk avoided, capacity freed, and cost deferred are not a new
                recognized sale. A rise in recognized sales is not, by itself, attributable impact
                from a specific decision on the case. The Reliability Engineer workspace is where a
                signed-in Decision Case is completed. A Reliability Assessment is the bounded review
                when the question is whether the records can support a conclusion. None of those is
                a claim that Sync executes plant work, books revenue, recognizes revenue, attributes
                cash, risk, or capacity, declares a return, that CMMS write-back is live, that
                billing write-back is live, or that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="impact-is-not-revenue" />
        </motion.article>
      </div>
    </main>
  );
}
