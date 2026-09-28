'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { InsightNextSteps } from '@/components/insights/InsightReading';
import { getInsightArticle } from '@/lib/insights';
import { fieldManual, fieldManualPath, honestyChapter, spineChapters } from '@/lib/manuals';
import { APP_SETUP_URL } from '@/lib/site-links';

const article = getInsightArticle('successor-commenced-is-not-earned');

export default function SuccessorCommencedIsNotEarnedPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Commenced Is Not Earned</h1>
            <p className="text-xl text-gray-400">
              Commenced is not earned. A commenced commercial outcome — work started under the renewed
              terms, coverage put in force for the new period, capital drawn and put to work, or the
              renewed commitment moved from paper into operating motion — is not the same as that
              commenced outcome having been earned for the renewed period (the started work has earned
              its fee or result, the in-force coverage has earned the new period, the drawn capital has
              earned its named return, or the operating motion has earned the renewed commitment) — not
              merely that work started, coverage was put in force, capital was drawn and put to work, or
              the renewed commitment moved from paper into operating motion.
            </p>
            <p className="text-xl text-gray-400">
              The prior split is{' '}
              <Link
                href="/insights/successor-renewed-is-not-commenced"
                className="text-[#3B82F6] hover:text-white transition-colors"
              >
                Renewed Is Not Commenced
              </Link>
              . Renewed Is Not Commenced already names the prior split. This essay does not rewrite that
              thesis. This essay does not give that commenced a new meaning. This essay starts from
              the commenced the successor-spine Renewed Is Not Commenced already names. This refusal sits on the commercial spine. This is the earning spine after
              that commencement. The prior essay is the commencement spine.
            </p>
          </header>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">
            The commenced practice is not the earned practice
          </h2>

          <p>
            Commenced means that renewed commercial outcome has been commenced into active execution —
            work started under the renewed terms, coverage put in force for the new period, capital
            drawn and put to work, or the renewed commitment moved from paper into operating motion —
            by an executed commencement instrument. Earned means that commenced commercial outcome has
            been earned for the renewed period — the started work has earned its fee or result, the
            in-force coverage has earned the new period, the drawn capital has earned its named return,
            or the operating motion has earned the renewed commitment — by an executed earning
            instrument. A commencement is not an earning. This split is commenced versus earned.
          </p>

          <p>
            Work started under the renewed terms with no fee or result earned is not earned. Coverage
            put in force for the new period with no new period earned is not earned. Capital drawn and
            put to work with no named return earned is not earned. Operating motion with no renewed
            commitment earned is not earned. Earning talk that says the outcome was commenced while the
            started work has not earned its fee or result, the in-force coverage has not earned the new
            period, the drawn capital has not earned its named return, or the operating motion has not
            earned the renewed commitment is not earned.
          </p>

          <p>
            A firm can be commenced and still not earned. A firm can chase earning theater and still not
            be commenced. A commencement package alone is not earned of that commenced successor
            outcome. Commenced cash or margin is not the same as an earned commercial outcome. The
            refusal is not merely that work started under the renewed terms, coverage was put in force
            for the new period, capital was drawn and put to work, or the renewed commitment moved from
            paper into operating motion.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">What an earned record is allowed to be</h2>

          <p>
            An executed earning instrument is a fee record that shows the started work earned its fee or
            result, an earned-period record that shows the in-force coverage earned the new period, a
            return record that shows the drawn capital earned its named return, a commitment-earned
            record that shows the operating motion earned the renewed commitment, or an earning binder
            that releases the commenced outcome as earned only when the started work has earned its fee
            or result, the in-force coverage has earned the new period, the drawn capital has earned its
            named return, and the operating motion has earned the renewed commitment are on the file.
          </p>

          <p>
            The earning record has to trail back to the commencement evidence, and the commencement
            evidence has to trail back to the renewal{' '}
            <Link
              href="/insights/successor-renewed-is-not-commenced"
              className="text-[#3B82F6] hover:text-white transition-colors"
            >
              Renewed Is Not Commenced
            </Link>{' '}
            already required. A fee that cannot name the started work, an earned period that cannot name
            the in-force coverage, a return that cannot name the drawn capital, or a commitment that
            cannot name the operating motion is earning theater. It is not this earned.
          </p>

          <h2 className="text-3xl font-bold text-white mt-12 mb-6">Named commenced is not earned</h2>

          <p>
            Named commenced is not earned. The commenced practice is not the earned practice. A
            commencement record answers whether work started under the renewed terms, coverage was put
            in force for the new period, capital was drawn and put to work, or the renewed commitment
            moved from paper into operating motion. An earning record answers whether that commenced
            outcome was earned for the renewed period. Commenced is not earned.
          </p>

          <p>
            A claim that commencement so it is earned, while the earning trail is missing, is not this
            earned. Work that started, coverage put in force, capital drawn and put to work, or a
            renewed commitment moved into operating motion, with no fee or result earned, no new period
            earned, no named return earned, and no renewed commitment earned, is earning theater, and it
            is not this commenced either when the commencement instrument is missing. An earning claim
            alone is not proof the named commencement evidence was on the file. Commencement evidence
            alone is not earned of that commenced successor outcome.
          </p>

          <p>
            Sync refuses to pretend commenced or earned is a status light. Sync does not deem earned for
            the customer. Sync must not auto-deem-earned. Sync must not treat commenced as earned as
            Learning credit. Evidence from the plant beats the commencement record when the record is
            being used as earned.
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
            keep this edition from treating a commencement record as earned for the renewed period.
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
            not claim that commenced is earned. It does not write a CMMS work order, book revenue,
            recognize revenue, or attribute a change in cash, risk, or capacity. Sync does not measure
            commenced. Sync does not measure earned. Sync does not measure commenced or earned for the
            customer.
          </p>

          <p>
            Keep this commercial earned distinct from Collected Is Not Recognized, Paid Is Not Settled,
            Settled Is Not Booked, Recognized Is Not Reported, ARR Is Not Cash, and Cash Is Not Margin.
            This earned is not the collected Collected Is Not Recognized already names. This earned is
            not the disbursement Paid Is Not Settled already names. This earned is not the settlement
            Settled Is Not Booked already names. This essay does not collapse into Binding Is Not
            Enforced. This essay does not rewrite Binding Is Not Enforced. This essay does not collapse
            into Defended Is Not Owned. This essay does not rewrite Defended Is Not Owned. Defended Is
            Not Owned stays on its own growth-loop route.
          </p>

          <p>
            Invoiced would mean that the earned commercial outcome has been invoiced for the renewed
            period — the earned fee or result has been billed, the earned coverage period has been
            billed as earned premium, the earned return has been billed against the named capital
            account, or the earned commitment has been billed under the renewed terms — not merely that
            the started work has earned its fee or result, the in-force coverage has earned the new
            period, the drawn capital has earned its named return, or the operating motion has earned
            the renewed commitment. Earned Is Not Invoiced may be named in prose only at
            /insights/successor-earned-is-not-invoiced. This essay does not implement that page. This
            essay does not create a successor route for Earned Is Not Invoiced. This essay does not
            create a filing spine for Commenced Is Not Earned. This essay does not create a filing spine
            at /insights/commenced-is-not-earned.
          </p>

          <div className="bg-gradient-to-b from-[#3B82F6]/10 to-transparent border border-[#3B82F6]/30 rounded-2xl p-8 my-12">
            <h3 className="text-xl font-bold text-white mb-4">Read the case, then bring a question</h3>
            <p className="text-gray-400 mb-6">
              Field Manual {fieldManual.version} states the order and the boundaries. Commenced is work
              started under the renewed terms, coverage put in force for the new period, capital drawn
              and put to work, or the renewed commitment moved from paper into operating motion. Earned
              is that commenced outcome earned for the renewed period. A{' '}
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
              earns the renewed period, executes plant work, or that billing write-back is live.
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

          <InsightNextSteps slug="successor-commenced-is-not-earned" />
        </motion.article>
      </div>
    </main>
  );
}
