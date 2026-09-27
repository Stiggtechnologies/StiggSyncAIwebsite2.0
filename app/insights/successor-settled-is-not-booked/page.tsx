'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-settled-is-not-booked');

export default function SuccessorSettledIsNotBookedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Settled Is Not Booked</h1>
            <p className="text-xl text-gray-400">Settled is not booked. Settled means, on the industrial assurance spine, the claim is fully and finally resolved (release, agreement, or binding disposition) so residual liability / reopen risk is closed — the settled the successor-spine Paid Is Not Settled already names — evidenced by settlement package with named carrier / claim / parties / release / disposition roles, named settlement criteria met (payment package cited, the release, agreement, or binding disposition stated, residual liability closed stated, reopen risk closed stated), dates, and an unbroken trail from the payment evidence to that settlement evidence — not the slide from &quot;we got paid&quot; to &quot;it is settled / we are done,&quot; not a check cleared, not a partial payment, not a reserve reduced to zero without release, agreement, or binding disposition, not a disbursement treated as finality, and not treating the payment as automatic settlement. Booked means the economic and operational facts are correctly recognized in the system of record (ledger, reserve, AR/AP, or ops books) with the right period, entity, and controls — evidenced by booking package with named entity / period / ledger / reserve / account / control roles, named booking criteria met (settlement package cited, the economic and operational facts stated, the system of record stated, the right period stated, the right entity stated, the controls stated), dates, and an unbroken trail from the settlement evidence to that booking evidence — not the slide from &quot;it is settled / we are done&quot; to &quot;it is booked / the books reflect reality,&quot; not a release treated as a ledger line, not the wrong period, not the wrong entity, not a control that was never applied, not a dashboard tile that says booked, and not treating the settlement as automatic recognition. Settled is not booked. A firm can be settled and still not booked (the claim is fully and finally resolved while the economic and operational facts are not correctly recognized in the system of record with the right period, entity, and controls). A firm can claim booked theater and still not be settled (a books story without the claim fully and finally resolved so residual liability or reopen risk is closed). A booking claim alone is not proof the named settlement evidence was on the file. A settlement package alone is not booking of that settled successor outcome. Settlement evidence alone is not booking of that settled successor outcome. A final disposition is not recognition in the system of record. A verbal &quot;it is booked&quot; alone is neither. Refuse the slide from &quot;it is settled / we are done&quot; to &quot;it is booked / the books reflect reality.&quot; This split is settled versus booked. Keep this settled distinct from the successor-spine Paid Is Not Settled. Keep this settled distinct from the filing-spine Paid Is Not Settled and from Settled Is Not Booked. Keep this booked distinct from the filing-spine Settled Is Not Booked and from Booked Is Not Reconciled. Keep paid distinct from settled and from booked. This essay does not give that settled a new meaning. This essay does not rewrite that thesis. This essay does not open a successor route for Recoverable Is Not Assured. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. This essay does not recreate the binding-to-transferable successor loop. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. This essay does not collapse settled into booked. This essay does not collapse booked into settled.</p>
          </header>

          <p>Settled is not booked. A firm can be settled and still not booked (the claim is fully and finally resolved while the economic and operational facts are not correctly recognized in the system of record with the right period, entity, and controls). A firm can claim booked theater and still not be settled (a books story without the claim fully and finally resolved so residual liability or reopen risk is closed). A settlement package alone is not booking of that settled successor outcome. Settlement evidence alone is not booking of that settled successor outcome. A booking claim alone is not proof the named settlement evidence was on the file. A final disposition is not recognition in the system of record. A verbal &quot;it is booked&quot; alone is neither. Refuse the slide from &quot;it is settled / we are done&quot; to &quot;it is booked / the books reflect reality.&quot; This split is settled versus booked. Keep this settled distinct from the successor-spine Paid Is Not Settled. Keep paid distinct from settled and from booked. This essay does not rewrite that thesis. This essay does not give that settled a new meaning. This essay does not open a successor route for Recoverable Is Not Assured. The successor route for Recoverable Is Not Assured is closed.</p>

          <p>False confidence here is a final disposition treated as if the economic and operational facts were correctly recognized in the system of record, or a claim that it is settled so it is booked and the books reflect reality treated as proof the named settlement evidence was on the file. Evidence from the plant beats the settlement record when the record is being used as booked. Evidence from the plant beats the booking claim when the claim is being used as proof the named settlement was on the file. Evidence from the plant beats the note. A practice record that says settled is booked is not shown booked. Sync refuses to pretend settled or booked is a status light. Sync does not measure settlement. Sync does not measure booking. Sync does not measure settlement for the customer. Sync does not measure booking for the customer. Sync does not measure settlement or booking for the customer. Sync does not place the settlement for the customer. Sync does not book the settlement for the customer. Sync does not deem booked for the customer. Sync does not deem settled for the customer. Sync may surface a settlement record or a booking record beside Evidence, Verification, and the closed outcome. Surfacing is still a read. The closed outcome in that sentence is the Decision Case outcome record. It is not this settled, and it is not this booked. Sync must not auto-approve settlements or auto-book the settlement. Sync must not auto-approve settlements. Sync must not auto-book the settlement. Sync must not treat settled as booked as Learning credit. Recommend is not authorize. Direct plant execute stays off. CMMS write-back is not a live product path. Billing write-back is not a live product path.</p>

          <p>The chain this refusal sits on is already fixed. Judgment is not authority. Authority is not accountability. Accountability is not ownership. Ownership is not control. Control is not closure. Closure is not complete. Complete is not accepted. Accepted is not verified. Verified is not authorized. Authorized is not executed. Executed is not closed. Closed is not resolved. Resolved is not proven. Proven is not trusted. Trusted is not adopted. Adopted is not sustained. Sustained is not scaled. Scaled is not compounded. Compounded is not owned. Owned is not governed. Governed is not transferable. Transferable is not rehearsed. Rehearsed is not recoverable. Recoverable is not assured. Assured is not certified. Certified is not insured. Insured is not covered. Covered is not paid. Paid is not settled. Settled is not booked. Booked is not reconciled. Reconciled is not closed. Closed is not collected. Collected is not recognized. Recognized is not reported. Reported is not audited. Audited is not filed. Filed is not accepted. Accepted is not posted. Posted is not effective. Effective is not binding. Binding is not enforced. Enforced is not remediated. Remediated is not released. Released is not recorded. Recorded is not cleared. Cleared is not closed. Closed is not delivered. Delivered is not operated. Operated is not sustained. Sustained is not assured. Assured is not guaranteed. Guaranteed is not collectible. Collectible is not applied. Applied is not restored. Restored is not accepted. Accepted is not sustained. Sustained is not transferable. Transferable is not binding. Binding is not enforced. Settled is not booked. That sentence, on the industrial assurance spine, is this refusal. Booked is not reconciled is the next sentence on the filing spine. Forward reading stays at that filing essay. The next successor route for Booked Is Not Reconciled may be named in prose only. This essay does not implement that page. Paid is not settled is the prior sentence on this industrial assurance spine. This essay does not rewrite that thesis. This essay does not give that settled a new meaning. Covered is not paid is the prior sentence before that on this industrial assurance spine. This essay does not rewrite that thesis. This essay does not give that paid a new meaning. Insured is not covered is the prior sentence before that on this industrial assurance spine. This essay does not rewrite that thesis. This essay does not give that covered a new meaning. Certified is not insured is the prior sentence before that on this industrial assurance spine. This essay does not rewrite that thesis. This essay does not give that insured a new meaning. Recoverable is not assured is the prior sentence on the filing spine. This essay does not open a successor route for Recoverable Is Not Assured. That successor route is closed. Assured is not certified, on the successor spine and on the filing spine, is a prior certified and a different filing certified. This essay does not rewrite that thesis. This essay does not give that certified a new meaning. Guaranteed is not collectible through accepted is not sustained is a finished successor loop. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. Binding is not enforced through transferable is not binding is a finished successor loop. This essay does not recreate the binding-to-transferable successor loop. Sustained is not scaled through transferable is not rehearsed, stopping before a successor for rehearsed is not recoverable, is a finished successor loop. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. This essay does not claim a successor route for Rehearsed Is Not Recoverable. None of those sentences is this refusal. This refusal is the claim fully and finally resolved (release, agreement, or binding disposition) so residual liability / reopen risk is closed, versus the economic and operational facts correctly recognized in the system of record (ledger, reserve, AR/AP, or ops books) with the right period, entity, and controls. A final disposition is not recognition in the system of record. Keep paid distinct from settled and from booked.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The settled practice is not the booked practice</h2>

          <p>The problem is a settlement record treated as if the economic and operational facts were correctly recognized in the system of record, or a booking claim treated as if the claim were fully and finally resolved under the same evidence bar. The release, agreement, or binding disposition can be named. Residual liability can be closed. Reopen risk can be closed. The chat can say it is settled. The release can be signed. The dashboard can be green. The system of record was never named. The right period was never stated. The right entity was never stated. The controls were never applied. No trail runs from the settlement evidence to that booking evidence. A verbal &quot;it is booked&quot; alone is neither. Settlement theater is not booking. Booking theater is not recognition in the system of record. Refuse the slide from &quot;it is settled / we are done&quot; to &quot;it is booked / the books reflect reality.&quot; A final disposition is not recognition in the system of record.</p>

          <p>One file can hold a settlement record. The claim is fully and finally resolved so residual liability / reopen risk is closed, with an unbroken trail from the payment evidence to that settlement evidence. The same file can still lack a booking record. Under that same settlement, that settled outcome is not booked until the booking mechanics are on the file: a booking package with named entity / period / ledger / reserve / account / control roles, named booking criteria met (settlement package cited, the economic and operational facts stated, the system of record stated, the right period stated, the right entity stated, the controls stated), dates, and an unbroken trail from the settlement evidence to that booking evidence. A verbal &quot;it is booked,&quot; a release treated as a ledger line, the wrong period, the wrong entity, a control that was never applied, or a dashboard tile that says booked is not booking of that settled successor outcome.</p>

          <p>Settled, in this essay, means the claim is fully and finally resolved (release, agreement, or binding disposition) so residual liability / reopen risk is closed, trailed from the payment evidence. This essay does not give that settled a new meaning inside Paid Is Not Settled, on the successor spine or on the filing spine. The successor essay keeps the settled it already names. The filing essay keeps the written release it already names. Booked, in this essay, means the economic and operational facts are correctly recognized in the system of record (ledger, reserve, AR/AP, or ops books) with the right period, entity, and controls. The two records meet only on an unbroken trail from the settlement evidence to the booking evidence. A release treated as a ledger line is not that booking. A final disposition is not recognition in the system of record.</p>

          <p>On Tuesday the question splits. The settlement file answers whether the claim is fully and finally resolved: the release, agreement, or binding disposition, residual liability closed, and reopen risk closed, with the payment package cited, dates, and a trail from that payment evidence to that settlement. The booking file answers whether the economic and operational facts are recognized: the system of record, the right period, the right entity, and the controls, with the settlement package cited, dates, and a trail from that settlement evidence to that booking. A slide that says it is booked because it is settled, or that the books reflect reality because we are done, answers neither the booking criteria nor the trail. Booking theater is not that recognition. The wrong period is not that recognition. A dashboard tile that says booked is not that recognition.</p>

          <p>
            <Link
              href="/insights/successor-paid-is-not-settled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Paid Is Not Settled</Link>{' '} on the successor spine is prior reading. Read it at /insights/successor-paid-is-not-settled. Paid, there, is cash or indemnity actually disbursed on an accepted claim under that coverage, trailed from the coverage evidence. Settled, there, means the claim is fully and finally resolved (release, agreement, or binding disposition) so residual liability / reopen risk is closed. This essay does not collapse into Paid Is Not Settled. This essay does not rewrite Paid Is Not Settled. This essay does not rewrite that thesis. This essay does not give that settled a new meaning. This essay does not give that paid a new meaning. Keep this settled distinct from the successor-spine Paid Is Not Settled. Keep paid distinct from settled and from booked. Recognition in the system of record is not that final disposition, and it is not a new meaning of that settled. Booking is the next refusal on this industrial assurance spine. A final disposition is not recognition in the system of record.</p>

          <p>
            <Link
              href="/insights/paid-is-not-settled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Paid Is Not Settled</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/paid-is-not-settled. Paid, there, means indemnity or settlement funds have actually moved for that named covered event. Settled, there, means the named claim or event is finally closed with a written release. This essay does not collapse into Paid Is Not Settled. This essay does not rewrite Paid Is Not Settled. This essay does not rewrite that thesis. Keep this settled distinct from the filing-spine Paid Is Not Settled. This settled is the claim fully and finally resolved (release, agreement, or binding disposition) so residual liability / reopen risk is closed. It is not a rewrite of that filing written release. The filing essay stays at /insights/paid-is-not-settled.</p>

          <p>
            <Link
              href="/insights/successor-covered-is-not-paid"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Covered Is Not Paid</Link>{' '} on the successor spine is earlier prior reading. Read it at /insights/successor-covered-is-not-paid. Covered, there, is the loss actually inside the named policy, binder, or endorsement for that risk and period, shown by policy language matching the loss, trailed from the insurance evidence. Paid, there, means cash or indemnity actually disbursed on an accepted claim under that coverage. This essay does not collapse into Covered Is Not Paid. This essay does not rewrite Covered Is Not Paid. This essay does not rewrite that thesis. This essay does not give that paid a new meaning. This essay does not give that covered a new meaning. Keep paid distinct from settled and from booked. Recognition in the system of record is not that disbursement.</p>

          <p>
            <Link
              href="/insights/covered-is-not-paid"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Covered Is Not Paid</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/covered-is-not-paid. Covered, there, means the named failure, loss, location, asset class, cause, and window are inside the policy&apos;s responding grant of coverage. Paid, there, means indemnity or settlement funds have actually moved for that named covered event. This essay does not collapse into Covered Is Not Paid. This essay does not rewrite Covered Is Not Paid. This essay does not rewrite that thesis. This booked is the economic and operational facts correctly recognized in the system of record with the right period, entity, and controls. It is not a rewrite of that filing movement of indemnity or settlement funds. The filing essay stays at /insights/covered-is-not-paid.</p>

          <p>
            <Link
              href="/insights/successor-insured-is-not-covered"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Insured Is Not Covered</Link>{' '} on the successor spine is earlier prior reading. Read it at /insights/successor-insured-is-not-covered. Insured, there, is a transferred risk position with a named carrier, coverage trigger, and claim path, trailed from the certification evidence. Covered, there, means that under that named policy, binder, or endorsement for that named risk and period, the loss event actually falls inside the granted coverage grant, evidenced by policy language and an endorsement schedule matching the loss. This essay does not collapse into Insured Is Not Covered. This essay does not rewrite Insured Is Not Covered. This essay does not rewrite that thesis. This essay does not give that covered a new meaning. Keep paid distinct from settled and from booked. Recognition in the system of record is not that coverage grant.</p>

          <p>
            <Link
              href="/insights/insured-is-not-covered"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Insured Is Not Covered</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/insured-is-not-covered. Insured, there, means a named, in-force indemnity or coverage instrument exists. Covered, there, means the named failure, loss, location, asset class, cause, and window are inside the responding grant of coverage. This essay does not collapse into Insured Is Not Covered. This essay does not rewrite Insured Is Not Covered. This essay does not rewrite that thesis. Keep paid distinct from settled and from booked. This booked is the economic and operational facts correctly recognized in the system of record with the right period, entity, and controls. It is not a rewrite of that filing responding grant. The filing essay stays at /insights/insured-is-not-covered.</p>

          <p>
            <Link
              href="/insights/successor-certified-is-not-insured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Certified Is Not Insured</Link>{' '} on the successor spine is earlier prior reading. Read it at /insights/successor-certified-is-not-insured. Certified, there, is an external or formal certification artifact that can be independently verified, trailed from the assurance evidence. Insured, there, is a transferred risk position with a named carrier, coverage trigger, and claim path, trailed from the certification evidence. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured. This essay does not rewrite that thesis. This essay does not give that insured a new meaning. Keep paid distinct from settled and from booked. Recognition in the system of record is not that transferred risk position.</p>

          <p>
            <Link
              href="/insights/certified-is-not-insured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Certified Is Not Insured</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/certified-is-not-insured. Certified, there, means a third-party or internal program stamp that a recovery or continuity program exists or once met a named checklist. Insured, there, means a named, in-force indemnity or coverage instrument that actually responds when recovery fails or loss lands. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured. This essay does not rewrite that thesis. This booked is the economic and operational facts correctly recognized in the system of record with the right period, entity, and controls. It is not a rewrite of that filing indemnity instrument. The filing essay stays at /insights/certified-is-not-insured.</p>

          <p>
            <Link
              href="/insights/successor-assured-is-not-certified"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Assured Is Not Certified</Link>{' '} on the successor spine is earlier prior reading. Read it at /insights/successor-assured-is-not-certified. Assured, there, is a named assurance claim with evidence boundaries (what is claimed, by whom, under what scope). Certified, there, is an external or formal certification artifact that can be independently verified. This essay does not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not Certified. This essay does not rewrite that thesis. This essay does not give that certified a new meaning. Keep paid distinct from settled and from booked. Recognition in the system of record is not that certification artifact.</p>

          <p>
            <Link
              href="/insights/assured-is-not-certified"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Assured Is Not Certified</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/assured-is-not-certified. Assured, there, means independent, recurring verification that recovery capability still holds under the current named owner, tooling rights, exception paths, and evidence continuity. Certified, there, means a third-party or internal program stamp that a recovery or continuity program exists or once met a named checklist. This essay does not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not Certified. This essay does not rewrite that thesis. Keep paid distinct from settled and from booked. This booked is the economic and operational facts correctly recognized in the system of record with the right period, entity, and controls. It is not a rewrite of that filing program stamp. The filing essay stays at /insights/assured-is-not-certified.</p>

          <p>
            <Link
              href="/insights/recoverable-is-not-assured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Recoverable Is Not Assured</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/recoverable-is-not-assured. Recoverable, there, means after a real disruption, or a named recovery drill that actually breaks the live path, the named successor restores the governed owned compounding system to a named service level inside a named RTO/RPO with evidence continuity still holding. Assured, there, means independent, recurring verification that recovery capability still holds under the current named owner. This essay does not collapse into Recoverable Is Not Assured. This essay does not rewrite Recoverable Is Not Assured. This essay does not rewrite that thesis. This essay does not open a successor route for Recoverable Is Not Assured. The successor route for Recoverable Is Not Assured is closed. This booked is the economic and operational facts correctly recognized in the system of record with the right period, entity, and controls. It is not a rewrite of that recovery-capability assurance. The live filing-spine essay stays at /insights/recoverable-is-not-assured.</p>

          <p>
            <Link
              href="/insights/settled-is-not-booked"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Settled Is Not Booked</Link>{' '} on the filing spine shares this title and must stay a different refusal. Read it at /insights/settled-is-not-booked. Settled, there, means the named claim or event is finally closed with a written release. Booked, there, means the indemnity, recovery, or settlement amount is recognized on the named entity&apos;s financials for a named period and account. This essay does not collapse into Settled Is Not Booked. This essay does not rewrite Settled Is Not Booked. This essay does not rewrite that thesis. This settled is the claim fully and finally resolved (release, agreement, or binding disposition) so residual liability / reopen risk is closed — the settled the successor-spine Paid Is Not Settled already names — not a rewrite of that filing written release. This booked is the economic and operational facts correctly recognized in the system of record (ledger, reserve, AR/AP, or ops books) with the right period, entity, and controls — not a rewrite of that filing recognition of indemnity, recovery, or settlement on the named entity financials. The filing essay stays at /insights/settled-is-not-booked. This essay is the industrial assurance spine, registered beside it so the two refusals keep separate evidence trails.</p>

          <p>
            <Link
              href="/insights/booked-is-not-reconciled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Booked Is Not Reconciled</Link>{' '} is forward reading on the filing spine. Read it at /insights/booked-is-not-reconciled. Booked, there, means the indemnity, recovery, or settlement amount is recognized on the named entity&apos;s financials for a named period and account. Reconciled, there, means that named booked amount for that named period and account matches the supporting bank, subledger, or counterparty evidence with an unbroken reconciliation trail a controller can sign. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This essay does not rewrite that thesis. This booked is the economic and operational facts correctly recognized in the system of record (ledger, reserve, AR/AP, or ops books) with the right period, entity, and controls. It is not a rewrite of that filing recognition, and it is not reconciliation. The live filing-spine essay stays at /insights/booked-is-not-reconciled. The next successor route for Booked Is Not Reconciled may be opened in prose only at /insights/successor-booked-is-not-reconciled. This essay does not implement that page.</p>

          <p>
            <Link
              href="/insights/successor-assured-is-not-guaranteed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Assured Is Not Guaranteed</Link>{' '} sits earlier on the successor control spine and must stay distinct. Assured is not guaranteed. That essay separates instrument-required assurance that the sustained successor-obligation outcome will continue to meet the named successor conditions for the next named assurance window from instrument-required guarantee that undertakes that assured successor-obligation outcome. This essay does not collapse into Assured Is Not Guaranteed. This essay does not rewrite Assured Is Not Guaranteed. This essay does not rewrite that thesis. This essay does not give that settled a new meaning. Guarantee evidence on that spine is not this booking.</p>

          <p>
            <Link
              href="/insights/successor-sustained-is-not-assured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Sustained Is Not Assured</Link>{' '} sits earlier on the successor control spine and must stay distinct. Sustained is not assured. That essay separates the continued-force hold of an operated successor-obligation outcome from instrument-required assurance for the next named assurance window. This essay does not collapse into Sustained Is Not Assured. This essay does not rewrite Sustained Is Not Assured. This essay does not rewrite that thesis. Assurance evidence on that spine is not this booking.</p>

          <p>
            <Link
              href="/insights/successor-guaranteed-is-not-collectible"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Guaranteed Is Not Collectible</Link>{' '} opens a finished successor loop that runs from guaranteed through collectible and on to sustained. This essay does not collapse into Guaranteed Is Not Collectible. This essay does not rewrite Guaranteed Is Not Collectible. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. Collectible recovery is not this booking.</p>

          <p>
            <Link
              href="/insights/successor-accepted-is-not-sustained"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Accepted Is Not Sustained</Link>{' '} closes that same guaranteed-to-collectible-to-sustained successor loop. Accepted is not sustained. This essay does not collapse into Accepted Is Not Sustained. This essay does not rewrite Accepted Is Not Sustained. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. That sustainment is not a booking.</p>

          <p>
            <Link
              href="/insights/successor-binding-is-not-enforced"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Binding Is Not Enforced</Link>{' '} belongs to the finished binding-to-transferable successor loop. Binding is not enforced. This essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced. This essay does not recreate the binding-to-transferable successor loop. This essay does not restate Binding Is Not Enforced as this claim. Enforcement evidence is not this booking.</p>

          <p>
            <Link
              href="/insights/successor-transferable-is-not-binding"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Transferable Is Not Binding</Link>{' '} closes that binding-to-transferable successor loop. Transferable is not binding. This essay does not collapse into Transferable Is Not Binding. This essay does not rewrite Transferable Is Not Binding. This essay does not recreate the binding-to-transferable successor loop. This essay does not restate Transferable Is Not Binding as this claim. A transferable packet is not this settled, and it is not this booked.</p>

          <p>
            <Link
              href="/insights/successor-sustained-is-not-scaled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Sustained Is Not Scaled</Link>{' '} opens the finished sustained-to-scaled-to-rehearsed successor loop. This essay does not collapse into Sustained Is Not Scaled. This essay does not rewrite Sustained Is Not Scaled. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. Scale of a sustained outcome is not this booking.</p>

          <p>
            <Link
              href="/insights/successor-transferable-is-not-rehearsed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Transferable Is Not Rehearsed</Link>{' '} is the latest essay on that finished scale loop. Transferable is not rehearsed. This essay does not collapse into Transferable Is Not Rehearsed. This essay does not rewrite Transferable Is Not Rehearsed. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. This essay does not claim a successor route for Rehearsed Is Not Recoverable. A rehearsed transfer is not this booking.</p>

          <p>
            <Link
              href="/insights/rehearsed-is-not-recoverable"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Rehearsed Is Not Recoverable</Link>{' '} on the filing spine is where that scale order stops for successor routes. This essay does not collapse into Rehearsed Is Not Recoverable. This essay does not rewrite Rehearsed Is Not Recoverable. This essay does not claim a successor route for Rehearsed Is Not Recoverable. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. A restore inside a named RTO/RPO is not this booking. The live filing-spine essay stays at /insights/rehearsed-is-not-recoverable.</p>

          <p>
            <Link
              href="/insights/guaranteed-is-not-collectible"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Guaranteed Is Not Collectible</Link>{' '} on the filing spine is a different URL. A binding guarantee is not collectible recovery, and neither record is this booking. This essay does not collapse into Guaranteed Is Not Collectible. This essay does not rewrite that thesis. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. The live filing-spine essay stays at /insights/guaranteed-is-not-collectible.</p>

          <p>
            <Link
              href="/insights/sustained-is-not-assured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Sustained Is Not Assured</Link>{' '} on the filing spine is forward assurance of a named asset for the next period, load, or duty window. This essay does not collapse into that filing-spine Sustained Is Not Assured. This essay does not rewrite that thesis. Forward assurance is not the economic and operational facts correctly recognized in the system of record with the right period, entity, and controls.</p>

          <p>
            <Link
              href="/insights/transferable-is-not-binding"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Transferable Is Not Binding</Link>{' '} on the filing spine is a later refusal whose successor loop is already completed. This essay does not collapse into Transferable Is Not Binding. This essay does not rewrite Transferable Is Not Binding. This essay does not recreate the binding-to-transferable successor loop. The live filing-spine essay stays at /insights/transferable-is-not-binding.</p>

          <p>
            <Link
              href="/insights/binding-is-not-enforced"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Binding Is Not Enforced</Link>{' '} on the filing spine is bind mechanics versus named demand, default, remedy, or enforcement. This essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced. This essay does not restate Binding Is Not Enforced as this claim. A filed demand is not a booking. The live filing-spine essay stays at /insights/binding-is-not-enforced.</p>

          <p>A filing counterpart is not this settled. A filing written release is not this booked. A filing recognition of indemnity, recovery, or settlement on the named entity financials is not this booked. A recovery drill is not this booked. A dashboard green that says booked is not this booked. A verbal &quot;it is settled&quot; is not this booked. A release treated as a ledger line is not this booked. The wrong period is not this booked. The wrong entity is not this booked. A control that was never applied is not this booked. A dashboard tile that says booked is not this booked. A chat note that says the books reflect reality is not this booked. A status light that never names the system of record, the right period, the right entity, or the controls is not this booked. Booking theater is not the economic and operational facts correctly recognized in the system of record with the right period, entity, and controls. Settlement theater is not the claim fully and finally resolved so residual liability / reopen risk is closed. The system of record has to be the ledger, reserve, AR/AP, or ops books that recognize those facts for that claim. Booking of a different claim, a different entity, a different period, or of a settlement package the record does not cite is not this booked. Refuse the slide from &quot;it is settled / we are done&quot; to &quot;it is booked / the books reflect reality.&quot; A final disposition is not recognition in the system of record. Keep paid distinct from settled and from booked.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What a booking record is allowed to be</h2>

          <p>Evidence may cite a settlement record when the source of that settlement is named, and when the citation names the same entity, the same channel, and the same outcome the booking record is about. The citation still has to show the unbroken trail from that settlement evidence to the booking evidence, with named entity / period / ledger / reserve / account / control roles, named booking criteria met (settlement package cited, the economic and operational facts stated, the system of record stated, the right period stated, the right entity stated, the controls stated), dates, and the recognition the instrument names. A citation of a release treated as a ledger line, or of a matter someone calls booked, without the booking mechanics, is not this booked. A release treated as a ledger line is not booking. The wrong period is not booking. The wrong entity is not booking.</p>
          <p>A booking record is allowed to be a booking package with named entity / period / ledger / reserve / account / control roles, named booking criteria met, and dates, with a trail from the settlement evidence to that booking: the settlement package cited against the claim fully and finally resolved, the economic and operational facts stated, the system of record stated, the right period stated, the right entity stated, the controls stated, and other named booking evidence the instrument requires so the same bar survives the recognition. It is not allowed to be the slide from &quot;it is settled / we are done&quot; to &quot;it is booked / the books reflect reality.&quot; It is not allowed to be a release treated as a ledger line. It is not allowed to be the wrong period. It is not allowed to be the wrong entity. It is not allowed to be a control that was never applied. It is not allowed to be a dashboard tile that says booked. It is not allowed to be a verbal &quot;it is booked.&quot; A final disposition is not recognition in the system of record. A settlement package alone is not booking of that settled successor outcome.</p>
          <p>The claim the booking record names has to be the claim the settlement record holds: the release, agreement, or binding disposition, residual liability closed, and reopen risk closed. Booking for a different claim, a different entity, a different period, or a window the instrument does not name is not this booked. The entity, the period, the system of record, the controls, the cited settlement package, and the dates have to match the settlement evidence. A record that floats free of that trail is settlement theater, or it is booking theater, and it is not this booked. A verbal &quot;it is settled&quot; is not this settled. Settled is not booked.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named settled is not booked</h2>

          <p>Named settled is not booked. The settled practice is not the booked practice. A settlement record answers whether the claim is fully and finally resolved so residual liability / reopen risk is closed, and a trail from the payment evidence to that settlement. A booking record answers whether the economic and operational facts are correctly recognized in the system of record with the right period, entity, and controls. Settled is not booked.</p>
          <p>A claim that it is settled so it is booked, while the settlement trail is missing, is not this booked. A release treated as a ledger line, the wrong period, or a verbal &quot;it is booked&quot; while required settlement evidence is missing is booking theater, and it is not this settled. A booking claim alone is not proof the named settlement evidence was on the file. A verbal &quot;it is booked&quot; alone is neither. Settlement evidence alone is not booking of that settled successor outcome. A firm can hold a books story and still not have the claim fully and finally resolved so residual liability / reopen risk is closed. A firm can hold that final disposition and still lack economic and operational facts correctly recognized in the system of record with the right period, entity, and controls.</p>
          <p>A final disposition with no booking evidence behind it is not this booked. Booking has to trail back to the settlement evidence, and the settlement evidence has to show the claim fully and finally resolved so residual liability / reopen risk is closed. A booking package that floats free of that trail is not this booked. What changes Tuesday is the refusal to let one record wear the other record name. Field proof is the named trail with the economic and operational facts correctly recognized in the system of record, not the slide. Settled is not booked. Sync must not auto-approve settlements or auto-book the settlement. Sync must not treat settled as booked as Learning credit. Recommend is not authorize. Refuse the slide from &quot;it is settled / we are done&quot; to &quot;it is booked / the books reflect reality.&quot; A final disposition is not recognition in the system of record. Keep paid distinct from settled and from booked.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Where the public statement lives</h2>

          <p>Field Manual {fieldManual.version} is the public contents of this loop. Start at the{' '}<Link href="/manuals" className="text-[#3B82F6] hover:text-white transition-colors">manuals index</Link>{' '} or open{' '}<Link href={fieldManualPath()} className="text-[#3B82F6] hover:text-white transition-colors">{fieldManual.title}</Link>{' '} directly. Evidence may hold the settlement record or the booking record that was shown. Human decision may hold who accepted the consequence. Verification may hold the named observation. Learning may hold achieved, not_achieved, or inconclusive, with measured notes — the measured outcome of the case, not this essay definition of booked, and not settled used as booked. The{' '}<Link
              href={fieldManualPath(honestyChapter.slug)}
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Honesty boundaries</Link>{' '} keep this edition from treating a settlement record as successor booking. Later editions can deepen a chapter. The spine stays in this order.</p>

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

          <p>This is an essay about the Decision Case order, not a customer case study. It names no plant, states no savings figure, states no price, and claims no prevented failure. It does not claim that settled is booked, that paid is settled, that covered is paid, that insured is covered, that certified is insured, that assured is certified, that recoverable is assured, that booked is reconciled, that guaranteed is collectible, that binding is enforced, that transferable is binding, that sustained is scaled, that transferable is rehearsed, or that rehearsed is recoverable. It does not write a CMMS work order, book a settlement, book revenue, recognize revenue, or attribute a change in cash, risk, or capacity. Sync does not measure settlement. Sync does not measure booking. Sync does not measure settlement or booking for the customer. Sync does not deem booked for the customer. Sync does not measure booking for the customer. It does not claim that Sync executes plant work. It does not claim CMMS write-back as a shipped product. It does not claim billing write-back as a shipped product. It does not invent a customer, a price, or a return. It does not open a successor route for Recoverable Is Not Assured. It does not claim a successor route for Rehearsed Is Not Recoverable. It does not implement the next successor page for Booked Is Not Reconciled. It does not recreate the guaranteed-to-collectible-to-sustained successor loop. It does not recreate the binding-to-transferable successor loop. It does not recreate the sustained-to-scaled-to-rehearsed successor loop. Recommend is not authorize. Keep paid distinct from settled and from booked.</p>

          <p>Stage-1 readiness means a signed-in user can complete the Decision Case — question, evidence, recommendation, human decision, action, verification, and learning — and{' '}<Link href={fieldManualPath()} className="text-[#3B82F6] hover:text-white transition-colors">Field Manual {fieldManual.version}</Link>{' '} describes that journey. Walking those steps is not a claim that settled is booked. A{' '}<Link
              href="/reliability-assessment"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Reliability Assessment</Link>{' '} asks whether the records can support a conclusion. A{' '}<Link href="/strategic-pilot" className="text-[#3B82F6] hover:text-white transition-colors">Strategic Pilot</Link>{' '} is a governed proof around one operating decision. The verification chapter records the measured result. The settlement package does not approve booking of the outcome.</p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">Field Manual {fieldManual.version} states the order and the boundaries. Settled means the claim is fully and finally resolved (release, agreement, or binding disposition) so residual liability / reopen risk is closed. Booked means the economic and operational facts are correctly recognized in the system of record (ledger, reserve, AR/AP, or ops books) with the right period, entity, and controls. A firm with a settlement record can still lack booking. A firm with a booking claim can still lack settlement. The Reliability Engineer workspace is where a signed-in Decision Case is completed. A Reliability Assessment is the bounded review when the question is whether the records can support a conclusion. None of those is a claim that Sync books a settled successor outcome, executes plant work, books revenue, or that CMMS write-back is live, that billing write-back is live, or that self-guided onboarding is a live product path. Surfacing is still a read. Recommend is not authorize. Forward reading on the filing spine remains Booked Is Not Reconciled at /insights/booked-is-not-reconciled. The next successor route for Booked Is Not Reconciled may be opened in prose only at /insights/successor-booked-is-not-reconciled. This essay does not implement that page. This essay does not open a successor route for Recoverable Is Not Assured. Prior reading stays at successor and filing Paid Is Not Settled, and at successor and filing Covered Is Not Paid, without rewriting those theses. This essay does not give that settled a new meaning. Keep paid distinct from settled and from booked.</p>
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

          <InsightNextSteps slug="successor-settled-is-not-booked" />
        </motion.article>
      </div>
    </main>
  );
}
