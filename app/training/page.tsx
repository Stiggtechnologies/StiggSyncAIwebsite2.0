import Link from 'next/link';
import { FOUNDING_CLIENT_NOTE, TRAINING_VENDOR_NEUTRAL, trainingOffers } from '@/lib/training-offers';

const startingFrom: Record<string, string> = {
  'planners-supervisors': 'From $5,500 virtual · $7,500 in-house · $695 per open-enrollment seat',
  'superintendents-managers': 'From $2,500 virtual · $3,500 in-house',
  'technicians-operators': 'From $3,000 virtual · $4,500 in-house',
};

export default function TrainingHubPage() {
  return (
    <main className="bg-[#111214] pt-20 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold text-cyan-300">Reliability training</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            Reliability training for every role on site.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-[1.7] text-slate-400">
            Three practical sessions built around what each role actually does: the people who plan
            and schedule the work, the leaders who approve it, and the crews who do it. Run in-house
            at your site, live online, or as open-enrollment seats.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-500">{TRAINING_VENDOR_NEUTRAL}</p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#151618]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {trainingOffers.map((offer) => (
              <article key={offer.slug} className="flex flex-col rounded-xl border border-white/10 bg-[#17181B] p-7">
                <p className="text-xs font-semibold text-cyan-300">{offer.audienceLabel}</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-white">{offer.title}</h2>
                <p className="mt-4 flex-1 text-sm leading-7 text-slate-400">{offer.lede}</p>
                <p className="mt-5 text-sm font-semibold text-slate-200">{startingFrom[offer.slug]}</p>
                <Link
                  href={offer.path}
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
                >
                  See the session
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-6 text-slate-500">{FOUNDING_CLIENT_NOTE}</p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
            Booking all three roles at one site: the planners and supervisors session, one crew
            session and the leadership briefing in one visit is $14,500 CAD plus travel at cost.
          </p>
        </div>
      </section>
    </main>
  );
}
