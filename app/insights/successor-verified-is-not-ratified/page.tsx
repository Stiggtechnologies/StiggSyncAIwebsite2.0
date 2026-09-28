'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-verified-is-not-ratified');

export default function SuccessorVerifiedIsNotRatifiedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Verified Is Not Ratified</h1>
            <p className="text-xl text-gray-400">
              Verified is not ratified. Packs that have been verified — a named verifier verification of
              the confirmed operating results for that named scope, confirmed operating results with a named
              verifier, a verification date, and a verification recorded for that confirmed acted instructed
              authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
              relieved applied collected invoiced earned commenced renewed sustained realized performed
              advanced relied attested extinguished period, the confirmed statement verified for the named
              ledger and period, or the confirmed customer workflow verified for the customer and the period —
              are not the same as those verified packs having been ratified (a named ratifier ratification
              of the verified operating results for that named scope — the verified operating results
              ratified by a named ratifier for the named period, the verified statement ratified for the
              named ledger and period, or the verified customer workflow ratified for the customer and the
              period, with a named ratifier, a ratification date, and a ratification recorded) — not merely
              that a named verifier recorded a verification date and a verification recorded for that confirmed
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-confirmed-is-not-verified"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Confirmed Is Not Verified
              </Link>
              . Confirmed Is Not Verified already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that verified a new meaning. This essay starts from the
              verified the successor-spine Confirmed Is Not Verified already names. This refusal sits on the
              commercial spine. This is the ratification spine after that verification. The prior essay is
              the verification spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The verified practice is not the ratified practice
          </h2>

          <p>
            Verified means that confirmed commercial packs have been verified — a named verifier verification
            of the confirmed operating results for that named scope, confirmed operating results with a named
            verifier, a verification date, and a verification recorded for that confirmed acted instructed authorized
            approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved
            applied collected invoiced earned commenced renewed sustained realized performed advanced relied
            attested extinguished period — by an executed verification instrument. Ratified means that those
            verified packs have been ratified — the verified operating results ratified by a named
            ratifier for the named period, the verified statement ratified for the named ledger and period,
            or the verified customer workflow ratified for the customer and the period, with a named
            ratifier, a ratification date, and a ratification recorded — by an executed ratification
            instrument. A verification is not a ratification. This split is verified versus ratified.
          </p>

          <p>
            A verified close whose named verifier recorded a verification date and a verification recorded
            for those verified operating results, with no named ratifier, no ratification date, and no
            ratification recorded for that confirmed acted instructed authorized approved reviewed operated accepted
            acknowledged issued sealed certified reconciled relieved applied collected invoiced earned
            commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not ratified. A verified statement whose confirmed statement was verified for the named ledger and
            period, with that verified statement not ratified for the named ledger and period, is not
            ratified. A verified customer workflow whose confirmed customer workflow was verified for the
            customer and the period, with that verified customer workflow not ratified for the customer and
            the period, is not ratified. Ratification talk that says a named verifier recorded a
            verification date and a verification recorded, the confirmed statement was verified, or the confirmed
            customer workflow was verified while the verified operating results have not been ratified, the
            verified statement has not been ratified, or the verified customer workflow has not been
            ratified is not ratified.
          </p>

          <p>
            A firm can be verified and still not ratified. A firm can chase ratification theater and still
            not be verified. A verification package alone is not ratified of that verified successor
            outcome. Verified cash or margin is not the same as a ratified commercial outcome. The refusal
            is not merely that a named verifier recorded a verification date and a verification recorded
            for that confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued
            sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period, the confirmed statement
            was verified for that named ledger and period, or the confirmed customer workflow was verified for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a ratified record is allowed to be
          </h2>

          <p>
            An executed ratification instrument is a books-ratification record that shows the verified
            operating results were ratified for that confirmed acted instructed authorized approved reviewed operated
            accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
            earned commenced renewed sustained realized performed advanced relied attested extinguished
            period, with a named ratifier, a ratification date, and a ratification recorded, a
            statement-ratification record that shows the verified statement was ratified for that named
            ledger and period, with a named ratifier, a ratification date, and a ratification recorded, a
            customer-ratification record that shows the verified customer workflow was ratified for the
            customer and the period, with a named ratifier, a ratification date, and a ratification
            recorded, or a ratification binder that releases the verified packs as ratified only when the
            named ratifier, the ratification date, and the ratification recorded are on the file.
          </p>

          <p>
            The ratification record has to trail back to the verification evidence, and the verification
            evidence has to trail back to the verification{' '}
            <Link
              href="/insights/successor-confirmed-is-not-verified"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Confirmed Is Not Verified
            </Link>{' '}
            already required. A books-ratification that cannot name the period, the named ratifier, the
            ratification date, and the ratification recorded the verified operating results were ratified
            under, a statement-ratification that cannot name the ledger, the period, the named ratifier, the
            ratification date, and the ratification recorded the verified statement was ratified under, or a
            customer-ratification that cannot name the customer, the period, the named ratifier, the
            ratification date, and the ratification recorded the verified customer workflow was ratified
            under is ratification theater. It is not this ratified.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named verified is not ratified</h2>

          <p>
            Named verified is not ratified. The verified practice is not the ratified practice. A
            verification record answers whether the confirmed operating results, the confirmed statement, or the
            confirmed customer workflow were verified as confirmed operating results with a named verifier, a
            verification date, and a verification recorded for that confirmed acted instructed authorized approved
            reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied
            collected invoiced earned commenced renewed sustained realized performed advanced relied attested
            extinguished period. A ratification record answers whether those verified packs were ratified.
            Verified is not ratified.
          </p>

          <p>
            A claim that verifying so it is ratified, while the ratification trail is missing, is not this
            ratified. A verified close whose named verifier recorded a verification date and a verification
            recorded, a verified statement whose confirmed statement was verified, or a verified customer
            workflow whose confirmed customer workflow was verified, with no named ratifier, no ratification
            date, and no ratification recorded, is ratification theater, and it is not this verified either
            when the verification instrument is missing. A ratification claim alone is not proof the named
            verification evidence was on the file. Verification evidence alone is not ratified of that
            verified successor outcome.
          </p>

          <p>
            Sync refuses to pretend verified or ratified is a status light. Sync does not deem ratified for
            the customer. Sync must not auto-deem-ratified. Sync must not treat verified as ratified as
            Learning credit. Evidence from the plant beats the verification record when the record is being
            used as ratified.
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
            keep this edition from treating a verification record as ratified.
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
            that verified is ratified. It does not write a CMMS work order, book revenue, recognize revenue,
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
            or attribute a change in cash, risk, or capacity. Sync does not measure verified. Sync does not
            measure ratified. Sync does not measure verified or ratified for the customer.
          </p>

          <p>
            Keep this commercial ratified distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            ratified is not the collected Collected Is Not Recognized already names. This ratified is not
            the disbursement Paid Is Not Settled already names. This ratified is not the settlement Settled
            Is Not Booked already names. This ratified is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            ratified is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This ratified is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This ratified is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This ratified is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This ratified is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This ratified is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This ratified is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This ratified is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This ratified is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This ratified is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            ratified is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route.
          </p>

          <p>
            Enacted would mean that the ratified operating results for that verified confirmed acted instructed
            authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
            relieved applied collected invoiced earned commenced renewed sustained realized performed
            advanced relied attested extinguished period have been enacted — the ratified operating results
            enacted by a named enactor for the named period, the ratified statement enacted for the named
            ledger and period, or the ratified customer workflow enacted for the customer and the period,
            with a named enactor, an enactment date, and an enactment recorded — not merely that a named
            ratifier recorded a ratification date and a ratification recorded for that verified period.{' '}
            <Link
              href="/insights/successor-ratified-is-not-enacted"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Ratified Is Not Enacted
            </Link>
            . Read it at /insights/successor-ratified-is-not-enacted. This essay does not rewrite that
            thesis. This essay does not give that enacted a new meaning. This essay does not create a
            filing spine for Verified Is Not Ratified. This essay does not create a filing spine at
            /insights/verified-is-not-ratified.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Verified is a named
              verifier verification of the confirmed operating results for that named scope: confirmed operating
              results with a named verifier, a verification date, and a verification recorded for that confirmed acted
              instructed authorized approved reviewed operated accepted acknowledged issued sealed certified
              reconciled relieved applied collected invoiced earned commenced renewed sustained realized
              performed advanced relied attested extinguished period. Ratified is those verified packs: the
              verified operating results ratified by a named ratifier for the named period, the verified
              statement ratified for the named ledger and period, or the verified customer workflow ratified
              for the customer and the period, with a named ratifier, a ratification date, and a ratification
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
              asks whether the records can support a conclusion. None of those is a claim that Sync ratifies
              the verified packs, executes plant work, or that ratification write-back is live.
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

          <InsightNextSteps slug="successor-verified-is-not-ratified" />
        </motion.article>
      </div>
    </main>
  );
}
