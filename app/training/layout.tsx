import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Reliability Training',
  description:
    'Role-based reliability training for planners and supervisors, superintendents and managers, and technicians and operators. In-house, virtual or open enrollment. Vendor-neutral.',
  path: '/training',
});

export default function TrainingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
