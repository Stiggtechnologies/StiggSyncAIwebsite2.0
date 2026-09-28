'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-reconciled-is-not-certified');

export default function SuccessorReconciledIsNotCertifiedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Reconciled Is Not Certified</h1>
            <p className="text-xl text-gray-400">
              Reconciled is not certified. Books that have been reconciled for a relieved balance — the
              period close matched, the subledger tied out to the GL, or the account proven complete
              against source for that relieved balance — are not the same as those reconciled books having
              been certified (period-close match certified by the named close owner, subledger-to-GL
              tie-out certified for the named ledger, or account proven complete against source certified
              for the customer and the period) — not merely that the period close matched, the subledger
              tied out to the GL, or the account was proven complete against source for that relieved
              balance.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-relieved-is-not-reconciled"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Relieved Is Not Reconciled
              </Link>
              . Relieved Is Not Reconciled already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that reconciled a new meaning. This essay starts from the
              reconciled the successor-spine Relieved Is Not Reconciled already names. This refusal sits on
              the commercial spine. This is the certification spine after that reconciliation. The prior
              essay is the reconciliation spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The reconciled practice is not the certified practice
          </h2>

          <p>
            Reconciled means that relieved commercial obligation has been reconciled on the books — the
            period close matched, the subledger tied out to the GL, or the account proven complete against
            source for that relieved balance — by an executed reconciliation instrument. Certified means
            that reconciled commercial books have been certified for that relieved balance — the
            period-close match certified by the named close owner, the subledger-to-GL tie-out certified
            for the named ledger, or the account proven complete against source certified for the customer
            and the period — by an executed certification instrument. A reconciliation is not a
            certification. This split is reconciled versus certified.
          </p>

          <p>
            A period close matched with no named close owner certifying the match is not certified. A
            subledger tied out to the GL with no certification for the named ledger is not certified. An
            account proven complete against source with no certification for the customer and the period
            is not certified. Certification talk that says the books were reconciled while the period-close
            match has not been certified by the named close owner, the subledger-to-GL tie-out has not
            been certified for the named ledger, or the account proven complete against source has not been
            certified for the customer and the period is not certified.
          </p>

          <p>
            A firm can be reconciled and still not certified. A firm can chase certification theater and
            still not be reconciled. A reconciliation package alone is not certified of that reconciled
            successor outcome. Reconciled cash or margin is not the same as a certified commercial
            outcome. The refusal is not merely that the period close matched, the subledger tied out to
            the GL, or the account was proven complete against source for that relieved balance.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a certified record is allowed to be
          </h2>

          <p>
            An executed certification instrument is a close-owner certification record that shows the
            period-close match was certified by the named close owner for that relieved balance, a ledger
            certification record that shows the subledger-to-GL tie-out was certified for the named
            ledger, a source certification record that shows the account proven complete against source
            was certified for the customer and the period, or a certification binder that releases the
            reconciled books as certified only when the period-close match certified by the named close
            owner, the subledger-to-GL tie-out certified for the named ledger, and the account proven
            complete against source certified for the customer and the period are on the file.
          </p>

          <p>
            The certification record has to trail back to the reconciliation evidence, and the
            reconciliation evidence has to trail back to the relief{' '}
            <Link
              href="/insights/successor-relieved-is-not-reconciled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Relieved Is Not Reconciled
            </Link>{' '}
            already required. A close-owner certification that cannot name the close owner and the
            period-close match, a ledger certification that cannot name the ledger and the tie-out, or a
            source certification that cannot name the customer, the period, and the source is
            certification theater. It is not this certified.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named reconciled is not certified</h2>

          <p>
            Named reconciled is not certified. The reconciled practice is not the certified practice. A
            reconciliation record answers whether the period close matched, the subledger tied out to the
            GL, or the account was proven complete against source for that relieved balance. A
            certification record answers whether those reconciled books were certified. Reconciled is not
            certified.
          </p>

          <p>
            A claim that reconciliation so it is certified, while the certification trail is missing, is
            not this certified. A period close matched, a subledger tied out to the GL, or an account
            proven complete against source, with no period-close match certified by the named close owner,
            no subledger-to-GL tie-out certified for the named ledger, and no account proven complete
            against source certified for the customer and the period, is certification theater, and it is
            not this reconciled either when the reconciliation instrument is missing. A certification claim
            alone is not proof the named reconciliation evidence was on the file. Reconciliation evidence
            alone is not certified of that reconciled successor outcome.
          </p>

          <p>
            Sync refuses to pretend reconciled or certified is a status light. Sync does not deem
            certified for the customer. Sync must not auto-deem-certified. Sync must not treat reconciled
            as certified as Learning credit. Evidence from the plant beats the reconciliation record when
            the record is being used as certified.
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
            directly. The{' '}
            <Link
              href={fieldManualPath(honestyChapter.slug)}
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Honesty boundaries
            </Link>{' '}
            keep this edition from treating a reconciliation record as certified.
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
          </div>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What this article is not claiming</h2>

          <p>
            This is an essay about the Decision Case order, not a customer case study. It names no
            plant, states no savings figure, states no price, and claims no prevented failure. It does
            not claim that reconciled is certified. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, certify the books, or attribute a change in cash, risk, or capacity.
            Sync does not measure reconciled. Sync does not measure certified. Sync does not measure
            reconciled or certified for the customer.
          </p>

          <p>
            Keep this commercial certified distinct from Collected Is Not Recognized, Paid Is Not
            Settled, Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not
            Margin. This certified is not the collected Collected Is Not Recognized already names. This
            certified is not the disbursement Paid Is Not Settled already names. This certified is not
            the settlement Settled Is Not Booked already names. This certified is not the collectible
            Collectible Is Not Applied already names. This essay does not collapse into Collectible Is
            Not Applied. This essay does not rewrite Collectible Is Not Applied. Collectible Is Not
            Applied stays on its own route. This certified is not the applied Applied Is Not Restored
            already names. This essay does not collapse into Applied Is Not Restored. This essay does
            not rewrite Applied Is Not Restored. Applied Is Not Restored stays on its own route. This
            certified is not the extinguishment Extinguished Is Not Reconciled already names. This
            essay does not collapse into Extinguished Is Not Reconciled. This essay does not rewrite
            Extinguished Is Not Reconciled. This certified is not the reconciled Reconciled Is Not
            Attested already names. This essay does not collapse into Reconciled Is Not Attested. This
            essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested stays on its
            own route. This certified is not the reconciled Reconciled Is Not Closed already names.
            This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This certified is not the reconciled Booked Is Not Reconciled
            already names. This essay does not collapse into Booked Is Not Reconciled. This essay does
            not rewrite Booked Is Not Reconciled. This essay does not collapse into Binding Is Not
            Enforced. This essay does not rewrite Binding Is Not Enforced. This essay does not collapse
            into Defended Is Not Owned. This essay does not rewrite Defended Is Not Owned. Defended Is
            Not Owned stays on its own growth-loop route. This certified is not the certification
            Certified Is Not Insured already names. This essay does not collapse into Certified Is Not
            Insured. This essay does not rewrite Certified Is Not Insured. This certified is not the
            certification Assured Is Not Certified already names. This essay does not collapse into
            Assured Is Not Certified. This essay does not rewrite Assured Is Not Certified.
          </p>

          <p>
            Sealed would mean that the certified books for that relieved balance have been sealed — the
            certified period close sealed for the named period, the certified subledger-to-GL tie-out
            sealed on the named ledger, or the certified source-complete account sealed for the customer
            and the period — not merely that the period-close match was certified by the named close
            owner, the subledger-to-GL tie-out was certified for the named ledger, or the account proven
            complete against source was certified for the customer and the period.{' '}
            <Link
              href="/insights/successor-certified-is-not-sealed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Certified Is Not Sealed
            </Link>
            . Read it at /insights/successor-certified-is-not-sealed. This essay does not rewrite that
            thesis. This essay does not give that sealed a new meaning. This essay does not create a
            filing spine for Reconciled Is Not Certified. This essay does not create a filing spine at
            /insights/reconciled-is-not-certified.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Reconciled is the
              period close matched, the subledger tied out to the GL, or the account proven complete
              against source for that relieved balance. Certified is those reconciled books: period-close
              match certified by the named close owner, subledger-to-GL tie-out certified for the named
              ledger, or account proven complete against source certified for the customer and the period.
              A{' '}
              <Link href="/strategic-pilot" className="text-[#3B82F6] hover:text-white transition-colors">
                Strategic Pilot
              </Link>{' '}
              is a governed proof around one operating decision. A{' '}
              <Link
                href="/reliability-assessment"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Reliability Assessment
              </Link>{' '}
              asks whether the records can support a conclusion. None of those is a claim that Sync
              certifies the reconciled books, executes plant work, or that certification write-back is
              live.
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
            </div>
          </div>

          <InsightNextSteps slug="successor-reconciled-is-not-certified" />
        </motion.article>
      </div>
    </main>
  );
}
