import type { Metadata } from 'next';

const title = 'FRACAS Is Not a Decision System';
const description =
  'Closing the loop from failure code to approved action — why codes alone do not change reliability outcomes.';
const url = 'https://syncai.ca/insights/fracas-is-not-a-decision-system';

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'FRACAS',
    'mining reliability',
    'failure codes',
    'corrective action',
    'governed decisions',
    'reliability engineering',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: `${title} | SyncAI`,
    description,
    url,
    siteName: 'SyncAI',
    type: 'article',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | SyncAI`,
    description,
    images: ['/og-image.png'],
  },
};

export default function FracasArticleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
