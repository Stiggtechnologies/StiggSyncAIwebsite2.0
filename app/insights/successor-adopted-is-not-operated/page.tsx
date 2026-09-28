'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-adopted-is-not-operated');

export default function SuccessorAdoptedIsNotOperatedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Adopted Is Not Operated</h1>
            <p className="text-xl text-gray-400">
              Adopted is not operated. Packs that have been adopted — the accepted close taken into
              operating practice for the named period, the accepted statement taken into the books for the
              named ledger and period, or the accepted customer pack taken into the customer workflow for
              the customer and the period — are not the same as those adopted packs having been operated
              (the operated books for that accepted acknowledged issued sealed certified reconciled
              relieved applied collected invoiced earned commenced renewed sustained realized performed
              advanced relied attested extinguished period, the operated statement for that named ledger
              and period, or the operated customer workflow for the customer and the period) — not merely
              that the accepted close was taken into operating practice for the named period, the accepted
              statement was taken into the books for the named ledger and period, or the accepted customer
              pack was taken into the customer workflow for the customer and the period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-accepted-is-not-adopted"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Accepted Is Not Adopted
              </Link>
              . Accepted Is Not Adopted already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that adopted a new meaning. This essay starts from the
              adopted the successor-spine Accepted Is Not Adopted already names. This refusal sits on the
              commercial spine. This is the operation spine after that adoption. The prior essay is the
              adoption spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The adopted practice is not the operated practice
          </h2>

          <p>
            Adopted means that accepted commercial packs have been adopted — the accepted close taken into
            operating practice for the named period, the accepted statement taken into the books for the
            named ledger and period, or the accepted customer pack taken into the customer workflow for
            the customer and the period — by an executed adoption instrument. Operated means that those
            adopted packs have been operated — the adopted books run day-to-day as the operated books for
            that accepted acknowledged issued sealed certified reconciled relieved applied collected
            invoiced earned commenced renewed sustained realized performed advanced relied attested
            extinguished period, the adopted statement run as the operated statement for that named ledger
            and period, or the adopted customer workflow run as the operated customer workflow for the
            customer and the period — by an executed operation instrument. An adoption is not an
            operation. This split is adopted versus operated.
          </p>

          <p>
            An adopted close whose accepted close was taken into operating practice for the named period,
            with those adopted books not run day-to-day as the operated books for that accepted
            acknowledged issued sealed certified reconciled relieved applied collected invoiced earned
            commenced renewed sustained realized performed advanced relied attested extinguished period,
            is not operated. An adopted statement whose accepted statement was taken into the books for
            the named ledger and period, with that adopted statement not run as the operated statement
            for the named ledger and period, is not operated. An adopted customer pack whose accepted
            customer pack was taken into the customer workflow for the customer and the period, with that
            adopted customer workflow not run as the operated customer workflow for the customer and the
            period, is not operated. Operation talk that says the accepted close was taken into operating
            practice, the accepted statement was taken into the books, or the accepted customer pack was
            taken into the customer workflow while the adopted books have not been run day-to-day, the
            adopted statement has not been run as the operated statement, or the adopted customer workflow
            has not been run as the operated customer workflow is not operated.
          </p>

          <p>
            A firm can be adopted and still not operated. A firm can chase operation theater and still not
            be adopted. An adoption package alone is not operated of that adopted successor outcome.
            Adopted cash or margin is not the same as an operated commercial outcome. The refusal is not
            merely that the accepted close was taken into operating practice for the named period, the
            accepted statement was taken into the books for the named ledger and period, or the accepted
            customer pack was taken into the customer workflow for the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an operated record is allowed to be
          </h2>

          <p>
            An executed operation instrument is a books-operation record that shows the adopted books were
            run day-to-day as the operated books for that accepted acknowledged issued sealed certified
            reconciled relieved applied collected invoiced earned commenced renewed sustained realized
            performed advanced relied attested extinguished period, a statement-operation record that
            shows the adopted statement was run as the operated statement for that named ledger and period,
            a customer-operation record that shows the adopted customer workflow was run as the operated
            customer workflow for the customer and the period, or an operation binder that releases the
            adopted packs as operated only when the adopted books were run day-to-day, the adopted
            statement was run, and the adopted customer workflow was run are on the file.
          </p>

          <p>
            The operation record has to trail back to the adoption evidence, and the adoption evidence has
            to trail back to the adoption{' '}
            <Link
              href="/insights/successor-accepted-is-not-adopted"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Accepted Is Not Adopted
            </Link>{' '}
            already required. A books-operation that cannot name the period and the operated books the
            adopted books were run as, a statement-operation that cannot name the ledger, the period, and
            the operated statement the adopted statement was run as, or a customer-operation that cannot
            name the customer, the period, and the operated customer workflow the adopted customer
            workflow was run as is operation theater. It is not this operated.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named adopted is not operated</h2>

          <p>
            Named adopted is not operated. The adopted practice is not the operated practice. An adoption
            record answers whether the accepted close was taken into operating practice for the named
            period, the accepted statement was taken into the books for the named ledger and period, or
            the accepted customer pack was taken into the customer workflow for the customer and the
            period. An operation record answers whether those adopted packs were operated. Adopted is not
            operated.
          </p>

          <p>
            A claim that adopting so it is operated, while the operation trail is missing, is not this
            operated. An adopted close whose accepted close was taken into operating practice for the
            named period, an adopted statement whose accepted statement was taken into the books for the
            named ledger and period, or an adopted customer pack whose accepted customer pack was taken
            into the customer workflow for the customer and the period, with no operated books, no
            operated statement, and no operated customer workflow, is operation theater, and it is not
            this adopted either when the adoption instrument is missing. An operation claim alone is not
            proof the named adoption evidence was on the file. Adoption evidence alone is not operated of
            that adopted successor outcome.
          </p>

          <p>
            Sync refuses to pretend adopted or operated is a status light. Sync does not deem operated for
            the customer. Sync must not auto-deem-operated. Sync must not treat adopted as operated as
            Learning credit. Evidence from the plant beats the adoption record when the record is being
            used as operated.
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
            keep this edition from treating an adoption record as operated.
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
            not claim that adopted is operated. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, certify the books, seal the books, issue the close pack, acknowledge
            receipt of the issued pack, accept the numbers and close, accept the statement, accept the
            customer pack, adopt the accepted close into operating practice, adopt the accepted statement
            into the books, adopt the accepted customer pack into the customer workflow, operate the
            adopted books day-to-day, operate the adopted statement, operate the adopted customer
            workflow, or attribute a change in cash, risk, or capacity. Sync does not measure adopted.
            Sync does not measure operated. Sync does not measure adopted or operated for the customer.
          </p>

          <p>
            Keep this commercial operated distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This operated is not the collected Collected Is Not Recognized already names. This operated is
            not the disbursement Paid Is Not Settled already names. This operated is not the settlement
            Settled Is Not Booked already names. This operated is not the collectible Collectible Is Not
            Applied already names. This essay does not collapse into Collectible Is Not Applied. This
            essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own
            route. This operated is not the applied Applied Is Not Restored already names. This essay does
            not collapse into Applied Is Not Restored. This essay does not rewrite Applied Is Not
            Restored. Applied Is Not Restored stays on its own route. This operated is not the
            extinguishment Extinguished Is Not Reconciled already names. This essay does not collapse into
            Extinguished Is Not Reconciled. This essay does not rewrite Extinguished Is Not Reconciled.
            This operated is not the reconciled Reconciled Is Not Attested already names. This essay does
            not collapse into Reconciled Is Not Attested. This essay does not rewrite Reconciled Is Not
            Attested. Reconciled Is Not Attested stays on its own route. This operated is not the
            reconciled Reconciled Is Not Closed already names. This essay does not collapse into
            Reconciled Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This operated
            is not the reconciled Booked Is Not Reconciled already names. This essay does not collapse
            into Booked Is Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This
            essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is
            Not Enforced. This essay does not collapse into Defended Is Not Owned. This essay does not
            rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own growth-loop route. This
            operated is not the certification Certified Is Not Insured already names. This essay does not
            collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured.
            This operated is not the certification Assured Is Not Certified already names. This essay does
            not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not
            Certified. This operated is not the accepted Accepted Is Not Posted already names. This essay
            does not collapse into Accepted Is Not Posted. This essay does not rewrite Accepted Is Not
            Posted. This operated is not the accepted Restored Is Not Accepted already names. This essay
            does not collapse into Restored Is Not Accepted. This essay does not rewrite Restored Is Not
            Accepted. This operated is not the operated Operated Is Not Sustained already names. This
            essay does not collapse into Operated Is Not Sustained. This essay does not rewrite Operated
            Is Not Sustained. Operated Is Not Sustained stays on its own route. This operated is not the
            operated Delivered Is Not Operated already names. This essay does not collapse into Delivered
            Is Not Operated. This essay does not rewrite Delivered Is Not Operated. Delivered Is Not
            Operated stays on its own route.
          </p>

          <p>
            Reviewed would mean that the operated books for that adopted accepted acknowledged issued
            sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period have been reviewed —
            the operated books reviewed for the named period, the operated statement reviewed for the
            named ledger and period, or the operated customer workflow reviewed for the customer and the
            period — not merely that the adopted books were run day-to-day as the operated books for that
            period, the adopted statement was run as the operated statement for that named ledger and
            period, or the adopted customer workflow was run as the operated customer workflow for the
            customer and the period.{' '}
            <Link
              href="/insights/successor-operated-is-not-reviewed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Operated Is Not Reviewed
            </Link>
            . Read it at /insights/successor-operated-is-not-reviewed. This essay does not rewrite that
            thesis. This essay does not give that reviewed a new meaning. This essay does not create a
            filing spine for Adopted Is Not Operated. This essay does not create a filing spine at
            /insights/adopted-is-not-operated.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Adopted is the
              accepted close taken into operating practice for the named period, the accepted statement
              taken into the books for the named ledger and period, or the accepted customer pack taken
              into the customer workflow for the customer and the period. Operated is those adopted packs:
              the operated books for that accepted acknowledged issued sealed certified reconciled relieved
              applied collected invoiced earned commenced renewed sustained realized performed advanced
              relied attested extinguished period, the operated statement for that named ledger and period,
              or the operated customer workflow for the customer and the period. A{' '}
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
              operates the adopted packs, executes plant work, or that operation write-back is live.
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

          <InsightNextSteps slug="successor-adopted-is-not-operated" />
        </motion.article>
      </div>
    </main>
  );
}
