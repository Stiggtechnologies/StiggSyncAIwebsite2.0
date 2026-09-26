'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('ownership-is-not-control');

export default function OwnershipIsNotControlPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Ownership Is Not Control</h1>
            {article?.author ? (
              <p className="mb-6 text-sm text-slate-400">
                <span className="font-semibold text-slate-200">{article.author}</span>
                <span className="mx-2 text-slate-600">·</span>
                Author
              </p>
            ) : null}
            <p className="text-xl text-gray-400">
              Ownership is the residual economic claim on an asset, equity, IP, or cash flow —
              residual rights and upside/downside on the balance sheet, not the power to direct the
              asset. Control is the practical power to set or change direction of the asset or plant
              — who can steer capital allocation, operating priorities, or binding plant moves in
              practice — direction power, not a residual claim. Ownership is not control. A firm with
              ownership can still lack control. A firm with control can still lack ownership. An
              ownership note alone proves neither. A control note alone proves neither. An ownership
              note is not a green. A control note is not a green. A residual claim without direction
              power is not control. Direction power without a residual claim is not ownership. A
              title is neither. Accountability is not ownership. Authority is not accountability.
              The charter that named the right is not direction power. Sync does not measure
              ownership. Sync does not measure ownership for the customer. Sync does not measure
              control. Sync does not measure control for the customer.
            </p>
            <p className="text-xl text-gray-400">
              The earlier essays already fixed the chain this refusal sits on. Judgment is not
              authority. Authority is not accountability. Accountability is not ownership. Ownership
              is not control. Learning is an updated decision rule, model, or operating practice the
              firm adopts because a verified result changed what it will do next under a named
              decision window — tempered belief that changes future allocation, not a dashboard tile,
              a learning_events row, a retrospective note, or a results number sitting unread.
              Results is the attributed, measured change in plant capacity, risk, cost, or production
              the firm can show followed from completed work under a named measurement window —
              consequence under the honesty and verification boundary, not the WO close,
              shipped-change ticket, or single verified plant check alone. Execution is work actually
              completed inside the named decision window with evidence of done outcomes (closed work,
              shipped change, verified plant result) — realized performance against the committed
              path, not the strategy note, roadmap slide, or allocated budget envelope alone.
              Strategy is a named choice among alternatives with allocated resources, a named
              decision window, accountable owner, and success criteria the firm is actually
              committing to execute — a committed path and resource allocation, not proof the work
              was completed inside that window. Sync may surface an ownership/residual-claim note or
              a control/direction-power note beside Evidence, Verification, and the closed outcome.
              This essay does not rewrite Accountability Is Not Ownership. This essay does not
              rewrite Authority Is Not Accountability. This essay does not rewrite Closure Is Not
              Cash. This essay does not rewrite Coverage Is Not Control. This essay does not rewrite
              Dashboard Is Not Control.
            </p>
          </header>

          <div className="text-gray-300 space-y-6">
            <p className="text-xl font-semibold text-white">
              Ownership is not control. Ownership is the residual economic claim on an asset, equity,
              IP, or cash flow — residual rights and upside/downside on the balance sheet, not the
              power to direct the asset. Control is the practical power to set or change direction of
              the asset or plant — who can steer capital allocation, operating priorities, or binding
              plant moves in practice — direction power, not a residual claim. A firm with ownership
              can still lack control when that residual claim is on the record and the firm has not
              named who can steer capital allocation, operating priorities, or binding plant moves in
              practice. A firm with control can still lack ownership when that direction power is on
              the record and the firm has not named a residual economic claim. A residual claim
              without direction power is not control. Direction power without a residual claim is not
              ownership. A title is neither. Treating ownership as control records a residual claim
              as a claim about direction power that nobody has named, under the honesty and
              verification boundary. An ownership note can inform a recommendation to investigate.
              Recommend is not authorize. It is not the plant, not a diagnosis, not root cause, not a
              work order, not an invoice, and not a Decision Case that has already shown control.
              Evidence from the plant beats the ownership note when the note is being used as
              control. Sync may surface an ownership/residual-claim note or a control/direction-power
              note beside Evidence, Verification, and the closed outcome. Sync may surface an
              ownership/residual-claim note or a control/direction-power note beside
              Evidence/Verification/closed outcome. Surfacing is still a read. Sync refuses false
              precision. Sync refuses when evidence is insufficient. Sync must not auto-close,
              auto-authorize, or treat ownership as control as Learning credit. Sync does not measure
              ownership. Sync does not measure ownership for the customer. Sync does not measure
              control. Sync does not measure control for the customer. This essay does not collapse
              control into ownership. This essay does not collapse control into authority. This essay
              does not collapse ownership into accountability. Control here is practical steering
              power over the asset/plant, not the formal decision-rights charter alone. A practice
              record that says ownership is control is not a customer plant release, and it is not
              shown control. Direct plant execute stays off. CMMS write-back is not a live product
              path. Billing write-back is not a live product path.
            </p>

            <p>
              <Link
                href="/insights/accountability-is-not-ownership"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Ownership
              </Link>{' '}
              sits one step earlier. Accountability, there, is owning the outcome of a bound decision
              — who answers for results, misses, and remediation under a named decision window. That
              is outcome ownership after authority was exercised. Ownership, there, is the residual
              economic claim on an asset, equity, IP, or cash flow — residual rights and
              upside/downside on the balance sheet, not the duty to answer for a named plant outcome.
              A firm with accountability can still lack ownership. A firm with ownership can still
              lack accountability. A residual claim without an outcome owner is not accountability.
              Answering for results without a residual claim is not ownership. A title is neither.
              That refusal stops at the residual claim. It does not ask whether the residual claimant
              can steer capital allocation, operating priorities, or binding plant moves in practice.
              Accountability is not ownership is a different refusal. Ownership is not control is the
              next refusal. This essay does not rewrite Accountability Is Not Ownership.
            </p>

            <p>
              <Link
                href="/insights/authority-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authority Is Not Accountability
              </Link>{' '}
              is a different split, and this essay does not collapse into it. Authority is the
              formal, named right to bind the firm within a defined scope and window — decision
              rights on the org chart or charter. Authority is the formal, named right to bind the
              firm to plant work, capital, or risk within a defined scope and window — decision
              rights on the org chart or charter, not the quality of the call, not a title without
              scope, not a recommendation, and not judgment sitting with someone who cannot bind.
              Accountability is owning the outcome of that bound decision — who answers for results,
              misses, and remediation — not the charter that named the right, not a title, and not
              sitting with the result without the right to bind. A charter without an outcome owner
              is not accountability. Sitting with the result without the right to bind is not
              authority. A title is neither. A firm with authority can still lack accountability. A
              firm with accountability can still lack authority. Control in this essay is not that
              charter. Control is practical steering power over the asset/plant, not the formal
              decision-rights charter alone. A named right on the org chart or charter can sit on the
              record while the person who holds it cannot, in practice, set or change direction of
              the asset or plant. That right is authority. It is not control. A person who can steer
              capital allocation, operating priorities, or binding plant moves in practice can do so
              without that formal named right. That steering is control. It is not authority. This
              essay does not rewrite Authority Is Not Accountability. This essay does not rewrite
              Judgment Is Not Authority.
            </p>

            <p>
              <Link
                href="/insights/accountability-is-not-closure"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accountability Is Not Closure
              </Link>{' '}
              already names the continuing named ownership of results, exceptions, and learning after
              the plant move, and refuses to treat that duty as the verified close.{' '}
              <Link
                href="/insights/authorization-is-not-accountability"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorization Is Not Accountability
              </Link>{' '}
              already refuses to treat who may start as that duty.{' '}
              <Link
                href="/insights/closure-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Closure Is Not Cash
              </Link>{' '}
              already refuses to treat a closed work order, ticket, or shift as cash collected. This
              essay does not rewrite any of the three. In those essays, ownership names who remains
              responsible. Here, ownership is the residual economic claim. Control is direction
              power. A residual claim is not cash collected. Direction power is not a closed work
              order. A title is neither. This essay does not rewrite Closure Is Not Cash. This essay
              does not rewrite Accountability Is Not Closure. This essay does not rewrite
              Authorization Is Not Accountability.
            </p>

            <p>
              <Link
                href="/insights/coverage-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Coverage Is Not Control
              </Link>{' '}
              keeps a different use of the word. Coverage, there, is the watched set: sensors, CMMS
              rows, dashboards, and patrol routes. Control, there, is permission to order work,
              isolate equipment, or change the plant — control authority over the watched set, not a
              residual claim and not this essay definition of direction power. A coverage gap is not
              direction power. This essay does not rewrite Coverage Is Not Control.{' '}
              <Link
                href="/insights/dashboard-is-not-control"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Dashboard Is Not Control
              </Link>{' '}
              keeps another use. A dashboard, there, reads a stored or streamed value and draws it.
              Control, there, is a write that changes equipment state or authorizes maintenance. A
              tile is not that write, and a tile is not direction power in this essay. This essay
              does not rewrite Dashboard Is Not Control. Direction power is who can steer capital
              allocation, operating priorities, or binding plant moves in practice. It is not a
              watched set, and it is not a screen.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The residual claimant is not the person who steers
            </h2>

            <p>
              A residual claimant can hold the upside and the downside on the balance sheet and still
              be unable to set or change direction of the asset or plant. Equity, an IP claim, or a
              residual right to cash flow can sit with a party who does not steer capital allocation,
              operating priorities, or binding plant moves in practice. That claim is ownership. It
              is not control. A person who can steer those moves in practice can hold no residual
              economic claim. That steering is control. It is not ownership. A title on the org
              chart, with or without scope, is neither the residual claim nor the direction power. A
              firm with ownership can still lack control. A firm with control can still lack
              ownership. An ownership note alone proves neither. A control note alone proves neither.
              An ownership note is not a green. A control note is not a green. This essay does not
              invent a customer, a price, or a return. It states no savings figure, states no price,
              and states no OEM limit.
            </p>

            <p>
              Sync keeps the split as a read. Sync may surface an ownership/residual-claim note or a
              control/direction-power note beside Evidence, Verification, and the closed outcome.
              Surfacing is still a read. Showing the note does not write a CMMS work order. Showing
              the note does not clear equipment to run. Showing the note does not book revenue.
              Showing the note does not recognize revenue. Showing the note does not measure ARR.
              Showing the note does not measure ARR for the customer. Showing the note does not
              measure cash. Showing the note does not measure cash for the customer. Showing the note
              does not measure runway. Showing the note does not measure runway for the customer.
              Showing the note does not measure survival. Showing the note does not measure survival
              for the customer. Showing the note does not measure solvency. Showing the note does not
              measure solvency for the customer. Showing the note does not measure liquidity. Showing
              the note does not measure liquidity for the customer. Showing the note does not measure
              flexibility. Showing the note does not measure flexibility for the customer. Showing
              the note does not measure optionality. Showing the note does not measure optionality
              for the customer. Showing the note does not measure strategy. Showing the note does not
              measure strategy for the customer. Showing the note does not measure execution. Showing
              the note does not measure execution for the customer. Showing the note does not measure
              results. Showing the note does not measure results for the customer. Showing the note
              does not measure learning. Showing the note does not measure learning for the customer.
              Showing the note does not measure judgment. Showing the note does not measure judgment
              for the customer. Showing the note does not measure authority. Showing the note does
              not measure authority for the customer. Showing the note does not measure
              accountability. Showing the note does not measure accountability for the customer.
              Showing the note does not measure ownership. Showing the note does not measure
              ownership for the customer. Showing the note does not measure control. Showing the note
              does not measure control for the customer. Showing the note does not collect cash.
              Showing the note does not attribute a change in cash, risk, or capacity. Showing the
              note does not execute plant work. A named human decides. A named human remains
              accountable after the plant move. Direct plant execute stays off. CMMS write-back is
              not a live product path. Billing write-back is not a live product path. Self-guided
              onboarding is not claimed as a live product path.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              What a control note is allowed to be
            </h2>

            <p>
              Evidence may cite an ownership/residual-claim note when the source of that note is
              named, and when the citation says the residual economic claim on an asset, equity, IP,
              or cash flow — residual rights and upside/downside on the balance sheet, not the power
              to direct the asset. Evidence may cite a control/direction-power note when the source
              of that note is named, and when the citation says who can steer capital allocation,
              operating priorities, or binding plant moves in practice — direction power, not a
              residual claim, and not the formal decision-rights charter alone. If the evidence
              records a residual claim and does not record direction power, the case may store the
              note as ownership and must not store the note as control. If the evidence records
              direction power and does not record a residual claim, the case may store the note as
              control and must not store the note as ownership. A residual claim without direction
              power is not control. Direction power without a residual claim is not ownership. A
              title is neither. The label does not fill the gap, and it does not close it. The
              ownership note does not paint a green. The control note does not paint a green.
            </p>

            <p>
              Evidence from the plant beats the ownership note when the note is being used as
              control. Evidence from the plant beats the control note when the note is being used as
              ownership. Recommend is not authorize. Sync refuses false precision. Sync refuses when
              evidence is insufficient. Sync must not auto-close, auto-authorize, or treat ownership
              as control as Learning credit. A practice record that says ownership is control is not
              a customer plant release, and it is not shown control. Simulated or seeded telemetry
              and assets are practice records. A live connector tag pull is not a claim of this
              edition. This essay does not invent a customer. Sync does not book revenue. Sync does
              not recognize revenue. Sync does not measure ARR. Sync does not measure ARR for the
              customer. Sync does not measure cash. Sync does not measure cash for the customer. Sync
              does not measure runway. Sync does not measure runway for the customer. Sync does not
              measure survival. Sync does not measure survival for the customer. Sync does not
              measure solvency. Sync does not measure solvency for the customer. Sync does not
              measure liquidity. Sync does not measure liquidity for the customer. Sync does not
              measure flexibility. Sync does not measure flexibility for the customer. Sync does not
              measure optionality. Sync does not measure optionality for the customer. Sync does not
              measure strategy. Sync does not measure strategy for the customer. Sync does not
              measure execution. Sync does not measure execution for the customer. Sync does not
              measure results. Sync does not measure results for the customer. Sync does not measure
              learning. Sync does not measure learning for the customer. Sync does not measure
              judgment. Sync does not measure judgment for the customer. Sync does not measure
              authority. Sync does not measure authority for the customer. Sync does not measure
              accountability. Sync does not measure accountability for the customer. Sync does not
              measure ownership. Sync does not measure ownership for the customer. Sync does not
              measure control. Sync does not measure control for the customer. Sync does not collect
              cash. Sync does not attribute a change in cash, risk, or capacity. Sync does not
              execute plant work. Sync executes plant work is not a claim of this edition.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              The chain this refusal sits on
            </h2>

            <p>
              Ownership is the residual economic claim on an asset, equity, IP, or cash flow — residual rights and upside/downside on the balance sheet, not the power to direct the asset. Control is the practical power to set or change direction of the asset or plant — who can steer capital allocation, operating priorities, or binding plant moves in practice — direction power, not a residual claim. A residual claim without direction power is not control. Direction power without a residual claim is not ownership. A title is neither. Control here is practical steering power over the asset/plant, not the formal decision-rights charter alone.
            </p>
            <p>
              Accountability is owning the outcome of a bound decision — who answers for results, misses, and remediation under a named decision window. That is outcome ownership after authority was exercised. Ownership, in that essay, is residual rights and upside/downside on the balance sheet, not the duty to answer for a named plant outcome. Accountability is owning the outcome of that bound decision — who answers for results, misses, and remediation. A charter without an outcome owner is not accountability. A firm with accountability can still lack authority. An accountability note alone proves neither. Sync may surface an accountability/outcome-owner note or an ownership/residual-claim note beside Evidence, Verification, and the closed outcome. Sync may surface an authority/decision-rights note or an accountability/outcome-owner note beside Evidence, Verification, and the closed outcome.
            </p>
            <p>
              Authority is the formal, named right to bind the firm within a defined scope and window — decision rights on the org chart or charter. Authority is the formal, named right to bind the firm to plant work, capital, or risk within a defined scope and window — decision rights on the org chart or charter, not the quality of the call, not a title without scope, not a recommendation, and not judgment sitting with someone who cannot bind. Judgment is the situated call under incomplete information that commits plant work, capital, or risk now under a named decision owner and window — accountable choice with consequence, not an adopted rule sitting unused, a recommendation tile, a scored suggestion, or a learning note alone. A firm with judgment can still lack authority. A judgment note alone proves neither. A judgment note is not a green. Sync may surface a judgment/decision support note or an authority/decision-rights note beside Evidence, Verification, and the closed outcome. A practice record that says authority is accountability is not a customer plant release. This essay does not collapse authority into judgment. This essay does not collapse accountability into authority.
            </p>
            <p>
              Learning is an updated decision rule, model, or operating practice the firm adopts because a verified result changed what it will do next under a named decision window — tempered belief that changes future allocation, not a dashboard tile, a learning_events row, a retrospective note, or a results number sitting unread. Results is the attributed, measured change in plant capacity, risk, cost, or production the firm can show followed from completed work under a named measurement window — consequence under the honesty and verification boundary, not the WO close, shipped-change ticket, or single verified plant check alone. Execution is work actually completed inside the named decision window with evidence of done outcomes (closed work, shipped change, verified plant result) — realized performance against the committed path, not the strategy note, roadmap slide, or allocated budget envelope alone. Strategy is a named choice among alternatives with allocated resources, a named decision window, accountable owner, and success criteria the firm is actually committing to execute — a committed path and resource allocation, not proof the work was completed inside that window.
            </p>
            <p>
              Optionality is whether unused rights, capacity lines, budget envelopes, or contractual choices exist on paper (or in a plan) that could be exercised in some future state — theoretical choice inventory, not proof those choices are executable inside a named decision window (lead times, skills, covenants, plant continuity, and cash may still block exercise). Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix, or plant priorities inside a named decision window without breaking obligations, covenants, or continuity — the ability to choose and change course, not merely to pay what is already due. Liquidity is whether cash and near-cash can meet obligations as they come due in the near term (payroll, vendors, debt service windows) without forced asset sales or covenant breaches. Survival is whether the business can keep meeting obligations (payroll, vendors, debt service, plant continuity) through the next decision horizon. Runway is how long operations can continue at the current net burn before cash is exhausted: cash divided by burn rate, with explicit assumptions. Cash is money received (collected) that can be spent now. ARR is the annualized value of recurring contracted subscription revenue that renews. Contribution margin is not bottom-line profit. A contribution margin figure is not direction power. Cash is not margin. This essay does not rewrite Action Is Not Execution. This essay does not rewrite Proxy Is Not Outcome. This essay does not rewrite Alert Is Not Decision. This essay does not rewrite Authorization Is Not Accountability. This essay does not rewrite Recommend Is Not Authorize. Self-guided onboarding is not claimed as a live product path. Sync does not measure ARR for the customer.
            </p>

            <p>
              The chain below is the series this refusal sits on. Learning is not judgment. Judgment
              is not authority. Authority is not accountability. Accountability is not ownership.
              Ownership is not control. Each word can be true in its own place. None of the earlier
              words fills the last one. What follows keeps that chain in the words the earlier essays
              fixed. It does not move their boundaries, and it does not treat a residual claim as
              direction power.
            </p>

            <p className="text-xl font-semibold text-white">
              Accountability is not ownership. Ownership is not control. Accountability is owning the
              outcome of a bound decision — who answers for results, misses, and remediation under a
              named decision window. That is outcome ownership after authority was exercised.
              Ownership is the residual economic claim on an asset, equity, IP, or cash flow —
              residual rights and upside/downside on the balance sheet, not the duty to answer for a
              named plant outcome, and not the power to direct the asset. A firm with accountability
              can still lack ownership. A firm with ownership can still lack accountability. An
              accountability note alone proves neither. An accountability note is not a green. An
              ownership note alone proves neither. An ownership note is not a green. Sync may surface
              an accountability/outcome-owner note or an ownership/residual-claim note beside
              Evidence, Verification, and the closed outcome. Sync does not measure accountability.
              Sync does not measure accountability for the customer. Sync does not measure ownership.
              Sync does not measure ownership for the customer. This essay does not collapse
              ownership into accountability.
            </p>

            <p className="text-xl font-semibold text-white">
              Authority is not accountability. Accountability is not ownership. Ownership is not
              control. Authority is the formal, named right to bind the firm within a defined scope
              and window — decision rights on the org chart or charter. Authority is the formal,
              named right to bind the firm to plant work, capital, or risk within a defined scope and
              window — decision rights on the org chart or charter, not the quality of the call, not
              a title without scope, not a recommendation, and not judgment sitting with someone who
              cannot bind. A firm with authority can still lack accountability. A firm with
              accountability can still lack authority. A charter without an outcome owner is not
              accountability. Sitting with the result without the right to bind is not authority. A
              title is neither. Sync may surface an authority/decision-rights note or an
              accountability/outcome-owner note beside Evidence, Verification, and the closed
              outcome. Surfacing is still a read. A practice record that says authority is
              accountability is not a customer plant release. This essay does not collapse
              accountability into authority. This essay does not treat authority as accountability.
              Control is not that charter.
            </p>

            <p className="text-xl font-semibold text-white">
              Judgment is not authority. Authority is not accountability. Accountability is not
              ownership. Ownership is not control. Judgment is the situated call under incomplete
              information that commits plant work, capital, or risk now under a named decision owner
              and window — accountable choice with consequence, not an adopted rule sitting unused, a
              recommendation tile, a scored suggestion, or a learning note alone. A firm with
              judgment can still lack authority. A firm with authority can still lack judgment. A
              judgment note alone proves neither. An authority note alone proves neither. A judgment
              note is not a green. An authority note is not a green. Sync may surface a
              judgment/decision support note or an authority/decision-rights note beside Evidence,
              Verification, and the closed outcome. Sync may surface a judgment/decision support note
              or an authority/decision-rights note beside Evidence/Verification/closed outcome. A
              practice record that says judgment is authority is not shown authority. This essay does
              not collapse authority into judgment. Sync must not auto-close, auto-authorize, or
              treat judgment as authority as Learning credit.
            </p>

            <p>
              The stack is the same kind of refusal this series keeps. Closure is not cash. Cash is
              not margin. Margin is not profit. Profit is not value. Value is not outcome. Outcome
              is not impact. Impact is not revenue. Revenue is not ARR. ARR is not cash. Cash is not
              runway. Runway is not survival. Survival is not solvency. Solvency is not liquidity.
              Liquidity is not flexibility. Flexibility is not optionality. Optionality is not
              strategy. Strategy is not execution. Execution is not results. Results is not learning.
              Learning is not judgment. Judgment is not authority. Authority is not accountability.
              Accountability is not ownership. Ownership is not control. Each word can be true in its
              own place. None of the earlier words fills the last one. A closed work order, cash
              collected, a unit remainder, a profit figure, a measured outcome, an attributed change
              in cash, risk, or capacity, a recognized sale, an annualized contract, a spendable
              balance, a duration at the current net burn, obligation continuity through the next
              decision horizon, assets and claims that can cover liabilities over a structural
              horizon, cash and near-cash that meet the near-term windows, a reallocation inside a
              named decision window, unused rights on paper, a committed path, work completed inside
              the named decision window, an attributed measured change under a named measurement
              window, an updated decision rule under a named decision window, a situated call under a
              named decision owner and window, a formal right to bind, an outcome owner, and a
              residual claim are not, by those records, direction power.
            </p>

            <p>
              Learning is not judgment. Learning is an updated decision rule, model, or operating
              practice the firm adopts because a verified result changed what it will do next under a
              named decision window — tempered belief that changes future allocation, not a dashboard
              tile, a learning_events row, a retrospective note, or a results number sitting unread.
              Results is not learning. Results is the attributed, measured change in plant capacity,
              risk, cost, or production the firm can show followed from completed work under a named
              measurement window — consequence under the honesty and verification boundary, not the
              WO close, shipped-change ticket, or single verified plant check alone. Execution is not
              results. Execution is work actually completed inside the named decision window with
              evidence of done outcomes (closed work, shipped change, verified plant result) —
              realized performance against the committed path, not the strategy note, roadmap slide,
              or allocated budget envelope alone. Strategy is not execution. Strategy is a named
              choice among alternatives with allocated resources, a named decision window,
              accountable owner, and success criteria the firm is actually committing to execute — a
              committed path and resource allocation, not proof the work was completed inside that
              window. Optionality is not strategy. Optionality is whether unused rights, capacity
              lines, budget envelopes, or contractual choices exist on paper (or in a plan) that
              could be exercised in some future state — theoretical choice inventory, not proof those
              choices are executable inside a named decision window (lead times, skills, covenants,
              plant continuity, and cash may still block exercise). Strategy, in that earlier essay,
              is a committed path, not a menu of unused rights. Flexibility is not optionality.
              Flexibility is whether the firm can reallocate capital, capacity, staffing, vendor mix,
              or plant priorities inside a named decision window without breaking obligations,
              covenants, or continuity — the ability to choose and change course, not merely to pay
              what is already due. Liquidity is not flexibility. Liquidity is whether cash and
              near-cash can meet obligations as they come due in the near term (payroll, vendors,
              debt service windows) without forced asset sales or covenant breaches. Solvency is not
              liquidity. Solvency is whether assets and claims structure can cover liabilities and
              pay debts as they come due over a structural horizon — balance-sheet and claim quality,
              not near-term cash timing alone. Survival is not solvency. Survival is whether the
              business can keep meeting obligations (payroll, vendors, debt service, plant
              continuity) through the next decision horizon. Runway is not survival. Runway is how
              long operations can continue at the current net burn before cash is exhausted: cash
              divided by burn rate, with explicit assumptions. Cash is not runway. Cash is money
              received (collected) that can be spent now. ARR is not cash. ARR is the annualized
              value of recurring contracted subscription revenue that renews. Revenue is not ARR.
              Impact is not revenue. Outcome is not impact. Value is not outcome. Profit is not
              value. Margin is not profit. Contribution margin is not bottom-line profit. Cash is not
              margin. Closure is not cash. A named decision window, a named measurement window, and a
              named decision owner stay the objects the earlier essays named. None of them is
              direction power. None of them is a residual claim.
            </p>

            <p>
              This essay does not collapse control into ownership, authority, accountability,
              judgment, learning, results, execution, strategy, optionality, flexibility, liquidity,
              solvency, survival, runway, cash, ARR, margin, or profit.{' '}
              <Link
                href="/insights/judgment-is-not-authority"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Judgment Is Not Authority
              </Link>{' '}
              already refuses to treat the situated call as the formal right to bind.{' '}
              <Link
                href="/insights/learning-is-not-judgment"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Is Not Judgment
              </Link>{' '}
              already refuses to treat an adopted rule as that call.{' '}
              <Link
                href="/insights/results-is-not-learning"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Results Is Not Learning
              </Link>
              ,{' '}
              <Link
                href="/insights/execution-is-not-results"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Execution Is Not Results
              </Link>
              ,{' '}
              <Link
                href="/insights/strategy-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Strategy Is Not Execution
              </Link>
              ,{' '}
              <Link
                href="/insights/optionality-is-not-strategy"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Optionality Is Not Strategy
              </Link>
              ,{' '}
              <Link
                href="/insights/flexibility-is-not-optionality"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Flexibility Is Not Optionality
              </Link>
              ,{' '}
              <Link
                href="/insights/liquidity-is-not-flexibility"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Liquidity Is Not Flexibility
              </Link>
              ,{' '}
              <Link
                href="/insights/solvency-is-not-liquidity"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Solvency Is Not Liquidity
              </Link>
              ,{' '}
              <Link
                href="/insights/survival-is-not-solvency"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Survival Is Not Solvency
              </Link>
              ,{' '}
              <Link
                href="/insights/runway-is-not-survival"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Runway Is Not Survival
              </Link>
              ,{' '}
              <Link
                href="/insights/cash-is-not-runway"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Runway
              </Link>
              ,{' '}
              <Link
                href="/insights/arr-is-not-cash"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                ARR Is Not Cash
              </Link>
              ,{' '}
              <Link
                href="/insights/revenue-is-not-arr"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Revenue Is Not ARR
              </Link>
              ,{' '}
              <Link
                href="/insights/impact-is-not-revenue"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Impact Is Not Revenue
              </Link>
              ,{' '}
              <Link
                href="/insights/outcome-is-not-impact"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Outcome Is Not Impact
              </Link>
              ,{' '}
              <Link
                href="/insights/value-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Value Is Not Outcome
              </Link>
              ,{' '}
              <Link
                href="/insights/profit-is-not-value"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Profit Is Not Value
              </Link>
              ,{' '}
              <Link
                href="/insights/margin-is-not-profit"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Margin Is Not Profit
              </Link>
              , and{' '}
              <Link
                href="/insights/cash-is-not-margin"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cash Is Not Margin
              </Link>{' '}
              keep their own refusals. This essay does not rewrite Results Is Not Learning. This
              essay does not rewrite Learning Is Not Judgment. This essay does not rewrite Outcome Is
              Not Impact. This essay does not rewrite Value Is Not Outcome.
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
              . Accountability Is Not Ownership is why accountability cannot be read as ownership.
              This essay is why ownership cannot be read as control. The{' '}
              <Link
                href={fieldManualPath('evidence')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Evidence
              </Link>{' '}
              chapter may hold an ownership/residual-claim note, a control/direction-power note, or
              an evidence note that someone else stated, when the source of that note is named. The{' '}
              <Link
                href={fieldManualPath('verification')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verification
              </Link>{' '}
              chapter records named observation against the criteria the decision named. The{' '}
              <Link
                href={fieldManualPath('human-decision')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human decision
              </Link>{' '}
              chapter records who accepted the consequence. The{' '}
              <Link
                href={fieldManualPath('action')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action
              </Link>{' '}
              chapter records intent. The{' '}
              <Link
                href={fieldManualPath('learning')}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning
              </Link>{' '}
              chapter keeps the closed case: achieved, not_achieved, or inconclusive, with measured
              notes. That chapter name is the step in the order. It is not, by the step name, this
              essay definition of ownership, and it is not this essay definition of control. None of
              those steps shows control. None of them treats ownership as control. None of them
              measures ownership for the customer. None of them measures control for the customer.
              None of them attributes cash, risk, or capacity. None of them steers the asset for the
              customer. Direct plant execute stays off.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Direction power is not the charter and not the residual claim
            </h2>

            <p>
              Control is not a property of the ownership note. Control is the practical power to set
              or change direction of the asset or plant — who can steer capital allocation, operating
              priorities, or binding plant moves in practice. It is not residual rights and
              upside/downside on the balance sheet. It is not the formal, named right to bind the
              firm within a defined scope and window. A charter line can name a right and still leave
              direction power unshown. A residual claim can name upside and downside and still leave
              direction power unshown. Naming the residual claimant does not name who steers. Naming
              who steers does not confer the residual claim. Naming the charter does not confer
              either.
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
              notes. That check is the measured result of the case. It is not, by itself, ownership
              in the sense this essay names, and it is not, by itself, control. This essay does not
              rewrite Verification Is Not Optional.
            </p>

            <p>
              <Link
                href="/insights/learning-requires-a-verified-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Learning Requires a Verified Outcome
              </Link>{' '}
              keeps what a later case is allowed to inherit. Learning, in that essay, inherits
              achieved, not_achieved, or inconclusive, with measured notes. It does not inherit an
              ownership note in place of that outcome, and it does not inherit a control note in
              place of that outcome. This essay does not rewrite Learning Requires a Verified
              Outcome. Sync must not auto-close, auto-authorize, or treat ownership as control as
              Learning credit.
            </p>

            <p>
              <Link
                href="/insights/verified-is-not-assured"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Assured
              </Link>{' '}
              keeps a verified stamp off standing confidence. A verified work package, inspection, or
              AI recommendation closes a claim about the past. Assurance is the standing claim that
              comes after. Neither a residual claim nor direction power is produced by storing
              achieved. This essay does not rewrite Verified Is Not Assured.
            </p>

            <p>
              <Link
                href="/insights/alert-is-not-decision"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Alert Is Not Decision
              </Link>{' '}
              is a different essay, a different title, and a different refusal. An alert can surface
              that something crossed a rule. Seeing, acknowledging, or silencing that signal is not a
              Decision Case and not direction power. This essay does not rewrite Alert Is Not
              Decision.
            </p>

            <p>
              <Link
                href="/insights/action-is-not-execution"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Action Is Not Execution
              </Link>{' '}
              is a different essay, a different title, and a different refusal. This essay does not
              rewrite Action Is Not Execution. That essay keeps the write off the case. The Action
              chapter records intent. ACTION remains a locked disposition until authorized execution
              systems write the work order or isolate the equipment. Direction power is not that
              write, and Sync does not perform that write. Direct plant execute stays off.
            </p>

            <p>
              <Link
                href="/insights/correlation-is-not-causation"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Correlation Is Not Causation
              </Link>{' '}
              is the same refusal one step earlier in the evidence. Two records that move together
              are not a cause. A control note that moved in the same period as an ownership note is
              not, by that movement, proof that a residual claim is direction power. The coincidence
              can inform a recommendation to investigate. It is not control.
            </p>

            <p>
              <Link
                href="/insights/proxy-is-not-outcome"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Proxy Is Not Outcome
              </Link>{' '}
              keeps a KPI, a green tile, or a closed count off the verified operational outcome. A
              title used as a proxy for direction power is still a title. This essay does not rewrite
              Proxy Is Not Outcome.{' '}
              <Link
                href="/insights/green-is-not-go"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Green Is Not Go
              </Link>{' '}
              keeps a green tile off permission to run. An ownership note is not a green. A control
              note is not a green.{' '}
              <Link
                href="/insights/complete-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Complete Is Not Verified
              </Link>{' '}
              and{' '}
              <Link
                href="/insights/cleared-is-not-complete"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Cleared Is Not Complete
              </Link>{' '}
              keep completion labels and clearance stamps off the verified outcome and off direction
              power.{' '}
              <Link
                href="/insights/recommend-is-not-authorize"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Recommend Is Not Authorize
              </Link>{' '}
              keeps a proposal off the decision. Recommend is not authorize. This essay does not
              rewrite Recommend Is Not Authorize.{' '}
              <Link
                href="/insights/honesty-boundary-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty Boundary Is Not Optional
              </Link>{' '}
              is why the limit has to be stated.{' '}
              <Link
                href="/insights/human-decision-is-not-optional"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Human Decision Is Not Optional
              </Link>{' '}
              keeps a named human on the decision. A named human decides. A named human remains
              accountable after the plant move.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">
              Surfacing an ownership note or a control note is still a read
            </h2>

            <p>
              Sync may surface an ownership/residual-claim note or a control/direction-power note
              beside Evidence, Verification, and the closed outcome. Surfacing is still a read. The
              screen can show achieved, not_achieved, or inconclusive next to the criteria the case
              holds, next to an ownership/residual-claim note someone recorded elsewhere, and next to
              a control/direction-power note that direction power was stated. Showing the note does
              not write a CMMS work order. Showing the note does not clear equipment to run. Showing
              the note does not treat the case as plant execute. Showing the note does not book
              revenue. Showing the note does not recognize revenue. Showing the note does not measure
              ownership for the customer. Showing the note does not measure control for the customer.
              A read of an ownership note is still a read. A residual claim, without direction power,
              leaves control unshown. Direct plant execute stays off.
            </p>

            <p>
              Evidence from the plant beats the ownership note when the note is being used as
              control. If the evidence on the case does not support the named observation, the case
              refuses. If the evidence records an ownership note and does not record who can steer
              capital allocation, operating priorities, or binding plant moves in practice, the case
              may store the note as ownership and must not store the note as control. If the evidence
              records a formal right on the org chart or charter and does not record that practical
              steering, the case may cite the charter as authority and must not store the charter as
              control. The label does not fill the gap, and it does not close it.
            </p>

            <p>
              Stage-1 evidence is the record held on the case. A live connector that pulls historian
              or control-system tags sits outside this edition. A live connector tag pull is not a
              claim of this edition. Simulated or seeded telemetry and assets are practice records. A
              practice record that says ownership is control is not a customer plant release, and it
              is not shown control.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What the Decision Case may store</h2>

            <p>
              Evidence may cite an ownership/residual-claim note when the source of that note is
              named, and when the citation says it is the residual economic claim on an asset,
              equity, IP, or cash flow — residual rights and upside/downside on the balance sheet,
              not the power to direct the asset — rather than a measurement Sync performed, and
              rather than control. Evidence may cite a control/direction-power note when the source
              is named and the citation says it is the practical power to set or change direction of
              the asset or plant — who can steer capital allocation, operating priorities, or binding
              plant moves in practice — direction power, not a residual claim, and not the formal
              decision-rights charter alone. Those citations are records of statements someone else
              made. They are not records that Sync measured ownership for the customer. They are not
              records that Sync measured control for the customer. They are not records that the
              ownership note is control. A recommendation may say investigate because the residual
              claim is shown and direction power is unshown, or because direction power is shown and
              the residual claim is unshown. The proposal does not show control. Recommend is not
              authorize.
            </p>

            <p>
              If the named person approves work, the case may store the intent. The intent is not
              control, and named intent is not ownership in the sense this essay names. An ownership
              label does not perform the write and does not turn the residual claim into direction
              power. A control label does not perform the write and does not turn direction power
              into a residual claim. Authorized execution systems write the work order or the
              isolation. That write is the object Action Is Not Execution keeps off the case. Sync
              does not write the work order. Sync does not mark an asset closed. Sync does not write
              that state back. CMMS write-back is not a live product path. Billing write-back is not
              a live product path. Direct plant execute stays off.
            </p>

            <p>
              Verification asks whether the authorized action did what the decision named. The check
              is named observation against named criteria, stored as achieved, not_achieved, or
              inconclusive, with measured notes. That record is the outcome the case is allowed to
              close when the criteria named an operational result. It does not, by itself, turn the
              outcome into ownership, and it does not turn ownership into control. A named human
              decides. A named human remains accountable after the plant move. Control stays unshown
              until direction power is a separate record. Ownership stays the residual economic claim
              even when someone calls the note control. This essay does not supply either record as
              the other. Sync does not attribute a change in cash, risk, or capacity. Sync does not
              book revenue. Sync does not recognize revenue. Sync does not measure ARR. Sync does not
              measure cash. Sync does not measure runway. Sync does not measure survival. Sync does
              not measure solvency. Sync does not measure liquidity. Sync does not measure
              flexibility. Sync does not measure optionality. Sync does not measure strategy. Sync
              does not measure execution. Sync does not measure results. Sync does not measure
              learning. Sync does not measure judgment. Sync does not measure authority. Sync does
              not measure accountability. Sync does not measure ownership. Sync does not measure
              control. Sync does not collect cash.
            </p>

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">Where the public statement lives</h2>

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
              directly. Evidence may hold the ownership/residual-claim note, the
              control/direction-power note, or the measured result that was shown. Human decision may
              hold who accepted the consequence. Action may hold the intent that decision routed.
              Verification may hold the named observation. Learning may hold achieved, not_achieved,
              or inconclusive, with measured notes — the measured outcome of the case, not this essay
              definition of ownership, and not ownership used as control. None of those steps is
              ownership used as control. The{' '}
              <Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honesty boundaries
              </Link>{' '}
              keep this edition from treating an ownership note as direction power. Later editions
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

            <h2 className="text-3xl font-bold text-white mt-12 mb-6">What this article is not claiming</h2>

            <p>
              This is an essay about the Decision Case order, not a customer case study. It names no
              plant, states no savings figure, states no price, and claims no prevented failure. It
              states no OEM limit and no operating threshold. It states no cash amount, no near-cash
              amount, no asset value, no liability total, no ratio, no burn rate, no runway length,
              no survival length, no solvency length, no liquidity length, no flexibility length, no
              optionality length, no strategy length, no execution length, no results length, no
              learning length, no judgment length, no authority length, no accountability length, no
              ownership length, and no control length. It does not claim that ownership is control,
              does not claim that accountability is ownership, and does not claim that authority is
              accountability. It does not write a CMMS work order, clear equipment to run, book
              revenue, recognize revenue, measure ARR, measure ARR for the customer, measure cash,
              measure cash for the customer, measure runway, measure runway for the customer, measure
              survival, measure survival for the customer, measure solvency, measure solvency for the
              customer, measure liquidity, measure liquidity for the customer, measure flexibility,
              measure flexibility for the customer, measure optionality, measure optionality for the
              customer, measure strategy, measure strategy for the customer, measure execution,
              measure execution for the customer, measure results, measure results for the customer,
              measure learning, measure learning for the customer, measure judgment, measure judgment
              for the customer, measure authority, measure authority for the customer, measure
              accountability, measure accountability for the customer, measure ownership, measure
              ownership for the customer, measure control, measure control for the customer, collect
              cash, or attribute a change in cash, risk, or capacity. It does not claim that Sync
              executes plant work. It does not claim CMMS write-back as a shipped product. It does
              not claim billing write-back as a shipped product. It does not invent a customer, a
              price, or a return. It does not invent a case number. It does not treat an ownership
              note, a control note, an authority note, a title without scope, or a recommendation as
              the question. It does not treat a residual claim as a green. It does not treat a
              control note as a green. Accountability is not ownership is a different refusal.
              Authority is not accountability is a different refusal. Coverage is not control is a
              different refusal. Dashboard is not control is a different refusal. Closure is not cash
              is a different refusal. Learning is not judgment is a different refusal. Results is not
              learning is a different refusal. Action is not execution is a different refusal.
              Recommend is not authorize is a different refusal. Sync does not measure control for
              the customer. A named human decides. This essay does not rewrite Accountability Is Not
              Ownership. This essay does not rewrite Authority Is Not Accountability. This essay does
              not rewrite Coverage Is Not Control. This essay does not rewrite Dashboard Is Not
              Control. This essay does not rewrite Closure Is Not Cash. This essay does not rewrite
              Action Is Not Execution. This essay does not rewrite Learning Is Not Judgment. This
              essay does not rewrite Accountability Is Not Closure. This essay does not rewrite
              Recommend Is Not Authorize. This essay does not rewrite Outcome Is Not Impact. This
              essay does not rewrite Value Is Not Outcome. This essay does not rewrite Proxy Is Not
              Outcome. This essay does not rewrite Learning Requires a Verified Outcome. This essay
              does not rewrite Verification Is Not Optional. This essay does not rewrite Verified Is
              Not Assured. This essay does not rewrite Results Is Not Learning. This essay does not
              rewrite Alert Is Not Decision. This essay does not rewrite Authorization Is Not
              Accountability.
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
              describes that journey. Walking those steps is not a claim that ownership is control.
              A{' '}
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
              is a governed proof around one operating decision. The verification chapter records the
              measured result. The ownership note does not record control.
            </p>

            <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
              <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
              <p className="text-gray-400 mb-6">
                Field Manual {fieldManual.version} states the order and the boundaries. Ownership is
                the residual economic claim on an asset, equity, IP, or cash flow — residual rights
                and upside/downside on the balance sheet, not the power to direct the asset. Control
                is the practical power to set or change direction of the asset or plant — who can
                steer capital allocation, operating priorities, or binding plant moves in practice —
                direction power, not a residual claim. A firm with ownership can still lack control.
                A firm with control can still lack ownership. An ownership note alone proves neither.
                A control note alone proves neither. The Reliability Engineer workspace is where a
                signed-in Decision Case is completed. A Reliability Assessment is the bounded review
                when the question is whether the records can support a conclusion. None of those is a
                claim that Sync executes plant work, books revenue, recognizes revenue, measures ARR,
                measures ARR for the customer, measures cash, measures cash for the customer,
                measures runway, measures runway for the customer, measures survival, measures
                survival for the customer, measures solvency, measures solvency for the customer,
                measures liquidity, measures liquidity for the customer, measures flexibility,
                measures flexibility for the customer, measures optionality, measures optionality for
                the customer, measures strategy, measures strategy for the customer, measures
                execution, measures execution for the customer, measures results, measures results
                for the customer, measures learning, measures learning for the customer, measures
                judgment, measures judgment for the customer, measures authority, measures authority
                for the customer, measures accountability, measures accountability for the customer,
                measures ownership, measures ownership for the customer, measures control, measures
                control for the customer, collects cash, attributes cash, risk, or capacity, declares
                a return, that CMMS write-back is live, that billing write-back is live, or that
                self-guided onboarding is a live product path.
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
          <InsightNextSteps slug="ownership-is-not-control" />
        </motion.article>
      </div>
    </main>
  );
}
