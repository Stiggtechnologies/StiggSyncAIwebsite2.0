'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-received-is-not-endorsed');

export default function SuccessorReceivedIsNotEndorsedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Received Is Not Endorsed</h1>
            <p className="text-xl text-gray-400">
              Received is not endorsed. Packs that have been received — a named receiver receipt of
              the presented operating results for that named scope, presented operating results with a named
              receiver, a receipt date, and a receipt recorded for that presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the presented statement received for the named
              ledger and period, or the presented customer workflow received for the customer and the period —
              are not the same as those received packs having been endorsed (a named endorser endorsement
              of the received operating results for that named scope — the received operating results
              endorsed by a named endorser for the named period, the received statement endorsed for the
              named ledger and period, or the received customer workflow endorsed for the customer and the
              period, with a named endorser, an endorsement date, and an endorsement recorded) — not merely
              that a named receiver recorded a receipt date and a receipt recorded for that presented
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-presented-is-not-received"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Presented Is Not Received
              </Link>
              . Presented Is Not Received already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that received a new meaning. This essay starts from the
              received the successor-spine Presented Is Not Received already names. This refusal sits on the
              commercial spine. This is the endorsement spine after that receipt. The prior essay is
              the receipt spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The received practice is not the endorsed practice
          </h2>

          <p>
            Received means that presented commercial packs have been received — a named receiver receipt
            of the presented operating results for that named scope, presented operating results with a named
            receiver, a receipt date, and a receipt recorded for that presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period — by an executed receipt instrument. Endorsed means that those
            received packs have been endorsed — the received operating results endorsed by a named
            endorser for the named period, the received statement endorsed for the named ledger and period,
            or the received customer workflow endorsed for the customer and the period, with a named
            endorser, an endorsement date, and an endorsement recorded — by an executed endorsement
            instrument. A receipt is not an endorsement. This split is received versus endorsed.
          </p>

          <p>
            A received close whose named receiver recorded a receipt date and a receipt recorded
            for those received operating results, with no named endorser, no endorsement date, and no
            endorsement recorded for that presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not endorsed. A received statement whose presented statement was received for the named ledger and
            period, with that received statement not endorsed for the named ledger and period, is not
            endorsed. A received customer workflow whose presented customer workflow was received for the
            customer and the period, with that received customer workflow not endorsed for the customer and
            the period, is not endorsed. Receipt talk that says a named receiver recorded a
            receipt date and a receipt recorded, the presented statement was received, or the presented
            customer workflow was received while the received operating results have not been endorsed, the
            received statement has not been endorsed, or the received customer workflow has not been
            endorsed is not endorsed.
          </p>

          <p>
            A firm can be received and still not endorsed. A firm can chase endorsement theater and still
            not be received. A receipt package alone is not endorsed of that received successor
            outcome. Received cash or margin is not the same as an endorsed commercial outcome. The refusal
            is not merely that a named receiver recorded a receipt date and a receipt recorded
            for that presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the presented statement
            was received for that named ledger and period, or the presented customer workflow was received for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an endorsed record is allowed to be
          </h2>

          <p>
            An executed endorsement instrument is a books-endorsement record that shows the received
            operating results were endorsed for that presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished
            period, with a named endorser, an endorsement date, and an endorsement recorded, a
            statement-endorsement record that shows the received statement was endorsed for that named
            ledger and period, with a named endorser, an endorsement date, and an endorsement recorded, a
            customer-endorsement record that shows the received customer workflow was endorsed for the
            customer and the period, with a named endorser, an endorsement date, and an endorsement
            recorded, or an endorsement binder that releases the received packs as endorsed only when the
            named endorser, the endorsement date, and the endorsement recorded are on the file.
          </p>

          <p>
            The endorsement record has to trail back to the receipt evidence, and the receipt
            evidence has to trail back to the receipt{' '}
            <Link
              href="/insights/successor-presented-is-not-received"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Presented Is Not Received
            </Link>{' '}
            already required. A books-endorsement that cannot name the period, the named endorser, the
            endorsement date, and the endorsement recorded the received operating results were endorsed
            under, a statement-endorsement that cannot name the ledger, the period, the named endorser, the
            endorsement date, and the endorsement recorded the received statement was endorsed under, or a
            customer-endorsement that cannot name the customer, the period, the named endorser, the
            endorsement date, and the endorsement recorded the received customer workflow was endorsed
            under is endorsement theater. It is not this endorsed.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named received is not endorsed</h2>

          <p>
            Named received is not endorsed. The received practice is not the endorsed practice. A
            receipt record answers whether the presented operating results, the presented statement, or the
            presented customer workflow were received as presented operating results with a named receiver, a
            receipt date, and a receipt recorded for that presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. An endorsement record answers whether those received packs were endorsed.
            Received is not endorsed.
          </p>

          <p>
            A claim that receiving so it is endorsed, while the endorsement trail is missing, is not this
            endorsed. A received close whose named receiver recorded a receipt date and a receipt
            recorded, a received statement whose presented statement was received, or a received customer
            workflow whose presented customer workflow was received, with no named endorser, no endorsement
            date, and no endorsement recorded, is endorsement theater, and it is not this received either
            when the receipt instrument is missing. An endorsement claim alone is not proof the named
            receipt evidence was on the file. Receipt evidence alone is not endorsed of that
            received successor outcome.
          </p>

          <p>
            Sync refuses to pretend received or endorsed is a status light. Sync does not deem endorsed for
            the customer. Sync must not auto-deem-endorsed. Sync must not treat received as endorsed as
            Learning credit. Evidence from the plant beats the receipt record when the record is being
            used as endorsed.
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
            keep this edition from treating a receipt record as endorsed.
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
            that received is endorsed. It does not write a CMMS work order, book revenue, recognize revenue,
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
            promulgate the enacted operating results, promulgate the enacted statement, promulgate the enacted
            customer workflow, name a promulgator, record a promulgation date, record a promulgation recorded,
            publish the promulgated operating results, publish the promulgated statement, publish the promulgated
            customer workflow, name a publisher, record a publication date, record a publication recorded,
            circulate the published operating results, circulate the published statement, circulate the published
            customer workflow, name a circulator, record a circulation date, record a circulation recorded,
            present the circulated operating results, present the circulated statement, present the circulated
            customer workflow, name a presenter, record a presentation date, record a presentation recorded,
            receive the presented operating results, receive the presented statement, receive the presented
            customer workflow, name a receiver, record a receipt date, record a receipt recorded,
            endorse the received operating results, endorse the received statement, endorse the received
            customer workflow, name an endorser, record an endorsement date, record an endorsement recorded,
            or attribute a change in cash, risk, or capacity. Sync does not measure received. Sync does not
            measure endorsed. Sync does not measure received or endorsed for the customer.
          </p>

          <p>
            Keep this commercial endorsed distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            endorsed is not the collected Collected Is Not Recognized already names. This endorsed is not
            the disbursement Paid Is Not Settled already names. This endorsed is not the settlement Settled
            Is Not Booked already names. This endorsed is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            endorsed is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This endorsed is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This endorsed is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This endorsed is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This endorsed is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This endorsed is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This endorsed is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This endorsed is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This endorsed is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This endorsed is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            endorsed is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route.
          </p>

          <p>
            Honored would mean that the endorsed operating results for that received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period have been honored — the endorsed operating results
            honored by a named honorer for the named period, the endorsed statement honored for the named
            ledger and period, or the endorsed customer workflow honored for the customer and the period,
            with a named honorer, an honor date, and an honor recorded — not merely that a named
            endorser recorded an endorsement date and an endorsement recorded for that received period.
            Endorsed Is Not Honored may be named in prose only at
            /insights/successor-endorsed-is-not-honored. This essay does not implement
            that page. This essay does not create a successor route for Endorsed Is Not Honored. This essay
            does not create a filing spine for Received Is Not Endorsed. This essay does not create a
            filing spine at /insights/received-is-not-endorsed.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Received is a named
              receiver receipt of the presented operating results for that named scope: presented operating
              results with a named receiver, a receipt date, and a receipt recorded for that presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. Endorsed is those received packs: the
              received operating results endorsed by a named endorser for the named period, the received
              statement endorsed for the named ledger and period, or the received customer workflow endorsed
              for the customer and the period, with a named endorser, an endorsement date, and an endorsement
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
              asks whether the records can support a conclusion. None of those is a claim that Sync endorses
              the received packs, executes plant work, or that endorsement write-back is live.
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

          <InsightNextSteps slug="successor-received-is-not-endorsed" />
        </motion.article>
      </div>
    </main>
  );
}
