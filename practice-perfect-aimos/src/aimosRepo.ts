import { AimosExternalBookingBlock } from './types';

/**
 * Storage abstraction for AIMOS. In production this would be:
 * - Supabase client
 * - Postgres driver
 * - internal AIMOS service call
 */
export interface AimosRepository {
  upsertExternalBlocks(blocks: AimosExternalBookingBlock[]): Promise<{ upserted: number }>; // idempotent by (external_source, external_id)
  loadProviderIdMap(): Promise<Record<string, string>>; // PP providerId -> AIMOS provider_id
  getSyncCursor(key: string): Promise<string | null>; // ISO string
  setSyncCursor(key: string, cursorIso: string): Promise<void>;
}

/**
 * Conflict check used by booking UI/service.
 * This is provided as logic scaffold (actual overlap queries happen in DB).
 */
export function overlaps(aStart: Date, aEnd: Date, bStart: Date, bEnd: Date): boolean {
  return aStart < bEnd && bStart < aEnd;
}
