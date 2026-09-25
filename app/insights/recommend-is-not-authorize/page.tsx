'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('recommend-is-not-authorize');

export default function RecommendIsNotAuthorizePage() {
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
              Recommend Is Not Authorize
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A drafted next action can look finished. On a signed-in Decision Case it is still a
              proposal. A named person decides, and evidence has to be on the case before that
              proposal is treated as the decision.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Recommend is not authorize. A recommendation is an argument. Authorization is an act
              by a person who can be named.
            </p>

            <p>
              Reliability work produces drafts quickly. Stretch the interval. Replace the assembly.
              Hold the unit. Add a route. A reliability engineer, a contractor, or a model can write
              that sentence in minutes. The sentence is useful. It is not permission to do the work.
            </p>

            <p>
              Sync keeps the two apart on the signed-in Decision Case. A signed-in user can complete
              the case in a fixed order: Question, Evidence, Recommendation, Human decision, Action,
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
              . This essay is why the order refuses to collapse. The manual is the public contents.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The case opens on a question
            </h2>

            <p>
              A Decision Case opens on a reliability or maintenance question a person can decide:
              what happened, what should happen next, or what can wait. The question is recorded
              before evidence is attached and before anyone is asked to approve. A question that
              never acquires an evidence record remains a question.
            </p>

            <p>
              That first step is the{' '}
              <Link
                href={fieldManualPath('question')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question
              </Link>{' '}
              chapter. It does not name a site, a unit, or a result. It records the order.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Evidence is required before the proposal counts
            </h2>

            <p>
              Evidence is the part of the case a later reader can inspect. It holds observed fact,
              assumption, and what is still missing. The recommendation waits on that record. A
              proposal with no basis is not ready for a human decision.
            </p>

            <p className="text-xl font-semibold text-white">
              Evidence is required before a recommendation is treated as a decision.
            </p>

            <p>
              If the basis is not on the case, the text is still a suggestion, however complete the
              wording looks. Observed fact, assumption, and the gap have to stay distinct. Merging
              them is how a hypothesis becomes a work instruction without anyone noticing the
              switch.
            </p>

            <p>
              The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter states that gate. Stage-1 evidence is the record held on the case. A live
              connector that pulls historian or control-system tags sits outside this edition.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The recommendation is not the decision
            </h2>

            <p>
              The recommendation states a proposed next action, the evidence it uses, and the
              uncertainty it leaves in view. The signed-in Decision Case can hold that proposal so
              a person can read it. Drafting the proposal leaves authority where it already sits.
            </p>

            <p>
              A named person accepts, rejects, escalates, or returns the recommendation. That act
              is the human decision. The case keeps the person and the proposal together: who
              decided stays visible beside what was proposed. Until that act is recorded, the case
              is still a proposal. Authority stays with the person who can accept the operational
              consequence.
            </p>

            <p>
              Read those two steps as separate chapters:{' '}
              <Link
                href={fieldManualPath('recommendation')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommendation
              </Link>{' '}
              and{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>
              .
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Action, verification, and learning stay on the same record
            </h2>

            <p>
              Action is the record of the work the human decision authorized. It states what was
              approved to happen next and keeps that statement on the case, beside the question and
              the evidence. Work that follows the decision moves through the customer’s systems of
              record and the people who already hold operating authority.
            </p>

            <p>
              Verification records whether the authorized action did what it was supposed to do,
              and which evidence would show that. The check sits on the same record as the question,
              the recommendation, and the human decision. A live pull of control-system tags is not
              the proof this edition describes.
            </p>

            <p>
              Learning keeps the closed case so a later question can see what was believed, what
              was authorized, and what was checked. The signed-in loop ends on that record.
            </p>

            <p>
              Those chapters are{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>
              ,{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>
              , and{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>
              .
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
              directly. Each step below is a chapter stub. Later editions can deepen a chapter. The
              spine stays in this order.
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
              no plant, states no savings figure, and claims no prevented failure.
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
            </p>

            <p>
              Companion reading on why a recommendation still needs a reconstructable record:{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>
              .
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. The
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
        </motion.article>
      </div>
    </main>
  );
}
