'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('alert-is-not-decision');

export default function AlertIsNotDecisionPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Alert Is Not Decision</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              An alert can surface that something crossed a rule. A threshold breach, an anomaly
              flag, a red tile, a pager page, and a silenced notification are that signal. Seeing
              one, acknowledging one, or silencing one does not open a Decision Case, and it does
              not decide one.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              An alert — a threshold breach, an anomaly flag, a red tile, a pager page, or a
              silenced notification — can surface that something crossed a rule. Seeing,
              acknowledging, or silencing an alert is not a Decision Case and not a decision. Sync
              may emit alerts, coverage gaps, and recommendations. A named human still opens a
              Decision Case on a question, cites approved evidence, and accepts, rejects,
              escalates, or returns. Clearing an alert queue, muting a channel, or auto-closing a
              ticket must not be read as authorization, verification of outcome, work-order
              execution, or plant control.
            </p>

            <p>
              Reliability work collapses the signal because a quiet queue looks like a closed case.
              Someone acknowledges the page. Someone mutes the channel. A ticket closes itself when
              the tile returns inside the rule. The meeting treats those acts as if a question had
              been decided, work had been authorized, an outcome had been checked, or the plant
              were under direction. They were not. The alert showed that something crossed a rule.
              No named person had opened a Decision Case on a question, cited approved evidence,
              and accepted, rejected, escalated, or returned a recommendation.
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
              . This essay is why an alert cannot be read as the human decision or as verification.
              The manual is the public contents. The{' '}
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
              chapter are the two steps this essay keeps apart from the signal.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              An alert surfaces a rule crossing
            </h2>

            <p>
              An alert is a signal that something crossed a rule. A threshold breach says a reading
              passed a limit someone already set. An anomaly flag says a calculation marked a point
              as outside the pattern it was written to watch. A red tile paints that condition on a
              display. A pager page carries the same condition to a person who is not looking at
              the screen. A silenced notification is still that signal: the rule fired, and the
              notice was suppressed. Each form can make a rule crossing visible. None of them opens
              a case, and none of them names who may decide it.
            </p>

            <p>
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              already places the display on the other side of the decision. KPI tiles, trend
              charts, health scores, and red, amber, and green status can surface plant or
              maintenance state. Seeing that display is not a Decision Case. This essay is the next
              boundary. The alert is the signal that a rule fired, including when the signal is a
              red tile on that dashboard, a page sent from it, or a notification someone has
              already silenced. The signal is not the case that would decide what to do about it.
            </p>

            <p className="text-xl font-semibold text-white">
              A rule crossing is not a question on a case. Acknowledging the signal is not a named
              decision.
            </p>

            <p>
              The rule can be current. The flag can match the calculation. The page can reach the
              person on shift. None of that records a reliability or maintenance question, the
              evidence cited for it, or a human act on a recommendation.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Seeing, acknowledging, or silencing is not a Decision Case
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
              states that opening. An alert does not write the question. A person does, on the
              signed-in case.
            </p>

            <p>
              Seeing the alert is not that opening. Acknowledging it is not that opening. Silencing
              the notification is not that opening. The signal can fire while no case exists. The
              queue can clear while an existing case stays where it was. The alert and the case are
              different records. One shows that a rule was crossed. The other holds a question a
              named person can decide.
            </p>

            <p className="text-xl font-semibold text-white">
              Seeing, acknowledging, or silencing an alert is not a Decision Case and not a
              decision.
            </p>

            <p>
              Sync may emit alerts, coverage gaps, and recommendations. Emitting them puts a
              signal, a gap in what is watched, and a proposed next action where a person can read
              them. The three can sit on the same screen. They are still not the case. A named
              human still opens a Decision Case on a question. Until that opening is recorded, Sync
              has emitted a signal, a gap, or a proposal. It has not started the loop.
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
              states that split. An alert shown next to the draft does not close it. A coverage gap
              shown next to the draft does not close it either.
            </p>

            <p>
              A named human still opens the case on a question, cites approved evidence, and
              accepts, rejects, escalates, or returns. Citing approved evidence means the decision
              points at the record already on the case: observed fact, assumption, and what is
              still missing. A threshold breach is not that citation. An anomaly flag is not that
              citation. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter publishes the act. The case keeps the named person beside the proposal. Until
              the act is on the case, what remains is a proposal. The person who can accept the
              operational consequence is still the one who decides.
            </p>

            <p>
              Until that act is on the case, the queue can change and the decision is still absent.
              Acknowledging an alert does not accept a recommendation. Silencing a notification does
              not reject one. Muting a channel does not escalate. Auto-closing a ticket does not
              return the proposal to the person who drafted it. Those are signal-handling acts. The
              four decisions are a named person on the case.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A cleared queue is not verification
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
              Clearing an alert queue, muting a channel, or auto-closing a ticket must not be read
              as verification of outcome.
            </p>

            <p>
              A queue can clear because a reading fell back inside the rule, because someone edited
              the rule, because the channel was muted, or because a ticket timer closed the item.
              A silenced notification can stay silent for the same kinds of reasons. None of those
              events records who authorized an action, or whether the authorized action did what it
              was supposed to do. An alert that was never tied to an authorized action has nothing
              authorized to check. Citing a cleared queue as if the outcome were known treats a
              signal state as a closed case.
            </p>

            <p>
              Stage-1 verification is the check written on the case. This edition does not treat a
              live pull of historian or control-system tags as that check. An alert fed by those
              tags, or by simulated or seeded practice records, is still a signal. It is not the
              verification step. Learning that follows verification inherits the closed case. It
              does not inherit a queue that went quiet.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Clearing, muting, or auto-closing is not authorization, execution, or control
            </h2>

            <p>
              Clearing an alert queue, muting a channel, or auto-closing a ticket must not be read
              as authorization, work-order execution, or plant control.
            </p>

            <p>
              Authorization is the named human decision on a recommendation. The alert sits outside
              that act. Acknowledging a page does not grant permission to do the work. Muting the
              channel does not either. The recommendation can still be rejected, escalated, or
              returned after the queue looks empty.
            </p>

            <p>
              The same signal does not execute the work.{' '}
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              states the later boundary. An ACTION disposition records work intent after a human
              decision. It does not write a work order, isolate equipment, or change the plant.
              ACTION stays locked until authorized execution systems write the work order or
              isolate the equipment. A cleared alert queue does not unlock it. An auto-closed
              ticket is not a work order.
            </p>

            <p>
              It also does not control the plant. Sync may emit alerts, coverage gaps, and
              recommendations. A named human decides. Authorized execution systems write the work
              order or the isolation. None of that follows from a rule crossing, from silencing the
              notice, or from a ticket that closed itself. A Decision Case that stores an alert
              stores a record of a signal. That storage is not permission for Sync to order work,
              isolate equipment, or change the plant.
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
              directly. Human decision is step 04. Verification is step 06. An alert is neither
              step. The signal can sit beside the case. It does not replace the named act, and it
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
              limit and no operating threshold. It does not claim that an alert authorizes work,
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
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              on why a dashboard of plant or maintenance state is not a Decision Case and not a
              decision,{' '}
              <Link
                href="/insights/question-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question Is Not Decision
              </Link>{' '}
              on why recording a reliability or maintenance question is not the human decision,{' '}
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
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why a recorded ACTION disposition is not plant execution. A{' '}
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
              chapter is the check. An alert is neither.
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
          <InsightNextSteps slug="alert-is-not-decision" />
        </motion.article>
      </div>
    </main>
  );
}
