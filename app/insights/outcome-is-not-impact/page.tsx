'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('outcome-is-not-impact');

export default function OutcomeIsNotImpactPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Outcome Is Not Impact</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A measured outcome is a record of what was observed. Business impact is a later
              claim: that a named decision changed cash, risk, or capacity. A green KPI or a
              completed workflow is neither that attribution nor that change.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Outcome is not impact. A measured outcome is named observation against named
              criteria, stored as achieved, not_achieved, or inconclusive, with measured notes. It
              answers what was recorded after the plant move. Business impact is a different
              record. It is attribution that a named decision changed cash, risk, or capacity. A
              green KPI, a completed workflow, or a measured result that nobody has tied to that
              decision can all be shown and still not be impact. Treating the measured outcome as
              impact ships a recorded result into a finished claim about cash, risk, or capacity
              nobody has attributed, under the honesty and verification boundary. Sync may surface
              a measured outcome beside Evidence, Verification, and the closed outcome. Surfacing
              is still a read. A green KPI without attribution leaves the impact unrecorded. Direct
              plant execute stays off. CMMS write-back is not a live product path. Billing write-back is not a live product path.
            </p>

            <p>
              A measured outcome looks like the close of the business question. The KPI went green.
              The workflow completed. The case stored achieved. The meeting then treats the impact
              as known: the cash belongs to the outcome, the risk belongs to the outcome, and the
              capacity belongs to the outcome. The record did none of that. It answered what was
              observed. It did not attribute the change to a named decision. It did not show that
              cash, risk, or capacity moved because that decision was made. It did not separate the
              decision from the other causes that can move the same number.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is
              not margin. Margin is not profit. Profit is not value. Value is not outcome. Outcome
              is not impact. Each
              word can be true in its own place. None of the earlier words fills the last one. A
              closed work order, cash collected, a unit remainder, a profit figure, and a measured
              outcome are activity, money, accounting, and a recorded result. Impact is attribution
              that a named decision changed cash, risk, or capacity. A green KPI is not that
              attribution. A completed workflow is not that attribution.
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
              . This essay is why a measured outcome cannot be read as impact. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold the record that a KPI moved, that a workflow completed, or that a
              result was measured. The{' '}
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
              notes. None of those steps attributes a change in cash, risk, or capacity. None of
              them treats a green KPI or a completed workflow as impact.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              An outcome is a measured result, not an attributed change
            </h2>

            <p>
              <Link
                href="/insights/value-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Value Is Not Outcome
              </Link>{' '}
              sits one step earlier. Value is the verified operational outcome a Decision Case was
              opened to change. A reported outcome, including a favorable KPI move, is not that
              value unless it is the verified change the case named and authorized. This essay
              starts after that split has been kept. Value is not outcome. The next refusal is that
              a measured outcome is not impact. The outcome can be recorded and the attribution can
              still be open.
            </p>

            <p>
              <Link
                href="/insights/profit-is-not-value"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Profit Is Not Value
              </Link>{' '}
              sits one step before that. Profit is an accounting result under named cost rules.
              Value, in that essay, is the verified operational outcome the Decision Case was opened
              to change, stored as achieved, not_achieved, or inconclusive, with measured notes. The
              profit figure is not the value. The reported outcome is not the value. The measured
              outcome is not impact.
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
              and the value is not impact. A positive unit remainder beside a green KPI still does
              not attribute a change in cash, risk, or capacity to a named decision.
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
              The operating loop can be closed with a measured result, and the impact can still be
              unrecorded. A named accountable human without attribution leaves the impact open. A
              measured outcome does not close it.
            </p>

            <p>
              Outcome has a narrower object than impact. It is about what was observed against the
              criteria the decision named. It is not about whether that decision changed cash,
              whether it changed risk, or whether it changed capacity. A sentence that only states
              achieved, not_achieved, or inconclusive does not say the decision caused a change in
              cash, risk, or capacity. The outcome can be recorded. The attribution can still be
              unrecorded.
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
              for the outcome after the work runs, not closure of the operating loop, and not
              impact. An authorized state can sit beside a green KPI while the attribution is still
              open. Recommend is not authorize. A recommendation that cites the outcome does not
              accept the consequence, and it does not attribute the change.
            </p>

            <p>
              Cash discipline is the same refusal, earlier in the accounting stack.{' '}
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>{' '}
              keeps the operational close off the receipt. Closure is not cash.{' '}
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              keeps the receipt off the unit remainder. Cash is not margin. Margin is not profit.
              Profit is not value. A shutdown can collect cash, show a margin, print a profit, and
              store a measured outcome — and still lack the attribution that a named decision
              changed cash, risk, or capacity. None of those earlier records is impact.
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
              the equipment. A measured outcome does not unlock that write. It does not attribute
              cash, risk, or capacity to the decision. Sync does not write the work order. Sync
              does not clear equipment to run. Sync does not mark the case plant-execute. Sync does
              not attribute a change in cash, risk, or capacity.
            </p>

            <p className="text-xl font-semibold text-white">
              An outcome answers what was observed. It does not attribute a change in cash, risk, or
              capacity to a named decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Impact is attribution to a decision that changed cash, risk, or capacity
            </h2>

            <p>
              Impact is not a property of the measured outcome. It is a claim that a named decision
              changed cash, risk, or capacity, and that the change is attributed to that decision
              rather than to the other causes that can move the same record. Restored capacity on
              the case can be a measured outcome. A claim that the decision produced that capacity,
              and that the capacity changed the cash or the risk the business named, is impact. The
              case can store the first and still lack the second. Named intent is what the decision
              meant to do. The outcome is what was measured. Impact is the attributed change.
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
              notes. That check is the measured result. It is not, by itself, the impact, and a
              green KPI is not, by itself, the check. A completed workflow without that record
              leaves the outcome unrecorded. A recorded outcome without attribution leaves the
              impact unrecorded.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit a green KPI
              in place of that outcome, and it does not inherit impact in place of that outcome. A
              later shutdown that cites last time as if the cash, the risk, or the capacity were
              already attributed is citing a measured result as a business claim. Sync must not
              auto-close, auto-authorize, or treat outcome as impact as Learning credit.
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
              that comes after. Impact, in this essay, is attribution that a named decision changed
              cash, risk, or capacity. It is not a claim that the asset stays known-good, and it is
              not produced by storing achieved. A verified outcome can be not_achieved or
              inconclusive. Those results still close the claim about what was observed. They are
              not impact.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              is the same refusal one step earlier in the evidence. Two records that move together
              are not a cause. A measured outcome that moved with a cash figure, a risk figure, or
              a capacity figure is not, by that movement, attribution to the decision. The
              coincidence can inform a recommendation to investigate. It is not the impact.
            </p>

            <p className="text-xl font-semibold text-white">
              A measured outcome is not business impact. Impact is attribution that a named
              decision changed cash, risk, or capacity. A measured outcome without that attribution
              leaves the impact unrecorded.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A green KPI or a completed workflow does not record the impact
            </h2>

            <p>
              The failure mode is ordinary after a job. The outcome is shown beside a maintenance
              decision or a production decision, and the room treats the impact as known. The KPI
              went green. The workflow completed. The unit came back. Each of those is a separate
              record. The green KPI does not measure whether cash changed, whether risk changed, or
              whether capacity changed because of the decision. The completed workflow does not
              either. The measured outcome can have been recorded. The attribution can still be
              open. The board looks settled because the outcome word was allowed to stand in for
              the impact.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              already refuses to treat a KPI, a leading indicator, a model score, a green tile, or
              a closed work-order count as the verified operational outcome. This essay starts
              after that refusal, and it also covers the case where the outcome really was
              measured. A proxy is not the outcome. A measured outcome is not the impact. A green
              KPI fails both tests. It is not the verified operational outcome, and it is not
              attribution to a decision that changed cash, risk, or capacity.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A green KPI painted on that tile is not a stronger green. It is
              a display. Go still required a named human decision. The result after the plant move
              still requires a verified outcome. Impact still requires attribution. The color
              supplies none of the three.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              keeps a completion label off the check. A completed workflow is a completion label
              under the criteria someone chose. It is not named observation, and it is not impact.{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keeps a clearance stamp off a finished claim. A cleared flag is not proof the work is
              finished, and it is not proof that cash, risk, or capacity changed because of the
              decision.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps the proposal off the decision. A recommendation may say investigate because the
              outcome is unrecorded, or because the outcome is recorded and the attribution is
              still open. That proposal does not authorize the work, and it does not record the
              impact. Recommend is not authorize.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling a measured outcome
              impact crosses that boundary. Treating a green KPI as a return, or treating a
              completed workflow as a change in cash, risk, or capacity, is the same confusion. Sync
              refuses false precision. Sync refuses when evidence is insufficient. Sync does not declare impact. Sync does not compute a return.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating a measured outcome as impact ships a recorded result into a finished claim
              about cash, risk, or capacity nobody has attributed. The outcome can be recorded and
              the impact can still be open.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a measured outcome beside Evidence and Verification is still a read
            </h2>

            <p>
              Sync may surface a measured outcome beside Evidence, Verification, and the closed
              outcome. Surfacing is still a read. The screen can show achieved, not_achieved, or
              inconclusive next to the criteria the case holds, next to a green KPI the evidence
              cites, and next to a completed workflow someone recorded elsewhere. Showing the
              outcome does not write a CMMS work order. Showing the outcome does not clear
              equipment to run. Showing the outcome does not treat the case as plant-execute.
              Showing the outcome does not attribute a change in cash, risk, or capacity. A read of
              a measured outcome is still a read. A green KPI without attribution leaves the impact
              unrecorded.
            </p>

            <p>
              Evidence from the plant beats the outcome when the outcome is being used as impact.
              If the evidence on the case does not support the named observation, the case refuses.
              If the evidence records the measured result and does not record attribution to a
              named decision, the case may store the outcome and must not store the outcome as
              impact. The label does not fill the gap, and it does not close it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded telemetry
              and assets are practice records. A practice record that says the outcome
              moved cash, risk, or capacity is not a customer plant release, and it is not impact.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite a measured outcome when the criteria, the observation, and the
              notes are named. Evidence may cite a green KPI or a completed workflow when the
              source of that label is named. Those citations are records of results and labels.
              They are not records that a named decision changed cash, risk, or capacity. A
              recommendation may say investigate because the outcome is unrecorded, or because the
              outcome is recorded and the attribution is still open. The proposal does not record
              the impact. Recommend is not authorize.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not impact. An outcome label does not perform the
              write and does not attribute the change the work was meant to produce. Authorized
              execution systems write the work order or the isolation. Sync does not write the work
              order. Sync does not mark an asset closed. Sync does not write that state back. CMMS
              write-back is not a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The
              check is named observation against named criteria, stored as achieved, not_achieved,
              or inconclusive, with measured notes. That record is the outcome the case is allowed
              to close when the criteria named an operational result. It does not, by itself, turn
              the outcome into impact, and it does not turn a green KPI or a completed workflow
              into attribution. A named human decides. A named human remains accountable after the
              plant move. The impact stays unrecorded until attribution to a decision that changed
              cash, risk, or capacity is a separate, evidenced claim. This essay does not supply
              that claim. Sync does not attribute a change in cash, risk, or capacity.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a measured outcome beside Evidence, Verification, and the closed
              outcome. Surfacing is still a read. Sync refuses false precision. Sync refuses when
              evidence is insufficient. A named human decides. A named human remains accountable
              after the plant move. The measured outcome stays a recorded result. Impact stays open
              until a named decision is attributed with a change in cash, risk, or capacity. A
              green KPI or a completed workflow without that attribution leaves the impact
              unrecorded.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with
              measured notes. It does not keep outcome as impact. A later question that cites a
              measured outcome as if cash, risk, or capacity were already attributed is citing a
              recorded result. Sync must not auto-close, auto-authorize, or treat outcome as impact
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
              directly. Evidence may hold the KPI, the workflow label, or the measured result that
              was shown. Human decision may hold who accepted the consequence. Action may hold the
              intent that decision routed. Verification may hold the named observation. Learning
              may hold achieved, not_achieved, or inconclusive, with measured notes — the measured
              outcome, not the impact. None of those steps is a measured outcome used as impact.
              The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a recorded result as attribution to a change in cash,
              risk, or capacity. Later editions can deepen a chapter. The spine stays in this
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
              no plant, states no savings figure, states no price, and claims no prevented failure.
              It states no OEM limit and no operating threshold. It does not claim that a measured
              outcome is the impact of an operating decision, writes a CMMS work order, clears
              equipment to run, or attributes a change in cash, risk, or capacity. It does not
              claim that Sync executes plant work. It does not claim CMMS write-back as a shipped
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
              describes that journey. Walking those steps is not a claim that outcome is impact.
              The verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, SMTP invite
              delivery, or automatic revocation of access on expiry as live. It does not describe
              Sync writing work orders, clearing equipment to run, marking a case plant-execute,
              starting equipment, releasing a hold, or controlling the plant. Simulated or seeded
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
              keeps a named person on the decision. The outcome does not accept, reject, escalate,
              or return. The impact claim does not either, until a named human makes it and the
              evidence supports it. A named human decides. A named human remains accountable after
              the plant move.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/profit-is-not-value"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Profit Is Not Value
              </Link>{' '}
              on why an accounting result is not the verified operational outcome,{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              on why a KPI is not that outcome,{' '}
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
              on why a later case inherits the measured result and not an impact claim,{' '}
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
              on why a number that moved with the outcome is not a cause. A{' '}
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
              the measured result. The measured outcome does not record the impact.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. A measured
                outcome is achieved, not_achieved, or inconclusive, with measured notes. Impact is
                attribution that a named decision changed cash, risk, or capacity. A green KPI or a
                completed workflow is not that attribution. The Reliability Engineer workspace is
                where a signed-in Decision Case is completed. A Reliability Assessment is the
                bounded review when the question is whether the records can support a conclusion.
                None of those is a claim that Sync executes plant work, attributes cash, risk, or
                capacity, declares a return, that CMMS write-back is live, or that self-guided
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
          <InsightNextSteps slug="outcome-is-not-impact" />
        </motion.article>
      </div>
    </main>
  );
}
