'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('unknown-is-not-clear');

export default function UnknownIsNotClearPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Unknown Is Not Clear</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Missing evidence is recorded as unknown. Unknown is not clear, and it is not ready.
              Bad or not-ready evidence is blocked. A green dashboard, an empty field, or silence
              is not clearance.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              In the Decision Case and in Recovery, missing evidence is recorded as unknown, not as
              clear or ready. Bad or not-ready evidence is blocked. A green dashboard, an empty
              field, or silence is not clearance. The operator must not treat unknown as go. A
              blank economic assumption is not zero.
            </p>

            <p>
              Reliability work fills the gap because an empty place on the record looks quiet. The
              dashboard is green. A field was left blank. No one spoke to the missing item. The
              meeting treats that quiet as clearance: the evidence is fine, the case can proceed,
              the operator can go. It cannot. What was missing is still missing. The record has to
              say unknown. If the evidence is present and bad, or present and not ready, the record
              has to say blocked. Neither word means clear.
            </p>

            <p>
              {fieldManual.author} states the Decision Case order in{' '}
              <Link
                href={fieldManualPath()}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Field Manual {fieldManual.version}
              </Link>
              : Question, Evidence, Recommendation, Human decision, Action, Verification, and
              Learning. The manuals index lives at{' '}
              <Link href="/manuals" className="text-[#3B82F6] hover:text-white transition-colors">
                /manuals
              </Link>
              . Evidence is step 02. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter keeps a visible split between observed fact, assumption, and what is still
              missing.{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              keeps that assumption from being stored as a recorded fact. A proposal with no basis
              is not ready for a human decision. What is still missing is unknown. Recovery uses the same constraint on the record: missing or stale
              evidence stays unknown, and bad or not-ready evidence is blocked.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Missing evidence is recorded as unknown
            </h2>

            <p>
              Unknown means the evidence is not on the record. It does not mean the condition was
              checked and found clear. It does not mean the job, the part, the zone, the feed, or
              the duration is ready. The operator reads unknown as a refusal to pretend the gap is
              a result.
            </p>

            <p>
              On the Decision Case, the evidence a later reader can inspect is approved knowledge,
              asset context, work history, condition information, and that split. Stage-1 evidence
              is the record held on the case. A live connector that pulls historian or
              control-system tags sits outside this edition. An absent tag is not a recorded clear.
              It is still missing.
            </p>

            <p>
              Recovery states the same rule in the constraint register. Job readiness refreshes
              labour, material, component-life, physical-zone, and external-resource constraints.
              Missing or stale evidence stays unknown. Manual fallback and connector ingestion are
              both source-bound: the value comes from a named source, or it is not a value. Until a
              tenant has actually supplied a provider endpoint, credential, and reviewed adapter,
              readiness reports unknown. That report is correct. It is not a claim that a customer
              feed is live, and it is not clearance to proceed as if the feed had arrived.
            </p>

            <p>
              Unknown concurrency fails closed. New event work is unknown. Scheduling treats that
              work as sequential until an authorized human records a named parallel group and a
              substantive basis. The system does not invent a parallel plan to fill the unknown.
              Absent meter or interval evidence for component life stays unknown and is not
              inferred. If comparable history is too thin and no explicit planned or estimated
              hours are on the record, duration stays missing and approval is blocked. Missing is
              not a duration of zero, and it is not permission to approve.
            </p>

            <p className="text-xl font-semibold text-white">
              Unknown is the absence of the record. It is not a finding that the evidence is clear.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Bad or not-ready evidence is blocked
            </h2>

            <p>
              Blocked is a different state. The evidence is present, and it is not fit to proceed.
              Bad evidence and not-ready evidence are both blocked. The operator does not relabel
              them unknown to make the case look open, and does not relabel them clear because
              someone hopes the next shift will fix the condition.
            </p>

            <p>
              Recovery parts risk uses that split on material lots. Plan generation refreshes hard
              constraints for condition, certification, and staging. Missing staging evidence is
              unknown. Bad or not-ready evidence is blocked. Approved alternates and donor
              candidates stay advisory. They require a human action. They do not clear a blocked
              lot, and they do not turn unknown staging into a staged part.
            </p>

            <p>
              Permit, isolation, and asset-state truth stay with the systems that already hold
              them. A Recovery constraint does not clear that truth by itself. Material that is
              still requested or short is not ready. Quality checks require explicit pass evidence
              before work completion. Those gates are blocked or unmet until the record says
              otherwise. Sync does not execute the plant work that would change them.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A green dashboard, an empty field, or silence is not clearance
            </h2>

            <p>
              A green dashboard shows a status color. It does not supply the missing evidence, and
              it does not convert unknown into clear.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              already keeps the display off the decision. This essay is the evidence state beside
              that display. A green tile can sit on the screen while labour, material, staging,
              component life, or a tenant feed is still unknown. The color is not clearance.
            </p>

            <p>
              An empty field is the same kind of quiet. For Recovery economic assumptions, blank is
              not zero. Labour, overtime, contractor, logistics, risk, and life-cycle figures are
              human-entered. A blank is left blank. It is not stored as zero, and it is not treated
              as a measured saving. Those figures do not verify value. Verification of value
              remains a separate authority. An empty evidence field on the Decision Case is the
              same posture: the field does not become observed fact because nobody typed a number.
            </p>

            <p>
              Silence is not clearance either. No alert, no comment, and no change on the tile do
              not record the evidence as present.{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              is that sentence at full length: silence, no reply, no alert, and an empty inbox are
              not authorization and not clearance. A missing operator response is not approved. A
              quiet dashboard is not controlled.{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keeps a rule crossing off the decision. The absence of that signal is not the
              opposite finding. A quiet queue does not mean the missing record was checked and
              found clear.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The operator must not treat unknown as go
            </h2>

            <p>
              Go would mean the evidence is sufficient for the next recorded step. Unknown is the
              statement that it is not. The operator leaves the case where the gap is, names what
              is missing, and does not proceed as if the gap were a pass. Recovery scheduling does
              the same with unknown concurrency: the work stays sequential until a named human
              records the parallel basis. Approval stays blocked while duration is missing. A
              rendered page is not that basis. Readiness that still says unknown is not a release.
            </p>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them records missing evidence as clear.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              says a claim needs a recorded check after a named human has authorized an action.
              Unknown is earlier and different. It is the missing record, not the check that closes
              the case. A case cannot verify an outcome from evidence that was never on the record.
            </p>

            <p>
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              says a proposal is not authorization. Unknown evidence is not a proposal that has
              been cleared. A drafted next action that rests on unknown is still not ready for a
              human decision. Drafting it does not fill the gap.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not record missing plant evidence as clear. Simulated or seeded telemetry remains a
              practice record. It is not a live result, and it is not a substitute for the unknown
              the operator still has to leave visible.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              says a named person must accept, reject, escalate, or return the recommendation, and
              that until that act is recorded the case is still a proposal. A named act does not
              convert unknown evidence into clear evidence. The person can refuse to decide while
              the basis is missing. The system does not decide for them, and it does not mark the
              missing basis clear so the act looks finished.
            </p>

            <p>
              <Link
                href="/insights/question-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question Is Not Decision
              </Link>
              ,{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>
              , and{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              keep the question, the display, and the alert off the decision. Those inputs are not
              the decision. They are also not clearance of missing evidence. Opening the question,
              painting the tile green, or silencing the notice leaves unknown as unknown.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Where the public statement lives
            </h2>

            <p>
              Field Manual {fieldManual.version} is the public contents of the Decision Case. Start
              at the{' '}
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
              directly. Evidence is step 02. What is still missing stays visible. A proposal with
              no basis is not ready for the human decision that follows. Recovery keeps the
              operational constraint beside that chapter: missing evidence is unknown, bad or
              not-ready evidence is blocked, and blank is not zero. Later editions can deepen a
              chapter. The spine stays in this order.
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
              This is an essay about the evidence record, not a customer case study. It names no
              plant, states no savings figure, and claims no prevented failure. It states no OEM
              limit and no operating threshold. It does not claim that Sync executes plant work,
              writes a work order, isolates equipment, or controls a plant. It does not claim that
              unknown means clear, that blocked means ready, or that a blank economic assumption is
              zero. It does not claim that self-guided onboarding is a live product path.
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
              live plant results. A tenant feed that has not been configured stays unknown.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>
              , on why an empty field, a missing reading, or an unset value is not a measured zero.{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              states why no reply and an empty inbox are not authorization. Companion reading:{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              on why a named person must record the disposition,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why a claim needs a recorded check,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a proposal is not authorization,{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              on why simulated or seeded work is not marketed as live,{' '}
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>
              ,{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>
              , and{' '}
              <Link
                href="/insights/question-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Question Is Not Decision
              </Link>{' '}
              on why those inputs are not the decision. A{' '}
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
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter is the public statement of what is still missing.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the evidence, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the evidence split:
                observed fact, assumption, and what is still missing. Missing evidence stays
                unknown. Bad or not-ready evidence stays blocked. The Reliability Engineer workspace
                is where a signed-in Decision Case is completed. A Reliability Assessment is the
                bounded review when the question is whether the records can support a conclusion.
                None of those is a claim that Sync executes plant work, or that self-guided
                onboarding is a live product path.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={fieldManualPath('evidence')}
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
                >
                  Read Evidence
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
          <InsightNextSteps slug="unknown-is-not-clear" />
        </motion.article>
      </div>
    </main>
  );
}
