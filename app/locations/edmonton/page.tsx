import type { Metadata } from 'next';
import Link from 'next/link';
import { pageMetadata, SITE_URL } from '@/lib/seo';

/**
 * Edmonton office page — DRAFT.
 *
 * Every field is verified or null (= UNKNOWN, not rendered). Do not fill a null with a guess.
 *  - Premises: signed AIM lease (Suite 100, 4936 87 Street NW, Edmonton) + albertainjurymanagement.ca (T6E 5W3).
 *  - Email: syncai.ca contact.
 *
 * Launch requires Orville's approval AND: landlord consent for Stigg Security Inc. (SyncAI is its trade
 * name) to occupy part of Suite 100; a decision on phone/hours; flipping LAUNCH_READY.
 * Google Business Profile is NOT recommended for SyncAI (remote/online delivery) — this page is the
 * office reference for people and search, not a GBP landing page.
 */
const LAUNCH_READY = false;

const OFFICE = {
  showStreetAddress: false,
  streetAddress: '4936 87 Street NW, Suite 100',
  locality: 'Edmonton',
  region: 'AB',
  postalCode: 'T6E 5W3',
  country: 'CA',
  telephone: null as string | null, // UNKNOWN
  hours: null as string | null, // UNKNOWN
  email: 'info@syncai.ca',
};

const PATH = '/locations/edmonton';

export const metadata: Metadata = pageMetadata({
  title: 'Edmonton',
  description:
    'SyncAI in Edmonton, Alberta: governed industrial intelligence for reliability and maintenance teams in mining, energy, and oil and gas.',
  path: PATH,
  index: LAUNCH_READY,
});

function officeSchema() {
  const address: Record<string, string> = {
    '@type': 'PostalAddress',
    addressLocality: OFFICE.locality,
    addressRegion: OFFICE.region,
    addressCountry: OFFICE.country,
  };
  if (OFFICE.showStreetAddress) {
    address.streetAddress = OFFICE.streetAddress;
    address.postalCode = OFFICE.postalCode;
  }
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SyncAI',
    url: `${SITE_URL}${PATH}`,
    email: OFFICE.email,
    address,
    parentOrganization: { '@type': 'Organization', name: 'Stigg' },
  };
  if (OFFICE.telephone) schema.telephone = OFFICE.telephone;
  return schema;
}

const offers = [
  {
    title: 'Reliability Intelligence Assessment',
    body: 'A bounded 6–8 week assessment built from customer-provided exports, with evidence-graded findings and a 90-day action plan.',
    href: '/reliability-assessment',
  },
  {
    title: 'Strategic Pilot',
    body: 'A governed deployment around one defined reliability or maintenance decision, with explicit evidence boundaries and outcome verification.',
    href: '/strategic-pilot',
  },
];

export default function EdmontonPage() {
  return (
    <main className="bg-[#081018] pt-20 text-slate-100">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(officeSchema()) }} />
      {!LAUNCH_READY ? (
        <div className="bg-amber-300 px-4 py-2 text-center text-sm font-semibold text-slate-950">
          DRAFT — Edmonton page not approved for publication.
        </div>
      ) : null}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Edmonton</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-white sm:text-6xl">
            SyncAI in Edmonton
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-[1.7] text-slate-400">
            SyncAI is governed industrial intelligence for reliability and maintenance teams in mining, energy, and oil
            and gas. It connects approved knowledge, asset context, work history, and operating evidence so engineers can
            investigate failures, prioritize work, and route recommendations through named human approval. SyncAI is a
            product of Stigg.
          </p>
        </div>
      </section>

      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-16 md:grid-cols-2 lg:px-8">
          {offers.map((offer) => (
            <Link
              key={offer.title}
              href={offer.href}
              className="rounded-xl border border-white/10 bg-[#0B151F] p-6 hover:bg-white/[0.04]"
            >
              <h2 className="text-xl font-semibold text-white">{offer.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{offer.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <h2 className="text-2xl font-semibold text-white">Edmonton office</h2>
          <address className="mt-4 not-italic leading-7 text-slate-300">
            SyncAI (a trade name of Stigg Security Inc.)
            <br />
            {OFFICE.showStreetAddress ? (
              <>
                {OFFICE.streetAddress}
                <br />
                {OFFICE.locality}, {OFFICE.region} {OFFICE.postalCode}
              </>
            ) : (
              <>
                {OFFICE.locality}, {OFFICE.region}
              </>
            )}
            <br />
            {OFFICE.telephone ? (
              <>
                <a href={`tel:${OFFICE.telephone}`} className="text-cyan-300 hover:text-cyan-200">
                  {OFFICE.telephone}
                </a>
                <br />
              </>
            ) : null}
            <a href={`mailto:${OFFICE.email}`} className="text-cyan-300 hover:text-cyan-200">
              {OFFICE.email}
            </a>
            {OFFICE.hours ? (
              <>
                <br />
                {OFFICE.hours}
              </>
            ) : null}
          </address>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-200"
          >
            Contact SyncAI
          </Link>
        </div>
      </section>
    </main>
  );
}
