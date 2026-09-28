'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-published-is-not-circulated');

export default function SuccessorPublishedIsNotCirculatedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Published Is Not Circulated</h1>
            <p className="text-xl text-gray-400">
              Published is not circulated. Packs that have been published — a named publisher publication of
              the promulgated operating results for that named scope, promulgated operating results with a named
              publisher, a publication date, and a publication recorded for that promulgated enacted ratified verified confirmed acted instructed
              authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
              relieved applied collected invoiced earned commenced renewed sustained realized performed
              advanced relied attested extinguished period, the promulgated statement published for the named
              ledger and period, or the promulgated customer workflow published for the customer and the period —
              are not the same as those published packs having been circulated (a named circulator circulation
              of the published operating results for that named scope — the published operating results
              circulated by a named circulator for the named period, the published statement circulated for the
              named ledger and period, or the published customer workflow circulated for the customer and the
              period, with a named circulator, a circulation date, and a circulation recorded) — not merely
              that a named publisher recorded a publication date and a publication recorded for that promulgated
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-promulgated-is-not-published"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Promulgated Is Not Published
              </Link>
              . Promulgated Is Not Published already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that published a new meaning. This essay starts from the
              published the successor-spine Promulgated Is Not Published already names. This refusal sits on the
              commercial spine. This is the circulation spine after that publication. The prior essay is
              the publication spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The published practice is not the circulated practice
          </h2>

          <p>
            Published means that promulgated commercial packs have been published — a named publisher publication
            of the promulgated operating results for that named scope, promulgated operating results with a named
            publisher, a publication date, and a publication recorded for that promulgated enacted ratified verified confirmed acted instructed authorized
            approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved
            applied collected invoiced earned commenced renewed sustained realized performed advanced relied
            attested extinguished period — by an executed publication instrument. Circulated means that those
            published packs have been circulated — the published operating results circulated by a named
            circulator for the named period, the published statement circulated for the named ledger and period,
            or the published customer workflow circulated for the customer and the period, with a named
            circulator, a circulation date, and a circulation recorded — by an executed circulation
            instrument. A publication is not a circulation. This split is published versus circulated.
          </p>

          <p>
            A published close whose named publisher recorded a publication date and a publication recorded
            for those published operating results, with no named circulator, no circulation date, and no
            circulation recorded for that promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted
            acknowledged issued sealed certified reconciled relieved applied collected invoiced earned
            commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not circulated. A published statement whose promulgated statement was published for the named ledger and
            period, with that published statement not circulated for the named ledger and period, is not
            circulated. A published customer workflow whose promulgated customer workflow was published for the
            customer and the period, with that published customer workflow not circulated for the customer and
            the period, is not circulated. Circulation talk that says a named publisher recorded a
            publication date and a publication recorded, the promulgated statement was published, or the promulgated
            customer workflow was published while the published operating results have not been circulated, the
            published statement has not been circulated, or the published customer workflow has not been
            circulated is not circulated.
          </p>

          <p>
            A firm can be published and still not circulated. A firm can chase circulation theater and still
            not be published. A publication package alone is not circulated of that published successor
            outcome. Published cash or margin is not the same as a circulated commercial outcome. The refusal
            is not merely that a named publisher recorded a publication date and a publication recorded
            for that promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued
            sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period, the promulgated statement
            was published for that named ledger and period, or the promulgated customer workflow was published for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a circulated record is allowed to be
          </h2>

          <p>
            An executed circulation instrument is a books-circulation record that shows the published
            operating results were circulated for that promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated
            accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
            earned commenced renewed sustained realized performed advanced relied attested extinguished
            period, with a named circulator, a circulation date, and a circulation recorded, a
            statement-circulation record that shows the published statement was circulated for that named
            ledger and period, with a named circulator, a circulation date, and a circulation recorded, a
            customer-circulation record that shows the published customer workflow was circulated for the
            customer and the period, with a named circulator, a circulation date, and a circulation
            recorded, or a circulation binder that releases the published packs as circulated only when the
            named circulator, the circulation date, and the circulation recorded are on the file.
          </p>

          <p>
            The circulation record has to trail back to the publication evidence, and the publication
            evidence has to trail back to the publication{' '}
            <Link
              href="/insights/successor-promulgated-is-not-published"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Promulgated Is Not Published
            </Link>{' '}
            already required. A books-circulation that cannot name the period, the named circulator, the
            circulation date, and the circulation recorded the published operating results were circulated
            under, a statement-circulation that cannot name the ledger, the period, the named circulator, the
            circulation date, and the circulation recorded the published statement was circulated under, or a
            customer-circulation that cannot name the customer, the period, the named circulator, the
            circulation date, and the circulation recorded the published customer workflow was circulated
            under is circulation theater. It is not this circulated.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named published is not circulated</h2>

          <p>
            Named published is not circulated. The published practice is not the circulated practice. A
            publication record answers whether the promulgated operating results, the promulgated statement, or the
            promulgated customer workflow were published as promulgated operating results with a named publisher, a
            publication date, and a publication recorded for that promulgated enacted ratified verified confirmed acted instructed authorized approved
            reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied
            collected invoiced earned commenced renewed sustained realized performed advanced relied attested
            extinguished period. A circulation record answers whether those published packs were circulated.
            Published is not circulated.
          </p>

          <p>
            A claim that publishing so it is circulated, while the circulation trail is missing, is not this
            circulated. A published close whose named publisher recorded a publication date and a publication
            recorded, a published statement whose promulgated statement was published, or a published customer
            workflow whose promulgated customer workflow was published, with no named circulator, no circulation
            date, and no circulation recorded, is circulation theater, and it is not this published either
            when the publication instrument is missing. A circulation claim alone is not proof the named
            publication evidence was on the file. Publication evidence alone is not circulated of that
            published successor outcome.
          </p>

          <p>
            Sync refuses to pretend published or circulated is a status light. Sync does not deem circulated for
            the customer. Sync must not auto-deem-circulated. Sync must not treat published as circulated as
            Learning credit. Evidence from the plant beats the publication record when the record is being
            used as circulated.
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
            keep this edition from treating a publication record as circulated.
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
            that published is circulated. It does not write a CMMS work order, book revenue, recognize revenue,
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
            or attribute a change in cash, risk, or capacity. Sync does not measure published. Sync does not
            measure circulated. Sync does not measure published or circulated for the customer.
          </p>

          <p>
            Keep this commercial circulated distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            circulated is not the collected Collected Is Not Recognized already names. This circulated is not
            the disbursement Paid Is Not Settled already names. This circulated is not the settlement Settled
            Is Not Booked already names. This circulated is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            circulated is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This circulated is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This circulated is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This circulated is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This circulated is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This circulated is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This circulated is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This circulated is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This circulated is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This circulated is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            circulated is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route.
          </p>

          <p>
            Presented would mean that the circulated operating results for that published promulgated enacted ratified verified confirmed acted instructed
            authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
            relieved applied collected invoiced earned commenced renewed sustained realized performed
            advanced relied attested extinguished period have been presented — the circulated operating results
            presented by a named presenter for the named period, the circulated statement presented for the named
            ledger and period, or the circulated customer workflow presented for the customer and the period,
            with a named presenter, a presentation date, and a presentation recorded — not merely that a named
            circulator recorded a circulation date and a circulation recorded for that published period.{' '}
            <Link
              href="/insights/successor-circulated-is-not-presented"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Circulated Is Not Presented
            </Link>
            . Read it at /insights/successor-circulated-is-not-presented. This essay does not rewrite that
            thesis. This essay does not give that presented a new meaning. This essay does not create a
            filing spine for Published Is Not Circulated. This essay does not create a filing spine at
            /insights/published-is-not-circulated.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Published is a named
              publisher publication of the promulgated operating results for that named scope: promulgated operating
              results with a named publisher, a publication date, and a publication recorded for that promulgated enacted ratified verified confirmed acted
              instructed authorized approved reviewed operated accepted acknowledged issued sealed certified
              reconciled relieved applied collected invoiced earned commenced renewed sustained realized
              performed advanced relied attested extinguished period. Circulated is those published packs: the
              published operating results circulated by a named circulator for the named period, the published
              statement circulated for the named ledger and period, or the published customer workflow circulated
              for the customer and the period, with a named circulator, a circulation date, and a circulation
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
              asks whether the records can support a conclusion. None of those is a claim that Sync circulates
              the published packs, executes plant work, or that circulation write-back is live.
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

          <InsightNextSteps slug="successor-published-is-not-circulated" />
        </motion.article>
      </div>
    </main>
  );
}
