'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('assured-is-not-proven');

export default function AssuredIsNotProvenPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Assured Is Not Proven</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              An asset can be called assured — time-bounded confidence that it stays in a known-good
              state under operating conditions, with ownership and monitoring — and still not be
              proven. Assurance can be standing and probabilistic. Proof is claim-scoped and
              falsifiable: a closed evidentiary chain for a specific claim under named conditions,
              with reproducible checks, lineage, and a decision authority that can refuse when
              evidence is incomplete.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Assured is not proven. Assurance is time-bounded confidence that an asset stays in a
              known-good state under operating conditions, with ownership and monitoring. That
              standing claim can be probabilistic. Proof requires a closed evidentiary chain for a
              specific claim under named conditions. The chain needs reproducible checks, lineage,
              and a decision authority that can refuse when evidence is incomplete. Treating
              assurance as proof ships false certainty into maintenance and production decisions.
              Sync may surface an assurance record beside a Decision Case when the window, the
              owner, the monitoring, the conditions, and the assumptions are named. Surfacing is
              still a read. A named human decides. Proof stays open until the chain for that claim
              is closed. Direct plant execute stays off.
            </p>

            <p>
              An assurance label looks like a settled fact. The window is named. Someone owns the
              claim. Something is being watched. The meeting then treats the asset as proven fit
              for the next maintenance call and the next production call, as if the standing
              confidence had already closed the specific claim in front of the room. It has not.
              The screen updated because a record stored a word for continuing fitness. The word
              does not name the claim that was proven. It does not name the conditions that claim
              was about. It does not show a check that could have failed. It does not show who may
              still refuse because the evidence is incomplete.
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
              . This essay is why an assurance record cannot be read as proof. The{' '}
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
              chapter keeps that record. Neither chapter converts standing confidence into a closed
              chain for a specific claim.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Assurance is standing and can be probabilistic
            </h2>

            <p>
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              sits one step earlier. A verified work package, inspection, or AI recommendation
              closes a claim about the past: evidence collected, checks passed, lineage present.
              Assurance is the standing claim that comes after that split, when someone still wants
              to say the asset stays known-good. This essay starts after that split has been kept.
              The record really can be an assurance: a bounded window, a named owner, monitoring
              through the window, and operating conditions the claim is willing to name. That
              standing claim can be honest and still not be proof.
            </p>

            <p>
              Standing means the claim is allowed to remain in force while the window is open. It
              is not a second copy of a check that already closed. Probabilistic means the
              confidence can be partial. The record may say the asset is fit to remain in the
              named state with a stated degree of confidence, under the conditions the claim
              names, and still leave room for the claim to be wrong. This essay states no
              probability, no percentage, and no band. Whatever degree of confidence is in use was
              chosen. Naming it does not close a proof.
            </p>

            <p>
              Four parts still have to be named or the standing claim is not there. The window is
              time-bounded: a start, an end, or a condition that ends it. The state is known-good
              only for the operating conditions the claim names. The owner holds the claim while it
              stands. Monitoring is the watch during the window. A verified stamp names none of
              those four. An assurance label that names them still does not name the specific claim
              a later decision is trying to prove.
            </p>

            <p className="text-xl font-semibold text-white">
              Assurance is time-bounded confidence under named operating conditions. It is not a
              closed evidentiary chain for a specific claim.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Proof is claim-scoped and falsifiable
            </h2>

            <p>
              Proof has a narrower object. It is about one claim, not about the asset in general.
              The claim has to be specific: this work produced this effect, this defect was absent
              under these conditions, this release is fit for this duty. A sentence that only says
              the asset is assured is not that claim. It does not say what was proven.
            </p>

            <p>
              The conditions have to be named. Named conditions are the load, the mode, the
              product, the environment, or the duty the claim is about. They are not every way the
              asset can be run. An assurance that travels, unnamed, from one operating condition
              into another is not proof of the second condition. This essay sets no OEM limit and
              no operating threshold. It says the conditions have to be named if someone wants to
              treat the assurance as proof of a claim, and that the assurance label does not name
              them by itself.
            </p>

            <p>
              Falsifiable means there is a check that could have failed, and that a failed check
              would withdraw the claim. If nothing that could be observed would make the claim
              false, the record is not proof. It is confidence that cannot be answered. Claim-scoped
              means the failure of that check answers that claim, not every other claim someone
              might later hang on the same asset. A standing assurance can survive a failed check
              on a different claim. That survival is not proof of the claim that failed, and it is
              not proof of the claim that was never checked.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Reproducible checks, lineage, and a decision authority that can refuse
            </h2>

            <p>
              A closed evidentiary chain has three parts. Reproducible checks mean the named
              observation can be repeated against the same criteria, or the record says why a
              repeat is not available and what that does to the claim. Lineage means a later reader
              can reconstruct which evidence, which check, and which person the claim depends on.
              The decision authority is a named person who can refuse when evidence is incomplete.
              If any of the three is missing, the chain is open. The claim is not proven.
            </p>

            <p>
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              states the gate for the check. The case stays open until named observation against
              named criteria is recorded as achieved, not_achieved, or inconclusive, with measured
              notes. Recording that check closes a claim about the past. It does not, by itself,
              prove a later standing assurance, and an assurance label does not replace the check.
              A reproducible check is that observation, available to be run again against the same
              criteria. A label that says assured is not the observation.
            </p>

            <p>
              Lineage makes the chain auditable. It does not create the chain. A path from an
              assurance label back to a window, an owner, and a watch can be present and still omit
              the specific claim, the conditions, or the check that could have failed. The lineage
              of the assurance is then a lineage of confidence. It is not a lineage of proof.
            </p>

            <p>
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              states the act that still has to be recorded when a person accepts a consequence. A
              named person accepts, rejects, escalates, or returns the recommendation. That person
              is the decision authority on the case. The authority includes the right to refuse
              when evidence is incomplete. An assurance label does not exercise that refusal. It
              does not fill a missing check, a missing condition, or a missing link in the chain.
            </p>

            <p>
              Evidence from the plant beats the assurance. If the evidence on the case does not
              support the specific claim under the named conditions, the case refuses. If the
              evidence supports a standing assurance and does not close the chain, the case may
              store the assurance and must not store the claim as proven. The label does not fill
              the gap, and it does not close it.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A complete record and a simulated future are not the chain
            </h2>

            <p>
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              keeps a completion label off named observation. A completed checklist, a completed
              work order, or a complete badge is not verification. This essay is the step after
              both of those splits. Completion is not verification. Verification is not assurance.
              Assurance is not proof. Each word can be true in its own tense and still be the wrong
              word for the claim in front of the decision.
            </p>

            <p>
              <Link
                href="/insights/simulation-is-not-proof"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Simulation Is Not Proof
              </Link>{' '}
              already refuses to treat a digital-twin run, a Monte Carlo fan, a what-if scenario,
              or a failure simulation as proof that the plant will behave that way. An assurance
              built on that run is still not proof. The run is a controlled representation. The
              assurance is standing confidence. Neither one is a closed evidentiary chain for a
              specific claim under named conditions. Sync refuses when coverage, assumptions, or
              calibration are insufficient for the claim being made.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              False certainty in maintenance and production decisions
            </h2>

            <p>
              The failure mode is ordinary. An assurance label is shown beside a maintenance
              decision or a production decision, and the room treats the label as if the specific
              claim were already proven. Defer the repair. Return the asset to service. Hold the
              rate. Release the run. Each of those is a claim. The assurance does not prove it.
              The past confidence can be real. The chain for this claim can still be open. The
              board looks settled because the assurance word was allowed to stand in for proof.
            </p>

            <p>
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              already refuses to treat a green tile as permission to run, clear, start, or leave
              equipment in service. An assurance painted on that tile is not a stronger green. It
              is standing confidence sitting on a display. Go still requires a named human
              decision. Proof still requires the closed chain. The color supplies neither.
            </p>

            <p>
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is the rule that keeps the words apart under the honesty and verification boundary.
              Sync states what was checked and what was not claimed. Calling an assurance proof
              crosses that boundary. Treating a closed chain as if it were only a standing
              confidence, or treating the standing confidence as if it were the closed chain, is
              the same confusion from the other side.
            </p>

            <p className="text-xl font-semibold text-white">
              Treating assurance as proof ships false certainty into maintenance and production
              decisions. The standing claim can be honest and the chain can still be open.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What the Decision Case may store
            </h2>

            <p>
              Evidence may cite an assurance record when the window, the owner, the monitoring, the
              operating conditions, and the assumptions are named. That citation is a record of
              standing confidence. It is not a record that a specific claim was proven. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter publishes that step. Stage-1 evidence is the record held on the case. A live
              connector that pulls historian or control-system tags sits outside this edition.
              Simulated or seeded telemetry and assets are practice records. A practice record that says assured is not a customer plant release.
            </p>

            <p>
              A recommendation may say investigate because the chain is open: the claim is not
              specific, the conditions are not named, the check cannot be repeated, the lineage
              stops short, or no decision authority can refuse. The proposal does not prove the
              claim and does not authorize the next action. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records intent. Authorized execution systems write the work order or the
              isolation. Sync does not write the work order. Sync does not mark an asset proven.
              Sync does not write that state back. CMMS write-back is not a live product path.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              execution. An assurance label does not perform the write and does not prove the claim
              the work was meant to settle.
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
              the decision authority for the claim on the case, including the right to refuse when
              evidence is incomplete. It is not, by itself, proof that a standing assurance was a
              closed chain. Sync refuses false precision. Sync refuses when evidence is
              insufficient. A named human still decides.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may surface an assurance record beside approved evidence when the window, the
              owner, the monitoring, the conditions, and the assumptions are named. Sync refuses
              false precision. Sync refuses when evidence is insufficient. A named human still
              decides. The assurance record stays standing confidence. Proof stays unnamed until
              the chain for the specific claim is closed.
            </p>

            <p>
              Learning keeps the closed case: achieved, not_achieved, or inconclusive, with
              measured notes. It does not keep an assurance as proof. A later question that cites
              an assured asset as if a specific claim were already proven is citing standing
              confidence. Sync must not auto-close, auto-authorize, or treat assured proof as
              Learning credit.
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
              directly. Evidence may hold what an assurance record showed and which conditions it
              named. Human decision may hold who accepted the consequence, and who could refuse.
              Verification may hold the named observation. Learning may hold achieved,
              not_achieved, or inconclusive, with measured notes. None of those steps is an
              assurance label used as proof. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating standing confidence as a closed chain. Later editions
              can deepen a chapter. The spine stays in this order.
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
              no plant, states no savings figure, and claims no prevented failure. It states no OEM limit
              and no operating threshold. It does not claim that an assurance record proves a
              specific claim, keeps an asset known-good, or controls a plant. It does not claim
              that Sync executes plant work. It does not claim CMMS write-back as a shipped
              product.
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
              describes that journey. Walking those steps is not proof. The verification step is
              where named observation is stored. This edition does not describe plant execute, a
              live connector tag pull, CMMS write-back, SMTP invite delivery, or automatic
              revocation of access on expiry as live. It does not describe Sync writing work
              orders, marking an asset proven, starting equipment, releasing a hold, or controlling
              the plant. Simulated or seeded telemetry and assets are practice records. They are
              not live plant results. Self-guided onboarding is not claimed as a live product path.
            </p>

            <p>
              Companion reading:{' '}
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              on why a verified record closes a claim about the past and is not assurance,{' '}
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
                href="/insights/simulation-is-not-proof"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Simulation Is Not Proof
              </Link>{' '}
              on why a controlled representation of possible futures is not proof,{' '}
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
              chapter records named observation against named criteria. The assurance label does
              not prove the claim.
            </p>

            <p>
              The series continues with{' '}
              <Link
                href="/insights/proof-is-not-authorization"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proof Is Not Authorization
              </Link>
              , on why a closed evidentiary chain for a specific claim under named conditions is
              still not authorization to execute plant work, write a CMMS work order, clear
              equipment to run, or treat the case as plant-execute. Authorization is a separate
              named human decision that accepts consequence and routes intent to authorized
              execution systems.
            </p>

            <p>
              <Link
                href="/insights/authorization-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorization Is Not Accountability
              </Link>{' '}
              states the split after that decision. Authorization answers who may start. It is
              still not the continuing named ownership of results, exceptions, and learning after
              the work runs.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Assurance
                is time-bounded confidence that an asset stays in a known-good state under
                operating conditions, with ownership and monitoring. It can be standing and
                probabilistic. Proof still requires a closed evidentiary chain for a specific claim
                under named conditions: reproducible checks, lineage, and a decision authority that
                can refuse when evidence is incomplete. The Reliability Engineer workspace is where
                a signed-in Decision Case is completed. A Reliability Assessment is the bounded
                review when the question is whether the records can support a conclusion. None of
                those is a claim that Sync executes plant work, that CMMS write-back is live, or
                that self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="assured-is-not-proven" />
        </motion.article>
      </div>
    </main>
  );
}
