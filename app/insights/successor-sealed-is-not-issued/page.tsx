'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-sealed-is-not-issued');

export default function SuccessorSealedIsNotIssuedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sealed Is Not Issued</h1>
            <p className="text-xl text-gray-400">
              Sealed is not issued. Books that have been sealed for a certified reconciled relieved balance —
              the period-close certification locked as immutable for the named period, the subledger-to-GL
              certification locked against further amendment for the named ledger and period, or the
              account-complete certification locked as the final attested record for the customer and the
              period — are not the same as those sealed books having been issued (sealed books released as
              the issued close pack to the named recipients, sealed ledger certifications released as the
              issued statement pack for the named ledger and period, or sealed account certifications
              released as the issued customer pack for the customer and the period) — not merely that the
              period-close certification was sealed, the subledger-to-GL certification was locked, or the
              account-complete certification was locked as final.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-certified-is-not-sealed"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Certified Is Not Sealed
              </Link>
              . Certified Is Not Sealed already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that sealed a new meaning. This essay starts from the
              sealed the successor-spine Certified Is Not Sealed already names. This refusal sits on the
              commercial spine. This is the issue spine after that seal. The prior essay is the seal spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The sealed practice is not the issued practice
          </h2>

          <p>
            Sealed means that certified commercial books have been sealed for a reconciled relieved
            balance — the period-close certification locked as immutable for the named period, the
            subledger-to-GL certification locked against further amendment for the named ledger and
            period, or the account-complete certification locked as the final attested record for the
            customer and the period — by an executed seal instrument. Issued means that those sealed
            books have been issued — sealed books released as the issued close pack to the named
            recipients, sealed ledger certifications released as the issued statement pack for the named
            ledger and period, or sealed account certifications released as the issued customer pack for
            the customer and the period — by an executed issue instrument. A seal is not an issue. This
            split is sealed versus issued.
          </p>

          <p>
            A period-close certification locked as immutable for the named period, with those sealed
            books not released as the issued close pack to the named recipients, is not issued. A
            subledger-to-GL certification locked against further amendment for the named ledger and
            period, with those sealed ledger certifications not released as the issued statement pack, is
            not issued. An account-complete certification locked as the final attested record for the
            customer and the period, with those sealed account certifications not released as the issued
            customer pack, is not issued. Issue talk that says the books were sealed while the sealed
            books have not been released as the issued close pack to the named recipients, the sealed
            ledger certifications have not been released as the issued statement pack for the named ledger
            and period, or the sealed account certifications have not been released as the issued customer
            pack for the customer and the period is not issued.
          </p>

          <p>
            A firm can be sealed and still not issued. A firm can chase issuing theater and still not be
            sealed. A seal package alone is not issued of that sealed successor outcome. Sealed cash or
            margin is not the same as an issued commercial outcome. The refusal is not merely that the
            period-close certification was sealed, the subledger-to-GL certification was locked, or the
            account-complete certification was locked as final.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What an issued record is allowed to be</h2>

          <p>
            An executed issue instrument is a close-pack record that shows the sealed books were released
            as the issued close pack to the named recipients, a statement-pack record that shows the
            sealed ledger certifications were released as the issued statement pack for the named ledger
            and period, a customer-pack record that shows the sealed account certifications were released
            as the issued customer pack for the customer and the period, or an issue binder that releases
            the sealed books as issued only when the sealed books released as the issued close pack to the
            named recipients, the sealed ledger certifications released as the issued statement pack for
            the named ledger and period, and the sealed account certifications released as the issued
            customer pack for the customer and the period are on the file.
          </p>

          <p>
            The issue record has to trail back to the seal evidence, and the seal evidence has to trail
            back to the certification{' '}
            <Link
              href="/insights/successor-certified-is-not-sealed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Certified Is Not Sealed
            </Link>{' '}
            already required. A close-pack that cannot name the recipients and the issued close pack, a
            statement-pack that cannot name the ledger, the period, and the issued statement pack, or a
            customer-pack that cannot name the customer, the period, and the issued customer pack is
            issuing theater. It is not this issued.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named sealed is not issued</h2>

          <p>
            Named sealed is not issued. The sealed practice is not the issued practice. A seal record
            answers whether the period-close certification was locked as immutable for the named period,
            the subledger-to-GL certification was locked against further amendment for the named ledger
            and period, or the account-complete certification was locked as the final attested record for
            the customer and the period. An issue record answers whether those sealed books were issued.
            Sealed is not issued.
          </p>

          <p>
            A claim that sealing so it is issued, while the issue trail is missing, is not this issued. A
            period-close certification locked as immutable for the named period, a subledger-to-GL
            certification locked against further amendment for the named ledger and period, or an
            account-complete certification locked as the final attested record for the customer and the
            period, with no sealed books released as the issued close pack to the named recipients, no
            sealed ledger certifications released as the issued statement pack for the named ledger and
            period, and no sealed account certifications released as the issued customer pack for the
            customer and the period, is issuing theater, and it is not this sealed either when the seal
            instrument is missing. An issue claim alone is not proof the named seal evidence was on the
            file. Seal evidence alone is not issued of that sealed successor outcome.
          </p>

          <p>
            Sync refuses to pretend sealed or issued is a status light. Sync does not deem issued for the
            customer. Sync must not auto-deem-issued. Sync must not treat sealed as issued as Learning
            credit. Evidence from the plant beats the seal record when the record is being used as issued.
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
            keep this edition from treating a seal record as issued.
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
            not claim that sealed is issued. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, certify the books, seal the books, issue the close pack, or attribute a
            change in cash, risk, or capacity. Sync does not measure sealed. Sync does not measure
            issued. Sync does not measure sealed or issued for the customer.
          </p>

          <p>
            Keep this commercial issued distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This issued is not the collected Collected Is Not Recognized already names. This issued is
            not the disbursement Paid Is Not Settled already names. This issued is not the settlement
            Settled Is Not Booked already names. This issued is not the collectible Collectible Is Not
            Applied already names. This essay does not collapse into Collectible Is Not Applied. This
            essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its
            own route. This issued is not the applied Applied Is Not Restored already names. This essay
            does not collapse into Applied Is Not Restored. This essay does not rewrite Applied Is Not
            Restored. Applied Is Not Restored stays on its own route. This issued is not the
            extinguishment Extinguished Is Not Reconciled already names. This essay does not collapse
            into Extinguished Is Not Reconciled. This essay does not rewrite Extinguished Is Not
            Reconciled. This issued is not the reconciled Reconciled Is Not Attested already names. This
            essay does not collapse into Reconciled Is Not Attested. This essay does not rewrite
            Reconciled Is Not Attested. Reconciled Is Not Attested stays on its own route. This issued is
            not the reconciled Reconciled Is Not Closed already names. This essay does not collapse into
            Reconciled Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This issued
            is not the reconciled Booked Is Not Reconciled already names. This essay does not collapse
            into Booked Is Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This
            essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is
            Not Enforced. This essay does not collapse into Defended Is Not Owned. This essay does not
            rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own growth-loop route. This
            issued is not the certification Certified Is Not Insured already names. This essay does not
            collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured.
            This issued is not the certification Assured Is Not Certified already names. This essay does
            not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not
            Certified.
          </p>

          <p>
            Acknowledged would mean that the issued books for that sealed certified relieved balance have
            been acknowledged — the issued close pack acknowledged by the named recipients for the named
            period, the issued statement pack acknowledged for the named ledger and period, or the issued
            customer pack acknowledged by the customer for the period — not merely that the sealed books
            were released as the issued close pack to the named recipients, the sealed ledger
            certifications were released as the issued statement pack for the named ledger and period, or
            the sealed account certifications were released as the issued customer pack for the customer
            and the             period.{' '}
            <Link
              href="/insights/successor-issued-is-not-acknowledged"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Issued Is Not Acknowledged
            </Link>
            . Read it at /insights/successor-issued-is-not-acknowledged. This essay does not rewrite that
            thesis. This essay does not give that acknowledged a new meaning. This essay does not create a
            filing spine for Sealed Is Not Issued. This essay does not create a filing spine at
            /insights/sealed-is-not-issued.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Sealed is the
              period-close certification locked as immutable for the named period, the subledger-to-GL
              certification locked against further amendment for the named ledger and period, or the
              account-complete certification locked as the final attested record for the customer and the
              period. Issued is those sealed books: sealed books released as the issued close pack to the
              named recipients, sealed ledger certifications released as the issued statement pack for the
              named ledger and period, or sealed account certifications released as the issued customer
              pack for the customer and the period. A{' '}
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
              asks whether the records can support a conclusion. None of those is a claim that Sync issues
              the sealed books, executes plant work, or that issue write-back is live.
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

          <InsightNextSteps slug="successor-sealed-is-not-issued" />
        </motion.article>
      </div>
    </main>
  );
}
