'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('accountability-is-not-closure');

export default function AccountabilityIsNotClosurePage() {
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
              Accountability Is Not Closure
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Accountability is the continuing named ownership of results, exceptions, and learning
              after the plant move. Closure is the verified outcome recorded against that ownership
              — a measured result, not named intent. The person who remains responsible is still
              not the close of the operating loop.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Accountability is not closure. A named human who owns consequences after authorized
              execution is accountability. That duty answers who remains responsible for results,
              exceptions, and learning after the plant move. Closure is a different record. It is
              the verified outcome recorded against that ownership: named observation against named
              criteria, stored as achieved, not_achieved, or inconclusive, with measured notes.
              Treating the named owner as closure ships ownership into a finished loop nobody has
              measured. Sync may surface an accountable owner beside Evidence, Verification, Proof,
              and Authorization. Surfacing is still a read. A named accountable human without a
              verified outcome leaves the operating loop open. Direct plant execute stays off. CMMS
              write-back is not a live product path.
            </p>

            <p>
              An accountable owner looks like a closed loop. The named person remained responsible
              after the work ran. The result was owned. The exception was owned. The learning was
              owned. The meeting then treats the case as finished: the measured result belongs to
              the name, the check belongs to the name, and the close belongs to the name. The name
              did none of that. It answered who remains responsible. It did not record the verified
              outcome against that ownership. It did not store achieved, not_achieved, or
              inconclusive. It did not measure the result.
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
              . This essay is why an accountable owner cannot be read as closure. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold the record. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter records named observation against the criteria the decision named. Proof may
              sit beside them when the chain is closed. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records who accepted the consequence and routed the intent. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter keeps the closed case. Naming who remains responsible is not that close.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Accountability answers who remains responsible
            </h2>

            <p>
              <Link
                href="/insights/authorization-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorization Is Not Accountability
              </Link>{' '}
              sits one step earlier. Authorization is a named human decision that accepts
              consequence and routes intent to authorized execution systems. That act answers who
              may start. Accountability is the continuing named ownership of results, exceptions,
              and learning after the plant move. This essay starts after that split has been kept.
              The record really can be accountability. A named human can own the result, the
              exception, and the learning. That ownership can be honest and still not be closure of
              the operating loop.
            </p>

            <p>
              Accountability has a narrower object than the close. It is about who remains
              responsible, not about whether the measured result was recorded against that
              ownership. A sentence that only names the owner does not say the outcome was
              achieved, not_achieved, or inconclusive. The named owner can be recorded. The verified
              outcome can still be unrecorded.
            </p>

            <p>
              <Link
                href="/insights/proof-is-not-authorization"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proof Is Not Authorization
              </Link>{' '}
              sits further back. A closed evidentiary chain for a specific claim under named
              conditions answers whether the claim held. That chain is not authorization to
              execute, not accountability for the outcome, and not closure of the operating loop. A
              closed chain can sit beside an accountable owner while the verified outcome is still
              open. Each word can be true in its own place. None of the earlier words fills the
              last one.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              states the act that starts the work. A named person accepts, rejects, escalates, or
              returns. The Human decision chapter records who accepted the consequence. That record
              answers who may start. Accountability answers who remains responsible after the plant
              move. Closure answers whether the measured result was recorded against that
              ownership. A named human decides. A named human remains accountable after the plant
              move. Those duties do not, by themselves, close the loop.
            </p>

            <p>
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps the write off the case. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records intent. ACTION remains a locked disposition until authorized
              execution systems write the work order or isolate the equipment. Authorization routes
              intent to those systems. Accountability keeps a named human on the result after the
              plant move. None of those records is the verified outcome. Sync does not write the
              work order. Sync does not clear equipment to run. Sync does not mark the case
              plant-execute.
            </p>

            <p className="text-xl font-semibold text-white">
              Accountability answers who remains responsible for results, exceptions, and learning
              after the plant move. It does not record the verified outcome against that ownership.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Closure is the verified outcome recorded against that ownership
            </h2>

            <p>
              Closure is not a property of the named owner. It is the verified outcome recorded
              against that ownership: a measured result, not named intent. The case stores
              achieved, not_achieved, or inconclusive, with measured notes, against the human who
              remains responsible. Until that record exists, the operating loop stays open, however
              completely the owner is named. Named intent is what the decision meant to do.
              Closure is what was measured after the plant move.
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
              notes. That check is the measured result. It is not, by itself, the named ownership
              of that record, and the named ownership is not, by itself, the check. A named
              accountable human without that record leaves the operating loop open.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning inherits achieved,
              not_achieved, or inconclusive, with measured notes. It does not inherit a name in
              place of that outcome. An accountable owner is part of the record the close is
              recorded against. The owner is not the inheritance. Sync must not auto-close,
              auto-authorize, or treat accountable closure as Learning credit.
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
              that comes after. Closure of the operating loop is the verified outcome recorded
              against named ownership. It is not a claim that the asset stays known-good. A
              verified outcome can be not_achieved or inconclusive. Those results still close the
              claim about what happened. They are not a green standing state, and they are not
              produced by naming the owner.
            </p>

            <p className="text-xl font-semibold text-white">
              Closure is the verified outcome recorded against that ownership — measured result, not
              named intent. A named accountable human without that record leaves the operating loop
              open.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A named owner does not close the loop
            </h2>

            <p>
              The failure mode is ordinary. The accountable owner is shown beside a maintenance
              decision or a production decision, and the room treats the loop as closed. The work
              ran. Someone owns it. The result is known. Each of those is a separate record. The
              name does not measure the outcome. The ownership can have been recorded. The verified
              outcome can still be open. The board looks settled because the accountable word was
              allowed to stand in for the measured result.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. An accountable name painted on that tile is not a stronger
              green. It is ownership sitting on a display. Go still required a named human
              decision. The result after the plant move still requires a verified outcome recorded
              against that ownership. The color supplies neither the decision, the ownership, nor
              the close.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling accountability closure
              crosses that boundary. Treating a verified outcome as if it were only a name, or
              treating the name as if it were the measured result, is the same confusion from the
              other side.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating accountability as closure ships a named owner into a finished loop nobody
              has measured. The owner can be recorded and the operating loop can still be open.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing an accountable owner beside Evidence, Verification, Proof, and Authorization
              is still a read
            </h2>

            <p>
              Sync may surface an accountable owner beside Evidence, Verification, Proof, and
              Authorization. Surfacing is still a read. The screen can show the owner next to the
              evidence the case holds, next to the named observation the verification step stores,
              next to a closed chain when the claim, the conditions, the checks, and the lineage
              are named, and next to the authorized state that answered who may start. Showing the
              owner does not write a CMMS work order. Showing the owner does not clear equipment to
              run. Showing the owner does not treat the case as plant-execute. Showing the owner
              does not record achieved, not_achieved, or inconclusive. A read of an accountable
              owner is still a read. A named accountable human without a verified outcome leaves
              the operating loop open.
            </p>

            <p>
              Evidence from the plant beats the accountable owner. If the evidence on the case does
              not support the named ownership, the case refuses. If the evidence records who
              remains responsible and does not record the verified outcome, the case may store the
              owner and must not store the loop as closed. The label does not fill the gap, and it
              does not close it. Sync refuses false precision. Sync refuses when evidence is insufficient.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry and assets are practice records. A practice record that says accountable is not a customer plant release, and it is not closure of the operating loop.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite an accountable owner when the named human and the results,
              exceptions, and learning that human owns are named. That citation is a record of who
              remains responsible after the plant move. It is not a record that the outcome was
              measured. A recommendation may say investigate because accountability is unrecorded,
              or because accountability is recorded and the verified outcome is still open. The
              proposal does not close the loop.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution, and named intent is not closure. An accountable label does not perform the
              write and does not record the measured result the work was meant to produce. Authorized
              execution systems write the work order or the isolation. Sync does not write the work
              order. Sync does not mark an asset closed. Sync does not write that state back. CMMS
              write-back is not a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The
              check is named observation against named criteria, stored as achieved, not_achieved,
              or inconclusive, with measured notes. That record is the closure of the claim about
              the outcome, recorded against the owner. It does not, by itself, turn the name into
              the measurement, and it does not turn an earlier authorization into the close. A
              named human decides. A named human remains accountable after the plant move. The
              operating loop stays open until the verified outcome is recorded against that
              ownership.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface an accountable owner beside Evidence, Verification, Proof, and
              Authorization. Surfacing is still a read. Sync refuses false precision. Sync refuses
              when evidence is insufficient. A named human decides. A named human remains
              accountable after the plant move. The accountable owner stays an answer to who
              remains responsible. Closure stays open until the verified outcome is recorded
              against that ownership. A named accountable human without a verified outcome leaves
              the operating loop open.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with
              measured notes. It does not keep accountability as closure. A later question that
              cites a named owner as if the outcome were already measured is citing ownership. Sync
              must not auto-close, auto-authorize, or treat accountable closure as Learning credit.
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
              directly. Evidence may hold what was shown and which conditions it named. Human
              decision may hold who accepted the consequence and who may start. Action may hold the
              intent that decision routed. Verification may hold the named observation. Learning
              may hold achieved, not_achieved, or inconclusive, with measured notes — the verified
              outcome recorded against the owner who remains responsible. None of those steps is an
              accountable name used as closure. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a named owner as the measured result. Later editions
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
              no plant, states no savings figure, and claims no prevented failure. It states no OEM limit
              and no operating threshold. It does not claim that an accountable owner is
              closure of the operating loop, writes a CMMS work order, clears equipment to run, or
              records the measured result. It does not claim that Sync executes plant work. It does
              not claim CMMS write-back as a shipped product.
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
              describes that journey. Walking those steps is not closure of the operating loop. The
              verification step is where named observation against named criteria is stored as
              achieved, not_achieved, or inconclusive, with measured notes. This edition does not
              describe plant execute, a live connector tag pull, CMMS write-back, SMTP invite
              delivery, or automatic revocation of access on expiry as live. It does not describe
              Sync writing work orders, clearing equipment to run, marking a case plant-execute,
              starting equipment, releasing a hold, or controlling the plant. Simulated or seeded telemetry
              and assets are practice records. They are not live plant results.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/authorization-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorization Is Not Accountability
              </Link>{' '}
              on why a named decision that accepts consequence is not continuing ownership of the
              outcome,{' '}
              <Link
                href="/insights/proof-is-not-authorization"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proof Is Not Authorization
              </Link>{' '}
              on why a closed chain is not authorization to execute,{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              on why a later case inherits the measured result and not a name,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded,{' '}
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              on why a verified record closes a claim about the past and is not assurance,{' '}
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              on why a green tile is not permission to run,{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why recorded intent is not plant execution,{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              on why the limit has to be stated, and{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              on why a named person still has to accept, reject, escalate, or return. A{' '}
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
              the measured result. The accountable owner does not close the loop.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>
              , on why closing a work order, a ticket, or a shift is still not cash collected or
              revenue recognized. Closure of the operating loop is the verified outcome recorded
              against named ownership. Cash collected is money received. Revenue recognized is the
              earning event on the books.
            </p>

            <p>
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              states the split after the commercial record. A named owner is not closure. Cash
              collected and invoices paid are not contribution margin or profitable ARR.
            </p>

            <p>
              <Link
                href="/insights/margin-is-not-profit"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Margin Is Not Profit
              </Link>{' '}
              states the split after the unit remainder. A named owner is not closure. Contribution
              margin and unit economics are not bottom-line profit or durable profitable revenue.
            </p>

            <p>
              <Link
                href="/insights/profit-is-not-value"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Profit Is Not Value
              </Link>{' '}
              states the split after the accounting result. A profit figure under named cost rules
              is not the verified operational outcome the Decision Case was opened to change.
            </p>

            <p>
              <Link
                href="/insights/value-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Value Is Not Outcome
              </Link>{' '}
              states the split after the reported result. A named owner is not closure. A favorable
              KPI is not the verified change the case named and authorized.
            </p>

            <p>
              <Link
                href="/insights/outcome-is-not-impact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Outcome Is Not Impact
              </Link>{' '}
              states the split after the measured result. A verified outcome recorded against named
              ownership is not attribution that a decision changed cash, risk, or capacity.
            </p>

            <p>
              <Link
                href="/insights/impact-is-not-revenue"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Impact Is Not Revenue
              </Link>{' '}
              states the split after the attribution. Business impact is not recognized sales. Risk
              avoided, capacity freed, or cost deferred is not a new sale on the books.
            </p>

            <p>
              <Link
                href="/insights/revenue-is-not-arr"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Revenue Is Not ARR
              </Link>{' '}
              states the split after the period booking. Recognized revenue is not the annualized
              value of recurring contracted subscription revenue that renews.
            </p>

            <p>
              <Link
                href="/insights/arr-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                ARR Is Not Cash
              </Link>{' '}
              states the split after the annualized contract. ARR is not money received.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries.
                Accountability is the continuing named ownership of results, exceptions, and
                learning after the plant move. Closure is the verified outcome recorded against
                that ownership — a measured result, not named intent. The Reliability Engineer
                workspace is where a signed-in Decision Case is completed. A Reliability Assessment
                is the bounded review when the question is whether the records can support a
                conclusion. None of those is a claim that Sync executes plant work, that CMMS
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
          <InsightNextSteps slug="accountability-is-not-closure" />
        </motion.article>
      </div>
    </main>
  );
}
