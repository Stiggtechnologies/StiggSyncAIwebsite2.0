# Build a 500+ Prospect Database — ON/QC Food & Beverage (Repeatable)

This is the fastest, lowest-friction way to create a **500+ account list** + **1,000–1,500 contacts** (2–3 per account) with scoring.

## Target filters (tight ICP)
- **Geo:** Ontario + Quebec
- **Industry:** Food & Beverage manufacturing/processing/packaging (NAICS 311/312 and subcategories)
- **Size:** **100–1,000 employees** (sweet spot 150–500)
- **Ops profile:** multi-shift, packaging lines, refrigeration, pumps/motors/conveyors

---

## Data sources (recommended stack)
Pick based on what you already have.

### Account discovery
1. **LinkedIn Sales Navigator** (best for size + location filters)
2. **Industry directories/associations** (OAFT, Food & Beverage Ontario, CTAQ in QC, regional chambers)
3. **Government/open lists** (where available): CFIA establishment lists, import/export registries, etc.

### Contact enrichment
1. **Apollo / ZoomInfo / Lusha** (email + phone)
2. **Clay** (workflow: source → enrich → verify → score)
3. **NeverBounce / ZeroBounce** (email verification)

---

## Workflow (2–3 days to first 500 accounts; 1–2 weeks to enrich fully)

### Step 1 — Pull 500–800 accounts (Sales Nav)
**Sales Nav filters:**
- Geography: Ontario, Canada; Quebec, Canada
- Industry: Food Production; Food & Beverages; Dairy; Consumer Goods (add sub-industry precision)
- Headcount: 51–200, 201–500, 501–1,000 (optionally 1,001–5,000 for “Tier B”)
- Keywords (company): “processing”, “packaging”, “plant”, “foods”, “bakery”, “dairy”, “beverage”, “meat”

Export method:
- Use Sales Nav saved accounts list → export via your enrichment tool (Clay/Apollo) or manual CSV build.

### Step 2 — Add 2–3 contacts per account
For each account, find:
- **Ops:** Plant Manager / Director Operations / VP Operations
- **Maintenance:** Maintenance Manager / Reliability / Engineering Manager
- **Finance (optional):** CFO / Controller

### Step 3 — Enrich + verify
- Append email + phone (Apollo/ZoomInfo)
- Verify emails (NeverBounce) and mark status
- Add LinkedIn URLs

### Step 4 — Score + tier
Use `SCORING_MODEL.md` to assign priority score (0–100) and Tier A/B/C.

### Step 5 — Segment lists for sequences
Create three working lists:
- **Tier A (Top 120 accounts)** → full multi-channel cadence (LI + email + calls)
- **Tier B (Next 200)** → email + LI, light calls
- **Tier C (Remaining 200+)** → nurture + intent monitoring

---

## Minimum viable database fields (must-have)
Accounts CSV:
- account_name, website, province, employee_range, industry_subsegment
- trigger signals, pain_hypothesis, priority_score, tier

Contacts CSV:
- name, title, role_group, email (verified), phone, linkedin_url

---

## Quality bar (definition of “qualified”)
An account counts toward the 500 only if:
- Has a real manufacturing/processing operation (not a restaurant chain)
- AND fits geo + size
- AND has at least **one** identified ops/maintenance leader (name + title)

---

## Output expectations
- 500+ accounts
- 1,000–1,500 contacts
- 120 Tier A accounts fully enriched with phone + verified email

---

## Notes on compliance
- Follow CASL (Canada anti-spam): prioritize **B2B context**, accurate sender info, unsubscribe, and relevance.
- Don’t email generic scraped addresses without verification.
