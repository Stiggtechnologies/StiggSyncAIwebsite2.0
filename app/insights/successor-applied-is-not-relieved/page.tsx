'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-applied-is-not-relieved');

export default function SuccessorAppliedIsNotRelievedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Applied Is Not Relieved</h1>
            <p className="text-xl text-gray-400">
              Applied is not relieved. An applied commercial outcome — cash/payment posted against the
              specific invoice/receivable, allocated to the billed period or premium, or marked as
              satisfying that exact billed claim — is not the same as the obligation having been relieved
              (the liability or receivable closed out as satisfied, the claim released from outstanding,
              or the balance extinguished for reporting and customer account purposes) — not merely that
              the payment was applied somewhere on the account.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-collected-is-not-applied"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Collected Is Not Applied
              </Link>
              . Collected Is Not Applied already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that applied a new meaning. This essay starts from the
              applied the successor-spine Collected Is Not Applied already names. This refusal sits on
              the commercial spine. This is the relief spine after that application. The prior essay is
              the application spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The applied practice is not the relieved practice
          </h2>

          <p>
            Applied means that collected commercial amount has been applied to the invoiced obligation —
            posted against the specific invoice/receivable, allocated to the billed period or premium, or
            marked as satisfying that exact billed claim — by an executed application instrument.
            Relieved means that applied commercial obligation has been relieved — the liability or
            receivable closed out as satisfied, the claim released from outstanding, or the balance
            extinguished for reporting and customer account purposes — by an executed relief instrument.
            An application is not a relief. This split is applied versus relieved.
          </p>

          <p>
            A posting against the specific invoice/receivable with the liability or receivable still open
            is not relieved. An allocation to the billed period or premium with the claim still
            outstanding is not relieved. A mark that the payment satisfies that exact billed claim with
            the balance still showing for reporting and the customer account is not relieved. Relief talk
            that says the payment was applied somewhere on the account while the liability or receivable
            has not been closed out as satisfied, the claim has not been released from outstanding, or
            the balance has not been extinguished for reporting and customer account purposes is not
            relieved.
          </p>

          <p>
            A firm can be applied and still not relieved. A firm can chase relief theater and still not
            be applied. An application package alone is not relieved of that applied successor outcome.
            Applied cash or margin is not the same as a relieved commercial outcome. The refusal is not
            merely that the payment was applied somewhere on the account.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What a relieved record is allowed to be</h2>

          <p>
            An executed relief instrument is a close-out record that shows the liability or receivable
            was closed out as satisfied, a release record that shows the claim was released from
            outstanding, an extinguishment record that shows the balance was extinguished for reporting
            and customer account purposes, or a relief binder that releases the applied obligation as
            relieved only when the liability or receivable closed out as satisfied, the claim released
            from outstanding, and the balance extinguished for reporting and customer account purposes
            are on the file.
          </p>

          <p>
            The relief record has to trail back to the application evidence, and the application evidence
            has to trail back to the collection{' '}
            <Link
              href="/insights/successor-collected-is-not-applied"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Collected Is Not Applied
            </Link>{' '}
            already required. A close-out that cannot name the liability or receivable, a release that
            cannot name the claim, or an extinguishment that cannot name the balance for reporting and
            the customer account is relief theater. It is not this relieved.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named applied is not relieved</h2>

          <p>
            Named applied is not relieved. The applied practice is not the relieved practice. An
            application record answers whether cash or payment was posted against the specific
            invoice/receivable, allocated to the billed period or premium, or marked as satisfying that
            exact billed claim. A relief record answers whether that applied obligation was relieved.
            Applied is not relieved.
          </p>

          <p>
            A claim that application so it is relieved, while the relief trail is missing, is not this
            relieved. Cash or payment posted against the specific invoice/receivable, allocated to the
            billed period or premium, or marked as satisfying that exact billed claim, with no close-out
            of the liability or receivable as satisfied, no release of the claim from outstanding, and no
            extinguishment of the balance for reporting and customer account purposes, is relief theater,
            and it is not this applied either when the application instrument is missing. A relief claim
            alone is not proof the named application evidence was on the file. Application evidence alone
            is not relieved of that applied successor outcome.
          </p>

          <p>
            Sync refuses to pretend applied or relieved is a status light. Sync does not deem relieved
            for the customer. Sync must not auto-deem-relieved. Sync must not treat applied as relieved
            as Learning credit. Evidence from the plant beats the application record when the record is
            being used as relieved.
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
            keep this edition from treating an application record as relieved.
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
            not claim that applied is relieved. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance, or
            attribute a change in cash, risk, or capacity. Sync does not measure applied. Sync does not
            measure relieved. Sync does not measure applied or relieved for the customer.
          </p>

          <p>
            Keep this commercial relieved distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This relieved is not the collected Collected Is Not Recognized already names. This relieved is
            not the disbursement Paid Is Not Settled already names. This relieved is not the settlement
            Settled Is Not Booked already names. This relieved is not the collectible Collectible Is Not
            Applied already names. This essay does not collapse into Collectible Is Not Applied. This
            essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its
            own route. This relieved is not the applied Applied Is Not Restored already names. This essay
            does not collapse into Applied Is Not Restored. This essay does not rewrite Applied Is Not
            Restored. Applied Is Not Restored stays on its own route. This relieved is not the
            extinguishment Extinguished Is Not Reconciled already names. This essay does not collapse
            into Extinguished Is Not Reconciled. This essay does not rewrite Extinguished Is Not
            Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay does not
            rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not Owned.
            This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route.
          </p>

          <p>
            Reconciled would mean that the relieved obligation has been reconciled to the named books —
            the closed-out liability or receivable tied to the ledger control, the released claim tied to
            the named ledger entry, or the extinguished customer-account balance tied to the period books
            — not merely that the liability or receivable was closed out as satisfied, the claim was
            released from outstanding, or the balance was extinguished for reporting and customer account
            purposes.{' '}
            <Link
              href="/insights/successor-relieved-is-not-reconciled"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Relieved Is Not Reconciled
            </Link>
            . Read it at /insights/successor-relieved-is-not-reconciled. This essay does not rewrite that
            thesis. This essay does not give that reconciled a new meaning. This essay does not create a
            filing spine for Applied Is Not Relieved. This essay does not create a filing spine at
            /insights/applied-is-not-relieved.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Applied is cash or
              payment posted against the specific invoice/receivable, allocated to the billed period or
              premium, or marked as satisfying that exact billed claim. Relieved is that obligation closed
              out: the liability or receivable closed out as satisfied, the claim released from
              outstanding, or the balance extinguished for reporting and customer account purposes. A{' '}
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
              relieves the applied obligation, executes plant work, or that relief write-back is live.
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

          <InsightNextSteps slug="successor-applied-is-not-relieved" />
        </motion.article>
      </div>
    </main>
  );
}
