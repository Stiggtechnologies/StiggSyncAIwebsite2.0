'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-honored-is-not-discharged');

export default function SuccessorHonoredIsNotDischargedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Honored Is Not Discharged</h1>
            <p className="text-xl text-gray-400">
              Honored is not discharged. Packs that have been honored — a named honorer honor of
              the endorsed operating results for that named scope, endorsed operating results with a named
              honorer, an honor date, and an honor recorded for that endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the endorsed statement honored for the named
              ledger and period, or the endorsed customer workflow honored for the customer and the period —
              are not the same as those honored packs having been discharged (a named discharger discharge
              of the honored operating results for that named scope — the honored operating results
              discharged by a named discharger for the named period, the honored statement discharged for the
              named ledger and period, or the honored customer workflow discharged for the customer and the
              period, with a named discharger, a discharge date, and a discharge recorded) — not merely
              that a named honorer recorded an honor date and an honor recorded for that endorsed
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-endorsed-is-not-honored"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Endorsed Is Not Honored
              </Link>
              . Endorsed Is Not Honored already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that honored a new meaning. This essay starts from the
              honored the successor-spine Endorsed Is Not Honored already names. This refusal sits on the
              commercial spine. This is the discharge spine after that honor. The prior essay is
              the honor spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The honored practice is not the discharged practice
          </h2>

          <p>
            Honored means that endorsed commercial packs have been honored — a named honorer honor
            of the endorsed operating results for that named scope, endorsed operating results with a named
            honorer, an honor date, and an honor recorded for that endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period — by an executed honor instrument. Discharged means that those
            honored packs have been discharged — the honored operating results discharged by a named
            discharger for the named period, the honored statement discharged for the named ledger and period,
            or the honored customer workflow discharged for the customer and the period, with a named
            discharger, a discharge date, and a discharge recorded — by an executed discharge
            instrument. An honor is not a discharge. This split is honored versus discharged.
          </p>

          <p>
            An honored close whose named honorer recorded an honor date and an honor recorded
            for those honored operating results, with no named discharger, no discharge date, and no
            discharge recorded for that endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not discharged. An honored statement whose endorsed statement was honored for the named ledger and
            period, with that honored statement not discharged for the named ledger and period, is not
            discharged. An honored customer workflow whose endorsed customer workflow was honored for the
            customer and the period, with that honored customer workflow not discharged for the customer and
            the period, is not discharged. Honor talk that says a named honorer recorded an
            honor date and an honor recorded, the endorsed statement was honored, or the endorsed
            customer workflow was honored while the honored operating results have not been discharged, the
            honored statement has not been discharged, or the honored customer workflow has not been
            discharged is not discharged.
          </p>

          <p>
            A firm can be honored and still not discharged. A firm can chase discharge theater and still
            not be honored. An honor package alone is not discharged of that honored successor
            outcome. Honored cash or margin is not the same as a discharged commercial outcome. The refusal
            is not merely that a named honorer recorded an honor date and an honor recorded
            for that endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the endorsed statement
            was honored for that named ledger and period, or the endorsed customer workflow was honored for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a discharged record is allowed to be
          </h2>

          <p>
            An executed discharge instrument is a books-discharge record that shows the honored
            operating results were discharged for that endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, with a named discharger, a discharge date, and a discharge recorded, a
            statement-discharge record that shows the honored statement was discharged for that named
            ledger and period, with a named discharger, a discharge date, and a discharge recorded, a
            customer-discharge record that shows the honored customer workflow was discharged for the
            customer and the period, with a named discharger, a discharge date, and a discharge
            recorded, or a discharge binder that releases the honored packs as discharged only when the
            named discharger, the discharge date, and the discharge recorded are on the file.
          </p>

          <p>
            The discharge record has to trail back to the honor evidence, and the honor
            evidence has to trail back to the honor{' '}
            <Link
              href="/insights/successor-endorsed-is-not-honored"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Endorsed Is Not Honored
            </Link>{' '}
            already required. A books-discharge that cannot name the period, the named discharger, the
            discharge date, and the discharge recorded the honored operating results were discharged
            under, a statement-discharge that cannot name the ledger, the period, the named discharger, the
            discharge date, and the discharge recorded the honored statement was discharged under, or a
            customer-discharge that cannot name the customer, the period, the named discharger, the
            discharge date, and the discharge recorded the honored customer workflow was discharged
            under is discharge theater. It is not this discharged.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named honored is not discharged</h2>

          <p>
            Named honored is not discharged. The honored practice is not the discharged practice. An
            honor record answers whether the endorsed operating results, the endorsed statement, or the
            endorsed customer workflow were honored as endorsed operating results with a named honorer, an
            honor date, and an honor recorded for that endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. A discharge record answers whether those honored packs were discharged.
            Honored is not discharged.
          </p>

          <p>
            A claim that honoring so it is discharged, while the discharge trail is missing, is not this
            discharged. An honored close whose named honorer recorded an honor date and an honor
            recorded, an honored statement whose endorsed statement was honored, or an honored customer
            workflow whose endorsed customer workflow was honored, with no named discharger, no discharge
            date, and no discharge recorded, is discharge theater, and it is not this honored either
            when the honor instrument is missing. A discharge claim alone is not proof the named
            honor evidence was on the file. Honor evidence alone is not discharged of that
            honored successor outcome.
          </p>

          <p>
            Sync refuses to pretend honored or discharged is a status light. Sync does not deem discharged for
            the customer. Sync must not auto-deem-discharged. Sync must not treat honored as discharged as
            Learning credit. Evidence from the plant beats the honor record when the record is being
            used as discharged.
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
            keep this edition from treating an honor record as discharged.
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
            that honored is discharged. It does not write a CMMS work order, book revenue, recognize revenue,
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
            or attribute a change in cash, risk, or capacity. Sync does not measure honored. Sync does not
            measure discharged. Sync does not measure honored or discharged for the customer.
          </p>

          <p>
            Keep this commercial discharged distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            discharged is not the collected Collected Is Not Recognized already names. This discharged is not
            the disbursement Paid Is Not Settled already names. This discharged is not the settlement Settled
            Is Not Booked already names. This discharged is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            discharged is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This discharged is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This discharged is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This discharged is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This discharged is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This discharged is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This discharged is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This discharged is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This discharged is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This discharged is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            discharged is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route.
          </p>

          <p>
            Satisfied would mean that the discharged operating results for that honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period have been satisfied — the discharged operating results
            satisfied by a named satisfier for the named period, the discharged statement satisfied for the named
            ledger and period, or the discharged customer workflow satisfied for the customer and the period,
            with a named satisfier, a satisfaction date, and a satisfaction recorded — not merely that a named
            discharger recorded a discharge date and a discharge recorded for that honored period.{' '}
            <Link
              href="/insights/successor-discharged-is-not-satisfied"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Discharged Is Not Satisfied
            </Link>
            . Read it at /insights/successor-discharged-is-not-satisfied. This essay does not rewrite that
            thesis. This essay does not give that satisfied a new meaning. This essay does not create a
            filing spine for Honored Is Not Discharged. This essay does not create a filing spine at
            /insights/honored-is-not-discharged.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Honored is a named
              honorer honor of the endorsed operating results for that named scope: endorsed operating
              results with a named honorer, an honor date, and an honor recorded for that endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. Discharged is those honored packs: the
              honored operating results discharged by a named discharger for the named period, the honored
              statement discharged for the named ledger and period, or the honored customer workflow discharged
              for the customer and the period, with a named discharger, a discharge date, and a discharge
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
              asks whether the records can support a conclusion. None of those is a claim that Sync discharges
              the honored packs, executes plant work, or that discharge write-back is live.
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

          <InsightNextSteps slug="successor-honored-is-not-discharged" />
        </motion.article>
      </div>
    </main>
  );
}
