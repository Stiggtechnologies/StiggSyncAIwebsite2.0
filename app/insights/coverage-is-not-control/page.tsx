'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('coverage-is-not-control');

export default function CoverageIsNotControlPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Coverage Is Not Control</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Plant coverage is what is watched: sensors, CMMS rows, dashboards, patrol routes.
              Control authority is permission to order work, isolate equipment, or change the plant.
              A Decision Case that records a coverage gap does not give Sync that permission.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Coverage is not control. Sensors, CMMS rows, dashboards, patrol routes, and the claim
              “we monitor everything” describe what is watched. They are not control authority over
              work, isolation, or change. Sync may show coverage and recommend. A named human
              decides. Authorized execution systems write the work order or the isolation. A
              Decision Case that records a coverage gap or a recommended coverage action must not be
              read as Sync controlling the plant.
            </p>

            <p>
              Reliability work collapses the two because a full picture looks like authority. The
              sensor is online. The CMMS has a row. The dashboard shows the asset. A patrol route
              reaches the area. Someone says the plant is monitored. Later a gap appears — a missing
              point, a stale row, a route that stops short — and the recommendation says add
              coverage. The meeting treats the system that showed the gap as if it now controls the
              work. It does not. Coverage was a view. Control authority was never transferred.
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
              . This essay is why a coverage record cannot be read as control of the plant. The
              manual is the public contents.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Coverage is the watched set
            </h2>

            <p>
              Plant coverage is the set of things the organization can point at. A sensor on the
              asset. A row in the CMMS. A tile on a dashboard. A patrol route a person walks. “We
              monitor everything” is a claim about that set. It says the view is broad. It does not
              name who may order work, who may isolate equipment, or who may change the plant.
            </p>

            <p>
              A coverage gap is the same kind of record. A point is missing. A row is stale. A route
              does not reach the asset. The dashboard does not show the condition someone expected
              to see. Recording the gap names what is not watched. It does not create authority to
              close it.
            </p>

            <p className="text-xl font-semibold text-white">
              A watched asset is not an authorized job. An unwatched asset is not a work order.
            </p>

            <p>
              On the Decision Case, coverage belongs with evidence: observed fact, assumption, and
              what is still missing. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter publishes that step. Stage-1 evidence is the record held on the case. A live
              connector that pulls historian or control-system tags sits outside this edition.
              Simulated or seeded telemetry and assets are practice records. They are not customer
              plant coverage, and they are not control authority.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Control authority is permission to act on the plant
            </h2>

            <p>
              Control authority over work, isolation, or change sits with the people and the systems
              that already hold it. A work order is written in the system the site already uses to
              authorize maintenance — the customer’s CMMS or EAM, or the equivalent system of
              record. Isolation is the site’s existing practice for taking equipment out of service,
              under the people who already hold operating authority. A change to the plant follows
              the same authority.
            </p>

            <p>
              A screen that displays sensors does not hold those authorities. A CMMS row does not
              hold them by existing. A patrol route does not hold them by being drawn. Neither does
              a Decision Case that stores any of those records.
            </p>

            <p className="text-xl font-semibold text-white">
              Sync may show coverage and recommend. A named human decides. Authorized execution
              systems write the work order or the isolation.
            </p>

            <p>
              Showing coverage puts the watched set, or the gap in it, where a person can read it.
              Recommending states a proposed next action, the evidence it uses, and the uncertainty
              it leaves in view. Drafting that proposal leaves authority where it already sits.
              Recommend is not authorize. That split is the subject of{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>
              .
            </p>

            <p>
              A named person accepts, rejects, escalates, or returns the proposal. That act is the
              human decision. It records who decided. It still does not write a work order, isolate
              equipment, or change the plant. Authority to accept a coverage recommendation is not
              authority for software to control the plant. Read the two steps as separate chapters:{' '}
              <Link
                href={fieldManualPath('recommendation')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommendation
              </Link>{' '}
              and{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>
              .
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A recorded coverage action is not plant control
            </h2>

            <p>
              If the named person approves work to add a sensor, correct a CMMS row, extend a patrol
              route, or isolate equipment, the Decision Case may store that intent. The write still
              belongs to authorized execution systems and to the people who already operate them.
              Sync does not perform it.
            </p>

            <p>
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              states that boundary for the ACTION disposition. Recording work intent on the case
              does not write a work order, isolate equipment, or dispatch work. ACTION remains
              locked until authorized execution systems write the work order or isolate the
              equipment. A coverage recommendation does not unlock that disposition. A dashboard
              that shows the gap is not a work order. A patrol route is not an isolation.
            </p>

            <p>
              The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter publishes the step. Direct plant execute stays off. The product does not
              dispatch unsupervised work to equipment. Work that follows the decision moves through
              the customer’s systems of record and the people who already hold operating authority.
            </p>

            <p className="text-xl font-semibold text-white">
              A Decision Case that records coverage gaps or recommended coverage actions must not
              imply that Sync controls the plant.
            </p>

            <p>
              The case stores the gap, or the proposed coverage action, beside the question and the
              evidence. That storage is a record. It is not control. Sync may have shown what was
              watched and may have recommended what to do next. A named human decided whether that
              recommendation stood. The plant changes only when authorized execution systems write
              the work order or the isolation.
            </p>

            <p>
              The case does not absorb the historian, the CMMS, the permit, or the plant by
              recording a gap. This edition does not describe a live copy of an execution-system
              write returning into the case. When an authorized execution system does write the work
              order or record the isolation, that write is still their record.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              A coverage record is not a verified outcome
            </h2>

            <p>
              Showing that a sensor exists, that a row exists, or that a route exists does not
              record whether a later action did what it was supposed to do.{' '}
              <Link
                href="/insights/verification-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification Is Not Optional
              </Link>{' '}
              states the next gate. After a named human authorizes an action, the loop is not closed
              until verification is recorded. A coverage gap that was never turned into executed
              work has nothing executed to check. A work order that was written and never checked is
              still an open case.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              states what a later case is allowed to inherit. Learning keeps the closed case. It
              does not keep a hoped-for outcome, a recommendation that was never authorized, or an
              action that was never verified. A coverage display is a further record that does not
              count. A later question that cites “we monitor everything” as if the plant were under
              control is citing a view. Unless verification holds an observed outcome, there is
              nothing verified to pass forward.
            </p>

            <p>
              Evidence still has to be reconstructable.{' '}
              <Link
                href="/insights/evidence-lineage-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence Lineage Is Not Optional
              </Link>{' '}
              asks whether a later reviewer can rebuild the proposal. The same reviewer should be
              able to tell coverage from control authority, and a recommended coverage action from
              the work order or the isolation that would carry it out. A lesson that merges them is
              a story about control the case does not hold.
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
              directly. Coverage shown on the case sits with evidence. A recommended coverage action,
              once a person decides, sits with the action step. Neither step is control of the
              plant. Later editions can deepen a chapter. The spine stays in this order.
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
              limit and no operating threshold. It does not claim that Sync monitors a customer
              plant, and it does not claim that showing coverage controls one.
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
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              on why a recorded ACTION disposition is not plant execution,{' '}
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
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter is where a coverage record belongs. It is not a grant of control.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries, including
                what evidence may show and what action may record. The Reliability Engineer
                workspace is where a signed-in Decision Case is completed. A Reliability Assessment
                is the bounded review when the question is whether the records can support a
                conclusion.
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
          <InsightNextSteps slug="coverage-is-not-control" />
        </motion.article>
      </div>
    </main>
  );
}
