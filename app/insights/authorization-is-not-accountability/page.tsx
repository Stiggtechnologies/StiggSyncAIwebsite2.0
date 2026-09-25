'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('authorization-is-not-accountability');

export default function AuthorizationIsNotAccountabilityPage() {
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
              Authorization Is Not Accountability
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Authorization is a named human decision that accepts consequence and routes intent to
              authorized execution systems. It answers who may start. Accountability is the
              continuing named ownership of results, exceptions, and learning after the work runs.
              The decision that starts the work is still not accountability for the outcome.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Authorization is not accountability. Authorization is a named human decision that
              accepts consequence and routes intent to authorized execution systems. That act
              answers who may start. Accountability is a different duty. A named human keeps
              ownership of the result, the exception, and the learning after execution. Treating
              the authorized state as accountability ships a start decision into ownership of
              outcomes nobody has kept. Sync may surface an authorized state beside Evidence,
              Verification, and Proof. Surfacing is still a read. A named human remains
              accountable after the plant move. Direct plant execute stays off. CMMS write-back is
              not a live product path.
            </p>

            <p>
              An authorized state looks like ownership. The named person accepted the consequence.
              The intent was routed. The work ran in the systems that already had authority to
              execute. The meeting then treats the case as closed: the result belongs to the stamp,
              the exception belongs to the stamp, and the learning belongs to the stamp. The stamp
              did none of that. It answered who may start. It did not keep the result after the
              plant move. It did not own the exception. It did not record the learning.
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
              . This essay is why an authorized state cannot be read as accountability. The{' '}
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
              chapter records who accepted the consequence and routed the intent. None of those
              chapters keeps the continuing ownership of the outcome after the work runs.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Authorization answers who may start
            </h2>

            <p>
              <Link
                href="/insights/proof-is-not-authorization"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proof Is Not Authorization
              </Link>{' '}
              sits one step earlier. A closed evidentiary chain for a specific claim under named
              conditions answers whether the claim held. Authorization is the separate named human
              decision that accepts consequence and routes intent to authorized execution systems.
              This essay starts after that split has been kept. The record really can be
              authorization. A named person can have accepted, rejected, escalated, or returned.
              The accepted act can have routed intent. That decision can be honest and still not
              be accountability for the outcome after the work runs.
            </p>

            <p>
              Authorization has a narrower object than the result. It is about who may start, not
              about who owns what happens after the start. A sentence that only says the work was
              authorized does not say who owns the result, who owns the exception, or who owns the
              learning. The named decision can be recorded. The continuing ownership can still be
              unrecorded.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              states the act. A named person accepts, rejects, escalates, or returns. The Human
              decision chapter records who accepted the consequence. That record answers who may
              start. It does not, by itself, keep ownership of the result after execution. A named human decides.
              A named human remains accountable after the plant move. Those are two
              duties. Recording the first does not record the second.
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
              intent to those systems. It does not perform the write, and it does not own the
              outcome the write produces. Sync does not write the work order. Sync does not clear
              equipment to run. Sync does not mark the case plant-execute.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              is the split one step earlier than the human decision. A recommendation is an
              argument. Authorization is an act by a person who can be named. This essay is the
              split after that act. A named decision that cites itself as accountability is still
              only the start. Authorization is not accountability, and a recommendation is not
              authorization. They fail in different places. Collapsing them ships the same false
              ownership.
            </p>

            <p className="text-xl font-semibold text-white">
              Authorization answers who may start. It does not keep the result, the exception, or
              the learning after the work runs.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Accountability is continuing named ownership after execution
            </h2>

            <p>
              Accountability is not a property of the authorized state. It is continuing named
              ownership of results, exceptions, and learning after execution. A named human owns
              the result after the work runs, owns the exception when the result is not what the
              decision named, and owns the learning the case is allowed to pass forward. The
              authorized state can sit on the case while that ownership is still unrecorded. Until
              the ownership is kept, the case is not accountable for the outcome, however complete
              the authorization is.
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
              notes. That check is the record of what happened. It is not, by itself, the named
              ownership of that record. A reproducible check can close a claim about the past.
              Accountability is who keeps that claim, the exception, and the learning after
              execution.
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
              that comes after. Proof is the closed chain for a specific claim. Authorization is
              who may start. Accountability is who owns the outcome after the work runs. Each word
              can be true in its own place. None of the earlier words fills the last one.
            </p>

            <p>
              <Link
                href="/insights/assured-is-not-proven"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assured Is Not Proven
              </Link>{' '}
              sits further back. Assurance is time-bounded confidence that an asset stays in a
              known-good state under operating conditions, with ownership and monitoring. That
              standing claim can be probabilistic. It is not proof of a specific claim under named
              conditions, and it is not accountability for a specific outcome after a specific
              authorized start.
            </p>

            <p>
              The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter keeps the closed case: achieved, not_achieved, or inconclusive, with measured
              notes. Learning is part of accountability. It is what a later case is allowed to
              inherit. An authorization stamp is not that inheritance. Sync must not auto-close,
              auto-authorize, or treat authorized accountability as Learning credit.
            </p>

            <p className="text-xl font-semibold text-white">
              Accountability is the continuing named ownership of results, exceptions, and learning
              after the work runs. The authorized state does not keep that ownership.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              An authorized state does not own the outcome
            </h2>

            <p>
              The failure mode is ordinary. The authorized state is shown beside a maintenance
              decision or a production decision, and the room treats authorized as accountable. The
              work ran. The result is owned. The exception is owned. The learning is closed. Each
              of those is a continuing duty. The stamp does not keep it. The authorization can have
              been recorded. The accountability can still be open. The board looks settled because
              the authorized word was allowed to stand in for the owner.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. An authorized state painted on that tile is not a stronger
              green. It is a start decision sitting on a display. Go still required a named human
              decision. The result after the plant move still requires a named human to remain
              accountable. The color supplies neither the decision nor the ownership. The
              authorized state supplies the decision to start. It does not supply the ownership.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling authorization
              accountability crosses that boundary. Treating a named owner as if the ownership were
              only the start decision, or treating the start decision as if it were the owner, is
              the same confusion from the other side.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating authorization as accountability ships a start decision into ownership of
              results nobody has kept. The decision can be recorded and the ownership can still be
              open.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing an authorized state beside Evidence, Verification, and Proof is still a read
            </h2>

            <p>
              Sync may surface an authorized state beside Evidence, Verification, and Proof.
              Surfacing is still a read. The screen can show the state next to the evidence the
              case holds, next to the named observation the verification step stores, and next to a
              closed chain when the claim, the conditions, the checks, and the lineage are named.
              Showing it does not write a CMMS work order. Showing it does not clear equipment to
              run. Showing it does not treat the case as plant-execute. Showing it does not assign
              the result, the exception, or the learning. A read of an authorized state is still a
              read. A named human remains accountable after the plant move.
            </p>

            <p>
              Evidence from the plant beats the authorized state. If the evidence on the case does
              not support the named decision, the case refuses. If the evidence records the
              authorization and does not record who owns the outcome after execution, the case may
              store the authorized state and must not store the case as accountable for the result.
              The label does not fill the gap, and it does not close it. Sync refuses false
              precision. Sync refuses when evidence is insufficient.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry and assets are practice records. A practice record that says authorized is not a customer plant release, and it is not accountability for the outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite an authorized state when the named person, the consequence
              accepted, and the intent routed are named. That citation is a record that a start
              was authorized, or that it was not. It is not a record that the outcome is owned. A
              recommendation may say investigate because authorization is unrecorded, or because
              authorization is recorded and accountability for the outcome is still open. The
              proposal does not own the result.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution. An authorized label does not perform the write and does not keep the
              consequence the work was meant to carry after the plant move. Authorized execution
              systems write the work order or the isolation. Sync does not write the work order.
              Sync does not mark an asset accountable. Sync does not write that state back. CMMS
              write-back is not a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The
              check is named observation against named criteria, stored as achieved, not_achieved,
              or inconclusive, with measured notes. That record can close a later claim about the
              action. It does not, by itself, make the authorizing decision into accountability for
              the outcome, and it does not turn an earlier authorization into ownership of the
              exception. A named human still decides. A named human remains accountable after the
              plant move.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface an authorized state beside Evidence, Verification, and Proof.
              Surfacing is still a read. Sync refuses false precision. Sync refuses when evidence
              is insufficient. A named human still decides. A named human remains accountable after
              the plant move. The authorized state stays an answer to who may start. Accountability
              stays open until a named human keeps ownership of the result, the exception, and the
              learning after execution.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with
              measured notes. It does not keep authorization as accountability. A later question
              that cites an authorized start as if the outcome were already owned is citing a start
              decision. Sync must not auto-close, auto-authorize, or treat authorized
              accountability as Learning credit.
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
              may hold achieved, not_achieved, or inconclusive, with measured notes, and with it
              the continuing record of the result. None of those steps is an authorized state used
              as accountability. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a start decision as ownership of the outcome. Later
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
              and no operating threshold. It does not claim that an authorized state is
              accountability for the outcome, writes a CMMS work order, clears equipment to run, or
              keeps the result after the plant move. It does not claim that Sync executes plant work.
              It does not claim CMMS write-back as a shipped product.
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
              describes that journey. Walking those steps is not accountability for the outcome.
              The human decision step is where a named person accepts the consequence and answers
              who may start. This edition does not describe plant execute, a live connector tag pull, CMMS write-back, SMTP invite delivery, or automatic revocation of access on
              expiry as live. It does not describe Sync writing work orders, clearing equipment to
              run, marking a case plant-execute, starting equipment, releasing a hold, or
              controlling the plant. Simulated or seeded telemetry and assets are practice records.
              They are not live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/proof-is-not-authorization"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proof Is Not Authorization
              </Link>{' '}
              on why a closed chain is not authorization to execute,{' '}
              <Link
                href="/insights/assured-is-not-proven"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assured Is Not Proven
              </Link>{' '}
              on why standing confidence is not a closed chain,{' '}
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              on why a verified record closes a claim about the past and is not assurance,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded,{' '}
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
              is a governed proof around one operating decision. The Human decision chapter records
              who may start. The authorized state does not own the outcome.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>
              , on why a named human who owns consequences after authorized execution is still not
              loop closure. Accountability answers who remains responsible for results, exceptions,
              and learning after the plant move. Closure is the verified outcome recorded against
              that ownership — a measured result, not named intent.
            </p>

            <p>
              <Link
                href="/insights/profit-is-not-value"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Profit Is Not Value
              </Link>{' '}
              states the split after the accounting result. A profit figure under named cost rules
              is not the verified operational outcome. Authorization does not turn that figure into
              value.
            </p>

            <p>
              <Link
                href="/insights/outcome-is-not-impact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Outcome Is Not Impact
              </Link>{' '}
              states the split after the measured result. Authorization answers who may start. A
              measured outcome is not attribution that the decision changed cash, risk, or capacity.
            </p>

            <p>
              <Link
                href="/insights/impact-is-not-revenue"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Impact Is Not Revenue
              </Link>{' '}
              states the split after the attribution. Authorization answers who may start. An impact
              claim is not recognized sales.
            </p>

            <p>
              <Link
                href="/insights/revenue-is-not-arr"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Revenue Is Not ARR
              </Link>{' '}
              states the split after the period booking. Authorization answers who may start. A
              recognized sale is not ARR.
            </p>

            <p>
              <Link
                href="/insights/arr-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                ARR Is Not Cash
              </Link>{' '}
              states the split after the annualized contract. Authorization answers who may start.
              An ARR figure is not cash collected.
            </p>

            <p>
              <Link
                href="/insights/cash-is-not-runway"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Runway
              </Link>{' '}
              states the split after the cash balance. Authorization answers who may start. A cash
              balance is not runway.
            </p>

            <p>
              <Link
                href="/insights/runway-is-not-survival"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Runway Is Not Survival
              </Link>{' '}
              states the split after the runway figure. Authorization answers who may start. A
              runway figure is not survival.
            </p>

            <p>
              <Link
                href="/insights/survival-is-not-solvency"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Survival Is Not Solvency
              </Link>{' '}
              states the split after survival. Authorization answers who may start. A survival note
              is not solvency.
            </p>

            <p>
              <Link
                href="/insights/solvency-is-not-liquidity"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Solvency Is Not Liquidity
              </Link>{' '}
              states the split after solvency. Authorization answers who may start. A solvency note
              is not liquidity.
            </p>

            <p>
              <Link
                href="/insights/liquidity-is-not-flexibility"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Liquidity Is Not Flexibility
              </Link>{' '}
              states the split after liquidity. Authorization answers who may start. A liquidity
              note is not flexibility.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries.
                Authorization is a named human decision that accepts consequence and routes intent
                to authorized execution systems. It answers who may start. Accountability is the
                continuing named ownership of results, exceptions, and learning after the work
                runs. The Reliability Engineer workspace is where a signed-in Decision Case is
                completed. A Reliability Assessment is the bounded review when the question is
                whether the records can support a conclusion. None of those is a claim that Sync
                executes plant work, that CMMS write-back is live, or that self-guided onboarding
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
          <InsightNextSteps slug="authorization-is-not-accountability" />
        </motion.article>
      </div>
    </main>
  );
}
