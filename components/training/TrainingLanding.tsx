import Link from 'next/link';
import TrainingInquiryForm from '@/components/training/TrainingInquiryForm';
import {
  FOUNDING_CLIENT_NOTE,
  TRAINING_CONTACT_EMAIL,
  TRAINING_VENDOR_NEUTRAL,
  trainingOffers,
  type TrainingOffer,
} from '@/lib/training-offers';

export default function TrainingLanding({ offer }: { offer: TrainingOffer }) {
  const others = trainingOffers.filter((o) => o.slug !== offer.slug);

  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">{offer.audienceLabel}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            {offer.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-slate-400">{offer.lede}</p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">{TRAINING_VENDOR_NEUTRAL}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#request"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
            >
              Request a 20-minute call
            </a>
            <a
              href="#pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/15 px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.05]"
            >
              See formats and pricing
            </a>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Who it is for</p>
            <div className="mt-5 space-y-4">
              {offer.whoFor.map((line) => (
                <p key={line} className="text-base leading-7 text-slate-400">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{offer.formatLabel}</p>
            <ul className="mt-5 grid gap-3">
              {offer.leaveWith.map((item) => (
                <li key={item} className="rounded-lg border border-white/10 bg-white/[0.02] p-5 text-sm leading-6 text-slate-200">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-5 text-slate-500">
              No savings are promised. Value depends on your data and what you do with it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">{offer.agendaTitle}</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
            {offer.agendaIntro}
          </h2>
          <div className="mt-10 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-white/[0.04] text-slate-300">
                <tr>
                  <th className="px-5 py-3 font-semibold">Time</th>
                  <th className="px-5 py-3 font-semibold">Module</th>
                  <th className="px-5 py-3 font-semibold">Exercise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-400">
                {offer.agenda.map((row) => (
                  <tr key={row.time}>
                    <td className="whitespace-nowrap px-5 py-4 text-slate-300">{row.time}</td>
                    <td className="px-5 py-4 text-slate-200">{row.module}</td>
                    <td className="px-5 py-4">{row.exercise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">How it works</p>
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {offer.howItWorks.map((item) => (
              <li key={item} className="rounded-lg border border-white/10 bg-white/[0.02] p-5 text-sm leading-6 text-slate-300">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="pricing" className="border-b border-white/10 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Format and price</p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-400">{FOUNDING_CLIENT_NOTE}</p>
          <div className="mt-8 overflow-x-auto rounded-xl border border-white/10">
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead className="bg-white/[0.04] text-slate-300">
                <tr>
                  <th className="px-5 py-3 font-semibold">Option</th>
                  <th className="px-5 py-3 font-semibold">Group size</th>
                  <th className="px-5 py-3 font-semibold">Length</th>
                  <th className="px-5 py-3 font-semibold">Price (CAD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-400">
                {offer.prices.map((row) => (
                  <tr key={row.option}>
                    <td className="px-5 py-4 text-slate-200">{row.option}</td>
                    <td className="px-5 py-4">{row.group}</td>
                    <td className="px-5 py-4">{row.length}</td>
                    <td className="px-5 py-4 text-slate-200">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {offer.priceNote ? <p className="mt-6 max-w-3xl text-sm leading-6 text-slate-400">{offer.priceNote}</p> : null}
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">{offer.included}</p>
        </div>
      </section>

      <section id="request" className="scroll-mt-24 border-b border-white/10 bg-[#0A131C]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Next step</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
              {offer.nextStep}
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-400">
              Or email{' '}
              <a href={`mailto:${TRAINING_CONTACT_EMAIL}`} className="font-semibold text-cyan-300 hover:text-cyan-200">
                {TRAINING_CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#0B151F] p-6 sm:p-8">
            <TrainingInquiryForm offerTitle={offer.title} />
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Other sessions</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={o.path}
                className="inline-flex min-h-11 items-center rounded-md border border-white/15 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/[0.05]"
              >
                {o.shortName}
              </Link>
            ))}
            <Link
              href="/training"
              className="inline-flex min-h-11 items-center px-3 py-2.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
            >
              All training →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
