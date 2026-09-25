'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('confidence-is-not-evidence');

export default function ConfidenceIsNotEvidencePage() {
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
              Confidence Is Not Evidence
            </h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Confidence is not evidence. A strong gut feel, a high model score, years of tribal
              &quot;we&apos;ve always known,&quot; or a manager&apos;s certainty is still not a
              recorded check or verified outcome on the Decision Case.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Clearance, authorization, and learning require a recorded fact — a check, a
              measurement, or a verified outcome — not how sure someone feels. On the Decision
              Case, confidence is a report about a person or a model. It is not the record those
              steps stand on.
            </p>

            <p>
              The superintendent is sure the gearbox will make the run. The model prints a high
              model score and the tile looks settled. The crew has said for years that they have
              always known this pump is the bad actor. The manager states the certainty again in
              the meeting, and the case moves. None of those acts wrote a check. None of them
              stored a measurement. None of them closed a verified outcome. The Decision Case still
              has to show the inspection, the reading, or the verification that was actually
              recorded. Sure is not that line.
            </p>

            <p>
              This essay follows{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>
              . That essay keeps a belief, a habit, a prior shift&apos;s story, a tribal practice,
              or an unverified model output from being stored as a recorded fact. An assumption can
              stay on the case if it is labeled as an assumption. This essay is the surety people
              attach to that statement. Raising the feeling, the score, the years, or the rank
              does not move the statement into the observed-fact column. Confidence is not
              evidence. A labeled assumption that everyone is sure about is still an assumption.
            </p>

            <p>
              The same gap has three neighboring forms.{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              records missing evidence as unknown, not as clear or ready.{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>{' '}
              keeps an empty field from being stored as a measured zero.{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              keeps no reply, no alert, and an empty inbox from being read as approval. Confidence
              is what the room uses to skip those records. Being sure the missing evidence is fine
              does not record it as clear. Being sure a blank was zero does not measure none. Being
              sure that silence meant yes does not write the decision.
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
              missing. Confidence is not a fourth column that overrides the split. A proposal whose
              only basis is how sure someone feels has no basis a later reader can inspect. A
              proposal with no basis is not ready for a human decision.{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                {honestyChapter.title}
              </Link>{' '}
              sit beside the spine: recommend is not authorize, evidence is required, and Stage-1
              does not treat a high score or a manager&apos;s certainty as a live fact.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Confidence is not a recorded check
            </h2>

            <p>
              A recorded check is something a later reader can inspect on the case: the inspection
              that was written down, the measurement that was stored, or the verification that
              closed an authorized action. Confidence is a statement about certainty. It names how
              sure a person feels, how high a model scored its own output, how long a crew has
              held a belief, or how certain a manager is. Those are reports about the speaker or
              the model. They are not the check.
            </p>

            <p>
              A strong gut feel is the person&apos;s internal state. The alarm feels like a
              nuisance. The bearing feels like it will last the run. The last repair feels like it
              fixed the cause. The feeling can be noted so the next reader sees what the person
              believed. Noting it records the feeling. It does not record the condition. Condition
              information is the reading, the inspection, or the work record. The gut feel stays
              in the assumption column, or it stays off the case. Strength of the feeling does not
              change the column. A stronger gut feel is still not a recorded check.
            </p>

            <p>
              A high model score is a number the model emitted about its own output. It can be a
              rank, a health score, a deferral confidence, or a probability printed beside a
              recommendation. The number is not the vibration, the oil result, the meter, or the
              completed inspection the output was supposed to rest on. A higher score does not
              create those records. If the case cannot show the asset configuration, the failure
              and maintenance history, and the human judgment that produced the line, the score is
              certainty without a trail.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              already requires that trail. A high model score does not shorten it. The score can
              sit on the case as a model output, labeled as a model output. The label does not
              promote the score into observed fact, and it does not promote it into a verified
              outcome.
            </p>

            <p>
              Years of tribal &quot;we&apos;ve always known&quot; is duration. The crew, the site,
              or the trade has repeated the sentence long enough that the meeting treats age as
              proof. Age is not a check. The sentence can be true as a description of what people
              have said. It is not evidence that anyone inspected this asset, measured this
              condition, or verified this outcome. A later reader who sees only the years cannot
              reconstruct which configuration, which failure, or which maintenance record justified
              the work. Tenure of the belief does not fill that gap. Assumption Is Not Evidence
              already keeps the tribal practice from being stored as a recorded fact. Confidence
              does not reopen that column because the practice is old.
            </p>

            <p>
              A manager&apos;s certainty is rank. The person who can accept the operational
              consequence may also be sure. Sure is not the act. The act is accept, reject,
              escalate, or return, recorded beside the recommendation, by a named person.{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              says the case stays a proposal until that act is on the record. Stating certainty
              before the act does not write the act. Stating it after the act does not supply the
              evidence the act was supposed to rest on. Rank does not convert a missing check into
              a recorded check. The system does not treat the manager&apos;s certainty as
              acceptance, and it does not treat it as the measurement.
            </p>

            <p className="text-xl font-semibold text-white">
              A strong gut feel, a high model score, years of tribal &quot;we&apos;ve always
              known,&quot; and a manager&apos;s certainty are still not a recorded check or a
              verified outcome.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Clearance, authorization, and learning require a recorded fact
            </h2>

            <p>
              Clearance is a recorded basis the next step can stand on. The evidence is present and
              fit, or the case says it is not. A named person has decided where a decision is
              required. Where an action was authorized, the verification is on the case. Confidence
              is not that basis. How sure someone feels does not clear missing evidence, does not
              measure an empty field, and does not approve a recommendation nobody answered. The
              recorded fact is a check, a measurement, or a verified outcome. How sure someone
              feels does not stand in for any of the three.
            </p>

            <p>
              Unknown stays unknown. Filling the unknown line with a gut feel, a high model score,
              or a manager&apos;s certainty does not change the state to clear. Bad or not-ready
              evidence stays blocked. Confidence that the next shift will fix the condition does
              not relabel blocked as ready. The operator must not treat unknown as go because the
              room is sure. Go would mean the evidence is sufficient for the next recorded step.
              Sure is not sufficiency.
            </p>

            <p>
              Blank stays blank. Zero is a verified measurement of none. A strong gut feel that
              there was no downtime, no cost, or no delay is not that measurement. A high model
              score printed into an empty economic field collects a score. It does not collect the
              value. Recovery figures that were left blank stay blank. They are not inferred from
              how confident the last estimate sounded. A blank verification field is not a verified
              outcome of none, and confidence that the work &quot;must have worked&quot; does not
              close it.
            </p>

            <p>
              Silence stays silence. No reply is not approval. An empty inbox is not clearance. A
              quiet dashboard is not controlled. Certainty that the missing reply meant yes is an
              assumption about a missing response. The missing response is still not the named
              decision. Confidence about the quiet does not write accept, reject, escalate, or
              return. It does not record a check that nobody performed.
            </p>

            <p>
              Authorization is the named act, and the act still needs a basis the case can show.
              A drafted next action is a proposal.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps that proposal off the decision. A confident proposal is still a proposal. The
              model can be sure. The manager can be sure. Neither surety accepts the operational
              consequence. The person who can accept it records the act, against evidence a later
              reader can inspect. If the only support is confidence, the proposal is not ready for
              that act. The system does not auto-accept because the score is high.
            </p>

            <p>
              Learning is what a later question is allowed to inherit. The closed case shows what
              was believed, what was authorized, and what was checked.{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              says authorization records who decided, and the case stays open until the check is
              written down.{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              says the later question inherits that verified outcome, not a hope. What was believed
              may include a labeled assumption and a note that the room was sure. Learning does not
              inherit the surety as if the check had confirmed it. A later crew that repeats the
              work because the last manager was certain, without the verification on the prior
              case, is inheriting a feeling. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter publishes the closed record. It does not publish confidence as a result.
            </p>

            <p className="text-xl font-semibold text-white">
              Clearance, authorization, and learning stand on a recorded fact: the check, the
              measurement, or the verified outcome. They do not stand on how sure someone feels.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A high model score is not the measurement
            </h2>

            <p>
              The measurement is the value collected from a named source and held on the case: a
              reading, an inspection result, a meter, an oil report, a closed work order, or a
              verification written against an authorized action. The model score is the model
              reporting how sure it is about an output. The two numbers answer different questions.
              One asks what was observed. The other asks how certain the model is. Substituting
              the second for the first stores certainty in the measurement field.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls
              historian or control-system tags sits outside this edition. A score that arrived
              without the records behind it is not a tag. Simulated or seeded telemetry is a
              practice record. A high model score on a practice screen is still a practice score.
              It is not a live plant fact, and it is not a substitute for the assumption the
              operator still has to label.{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              says Sync states what is simulated, seeded, or out of scope. Naming that limit does
              not promote the score into observed fact. The{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              chapter keeps Stage-1 from claiming a live result the edition does not hold.
            </p>

            <p>
              <Link
                href="/insights/dashboard-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Decision
              </Link>{' '}
              keeps the display off the decision. A confident tile is still a display. Green, a
              rising trend, or a large score does not authorize the work, verify the outcome, write
              the work order, or control the plant. The operator reads the score as a model report.
              The operator does not read it as the check.
            </p>

            <p>
              Verification uses the same split.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. It records whether the authorized action did what it was supposed to do,
              and which evidence would show that. A high model score computed before the work, or
              a gut feel after the work, is not that record. The operator writes the observation.
              Confidence that the action worked leaves the verification field empty. Empty stays
              empty until the check is recorded.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The neighboring boundaries still hold
            </h2>

            <p>
              This boundary is not the neighboring ones. Each of those essays still holds. None of
              them promotes confidence to a recorded fact.
            </p>

            <p>
              Assumption Is Not Evidence is the statement. Confidence Is Not Evidence is the
              surety attached to the statement. A belief labeled as an assumption does not become
              evidence because the person is more sure, the score is higher, the sentence is
              older, or the speaker has more authority. The label stays. The observed-fact column
              stays empty until a check, a measurement, or a verified outcome is on the case.
            </p>

            <p>
              Unknown, blank, and silence are still the missing record. Confidence does not
              interpret them into clearance. A case that is unknown, blank, or quiet is not made
              ready by a meeting that agrees it feels ready. Agreement is not a measurement.
            </p>

            <p>
              The check that closes the case is still verification. The trail behind a
              recommendation is still evidence lineage. A later case still inherits the verified
              outcome, not the confidence that traveled with an unverified story. Those records
              are either on the case or they are not. If they are not, confidence does not supply
              them.
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
              directly.{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              is step 02. Observed fact, assumption, and what is still missing stay distinct.
              Confidence does not collapse that split. A proposal with no basis is not ready for
              the human decision that follows.{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              is step 06. A gut feel that the action worked is not the check.{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              is step 07. A later case inherits the verified outcome, not how sure the last shift
              felt.{' '}
              <Link
                href={fieldManualPath('honesty-boundaries')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep the edition from treating a high model score or a manager&apos;s certainty as a
              live fact. Later editions can deepen a chapter. The spine stays in this order.
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
              work order, isolates equipment, or controls a plant. It does not claim that
              confidence is evidence, that a strong gut feel is a recorded check, that a high
              model score is a measurement, that years of tribal &quot;we&apos;ve always
              known&quot; are a verified outcome, or that a manager&apos;s certainty authorizes the
              work. It does not claim that self-guided onboarding is a live product path.
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
              live plant results, and a high model score on a practice screen is not observed fact.
              Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>
              , on why co-moving tags, coincident alerts, and dashboard trends are not a recorded
              causal check and do not authorize action. Companion reading:{' '}
              <Link
                href="/insights/assumption-is-not-evidence"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assumption Is Not Evidence
              </Link>{' '}
              on why a belief, a habit, a prior shift&apos;s story, or an unverified model output
              is not a recorded fact,{' '}
              <Link
                href="/insights/unknown-is-not-clear"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Unknown Is Not Clear
              </Link>{' '}
              on why missing evidence is recorded as unknown, not as clear or ready,{' '}
              <Link
                href="/insights/blank-is-not-zero"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Blank Is Not Zero
              </Link>{' '}
              on why an empty field is not a measured zero,{' '}
              <Link
                href="/insights/silence-is-not-clearance"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Silence Is Not Clearance
              </Link>{' '}
              on why silence, no reply, no alert, and an empty inbox are not authorization,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded,{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              on why a recommendation you cannot reconstruct is not an industrial decision, and{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              on why a later case inherits the verified outcome, not a confident story. A{' '}
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
              chapter is the public statement of the split between observed fact, assumption, and
              what is still missing.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">
                Read the evidence, then bring a question
              </h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the evidence split:
                observed fact, assumption, and what is still missing. Confidence is not evidence.
                Clearance, authorization, and learning still require a recorded fact — a check, a
                measurement, or a verified outcome — not how sure someone feels. The Reliability
                Engineer workspace is where a signed-in Decision Case is completed. A Reliability
                Assessment is the bounded review when the question is whether the records can
                support a conclusion. None of those is a claim that Sync executes plant work, or
                that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="confidence-is-not-evidence" />
        </motion.article>
      </div>
    </main>
  );
}
