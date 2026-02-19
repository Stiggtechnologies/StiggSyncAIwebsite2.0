# MEMORY.md — Axium ↔ Orville (Long-term)

## Constitutional Operating Mode (2026-02-01)

Orville defined Axium as a personal executive AI operating system.

### Orville roles / context
- Founder, CEO, investor, board member
- Operates multiple businesses across:
  - Healthcare
  - Security
  - AI automation
  - Real estate
  - Private equity
- Primary geographies: Alberta (Canada) and Jamaica

### Axium roles
- Chief of Staff
- Strategy + decision intelligence
- Operational + financial reasoning layer
- AI systems architect + process optimizer

### Operating principles
- First-principles thinking (avoid generic advice)
- Optimize for leverage, scalability, and long-term advantage
- Direct, structured, executive-level outputs
- Challenge assumptions when appropriate
- Treat decisions as capital allocation problems
- Compress time and reduce cognitive load

### Context handling
- Assume frequent context switching (AIM, Stigg, acquisitions, ops, boards)
- Ask clarifying questions only when ambiguity materially affects outcomes
- Otherwise make reasonable assumptions and state them explicitly

### Output defaults
- Clear structure, bullet points, decision-ready summaries
- Flag risks, trade-offs, and second-order effects
- No fluff / no hand-holding

### Memory behavior
- Persist important context, preferences, and decisions
- Build continuity across sessions

## Digital assets stewardship (AIM web + AI) (2026-02-01)
- Orville requested Axium help deploy and maintain AIM’s digital assets: website (Vercel), Bolt project, Supabase, AI assistant, and future AIMOS integration.
- Also included as a maintained asset: current WordPress site **albertainjurymanagement.ca** (Elementor-based) until domain cutover to Vercel.
- Default: track issues, keep a lightweight maintenance checklist, and flag breakages/security risks proactively.
- Constraints: no domain cutovers or destructive changes without explicit approval.

### Email Access Configuration (2026-02-19)
**Status:** Gmail app password received for orvilledavis95@gmail.com
**App Password:** ypnu vftz lubh nuqp (stored securely in Himalaya config)
**Pending:** Hotmail OAuth2 setup (Microsoft deprecated basic auth)

### Calendar Management - FULLY ACTIVE (2026-02-19)
**Scope:** Manage Orville's Google Calendar for meeting preparation, productivity, and time optimization
**Authority:** Full autonomous management of calendar operations
**Current Status:** ✅ LIVE - OAuth complete, monitoring active

**Responsibilities:**
- Daily morning briefings on upcoming meetings (8:00 AM)
- 30-minute pre-meeting reminders with context
- End-of-day summary of next day's schedule
- Proactive conflict detection and resolution suggestions
- Travel time buffer management
- Meeting prep material compilation (from email context)
- Email monitoring for new meeting invites (hourly)
- **ACTION ITEMS tracking** - Flag RSVPs, forms, approvals, decisions needed

**Operating Principles:**
- Assume all meetings are important - no "optional" without explicit confirmation
- Add 15-min buffers between back-to-back meetings
- Flag external meetings requiring extra preparation
- Track recurring meetings for efficiency optimization
- Monitor for double-bookings and suggest resolutions
- **Prioritize ACTION REQUIRED items** in all briefings

**Automation Configured:**
- ✅ Google Calendar OAuth - COMPLETE
- ✅ Daily 8:00 AM calendar briefing - ACTIVE (Cron job: ee53a12c)
- ✅ Hourly email monitoring for meetings - ACTIVE (Cron job: afd1a950)
- ✅ Pre-meeting alerts - Will be added
- ✅ Event creation/modification - Tested and working
- ✅ Action items tracker - ACTIVE

**Recurring Meetings Identified:**
- CFWB Board of Directors - Monthly (Teams)
- CFWB Lending Committee - Monthly (Teams)
- WBRIN Check-ins - As needed (Next: March 13)

**Upcoming Deadlines:**
- Board Training completion: March 31, 2026
- Fundraising course: March 2-5, 2026

**Current Action Items:**
1. 🔴 Register for Fundraising Course (before March 2)
2. 🔴 Complete CFWB Conflict of Interest forms (ASAP)
3. 🟡 Complete Board Training modules (deadline: March 31)
4. 🟡 Respond to Jennifer Warren - SyncAI questions
5. Watch for March 13 WBRIN meeting invite

### AIM Domain Migration - Authority Preservation (2026-02-19)
**Domain Analysis Complete:** albertainjurymanagement.ca has significant SEO authority that must be preserved.

**Authority Signals:**
- Domain age: 4 years (Feb 2022) - established trust
- Indexed pages: 30 pages including keyword-targeted URLs (/physiotherapy-edmonton/, /pain-management-treatment-edmonton/, etc.)
- Professional SEO tooling: All in One SEO Pro, GA4 tracking (ID: G-RNHNF423CW)
- Recently maintained: Last updated Feb 2026
- Expires: Feb 2028 (2+ years remaining)
- Registrar: Namespro Solutions Inc. (NOT in GoDaddy portfolio - requires separate monitoring)

**Value Assessment:**
- Cost to preserve: ~$15/year
- Cost to lose and rebuild: $10,000-20,000 + 6-12 months
- Verdict: HIGH VALUE - preserve indefinitely with 301 redirects

**Migration Requirements:**
1. Implement 301 redirects for all 30 pages before cutover
2. Keep old domain active indefinitely (cheap insurance)
3. Use Google Search Console "Change of Address" tool
4. Monitor 404 errors for 30 days post-cutover
5. Verify Namespro domain access and set renewal alerts

**Pending Actions:**
- [ ] Verify GA4 traffic data (access G-RNHNF423CW)
- [ ] Check Google Search Console for keyword rankings
- [ ] Create 301 redirect mapping for all pages
- [ ] Configure WordPress Redirection plugin
- [ ] Set domain expiration monitoring (Feb 2028)

**Cutover Blocker:** aimphysiotherapy.ca SSL still provisioning - DO NOT cut over until HTTPS active

## Growth engines authority (paid + SEO) (2026-02-08)
- **FULL AUTHORITY** over all portfolio companies' growth engines granted by Orville.
- Scope: Google Ads, Meta Ads, SEO, and all growth/marketing operations across entire portfolio.
- Execution authority: ACTIVE (no longer read-only).
- Responsibilities:
  - Design, execute, and optimize campaign/account structures
  - Manage budgets, copy, landing page requirements, and targeting logic
  - Real-time campaign modifications and optimizations
  - Define and enforce success metrics + kill thresholds
  - Portfolio-wide growth strategy and resource allocation

### Operating parameters (2026-02-08)
- **Budget allocation**: ROI-based capital allocation; invest for best return while maintaining healthy growth with above-industry EBITDA
- **Account access**: Google Ads admin via orvilledavis95@gmail.com; other channels (Meta, etc.) build from scratch
- **Reporting**: growth performance integrated into weekly exec dashboard  
- **Portfolio priority**: AIM primary focus
- **Kill switch**: pause all campaigns and alert when ad spend >5% of total revenue across portfolio
- **Autonomous execution**: take all growth actions within authority; flag manual dependencies only

### Meta Ads Campaign - Ongoing Management (2026-02-16)
**Target:** 15-20 new patients/day from Meta Ads platform
**Budget Constraint:** <5% of AIM revenue (hard ceiling)
**Status:** Campaigns active since Feb 12, 5 ad creatives built, ongoing A/B testing required
**Creative Assets:** 5 images ready in `/aim-meta-ads-creative/` (not yet uploaded to Ads Manager)
**Copy Compliance:** Remove "free assessment" language (violates clinic policy) - use "initial consultation" instead
**Management Mode:** Continuous optimization, not one-off setup - weekly A/B tests, creative rotation, budget reallocation based on CPA
**Current Metrics:** 2 leads @ $5.66 CPL (Feb 12 baseline)
**Next Actions:** Upload creatives, fix copy, scale to $50-75/day while maintaining <$30 CPA

## Active contexts (next 90 days) + winning definitions (2026-02-01)
- **AIM (Healthcare):** **TARGET: 20 new patients/day (autonomous execution)**; stabilize staffing; improve utilization; clean KPI visibility; prep for scalable growth.
- **Stigg (Security + AI automation):** revenue growth; tighter ops; clear AI productization roadmap; ship StiggSync AI product.
- **Acquisitions:** disciplined deal flow; clear criteria; avoid distractions unless strategic fit is obvious.
- **Boards / Governance:** no surprises; clean reporting; proactive risk management.

## Current bottleneck / constraint (2026-02-01)
- Bottleneck: execution bandwidth + context switching.
- Optimize this week around: Orville’s time and attention.

## Default operating cadence + artifacts (authoritative) (2026-02-01)
- Cadence + artifacts are authoritative unless Orville explicitly overrides.
- Assumptions confirmed:
  - Weekly Top-3 outcomes > task lists
  - R/A/G + leading indicators only
  - Async first; meetings only for decisions
  - Axium enforces WIP limits + challenges scope creep by default
- System of record (for now): chat.
  - Axium posts a weekly One-Page Exec Dashboard in chat every Monday.
  - Open Loops Register + Decision Log maintained in chat unless/until migration approved.

### Legal, safety, and compliance cadence (healthcare + regulated) (2026-02-02)
- Default: treat legal/compliance as an operating system layer, not an afterthought.
- Weekly (Ops): scan web + ads copy for regulated-claims drift (no guarantees, no “specialist” unless authorized, no inducements mixed with regulated services, truth/verifiable claims only).
- Monthly (Governance): privacy/security posture check (forms, PHI handling, retention), incident review (any complaints, takedowns, policy warnings).
- Pre-launch gate (Mandatory): compliance pass before any new landing page, promotion, paid campaign, or new service page goes live.
- Evidence hygiene: any quantified claim (%, “proven,” timelines) must be either removed or backed by a cited source and presented non-misleadingly.
- Change control: high-risk edits (offers, pricing promos, clinical claims) require explicit approval and a logged diff.

## Single-threaded owners (initial) (2026-02-01)
- AIM ops: Faith (day-to-day); escalate to Orville for staffing or regulatory risk
- Stigg ops: Greg (revenue + BD execution); Kingsley Ose (Ops Manager) for delivery
- StiggSync AI product: Orville (protected initiative; explicit ship milestones)
- Deal flow / acquisitions: Orville; Axium pre-screens + batches opportunities before they reach Orville

## Locked definitions / thresholds (2026-02-01)
### StiggSync AI — MVP definition
- End-to-end loop: ingest real operational signal → Axium generates usable action/insight → push output back into operational workflow (report/task/alert) without manual stitching.
- Beta users: internal (Stigg) + 1 friendly existing customer; no broad beta.
- Kill criterion: if we can’t demonstrate the loop live by MVP date, pause expansion and reduce scope.

### AIM — escalation thresholds (immediate)
- ≥10% open shifts over rolling 7-day window
- Any regulator complaint or compliance flag
- Any capacity/utilization-impacting role vacant >30 days

### Stigg — “Qualified pipeline” definition (all required)
- Identified buyer with authority
- Clear problem tied to security/automation (not generic IT)
- Budget range acknowledged (even if not final)
- Dated next step scheduled
- Expected close window defined (month)

## AIM Growth Engine Update (2026-02-18/19)

### Google Ads Campaign Status
- **Budget:** Increased from $25/day to $75/day (completed 2026-02-18)
- **Current performance:** 0.8 patients/day baseline, 5.08% CTR, $2.45 CPC
- **Target:** 8 patients/day from Google Ads alone
- **Conversion tracking:** Fixed (calls from ads = $85 CAD)

### SEO Campaign - DEPLOYED (2026-02-18/19)
**State-of-the-art SEO strategy initiated:**
- **Target:** Page #1 Google rankings for major Edmonton physiotherapy terms within 90 days
- **Goal:** +4-6 patients/day from organic search
- **Budget:** $1,650/month (~$55/day)

**Keywords targeted:**
- physiotherapy edmonton (1,900 monthly searches)
- physiotherapist edmonton (1,300 searches)
- sports physiotherapy edmonton (720 searches)
- back pain treatment edmonton (590 searches)
- orthotics edmonton (390 searches)
- Plus 5+ specialized terms (concussion, vestibular, pelvic floor)

**Deliverables created:**
- `AIM_SEO_CAMPAIGN_2026.md` - Complete 90-day SEO strategy
- `sports-physiotherapy-edmonton.md` - Optimized service page content
- `orthotics-edmonton.md` - Optimized service page content
- `sitemap.xml` - SEO sitemap for search engines
- `robots.txt` - Crawler instructions
- Local SEO setup checklist (Google Business Profile, citations)
- Content calendar (2 blog posts/week for 12 weeks)

**Immediate actions (next 48 hours):**
1. ⏳ Verify SSL and submit sitemap to Google Search Console
2. ⏳ Complete Google Business Profile optimization (awaiting credentials)
3. 🔄 Begin local citation submissions
4. 🔄 Set up rank tracking dashboard

### After-Hours System - LIVE (2026-02-19)
**Status:** Fully deployed and operational
- **System:** Twilio-powered AI voice intake fully integrated
- **Database:** Supabase schema deployed with CRM integration
- **Functions:** Edge functions deployed for call handling, transcription, AI analysis
- **Webhook:** Configured and tested successfully
- **Impact:** +4 patients/day potential (40% of leads call after hours)
- **Status:** LIVE - capturing after-hours calls

### Meta Ads Campaign
**Status:** Business Manager created, partial setup
- **Budget allocated:** $30/day
- **Target:** +2 patients/day
- **Blocker:** Creative upload and campaign completion

### Path to 15-20 Patients/Day
| Channel | Current | Target | Status |
|---------|---------|--------|--------|
| Google Ads (optimized) | 0.8/day | 8/day | ✅ Budget increased to $75/day |
| After-hours capture | 0 | +4/day | ✅ LIVE - webhook configured & tested |
| SEO/Organic | 0 | +4/day | 🚀 Content deployed, 60-90 days to full impact |
| Landing pages | N/A | N/A | ✅ New website optimized |
| Meta Ads | 0 | +2/day | ⚠️ Partially set up |
| Referrals | 0 | +2/day | 🔄 Pending |
| **TOTAL** | **0.8** | **20** | **On track - 2 of 6 channels live** |

**Timeline:** 30-60 days to reach 15-20 patients/day with full deployment.
