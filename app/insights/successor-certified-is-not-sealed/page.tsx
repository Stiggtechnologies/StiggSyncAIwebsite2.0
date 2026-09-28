'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-certified-is-not-sealed');

export default function SuccessorCertifiedIsNotSealedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Certified Is Not Sealed</h1>
            <p className="text-xl text-gray-400">
              Certified is not sealed. Books that have been certified for a reconciled relieved balance — the
              period-close match certified by the named close owner, the subledger-to-GL tie-out certified
              for the named ledger, or the account proven complete against source certified for the customer
              and the period — are not the same as those certified books having been sealed (period-close
              certification locked as immutable for the named period, subledger-to-GL certification locked
              against further amendment for the named ledger and period, or account-complete certification
              locked as the final attested record for the customer and the period) — not merely that the
              period-close match was certified, the subledger tied out was certified, or the account was
              proven complete against source and certified.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-reconciled-is-not-certified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Reconciled Is Not Certified
              </Link>
              . Reconciled Is Not Certified already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that certified a new meaning. This essay starts from the
              certified the successor-spine Reconciled Is Not Certified already names. This refusal sits on
              the commercial spine. This is the seal spine after that certification. The prior essay is the
              certification spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The certified practice is not the sealed practice
          </h2>

          <p>
            Certified means that reconciled commercial books have been certified for a relieved balance —
            the period-close match certified by the named close owner, the subledger-to-GL tie-out certified
            for the named ledger, or the account proven complete against source certified for the customer
            and the period — by an executed certification instrument. Sealed means that those certified
            books have been sealed — the period-close certification locked as immutable for the named
            period, the subledger-to-GL certification locked against further amendment for the named ledger
            and period, or the account-complete certification locked as the final attested record for the
            customer and the period — by an executed seal instrument. A certification is not a seal. This
            split is certified versus sealed.
          </p>

          <p>
            A period-close match certified by the named close owner, with that certification not locked as
            immutable for the named period, is not sealed. A subledger-to-GL tie-out certified for the
            named ledger, with that certification not locked against further amendment for the named ledger
            and period, is not sealed. An account proven complete against source certified for the customer
            and the period, with that certification not locked as the final attested record, is not sealed.
            Seal talk that says the books were certified while the period-close certification has not been
            locked as immutable for the named period, the subledger-to-GL certification has not been locked
            against further amendment for the named ledger and period, or the account-complete certification
            has not been locked as the final attested record for the customer and the period is not sealed.
          </p>

          <p>
            A firm can be certified and still not sealed. A firm can chase sealing theater and still not be
            certified. A certification package alone is not sealed of that certified successor outcome.
            Certified cash or margin is not the same as a sealed commercial outcome. The refusal is not
            merely that the period-close match was certified, the subledger tied out was certified, or the
            account was proven complete against source and certified.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What a sealed record is allowed to be</h2>

          <p>
            An executed seal instrument is a period-seal record that shows the period-close certification
            was locked as immutable for the named period, a ledger-seal record that shows the
            subledger-to-GL certification was locked against further amendment for the named ledger and
            period, a source-seal record that shows the account-complete certification was locked as the
            final attested record for the customer and the period, or a seal binder that releases the
            certified books as sealed only when the period-close certification locked as immutable for the
            named period, the subledger-to-GL certification locked against further amendment for the named
            ledger and period, and the account-complete certification locked as the final attested record
            for the customer and the period are on the file.
          </p>

          <p>
            The seal record has to trail back to the certification evidence, and the certification evidence
            has to trail back to the reconciliation{' '}
            <Link
              href="/insights/successor-reconciled-is-not-certified"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Reconciled Is Not Certified
            </Link>{' '}
            already required. A period-seal that cannot name the period and the immutable lock, a
            ledger-seal that cannot name the ledger, the period, and the amendment lock, or a source-seal
            that cannot name the customer, the period, and the final attested record is sealing theater. It
            is not this sealed.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named certified is not sealed</h2>

          <p>
            Named certified is not sealed. The certified practice is not the sealed practice. A
            certification record answers whether the period-close match was certified by the named close
            owner, the subledger-to-GL tie-out was certified for the named ledger, or the account proven
            complete against source was certified for the customer and the period. A seal record answers
            whether those certified books were sealed. Certified is not sealed.
          </p>

          <p>
            A claim that certification so it is sealed, while the seal trail is missing, is not this
            sealed. A period-close match certified by the named close owner, a subledger-to-GL tie-out
            certified for the named ledger, or an account proven complete against source certified for the
            customer and the period, with no period-close certification locked as immutable for the named
            period, no subledger-to-GL certification locked against further amendment for the named ledger
            and period, and no account-complete certification locked as the final attested record for the
            customer and the period, is sealing theater, and it is not this certified either when the
            certification instrument is missing. A seal claim alone is not proof the named certification
            evidence was on the file. Certification evidence alone is not sealed of that certified
            successor outcome.
          </p>

          <p>
            Sync refuses to pretend certified or sealed is a status light. Sync does not deem sealed for
            the customer. Sync must not auto-deem-sealed. Sync must not treat certified as sealed as
            Learning credit. Evidence from the plant beats the certification record when the record is
            being used as sealed.
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
            keep this edition from treating a certification record as sealed.
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
            not claim that certified is sealed. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, certify the books, seal the books, or attribute a change in cash, risk,
            or capacity. Sync does not measure certified. Sync does not measure sealed. Sync does not
            measure certified or sealed for the customer.
          </p>

          <p>
            Keep this commercial sealed distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This sealed is not the collected Collected Is Not Recognized already names. This sealed is
            not the disbursement Paid Is Not Settled already names. This sealed is not the settlement
            Settled Is Not Booked already names. This sealed is not the collectible Collectible Is Not
            Applied already names. This essay does not collapse into Collectible Is Not Applied. This
            essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its
            own route. This sealed is not the applied Applied Is Not Restored already names. This essay
            does not collapse into Applied Is Not Restored. This essay does not rewrite Applied Is Not
            Restored. Applied Is Not Restored stays on its own route. This sealed is not the
            extinguishment Extinguished Is Not Reconciled already names. This essay does not collapse
            into Extinguished Is Not Reconciled. This essay does not rewrite Extinguished Is Not
            Reconciled. This sealed is not the reconciled Reconciled Is Not Attested already names. This
            essay does not collapse into Reconciled Is Not Attested. This essay does not rewrite
            Reconciled Is Not Attested. Reconciled Is Not Attested stays on its own route. This sealed is
            not the reconciled Reconciled Is Not Closed already names. This essay does not collapse into
            Reconciled Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This sealed
            is not the reconciled Booked Is Not Reconciled already names. This essay does not collapse
            into Booked Is Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This
            essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is
            Not Enforced. This essay does not collapse into Defended Is Not Owned. This essay does not
            rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own growth-loop route. This
            sealed is not the certification Certified Is Not Insured already names. This essay does not
            collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured.
            This sealed is not the certification Assured Is Not Certified already names. This essay does
            not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not
            Certified.
          </p>

          <p>
            Issued would mean that the sealed books for that certified relieved balance have been issued —
            the sealed period-close certification issued to the named recipients for the named period, the
            sealed subledger-to-GL certification issued for the named ledger and period, or the sealed
            account-complete certification issued to the customer for the period — not merely that the
            period-close certification was locked as immutable for the named period, the subledger-to-GL
            certification was locked against further amendment for the named ledger and period, or the
            account-complete certification was locked as the final attested record for the customer and the
            period.{' '}
            <Link
              href="/insights/successor-sealed-is-not-issued"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Sealed Is Not Issued
            </Link>
            . Read it at /insights/successor-sealed-is-not-issued. This essay does not rewrite that
            thesis. This essay does not give that issued a new meaning. This essay does not create a
            filing spine for Certified Is Not Sealed. This essay does not create a filing spine at
            /insights/certified-is-not-sealed.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Certified is the
              period-close match certified by the named close owner, the subledger-to-GL tie-out certified
              for the named ledger, or the account proven complete against source certified for the
              customer and the period. Sealed is those certified books: period-close certification locked
              as immutable for the named period, subledger-to-GL certification locked against further
              amendment for the named ledger and period, or account-complete certification locked as the
              final attested record for the customer and the period. A{' '}
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
              asks whether the records can support a conclusion. None of those is a claim that Sync seals
              the certified books, executes plant work, or that seal write-back is live.
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

          <InsightNextSteps slug="successor-certified-is-not-sealed" />
        </motion.article>
      </div>
    </main>
  );
}
