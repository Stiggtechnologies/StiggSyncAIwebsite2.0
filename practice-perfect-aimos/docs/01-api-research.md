# Practice Perfect → AIMOS: API Research (initial)

> Status: **No public, stable REST API documentation found** in vendor public docs as of 2026-02-23.
> 
> Implication: Treat Practice Perfect (PP) integration as **vendor-assisted** (preferred) or use **exports** (CSV) / **DB access** (only if on-prem / Wired Client with supported access).

## What we could confirm from public sources

- Practice Perfect markets **integrations** and “real-time sync” for some add-ons (e.g., patient portal / payment integrations), but **public developer API docs are not discoverable** from their main site.
  - Public Integrations page: https://practiceperfectemr.com/integrations/
  - Learning Centre: https://practiceperfectemr.com/learningcenter/

These pages describe features/integrations but do **not** provide:
- developer portal
- API base URL
- authentication scheme
- endpoint reference
- rate limits

## Working assumptions (must be validated with PP support)

Because PP is a hosted EMR product, typical patterns are:

### Authentication (possible patterns)
One of the following usually applies:
1. **API key + secret** (per clinic / per integration) with HMAC signing
2. **OAuth2 client credentials** (machine-to-machine)
3. **User-session cookie** (not recommended for integrations)

**Action required:** open a support ticket with Practice Perfect requesting **integration/API access**.

### Likely data objects needed for scheduler blocking
To prevent double-booking in AIMOS, we need at minimum:
- appointments (time range, provider/resource, location)
- appointment status (booked/cancelled/no-show)
- appointment type/service
- practitioner/provider identifier
- optionally: room/resource identifier
- patient/client identifier (or at least a stable appointment external ID)

### Likely endpoints (names unknown)
Request these explicitly from PP:
- `GET /appointments?from=&to=&updated_since=`
- `GET /appointments/{id}`
- `GET /providers`
- `GET /locations` / `GET /resources`
- `GET /clients` (optional during one-way phase)

### Change capture / near-real-time
For 15–30 minute lag, one of the following is needed:
- **Webhooks** (ideal): appointment created/updated/cancelled
- **Incremental polling**: `updated_since` cursor
- **Export job** that can run every 15 minutes (CSV/SFTP)

## Questions to send to Practice Perfect (copy/paste)

1. Do you offer an **official API** (REST/SOAP) for scheduling/appointments?
2. If yes, please provide:
   - API base URL(s) (prod/sandbox)
   - authentication method (OAuth2? API key? scopes?)
   - endpoints for appointments (list + get) including incremental sync support (`updated_since`)
   - webhooks/events for appointment create/update/cancel
   - rate limits and recommended polling intervals
   - pricing/tiers for API access (if any)
   - how to obtain credentials per clinic
3. If no official API:
   - what export mechanisms exist for appointments (scheduled reports, CSV export, SFTP, email)
   - can exports include **last modified timestamp** and a stable appointment ID
   - can exports be generated **every 15 minutes**
4. Do you support read-only DB access for Wired Client / on-prem deployments? If so, which DB engine and schema docs?

## Risk notes

- **Do not** rely on browser automation/scraping for EMR scheduling data unless PP explicitly approves it; it is fragile and may violate ToS.
- PHI/PII: appointment feeds may contain patient identifiers; minimize fields and use encryption at rest/in transit.

## Next step to unblock engineering

Even without final API details, we can proceed with an adapter-based integration design where:
- the rest of the pipeline (mapping → AIMOS upsert → dedupe → monitoring) is stable
- PP connectivity is a swappable “source connector” (API vs CSV vs DB)
