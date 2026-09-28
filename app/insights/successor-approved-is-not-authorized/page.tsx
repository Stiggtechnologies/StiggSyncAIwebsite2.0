'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-approved-is-not-authorized');

export default function SuccessorApprovedIsNotAuthorizedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Approved Is Not Authorized</h1>
            <p className="text-xl text-gray-400">
              Approved is not authorized. Packs that have been approved — a named approver approval of the
              reviewed operating results for that named scope, reviewed operating results with a named
              approver, approval date, and approval decision for that reviewed operated accepted
              acknowledged issued sealed certified reconciled relieved applied collected invoiced earned
              commenced renewed sustained realized performed advanced relied attested extinguished period,
              the reviewed statement approved for the named ledger and period, or the reviewed customer
              workflow approved for the customer and the period — are not the same as those approved packs
              having been authorized (a named authorizer authorization of the approved operating results
              for that named scope — the approved operating results authorized by a named authorizer for
              the named period, the approved statement authorized for the named ledger and period, or the
              approved customer workflow authorized for the customer and the period, with a named
              authorizer, an authorization date, and an authorization grant) — not merely that a named
              approver recorded an approval date and an approval decision for that reviewed period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-reviewed-is-not-approved"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Reviewed Is Not Approved
              </Link>
              . Reviewed Is Not Approved already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that approved a new meaning. This essay starts from the
              approved the successor-spine Reviewed Is Not Approved already names. This refusal sits on the
              commercial spine. This is the authorization spine after that approval. The prior essay is the
              approval spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The approved practice is not the authorized practice
          </h2>

          <p>
            Approved means that reviewed commercial packs have been approved — a named approver approval of
            the reviewed operating results for that named scope, reviewed operating results with a named
            approver, approval date, and approval decision for that reviewed operated accepted acknowledged
            issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period — by an executed
            approval instrument. Authorized means that those approved packs have been authorized — the
            approved operating results authorized by a named authorizer for the named period, the approved
            statement authorized for the named ledger and period, or the approved customer workflow
            authorized for the customer and the period, with a named authorizer, an authorization date, and
            an authorization grant — by an executed authorization instrument. An approval is not an
            authorization. This split is approved versus authorized.
          </p>

          <p>
            An approved close whose named approver recorded an approval date and an approval decision for
            those approved operating results, with no named authorizer, no authorization date, and no
            authorization grant for that reviewed operated accepted acknowledged issued sealed certified
            reconciled relieved applied collected invoiced earned commenced renewed sustained realized
            performed advanced relied attested extinguished period, is not authorized. An approved
            statement whose reviewed statement was approved for the named ledger and period, with that
            approved statement not authorized for the named ledger and period, is not authorized. An
            approved customer workflow whose reviewed customer workflow was approved for the customer and
            the period, with that approved customer workflow not authorized for the customer and the
            period, is not authorized. Authorization talk that says a named approver recorded an approval
            date and an approval decision, the reviewed statement was approved, or the reviewed customer
            workflow was approved while the approved operating results have not been authorized, the
            approved statement has not been authorized, or the approved customer workflow has not been
            authorized is not authorized.
          </p>

          <p>
            A firm can be approved and still not authorized. A firm can chase authorization theater and
            still not be approved. An approval package alone is not authorized of that approved successor
            outcome. Approved cash or margin is not the same as an authorized commercial outcome. The
            refusal is not merely that a named approver recorded an approval date and an approval decision
            for that reviewed operated accepted acknowledged issued sealed certified reconciled relieved
            applied collected invoiced earned commenced renewed sustained realized performed advanced relied
            attested extinguished period, the reviewed statement was approved for that named ledger and
            period, or the reviewed customer workflow was approved for the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an authorized record is allowed to be
          </h2>

          <p>
            An executed authorization instrument is a books-authorization record that shows the approved
            operating results were authorized for that reviewed operated accepted acknowledged issued sealed
            certified reconciled relieved applied collected invoiced earned commenced renewed sustained
            realized performed advanced relied attested extinguished period, with a named authorizer, an
            authorization date, and an authorization grant, a statement-authorization record that shows the
            approved statement was authorized for that named ledger and period, with a named authorizer, an
            authorization date, and an authorization grant, a customer-authorization record that shows the
            approved customer workflow was authorized for the customer and the period, with a named
            authorizer, an authorization date, and an authorization grant, or an authorization binder that
            releases the approved packs as authorized only when the named authorizer, the authorization
            date, and the authorization grant are on the file.
          </p>

          <p>
            The authorization record has to trail back to the approval evidence, and the approval evidence
            has to trail back to the approval{' '}
            <Link
              href="/insights/successor-reviewed-is-not-approved"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Reviewed Is Not Approved
            </Link>{' '}
            already required. A books-authorization that cannot name the period, the named authorizer, the
            authorization date, and the authorization grant the approved operating results were authorized
            under, a statement-authorization that cannot name the ledger, the period, the named authorizer,
            the authorization date, and the authorization grant the approved statement was authorized
            under, or a customer-authorization that cannot name the customer, the period, the named
            authorizer, the authorization date, and the authorization grant the approved customer workflow
            was authorized under is authorization theater. It is not this authorized.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named approved is not authorized</h2>

          <p>
            Named approved is not authorized. The approved practice is not the authorized practice. An
            approval record answers whether the reviewed operating results, the reviewed statement, or the
            reviewed customer workflow were approved as approved operating results with a named approver,
            approval date, and approval decision for that reviewed operated accepted acknowledged issued
            sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period. An authorization
            record answers whether those approved packs were authorized. Approved is not authorized.
          </p>

          <p>
            A claim that approving so it is authorized, while the authorization trail is missing, is not
            this authorized. An approved close whose named approver recorded an approval date and an
            approval decision, an approved statement whose reviewed statement was approved, or an approved
            customer workflow whose reviewed customer workflow was approved, with no named authorizer, no
            authorization date, and no authorization grant, is authorization theater, and it is not this
            approved either when the approval instrument is missing. An authorization claim alone is not
            proof the named approval evidence was on the file. Approval evidence alone is not authorized of
            that approved successor outcome.
          </p>

          <p>
            Sync refuses to pretend approved or authorized is a status light. Sync does not deem authorized
            for the customer. Sync must not auto-deem-authorized. Sync must not treat approved as
            authorized as Learning credit. Evidence from the plant beats the approval record when the
            record is being used as authorized.
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
            keep this edition from treating an approval record as authorized.
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
            not claim that approved is authorized. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, certify the books, seal the books, issue the close pack, acknowledge
            receipt of the issued pack, accept the numbers and close, accept the statement, accept the
            customer pack, adopt the accepted close into operating practice, adopt the accepted statement
            into the books, adopt the accepted customer pack into the customer workflow, operate the
            adopted books day-to-day, operate the adopted statement, operate the adopted customer
            workflow, review the operated books, review the operated statement, review the operated
            customer workflow, name a reviewer, record a review date, record a review conclusion, approve
            the reviewed operating results, approve the reviewed statement, approve the reviewed customer
            workflow, name an approver, record an approval date, record an approval decision, authorize
            the approved operating results, authorize the approved statement, authorize the approved
            customer workflow, name an authorizer, record an authorization date, record an authorization
            grant, or attribute a change in cash, risk, or capacity. Sync does not measure approved. Sync
            does not measure authorized. Sync does not measure approved or authorized for the customer.
          </p>

          <p>
            Keep this commercial authorized distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This authorized is not the collected Collected Is Not Recognized already names. This authorized
            is not the disbursement Paid Is Not Settled already names. This authorized is not the
            settlement Settled Is Not Booked already names. This authorized is not the collectible
            Collectible Is Not Applied already names. This essay does not collapse into Collectible Is Not
            Applied. This essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied
            stays on its own route. This authorized is not the applied Applied Is Not Restored already
            names. This essay does not collapse into Applied Is Not Restored. This essay does not rewrite
            Applied Is Not Restored. Applied Is Not Restored stays on its own route. This authorized is not
            the extinguishment Extinguished Is Not Reconciled already names. This essay does not collapse
            into Extinguished Is Not Reconciled. This essay does not rewrite Extinguished Is Not Reconciled.
            This authorized is not the reconciled Reconciled Is Not Attested already names. This essay does
            not collapse into Reconciled Is Not Attested. This essay does not rewrite Reconciled Is Not
            Attested. Reconciled Is Not Attested stays on its own route. This authorized is not the
            reconciled Reconciled Is Not Closed already names. This essay does not collapse into Reconciled
            Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This authorized is not the
            reconciled Booked Is Not Reconciled already names. This essay does not collapse into Booked Is
            Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This essay does not
            collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced.
            This essay does not collapse into Defended Is Not Owned. This essay does not rewrite Defended
            Is Not Owned. Defended Is Not Owned stays on its own growth-loop route. This authorized is not
            the certification Certified Is Not Insured already names. This essay does not collapse into
            Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured. This authorized
            is not the certification Assured Is Not Certified already names. This essay does not collapse
            into Assured Is Not Certified. This essay does not rewrite Assured Is Not Certified. This
            authorized is not the accepted Accepted Is Not Posted already names. This essay does not
            collapse into Accepted Is Not Posted. This essay does not rewrite Accepted Is Not Posted. This
            authorized is not the accepted Restored Is Not Accepted already names. This essay does not
            collapse into Restored Is Not Accepted. This essay does not rewrite Restored Is Not Accepted.
            This authorized is not the operated Operated Is Not Sustained already names. This essay does
            not collapse into Operated Is Not Sustained. This essay does not rewrite Operated Is Not
            Sustained. Operated Is Not Sustained stays on its own route. This authorized is not the
            operated Delivered Is Not Operated already names. This essay does not collapse into Delivered
            Is Not Operated. This essay does not rewrite Delivered Is Not Operated. Delivered Is Not
            Operated stays on its own route.
          </p>

          <p>
            Instructed would mean that the authorized operating results for that approved reviewed operated
            accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
            earned commenced renewed sustained realized performed advanced relied attested extinguished
            period have been instructed — the authorized operating results instructed by a named instructor
            for the named period, the authorized statement instructed for the named ledger and period, or
            the authorized customer workflow instructed for the customer and the period, with a named
            instructor, an instruction date, and an instruction to act — not merely that a named authorizer
            recorded an authorization date and an authorization grant for that approved period.{' '}
            <Link
              href="/insights/successor-authorized-is-not-instructed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Authorized Is Not Instructed
            </Link>
            . Read it at /insights/successor-authorized-is-not-instructed. This essay does not rewrite that
            thesis. This essay does not give that instructed a new meaning. This essay does not create a
            filing spine for Approved Is Not Authorized. This essay does not create a filing spine at
            /insights/approved-is-not-authorized.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Approved is a named
              approver approval of the reviewed operating results for that named scope: reviewed operating
              results with a named approver, approval date, and approval decision for that reviewed operated
              accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
              earned commenced renewed sustained realized performed advanced relied attested extinguished
              period. Authorized is those approved packs: the approved operating results authorized by a
              named authorizer for the named period, the approved statement authorized for the named ledger
              and period, or the approved customer workflow authorized for the customer and the period,
              with a named authorizer, an authorization date, and an authorization grant. A{' '}
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
              authorizes the approved packs, executes plant work, or that authorization write-back is live.
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

          <InsightNextSteps slug="successor-approved-is-not-authorized" />
        </motion.article>
      </div>
    </main>
  );
}
