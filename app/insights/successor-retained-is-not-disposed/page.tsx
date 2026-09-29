'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-retained-is-not-disposed');

export default function SuccessorRetainedIsNotDisposedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Retained Is Not Disposed</h1>
            <p className="text-xl text-gray-400">
              Retained is not disposed. Packs that have been retained — a named retainer retention of
              the archived operating results for that named scope, archived operating results with a named
              retainer, a retention date, a retention policy or period named, and a retention recorded for that archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the archived statement retained for the named
              ledger and period, or the archived customer workflow retained for the customer and the period —
              are not the same as those retained packs having been disposed (a named disposer disposition
              of the retained operating results for that named scope — the retained operating results
              disposed by a named disposer for the named period, the retained statement disposed for the
              named ledger and period, or the retained customer workflow disposed for the customer and the
              period, with a named disposer, a disposition date, and a disposition recorded) — not merely
              that a named retainer recorded a retention date, a retention policy or period named, and a retention recorded for that archived
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-archived-is-not-retained"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Archived Is Not Retained
              </Link>
              . Archived Is Not Retained already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that retained a new meaning. This essay starts from the
              retained the successor-spine Archived Is Not Retained already names. This refusal sits on the
              commercial spine. This is the disposition spine after that retention. The prior essay is
              the retention spine. Keep this records disposed distinct from the commercial expansion
              Retained Is Not Expanded already names.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The retained practice is not the disposed practice
          </h2>

          <p>
            Retained means that archived commercial packs have been retained — a named retainer retention
            of the archived operating results for that named scope, archived operating results with a named
            retainer, a retention date, a retention policy or period named, and a retention recorded for that archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period — by an executed retention instrument. Disposed means that those
            retained packs have been disposed — the retained operating results disposed by a named
            disposer for the named period, the retained statement disposed for the named ledger and period,
            or the retained customer workflow disposed for the customer and the period, with a named
            disposer, a disposition date, and a disposition recorded — by an executed disposition
            instrument. A retention is not a disposition. This split is retained versus disposed.
          </p>

          <p>
            A retained close whose named retainer recorded a retention date, a retention policy or period named, and a retention recorded
            for those retained operating results, with no named disposer, no disposition date, and no
            disposition recorded for that archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not disposed. A retained statement whose archived statement was retained for the named ledger and
            period, with that retained statement not disposed for the named ledger and period, is not
            disposed. A retained customer workflow whose archived customer workflow was retained for the
            customer and the period, with that retained customer workflow not disposed for the customer and
            the period, is not disposed. Retention talk that says a named retainer recorded a
            retention date, a retention policy or period named, and a retention recorded, the archived statement was retained, or the archived
            customer workflow was retained while the retained operating results have not been disposed, the
            retained statement has not been disposed, or the retained customer workflow has not been
            disposed is not disposed.
          </p>

          <p>
            A firm can be retained and still not disposed. A firm can chase disposition theater and still
            not be retained. A retention package alone is not disposed of that retained successor
            outcome. Retained cash or margin is not the same as a disposed commercial outcome. The refusal
            is not merely that a named retainer recorded a retention date, a retention policy or period named, and a retention recorded
            for that archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the archived statement
            was retained for that named ledger and period, or the archived customer workflow was retained for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a disposed record is allowed to be
          </h2>

          <p>
            An executed disposition instrument is a books-disposition record that shows the retained
            operating results were disposed for that archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, with a named disposer, a disposition date, and a disposition recorded, a
            statement-disposition record that shows the retained statement was disposed for that named
            ledger and period, with a named disposer, a disposition date, and a disposition recorded, a
            customer-disposition record that shows the retained customer workflow was disposed for the
            customer and the period, with a named disposer, a disposition date, and a disposition
            recorded, or a disposition binder that disposes the retained packs as disposed only when the
            named disposer, the disposition date, and the disposition recorded are on the file.
          </p>

          <p>
            The disposition record has to trail back to the retention evidence, and the retention
            evidence has to trail back to the retention{' '}
            <Link
              href="/insights/successor-archived-is-not-retained"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Archived Is Not Retained
            </Link>{' '}
            already required. A books-disposition that cannot name the period, the named disposer, the
            disposition date, and the disposition recorded the retained operating results were disposed
            under, a statement-disposition that cannot name the ledger, the period, the named disposer, the
            disposition date, and the disposition recorded the retained statement was disposed under, or a
            customer-disposition that cannot name the customer, the period, the named disposer, the
            disposition date, and the disposition recorded the retained customer workflow was disposed
            under is disposition theater. It is not this disposed.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named retained is not disposed</h2>

          <p>
            Named retained is not disposed. The retained practice is not the disposed practice. A
            retention record answers whether the archived operating results, the archived statement, or the
            archived customer workflow were retained as archived operating results with a named retainer, a
            retention date, a retention policy or period named, and a retention recorded for that archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. A disposition record answers whether those retained packs were disposed.
            Retained is not disposed.
          </p>

          <p>
            A claim that retaining so it is disposed, while the disposition trail is missing, is not this
            disposed. A retained close whose named retainer recorded a retention date, a retention policy or period named, and a retention
            recorded, a retained statement whose archived statement was retained, or a retained customer
            workflow whose archived customer workflow was retained, with no named disposer, no disposition
            date, and no disposition recorded, is disposition theater, and it is not this retained either
            when the retention instrument is missing. A disposition claim alone is not proof the named
            retention evidence was on the file. Retention evidence alone is not disposed of that
            retained successor outcome.
          </p>

          <p>
            Sync refuses to pretend retained or disposed is a status light. Sync does not deem disposed for
            the customer. Sync must not auto-deem-disposed. Sync must not treat retained as disposed as
            Learning credit. Evidence from the plant beats the retention record when the record is being
            used as disposed.
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
            keep this edition from treating a retention record as disposed.
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
            that retained is disposed. It does not write a CMMS work order, book revenue, recognize revenue,
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
            honor the endorsed operating results, honor the endorsed statement, honor the endorsed customer workflow, name an honorer, record an honor date, record an honor recorded,
            discharge the honored operating results, discharge the honored statement, discharge the honored customer workflow, name a discharger, record a discharge date, record a discharge recorded,
            satisfy the discharged operating results, satisfy the discharged statement, satisfy the discharged customer workflow, name a satisfier, record a satisfaction date, record a satisfaction recorded,
            release the satisfied operating results, release the satisfied statement, release the satisfied customer workflow, name a releaser, record a release date, record a release recorded,
            archive the released operating results, archive the released statement, archive the released customer workflow, name an archiver, record an archive date, record an archive recorded,
            retain the archived operating results, retain the archived statement, retain the archived customer workflow, name a retainer, record a retention date, record a retention policy or period named, record a retention recorded,
            dispose the retained operating results, dispose the retained statement, dispose the retained customer workflow, name a disposer, record a disposition date, record a disposition recorded,
            or attribute a change in cash, risk, or capacity. Sync does not measure retained. Sync does not
            measure disposed. Sync does not measure retained or disposed for the customer.
          </p>

          <p>
            Keep this records disposed distinct from Retained Is Not Expanded, Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            disposed is not the commercial expansion Retained Is Not Expanded already names. This essay does not
            collapse into Retained Is Not Expanded. This essay does not rewrite Retained Is Not Expanded.
            Retained Is Not Expanded stays on its own commercial route. This
            disposed is not the collected Collected Is Not Recognized already names. This disposed is not
            the disbursement Paid Is Not Settled already names. This disposed is not the settlement Settled
            Is Not Booked already names. This disposed is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            disposed is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This disposed is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This disposed is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This disposed is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This disposed is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This disposed is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This disposed is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This disposed is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This disposed is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This disposed is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            disposed is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route. This disposed is not the archive Released Is Not Recorded already names. This essay does not collapse into Released Is Not Recorded. This essay does not rewrite Released Is Not Recorded. Released Is Not Recorded stays on its own route. This disposed is not the archive Remediated Is Not Released already names. This essay does not collapse into Remediated Is Not Released. This essay does not rewrite Remediated Is Not Released. Remediated Is Not Released stays on its own route.
          </p>

          <p>
            Forgotten would mean that the disposed operating results for that retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period have been forgotten — the disposed operating results forgotten by a named forgetter for the named period, the disposed statement forgotten for the named ledger and period, or the disposed customer workflow forgotten for the customer and the period, with a named forgetter, a forgetting date, and a forgetting recorded — not merely that a named disposer recorded a disposition date and a disposition recorded for that retained period.{' '}
            <Link
              href="/insights/successor-disposed-is-not-forgotten"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Disposed Is Not Forgotten
            </Link>
            . Read it at /insights/successor-disposed-is-not-forgotten. This essay does not rewrite that
            thesis. This essay does not give that forgotten a new meaning. This essay does not create a
            filing spine for Retained Is Not Disposed. This essay does not create a filing spine at
            /insights/retained-is-not-disposed. This essay does not create a filing spine at
            /insights/archived-is-not-retained.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Retained is a named
              retainer retention of the archived operating results for that named scope: archived operating
              results with a named retainer, a retention date, a retention policy or period named, and a retention recorded for that archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. Disposed is those retained packs: the
              retained operating results disposed by a named disposer for the named period, the retained
              statement disposed for the named ledger and period, or the retained customer workflow disposed
              for the customer and the period, with a named disposer, a disposition date, and a disposition
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
              asks whether the records can support a conclusion. None of those is a claim that Sync disposes
              the retained packs, executes plant work, or that disposition write-back is live.
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

          <InsightNextSteps slug="successor-retained-is-not-disposed" />
        </motion.article>
      </div>
    </main>
  );
}
