/**
 * Example Edge Function handler (pseudo).
 *
 * Adapt to your runtime:
 * - Supabase Edge Functions (Deno)
 * - Vercel Edge
 * - Cloudflare Workers
 *
 * This is Node/TS-flavored pseudocode to show wiring.
 */

import { PracticePerfectApiConnector } from './ppConnector';
import { runSyncJob } from './syncJob';
import { AimosRepository } from './aimosRepo';

// Replace with real implementation.
const aimosRepo: AimosRepository = {
  async upsertExternalBlocks(blocks) {
    console.log('upsertExternalBlocks', blocks.length);
    return { upserted: blocks.length };
  },
  async loadProviderIdMap() {
    // TODO: load from DB table mapping pp_provider_id -> aimos_provider_id
    return {};
  },
  async getSyncCursor(_key) {
    return null;
  },
  async setSyncCursor(_key, _cursorIso) {
    return;
  },
};

export async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST' && req.method !== 'GET') {
    return new Response('Method Not Allowed', { status: 405 });
  }

  const PP_BASE_URL = process.env.PP_BASE_URL!;
  const PP_TOKEN = process.env.PP_TOKEN!;

  const pp = new PracticePerfectApiConnector({
    baseUrl: PP_BASE_URL,
    token: PP_TOKEN,
  });

  // Typical window: today -> +90 days.
  const from = new Date().toISOString();
  const to = new Date(Date.now() + 90 * 24 * 60 * 60_000).toISOString();

  try {
    const result = await runSyncJob(pp, aimosRepo, {
      cursorKey: 'pp_appointments',
      from,
      to,
      safetyOverlapMinutes: 120,
    });

    return Response.json({ ok: true, ...result });
  } catch (e: any) {
    console.error(e);
    return Response.json({ ok: false, error: String(e?.message ?? e) }, { status: 500 });
  }
}
