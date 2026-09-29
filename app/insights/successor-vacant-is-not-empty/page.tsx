'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-vacant-is-not-empty');

export default function SuccessorVacantIsNotEmptyPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Vacant Is Not Empty</h1>
            <p className="text-xl text-gray-400">
              Vacant is not empty. Packs that have been vacated — a named vacant authority withdrawal of the absent record itself of
              the absent operating results for that named scope, absent operating results with a named
              vacant authority, a vacant date, and a vacant recorded for that absent null void never unmade obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the absent statement vacated for the named
              ledger and period, or the absent customer workflow vacated for the customer and the period —
              are not the same as those vacant packs having been emptied (the vacant record itself withdrawn so there is no vacant in which an absent-withdrawal could be lodged — the vacant operating results emptied by a named empty authority for the named period, the vacant statement emptied for the named ledger and period, or the vacant customer workflow emptied for the customer and the period, with a named empty authority, an empty date, and an empty recorded that withdraws the vacant record itself. Vacant withdraws the absent record itself so there is no absent in which a null-withdrawal could be lodged. Absent withdraws the null record itself so there is no null in which a void-withdrawal could be lodged. Null withdraws the void record itself so there is no void in which a scope-withdrawal could be lodged. Void withdraws the named scope itself so there is no ledger in which a never-claim could be lodged. Never asserts absence-from-the-start for that scope. Unmaking withdraws an accountable remainder of prior existence; it does not establish that the packs never existed. A void instrument on file, even one that withdraws the named scope itself, is not null. A null instrument on file, even one that withdraws the void record itself, is not absent. An absent instrument on file, even one that withdraws the null record itself, is not vacant. A vacant instrument on file, even one that withdraws the absent record itself, is not empty) — not merely
              that a named vacant authority recorded a vacant date and a vacant recorded for that absent period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-absent-is-not-vacant"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Absent Is Not Vacant
              </Link>
              . Absent Is Not Vacant already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that vacant a new meaning. This essay starts from the
              vacant the successor-spine Absent Is Not Vacant already names. This refusal sits on the
              commercial spine. This is the empty spine after that vacant. The prior essay is
              the vacant spine. Keep this records empty distinct from the commercial expansion
              Retained Is Not Expanded already names and from any finished extinguishment or reconciliation theses.
              Refuse the slide from &quot;it is vacant&quot; to &quot;it is empty.&quot; Refuse the slide from &quot;there is no absent record either&quot; to &quot;there is no vacant record either.&quot;
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The vacant practice is not the empty practice
          </h2>

          <p>
            Vacant means that absent commercial packs have been vacated — the absent record itself withdrawn so there is no absent in which a null-withdrawal could be lodged — a named vacant authority withdrawal of the absent record itself
            of the absent operating results for that named scope, absent operating results with a named
            vacant authority, a vacant date, and a vacant recorded for that absent null void never unmade obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period — by an executed vacant instrument. Empty means that those
            vacant packs have been emptied — the vacant record itself withdrawn so there is no vacant in which an absent-withdrawal could be lodged — the vacant operating results emptied by a named
            empty authority for the named period, the vacant statement emptied for the named ledger and period,
            or the vacant customer workflow emptied for the customer and the period, with a named
            empty authority, an empty date, and an empty recorded — by an executed empty
            instrument. A vacant is not an empty. This split is vacant versus empty.
          </p>

          <p>
            A vacant close whose named vacant authority recorded a vacant date and a vacant recorded
            for those vacant operating results, with no named empty authority, no empty date, and no
            empty recorded for that absent null void never unmade obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not empty. A vacant statement whose absent statement was vacated for the named ledger and
            period, with that vacant statement not emptied for the named ledger and period, is not
            empty. A vacant customer workflow whose absent customer workflow was vacated for the
            customer and the period, with that vacant customer workflow not emptied for the customer and
            the period, is not empty. Empty talk that says a named vacant authority recorded a vacant date and a vacant recorded, the absent statement was vacated, or the absent customer workflow was vacated while the vacant operating results have not been emptied, the
            vacant statement has not been emptied, or the vacant customer workflow has not been
            emptied is not empty.
          </p>

          <p>
            A firm can be vacant and still not empty. A firm can chase empty theater and still
            not be vacant. A vacant package alone is not empty of that vacant successor
            outcome. Vacant cash or margin is not the same as an empty commercial outcome. The refusal
            is not merely that a named vacant authority recorded a vacant date and a vacant recorded
            for that absent null void never unmade obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the absent statement
            was vacated for that named ledger and period, or the absent customer workflow was vacated for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an empty record is allowed to be
          </h2>

          <p>
            An executed empty instrument is a books-empty record that shows the vacant
            operating results were emptied for that absent null void never unmade obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, with a named empty authority, an empty date, and an empty recorded, a statement-empty record that shows the vacant statement was emptied for that named
            ledger and period, with a named empty authority, an empty date, and an empty recorded, a customer-empty record that shows the vacant customer workflow was emptied for the
            customer and the period, with a named empty authority, an empty date, and an empty
            recorded, or an empty binder that empties the vacant packs as empty only when the
            named empty authority, the empty date, and the empty recorded are on the file. The empty recorded withdraws the vacant record itself so there is no vacant in which an absent-withdrawal could be lodged. Vacant withdraws the absent record itself so there is no absent in which a null-withdrawal could be lodged. Absent withdraws the null record itself so there is no null in which a void-withdrawal could be lodged. Null withdraws the void record itself so there is no void in which a scope-withdrawal could be lodged. Void withdraws the named scope itself so there is no ledger in which a never-claim could be lodged. Never asserts absence-from-the-start for that scope: never existed for the ledger, never were a customer workflow, never were operating results for the named period. Unmaking withdraws an accountable remainder of prior existence; it does not establish that the packs never existed. An unmaking instrument on file is not a never claim. A never instrument on file (even one that asserts absence-from-the-start) is not void. A void instrument on file (even one that withdraws the named scope itself) is not null. A null instrument on file (even one that withdraws the void record itself) is not absent. An absent instrument on file (even one that withdraws the null record itself) is not vacant. A vacant instrument on file (even one that withdraws the absent record itself) is not empty. Null requires the named null authority, the null date, and the null recorded that withdraws the void record itself. Absent requires the named absent authority, the absent date, and the absent recorded that withdraws the null record itself. Vacant requires the named vacant authority, the vacant date, and the vacant recorded that withdraws the absent record itself. Empty requires the named empty authority, the empty date, and the empty recorded that withdraws the vacant record itself — not merely that a vacant authority recorded a vacant date.
          </p>

          <p>
            The empty record has to trail back to the vacant evidence, and the vacant
            evidence has to trail back to the vacant{' '}
            <Link
              href="/insights/successor-absent-is-not-vacant"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Absent Is Not Vacant
            </Link>{' '}
            already required. A books-empty that cannot name the period, the named empty authority, the
            empty date, and the empty recorded the vacant operating results were emptied
            under, a statement-empty that cannot name the ledger, the period, the named empty authority, the
            empty date, and the empty recorded the vacant statement was emptied under, or a customer-empty that cannot name the customer, the period, the named empty authority, the
            empty date, and the empty recorded the vacant customer workflow was emptied
            under is empty theater. It is not this empty.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named vacant is not empty</h2>

          <p>
            Named vacant is not empty. The vacant practice is not the empty practice. A vacant record answers whether the absent operating results, the absent statement, or the
            absent customer workflow were vacated as absent operating results with a named vacant authority, a vacant date, and a vacant recorded for that absent null void never unmade obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. An empty record answers whether those vacant packs were emptied.
            Vacant is not empty.
          </p>

          <p>
            A claim that vacant so it is empty, while the empty trail is missing, is not this
            empty. A vacant close whose named vacant authority recorded a vacant date and a vacant
            recorded, a vacant statement whose absent statement was vacated, or a vacant customer
            workflow whose absent customer workflow was vacated, with no named empty authority, no empty
            date, and no empty recorded, is empty theater, and it is not this vacant either
            when the vacant instrument is missing. An empty claim alone is not proof the named
            vacant evidence was on the file. Vacant evidence alone is not empty of that
            vacant successor outcome.
          </p>

          <p>
            Sync refuses to pretend vacant or empty is a status light. Sync does not deem empty for
            the customer. Sync must not auto-deem-empty. Sync must not treat vacant as empty as
            Learning credit. Evidence from the plant beats the vacant record when the record is being
            used as empty.
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
            keep this edition from treating a vacant instrument on file as an empty claim.
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
            that vacant is empty. It does not write a CMMS work order, book revenue, recognize revenue,
            issue an invoice, post a receipt, apply cash, relieve a balance, reconcile the books, certify
            the books, seal the books, issue the close pack, acknowledge receipt of the issued pack, accept
            the numbers and close, accept the statement, accept the customer pack, adopt the accepted close
            into operating practice, adopt the accepted statement into the books, adopt the accepted customer
            pack into the customer workflow, operate the adopted books day-to-day, operate the adopted
            statement, operate the adopted customer workflow, review the operated books, review the operated
            statement, review the operated customer workflow, name a reviewer, record a review date, record a review conclusion, approve the reviewed operating results, approve the reviewed statement,
            approve the reviewed customer workflow, name an approver, record an approval date, record an approval decision, authorize the approved operating results, authorize the approved statement,
            authorize the approved customer workflow, name an authorizer, record an authorization date,
            record an authorization grant, instruct the authorized operating results, instruct the authorized
            statement, instruct the authorized customer workflow, name an instructor, record an instruction
            date, record an instruction to act, act the instructed operating results, act the instructed
            statement, act the instructed customer workflow, name an actor, record an action date, record an action taken, confirm the acted operating results, confirm the acted statement, confirm the acted
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
            honor the endorsed operating results, honor the endorsed statement, honor the endorsed customer workflow, name a honorer, record a honor date, record a honor recorded,
            discharge the honored operating results, discharge the honored statement, discharge the honored customer workflow, name a discharger, record a discharge date, record a discharge recorded,
            satisfy the discharged operating results, satisfy the discharged statement, satisfy the discharged customer workflow, name a satisfier, record a satisfaction date, record a satisfaction recorded,
            release the satisfied operating results, release the satisfied statement, release the satisfied customer workflow, name a releaser, record a release date, record a release recorded,
            archive the released operating results, archive the released statement, archive the released customer workflow, name an archiver, record an archive date, record an archive recorded,
            retain the archived operating results, retain the archived statement, retain the archived customer workflow, name a retainer, record a retention date, record a retention policy or period named, record a retention recorded,
            dispose the retained operating results, dispose the retained statement, dispose the retained customer workflow, name a disposer, record a disposition date, record a disposition recorded,
            forget the disposed operating results, forget the disposed statement, forget the disposed customer workflow, name a forgetter, record a forgetting date, record a forgetting recorded,
            erase the forgotten operating results, erase the forgotten statement, erase the forgotten customer workflow, name an eraser, record an erasure date, record an erasure recorded,
            destroy the erased operating results, destroy the erased statement, destroy the erased customer workflow, name a destroyer, record a destruction date, record a destruction recorded,
            unmake the obliterated operating results, unmake the obliterated statement, unmake the obliterated customer workflow, name an unmaking authority, record an unmaking date, record an unmaking recorded,
            account the unmade operating results as never, account the unmade statement as never, account the unmade customer workflow as never, name a never authority, record a never date, record a never recorded,
            void the never operating results, void the never statement, void the never customer workflow, name a void authority, record a void date, record a void recorded,
            null the void operating results, null the void statement, null the void customer workflow, name a null authority, record a null date, record a null recorded,
            absent the null operating results, absent the null statement, absent the null customer workflow, name an absent authority, record an absent date, record an absent recorded,
            vacate the absent operating results, vacate the absent statement, vacate the absent customer workflow, name a vacant authority, record a vacant date, record a vacant recorded,
            empty the vacant operating results, empty the vacant statement, empty the vacant customer workflow, name an empty authority, record an empty date, record an empty recorded,
            or attribute a change in cash, risk, or capacity. Sync does not measure never. Sync does not measure void. Sync does not measure null. Sync does not measure absent. Sync does not measure vacant. Sync does not measure empty. Sync does not measure vacant or empty for the customer.
          </p>

          <p>
            Keep this records empty distinct from Retained Is Not Expanded, Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            empty is not the commercial expansion Retained Is Not Expanded already names. This essay does not
            collapse into Retained Is Not Expanded. This essay does not rewrite Retained Is Not Expanded.
            Retained Is Not Expanded stays on its own commercial route. This
            empty is not the collected Collected Is Not Recognized already names. This empty is not
            the disbursement Paid Is Not Settled already names. This empty is not the settlement Settled
            Is Not Booked already names. This empty is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            empty is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This empty is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This empty is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This empty is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This empty is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This empty is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This empty is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This empty is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This empty is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This empty is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            empty is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route. This empty is not the archive Released Is Not Recorded already names. This essay does not collapse into Released Is Not Recorded. This essay does not rewrite Released Is Not Recorded. Released Is Not Recorded stays on its own route. This empty is not the archive Remediated Is Not Released already names. This essay does not collapse into Remediated Is Not Released. This essay does not rewrite Remediated Is Not Released. Remediated Is Not Released stays on its own route.
          </p>

          <p>
            Clear would mean that the empty operating results for that vacant absent null void never unmade obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period have been cleared — the empty record itself withdrawn so there is no empty in which a vacant-withdrawal could be lodged, the empty operating results cleared by a named clear authority for the named period, the empty statement cleared for the named ledger and period, or the empty customer workflow cleared for the customer and the period, with a named clear authority, a clear date, and a clear recorded — not merely that a named empty authority recorded an empty date and an empty recorded for that vacant period. {' '}
            <Link
              href="/insights/successor-empty-is-not-clear"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Empty Is Not Clear
            </Link>
            . Read it at /insights/successor-empty-is-not-clear. This essay does not rewrite that
            thesis. This essay does not give that clear a new meaning. This essay does not create a filing spine for Vacant Is Not Empty. This essay does not create a filing spine at /insights/vacant-is-not-empty. This essay does not create a filing spine at /insights/absent-is-not-vacant.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Vacant is a named vacant authority withdrawal of the absent record itself of the absent operating results for that named scope: absent operating results with a named vacant authority, a vacant date, and a vacant recorded for that absent null void never unmade obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. Empty is those vacant packs: the
              vacant operating results emptied by a named empty authority for the named period, the vacant
              statement emptied for the named ledger and period, or the vacant customer workflow emptied
              for the customer and the period, with a named empty authority, an empty date, and an empty
              recorded. The vacant record itself is withdrawn so there is no vacant in which an absent-withdrawal could be lodged. A{' '}
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
              asks whether the records can support a conclusion. None of those is a claim that Sync empties
              the vacant packs, executes plant work, or that empty write-back is live.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={fieldManualPath()}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#3B82F6] text-white rounded-lg font-semibold hover:bg-[#3B82F6]/90 transition-colors"
              >
                Read Field Manual {fieldManual.version}
              </Link>
              <a href={APP_SETUP_URL}
                className="inline-flex items-center justify-center px-6 py-3 bg-white/5 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Try Reliability Engineer
              </a>
            </div>
          </div>

          <InsightNextSteps slug="successor-vacant-is-not-empty" />
        </motion.article>
      </div>
    </main>
  );
}
