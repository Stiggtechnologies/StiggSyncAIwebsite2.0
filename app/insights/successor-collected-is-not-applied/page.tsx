'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-collected-is-not-applied');

export default function SuccessorCollectedIsNotAppliedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Collected Is Not Applied</h1>
            <p className="text-xl text-gray-400">
              Collected is not applied. A collected commercial outcome — cash received, remittance
              cleared, premium paid in, or the receivable extinguished by payment for the invoiced
              amount — is not the same as that collected amount having been applied to the invoiced
              obligation (posted against the specific invoice/receivable, allocated to the billed period
              or premium, or marked as satisfying that exact billed claim) — not merely that money
              arrived.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-invoiced-is-not-collected"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Invoiced Is Not Collected
              </Link>
              . Invoiced Is Not Collected already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that collected a new meaning. This essay starts from the
              collected the successor-spine Invoiced Is Not Collected already names. This refusal sits on
              the commercial spine. This is the application spine after that collection. The prior essay
              is the collection spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The collected practice is not the applied practice
          </h2>

          <p>
            Collected means that invoiced commercial amount has been collected — cash received,
            remittance cleared, premium paid in, or the receivable extinguished by payment for the
            invoiced amount — by an executed collection instrument. Applied means that collected
            commercial amount has been applied to the invoiced obligation — posted against the specific
            invoice/receivable, allocated to the billed period or premium, or marked as satisfying that
            exact billed claim — by an executed application instrument. A collection is not an
            application. This split is collected versus applied.
          </p>

          <p>
            Cash received with no posting against the specific invoice/receivable is not applied. A
            remittance cleared with no allocation to the billed period or premium is not applied. A
            premium paid in with no allocation to the billed period or premium is not applied. A
            receivable extinguished by payment for the invoiced amount with no mark that the payment
            satisfies that exact billed claim is not applied. Application talk that says the money
            arrived while the collected amount has not been posted against the specific
            invoice/receivable, has not been allocated to the billed period or premium, or has not been
            marked as satisfying that exact billed claim is not applied.
          </p>

          <p>
            A firm can be collected and still not applied. A firm can chase application theater and still
            not be collected. A collection package alone is not applied of that collected successor
            outcome. Collected cash or margin is not the same as an applied commercial outcome. The
            refusal is not merely that money arrived.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What an applied record is allowed to be</h2>

          <p>
            An executed application instrument is a posting record that shows the received cash was
            posted against the specific invoice/receivable, an allocation record that shows the cleared
            remittance or paid-in premium was allocated to the billed period or premium, a satisfaction
            mark that shows the payment was marked as satisfying that exact billed claim, or an
            application binder that releases the collected amount as applied only when posted against the
            specific invoice/receivable, allocated to the billed period or premium, and marked as
            satisfying that exact billed claim are on the file.
          </p>

          <p>
            The application record has to trail back to the collection evidence, and the collection
            evidence has to trail back to the invoicing{' '}
            <Link
              href="/insights/successor-invoiced-is-not-collected"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Invoiced Is Not Collected
            </Link>{' '}
            already required. A posting that cannot name the specific invoice or receivable, an
            allocation that cannot name the billed period or premium, or a satisfaction mark that cannot
            name the exact billed claim is application theater. It is not this applied.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named collected is not applied</h2>

          <p>
            Named collected is not applied. The collected practice is not the applied practice. A
            collection record answers whether cash was received, the remittance cleared, the premium was
            paid in, or the receivable was extinguished by payment for the invoiced amount. An
            application record answers whether that collected amount was applied to the invoiced
            obligation. Collected is not applied.
          </p>

          <p>
            A claim that collection so it is applied, while the application trail is missing, is not this
            applied. Cash received, a remittance cleared, a premium paid in, or a receivable extinguished
            by payment, with no posting against the specific invoice/receivable, no allocation to the
            billed period or premium, and no mark as satisfying that exact billed claim, is application
            theater, and it is not this collected either when the collection instrument is missing. An
            application claim alone is not proof the named collection evidence was on the file.
            Collection evidence alone is not applied of that collected successor outcome.
          </p>

          <p>
            Sync refuses to pretend collected or applied is a status light. Sync does not deem applied
            for the customer. Sync must not auto-deem-applied. Sync must not treat collected as applied
            as Learning credit. Evidence from the plant beats the collection record when the record is
            being used as applied.
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
            keep this edition from treating a collection record as applied.
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
            not claim that collected is applied. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, or attribute a change in
            cash, risk, or capacity. Sync does not measure collected. Sync does not measure applied.
            Sync does not measure collected or applied for the customer.
          </p>

          <p>
            Keep this commercial applied distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This applied is not the collected Collected Is Not Recognized already names. This applied is
            not the disbursement Paid Is Not Settled already names. This applied is not the settlement
            Settled Is Not Booked already names. This applied is not the collectible Collectible Is Not
            Applied already names. This essay does not collapse into Collectible Is Not Applied. This
            essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its
            own route. This applied is not the applied Applied Is Not Restored already names. This essay
            does not collapse into Applied Is Not Restored. This essay does not rewrite Applied Is Not
            Restored. This essay does not collapse into Binding Is Not Enforced. This essay does not
            rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not Owned.
            This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route.
          </p>

          <p>
            Relieved would mean that the applied commercial amount has relieved the open invoiced
            obligation on the books — the posted amount relieved from open receivables, the allocated
            return relieved from the open remittance claim, the allocated premium relieved from the open
            premium balance, or the marked payment relieved from the open billed commitment — not merely
            that the collected amount was posted against the specific invoice/receivable, allocated to
            the billed period or premium, or marked as satisfying that exact billed claim.{' '}
            <Link
              href="/insights/successor-applied-is-not-relieved"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Applied Is Not Relieved
            </Link>
            . Read it at /insights/successor-applied-is-not-relieved. This essay does not rewrite that
            thesis. This essay does not give that relieved a new meaning. This essay does not create a
            filing spine for Collected Is Not Applied. This essay does not create a filing spine at
            /insights/collected-is-not-applied.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Collected is cash
              received, remittance cleared, premium paid in, or the receivable extinguished by payment
              for the invoiced amount. Applied is that collected amount posted against the specific
              invoice/receivable, allocated to the billed period or premium, or marked as satisfying that
              exact billed claim. A{' '}
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
              applies the collected amount, executes plant work, or that application write-back is live.
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

          <InsightNextSteps slug="successor-collected-is-not-applied" />
        </motion.article>
      </div>
    </main>
  );
}
