# Practice Perfect → AIMOS: Cutover Checklist

## 1) Pre-cutover readiness
- [ ] PP → AIMOS sync has been running in production for **≥ 2 weeks** with acceptable lag (< 15–30 min).
- [ ] Provider/resource mapping is complete (no “unmapped provider” alerts).
- [ ] Cancellations/reschedules propagate correctly.
- [ ] Monitoring + on-call ownership defined.
- [ ] Data privacy review complete (no PHI in AIMOS blocks unless approved).

## 2) Final data export / reconciliation
- [ ] Trigger a **final full export/sync** for window: today → +180 days.
- [ ] Reconcile counts:
  - [ ] total active PP appointments in window
  - [ ] total AIMOS external blocks in same window
- [ ] Spot-check per-provider daily schedules for next 7 days.
- [ ] Verify timezone correctness (DST boundaries).

## 3) Cutover execution (recommended sequence)

### Phase A: “Book in AIMOS only”
- [ ] Communicate freeze time: after `<timestamp>`, staff books in AIMOS only.
- [ ] In PP:
  - [ ] disable appointment creation for most roles (if possible) OR communicate policy.
- [ ] Keep PP sync running for a short time to catch any remaining PP edits.

### Phase B: Two-way or full migration
Choose one:
- **Two-way bridge (temporary):** AIMOS → PP write-back (more complex; avoid unless required).
- **Full cutover:** stop using PP scheduler; keep PP read-only.

## 4) Staff training (minimum)
- [ ] How to interpret “Booked (PP)” blocks.
- [ ] What to do when a patient calls to reschedule a PP appointment during transition.
- [ ] How to resolve “double booking” incidents:
  - check PP first
  - check AIMOS block list
  - escalate if mismatch

## 5) Rollback plan

### When to rollback
- Sync outage > 60 minutes during business hours.
- Multiple confirmed schedule conflicts.
- Provider mapping failure affecting many blocks.

### Rollback steps
- [ ] Revert policy: staff books in PP only.
- [ ] Keep AIMOS blocks visible but treat as advisory.
- [ ] Investigate root cause:
  - auth/key rotation
  - API changes
  - mapping regressions
- [ ] Re-run reconciliation export and validate.

## 6) Decommission plan (post-cutover)
- [ ] Disable PP sync job.
- [ ] Archive integration logs per retention policy.
- [ ] Remove/rotate PP credentials.
- [ ] Optionally delete external blocks older than retention window.

