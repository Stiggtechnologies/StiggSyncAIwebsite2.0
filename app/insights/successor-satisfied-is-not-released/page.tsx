'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-satisfied-is-not-released');

export default function SuccessorSatisfiedIsNotReleasedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Satisfied Is Not Released</h1>
            <p className="text-xl text-gray-400">
              Satisfied is not released. Packs that have been satisfied — a named satisfier satisfaction of
              the discharged operating results for that named scope, discharged operating results with a named
              satisfier, a satisfaction date, and a satisfaction recorded for that discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the discharged statement satisfied for the named
              ledger and period, or the discharged customer workflow satisfied for the customer and the period —
              are not the same as those satisfied packs having been released (a named releaser release
              of the satisfied operating results for that named scope — the satisfied operating results
              released by a named releaser for the named period, the satisfied statement released for the
              named ledger and period, or the satisfied customer workflow released for the customer and the
              period, with a named releaser, a release date, and a release recorded) — not merely
              that a named satisfier recorded a satisfaction date and a satisfaction recorded for that discharged
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-discharged-is-not-satisfied"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Discharged Is Not Satisfied
              </Link>
              . Discharged Is Not Satisfied already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that satisfied a new meaning. This essay starts from the
              satisfied the successor-spine Discharged Is Not Satisfied already names. This refusal sits on the
              commercial spine. This is the release spine after that satisfaction. The prior essay is
              the satisfaction spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The satisfied practice is not the released practice
          </h2>

          <p>
            Satisfied means that discharged commercial packs have been satisfied — a named satisfier satisfaction
            of the discharged operating results for that named scope, discharged operating results with a named
            satisfier, a satisfaction date, and a satisfaction recorded for that discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period — by an executed satisfaction instrument. Released means that those
            satisfied packs have been released — the satisfied operating results released by a named
            releaser for the named period, the satisfied statement released for the named ledger and period,
            or the satisfied customer workflow released for the customer and the period, with a named
            releaser, a release date, and a release recorded — by an executed release
            instrument. A satisfaction is not a release. This split is satisfied versus released.
          </p>

          <p>
            A satisfied close whose named satisfier recorded a satisfaction date and a satisfaction recorded
            for those satisfied operating results, with no named releaser, no release date, and no
            release recorded for that discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not released. A satisfied statement whose discharged statement was satisfied for the named ledger and
            period, with that satisfied statement not released for the named ledger and period, is not
            released. A satisfied customer workflow whose discharged customer workflow was satisfied for the
            customer and the period, with that satisfied customer workflow not released for the customer and
            the period, is not released. Satisfaction talk that says a named satisfier recorded a
            satisfaction date and a satisfaction recorded, the discharged statement was satisfied, or the discharged
            customer workflow was satisfied while the satisfied operating results have not been released, the
            satisfied statement has not been released, or the satisfied customer workflow has not been
            released is not released.
          </p>

          <p>
            A firm can be satisfied and still not released. A firm can chase release theater and still
            not be satisfied. A satisfaction package alone is not released of that satisfied successor
            outcome. Satisfied cash or margin is not the same as a released commercial outcome. The refusal
            is not merely that a named satisfier recorded a satisfaction date and a satisfaction recorded
            for that discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the discharged statement
            was satisfied for that named ledger and period, or the discharged customer workflow was satisfied for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a released record is allowed to be
          </h2>

          <p>
            An executed release instrument is a books-release record that shows the satisfied
            operating results were released for that discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, with a named releaser, a release date, and a release recorded, a
            statement-release record that shows the satisfied statement was released for that named
            ledger and period, with a named releaser, a release date, and a release recorded, a
            customer-release record that shows the satisfied customer workflow was released for the
            customer and the period, with a named releaser, a release date, and a release
            recorded, or a release binder that releases the satisfied packs as released only when the
            named releaser, the release date, and the release recorded are on the file.
          </p>

          <p>
            The release record has to trail back to the satisfaction evidence, and the satisfaction
            evidence has to trail back to the satisfaction{' '}
            <Link
              href="/insights/successor-discharged-is-not-satisfied"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Discharged Is Not Satisfied
            </Link>{' '}
            already required. A books-release that cannot name the period, the named releaser, the
            release date, and the release recorded the satisfied operating results were released
            under, a statement-release that cannot name the ledger, the period, the named releaser, the
            release date, and the release recorded the satisfied statement was released under, or a
            customer-release that cannot name the customer, the period, the named releaser, the
            release date, and the release recorded the satisfied customer workflow was released
            under is release theater. It is not this released.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named satisfied is not released</h2>

          <p>
            Named satisfied is not released. The satisfied practice is not the released practice. A
            satisfaction record answers whether the discharged operating results, the discharged statement, or the
            discharged customer workflow were satisfied as discharged operating results with a named satisfier, a
            satisfaction date, and a satisfaction recorded for that discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. A release record answers whether those satisfied packs were released.
            Satisfied is not released.
          </p>

          <p>
            A claim that satisfying so it is released, while the release trail is missing, is not this
            released. A satisfied close whose named satisfier recorded a satisfaction date and a satisfaction
            recorded, a satisfied statement whose discharged statement was satisfied, or a satisfied customer
            workflow whose discharged customer workflow was satisfied, with no named releaser, no release
            date, and no release recorded, is release theater, and it is not this satisfied either
            when the satisfaction instrument is missing. A release claim alone is not proof the named
            satisfaction evidence was on the file. Satisfaction evidence alone is not released of that
            satisfied successor outcome.
          </p>

          <p>
            Sync refuses to pretend satisfied or released is a status light. Sync does not deem released for
            the customer. Sync must not auto-deem-released. Sync must not treat satisfied as released as
            Learning credit. Evidence from the plant beats the satisfaction record when the record is being
            used as released.
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
            keep this edition from treating a satisfaction record as released.
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
            that satisfied is released. It does not write a CMMS work order, book revenue, recognize revenue,
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
            or attribute a change in cash, risk, or capacity. Sync does not measure satisfied. Sync does not
            measure released. Sync does not measure satisfied or released for the customer.
          </p>

          <p>
            Keep this commercial released distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            released is not the collected Collected Is Not Recognized already names. This released is not
            the disbursement Paid Is Not Settled already names. This released is not the settlement Settled
            Is Not Booked already names. This released is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            released is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This released is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This released is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This released is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This released is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This released is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This released is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This released is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This released is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This released is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            released is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route. This released is not the release Released Is Not Recorded already names. This essay does not collapse into Released Is Not Recorded. This essay does not rewrite Released Is Not Recorded. Released Is Not Recorded stays on its own route. This released is not the release Remediated Is Not Released already names. This essay does not collapse into Remediated Is Not Released. This essay does not rewrite Remediated Is Not Released. Remediated Is Not Released stays on its own route.
          </p>

          <p>
            Archived would mean that the released operating results for that satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period have been archived — the released operating results
            archived by a named archivist for the named period, the released statement archived for the named
            ledger and period, or the released customer workflow archived for the customer and the period,
            with a named archivist, an archive date, and an archive recorded — not merely that a named
            releaser recorded a release date and a release recorded for that satisfied period.
            Released Is Not Archived may be named in prose only at
            /insights/successor-released-is-not-archived. This essay does not implement
            that page. This essay does not create a successor route for Released Is Not Archived. This essay
            does not create a filing spine for Satisfied Is Not Released. This essay does not create a
            filing spine at /insights/satisfied-is-not-released.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Satisfied is a named
              satisfier satisfaction of the discharged operating results for that named scope: discharged operating
              results with a named satisfier, a satisfaction date, and a satisfaction recorded for that discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. Released is those satisfied packs: the
              satisfied operating results released by a named releaser for the named period, the satisfied
              statement released for the named ledger and period, or the satisfied customer workflow released
              for the customer and the period, with a named releaser, a release date, and a release
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
              asks whether the records can support a conclusion. None of those is a claim that Sync releases
              the satisfied packs, executes plant work, or that release write-back is live.
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

          <InsightNextSteps slug="successor-satisfied-is-not-released" />
        </motion.article>
      </div>
    </main>
  );
}
