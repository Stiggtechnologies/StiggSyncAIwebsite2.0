'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('proof-is-not-authorization');

export default function ProofIsNotAuthorizationPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Proof Is Not Authorization</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A closed evidentiary chain for a specific claim under named conditions is proof. It
              answers whether the claim held. It is still not authorization to execute plant work,
              write a CMMS work order, clear equipment to run, or treat the case as plant-execute.
              Authorization is a separate named human decision that accepts consequence and routes
              intent to authorized execution systems.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Proof is not authorization. Proof is a closed evidentiary chain for a specific claim
              under named conditions: reproducible checks, lineage, and a decision authority that
              can refuse when evidence is incomplete. That chain is claim-scoped and falsifiable.
              It answers whether the claim held. Authorization is a different act. A named human
              accepts the consequence and routes intent to the systems that already have authority
              to execute. Treating the closed chain as authorization ships a settled claim into
              plant work that nobody has accepted. Sync may surface proof beside Evidence and
              Verification when the claim, the conditions, the checks, and the lineage are named.
              Surfacing is still a read. A named human decides. Direct plant execute stays off.
              CMMS write-back is not a live product path.
            </p>

            <p>
              A closed chain looks like permission. The claim is specific. The conditions are
              named. The checks can be repeated. The lineage is there. A decision authority could
              have refused because the evidence was incomplete, and did not. The meeting then
              treats the case as plant-execute: write the work order, clear the equipment to run,
              send the crew. The chain did none of that. It answered whether the claim held. It
              did not accept the consequence of the next action. It did not write that action into
              an authorized execution system.
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
              . This essay is why a closed chain cannot be read as authorization. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold the chain. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter records named observation against the criteria the decision named. Neither
              chapter accepts the consequence, and neither chapter writes the work.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Proof answers whether a claim held
            </h2>

            <p>
              <Link
                href="/insights/assured-is-not-proven"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assured Is Not Proven
              </Link>{' '}
              sits one step earlier. Assurance is time-bounded confidence that an asset stays in a
              known-good state under operating conditions, with ownership and monitoring. That
              standing claim can be probabilistic. Proof is the closed evidentiary chain for a
              specific claim under named conditions. This essay starts after that split has been
              kept. The record really can be proof. The claim can be specific. The conditions can
              be named. The checks can be reproducible. The lineage can be present. A decision
              authority can have been able to refuse when evidence is incomplete. That closed chain
              can be honest and still not be authorization.
            </p>

            <p>
              Proof has a narrower object than the next action. It is about one claim, not about
              permission to act on every consequence of that claim. The claim held, or it did not,
              or the check was inconclusive. A sentence that only says the claim was proven does
              not say who accepted the consequence of executing the work, writing the work order,
              or clearing the equipment to run. Claim-scoped means the chain answers that claim.
              Falsifiable means a failed check would withdraw it. Neither property is a grant of
              authority.
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
              notes. Recording that check closes a claim about the past. It does not authorize the
              next action. A reproducible check is that observation, available to be run again
              against the same criteria. A label that says proven is not the observation, and the
              observation is not authorization.
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
              that comes after. Proof is the closed chain for a specific claim. Each word can be
              true in its own tense. None of them is authorization to execute plant work.
            </p>

            <p className="text-xl font-semibold text-white">
              Proof answers whether a claim held under named conditions. It does not accept the
              consequence of the next action.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Authorization is a separate named human decision
            </h2>

            <p>
              Authorization is not a property of the evidence. It is an act. A named human decides.
              That person accepts, rejects, escalates, or returns the recommendation, and in
              accepting takes the consequence of what follows. The closed chain can sit on the case
              while that act is still unrecorded. Until the act is recorded, the case is not
              authorized, however complete the chain is.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              states the act. A named person accepts, rejects, escalates, or returns. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records who accepted the consequence. That record is the decision authority
              for the claim on the case, including the right to refuse when evidence is incomplete.
              It is also the only place on the case where authorization is named. The chain does
              not fill a missing name. Proof without that act is a settled claim and an open
              decision.
            </p>

            <p>
              The decision routes intent. It does not perform the write. Intent on the case says
              what the named person means to have done. Authorized execution systems are the
              systems that already accept the command: the CMMS that writes the work order, the
              system that records the isolation, the control path that starts or stops equipment.
              Routing intent means the named decision points at those systems. It does not make
              Sync one of them.
            </p>

            <p>
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps that write off the case. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records intent. ACTION remains a locked disposition until authorized
              execution systems write the work order or isolate the equipment. A closed chain does
              not unlock ACTION. Sync does not write the work order. Sync does not clear equipment
              to run. Sync does not mark the case plant-execute.
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
              split after the chain has closed. A proposal that cites proof is still a proposal. A
              closed chain that cites itself is still not the act. Proof is not authorization, and
              a recommendation is not authorization. They fail in different places. Collapsing
              them ships the same false permission.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A closed chain does not clear equipment to run
            </h2>

            <p>
              The failure mode is ordinary. The chain is shown beside a maintenance decision or a
              production decision, and the room treats proven as authorized. Write the CMMS work
              order. Clear the equipment to run. Return the asset to service. Release the hold.
              Treat the case as plant-execute. Each of those is a consequence. The chain does not
              accept it. The claim can have held. The authorization can still be unrecorded. The
              board looks settled because the proof word was allowed to stand in for the decision.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A proof record painted on that tile is not a stronger green.
              It is a closed chain sitting on a display. Go still requires a named human decision.
              Clearing equipment to run is that decision, routed to the system that can carry it
              out. The color supplies neither the decision nor the write. The chain supplies
              neither one either.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling proof authorization
              crosses that boundary. Treating a named decision as if it were only a closed chain,
              or treating the closed chain as if it were the decision, is the same confusion from
              the other side.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating proof as authorization ships a settled claim into plant work that nobody
              has accepted. The chain can be closed and the decision can still be open.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing proof beside Evidence and Verification is still a read
            </h2>

            <p>
              Sync may surface proof beside Evidence and Verification when the claim, the
              conditions, the checks, and the lineage are named. Surfacing is still a read. The
              screen can show the chain next to the evidence the case holds and next to the named
              observation the verification step stores. Showing it does not write a CMMS work
              order. Showing it does not clear equipment to run. Showing it does not treat the
              case as plant-execute. A read of a closed chain is still a read.
            </p>

            <p>
              Evidence from the plant beats the chain. If the evidence on the case does not
              support the specific claim under the named conditions, the case refuses. If the
              evidence closes the chain and does not record a named human decision, the case may
              store the proof and must not store the case as authorized. The label does not fill
              the gap, and it does not close it. Sync refuses false precision. Sync refuses when
              evidence is insufficient.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. Simulated or seeded
              telemetry and assets are practice records. A practice record that says proven is not a customer plant release, and it is not authorization to execute.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite a closed chain when the claim, the conditions, the reproducible
              checks, and the lineage are named. That citation is a record that a specific claim
              held, or that it did not. It is not a record that plant work was authorized. The
              Evidence chapter publishes that step. A recommendation may say investigate because
              the chain is open, or because the chain is closed and authorization is still
              unrecorded. The proposal does not authorize the next action.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution. A proof label does not perform the write and does not accept the
              consequence the work was meant to carry. Authorized execution systems write the work
              order or the isolation. Sync does not write the work order. Sync does not mark an
              asset authorized. Sync does not write that state back. CMMS write-back is not a live
              product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The
              check is named observation against named criteria, stored as achieved, not_achieved,
              or inconclusive, with measured notes. That record can close a later claim about the
              action. It does not, by itself, authorize the action it is checking, and it does not
              turn an earlier proof into permission. A named human still decides.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface proof beside Evidence and Verification when the claim, the
              conditions, the checks, and the lineage are named. Surfacing is still a read. Sync
              refuses false precision. Sync refuses when evidence is insufficient. A named human
              still decides. The chain stays an answer to whether the claim held. Authorization
              stays unnamed until a named human accepts the consequence and routes intent to
              authorized execution systems.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with
              measured notes. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter keeps that record. It does not keep proof as authorization. A later question
              that cites a proven claim as if the work were already authorized is citing a closed
              chain. Sync must not auto-close, auto-authorize, or treat proven authorization as
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
              directly. Evidence may hold what the chain showed and which conditions it named.
              Human decision may hold who accepted the consequence. Action may hold the intent that
              decision routed. Verification may hold the named observation. Learning may hold
              achieved, not_achieved, or inconclusive, with measured notes. None of those steps is
              a proof label used as authorization. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a closed chain as permission to execute. Later
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
              and no operating threshold. It does not claim that a closed chain authorizes
              plant work, writes a CMMS work order, clears equipment to run, or keeps an asset
              known-good. It does not claim that Sync executes plant work. It does not claim CMMS
              write-back as a shipped product.
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
              describes that journey. Walking those steps is not authorization. The human decision
              step is where a named person accepts the consequence. This edition does not describe
              plant execute, a live connector tag pull, CMMS write-back, SMTP invite delivery, or
              automatic revocation of access on expiry as live. It does not describe Sync writing
              work orders, clearing equipment to run, marking a case plant-execute, starting
              equipment, releasing a hold, or controlling the plant. Simulated or seeded telemetry
              and assets are practice records. They are not live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
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
              is a governed proof around one operating decision. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records who accepted the consequence. The closed chain does not authorize
              the work.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Proof is a
                closed evidentiary chain for a specific claim under named conditions. It answers
                whether the claim held. Authorization is a separate named human decision that
                accepts consequence and routes intent to authorized execution systems. The
                Reliability Engineer workspace is where a signed-in Decision Case is completed. A
                Reliability Assessment is the bounded review when the question is whether the
                records can support a conclusion. None of those is a claim that Sync executes plant
                work, that CMMS write-back is live, or that self-guided onboarding is a live
                product path.
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
          <InsightNextSteps slug="proof-is-not-authorization" />
        </motion.article>
      </div>
    </main>
  );
}
