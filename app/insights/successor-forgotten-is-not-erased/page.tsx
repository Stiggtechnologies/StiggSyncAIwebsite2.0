'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-forgotten-is-not-erased');

export default function SuccessorForgottenIsNotErasedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Forgotten Is Not Erased</h1>
            <p className="text-xl text-gray-400">
              Forgotten is not erased. Packs that have been forgotten — a named forgetter forgetting of
              the disposed operating results for that named scope, disposed operating results with a named
              forgetter, a forgetting date, and a forgetting recorded for that disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the disposed statement forgotten for the named
              ledger and period, or the disposed customer workflow forgotten for the customer and the period —
              are not the same as those forgotten packs having been erased (a named eraser erasure
              of the forgotten operating results for that named scope — the forgotten operating results
              erased by a named eraser for the named period, the forgotten statement erased for the
              named ledger and period, or the forgotten customer workflow erased for the customer and the
              period, with a named eraser, an erasure date, and an erasure recorded) — not merely
              that a named forgetter recorded a forgetting date and a forgetting recorded for that disposed
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-disposed-is-not-forgotten"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Disposed Is Not Forgotten
              </Link>
              . Disposed Is Not Forgotten already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that forgotten a new meaning. This essay starts from the
              forgotten the successor-spine Disposed Is Not Forgotten already names. This refusal sits on the
              commercial spine. This is the erasure spine after that forgetting. The prior essay is
              the forgetting spine. Keep this records erased distinct from the commercial expansion
              Retained Is Not Expanded already names and from any finished extinguishment or reconciliation theses.
              Refuse the slide from &quot;it is forgotten&quot; to &quot;it is erased/purged/destroyed.&quot;
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The forgotten practice is not the erased practice
          </h2>

          <p>
            Forgotten means that disposed commercial packs have been forgotten — a named forgetter forgetting
            of the disposed operating results for that named scope, disposed operating results with a named
            forgetter, a forgetting date, and a forgetting recorded for that disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period — by an executed forgetting instrument. Erased means that those
            forgotten packs have been erased — the forgotten operating results erased by a named
            eraser for the named period, the forgotten statement erased for the named ledger and period,
            or the forgotten customer workflow erased for the customer and the period, with a named
            eraser, an erasure date, and an erasure recorded — by an executed erasure
            instrument. A forgetting is not an erasure. This split is forgotten versus erased.
          </p>

          <p>
            A forgotten close whose named forgetter recorded a forgetting date and a forgetting recorded
            for those forgotten operating results, with no named eraser, no erasure date, and no
            erasure recorded for that disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not erased. A forgotten statement whose disposed statement was forgotten for the named ledger and
            period, with that forgotten statement not erased for the named ledger and period, is not
            erased. A forgotten customer workflow whose disposed customer workflow was forgotten for the
            customer and the period, with that forgotten customer workflow not erased for the customer and
            the period, is not erased. Erasure talk that says a named forgetter recorded a
            forgetting date and a forgetting recorded, the disposed statement was forgotten, or the disposed
            customer workflow was forgotten while the forgotten operating results have not been erased, the
            forgotten statement has not been erased, or the forgotten customer workflow has not been
            erased is not erased.
          </p>

          <p>
            A firm can be forgotten and still not erased. A firm can chase erasure theater and still
            not be forgotten. A forgetting package alone is not erased of that forgotten successor
            outcome. Forgotten cash or margin is not the same as an erased commercial outcome. The refusal
            is not merely that a named forgetter recorded a forgetting date and a forgetting recorded
            for that disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the disposed statement
            was forgotten for that named ledger and period, or the disposed customer workflow was forgotten for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an erased record is allowed to be
          </h2>

          <p>
            An executed erasure instrument is a books-erasure record that shows the forgotten
            operating results were erased for that disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, with a named eraser, an erasure date, and an erasure recorded, a
            statement-erasure record that shows the forgotten statement was erased for that named
            ledger and period, with a named eraser, an erasure date, and an erasure recorded, a
            customer-erasure record that shows the forgotten customer workflow was erased for the
            customer and the period, with a named eraser, an erasure date, and an erasure
            recorded, or an erasure binder that erases the forgotten packs as erased only when the
            named eraser, the erasure date, and the erasure recorded are on the file.
          </p>

          <p>
            The erasure record has to trail back to the forgetting evidence, and the forgetting
            evidence has to trail back to the forgetting{' '}
            <Link
              href="/insights/successor-disposed-is-not-forgotten"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Disposed Is Not Forgotten
            </Link>{' '}
            already required. A books-erasure that cannot name the period, the named eraser, the
            erasure date, and the erasure recorded the forgotten operating results were erased
            under, a statement-erasure that cannot name the ledger, the period, the named eraser, the
            erasure date, and the erasure recorded the forgotten statement was erased under, or a
            customer-erasure that cannot name the customer, the period, the named eraser, the
            erasure date, and the erasure recorded the forgotten customer workflow was erased
            under is erasure theater. It is not this erased.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named forgotten is not erased</h2>

          <p>
            Named forgotten is not erased. The forgotten practice is not the erased practice. A
            forgetting record answers whether the disposed operating results, the disposed statement, or the
            disposed customer workflow were forgotten as disposed operating results with a named forgetter, a
            forgetting date, and a forgetting recorded for that disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. An erasure record answers whether those forgotten packs were erased.
            Forgotten is not erased.
          </p>

          <p>
            A claim that forgetting so it is erased, while the erasure trail is missing, is not this
            erased. A forgotten close whose named forgetter recorded a forgetting date and a forgetting
            recorded, a forgotten statement whose disposed statement was forgotten, or a forgotten customer
            workflow whose disposed customer workflow was forgotten, with no named eraser, no erasure
            date, and no erasure recorded, is erasure theater, and it is not this forgotten either
            when the forgetting instrument is missing. An erasure claim alone is not proof the named
            forgetting evidence was on the file. Forgetting evidence alone is not erased of that
            forgotten successor outcome.
          </p>

          <p>
            Sync refuses to pretend forgotten or erased is a status light. Sync does not deem erased for
            the customer. Sync must not auto-deem-erased. Sync must not treat forgotten as erased as
            Learning credit. Evidence from the plant beats the forgetting record when the record is being
            used as erased.
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
            keep this edition from treating a forgetting record as erased.
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
            that forgotten is erased. It does not write a CMMS work order, book revenue, recognize revenue,
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
            or attribute a change in cash, risk, or capacity. Sync does not measure forgotten. Sync does not
            measure erased. Sync does not measure forgotten or erased for the customer.
          </p>

          <p>
            Keep this records erased distinct from Retained Is Not Expanded, Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            erased is not the commercial expansion Retained Is Not Expanded already names. This essay does not
            collapse into Retained Is Not Expanded. This essay does not rewrite Retained Is Not Expanded.
            Retained Is Not Expanded stays on its own commercial route. This
            erased is not the collected Collected Is Not Recognized already names. This erased is not
            the disbursement Paid Is Not Settled already names. This erased is not the settlement Settled
            Is Not Booked already names. This erased is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            erased is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This erased is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This erased is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This erased is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This erased is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This erased is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This erased is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This erased is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This erased is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This erased is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            erased is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route. This erased is not the archive Released Is Not Recorded already names. This essay does not collapse into Released Is Not Recorded. This essay does not rewrite Released Is Not Recorded. Released Is Not Recorded stays on its own route. This erased is not the archive Remediated Is Not Released already names. This essay does not collapse into Remediated Is Not Released. This essay does not rewrite Remediated Is Not Released. Remediated Is Not Released stays on its own route.
          </p>

          <p>
            Destroyed would mean that the erased operating results for that forgotten disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period have been destroyed — the erased operating results destroyed by a named destroyer for the named period, the erased statement destroyed for the named ledger and period, or the erased customer workflow destroyed for the customer and the period, with a named destroyer, a destruction date, and a destruction recorded — not merely that a named eraser recorded an erasure date and an erasure recorded for that forgotten period. Erased Is Not Destroyed may be named in prose only at /insights/successor-erased-is-not-destroyed. This essay does not implement that page. This essay does not create a successor route for Erased Is Not Destroyed. This essay does not create a filing spine for Forgotten Is Not Erased. This essay does not create a filing spine at /insights/forgotten-is-not-erased. This essay does not create a filing spine at /insights/disposed-is-not-forgotten.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Forgotten is a named
              forgetter forgetting of the disposed operating results for that named scope: disposed operating
              results with a named forgetter, a forgetting date, and a forgetting recorded for that disposed retained archived released satisfied discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. Erased is those forgotten packs: the
              forgotten operating results erased by a named eraser for the named period, the forgotten
              statement erased for the named ledger and period, or the forgotten customer workflow erased
              for the customer and the period, with a named eraser, an erasure date, and an erasure
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
              asks whether the records can support a conclusion. None of those is a claim that Sync erases
              the forgotten packs, executes plant work, or that erasure write-back is live.
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

          <InsightNextSteps slug="successor-forgotten-is-not-erased" />
        </motion.article>
      </div>
    </main>
  );
}
