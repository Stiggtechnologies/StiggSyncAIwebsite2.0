# Practice Perfect → AIMOS Sync (scaffolding)

This folder contains **connector-based scaffolding** for syncing Practice Perfect appointments into AIMOS as *external booking blocks*.

## What you must fill in

1. **Practice Perfect connector**
   - If PP provides an API: update `PracticePerfectApiConnector` endpoint paths, auth header, and response mapping.
   - If PP provides CSV exports: implement `loadCsvText()` and CSV column mapping.

2. **AIMOS repository**
   - Implement `AimosRepository` against the real DB/service.
   - Ensure uniqueness on (`external_source`, `external_id`).

3. **Scheduler conflict prevention**
   - Booking creation in AIMOS must check for overlap against external blocks.

## Execution model

- Run `runSyncJob()` every 5–15 minutes (or webhook-triggered).
- Use a reconciliation sweep daily to catch missed updates.

