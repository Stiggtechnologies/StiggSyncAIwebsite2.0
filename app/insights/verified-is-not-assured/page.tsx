'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('verified-is-not-assured');

export default function VerifiedIsNotAssuredPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Verified Is Not Assured</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              A work package, an inspection, or an AI recommendation can be marked verified —
              evidence collected, checks passed, lineage present — and still not be assured.
              Verification closes a claim about the past. Assurance is a standing claim about
              continuing fitness: time-bounded confidence that the asset stays in a known-good
              state under operating conditions, with ownership, monitoring, and a human authority
              boundary.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Verified is not assured. The work package, the inspection, and the AI recommendation
              can each carry a verified mark when evidence was collected, checks passed, and lineage
              is present. That mark closes a claim about the past. It does not keep a standing claim
              that the asset stays in a known-good state under operating conditions. Assurance
              requires a bounded window, a named owner, monitoring through that window, and a human
              authority boundary. Confusing the two ships false greens into operations. Sync may
              surface a verified record beside a Decision Case when the check, the lineage, the
              window, the owner, and the assumptions are named. Surfacing is still a read. A named
              human decides. Assurance stays open until those standing conditions are named.
              Verification stays what it is: named observation against named criteria. Direct plant execute stays off.
            </p>

            <p>
              A verified stamp looks like permission to keep going. The work package says verified.
              The inspection says verified. The recommendation says verified, with the evidence
              attached and the path back to the source still readable. The meeting treats the word
              as if the asset were fit to stay in service, as if the next shift could inherit a
              known-good state, as if the green on the board were the same fact as the check that
              closed yesterday. It is not. The screen updated because a record stored a word for a
              finished check. The word does not say how long that check remains fit to rely on. It
              does not name who owns the standing claim. It does not say what is being watched now.
              It does not say who may still refuse to treat the asset as assured.
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
              . This essay is why a verified record cannot be read as assurance. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter records named observation against the criteria the decision named. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter keeps that record. Neither chapter converts the closed check into a standing
              claim that the asset remains fit.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Verification closes a claim about the past
            </h2>

            <p>
              Verification has a tense. It says what was observed, against which criteria, and what
              that observation decided. The stored words are achieved, not_achieved, or
              inconclusive, with measured notes. Achieved means the check named in the decision was
              observed and the intended effect was seen. not_achieved means the check was observed
              and the intended effect was not seen. Inconclusive means the check could not decide,
              and the measured notes say why. Those three words close a claim about a check that
              already happened.
            </p>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              sits one step earlier. A completed checklist, a completed work order, a completed
              case, a 100% complete string, or a complete badge is a completion label under the
              criteria someone chose. That label is not named observation. This essay starts after
              that split has been kept. The record really is verified: evidence collected, checks
              passed, lineage present. The claim about the past can be honest and still not be
              assurance.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              states the gate. The case stays open until the check is recorded. Recording it does
              not open a second gate called assured. The check answers whether the authorized action
              did what the decision named. It does not answer whether the asset will stay in a
              known-good state while it runs.
            </p>

            <p className="text-xl font-semibold text-white">
              A verified record is named observation against named criteria. It is not time-bounded
              confidence that the same asset stays known-good under operating conditions.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Assurance is a standing claim about continuing fitness
            </h2>

            <p>
              Assurance has a different tense. It says the asset is fit to remain in a known-good
              state for a named window, under the operating conditions that window assumes, while
              someone owns the claim, while the conditions are monitored, and while a human
              authority boundary can still withdraw it. Continuing fitness is that standing claim.
              It is not a second copy of the verification word.
            </p>

            <p>
              Four parts have to be named, or the standing claim is not there. The window is
              time-bounded: a start, an end, or a condition that ends it. The state is known-good
              only for the conditions the claim names, not for every way the asset can be run. The
              owner is a named person or a named role that holds the claim while it stands.
              Monitoring is the watch during the window, not the check that already closed.
              The human authority boundary is the right to refuse, to shorten the window, or to say
              the claim no longer holds. A verified stamp names none of those four by itself.
            </p>

            <p>
              This essay states no OEM limit and no operating threshold. It states no interval, no
              hours, and no sensor band. Whatever window, conditions, and refusal rule are in use
              were chosen. The verified mark does not choose them, and it does not keep them current.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Evidence collected, checks passed, and lineage present
            </h2>

            <p>
              Those three phrases are what a careful record can honestly say about the past. Evidence
              collected means the case holds the record the decision used. Checks passed means the
              named observation met the criteria the decision named. Lineage present means a later
              reader can reconstruct which evidence, which check, and which person the verified mark
              depends on. Each one is necessary for an honest close of the claim about the past.
              None of them is the standing claim.
            </p>

            <p>
              Lineage makes the past check auditable. It does not watch the asset after the check.
              A complete path from recommendation back to source can be present on Monday and silent
              on Tuesday while the asset runs outside the conditions the check assumed. The lineage
              is still present. The assurance is not.
            </p>

            <p>
              Evidence from the plant beats the verified stamp. If the evidence on the case does not
              support the claim about the past, the case refuses. If the evidence supports that
              claim and does not name a window, an owner, monitoring, and a human authority boundary,
              the case may store verified and must not store assured. The stamp does not fill the
              gap, and it does not close it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A verified work package is not a known-good asset
            </h2>

            <p>
              A work package can be marked verified when the evidence for that package was collected
              and the checks on that package passed. The mark reports the package. It does not report
              that the asset the package touched stays known-good after the package closes. Parts
              can be fitted, torques can be recorded, and the package can still leave the asset in a
              state the next operating condition will change.
            </p>

            <p>
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              keeps work intent off the plant. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records intent. Authorized execution systems write the work order or the
              isolation. Sync does not write the work order. Sync does not mark a work package
              verified. Sync does not write that state back. CMMS write-back is not a live product
              path. A label in another system that says the package is verified is not that write,
              and it is not assurance that the asset remains fit.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A verified inspection is not continuing fitness
            </h2>

            <p>
              An inspection marked verified says the inspection was done and the check on that
              inspection passed, with the evidence and the lineage the record holds. It says what
              was seen at the time of the inspection. Continuing fitness asks what remains true
              while the asset operates after that time. The inspection does not answer that question
              by being marked verified.
            </p>

            <p>
              Operating conditions are part of the standing claim. A check taken at one load, one
              temperature, one product, or one mode does not travel, unnamed, into every later mode.
              This essay does not set those conditions. It says they have to be named if someone
              wants to treat the inspection as assurance, and that the verified mark does not name
              them.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A verified AI recommendation is not assurance
            </h2>

            <p>
              An AI recommendation can be marked verified in a narrower sense: the evidence it used
              was collected, the checks a person required of that recommendation passed, and the
              lineage from output back to those inputs is present. That is still a claim about how
              the recommendation was formed and checked. It is not a claim that the asset will stay
              known-good if someone follows it, and it is not permission to follow it.
            </p>

            <p>
              Drafting the recommendation does not change the plant. A verified flag on the draft
              does not change the plant either. The proposal states a next action, the evidence it
              uses, and the uncertainty it leaves in view. Uncertainty includes the fact that a
              passed check is not a standing assurance.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              states the act that still has to be recorded when a person accepts a consequence. A
              named person accepts, rejects, escalates, or returns the recommendation. That act is
              not verification, and verification of the recommendation is not the human authority
              boundary on assurance. The boundary is the standing right to say the asset is not
              assured, including after a check has already passed.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The window, the owner, and the watch
            </h2>

            <p>
              Time-bounded means the standing claim ends. When the window ends, the verified record
              remains a true claim about the past and ceases to support assurance. Nobody has to
              delete the check. Somebody has to stop reading it as if it still held the asset in a
              known-good state. A record with no end is not a stronger assurance. It is an unstated
              window.
            </p>

            <p>
              Ownership is not the same person as the person who recorded the check, unless the
              record says so. The checker closed a claim about the past. The owner holds the
              standing claim while it is allowed to stand. If the record names no owner, the
              verified stamp is being asked to do an assurance job it does not do.
            </p>

            <p>
              Monitoring is observation during the window, against the conditions the standing claim
              named. It is not a second copy of the original check, and it is not a green tile that
              refreshed. A watch that nobody owns, with no condition that would end the claim, is
              not monitoring. It is a display.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              False greens in operations
            </h2>

            <p>
              The failure mode is ordinary. A verified work package, a verified inspection, or a
              verified recommendation is shown beside a status that reads as fit to run. The color,
              the badge, or the word verified is then used as if the asset were assured. That is a
              false green. The past check can be true. The standing claim can still be absent. The
              board looks clear because the verification word was allowed to stand in for assurance.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. A verified stamp painted on that tile is not a stronger green.
              It is a closed claim about the past sitting on a display. Go still requires a named
              human decision. Assurance still requires the window, the owner, the watch, and the
              human authority boundary. The color supplies none of them.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling a verified record
              assured crosses that boundary. Treating verified
              assurance as if it were the closed check, or treating the closed check as if it were
              assured, is the same confusion from the other side.
            </p>

            <p className="text-xl font-semibold text-white">
              Confusing verification with assurance ships false greens into operations. The check
              can be honest and the standing claim can still be missing.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What learning is allowed to inherit
            </h2>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              states what a later case may inherit. Learning keeps the closed case: achieved,
              not_achieved, or inconclusive, with measured notes. It does not keep a standing
              assurance. A later question that cites a verified work package, a verified inspection,
              or a verified recommendation as if the asset were still known-good is citing a past
              check. Sync must not auto-close, auto-authorize, or treat verified assurance as
              Learning credit.
            </p>

            <p>
              A narrow result is still a result. not_achieved is a finished record of a failed
              effect. Inconclusive is a finished record of a check that could not decide. Neither
              one becomes assurance by being stored carefully. Achieved does not become assurance
              either. The honest close of the past claim is the end of verification, not the start
              of a license to leave the asset unwatched.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite what a verified work package, verified inspection, or verified AI
              recommendation held when the source, the time, who attached the word, the criteria,
              the lineage, and the assumptions are named. That citation is a record of a past check.
              It is not a record that the asset stays known-good. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter publishes that step. Stage-1 evidence is the record held on the case. A live
              connector that pulls historian or control-system tags sits outside this edition.
              Simulated or seeded telemetry and assets are practice records. A practice record that says verified is not a customer plant release.
            </p>

            <p>
              A recommendation may say investigate because the verified record does not name a
              window, an owner, or a watch, or it may say the past check is not enough for the
              decision now. The proposal does not assure the asset and does not authorize the next
              action.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution. A verified stamp does not perform the write and does not keep the asset in
              a known-good state.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The check
              is named observation against named criteria, stored as achieved, not_achieved, or
              inconclusive, with measured notes. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records who accepted the consequence of that recommendation. That record is
              the human authority boundary for the decision on the case. It is not, by itself, the
              owner of a standing assurance, unless the case names that owner and the window. Sync refuses false precision. Sync refuses when evidence is insufficient. A named human still decides.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface a verified record beside approved evidence when the check, the
              lineage, the window, the owner, and the assumptions are named. Sync refuses false precision. Sync refuses when evidence is insufficient. A named human still decides.
              The verified record stays a claim about the past. Assurance stays unnamed until the
              standing conditions are named.
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
              directly. Evidence may hold what a verified record showed and which criteria closed
              it. Human decision may hold who accepted the consequence. Verification may hold the
              named observation. Learning may hold achieved, not_achieved, or inconclusive, with
              measured notes. None of those steps is a verified stamp used as assurance. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating a past check as continuing fitness. Later editions can
              deepen a chapter. The spine stays in this order.
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
              limit and no operating threshold. It does not claim that a verified work package, a
              verified inspection, or a verified AI recommendation assures an asset, keeps it
              known-good, or controls a plant. It does not claim that Sync executes plant work. It
              does not claim CMMS write-back as a shipped product.
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
              describes that journey. Walking those steps is not assurance. The verification step
              is where named observation is stored. This edition does not describe plant execute, a
              live connector tag pull, CMMS write-back, SMTP invite delivery, or automatic
              revocation of access on expiry as live. It does not describe Sync writing work orders,
              marking a package verified, starting equipment, releasing a hold, or controlling the
              plant. Simulated or seeded telemetry and assets are practice records. They are not
              live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              on why a completion label is not named observation,{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              on why the case stays open until the check is recorded,{' '}
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              on why a later case inherits achieved, not_achieved, or inconclusive,{' '}
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              on why a green tile is not permission to run,{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              on why the limit has to be stated, and{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              on why a named person still has to accept, reject, escalate, or return. A{' '}
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
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter records named observation against named criteria. The verified stamp does not
              assure the asset.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/assured-is-not-proven"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Assured Is Not Proven
              </Link>
              , on why time-bounded confidence that an asset stays in a known-good state under
              operating conditions, with ownership and monitoring, is still not proof. Proof
              requires a closed evidentiary chain for a specific claim under named conditions.
            </p>

            <p>
              <Link
                href="/insights/proof-is-not-authorization"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proof Is Not Authorization
              </Link>{' '}
              states the split after that chain closes. Proof answers whether a specific claim
              held. It is still not authorization to execute plant work, write a CMMS work order,
              clear equipment to run, or treat the case as plant-execute.
            </p>

            <p>
              <Link
                href="/insights/authorization-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorization Is Not Accountability
              </Link>{' '}
              states the split after the named decision. An authorized state is not accountability
              for the outcome after the work runs.
            </p>

            <p>
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>{' '}
              states the split after the named owner. A verified record closes a claim about the
              past. A named accountable human without that measured result leaves the operating
              loop open.
            </p>

            <p>
              <Link
                href="/insights/profit-is-not-value"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Profit Is Not Value
              </Link>{' '}
              states the split after the accounting result. A verified record closes a claim about
              the past. A profit figure is not that claim and is not the value of the operating
              decision.
            </p>

            <p>
              <Link
                href="/insights/outcome-is-not-impact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Outcome Is Not Impact
              </Link>{' '}
              states the split after the measured result. A verified record closes a claim about
              the past. That outcome is not attribution that a decision changed cash, risk, or
              capacity.
            </p>

            <p>
              <Link
                href="/insights/impact-is-not-revenue"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Impact Is Not Revenue
              </Link>{' '}
              states the split after the attribution. A verified record closes a claim about the
              past. That impact is not recognized sales.
            </p>

            <p>
              <Link
                href="/insights/revenue-is-not-arr"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Revenue Is Not ARR
              </Link>{' '}
              states the split after the period booking. A verified record closes a claim about the
              past. That booking is not ARR.
            </p>

            <p>
              <Link
                href="/insights/arr-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                ARR Is Not Cash
              </Link>{' '}
              states the split after the annualized contract. A verified record closes a claim about
              the past. That contract is not cash collected.
            </p>

            <p>
              <Link
                href="/insights/cash-is-not-runway"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Runway
              </Link>{' '}
              states the split after the cash balance. A verified record closes a claim about the
              past. That cash balance is not runway.
            </p>

            <p>
              <Link
                href="/insights/runway-is-not-survival"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Runway Is Not Survival
              </Link>{' '}
              states the split after the runway figure. A verified record closes a claim about the
              past. That runway figure is not survival.
            </p>

            <p>
              <Link
                href="/insights/survival-is-not-solvency"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Survival Is Not Solvency
              </Link>{' '}
              states the split after survival. A verified record closes a claim about the past.
              That survival note is not solvency.
            </p>

            <p>
              <Link
                href="/insights/solvency-is-not-liquidity"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Solvency Is Not Liquidity
              </Link>{' '}
              states the split after solvency. A verified record closes a claim about the past.
              That solvency note is not liquidity.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. A work
                package, an inspection, or an AI recommendation marked verified — evidence
                collected, checks passed, lineage present — closes a claim about the past.
                Assurance still requires time-bounded confidence that the asset stays in a
                known-good state under operating conditions, with ownership, monitoring, and a human
                authority boundary. The Reliability Engineer workspace is where a signed-in Decision
                Case is completed. A Reliability Assessment is the bounded review when the question
                is whether the records can support a conclusion. None of those is a claim that Sync
                executes plant work, that CMMS write-back is live, or that self-guided onboarding
                is a live product path.
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
          <InsightNextSteps slug="verified-is-not-assured" />
        </motion.article>
      </div>
    </main>
  );
}
