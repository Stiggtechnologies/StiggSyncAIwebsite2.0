import {
  AimosBookingStatus,
  AimosExternalBookingBlock,
  PPAppointment,
} from './types';

export function mapStatus(ppStatus: string): AimosBookingStatus {
  const s = ppStatus.toLowerCase();
  if (['booked', 'confirmed', 'arrived', 'completed'].includes(s)) return 'booked';
  if (['cancelled', 'canceled'].includes(s)) return 'cancelled';
  if (['no-show', 'noshow', 'no_show'].includes(s)) return 'noshow';
  return 'unknown';
}

export function ppAppointmentToAimosBlock(
  a: PPAppointment,
  providerIdMap: Record<string, string>,
  nowIso: string,
): AimosExternalBookingBlock {
  const provider_id = providerIdMap[a.providerId];
  if (!provider_id) {
    throw new Error(`Unmapped PP providerId=${a.providerId} for appointment id=${a.id}`);
  }

  return {
    external_source: 'practice_perfect',
    external_id: a.id,
    external_updated_at: a.updatedAt,

    start_at: a.startAt,
    end_at: a.endAt,

    provider_id,
    location_id: a.locationId,

    status: mapStatus(a.status),

    last_synced_at: nowIso,
  };
}
