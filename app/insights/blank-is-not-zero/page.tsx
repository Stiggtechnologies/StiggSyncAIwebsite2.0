'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('blank-is-not-zero');

export default function BlankIsNotZeroPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blank Is Not Zero</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              An empty field, a missing reading, or an unset value is not a measured zero. Blank
              means unknown or not yet collected. Zero means a verified measurement of none.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Treating blank as zero invents false certainty, hides unknown constraints, and
              corrupts Recovery, verification, and Decision Case math. Blank is the absence of a
              collected value. Zero is a verified measurement of none. They are not the same
              record, and the operator must not store one as the other.
            </p>

            <p>
              A spreadsheet wants a number. An empty cell looks unfinished, so someone types zero
              and the total appears. The job looks cheaper. The duration looks short. The
              constraint looks clear. None of that was measured. The field was blank because the
              value had not been collected. Filling it with zero did not collect it. It replaced
              an unknown with a number the record cannot defend.
            </p>

            <p>
              This essay is the companion to{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>
              . That essay keeps missing evidence recorded as unknown, not as clear or ready, and
              keeps bad or not-ready evidence blocked. This essay is the numeric form of the same
              refusal. Unknown is not clear. Blank is not zero. Writing zero into a blank does not
              make the missing evidence clear.
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
              missing. A blank field is what is still missing. It is not an observed fact of none.
              A proposal that treats the blank as zero has no basis for that term, and a proposal
              with no basis is not ready for a human decision.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Blank means unknown, or not yet collected
            </h2>

            <p>
              Blank is an empty field, a missing reading, or an unset value. The labour hours were
              not entered. The meter reading was not taken. The cost was left unset. The
              verification line was never filled. The operator reads blank as a statement that the
              collection has not happened. The operator does not read it as a result.
            </p>

            <p>
              On the Decision Case, an empty evidence field does not become observed fact because
              nobody typed a number. Stage-1 evidence is the record held on the case: approved
              knowledge, asset context, work history, condition information, and the split between
              observed fact, assumption, and what is still missing. A live connector that pulls
              historian or control-system tags sits outside this edition. An absent tag is not a
              recorded clear, and it is not a recorded zero. It is still missing.
            </p>

            <p>
              A missing reading is the same gap. Absent meter or interval evidence for component
              life stays unknown and is not inferred. The system does not invent a reading of zero
              hours, zero cycles, or zero wear to fill the meter that was never collected. Until
              the reading is on the record from a named source, there is no measurement. Recovery
              uses that rule on the constraint register. Job readiness refreshes labour, material,
              component-life, physical-zone, and external-resource constraints. Missing or stale
              evidence stays unknown. Manual fallback and connector ingestion are both
              source-bound: the value comes from a named source, or it is not a value.
            </p>

            <p>
              Recovery economic assumptions follow the same posture. Labour, overtime, contractor,
              logistics, risk, and life-cycle figures are human-entered. A blank is left blank. It
              is not stored as zero, and it is not treated as a measured saving. Those figures do
              not verify value. Verification of value remains a separate authority. An unset
              assumption is not a cost of none, and it is not permission to proceed as if the
              economics had been collected.
            </p>

            <p className="text-xl font-semibold text-white">
              Blank is the absence of the value. It is not a measurement that the value was none.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Zero is a verified measurement of none
            </h2>

            <p>
              Zero is a number a person recorded because the quantity was checked and found to be
              none. None of that cost. None of that quantity. A duration of zero only when zero
              was the measured or explicitly entered duration, not when the duration field was
              empty. A reading of zero only when the reading was taken and the instrument showed
              none. A later reader can tell a measured none from a value that was never collected.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              keeps that check on the case. Verification records whether the authorized action did
              what it was supposed to do. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is step 06. A verified outcome can be narrow. It can say the check was
              inconclusive, that the expected signal was not available, or that the action did not
              produce the intended effect. Those are records. A blank verification field is not.
              An outcome of no effect is a verified measurement only when the check was recorded
              and the observation was none. An empty verification line is not that observation.
            </p>

            <p>
              Missing duration is the same distinction in Recovery scheduling. If comparable
              history is too thin and no explicit planned or estimated hours are on the record,
              duration stays missing and approval is blocked. Missing is not a duration of zero,
              and it is not permission to approve. A recorded zero would be an explicit entry that
              the duration is none. The empty field is not that entry.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Treating blank as zero invents false certainty
            </h2>

            <p>
              False certainty is a complete-looking number standing where the collection never
              happened. The total adds up. The case looks ready. A later reader sees a digit and
              treats it as observed fact. The digit was a substitute for the blank. The certainty
              is invented.
            </p>

            <p>
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              already refuses the quiet version of this move. A green dashboard, an empty field, or
              silence is not clearance.{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              is that quiet at full length: no reply, no alert, and an empty inbox are not
              authorization. This essay is what happens when the empty field is then filled with
              zero so the quiet looks like a result.{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps the display off the decision. A green tile does not fill an empty field with
              zero, and a zero that was never measured does not turn the tile into evidence.
            </p>

            <p>
              The operator leaves the blank visible. Naming it unknown is the honest record.
              Replacing it with zero so a chart, a total, or a readiness line can render is the
              false one. A rendered number is not a collected value.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              It hides unknown constraints
            </h2>

            <p>
              An unknown constraint is still a constraint. Labour that was not entered, material
              that was not counted, component life with no meter, a zone with no evidence, an
              external resource with no source — each of those stays unknown until a named source
              supplies the value. Store the blank as zero and the constraint disappears. The job
              looks ready because the unknown was replaced with none. Readiness that still says
              unknown is the correct report. A zero written over that unknown is not readiness.
            </p>

            <p>
              Recovery parts risk uses the same split. Missing staging evidence is unknown. Bad or
              not-ready evidence is blocked. A missing lot is not a staged quantity of zero.
              Approved alternates and donor candidates stay advisory. They require a human action.
              They do not turn unknown staging into a staged part, and they do not turn a blank
              quantity into a measured none.
            </p>

            <p>
              Unknown concurrency fails closed for the same reason. New event work is unknown.
              Scheduling treats that work as sequential until an authorized human records a named
              parallel group and a substantive basis. The system does not invent a parallel plan to
              fill the unknown. Permit, isolation, and asset-state truth stay with the
              systems that already hold them. A blank in Recovery does not clear that truth, and a
              zero typed into the blank does not either.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              It corrupts Recovery, verification, and Decision Case math
            </h2>

            <p>
              Math on the case is only as honest as its inputs. A sum, a duration, a life
              estimate, or a comparison that treats blank as zero is not a calculation on the
              record. It is a calculation on an invented input. The total can be arithmetic and
              still be false, because one of the terms was never collected.
            </p>

            <p>
              In Recovery, the economic figures that were left blank are not zeros in that sum.
              They are not measured savings. Adding them as zero understates cost, overstates
              benefit, or both, and then presents the result as if the assumptions had been
              entered. Those figures do not verify value. Verification of value remains a separate
              authority. A blank labour, overtime, contractor, logistics, risk, or life-cycle
              field stays out of the total until a person enters the value that was actually
              collected.
            </p>

            <p>
              On the Decision Case, the same corruption sits in the evidence the recommendation
              uses. A proposal that cites zero where the field was blank is citing a fact the
              record does not hold. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter requires the split to stay visible. Observed none is an observed fact. A
              blank is what is still missing. Mixing them lets the recommendation look grounded
              when one of its terms was never there.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              says a drafted next action is a proposal. A proposal that rests on a blank stored as
              zero is not ready for a human decision. Drafting it does not supply the missing
              measurement.
            </p>

            <p>
              Verification math fails the same way. A later reader who treats a blank verification
              field as zero effect inherits a result that was never checked. The action may have
              changed the plant, or it may not have. The empty field does not say which.{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              says a later question inherits the closed case, not a hoped-for outcome. A zero that
              was never measured is a hoped-for none. Learning cannot inherit it. The check has to
              be on the record before any outcome — including an outcome of none — is treated as
              verified.
            </p>

            <p className="text-xl font-semibold text-white">
              A blank left blank keeps the math honest. A blank stored as zero makes the math false.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The operator must not store blank as zero
            </h2>

            <p>
              The operator leaves the empty field empty, names it unknown or not yet collected, and
              does not proceed as if zero had been measured. Where a real measurement of none
              exists, the operator records zero as that measurement, with the source visible. The
              two acts are different. One refuses to invent a number. The other records a number
              that was checked.
            </p>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them turns a blank into a measured zero.
            </p>

            <p>
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              says missing evidence is recorded as unknown, not as clear or ready, and that the
              operator must not treat unknown as go. Blank is one way evidence is missing. Zero is
              not the clearance of that gap. A case cannot go on a total that used zero to hide
              what was never collected.
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
              turn an empty field into a measurement. The person can refuse to decide while the
              basis is blank. The system does not decide for them, and it does not write zero into
              the blank so the act looks finished.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Stating that limit does
              not store a blank as zero. Simulated or seeded telemetry remains a practice record.
              It is not a live measurement of none, and it is not a substitute for the value the
              operator still has to leave blank.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              says the case stays open until the check is recorded. A blank verification field is
              not a verified outcome of none. Zero effect, if that is what the check showed, is
              written as the observation. The empty field stays empty until then.
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
              directly. Evidence is step 02. What is still missing stays visible, and a blank is
              not recorded as observed none.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A blank verification field is not a verified measurement of none.
              Recovery keeps the operational constraint beside those chapters: missing evidence is
              unknown, a blank economic assumption is not zero, and missing duration is not a
              duration of zero. Later editions can deepen a chapter. The spine stays in this
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
              This is an essay about the record, not a customer case study. It names no plant,
              states no savings figure, and claims no prevented failure. It states no OEM limit and
              no operating threshold. It does not claim that Sync executes plant work, writes a
              work order, isolates equipment, or controls a plant. It does not claim that a blank
              is zero, that an empty field is a measured saving, or that a missing reading is a
              reading of none. It does not claim that self-guided onboarding is a live product
              path.
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
              live plant results, and they are not a verified measurement of none. A value that has
              not been collected stays blank. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>
              , on why silence, no reply, no alert, and an empty inbox are not authorization and
              not clearance. Companion reading:{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              on why missing evidence is recorded as unknown, not as clear or ready,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why a blank verification field is not a recorded check,{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              on why a later case inherits the verified record, not a hoped-for none,{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              on why a named person must record the disposition,{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              on why simulated or seeded work is not marketed as live,{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              on why a proposal is not authorization, and{' '}
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              on why a status display is not the decision. A{' '}
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
              chapter is the public statement of what is still missing, and the{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter is the public statement of the check.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the blank, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the evidence split:
                observed fact, assumption, and what is still missing. A blank stays blank. Zero is
                a verified measurement of none, recorded when the check actually showed none. The
                Reliability Engineer workspace is where a signed-in Decision Case is completed. A
                Reliability Assessment is the bounded review when the question is whether the
                records can support a conclusion. None of those is a claim that Sync executes plant
                work, or that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="blank-is-not-zero" />
        </motion.article>
      </div>
    </main>
  );
}
