import { PPAppointment } from './types';

export interface ListAppointmentsParams {
  from: string; // ISO datetime
  to: string; // ISO datetime
  updatedSince?: string; // ISO datetime cursor
  pageSize?: number;
}

/**
 * Connector interface so we can swap API vs CSV vs DB.
 */
export interface PracticePerfectConnector {
  listAppointments(params: ListAppointmentsParams): Promise<PPAppointment[]>;
}

/**
 * Placeholder API connector.
 *
 * NOTE: We do NOT have official public Practice Perfect API docs yet.
 * This class is written as a scaffold and must be adapted once PP provides:
 * - base URL
 * - auth method
 * - exact endpoint paths + payload shape
 */
export class PracticePerfectApiConnector implements PracticePerfectConnector {
  constructor(
    private opts: {
      baseUrl: string;
      token: string; // could be OAuth access token or API key
      fetchImpl?: typeof fetch;
    },
  ) {}

  async listAppointments(params: ListAppointmentsParams): Promise<PPAppointment[]> {
    const fetchImpl = this.opts.fetchImpl ?? fetch;

    // Hypothetical endpoint; replace with vendor-provided.
    const url = new URL('/api/appointments', this.opts.baseUrl);
    url.searchParams.set('from', params.from);
    url.searchParams.set('to', params.to);
    if (params.updatedSince) url.searchParams.set('updated_since', params.updatedSince);
    if (params.pageSize) url.searchParams.set('page_size', String(params.pageSize));

    const res = await fetchImpl(url.toString(), {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        // could be Bearer, could be X-API-Key; adapt once confirmed
        'authorization': `Bearer ${this.opts.token}`,
      },
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      throw new Error(`PP listAppointments failed: ${res.status} ${res.statusText} ${body}`);
    }

    const json = (await res.json()) as any;

    // Adapt mapping once PP response shape is known.
    const items: any[] = Array.isArray(json) ? json : json?.items ?? [];

    return items.map((a) => ({
      id: String(a.id ?? a.appointment_id),
      startAt: String(a.startAt ?? a.start_at ?? a.start_datetime),
      endAt: String(a.endAt ?? a.end_at ?? a.end_datetime),
      providerId: String(a.providerId ?? a.provider_id ?? a.practitioner_id),
      locationId: a.locationId ?? a.location_id,
      status: String(a.status ?? 'unknown'),
      updatedAt: String(a.updatedAt ?? a.updated_at ?? a.last_modified ?? a.modified_at),
      clientId: a.clientId ?? a.client_id,
      appointmentTypeId: a.appointmentTypeId ?? a.appointment_type_id,
    }));
  }
}

/**
 * Fallback connector for CSV-based exports.
 * Provide the CSV parsing & column mapping once we know the export format.
 */
export class PracticePerfectCsvConnector implements PracticePerfectConnector {
  constructor(
    private opts: {
      loadCsvText: (from: string, to: string) => Promise<string>; // e.g., from SFTP/inbox
      parse: (csvText: string) => PPAppointment[];
    },
  ) {}

  async listAppointments(params: ListAppointmentsParams): Promise<PPAppointment[]> {
    const csvText = await this.opts.loadCsvText(params.from, params.to);
    const all = this.opts.parse(csvText);

    // Emulate incremental sync.
    if (!params.updatedSince) return all;
    const since = new Date(params.updatedSince).getTime();
    return all.filter((a) => new Date(a.updatedAt).getTime() > since);
  }
}
