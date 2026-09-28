'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-relieved-is-not-reconciled');

export default function SuccessorRelievedIsNotReconciledPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Relieved Is Not Reconciled</h1>
            <p className="text-xl text-gray-400">
              Relieved is not reconciled. An obligation that has been relieved — the liability or
              receivable closed out as satisfied, the claim released from outstanding, or the balance
              extinguished for reporting and customer account purposes — is not the same as the books
              having been reconciled (period close matched, subledger to GL tied out, or the account
              proven complete against source for that relieved balance) — not merely that the obligation
              was marked relieved.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-applied-is-not-relieved"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Applied Is Not Relieved
              </Link>
              . Applied Is Not Relieved already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that relieved a new meaning. This essay starts from the
              relieved the successor-spine Applied Is Not Relieved already names. This refusal sits on
              the commercial spine. This is the reconciliation spine after that relief. The prior essay
              is the relief spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The relieved practice is not the reconciled practice
          </h2>

          <p>
            Relieved means that applied commercial obligation has been relieved — the liability or
            receivable closed out as satisfied, the claim released from outstanding, or the balance
            extinguished for reporting and customer account purposes — by an executed relief instrument.
            Reconciled means that relieved commercial obligation has been reconciled on the books — the
            period close matched, the subledger tied out to the GL, or the account proven complete
            against source for that relieved balance — by an executed reconciliation instrument. A relief
            is not a reconciliation. This split is relieved versus reconciled.
          </p>

          <p>
            A close-out of the liability or receivable as satisfied with the period close unmatched is
            not reconciled. A release of the claim from outstanding with the subledger not tied out to
            the GL is not reconciled. An extinguishment of the balance for reporting and the customer
            account with the account not proven complete against source is not reconciled. Reconciliation
            talk that says the obligation was marked relieved while the period close has not matched, the
            subledger has not tied out to the GL, or the account has not been proven complete against
            source for that relieved balance is not reconciled.
          </p>

          <p>
            A firm can be relieved and still not reconciled. A firm can chase reconciliation theater and
            still not be relieved. A relief package alone is not reconciled of that relieved successor
            outcome. Relieved cash or margin is not the same as a reconciled commercial outcome. The
            refusal is not merely that the obligation was marked relieved.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a reconciled record is allowed to be
          </h2>

          <p>
            An executed reconciliation instrument is a period-close match record that shows the period
            close matched for that relieved balance, a tie-out record that shows the subledger was tied
            out to the GL for that relieved balance, a source-complete record that shows the account was
            proven complete against source for that relieved balance, or a reconciliation binder that
            releases the relieved obligation as reconciled only when the period close matched, the
            subledger tied out to the GL, and the account proven complete against source for that
            relieved balance are on the file.
          </p>

          <p>
            The reconciliation record has to trail back to the relief evidence, and the relief evidence
            has to trail back to the application{' '}
            <Link
              href="/insights/successor-applied-is-not-relieved"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Applied Is Not Relieved
            </Link>{' '}
            already required. A period-close match that cannot name the relieved balance, a tie-out that
            cannot name the subledger and the GL, or a source proof that cannot name the account and the
            source is reconciliation theater. It is not this reconciled.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named relieved is not reconciled</h2>

          <p>
            Named relieved is not reconciled. The relieved practice is not the reconciled practice. A
            relief record answers whether the liability or receivable was closed out as satisfied, the
            claim was released from outstanding, or the balance was extinguished for reporting and
            customer account purposes. A reconciliation record answers whether the books were reconciled
            for that relieved balance. Relieved is not reconciled.
          </p>

          <p>
            A claim that relief so it is reconciled, while the reconciliation trail is missing, is not
            this reconciled. A liability or receivable closed out as satisfied, a claim released from
            outstanding, or a balance extinguished for reporting and customer account purposes, with no
            period close matched, no subledger tied out to the GL, and no account proven complete against
            source for that relieved balance, is reconciliation theater, and it is not this relieved
            either when the relief instrument is missing. A reconciliation claim alone is not proof the
            named relief evidence was on the file. Relief evidence alone is not reconciled of that
            relieved successor outcome.
          </p>

          <p>
            Sync refuses to pretend relieved or reconciled is a status light. Sync does not deem
            reconciled for the customer. Sync must not auto-deem-reconciled. Sync must not treat relieved
            as reconciled as Learning credit. Evidence from the plant beats the relief record when the
            record is being used as reconciled.
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
            keep this edition from treating a relief record as reconciled.
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
            not claim that relieved is reconciled. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, or attribute a change in cash, risk, or capacity. Sync does not measure
            relieved. Sync does not measure reconciled. Sync does not measure relieved or reconciled for
            the customer.
          </p>

          <p>
            Keep this commercial reconciled distinct from Collected Is Not Recognized, Paid Is Not
            Settled, Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not
            Margin. This reconciled is not the collected Collected Is Not Recognized already names. This
            reconciled is not the disbursement Paid Is Not Settled already names. This reconciled is not
            the settlement Settled Is Not Booked already names. This reconciled is not the collectible
            Collectible Is Not Applied already names. This essay does not collapse into Collectible Is
            Not Applied. This essay does not rewrite Collectible Is Not Applied. Collectible Is Not
            Applied stays on its own route. This reconciled is not the applied Applied Is Not Restored
            already names. This essay does not collapse into Applied Is Not Restored. This essay does
            not rewrite Applied Is Not Restored. Applied Is Not Restored stays on its own route. This
            reconciled is not the extinguishment Extinguished Is Not Reconciled already names. This
            essay does not collapse into Extinguished Is Not Reconciled. This essay does not rewrite
            Extinguished Is Not Reconciled. This reconciled is not the reconciled Reconciled Is Not
            Attested already names. This essay does not collapse into Reconciled Is Not Attested. This
            essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested stays on its
            own route. This reconciled is not the reconciled Reconciled Is Not Closed already names.
            This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This reconciled is not the reconciled Booked Is Not Reconciled
            already names. This essay does not collapse into Booked Is Not Reconciled. This essay does
            not rewrite Booked Is Not Reconciled. This essay does not collapse into Binding Is Not
            Enforced. This essay does not rewrite Binding Is Not Enforced. This essay does not collapse
            into Defended Is Not Owned. This essay does not rewrite Defended Is Not Owned. Defended Is
            Not Owned stays on its own growth-loop route. This certified is not the certification
            Certified Is Not Insured already names. This essay does not collapse into Certified Is Not
            Insured. This essay does not rewrite Certified Is Not Insured.
          </p>

          <p>
            Certified would mean that the reconciled books for that relieved balance have been certified
            — the period-close match certified by the named close owner, the subledger-to-GL tie-out
            certified for the named ledger, or the account proven complete against source certified for
            the customer and the period — not merely that the period close matched, the subledger tied
            out to the GL, or the account was proven complete against source for that relieved balance.{' '}
            <Link
              href="/insights/successor-reconciled-is-not-certified"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Reconciled Is Not Certified
            </Link>
            . Read it at /insights/successor-reconciled-is-not-certified. This essay does not rewrite that
            thesis. This essay does not give that certified a new meaning. This essay does not create a
            filing spine for Relieved Is Not Reconciled. This essay does not create a filing spine at
            /insights/relieved-is-not-reconciled.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Relieved is the
              liability or receivable closed out as satisfied, the claim released from outstanding, or
              the balance extinguished for reporting and customer account purposes. Reconciled is the
              books for that relieved balance: period close matched, subledger to GL tied out, or the
              account proven complete against source. A{' '}
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
              reconciles the relieved obligation, executes plant work, or that reconciliation write-back
              is live.
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

          <InsightNextSteps slug="successor-relieved-is-not-reconciled" />
        </motion.article>
      </div>
    </main>
  );
}
