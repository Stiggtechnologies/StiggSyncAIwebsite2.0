'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('question-is-not-decision');

export default function QuestionIsNotDecisionPage() {
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
              Question Is Not Decision
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A Decision Case opens on a reliability or maintenance question a named person can
              decide. That question is written down before evidence and before a recommendation.
              Writing it down does not decide the case.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              A Decision Case opens on a reliability or maintenance question a named person can
              decide. The question is recorded before evidence or recommendation. Recording or
              refining a question is not the decision. Sync may hold the question and gather
              approved evidence; a named human accepts, rejects, escalates, or returns. An open
              question, a clarified question, or a rephrased question must not be read as
              authorization, execution, or plant control.
            </p>

            <p>
              Reliability work collapses the first words because a clear question sounds like
              progress. Someone names the asset, the failure, or the deferral. The meeting tightens
              the sentence. The case now holds a better line. Later that line is cited as if the
              work were approved, the job were released, or the plant were under direction. It was
              not. The record stored a question. No named person had accepted, rejected, escalated,
              or returned a recommendation.
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
              . This essay is why the Question step cannot be read as the human decision. The
              manual is the public contents. The{' '}
              <Link
                href={fieldManualPath('question')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question
              </Link>{' '}
              chapter and the{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter are the two steps this essay keeps apart.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The case opens on a question
            </h2>

            <p>
              The opening record is a reliability or maintenance question a named person can
              decide. It can be a failure that needs a cause. It can be a job someone wants to
              defer. It can be a condition someone wants watched until the next outage. The{' '}
              <Link
                href={fieldManualPath('question')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question
              </Link>{' '}
              chapter publishes that opening. It is step 01 on the spine.
            </p>

            <p>
              The question is recorded before evidence or recommendation. Evidence is not attached
              yet. No proposed next action has been drafted. Nobody has been asked to approve. The
              case has a subject a person could decide. It does not have the decision.
            </p>

            <p className="text-xl font-semibold text-white">
              A question that never leaves this step remains a question.
            </p>

            <p>
              Sharper wording does not advance it. Noting a missing fact does not advance it. The
              signed-in case can store the sentence so the loop has a start. Storage is not
              acceptance.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Recording or refining a question is not the decision
            </h2>

            <p>
              Sync may hold the question. Holding it means the signed-in case keeps the sentence
              where the loop starts, so a later reader can see what was asked. Sync may gather
              approved evidence onto that same case: observed fact, assumption, and what is still
              missing. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter publishes that step. Stage-1 evidence is the record held on the case. A live
              connector that pulls historian or control-system tags sits outside this edition.
              Gathering that record does not accept a proposal. There may not be a proposal yet.
            </p>

            <p>
              Refining is the same kind of work. The question is narrowed to one asset. “Look at
              the pump” becomes “can this seal wait until the next outage.” The words are clearer.
              Authority has not moved. An open question, a clarified question, and a rephrased
              question are still questions.
            </p>

            <p className="text-xl font-semibold text-white">
              Recording or refining a question is not the decision.
            </p>

            <p>
              A later reader should be able to tell those three from a decision. If the case shows
              only the question, nothing has been accepted, rejected, escalated, or returned. If
              evidence has been added, the case shows a basis. It still does not show who decided.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The decision is a named human act
            </h2>

            <p>
              The human decision comes after a recommendation exists to decide. A recommendation
              states a proposed next action, the evidence it uses, and the uncertainty it leaves in
              view. Drafting that proposal leaves authority where it already sits. That split is
              the subject of{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>
              .
            </p>

            <p>
              A named human accepts, rejects, escalates, or returns. That act is the decision. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter publishes it. The case keeps the person beside the proposal: who decided, and
              which recommendation they decided. Until a named person has made that act, the case
              holds a question and, at most, a proposal. The person who can accept the operational
              consequence is still the one who decides.
            </p>

            <p>
              Read the two steps as separate chapters:{' '}
              <Link
                href={fieldManualPath('question')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question
              </Link>{' '}
              and{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>
              . The first is recorded before evidence or recommendation. The second is the named
              act on a recommendation. A well-phrased question is not a substitute for that act.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              An open question is not authorization, execution, or control
            </h2>

            <p className="text-xl font-semibold text-white">
              An open question, a clarified question, or a rephrased question must not be read as
              authorization, execution, or plant control.
            </p>

            <p>
              Authorization is the named human decision on a recommendation. The question sits
              before that decision. Clarifying the wording does not grant permission to do the
              work. Rephrasing it does not either.
            </p>

            <p>
              The same question does not execute the work.{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              states the later boundary. An ACTION disposition records work intent after a human
              decision. It does not write a work order, isolate equipment, or change the plant. A
              question is earlier than that disposition. It cannot be read as execution. ACTION
              stays locked until authorized execution systems write the work order or isolate the
              equipment. A question does not unlock it.
            </p>

            <p>
              It also does not control the plant.{' '}
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              states why sensors, CMMS rows, dashboards, patrol routes, and a recorded coverage gap
              are not control authority over work, isolation, or change. A question about coverage
              is still a question. Sync may hold the question and gather approved evidence. Sync
              may recommend. A named human decides. Authorized execution systems write the work
              order or the isolation. None of that follows from the question alone.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              states the gate after an authorized action. The case is not closed until the check is
              recorded. A question that was never decided has nothing authorized to check. Citing
              the question as if the outcome were known treats an opening record as a closed case.
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
              directly. Question is step 01. Human decision is step 04. The question is recorded
              before evidence or recommendation. The decision is the named act that comes after a
              recommendation. Later editions can deepen a chapter. The spine stays in this order.
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
              limit and no operating threshold. It does not claim that recording a question
              authorizes work, executes work, or controls a plant.
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
              It does not describe Sync writing work orders, isolating equipment, or controlling the
              plant. Simulated or seeded telemetry and assets are practice records. They are not
              live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              on why plant coverage is not control authority over work, isolation, or change,{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why a recorded ACTION disposition is not plant execution,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a drafted proposal is not permission, and{' '}
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
              is a governed proof around one operating decision. The{' '}
              <Link
                href={fieldManualPath('question')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question
              </Link>{' '}
              chapter is where the case opens. It is not the decision.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries, including
                the question a named person can decide and the human act that decides it. The
                Reliability Engineer workspace is where a signed-in Decision Case is completed. A
                Reliability Assessment is the bounded review when the question is whether the
                records can support a conclusion.
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
          <InsightNextSteps slug="question-is-not-decision" />
        </motion.article>
      </div>
    </main>
  );
}
