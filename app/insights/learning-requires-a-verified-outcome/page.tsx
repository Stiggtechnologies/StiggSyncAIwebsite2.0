'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('learning-requires-a-verified-outcome');

export default function LearningRequiresAVerifiedOutcomePage() {
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
              Learning Requires a Verified Outcome
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Verification can sit on the case and still be misread. A later question does not
              inherit the intention. It inherits what was checked. Learning is that inheritance,
              and it requires a verified outcome.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              After verification is recorded, Learning is what closes the loop for the next case.
              It is not a hoped-for outcome. It is not a recommendation that was never authorized.
              It is not an action that was never verified.
            </p>

            <p>
              Reliability organizations reuse conclusions. The interval was stretched and the unit
              ran. The assembly was replaced and the failure stayed quiet. Those sentences travel
              into the next meeting as if they were evidence. Often they are memories of an
              intention. The check was never written down, so the next case starts from a story.
            </p>

            <p>
              Sync keeps Learning on the signed-in Decision Case. A signed-in user completes the
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
              . This essay is why the last step waits on a verified outcome, and why what it keeps
              is for the next case. The manual is the public contents.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The loop closes for the next question
            </h2>

            <p>
              Learning keeps the closed case — question, evidence, recommendation, human decision,
              action, and verification — so a later question can see what was believed, what was
              authorized, and what was checked. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes that rule. It does not publish a result from a customer site.
            </p>

            <p>
              The step is last in the spine because it is the handoff. Verification answers
              whether this action did what it was supposed to do. Learning answers what a later
              question is allowed to carry forward from that answer.
            </p>

            <p className="text-xl font-semibold text-white">
              A case that stops at verification has a check. A case that records learning has a
              check a later reader can find beside the question that produced it.
            </p>

            <p>
              The difference is reuse. Without the closed record, the next recommendation has to
              reconstruct the story from memory, or invent one. The organization then treats a
              recollection as the basis for the following decision. Each reuse makes the story
              sound more certain, and the original check — if it existed — stays off the page.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Three records do not count as learning
            </h2>

            <p className="text-xl font-semibold text-white">
              Recommend is not authorize. Verification is not optional. Learning requires a
              verified outcome.
            </p>

            <p>
              A hoped-for outcome is the first substitute. Authorization records who decided. It
              does not record whether the action did what it was supposed to do. If verification
              is missing, the outcome is still a hope, and Learning has nothing verified to keep.
              That gate is the subject of{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>
              .
            </p>

            <p>
              A recommendation that was never authorized is the second. A recommendation is an
              argument. A named person accepts, rejects, escalates, or returns it. Until that act
              is on the case, the proposal is not a decision, and a later question cannot treat it
              as one.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              states that split. Citing an unauthorized draft as what the organization learned
              promotes a suggestion into a result.
            </p>

            <p>
              An action that was never verified is the third. Action records the work the human
              decision authorized and keeps that statement on the case, beside the question and
              the evidence. It states what was approved to happen next. It does not state what was
              observed afterward. Work that follows the decision moves through the customer’s
              systems of record and the people who already hold operating authority. Recording the
              action is not plant execute, and an authorized action you never checked is not a
              closed case.
            </p>

            <p>
              Evidence still has to be reconstructable.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              asks whether a later reviewer can rebuild the proposal. Learning extends that demand
              past the proposal: the later reviewer should be able to rebuild the closed case,
              including the check. A lesson you cannot reconstruct is a slogan.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the next case is allowed to inherit
            </h2>

            <p>
              A useful learning record keeps the closed case readable. A later reader should be
              able to see the case as it was finished, not as someone later prefers to remember it.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>The question the case opened on</li>
              <li>The evidence, including what was still missing</li>
              <li>The recommendation, and whether a named person authorized it</li>
              <li>The action that decision approved</li>
              <li>
                The verification: what was supposed to change, which evidence would show it, and
                what was observed
              </li>
            </ul>

            <p>
              A verified outcome can be narrow. It can say the check was inconclusive, that the
              expected signal was not available, or that the action did not produce the intended
              effect. Those are learnable records. A blank verification field is not. A confident
              retelling that skips the field is not either.
            </p>

            <p>
              Read the gate in the{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter, after{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>
              . Stage-1 learning is the closed case held on the record. Simulated or seeded
              telemetry and asset context may appear in the workspace. Treat that material as a
              practice record. It is not a plant historian, and completing the loop on it does not
              turn it into a live plant result.
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
              directly. Learning is step 07. It sits after verification. Later editions can deepen
              a chapter. The spine stays in this order.
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
              Simulated or seeded telemetry and assets are practice records. They are not live plant
              results.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>
              , on why a recorded ACTION disposition is not plant execution. Companion reading:{' '}
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              on why the verified outcome learning inherits is not assurance that the asset stays
              known-good,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a drafted proposal is not permission, and{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              on why the record behind a recommendation has to be reconstructable. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter is the public statement of the step this essay describes.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries, including
                the learning step. The Reliability Engineer workspace is where a signed-in Decision
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
          <InsightNextSteps slug="learning-requires-a-verified-outcome" />
        </motion.article>
      </div>
    </main>
  );
}
