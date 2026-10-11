import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { webinarDraftEnabled } from '@/lib/webinar';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  if (!webinarDraftEnabled(process.env)) return new Response(null, { status: 404 });
  try {
    const bytes = await readFile(join(process.cwd(), 'assets/webinars/SyncAI-Pilot-Readiness-Checklist-v1.pdf'));
    return new Response(new Uint8Array(bytes), { headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="SyncAI-Pilot-Readiness-Checklist-v1.pdf"',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow',
      'X-Content-Type-Options': 'nosniff',
    } });
  } catch {
    return new Response('Checklist temporarily unavailable.', { status: 503, headers: { 'Cache-Control': 'no-store', 'X-Robots-Tag': 'noindex, nofollow' } });
  }
}
