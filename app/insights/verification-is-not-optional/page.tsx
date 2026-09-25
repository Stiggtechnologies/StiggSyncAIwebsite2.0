'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('verification-is-not-optional');

export default function VerificationIsNotOptionalPage() {
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
              Verification Is Not Optional
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A named person can accept the recommendation. The work can be recorded as authorized.
              The loop is still open. Until verification is on the case, the outcome is a hope, and
              learning has nothing verified to keep.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              After a named human authorizes an action, the loop is not closed until verification
              is recorded. Learning requires a verified outcome, not a hoped-for one.
            </p>

            <p>
              Reliability work is full of actions that were approved and never checked. The interval
              was stretched. The assembly was replaced. The route was added. The meeting moved on.
              Months later the same failure returns, and the record shows a decision without a
              result. The organization remembers what it intended. It cannot show what happened.
            </p>

            <p>
              Sync keeps that check on the signed-in Decision Case. A signed-in user completes the
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
              . This essay is why verification cannot be skipped once a person has authorized the
              work. The manual is the public contents.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Authorization closes the argument. It does not close the case.
            </h2>

            <p>
              Recommend is not authorize. A recommendation is an argument. Authorization is an act
              by a person who can be named. That distinction is the subject of{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>
              . It is necessary, and it is not the end of the loop.
            </p>

            <p>
              The human decision records who accepted, rejected, escalated, or returned the
              proposal. Action records the work that decision authorized and keeps that statement
              on the case, beside the question and the evidence. Those two steps answer who
              permitted the work and what was approved to happen next.
            </p>

            <p className="text-xl font-semibold text-white">
              They do not answer whether the action did what it was supposed to do.
            </p>

            <p>
              A signed approval can be complete and still leave the outcome unknown. The case that
              stops at action has a named person and an intended change. It does not have a result.
              Treating the signature as closure is how a hoped-for outcome gets filed as if it had
              been observed.
            </p>

            <p>
              Read those steps as separate chapters:{' '}
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
              . Work that follows the decision moves through the customer’s systems of record and
              the people who already hold operating authority. Recording the action is not plant
              execute.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Verification is the recorded check
            </h2>

            <p>
              Verification records whether the authorized action did what it was supposed to do,
              and which evidence would show that. The check sits on the same record as the
              question, the recommendation, and the human decision. A later reader should be able
              to see the intended effect, the evidence that was supposed to show it, and what was
              actually observed.
            </p>

            <p>A useful verification entry keeps three things distinct:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>What the authorized action was supposed to change</li>
              <li>Which evidence would show that change, and what is still missing</li>
              <li>What was observed after the action — including a result that did not match</li>
            </ul>

            <p>
              The third item is the one organizations skip. A plan states the first. A procedure
              sometimes states the second. Only the recorded observation turns the case from an
              intention into an outcome. If the observation contradicts the intention, the case
              still closes honestly. A failed check is a result. An unchecked hope is not.
            </p>

            <p>
              The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter states that gate. Stage-1 verification is the recorded check held on the
              case. A live pull of control-system tags is not the proof this edition describes.
              Telemetry and asset context shown in the workspace may be simulated or seeded. Treat
              that material as a practice record. It is not a plant historian, and it is not a
              customer result.
            </p>

            <p>
              The same discipline applies to the evidence the recommendation was built on.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              asks whether a later reviewer can reconstruct the proposal. Verification extends that
              trail past the proposal: which check was named, who recorded it, and what it showed.
              A recommendation you cannot reconstruct is not an industrial decision. An authorized
              action you never checked is not a closed one.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Learning waits on the check
            </h2>

            <p>
              Learning keeps the closed case — question, evidence, recommendation, human decision,
              action, and verification — so a later question can see what was believed, what was
              authorized, and what was checked. The signed-in loop ends on that record.
            </p>

            <p className="text-xl font-semibold text-white">
              Learning requires a verified outcome, not a hoped-for one.
            </p>

            <p>
              If verification is missing, a later question inherits a story. The story says the
              action was approved, so it must have worked. The next recommendation then cites that
              story as evidence. The gap compounds: an unchecked action becomes the basis for the
              next proposal, and the case looks more certain each time it is reused.
            </p>

            <p>
              A verified outcome can be narrow. It can say the check was inconclusive, that the
              expected signal was not available, or that the action did not produce the intended
              effect. Those are learnable records. A blank verification field is not. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes that rule. It does not publish a result from a customer site.
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
              directly. Verification is step 06. It sits after the human decision and the action,
              and before learning. Later editions can deepen a chapter. The spine stays in this
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
              The next essay in this order is{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>
              . Companion reading:{' '}
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              on why a verified check is a claim about the past and not a standing claim of
              continuing fitness,{' '}
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
              on why the record behind a recommendation has to be reconstructable.
            </p>

            <p>
              <Link
                href="/insights/assured-is-not-proven"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assured Is Not Proven
              </Link>{' '}
              states the next split: time-bounded confidence that an asset stays known-good under
              operating conditions, with ownership and monitoring, is still not proof of a specific
              claim under named conditions.
            </p>

            <p>
              <Link
                href="/insights/proof-is-not-authorization"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proof Is Not Authorization
              </Link>{' '}
              states the split after the chain closes. Recording the check does not authorize
              plant work. Proof is not authorization.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries, including
                the verification step. The Reliability Engineer workspace is where a signed-in
                Decision Case is completed. A Reliability Assessment is the bounded review when the
                question is whether the records can support a conclusion.
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
          <InsightNextSteps slug="verification-is-not-optional" />
        </motion.article>
      </div>
    </main>
  );
}
