'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('honesty-boundary-is-not-optional');

export default function HonestyBoundaryIsNotOptionalPage() {
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
              Honesty Boundary Is Not Optional
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Sync states what is simulated, seeded, or out of scope. Calling a pilot production,
              hiding simulation, or marketing self-guided as live when it is not, crosses the
              honesty boundary. Naming the boundary is the industrial requirement. A Decision Case
              that pretends plant authority Sync does not hold is not a Decision Case.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Sync states what is simulated, seeded, or out of scope. Calling a pilot
              &quot;production,&quot; hiding simulation, or marketing self-guided as live when it is
              not, crosses the honesty boundary. Naming the boundary is not weakness — it is the
              industrial requirement. A Decision Case that pretends plant authority Sync does not
              hold is not a Decision Case.
            </p>

            <p>
              Reliability work collapses the claim because a confident sentence looks like a closed
              record. A pilot is introduced as production. A practice record is narrated as a live
              plant result. A path that is not live is marketed as if a person could already walk
              it. The meeting treats those sentences as if the product held authority it does not
              hold, as if a simulated reading were an observed plant fact, or as if a self-guided
              path were a live product. They are not. The record either states its limit or it
              asks a later reader to believe a limit that was never named.
            </p>

            <p>
              Sync keeps that split on the signed-in Decision Case and in the public contents of
              the loop. A signed-in user completes the case in a fixed order: Question, Evidence,
              Recommendation, Human decision, Action, Verification, and Learning.{' '}
              {fieldManual.author} states that order, and the standing limit beside it, in{' '}
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
              . This essay is why the{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              chapter is not a footnote. The manual is the public contents. The chapter is the
              rule that governs every step.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The chapter states three boundaries
            </h2>

            <p>
              Field Manual {fieldManual.version} publishes three boundaries that govern every
              chapter in this edition. Recommend is not authorize: a drafted proposal does not
              permit the work. Evidence is required: a recommendation that cannot show its basis is
              not treated as a decision. Stage-1 readiness means a signed-in user can complete the
              Decision Case — question, evidence, recommendation, human decision, action,
              verification, and learning — and the manual describes that journey.
            </p>

            <p>
              Stage-1 is the limit of the claim. This edition does not describe plant execute, a
              live connector tag pull, SMTP invite delivery, or automatic revocation of access on
              expiry as live. It contains no customer case study. Those sentences are the public
              statement. They apply to the question, the evidence, the recommendation, the human
              decision, the action, the verification, and the learning. A later chapter does not
              get to outrun them.
            </p>

            <p className="text-xl font-semibold text-white">
              Naming the boundary is not weakness — it is the industrial requirement.
            </p>

            <p>
              The sibling chapters state what each step is allowed to be. The question is recorded
              before evidence or authority. Evidence is the inspectable record on the case:
              observed fact, assumption, and what is still missing. The recommendation states a
              proposed next action, the evidence it uses, and the uncertainty it leaves in view.
              A named person accepts, rejects, escalates, or returns. Action records the work that
              decision authorized, and plant execute stays outside this edition. Verification
              records whether the authorized action did what it was supposed to do. Learning keeps
              the closed case so a later question can see what was believed, authorized, and
              checked. None of those steps is a license to narrate a wider authority than the
              edition describes.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Hiding simulation crosses the boundary
            </h2>

            <p>
              Sync states what is simulated, seeded, or out of scope. Simulated or seeded
              telemetry and assets are practice records. They are not live plant results. A
              practice record can sit on a signed-in case so a person can learn the order. It can
              show a question, a basis, a proposal, a named decision, a work intent, a check, and
              what a later case is allowed to inherit. Completing that order does not convert the
              record into a site outcome.
            </p>

            <p>
              Hiding simulation crosses the honesty boundary. Dropping the label, narrating the
              practice record as a live plant result, or letting a demo stand in for a verified
              outcome asks the reader to treat a practice basis as observed fact. The evidence
              chapter already requires the split: observed fact, assumption, and what is still
              missing. A simulated reading that is presented as observed fact fails that split. A
              seeded asset that is presented as a customer fleet fails it as well. The case can
              still be completed. It cannot be told as something the edition has said it is not.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync states what is simulated, seeded, or out of scope.
            </p>

            <p>
              Out of scope is the same kind of statement. Plant execute, a live connector tag pull,
              SMTP invite delivery, and automatic revocation of access on expiry are outside this
              edition. Stating that they are outside is how a reader knows the signed-in journey
              does not include them. Silence on that point is not a smaller claim. It is a claim
              that leaves the limit unnamed.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A pilot called production crosses the boundary
            </h2>

            <p>
              A{' '}
              <Link
                href="/strategic-pilot"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Strategic Pilot
              </Link>{' '}
              is a governed proof around one operating decision. Calling that pilot
              &quot;production&quot; crosses the honesty boundary. Production would mean the claim
              matches what this edition describes as live. This edition describes the signed-in
              Decision Case. It does not describe plant execute or a live tag pull as live. A
              governed proof of one decision is not a plant in operation under Sync, and it is not
              a customer case study.
            </p>

            <p>
              The same sentence covers the{' '}
              <Link
                href="/reliability-assessment"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Reliability Assessment
              </Link>
              . That assessment asks whether the records can support a conclusion. It is a bounded
              review. It is not a production deployment, and it is not permission for Sync to act
              on the plant. A reader who is told the pilot or the assessment is production has been
              told a different product than the one the manual describes.
            </p>

            <p>
              This essay names no plant, states no savings figure, and claims no prevented
              failure. The honesty chapter already says this edition contains no customer case
              study. Inventing one to make the boundary feel concrete would cross the boundary the
              essay is stating.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Marketing self-guided as live crosses the boundary
            </h2>

            <p>
              Self-guided onboarding is not claimed as a live product path. Marketing it as live
              when it is not crosses the honesty boundary. The sentence is a product boundary of
              the same kind as the Stage-1 limit. Stating it is how a reader knows which path
              exists. There is a signed-in Decision Case a person can complete. Commercial entry
              is a bounded Reliability Assessment or a Strategic Pilot. Neither sentence is a claim
              that a person can onboard themselves into a live plant deployment and treat that path
              as production.
            </p>

            <p className="text-xl font-semibold text-white">
              Marketing self-guided as live when it is not crosses the honesty boundary.
            </p>

            <p>
              The workspace where the case is completed is not that marketing claim. A signed-in
              user can walk the loop the manual describes. Walking it does not make self-guided
              onboarding a live product path, and it does not make SMTP invite delivery or
              automatic revocation of access on expiry part of this edition. Those remain outside
              the claim. Naming them as outside is the honest description of the path that exists.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Pretended plant authority is not a Decision Case
            </h2>

            <p>
              A Decision Case that pretends plant authority Sync does not hold is not a Decision
              Case. Sync may show coverage, emit alerts, and recommend. A named human accepts,
              rejects, escalates, or returns. Authorized execution systems write the work order or
              the isolation. The case that says Sync ordered the work, isolated the equipment, or
              controlled the plant has left the boundary. That pretense is a different object. The
              Decision Case this manual describes does not hold authority the product does not
              have.
            </p>

            <p>
              The peer essays already hold the adjacent lines.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              states that seeing, acknowledging, or silencing an alert is not a Decision Case and
              not a decision.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              states that a status display is not the decision.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              states that a drafted proposal is not permission.{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              states that a recorded ACTION disposition is work intent, not plant execution.{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              states that the case stays open until the check is recorded. Each line fails if the
              case is allowed to pretend an authority the edition has withheld.
            </p>

            <p>
              Action, in the field manual, records the work the human decision authorized and keeps
              that statement on the case. Plant execute is outside Stage-1. The product does not
              dispatch unsupervised work to equipment. Work that follows the decision moves through
              the customer systems of record and the people who already hold operating authority.
              A Decision Case that skips that sentence and speaks as if Sync held the plant is not
              the case the spine describes. It is a story about authority that was never on the
              record.
            </p>

            <p className="text-xl font-semibold text-white">
              A Decision Case that pretends plant authority Sync does not hold is not a Decision
              Case.
            </p>

            <p>
              Verification does not repair that pretense. The check asks whether the authorized
              action did what it was supposed to do, and which evidence would show that. Stage-1
              verification is the check written on the case. A live pull of historian or
              control-system tags is not the proof this edition describes. A simulated signal is
              not that proof either. Learning inherits the closed case, including the limit that
              was named. It does not inherit a hoped-for plant result, and it does not inherit a
              claim that Sync executed the work.
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
              directly. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter sits beside the spine, not after it. Recommend is not authorize. Evidence is
              required before a recommendation is treated as a decision. Stage-1 readiness is the
              signed-in Decision Case. Later editions can deepen a chapter. They do not get to
              call a pilot production, hide a practice record, or market a path as live when this
              edition has said it is not. The spine stays in this order. The boundary stays in
              force.
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
              limit and no operating threshold. It does not claim that Sync executes plant work,
              writes a work order, isolates equipment, or controls a plant. It does not claim that
              self-guided onboarding is a live product path.
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
              The series continues with{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>
              , on why the recorded human decision is mandatory: a named person accepts, rejects,
              escalates, or returns the recommendation, and until that act is recorded the case is
              still a proposal. Companion reading:{' '}
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              on why calling a verified record assured crosses the honesty boundary,{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              on why seeing, acknowledging, or silencing an alert is not a Decision Case and not a
              decision,{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              on why a dashboard of plant or maintenance state is not a Decision Case and not a
              decision,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a drafted proposal is not permission,{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why a recorded ACTION disposition is not plant execution, and{' '}
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
              is a governed proof around one operating decision, not a production claim. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter is the standing rule.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the boundary, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the honesty boundaries,
                including what this edition does not describe as live. The Reliability Engineer
                workspace is where a signed-in Decision Case is completed. A Reliability Assessment
                is the bounded review when the question is whether the records can support a
                conclusion. A Strategic Pilot is a governed proof around one operating decision. None
                of those is a claim that Sync holds plant authority, or that self-guided onboarding
                is a live product path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={fieldManualPath('honesty-boundaries')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
                >
                  Read Honesty boundaries
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
          <InsightNextSteps slug="honesty-boundary-is-not-optional" />
        </motion.article>
      </div>
    </main>
  );
}
