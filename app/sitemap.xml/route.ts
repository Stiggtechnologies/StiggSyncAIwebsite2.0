import { getSitemapXml } from '@/lib/sitemap';

export const dynamic = 'force-static';
export const revalidate = 3600;
export const runtime = 'nodejs';

const headers = {
  'Content-Type': 'application/xml; charset=utf-8',
  'Cache-Control': 'public, max-age=0, s-maxage=3600, must-revalidate',
  'X-Content-Type-Options': 'nosniff',
};

export function GET() {
  return new Response(getSitemapXml(), { status: 200, headers });
}
