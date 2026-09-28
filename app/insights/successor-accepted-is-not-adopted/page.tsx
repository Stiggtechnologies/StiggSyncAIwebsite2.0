'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-accepted-is-not-adopted');

export default function SuccessorAcceptedIsNotAdoptedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Accepted Is Not Adopted</h1>
            <p className="text-xl text-gray-400">
              Accepted is not adopted. Packs that have been accepted — the named recipients accepting the
              numbers and close for the named period, the named ledger owners accepting the statement for
              the named ledger and period, or the customer accepting the customer pack for the customer and
              the period — are not the same as those accepted packs having been adopted (the accepted close
              taken into operating practice for the named period, the accepted statement taken into the
              books for the named ledger and period, or the accepted customer pack taken into the customer
              workflow for the customer and the period) — not merely that the named recipients accepted the
              numbers and close, the named ledger owners accepted the statement, or the customer accepted
              the customer pack.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-acknowledged-is-not-accepted"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Acknowledged Is Not Accepted
              </Link>
              . Acknowledged Is Not Accepted already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that accepted a new meaning. This essay starts from the
              accepted the successor-spine Acknowledged Is Not Accepted already names. This refusal sits
              on the commercial spine. This is the adoption spine after that acceptance. The prior essay
              is the acceptance spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The accepted practice is not the adopted practice
          </h2>

          <p>
            Accepted means that acknowledged commercial packs have been accepted — the named recipients
            accepting the numbers and close for the named period, the named ledger owners accepting the
            statement for the named ledger and period, or the customer accepting the customer pack for the
            customer and the period — by an executed acceptance instrument. Adopted means that those
            accepted packs have been adopted — the accepted close taken into operating practice for the
            named period, the accepted statement taken into the books for the named ledger and period, or
            the accepted customer pack taken into the customer workflow for the customer and the period —
            by an executed adoption instrument. An acceptance is not an adoption. This split is accepted
            versus adopted.
          </p>

          <p>
            An accepted close whose named recipients accepted the numbers and close for the named period,
            with that accepted close not taken into operating practice for the named period, is not
            adopted. An accepted statement whose named ledger owners accepted the statement for the named
            ledger and period, with that accepted statement not taken into the books for the named ledger
            and period, is not adopted. An accepted customer pack whose customer accepted the customer pack
            for the customer and the period, with that accepted customer pack not taken into the customer
            workflow for the customer and the period, is not adopted. Adoption talk that says the numbers
            and close were accepted, the statement was accepted, or the customer pack was accepted while
            the accepted close has not been taken into operating practice for the named period, the
            accepted statement has not been taken into the books for the named ledger and period, or the
            accepted customer pack has not been taken into the customer workflow for the customer and the
            period is not adopted.
          </p>

          <p>
            A firm can be accepted and still not adopted. A firm can chase adoption theater and still not
            be accepted. An acceptance package alone is not adopted of that accepted successor outcome.
            Accepted cash or margin is not the same as an adopted commercial outcome. The refusal is not
            merely that the named recipients accepted the numbers and close for the named period, the named
            ledger owners accepted the statement for the named ledger and period, or the customer accepted
            the customer pack for the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an adopted record is allowed to be
          </h2>

          <p>
            An executed adoption instrument is a close-adoption record that shows the accepted close was
            taken into operating practice for the named period, a statement-adoption record that shows the
            accepted statement was taken into the books for the named ledger and period, a
            customer-adoption record that shows the accepted customer pack was taken into the customer
            workflow for the customer and the period, or an adoption binder that releases the accepted
            packs as adopted only when the accepted close was taken into operating practice, the accepted
            statement was taken into the books, and the accepted customer pack was taken into the customer
            workflow are on the file.
          </p>

          <p>
            The adoption record has to trail back to the acceptance evidence, and the acceptance evidence
            has to trail back to the acceptance{' '}
            <Link
              href="/insights/successor-acknowledged-is-not-accepted"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Acknowledged Is Not Accepted
            </Link>{' '}
            already required. A close-adoption that cannot name the recipients, the period, and the
            operating practice the accepted close was taken into, a statement-adoption that cannot name the
            ledger owners, the ledger, the period, and the books the accepted statement was taken into, or
            a customer-adoption that cannot name the customer, the period, and the customer workflow the
            accepted customer pack was taken into is adoption theater. It is not this adopted.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named accepted is not adopted</h2>

          <p>
            Named accepted is not adopted. The accepted practice is not the adopted practice. An acceptance
            record answers whether the named recipients accepted the numbers and close for the named
            period, the named ledger owners accepted the statement for the named ledger and period, or the
            customer accepted the customer pack for the customer and the period. An adoption record answers
            whether those accepted packs were adopted. Accepted is not adopted.
          </p>

          <p>
            A claim that accepting so it is adopted, while the adoption trail is missing, is not this
            adopted. An accepted close whose named recipients accepted the numbers and close for the named
            period, an accepted statement whose named ledger owners accepted the statement for the named
            ledger and period, or an accepted customer pack whose customer accepted the customer pack for
            the customer and the period, with no accepted close taken into operating practice, no accepted
            statement taken into the books, and no accepted customer pack taken into the customer workflow,
            is adoption theater, and it is not this accepted either when the acceptance instrument is
            missing. An adoption claim alone is not proof the named acceptance evidence was on the file.
            Acceptance evidence alone is not adopted of that accepted successor outcome.
          </p>

          <p>
            Sync refuses to pretend accepted or adopted is a status light. Sync does not deem adopted for
            the customer. Sync must not auto-deem-adopted. Sync must not treat accepted as adopted as
            Learning credit. Evidence from the plant beats the acceptance record when the record is being
            used as adopted.
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
            keep this edition from treating an acceptance record as adopted.
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
            not claim that accepted is adopted. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, certify the books, seal the books, issue the close pack, acknowledge
            receipt of the issued pack, accept the numbers and close, accept the statement, accept the
            customer pack, adopt the accepted close into operating practice, adopt the accepted statement
            into the books, adopt the accepted customer pack into the customer workflow, or attribute a
            change in cash, risk, or capacity. Sync does not measure accepted. Sync does not measure
            adopted. Sync does not measure accepted or adopted for the customer.
          </p>

          <p>
            Keep this commercial adopted distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This adopted is not the collected Collected Is Not Recognized already names. This adopted is
            not the disbursement Paid Is Not Settled already names. This adopted is not the settlement
            Settled Is Not Booked already names. This adopted is not the collectible Collectible Is Not
            Applied already names. This essay does not collapse into Collectible Is Not Applied. This
            essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own
            route. This adopted is not the applied Applied Is Not Restored already names. This essay does
            not collapse into Applied Is Not Restored. This essay does not rewrite Applied Is Not
            Restored. Applied Is Not Restored stays on its own route. This adopted is not the
            extinguishment Extinguished Is Not Reconciled already names. This essay does not collapse into
            Extinguished Is Not Reconciled. This essay does not rewrite Extinguished Is Not Reconciled.
            This adopted is not the reconciled Reconciled Is Not Attested already names. This essay does
            not collapse into Reconciled Is Not Attested. This essay does not rewrite Reconciled Is Not
            Attested. Reconciled Is Not Attested stays on its own route. This adopted is not the
            reconciled Reconciled Is Not Closed already names. This essay does not collapse into
            Reconciled Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This adopted
            is not the reconciled Booked Is Not Reconciled already names. This essay does not collapse
            into Booked Is Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This
            essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is
            Not Enforced. This essay does not collapse into Defended Is Not Owned. This essay does not
            rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own growth-loop route. This
            adopted is not the certification Certified Is Not Insured already names. This essay does not
            collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured.
            This adopted is not the certification Assured Is Not Certified already names. This essay does
            not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not
            Certified. This adopted is not the accepted Accepted Is Not Posted already names. This essay
            does not collapse into Accepted Is Not Posted. This essay does not rewrite Accepted Is Not
            Posted. This adopted is not the accepted Restored Is Not Accepted already names. This essay
            does not collapse into Restored Is Not Accepted. This essay does not rewrite Restored Is Not
            Accepted.
          </p>

          <p>
            Operated would mean that the adopted books for that accepted acknowledged issued sealed
            certified relieved balance have been operated — the adopted close operated as the live period
            practice for the named period, the adopted statement operated as the live ledger practice for
            the named ledger and period, or the adopted customer pack operated in the live customer
            workflow for the customer and the period — not merely that the accepted close was taken into
            operating practice for the named period, the accepted statement was taken into the books for
            the named ledger and period, or the accepted customer pack was taken into the customer
            workflow for the customer and the period. Adopted Is Not Operated may be named in prose only at
            /insights/successor-adopted-is-not-operated. This essay does not implement that page. This
            essay does not create a successor route for Adopted Is Not Operated.
            This essay does not create a filing spine for Accepted Is Not Adopted. This essay does not
            create a filing spine at /insights/accepted-is-not-adopted.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Accepted is the named
              recipients accepting the numbers and close for the named period, the named ledger owners
              accepting the statement for the named ledger and period, or the customer accepting the
              customer pack for the customer and the period. Adopted is those accepted packs: the accepted
              close taken into operating practice for the named period, the accepted statement taken into
              the books for the named ledger and period, or the accepted customer pack taken into the
              customer workflow for the customer and the period. A{' '}
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
              adopts the accepted packs, executes plant work, or that adoption write-back is live.
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

          <InsightNextSteps slug="successor-accepted-is-not-adopted" />
        </motion.article>
      </div>
    </main>
  );
}
