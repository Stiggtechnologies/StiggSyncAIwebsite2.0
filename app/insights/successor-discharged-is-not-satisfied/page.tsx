'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-discharged-is-not-satisfied');

export default function SuccessorDischargedIsNotSatisfiedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Discharged Is Not Satisfied</h1>
            <p className="text-xl text-gray-400">
              Discharged is not satisfied. Packs that have been discharged — a named discharger discharge of
              the honored operating results for that named scope, honored operating results with a named
              discharger, a discharge date, and a discharge recorded for that honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the honored statement discharged for the named
              ledger and period, or the honored customer workflow discharged for the customer and the period —
              are not the same as those discharged packs having been satisfied (a named satisfier satisfaction
              of the discharged operating results for that named scope — the discharged operating results
              satisfied by a named satisfier for the named period, the discharged statement satisfied for the
              named ledger and period, or the discharged customer workflow satisfied for the customer and the
              period, with a named satisfier, a satisfaction date, and a satisfaction recorded) — not merely
              that a named discharger recorded a discharge date and a discharge recorded for that honored
              period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-honored-is-not-discharged"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Honored Is Not Discharged
              </Link>
              . Honored Is Not Discharged already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that discharged a new meaning. This essay starts from the
              discharged the successor-spine Honored Is Not Discharged already names. This refusal sits on the
              commercial spine. This is the satisfaction spine after that discharge. The prior essay is
              the discharge spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The discharged practice is not the satisfied practice
          </h2>

          <p>
            Discharged means that honored commercial packs have been discharged — a named discharger discharge
            of the honored operating results for that named scope, honored operating results with a named
            discharger, a discharge date, and a discharge recorded for that honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period — by an executed discharge instrument. Satisfied means that those
            discharged packs have been satisfied — the discharged operating results satisfied by a named
            satisfier for the named period, the discharged statement satisfied for the named ledger and period,
            or the discharged customer workflow satisfied for the customer and the period, with a named
            satisfier, a satisfaction date, and a satisfaction recorded — by an executed satisfaction
            instrument. A discharge is not a satisfaction. This split is discharged versus satisfied.
          </p>

          <p>
            A discharged close whose named discharger recorded a discharge date and a discharge recorded
            for those discharged operating results, with no named satisfier, no satisfaction date, and no
            satisfaction recorded for that honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, is
            not satisfied. A discharged statement whose honored statement was discharged for the named ledger and
            period, with that discharged statement not satisfied for the named ledger and period, is not
            satisfied. A discharged customer workflow whose honored customer workflow was discharged for the
            customer and the period, with that discharged customer workflow not satisfied for the customer and
            the period, is not satisfied. Discharge talk that says a named discharger recorded a
            discharge date and a discharge recorded, the honored statement was discharged, or the honored
            customer workflow was discharged while the discharged operating results have not been satisfied, the
            discharged statement has not been satisfied, or the discharged customer workflow has not been
            satisfied is not satisfied.
          </p>

          <p>
            A firm can be discharged and still not satisfied. A firm can chase satisfaction theater and still
            not be discharged. A discharge package alone is not satisfied of that discharged successor
            outcome. Discharged cash or margin is not the same as a satisfied commercial outcome. The refusal
            is not merely that a named discharger recorded a discharge date and a discharge recorded
            for that honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the honored statement
            was discharged for that named ledger and period, or the honored customer workflow was discharged for
            the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What a satisfied record is allowed to be
          </h2>

          <p>
            An executed satisfaction instrument is a books-satisfaction record that shows the discharged
            operating results were satisfied for that honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, with a named satisfier, a satisfaction date, and a satisfaction recorded, a
            statement-satisfaction record that shows the discharged statement was satisfied for that named
            ledger and period, with a named satisfier, a satisfaction date, and a satisfaction recorded, a
            customer-satisfaction record that shows the discharged customer workflow was satisfied for the
            customer and the period, with a named satisfier, a satisfaction date, and a satisfaction
            recorded, or a satisfaction binder that releases the discharged packs as satisfied only when the
            named satisfier, the satisfaction date, and the satisfaction recorded are on the file.
          </p>

          <p>
            The satisfaction record has to trail back to the discharge evidence, and the discharge
            evidence has to trail back to the discharge{' '}
            <Link
              href="/insights/successor-honored-is-not-discharged"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Honored Is Not Discharged
            </Link>{' '}
            already required. A books-satisfaction that cannot name the period, the named satisfier, the
            satisfaction date, and the satisfaction recorded the discharged operating results were satisfied
            under, a statement-satisfaction that cannot name the ledger, the period, the named satisfier, the
            satisfaction date, and the satisfaction recorded the discharged statement was satisfied under, or a
            customer-satisfaction that cannot name the customer, the period, the named satisfier, the
            satisfaction date, and the satisfaction recorded the discharged customer workflow was satisfied
            under is satisfaction theater. It is not this satisfied.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named discharged is not satisfied</h2>

          <p>
            Named discharged is not satisfied. The discharged practice is not the satisfied practice. A
            discharge record answers whether the honored operating results, the honored statement, or the
            honored customer workflow were discharged as honored operating results with a named discharger, a
            discharge date, and a discharge recorded for that honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. A satisfaction record answers whether those discharged packs were satisfied.
            Discharged is not satisfied.
          </p>

          <p>
            A claim that discharging so it is satisfied, while the satisfaction trail is missing, is not this
            satisfied. A discharged close whose named discharger recorded a discharge date and a discharge
            recorded, a discharged statement whose honored statement was discharged, or a discharged customer
            workflow whose honored customer workflow was discharged, with no named satisfier, no satisfaction
            date, and no satisfaction recorded, is satisfaction theater, and it is not this discharged either
            when the discharge instrument is missing. A satisfaction claim alone is not proof the named
            discharge evidence was on the file. Discharge evidence alone is not satisfied of that
            discharged successor outcome.
          </p>

          <p>
            Sync refuses to pretend discharged or satisfied is a status light. Sync does not deem satisfied for
            the customer. Sync must not auto-deem-satisfied. Sync must not treat discharged as satisfied as
            Learning credit. Evidence from the plant beats the discharge record when the record is being
            used as satisfied.
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
            keep this edition from treating a discharge record as satisfied.
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
            that discharged is satisfied. It does not write a CMMS work order, book revenue, recognize revenue,
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
            or attribute a change in cash, risk, or capacity. Sync does not measure discharged. Sync does not
            measure satisfied. Sync does not measure discharged or satisfied for the customer.
          </p>

          <p>
            Keep this commercial satisfied distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin. This
            satisfied is not the collected Collected Is Not Recognized already names. This satisfied is not
            the disbursement Paid Is Not Settled already names. This satisfied is not the settlement Settled
            Is Not Booked already names. This satisfied is not the collectible Collectible Is Not Applied
            already names. This essay does not collapse into Collectible Is Not Applied. This essay does not
            rewrite Collectible Is Not Applied. Collectible Is Not Applied stays on its own route. This
            satisfied is not the applied Applied Is Not Restored already names. This essay does not collapse
            into Applied Is Not Restored. This essay does not rewrite Applied Is Not Restored. Applied Is Not
            Restored stays on its own route. This satisfied is not the extinguishment Extinguished Is Not
            Reconciled already names. This essay does not collapse into Extinguished Is Not Reconciled. This
            essay does not rewrite Extinguished Is Not Reconciled. This satisfied is not the reconciled
            Reconciled Is Not Attested already names. This essay does not collapse into Reconciled Is Not
            Attested. This essay does not rewrite Reconciled Is Not Attested. Reconciled Is Not Attested
            stays on its own route. This satisfied is not the reconciled Reconciled Is Not Closed already
            names. This essay does not collapse into Reconciled Is Not Closed. This essay does not rewrite
            Reconciled Is Not Closed. This satisfied is not the reconciled Booked Is Not Reconciled already
            names. This essay does not collapse into Booked Is Not Reconciled. This essay does not rewrite
            Booked Is Not Reconciled. This essay does not collapse into Binding Is Not Enforced. This essay
            does not rewrite Binding Is Not Enforced. This essay does not collapse into Defended Is Not
            Owned. This essay does not rewrite Defended Is Not Owned. Defended Is Not Owned stays on its own
            growth-loop route. This satisfied is not the certification Certified Is Not Insured already
            names. This essay does not collapse into Certified Is Not Insured. This essay does not rewrite
            Certified Is Not Insured. This satisfied is not the certification Assured Is Not Certified
            already names. This essay does not collapse into Assured Is Not Certified. This essay does not
            rewrite Assured Is Not Certified. This satisfied is not the accepted Accepted Is Not Posted
            already names. This essay does not collapse into Accepted Is Not Posted. This essay does not
            rewrite Accepted Is Not Posted. This satisfied is not the accepted Restored Is Not Accepted
            already names. This essay does not collapse into Restored Is Not Accepted. This essay does not
            rewrite Restored Is Not Accepted. This satisfied is not the operated Operated Is Not Sustained
            already names. This essay does not collapse into Operated Is Not Sustained. This essay does not
            rewrite Operated Is Not Sustained. Operated Is Not Sustained stays on its own route. This
            satisfied is not the operated Delivered Is Not Operated already names. This essay does not
            collapse into Delivered Is Not Operated. This essay does not rewrite Delivered Is Not Operated.
            Delivered Is Not Operated stays on its own route.
          </p>

          <p>
            Released would mean that the satisfied operating results for that discharged honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period have been released — the satisfied operating results
            released by a named releaser for the named period, the satisfied statement released for the named
            ledger and period, or the satisfied customer workflow released for the customer and the period,
            with a named releaser, a release date, and a release recorded — not merely that a named
            satisfier recorded a satisfaction date and a satisfaction recorded for that discharged period.
            Satisfied Is Not Released may be named in prose only at
            /insights/successor-satisfied-is-not-released. This essay does not implement
            that page. This essay does not create a successor route for Satisfied Is Not Released. This essay
            does not create a filing spine for Discharged Is Not Satisfied. This essay does not create a
            filing spine at /insights/discharged-is-not-satisfied.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Discharged is a named
              discharger discharge of the honored operating results for that named scope: honored operating
              results with a named discharger, a discharge date, and a discharge recorded for that honored endorsed received presented circulated published promulgated enacted ratified verified confirmed acted instructed authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. Satisfied is those discharged packs: the
              discharged operating results satisfied by a named satisfier for the named period, the discharged
              statement satisfied for the named ledger and period, or the discharged customer workflow satisfied
              for the customer and the period, with a named satisfier, a satisfaction date, and a satisfaction
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
              asks whether the records can support a conclusion. None of those is a claim that Sync satisfies
              the discharged packs, executes plant work, or that satisfaction write-back is live.
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

          <InsightNextSteps slug="successor-discharged-is-not-satisfied" />
        </motion.article>
      </div>
    </main>
  );
}
