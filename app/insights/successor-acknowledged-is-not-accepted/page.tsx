'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-acknowledged-is-not-accepted');

export default function SuccessorAcknowledgedIsNotAcceptedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Acknowledged Is Not Accepted</h1>
            <p className="text-xl text-gray-400">
              Acknowledged is not accepted. Issued packs that have been acknowledged — the named
              recipients confirming receipt of the issued close pack for the named period, the named
              ledger owners confirming receipt of the issued statement pack for the named ledger and
              period, or the customer confirming receipt of the issued customer pack for the customer and
              the period — are not the same as those acknowledged packs having been accepted (the named
              recipients accepting the numbers and close for the named period, the named ledger owners
              accepting the statement for the named ledger and period, or the customer accepting the
              customer pack for the customer and the period) — not merely that receipt of the issued packs
              was acknowledged.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-issued-is-not-acknowledged"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Issued Is Not Acknowledged
              </Link>
              . Issued Is Not Acknowledged already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that acknowledged a new meaning. This essay starts from the
              acknowledged the successor-spine Issued Is Not Acknowledged already names. This refusal sits
              on the commercial spine. This is the acceptance spine after that acknowledgment. The prior
              essay is the acknowledgment spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The acknowledged practice is not the accepted practice
          </h2>

          <p>
            Acknowledged means that issued commercial packs have been acknowledged — the named recipients
            confirming receipt of the issued close pack for the named period, the named ledger owners
            confirming receipt of the issued statement pack for the named ledger and period, or the
            customer confirming receipt of the issued customer pack for the customer and the period — by
            an executed acknowledgment instrument. Accepted means that those acknowledged packs have been
            accepted — the named recipients accepting the numbers and close for the named period, the
            named ledger owners accepting the statement for the named ledger and period, or the customer
            accepting the customer pack for the customer and the period — by an executed acceptance
            instrument. An acknowledgment is not an acceptance. This split is acknowledged versus
            accepted.
          </p>

          <p>
            An acknowledged close pack whose named recipients confirmed receipt for the named period, with
            those named recipients not accepting the numbers and close for the named period, is not
            accepted. An acknowledged statement pack whose named ledger owners confirmed receipt for the
            named ledger and period, with the named ledger owners not accepting the statement for the
            named ledger and period, is not accepted. An acknowledged customer pack whose customer
            confirmed receipt for the customer and the period, with the customer not accepting the
            customer pack for the customer and the period, is not accepted. Acceptance talk that says
            receipt of the issued packs was acknowledged while the named recipients have not accepted the
            numbers and close for the named period, the named ledger owners have not accepted the
            statement for the named ledger and period, or the customer has not accepted the customer pack
            for the customer and the period is not accepted.
          </p>

          <p>
            A firm can be acknowledged and still not accepted. A firm can chase acceptance theater and
            still not be acknowledged. An acknowledgment package alone is not accepted of that
            acknowledged successor outcome. Acknowledged cash or margin is not the same as an accepted
            commercial outcome. The refusal is not merely that receipt of the issued packs was
            acknowledged.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an accepted record is allowed to be
          </h2>

          <p>
            An executed acceptance instrument is a close-acceptance record that shows the named recipients
            accepted the numbers and close for the named period, a statement-acceptance record that shows
            the named ledger owners accepted the statement for the named ledger and period, a
            customer-acceptance record that shows the customer accepted the customer pack for the customer
            and the period, or an acceptance binder that releases the acknowledged packs as accepted only
            when the named recipients accepted the numbers and close, the named ledger owners accepted the
            statement, and the customer accepted the customer pack are on the file.
          </p>

          <p>
            The acceptance record has to trail back to the acknowledgment evidence, and the acknowledgment
            evidence has to trail back to the issue{' '}
            <Link
              href="/insights/successor-issued-is-not-acknowledged"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Issued Is Not Acknowledged
            </Link>{' '}
            already required. A close-acceptance that cannot name the recipients, the period, and the
            numbers and close, a statement-acceptance that cannot name the ledger owners, the ledger, the
            period, and the statement, or a customer-acceptance that cannot name the customer, the period,
            and the customer pack is acceptance theater. It is not this accepted.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            Named acknowledged is not accepted
          </h2>

          <p>
            Named acknowledged is not accepted. The acknowledged practice is not the accepted practice. An
            acknowledgment record answers whether the named recipients confirmed receipt of the issued
            close pack for the named period, the named ledger owners confirmed receipt of the issued
            statement pack for the named ledger and period, or the customer confirmed receipt of the
            issued customer pack for the customer and the period. An acceptance record answers whether
            those acknowledged packs were accepted. Acknowledged is not accepted.
          </p>

          <p>
            A claim that acknowledging so it is accepted, while the acceptance trail is missing, is not
            this accepted. An acknowledged close pack whose named recipients confirmed receipt for the
            named period, an acknowledged statement pack whose named ledger owners confirmed receipt for
            the named ledger and period, or an acknowledged customer pack whose customer confirmed receipt
            for the customer and the period, with no named recipients accepting the numbers and close, no
            named ledger owners accepting the statement, and no customer accepting the customer pack, is
            acceptance theater, and it is not this acknowledged either when the acknowledgment instrument
            is missing. An acceptance claim alone is not proof the named acknowledgment evidence was on
            the file. Acknowledgment evidence alone is not accepted of that acknowledged successor
            outcome.
          </p>

          <p>
            Sync refuses to pretend acknowledged or accepted is a status light. Sync does not deem
            accepted for the customer. Sync must not auto-deem-accepted. Sync must not treat acknowledged
            as accepted as Learning credit. Evidence from the plant beats the acknowledgment record when
            the record is being used as accepted.
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
            keep this edition from treating an acknowledgment record as accepted.
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
            not claim that acknowledged is accepted. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, certify the books, seal the books, issue the close pack, acknowledge
            receipt of the issued pack, accept the numbers and close, accept the statement, accept the
            customer pack, or attribute a change in cash, risk, or capacity. Sync does not measure
            acknowledged. Sync does not measure accepted. Sync does not measure acknowledged or accepted
            for the customer.
          </p>

          <p>
            Keep this commercial accepted distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This accepted is not the collected Collected Is Not Recognized already names. This accepted is
            not the disbursement Paid Is Not Settled already names. This accepted is not the settlement
            Settled Is Not Booked already names. This accepted is not the collectible Collectible Is Not
            Applied already names. This essay does not collapse into Collectible Is Not Applied. This
            essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own
            route. This accepted is not the applied Applied Is Not Restored already names. This essay does
            not collapse into Applied Is Not Restored. This essay does not rewrite Applied Is Not
            Restored. Applied Is Not Restored stays on its own route. This accepted is not the
            extinguishment Extinguished Is Not Reconciled already names. This essay does not collapse into
            Extinguished Is Not Reconciled. This essay does not rewrite Extinguished Is Not Reconciled.
            This accepted is not the reconciled Reconciled Is Not Attested already names. This essay does
            not collapse into Reconciled Is Not Attested. This essay does not rewrite Reconciled Is Not
            Attested. Reconciled Is Not Attested stays on its own route. This accepted is not the
            reconciled Reconciled Is Not Closed already names. This essay does not collapse into
            Reconciled Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This accepted
            is not the reconciled Booked Is Not Reconciled already names. This essay does not collapse
            into Booked Is Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This
            essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is
            Not Enforced. This essay does not collapse into Defended Is Not Owned. This essay does not
            rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own growth-loop route. This
            accepted is not the certification Certified Is Not Insured already names. This essay does not
            collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured.
            This accepted is not the certification Assured Is Not Certified already names. This essay does
            not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not
            Certified. This accepted is not the accepted Accepted Is Not Posted already names. This essay
            does not collapse into Accepted Is Not Posted. This essay does not rewrite Accepted Is Not
            Posted. This accepted is not the accepted Restored Is Not Accepted already names. This essay
            does not collapse into Restored Is Not Accepted. This essay does not rewrite Restored Is Not
            Accepted.
          </p>

          <p>
            Adopted would mean that the accepted books for that acknowledged issued sealed certified
            relieved balance have been adopted — the accepted close adopted by the named recipients as the
            standing period record for the named period, the accepted statement adopted by the named
            ledger owners as the standing statement for the named ledger and period, or the accepted
            customer pack adopted by the customer as the standing account record for the customer and the
            period — not merely that the named recipients accepted the numbers and close for the named
            period, the named ledger owners accepted the statement for the named ledger and period, or the
            customer accepted the customer pack for the customer and the period.{' '}
            <Link
              href="/insights/successor-accepted-is-not-adopted"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Accepted Is Not Adopted
            </Link>
            . Read it at /insights/successor-accepted-is-not-adopted. This essay does not rewrite that
            thesis. This essay does not give that adopted a new meaning. This essay does not create a
            filing spine for Acknowledged Is Not Accepted. This essay does not create a filing spine at
            /insights/acknowledged-is-not-accepted.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Acknowledged is the
              named recipients confirming receipt of the issued close pack for the named period, the named
              ledger owners confirming receipt of the issued statement pack for the named ledger and
              period, or the customer confirming receipt of the issued customer pack for the customer and
              the period. Accepted is those acknowledged packs: the named recipients accepting the numbers
              and close for the named period, the named ledger owners accepting the statement for the named
              ledger and period, or the customer accepting the customer pack for the customer and the
              period. A{' '}
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
              accepts the acknowledged packs, executes plant work, or that acceptance write-back is live.
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

          <InsightNextSteps slug="successor-acknowledged-is-not-accepted" />
        </motion.article>
      </div>
    </main>
  );
}
