# Practice Perfect → AIMOS: Implementation Plan

## Summary

We will implement a **one-way appointment sync** (PP → AIMOS) that creates/updates “external booking blocks” in AIMOS so staff cannot double-book during the transition.

Design principle: **idempotent upserts + incremental sync + connector abstraction**.

---

## Week-by-week transition strategy

### Week 1 — Discovery, access, schema agreement
- Confirm with Practice Perfect:
  - API availability and credential provisioning, or export mechanism.
  - appointment identifiers and timestamps (created/updated/cancelled).
  - whether webhooks exist.
- Confirm in AIMOS:
  - where external blocks should live (`crm_bookings` vs new table).
  - required provider/resource identifiers and how SchedulerView reads availability.
- Produce a signed-off **field mapping** and privacy policy (PHI minimization).

Deliverables:
- Connector interface spec (API/CSV/DB)
- AIMOS schema change (if needed): unique index + external columns

### Week 2 — Build connector + transformation + upsert
- Implement PP connector (start with polling-based incremental sync).
- Implement mapping:
  - provider/resource mapping table
  - appointment status mapping
  - timezone normalization
- Implement AIMOS upsert:
  - upsert by (`external_source`, `external_id`)
  - update when `external_updated_at` increases
- Add sync cursor storage (e.g., `integration_state` table or KV store).

Deliverables:
- Working job pulling appointments for a date range and writing blocks into AIMOS in dev/staging.

### Week 3 — Hardening, error handling, monitoring
- Implement retry/backoff for transient failures.
- Implement dead-letter logging for malformed records.
- Add metrics and alerting thresholds.
- Add reconciliation job:
  - daily sweep for date range (today→+90d) to catch missed updates.

Deliverables:
- Operational dashboard + alert rules
- Runbook (how to re-run sync, rotate credentials, interpret errors)

### Week 4 — Parallel run + clinic workflow validation
- Run sync in “shadow” mode for 3–7 days:
  - blocks visible in AIMOS but staff still books in PP.
- Validate with staff:
  - no missing blocks
  - cancellations reflected
  - provider mapping correct
  - acceptable labels (no PHI leak)
- Tune polling frequency to meet 15–30 min SLA.

Deliverables:
- Sign-off that AIMOS availability is accurate enough to prevent conflicts.

### Week 5 — Production launch (one-way) + cutover prep
- Enable production sync.
- Train staff: “If time is blocked (PP), don’t book in AIMOS.”
- Begin preparing for cutover:
  - move new bookings to AIMOS only (once policy changes)
  - keep PP as read-only reference

---

## Data mapping (PP → AIMOS)

> Exact PP field names depend on API/export. This is the target mapping.

### Appointment core
- PP `appointment_id` → AIMOS `external_id`
- PP `start_datetime` → AIMOS `start_at` (timestamptz)
- PP `end_datetime` (or start + duration) → AIMOS `end_at`
- PP `provider_id` / `practitioner_id` → AIMOS `provider_id`
- PP `location_id` / `clinic_id` → AIMOS `location_id` (optional)
- PP `status` → AIMOS `status`

### Status mapping (example)
- PP: booked/confirmed/arrived → AIMOS: `booked`
- PP: cancelled → AIMOS: `cancelled` (and treated as non-blocking)
- PP: no-show → AIMOS: `noshow` (typically non-blocking for future; historical only)

### Privacy
- Do **not** sync patient name/notes unless explicitly required.
- If a label is needed in SchedulerView: use `"Booked (PP)"`.

---

## Error handling & resilience

### Failure modes
1. **Auth failure** (expired key / revoked token)
   - action: alert immediately; stop syncing; keep last known blocks.
2. **Partial fetch** (API timeout)
   - action: retry with backoff; do not advance cursor unless fully processed.
3. **Malformed record**
   - action: log to dead-letter with payload hash; continue.
4. **Provider mapping missing**
   - action: create “unmapped” bucket; optionally write block against a generic resource OR skip and alert (prefer alert).

### Cursor semantics
- Store `cursor = max(source_updated_at)` only after successful processing.
- Keep a safety overlap window (e.g., **sync from cursor - 2 hours**) to handle clock skew/out-of-order updates.

### Reconciliation
- Daily full-range reconciliation for near-term window (today → +90 days) to catch missed updates.

---

## Testing strategy

### Unit tests
- Mapping of status and timezone conversion.
- Upsert idempotency (same external_id twice).
- Overlap window behavior.

### Integration tests
- Against staging AIMOS DB: insert/update/cancel flows.
- Simulated PP payloads (fixtures):
  - create appointment
  - reschedule
  - cancel
  - provider change

### Parallel-run validation
- Pick a subset of providers for early rollout.
- Compare PP schedule vs AIMOS blocks daily (automated report + manual spot checks).

