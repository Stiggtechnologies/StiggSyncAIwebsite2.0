# Practice Perfect → AIMOS: Integration Architecture

## Goals & constraints (transition period)

- **Primary goal:** AIMOS scheduler must treat PP-booked times as **unavailable** to prevent double booking.
- **Latency:** near-real-time; **max 15–30 minutes**.
- **Direction:** **one-way read** (PP → AIMOS) initially.
- **Future:** evolve to two-way or full cutover to AIMOS.

## Canonical approach: “External Booking Blocks”

Model PP appointments in AIMOS as *blocks* (or bookings with an `external_source = 'practice_perfect'`) so AIMOS scheduling UI can:
- show time is taken
- avoid creating conflicting AIMOS-native appointments
- optionally display a limited label (e.g., “Booked (PP)”) without exposing PHI

### Key technical requirements
- Stable **external ID** per PP appointment (or a deterministic hash) to allow idempotent upserts.
- Provider/resource mapping: PP practitioner → AIMOS provider/resource.
- Status mapping: created/changed/cancelled.
- Incremental sync (cursor-based) and/or webhooks.

---

## Option A — Preferred: Real-time (or near-real-time) API sync

### Flow
1. Scheduler in PP changes (create/update/cancel).
2. Either:
   - PP sends a **webhook event** to our ingestion endpoint, or
   - our job polls `updated_since` every 5–15 minutes.
3. Ingestion transforms PP appointment → AIMOS booking/block record.
4. Upsert into AIMOS `crm_bookings` (or dedicated `external_bookings` table) with:
   - `external_source = 'practice_perfect'`
   - `external_id = <ppAppointmentId>`
   - `start_at`, `end_at`, `provider_id`, `location_id`
   - `status`
   - `last_seen_at`, `source_updated_at`

### Pros
- Meets the 15–30 min SLA reliably.
- Clear audit trail (events + last sync markers).
- Minimal manual work.

### Cons / dependencies
- Requires **official PP API or webhook support**.
- Requires secure credential storage and PHI governance.

### Recommended when
- PP provides an API (even read-only) and incremental queries.

---

## Option B — Fallback: Scheduled CSV export/import (every 15 minutes)

### Flow
1. PP produces a report/export of appointments for a date range (e.g., today → +90 days).
2. Export delivered via one of:
   - SFTP drop
   - secure email attachment to an inbox we control
   - “download URL” (signed) if PP offers it
3. Our importer parses CSV, normalizes, and upserts into AIMOS.

### Pros
- Works even if no API.
- Simple to reason about.

### Cons
- Harder to guarantee 15-minute cadence unless PP supports scheduled exports.
- Exports can be large (reprocessing same rows repeatedly).
- Cancellation/edits must be expressed in CSV (needs stable IDs + updated timestamps).

### Recommended when
- PP cannot provide an API, but can provide **frequent exports** including stable IDs and last-modified timestamp.

---

## Option C — Direct DB access (only if self-hosted / vendor-supported)

### Flow
1. Read-only DB user granted to PP database.
2. Query appointment tables incrementally (`last_modified > cursor`).
3. Transform + upsert into AIMOS.

### Pros
- Fast and flexible.
- Can be near real-time.

### Cons
- Often **not available** in SaaS.
- Schema changes can break sync.
- Higher compliance risk; must avoid unnecessary PHI extraction.

### Recommended when
- PP is deployed on-prem / Wired Client with supported, documented DB access.

---

## Recommendation

1. **Pursue Option A** (API sync) with one-way PP → AIMOS blocking.
2. Build the pipeline with a **connector interface** so we can swap PP connectivity:
   - API connector (preferred)
   - CSV connector (fallback)
   - DB connector (only if supported)
3. Store only what AIMOS needs to prevent conflicts (time/provider/status), minimize PHI.

---

## Data model suggestion in AIMOS

### Minimal approach (in `crm_bookings`)
Add/ensure these columns:
- `external_source` (text) — `'practice_perfect'`
- `external_id` (text) — PP appointment ID
- `external_updated_at` (timestamptz)
- `status` (enum/text)
- `start_at`, `end_at`
- `provider_id` / `resource_id`
- `location_id` (optional)
- `last_synced_at` (timestamptz)

Uniqueness:
- unique index on (`external_source`, `external_id`)

### Alternate approach (dedicated table)
If `crm_bookings` is AIMOS-native only, create `external_booking_blocks` with the same fields, and let SchedulerView union the two.

---

## Conflict prevention logic

- When AIMOS attempts to create a new booking, check overlap against:
  - AIMOS-native bookings
  - PP-external blocks
- Overlap criteria:
  - same provider/resource AND time overlap AND status in {booked, confirmed, arrived}
  - ignore cancelled/no-show

---

## Observability

- Metrics: `appointments_fetched`, `appointments_upserted`, `appointments_cancelled`, `sync_lag_seconds`.
- Alerts:
  - no successful sync for > 30 minutes
  - repeated API/auth failures
  - unusually high cancellations/updates (possible mapping bug)

