'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-certified-is-not-insured');

export default function SuccessorCertifiedIsNotInsuredPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Certified Is Not Insured</h1>
            <p className="text-xl text-gray-400">Certified is not insured. Certified means, on the industrial assurance spine, an external or formal certification artifact that can be independently verified — the certified the successor-spine Assured Is Not Certified already names — evidenced by certification package with named certifier / artifact / verifier roles, named certification criteria met (assurance package cited, the external or formal certification artifact named, the independent verification path stated), dates, and an unbroken trail from the assurance evidence to that certification evidence — not the slide from &quot;it is assured&quot; to &quot;it is certified,&quot; not a certificate PDF with no independent verification path, not a laminated badge, not a chat note that says certified, and not treating the assurance claim as automatic certification. Insured means, under that same named instrument for that channel, a transferred risk position with a named carrier, coverage trigger, and claim path — evidenced by insurance package with named carrier / insured / coverage-trigger / claim-path roles, named insurance criteria met (certification package cited, the named carrier stated, the coverage trigger stated, the claim path stated), dates, and an unbroken trail from the certification evidence to that insurance evidence — not the slide from &quot;it is certified&quot; to &quot;it is insured,&quot; not a policy PDF with no named carrier, not a broker email that says insured, not a certificate of insurance with no claim path, and not treating the certification artifact as automatic insurance. Certified is not insured. A firm can be certified and still not insured (certification evidence exists while the transferred risk position is missing). A firm can hold an external or formal certification artifact that can be independently verified and still lack a transferred risk position with a named carrier, coverage trigger, and claim path. An insurance claim alone is not proof the named certification evidence was on the file. A certification package alone is not insurance of that certified successor outcome. Certification evidence alone is not insurance of that certified successor outcome. A certification artifact is not a transferred risk position. A verbal &quot;it is insured&quot; alone is neither. Refuse the slide from &quot;it is certified&quot; to &quot;it is insured.&quot; This split is certified versus insured. Keep this certified distinct from the successor-spine Assured Is Not Certified. Keep this certified distinct from the filing-spine Assured Is Not Certified and from Certified Is Not Insured. Keep this insured distinct from the filing-spine Certified Is Not Insured and from Insured Is Not Covered. This essay does not give that certified a new meaning. This essay does not rewrite that thesis. This essay does not open a successor route for Recoverable Is Not Assured. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. This essay does not recreate the binding-to-transferable successor loop. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. This essay does not collapse certified into insured. This essay does not collapse insured into certified.</p>
          </header>

          <p>Certified is not insured. A firm can be certified and still not insured (certification evidence exists while the transferred risk position is missing). A firm can hold an external or formal certification artifact that can be independently verified and still lack a transferred risk position with a named carrier, coverage trigger, and claim path. A policy PDF with no named carrier is not insurance. A certification package alone is not insurance of that certified successor outcome. Certification evidence alone is not insurance of that certified successor outcome. An insurance claim alone is not proof the named certification evidence was on the file. A certification artifact is not a transferred risk position. A verbal &quot;it is insured&quot; alone is neither. Refuse the slide from &quot;it is certified&quot; to &quot;it is insured.&quot; This split is certified versus insured. Keep this certified distinct from the successor-spine Assured Is Not Certified. This essay does not rewrite that thesis. This essay does not give that certified a new meaning. This essay does not open a successor route for Recoverable Is Not Assured. The successor route for Recoverable Is Not Assured is closed.</p>

          <p>False confidence here is a certification artifact treated as if a transferred risk position already existed, or a claim that it is certified so it is insured treated as proof the named certification evidence was on the file. Evidence from the plant beats the certification record when the record is being used as insured. Evidence from the plant beats the insurance claim when the claim is being used as proof the named certification artifact was on the file. Evidence from the plant beats the note. A practice record that says certified is insured is not shown insured. Sync refuses to pretend certified or insured is a status light. Sync does not measure certification. Sync does not measure insurance. Sync does not measure certification for the customer. Sync does not measure insurance for the customer. Sync does not measure certification or insurance for the customer. Sync does not issue the certification artifact for the customer. Sync does not insure the certification for the customer. Sync does not deem insured for the customer. Sync does not deem certified for the customer. Sync may surface a certification record or an insurance record beside Evidence, Verification, and the closed outcome. Surfacing is still a read. The closed outcome in that sentence is the Decision Case outcome record. It is not this certified, and it is not this insured. Sync must not auto-approve certification artifacts or auto-insure the certification. Sync must not auto-approve certification artifacts. Sync must not auto-insure the certification. Sync must not treat certified as insured as Learning credit. Recommend is not authorize. Direct plant execute stays off. CMMS write-back is not a live product path. Billing write-back is not a live product path.</p>

          <p>The chain this refusal sits on is already fixed. Judgment is not authority. Authority is not accountability. Accountability is not ownership. Ownership is not control. Control is not closure. Closure is not complete. Complete is not accepted. Accepted is not verified. Verified is not authorized. Authorized is not executed. Executed is not closed. Closed is not resolved. Resolved is not proven. Proven is not trusted. Trusted is not adopted. Adopted is not sustained. Sustained is not scaled. Scaled is not compounded. Compounded is not owned. Owned is not governed. Governed is not transferable. Transferable is not rehearsed. Rehearsed is not recoverable. Recoverable is not assured. Assured is not certified. Certified is not insured. Insured is not covered. Covered is not paid. Paid is not settled. Settled is not booked. Booked is not reconciled. Reconciled is not closed. Closed is not collected. Collected is not recognized. Recognized is not reported. Reported is not audited. Audited is not filed. Filed is not accepted. Accepted is not posted. Posted is not effective. Effective is not binding. Binding is not enforced. Enforced is not remediated. Remediated is not released. Released is not recorded. Recorded is not cleared. Cleared is not closed. Closed is not delivered. Delivered is not operated. Operated is not sustained. Sustained is not assured. Assured is not guaranteed. Guaranteed is not collectible. Collectible is not applied. Applied is not restored. Restored is not accepted. Accepted is not sustained. Sustained is not transferable. Transferable is not binding. Binding is not enforced. Certified is not insured. That sentence, on the industrial assurance spine, is this refusal. Insured is not covered is the next sentence on the filing spine. Forward reading stays at that filing essay. The next successor route for Insured Is Not Covered may be named in prose only. This essay does not implement that page. Recoverable is not assured is the prior sentence on the filing spine. This essay does not open a successor route for Recoverable Is Not Assured. That successor route is closed. Assured is not certified, on the successor spine and on the filing spine, is the prior certified and a different filing certified. This essay does not rewrite that thesis. This essay does not give that certified a new meaning. Guaranteed is not collectible through accepted is not sustained is a finished successor loop. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. Binding is not enforced through transferable is not binding is a finished successor loop. This essay does not recreate the binding-to-transferable successor loop. Sustained is not scaled through transferable is not rehearsed, stopping before a successor for rehearsed is not recoverable, is a finished successor loop. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. This essay does not claim a successor route for Rehearsed Is Not Recoverable. None of those sentences is this refusal. This refusal is an external or formal certification artifact that can be independently verified, versus a transferred risk position with a named carrier, coverage trigger, and claim path. A certification artifact is not a transferred risk position.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">The certified practice is not the insured practice</h2>

          <p>The problem is a certification record treated as if a transferred risk position with a named carrier, coverage trigger, and claim path were already on the file, or an insurance claim treated as if the named certification artifact under the same evidence bar had been evidenced. The certifier can be named. The artifact can be named. The verifier can be named. The chat can say it is certified. The badge can be laminated. The PDF can say insured. The named carrier was never stated. The coverage trigger was never stated. The claim path was never stated. The dates do not cover that transferred risk. No trail runs from the certification evidence to that insurance evidence. A verbal &quot;it is insured&quot; alone is neither. Certification theater is not insurance. Insurance theater is not a transferred risk position with a named carrier, coverage trigger, and claim path. Refuse the slide from &quot;it is certified&quot; to &quot;it is insured.&quot; A certification artifact is not a transferred risk position.</p>

          <p>One file can hold a certification record. Under the named instrument for that channel, there is an external or formal certification artifact that can be independently verified, with an unbroken trail from the assurance evidence to that certification evidence. The same file can still lack an insurance record. Under that same instrument, that certified outcome is not insured until the insurance mechanics are on the file: an insurance package with named carrier / insured / coverage-trigger / claim-path roles, named insurance criteria met (certification package cited, the named carrier stated, the coverage trigger stated, the claim path stated), dates, and an unbroken trail from the certification evidence to that insurance evidence. A verbal &quot;it is insured,&quot; a policy PDF with no named carrier, a broker email that says insured, or a certificate of insurance with no claim path is not insurance of that certified successor outcome.</p>

          <p>Certified, in this essay, means an external or formal certification artifact that can be independently verified, trailed from the assurance evidence. This essay does not give that certified a new meaning inside Assured Is Not Certified, on the successor spine or on the filing spine. The successor essay keeps the certified it already names. The filing essay keeps the program stamp it already names. Insured, in this essay, means a transferred risk position with a named carrier, coverage trigger, and claim path, trailed from the certification evidence. The two records meet only on an unbroken trail from the certification evidence to the insurance evidence. A policy PDF with no named carrier is not that insurance. A certification artifact is not a transferred risk position.</p>

          <p>On Tuesday the question splits. The certification file answers whether an external or formal certification artifact can be independently verified: named certifier, artifact, and verifier roles, the assurance package cited, the artifact named, the independent verification path stated, dates, and a trail from the assurance evidence to that certification. The insurance file answers whether risk has been transferred: a named carrier, a coverage trigger, and a claim path, with the certification package cited, dates, and a trail from that certification evidence to that insurance. A slide that says it is insured because it is certified answers neither the insurance criteria nor the trail. Insurance theater is not that transferred risk position.</p>

          <p>
            <Link
              href="/insights/successor-assured-is-not-certified"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Assured Is Not Certified</Link>{' '} on the successor spine is prior reading. Read it at /insights/successor-assured-is-not-certified. Assured, there, is a named assurance claim with evidence boundaries (what is claimed, by whom, under what scope), trailed to that assurance evidence. Certified, there, is an external or formal certification artifact that can be independently verified, trailed from the assurance evidence. This essay does not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not Certified. This essay does not rewrite that thesis. This essay does not give that certified a new meaning. Keep this certified distinct from the successor-spine Assured Is Not Certified. A transferred risk position is not that certification artifact, and it is not a new meaning of that certified. Insurance is the next refusal on this industrial assurance spine. A certification artifact is not a transferred risk position.</p>

          <p>
            <Link
              href="/insights/assured-is-not-certified"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Assured Is Not Certified</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/assured-is-not-certified. Assured, there, means independent, recurring verification that recovery capability still holds under the current named owner, tooling rights, exception paths, and evidence continuity. Certified, there, means a third-party or internal program stamp that a recovery or continuity program exists or once met a named checklist. This essay does not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not Certified. This essay does not rewrite that thesis. Keep this certified distinct from the filing-spine Assured Is Not Certified. This certified is an external or formal certification artifact that can be independently verified. It is not a rewrite of that filing program stamp. The filing essay stays at /insights/assured-is-not-certified.</p>

          <p>
            <Link
              href="/insights/recoverable-is-not-assured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Recoverable Is Not Assured</Link>{' '} on the filing spine is prior reading at a different URL. Read it at /insights/recoverable-is-not-assured. Recoverable, there, means after a real disruption, or a named recovery drill that actually breaks the live path, the named successor restores the governed owned compounding system to a named service level inside a named RTO/RPO with evidence continuity still holding. Assured, there, means independent, recurring verification that recovery capability still holds under the current named owner. This essay does not collapse into Recoverable Is Not Assured. This essay does not rewrite Recoverable Is Not Assured. This essay does not rewrite that thesis. This essay does not open a successor route for Recoverable Is Not Assured. The successor route for Recoverable Is Not Assured is closed. This certified is an external or formal certification artifact that can be independently verified. It is not a rewrite of that recovery-capability assurance. The live filing-spine essay stays at /insights/recoverable-is-not-assured.</p>

          <p>
            <Link
              href="/insights/certified-is-not-insured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Certified Is Not Insured</Link>{' '} on the filing spine shares this title and must stay a different refusal. Read it at /insights/certified-is-not-insured. Certified, there, means a third-party or internal program stamp that a recovery or continuity program exists or once met a named checklist. Insured, there, means a named, in-force indemnity or coverage instrument that actually responds when recovery fails or loss lands. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured. This essay does not rewrite that thesis. This certified is an external or formal certification artifact that can be independently verified. This insured is a transferred risk position with a named carrier, coverage trigger, and claim path — not a filing indemnity instrument treated as this insurance package. The filing essay stays at /insights/certified-is-not-insured. This essay is the industrial assurance spine, registered beside it so the two refusals keep separate evidence trails.</p>

          <p>
            <Link
              href="/insights/insured-is-not-covered"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Insured Is Not Covered</Link>{' '} is forward reading on the filing spine. Read it at /insights/insured-is-not-covered. Insured, there, means a named, in-force indemnity or coverage instrument exists. Covered, there, means the named failure, loss, location, asset class, cause, and window are inside the responding grant of coverage. This essay does not collapse into Insured Is Not Covered. This essay does not rewrite Insured Is Not Covered. This essay does not rewrite that thesis. This insured is a transferred risk position with a named carrier, coverage trigger, and claim path, trailed from an external or formal certification artifact. It is not a rewrite of that filing in-force instrument, and it is not coverage of a named event. The live filing-spine essay stays at /insights/insured-is-not-covered. The next successor route for Insured Is Not Covered may be opened in prose only at /insights/successor-insured-is-not-covered. This essay does not implement that page.</p>

          <p>
            <Link
              href="/insights/successor-assured-is-not-guaranteed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Assured Is Not Guaranteed</Link>{' '} sits earlier on the successor control spine and must stay distinct. Assured is not guaranteed. That essay separates instrument-required assurance that the sustained successor-obligation outcome will continue to meet the named successor conditions for the next named assurance window from instrument-required guarantee that undertakes that assured successor-obligation outcome. This essay does not collapse into Assured Is Not Guaranteed. This essay does not rewrite Assured Is Not Guaranteed. This essay does not rewrite that thesis. This essay does not give that certified a new meaning. Guarantee evidence on that spine is not this transferred risk position.</p>

          <p>
            <Link
              href="/insights/successor-sustained-is-not-assured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Sustained Is Not Assured</Link>{' '} sits earlier on the successor control spine and must stay distinct. Sustained is not assured. That essay separates the continued-force hold of an operated successor-obligation outcome from instrument-required assurance for the next named assurance window. This essay does not collapse into Sustained Is Not Assured. This essay does not rewrite Sustained Is Not Assured. This essay does not rewrite that thesis. Assurance evidence on that spine is not this transferred risk position.</p>

          <p>
            <Link
              href="/insights/successor-guaranteed-is-not-collectible"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Guaranteed Is Not Collectible</Link>{' '} opens a finished successor loop that runs from guaranteed through collectible and on to sustained. This essay does not collapse into Guaranteed Is Not Collectible. This essay does not rewrite Guaranteed Is Not Collectible. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. Collectible recovery is not this transferred risk position.</p>

          <p>
            <Link
              href="/insights/successor-accepted-is-not-sustained"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Accepted Is Not Sustained</Link>{' '} closes that same guaranteed-to-collectible-to-sustained successor loop. Accepted is not sustained. This essay does not collapse into Accepted Is Not Sustained. This essay does not rewrite Accepted Is Not Sustained. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. That sustainment is not a transferred risk position.</p>

          <p>
            <Link
              href="/insights/successor-binding-is-not-enforced"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Binding Is Not Enforced</Link>{' '} belongs to the finished binding-to-transferable successor loop. Binding is not enforced. This essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced. This essay does not recreate the binding-to-transferable successor loop. This essay does not restate Binding Is Not Enforced as this claim. Enforcement evidence is not this transferred risk position.</p>

          <p>
            <Link
              href="/insights/successor-transferable-is-not-binding"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Transferable Is Not Binding</Link>{' '} closes that binding-to-transferable successor loop. Transferable is not binding. This essay does not collapse into Transferable Is Not Binding. This essay does not rewrite Transferable Is Not Binding. This essay does not recreate the binding-to-transferable successor loop. This essay does not restate Transferable Is Not Binding as this claim. A transferable packet is not this certified, and it is not this insured.</p>

          <p>
            <Link
              href="/insights/successor-sustained-is-not-scaled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Sustained Is Not Scaled</Link>{' '} opens the finished sustained-to-scaled-to-rehearsed successor loop. This essay does not collapse into Sustained Is Not Scaled. This essay does not rewrite Sustained Is Not Scaled. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. Scale of a sustained outcome is not this transferred risk position.</p>

          <p>
            <Link
              href="/insights/successor-transferable-is-not-rehearsed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Transferable Is Not Rehearsed</Link>{' '} is the latest essay on that finished scale loop. Transferable is not rehearsed. This essay does not collapse into Transferable Is Not Rehearsed. This essay does not rewrite Transferable Is Not Rehearsed. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. This essay does not claim a successor route for Rehearsed Is Not Recoverable. A rehearsed transfer is not this transferred risk position.</p>

          <p>
            <Link
              href="/insights/rehearsed-is-not-recoverable"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Rehearsed Is Not Recoverable</Link>{' '} on the filing spine is where that scale order stops for successor routes. This essay does not collapse into Rehearsed Is Not Recoverable. This essay does not rewrite Rehearsed Is Not Recoverable. This essay does not claim a successor route for Rehearsed Is Not Recoverable. This essay does not recreate the sustained-to-scaled-to-rehearsed successor loop. A restore inside a named RTO/RPO is not this transferred risk position. The live filing-spine essay stays at /insights/rehearsed-is-not-recoverable.</p>

          <p>
            <Link
              href="/insights/guaranteed-is-not-collectible"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Guaranteed Is Not Collectible</Link>{' '} on the filing spine is a different URL. A binding guarantee is not collectible recovery, and neither record is this transferred risk position. This essay does not collapse into Guaranteed Is Not Collectible. This essay does not rewrite that thesis. This essay does not recreate the guaranteed-to-collectible-to-sustained successor loop. The live filing-spine essay stays at /insights/guaranteed-is-not-collectible.</p>

          <p>
            <Link
              href="/insights/sustained-is-not-assured"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Sustained Is Not Assured</Link>{' '} on the filing spine is forward assurance of a named asset for the next period, load, or duty window. This essay does not collapse into that filing-spine Sustained Is Not Assured. This essay does not rewrite that thesis. Forward assurance is not a transferred risk position with a named carrier, coverage trigger, and claim path.</p>

          <p>
            <Link
              href="/insights/transferable-is-not-binding"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Transferable Is Not Binding</Link>{' '} on the filing spine is a later refusal whose successor loop is already completed. This essay does not collapse into Transferable Is Not Binding. This essay does not rewrite Transferable Is Not Binding. This essay does not recreate the binding-to-transferable successor loop. The live filing-spine essay stays at /insights/transferable-is-not-binding.</p>

          <p>
            <Link
              href="/insights/binding-is-not-enforced"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Binding Is Not Enforced</Link>{' '} on the filing spine is bind mechanics versus named demand, default, remedy, or enforcement. This essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced. This essay does not restate Binding Is Not Enforced as this claim. A filed demand is not a transferred risk position. The live filing-spine essay stays at /insights/binding-is-not-enforced.</p>

          <p>A filing counterpart is not this certified. A filing program stamp is not this insured. A filing indemnity instrument is not this insured. A recovery drill is not this insured. A dashboard green tile that says insured is not this insured. A verbal &quot;it is certified&quot; is not this insured. A policy PDF with no named carrier is not this insured. A broker email that says insured is not this insured. A certificate of insurance with no claim path is not this insured. A chat note that says insured is not this insured. A status light that never names the carrier, the coverage trigger, or the claim path is not this insured. Insurance theater is not a transferred risk position with a named carrier, coverage trigger, and claim path. Certification theater is not an external or formal certification artifact that can be independently verified. The claim path has to be the path the carrier names. Insurance of a different artifact, a different carrier, or of a certification package the record does not cite is not this insured. Refuse the slide from &quot;it is certified&quot; to &quot;it is insured.&quot; A certification artifact is not a transferred risk position.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What an insurance record is allowed to be</h2>

          <p>Evidence may cite a certification record when the source of that certification is named, and when the citation names the same entity, the same channel, and the same outcome the insurance record is about. The citation still has to show the unbroken trail from that certification evidence to the insurance evidence, with named carrier / insured / coverage-trigger / claim-path roles, named insurance criteria met (certification package cited, the named carrier stated, the coverage trigger stated, the claim path stated), dates, and the transferred risk the instrument names. A citation of a badge, or of a matter someone calls certified, without the insurance mechanics, is not this insured. A policy PDF with no named carrier is not insurance.</p>
          <p>An insurance record is allowed to be an insurance package with named carrier / insured / coverage-trigger / claim-path roles, named insurance criteria met, and dates, with a trail from the certification evidence to that insurance: the certification package cited against the named certification artifact, the named carrier stated, the coverage trigger stated, the claim path stated, and other named insurance evidence the instrument requires so the same bar survives the claim. It is not allowed to be the slide from &quot;it is certified&quot; to &quot;it is insured.&quot; It is not allowed to be a policy PDF with no named carrier. It is not allowed to be a broker email that says insured. It is not allowed to be a certificate of insurance with no claim path. It is not allowed to be a verbal &quot;it is insured.&quot; A certification artifact is not a transferred risk position. A certification package alone is not insurance of that certified successor outcome.</p>
          <p>The position the insurance record covers has to be the transferred risk position the instrument names for that certification artifact, the same matter the certification record holds: an external or formal certification artifact that can be independently verified. Insurance for a different artifact, a different party, a different carrier, or a claim path the instrument does not name is not this insured. The carrier, the insured, the coverage trigger, the claim path, the cited certification package, and the dates have to match the certification evidence. A record that floats free of that trail is certification theater, or it is insurance theater, and it is not this insured. A verbal &quot;it is certified&quot; is not this certified. Certified is not insured.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named certified is not insured</h2>

          <p>Named certified is not insured. The certified practice is not the insured practice. A certification record answers whether an external or formal certification artifact can be independently verified. An insurance record answers whether risk has been transferred to a named carrier, with a coverage trigger and a claim path, and a trail from the certification evidence to that insurance. Certified is not insured.</p>
          <p>A claim that it is certified so it is insured, while the certification trail is missing, is not this insured. A policy PDF with no named carrier, a broker email that says insured, a certificate of insurance with no claim path, or a verbal &quot;it is insured&quot; while required certification evidence is missing is insurance theater, and it is not this certified. An insurance claim alone is not proof the named certification evidence was on the file. A verbal &quot;it is insured&quot; alone is neither. Certification evidence alone is not insurance of that certified successor outcome. A firm can hold a transferred risk position and still not have the named certification artifact. A firm can hold that artifact and still lack a transferred risk position with a named carrier, coverage trigger, and claim path.</p>
          <p>An external or formal certification artifact with no insurance evidence behind it is not this insured. Insurance has to trail back to the certification evidence, and the certification evidence has to name the artifact, the certifier, the verifier, and the independent verification path. An insurance package that floats free of that trail is not this insured. What changes Tuesday is the refusal to let one record wear the other record name. Field proof is the named trail with a transferred risk position that names the carrier, the coverage trigger, and the claim path, not the slide. Certified is not insured. Sync must not auto-approve certification artifacts or auto-insure the certification. Sync must not treat certified as insured as Learning credit. Recommend is not authorize. Refuse the slide from &quot;it is certified&quot; to &quot;it is insured.&quot; A certification artifact is not a transferred risk position.</p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Where the public statement lives</h2>

          <p>Field Manual {fieldManual.version} is the public contents of this loop. Start at the{' '}<Link href="/manuals" className="text-[#3B82F6] hover:text-white transition-colors">manuals index</Link>{' '} or open{' '}<Link href={fieldManualPath()} className="text-[#3B82F6] hover:text-white transition-colors">{fieldManual.title}</Link>{' '} directly. Evidence may hold the certification record or the insurance record that was shown. Human decision may hold who accepted the consequence. Verification may hold the named observation. Learning may hold achieved, not_achieved, or inconclusive, with measured notes — the measured outcome of the case, not this essay definition of insured, and not certified used as insured. The{' '}<Link
              href={fieldManualPath(honestyChapter.slug)}
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Honesty boundaries</Link>{' '} keep this edition from treating a certification record as successor insurance. Later editions can deepen a chapter. The spine stays in this order.</p>

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

          <p>This is an essay about the Decision Case order, not a customer case study. It names no plant, states no savings figure, states no price, and claims no prevented failure. It does not claim that certified is insured, that assured is certified, that recoverable is assured, that insured is covered, that guaranteed is collectible, that binding is enforced, that transferable is binding, that sustained is scaled, that transferable is rehearsed, or that rehearsed is recoverable. It does not write a CMMS work order, insure a certification artifact, book revenue, recognize revenue, or attribute a change in cash, risk, or capacity. Sync does not measure certification. Sync does not measure insurance. Sync does not measure certification or insurance for the customer. Sync does not deem insured for the customer. Sync does not measure insurance for the customer. It does not claim that Sync executes plant work. It does not claim CMMS write-back as a shipped product. It does not claim billing write-back as a shipped product. It does not invent a customer, a price, or a return. It does not open a successor route for Recoverable Is Not Assured. It does not claim a successor route for Rehearsed Is Not Recoverable. It does not implement the next successor page for Insured Is Not Covered. It does not recreate the guaranteed-to-collectible-to-sustained successor loop. It does not recreate the binding-to-transferable successor loop. It does not recreate the sustained-to-scaled-to-rehearsed successor loop. Recommend is not authorize.</p>

          <p>Stage-1 readiness means a signed-in user can complete the Decision Case — question, evidence, recommendation, human decision, action, verification, and learning — and{' '}<Link href={fieldManualPath()} className="text-[#3B82F6] hover:text-white transition-colors">Field Manual {fieldManual.version}</Link>{' '} describes that journey. Walking those steps is not a claim that certified is insured. A{' '}<Link
              href="/reliability-assessment"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >Reliability Assessment</Link>{' '} asks whether the records can support a conclusion. A{' '}<Link href="/strategic-pilot" className="text-[#3B82F6] hover:text-white transition-colors">Strategic Pilot</Link>{' '} is a governed proof around one operating decision. The verification chapter records the measured result. The certification package does not approve insurance of the outcome.</p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">Field Manual {fieldManual.version} states the order and the boundaries. Certified is an external or formal certification artifact that can be independently verified. Insured is a transferred risk position with a named carrier, coverage trigger, and claim path. A firm with a certification record can still lack insurance. A firm with an insurance claim can still lack certification. The Reliability Engineer workspace is where a signed-in Decision Case is completed. A Reliability Assessment is the bounded review when the question is whether the records can support a conclusion. None of those is a claim that Sync insures a certified successor outcome, executes plant work, books revenue, or that CMMS write-back is live, that billing write-back is live, or that self-guided onboarding is a live product path. Surfacing is still a read. Recommend is not authorize. Forward reading on the filing spine remains Insured Is Not Covered at /insights/insured-is-not-covered. The next successor route for Insured Is Not Covered may be opened in prose only at /insights/successor-insured-is-not-covered. This essay does not implement that page. This essay does not open a successor route for Recoverable Is Not Assured. Prior reading stays at successor and filing Assured Is Not Certified, and at filing Recoverable Is Not Assured, without rewriting those theses.</p>
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

          <InsightNextSteps slug="successor-certified-is-not-insured" />
        </motion.article>
      </div>
    </main>
  );
}
