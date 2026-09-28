'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-confirmed-is-not-verified');

export default function SuccessorConfirmedIsNotVerifiedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Confirmed Is Not Verified</h1>
            <p className="text-xl text-gray-400">
              Confirmed is not verified. Packs that have been confirmed — a named confirmer confirmation of
              the acted operating results for that named scope, acted operating results with a named
              confirmer, a confirmation date, and a confirmation recorded for that acted instructed
              authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
              relieved applied collected invoiced earned commenced renewed sustained realized performed
              advanced relied attested extinguished period, the acted statement confirmed for the named
              ledger and period, or the acted customer workflow confirmed for the customer and the period —
              are not the same as those confirmed packs having been verified (a named verifier verification
              of the confirmed operating results for that named scope — the confirmed operating results
              verified by a named verifier for the named period, the confirmed statement verified for the
              named ledger and period, or the confirmed customer workflow verified for the customer and the
              period, with a named verifier, a verification date, and a verification recorded) — not merely
              that a named confirmer recorded a confirmation date and a confirmation recorded for that acted
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-acted-is-not-confirmed"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Acted Is Not Confirmed
              </Link>
              . Acted Is Not Confirmed already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that confirmed a new meaning. This essay starts from the
              confirmed the successor-spine Acted Is Not Confirmed already names. This refusal sits on the
              commercial spine. This is the verification spine after that confirmation. The prior essay is
              the confirmation spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The confirmed practice is not the verified practice
          </h2>

          <p>
            Confirmed means that acted commercial packs have been confirmed — a named confirmer confirmation
            of the acted operating results for that named scope, acted operating results with a named
            confirmer, a confirmation date, and a confirmation recorded for that acted instructed authorized
            approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved
            applied collected invoiced earned commenced renewed sustained realized performed advanced relied
            attested extinguished period — by an executed confirmation instrument. Verified means that those
            confirmed packs have been verified — the confirmed operating results verified by a named
            verifier for the named period, the confirmed statement verified for the named ledger and period,
            or the confirmed customer workflow verified for the customer and the period, with a named
            verifier, a verification date, and a verification recorded — by an executed verification
            instrument. A confirmation is not a verification. This split is confirmed versus verified.
          </p>

          <p>
            A confirmed close whose named confirmer recorded a confirmation date and a confirmation recorded
            for those confirmed operating results, with no named verifier, no verification date, and no
            verification recorded for that acted instructed authorized approved reviewed operated accepted
            acknowledged issued sealed certified reconciled relieved applied collected invoiced earned
            commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not verified. A confirmed statement whose acted statement was confirmed for the named ledger and
            period, with that confirmed statement not verified for the named ledger and period, is not
            verified. A confirmed customer workflow whose acted customer workflow was confirmed for the
            customer and the period, with that confirmed customer workflow not verified for the customer and
            the period, is not verified. Verification talk that says a named confirmer recorded a
            confirmation date and a confirmation recorded, the acted statement was confirmed, or the acted
            customer workflow was confirmed while the confirmed operating results have not been verified, the
            confirmed statement has not been verified, or the confirmed customer workflow has not been
            verified is not verified.
          </p>

          <p>
            A firm can be confirmed and still not verified. A firm can chase verification theater and still
            not be confirmed. A confirmation package alone is not verified of that confirmed successor
            outcome. Confirmed cash or margin is not the same as a verified commercial outcome. The refusal
            is not merely that a named confirmer recorded a confirmation date and a confirmation recorded
            for that acted instructed authorized approved reviewed operated accepted acknowledged issued
            sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period, the acted statement
            was confirmed for that named ledger and period, or the acted customer workflow was confirmed for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a verified record is allowed to be
          </h2>

          <p>
            An executed verification instrument is a books-verification record that shows the confirmed
            operating results were verified for that acted instructed authorized approved reviewed operated
            accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
            earned commenced renewed sustained realized performed advanced relied attested extinguished
            period, with a named verifier, a verification date, and a verification recorded, a
            statement-verification record that shows the confirmed statement was verified for that named
            ledger and period, with a named verifier, a verification date, and a verification recorded, a
            customer-verification record that shows the confirmed customer workflow was verified for the
            customer and the period, with a named verifier, a verification date, and a verification
            recorded, or a verification binder that releases the confirmed packs as verified only when the
            named verifier, the verification date, and the verification recorded are on the file.
          </p>

          <p>
            The verification record has to trail back to the confirmation evidence, and the confirmation
            evidence has to trail back to the confirmation{' '}
            <Link
              href="/insights/successor-acted-is-not-confirmed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Acted Is Not Confirmed
            </Link>{' '}
            already required. A books-verification that cannot name the period, the named verifier, the
            verification date, and the verification recorded the confirmed operating results were verified
            under, a statement-verification that cannot name the ledger, the period, the named verifier, the
            verification date, and the verification recorded the confirmed statement was verified under, or a
            customer-verification that cannot name the customer, the period, the named verifier, the
            verification date, and the verification recorded the confirmed customer workflow was verified
            under is verification theater. It is not this verified.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named confirmed is not verified</h2>

          <p>
            Named confirmed is not verified. The confirmed practice is not the verified practice. A
            confirmation record answers whether the acted operating results, the acted statement, or the
            acted customer workflow were confirmed as acted operating results with a named confirmer, a
            confirmation date, and a confirmation recorded for that acted instructed authorized approved
            reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied
            collected invoiced earned commenced renewed sustained realized performed advanced relied attested
            extinguished period. A verification record answers whether those confirmed packs were verified.
            Confirmed is not verified.
          </p>

          <p>
            A claim that confirming so it is verified, while the verification trail is missing, is not this
            verified. A confirmed close whose named confirmer recorded a confirmation date and a confirmation
            recorded, a confirmed statement whose acted statement was confirmed, or a confirmed customer
            workflow whose acted customer workflow was confirmed, with no named verifier, no verification
            date, and no verification recorded, is verification theater, and it is not this confirmed either
            when the confirmation instrument is missing. A verification claim alone is not proof the named
            confirmation evidence was on the file. Confirmation evidence alone is not verified of that
            confirmed successor outcome.
          </p>

          <p>
            Sync refuses to pretend confirmed or verified is a status light. Sync does not deem verified for
            the customer. Sync must not auto-deem-verified. Sync must not treat confirmed as verified as
            Learning credit. Evidence from the plant beats the confirmation record when the record is being
            used as verified.
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
            keep this edition from treating a confirmation record as verified.
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
            that confirmed is verified. It does not write a CMMS work order, book revenue, recognize revenue,
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
            or attribute a change in cash, risk, or capacity. Sync does not measure confirmed. Sync does not
            measure verified. Sync does not measure confirmed or verified for the customer.
          </p>

          <p>
            Keep this commercial verified distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            verified is not the collected Collected Is Not Recognized already names. This verified is not
            the disbursement Paid Is Not Settled already names. This verified is not the settlement Settled
            Is Not Booked already names. This verified is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            verified is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This verified is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This verified is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This verified is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This verified is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This verified is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This verified is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This verified is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This verified is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This verified is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            verified is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route.
          </p>

          <p>
            Ratified would mean that the verified operating results for that confirmed acted instructed
            authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
            relieved applied collected invoiced earned commenced renewed sustained realized performed
            advanced relied attested extinguished period have been ratified — the verified operating results
            ratified by a named ratifier for the named period, the verified statement ratified for the named
            ledger and period, or the verified customer workflow ratified for the customer and the period,
            with a named ratifier, a ratification date, and a ratification recorded — not merely that a named
            verifier recorded a verification date and a verification recorded for that confirmed period.
            Verified Is Not Ratified may be named in prose only at
            /insights/successor-verified-is-not-ratified. This essay does not implement
            that page. This essay does not create a successor route for Verified Is Not Ratified. This essay
            does not create a filing spine for Confirmed Is Not Verified. This essay does not create a
            filing spine at /insights/confirmed-is-not-verified.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Confirmed is a named
              confirmer confirmation of the acted operating results for that named scope: acted operating
              results with a named confirmer, a confirmation date, and a confirmation recorded for that acted
              instructed authorized approved reviewed operated accepted acknowledged issued sealed certified
              reconciled relieved applied collected invoiced earned commenced renewed sustained realized
              performed advanced relied attested extinguished period. Verified is those confirmed packs: the
              confirmed operating results verified by a named verifier for the named period, the confirmed
              statement verified for the named ledger and period, or the confirmed customer workflow verified
              for the customer and the period, with a named verifier, a verification date, and a verification
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
              asks whether the records can support a conclusion. None of those is a claim that Sync verifies
              the confirmed packs, executes plant work, or that verification write-back is live.
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

          <InsightNextSteps slug="successor-confirmed-is-not-verified" />
        </motion.article>
      </div>
    </main>
  );
}
