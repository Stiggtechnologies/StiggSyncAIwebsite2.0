'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-earned-is-not-invoiced');

export default function SuccessorEarnedIsNotInvoicedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Earned Is Not Invoiced</h1>
            <p className="text-xl text-gray-400">
              Earned is not invoiced. An earned commercial outcome — the started work has earned its fee
              or result, the in-force coverage has earned the new period, the drawn capital has earned
              its named return, or the operating motion has earned the renewed commitment — is not the
              same as that earned outcome having been invoiced (the fee billed, the premium billed for
              the earned period, the return billed or called as due, or the earned commitment presented
              as a receivable) — not merely that the work, coverage, capital, or operating motion earned
              its named result.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-commenced-is-not-earned"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Commenced Is Not Earned
              </Link>
              . Commenced Is Not Earned already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that earned a new meaning. This essay starts from the
              earned the successor-spine Commenced Is Not Earned already names. This refusal sits on the
              commercial spine. This is the invoicing spine after that earning. The prior essay is the
              earning spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The earned practice is not the invoiced practice
          </h2>

          <p>
            Earned means that commenced commercial outcome has been earned for the renewed period — the
            started work has earned its fee or result, the in-force coverage has earned the new period,
            the drawn capital has earned its named return, or the operating motion has earned the
            renewed commitment — by an executed earning instrument. Invoiced means that earned commercial
            outcome has been invoiced — the fee billed, the premium billed for the earned period, the
            return billed or called as due, or the earned commitment presented as a receivable — by an
            executed invoicing instrument. An earning is not an invoicing. This split is earned versus
            invoiced.
          </p>

          <p>
            An earned fee or result with no fee billed is not invoiced. An earned coverage period with
            no premium billed for the earned period is not invoiced. An earned return with no return
            billed or called as due is not invoiced. An earned commitment with no receivable presented
            is not invoiced. Invoicing talk that says the outcome was earned while the fee has not been
            billed, the premium has not been billed for the earned period, the return has not been
            billed or called as due, or the earned commitment has not been presented as a receivable is
            not invoiced.
          </p>

          <p>
            A firm can be earned and still not invoiced. A firm can chase invoicing theater and still
            not be earned. An earning package alone is not invoiced of that earned successor outcome.
            Earned cash or margin is not the same as an invoiced commercial outcome. The refusal is not
            merely that the work, coverage, capital, or operating motion earned its named result.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What an invoiced record is allowed to be</h2>

          <p>
            An executed invoicing instrument is a fee invoice that shows the earned fee was billed, a
            premium invoice that shows the premium was billed for the earned period, a return call that
            shows the earned return was billed or called as due, a receivable record that shows the
            earned commitment was presented as a receivable, or an invoicing binder that releases the
            earned outcome as invoiced only when the fee billed, the premium billed for the earned
            period, the return billed or called as due, and the earned commitment presented as a
            receivable are on the file.
          </p>

          <p>
            The invoicing record has to trail back to the earning evidence, and the earning evidence has
            to trail back to the commencement{' '}
            <Link
              href="/insights/successor-commenced-is-not-earned"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Commenced Is Not Earned
            </Link>{' '}
            already required. A fee invoice that cannot name the earned fee, a premium invoice that
            cannot name the earned period, a return call that cannot name the earned return, or a
            receivable that cannot name the earned commitment is invoicing theater. It is not this
            invoiced.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named earned is not invoiced</h2>

          <p>
            Named earned is not invoiced. The earned practice is not the invoiced practice. An earning
            record answers whether the started work has earned its fee or result, the in-force coverage
            has earned the new period, the drawn capital has earned its named return, or the operating
            motion has earned the renewed commitment. An invoicing record answers whether that earned
            outcome was invoiced. Earned is not invoiced.
          </p>

          <p>
            A claim that earning so it is invoiced, while the invoicing trail is missing, is not this
            invoiced. A fee or result earned, a new period earned, a named return earned, or a renewed
            commitment earned, with no fee billed, no premium billed for the earned period, no return
            billed or called as due, and no earned commitment presented as a receivable, is invoicing
            theater, and it is not this earned either when the earning instrument is missing. An
            invoicing claim alone is not proof the named earning evidence was on the file. Earning
            evidence alone is not invoiced of that earned successor outcome.
          </p>

          <p>
            Sync refuses to pretend earned or invoiced is a status light. Sync does not deem invoiced
            for the customer. Sync must not auto-deem-invoiced. Sync must not treat earned as invoiced
            as Learning credit. Evidence from the plant beats the earning record when the record is
            being used as invoiced.
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
            keep this edition from treating an earning record as invoiced.
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
            not claim that earned is invoiced. It does not write a CMMS work order, book revenue,
            recognize revenue, issue an invoice, or attribute a change in cash, risk, or capacity. Sync
            does not measure earned. Sync does not measure invoiced. Sync does not measure earned or
            invoiced for the customer.
          </p>

          <p>
            Keep this commercial invoiced distinct from Collected Is Not Recognized, Paid Is Not
            Settled, Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is
            Not Margin. This invoiced is not the collected Collected Is Not Recognized already names.
            This invoiced is not the disbursement Paid Is Not Settled already names. This invoiced is
            not the settlement Settled Is Not Booked already names. This essay does not collapse into
            Binding Is Not Enforced. This essay does not rewrite Binding Is Not Enforced. This essay
            does not collapse into Defended Is Not Owned. This essay does not rewrite Defended Is Not
            Owned. Defended Is Not Owned stays on its own growth-loop route.
          </p>

          <p>
            Collected would mean that the invoiced commercial outcome has been collected — the billed
            fee received, the premium billed for the earned period collected, the return billed or
            called as due received, or the receivable collected — not merely that the fee was billed,
            the premium was billed for the earned period, the return was billed or called as due, or
            the earned commitment was presented as a receivable. Invoiced Is Not Collected may be named in prose only at
            /insights/successor-invoiced-is-not-collected. This essay does not implement that page. This
            essay does not create a successor route for Invoiced Is Not Collected. This essay does not
            create a filing spine for Earned Is Not Invoiced. This essay does not create a filing spine
            at /insights/earned-is-not-invoiced.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Earned is the
              started work having earned its fee or result, the in-force coverage having earned the new
              period, the drawn capital having earned its named return, or the operating motion having
              earned the renewed commitment. Invoiced is that earned outcome billed: the fee billed, the
              premium billed for the earned period, the return billed or called as due, or the earned
              commitment presented as a receivable. A{' '}
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
              invoices the earned outcome, executes plant work, or that billing write-back is live.
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

          <InsightNextSteps slug="successor-earned-is-not-invoiced" />
        </motion.article>
      </div>
    </main>
  );
}
