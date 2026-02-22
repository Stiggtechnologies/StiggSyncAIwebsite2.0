# AIMOS Fort McMurray Satellite - Complete System Architecture

## 🎯 Executive Summary

**Location**: AIM Performance – Fort McMurray, Alberta  
**Operating Model**: Specialty Rehab + Industrial Athlete  
**Opening Phase**: Phase 1 (3 days/week → scalable to 5)  
**Investment**: $47,000 startup capital  
**Breakeven**: Month 5  
**Year 1 EBITDA**: $23,440 (12.69% margin)  
**ROI Year 1**: 49.87%

This repository contains the complete system architecture for deploying the Fort McMurray satellite location within AIMOS (Alberta Injury Management Operating System). The system is **AI-first, modular, scalable, and compliant** with Alberta healthcare regulations.

---

## 📁 Repository Structure

```
aimos-fort-mcmurray/
├── README.md                           # This file
├── schema/
│   └── location-configuration.sql      # Complete PostgreSQL schema
├── agents/
│   ├── intake-ai-agent.json           # Intake & triage automation
│   ├── schedule-optimization-agent.json
│   ├── clinical-documentation-ai.json
│   ├── revenue-optimization-agent.json
│   └── growth-marketing-agent.json
├── dashboards/
│   └── kpi-dashboard-config.json      # Real-time KPI dashboard
├── workflows/
│   └── automation-workflows.json      # 5 core automated workflows
├── financial/
│   └── financial-model.json           # Complete financial projections
└── docs/
    ├── IMPLEMENTATION_GUIDE.md        # Step-by-step deployment guide
    ├── EXPANSION_LOGIC.md             # Expansion decision framework
    └── REPORTING_HIERARCHY.md         # Organizational reporting structure
```

---

## 🏗️ System Architecture

### 1. Location Configuration

**Location ID**: `AIM_FMM_001`  
**Facility Structure**:
- 3 treatment rooms (12x10 each)
- 1 performance gym (15x20)
- Shared waiting area
- **Total**: 720 sq ft

**Room Configuration**:
| Room | Type | Primary Use | Duration | Privacy |
|------|------|-------------|----------|---------|
| Room 1 | Pelvic Health Suite | Pelvic assessments/treatment | 60/45 min | High |
| Room 2 | Concussion/Vestibular | Neuro rehab | 60/45 min | Medium |
| Room 3 | General Physio | Musculoskeletal | 45 min | Medium |
| Room 4 | Performance Gym | Industrial athlete, RTW | 60/45 min | Low |

### 2. Service Stack

**4 Specialty Categories**:

1. **Pelvic Health** (30% target mix)
   - Initial Assessment ($165)
   - Follow-Up ($125)
   - Postpartum Program ($135)
   - Male Pelvic Health ($165)

2. **Concussion** (25% target mix)
   - Acute Assessment ($165)
   - Post-Concussion Management ($125)
   - Return to Work Protocol ($135)
   - Return to Sport Protocol ($135)

3. **Vestibular** (20% target mix)
   - Dizziness Assessment ($165)
   - BPPV Treatment ($125)
   - Balance Retraining ($125)

4. **Industrial Athlete** (25% target mix)
   - RTW Assessment ($185)
   - Work Conditioning Program ($145)
   - Functional Readiness Evaluation ($195)

**Average Blended Rate**: $135/visit  
**Target Margin**: High (all specialties)

### 3. AI Agent Suite

**5 Autonomous Agents** with human-in-loop supervision:

#### A. Intake AI Agent
- **Purpose**: Auto-triage patients, route to specialty, flag red flags
- **Capabilities**: Symptom analysis, specialty routing, intake form automation
- **Human Review**: Required for red flags and ambiguous cases
- **Expected Accuracy**: 90%+

#### B. Schedule Optimization Agent
- **Purpose**: Maximize utilization, prioritize high-margin services
- **Target**: 60-85% room utilization
- **Reporting**: Weekly to GM and COO
- **Autonomy**: Suggestions only (no auto-booking changes)

#### C. Clinical Documentation AI
- **Purpose**: SOAP note drafting, outcome tracking, MD summaries, RTW reports
- **Time Savings**: 40-50% reduction in documentation time
- **Compliance**: PIPEDA + Alberta Health standards
- **Approval**: Clinician signature required

#### D. Revenue Optimization Agent
- **Purpose**: Track revenue, identify opportunities, monitor breakeven
- **KPIs**: Revenue per visit, per clinician, per room; EBITDA margin
- **Alerts**: Revenue below target, breakeven at risk, expansion trigger
- **Reporting**: Daily to GM, weekly to COO, monthly to CFO/CEO

#### E. Growth & Marketing Agent
- **Purpose**: SEO monitoring, Google Ads optimization, lead conversion
- **Budget**: $1,500/month
- **Target CAC**: $120
- **Target ROAS**: 3:1 minimum
- **Reporting**: Weekly to Marketing Director, monthly to CMO

### 4. Real-Time KPI Dashboard

**6 Dashboard Sections**:

1. **Clinical Performance**
   - Visits per day (target: 15)
   - Revenue per visit (target: $135)
   - Pelvic/Concussion utilization (60-85%)
   - RTW conversion rate (target: 85%)

2. **Financial Performance**
   - Monthly revenue (target: $60k by month 7)
   - EBITDA margin (target: 25%)
   - Breakeven progress
   - Revenue per sq ft

3. **Operational Efficiency**
   - Room utilization by type
   - Clinician utilization (target: 80%)
   - No-show rate (target: <8%)
   - Lead to patient conversion

4. **Growth & Marketing**
   - Google rankings (Pelvic, Concussion, Vestibular)
   - Employer contracts signed (target: 3 by month 12)
   - Physician referrals per month (target: 20)

5. **Service Mix Analysis**
   - Revenue by specialty
   - Visits by specialty
   - Top services by revenue

6. **Active Alerts**
   - Real-time alerts and notifications
   - Acknowledge and resolve

**Access Control**: Role-based (GM, Clinical Lead, COO, CEO, CFO)  
**Refresh**: Real-time (5-minute intervals)  
**Export**: PDF, Excel, scheduled email

### 5. Workflow Automation

**5 Core Workflows**:

1. **New Patient Journey** (11 steps)
   - Inquiry → Triage → Booking → Pre-intake → Assessment → Care plan → Follow-ups → Discharge → Review

2. **Specialty Routing**
   - Auto-assign room, clinician, and service based on symptoms

3. **Employer & WCB Workflow**
   - Weekly progress reports, final clearance, employer communication

4. **No-Show Prevention**
   - Multi-channel reminders (7 days, 2 days, 1 day, 2 hours)
   - Backfill automation

5. **Waitlist Management**
   - Real-time matching, auto-notification, escalation for long waits

**Automation Level**: 70% fully automated, 30% human-supervised

### 6. Financial Model

**Startup Capital**: $47,000
- Leasehold improvements: $15,000
- Equipment & furniture: $12,000
- Initial inventory: $2,000
- Deposits: $5,000
- Pre-opening marketing: $3,000
- Working capital: $10,000

**Revenue Projections**:
- Month 1: $6,413 (20 new patients, 50 visits)
- Month 6: $14,108 (40 new patients, 110 visits)
- Month 12: $23,726 (62 new patients, 185 visits)
- **Year 1 Total**: $184,680

**Expense Structure**:
- Fixed costs: $7,100/month (rent, utilities, admin, marketing)
- Variable costs: $53.50/visit (clinician wage, supplies, fees)

**Profitability**:
- Breakeven: Month 5 (87 visits, $11,745 revenue)
- Year 1 EBITDA: $23,440 (12.69% margin)
- ROI Year 1: 49.87%
- Payback period: 9 months

**Sensitivity Analysis**:
- Conservative: $8,500 EBITDA (breakeven month 7)
- Base case: $23,440 EBITDA (breakeven month 5)
- Optimistic: $42,000 EBITDA (breakeven month 3)

---

## 🚀 Quick Start

### Prerequisites
- AIMOS production database access
- Python 3.9+ with AIMOS SDK
- PostgreSQL 14+
- Node.js 18+ (for dashboard)
- Google Ads and Analytics accounts

### Step 1: Database Setup (30 minutes)
```bash
psql -h [DB_HOST] -U [DB_USER] -d aimos_production -f schema/location-configuration.sql
```

### Step 2: Deploy AI Agents (2 hours)
```python
from aimos.ai_agents import deploy_agent
import json

agents = [
    'intake-ai-agent',
    'schedule-optimization-agent',
    'clinical-documentation-ai',
    'revenue-optimization-agent',
    'growth-marketing-agent'
]

for agent_name in agents:
    with open(f'agents/{agent_name}.json') as f:
        config = json.load(f)
    agent = deploy_agent(config)
    agent.test()
    agent.activate()
```

### Step 3: Deploy Dashboard (1 hour)
```bash
cd dashboards
npm install
npm run deploy -- --config kpi-dashboard-config.json --env production
```

### Step 4: Activate Workflows (1 hour)
```bash
aimos-cli workflows deploy --file workflows/automation-workflows.json --location AIM_FMM_001
```

### Step 5: Verify Deployment
```bash
aimos-cli location verify --id AIM_FMM_001 --full-check
```

**Total Setup Time**: 4-5 hours

---

## 📊 Key Performance Indicators

### Clinical KPIs
- **Visits per day**: Target 15 (Month 12)
- **Revenue per visit**: Target $135
- **Room utilization**: 60-85% optimal
- **RTW conversion rate**: Target 85%

### Financial KPIs
- **Monthly revenue**: Target $60k (Month 7+)
- **EBITDA margin**: Target 25%
- **Breakeven**: Month 5
- **Revenue per sq ft**: Monitor vs Edmonton main

### Operational KPIs
- **Clinician utilization**: Target 80%
- **No-show rate**: Target <8%
- **Lead conversion**: Target 70%
- **Patient satisfaction**: Target >4.5/5

### Growth KPIs
- **Google ranking average**: Target top 3 for priority keywords
- **Employer contracts**: Target 3 by month 12
- **Physician referrals**: Target 20/month by month 12
- **Google review rating**: Target 4.8/5

---

## 📈 Expansion Logic

### Trigger 1: Revenue Threshold
**Condition**: Monthly revenue > $60,000 for 3 consecutive months  
**Action**: Add 2nd clinician  
**Investment**: $30,000  
**Revenue Potential**: +$40-50k/month  
**EBITDA Impact**: +$10-20k/month

### Trigger 2: Utilization Threshold
**Condition**: Sustained utilization > 75%  
**Action**: Expand to 5 days/week (Phase 2)  
**Investment**: $5,000  
**Revenue Potential**: +$30k/month  
**Expected Timing**: Month 7

### Trigger 3: Waitlist Saturation
**Condition**: Waitlist > 2 weeks for any specialty  
**Action**: Add specialist capacity or evening hours  
**Investment**: $8,000  
**Revenue Potential**: +$15-20k/month

### Trigger 4: Capacity Saturation
**Condition**: All rooms at 85%+ utilization for 3 months  
**Action**: Expand square footage  
**Investment**: $50-75k  
**Revenue Potential**: Double current  
**Expected Timing**: Month 18-24

---

## 👥 Reporting Hierarchy

### Clinic GM → COO
- Daily operations
- Patient experience
- Clinician management
- Operational KPIs

### Clinical Lead → CCO
- Clinical quality
- Outcome measures
- Clinician training
- Protocol adherence

### Revenue + KPI → CEO
- Strategic performance
- Growth trajectory
- Expansion readiness
- Market position

### AI Agents → Chief AI & Automation Officer
- Agent performance
- Automation metrics
- Model retraining
- Continuous improvement

**Reporting Cadence**:
- Daily: Dashboard review + alerts
- Weekly: Operational review (GM → COO)
- Monthly: Strategic review (All C-suite)
- Quarterly: Board update + expansion planning

---

## 🛡️ Compliance & Security

### Healthcare Regulations
- ✅ Alberta College of Physiotherapists standards
- ✅ Professional liability insurance
- ✅ Facility health and safety compliance
- ✅ Infection control protocols

### Data & Privacy
- ✅ PIPEDA compliant
- ✅ AES-256 encryption
- ✅ Role-based access control
- ✅ Complete audit trail
- ✅ Patient consent management

### Financial & Legal
- ✅ WCB Alberta reporting standards
- ✅ Billing code validation
- ✅ Insurance verification
- ✅ Contract management

---

## 🔄 Future Scalability

This Fort McMurray template is designed to be **cloned for future Alberta satellites**. Key reusable components:

1. **Database Schema**: Location-agnostic design
2. **AI Agents**: Configurable for any location
3. **Dashboard**: Multi-location support built-in
4. **Workflows**: Parameterized for flexibility
5. **Financial Model**: Template with adjustable inputs

**Clone Time**: 2-3 weeks (vs 8-12 weeks for new build)

**Potential Satellite Locations**:
- Grande Prairie
- Red Deer
- Medicine Hat
- Lethbridge
- Cold Lake

---

## 📚 Documentation

- **[Implementation Guide](docs/IMPLEMENTATION_GUIDE.md)**: Complete deployment instructions
- **[Expansion Logic](docs/EXPANSION_LOGIC.md)**: Decision framework for growth
- **[Reporting Hierarchy](docs/REPORTING_HIERARCHY.md)**: Organizational structure

### API Documentation
- **AI Agents API**: https://docs.aimos.ca/ai-agents
- **Dashboard API**: https://docs.aimos.ca/dashboards
- **Workflow API**: https://docs.aimos.ca/workflows

### Support
- **Email**: support@aimos.ca
- **Slack**: #aimos-fort-mcmurray
- **Phone**: 1-800-XXX-XXXX
- **Portal**: https://support.aimos.ca

---

## 🧪 Testing

### Unit Tests
```bash
pytest tests/unit/
```

### Integration Tests
```bash
pytest tests/integration/ --env staging
```

### End-to-End Tests
```bash
pytest tests/e2e/ --location AIM_FMM_001
```

### AI Agent Testing
```bash
python scripts/test_ai_agents.py --location AIM_FMM_001 --full-suite
```

---

## 📝 Change Log

### Version 1.0 (2026-02-20)
- Initial release
- Complete system architecture
- 5 AI agents deployed
- Real-time dashboard
- 5 automated workflows
- Financial model integrated
- Implementation guide complete

### Version 1.1 (Planned)
- Enhanced AI agent learning
- Advanced forecasting models
- Multi-location dashboard
- Mobile app integration

---

## 🤝 Contributing

This is an internal AIMOS project. For contributions:

1. Create feature branch from `main`
2. Follow coding standards
3. Add tests for new features
4. Update documentation
5. Submit PR with detailed description

---

## 📄 License

Proprietary - © 2026 Alberta Injury Management (AIM)  
All rights reserved.

---

## 🎯 Success Criteria

### Phase 1 Success (Month 1-6)
- ✅ All systems deployed and operational
- ✅ AI agents performing at target accuracy
- ✅ Breakeven achieved by Month 5
- ✅ Patient satisfaction >4.5/5
- ✅ Zero compliance violations

### Phase 2 Success (Month 7-12)
- ✅ Expansion to 5 days/week
- ✅ Monthly revenue >$60k sustained
- ✅ EBITDA margin 20-25%
- ✅ Expansion readiness achieved
- ✅ Template validated for replication

---

**Document Version**: 1.0  
**Last Updated**: 2026-02-20  
**Maintained By**: AIMOS Architecture Team  
**Next Review**: 2026-05-20

---

## Contact

**Project Lead**: Chief Operating Officer  
**Technical Lead**: Chief Technology Officer  
**Clinical Lead**: Chief Clinical Officer  
**AI Lead**: Chief AI & Automation Officer

**Project Slack**: #aimos-fort-mcmurray  
**Status Dashboard**: https://aimos.ca/locations/fort-mcmurray
