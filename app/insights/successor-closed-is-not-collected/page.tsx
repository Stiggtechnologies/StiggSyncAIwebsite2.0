'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-closed-is-not-collected');

export default function SuccessorClosedIsNotCollectedPage() {
  return (
    <main className="min-h-screen bg-[#0B0F14]">
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />Back to Insights</Link>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          <header className="mb-12">
            <span className="inline-block px-3 py-1 bg-[#3B82F6]/10 text-[#3B82F6] text-sm font-medium rounded-full mb-4">{article?.category ?? 'Decision Case'}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Closed Is Not Collected</h1>
            <p className="text-xl text-gray-400">Closed is not collected. Closed means, on the industrial assurance spine, the named period for that named entity and system of record is formally closed as a books close: cut-off locked, residual mismatches from that reconciliation cleared or carried with a signed exception, and a named controller or CFO close attestation exists for that period — the closed the successor-spine Reconciled Is Not Closed already names — evidenced by close package with named entity / period / cutoff / exception / attestor roles, named close criteria met (reconciliation package cited, the cut-off locked stated, residual mismatches cleared or carried with a signed exception stated, the named controller or CFO close attestation stated), dates, and an unbroken trail from the reconciliation evidence to that close evidence — not the slide from &quot;it is reconciled / the bank rec signed&quot; to &quot;the period is closed,&quot; not a reconciliation worksheet alone, not a sentence that the books will close after the bank rec, not a dashboard period-end tile, not an email saying books are closed, not a work-order or incident closed, and not treating the reconciliation as automatic close. Collected means that named receivable / billed amount for that named counterparty and period has actually converted to cash in the named bank account with an unbroken collection trail (payment received, applied, and banked) a controller can prove — evidenced by collection package with named entity / counterparty / period / receivable / bank / applicator / controller roles, named collection criteria met (close package cited, the named receivable or billed amount stated, the named counterparty stated, the named period stated, payment received stated, payment applied stated, payment banked in the named bank account stated), dates, and an unbroken trail from the close evidence to that collection evidence — not the slide from &quot;the period is closed / books closed&quot; to &quot;cash is collected,&quot; not an AR aging line, not a close attestation, not &quot;we expect to collect,&quot; not a dashboard tile that says collected, and not treating the period close as automatic collection. Closed is not collected. A firm can be closed and still not collected (the named period for that named entity and system of record is formally closed as a books close while that named receivable / billed amount for that named counterparty and period has not actually converted to cash in the named bank account with an unbroken collection trail a controller can prove). A firm can claim collection theater and still not be closed (a cash story without the named period for that named entity and system of record formally closed as a books close). A collection claim alone is not proof the named close evidence was on the file. A close package alone is not collection of that closed successor outcome. Close evidence alone is not collection of that closed successor outcome. A close attestation is not cash collected. An AR aging line is not this collected. A verbal &quot;cash is collected&quot; alone is neither. Refuse the slide from &quot;the period is closed / books closed&quot; to &quot;cash is collected.&quot; This split is closed versus collected. Keep this closed distinct from the successor-spine Reconciled Is Not Closed. Keep this closed distinct from the filing-spine Reconciled Is Not Closed and from Closed Is Not Collected. Keep this collected distinct from the filing-spine Closed Is Not Collected and from Collected Is Not Recognized. Keep this closed distinct from the work-order or incident closed in Closed Is Not Resolved. Keep reconciled distinct from closed and from collected. This essay does not give that closed a new meaning. This essay does not rewrite that thesis. This essay does not open a successor route for Recoverable Is Not Assured. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. This essay does not recreate the binding-to-transferable successor loop. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. This essay does not collapse closed into collected. This essay does not collapse collected into closed. This closed is a period/books close.</p>
          </header>

          <p>Closed is not collected. A firm can be closed and still not collected (the named period for that named entity and system of record is formally closed as a books close while that named receivable / billed amount for that named counterparty and period has not actually converted to cash in the named bank account with an unbroken collection trail a controller can prove). A firm can claim collection theater and still not be closed (a cash story without the named period for that named entity and system of record formally closed as a books close). A close package alone is not collection of that closed successor outcome. Close evidence alone is not collection of that closed successor outcome. A collection claim alone is not proof the named close evidence was on the file. A close attestation is not cash collected. An AR aging line is not this collected. A verbal &quot;cash is collected&quot; alone is neither. Refuse the slide from &quot;the period is closed / books closed&quot; to &quot;cash is collected.&quot; This split is closed versus collected. Keep this closed distinct from the successor-spine Reconciled Is Not Closed. Keep reconciled distinct from closed and from collected. This essay does not rewrite that thesis. This essay does not give that closed a new meaning. This essay does not open a successor route for Recoverable Is Not Assured. The successor route for Recoverable Is Not Assured is closed. This closed is a period/books close. It is not the work-order or incident closed in Closed Is Not Resolved.</p>

          <p>False confidence here is a close attestation treated as if that named receivable / billed amount had converted to cash in the named bank account, or a claim that the period is closed so cash is collected treated as proof the named close evidence was on the file. Evidence from the plant beats the close record when the record is being used as collected. Evidence from the plant beats the collection claim when the claim is being used as proof the named close was on the file. Evidence from the plant beats the note. A practice record that says closed is collected is not shown collected. Sync refuses to pretend closed or collected is a status light. Sync does not measure period close. Sync does not measure collection. Sync does not measure period close for the customer. Sync does not measure collection for the customer. Sync does not measure period close or collection for the customer. Sync does not close the books for the customer. Sync does not collect the receivable for the customer. Sync does not deem collected for the customer. Sync does not deem closed for the customer. Sync may surface a close record or a collection record beside Evidence, Verification, and the closed outcome. Surfacing is still a read. The closed outcome in that sentence is the Decision Case outcome record. It is not this closed, and it is not this collected. Sync must not auto-close the books or auto-collect. Sync must not auto-close the books. Sync must not auto-collect. Sync must not treat closed as collected as Learning credit. Recommend is not authorize. Direct plant execute stays off. CMMS write-back is not a live product path. Billing write-back is not a live product path.</p>

          <p>The chain this refusal sits on is already fixed. Judgment is not authority. Authority is not accountability. Accountability is not ownership. Ownership is not control. Control is not closure. Closure is not complete. Complete is not accepted. Accepted is not verified. Verified is not authorized. Authorized is not executed. Executed is not closed. Closed is not resolved. Resolved is not proven. Proven is not trusted. Trusted is not adopted. Adopted is not sustained. Sustained is not scaled. Scaled is not compounded. Compounded is not owned. Owned is not governed. Governed is not transferable. Transferable is not rehearsed. Rehearsed is not recoverable. Recoverable is not assured. Assured is not certified. Certified is not insured. Insured is not covered. Covered is not paid. Paid is not settled. Settled is not booked. Booked is not reconciled. Reconciled is not closed. Closed is not collected. Collected is not recognized. Recognized is not reported. Reported is not audited. Audited is not filed. Filed is not accepted. Accepted is not posted. Posted is not effective. Effective is not binding. Binding is not enforced. Enforced is not remediated. Remediated is not released. Released is not recorded. Recorded is not cleared. Cleared is not closed. Closed is not delivered. Delivered is not operated. Operated is not sustained. Sustained is not assured. Assured is not guaranteed. Guaranteed is not collectible. Collectible is not applied. Applied is not restored. Restored is not accepted. Accepted is not sustained. Sustained is not transferable. Transferable is not binding. Binding is not enforced. Closed is not collected. That sentence, on the industrial assurance spine, is this refusal. Collected is not recognized is the next refusal on this industrial assurance spine. Read it at /insights/successor-collected-is-not-recognized. This essay does not rewrite that thesis. This essay does not give that recognized a new meaning. Recognized is not reported is the next sentence on the filing spine. Forward reading stays at that filing essay. The next successor route for Recognized Is Not Reported may be named in prose only. This essay does not implement that page. Reconciled is not closed is the prior sentence on this industrial assurance spine. This essay does not rewrite that thesis. This essay does not give that closed a new meaning. Booked is not reconciled is the prior sentence before that on this industrial assurance spine. This essay does not rewrite that thesis. This essay does not give that reconciled a new meaning. Settled is not booked is the prior sentence before that on this industrial assurance spine. This essay does not rewrite that thesis. This essay does not give that booked a new meaning. Paid is not settled is the prior sentence before that on this industrial assurance spine. This essay does not rewrite that thesis. This essay does not give that settled a new meaning. Covered is not paid is the prior sentence before that on this industrial assurance spine. This essay does not rewrite that thesis. This essay does not give that paid a new meaning. Insured is not covered is the prior sentence before that on this industrial assurance spine. This essay does not rewrite that thesis. This essay does not give that covered a new meaning. Certified is not insured is the prior sentence before that on this industrial assurance spine. This essay does not rewrite that thesis. This essay does not give that insured a new meaning. Recoverable is not assured is the prior sentence on the filing spine. This essay does not open a successor route for Recoverable Is Not Assured. That successor route is closed. Assured is not certified, on the successor spine and on the filing spine, is a prior certified and a different filing certified. This essay does not rewrite that thesis. This essay does not give that certified a new meaning. Guaranteed is not collectible through accepted is not sustained is a finished successor loop. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. Binding is not enforced through transferable is not binding is a finished successor loop. This essay does not recreate the binding-to-transferable successor loop. Sustained is not scaled through transferable is not rehearsed, stopping before a successor for rehearsed is not recoverable, is a finished successor loop. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. This essay does not claim a successor route for Rehearsed Is Not Recoverable. None of those sentences is this refusal. This refusal is the named period for that named entity and system of record formally closed as a books close, versus that named receivable / billed amount for that named counterparty and period actually converted to cash in the named bank account with an unbroken collection trail (payment received, applied, and banked) a controller can prove. A close attestation is not cash collected. This closed is a period/books close. It is not the work-order or incident closed in Closed Is Not Resolved. Keep reconciled distinct from closed and from collected.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The closed practice is not the collected practice</h2>

          <p>The problem is a close record treated as if that named receivable / billed amount had converted to cash in the named bank account, or a collection claim treated as if the named period were formally closed as a books close under the same evidence bar. The cut-off can be locked. Residual mismatches can be cleared or carried with a signed exception. The named controller or CFO close attestation can exist. The chat can say the books are closed. The close package can be signed. The dashboard can be green. The named receivable was never received. The payment was never applied. The cash was never banked in the named bank account. No trail runs from the close evidence to that collection evidence. A verbal &quot;cash is collected&quot; alone is neither. Close theater is not collection. Collection theater is not a books close of that named period. Refuse the slide from &quot;the period is closed / books closed&quot; to &quot;cash is collected.&quot; A close attestation is not cash collected. An AR aging line is not this collected.</p>

          <p>One file can hold a close record. The named period for that named entity and system of record is formally closed as a books close, with an unbroken trail from the reconciliation evidence to that close evidence. The same file can still lack a collection record. Under that same close, that closed outcome is not collected until the collection mechanics are on the file: a collection package with named entity / counterparty / period / receivable / bank / applicator / controller roles, named collection criteria met (close package cited, the named receivable or billed amount stated, the named counterparty stated, the named period stated, payment received stated, payment applied stated, payment banked in the named bank account stated), dates, and an unbroken trail from the close evidence to that collection evidence. A verbal &quot;cash is collected,&quot; a close attestation, an AR aging line, a sentence that we expect to collect, a dashboard tile that says collected, or a work-order or incident closed is not collection of that closed successor outcome.</p>

          <p>Closed, in this essay, means the named period for that named entity and system of record is formally closed as a books close: cut-off locked, residual mismatches from that reconciliation cleared or carried with a signed exception, and a named controller or CFO close attestation exists for that period, trailed from the reconciliation evidence. This essay does not give that closed a new meaning inside Reconciled Is Not Closed, on the successor spine or on the filing spine. The successor essay keeps the period/books close it already names. The filing essay keeps the period close for the named entity and account it already names. Collected, in this essay, means that named receivable / billed amount for that named counterparty and period has actually converted to cash in the named bank account with an unbroken collection trail (payment received, applied, and banked) a controller can prove. The two records meet only on an unbroken trail from the close evidence to the collection evidence. A close attestation treated as cash collected is not that collection. A close attestation is not cash collected. This closed is a period/books close. It is not the work-order or incident closed in Closed Is Not Resolved.</p>

          <p>On Tuesday the question splits. The close file answers whether the named period is formally closed as a books close: the cut-off locked, residual mismatches cleared or carried with a signed exception, and the named controller or CFO close attestation, with the reconciliation package cited, dates, and a trail from that reconciliation evidence to that close. The collection file answers whether that named receivable / billed amount has converted to cash: the named counterparty, the named period, payment received, payment applied, and payment banked in the named bank account, with the close package cited, dates, and a trail from that close evidence to that collection. A slide that says cash is collected because the period is closed, or that the books are closed because we expect to collect, answers neither the collection criteria nor the trail. Collection theater is not that trail. A close attestation is not that trail. An AR aging line is not that trail. A work-order or incident closed is not that trail.</p>

          <p>
            <Link
              href="/insights/successor-reconciled-is-not-closed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Reconciled Is Not Closed</Link>{' '} on the successor spine is prior reading. Read it at /insights/successor-reconciled-is-not-closed. Reconciled, there, means those booked facts have been independently matched, explained, and cleared against the external or control source (bank, insurer, counterparty, inventory, or control report) so residual mismatches are identified and disposed. Closed, there, means the named period for that named entity and system of record is formally closed as a books close: cut-off locked, residual mismatches from that reconciliation cleared or carried with a signed exception, and a named controller or CFO close attestation exists for that period. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This essay does not rewrite that thesis. This essay does not give that closed a new meaning. This essay does not give that reconciled a new meaning. Keep this closed distinct from the successor-spine Reconciled Is Not Closed. Keep reconciled distinct from closed and from collected. Collection of that named receivable is not that period close, and it is not a new meaning of that closed. Collected is the next refusal on this industrial assurance spine. A close attestation is not cash collected.</p>

          <p>
            <Link
              href="/insights/reconciled-is-not-closed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Reconciled Is Not Closed</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/reconciled-is-not-closed. Reconciled, there, means that named booked amount for that named period and account matches the supporting bank, subledger, or counterparty evidence with an unbroken reconciliation trail a controller can sign (differences explained or cleared, cut-off dated) — not a GL line alone. Closed, there, means the named period&apos;s books for that named entity and account are formally closed: cut-off locked, reconciling items for that named amount cleared or carried with a signed exception, and a named controller or CFO close attestation exists for that period. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This essay does not rewrite that thesis. Keep this closed distinct from the filing-spine Reconciled Is Not Closed and from Closed Is Not Collected. This closed is the period/books close the successor-spine Reconciled Is Not Closed already names. It is not a rewrite of that filing period close. The filing essay stays at /insights/reconciled-is-not-closed.</p>

          <p>
            <Link
              href="/insights/successor-booked-is-not-reconciled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Booked Is Not Reconciled</Link>{' '} on the successor spine is earlier prior reading. Read it at /insights/successor-booked-is-not-reconciled. Booked, there, means the economic and operational facts are correctly recognized in the system of record (ledger, reserve, AR/AP, or ops books) with the right period, entity, and controls. Reconciled, there, means those booked facts have been independently matched, explained, and cleared against the external or control source so residual mismatches are identified and disposed. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This essay does not rewrite that thesis. This essay does not give that reconciled a new meaning. This essay does not give that booked a new meaning. Keep reconciled distinct from closed and from collected. Cash collected is not that independent match.</p>

          <p>
            <Link
              href="/insights/booked-is-not-reconciled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Booked Is Not Reconciled</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/booked-is-not-reconciled. Booked, there, means the indemnity, recovery, or settlement amount is recognized on the named entity&apos;s financials for a named period and account. Reconciled, there, means that named booked amount for that named period and account matches the supporting bank, subledger, or counterparty evidence with an unbroken reconciliation trail a controller can sign. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This essay does not rewrite that thesis. This collected is that named receivable / billed amount converted to cash in the named bank account with an unbroken collection trail a controller can prove. It is not a rewrite of that filing controller-signed match. The filing essay stays at /insights/booked-is-not-reconciled.</p>

          <p>
            <Link
              href="/insights/successor-settled-is-not-booked"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Settled Is Not Booked</Link>{' '} on the successor spine is earlier prior reading. Read it at /insights/successor-settled-is-not-booked. Settled, there, is the claim fully and finally resolved (release, agreement, or binding disposition) so residual liability / reopen risk is closed, trailed from the payment evidence. Booked, there, means the economic and operational facts are correctly recognized in the system of record with the right period, entity, and controls. This essay does not collapse into Settled Is Not Booked. This essay does not rewrite Settled Is Not Booked. This essay does not rewrite that thesis. This essay does not give that booked a new meaning. This essay does not give that settled a new meaning. Keep reconciled distinct from closed and from collected. Cash collected is not that recognition.</p>

          <p>
            <Link
              href="/insights/settled-is-not-booked"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Settled Is Not Booked</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/settled-is-not-booked. Settled, there, means the named claim or event is finally closed with a written release. Booked, there, means the indemnity, recovery, or settlement amount is recognized on the named entity&apos;s financials for a named period and account. This essay does not collapse into Settled Is Not Booked. This essay does not rewrite Settled Is Not Booked. This essay does not rewrite that thesis. This closed is the named period for that named entity and system of record formally closed as a books close. It is not a rewrite of that filing recognition of indemnity, recovery, or settlement. The filing essay stays at /insights/settled-is-not-booked.</p>

          <p>
            <Link
              href="/insights/successor-paid-is-not-settled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Paid Is Not Settled</Link>{' '} on the successor spine is earlier prior reading. Read it at /insights/successor-paid-is-not-settled. Paid, there, is cash or indemnity actually disbursed on an accepted claim under that coverage, trailed from the coverage evidence. Settled, there, means the claim is fully and finally resolved so residual liability / reopen risk is closed. This essay does not collapse into Paid Is Not Settled. This essay does not rewrite Paid Is Not Settled. This essay does not rewrite that thesis. This essay does not give that settled a new meaning. This essay does not give that paid a new meaning. Keep reconciled distinct from closed and from collected. Cash collected is not that final disposition.</p>

          <p>
            <Link
              href="/insights/paid-is-not-settled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Paid Is Not Settled</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/paid-is-not-settled. Paid, there, means indemnity or settlement funds have actually moved for that named covered event. Settled, there, means the named claim or event is finally closed with a written release. This essay does not collapse into Paid Is Not Settled. This essay does not rewrite Paid Is Not Settled. This essay does not rewrite that thesis. This collected is cash received, applied, and banked for that named receivable. It is not a rewrite of that filing movement of indemnity or settlement funds. The filing essay stays at /insights/paid-is-not-settled.</p>

          <p>
            <Link
              href="/insights/successor-covered-is-not-paid"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Covered Is Not Paid</Link>{' '} on the successor spine is earlier prior reading. Read it at /insights/successor-covered-is-not-paid. Covered, there, is the loss actually inside the named policy, binder, or endorsement for that risk and period, shown by policy language matching the loss, trailed from the insurance evidence. Paid, there, means cash or indemnity actually disbursed on an accepted claim under that coverage. This essay does not collapse into Covered Is Not Paid. This essay does not rewrite Covered Is Not Paid. This essay does not rewrite that thesis. This essay does not give that paid a new meaning. This essay does not give that covered a new meaning. Keep reconciled distinct from closed and from collected. Cash collected is not that disbursement.</p>

          <p>
            <Link
              href="/insights/covered-is-not-paid"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Covered Is Not Paid</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/covered-is-not-paid. Covered, there, means the named failure, loss, location, asset class, cause, and window are inside the policy&apos;s responding grant of coverage. Paid, there, means indemnity or settlement funds have actually moved for that named covered event. This essay does not collapse into Covered Is Not Paid. This essay does not rewrite Covered Is Not Paid. This essay does not rewrite that thesis. This closed is a period/books close. It is not a rewrite of that filing movement of indemnity or settlement funds. The filing essay stays at /insights/covered-is-not-paid.</p>

          <p>
            <Link
              href="/insights/successor-insured-is-not-covered"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Insured Is Not Covered</Link>{' '} on the successor spine is earlier prior reading. Read it at /insights/successor-insured-is-not-covered. Insured, there, is a transferred risk position with a named carrier, coverage trigger, and claim path, trailed from the certification evidence. Covered, there, means that under that named policy, binder, or endorsement for that named risk and period, the loss event actually falls inside the granted coverage grant. This essay does not collapse into Insured Is Not Covered. This essay does not rewrite Insured Is Not Covered. This essay does not rewrite that thesis. This essay does not give that covered a new meaning. Keep reconciled distinct from closed and from collected. Cash collected is not that coverage grant.</p>

          <p>
            <Link
              href="/insights/insured-is-not-covered"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Insured Is Not Covered</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/insured-is-not-covered. Insured, there, means a named, in-force indemnity or coverage instrument exists. Covered, there, means the named failure, loss, location, asset class, cause, and window are inside the responding grant of coverage. This essay does not collapse into Insured Is Not Covered. This essay does not rewrite Insured Is Not Covered. This essay does not rewrite that thesis. Keep reconciled distinct from closed and from collected. This closed is a period/books close. It is not a rewrite of that filing responding grant. The filing essay stays at /insights/insured-is-not-covered.</p>

          <p>
            <Link
              href="/insights/successor-certified-is-not-insured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Certified Is Not Insured</Link>{' '} on the successor spine is earlier prior reading. Read it at /insights/successor-certified-is-not-insured. Certified, there, is an external or formal certification artifact that can be independently verified, trailed from the assurance evidence. Insured, there, is a transferred risk position with a named carrier, coverage trigger, and claim path. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured. This essay does not rewrite that thesis. This essay does not give that insured a new meaning. Keep reconciled distinct from closed and from collected. Cash collected is not that transferred risk position.</p>

          <p>
            <Link
              href="/insights/certified-is-not-insured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Certified Is Not Insured</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/certified-is-not-insured. Certified, there, means a third-party or internal program stamp that a recovery or continuity program exists or once met a named checklist. Insured, there, means a named, in-force indemnity or coverage instrument that actually responds when recovery fails or loss lands. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured. This essay does not rewrite that thesis. This closed is a period/books close. It is not a rewrite of that filing indemnity instrument. The filing essay stays at /insights/certified-is-not-insured.</p>

          <p>
            <Link
              href="/insights/successor-assured-is-not-certified"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Assured Is Not Certified</Link>{' '} on the successor spine is earlier prior reading. Read it at /insights/successor-assured-is-not-certified. Assured, there, is a named assurance claim with evidence boundaries (what is claimed, by whom, under what scope). Certified, there, is an external or formal certification artifact that can be independently verified. This essay does not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not Certified. This essay does not rewrite that thesis. This essay does not give that certified a new meaning. Keep reconciled distinct from closed and from collected. Cash collected is not that certification artifact.</p>

          <p>
            <Link
              href="/insights/assured-is-not-certified"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Assured Is Not Certified</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/assured-is-not-certified. Assured, there, means independent, recurring verification that recovery capability still holds under the current named owner, tooling rights, exception paths, and evidence continuity. Certified, there, means a third-party or internal program stamp that a recovery or continuity program exists or once met a named checklist. This essay does not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not Certified. This essay does not rewrite that thesis. Keep reconciled distinct from closed and from collected. This closed is a period/books close. It is not a rewrite of that filing program stamp. The filing essay stays at /insights/assured-is-not-certified.</p>

          <p>
            <Link
              href="/insights/recoverable-is-not-assured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Recoverable Is Not Assured</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/recoverable-is-not-assured. Recoverable, there, means after a real disruption, or a named recovery drill that actually breaks the live path, the named successor restores the governed owned compounding system to a named service level inside a named RTO/RPO with evidence continuity still holding. Assured, there, means independent, recurring verification that recovery capability still holds under the current named owner. This essay does not collapse into Recoverable Is Not Assured. This essay does not rewrite Recoverable Is Not Assured. This essay does not rewrite that thesis. This essay does not open a successor route for Recoverable Is Not Assured. The successor route for Recoverable Is Not Assured is closed. This closed is a period/books close. It is not a rewrite of that recovery-capability assurance. The live filing-spine essay stays at /insights/recoverable-is-not-assured.</p>

          <p>
            <Link
              href="/insights/closed-is-not-collected"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Closed Is Not Collected</Link>{' '} on the filing spine shares this title and must stay a different refusal. Read it at /insights/closed-is-not-collected. Closed, there, means the named period&apos;s books for that named entity and account are formally closed: cut-off locked, reconciling items for that named amount cleared or carried with a signed exception, and a named controller or CFO close attestation exists for that period. Collected, there, means cash for that named closed receivable, invoice, or obligation has actually hit the named bank account or named cleared settlement rail in the named amount and currency, with a payment application trail tying the cash to the named closed item. This essay does not collapse into Closed Is Not Collected. This essay does not rewrite Closed Is Not Collected. This essay does not rewrite that thesis. This closed is the named period for that named entity and system of record formally closed as a books close — the closed the successor-spine Reconciled Is Not Closed already names — not a rewrite of that filing period close for the named entity and account. This collected is that named receivable / billed amount for that named counterparty and period actually converted to cash in the named bank account with an unbroken collection trail (payment received, applied, and banked) a controller can prove — not a rewrite of that filing cash hit on the named closed item. This closed is a period/books close. The filing essay stays at /insights/closed-is-not-collected. This essay is the industrial assurance spine, registered beside it so the two refusals keep separate evidence trails.</p>

          <p>
            <Link
              href="/insights/collected-is-not-recognized"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Collected Is Not Recognized</Link>{' '} is forward reading on the filing spine. Read it at /insights/collected-is-not-recognized. Collected, there, means cash for that named closed receivable, invoice, or obligation has actually hit the named bank account or named cleared settlement rail in the named amount and currency, with a payment application trail tying the cash to the named closed item. Recognized, there, means that named amount is recognized as earned revenue, or the named contract earning event, for that named entity and period under the named acceptance, milestone, or performance obligation rule, with a named controller or revenue attestation. This essay does not collapse into Collected Is Not Recognized. This essay does not rewrite Collected Is Not Recognized. This essay does not rewrite that thesis. This collected is that named receivable / billed amount converted to cash in the named bank account with an unbroken collection trail a controller can prove. It is not a rewrite of that filing cash hit, and it is not revenue recognition. The live filing-spine essay stays at /insights/collected-is-not-recognized. The next refusal on this industrial assurance spine is{' '}
            <Link
              href="/insights/successor-collected-is-not-recognized"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Collected Is Not Recognized</Link>. Read it at /insights/successor-collected-is-not-recognized. This essay does not rewrite that thesis. This essay does not give that recognized a new meaning. The next successor route for Recognized Is Not Reported may be opened in prose only at /insights/successor-recognized-is-not-reported. This essay does not implement that page.</p>

          <p>
            <Link
              href="/insights/closed-is-not-resolved"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Closed Is Not Resolved</Link>{' '} is a different closed. Read it at /insights/closed-is-not-resolved. Closed, there, is a named human or named accountable role formally closing the case, work order, or exception under a named closure window — administrative closure of the record, not proof the underlying defect, risk, or exception is gone. This essay does not collapse into Closed Is Not Resolved. This essay does not rewrite Closed Is Not Resolved. This essay does not rewrite that thesis. This closed is a period/books close. Keep this closed distinct from the work-order or incident closed in Closed Is Not Resolved. A closed ticket is not this period close. A work-order closed is not a named controller or CFO close attestation for the named period. The filing essay stays at /insights/closed-is-not-resolved.</p>

          <p>
            <Link
              href="/insights/successor-assured-is-not-guaranteed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Assured Is Not Guaranteed</Link>{' '} sits earlier on the successor control spine and must stay distinct. Assured is not guaranteed. That essay separates instrument-required assurance that the sustained successor-obligation outcome will continue to meet the named successor conditions for the next named assurance window from instrument-required guarantee that undertakes that assured successor-obligation outcome. This essay does not collapse into Assured Is Not Guaranteed. This essay does not rewrite Assured Is Not Guaranteed. This essay does not rewrite that thesis. This essay does not give that closed a new meaning. Guarantee evidence on that spine is not this collection.</p>

          <p>
            <Link
              href="/insights/successor-sustained-is-not-assured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Sustained Is Not Assured</Link>{' '} sits earlier on the successor control spine and must stay distinct. Sustained is not assured. That essay separates the continued-force hold of an operated successor-obligation outcome from instrument-required assurance for the next named assurance window. This essay does not collapse into Sustained Is Not Assured. This essay does not rewrite Sustained Is Not Assured. This essay does not rewrite that thesis. Assurance evidence on that spine is not this collection.</p>

          <p>
            <Link
              href="/insights/successor-guaranteed-is-not-collectible"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Guaranteed Is Not Collectible</Link>{' '} opens a finished successor loop that runs from guaranteed through collectible and on to sustained. This essay does not collapse into Guaranteed Is Not Collectible. This essay does not rewrite Guaranteed Is Not Collectible. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. Collectible recovery is not this collection.</p>

          <p>
            <Link
              href="/insights/successor-accepted-is-not-sustained"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Accepted Is Not Sustained</Link>{' '} closes that same guaranteed-to-collectible-to-sustained successor loop. Accepted is not sustained. This essay does not collapse into Accepted Is Not Sustained. This essay does not rewrite Accepted Is Not Sustained. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. That sustainment is not cash collected.</p>

          <p>
            <Link
              href="/insights/successor-binding-is-not-enforced"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Binding Is Not Enforced</Link>{' '} belongs to the finished binding-to-transferable successor loop. Binding is not enforced. This essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced. This essay does not recreate the binding-to-transferable successor loop. This essay does not restate Binding Is Not Enforced as this claim. Enforcement evidence is not this collection.</p>

          <p>
            <Link
              href="/insights/successor-transferable-is-not-binding"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Transferable Is Not Binding</Link>{' '} closes that binding-to-transferable successor loop. Transferable is not binding. This essay does not collapse into Transferable Is Not Binding. This essay does not rewrite Transferable Is Not Binding. This essay does not recreate the binding-to-transferable successor loop. This essay does not restate Transferable Is Not Binding as this claim. A transferable packet is not this closed, and it is not this collected.</p>

          <p>
            <Link
              href="/insights/successor-sustained-is-not-scaled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Sustained Is Not Scaled</Link>{' '} opens the finished sustained-to-scaled-to-rehearsed successor loop. This essay does not collapse into Sustained Is Not Scaled. This essay does not rewrite Sustained Is Not Scaled. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. Scale of a sustained outcome is not this collection.</p>

          <p>
            <Link
              href="/insights/successor-transferable-is-not-rehearsed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Transferable Is Not Rehearsed</Link>{' '} is the latest essay on that finished scale loop. Transferable is not rehearsed. This essay does not collapse into Transferable Is Not Rehearsed. This essay does not rewrite Transferable Is Not Rehearsed. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. This essay does not claim a successor route for Rehearsed Is Not Recoverable. A rehearsed transfer is not this collection.</p>

          <p>
            <Link
              href="/insights/rehearsed-is-not-recoverable"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Rehearsed Is Not Recoverable</Link>{' '} on the filing spine is where that scale order stops for successor routes. This essay does not collapse into Rehearsed Is Not Recoverable. This essay does not rewrite Rehearsed Is Not Recoverable. This essay does not claim a successor route for Rehearsed Is Not Recoverable. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. A restore inside a named RTO/RPO is not this collection. The live filing-spine essay stays at /insights/rehearsed-is-not-recoverable.</p>

          <p>
            <Link
              href="/insights/guaranteed-is-not-collectible"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Guaranteed Is Not Collectible</Link>{' '} on the filing spine is a different URL. A binding guarantee is not collectible recovery, and neither record is this collection. This essay does not collapse into Guaranteed Is Not Collectible. This essay does not rewrite that thesis. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. The live filing-spine essay stays at /insights/guaranteed-is-not-collectible.</p>

          <p>
            <Link
              href="/insights/sustained-is-not-assured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Sustained Is Not Assured</Link>{' '} on the filing spine is forward assurance of a named asset for the next period, load, or duty window. This essay does not collapse into that filing-spine Sustained Is Not Assured. This essay does not rewrite that thesis. Forward assurance is not that named receivable converted to cash in the named bank account.</p>

          <p>
            <Link
              href="/insights/transferable-is-not-binding"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Transferable Is Not Binding</Link>{' '} on the filing spine is a later refusal whose successor loop is already completed. This essay does not collapse into Transferable Is Not Binding. This essay does not rewrite Transferable Is Not Binding. This essay does not recreate the binding-to-transferable successor loop. The live filing-spine essay stays at /insights/transferable-is-not-binding.</p>

          <p>
            <Link
              href="/insights/binding-is-not-enforced"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Binding Is Not Enforced</Link>{' '} on the filing spine is bind mechanics versus named demand, default, remedy, or enforcement. This essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced. This essay does not restate Binding Is Not Enforced as this claim. A filed demand is not cash collected. The live filing-spine essay stays at /insights/binding-is-not-enforced.</p>

          <p>A filing counterpart is not this closed. A filing period close for a named entity and account is not this closed. A filing cash hit on a named closed item is not this collected. A work-order or incident closed is not this closed. Revenue recognition is not this collected. An AR aging line is not this collected. A verbal &quot;the period is closed&quot; is not this collected. A close attestation treated as cash collected is not this collected. A close package alone is not this collected. A sentence that we expect to collect is not this collected. A dashboard tile that says collected is not this collected. A chat note that says cash is collected is not this collected. A status light that never names payment received, payment applied, or payment banked in the named bank account is not this collected. Collection theater is not that named receivable / billed amount actually converted to cash in the named bank account with an unbroken collection trail a controller can prove. Close theater is not the named period for that named entity and system of record formally closed as a books close. The named bank account has to be the account that received, applied, and banked that named receivable. Collection of a different counterparty, a different period, a different receivable, or of a close package the record does not cite is not this collected. Refuse the slide from &quot;the period is closed / books closed&quot; to &quot;cash is collected.&quot; A close attestation is not cash collected. Keep reconciled distinct from closed and from collected. This closed is a period/books close.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What a collection record is allowed to be</h2>

          <p>Evidence may cite a close record when the source of that close is named, and when the citation names the same entity, the same channel, and the same outcome the collection record is about. The citation still has to show the unbroken trail from that close evidence to the collection evidence, with named entity / counterparty / period / receivable / bank / applicator / controller roles, named collection criteria met (close package cited, the named receivable or billed amount stated, the named counterparty stated, the named period stated, payment received stated, payment applied stated, payment banked in the named bank account stated), dates, and the collection the instrument names. A citation of a close attestation treated as cash collected, or of a matter someone calls collected, without the collection mechanics, is not this collected. An AR aging line is not collection. A sentence that we expect to collect is not collection. A work-order or incident closed is not collection.</p>
          <p>A collection record is allowed to be a collection package with named entity / counterparty / period / receivable / bank / applicator / controller roles, named collection criteria met, and dates, with a trail from the close evidence to that collection: the close package cited against the named period formally closed as a books close, the named receivable or billed amount stated, the named counterparty stated, the named period stated, payment received stated, payment applied stated, payment banked in the named bank account stated, and other named collection evidence the instrument requires so the same bar survives the cash. It is not allowed to be the slide from &quot;the period is closed / books closed&quot; to &quot;cash is collected.&quot; It is not allowed to be an AR aging line. It is not allowed to be a close attestation. It is not allowed to be &quot;we expect to collect.&quot; It is not allowed to be a dashboard tile that says collected. It is not allowed to be a work-order or incident closed. It is not allowed to be a verbal &quot;cash is collected.&quot; A close attestation is not cash collected. A close package alone is not collection of that closed successor outcome. This closed is a period/books close.</p>
          <p>The claim the collection record names has to be the claim the close record holds: the named period, the cut-off locked, residual mismatches cleared or carried with a signed exception, and the named controller or CFO close attestation. Collection for a different receivable, a different counterparty, a different period, or a window the instrument does not name is not this collected. The entity, the counterparty, the period, the named bank account, the cited close package, and the dates have to match the close evidence. A record that floats free of that trail is close theater, or it is collection theater, and it is not this collected. A verbal &quot;the period is closed&quot; is not this closed. Closed is not collected.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named closed is not collected</h2>

          <p>Named closed is not collected. The closed practice is not the collected practice. A close record answers whether the named period for that named entity and system of record is formally closed as a books close, and a trail from the reconciliation evidence to that close. A collection record answers whether that named receivable / billed amount for that named counterparty and period has actually converted to cash in the named bank account with an unbroken collection trail a controller can prove. Closed is not collected.</p>
          <p>A claim that the period is closed so cash is collected, while the close trail is missing, is not this collected. A close attestation, an AR aging line, or a verbal &quot;cash is collected&quot; while required close evidence is missing is collection theater, and it is not this closed. A collection claim alone is not proof the named close evidence was on the file. A verbal &quot;cash is collected&quot; alone is neither. Close evidence alone is not collection of that closed successor outcome. A firm can hold a cash story and still not have the named period formally closed as a books close. A firm can hold that period close and still lack payment received, payment applied, and payment banked in the named bank account.</p>
          <p>A close attestation with no collection evidence behind it is not this collected. The collection has to trail back to the close evidence, and the close evidence has to show the named period formally closed as a books close. A collection package that floats free of that trail is not this collected. What changes Tuesday is the refusal to let one record wear the other record name. Field proof is the named trail with that named receivable converted to cash in the named bank account, not the slide. Closed is not collected. Sync must not auto-close the books or auto-collect. Sync must not treat closed as collected as Learning credit. Recommend is not authorize. Refuse the slide from &quot;the period is closed / books closed&quot; to &quot;cash is collected.&quot; A close attestation is not cash collected. Keep reconciled distinct from closed and from collected. This closed is a period/books close. It is not the work-order or incident closed in Closed Is Not Resolved.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Where the public statement lives</h2>

          <p>Field Manual {fieldManual.version} is the public contents of this loop. Start at the{' '}<Link href="/manuals" className="text-[#3B82F6] hover:text-white transition-colors">manuals index</Link>{' '} or open{' '}<Link href={fieldManualPath()} className="text-[#3B82F6] hover:text-white transition-colors">{fieldManual.title}</Link>{' '} directly. Evidence may hold the close record or the collection record that was shown. Human decision may hold who accepted the consequence. Verification may hold the named observation. Learning may hold achieved, not_achieved, or inconclusive, with measured notes — the measured outcome of the case, not this essay definition of collected, and not closed used as collected. The{' '}<Link
              href={fieldManualPath(honestyChapter.slug)}
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Honesty boundaries</Link>{' '} keep this edition from treating a close record as successor collection. Later editions can deepen a chapter. The spine stays in this order.</p>

          <div className="bg-[#1E293B]/50 border border-[#334155] rounded-xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Decision Case spine</h3>
            <ol className="space-y-3">{spineChapters.map((chapter) => (<li key={chapter.slug} className="flex items-start gap-3">
                  <span className="font-mono text-sm text-[#3B82F6]">{chapter.number}</span>
                  <Link
                    href={fieldManualPath(chapter.slug)}
                    className="text-white hover:text-[#3B82F6] transition-colors"
                  >{chapter.title}</Link>
                </li>))}</ol>
            <p className="text-gray-400 mt-6 mb-0">The order is the public statement. The essay is one refusal inside it. Read{' '}<Link
                href={fieldManualPath(honestyChapter.slug)}
                className="text-[#3B82F6] hover:text-white transition-colors"
              >{honestyChapter.title}</Link>.</p>
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What this article is not claiming</h2>

          <p>This is an essay about the Decision Case order, not a customer case study. It names no plant, states no savings figure, states no price, and claims no prevented failure. It does not claim that closed is collected, that reconciled is closed, that booked is reconciled, that settled is booked, that paid is settled, that covered is paid, that insured is covered, that certified is insured, that assured is certified, that recoverable is assured, that collected is recognized, that guaranteed is collectible, that binding is enforced, that transferable is binding, that sustained is scaled, that transferable is rehearsed, or that rehearsed is recoverable. It does not write a CMMS work order, collect a receivable, close the books, reconcile a booking, book revenue, recognize revenue, or attribute a change in cash, risk, or capacity. Sync does not measure period close. Sync does not measure collection. Sync does not measure period close or collection for the customer. Sync does not deem collected for the customer. Sync does not measure collection for the customer. It does not claim that Sync executes plant work. It does not claim CMMS write-back as a shipped product. It does not claim billing write-back as a shipped product. It does not invent a customer, a price, or a return. It does not open a successor route for Recoverable Is Not Assured. It does not claim a successor route for Rehearsed Is Not Recoverable. The next refusal is Collected Is Not Recognized at /insights/successor-collected-is-not-recognized. It does not implement the next successor page for Recognized Is Not Reported. It does not recreate the guaranteed-to-collectible-to-sustained successor loop. It does not recreate the binding-to-transferable successor loop. It does not recreate the sustained-to-scaled-to-rehearsed successor loop. Recommend is not authorize. Keep reconciled distinct from closed and from collected. This closed is a period/books close. It is not the work-order or incident closed in Closed Is Not Resolved.</p>

          <p>Stage-1 readiness means a signed-in user can complete the Decision Case — question, evidence, recommendation, human decision, action, verification, and learning — and{' '}<Link href={fieldManualPath()} className="text-[#3B82F6] hover:text-white transition-colors">Field Manual {fieldManual.version}</Link>{' '} describes that journey. Walking those steps is not a claim that closed is collected. A{' '}<Link
              href="/reliability-assessment"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Reliability Assessment</Link>{' '} asks whether the records can support a conclusion. A{' '}<Link href="/strategic-pilot" className="text-[#3B82F6] hover:text-white transition-colors">Strategic Pilot</Link>{' '} is a governed proof around one operating decision. The verification chapter records the measured result. The close package does not approve collection of the outcome.</p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">Field Manual {fieldManual.version} states the order and the boundaries. Closed means the named period for that named entity and system of record is formally closed as a books close: cut-off locked, residual mismatches from that reconciliation cleared or carried with a signed exception, and a named controller or CFO close attestation exists for that period. Collected means that named receivable / billed amount for that named counterparty and period has actually converted to cash in the named bank account with an unbroken collection trail (payment received, applied, and banked) a controller can prove. A firm with a close record can still lack collection. A firm with a collection claim can still lack a period close. The Reliability Engineer workspace is where a signed-in Decision Case is completed. A Reliability Assessment is the bounded review when the question is whether the records can support a conclusion. None of those is a claim that Sync collects a closed successor outcome, executes plant work, recognizes revenue, or that CMMS write-back is live, that billing write-back is live, or that self-guided onboarding is a live product path. Surfacing is still a read. Recommend is not authorize. Forward reading on the filing spine remains Collected Is Not Recognized at /insights/collected-is-not-recognized. The next refusal on this industrial assurance spine is{' '}
            <Link
              href="/insights/successor-collected-is-not-recognized"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Collected Is Not Recognized</Link>. Read it at /insights/successor-collected-is-not-recognized. This essay does not rewrite that thesis. This essay does not give that recognized a new meaning. The next successor route for Recognized Is Not Reported may be opened in prose only at /insights/successor-recognized-is-not-reported. This essay does not implement that page. This essay does not open a successor route for Recoverable Is Not Assured. Prior reading stays at successor and filing Reconciled Is Not Closed, and at successor and filing Booked Is Not Reconciled, without rewriting those theses. This essay does not give that closed a new meaning. Keep reconciled distinct from closed and from collected. This closed is a period/books close. It is not the work-order or incident closed in Closed Is Not Resolved.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={fieldManualPath()}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
              >Read Field Manual {fieldManual.version}</Link>
              <a
                href={APP_SETUP_URL}
                className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >Try Reliability Engineer</a>
              <Link
                href="/reliability-assessment"
                className="inline-flex items-center justify-center px-6 py-3 text-[#3B82F6] font-semibold hover:text-white transition-colors"
              >Reliability Assessment</Link>
            </div>
          </div>

          <InsightNextSteps slug="successor-closed-is-not-collected" />
        </motion.article>
      </div>
    </main>
  );
}
