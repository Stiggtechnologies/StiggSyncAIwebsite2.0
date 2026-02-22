# Fort McMurray Satellite Implementation Guide

## Executive Summary

This guide provides step-by-step instructions for deploying the Fort McMurray satellite location within AIMOS. The system is designed to be:

- **Modular**: Each component can be deployed and tested independently
- **AI-Driven**: 5 AI agents automate key operational functions
- **Human-Supervised**: Critical decisions require clinician approval
- **Fully Compliant**: Meets Alberta healthcare regulations, PIPEDA, and WCB standards
- **Scalable**: Template can be cloned for future satellites

**Expected Timeline**: 8-12 weeks from kickoff to launch  
**Initial Investment**: $47,000  
**Breakeven**: Month 5  
**Year 1 EBITDA**: $23,440 (12.69% margin)

---

## Phase 1: Database & Infrastructure Setup (Week 1-2)

### 1.1 Database Schema Deployment

**Location**: `/schema/location-configuration.sql`

```bash
# Connect to AIMOS production database
psql -h [DB_HOST] -U [DB_USER] -d aimos_production

# Execute schema deployment
\i location-configuration.sql

# Verify deployment
SELECT * FROM locations WHERE location_id = 'AIM_FMM_001';
SELECT * FROM service_rooms WHERE location_id = 'AIM_FMM_001';
SELECT * FROM services WHERE location_id = 'AIM_FMM_001';
```

**Validation Checklist**:
- [ ] Location `AIM_FMM_001` exists
- [ ] 4 rooms configured (R1-R4)
- [ ] 4 service categories created
- [ ] 14 services configured with pricing
- [ ] Financial tracking tables initialized
- [ ] Alert system configured

### 1.2 Initial Data Population

```sql
-- Verify room configurations
SELECT room_name, room_type, default_booking_duration 
FROM service_rooms 
WHERE location_id = 'AIM_FMM_001';

-- Verify service pricing
SELECT s.service_name, s.price, s.billing_code, sc.category_name
FROM services s
JOIN service_categories sc ON s.category_id = sc.category_id
WHERE s.location_id = 'AIM_FMM_001'
ORDER BY sc.display_order, s.service_name;

-- Initialize first month financial record
INSERT INTO location_financials (
    location_id, period_start, period_end,
    rent_expense, marketing_expense
) VALUES (
    'AIM_FMM_001', 
    CURRENT_DATE, 
    CURRENT_DATE + INTERVAL '1 month',
    3500.00,
    1500.00
);
```

---

## Phase 2: AI Agent Deployment (Week 3-4)

### 2.1 Intake AI Agent

**Location**: `/agents/intake-ai-agent.json`

**Deployment Steps**:

1. **Deploy agent configuration**:
```python
import json
from aimos.ai_agents import deploy_agent

with open('agents/intake-ai-agent.json') as f:
    config = json.load(f)

agent = deploy_agent(config)
agent.test()  # Run test scenarios
agent.activate()
```

2. **Configure integration points**:
   - Booking system webhook
   - Patient portal intake form
   - Phone inquiry capture
   - Email inquiry parser

3. **Test triage logic**:
```python
# Test pelvic health routing
test_case_1 = {
    "symptoms": "pelvic pain and incontinence",
    "onset": "postpartum"
}
result = agent.triage(test_case_1)
assert result["specialty"] == "pelvic_health"
assert result["room_id"] == "AIM_FMM_001_R1"

# Test concussion routing
test_case_2 = {
    "symptoms": "headache, dizziness, confusion",
    "mechanism": "head injury 5 days ago"
}
result = agent.triage(test_case_2)
assert result["specialty"] == "concussion"
assert result["priority"] == "urgent"

# Test red flag detection
test_case_3 = {
    "symptoms": "severe headache with vomiting",
    "red_flags": ["loss of consciousness"]
}
result = agent.triage(test_case_3)
assert result["action"] == "DO_NOT_BOOK"
assert result["recommendation"] == "advise_emergency_care"
```

4. **Enable human-in-loop review**:
   - Configure notification to clinic lead
   - Set up approval workflow for red flag cases
   - Enable clinician override mechanism

**Success Criteria**:
- [ ] Agent routes 90%+ of cases correctly (validated by clinician review)
- [ ] Red flags detected 100% of the time (zero miss rate)
- [ ] Average triage time < 30 seconds
- [ ] Clinician approval workflow functional

### 2.2 Schedule Optimization Agent

**Location**: `/agents/schedule-optimization-agent.json`

**Deployment Steps**:

1. Deploy agent and configure calendar integration
2. Set utilization targets (60-85%)
3. Configure service prioritization (high-margin services first)
4. Enable idle capacity alerts
5. Configure weekly reporting to GM and COO

**Testing**:
```python
# Test utilization monitoring
schedule_agent.analyze_utilization(date="2026-03-01")

# Test optimization recommendations
recommendations = schedule_agent.suggest_improvements()
assert len(recommendations) > 0

# Test alert generation
schedule_agent.check_thresholds()
```

**Success Criteria**:
- [ ] Real-time utilization tracking active
- [ ] Weekly optimization reports delivered
- [ ] Idle capacity alerts triggering correctly
- [ ] Recommendations aligned with business goals

### 2.3 Clinical Documentation AI

**Location**: `/agents/clinical-documentation-ai.json`

**Deployment Steps**:

1. Deploy agent with EMR integration
2. Configure specialty templates
3. Enable outcome measure tracking
4. Set up MD summary automation
5. Configure RTW report generation

**Compliance Verification**:
- [ ] PIPEDA compliance validated
- [ ] Clinician approval workflow enforced
- [ ] Audit trail complete for all generated notes
- [ ] Data encryption (AES-256) active

**Success Criteria**:
- [ ] Documentation time reduced by 40%+
- [ ] Clinician satisfaction score > 4/5
- [ ] Outcome measures captured 95%+ of the time
- [ ] Zero compliance violations

### 2.4 Revenue Optimization Agent

**Location**: `/agents/revenue-optimization-agent.json`

**Deployment Steps**:

1. Deploy agent with financial system integration
2. Configure KPI targets
3. Enable breakeven tracking
4. Set up daily/weekly/monthly reports
5. Configure alerts (revenue below target, breakeven at risk, expansion trigger)

**Success Criteria**:
- [ ] Real-time revenue tracking active
- [ ] Daily reports delivered to GM
- [ ] Breakeven alerts functioning
- [ ] Expansion trigger logic validated

### 2.5 Growth & Marketing Agent

**Location**: `/agents/growth-marketing-agent.json`

**Deployment Steps**:

1. Deploy agent with Google Ads and Analytics integration
2. Configure SEO monitoring for target keywords
3. Set up lead conversion tracking
4. Enable reputation management (Google Reviews)
5. Configure referral source tracking

**Initial Setup**:
```bash
# Google Ads campaign structure
- Campaign 1: Pelvic Health (40% of budget)
  - Ad Group: Pelvic Floor Therapy
  - Ad Group: Postpartum Recovery
  - Ad Group: Incontinence Treatment

- Campaign 2: Concussion (25% of budget)
  - Ad Group: Concussion Treatment
  - Ad Group: Post-Concussion Management

- Campaign 3: Industrial Athlete (25% of budget)
  - Ad Group: Workplace Injury
  - Ad Group: Return to Work Assessment

- Campaign 4: Vestibular (10% of budget)
  - Ad Group: Vertigo Treatment
  - Ad Group: Balance Therapy
```

**Success Criteria**:
- [ ] Google Ads campaigns live
- [ ] SEO tracking active for all target keywords
- [ ] Lead conversion funnel tracking end-to-end
- [ ] Review request automation functioning
- [ ] Weekly marketing reports delivered

---

## Phase 3: Dashboard Deployment (Week 5)

### 3.1 KPI Dashboard Configuration

**Location**: `/dashboards/kpi-dashboard-config.json`

**Deployment Steps**:

1. Deploy dashboard to AIMOS portal
2. Configure data source connections
3. Set up real-time refresh (5-minute intervals)
4. Configure access control (role-based)
5. Enable scheduled exports (daily/weekly/monthly)

**Dashboard Sections**:
1. Clinical Performance (5 widgets)
2. Financial Performance (4 widgets)
3. Operational Efficiency (4 widgets)
4. Growth & Marketing (5 widgets)
5. Service Mix Analysis (3 widgets)
6. Active Alerts (1 widget)

**Access Configuration**:
```json
{
  "clinic_gm": "full_access",
  "clinical_lead": "clinical_only",
  "coo": "full_access",
  "ceo": "executive_summary",
  "cfo": "financial_only"
}
```

**Testing**:
- [ ] All widgets loading data correctly
- [ ] Real-time updates functioning
- [ ] Alerts displaying properly
- [ ] Export functionality working
- [ ] Mobile responsive
- [ ] Access controls enforced

---

## Phase 4: Workflow Automation (Week 6)

### 4.1 Deploy Core Workflows

**Location**: `/workflows/automation-workflows.json`

**Workflows to Deploy**:

1. **New Patient Journey** (WF_NEW_PATIENT)
   - 11 automated steps from inquiry to review request
   - Test end-to-end with dummy patient

2. **Specialty Routing** (WF_SPECIALTY_ROUTING)
   - Auto-routing based on symptoms
   - Test all 4 specialties

3. **Employer & WCB Workflow** (WF_EMPLOYER)
   - Weekly progress reports
   - Final clearance automation
   - Test with mock employer case

4. **No-Show Prevention** (WF_NO_SHOW_PREVENTION)
   - Multi-channel reminders
   - Backfill automation
   - Test reminder schedule

5. **Waitlist Management** (WF_WAITLIST_MANAGEMENT)
   - Real-time matching
   - Auto-notification
   - Test with mock waitlist

**Testing Checklist**:
- [ ] Each workflow executes without errors
- [ ] Notifications sent correctly
- [ ] Human-in-loop approvals functioning
- [ ] Escalations triggering appropriately
- [ ] Integration points connected

---

## Phase 5: Financial Model Integration (Week 7)

### 5.1 Activate Financial Tracking

**Location**: `/financial/financial-model.json`

**Setup Steps**:

1. **Configure budget tracking**:
```sql
-- Insert monthly budget targets
INSERT INTO location_budgets (
    location_id, month, target_revenue, target_visits,
    budgeted_expenses_fixed, budgeted_expenses_variable
) VALUES (
    'AIM_FMM_001', '2026-03-01', 6412.50, 50,
    7100.00, 2675.00
);
```

2. **Enable real-time P&L tracking**:
   - Daily revenue aggregation
   - Monthly expense tracking
   - EBITDA calculation automation

3. **Configure breakeven alerts**:
   - Alert when not on track (threshold: 85% of target)
   - Escalate to COO and CFO

4. **Set expansion triggers**:
```json
{
  "expansion_trigger": {
    "condition": "monthly_revenue > 60000 for 3 consecutive months",
    "alert": "coo, ceo",
    "message": "Fort McMurray ready for expansion"
  }
}
```

**Success Criteria**:
- [ ] Daily revenue tracking accurate
- [ ] Monthly P&L auto-generated
- [ ] Breakeven tracking real-time
- [ ] Expansion trigger logic functional

---

## Phase 6: Staff Training (Week 8)

### 6.1 Clinician Training

**Topics**:
1. AI-assisted documentation (Clinical Documentation AI)
2. Outcome measure tracking
3. Specialty-specific protocols
4. RTW reporting workflow
5. Dashboard usage

**Duration**: 4 hours

### 6.2 Admin Training

**Topics**:
1. Booking system + AI triage integration
2. Waitlist management
3. No-show prevention protocols
4. Insurance verification
5. Dashboard monitoring

**Duration**: 3 hours

### 6.3 GM Training

**Topics**:
1. Full dashboard walkthrough
2. AI agent monitoring and overrides
3. Financial tracking and reporting
4. Alert management
5. Expansion decision framework

**Duration**: 6 hours

---

## Phase 7: Soft Launch (Week 9-10)

### 7.1 Limited Operations

**Approach**:
- Open 2 days/week initially
- Maximum 5 patients/day
- Full AI agent suite active
- Daily debrief with GM and clinical lead

**Objectives**:
- Test all systems end-to-end
- Identify and fix any issues
- Gather clinician feedback on AI tools
- Refine workflows as needed

**Success Criteria**:
- [ ] Zero critical system failures
- [ ] AI agents performing as expected
- [ ] Clinician satisfaction with tools
- [ ] Patient experience positive
- [ ] All workflows executing smoothly

### 7.2 Issue Resolution

**Process**:
1. Daily stand-up meeting
2. Log all issues in centralized tracker
3. Prioritize by severity
4. Fix critical issues within 24 hours
5. Document lessons learned

---

## Phase 8: Full Launch (Week 11-12)

### 8.1 Ramp to 3 Days/Week

**Schedule**:
- Week 11: 3 days/week, 6 patients/day
- Week 12: 3 days/week, 8 patients/day target

### 8.2 Marketing Launch

**Activities**:
- Google Ads campaigns go live ($1,500/month budget)
- Local SEO optimization active
- Physician outreach begins
- Community presence initiated
- Review request automation live

### 8.3 Monitoring & Optimization

**Daily**:
- Review dashboard metrics
- Monitor AI agent performance
- Address any alerts
- Patient experience check-ins

**Weekly**:
- GM review meeting with COO
- Marketing performance review
- Financial performance review
- Workflow optimization

**Monthly**:
- Executive review (CEO, COO, CFO, CCO)
- Strategic planning
- Expansion readiness assessment

---

## Phase 9: Ongoing Operations (Month 2+)

### 9.1 Performance Monitoring

**KPIs to Track Daily**:
- Visits completed
- Revenue generated
- Room utilization
- No-show rate
- Lead conversion rate

**KPIs to Track Weekly**:
- New patient volume
- Service mix
- Clinician productivity
- Marketing performance
- Google rankings

**KPIs to Track Monthly**:
- Revenue vs budget
- EBITDA
- Breakeven progress
- Growth rate
- Expansion readiness

### 9.2 Continuous Improvement

**Quarterly Reviews**:
- AI agent performance audit
- Workflow optimization
- Pricing review
- Service mix analysis
- Expansion planning

**Annual Reviews**:
- Strategic planning
- Budget setting
- Capital planning
- Technology upgrades

---

## Phase 10: Expansion Planning (Month 7+)

### 10.1 Expansion Triggers

**Trigger 1: Revenue Threshold Met**
- Condition: Monthly revenue > $60,000 for 3 consecutive months
- Action: Prepare business case for 2nd clinician

**Trigger 2: Utilization Threshold Met**
- Condition: Sustained utilization > 75%
- Action: Expand to 5 days/week (Phase 2)

**Trigger 3: Waitlist Saturation**
- Condition: Waitlist > 2 weeks for any specialty
- Action: Add specialist capacity

### 10.2 Expansion Pathways

**Option 1: Add 2nd Clinician**
- Investment: $30,000
- Revenue potential: +$40-50k/month
- EBITDA impact: +$10-20k/month
- Timeline: 3 months to ramp

**Option 2: Expand to 5 Days/Week**
- Investment: $5,000 (scheduling adjustment)
- Revenue potential: +$30k/month
- EBITDA impact: +$15k/month
- Timeline: Immediate

**Option 3: Add Evening Hours**
- Investment: $8,000
- Revenue potential: +$15-20k/month
- EBITDA impact: +$8-10k/month
- Timeline: 2 months

**Option 4: Expand Square Footage**
- Investment: $50-75k
- Revenue potential: Double current
- EBITDA impact: +$50k+/month
- Timeline: 6-12 months

---

## Troubleshooting Guide

### Issue: AI Agent Not Routing Correctly

**Diagnosis**:
```python
# Check agent logs
agent.get_logs(filter="error", last_n=50)

# Test specific case
result = agent.triage(problematic_case)
print(result["reasoning"])
```

**Solutions**:
- Review triage logic keywords
- Check for edge cases
- Retrain model if accuracy < 90%
- Enable human override for ambiguous cases

### Issue: Dashboard Not Loading

**Diagnosis**:
- Check data source connections
- Verify database queries
- Check browser console for errors
- Test API endpoints

**Solutions**:
- Restart dashboard service
- Clear cache
- Check permissions
- Verify network connectivity

### Issue: Revenue Below Target

**Diagnosis**:
- Check patient volume (demand issue?)
- Check no-show rate (retention issue?)
- Check average revenue per visit (pricing issue?)
- Check service mix (too many low-margin services?)

**Solutions**:
- Increase marketing spend
- Improve no-show prevention
- Adjust pricing
- Promote high-margin services

### Issue: Low Clinician Utilization

**Diagnosis**:
- Check booking density
- Check idle time between appointments
- Check cancellations and no-shows

**Solutions**:
- Optimize booking slots
- Reduce buffer times
- Implement backfill automation
- Adjust clinician schedule

---

## Success Metrics

### Month 1-3 Targets
- New patients: 60-70 total
- Total visits: 170-180
- Revenue: $21,000-24,000 cumulative
- Utilization: 50-60%
- No-show rate: <12%
- Patient satisfaction: >4.5/5

### Month 4-6 Targets
- New patients: 100-110 total
- Total visits: 265-285
- Revenue: $36,000-40,000 cumulative
- Utilization: 65-75%
- Breakeven achieved by Month 5
- Google review rating: >4.5

### Month 7-12 Targets
- New patients: 250-260 total
- Total visits: 800-850
- Revenue: $110,000-120,000 cumulative
- Utilization: 75-85%
- EBITDA margin: 20-25%
- Expansion readiness: Achieved

---

## Compliance Checklist

### Healthcare Regulations
- [ ] Alberta College of Physiotherapists registration
- [ ] Professional liability insurance active
- [ ] Facility meets health and safety standards
- [ ] Infection control protocols in place

### Data & Privacy
- [ ] PIPEDA compliance validated
- [ ] Patient consent forms approved
- [ ] Data encryption active (AES-256)
- [ ] Access controls enforced
- [ ] Audit trail complete

### Financial & Legal
- [ ] Business licenses obtained
- [ ] Insurance policies active
- [ ] Contracts with vendors signed
- [ ] Billing compliance verified
- [ ] Tax registration complete

---

## Appendices

### A. Contact Information

**AIMOS Support**
- Email: support@aimos.ca
- Phone: 1-800-XXX-XXXX
- Slack: #aimos-fort-mcmurray

**AI Agent Support**
- Email: ai-support@aimos.ca
- Documentation: https://docs.aimos.ca/ai-agents

### B. Additional Resources

- Schema Documentation: `/schema/README.md`
- Agent Documentation: `/agents/README.md`
- Dashboard Documentation: `/dashboards/README.md`
- Workflow Documentation: `/workflows/README.md`
- Financial Model: `/financial/README.md`

### C. Escalation Matrix

| Issue Type | First Contact | Escalation 1 | Escalation 2 |
|------------|---------------|--------------|--------------|
| Technical | AIMOS Support | DevOps Lead | CTO |
| Clinical | Clinical Lead | CCO | CEO |
| Financial | Controller | CFO | CEO |
| Operational | Clinic GM | COO | CEO |
| AI Agents | AI Support | Chief AI Officer | CTO |

---

**Document Version**: 1.0  
**Last Updated**: 2026-02-20  
**Next Review**: 2026-05-20
