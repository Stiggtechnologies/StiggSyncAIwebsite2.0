'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('action-is-not-execution');

export default function ActionIsNotExecutionPage() {
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
              Action Is Not Execution
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A Decision Case can hold an ACTION disposition: the work a named person intends.
              That record is not a work order, an isolation, or a change to the plant. Execution
              stays with the systems that already have authority to write it.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Action is not execution. Recording work intent on the Decision Case does not write a
              work order, isolate equipment, or dispatch work. Sync may recommend. A named human
              may decide. ACTION remains a locked disposition until authorized execution systems
              write the work order or isolate the equipment.
            </p>

            <p>
              Reliability work collapses the last words because they sound alike. Someone accepted
              the recommendation. The case says action. The meeting moves on. Later the record is
              cited as if the job had been done. The plant was not touched. A work order was not
              written. Equipment was not isolated. The case stored an intention, and the
              organization treated it as execution.
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
              . This essay is why the Action step cannot be read as plant execution. The manual is
              the public contents.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The disposition is not the job
            </h2>

            <p>
              Action is the record of the work the human decision authorized. It states what was
              approved to happen next and keeps that statement on the case, beside the question and
              the evidence. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter publishes that step. On the case it is a disposition: work intent, held with
              the decision that produced it.
            </p>

            <p>
              A disposition answers a narrow question. What work did the named person approve? It
              does not answer whether a work order exists, whether equipment was isolated, or
              whether anyone with operating authority has started the job.
            </p>

            <p className="text-xl font-semibold text-white">
              Those are execution records. They are written somewhere else.
            </p>

            <p>
              The work order is written in the system the site already uses to authorize
              maintenance — the customer’s CMMS or EAM, or the equivalent system of record. Isolation
              is the site’s existing practice for taking equipment out of service, under the people
              who already hold operating authority. The Decision Case does not become either record
              by storing the intent. Sync does not write them in this edition.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Sync may recommend. A human may decide. Neither executes.
            </h2>

            <p>
              Recommend is not authorize. A recommendation is an argument: a proposed next action,
              the evidence it uses, and the uncertainty it leaves in view. Drafting it leaves
              authority where it already sits. That split is the subject of{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>
              .
            </p>

            <p>
              A named person accepts, rejects, escalates, or returns the proposal. That act is the
              human decision. It records who decided. It still does not change the plant. Authority
              to accept a recommendation is not authority for software to dispatch work, open a
              permit, or isolate equipment.
            </p>

            <p>
              Action sits after that decision so the approved intent stays on the same record as
              the question and the evidence. It does not promote the decision into execution. Read
              the two steps as separate chapters:{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              and{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>
              .
            </p>

            <p>
              Direct plant execute stays off. The product does not dispatch unsupervised work to
              equipment. Work that follows the decision moves through the customer’s systems of
              record and the people who already hold operating authority.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">ACTION stays locked</h2>

            <p className="text-xl font-semibold text-white">
              ACTION remains locked until authorized execution systems write the work order or
              isolate the equipment.
            </p>

            <p>
              Locked means the Decision Case may store the disposition and may not treat that
              storage as the job. Until the customer’s authorized execution systems have written
              the work order, or the site’s isolation practice has taken the equipment out of
              service, the case has an intent. It does not have execution.
            </p>

            <p>
              The write belongs to those systems and to the people who already operate them. Sync
              does not perform it. This edition does not describe a live copy of that write
              returning into the case. When an authorized execution system does write the work
              order or record the isolation, that write is still their record. The Decision Case
              can keep the disposition beside the question. It does not absorb the CMMS, the
              permit, or the plant.
            </p>

            <p>
              The lock is the boundary in this edition, not a claim that a later integration has
              shipped. Stage-1 readiness means a signed-in user can complete the Decision Case.
              Plant execute is outside that claim. A live connector that pulls historian or
              control-system tags sits outside it as well. Simulated or seeded telemetry and assets
              are practice records. They are not a work order, and they are not an isolation.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Verification and learning cannot start from a locked intent
            </h2>

            <p>
              Authorization records who decided. The ACTION disposition records what was approved
              to happen next. Neither records whether the work was executed, or whether it did what
              it was supposed to do.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              states the next gate. After a named human authorizes an action, the loop is not
              closed until verification is recorded. A disposition that never became a work order
              has nothing executed to check. A work order that was written and never checked is
              still an open case. The verification entry keeps three things distinct: what was
              supposed to change, which evidence would show it, and what was observed — including a
              result that did not match. A locked intent supplies only the intention.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              states what a later case is allowed to inherit. Learning keeps the closed case. It
              does not keep a hoped-for outcome, a recommendation that was never authorized, or an
              action that was never verified. An ACTION disposition is a further record that does
              not count. A later question that cites the action as if the job were finished is
              citing intent. Unless verification holds an observed outcome, there is nothing
              verified to pass forward.
            </p>

            <p>
              Evidence still has to be reconstructable.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              asks whether a later reviewer can rebuild the proposal. The same reviewer should be
              able to tell the disposition from the work order and the isolation. A lesson that
              merges them is a story about work that may not have been done.
            </p>

            <p>
              Read the gate in the{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter, then{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>
              . Both sit after Action. Neither treats the disposition as the result.
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
              directly. Action is step 05. It sits after the human decision and before
              verification. Later editions can deepen a chapter. The spine stays in this order.
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
              no plant, states no savings figure, and claims no prevented failure. It states no OEM
              limit and no operating threshold.
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
              describes that journey. This edition does not describe plant execute, a live connector
              tag pull, SMTP invite delivery, or automatic revocation of access on expiry as live.
              It does not describe Sync writing work orders or isolating equipment. Simulated or
              seeded telemetry and assets are practice records. They are not live plant results.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>
              , on why plant coverage is not control authority over work, isolation, or change.
              Companion reading:{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a drafted proposal is not permission,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded, and{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              on why a later case inherits the closed record, not the work intent. A{' '}
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
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter is the public statement of the step this essay describes.
            </p>

            <p>
              <Link
                href="/insights/proof-is-not-authorization"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proof Is Not Authorization
              </Link>{' '}
              states the split after a claim is proven. A closed chain does not unlock ACTION and
              does not execute plant work. Authorization is a named human decision that routes
              intent to authorized execution systems.
            </p>

            <p>
              <Link
                href="/insights/authorization-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorization Is Not Accountability
              </Link>{' '}
              states the split after that routing. ACTION records intent. Authorization answers
              who may start. Neither owns the result, the exception, or the learning after
              execution.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries, including
                the action step. The Reliability Engineer workspace is where a signed-in Decision
                Case is completed. A Reliability Assessment is the bounded review when the question
                is whether the records can support a conclusion.
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
          <InsightNextSteps slug="action-is-not-execution" />
        </motion.article>
      </div>
    </main>
  );
}
