'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-invoiced-is-not-collected');

export default function SuccessorInvoicedIsNotCollectedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Invoiced Is Not Collected</h1>
            <p className="text-xl text-gray-400">
              Invoiced is not collected. An invoiced commercial outcome — the fee billed, the premium
              billed for the earned period, the return billed or called as due, or the earned commitment
              presented as a receivable — is not the same as that invoiced amount having been collected
              (cash received, remittance cleared, premium paid in, or the receivable extinguished by
              payment) — not merely that the earned outcome was invoiced or presented as due.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-earned-is-not-invoiced"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Earned Is Not Invoiced
              </Link>
              . Earned Is Not Invoiced already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that invoiced a new meaning. This essay starts from the
              invoiced the successor-spine Earned Is Not Invoiced already names. This refusal sits on the
              commercial spine. This is the collection spine after that invoicing. The prior essay is the
              invoicing spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The invoiced practice is not the collected practice
          </h2>

          <p>
            Invoiced means that earned commercial outcome has been invoiced — the fee billed, the premium
            billed for the earned period, the return billed or called as due, or the earned commitment
            presented as a receivable — by an executed invoicing instrument. Collected means that
            invoiced commercial amount has been collected — cash received, remittance cleared, premium
            paid in, or the receivable extinguished by payment — by an executed collection instrument. An
            invoicing is not a collection. This split is invoiced versus collected.
          </p>

          <p>
            A fee billed with no cash received is not collected. A premium billed for the earned period
            with no premium paid in is not collected. A return billed or called as due with no remittance
            cleared is not collected. An earned commitment presented as a receivable with no receivable
            extinguished by payment is not collected. Collection talk that says the outcome was invoiced
            while the cash has not been received, the remittance has not cleared, the premium has not
            been paid in, or the receivable has not been extinguished by payment is not collected.
          </p>

          <p>
            A firm can be invoiced and still not collected. A firm can chase collection theater and still
            not be invoiced. An invoicing package alone is not collected of that invoiced successor
            outcome. Invoiced cash or margin is not the same as a collected commercial outcome. The
            refusal is not merely that the earned outcome was invoiced or presented as due.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What a collected record is allowed to be</h2>

          <p>
            An executed collection instrument is a cash receipt that shows the billed fee was received, a
            remittance record that shows the return remittance cleared, a premium-paid record that shows
            the premium was paid in for the earned period, an extinguishment record that shows the
            receivable was extinguished by payment, or a collection binder that releases the invoiced
            amount as collected only when cash received, remittance cleared, premium paid in, and the
            receivable extinguished by payment are on the file.
          </p>

          <p>
            The collection record has to trail back to the invoicing evidence, and the invoicing evidence
            has to trail back to the earning{' '}
            <Link
              href="/insights/successor-earned-is-not-invoiced"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Earned Is Not Invoiced
            </Link>{' '}
            already required. A cash receipt that cannot name the billed fee, a remittance record that
            cannot name the billed return, a premium-paid record that cannot name the earned period, or
            an extinguishment that cannot name the billed commitment is collection theater. It is not
            this collected.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named invoiced is not collected</h2>

          <p>
            Named invoiced is not collected. The invoiced practice is not the collected practice. An
            invoicing record answers whether the fee was billed, the premium was billed for the earned
            period, the return was billed or called as due, or the earned commitment was presented as a
            receivable. A collection record answers whether that invoiced amount was collected. Invoiced
            is not collected.
          </p>

          <p>
            A claim that invoicing so it is collected, while the collection trail is missing, is not this
            collected. A fee billed, a premium billed for the earned period, a return billed or called as
            due, or an earned commitment presented as a receivable, with no cash received, no remittance
            cleared, no premium paid in, and no receivable extinguished by payment, is collection
            theater, and it is not this invoiced either when the invoicing instrument is missing. A
            collection claim alone is not proof the named invoicing evidence was on the file. Invoicing
            evidence alone is not collected of that invoiced successor outcome.
          </p>

          <p>
            Sync refuses to pretend invoiced or collected is a status light. Sync does not deem collected
            for the customer. Sync must not auto-deem-collected. Sync must not treat invoiced as
            collected as Learning credit. Evidence from the plant beats the invoicing record when the
            record is being used as collected.
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
            keep this edition from treating an invoicing record as collected.
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
            not claim that invoiced is collected. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, or attribute a change in cash, risk, or
            capacity. Sync does not measure invoiced. Sync does not measure collected. Sync does not
            measure invoiced or collected for the customer.
          </p>

          <p>
            Keep this commercial collected distinct from Collected Is Not Recognized, Paid Is Not
            Settled, Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is
            Not Margin. This collected is not the collected Collected Is Not Recognized already names.
            This collected is not the disbursement Paid Is Not Settled already names. This collected is
            not the settlement Settled Is Not Booked already names. This essay does not collapse into
            Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced. This essay
            does not collapse into Defended Is Not Owned. This essay does not rewrite Defended Is Not
            Owned. Defended Is Not Owned stays on its own growth-loop route.
          </p>

          <p>
            Applied would mean that the collected commercial amount has been applied to the invoiced
            item it belongs to — the received cash applied to the billed fee, the cleared remittance
            applied to the earned return, the paid-in premium applied to the earned period, or the
            payment applied to the billed commitment — not merely that cash was received, the remittance
            cleared, the premium was paid in, or the receivable was extinguished by payment.{' '}
            <Link
              href="/insights/successor-collected-is-not-applied"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Collected Is Not Applied
            </Link>
            . Read it at /insights/successor-collected-is-not-applied. This essay does not rewrite that
            thesis. This essay does not give that applied a new meaning. This essay does not create a
            filing spine for Invoiced Is Not Collected. This essay does not create a filing spine at
            /insights/invoiced-is-not-collected.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Invoiced is the
              fee billed, the premium billed for the earned period, the return billed or called as due,
              or the earned commitment presented as a receivable. Collected is that invoiced amount
              received: cash received, remittance cleared, premium paid in, or the receivable
              extinguished by payment. A{' '}
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
              collects the invoiced amount, executes plant work, or that collection write-back is live.
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

          <InsightNextSteps slug="successor-invoiced-is-not-collected" />
        </motion.article>
      </div>
    </main>
  );
}
