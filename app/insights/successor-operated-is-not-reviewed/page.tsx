'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-operated-is-not-reviewed');

export default function SuccessorOperatedIsNotReviewedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Operated Is Not Reviewed</h1>
            <p className="text-xl text-gray-400">
              Operated is not reviewed. Packs that have been operated — the operated books for that
              accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
              earned commenced renewed sustained realized performed advanced relied attested extinguished
              period, the operated statement for that named ledger and period, or the operated customer
              workflow for the customer and the period — are not the same as those operated packs having
              been reviewed (a named human review of the operated books, the operated statement, or the
              operated customer workflow for that named scope — reviewed operating results with a named
              reviewer, review date, and review conclusion for that operated period) — not merely that the
              adopted books were run day-to-day as the operated books for that accepted acknowledged issued
              sealed certified reconciled relieved applied collected invoiced earned commenced renewed
              sustained realized performed advanced relied attested extinguished period, the adopted
              statement was run as the operated statement for that named ledger and period, or the adopted
              customer workflow was run as the operated customer workflow for the customer and the period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-adopted-is-not-operated"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Adopted Is Not Operated
              </Link>
              . Adopted Is Not Operated already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that operated a new meaning. This essay starts from the
              operated the successor-spine Adopted Is Not Operated already names. This refusal sits on the
              commercial spine. This is the review spine after that operation. The prior essay is the
              operation spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The operated practice is not the reviewed practice
          </h2>

          <p>
            Operated means that adopted commercial packs have been operated — the adopted books run
            day-to-day as the operated books for that accepted acknowledged issued sealed certified
            reconciled relieved applied collected invoiced earned commenced renewed sustained realized
            performed advanced relied attested extinguished period, the adopted statement run as the
            operated statement for that named ledger and period, or the adopted customer workflow run as
            the operated customer workflow for the customer and the period — by an executed operation
            instrument. Reviewed means that those operated packs have been reviewed — reviewed operating
            results with a named reviewer, review date, and review conclusion for that operated period, the
            operated books reviewed for the named period, the operated statement reviewed for the named
            ledger and period, or the operated customer workflow reviewed for the customer and the period —
            by an executed review instrument. An operation is not a review. This split is operated versus
            reviewed.
          </p>

          <p>
            An operated close whose adopted books were run day-to-day as the operated books for that
            accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
            earned commenced renewed sustained realized performed advanced relied attested extinguished
            period, with no named reviewer, no review date, and no review conclusion for those reviewed
            operating results, is not reviewed. An operated statement whose adopted statement was run as
            the operated statement for the named ledger and period, with that operated statement not
            reviewed as reviewed operating results for the named ledger and period, is not reviewed. An
            operated customer workflow whose adopted customer workflow was run as the operated customer
            workflow for the customer and the period, with that operated customer workflow not reviewed as
            reviewed operating results for the customer and the period, is not reviewed. Review talk that
            says the adopted books were run day-to-day, the adopted statement was run, or the adopted
            customer workflow was run while the operated books have not been reviewed, the operated
            statement has not been reviewed, or the operated customer workflow has not been reviewed is not
            reviewed.
          </p>

          <p>
            A firm can be operated and still not reviewed. A firm can chase review theater and still not
            be operated. An operation package alone is not reviewed of that operated successor outcome.
            Operated cash or margin is not the same as a reviewed commercial outcome. The refusal is not
            merely that the adopted books were run day-to-day as the operated books for that accepted
            acknowledged issued sealed certified reconciled relieved applied collected invoiced earned
            commenced renewed sustained realized performed advanced relied attested extinguished period, the
            adopted statement was run as the operated statement for that named ledger and period, or the
            adopted customer workflow was run as the operated customer workflow for the customer and the
            period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a reviewed record is allowed to be
          </h2>

          <p>
            An executed review instrument is a books-review record that shows the operated books were
            reviewed as reviewed operating results for that accepted acknowledged issued sealed certified
            reconciled relieved applied collected invoiced earned commenced renewed sustained realized
            performed advanced relied attested extinguished period, with a named reviewer, review date, and
            review conclusion, a statement-review record that shows the operated statement was reviewed as
            reviewed operating results for that named ledger and period, with a named reviewer, review
            date, and review conclusion, a customer-review record that shows the operated customer workflow
            was reviewed as reviewed operating results for the customer and the period, with a named
            reviewer, review date, and review conclusion, or a review binder that releases the operated
            packs as reviewed only when the named reviewer, the review date, and the review conclusion are
            on the file.
          </p>

          <p>
            The review record has to trail back to the operation evidence, and the operation evidence has
            to trail back to the operation{' '}
            <Link
              href="/insights/successor-adopted-is-not-operated"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Adopted Is Not Operated
            </Link>{' '}
            already required. A books-review that cannot name the period, the named reviewer, the review
            date, and the review conclusion the operated books were reviewed under, a statement-review that
            cannot name the ledger, the period, the named reviewer, the review date, and the review
            conclusion the operated statement was reviewed under, or a customer-review that cannot name the
            customer, the period, the named reviewer, the review date, and the review conclusion the
            operated customer workflow was reviewed under is review theater. It is not this reviewed.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named operated is not reviewed</h2>

          <p>
            Named operated is not reviewed. The operated practice is not the reviewed practice. An
            operation record answers whether the adopted books were run day-to-day as the operated books
            for that accepted acknowledged issued sealed certified reconciled relieved applied collected
            invoiced earned commenced renewed sustained realized performed advanced relied attested
            extinguished period, the adopted statement was run as the operated statement for that named
            ledger and period, or the adopted customer workflow was run as the operated customer workflow
            for the customer and the period. A review record answers whether those operated packs were
            reviewed. Operated is not reviewed.
          </p>

          <p>
            A claim that operating so it is reviewed, while the review trail is missing, is not this
            reviewed. An operated close whose adopted books were run day-to-day as the operated books, an
            operated statement whose adopted statement was run as the operated statement, or an operated
            customer workflow whose adopted customer workflow was run as the operated customer workflow,
            with no named reviewer, no review date, and no review conclusion, is review theater, and it is
            not this operated either when the operation instrument is missing. A review claim alone is not
            proof the named operation evidence was on the file. Operation evidence alone is not reviewed of
            that operated successor outcome.
          </p>

          <p>
            Sync refuses to pretend operated or reviewed is a status light. Sync does not deem reviewed for
            the customer. Sync must not auto-deem-reviewed. Sync must not treat operated as reviewed as
            Learning credit. Evidence from the plant beats the operation record when the record is being
            used as reviewed.
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
            keep this edition from treating an operation record as reviewed.
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
            not claim that operated is reviewed. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, certify the books, seal the books, issue the close pack, acknowledge
            receipt of the issued pack, accept the numbers and close, accept the statement, accept the
            customer pack, adopt the accepted close into operating practice, adopt the accepted statement
            into the books, adopt the accepted customer pack into the customer workflow, operate the
            adopted books day-to-day, operate the adopted statement, operate the adopted customer
            workflow, review the operated books, review the operated statement, review the operated
            customer workflow, name a reviewer, record a review date, record a review conclusion, or
            attribute a change in cash, risk, or capacity. Sync does not measure operated. Sync does not
            measure reviewed. Sync does not measure operated or reviewed for the customer.
          </p>

          <p>
            Keep this commercial reviewed distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This reviewed is not the collected Collected Is Not Recognized already names. This reviewed is
            not the disbursement Paid Is Not Settled already names. This reviewed is not the settlement
            Settled Is Not Booked already names. This reviewed is not the collectible Collectible Is Not
            Applied already names. This essay does not collapse into Collectible Is Not Applied. This
            essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own
            route. This reviewed is not the applied Applied Is Not Restored already names. This essay does
            not collapse into Applied Is Not Restored. This essay does not rewrite Applied Is Not
            Restored. Applied Is Not Restored stays on its own route. This reviewed is not the
            extinguishment Extinguished Is Not Reconciled already names. This essay does not collapse into
            Extinguished Is Not Reconciled. This essay does not rewrite Extinguished Is Not Reconciled.
            This reviewed is not the reconciled Reconciled Is Not Attested already names. This essay does
            not collapse into Reconciled Is Not Attested. This essay does not rewrite Reconciled Is Not
            Attested. Reconciled Is Not Attested stays on its own route. This reviewed is not the
            reconciled Reconciled Is Not Closed already names. This essay does not collapse into
            Reconciled Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This reviewed
            is not the reconciled Booked Is Not Reconciled already names. This essay does not collapse
            into Booked Is Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This
            essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is
            Not Enforced. This essay does not collapse into Defended Is Not Owned. This essay does not
            rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own growth-loop route. This
            reviewed is not the certification Certified Is Not Insured already names. This essay does not
            collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured.
            This reviewed is not the certification Assured Is Not Certified already names. This essay does
            not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not
            Certified. This reviewed is not the accepted Accepted Is Not Posted already names. This essay
            does not collapse into Accepted Is Not Posted. This essay does not rewrite Accepted Is Not
            Posted. This reviewed is not the accepted Restored Is Not Accepted already names. This essay
            does not collapse into Restored Is Not Accepted. This essay does not rewrite Restored Is Not
            Accepted. This reviewed is not the operated Operated Is Not Sustained already names. This
            essay does not collapse into Operated Is Not Sustained. This essay does not rewrite Operated
            Is Not Sustained. Operated Is Not Sustained stays on its own route. This reviewed is not the
            operated Delivered Is Not Operated already names. This essay does not collapse into Delivered
            Is Not Operated. This essay does not rewrite Delivered Is Not Operated. Delivered Is Not
            Operated stays on its own route.
          </p>

          <p>
            Approved would mean that the reviewed operating results for that operated accepted acknowledged
            issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period have been approved —
            the reviewed operating results approved by a named approver for the named period, the reviewed
            statement approved for the named ledger and period, or the reviewed customer workflow approved
            for the customer and the period, with a named approver, an approval date, and an approval
            decision — not merely that a named reviewer recorded a review date and a review conclusion for
            that operated period.{' '}
            <Link
              href="/insights/successor-reviewed-is-not-approved"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Reviewed Is Not Approved
            </Link>
            . Read it at /insights/successor-reviewed-is-not-approved. This essay does not rewrite that
            thesis. This essay does not give that approved a new meaning. This essay does not create a
            filing spine for Operated Is Not Reviewed. This essay does not create a filing spine at
            /insights/operated-is-not-reviewed.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Operated is the
              adopted books run day-to-day as the operated books for that accepted acknowledged issued
              sealed certified reconciled relieved applied collected invoiced earned commenced renewed
              sustained realized performed advanced relied attested extinguished period, the adopted
              statement run as the operated statement for that named ledger and period, or the adopted
              customer workflow run as the operated customer workflow for the customer and the period.
              Reviewed is those operated packs: reviewed operating results with a named reviewer, review
              date, and review conclusion for that operated period. A{' '}
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
              reviews the operated packs, executes plant work, or that review write-back is live.
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

          <InsightNextSteps slug="successor-operated-is-not-reviewed" />
        </motion.article>
      </div>
    </main>
  );
}
