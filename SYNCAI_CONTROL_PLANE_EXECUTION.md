# SyncAI Control Plane — Execution Plan

**Date:** February 25, 2026  
**Authority:** Axium (full charge of end-state achievement)  
**Timeline:** 90 days (Phase 1-5)  
**Vision:** `SYNCAI_ARCHITECTURE_VISION.md`

---

## Immediate Next Steps (This Week)

### 1. Architecture Design (Day 1-2)

**Design Control Plane API:**
```
/api/control-plane/
  /tenants
    POST /create
    GET /:id
    DELETE /:id
  /deploy
    POST /
    GET /:deploymentId/status
  /templates
    GET /list
    GET /:templateId
    POST /customize
  /integrations
    POST /cmms/connect
    GET /cmms/status
    POST /cmms/test
  /health
    GET /
  /diagnostics
    GET /:tenantId
```

**Database Schema (Supabase):**
```sql
-- Tenants table
CREATE TABLE tenants (
  id UUID PRIMARY KEY,
  name TEXT,
  industry TEXT,
  asset_count INTEGER,
  created_at TIMESTAMP,
  status TEXT
);

-- Deployments table
CREATE TABLE deployments (
  id UUID PRIMARY KEY,
  tenant_id UUID REFERENCES tenants(id),
  template_id TEXT,
  cmms_type TEXT,
  status TEXT,
  started_at TIMESTAMP,
  completed_at TIMESTAMP,
  report_url TEXT
);

-- Integration credentials (encrypted)
CREATE TABLE integrations (
  id UUID PRIMARY KEY,
  tenant_id UUID REFERENCES tenants(id),
  type TEXT,
  credentials JSONB, -- encrypted
  status TEXT,
  last_sync TIMESTAMP
);
```

**Tech Stack Decision:**
- API: Next.js API routes (existing stack)
- Database: Supabase (already using)
- Queue: Vercel background functions or Supabase Edge Functions
- CLI: Node.js package (`npm install -g @syncai/cli`)

---

### 2. Project Structure Setup (Day 2-3)

**Create Control Plane Directory:**
```
syncai-control-plane/
├── src/
│   ├── api/
│   │   ├── tenants.ts
│   │   ├── deploy.ts
│   │   ├── templates.ts
│   │   └── integrations.ts
│   ├── services/
│   │   ├── TenantProvisioner.ts
│   │   ├── DeploymentOrchestrator.ts
│   │   ├── TemplateEngine.ts
│   │   └── IntegrationConnector.ts
│   ├── templates/
│   │   ├── oil-gas.json
│   │   ├── mining.json
│   │   ├── manufacturing.json
│   │   └── utilities.json
│   └── cli/
│       └── index.ts
├── tests/
├── docs/
└── package.json
```

**Initialize Repository:**
```bash
cd /Users/orvilledavis/.openclaw/workspace
mkdir syncai-control-plane
cd syncai-control-plane
npm init -y
npm install typescript @types/node
npm install next react react-dom
npm install @supabase/supabase-js
npm install commander chalk ora
npx tsc --init
```

---

### 3. Phase 1 Implementation (Week 1-2)

**Build Tenant Provisioner:**

```typescript
// src/services/TenantProvisioner.ts

interface TenantConfig {
  name: string;
  industry: string;
  assetCount: number;
  adminEmail: string;
}

class TenantProvisioner {
  async createTenant(config: TenantConfig): Promise<string> {
    // 1. Create tenant record in database
    const tenantId = await this.createTenantRecord(config);
    
    // 2. Apply RLS policies
    await this.applyRLSPolicies(tenantId);
    
    // 3. Initialize governance defaults
    await this.initializeGovernance(tenantId, config.industry);
    
    // 4. Create default roles
    await this.createRoles(tenantId);
    
    // 5. Invite admin user
    await this.inviteAdmin(tenantId, config.adminEmail);
    
    return tenantId;
  }
  
  private async applyRLSPolicies(tenantId: string) {
    // Apply row-level security policies for tenant isolation
    const policies = [
      `CREATE POLICY "tenant_isolation" ON assets USING (tenant_id = '${tenantId}')`,
      `CREATE POLICY "tenant_isolation" ON work_orders USING (tenant_id = '${tenantId}')`,
      // ... more policies
    ];
    
    for (const policy of policies) {
      await supabase.rpc('execute_sql', { sql: policy });
    }
  }
  
  private async initializeGovernance(tenantId: string, industry: string) {
    // Load industry-specific governance defaults
    const template = await this.loadTemplate(industry);
    
    await supabase.from('governance_config').insert({
      tenant_id: tenantId,
      approval_thresholds: template.approvalThresholds,
      escalation_rules: template.escalationRules,
      audit_retention_days: 2555 // 7 years
    });
  }
}
```

**Build CLI Command:**

```typescript
// src/cli/index.ts

import { Command } from 'commander';
import { TenantProvisioner } from '../services/TenantProvisioner';

const program = new Command();

program
  .name('syncai')
  .description('SyncAI Control Plane CLI')
  .version('0.1.0');

program
  .command('deploy')
  .description('Deploy new SyncAI tenant')
  .option('--template <industry>', 'Industry template (oil-gas, mining, manufacturing, utilities)')
  .option('--assets <count>', 'Number of assets', parseInt)
  .option('--cmms <system>', 'CMMS system (maximo, sap-pm, fiix, emaint)')
  .option('--sites <count>', 'Number of sites', parseInt)
  .action(async (options) => {
    const provisioner = new TenantProvisioner();
    
    console.log('🚀 Starting deployment...');
    
    // Phase 1: Create tenant
    const tenantId = await provisioner.createTenant({
      name: options.template,
      industry: options.template,
      assetCount: options.assets,
      adminEmail: 'admin@example.com' // Get from config
    });
    
    console.log(`✅ Tenant created: ${tenantId}`);
    
    // Phase 2-5 will be added in subsequent weeks
  });

program.parse();
```

---

## Week-by-Week Breakdown

### Week 1-2: Phase 1 (Tenant Provisioning)

**Goals:**
- [ ] API endpoint: `POST /api/control-plane/tenants/create`
- [ ] TenantProvisioner service functional
- [ ] RLS policies applied automatically
- [ ] Roles created (5 roles: Executive, Ops Manager, Supervisor, Technician, AI Admin)
- [ ] Admin invitation sent
- [ ] CLI command: `syncai tenant create` working

**Success Metric:** New tenant operational in <5 minutes

---

### Week 3-4: Phase 2 (Deployment Templates)

**Goals:**
- [ ] 4 industry templates created (Oil & Gas, Mining, Manufacturing, Utilities)
- [ ] TemplateEngine service functional
- [ ] Template customization supported
- [ ] CLI command: `syncai deploy --template <industry>` working

**Template Structure:**
```json
{
  "industry": "oil-gas",
  "assetTypes": [
    "pump",
    "compressor",
    "separator",
    "pipeline"
  ],
  "riskThresholds": {
    "high": { "downtimeCost": 500000 },
    "medium": { "downtimeCost": 100000 },
    "low": { "downtimeCost": 10000 }
  },
  "governanceDefaults": {
    "approvalThresholds": {
      "highRisk": "executive",
      "mediumRisk": "opsManager",
      "lowRisk": "supervisor"
    },
    "escalationRules": {
      "unplannedShutdown": "immediate",
      "predictedFailure": "4hours"
    }
  }
}
```

**Success Metric:** Template deployment functional, customization working

---

### Week 5-6: Phase 3 (Integration Wizard)

**Goals:**
- [ ] CMMS connector for 4 systems (Maximo, SAP PM, Fiix, eMaint)
- [ ] IntegrationConnector service functional
- [ ] API credential validation
- [ ] Test connection before full integration
- [ ] CLI command: `syncai integrate --cmms <system>` working

**Integration Flow:**
1. Prompt for CMMS type
2. Request API credentials
3. Test connection
4. Validate permissions (read-only confirmed)
5. Sample asset data
6. Confirm schema compatibility
7. Begin historical data backfill

**Success Metric:** Integration operational in <30 minutes

---

### Week 7-9: Phase 4 (Auto-Initialization)

**Goals:**
- [ ] Asset classification engine
- [ ] Historical data analysis
- [ ] Baseline risk model training
- [ ] First executive report generation
- [ ] CLI output: deployment summary

**Initialization Process:**
1. Parse CMMS asset hierarchy
2. Map to SyncAI asset types
3. Analyze 12-24 months of work orders
4. Identify failure patterns
5. Train baseline risk scoring model
6. Generate executive summary

**Executive Report Contents:**
- Asset inventory summary
- Baseline risk distribution
- Top 20 high-risk assets
- Recommended governance thresholds

**Success Metric:** Customer sees insights within 2 hours of deployment

---

### Week 10-12: Phase 5 (Deployment Audit)

**Goals:**
- [ ] PDF report generation
- [ ] Governance snapshot documentation
- [ ] Risk baseline export
- [ ] Deployment checklist for customer
- [ ] Audit trail complete

**Report Structure:**
1. **Executive Summary** (1 page)
2. **Deployment Details** (2 pages)
   - Template used
   - CMMS integration
   - Timeline and duration
3. **Governance Configuration** (3 pages)
   - RBAC matrix
   - Approval thresholds
   - Escalation pathways
4. **Risk Baseline** (4 pages)
   - Asset inventory
   - Historical failure analysis
   - Current risk distribution
   - High-priority assets
5. **Next Steps** (1 page)
   - User onboarding checklist
   - Validation tasks
   - Executive briefing schedule

**Success Metric:** Professional PDF report delivered, C-suite ready

---

## OpenClaw Integration

**OpenClaw will manage:**
- Monitoring Control Plane health
- Generating sales materials referencing deployment capability
- Creating demo environments via Control Plane API
- Monitoring Vercel logs for Control Plane
- Documenting Control Plane features

**OpenClaw will call:**
```bash
# Health check
curl https://syncai.ca/api/control-plane/health

# Create demo tenant
curl -X POST https://syncai.ca/api/control-plane/tenants/create \
  -H "Authorization: Bearer $CONTROL_PLANE_KEY" \
  -d '{"name":"Demo","industry":"oil-gas","assetCount":500}'

# Check deployment status
curl https://syncai.ca/api/control-plane/deploy/abc123/status
```

**SyncAI will never:**
- Call OpenClaw APIs
- Execute shell commands from OpenClaw
- Expose admin access to OpenClaw

**Separation maintained:** One-way orchestration only

---

## Security & Compliance

### Authentication
- Control Plane API requires service account tokens
- Tokens scoped to specific operations (tenant create, deploy, health)
- Rate limiting: 100 requests/hour per token

### Encryption
- CMMS credentials encrypted at rest (Supabase vault)
- TLS for all API communication
- Secrets never logged or exposed in responses

### Audit Logging
- Every Control Plane API call logged
- Deployment actions logged with timestamps, user, outcome
- Logs retained for 7 years (compliance)

### Multi-Tenancy
- Strict RLS policies (tenant_id isolation)
- No cross-tenant data access
- Tenant deletion = cascade delete all data

---

## Testing Strategy

### Unit Tests
- TenantProvisioner service
- TemplateEngine service
- IntegrationConnector service

### Integration Tests
- Full deployment flow (tenant create → template apply → CMMS connect)
- RLS policy enforcement
- Role-based access control

### End-to-End Tests
- CLI command: `syncai deploy --template oil-gas --assets 1000`
- Verify tenant operational
- Verify data flowing from CMMS
- Verify executive report generated

---

## Documentation

### API Documentation
- OpenAPI spec for Control Plane endpoints
- Example requests/responses
- Authentication guide

### Deployment Guide
- Step-by-step instructions for sales team
- Demo script for prospects
- Troubleshooting guide

### Developer Documentation
- Architecture overview
- Service descriptions
- Template customization guide

---

## Success Criteria (90 Days)

**Technical:**
- [ ] End-to-end deployment: <3 hours
- [ ] Zero manual configuration required
- [ ] 4 industry templates operational
- [ ] 4 CMMS integrations functional
- [ ] Deployment audit PDF generated

**Business:**
- [ ] First pilot customer deployed via Control Plane
- [ ] Sales team trained on deployment process
- [ ] Investor demo showcasing one-command deployment
- [ ] Competitive differentiation documented

**Strategic:**
- [ ] Moat established: deployment automation
- [ ] Proprietary corpus: failure patterns from first 3 pilots
- [ ] Scalability proven: 10x customer capacity without 10x team

---

## Risk Mitigation

**Risk 1: CMMS API limitations**
- Mitigation: Start with read-only, expand incrementally
- Fallback: Manual data upload wizard if API fails

**Risk 2: Template generalization**
- Mitigation: Start industry-specific, refine with pilot feedback
- Fallback: Custom template builder for edge cases

**Risk 3: Deployment time exceeds 3 hours**
- Mitigation: Parallel processing, optimize data backfill
- Fallback: Staged deployment (baseline first, full analysis later)

**Risk 4: Customer data security concerns**
- Mitigation: SOC 2 compliance, encryption, audit logs
- Fallback: On-premise deployment option (future)

---

## Next Actions (Today)

1. ✅ Commit vision to memory (DONE)
2. ✅ Create execution plan (THIS FILE)
3. **Initialize syncai-control-plane repository**
4. **Design API endpoints (OpenAPI spec)**
5. **Create database schema (Supabase migration)**
6. **Build TenantProvisioner service (Phase 1)**

**Tomorrow:**
- Build CLI scaffold
- Test tenant provisioning flow
- Document API endpoints

---

**Status:** Vision committed, execution plan complete, ready to build  
**Timeline:** 90 days to full Control Plane operational  
**Authority:** Axium has full charge of end-state achievement

**Let's build the moat.**
