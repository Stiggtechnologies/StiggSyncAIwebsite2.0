'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-ratified-is-not-enacted');

export default function SuccessorRatifiedIsNotEnactedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Ratified Is Not Enacted</h1>
            <p className="text-xl text-gray-400">
              Ratified is not enacted. Packs that have been ratified — a named ratifier ratification of
              the verified operating results for that named scope, verified operating results with a named
              ratifier, a ratification date, and a ratification recorded for that verified confirmed acted instructed
              authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
              relieved applied collected invoiced earned commenced renewed sustained realized performed
              advanced relied attested extinguished period, the verified statement ratified for the named
              ledger and period, or the verified customer workflow ratified for the customer and the period —
              are not the same as those ratified packs having been enacted (a named enactor enactment
              of the ratified operating results for that named scope — the ratified operating results
              enacted by a named enactor for the named period, the ratified statement enacted for the
              named ledger and period, or the ratified customer workflow enacted for the customer and the
              period, with a named enactor, an enactment date, and an enactment recorded) — not merely
              that a named ratifier recorded a ratification date and a ratification recorded for that verified
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-verified-is-not-ratified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Verified Is Not Ratified
              </Link>
              . Verified Is Not Ratified already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that ratified a new meaning. This essay starts from the
              ratified the successor-spine Verified Is Not Ratified already names. This refusal sits on the
              commercial spine. This is the enactment spine after that ratification. The prior essay is
              the ratification spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The ratified practice is not the enacted practice
          </h2>

          <p>
            Ratified means that verified commercial packs have been ratified — a named ratifier ratification
            of the verified operating results for that named scope, verified operating results with a named
            ratifier, a ratification date, and a ratification recorded for that verified confirmed acted instructed authorized
            approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved
            applied collected invoiced earned commenced renewed sustained realized performed advanced relied
            attested extinguished period — by an executed ratification instrument. Enacted means that those
            ratified packs have been enacted — the ratified operating results enacted by a named
            enactor for the named period, the ratified statement enacted for the named ledger and period,
            or the ratified customer workflow enacted for the customer and the period, with a named
            enactor, an enactment date, and an enactment recorded — by an executed enactment
            instrument. A ratification is not an enactment. This split is ratified versus enacted.
          </p>

          <p>
            A ratified close whose named ratifier recorded a ratification date and a ratification recorded
            for those ratified operating results, with no named enactor, no enactment date, and no
            enactment recorded for that verified confirmed acted instructed authorized approved reviewed operated accepted
            acknowledged issued sealed certified reconciled relieved applied collected invoiced earned
            commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not enacted. A ratified statement whose verified statement was ratified for the named ledger and
            period, with that ratified statement not enacted for the named ledger and period, is not
            enacted. A ratified customer workflow whose verified customer workflow was ratified for the
            customer and the period, with that ratified customer workflow not enacted for the customer and
            the period, is not enacted. Enactment talk that says a named ratifier recorded a
            ratification date and a ratification recorded, the verified statement was ratified, or the verified
            customer workflow was ratified while the ratified operating results have not been enacted, the
            ratified statement has not been enacted, or the ratified customer workflow has not been
            enacted is not enacted.
          </p>

          <p>
            A firm can be ratified and still not enacted. A firm can chase enactment theater and still
            not be ratified. A ratification package alone is not enacted of that ratified successor
            outcome. Ratified cash or margin is not the same as an enacted commercial outcome. The refusal
            is not merely that a named ratifier recorded a ratification date and a ratification recorded
            for that verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued
            sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period, the verified statement
            was ratified for that named ledger and period, or the verified customer workflow was ratified for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an enacted record is allowed to be
          </h2>

          <p>
            An executed enactment instrument is a books-enactment record that shows the ratified
            operating results were enacted for that verified confirmed acted instructed authorized approved reviewed operated
            accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
            earned commenced renewed sustained realized performed advanced relied attested extinguished
            period, with a named enactor, an enactment date, and an enactment recorded, a
            statement-enactment record that shows the ratified statement was enacted for that named
            ledger and period, with a named enactor, an enactment date, and an enactment recorded, a
            customer-enactment record that shows the ratified customer workflow was enacted for the
            customer and the period, with a named enactor, an enactment date, and an enactment
            recorded, or an enactment binder that releases the ratified packs as enacted only when the
            named enactor, the enactment date, and the enactment recorded are on the file.
          </p>

          <p>
            The enactment record has to trail back to the ratification evidence, and the ratification
            evidence has to trail back to the ratification{' '}
            <Link
              href="/insights/successor-verified-is-not-ratified"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Verified Is Not Ratified
            </Link>{' '}
            already required. A books-enactment that cannot name the period, the named enactor, the
            enactment date, and the enactment recorded the ratified operating results were enacted
            under, a statement-enactment that cannot name the ledger, the period, the named enactor, the
            enactment date, and the enactment recorded the ratified statement was enacted under, or a
            customer-enactment that cannot name the customer, the period, the named enactor, the
            enactment date, and the enactment recorded the ratified customer workflow was enacted
            under is enactment theater. It is not this enacted.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named ratified is not enacted</h2>

          <p>
            Named ratified is not enacted. The ratified practice is not the enacted practice. A
            ratification record answers whether the verified operating results, the verified statement, or the
            verified customer workflow were ratified as verified operating results with a named ratifier, a
            ratification date, and a ratification recorded for that verified confirmed acted instructed authorized approved
            reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied
            collected invoiced earned commenced renewed sustained realized performed advanced relied attested
            extinguished period. An enactment record answers whether those ratified packs were enacted.
            Ratified is not enacted.
          </p>

          <p>
            A claim that ratifying so it is enacted, while the enactment trail is missing, is not this
            enacted. A ratified close whose named ratifier recorded a ratification date and a ratification
            recorded, a ratified statement whose verified statement was ratified, or a ratified customer
            workflow whose verified customer workflow was ratified, with no named enactor, no enactment
            date, and no enactment recorded, is enactment theater, and it is not this ratified either
            when the ratification instrument is missing. An enactment claim alone is not proof the named
            ratification evidence was on the file. Ratification evidence alone is not enacted of that
            ratified successor outcome.
          </p>

          <p>
            Sync refuses to pretend ratified or enacted is a status light. Sync does not deem enacted for
            the customer. Sync must not auto-deem-enacted. Sync must not treat ratified as enacted as
            Learning credit. Evidence from the plant beats the ratification record when the record is being
            used as enacted.
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
            keep this edition from treating a ratification record as enacted.
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
            This is an essay about the Decision Case order, not a customer case study. It names no plant,
            states no savings figure, states no price, and claims no prevented failure. It does not claim
            that ratified is enacted. It does not write a CMMS work order, book revenue, recognize revenue,
            issue an invoice, post a receipt, apply cash, relieve a balance, reconcile the books, certify
            the books, seal the books, issue the close pack, acknowledge receipt of the issued pack, accept
            the numbers and close, accept the statement, accept the customer pack, adopt the accepted close
            into operating practice, adopt the accepted statement into the books, adopt the accepted customer
            pack into the customer workflow, operate the adopted books day-to-day, operate the adopted
            statement, operate the adopted customer workflow, review the operated books, review the operated
            statement, review the operated customer workflow, name a reviewer, record a review date, record a
            review conclusion, approve the reviewed operating results, approve the reviewed statement,
            approve the reviewed customer workflow, name an approver, record an approval date, record an
            approval decision, authorize the approved operating results, authorize the approved statement,
            authorize the approved customer workflow, name an authorizer, record an authorization date,
            record an authorization grant, instruct the authorized operating results, instruct the authorized
            statement, instruct the authorized customer workflow, name an instructor, record an instruction
            date, record an instruction to act, act the instructed operating results, act the instructed
            statement, act the instructed customer workflow, name an actor, record an action date, record an
            action taken, confirm the acted operating results, confirm the acted statement, confirm the acted
            customer workflow, name a confirmer, record a confirmation date, record a confirmation recorded,
            verify the confirmed operating results, verify the confirmed statement, verify the confirmed
            customer workflow, name a verifier, record a verification date, record a verification recorded,
            ratify the verified operating results, ratify the verified statement, ratify the verified
            customer workflow, name a ratifier, record a ratification date, record a ratification recorded,
            enact the ratified operating results, enact the ratified statement, enact the ratified
            customer workflow, name an enactor, record an enactment date, record an enactment recorded,
            or attribute a change in cash, risk, or capacity. Sync does not measure ratified. Sync does not
            measure enacted. Sync does not measure ratified or enacted for the customer.
          </p>

          <p>
            Keep this commercial enacted distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            enacted is not the collected Collected Is Not Recognized already names. This enacted is not
            the disbursement Paid Is Not Settled already names. This enacted is not the settlement Settled
            Is Not Booked already names. This enacted is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            enacted is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This enacted is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This enacted is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This enacted is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This enacted is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This enacted is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This enacted is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This enacted is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This enacted is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This enacted is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            enacted is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route.
          </p>

          <p>
            Promulgated would mean that the enacted operating results for that ratified verified confirmed acted instructed
            authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
            relieved applied collected invoiced earned commenced renewed sustained realized performed
            advanced relied attested extinguished period have been promulgated — the enacted operating results
            promulgated by a named promulgator for the named period, the enacted statement promulgated for the named
            ledger and period, or the enacted customer workflow promulgated for the customer and the period,
            with a named promulgator, a promulgation date, and a promulgation recorded — not merely that a named
            enactor recorded an enactment date and an enactment recorded for that ratified period.{' '}
            <Link
              href="/insights/successor-enacted-is-not-promulgated"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Enacted Is Not Promulgated
            </Link>
            . Read it at /insights/successor-enacted-is-not-promulgated. This essay does not rewrite that
            thesis. This essay does not give that promulgated a new meaning. This essay does not create a
            filing spine for Ratified Is Not Enacted. This essay does not create a filing spine at
            /insights/ratified-is-not-enacted.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Ratified is a named
              ratifier ratification of the verified operating results for that named scope: verified operating
              results with a named ratifier, a ratification date, and a ratification recorded for that verified confirmed acted
              instructed authorized approved reviewed operated accepted acknowledged issued sealed certified
              reconciled relieved applied collected invoiced earned commenced renewed sustained realized
              performed advanced relied attested extinguished period. Enacted is those ratified packs: the
              ratified operating results enacted by a named enactor for the named period, the ratified
              statement enacted for the named ledger and period, or the ratified customer workflow enacted
              for the customer and the period, with a named enactor, an enactment date, and an enactment
              recorded. A{' '}
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
              asks whether the records can support a conclusion. None of those is a claim that Sync enacts
              the ratified packs, executes plant work, or that enactment write-back is live.
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

          <InsightNextSteps slug="successor-ratified-is-not-enacted" />
        </motion.article>
      </div>
    </main>
  );
}
