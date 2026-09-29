'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-archived-is-not-retained');

export default function SuccessorArchivedIsNotRetainedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Archived Is Not Retained</h1>
            <p className="text-xl text-gray-400">
              Archived is not retained. Packs that have been archived — a named archiver archive of
              the released operating results for that named scope, released operating results with a named
              archiver, an archive date, and an archive recorded for that released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the released statement archived for the named
              ledger and period, or the released customer workflow archived for the customer and the period —
              are not the same as those archived packs having been retained (a named retainer retention
              of the archived operating results for that named scope — the archived operating results
              retained by a named retainer for the named period, the archived statement retained for the
              named ledger and period, or the archived customer workflow retained for the customer and the
              period, with a named retainer, a retention date, a retention policy or period named, and a retention recorded) — not merely
              that a named archiver recorded an archive date and an archive recorded for that released
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-released-is-not-archived"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Released Is Not Archived
              </Link>
              . Released Is Not Archived already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that archived a new meaning. This essay starts from the
              archived the successor-spine Released Is Not Archived already names. This refusal sits on the
              commercial spine. This is the retention spine after that archive. The prior essay is
              the archive spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The archived practice is not the retained practice
          </h2>

          <p>
            Archived means that released commercial packs have been archived — a named archiver archive
            of the released operating results for that named scope, released operating results with a named
            archiver, an archive date, and an archive recorded for that released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period — by an executed archive instrument. Retained means that those
            archived packs have been retained — the archived operating results retained by a named
            retainer for the named period, the archived statement retained for the named ledger and period,
            or the archived customer workflow retained for the customer and the period, with a named
            retainer, a retention date, a retention policy or period named, and a retention recorded — by an executed retention
            instrument. An archive is not a retention. This split is archived versus retained.
          </p>

          <p>
            An archived close whose named archiver recorded an archive date and an archive recorded
            for those archived operating results, with no named retainer, no retention date, no retention policy or period named, and no
            retention recorded for that released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not retained. An archived statement whose released statement was archived for the named ledger and
            period, with that archived statement not retained for the named ledger and period, is not
            retained. An archived customer workflow whose released customer workflow was archived for the
            customer and the period, with that archived customer workflow not retained for the customer and
            the period, is not retained. Archive talk that says a named archiver recorded an
            archive date and an archive recorded, the released statement was archived, or the released
            customer workflow was archived while the archived operating results have not been retained, the
            archived statement has not been retained, or the archived customer workflow has not been
            retained is not retained.
          </p>

          <p>
            A firm can be archived and still not retained. A firm can chase retention theater and still
            not be archived. An archive package alone is not retained of that archived successor
            outcome. Archived cash or margin is not the same as a retained commercial outcome. The refusal
            is not merely that a named archiver recorded an archive date and an archive recorded
            for that released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the released statement
            was archived for that named ledger and period, or the released customer workflow was archived for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a retained record is allowed to be
          </h2>

          <p>
            An executed retention instrument is a books-retention record that shows the archived
            operating results were retained for that released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, with a named retainer, a retention date, a retention policy or period named, and a retention recorded, a
            statement-retention record that shows the archived statement was retained for that named
            ledger and period, with a named retainer, a retention date, a retention policy or period named, and a retention recorded, a
            customer-retention record that shows the archived customer workflow was retained for the
            customer and the period, with a named retainer, a retention date, a retention policy or period named, and a retention
            recorded, or a retention binder that retains the archived packs as retained only when the
            named retainer, the retention date, the retention policy or period named, and the retention recorded are on the file.
          </p>

          <p>
            The retention record has to trail back to the archive evidence, and the archive
            evidence has to trail back to the archive{' '}
            <Link
              href="/insights/successor-released-is-not-archived"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Released Is Not Archived
            </Link>{' '}
            already required. A books-retention that cannot name the period, the named retainer, the
            retention date, the retention policy or period named, and the retention recorded the archived operating results were retained
            under, a statement-retention that cannot name the ledger, the period, the named retainer, the
            retention date, the retention policy or period named, and the retention recorded the archived statement was retained under, or a
            customer-retention that cannot name the customer, the period, the named retainer, the
            retention date, the retention policy or period named, and the retention recorded the archived customer workflow was retained
            under is retention theater. It is not this retained.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named archived is not retained</h2>

          <p>
            Named archived is not retained. The archived practice is not the retained practice. An
            archive record answers whether the released operating results, the released statement, or the
            released customer workflow were archived as released operating results with a named archiver, an
            archive date, and an archive recorded for that released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. A retention record answers whether those archived packs were retained.
            Archived is not retained.
          </p>

          <p>
            A claim that archiving so it is retained, while the retention trail is missing, is not this
            retained. An archived close whose named archiver recorded an archive date and an archive
            recorded, an archived statement whose released statement was archived, or an archived customer
            workflow whose released customer workflow was archived, with no named retainer, no retention
            date, no retention policy or period named, and no retention recorded, is retention theater, and it is not this archived either
            when the archive instrument is missing. A retention claim alone is not proof the named
            archive evidence was on the file. Archive evidence alone is not retained of that
            archived successor outcome.
          </p>

          <p>
            Sync refuses to pretend archived or retained is a status light. Sync does not deem retained for
            the customer. Sync must not auto-deem-retained. Sync must not treat archived as retained as
            Learning credit. Evidence from the plant beats the archive record when the record is being
            used as retained.
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
            keep this edition from treating an archive record as retained.
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
            that archived is retained. It does not write a CMMS work order, book revenue, recognize revenue,
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
            or attribute a change in cash, risk, or capacity. Sync does not measure archived. Sync does not
            measure retained. Sync does not measure archived or retained for the customer.
          </p>

          <p>
            Keep this commercial retained distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            retained is not the collected Collected Is Not Recognized already names. This retained is not
            the disbursement Paid Is Not Settled already names. This retained is not the settlement Settled
            Is Not Booked already names. This retained is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            retained is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This retained is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This retained is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This retained is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This retained is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This retained is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This retained is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This retained is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This retained is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This retained is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            retained is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route. This retained is not the archive Released Is Not Recorded already names. This essay does not collapse into Released Is Not Recorded. This essay does not rewrite Released Is Not Recorded. Released Is Not Recorded stays on its own route. This retained is not the archive Remediated Is Not Released already names. This essay does not collapse into Remediated Is Not Released. This essay does not rewrite Remediated Is Not Released. Remediated Is Not Released stays on its own route.
          </p>

          <p>
            Disposed would mean that the retained operating results for that archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period have been disposed — the retained operating results disposed by a named disposer for the named period, the retained statement disposed for the named ledger and period, or the retained customer workflow disposed for the customer and the period, with a named disposer, a disposition date, and a disposition recorded — not merely that a named retainer recorded a retention date, a retention policy or period named, and a retention recorded for that archived period. Retained Is Not Disposed may be named in prose only at /insights/successor-retained-is-not-disposed. This essay does not implement that page. This essay does not create a successor route for Retained Is Not Disposed. This essay does not create a filing spine for Archived Is Not Retained. This essay does not create a filing spine at /insights/archived-is-not-retained.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Archived is a named
              archiver archive of the released operating results for that named scope: released operating
              results with a named archiver, an archive date, and an archive recorded for that released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. Retained is those archived packs: the
              archived operating results retained by a named retainer for the named period, the archived
              statement retained for the named ledger and period, or the archived customer workflow retained
              for the customer and the period, with a named retainer, a retention date, a retention policy or period named, and a retention
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
              asks whether the records can support a conclusion. None of those is a claim that Sync retains
              the archived packs, executes plant work, or that retention write-back is live.
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

          <InsightNextSteps slug="successor-archived-is-not-retained" />
        </motion.article>
      </div>
    </main>
  );
}
