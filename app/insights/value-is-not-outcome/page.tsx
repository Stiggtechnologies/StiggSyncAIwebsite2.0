'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('value-is-not-outcome');

export default function ValueIsNotOutcomePage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Value Is Not Outcome</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Profit is an accounting result under named cost rules. Value is the verified
              operational outcome a Decision Case was opened to change. A reported outcome, even a
              favorable KPI move, is not that value unless it is the verified change the case named
              and authorized.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Value is not outcome. Profit is an accounting result for a named period under the
              cost rules someone chose. Value is the verified operational outcome a Decision Case
              was opened to change. A reported outcome is a different record. A favorable KPI move,
              a dashboard result, or a measured result that is not the named change the case
              authorized can all be reported and still not be the value. Treating the reported
              outcome as value ships a KPI, or a different measured result, into a finished claim
              about the change nobody authorized. Sync may surface a reported outcome or a KPI
              beside Evidence, Verification, and the closed outcome. Surfacing is still a read. A
              favorable KPI without the verified change leaves the value unrecorded. Direct plant
              execute stays off. CMMS write-back is not a live product path. Billing write-back is
              not a live product path.
            </p>

            <p>
              A reported outcome looks like the close of the decision. The KPI moved the right way.
              The availability number improved. The loss the meeting tracks got smaller. The room
              then treats the value as known: the outcome belongs to the KPI, the change belongs to
              the report, and the case is finished because the number moved. The report did none of
              that. It answered that a result was stated. It did not record that the result is the
              verified change the Decision Case named and authorized. It did not store achieved,
              not_achieved, or inconclusive against that named change. It did not measure what the
              case was opened to change.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is
              not margin. Margin is not profit. Profit is not value. Value is not outcome. Each
              word can be true in its own place. None of the earlier words fills the last one. A
              closed work order, cash collected, a unit remainder, a profit figure, and a favorable
              KPI are activity, money, accounting, and a report. Value is the verified change the
              case named and authorized.
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
              . This essay is why a reported outcome cannot be read as value. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold the record that a KPI moved, or that a result was measured. The{' '}
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
              chapter records who accepted the consequence and which change was authorized. The{' '}
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
              notes. None of those steps turns a reported outcome into the value. None of them
              treats a favorable KPI as the verified change.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Profit is accounting. Value is the change the case was opened to make
            </h2>

            <p>
              <Link
                href="/insights/profit-is-not-value"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Profit Is Not Value
              </Link>{' '}
              sits one step earlier. Profit is an accounting result under named cost rules. That
              figure answers whether the recorded remainder met the rules someone chose. Value, in
              that essay, is the verified operational outcome the Decision Case was opened to
              change: restored capacity, a constraint released, a loss avoided, stored as achieved,
              not_achieved, or inconclusive, with measured notes. This essay starts after that
              split has been kept. The profit figure is not the value. The next refusal is that a
              reported outcome is not the value either, unless that report is the verified change
              the case named and authorized.
            </p>

            <p>
              <Link
                href="/insights/margin-is-not-profit"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Margin Is Not Profit
              </Link>{' '}
              keeps the unit remainder off bottom-line profit. Contribution margin is what remains
              after the cost to serve. Unit economics is that remainder on a unit. Gross margin
              after the cost to serve is the same family of claim. None of those records is the
              profit, and the profit is not the value. A positive unit remainder beside a favorable
              KPI still does not name the verified change.
            </p>

            <p>
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>{' '}
              keeps the named owner off the measured result. A named human who remains responsible
              after the plant move is not loop closure. Closure is the verified outcome recorded
              against that ownership: a measured result, not named intent. A reported outcome
              beside that owner is not the value. Naming who owns the KPI does not record that the
              KPI is the change the case authorized.
            </p>

            <p>
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              and{' '}
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>{' '}
              keep the earlier commercial refusals. Cash collected is money received. Closing a
              work order, a ticket, or a shift is an operational close. Neither is contribution
              margin, and neither is the value. A closed work order with a favorable KPI is still
              not the verified change the case named and authorized.
            </p>

            <p className="text-xl font-semibold text-white">
              Profit answers whether the recorded remainder met the cost rules. Value is the
              verified operational outcome the case was opened to change. A reported outcome is not
              that value unless it is the verified change the case named and authorized.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A favorable KPI is a reported outcome, not the value
            </h2>

            <p>
              The failure mode is ordinary. The KPI moved, and the room treats the value as known.
              Availability rose. The delay fell. The count of closed work orders went up. Each of
              those can be a real report. None of them, by the act of moving, is the verified
              change the Decision Case named and authorized. The case may have been opened to
              restore a named capacity, release a named constraint, or avoid a named loss. A
              different number can improve while that change is unrecorded. The favorable KPI is an
              outcome someone reported. It is not the value.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              already refuses the earlier collapse. A KPI, a leading indicator, or a stand-in
              measure is not the verified operational outcome. This essay does not reuse that
              refusal as if the proxy were the only gap. A reported outcome can be more than a
              proxy. It can be a measured result. The measured result is still not the value when
              it is not the named change the case authorized. A stand-in that moved is not the
              outcome. A reported outcome that is not the authorized change is not the value.
            </p>

            <p>
              A measured result that is not the named change is the second form of the same
              refusal. The inspection was recorded. The reading moved. The verification step stored
              a number. The number can be honest and still be a different change from the one the
              human decision authorized. Achieved against the wrong criteria is not the value of
              the case. The case stays open on the change it named until named observation against
              those named criteria is the record.
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
              notes. That check is the measured result against the criteria the decision named. It
              is not a KPI report. Recording a favorable KPI does not record the check. Recording
              the check against a different change does not record the value.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes, for the change the case named. It
              does not inherit a favorable KPI in place of that change, and it does not inherit a
              measured result that was not the authorized change as the value. Sync must not
              auto-close, auto-authorize, or treat a reported outcome as value, or as Learning
              credit.
            </p>

            <p className="text-xl font-semibold text-white">
              A favorable KPI move is a reported outcome. A measured result that is not the named
              change is still a reported outcome. Value is the verified change the Decision Case
              named and authorized. The report produces neither by itself.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing a reported outcome beside Evidence and Verification is still a read
            </h2>

            <p>
              Sync may surface a reported outcome or a KPI beside Evidence, Verification, and the
              closed outcome. Surfacing is still a read. The screen can show the KPI next to the
              evidence the case holds, next to the named observation the verification step stores,
              and next to a closed chain when the claim, the conditions, the checks, and the
              lineage are named. Showing the KPI does not write a CMMS work order. Showing the KPI
              does not clear equipment to run. Showing the KPI does not collect cash. Showing the
              KPI does not recognize revenue. Showing the KPI does not compute profit. Showing the
              KPI does not declare the value. A read of a reported outcome is still a read.
            </p>

            <p>
              Calling the reported outcome the value crosses the honesty and verification boundary.
              Sync states what was checked and what was not claimed. A KPI move was checked as a
              reported outcome, or a measured result was checked as a number against some criteria.
              The verified change the Decision Case named and authorized was not claimed, unless
              that change is itself the evidence. Treating the KPI as the value, or treating a
              value note as if it verified a different plant outcome, is the same confusion from
              the other side.
            </p>

            <p>
              Sync refuses false precision. Sync refuses when evidence is insufficient. A value
              label with no named change and no named authorization is not value the case can
              store, and it is not a verified outcome either. The label does not fill the gap. A
              percentage someone typed beside the KPI is not the value unless the named change and
              the authorization are themselves the evidence. This essay states no savings figure.
              It states no price. It states no rate. The absence of a number is the point. Value is
              not outcome, with or without a favorable figure beside it.
            </p>

            <p>
              Evidence from the plant beats the reported outcome. If the evidence on the case shows
              the KPI and does not show the verified change the case named and authorized, the case
              may store the reported outcome and must not store the value. Stage-1 evidence is the
              record held on the case. A live connector that pulls historian or control-system tags
              sits outside this edition. A live connector that pulls KPI warehouses, outcome
              reports, or value statements sits outside this edition too. Simulated or seeded
              telemetry and assets are practice records. A practice record that says a favorable KPI is not a customer plant release, and it is not the value.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite a reported outcome or a KPI when the report and what it measured
              are named. That citation is a reported outcome. It is not a record of value. It is
              not a record that the verified change occurred. A recommendation may say investigate
              because the named change is unrecorded, or because the KPI moved and the authorized
              change is still open. The proposal does not declare the value.
            </p>

            <p>
              If the named person approves work, the case may store the intent and which change was
              authorized. The intent is not execution, and named intent is not the value. An
              accountable owner remains responsible for results, exceptions, and learning after the
              plant move. That ownership is not the close, the close is not the cash, the cash is
              not the margin, the margin is not the profit, the profit is not the value, and the
              reported outcome is not the value. Authorized execution systems write the work order
              or the isolation. Sync does not write the work order. Sync does not mark an asset
              closed. Sync does not collect cash. Sync does not recognize revenue. Sync does not
              compute profit. Sync does not declare a KPI move to be the verified change. Sync does
              not write that state back. CMMS write-back is not a live product path. Billing
              write-back is not a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The
              check is named observation against named criteria, stored as achieved, not_achieved,
              or inconclusive, with measured notes. That record is the closure of the claim about
              the named change. It does not, by itself, turn a reported outcome into value, and it
              does not turn a favorable KPI into the verified change. A named human decides. A
              named human remains accountable after the plant move. The value stays open until the
              verified change the case named and authorized is itself the evidence, in the system
              that owns that record. Sync does not own that system.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a reported outcome or a KPI beside Evidence, Verification, and the
              closed outcome. Surfacing is still a read. Sync refuses false precision. Sync refuses
              when evidence is insufficient. Sync does not declare a favorable KPI to be the value.
              A named human decides. A named human remains accountable after the plant move. Value
              stays the verified change the Decision Case named and authorized. A reported outcome
              stays a report.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with
              measured notes. It does not keep a favorable KPI as the value. It does not keep a
              measured result that was not the authorized change as the verified operational
              outcome the case was opened to change. A later question that cites a KPI move as if
              the value were already known is citing a reported outcome. Sync must not auto-close,
              auto-authorize, or treat a reported outcome as value, or as Learning credit.
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
              directly. Evidence may hold a reported outcome or a KPI, and which change that record
              did not name. Human decision may hold who accepted the consequence and which change
              was authorized. Action may hold the intent that decision routed. Verification may
              hold the named observation against the named criteria. Learning may hold achieved,
              not_achieved, or inconclusive, with measured notes. None of those steps is a reported
              outcome used as value. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a favorable KPI as the verified change. Later
              editions can deepen a chapter. The spine stays in this order.
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
              and no operating threshold. It does not claim that a reported outcome, a
              favorable KPI, or a measured result that is not the named change is the value. It
              does not claim that profit under named cost rules is the verified operational
              outcome. It does not claim that Sync executes plant work. It does not claim CMMS
              write-back as a shipped product. It does not claim billing write-back, invoice
              posting, revenue recognition, KPI calculation, or a value ledger as a shipped
              product.
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
              describes that journey. Walking those steps is not the value. The verification step
              is where named observation against named criteria is stored as achieved,
              not_achieved, or inconclusive, with measured notes. This edition does not describe
              plant execute, a live connector tag pull, CMMS write-back, billing write-back, a KPI
              warehouse pull, a value-statement pull, SMTP invite delivery, or automatic revocation
              of access on expiry as live. It does not describe Sync writing work orders, clearing
              equipment to run, marking a case plant-execute, collecting cash, recognizing revenue,
              declaring a favorable KPI to be the verified change, starting equipment, releasing a
              hold, or controlling the plant. Simulated or seeded telemetry and assets are practice
              records. They are not live plant results, and they are not the value. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/profit-is-not-value"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Profit Is Not Value
              </Link>{' '}
              on why an accounting result under named cost rules is not the verified operational
              outcome,{' '}
              <Link
                href="/insights/margin-is-not-profit"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Margin Is Not Profit
              </Link>{' '}
              on why contribution margin and unit economics are not bottom-line profit,{' '}
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>{' '}
              on why a named owner is not the verified outcome,{' '}
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              on why a KPI or stand-in is not the verified operational outcome,{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              on why a later case inherits the measured result and not the KPI,{' '}
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
              the measured result against the named change. The reported outcome does not declare
              the value.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/outcome-is-not-impact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Outcome Is Not Impact
              </Link>
              , on why a measured outcome is still not business impact. Impact is attribution that a
              named decision changed cash, risk, or capacity. A green KPI or a completed workflow is
              not that attribution.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Profit is
                an accounting result under named cost rules. Value is the verified operational
                outcome a Decision Case was opened to change. A reported outcome, even a favorable
                KPI move, is not that value unless it is the verified change the case named and
                authorized. The Reliability Engineer workspace is where a signed-in Decision Case
                is completed. A Reliability Assessment is the bounded review when the question is
                whether the records can support a conclusion. None of those is a claim that Sync
                executes plant work, declares a KPI to be the value, that CMMS write-back is live,
                or that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="value-is-not-outcome" />
        </motion.article>
      </div>
    </main>
  );
}
