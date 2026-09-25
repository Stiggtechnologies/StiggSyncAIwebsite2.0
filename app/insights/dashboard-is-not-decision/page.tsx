'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('dashboard-is-not-decision');

export default function DashboardIsNotDecisionPage() {
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
              Dashboard Is Not Decision
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A dashboard can surface plant or maintenance state. KPI tiles, trend charts, health
              scores, and red, amber, and green status are that display. Seeing them does not open
              a Decision Case, and it does not decide one.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              A dashboard — KPI tiles, trend charts, health scores, and red, amber, and green
              status — can surface plant or maintenance state. Seeing a dashboard is not a Decision
              Case and not a decision. Sync may show coverage, recommendations, and status. A named
              human still opens a Decision Case on a question, cites approved evidence, and
              accepts, rejects, escalates, or returns. A green dashboard, an improved trend, or a
              cleared alert tile must not be read as authorization, verification of outcome,
              work-order execution, or plant control.
            </p>

            <p>
              Reliability work collapses the display because a settled color looks like a settled
              case. The health score moves. The trend line changes direction. An alert tile clears.
              The meeting treats the screen as if a question had been decided, work had been
              authorized, an outcome had been checked, or the plant were under direction. It was
              not. The screen showed state. No named person had opened a Decision Case on a
              question, cited approved evidence, and accepted, rejected, escalated, or returned a
              recommendation.
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
              . This essay is why a dashboard cannot be read as the human decision or as
              verification. The manual is the public contents. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter and the{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter are the two steps this essay keeps apart from the display.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">A dashboard surfaces state</h2>

            <p>
              A dashboard is a display of plant or maintenance state. A KPI tile shows a number. A
              trend chart shows how that number moved. A health score summarizes readings into one
              figure. Red, amber, and green status assigns a color to a condition. Those objects
              can make a condition visible to a person in the room. They do not open a case, and
              they do not name who may decide it.
            </p>

            <p>
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              already places a dashboard with the watched set: sensors, CMMS rows, patrol routes,
              and the tiles on a screen. Coverage is what is watched. Control authority is
              permission to order work, isolate equipment, or change the plant. This essay is the
              next boundary. A display of state is not the Decision Case that would decide what to
              do about that state.
            </p>

            <p className="text-xl font-semibold text-white">
              A watched number is not a question on a case. A green tile is not a named decision.
            </p>

            <p>
              The number can be current. The color can match a rule someone wrote. The chart can be
              readable. None of that records a reliability or maintenance question, the evidence
              cited for it, or a human act on a recommendation.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Seeing a dashboard is not a Decision Case
            </h2>

            <p>
              A Decision Case opens on a reliability or maintenance question a named person can
              decide. The question is recorded before evidence or recommendation.{' '}
              <Link
                href="/insights/question-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question Is Not Decision
              </Link>{' '}
              states that opening. A dashboard does not write the question. A person does, on the
              signed-in case.
            </p>

            <p>
              Seeing the dashboard is not that opening. The screen can be up while no case exists.
              The screen can change while an existing case stays where it was. The display and the
              case are different records. One shows state. The other holds a question a named
              person can decide.
            </p>

            <p className="text-xl font-semibold text-white">
              Seeing a dashboard is not a Decision Case and not a decision.
            </p>

            <p>
              Sync may show coverage, recommendations, and status. Showing them puts a view where a
              person can read it. The view can include what is watched, a proposed next action, and
              a status beside that proposal. The view is still not the case. A named human still
              opens a Decision Case on a question. Until that opening is recorded, Sync has shown a
              display. It has not started the loop.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The decision is a named human act
            </h2>

            <p>
              The human decision comes after a recommendation exists to decide. A recommendation
              states a proposed next action, the evidence it uses, and the uncertainty it leaves in
              view. Drafting that proposal leaves authority where it already sits.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              states that split. A status shown next to the draft does not close it.
            </p>

            <p>
              A named human still opens the case on a question, cites approved evidence, and
              accepts, rejects, escalates, or returns. Citing approved evidence means the decision
              points at the record already on the case: observed fact, assumption, and what is
              still missing. A health score is not that citation. A trend chart is not that
              citation. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter publishes the act. The case keeps the person beside the proposal they
              decided. The person who can accept the operational consequence is still the one who
              decides.
            </p>

            <p>
              Until that act is on the case, the display can change and the decision is still
              absent. A tile that turns green does not accept a recommendation. A tile that turns
              red does not reject one. Amber does not escalate. A cleared alert does not return
              the proposal to the person who drafted it. Those are colors and states. The four acts
              are a named person on the case.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A green tile is not verification
            </h2>

            <p>
              Verification is the check after a named human has authorized an action. It asks
              whether that action produced the result the decision named, and it names the evidence
              on the case that would show it. The signed-in case holds that check next to the
              question, the proposal, and the person who decided. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter publishes that step.{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              states the gate: the case is not closed until the check is recorded.
            </p>

            <p className="text-xl font-semibold text-white">
              A green dashboard, an improved trend, or a cleared alert tile must not be read as
              verification of outcome.
            </p>

            <p>
              A tile can turn green because a sensor recovered, a threshold moved, a calculation
              refreshed, or someone cleared the display. A trend can improve for the same kinds of
              reasons. None of those events records who authorized an action, or whether the
              authorized action did what it was supposed to do. A dashboard that was never tied to
              an authorized action has nothing authorized to check. Citing the color as if the
              outcome were known treats a display as a closed case.
            </p>

            <p>
              Stage-1 verification is the check written on the case. This edition does not treat a
              live pull of historian or control-system tags as that check. A dashboard fed by those
              tags, or by simulated or seeded practice records, is still a display. It is not the
              verification step. Learning that follows verification inherits the closed case. It
              does not inherit a tile that changed color.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A cleared display is not authorization, execution, or control
            </h2>

            <p>
              A green dashboard, an improved trend, or a cleared alert tile must not be read as
              authorization, work-order execution, or plant control.
            </p>

            <p>
              Authorization is the named human decision on a recommendation. The dashboard sits
              outside that act. Color does not grant permission to do the work. An improved trend
              does not either. The recommendation can still be rejected, escalated, or returned
              after the screen looks calm.
            </p>

            <p>
              The same display does not execute the work.{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              states the later boundary. An ACTION disposition records work intent after a human
              decision. It does not write a work order, isolate equipment, or change the plant.
              ACTION stays locked until authorized execution systems write the work order or
              isolate the equipment. A cleared alert tile does not unlock it. A dashboard is not a
              work order.
            </p>

            <p>
              It also does not control the plant. Sync may show coverage, recommendations, and
              status. A named human decides. Authorized execution systems write the work order or
              the isolation. None of that follows from a status color. A Decision Case that stores
              a reading from a dashboard stores a record of state. That storage is not permission
              for Sync to order work, isolate equipment, or change the plant.
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
              directly. Human decision is step 04. Verification is step 06. A dashboard is neither
              step. The display can sit beside the case. It does not replace the named act, and it
              does not replace the check. Later editions can deepen a chapter. The spine stays in
              this order.
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
              limit and no operating threshold. It does not claim that a dashboard authorizes work,
              verifies an outcome, executes a work order, or controls a plant.
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
                href="/insights/question-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question Is Not Decision
              </Link>{' '}
              on why recording a reliability or maintenance question is not the human decision,{' '}
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              on why a dashboard in the watched set is not control authority,{' '}
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
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter is the named act. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the check. A dashboard is neither.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries, including
                the named human decision and the verification that follows it. The Reliability
                Engineer workspace is where a signed-in Decision Case is completed. A Reliability
                Assessment is the bounded review when the question is whether the records can
                support a conclusion.
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
          <InsightNextSteps slug="dashboard-is-not-decision" />
        </motion.article>
      </div>
    </main>
  );
}
