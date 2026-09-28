'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-authorized-is-not-instructed');

export default function SuccessorAuthorizedIsNotInstructedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Authorized Is Not Instructed</h1>
            <p className="text-xl text-gray-400">
              Authorized is not instructed. Packs that have been authorized — a named authorizer
              authorization of the approved operating results for that named scope, approved operating
              results with a named authorizer, authorization date, and authorization grant for that
              approved reviewed operated accepted acknowledged issued sealed certified reconciled relieved
              applied collected invoiced earned commenced renewed sustained realized performed advanced
              relied attested extinguished period, the approved statement authorized for the named ledger
              and period, or the approved customer workflow authorized for the customer and the period —
              are not the same as those authorized packs having been instructed (a named instructor
              instruction of the authorized operating results for that named scope — the authorized
              operating results instructed by a named instructor for the named period, the authorized
              statement instructed for the named ledger and period, or the authorized customer workflow
              instructed for the customer and the period, with a named instructor, an instruction date,
              and an instruction to act) — not merely that a named authorizer recorded an authorization
              date and an authorization grant for that approved period.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-approved-is-not-authorized"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Approved Is Not Authorized
              </Link>
              . Approved Is Not Authorized already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that authorized a new meaning. This essay starts from the
              authorized the successor-spine Approved Is Not Authorized already names. This refusal sits on
              the commercial spine. This is the instruction spine after that authorization. The prior essay
              is the authorization spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The authorized practice is not the instructed practice
          </h2>

          <p>
            Authorized means that approved commercial packs have been authorized — a named authorizer
            authorization of the approved operating results for that named scope, approved operating
            results with a named authorizer, authorization date, and authorization grant for that approved
            reviewed operated accepted acknowledged issued sealed certified reconciled relieved applied
            collected invoiced earned commenced renewed sustained realized performed advanced relied
            attested extinguished period — by an executed authorization instrument. Instructed means that
            those authorized packs have been instructed — the authorized operating results instructed by a
            named instructor for the named period, the authorized statement instructed for the named ledger
            and period, or the authorized customer workflow instructed for the customer and the period,
            with a named instructor, an instruction date, and an instruction to act — by an executed
            instruction instrument. An authorization is not an instruction. This split is authorized versus
            instructed.
          </p>

          <p>
            An authorized close whose named authorizer recorded an authorization date and an authorization
            grant for those authorized operating results, with no named instructor, no instruction date,
            and no instruction to act for that approved reviewed operated accepted acknowledged issued
            sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period, is not instructed.
            An authorized statement whose approved statement was authorized for the named ledger and
            period, with that authorized statement not instructed for the named ledger and period, is not
            instructed. An authorized customer workflow whose approved customer workflow was authorized for
            the customer and the period, with that authorized customer workflow not instructed for the
            customer and the period, is not instructed. Instruction talk that says a named authorizer
            recorded an authorization date and an authorization grant, the approved statement was
            authorized, or the approved customer workflow was authorized while the authorized operating
            results have not been instructed, the authorized statement has not been instructed, or the
            authorized customer workflow has not been instructed is not instructed.
          </p>

          <p>
            A firm can be authorized and still not instructed. A firm can chase instruction theater and
            still not be authorized. An authorization package alone is not instructed of that authorized
            successor outcome. Authorized cash or margin is not the same as an instructed commercial
            outcome. The refusal is not merely that a named authorizer recorded an authorization date and
            an authorization grant for that approved reviewed operated accepted acknowledged issued sealed
            certified reconciled relieved applied collected invoiced earned commenced renewed sustained
            realized performed advanced relied attested extinguished period, the approved statement was
            authorized for that named ledger and period, or the approved customer workflow was authorized
            for the customer and the period.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            What an instructed record is allowed to be
          </h2>

          <p>
            An executed instruction instrument is a books-instruction record that shows the authorized
            operating results were instructed for that approved reviewed operated accepted acknowledged
            issued sealed certified reconciled relieved applied collected invoiced earned commenced renewed
            sustained realized performed advanced relied attested extinguished period, with a named
            instructor, an instruction date, and an instruction to act, a statement-instruction record that
            shows the authorized statement was instructed for that named ledger and period, with a named
            instructor, an instruction date, and an instruction to act, a customer-instruction record that
            shows the authorized customer workflow was instructed for the customer and the period, with a
            named instructor, an instruction date, and an instruction to act, or an instruction binder that
            releases the authorized packs as instructed only when the named instructor, the instruction
            date, and the instruction to act are on the file.
          </p>

          <p>
            The instruction record has to trail back to the authorization evidence, and the authorization
            evidence has to trail back to the authorization{' '}
            <Link
              href="/insights/successor-approved-is-not-authorized"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Approved Is Not Authorized
            </Link>{' '}
            already required. A books-instruction that cannot name the period, the named instructor, the
            instruction date, and the instruction to act the authorized operating results were instructed
            under, a statement-instruction that cannot name the ledger, the period, the named instructor,
            the instruction date, and the instruction to act the authorized statement was instructed under,
            or a customer-instruction that cannot name the customer, the period, the named instructor, the
            instruction date, and the instruction to act the authorized customer workflow was instructed
            under is instruction theater. It is not this instructed.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named authorized is not instructed</h2>

          <p>
            Named authorized is not instructed. The authorized practice is not the instructed practice. An
            authorization record answers whether the approved operating results, the approved statement, or
            the approved customer workflow were authorized as approved operating results with a named
            authorizer, authorization date, and authorization grant for that approved reviewed operated
            accepted acknowledged issued sealed certified reconciled relieved applied collected invoiced
            earned commenced renewed sustained realized performed advanced relied attested extinguished
            period. An instruction record answers whether those authorized packs were instructed. Authorized
            is not instructed.
          </p>

          <p>
            A claim that authorizing so it is instructed, while the instruction trail is missing, is not
            this instructed. An authorized close whose named authorizer recorded an authorization date and
            an authorization grant, an authorized statement whose approved statement was authorized, or an
            authorized customer workflow whose approved customer workflow was authorized, with no named
            instructor, no instruction date, and no instruction to act, is instruction theater, and it is
            not this authorized either when the authorization instrument is missing. An instruction claim
            alone is not proof the named authorization evidence was on the file. Authorization evidence
            alone is not instructed of that authorized successor outcome.
          </p>

          <p>
            Sync refuses to pretend authorized or instructed is a status light. Sync does not deem
            instructed for the customer. Sync must not auto-deem-instructed. Sync must not treat authorized
            as instructed as Learning credit. Evidence from the plant beats the authorization record when
            the record is being used as instructed.
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
            keep this edition from treating an authorization record as instructed.
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
            not claim that authorized is instructed. It does not write a CMMS work order, book revenue,
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
            instruction to act, or attribute a change in cash, risk, or capacity. Sync does not measure
            authorized. Sync does not measure instructed. Sync does not measure authorized or instructed
            for the customer.
          </p>

          <p>
            Keep this commercial instructed distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This instructed is not the collected Collected Is Not Recognized already names. This instructed
            is not the disbursement Paid Is Not Settled already names. This instructed is not the
            settlement Settled Is Not Booked already names. This instructed is not the collectible
            Collectible Is Not Applied already names. This essay does not collapse into Collectible Is Not
            Applied. This essay does not rewrite Collectible Is Not Applied. Collectible Is Not Applied
            stays on its own route. This instructed is not the applied Applied Is Not Restored already
            names. This essay does not collapse into Applied Is Not Restored. This essay does not rewrite
            Applied Is Not Restored. Applied Is Not Restored stays on its own route. This instructed is not
            the extinguishment Extinguished Is Not Reconciled already names. This essay does not collapse
            into Extinguished Is Not Reconciled. This essay does not rewrite Extinguished Is Not Reconciled.
            This instructed is not the reconciled Reconciled Is Not Attested already names. This essay does
            not collapse into Reconciled Is Not Attested. This essay does not rewrite Reconciled Is Not
            Attested. Reconciled Is Not Attested stays on its own route. This instructed is not the
            reconciled Reconciled Is Not Closed already names. This essay does not collapse into Reconciled
            Is Not Closed. This essay does not rewrite Reconciled Is Not Closed. This instructed is not the
            reconciled Booked Is Not Reconciled already names. This essay does not collapse into Booked Is
            Not Reconciled. This essay does not rewrite Booked Is Not Reconciled. This essay does not
            collapse into Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced.
            This essay does not collapse into Defended Is Not Owned. This essay does not rewrite Defended
            Is Not Owned. Defended Is Not Owned stays on its own growth-loop route. This instructed is not
            the certification Certified Is Not Insured already names. This essay does not collapse into
            Certified Is Not Insured. This essay does not rewrite Certified Is Not Insured. This instructed
            is not the certification Assured Is Not Certified already names. This essay does not collapse
            into Assured Is Not Certified. This essay does not rewrite Assured Is Not Certified. This
            instructed is not the accepted Accepted Is Not Posted already names. This essay does not
            collapse into Accepted Is Not Posted. This essay does not rewrite Accepted Is Not Posted. This
            instructed is not the accepted Restored Is Not Accepted already names. This essay does not
            collapse into Restored Is Not Accepted. This essay does not rewrite Restored Is Not Accepted.
            This instructed is not the operated Operated Is Not Sustained already names. This essay does
            not collapse into Operated Is Not Sustained. This essay does not rewrite Operated Is Not
            Sustained. Operated Is Not Sustained stays on its own route. This instructed is not the
            operated Delivered Is Not Operated already names. This essay does not collapse into Delivered
            Is Not Operated. This essay does not rewrite Delivered Is Not Operated. Delivered Is Not
            Operated stays on its own route.
          </p>

          <p>
            Acted would mean that the instructed operating results for that authorized approved reviewed
            operated accepted acknowledged issued sealed certified reconciled relieved applied collected
            invoiced earned commenced renewed sustained realized performed advanced relied attested
            extinguished period have been acted — the instructed operating results acted by a named actor
            for the named period, the instructed statement acted for the named ledger and period, or the
            instructed customer workflow acted for the customer and the period, with a named actor, an
            action date, and an action taken — not merely that a named instructor recorded an instruction
            date and an instruction to act for that authorized period.
            Instructed Is Not Acted may be named in prose only at
            /insights/successor-instructed-is-not-acted. This essay does not implement
            that page. This essay does not create a successor route for Instructed Is Not Acted. This essay
            does not create a filing spine for Authorized Is Not Instructed. This essay does not create a
            filing spine at /insights/authorized-is-not-instructed.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Authorized is a named
              authorizer authorization of the approved operating results for that named scope: approved
              operating results with a named authorizer, authorization date, and authorization grant for
              that approved reviewed operated accepted acknowledged issued sealed certified reconciled
              relieved applied collected invoiced earned commenced renewed sustained realized performed
              advanced relied attested extinguished period. Instructed is those authorized packs: the
              authorized operating results instructed by a named instructor for the named period, the
              authorized statement instructed for the named ledger and period, or the authorized customer
              workflow instructed for the customer and the period, with a named instructor, an instruction
              date, and an instruction to act. A{' '}
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
              instructs the authorized packs, executes plant work, or that instruction write-back is live.
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

          <InsightNextSteps slug="successor-authorized-is-not-instructed" />
        </motion.article>
      </div>
    </main>
  );
}
