import type { Metadata } from 'next';
import { noindexMetadata } from '@/lib/seo';

export const metadata: Metadata = noindexMetadata('Salesforce', '/salesforce');

export default function SalesforceLayout({ children }: { children: React.ReactNode }) {
  return children;
}
