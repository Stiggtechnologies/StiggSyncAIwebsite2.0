import { PracticePerfectConnector } from './ppConnector';
import { AimosRepository } from './aimosRepo';
import { ppAppointmentToAimosBlock } from './transform';

export interface SyncJobOptions {
  cursorKey: string; // e.g. 'pp_appointments'
  from: string; // ISO
  to: string; // ISO
  safetyOverlapMinutes?: number; // default 120
}

/**
 * Pull PP appointments and upsert as external booking blocks in AIMOS.
 *
 * Key properties:
 * - idempotent upserts
 * - cursor only advances after successful processing
 * - safety overlap window to handle out-of-order updates
 */
export async function runSyncJob(
  pp: PracticePerfectConnector,
  aimos: AimosRepository,
  opts: SyncJobOptions,
): Promise<{ fetched: number; upserted: number; newCursor: string | null }> {
  const nowIso = new Date().toISOString();

  const providerMap = await aimos.loadProviderIdMap();
  const currentCursor = await aimos.getSyncCursor(opts.cursorKey);

  const overlapMin = opts.safetyOverlapMinutes ?? 120;
  const updatedSince = currentCursor
    ? new Date(new Date(currentCursor).getTime() - overlapMin * 60_000).toISOString()
    : undefined;

  const appts = await pp.listAppointments({
    from: opts.from,
    to: opts.to,
    updatedSince,
  });

  const blocks = appts.map((a) => ppAppointmentToAimosBlock(a, providerMap, nowIso));

  const { upserted } = await aimos.upsertExternalBlocks(blocks);

  // Advance cursor to max updatedAt seen.
  let maxUpdatedAt: string | null = null;
  for (const a of appts) {
    if (!a.updatedAt) continue;
    if (!maxUpdatedAt || new Date(a.updatedAt) > new Date(maxUpdatedAt)) maxUpdatedAt = a.updatedAt;
  }

  if (maxUpdatedAt) {
    await aimos.setSyncCursor(opts.cursorKey, maxUpdatedAt);
  }

  return { fetched: appts.length, upserted, newCursor: maxUpdatedAt };
}
