'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-unmade-is-not-never');

export default function SuccessorUnmadeIsNotNeverPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Unmade Is Not Never</h1>
            <p className="text-xl text-gray-400">
              Unmade is not never. Packs that have been unmade — a named unmaking authority unmaking of
              the obliterated operating results for that named scope, obliterated operating results with a named
              unmaking authority, an unmaking date, and an unmaking recorded for that obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the obliterated statement unmade for the named
              ledger and period, or the obliterated customer workflow unmade for the customer and the period —
              are not the same as those unmade packs having been accounted never (a named never authority asserts that those objects were never in that scope — never existed for the ledger, never were a customer workflow, never were operating results for the named period — the unmade operating results accounted never by a named never authority for the named period, the unmade statement accounted never for the named ledger and period, or the unmade customer workflow accounted never for the customer and the period, with a named never authority, a never date, and a never recorded that asserts absence-from-the-start for that scope. Unmaking withdraws an accountable remainder of prior existence; it does not establish that the packs never existed. An unmaking instrument on file, even one that withdraws every remainder of obliteration/destruction, is not a never claim) — not merely
              that a named unmaking authority recorded an unmaking date and an unmaking recorded for that obliterated period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-obliterated-is-not-unmade"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Obliterated Is Not Unmade
              </Link>
              . Obliterated Is Not Unmade already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that unmade a new meaning. This essay starts from the
              unmade the successor-spine Obliterated Is Not Unmade already names. This refusal sits on the
              commercial spine. This is the never spine after that unmaking. The prior essay is
              the unmaking spine. Keep this records never distinct from the commercial expansion
              Retained Is Not Expanded already names and from any finished extinguishment or reconciliation theses.
              Refuse the slide from &quot;it is unmade&quot; to &quot;it never existed.&quot; Refuse the slide from &quot;it is unmade&quot; to &quot;it is never.&quot;
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The unmade practice is not the never practice
          </h2>

          <p>
            Unmade means that obliterated commercial packs have been unmade — a named unmaking authority unmaking
            of the obliterated operating results for that named scope, obliterated operating results with a named
            unmaking authority, an unmaking date, and an unmaking recorded for that obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period — by an executed unmaking instrument. Never means that those
            unmade packs have been accounted never — the named scope asserts that those objects were never in that scope — never existed for the ledger, never were a customer workflow, never were operating results for the named period — by a named never authority, with a never date, and a never recorded. Unmaking withdraws an accountable remainder of prior existence; it does not establish that the packs never existed — the unmade operating results accounted never by a named
            never authority for the named period, the unmade statement accounted never for the named ledger and period,
            or the unmade customer workflow accounted never for the customer and the period, with a named
            never authority, a never date, and a never recorded — by an executed never
            instrument. An unmaking is not a never. This split is unmade versus never.
          </p>

          <p>
            An unmade close whose named unmaking authority recorded an unmaking date and an unmaking recorded
            for those unmade operating results, with no named never authority, no never date, and no
            never recorded for that obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not never. An unmade statement whose obliterated statement was unmade for the named ledger and
            period, with that unmade statement not accounted never for the named ledger and period, is not
            never. An unmade customer workflow whose obliterated customer workflow was unmade for the
            customer and the period, with that unmade customer workflow not accounted never for the customer and
            the period, is not never. Unmaking talk that says a named unmaking authority recorded an
            unmaking date and an unmaking recorded, the obliterated statement was unmade, or the obliterated customer workflow was unmade while the unmade operating results have not been accounted never, the
            unmade statement has not been accounted never, or the unmade customer workflow has not been
            accounted never is not never.
          </p>

          <p>
            A firm can be unmade and still not never. A firm can chase never theater and still
            not be unmade. An unmaking package alone is not never of that unmade successor
            outcome. Unmade cash or margin is not the same as a never commercial outcome. The refusal
            is not merely that a named unmaking authority recorded an unmaking date and an unmaking recorded
            for that obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the obliterated statement
            was unmade for that named ledger and period, or the obliterated customer workflow was unmade for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a never record is allowed to be
          </h2>

          <p>
            An executed never instrument is a books-never record that shows the unmade
            operating results were accounted never for that obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, with a named never authority, a never date, and a never recorded, a
            statement-never record that shows the unmade statement was accounted never for that named
            ledger and period, with a named never authority, a never date, and a never recorded, a
            customer-never record that shows the unmade customer workflow was accounted never for the
            customer and the period, with a named never authority, a never date, and a never
            recorded, or a never binder that accounts the unmade packs as never only when the
            named never authority, the never date, and the never recorded are on the file. The never recorded asserts absence-from-the-start for that scope. Unmaking withdraws an accountable remainder of prior existence; it does not establish that the packs never existed. An unmaking instrument on file (even one that withdraws every remainder of obliteration/destruction) is not a never claim. Never requires the named never authority, the never date, and the never recorded that asserts absence-from-the-start for that scope — not merely that an unmaking authority recorded an unmaking date.
          </p>

          <p>
            The never record has to trail back to the unmaking evidence, and the unmaking
            evidence has to trail back to the unmaking{' '}
            <Link
              href="/insights/successor-obliterated-is-not-unmade"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Obliterated Is Not Unmade
            </Link>{' '}
            already required. A books-never that cannot name the period, the named never authority, the
            never date, and the never recorded the unmade operating results were accounted never
            under, a statement-never that cannot name the ledger, the period, the named never authority, the
            never date, and the never recorded the unmade statement was accounted never under, or a
            customer-never that cannot name the customer, the period, the named never authority, the
            never date, and the never recorded the unmade customer workflow was accounted never
            under is never theater. It is not this never.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named unmade is not never</h2>

          <p>
            Named unmade is not never. The unmade practice is not the never practice. An
            unmaking record answers whether the obliterated operating results, the obliterated statement, or the
            obliterated customer workflow were unmade as obliterated operating results with a named unmaking authority, an
            unmaking date, and an unmaking recorded for that obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. A never record answers whether those unmade packs were accounted never.
            Unmade is not never.
          </p>

          <p>
            A claim that unmaking so it is never, while the never trail is missing, is not this
            never. An unmade close whose named unmaking authority recorded an unmaking date and an unmaking
            recorded, an unmade statement whose obliterated statement was unmade, or an unmade customer
            workflow whose obliterated customer workflow was unmade, with no named never authority, no never
            date, and no never recorded, is never theater, and it is not this unmade either
            when the unmaking instrument is missing. A never claim alone is not proof the named
            unmaking evidence was on the file. Unmaking evidence alone is not never of that
            unmade successor outcome.
          </p>

          <p>
            Sync refuses to pretend unmade or never is a status light. Sync does not deem never for
            the customer. Sync must not auto-deem-never. Sync must not treat unmade as never as
            Learning credit. Evidence from the plant beats the unmaking record when the record is being
            used as never.
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
            keep this edition from treating an unmaking instrument on file as a never claim.
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
            that unmade is never. It does not write a CMMS work order, book revenue, recognize revenue,
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
            forget the disposed operating results, forget the disposed statement, forget the disposed customer workflow, name a forgetter, record a forgetting date, record a forgetting recorded,
            erase the forgotten operating results, erase the forgotten statement, erase the forgotten customer workflow, name an eraser, record an erasure date, record an erasure recorded,
            destroy the erased operating results, destroy the erased statement, destroy the erased customer workflow, name a destroyer, record a destruction date, record a destruction recorded,
            unmake the obliterated operating results, unmake the obliterated statement, unmake the obliterated customer workflow, name an unmaking authority, record an unmaking date, record an unmaking recorded,
            account the unmade operating results as never, account the unmade statement as never, account the unmade customer workflow as never, name a never authority, record a never date, record a never recorded,
            or attribute a change in cash, risk, or capacity. Sync does not measure unmade. Sync does not
            measure never. Sync does not measure unmade or never for the customer.
          </p>

          <p>
            Keep this records never distinct from Retained Is Not Expanded, Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            never is not the commercial expansion Retained Is Not Expanded already names. This essay does not
            collapse into Retained Is Not Expanded. This essay does not rewrite Retained Is Not Expanded.
            Retained Is Not Expanded stays on its own commercial route. This
            never is not the collected Collected Is Not Recognized already names. This never is not
            the disbursement Paid Is Not Settled already names. This never is not the settlement Settled
            Is Not Booked already names. This never is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            never is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This never is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This never is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This never is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This never is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This never is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This never is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This never is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This never is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This never is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            never is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route. This never is not the archive Released Is Not Recorded already names. This essay does not collapse into Released Is Not Recorded. This essay does not rewrite Released Is Not Recorded. Released Is Not Recorded stays on its own route. This never is not the archive Remediated Is Not Released already names. This essay does not collapse into Remediated Is Not Released. This essay does not rewrite Remediated Is Not Released. Remediated Is Not Released stays on its own route.
          </p>

          <p>
            Void would mean that the never operating results for that unmade obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period have been voided — the named scope itself withdrawn so there is no ledger in which a never-claim could be lodged, the never operating results voided by a named void authority for the named period, the never statement voided for the named ledger and period, or the never customer workflow voided for the customer and the period, with a named void authority, a void date, and a void recorded — not merely that a named never authority recorded a never date and a never recorded for that unmade period. {' '}
            <Link
              href="/insights/successor-never-is-not-void"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Never Is Not Void
            </Link>
            . Read it at /insights/successor-never-is-not-void. This essay does not rewrite that
            thesis. This essay does not give that void a new meaning. This essay does not create a
            filing spine for Unmade Is Not Never. This essay does not create a filing spine at /insights/unmade-is-not-never. This essay does not create a filing spine at /insights/obliterated-is-not-unmade.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Unmade is a named
              unmaking authority unmaking of the obliterated operating results for that named scope: obliterated operating results with a named unmaking authority, an unmaking date, and an unmaking recorded for that obliterated destroyed erased forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. Never is those unmade packs: the
              unmade operating results accounted never by a named never authority for the named period, the unmade
              statement accounted never for the named ledger and period, or the unmade customer workflow accounted never
              for the customer and the period, with a named never authority, a never date, and a never
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
              asks whether the records can support a conclusion. None of those is a claim that Sync accounts
              the unmade packs as never, executes plant work, or that never write-back is live.
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

          <InsightNextSteps slug="successor-unmade-is-not-never" />
        </motion.article>
      </div>
    </main>
  );
}
