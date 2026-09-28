'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-reviewed-is-not-approved');

export default function SuccessorReviewedIsNotApprovedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Reviewed Is Not Approved</h1>
            <p className="text-xl text-gray-400">
              Reviewed is not approved. Packs that have been reviewed — a named human review of the
              operated books, the operated statement, or the operated customer workflow for that named
              scope, reviewed operating results with a named reviewer, review date, and review conclusion
              for that operated accepted acknowledged issued sealed certified reconciled relieved applied
              collected invoiced earned commenced renewed sustained realized performed advanced relied
              attested extinguished period, the reviewed statement for that named ledger and period, or
              the reviewed customer workflow for the customer and the period — are not the same as those
              reviewed packs having been approved (a named approver approval of the reviewed operating
              results for that named scope — the reviewed operating results approved by a named approver
              for the named period, the reviewed statement approved for the named ledger and period, or
              the reviewed customer workflow approved for the customer and the period, with a named
              approver, an approval date, and an approval decision) — not merely that a named reviewer
              recorded a review date and a review conclusion for that operated period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-operated-is-not-reviewed"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Operated Is Not Reviewed
              </Link>
              . Operated Is Not Reviewed already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that reviewed a new meaning. This essay starts from the
              reviewed the successor-spine Operated Is Not Reviewed already names. This refusal sits on the
              commercial spine. This is the approval spine after that review. The prior essay is the
              review spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The reviewed practice is not the approved practice
          </h2>

          <p>
            Reviewed means that operated commercial packs have been reviewed — a named human review of the
            operated books, the operated statement, or the operated customer workflow for that named
            scope, reviewed operating results with a named reviewer, review date, and review conclusion
            for that operated accepted acknowledged issued sealed certified reconciled relieved applied
            collected invoiced earned commenced renewed sustained realized performed advanced relied
            attested extinguished period — by an executed review instrument. Approved means that those
            reviewed packs have been approved — the reviewed operating results approved by a named
            approver for the named period, the reviewed statement approved for the named ledger and
            period, or the reviewed customer workflow approved for the customer and the period, with a
            named approver, an approval date, and an approval decision — by an executed approval
            instrument. A review is not an approval. This split is reviewed versus approved.
          </p>

          <p>
            A reviewed close whose named reviewer recorded a review date and a review conclusion for those
            reviewed operating results, with no named approver, no approval date, and no approval decision
            for that operated accepted acknowledged issued sealed certified reconciled relieved applied
            collected invoiced earned commenced renewed sustained realized performed advanced relied
            attested extinguished period, is not approved. A reviewed statement whose operated statement
            was reviewed for the named ledger and period, with that reviewed statement not approved for
            the named ledger and period, is not approved. A reviewed customer workflow whose operated
            customer workflow was reviewed for the customer and the period, with that reviewed customer
            workflow not approved for the customer and the period, is not approved. Approval talk that
            says a named reviewer recorded a review date and a review conclusion, the operated statement
            was reviewed, or the operated customer workflow was reviewed while the reviewed operating
            results have not been approved, the reviewed statement has not been approved, or the reviewed
            customer workflow has not been approved is not approved.
          </p>

          <p>
            A firm can be reviewed and still not approved. A firm can chase approval theater and still not
            be reviewed. A review package alone is not approved of that reviewed successor outcome.
            Reviewed cash or margin is not the same as an approved commercial outcome. The refusal is not
            merely that a named reviewer recorded a review date and a review conclusion for that operated
            accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
            earned commenced renewed sustained realized performed advanced relied attested extinguished
            period, the operated statement was reviewed for that named ledger and period, or the operated
            customer workflow was reviewed for the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an approved record is allowed to be
          </h2>

          <p>
            An executed approval instrument is a books-approval record that shows the reviewed operating
            results were approved for that operated accepted acknowledged issued sealed certified
            reconciled relieved applied collected invoiced earned commenced renewed sustained realized
            performed advanced relied attested extinguished period, with a named approver, an approval
            date, and an approval decision, a statement-approval record that shows the reviewed statement
            was approved for that named ledger and period, with a named approver, an approval date, and an
            approval decision, a customer-approval record that shows the reviewed customer workflow was
            approved for the customer and the period, with a named approver, an approval date, and an
            approval decision, or an approval binder that releases the reviewed packs as approved only
            when the named approver, the approval date, and the approval decision are on the file.
          </p>

          <p>
            The approval record has to trail back to the review evidence, and the review evidence has to
            trail back to the review{' '}
            <Link
              href="/insights/successor-operated-is-not-reviewed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Operated Is Not Reviewed
            </Link>{' '}
            already required. A books-approval that cannot name the period, the named approver, the
            approval date, and the approval decision the reviewed operating results were approved under, a
            statement-approval that cannot name the ledger, the period, the named approver, the approval
            date, and the approval decision the reviewed statement was approved under, or a
            customer-approval that cannot name the customer, the period, the named approver, the approval
            date, and the approval decision the reviewed customer workflow was approved under is approval
            theater. It is not this approved.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named reviewed is not approved</h2>

          <p>
            Named reviewed is not approved. The reviewed practice is not the approved practice. A review
            record answers whether the operated books, the operated statement, or the operated customer
            workflow were reviewed as reviewed operating results with a named reviewer, review date, and
            review conclusion for that operated accepted acknowledged issued sealed certified reconciled
            relieved applied collected invoiced earned commenced renewed sustained realized performed
            advanced relied attested extinguished period. An approval record answers whether those
            reviewed packs were approved. Reviewed is not approved.
          </p>

          <p>
            A claim that reviewing so it is approved, while the approval trail is missing, is not this
            approved. A reviewed close whose named reviewer recorded a review date and a review
            conclusion, a reviewed statement whose operated statement was reviewed, or a reviewed customer
            workflow whose operated customer workflow was reviewed, with no named approver, no approval
            date, and no approval decision, is approval theater, and it is not this reviewed either when
            the review instrument is missing. An approval claim alone is not proof the named review
            evidence was on the file. Review evidence alone is not approved of that reviewed successor
            outcome.
          </p>

          <p>
            Sync refuses to pretend reviewed or approved is a status light. Sync does not deem approved
            for the customer. Sync must not auto-deem-approved. Sync must not treat reviewed as approved
            as Learning credit. Evidence from the plant beats the review record when the record is being
            used as approved.
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
            keep this edition from treating a review record as approved.
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
            not claim that reviewed is approved. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, certify the books, seal the books, issue the close pack, acknowledge
            receipt of the issued pack, accept the numbers and close, accept the statement, accept the
            customer pack, adopt the accepted close into operating practice, adopt the accepted statement
            into the books, adopt the accepted customer pack into the customer workflow, operate the
            adopted books day-to-day, operate the adopted statement, operate the adopted customer
            workflow, review the operated books, review the operated statement, review the operated
            customer workflow, name a reviewer, record a review date, record a review conclusion, approve
            the reviewed operating results, approve the reviewed statement, approve the reviewed customer
            workflow, name an approver, record an approval date, record an approval decision, or
            attribute a change in cash, risk, or capacity. Sync does not measure reviewed. Sync does not
            measure approved. Sync does not measure reviewed or approved for the customer.
          </p>

          <p>
            Keep this commercial approved distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This approved is not the collected Collected Is Not Recognized already names. This approved is
            not the disbursement Paid Is Not Settled already names. This approved is not the settlement
            Settled Is Not Booked already names. This approved is not the collectible Collectible Is Not
            Applied already names. This essay does not collapse into Collectible Is Not Applied. This
            essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own
            route. This approved is not the applied Applied Is Not Restored already names. This essay does
            not collapse into Applied Is Not Restored. This essay does not rewrite Applied Is Not
            Restored. Applied Is Not Restored stays on its own route. This approved is not the
            extinguishment Extinguished Is Not Reconciled already names. This essay does not collapse into
            Extinguished Is Not Reconciled. This essay does not rewrite Extinguished Is Not Reconciled.
            This approved is not the reconciled Reconciled Is Not Attested already names. This essay does
            not collapse into Reconciled Is Not Attested. This essay does not rewrite Reconciled Is Not
            Attested. Reconciled Is Not Attested stays on its own route. This approved is not the
            reconciled Reconciled Is Not Closed already names. This essay does not collapse into
            Reconciled Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This approved
            is not the reconciled Booked Is Not Reconciled already names. This essay does not collapse
            into Booked Is Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This
            essay does not collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is
            Not Enforced. This essay does not collapse into Defended Is Not Owned. This essay does not
            rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own growth-loop route. This
            approved is not the certification Certified Is Not Insured already names. This essay does not
            collapse into Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured.
            This approved is not the certification Assured Is Not Certified already names. This essay does
            not collapse into Assured Is Not Certified. This essay does not rewrite Assured Is Not
            Certified. This approved is not the accepted Accepted Is Not Posted already names. This essay
            does not collapse into Accepted Is Not Posted. This essay does not rewrite Accepted Is Not
            Posted. This approved is not the accepted Restored Is Not Accepted already names. This essay
            does not collapse into Restored Is Not Accepted. This essay does not rewrite Restored Is Not
            Accepted. This approved is not the operated Operated Is Not Sustained already names. This
            essay does not collapse into Operated Is Not Sustained. This essay does not rewrite Operated
            Is Not Sustained. Operated Is Not Sustained stays on its own route. This approved is not the
            operated Delivered Is Not Operated already names. This essay does not collapse into Delivered
            Is Not Operated. This essay does not rewrite Delivered Is Not Operated. Delivered Is Not
            Operated stays on its own route.
          </p>

          <p>
            Authorized would mean that the approved operating results for that reviewed operated accepted
            acknowledged issued sealed certified reconciled relieved applied collected invoiced earned
            commenced renewed sustained realized performed advanced relied attested extinguished period
            have been authorized — the approved operating results authorized by a named authorizer for the
            named period, the approved statement authorized for the named ledger and period, or the
            approved customer workflow authorized for the customer and the period, with a named
            authorizer, an authorization date, and an authorization grant — not merely that a named
            approver recorded an approval date and an approval decision for that reviewed period.
            Approved Is Not Authorized may be named in prose only at
            /insights/successor-approved-is-not-authorized.
            This essay does not implement that page. This essay does not create a successor route for
            Approved Is Not Authorized. This essay does not create a filing spine for Reviewed Is Not
            Approved. This essay does not create a filing spine at /insights/reviewed-is-not-approved.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Reviewed is a named
              human review of the operated books, the operated statement, or the operated customer
              workflow for that named scope: reviewed operating results with a named reviewer, review
              date, and review conclusion for that operated accepted acknowledged issued sealed certified
              reconciled relieved applied collected invoiced earned commenced renewed sustained realized
              performed advanced relied attested extinguished period. Approved is those reviewed packs:
              the reviewed operating results approved by a named approver for the named period, the
              reviewed statement approved for the named ledger and period, or the reviewed customer
              workflow approved for the customer and the period, with a named approver, an approval date,
              and an approval decision. A{' '}
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
              approves the reviewed packs, executes plant work, or that approval write-back is live.
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

          <InsightNextSteps slug="successor-reviewed-is-not-approved" />
        </motion.article>
      </div>
    </main>
  );
}
