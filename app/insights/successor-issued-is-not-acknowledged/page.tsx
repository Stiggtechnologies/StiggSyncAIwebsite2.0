'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-issued-is-not-acknowledged');

export default function SuccessorIssuedIsNotAcknowledgedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Issued Is Not Acknowledged</h1>
            <p className="text-xl text-gray-400">
              Issued is not acknowledged. Books that have been issued as sealed packs — the issued close
              pack released to the named recipients for the named period, the issued statement pack
              released for the named ledger and period, or the issued customer pack released for the
              customer and the period — are not the same as those issued packs having been acknowledged
              (the named recipients confirming receipt of the issued close pack, the named ledger owners
              confirming receipt of the issued statement pack, or the customer confirming receipt of the
              issued customer pack) — not merely that the sealed books were issued as a close pack, a
              statement pack, or a customer pack.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-sealed-is-not-issued"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Sealed Is Not Issued
              </Link>
              . Sealed Is Not Issued already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that issued a new meaning. This essay starts from the
              issued the successor-spine Sealed Is Not Issued already names. This refusal sits on the
              commercial spine. This is the acknowledgment spine after that issue. The prior essay is the
              issue spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The issued practice is not the acknowledged practice
          </h2>

          <p>
            Issued means that sealed commercial books have been issued as sealed packs — the issued close
            pack released to the named recipients for the named period, the issued statement pack released
            for the named ledger and period, or the issued customer pack released for the customer and the
            period — by an executed issue instrument. Acknowledged means that those issued packs have been
            acknowledged — the named recipients confirming receipt of the issued close pack, the named
            ledger owners confirming receipt of the issued statement pack, or the customer confirming
            receipt of the issued customer pack — by an executed acknowledgment instrument. An issue is
            not an acknowledgment. This split is issued versus acknowledged.
          </p>

          <p>
            An issued close pack released to the named recipients for the named period, with those named
            recipients not confirming receipt of the issued close pack, is not acknowledged. An issued
            statement pack released for the named ledger and period, with the named ledger owners not
            confirming receipt of the issued statement pack, is not acknowledged. An issued customer pack
            released for the customer and the period, with the customer not confirming receipt of the
            issued customer pack, is not acknowledged. Acknowledgment talk that says the sealed books were
            issued as a close pack, a statement pack, or a customer pack while the named recipients have
            not confirmed receipt of the issued close pack, the named ledger owners have not confirmed
            receipt of the issued statement pack, or the customer has not confirmed receipt of the issued
            customer pack is not acknowledged.
          </p>

          <p>
            A firm can be issued and still not acknowledged. A firm can chase acknowledgment theater and
            still not be issued. An issue package alone is not acknowledged of that issued successor
            outcome. Issued cash or margin is not the same as an acknowledged commercial outcome. The
            refusal is not merely that the sealed books were issued as a close pack, a statement pack, or
            a customer pack.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an acknowledged record is allowed to be
          </h2>

          <p>
            An executed acknowledgment instrument is a close-receipt record that shows the named
            recipients confirmed receipt of the issued close pack for the named period, a statement-receipt
            record that shows the named ledger owners confirmed receipt of the issued statement pack for
            the named ledger and period, a customer-receipt record that shows the customer confirmed
            receipt of the issued customer pack for the customer and the period, or an acknowledgment
            binder that releases the issued packs as acknowledged only when the named recipients confirmed
            receipt of the issued close pack, the named ledger owners confirmed receipt of the issued
            statement pack, and the customer confirmed receipt of the issued customer pack are on the file.
          </p>

          <p>
            The acknowledgment record has to trail back to the issue evidence, and the issue evidence has
            to trail back to the seal{' '}
            <Link
              href="/insights/successor-sealed-is-not-issued"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Sealed Is Not Issued
            </Link>{' '}
            already required. A close-receipt that cannot name the recipients, the period, and the issued
            close pack, a statement-receipt that cannot name the ledger owners, the ledger, the period, and
            the issued statement pack, or a customer-receipt that cannot name the customer, the period, and
            the issued customer pack is acknowledgment theater. It is not this acknowledged.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named issued is not acknowledged</h2>

          <p>
            Named issued is not acknowledged. The issued practice is not the acknowledged practice. An
            issue record answers whether the issued close pack was released to the named recipients for
            the named period, the issued statement pack was released for the named ledger and period, or
            the issued customer pack was released for the customer and the period. An acknowledgment
            record answers whether those issued packs were acknowledged. Issued is not acknowledged.
          </p>

          <p>
            A claim that issuing so it is acknowledged, while the acknowledgment trail is missing, is not
            this acknowledged. An issued close pack released to the named recipients for the named period,
            an issued statement pack released for the named ledger and period, or an issued customer pack
            released for the customer and the period, with no named recipients confirming receipt of the
            issued close pack, no named ledger owners confirming receipt of the issued statement pack, and
            no customer confirming receipt of the issued customer pack, is acknowledgment theater, and it
            is not this issued either when the issue instrument is missing. An acknowledgment claim alone
            is not proof the named issue evidence was on the file. Issue evidence alone is not
            acknowledged of that issued successor outcome.
          </p>

          <p>
            Sync refuses to pretend issued or acknowledged is a status light. Sync does not deem
            acknowledged for the customer. Sync must not auto-deem-acknowledged. Sync must not treat issued
            as acknowledged as Learning credit. Evidence from the plant beats the issue record when the
            record is being used as acknowledged.
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
            keep this edition from treating an issue record as acknowledged.
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
            not claim that issued is acknowledged. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, certify the books, seal the books, issue the close pack, acknowledge
            receipt of the issued pack, or attribute a change in cash, risk, or capacity. Sync does not
            measure issued. Sync does not measure acknowledged. Sync does not measure issued or
            acknowledged for the customer.
          </p>

          <p>
            Keep this commercial acknowledged distinct from Collected Is Not Recognized, Paid Is Not
            Settled, Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not
            Margin. This acknowledged is not the collected Collected Is Not Recognized already names.
            This acknowledged is not the disbursement Paid Is Not Settled already names. This acknowledged
            is not the settlement Settled Is Not Booked already names. This acknowledged is not the
            collectible Collectible Is Not Applied already names. This essay does not collapse into
            Collectible Is Not Applied. This essay does not rewrite Collectible Is Not Applied.
            Collectible Is Not Applied stays on its own route. This acknowledged is not the applied
            Applied Is Not Restored already names. This essay does not collapse into Applied Is Not
            Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not Restored stays
            on its own route. This acknowledged is not the extinguishment Extinguished Is Not Reconciled
            already names. This essay does not collapse into Extinguished Is Not Reconciled. This essay
            does not rewrite Extinguished Is Not Reconciled. This acknowledged is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This acknowledged is not the reconciled Reconciled Is Not Closed
            already names. This essay does not collapse into Reconciled Is Not Closed. This essay does not
            rewrite Reconciled Is Not Closed. This acknowledged is not the reconciled Booked Is Not
            Reconciled already names. This essay does not collapse into Booked Is Not Reconciled. This
            essay does not rewrite Booked Is Not Reconciled. This essay does not collapse into Binding Is
            Not Enforced. This essay does not rewrite Binding Is Not Enforced. This essay does not
            collapse into Defended Is Not Owned. This essay does not rewrite Defended Is Not Owned.
            Defended Is Not Owned stays on its own growth-loop route. This acknowledged is not the
            certification Certified Is Not Insured already names. This essay does not collapse into
            Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured. This
            acknowledged is not the certification Assured Is Not Certified already names. This essay does
            not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not
            Certified.
          </p>

          <p>
            Accepted would mean that the acknowledged books for that issued sealed certified relieved
            balance have been accepted — the issued close pack accepted by the named recipients as the
            period record for the named period, the issued statement pack accepted by the named ledger
            owners as the governing statement for the named ledger and period, or the issued customer pack
            accepted by the customer as the period account record — not merely that the named recipients
            confirmed receipt of the issued close pack, the named ledger owners confirmed receipt of the
            issued statement pack, or the customer confirmed receipt of the issued customer pack.{' '}
            <Link
              href="/insights/successor-acknowledged-is-not-accepted"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Acknowledged Is Not Accepted
            </Link>
            . Read it at /insights/successor-acknowledged-is-not-accepted. This essay does not rewrite that
            thesis. This essay does not give that accepted a new meaning. This essay does not create a
            filing spine for Issued Is Not Acknowledged. This essay does not create a filing spine at
            /insights/issued-is-not-acknowledged.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Issued is the issued
              close pack released to the named recipients for the named period, the issued statement pack
              released for the named ledger and period, or the issued customer pack released for the
              customer and the period. Acknowledged is those issued packs: the named recipients confirming
              receipt of the issued close pack, the named ledger owners confirming receipt of the issued
              statement pack, or the customer confirming receipt of the issued customer pack. A{' '}
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
              acknowledges the issued packs, executes plant work, or that acknowledgment write-back is live.
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

          <InsightNextSteps slug="successor-issued-is-not-acknowledged" />
        </motion.article>
      </div>
    </main>
  );
}
