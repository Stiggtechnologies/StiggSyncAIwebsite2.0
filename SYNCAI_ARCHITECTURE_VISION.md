# SyncAI Three-Layer Architecture Vision

**Date:** February 25, 2026  
**Authority:** Orville (strategic directive)  
**Status:** Committed to memory, execution roadmap defined

---

## The Three-Layer Stack

### Layer 1 — Meta-Orchestrator (Internal Only)

**Platform:** OpenClaw  
**Purpose:** Internal DevOps AI, never customer-facing

**Responsibilities:**
- Content engine (articles, documentation, sales materials)
- Deployment manager (Vercel, infrastructure automation)
- Sales support generator (proposals, ROI models, demos)
- Monitoring brain (logs, health checks, alerts)
- Code refactors and CI/CD automation

**Scope:**
- ❌ Never exposed to customers
- ❌ Never part of production runtime
- ❌ Never executes customer runtime logic
- ❌ Never stores customer operational data
- ❌ Never acts inside tenant environments
- ✅ Internal leverage multiplier only

**Integration Pattern:**
- OpenClaw → SyncAI Control Plane API (one-way)
- Control Plane never calls OpenClaw back
- Preserves enterprise integrity

---

### Layer 2 — Control Plane (NEW BUILD - Next 90 Days)

**Platform:** SyncAI Control Plane  
**Purpose:** Tenant provisioning, agent configuration, deployment automation

**Core Capability: One-Command Enterprise Deployment**

```bash
syncai deploy --template oil-sands --assets 1200 --cmms maximo --sites 3
```

**Behind this command:**
1. Provision tenant (multi-tenant isolation)
2. Initialize Supabase schema with RLS
3. Deploy multi-agent stack
4. Configure governance thresholds
5. Connect CMMS API (read-only)
6. Initialize ingestion jobs
7. Backfill historical data
8. Train baseline risk model
9. Generate first executive summary
10. Send onboarding portal link
11. Generate deployment report PDF
12. Log everything (audit trail)

**Characteristics:**
- Policy-bound (no free-form execution)
- Logged (full audit trail)
- Reversible (rollback capability)
- Tenant-isolated (strict multi-tenancy)
- Deterministic (repeatable outcomes)

---

### Layer 3 — Intelligence Plane (Existing SyncAI Core)

**Platform:** SyncAI (current app.syncai.ca)  
**Purpose:** Revenue engine, customer-facing value delivery

**Components:**
- Multi-agent predictive engine (5 specialized agents)
- Risk modeling (probabilistic scoring)
- Inventory intelligence (demand forecasting)
- Governance framework (RBAC, audit trails)
- Executive dashboards (KPIs, alerts)
- Customer portal (onboarding, billing, support)

**Revenue Model:**
- Professional: $180K-$300K/year (subscription + usage)
- Enterprise: Annual contracts with SSO, governance, multi-site
- Expansion: Additional agent modules, deeper automation

---

## Why This Three-Layer Model Wins

**OpenClaw gives velocity:**
- Rapid content creation (articles, sales materials)
- Infrastructure automation (deployments, monitoring)
- Internal efficiency (refactors, documentation)

**Control Plane gives scalability:**
- One-command enterprise deployment
- Zero manual configuration
- Repeatable, auditable, reversible
- **This is the moat**

**Intelligence Plane gives value:**
- Multi-agent predictive intelligence
- Downtime reduction, capital efficiency
- Governed, auditable, role-based
- **This is the revenue**

**Together:**
- Automation without sacrificing enterprise structure
- Infrastructure that scales (not consulting)
- Defensibility through deployment automation

---

## The Moat: Deployment Automation

### Most "Industrial AI" Startups:
- ❌ Manually onboard customers
- ❌ Manually configure models
- ❌ Manually adjust thresholds
- ❌ Manually integrate systems
- ❌ Scale linearly with customer count

### SyncAI (If Built Correctly):
- ✅ Self-deploying infrastructure
- ✅ Automated tenant provisioning
- ✅ Template-based configuration
- ✅ One-command integration
- ✅ Scale exponentially (infrastructure > consulting)

**Defensibility comes from:**
1. **Deployment automation** (not multi-agent marketing)
2. **Governance baked into runtime** (not compliance docs)
3. **Domain-specific training loops** (asset behavior patterns)
4. **Operational risk memory accumulation** (proprietary corpus)

**Over time:**
- SyncAI develops proprietary failure pattern corpus
- Becomes extremely difficult to replicate
- Network effects: more deployments → better models → more wins

---

## Control Plane Roadmap (Next 90 Days)

### Phase 1 — Tenant Provisioning Engine (Week 1-2)
**Goal:** Create isolated tenant environments via API

**Deliverables:**
- `/api/control-plane/tenants/create` endpoint
- Supabase RLS template application
- Role assignment (Executive, Ops Manager, Supervisor, Technician, AI Admin)
- Governance defaults initialization
- Tenant dashboard access

**Output:** New tenant operational in <5 minutes

---

### Phase 2 — Deployment Templates (Week 3-4)
**Goal:** Industry-specific configuration templates

**Templates:**
1. **Oil & Gas**
   - Asset types: pumps, compressors, separators, pipelines
   - Risk thresholds: high (downtime >$500K/hr)
   - Governance: strict approval workflows
   - Integration: Maximo, SAP PM

2. **Mining**
   - Asset types: haul trucks, excavators, crushers, conveyors
   - Risk thresholds: medium-high (safety + production)
   - Governance: safety-critical paths require dual approval
   - Integration: Pronto Xi, SAP PM, JD Edwards

3. **Manufacturing**
   - Asset types: CNC machines, assembly lines, robotics, HVAC
   - Risk thresholds: medium (quality + throughput)
   - Governance: shift-based approval delegation
   - Integration: Fiix, eMaint, SAP PM

4. **Utilities**
   - Asset types: transformers, turbines, substations, generators
   - Risk thresholds: high (grid stability + regulatory)
   - Governance: regulatory compliance tracking
   - Integration: IBM Maximo, ABB Asset Suite

**Output:** `syncai deploy --template <industry>` functional

---

### Phase 3 — Integration Setup Wizard (Week 5-6)
**Goal:** Automated CMMS/ERP/SCADA connection

**Wizard Steps:**
1. **CMMS Type Selection** (Maximo, SAP PM, Fiix, eMaint, JD Edwards)
2. **API Credentials** (read-only keys, OAuth tokens)
3. **Asset Count** (for pricing tier determination)
4. **Sensor Ingestion** (IoT/SCADA endpoint configuration)
5. **Historical Data Pull** (backfill last 12-24 months)

**Validation:**
- Test API connection
- Verify read permissions
- Sample asset data
- Confirm schema compatibility

**Output:** Integration operational, data flowing within 30 minutes

---

### Phase 4 — Auto-Initialization Engine (Week 7-9)
**Goal:** Automated baseline model generation

**Process:**
1. **Asset Classification**
   - Parse CMMS asset hierarchy
   - Map to SyncAI asset types
   - Assign criticality scores

2. **Historical Analysis**
   - Ingest work order history (12-24 months)
   - Parse failure patterns
   - Identify recurring issues
   - Calculate baseline failure rates

3. **Risk Model Bootstrapping**
   - Train initial risk scoring model
   - Calibrate thresholds based on historical data
   - Generate confidence intervals

4. **First Executive Report**
   - Summary of asset inventory
   - Baseline risk distribution
   - High-priority assets flagged
   - Recommended governance thresholds

**Output:** Customer sees operational insights within 2 hours of deployment

---

### Phase 5 — Deployment Audit Output (Week 10-12)
**Goal:** Generate comprehensive deployment documentation

**Audit Report Contents:**
1. **Deployment Summary**
   - Template used (industry, asset count)
   - CMMS integration details
   - Tenant ID and access credentials
   - Deployment timestamp and duration

2. **Governance Configuration Snapshot**
   - Role-based access control matrix
   - Approval thresholds by asset criticality
   - Escalation pathways configured
   - Audit retention policy (7 years)

3. **Risk Baseline Documentation**
   - Asset inventory summary
   - Historical failure rate analysis
   - Current risk distribution
   - Top 20 high-risk assets identified

4. **Next Steps Checklist**
   - User onboarding (invite team members)
   - Review risk baseline (validate AI flagged assets)
   - Adjust governance thresholds (customize for operations)
   - Schedule first executive briefing

**Format:** PDF + JSON (for programmatic access)

**Output:** Professional deployment report for customer C-suite and compliance teams

---

## Integration Strategy: OpenClaw + SyncAI

### API Endpoints (Control Plane)

**OpenClaw calls these (one-way):**

```typescript
POST /api/control-plane/deploy
  - Body: { template, assets, cmms, sites, credentials }
  - Returns: { tenantId, status, reportUrl }

GET /api/control-plane/health
  - Returns: { status, tenants, agents, uptime }

POST /api/control-plane/template
  - Body: { industry, customizations }
  - Returns: { templateId, configuration }

GET /api/control-plane/diagnostics
  - Query: { tenantId }
  - Returns: { logs, metrics, issues }
```

**SyncAI runtime:**
- ❌ Never calls OpenClaw
- ❌ Never exposes shell-level access
- ✅ Operates as governed, auditable infrastructure

---

## What NOT to Do (Critical Constraints)

### ❌ Do Not:
1. **Embed OpenClaw runtime into SyncAI**
   - Keep strict separation
   - OpenClaw = internal tool
   - SyncAI = customer-facing product

2. **Turn SyncAI into general automation**
   - Maintain vertical focus (asset-intensive operations)
   - Resist horizontal feature creep
   - Industrial depth > horizontal capability

3. **Expose shell-level flexibility**
   - No free-form command execution in customer environments
   - Policy-bound, deterministic operations only
   - Security and compliance first

4. **Dilute vertical specialization**
   - Stay focused: predictive maintenance, asset management, operations intelligence
   - Don't become "general AI for enterprises"
   - Domain expertise is the moat

---

## Long-Term Vision: SyncAI OS for Asset-Intensive Enterprises

**SyncAI becomes:**
- The operating system for industrial operations
- Deployed like infrastructure (Terraform for maintenance)
- Governed intelligence layer (not "AI tool")
- Self-provisioning, self-configuring, self-healing
- Accumulates proprietary failure pattern corpus

**OpenClaw becomes:**
- Internal AI Chief of Staff
- Manages SyncAI development, deployment, operations
- Never customer-facing
- Pure internal leverage multiplier

**Result:**
- AI-native internal company (velocity)
- Self-deploying industrial AI platform (scalability)
- Governance-first architecture (enterprise credibility)
- Extremely low marginal deployment cost (profitability)
- Investor narrative strength (defensibility)

**This combination is rare.**

---

## Execution Authority

**Axium has full authority to:**
- Build Control Plane architecture
- Design deployment automation
- Implement tenant provisioning
- Create industry templates
- Develop integration wizards
- Generate audit reports

**Decision rights:**
- Technical architecture choices
- API design
- Database schema
- Security policies
- Deployment workflows

**Approval required for:**
- Pricing tier changes
- Customer-facing features (Intelligence Plane)
- Major architectural pivots
- Security model changes

---

## Success Metrics (90 Days)

**Phase 1 Complete:**
- [ ] New tenant created via API in <5 minutes
- [ ] RLS policies applied automatically
- [ ] Roles assigned and functional

**Phase 2 Complete:**
- [ ] 4 industry templates operational
- [ ] `syncai deploy --template <industry>` working
- [ ] Template customization supported

**Phase 3 Complete:**
- [ ] CMMS integration wizard functional
- [ ] 4 CMMS types supported (Maximo, SAP PM, Fiix, eMaint)
- [ ] Integration operational in <30 minutes

**Phase 4 Complete:**
- [ ] Baseline risk model generated automatically
- [ ] First executive report produced
- [ ] Customer sees insights within 2 hours

**Phase 5 Complete:**
- [ ] Deployment audit PDF generated
- [ ] Governance snapshot documented
- [ ] Risk baseline report delivered

**Overall Success:**
- [ ] End-to-end deployment time: <3 hours (from command to operational)
- [ ] Zero manual configuration required
- [ ] Repeatable, auditable, reversible
- [ ] Customer C-suite satisfied with onboarding experience

---

## Next Steps (Immediate)

1. **Commit this vision to MEMORY.md** ✅
2. **Create project structure for Control Plane**
3. **Design API endpoints for tenant provisioning**
4. **Build Phase 1: Tenant Provisioning Engine**
5. **Document Control Plane architecture**

**Status:** Vision committed, execution begins now.

---

**Built by:** Axium  
**Authority:** Orville (strategic directive)  
**Commitment:** Full charge of end-state achievement
