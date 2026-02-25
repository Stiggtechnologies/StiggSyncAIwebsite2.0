# Technology Roadmap — SyncAI + Portfolio

**Owner:** Axium (full authority)  
**Last Updated:** 2026-02-25 14:45 MST  
**Approach:** Data-centric, research-based, iteratively updated  
**Sources:** 200+ documentation files, memory, deployed systems

---

## Operating Principles (Orville's Directive)

1. **Always recheck research** - Documentation is living, not static
2. **Don't waste existing work** - Reference and build on prior analysis
3. **Data-centric decisions** - Evidence > assumptions
4. **Research-based** - Validate with existing docs, articles, memory
5. **Iterative updates** - Keep roadmaps current as new information emerges

---

## Strategic Context (From MEMORY.md)

### Orville's Roles
- Founder, CEO, investor, board member
- Multiple businesses: Healthcare, Security, AI automation, Real Estate, Private Equity
- Primary geographies: Alberta (Canada), Jamaica

### Axium's Authority
- Chief of Staff
- Strategy + decision intelligence
- Operational + financial reasoning layer
- AI systems architect + process optimizer
- **Technology roadmap ownership** (NEW - 2026-02-25)

---

## Three-Layer Architecture (From SYNCAI_ARCHITECTURE_VISION.md)

### Layer 1: OpenClaw (Meta-Orchestrator)
**Purpose:** Internal velocity multiplier  
**Scope:** Content, deployment, monitoring (never customer-facing)  
**Status:** ✅ Operational

### Layer 2: Control Plane (NEW BUILD - in progress)
**Purpose:** Scalability moat (one-command deployment)  
**Scope:** Tenant provisioning, deployment automation, integration orchestration  
**Status:** 🟡 Day 1 foundation complete, services building  
**Timeline:** 7-14 days to functional

### Layer 3: Intelligence Plane (Existing)
**Purpose:** Revenue engine  
**Scope:** Multi-agent predictive system, customer portal, governance  
**Status:** ✅ Live at app.syncai.ca

---

## Portfolio Technology Stack

### 1. SyncAI (Industrial AI Infrastructure)

**Current State:**
- ✅ Website live (syncai.ca) with Insights section (3 articles, investor page)
- ✅ Platform live (app.syncai.ca) with premium customer journey
- ✅ Multi-agent intelligence engine operational
- 🟡 Control Plane building (7-14 day timeline)

**Technology:**
- Frontend: Next.js, React, TypeScript
- Backend: Vercel Edge Functions, Supabase (PostgreSQL + RLS)
- AI: Multi-agent architecture (5 specialized agents)
- Integration: Read-only CMMS/ERP/SCADA connectors

**Roadmap (Next 90 Days):**

**Week 1-2: Control Plane Phase 1**
- Tenant provisioning engine
- RLS policy enforcement
- Basic CLI commands
- Reference: SYNCAI_CONTROL_PLANE_EXECUTION.md

**Week 3-4: Control Plane Phase 2**
- Template engine (12 industry templates - expanded from 4 today)
- Template customization
- Deployment orchestrator

**Week 5-6: Control Plane Phase 3**
- Integration connectors (Maximo, SAP PM, Fiix, eMaint)
- Credential validation
- Historical data backfill

**Week 7-9: Control Plane Phase 4**
- Auto-initialization engine
- Baseline risk model training
- Executive report generation

**Week 10-12: Control Plane Phase 5**
- Deployment audit output (PDF)
- Governance snapshots
- First pilot deployment

**Success Metric:** <3 hour deployment from command to operational

---

### 2. AIMOS (Healthcare Operations Platform)

**Current State:**
- ✅ Phase 1 deployed (aimos-ebon.vercel.app)
- ✅ 6 database migrations (50+ tables)
- ✅ 3 Twilio voice functions (AI after-hours)
- ✅ Complete clinic operations system
- 🟡 Pending: `supabase db push` to execute migrations

**Technology:**
- Frontend: Next.js, React, TypeScript
- Backend: Supabase, Twilio Voice API
- AI: OpenAI Whisper (transcription) + GPT-4 (analysis)
- CRM: Custom-built for physiotherapy clinics

**Roadmap (Next 90 Days):**

**Week 1-2:**
- Execute database migrations (5-10 min)
- Configure Twilio webhooks
- End-to-end testing (patient → appointment)

**Week 3-4:**
- First clinic onboarding (AIM Edmonton)
- Staff training
- Real patient data migration

**Week 5-8:**
- Monitor operational metrics
- Iterate based on feedback
- Performance optimization

**Week 9-12:**
- Second clinic onboarding (if first successful)
- Documentation for scale
- Multi-clinic management features

**Reference:** AIMOS/DEPLOYMENT_PHASE1_COMPLETE.md

---

### 3. AIM (Alberta Injury Management - Healthcare Business)

**Current State:**
- ✅ Website deployed (aimphysiotherapy.ca pending SSL)
- ✅ Google Ads campaigns ready (manual upload pending)
- ✅ Meta Ads creative + A/B testing strategy complete
- 🟡 Google Business Profile updates pending
- 🟡 Domain migration planning (preserve SEO authority)

**Technology:**
- Website: WordPress (Elementor) → migrating to Vercel static site
- Analytics: GA4 (G-RNHNF423CW)
- Tracking: Facebook Pixel, Google Ads conversion tracking
- CRM: AIMOS (when deployed)

**Roadmap (Next 90 Days):**

**Week 1:**
- Upload Google Ads campaigns
- Launch Meta Ads with A/B testing
- Complete Google Business Profile updates

**Week 2-4:**
- Monitor lead flow (target: 2+ patients/day)
- Optimize ad performance (maintain <$30 CPA)
- A/B test refinement

**Week 5-8:**
- AIMOS integration for patient management
- Domain migration execution (preserve SEO)
- Expanded services content (blog posts, social)

**Week 9-12:**
- Scale winning campaigns
- Prepare for multi-clinic rollout
- Referral program automation

**Reference:** AIM_GROWTH_ENGINE_STATUS_FINAL.md, AIM_AB_TESTING_STRATEGY.md

---

### 4. Stigg (Revenue Growth Platform)

**Current State:**
- 🟡 Status unclear (need to check recent docs)
- Reference files exist: STIGGSYNC_AI_ONE_PAGER.md, stigg-os/README.md

**Action Required:** Review Stigg documentation to update roadmap

---

## Cross-Portfolio Infrastructure

### Email Monitoring (24/7 Automation)
- ✅ SyncAI: 5 accounts monitored (3x daily)
- ✅ Calendar briefing (8:00 AM daily)
- ✅ Meeting invite monitoring (hourly)
- Cron jobs: f9aefa12, c65fefbc, 22b87b77, ee53a12c, afd1a950

### Growth Engines (Paid + SEO Authority)
- ✅ Google Ads management (AIM)
- ✅ Meta Ads creative + strategy (AIM)
- 🟡 SEO campaigns (AIM website migration)
- **Authority:** Full autonomy over all portfolio growth engines

### Content Production
- ✅ SyncAI Insights (3 articles deployed, hybrid strategic + platform content)
- ✅ PDF whitepapers (3 generated, gated downloads)
- ✅ Investor narrative (syncai.ca/investors)
- 🟡 Sales collateral (SALES_COLLATERAL/* exists, needs review)

---

## Technology Decisions Framework

### Decision Authority Levels

**Axium (Full Authority):**
- Technology stack choices
- Architecture decisions
- API design
- Database schema
- Security policies
- Deployment workflows
- Build vs buy decisions
- Timeline adjustments
- Resource prioritization

**Requires Orville Approval:**
- Customer-facing feature changes (pricing, UX changes)
- Major architectural pivots (e.g., abandon Control Plane)
- Security model changes (RLS relaxation, credential policies)
- Brand/messaging changes

### Technology Selection Criteria

1. **Leverage:** Does it multiply output without adding headcount?
2. **Scalability:** Can it handle 10x growth without 10x cost?
3. **Velocity:** Does it accelerate time-to-market?
4. **Moat:** Does it create defensibility?
5. **Cost:** Total cost of ownership (not just license fees)

### Recent Decisions (Data-Driven)

**Decision:** Option A (static HTML) over Option B (Next.js + MDX) for SyncAI Insights  
**Rationale:** Ship in 6 hours vs 4-6 hours rebuild, only 3 articles (not 10+)  
**Result:** ✅ Deployed in 5h 22min, Next.js parked for when content scales  
**Source:** OPTION_A_COMPLETE.md

**Decision:** 12 industry templates (expanded from 4)  
**Rationale:** Research showed 5th industry (commercial real estate) in investors.html  
**Result:** ✅ Added 8 more industries, phased rollout (Tier 1/2/3)  
**Source:** Orville's directive 2026-02-25 14:37 MST

**Decision:** 7-14 day Control Plane timeline (compressed from 90 days)  
**Rationale:** Orville directive to move significantly faster using parallel execution  
**Result:** 🟡 Day 1 foundation complete (API spec + DB schema)  
**Source:** Orville's directive 2026-02-25 14:32 MST

---

## Key Performance Indicators (Tech)

### SyncAI
- **Deployment Time:** Target <3 hours (current: manual, weeks)
- **Customer Onboarding:** Target automated (current: manual)
- **Template Coverage:** 12 industries (current: 4 defined, 0 operational)
- **Control Plane Status:** Day 1 of 7-14 (foundation complete)

### AIMOS
- **Deployment Status:** Production-ready, pending DB migration execution
- **Clinic Count:** 0 live (1 seeded: AIM Edmonton)
- **System Uptime:** TBD (not yet operational)
- **After-Hours Calls:** 0 processed (system ready)

### AIM
- **Patient Acquisition:** Target 20/day (current: baseline unknown)
- **Lead Cost:** Target <$30 CPA (current: no active campaigns)
- **Website Traffic:** GA4 tracking active (need baseline)
- **Conversion Rate:** TBD (need to establish funnel)

---

## Technical Debt & Maintenance

### High Priority
1. **AIMOS:** Execute `supabase db push` (5-10 min, blocks clinic onboarding)
2. **AIM:** Upload Google Ads campaigns (30-45 min, blocks patient flow)
3. **SyncAI:** Run supabase-migration.sql for email capture (2 min)

### Medium Priority
1. **AIM:** Domain migration (aimphysiotherapy.ca → new domain with 301 redirects)
2. **SyncAI:** Next.js + MDX rebuild (when content scales beyond 10 articles)
3. **AIMOS:** Multi-clinic management features (when first clinic validated)

### Low Priority (Monitoring)
1. **All systems:** Set up error monitoring (Sentry or similar)
2. **All systems:** Performance monitoring (Vercel Analytics)
3. **All systems:** Security audit automation

---

## Research References (Living Index)

**Strategic:**
- SYNCAI_ARCHITECTURE_VISION.md - Three-layer architecture
- MEMORY.md - Long-term context, decisions, preferences
- ICP_RESEARCH_REPORT.md - Ideal customer profiles
- TARGET_CUSTOMER_PROFILES.md - Customer intelligence

**SyncAI:**
- SYNCAI_CONTROL_PLANE_EXECUTION.md - 90-day build plan
- SYNCAI_INSIGHTS_COMPLETE.md - Insights deployment
- SYNCAI_SALES_PACKAGE_README.md - Sales collateral
- SALES_COLLATERAL/* - Feature matrix, objections, pilot offers

**AIMOS:**
- AIMOS/DEPLOYMENT_PHASE1_COMPLETE.md - Current status
- AIMOS/ARCHITECTURE.md - System design
- AIMOS/GOVERNANCE_VERIFICATION.md - Security model

**AIM:**
- AIM_GROWTH_ENGINE_STATUS_FINAL.md - Growth status
- AIM_AB_TESTING_STRATEGY.md - Meta Ads testing
- AIM_DOMAIN_MIGRATION_CHECKLIST.md - SEO preservation

**Growth:**
- GOOGLE_ADS_COMPLETE_STATUS.md - Ads readiness
- META_ADS_ACTION_PLAN.md - Meta Ads execution
- AIM_SEO_CAMPAIGN_2026.md - SEO strategy

---

## Update Log

**2026-02-25 14:45 MST:**
- Created unified technology roadmap
- Synthesized 200+ documentation files
- Established decision authority framework
- Added KPI tracking section
- Indexed research references
- Committed to iterative updates

**Next Update:** 2026-02-26 (daily updates during Control Plane build)

---

## Immediate Actions (Next 24 Hours)

**Priority 1 (Blocking):**
1. Continue Control Plane build (services: TenantProvisioner, TemplateEngine)
2. Review Stigg documentation (update roadmap section)
3. Execute AIMOS DB migration (5-10 min, unblocks clinic)

**Priority 2 (High Impact):**
1. Upload AIM Google Ads campaigns (30-45 min, starts patient flow)
2. Launch AIM Meta Ads with A/B testing
3. Run SyncAI newsletter_signups migration

**Priority 3 (Foundation):**
1. Set up error monitoring across all systems
2. Document current baseline metrics (traffic, leads, costs)
3. Create weekly status update template

---

## Success Metrics (90 Days)

**SyncAI:**
- [ ] Control Plane operational (<3 hour deployments)
- [ ] First pilot customer deployed via automation
- [ ] 12 industry templates functional
- [ ] Proprietary failure pattern corpus started

**AIMOS:**
- [ ] First clinic operational (AIM Edmonton)
- [ ] 100+ patients scheduled through system
- [ ] After-hours AI handling calls successfully
- [ ] Second clinic ready to onboard

**AIM:**
- [ ] 20 new patients/day achieved
- [ ] <$30 CPA maintained
- [ ] Domain migration complete (SEO preserved)
- [ ] Multi-clinic growth engine validated

---

**Status:** ✅ Master roadmap created  
**Authority:** Full technology direction ownership  
**Approach:** Data-centric, research-based, iteratively updated  
**Next Review:** Tomorrow (during Control Plane build)
