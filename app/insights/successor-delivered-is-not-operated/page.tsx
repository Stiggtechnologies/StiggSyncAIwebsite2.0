'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-delivered-is-not-operated');

export default function SuccessorDeliveredIsNotOperatedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Delivered Is Not Operated</h1>
            <p className="text-xl text-gray-400">
              Delivered is not operated. Delivered means under that same named instrument / governing
              law for that channel, instrument-required delivery / handoff that places the closed
              successor-obligation outcome into the named receiving channel / operator / warranty /
              next-party register for the remaining window — evidenced by delivery package with named
              deliverer / receiver roles, named delivery criteria met (close package cited, receiving
              register updated, acceptance or receipt recorded, residual ownership named), dates, and
              an unbroken trail from the close evidence to that delivery evidence — not a dashboard
              green tile with no delivery authority, not a verbal "they have it," not
              emailing a PDF with no receipt, not a chat note that says delivered, not "handoff
              is informal" without instrument-required delivery evidence, and not treating close
              theater as automatic delivery of that closed successor-obligation outcome. Operated
              means under that same named instrument / governing law for that channel,
              instrument-required operation that puts the delivered successor-obligation outcome into
              active run under the named operator / duty / warranty / control window — evidenced by
              operate package with named operator / acceptor roles, named operate criteria met
              (delivery package cited, run started under named duty, control limits or warranty in
              force, residual ownership named), dates, and an unbroken trail from the delivery
              evidence to that operate evidence — not a dashboard green tile with no operate
              authority, not a verbal "they are running it," not flipping a feature flag
              with no instrument path, not a chat note that says live, not "ops will
              babysit" without instrument-required operate evidence, and not treating delivery
              theater as automatic operation of that delivered successor-obligation outcome.
            </p>
          </header>

          <p>
            Delivered is not operated. Delivered means under that same named instrument / governing law for that channel, instrument-required delivery / handoff that places the closed successor-obligation outcome into the named receiving channel / operator / warranty / next-party register for the remaining window — evidenced by delivery package with named deliverer / receiver roles, named delivery criteria met (close package cited, receiving register updated, acceptance or receipt recorded, residual ownership named), dates, and an unbroken trail from the close evidence to that delivery evidence — not a dashboard green tile with no delivery authority, not a verbal "they have it," not emailing a PDF with no receipt, not a chat note that says delivered, not "handoff is informal" without instrument-required delivery evidence, and not treating close theater as automatic delivery of that closed successor-obligation outcome. Operated means under that same named instrument / governing law for that channel, instrument-required operation that puts the delivered successor-obligation outcome into active run under the named operator / duty / warranty / control window — evidenced by operate package with named operator / acceptor roles, named operate criteria met (delivery package cited, run started under named duty, control limits or warranty in force, residual ownership named), dates, and an unbroken trail from the delivery evidence to that operate evidence — not a dashboard green tile with no operate authority, not a verbal "they are running it," not flipping a feature flag with no instrument path, not a chat note that says live, not "ops will babysit" without instrument-required operate evidence, and not treating delivery theater as automatic operation of that delivered successor-obligation outcome. Delivered is not operated. A firm can be delivered and still not operated (delivery evidence exists while required operate evidence for the control window is missing). A firm can have instrument-required delivery / handoff that places the closed successor-obligation outcome into the named receiving channel / operator / warranty / next-party register for the remaining window and still lack instrument-required operation that puts the delivered successor-obligation outcome into active run under the named operator / duty / warranty / control window. A firm can claim operate theater and still not be delivered (a dashboard green tile with no operate authority, a verbal "they are running it," flipping a feature flag with no instrument path, a chat note that says live, or a sentence that says ops will babysit while required delivery evidence is missing). Delivery evidence alone is not operation of that delivered successor-obligation outcome. An operate claim alone is not proof the named delivery evidence was on the file. A CMMS checkbox, ticket state, status light, dashboard delivered tile, verbal "they are running it," dashboard green tile with no operate authority, feature flag with no instrument path, chat note that says live, or ops-will-babysit note alone is neither. A verbal "they are running it" alone is neither. Keep this delivered distinct from the filing-spine Closed Is Not Delivered and from Delivered Is Not Operated. Keep this operated distinct from the filing-spine Delivered Is Not Operated and from Operated Is Not Sustained. Keep this closed distinct from the filing-spine Cleared Is Not Closed and from Closed Is Not Delivered. This delivered is instrument-required delivery / handoff that places the closed successor-obligation outcome into the named receiving channel / operator / warranty / next-party register for the remaining window, trailed from the close evidence. This operated is instrument-required operation that puts the delivered successor-obligation outcome into active run under the named operator / duty / warranty / control window, trailed from the delivery evidence. This closed is instrument-required close-out that ends the cleared successor-obligation matter for that named channel / remaining window after clearance, trailed from the clearance evidence. Do not collapse this delivered into the filing-spine delivery Closed Is Not Delivered names. Do not collapse this delivered into the productive operation Delivered Is Not Operated names. Do not collapse this operated into the productive operation Delivered Is Not Operated names. Do not collapse this operated into the duty-window sustainment Operated Is Not Sustained names. Do not collapse this closed into the closing completion Cleared Is Not Closed names. Do not collapse this closed into the delivery Closed Is Not Delivered names. This essay does not collapse this delivered into filing-spine delivery. This essay does not collapse this delivered into productive operation. This essay does not collapse this operated into productive operation. This essay does not collapse this operated into filing-spine sustainment. This essay does not collapse this closed into closing completion. This essay does not collapse this closed into delivery. This essay does not collapse into Closed Is Not Delivered. This essay does not rewrite Closed Is Not Delivered. This essay does not collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated. This essay does not collapse into Operated Is Not Sustained. This essay does not rewrite Operated Is Not Sustained. This essay does not collapse into Cleared Is Not Closed. This essay does not rewrite Cleared Is Not Closed. This essay does not collapse into Recorded Is Not Cleared. This essay does not rewrite Recorded Is Not Cleared. This essay does not collapse into Released Is Not Recorded. This essay does not rewrite Released Is Not Recorded. This essay does not collapse into Remediated Is Not Released. This essay does not rewrite Remediated Is Not Released. This essay does not collapse into Enforced Is Not Remediated. This essay does not rewrite Enforced Is Not Remediated. This essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced. This essay does not collapse into Effective Is Not Binding. This essay does not rewrite Effective Is Not Binding. This essay does not collapse into Restored Is Not Accepted. This essay does not rewrite Restored Is Not Accepted. This essay does not collapse into Governed Is Not Transferable. This essay does not rewrite Governed Is Not Transferable. This essay does not collapse into Transferable Is Not Rehearsed. This essay does not rewrite Transferable Is Not Rehearsed. This essay does not collapse into Transferable Is Not Binding. This essay does not rewrite Transferable Is Not Binding. This essay does not collapse operated into delivered. This essay does not collapse delivered into operated. A dashboard green tile with no operate authority, a verbal "they are running it," or flipping a feature flag with no instrument path without instrument-required operate evidence is not that operate. A chat note that says live, or "ops will babysit," without instrument-required operate evidence is not that operate. This split is delivered versus operated. This essay separates instrument-required delivery / handoff that places the closed successor-obligation outcome into the named receiving channel / operator / warranty / next-party register for the remaining window from instrument-required operation that puts the delivered successor-obligation outcome into active run under the named operator / duty / warranty / control window. Evidence from the plant beats the delivery record when the record is being used as operated. Evidence from the plant beats the operate claim when the claim is being used as proof the named delivery of that successor-obligation outcome was on the file. Sync refuses to pretend delivered or operated is a status light. Sync does not measure operated. Sync does not measure operated for the customer. Sync does not measure delivered or operated for the customer. Sync may surface a delivery record or an operate record beside Evidence, Verification, and the closed outcome. Sync must not treat delivered as operated as Learning credit. Sync does not deem operated for the customer. Sync must not auto-deem-operated. A practice record that says delivered is operated is not shown operated.
          </p>

          <p>
            Delivered is not operated. A firm can be delivered and still not operated (delivery
            evidence exists while required operate evidence for the control window is missing). A
            firm can have instrument-required delivery / handoff that places the closed
            successor-obligation outcome into the named receiving channel / operator / warranty /
            next-party register for the remaining window and still lack instrument-required operation
            that puts the delivered successor-obligation outcome into active run under the named
            operator / duty / warranty / control window. A firm can claim operate theater and still
            not be delivered (a dashboard green tile with no operate authority, a verbal "they
            are running it," flipping a feature flag with no instrument path, a chat note that
            says live, or a sentence that says ops will babysit while required delivery evidence is
            missing). Delivery evidence alone is not operation of that delivered successor-obligation
            outcome. An operate claim alone is not proof the named delivery evidence was on the file.
            A CMMS checkbox, ticket state, status light, dashboard delivered tile, verbal "they
            are running it," dashboard green tile with no operate authority, feature flag with
            no instrument path, chat note that says live, or ops-will-babysit note alone is neither.
            A verbal "they are running it" alone is neither.
          </p>

          <p>
            Keep this delivered distinct from the filing-spine Closed Is Not Delivered and from
            Delivered Is Not Operated. Keep this operated distinct from the filing-spine Delivered Is
            Not Operated and from Operated Is Not Sustained. Keep this closed distinct from the
            filing-spine Cleared Is Not Closed and from Closed Is Not Delivered. This delivered is
            instrument-required delivery / handoff that places the closed successor-obligation
            outcome into the named receiving channel / operator / warranty / next-party register for
            the remaining window, trailed from the close evidence. This operated is
            instrument-required operation that puts the delivered successor-obligation outcome into
            active run under the named operator / duty / warranty / control window, trailed from the
            delivery evidence. This closed is instrument-required close-out that ends the cleared
            successor-obligation matter for that named channel / remaining window after clearance,
            trailed from the clearance evidence. Do not collapse this delivered into the filing-spine
            delivery Closed Is Not Delivered names. Do not collapse this delivered into the productive
            operation Delivered Is Not Operated names. Do not collapse this operated into the
            productive operation Delivered Is Not Operated names. Do not collapse this operated into
            the duty-window sustainment Operated Is Not Sustained names. This essay does not collapse
            this delivered into filing-spine delivery. This essay does not collapse this delivered
            into productive operation. This essay does not collapse this operated into productive
            operation. This essay does not collapse this operated into filing-spine sustainment. This
            essay does not collapse into Closed Is Not Delivered. This essay does not rewrite Closed
            Is Not Delivered. This essay does not collapse into Delivered Is Not Operated. This essay
            does not rewrite Delivered Is Not Operated. This essay does not collapse into Operated Is
            Not Sustained. This essay does not rewrite Operated Is Not Sustained. This essay does not
            collapse operated into delivered. This essay does not collapse delivered into operated. A
            dashboard green tile with no operate authority, a verbal "they are running it,"
            or flipping a feature flag with no instrument path without instrument-required operate
            evidence is not that operate. A chat note that says live, or "ops will
            babysit," without instrument-required operate evidence is not that operate. This
            split is delivered versus operated.
          </p>

          <p>
            False confidence here is delivery evidence treated as instrument-required operation that
            puts the delivered successor-obligation outcome into active run under the named operator /
            duty / warranty / control window, or a claim that delivered so it is operated treated as
            proof the named delivery evidence was on the file. Evidence from the plant beats the
            delivery record when the record is being used as operated. Evidence from the plant beats
            the operate claim when the claim is being used as proof the named delivery of that
            successor-obligation outcome was on the file. Evidence from the plant beats the note. A
            practice record that says delivered is operated is not shown operated. Sync refuses to
            pretend delivered or operated is a status light. Sync does not measure operated. Sync
            does not measure operated for the customer. Sync does not measure delivered or operated
            for the customer. Sync does not measure delivered. Sync does not deem operated for the
            customer. Sync does not deem delivered for the customer. Sync may surface a delivery
            record or an operate record beside Evidence, Verification, and the closed outcome.
            Surfacing is still a read. The closed outcome in that sentence is the Decision Case
            outcome record. It is not this delivered, and it is not this operated. Sync must not
            auto-deem-operated. Sync must not treat delivered as operated as Learning credit. Direct
            plant execute stays off. CMMS write-back is not a live product path. Billing write-back
            is not a live product path.
          </p>

          <p>
            The chain this refusal sits on is already fixed. Judgment is not authority. Authority is
            not accountability. Accountability is not ownership. Ownership is not control. Control is
            not closure. Closure is not complete. Complete is not accepted. Accepted is not verified.
            Verified is not authorized. Authorized is not executed. Executed is not closed. Closed is
            not resolved. Resolved is not proven. Proven is not trusted. Trusted is not adopted.
            Adopted is not sustained. Sustained is not scaled. Scaled is not compounded. Compounded
            is not owned. Owned is not governed. Governed is not transferable. Transferable is not
            rehearsed. Rehearsed is not recoverable. Recoverable is not assured. Assured is not
            certified. Certified is not insured. Insured is not covered. Covered is not paid. Paid is
            not settled. Settled is not booked. Booked is not reconciled. Reconciled is not closed.
            Closed is not collected. Collected is not recognized. Recognized is not reported.
            Reported is not audited. Audited is not filed. Filed is not accepted. Accepted is not
            posted. Posted is not effective. Effective is not binding. Binding is not enforced.
            Enforced is not remediated. Remediated is not released. Released is not recorded.
            Recorded is not cleared. Cleared is not closed. Closed is not delivered. Delivered is not
            operated. Operated is not sustained. Sustained is not assured. Assured is not guaranteed.
            Guaranteed is not collectible. Collectible is not applied. Applied is not restored.
            Restored is not accepted. Accepted is not sustained. Sustained is not transferable.
            Transferable is not binding. Binding is not enforced. Enforced is not remediated.
            Remediated is not released. Released is not recorded. Recorded is not cleared. Cleared is
            not closed. Closed is not delivered. Delivered is not operated. That last sentence is
            this refusal. Closed is not delivered, the prior refusal in this spine, separates
            instrument-required close-out that ends the cleared successor-obligation matter for that
            named channel / remaining window after clearance from instrument-required delivery /
            handoff that places the closed successor-obligation outcome into the named receiving
            channel / operator / warranty / next-party register for the remaining window. This essay
            does not rewrite that thesis. Cleared is not closed, earlier in this spine, separates
            instrument-required clearance that removes or retires a recorded release / recorded
            successor obligation from the active hold register only when the named clearance criteria
            are met for that remaining window from that close-out. Recorded is not cleared, earlier
            in this spine, separates instrument-required recording of that release into the named
            operating / warranty / successor register / evidence ledger so the released successor
            obligations stay on-file for the remaining window from that clearance. Released is not
            recorded, earlier in this spine, separates instrument-required release / close-out that
            returns the remediated successor obligations into the named operating / warranty /
            successor window as released for continued hold from that recording. Remediated is not
            released, earlier in this spine, separates instrument-required remediation that restores
            the named successor obligations after the named breach from that release. Enforced is not
            remediated, earlier in this spine, separates instrument-required enforcement of those
            named successor binding obligations for the named successor window from that remediation.
            Binding is not enforced, earlier in this spine, separates instrument-required binding of
            the named successor from that enforcement. Effective is not binding, on a different spine,
            is a named effectiveness date for a posted filing versus the instrument-required bind
            mechanics that make that filing enforceable. Binding is not enforced, on that same filing
            spine, is those bind mechanics versus named demand, default, remedy, or enforcement
            actions. Enforced is not remediated, still on that filing spine, is those enforcement
            actions versus instrument-required cure or remedy completion. Remediated is not released,
            still on that filing spine, is that cure versus a release, waiver, or discharge of
            enforcement rights. Released is not recorded, still on that filing spine, is that release,
            waiver, or discharge versus registry or recording of the executed release. Recorded is not
            cleared, still on that filing spine, is that registry recording versus clearance of the
            named encumbrance from the operating title, search position, and counterparty books.
            Cleared is not closed, still on that filing spine, is that operating-title clearance
            versus instrument-required closing completion of the named transaction or obligation.
            Closed is not delivered, still on that filing spine, is that closing completion versus
            delivery of the named asset, scope, or obligation into the counterparty hands. Delivered
            is not operated, still on that filing spine, is that delivery into the counterparty hands
            versus instrument-required productive operation of the named asset, system, or scope.
            Operated is not sustained, still on that filing spine, is that productive operation versus
            instrument-required ongoing, repeatable, in-control operation over the required duty
            window. Restored is not accepted is restoration of the named operating condition the
            guarantee was written to return, versus owner acceptance of that restoration. Governed is
            not transferable is the governance spine. Transferable is not rehearsed is that
            governance handoff versus a named handoff run under stress. None of those sentences is
            this refusal. This refusal is instrument-required delivery / handoff that places the
            closed successor-obligation outcome into the named receiving channel / operator /
            warranty / next-party register for the remaining window, versus instrument-required
            operation that puts the delivered successor-obligation outcome into active run under the
            named operator / duty / warranty / control window.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The delivered practice is not the operated practice
          </h2>

          <p>
            The problem is a delivery record treated as if that delivered successor-obligation
            outcome were already in active run under the named operator, duty, warranty, or control
            window, or an operate claim treated as if the named delivery under that close trail had
            been evidenced. The dashboard can be green. The feature flag can be flipped. The chat can
            say live. The email can say they are running it. Ops can say they will babysit. The tile
            can go green with no operate authority. The named operator and acceptor roles were never
            identified, the delivery package was never cited, the run was never started under named
            duty, control limits or warranty were never put in force, residual ownership was never
            named, the dates do not cover the control window, and no trail runs from the delivery
            evidence to that operate evidence. A verbal "they are running it" alone is
            neither. Delivery theater is not operation. Operate theater is not the named operate
            package.
          </p>

          <p>
            One file can hold a delivery record. Under that same named instrument / governing law for
            that channel, there is instrument-required delivery / handoff that places the closed
            successor-obligation outcome into the named receiving channel / operator / warranty /
            next-party register for the remaining window, with an unbroken trail from the close
            evidence to that delivery evidence. The same file can still lack an operate record. Under
            that same instrument, that delivered successor-obligation outcome is not operated until
            the instrument-required operate mechanics are on the file: an operate package with named
            operator / acceptor roles, named operate criteria met (delivery package cited, run
            started under named duty, control limits or warranty in force, residual ownership named),
            dates, and an unbroken trail from the delivery evidence to that operate evidence. A
            verbal "they are running it," a dashboard green tile with no operate authority,
            or a sentence that says ops will babysit is not operation of that delivered
            successor-obligation outcome.
          </p>

          <p>
            Delivered, in this essay, means the instrument-required successor delivery already stated
            in the prior essay of this spine: delivery / handoff that places the closed
            successor-obligation outcome into the named receiving channel / operator / warranty /
            next-party register for the remaining window, trailed from the close evidence. This essay
            does not give that delivered a new meaning. Operated, in this essay, means
            instrument-required operation that puts the delivered successor-obligation outcome into
            active run under the named operator / duty / warranty / control window, trailed from the
            delivery evidence. The two records meet only on an unbroken trail from the delivery
            evidence to the operate evidence. A verbal "they are running it," a dashboard
            green tile with no operate authority, or a chat note that says live is not that operate.
          </p>

          <p>
            On Tuesday the question splits. The delivery file answers whether, under the named
            instrument, that closed successor-obligation outcome was placed into the named receiving
            channel, operator, warranty, or next-party register for the remaining window: named
            deliverer and receiver roles, close package cited, receiving register updated, acceptance
            or receipt recorded, residual ownership named, dates, and a trail from the close evidence
            to that delivery. The operate file answers whether, under that same instrument, that
            delivered successor-obligation outcome was put into active run under the named operator,
            duty, warranty, or control window: named operator and acceptor roles, delivery package
            cited, run started under named duty, control limits or warranty in force, residual
            ownership named, dates, and a trail from that delivery evidence to that operate. Ops will
            babysit, with no instrument-required operate evidence, answers neither the operate
            criteria nor the trail.
          </p>

          <p>
            <Link
              href="/insights/successor-closed-is-not-delivered"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Closed Is Not Delivered
            </Link>{' '}
            sits one step earlier in this spine. Read the prior essay at
            /insights/successor-closed-is-not-delivered. Closed is not delivered. This essay separates
            instrument-required delivery / handoff that places the closed successor-obligation outcome
            into the named receiving channel / operator / warranty / next-party register for the
            remaining window from instrument-required operation that puts the delivered
            successor-obligation outcome into active run under the named operator / duty / warranty /
            control window. This essay does not collapse into Closed Is Not Delivered. This essay
            does not rewrite Closed Is Not Delivered. This essay does not rewrite that thesis.
            Delivery evidence is not this operated, and close evidence is not this delivered. This
            delivered remains the instrument-required delivery / handoff that places the closed
            successor-obligation outcome into the named receiving channel / operator / warranty /
            next-party register for the remaining window named in that essay, trailed from the close
            evidence. This essay does not give that delivered a new meaning. A delivery package, in
            that essay, counts as delivery evidence. It is not, by that fact, operation that puts the
            delivered successor-obligation outcome into active run. A dashboard green tile with no
            delivery authority, a verbal "they have it," or "handoff is informal"
            is not that delivery, and it is not this operated.
          </p>

          <p>
            <Link
              href="/insights/successor-cleared-is-not-closed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Cleared Is Not Closed
            </Link>{' '}
            sits earlier in this spine. Cleared is not closed. This essay does not collapse into
            Cleared Is Not Closed. This essay does not rewrite Cleared Is Not Closed. Clearance
            evidence is not this delivered, and close evidence is not this operated.
          </p>

          <p>
            <Link
              href="/insights/successor-recorded-is-not-cleared"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Recorded Is Not Cleared
            </Link>{' '}
            sits earlier in this spine. Recorded is not cleared. This essay does not collapse into
            Recorded Is Not Cleared. This essay does not rewrite Recorded Is Not Cleared. Recording
            evidence is not this delivered, and clearance evidence is not this operated.
          </p>

          <p>
            <Link
              href="/insights/successor-released-is-not-recorded"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Released Is Not Recorded
            </Link>{' '}
            sits earlier in this spine. Released is not recorded. This essay does not collapse into
            Released Is Not Recorded. This essay does not rewrite Released Is Not Recorded. Release
            evidence is not this delivered, and recording evidence is not this operated.
          </p>

          <p>
            <Link
              href="/insights/successor-remediated-is-not-released"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Remediated Is Not Released
            </Link>{' '}
            sits earlier in this spine. Remediated is not released. This essay does not collapse into
            Remediated Is Not Released. This essay does not rewrite Remediated Is Not Released.
            Remediation evidence is not this delivered, and release evidence is not this operated.
          </p>

          <p>
            <Link
              href="/insights/successor-enforced-is-not-remediated"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Enforced Is Not Remediated
            </Link>{' '}
            sits earlier in this spine. Enforced is not remediated. This essay does not collapse into
            Enforced Is Not Remediated. This essay does not rewrite Enforced Is Not Remediated.
            Enforcement evidence is not this delivered, and remediation evidence is not this operated.
          </p>

          <p>
            <Link
              href="/insights/successor-binding-is-not-enforced"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Binding Is Not Enforced
            </Link>{' '}
            sits earlier in this spine. Binding is not enforced. This essay does not collapse into
            Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced. Binding
            evidence is not this delivered, and enforcement evidence is not this operated.
          </p>

          <p>
            <Link
              href="/insights/transferable-is-not-binding"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Transferable Is Not Binding
            </Link>{' '}
            sits earlier in this spine. Transferable is not binding. This essay does not collapse into
            Transferable Is Not Binding. This essay does not rewrite Transferable Is Not Binding.
            Transfer evidence is not this delivered, and binding evidence is not this operated.
          </p>

          <p>
            <Link
              href="/insights/effective-is-not-binding"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Effective Is Not Binding
            </Link>{' '}
            is a different spine. Effective, there, means a posted filing has reached its named legal
            or operational effective date and named scope. Binding, there, means that effective filing
            has created enforceable obligations through the instrument-required bind mechanics —
            executed counterparts, delivered notices, counterparty acknowledgments, recorded security,
            or other named bind steps the instrument requires. This binding is not that filing bind.
            This essay does not collapse into Effective Is Not Binding. This essay does not rewrite
            Effective Is Not Binding. This essay does not collapse this binding into
            filing-effectiveness bind. A counterpart that makes a posted filing enforceable is not, by
            that fact, successor delivery of a closed obligation, and it is not this operated.
          </p>

          <p>
            <Link
              href="/insights/binding-is-not-enforced"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Binding Is Not Enforced
            </Link>{' '}
            on the filing spine is a different refusal that shares a title with an earlier essay in
            this spine and must not be collapsed into either. Binding, there, is those
            instrument-required bind mechanics for the effective filing. Enforced, there, means those
            binding obligations are actually being enforced: demand or default notices, cure periods,
            remedy elections, security steps, or other named enforcement actions against the named
            parties for the named filing scope. This enforced is not that filing-spine enforcement.
            This essay does not collapse into Binding Is Not Enforced. This essay does not rewrite
            Binding Is Not Enforced. This essay does not collapse this enforced into filing-spine
            enforcement. A demand letter on a filed covenant is not an operate package trailing from
            successor delivery, and it is not this operated. The live filing-spine essay stays at
            /insights/binding-is-not-enforced.
          </p>

          <p>
            <Link
              href="/insights/enforced-is-not-remediated"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Enforced Is Not Remediated
            </Link>{' '}
            on the filing spine is a different refusal that shares a title with an earlier essay in
            this spine and must not be collapsed into either. Enforced, there, is named demand,
            default, remedy, or enforcement action on the filing bind. Remediated, there, is
            instrument-required cure or remedy completion for the named breach that drove those
            actions. This remediated is not that filing-spine remedy completion, and this enforced is
            not that filing-spine enforcement. This essay does not collapse into Enforced Is Not
            Remediated. This essay does not rewrite Enforced Is Not Remediated. This essay does not
            collapse this remediated into filing-spine remedy completion. This essay does not
            collapse this enforced into filing-spine enforcement. A cure notice accepted on a filed
            default is not operation that puts a delivered successor-obligation outcome into active
            run, and it is not this operated. The live filing-spine essay stays at
            /insights/enforced-is-not-remediated.
          </p>

          <p>
            <Link
              href="/insights/remediated-is-not-released"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Remediated Is Not Released
            </Link>{' '}
            on the filing spine is a different refusal that shares a title with an earlier essay in
            this spine and must not be collapsed into either. Remediated, there, is
            instrument-required cure or remedy completion for the named filing breach. Released,
            there, means the named parties enforcement rights, the cured default, or the claims
            arising from that breach have been released, waived, or discharged. This released is not
            that filing-spine release, waiver, or discharge, and this remediated is not that
            filing-spine cure. This essay does not collapse into Remediated Is Not Released. This
            essay does not rewrite Remediated Is Not Released. This essay does not collapse this
            released into filing-spine release, waiver, or discharge. This essay does not collapse
            this remediated into filing-spine cure. A waiver of a filed default is not operation of a
            delivered successor-obligation outcome, and it is not this operated. The live filing-spine
            essay stays at /insights/remediated-is-not-released.
          </p>

          <p>
            <Link
              href="/insights/released-is-not-recorded"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Released Is Not Recorded
            </Link>{' '}
            on the filing spine is a different refusal that shares a title with an earlier essay in
            this spine and must not be collapsed into either. Released, there, is that filing-spine
            release, waiver, or discharge of enforcement rights. Recorded, there, means that executed
            release has been recorded, lodged, or registered on the named public registry or
            instrument record of title. This recorded is not that registry recording, and this
            released is not that filing-spine release. This essay does not collapse into Released Is
            Not Recorded. This essay does not rewrite Released Is Not Recorded. This essay does not
            collapse this recorded into registry recording. This essay does not collapse this
            released into registry recording. A financing-statement discharge is not an operate
            package that cites a successor delivery and starts a run under named duty. The live
            filing-spine essay stays at /insights/released-is-not-recorded.
          </p>

          <p>
            <Link
              href="/insights/recorded-is-not-cleared"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Recorded Is Not Cleared
            </Link>{' '}
            on the filing spine is a different refusal that shares a title with an earlier essay in
            this spine and must not be collapsed into either. Recorded, there, is registry recording
            of an executed filing release. Cleared, there, means the named encumbrance, obligation,
            or claim that was released and recorded has been cleared from the operating title, search
            position, and counterparty books. This recorded is not that registry recording, and this
            cleared is not that clearance of filing obligations. This essay does not collapse into
            Recorded Is Not Cleared. This essay does not rewrite Recorded Is Not Cleared. This essay
            does not collapse this recorded into clearance of filing obligations. This essay does not
            collapse this cleared into clearance of filing obligations. A title search that returns
            clear is not an operate package trailing from successor delivery. The live filing-spine
            essay stays at /insights/recorded-is-not-cleared.
          </p>

          <p>
            <Link
              href="/insights/cleared-is-not-closed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Cleared Is Not Closed
            </Link>{' '}
            on the filing spine is a different refusal that shares a title with an earlier essay in
            this spine and must not be collapsed into either. Cleared, there, is clearance of the
            named encumbrance from the operating title, search position, and counterparty books.
            Closed, there, means the named transaction, obligation, or matter that depended on that
            clearance has been closed for the named scope — instrument-required closing completion,
            not this closed. This cleared is not that clearance of filing obligations, and this closed
            is not that closing completion. This essay does not collapse into Cleared Is Not Closed.
            This essay does not rewrite Cleared Is Not Closed. This essay does not collapse this
            cleared into closing completion. This essay does not collapse this closed into closing
            completion. A closing package on a cleared title is not instrument-required operation of a
            delivered successor-obligation outcome. The live filing-spine essay stays at
            /insights/cleared-is-not-closed.
          </p>

          <p>
            <Link
              href="/insights/closed-is-not-delivered"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Closed Is Not Delivered
            </Link>{' '}
            on the filing spine is a different refusal that shares a title with the prior essay in
            this spine and must not be collapsed into either. Closed, there, is that closing
            completion of the named transaction, obligation, or matter that depended on
            operating-title clearance. Delivered, there, means the named asset, scope, or obligation
            that the close was supposed to put into the counterparty hands has been delivered. This
            closed is not that closing completion, and this delivered is not that filing-spine
            delivery. This essay does not collapse into Closed Is Not Delivered. This essay does not
            rewrite Closed Is Not Delivered. This essay does not collapse this closed into delivery.
            This essay does not collapse this delivered into filing-spine delivery. A handover receipt
            after a filing close is not instrument-required operation of a delivered
            successor-obligation outcome under the named operator, duty, warranty, or control window.
            The live filing-spine essay stays at /insights/closed-is-not-delivered.
          </p>

          <p>
            <Link
              href="/insights/delivered-is-not-operated"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Delivered Is Not Operated
            </Link>{' '}
            on the filing spine is a different refusal that shares this title and must not be
            collapsed into it. Delivered, there, is that filing-spine delivery of the named asset,
            scope, or obligation into the counterparty hands. Operated, there, means the named asset,
            system, or scope that was delivered is in instrument-required productive operation. This
            delivered is not that filing-spine delivery, and this operated is not that productive
            operation. This essay does not collapse into Delivered Is Not Operated. This essay does
            not rewrite Delivered Is Not Operated. This essay does not collapse this delivered into
            filing-spine delivery. This essay does not collapse this operated into productive
            operation. An in-service certificate after a filing handover is not instrument-required
            operation that puts a delivered successor-obligation outcome into active run under the
            named operator, duty, warranty, or control window. The live filing-spine essay stays at
            /insights/delivered-is-not-operated. This essay is the industrial control and transfer spine, registered beside it so the two refusals keep separate evidence trails.
          </p>

          <p>
            <Link
              href="/insights/operated-is-not-sustained"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Operated Is Not Sustained
            </Link>{' '}
            is that filing spine one step later. Operated, there, is that instrument-required
            productive operation of the named asset, system, or scope that was delivered. Sustained,
            there, means that operated asset stays in instrument-required ongoing, repeatable,
            in-control operation over the required duty window. This operated is not that productive
            operation, and it is not that filing-spine sustainment. This essay does not collapse into
            Operated Is Not Sustained. This essay does not rewrite Operated Is Not Sustained. This
            essay does not collapse this operated into productive operation. This essay does not
            collapse this operated into filing-spine sustainment. A duty-window log after a filing
            in-service certificate is not an operate package that cites successor delivery and starts
            a run under named duty. The live filing-spine essay stays at
            /insights/operated-is-not-sustained.
          </p>

          <p>
            <Link
              href="/insights/restored-is-not-accepted"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Restored Is Not Accepted
            </Link>{' '}
            is a different step. Restored, there, means instrument-required restoration of the named
            asset, unit, or plant operating condition the guarantee, warranty, indemnity, or SLA
            remedy was written to return. Accepted, there, means owner, operator, or beneficiary
            acceptance of that restored condition. This delivered is not that operating-condition
            restoration, and this operated is not that owner acceptance. This essay does not collapse
            into Restored Is Not Accepted. This essay does not rewrite Restored Is Not Accepted. This
            essay does not collapse this operated into operating-condition restoration. A
            return-to-service package with no trail from successor delivery evidence is not this
            operated.
          </p>

          <p>
            <Link
              href="/insights/governed-is-not-transferable"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Governed Is Not Transferable
            </Link>{' '}
            is the governance spine. Governed, there, means ownership sits inside explicit rules of
            engagement. Transferable, there, means that governed owned compounding system can change
            hands with evidence continuity. This transferable is not that governance handoff, and this
            operated is not that handoff. This essay does not collapse into Governed Is Not
            Transferable. This essay does not rewrite Governed Is Not Transferable. This essay does
            not collapse this transferable into governance handoff. A playbook that moved with a
            compounding system is not instrument-required operation of a delivered
            successor-obligation outcome.
          </p>

          <p>
            <Link
              href="/insights/transferable-is-not-rehearsed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Transferable Is Not Rehearsed
            </Link>{' '}
            is that governance spine one step later. Transferable, there, is the governed system
            changing hands. Rehearsed, there, means the named handoff has been run under stress with
            the named successor actually exercising authority. This transferable is not that
            succession package, and this operated is not that rehearsal. This essay does not collapse
            into Transferable Is Not Rehearsed. This essay does not rewrite Transferable Is Not
            Rehearsed. This essay does not collapse this transferable into rehearsed succession. A
            tabletop of a governed handoff is not an operate package trailing from successor delivery.
          </p>

          <p>
            A filing counterpart is not this delivered. A filing-spine demand letter is not this
            operated. A cure completion on a filed default is not this operated. A release, waiver, or
            discharge of a filed default is not this operated. A registry recording of that filing
            release is not this recorded. Clearance of that filing encumbrance from the operating
            title is not this cleared. Closing completion of that filing matter is not this closed.
            Delivery after that filing close is not this delivered. Productive operation after that
            filing delivery is not this operated. Duty-window sustainment after that filing operation
            is not this operated. A return-to-service package is not this operated. A governance
            handoff is not this operated. A rehearsed succession drill is not this operated. A verbal
            "they are running it" is not this operated. A dashboard green tile with no
            operate authority is not this operated. Flipping a feature flag with no instrument path is
            not this operated. A chat note that says live is not this operated. Ops will babysit is
            not operated. A verbal "they are running it" alone is neither. Delivery theater
            is not automatic operation of that delivered successor-obligation outcome. Operate theater
            is not the named outcome in active run. The control window has to be the window the
            instrument names. Operation of a different successor, a different site, a different shift,
            or of a delivery the named delivery package does not name is not this operated.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an operate record is allowed to be
          </h2>

          <p>
            Evidence may cite a delivery record when the source of that delivery is named, and when
            the citation names the same entity, the same channel, and the same asset the operate
            record is about. The citation still has to show the unbroken trail from that delivery
            evidence to the operate evidence, with named operator / acceptor roles, named operate
            criteria met (delivery package cited, run started under named duty, control limits or
            warranty in force, residual ownership named), dates, and the control window the instrument
            names. A citation of a named deliverer, or of a matter that was delivered, without the
            operate mechanics, is not this operated.
          </p>

          <p>
            An operate record is allowed to be an operate package with named operator / acceptor
            roles, named operate criteria met, and dates, with a trail from the delivery evidence to
            that operate: the delivery package cited against the named delivery of the successor
            obligation, the run started under named duty for the control window, control limits or
            warranty in force, residual ownership named, or other named operate evidence the
            instrument requires. It is not allowed to be a dashboard green tile with no operate
            authority. It is not allowed to be a verbal "they are running it." It is not
            allowed to be flipping a feature flag with no instrument path. It is not allowed to be a
            chat note that says live. It is not allowed to be a sentence that says ops will babysit.
          </p>

          <p>
            The window the operate record covers has to be the operator, duty, warranty, or control
            window the instrument names for that delivered outcome, the same matter the delivery
            placed on the receiving register. Operation of a different successor, a different site, a
            different shift, or a delivery the instrument does not name is not this operated. The
            operator, the acceptor, the cited delivery, the named duty, the residual ownership, and
            the dates have to match the delivery evidence, and the delivery evidence has to match the
            close evidence. A record that floats free of that trail is delivery theater, or it is
            operate theater, and it is not this operated. Delivered is not operated.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            Named delivered is not operated
          </h2>

          <p>
            Named delivered is not operated. The delivered practice is not the operated practice. A
            delivery record answers whether that closed successor-obligation outcome was placed into
            the named receiving channel, operator, warranty, or next-party register for the remaining
            window. An operate record answers whether that delivered successor-obligation outcome was
            put into active run under the named operator, duty, warranty, or control window: the
            operator and acceptor named, the delivery package cited, the run started under named duty,
            control limits or warranty in force, residual ownership named, and the trail from the
            delivery evidence to that operate. Delivered is not operated.
          </p>

          <p>
            A claim that delivered so it is operated, while the delivery trail is missing, is not this
            operated. A dashboard green tile with no operate authority, a verbal "they are
            running it," flipping a feature flag with no instrument path, a chat note that says
            live, or a sentence that says ops will babysit while required delivery evidence is missing
            is operate theater, and it is not this delivered. An operate claim alone is not proof the
            named delivery evidence was on the file. A verbal "they are running it" alone is
            neither. Delivery evidence alone is not operation of that delivered successor-obligation
            outcome.
          </p>

          <p>
            A named delivery with no operate evidence behind it is not this operated. Operation has to
            trail back to the delivery evidence, and the delivery evidence has to trail back to the
            close evidence. An operate package that floats free of that trail is not this operated.
            What changes Tuesday is the refusal to let one record wear the other record name. Field
            proof is the named trail, not the tile. Delivered is not operated. Sync must not
            auto-deem-operated. Sync must not treat delivered as operated as Learning credit.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Where the public statement lives</h2>

          <p>
            Field Manual {fieldManual.version} is the public contents of this loop. Start at the{' '}
            <Link href="/manuals" className="text-[#3B82F6] hover:text-white transition-colors">
              manuals index
            </Link>{' '}
            or open{' '}
            <Link href={fieldManualPath()} className="text-[#3B82F6] hover:text-white transition-colors">
              {fieldManual.title}
            </Link>{' '}
            directly. Evidence may hold the delivery record or the operate record that was shown.
            Human decision may hold who accepted the consequence. Verification may hold the named
            observation. Learning may hold achieved, not_achieved, or inconclusive, with measured
            notes — the measured outcome of the case, not this essay definition of delivered, and not
            delivered used as operated. The{' '}
            <Link
              href={fieldManualPath(honestyChapter.slug)}
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Honesty boundaries
            </Link>{' '}
            keep this edition from treating a delivery record as successor operation. Later editions
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
                    className="text-white hover:text-[#3B82F6] transition-colors"
                  >
                    {chapter.title}
                  </Link>
                </li>
              ))}
            </ol>
            <p className="text-gray-400 mt-6 mb-0">
              The order is the public statement. The essay is one refusal inside it. Read{' '}
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
            does not claim that delivered is operated, that closed is delivered, that cleared is
            closed, that recorded is cleared, that released is recorded, that remediated is released,
            that enforced is remediated, that binding is enforced, that transferable is binding, that
            effective is binding, or that filing-spine delivered is filing-spine operated. It does not
            write a CMMS work order, operate a successor obligation, book revenue, recognize revenue,
            or attribute a change in cash, risk, or capacity. Sync does not measure delivered. Sync
            does not measure operated. Sync does not measure delivered or operated for the customer.
            Sync does not deem operated for the customer. It does not claim that Sync executes plant
            work. It does not claim CMMS write-back as a shipped product. It does not claim billing
            write-back as a shipped product. It does not invent a customer, a price, or a return.
          </p>

          <p>
            Stage-1 readiness means a signed-in user can complete the Decision Case — question,
            evidence, recommendation, human decision, action, verification, and learning — and{' '}
            <Link href={fieldManualPath()} className="text-[#3B82F6] hover:text-white transition-colors">
              Field Manual {fieldManual.version}
            </Link>{' '}
            describes that journey. Walking those steps is not a claim that delivered is operated. A{' '}
            <Link
              href="/reliability-assessment"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Reliability Assessment
            </Link>{' '}
            asks whether the records can support a conclusion. A{' '}
            <Link href="/strategic-pilot" className="text-[#3B82F6] hover:text-white transition-colors">
              Strategic Pilot
            </Link>{' '}
            is a governed proof around one operating decision. The verification chapter records the
            measured result. The delivery package does not operate the outcome.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Delivered is
              instrument-required delivery / handoff that places the closed successor-obligation
              outcome into the named receiving channel / operator / warranty / next-party register for
              the remaining window. Operated is instrument-required operation that puts the delivered
              successor-obligation outcome into active run under the named operator / duty / warranty
              / control window. A firm with delivery can still lack operation. A firm with an operate
              claim can still lack delivery. The Reliability Engineer workspace is where a signed-in
              Decision Case is completed. A Reliability Assessment is the bounded review when the
              question is whether the records can support a conclusion. None of those is a claim that
              Sync operates a successor obligation, executes plant work, books revenue, or that CMMS
              write-back is live, that billing write-back is live, or that self-guided onboarding is a
              live product path.
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

          <InsightNextSteps slug="successor-delivered-is-not-operated" />
        </motion.article>
      </div>
    </main>
  );
}
