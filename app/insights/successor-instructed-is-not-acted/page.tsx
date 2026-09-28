'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-instructed-is-not-acted');

export default function SuccessorInstructedIsNotActedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Instructed Is Not Acted</h1>
            <p className="text-xl text-gray-400">
              Instructed is not acted. Packs that have been instructed — a named instructor
              instruction of the authorized operating results for that named scope, authorized operating
              results with a named instructor, instruction date, and instruction to act for that
              authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the authorized statement instructed for the named ledger
              and period, or the authorized customer workflow instructed for the customer and the period —
              are not the same as those instructed packs having been acted (a named actor
              acting on the instructed operating results for that named scope — the instructed
              operating results acted by a named actor for the named period, the instructed
              statement acted for the named ledger and period, or the instructed customer workflow
              acted for the customer and the period, with a named actor, an action date,
              and an action taken) — not merely that a named instructor recorded an instruction
              date and an instruction to act for that authorized period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-authorized-is-not-instructed"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Authorized Is Not Instructed
              </Link>
              . Authorized Is Not Instructed already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that instructed a new meaning. This essay starts from the
              instructed the successor-spine Authorized Is Not Instructed already names. This refusal sits on
              the commercial spine. This is the action spine after that instruction. The prior essay
              is the instruction spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The instructed practice is not the acted practice
          </h2>

          <p>
            Instructed means that authorized commercial packs have been instructed — a named instructor
            instruction of the authorized operating results for that named scope, authorized operating
            results with a named instructor, instruction date, and instruction to act for that authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period — by an executed instruction instrument. Acted means that
            those instructed packs have been acted — the instructed operating results acted by a
            named actor for the named period, the instructed statement acted for the named ledger
            and period, or the instructed customer workflow acted for the customer and the period,
            with a named actor, an action date, and an action taken — by an executed
            action instrument. An instruction is not an action. This split is instructed versus
            acted.
          </p>

          <p>
            An instructed close whose named instructor recorded an instruction date and an instruction
            to act for those instructed operating results, with no named actor, no action date,
            and no action taken for that authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, is not acted.
            An instructed statement whose authorized statement was instructed for the named ledger and
            period, with that instructed statement not acted for the named ledger and period, is not
            acted. An instructed customer workflow whose authorized customer workflow was instructed for
            the customer and the period, with that instructed customer workflow not acted for the
            customer and the period, is not acted. Action talk that says a named instructor
            recorded an instruction date and an instruction to act, the authorized statement was
            instructed, or the authorized customer workflow was instructed while the instructed operating
            results have not been acted, the instructed statement has not been acted, or the
            instructed customer workflow has not been acted is not acted.
          </p>

          <p>
            A firm can be instructed and still not acted. A firm can chase action theater and
            still not be instructed. An instruction package alone is not acted of that instructed
            successor outcome. Instructed cash or margin is not the same as an acted commercial
            outcome. The refusal is not merely that a named instructor recorded an instruction date and
            an instruction to act for that authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, the authorized statement was
            instructed for that named ledger and period, or the authorized customer workflow was instructed
            for the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an acted record is allowed to be
          </h2>

          <p>
            An executed action instrument is a books-action record that shows the instructed
            operating results were acted for that authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period, with a named
            actor, an action date, and an action taken, a statement-action record that
            shows the instructed statement was acted for that named ledger and period, with a named
            actor, an action date, and an action taken, a customer-action record that
            shows the instructed customer workflow was acted for the customer and the period, with a
            named actor, an action date, and an action taken, or an action binder that
            releases the instructed packs as acted only when the named actor, the action
            date, and the action taken are on the file.
          </p>

          <p>
            The action record has to trail back to the instruction evidence, and the instruction
            evidence has to trail back to the instruction{' '}
            <Link
              href="/insights/successor-authorized-is-not-instructed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Authorized Is Not Instructed
            </Link>{' '}
            already required. A books-action that cannot name the period, the named actor, the
            action date, and the action taken the instructed operating results were acted
            under, a statement-action that cannot name the ledger, the period, the named actor,
            the action date, and the action taken the instructed statement was acted under,
            or a customer-action that cannot name the customer, the period, the named actor, the
            action date, and the action taken the instructed customer workflow was acted
            under is action theater. It is not this acted.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named instructed is not acted</h2>

          <p>
            Named instructed is not acted. The instructed practice is not the acted practice. An
            instruction record answers whether the authorized operating results, the authorized statement, or
            the authorized customer workflow were instructed as authorized operating results with a named
            instructor, instruction date, and instruction to act for that authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished
            period. An action record answers whether those instructed packs were acted. Instructed
            is not acted.
          </p>

          <p>
            A claim that instructing so it is acted, while the action trail is missing, is not
            this acted. An instructed close whose named instructor recorded an instruction date and
            an instruction to act, an instructed statement whose authorized statement was instructed, or an
            instructed customer workflow whose authorized customer workflow was instructed, with no named
            actor, no action date, and no action taken, is action theater, and it is
            not this instructed either when the instruction instrument is missing. An action claim
            alone is not proof the named instruction evidence was on the file. Instruction evidence
            alone is not acted of that instructed successor outcome.
          </p>

          <p>
            Sync refuses to pretend instructed or acted is a status light. Sync does not deem
            acted for the customer. Sync must not auto-deem-acted. Sync must not treat instructed
            as acted as Learning credit. Evidence from the plant beats the instruction record when
            the record is being used as acted.
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
            keep this edition from treating an instruction record as acted.
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
            This is an essay about the Decision Case order, not a customer case study. It names no
            plant, states no savings figure, states no price, and claims no prevented failure. It does
            not claim that instructed is acted. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, post a receipt, apply cash, relieve a balance,
            reconcile the books, certify the books, seal the books, issue the close pack, acknowledge
            receipt of the issued pack, accept the numbers and close, accept the statement, accept the
            customer pack, adopt the accepted close into operating practice, adopt the accepted statement
            into the books, adopt the accepted customer pack into the customer workflow, operate the
            adopted books day-to-day, operate the adopted statement, operate the adopted customer
            workflow, review the operated books, review the operated statement, review the operated
            customer workflow, name a reviewer, record a review date, record a review conclusion, approve
            the reviewed operating results, approve the reviewed statement, approve the reviewed customer
            workflow, name an approver, record an approval date, record an approval decision, authorize
            the approved operating results, authorize the approved statement, authorize the approved
            customer workflow, name an authorizer, record an authorization date, record an authorization
            grant, instruct the authorized operating results, instruct the authorized statement, instruct
            the authorized customer workflow, name an instructor, record an instruction date, record an
            instruction to act, act the instructed operating results, act the instructed statement, act
            the instructed customer workflow, name an actor, record an action date, record an action taken, or attribute a change in cash, risk, or capacity. Sync does not measure
            instructed. Sync does not measure acted. Sync does not measure instructed or acted
            for the customer.
          </p>

          <p>
            Keep this commercial acted distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This acted is not the collected Collected Is Not Recognized already names. This acted
            is not the disbursement Paid Is Not Settled already names. This acted is not the
            settlement Settled Is Not Booked already names. This acted is not the collectible
            Collectible Is Not Applied already names. This essay does not collapse into Collectible Is Not
            Applied. This essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied
            stays on its own route. This acted is not the applied Applied Is Not Restored already
            names. This essay does not collapse into Applied Is Not Restored. This essay does not rewrite
            Applied Is Not Restored. Applied Is Not Restored stays on its own route. This acted is not
            the extinguishment Extinguished Is Not Reconciled already names. This essay does not collapse
            into Extinguished Is Not Reconciled. This essay does not rewrite Extinguished Is Not Reconciled.
            This acted is not the reconciled Reconciled Is Not Attested already names. This essay does
            not collapse into Reconciled Is Not Attested. This essay does not rewrite Reconciled Is Not
            Attested. Reconciled Is Not Attested stays on its own route. This acted is not the
            reconciled Reconciled Is Not Closed already names. This essay does not collapse into Reconciled
            Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This acted is not the
            reconciled Booked Is Not Reconciled already names. This essay does not collapse into Booked Is
            Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This essay does not
            collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced.
            This essay does not collapse into Defended Is Not Owned. This essay does not rewrite Defended
            Is Not Owned. Defended Is Not Owned stays on its own growth-loop route. This acted is not
            the certification Certified Is Not Insured already names. This essay does not collapse into
            Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured. This acted
            is not the certification Assured Is Not Certified already names. This essay does not collapse
            into Assured Is Not Certified. This essay does not rewrite Assured Is Not Certified. This
            acted is not the accepted Accepted Is Not Posted already names. This essay does not
            collapse into Accepted Is Not Posted. This essay does not rewrite Accepted Is Not Posted. This
            acted is not the accepted Restored Is Not Accepted already names. This essay does not
            collapse into Restored Is Not Accepted. This essay does not rewrite Restored Is Not Accepted.
            This acted is not the operated Operated Is Not Sustained already names. This essay does
            not collapse into Operated Is Not Sustained. This essay does not rewrite Operated Is Not
            Sustained. Operated Is Not Sustained stays on its own route. This acted is not the
            operated Delivered Is Not Operated already names. This essay does not collapse into Delivered
            Is Not Operated. This essay does not rewrite Delivered Is Not Operated. Delivered Is Not
            Operated stays on its own route.
          </p>

          <p>
            Confirmed would mean that the acted operating results for that instructed authorized approved reviewed
            operated accepted acknowledged issued sealed certified reconciled relieved applied collected
            invoiced earned commenced renewed sustained realized performed advanced relied attested
            extinguished period have been confirmed — the acted operating results confirmed by a named confirmer
            for the named period, the acted statement confirmed for the named ledger and period, or the
            acted customer workflow confirmed for the customer and the period, with a named confirmer, a
            confirmation date, and a confirmation of the action — not merely that a named actor recorded an action
            date and an action taken for that instructed period.{' '}
            <Link
              href="/insights/successor-acted-is-not-confirmed"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Acted Is Not Confirmed
            </Link>
            . Read it at /insights/successor-acted-is-not-confirmed. This essay does not rewrite that
            thesis. This essay does not give that confirmed a new meaning. This essay does not create a
            filing spine for Instructed Is Not Acted. This essay does not create a filing spine at
            /insights/instructed-is-not-acted.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Instructed is a named
              instructor instruction of the authorized operating results for that named scope: authorized
              operating results with a named instructor, instruction date, and instruction to act for
              that authorized approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed sustained realized performed advanced relied attested extinguished period. Acted is those instructed packs: the
              instructed operating results acted by a named actor for the named period, the
              instructed statement acted for the named ledger and period, or the instructed customer
              workflow acted for the customer and the period, with a named actor, an action
              date, and an action taken. A{' '}
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
              asks whether the records can support a conclusion. None of those is a claim that Sync
              acts the instructed packs, executes plant work, or that action write-back is live.
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

          <InsightNextSteps slug="successor-instructed-is-not-acted" />
        </motion.article>
      </div>
    </main>
  );
}
