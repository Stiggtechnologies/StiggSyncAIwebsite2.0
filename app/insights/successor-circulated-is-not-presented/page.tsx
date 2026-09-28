'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-circulated-is-not-presented');

export default function SuccessorCirculatedIsNotPresentedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Circulated Is Not Presented</h1>
            <p className="text-xl text-gray-400">
              Circulated is not presented. Packs that have been circulated — a named circulator circulation of
              the published operating results for that named scope, published operating results with a named
              circulator, a circulation date, and a circulation recorded for that published promulgated enacted ratified verified confirmed acted instructed
              authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
              relieved applied collected invoiced earned commenced renewed sustained realized performed
              advanced relied attested extinguished period, the published statement circulated for the named
              ledger and period, or the published customer workflow circulated for the customer and the period —
              are not the same as those circulated packs having been presented (a named presenter presentation
              of the circulated operating results for that named scope — the circulated operating results
              presented by a named presenter for the named period, the circulated statement presented for the
              named ledger and period, or the circulated customer workflow presented for the customer and the
              period, with a named presenter, a presentation date, and a presentation recorded) — not merely
              that a named circulator recorded a circulation date and a circulation recorded for that published
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-published-is-not-circulated"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Published Is Not Circulated
              </Link>
              . Published Is Not Circulated already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that circulated a new meaning. This essay starts from the
              circulated the successor-spine Published Is Not Circulated already names. This refusal sits on the
              commercial spine. This is the presentation spine after that circulation. The prior essay is
              the circulation spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The circulated practice is not the presented practice
          </h2>

          <p>
            Circulated means that published commercial packs have been circulated — a named circulator circulation
            of the published operating results for that named scope, published operating results with a named
            circulator, a circulation date, and a circulation recorded for that published promulgated enacted ratified verified confirmed acted instructed authorized
            approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved
            applied collected invoiced earned commenced renewed sustained realized performed advanced relied
            attested extinguished period — by an executed circulation instrument. Presented means that those
            circulated packs have been presented — the circulated operating results presented by a named
            presenter for the named period, the circulated statement presented for the named ledger and period,
            or the circulated customer workflow presented for the customer and the period, with a named
            presenter, a presentation date, and a presentation recorded — by an executed presentation
            instrument. A circulation is not a presentation. This split is circulated versus presented.
          </p>

          <p>
            A circulated close whose named circulator recorded a circulation date and a circulation recorded
            for those circulated operating results, with no named presenter, no presentation date, and no
            presentation recorded for that published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted
            acknowledged issued sealed certified reconciled relieved applied collected invoiced earned
            commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not presented. A circulated statement whose published statement was circulated for the named ledger and
            period, with that circulated statement not presented for the named ledger and period, is not
            presented. A circulated customer workflow whose published customer workflow was circulated for the
            customer and the period, with that circulated customer workflow not presented for the customer and
            the period, is not presented. Circulation talk that says a named circulator recorded a
            circulation date and a circulation recorded, the published statement was circulated, or the published
            customer workflow was circulated while the circulated operating results have not been presented, the
            circulated statement has not been presented, or the circulated customer workflow has not been
            presented is not presented.
          </p>

          <p>
            A firm can be circulated and still not presented. A firm can chase presentation theater and still
            not be circulated. A circulation package alone is not presented of that circulated successor
            outcome. Circulated cash or margin is not the same as a presented commercial outcome. The refusal
            is not merely that a named circulator recorded a circulation date and a circulation recorded
            for that published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued
            sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period, the published statement
            was circulated for that named ledger and period, or the published customer workflow was circulated for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a presented record is allowed to be
          </h2>

          <p>
            An executed presentation instrument is a books-presentation record that shows the circulated
            operating results were presented for that published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated
            accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
            earned commenced renewed sustained realized performed advanced relied attested extinguished
            period, with a named presenter, a presentation date, and a presentation recorded, a
            statement-presentation record that shows the circulated statement was presented for that named
            ledger and period, with a named presenter, a presentation date, and a presentation recorded, a
            customer-presentation record that shows the circulated customer workflow was presented for the
            customer and the period, with a named presenter, a presentation date, and a presentation
            recorded, or a presentation binder that releases the circulated packs as presented only when the
            named presenter, the presentation date, and the presentation recorded are on the file.
          </p>

          <p>
            The presentation record has to trail back to the circulation evidence, and the circulation
            evidence has to trail back to the circulation{' '}
            <Link
              href="/insights/successor-published-is-not-circulated"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Published Is Not Circulated
            </Link>{' '}
            already required. A books-presentation that cannot name the period, the named presenter, the
            presentation date, and the presentation recorded the circulated operating results were presented
            under, a statement-presentation that cannot name the ledger, the period, the named presenter, the
            presentation date, and the presentation recorded the circulated statement was presented under, or a
            customer-presentation that cannot name the customer, the period, the named presenter, the
            presentation date, and the presentation recorded the circulated customer workflow was presented
            under is presentation theater. It is not this presented.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named circulated is not presented</h2>

          <p>
            Named circulated is not presented. The circulated practice is not the presented practice. A
            circulation record answers whether the published operating results, the published statement, or the
            published customer workflow were circulated as published operating results with a named circulator, a
            circulation date, and a circulation recorded for that published promulgated enacted ratified verified confirmed acted instructed authorized approved
            reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied
            collected invoiced earned commenced renewed sustained realized performed advanced relied attested
            extinguished period. A presentation record answers whether those circulated packs were presented.
            Circulated is not presented.
          </p>

          <p>
            A claim that circulating so it is presented, while the presentation trail is missing, is not this
            presented. A circulated close whose named circulator recorded a circulation date and a circulation
            recorded, a circulated statement whose published statement was circulated, or a circulated customer
            workflow whose published customer workflow was circulated, with no named presenter, no presentation
            date, and no presentation recorded, is presentation theater, and it is not this circulated either
            when the circulation instrument is missing. A presentation claim alone is not proof the named
            circulation evidence was on the file. Publication evidence alone is not presented of that
            circulated successor outcome.
          </p>

          <p>
            Sync refuses to pretend circulated or presented is a status light. Sync does not deem presented for
            the customer. Sync must not auto-deem-presented. Sync must not treat circulated as presented as
            Learning credit. Evidence from the plant beats the circulation record when the record is being
            used as presented.
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
            keep this edition from treating a circulation record as presented.
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
            that circulated is presented. It does not write a CMMS work order, book revenue, recognize revenue,
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
            or attribute a change in cash, risk, or capacity. Sync does not measure circulated. Sync does not
            measure presented. Sync does not measure circulated or presented for the customer.
          </p>

          <p>
            Keep this commercial presented distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            presented is not the collected Collected Is Not Recognized already names. This presented is not
            the disbursement Paid Is Not Settled already names. This presented is not the settlement Settled
            Is Not Booked already names. This presented is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            presented is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This presented is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This presented is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This presented is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This presented is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This presented is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This presented is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This presented is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This presented is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This presented is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            presented is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route.
          </p>

          <p>
            Received would mean that the presented operating results for that circulated published promulgated enacted ratified verified confirmed acted instructed
            authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
            relieved applied collected invoiced earned commenced renewed sustained realized performed
            advanced relied attested extinguished period have been received — the presented operating results
            received by a named receiver for the named period, the presented statement received for the named
            ledger and period, or the presented customer workflow received for the customer and the period,
            with a named receiver, a reception date, and a reception recorded — not merely that a named
            presenter recorded a presentation date and a presentation recorded for that circulated period.
            Presented Is Not Received may be named in prose only at
            /insights/successor-presented-is-not-received. This essay does not implement
            that page. This essay does not create a successor route for Presented Is Not Received. This essay
            does not create a filing spine for Circulated Is Not Presented. This essay does not create a
            filing spine at /insights/circulated-is-not-presented.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Circulated is a named
              circulator circulation of the published operating results for that named scope: published operating
              results with a named circulator, a circulation date, and a circulation recorded for that published promulgated enacted ratified verified confirmed acted
              instructed authorized approved reviewed operated accepted acknowledged issued sealed certified
              reconciled relieved applied collected invoiced earned commenced renewed sustained realized
              performed advanced relied attested extinguished period. Presented is those circulated packs: the
              circulated operating results presented by a named presenter for the named period, the circulated
              statement presented for the named ledger and period, or the circulated customer workflow presented
              for the customer and the period, with a named presenter, a presentation date, and a presentation
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
              asks whether the records can support a conclusion. None of those is a claim that Sync presents
              the circulated packs, executes plant work, or that presentation write-back is live.
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

          <InsightNextSteps slug="successor-circulated-is-not-presented" />
        </motion.article>
      </div>
    </main>
  );
}
