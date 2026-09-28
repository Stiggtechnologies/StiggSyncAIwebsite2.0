'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-enacted-is-not-promulgated');

export default function SuccessorEnactedIsNotPromulgatedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Enacted Is Not Promulgated</h1>
            <p className="text-xl text-gray-400">
              Enacted is not promulgated. Packs that have been enacted — a named enactor enactment of
              the ratified operating results for that named scope, ratified operating results with a named
              enactor, an enactment date, and an enactment recorded for that ratified verified confirmed acted instructed
              authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
              relieved applied collected invoiced earned commenced renewed sustained realized performed
              advanced relied attested extinguished period, the ratified statement enacted for the named
              ledger and period, or the ratified customer workflow enacted for the customer and the period —
              are not the same as those enacted packs having been promulgated (a named promulgator promulgation
              of the enacted operating results for that named scope — the enacted operating results
              promulgated by a named promulgator for the named period, the enacted statement promulgated for the
              named ledger and period, or the enacted customer workflow promulgated for the customer and the
              period, with a named promulgator, a promulgation date, and a promulgation recorded) — not merely
              that a named enactor recorded an enactment date and an enactment recorded for that ratified
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-ratified-is-not-enacted"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Ratified Is Not Enacted
              </Link>
              . Ratified Is Not Enacted already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that enacted a new meaning. This essay starts from the
              enacted the successor-spine Ratified Is Not Enacted already names. This refusal sits on the
              commercial spine. This is the promulgation spine after that enactment. The prior essay is
              the enactment spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The enacted practice is not the promulgated practice
          </h2>

          <p>
            Enacted means that ratified commercial packs have been enacted — a named enactor enactment
            of the ratified operating results for that named scope, ratified operating results with a named
            enactor, an enactment date, and an enactment recorded for that ratified verified confirmed acted instructed authorized
            approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved
            applied collected invoiced earned commenced renewed sustained realized performed advanced relied
            attested extinguished period — by an executed enactment instrument. Promulgated means that those
            enacted packs have been promulgated — the enacted operating results promulgated by a named
            promulgator for the named period, the enacted statement promulgated for the named ledger and period,
            or the enacted customer workflow promulgated for the customer and the period, with a named
            promulgator, a promulgation date, and a promulgation recorded — by an executed promulgation
            instrument. An enactment is not a promulgation. This split is enacted versus promulgated.
          </p>

          <p>
            An enacted close whose named enactor recorded an enactment date and an enactment recorded
            for those enacted operating results, with no named promulgator, no promulgation date, and no
            promulgation recorded for that ratified verified confirmed acted instructed authorized approved reviewed operated accepted
            acknowledged issued sealed certified reconciled relieved applied collected invoiced earned
            commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not promulgated. An enacted statement whose ratified statement was enacted for the named ledger and
            period, with that enacted statement not promulgated for the named ledger and period, is not
            promulgated. An enacted customer workflow whose ratified customer workflow was enacted for the
            customer and the period, with that enacted customer workflow not promulgated for the customer and
            the period, is not promulgated. Promulgation talk that says a named enactor recorded an
            enactment date and an enactment recorded, the ratified statement was enacted, or the ratified
            customer workflow was enacted while the enacted operating results have not been promulgated, the
            enacted statement has not been promulgated, or the enacted customer workflow has not been
            promulgated is not promulgated.
          </p>

          <p>
            A firm can be enacted and still not promulgated. A firm can chase promulgation theater and still
            not be enacted. An enactment package alone is not promulgated of that enacted successor
            outcome. Enacted cash or margin is not the same as a promulgated commercial outcome. The refusal
            is not merely that a named enactor recorded an enactment date and an enactment recorded
            for that ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued
            sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period, the ratified statement
            was enacted for that named ledger and period, or the ratified customer workflow was enacted for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a promulgated record is allowed to be
          </h2>

          <p>
            An executed promulgation instrument is a books-promulgation record that shows the enacted
            operating results were promulgated for that ratified verified confirmed acted instructed authorized approved reviewed operated
            accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
            earned commenced renewed sustained realized performed advanced relied attested extinguished
            period, with a named promulgator, a promulgation date, and a promulgation recorded, a
            statement-promulgation record that shows the enacted statement was promulgated for that named
            ledger and period, with a named promulgator, a promulgation date, and a promulgation recorded, a
            customer-promulgation record that shows the enacted customer workflow was promulgated for the
            customer and the period, with a named promulgator, a promulgation date, and a promulgation
            recorded, or a promulgation binder that releases the enacted packs as promulgated only when the
            named promulgator, the promulgation date, and the promulgation recorded are on the file.
          </p>

          <p>
            The promulgation record has to trail back to the enactment evidence, and the enactment
            evidence has to trail back to the enactment{' '}
            <Link
              href="/insights/successor-ratified-is-not-enacted"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Ratified Is Not Enacted
            </Link>{' '}
            already required. A books-promulgation that cannot name the period, the named promulgator, the
            promulgation date, and the promulgation recorded the enacted operating results were promulgated
            under, a statement-promulgation that cannot name the ledger, the period, the named promulgator, the
            promulgation date, and the promulgation recorded the enacted statement was promulgated under, or a
            customer-promulgation that cannot name the customer, the period, the named promulgator, the
            promulgation date, and the promulgation recorded the enacted customer workflow was promulgated
            under is promulgation theater. It is not this promulgated.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named enacted is not promulgated</h2>

          <p>
            Named enacted is not promulgated. The enacted practice is not the promulgated practice. An
            enactment record answers whether the ratified operating results, the ratified statement, or the
            ratified customer workflow were enacted as ratified operating results with a named enactor, an
            enactment date, and an enactment recorded for that ratified verified confirmed acted instructed authorized approved
            reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied
            collected invoiced earned commenced renewed sustained realized performed advanced relied attested
            extinguished period. A promulgation record answers whether those enacted packs were promulgated.
            Enacted is not promulgated.
          </p>

          <p>
            A claim that enacting so it is promulgated, while the promulgation trail is missing, is not this
            promulgated. An enacted close whose named enactor recorded an enactment date and an enactment
            recorded, an enacted statement whose ratified statement was enacted, or an enacted customer
            workflow whose ratified customer workflow was enacted, with no named promulgator, no promulgation
            date, and no promulgation recorded, is promulgation theater, and it is not this enacted either
            when the enactment instrument is missing. A promulgation claim alone is not proof the named
            enactment evidence was on the file. Enactment evidence alone is not promulgated of that
            enacted successor outcome.
          </p>

          <p>
            Sync refuses to pretend enacted or promulgated is a status light. Sync does not deem promulgated for
            the customer. Sync must not auto-deem-promulgated. Sync must not treat enacted as promulgated as
            Learning credit. Evidence from the plant beats the enactment record when the record is being
            used as promulgated.
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
            keep this edition from treating an enactment record as promulgated.
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
            that enacted is promulgated. It does not write a CMMS work order, book revenue, recognize revenue,
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
            or attribute a change in cash, risk, or capacity. Sync does not measure enacted. Sync does not
            measure promulgated. Sync does not measure enacted or promulgated for the customer.
          </p>

          <p>
            Keep this commercial promulgated distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            promulgated is not the collected Collected Is Not Recognized already names. This promulgated is not
            the disbursement Paid Is Not Settled already names. This promulgated is not the settlement Settled
            Is Not Booked already names. This promulgated is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            promulgated is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This promulgated is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This promulgated is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This promulgated is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This promulgated is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This promulgated is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This promulgated is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This promulgated is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This promulgated is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This promulgated is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            promulgated is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route.
          </p>

          <p>
            Published would mean that the promulgated operating results for that enacted ratified verified confirmed acted instructed
            authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled
            relieved applied collected invoiced earned commenced renewed sustained realized performed
            advanced relied attested extinguished period have been published — the promulgated operating results
            published by a named publisher for the named period, the promulgated statement published for the named
            ledger and period, or the promulgated customer workflow published for the customer and the period,
            with a named publisher, a publication date, and a publication recorded — not merely that a named
            promulgator recorded a promulgation date and a promulgation recorded for that enacted period.
            Promulgated Is Not Published may be named in prose only at
            /insights/successor-promulgated-is-not-published. This essay does not implement
            that page. This essay does not create a successor route for Promulgated Is Not Published. This essay
            does not create a filing spine for Enacted Is Not Promulgated. This essay does not create a
            filing spine at /insights/enacted-is-not-promulgated.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Enacted is a named
              enactor enactment of the ratified operating results for that named scope: ratified operating
              results with a named enactor, an enactment date, and an enactment recorded for that ratified verified confirmed acted
              instructed authorized approved reviewed operated accepted acknowledged issued sealed certified
              reconciled relieved applied collected invoiced earned commenced renewed sustained realized
              performed advanced relied attested extinguished period. Promulgated is those enacted packs: the
              enacted operating results promulgated by a named promulgator for the named period, the enacted
              statement promulgated for the named ledger and period, or the enacted customer workflow promulgated
              for the customer and the period, with a named promulgator, a promulgation date, and a promulgation
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
              asks whether the records can support a conclusion. None of those is a claim that Sync promulgates
              the enacted packs, executes plant work, or that promulgation write-back is live.
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

          <InsightNextSteps slug="successor-enacted-is-not-promulgated" />
        </motion.article>
      </div>
    </main>
  );
}
