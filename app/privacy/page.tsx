import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How SyncAI handles website, inquiry, assessment, and analytics data.',
  alternates: { canonical: 'https://syncai.ca/privacy' },
};

const sections = [
  {
    title: 'Information you provide',
    body: [
      'When you contact SyncAI, request a Reliability Intelligence Assessment, or apply for a Strategic Pilot, we may collect your name, work email, company, role, operating scope, and the business context you choose to provide.',
      'Public website forms are not intended for confidential maintenance records, credentials, production data, personal health information, or other sensitive operational datasets. Data-transfer requirements for an assessment or deployment are agreed separately.',
    ],
  },
  {
    title: 'How we use information',
    body: [
      'We use submitted information to respond to inquiries, qualify assessment and pilot requests, deliver requested services, maintain business records, improve the website and product experience, and protect the security and integrity of our services.',
      'We do not sell personal information to advertisers.',
    ],
  },
  {
    title: 'Service providers',
    body: [
      'SyncAI uses service providers for website hosting, database and application infrastructure, email delivery, and related operational functions. Those providers process information only as needed to provide the relevant service to SyncAI.',
      'Optional analytics or advertising measurement providers are activated only after website analytics consent is granted. The exact providers enabled may vary by environment and campaign configuration.',
    ],
  },
  {
    title: 'Cookies and analytics',
    body: [
      'Necessary website functions operate without optional analytics consent. If you choose “Allow analytics,” SyncAI may load configured Google Analytics, Google Ads, and LinkedIn measurement tags. If you choose “Necessary only,” those optional third-party measurement tags are not loaded.',
      'Your analytics choice is stored in your browser. You can reset it by clearing site data for syncai.ca and revisiting the website.',
    ],
  },
  {
    title: 'Data retention',
    body: [
      'We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to maintain appropriate business records, resolve disputes, meet contractual obligations, and comply with applicable legal requirements.',
      'Retention periods may differ between a simple website inquiry, an assessment engagement, and an enterprise deployment.',
    ],
  },
  {
    title: 'Security',
    body: [
      'SyncAI uses technical and organizational safeguards appropriate to the information and environment involved. Public website forms are deliberately separated from governed customer data-transfer workflows.',
      'Security controls, hosting configurations, certifications, data residency, and deployment representations for a customer engagement are described against the actual environment and agreed scope. SyncAI does not represent a third-party certification as achieved unless it is formally current.',
    ],
  },
  {
    title: 'Your choices and requests',
    body: [
      'You may ask us to access, correct, or delete personal information we hold about you, subject to applicable contractual, legal, security, and record-keeping requirements. You may also opt out of marketing communications at any time.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#081018] pt-16 text-slate-100">
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">Privacy</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-white">Privacy Policy</h1>
          <p className="mt-5 text-sm text-slate-500">Last updated: August 2026</p>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            This policy explains how SyncAI handles information submitted through the public website and how optional website analytics are controlled.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl divide-y divide-white/10 px-6 py-12 lg:px-8">
          {sections.map((section) => (
            <div key={section.title} className="py-8 first:pt-0">
              <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400">
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </div>
          ))}

          <div className="py-8">
            <h2 className="text-2xl font-semibold text-white">Contact</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Privacy questions or requests can be sent to{' '}
              <a href="mailto:privacy@syncai.ca" className="font-medium text-cyan-300 hover:text-cyan-200">privacy@syncai.ca</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
