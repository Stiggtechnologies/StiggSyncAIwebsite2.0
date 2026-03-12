export type IsoDateTime = string; // ISO-8601, e.g. 2026-02-23T22:00:00Z

export type PPAppointmentStatus =
  | 'booked'
  | 'confirmed'
  | 'arrived'
  | 'completed'
  | 'cancelled'
  | 'noshow'
  | string;

// Shape is intentionally loose: we don't have official public API docs.
export interface PPAppointment {
  id: string;
  startAt: IsoDateTime;
  endAt: IsoDateTime;
  providerId: string;
  locationId?: string;
  status: PPAppointmentStatus;
  updatedAt: IsoDateTime;

  // Optional fields (avoid PHI unless needed)
  clientId?: string;
  appointmentTypeId?: string;
}

export type AimosBookingStatus = 'booked' | 'cancelled' | 'noshow' | 'unknown';

export interface AimosExternalBookingBlock {
  external_source: 'practice_perfect';
  external_id: string;
  external_updated_at: IsoDateTime;

  start_at: IsoDateTime;
  end_at: IsoDateTime;

  provider_id: string;
  location_id?: string;

  status: AimosBookingStatus;

  // operational
  last_synced_at: IsoDateTime;
}

export interface SyncCursorState {
  cursorUpdatedAt: IsoDateTime;
}
