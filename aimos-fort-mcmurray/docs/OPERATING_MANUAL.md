# AIMOS Fort McMurray - AI-First Clinic Operating Manual

**Document Type**: Standard Operating Procedures (SOP)  
**Version**: 1.0  
**Effective Date**: 2026-02-20  
**Classification**: Internal Operations  
**Review Cycle**: Quarterly

---

## Table of Contents

1. [Purpose & Scope](#1-purpose--scope)
2. [Roles & Responsibilities](#2-roles--responsibilities)
3. [Patient Journey SOPs](#3-patient-journey-sops)
4. [Specialty Protocols](#4-specialty-protocols)
5. [Employer RTW Protocols](#5-employer-rtw-protocols)
6. [Quality & Compliance SOPs](#6-quality--compliance-sops)
7. [AI Governance](#7-ai-governance)
8. [KPIs & Performance Monitoring](#8-kpis--performance-monitoring)
9. [Expansion Triggers](#9-expansion-triggers)

---

## 1. Purpose & Scope

### 1.1 Purpose

This operating manual establishes standard operating procedures for the AIM Performance Fort McMurray satellite location. The clinic is designed to be:

- **Lean**: Optimized for efficiency with minimal overhead
- **High-margin**: Focus on specialty services with superior reimbursement
- **Specialty-positioned**: Market leader in pelvic health, concussion, vestibular, and industrial athlete services
- **AI-assisted with humans in the loop**: Technology-enabled while maintaining clinical judgment supremacy
- **Repeatable**: Scalable template for future Alberta satellites

### 1.2 Scope

This manual applies to:
- All clinical and administrative staff at Fort McMurray location
- All AI agents operating within AIMOS
- All patient interactions from initial inquiry through discharge
- All employer and physician relationships
- All compliance and quality assurance activities

### 1.3 Regulatory Framework

This clinic operates under:
- Alberta Health Services regulations
- Alberta College of Physiotherapists standards
- PIPEDA (Personal Information Protection and Electronic Documents Act)
- Alberta Health Information Act (HIA)
- Workers' Compensation Board Alberta requirements (where applicable)

---

## 2. Roles & Responsibilities

### 2.1 Clinic GM (or Site Lead)

**Responsibilities**:
- Day-to-day performance oversight
- Schedule approval and optimization
- Staff coordination and scheduling
- Patient experience management
- Local marketing and community relationships
- Daily dashboard review
- Operational KPI monitoring
- Budget adherence

**Reports To**: COO  
**Decision Authority**: Operational decisions <$500; staff scheduling; patient flow

### 2.2 Clinical Lead

**Responsibilities**:
- Clinical protocol adherence
- Outcome measure quality
- Clinician training and mentorship
- Safety incident review
- AI agent clinical output validation
- Documentation quality assurance

**Reports To**: CCO  
**Decision Authority**: Clinical protocols; treatment pathways; clinician credentialing

### 2.3 Treating Clinicians (PT, PelvicPT, AT, MOT, RMT)

**Responsibilities**:
- Direct patient care
- Clinical documentation (AI-assisted, clinician-signed)
- Outcome measure administration
- Patient education and home program delivery
- Referral coordination
- Compliance with specialty protocols

**Reports To**: Clinical Lead  
**Decision Authority**: Treatment decisions; discharge planning; referral recommendations

### 2.4 Front Desk / Care Coordinator

**Responsibilities**:
- Exception handling for booking system
- Patient phone inquiries (AI-assisted triage)
- Insurance verification
- Payment collection
- Appointment confirmation
- Patient experience first contact

**Can Be**: On-site or virtual/remote  
**Reports To**: Clinic GM  
**Decision Authority**: Booking adjustments; basic patient inquiries

### 2.5 Billing Specialist (Centralized)

**Responsibilities**:
- Claim approval and submission
- Payment posting
- AR escalation and collections
- Insurance denial management
- Revenue cycle optimization

**Reports To**: CFO  
**Decision Authority**: Claim submission timing; payment plans; write-offs <$100

### 2.6 AI Agents

**Autonomous Functions**:
- Intake triage and routing recommendations
- Schedule optimization suggestions
- Documentation drafting
- Reporting and analytics
- Marketing performance monitoring

**Human Oversight**: Required for all final decisions  
**Reports To**: Chief AI & Automation Officer  
**Escalation**: Clinical Lead (clinical matters), Clinic GM (operational matters)

---

## 3. Patient Journey SOPs

### SOP 01 — Lead Capture → Intake

**Objective**: Convert inquiries into correctly triaged bookings

**Lead Sources**:
- Google Business Profile (GBP)
- Web intake form
- Phone inquiry
- Physician referral
- Employer referral
- Walk-in

**Process**:

1. **Inquiry Received**
   - Source tagged automatically (UTM parameters for digital, manual for phone/walk-in)
   - Basic info captured: name, contact, presenting issue, insurance type

2. **AI Intake Agent Triage**
   - Agent analyzes presenting issue keywords
   - Routes to specialty category (pelvic|concussion|vestibular|RTW|general)
   - Recommends service, room type, and provider
   - **Red flag detection**: Automatic screening for urgent medical conditions

3. **Red Flag Protocol**
   ```
   IF red_flag_detected:
     - DO NOT BOOK
     - Create task for on-duty clinician
     - Provide patient with emergency/urgent care guidance
     - Log incident for quality review
   ```

4. **Booking Offered**
   - Present available times matching specialty and room requirements
   - Capture insurance/payor information
   - Send booking confirmation (email + SMS)

5. **Pre-Intake Forms Sent**
   - Timing: Immediately after booking
   - Delivery: Email + SMS link
   - Content: Demographic, medical history, consent, insurance
   - AI pre-fill: Agent populates known fields from triage

**Quality Metrics**:
- Inquiry-to-booking conversion rate: Target 70%
- Red flag detection accuracy: Target 100% (zero misses)
- Triage accuracy (clinician validation): Target 90%+

---

### SOP 02 — Booking Rules & Room Assignment

**Objective**: Optimize utilization while protecting specialty blocks

**Room Assignment Logic**:

**Room 1 - Pelvic Health Suite**
- **Reserved For**: Pelvic health assessments and treatments
- **Privacy Level**: High (discreet entrance, soundproofing)
- **Booking Rules**:
  - No general overflow unless explicitly authorized by Clinic GM
  - Chaperone policy enforced
  - Additional consent for internal exams
  - Minimum 15-minute buffer between appointments

**Room 2 - Concussion/Vestibular (Neuro Room)**
- **Reserved For**: Concussion and vestibular/dizziness cases
- **Priority**: Fast-access slots for acute concussion (within 72 hours)
- **Booking Rules**:
  - Prioritize neuro cases
  - General physio allowed only if neuro room idle >48 hours ahead

**Room 3 - General Physio**
- **Reserved For**: General musculoskeletal cases
- **Booking Rules**:
  - Flexible overflow capacity
  - Can accommodate pelvic/neuro if specialty rooms at capacity (with patient consent)

**Room 4 - Performance Gym**
- **Reserved For**: RTW assessments, active rehab, group sessions
- **Capacity**: Up to 4 simultaneous patients for group blocks
- **Booking Rules**:
  - RTW assessments: 60-minute blocks
  - Active rehab: 45-minute blocks
  - Group sessions: 90-120 minutes, max 4 participants
  - Employer contract cases prioritized

**Scheduling Optimization**:
- Schedule Optimization Agent reviews utilization weekly
- Suggests:
  - Adding group blocks when RTW volume >10/week
  - Adjusting pelvic specialist days based on demand
  - Adding evening hours if daytime utilization >85% sustained

**Approval Required**:
- All schedule changes affecting existing appointments
- Room type substitutions outside standard rules
- Addition of new time blocks or operating days

---

### SOP 03 — Visit Flow (Assessment to Discharge)

**Objective**: Deliver consistent, high-quality patient experience

**Pre-Arrival**:
- Automated reminders: 7 days, 2 days, 1 day, 2 hours before appointment
- Intake forms completed online (minimum 80% completion target)
- Insurance pre-verification by billing

**Arrival**:
1. Patient check-in (digital or front desk)
2. Consent verification (AI flags any missing consent)
3. Outcome measures administered (baseline)
4. Brief patient to clinician

**Assessment/Treatment**:
1. Clinical assessment per specialty protocol
2. Objective measures documented
3. Clinical Documentation AI drafts SOAP note in real-time
4. Clinician reviews, edits, and signs note
5. Treatment plan explained and documented

**Plan & Follow-Up**:
1. Treatment frequency and duration recommended
2. Home program assigned (digital delivery)
3. Follow-up appointments booked before patient leaves
4. Educational materials provided
5. MD/employer update generated if applicable

**Post-Visit**:
- Payment collected or claim initiated
- Outcome measures updated (milestone visits)
- Patient satisfaction survey (automated, ethical)

**Quality Checkpoints**:
- Outcome measures captured: 95% target
- Note signed within 24 hours: 100% requirement
- Same-day booking for follow-ups: 85% target
- Patient satisfaction score: >4.5/5 target

---

### SOP 04 — Discharge & Reactivation

**Objective**: Ensure successful outcomes and ethical reactivation

**Discharge Criteria** (Pathway-Specific):

**Pelvic Health**:
- Functional goals achieved (documented via outcome measures)
- >50% improvement in primary complaint
- Independent with home program
- Patient verbalizes understanding and satisfaction

**Concussion**:
- Symptom-free at rest and with exertion
- Return to work/sport protocol completed
- Vestibular and visual function normalized
- MD clearance obtained if required

**Vestibular**:
- Dizziness Handicap Inventory <30 or 50% improvement
- Fall risk minimized
- Balance function adequate for ADLs

**RTW (Industrial Athlete)**:
- Functional capacity matches job demands
- Employer/WCB clearance obtained
- Return to full duties achieved
- Final report submitted and signed

**Discharge Process**:
1. Final outcome measures administered
2. Discharge summary template completed (AI-assisted)
3. MD final update sent (if referral-based)
4. Employer final report (if WCB/employer case)
5. Home program reinforced
6. Patient education on self-management

**Post-Discharge**:
- **Ethical review request**: 2-3 days post-discharge (if patient consented)
- **Reactivation cadence**:
  - 60 days: "How are you doing?" check-in (if consented)
  - 120 days: Seasonal wellness check-in
  - 180 days: Gentle reactivation offer (compliant messaging)

---

## 4. Specialty Protocols

### 4.1 Pelvic Health Protocol

**Scope**: Postpartum, incontinence, pelvic pain, prolapse, male pelvic health

**Special Considerations**:
- **Privacy**: Discreet booking, private entrance/exit if possible
- **Chaperone Policy**: Offer chaperone for all internal exams
- **Consent**: Specific consent for internal assessment
- **Cultural Sensitivity**: Acknowledge and respect cultural considerations

**Clinical Pathway**:
1. **Initial Assessment (60 min)**:
   - Detailed history (birth trauma, surgical history, bowel/bladder/sexual function)
   - External musculoskeletal assessment
   - Internal pelvic floor assessment (if consented)
   - Baseline outcome measures: PFDI-20, PFIQ-7, UDI-6

2. **Treatment Plan (6-12 visits typical)**:
   - Manual therapy, biofeedback, therapeutic exercise
   - Bowel/bladder retraining
   - Core/pelvic floor coordination training
   - Home program emphasis

3. **Discharge Criteria**:
   - 50%+ improvement in primary outcome measure
   - Functional goals achieved
   - Independent with self-management

**Red Flags (Urgent Referral)**:
- Sudden onset severe pelvic pain
- Uncontrolled bleeding
- Signs of infection (fever + pelvic pain)
- Suspected cauda equina (saddle anesthesia, bowel/bladder dysfunction)

---

### 4.2 Concussion Protocol

**Scope**: Acute concussion, post-concussion syndrome, return to work/sport

**Special Considerations**:
- **Urgency**: Fast-track booking (within 72 hours for acute cases)
- **Symptom Monitoring**: Daily symptom tracking (patient portal)
- **Multidisciplinary**: Coordinate with MD, optometry, psychology as needed

**Clinical Pathway**:
1. **Acute Assessment (60 min)**:
   - Mechanism of injury, symptom onset
   - SCAT5 or equivalent
   - Vestibular/ocular motor screening (VOMS)
   - Cognitive assessment (if indicated)
   - Baseline outcome measures: PCSS, symptom severity score

2. **Staged Return Protocol**:
   - **Stage 1**: Symptom-limited activity, rest
   - **Stage 2**: Light aerobic activity (symptom threshold <3/10)
   - **Stage 3**: Sport/work-specific activity
   - **Stage 4**: Non-contact training drill/full work duties
   - **Stage 5**: Full return to sport/work (MD clearance if required)

3. **Treatment Plan (4-12 visits typical)**:
   - Sub-symptom threshold exercise
   - Vestibular rehabilitation
   - Cervical spine treatment
   - Vision therapy referral if needed
   - Gradual return to work/sport progression

4. **Discharge Criteria**:
   - Symptom-free at rest and with exertion
   - PCSS score <10 or baseline
   - Successful completion of return protocol
   - MD clearance (if required by employer/sport)

**Red Flags (Urgent Medical Referral)**:
- Worsening headache with vomiting
- New or worsening neurological symptoms
- Seizure activity
- Confusion or disorientation
- Loss of consciousness or amnesia post-initial injury

---

### 4.3 Vestibular Protocol

**Scope**: BPPV, vestibular hypofunction, balance disorders, dizziness

**Special Considerations**:
- **Scheduling**: Prefer morning appointments (symptom management)
- **Fall Risk**: Assess and document; provide safety education
- **Coordination**: May require ENT, neurology, or audiology referral

**Clinical Pathway**:
1. **Dizziness Assessment (60 min)**:
   - Detailed symptom history (triggers, duration, characteristics)
   - Dix-Hallpike and supine roll tests (BPPV screening)
   - Dynamic gait index, balance testing
   - Baseline outcome measures: DHI, ABC scale

2. **Treatment Plan (Pathway-Specific)**:
   - **BPPV**: Canalith repositioning (Epley, Semont); often 1-3 visits
   - **Vestibular Hypofunction**: Gaze stabilization, habituation, balance training; 6-8 visits typical
   - **Balance Retraining**: Progressive balance exercises, fall prevention; 6-12 visits typical

3. **Discharge Criteria**:
   - DHI <30 or 50% improvement
   - Functional balance adequate for ADLs
   - Fall risk minimized
   - Independent with home program

**Red Flags (Urgent Medical Referral)**:
- New onset severe headache with dizziness
- Sudden hearing loss or tinnitus
- New neurological symptoms (weakness, numbness, vision changes)
- Suspected stroke (FAST criteria)

---

### 4.4 Industrial Athlete / RTW Protocol

**Scope**: Workplace injury, WCB cases, return-to-work assessments, functional capacity evaluations

**Special Considerations**:
- **Employer Communication**: Weekly progress updates
- **Job Demands**: Obtain physical demands analysis (PDA)
- **Work Simulation**: Use gym for job-specific conditioning
- **WCB Compliance**: Adhere to Alberta WCB reporting standards

**Clinical Pathway**:
1. **RTW Assessment (60 min)**:
   - Injury mechanism, work demands, prior treatment
   - Functional capacity evaluation (lifting, carrying, sustained postures)
   - Comparison to job PDA
   - Baseline outcome measures: functional testing, pain scale, work tolerance

2. **Initial Report to Employer** (Within 24 hours):
   - Assessment findings
   - Current functional capacity
   - Restrictions and limitations
   - Treatment plan and expected RTW timeline

3. **Work Conditioning Program (4-8 weeks typical)**:
   - Progressive strengthening
   - Endurance training
   - Job-specific simulation (gym-based)
   - Gradual return to work protocol (modified duties → full duties)

4. **Weekly Reporting**:
   - Treatment progress
   - Functional improvements
   - Current work restrictions
   - Projected full-duty date

5. **Final Clearance**:
   - Functional capacity matches or exceeds job demands
   - Work clearance documentation (clinician-signed)
   - Any permanent restrictions documented
   - Employer and WCB notification

**Quality Metrics**:
- Time to RTW: Industry benchmark
- Successful RTW rate: Target 85%+
- Employer satisfaction: Target >4.5/5
- Reclaim rate: Target <10%

---

## 5. Employer RTW Protocols

### SOP 05 — Employer Referral Intake

**Process**:
1. Employer referral received (phone, fax, portal)
2. Capture: Employer name, contact, WCB claim#, job description, PDA
3. Intake Agent routes to "RTW" category
4. Request missing documents (job description, PDA, authorization)
5. Schedule RTW assessment within 48 hours

---

### SOP 06 — Employer Reporting Cadence

**Weekly Progress Reports**:
- **Trigger**: All active WCB/employer cases
- **Delivery**: Email or employer portal
- **Content**:
  - Treatment summary
  - Functional progress
  - Current restrictions
  - Projected RTW date
- **Approval**: Treating clinician must approve before sending

**At-Risk Worker Triggers**:
- **Missed visits**: 2 consecutive no-shows
- **Plateau**: No functional improvement for 2 consecutive weeks
- **Non-adherence**: Not completing home program
- **Action**: Clinician and Clinic GM notified; employer updated; discuss case management

---

### SOP 07 — Final RTW Clearance

**Process**:
1. Final functional capacity evaluation
2. Confirmation that capacity meets/exceeds job demands
3. Final report generation (AI-assisted, clinician-signed)
4. **Required Content**:
   - Final functional status
   - Work clearance (full duties / modified duties / unfit)
   - Any permanent restrictions
   - Return to full duties date
5. Delivery to employer and WCB
6. Clinician signature and professional seal

---

## 6. Quality & Compliance SOPs

### SOP 08 — Access Control & Privacy

**Principle**: Least privilege access

**Access Levels**:
- **Clinical Staff**: Access to own patients only
- **Admin Staff**: Scheduling and billing data only (no clinical notes)
- **Clinic GM**: Operational data, aggregated clinical metrics (de-identified)
- **AI Agents**: Read-only for analytics; write for drafts (human approval required)

**PHI Handling**:
- All PHI encrypted at rest and in transit (AES-256)
- Access logged in audit_logs table
- Minimum necessary principle enforced
- Patient consent for all data use beyond direct care

**Privacy Breach Protocol**:
1. Immediate containment
2. Notify Privacy Officer within 1 hour
3. Assess risk to individual
4. Notify affected individual if required (within 24 hours)
5. File incident report with Privacy Commissioner (if required)
6. Root cause analysis and remediation plan

---

### SOP 09 — Documentation Completeness

**Requirements**:
- **Notes signed**: Within 24 hours of visit (100% compliance)
- **Outcome measures**: Baseline, milestone, discharge (95% target)
- **Consent**: Current and complete (100% requirement)
- **Insurance verification**: Pre-visit (90% target)

**Weekly Quality Check**:
- Clinical Lead reviews random sample (10 notes/week)
- Documentation completeness scorecard
- Remediation plan for non-compliance

---

### SOP 10 — Incident Response

**Types of Incidents**:
- Patient safety event
- Privacy breach
- Clinical error or near-miss
- Equipment failure
- Security incident

**Process**:
1. **Immediate**: Ensure patient safety / contain breach
2. **Report**: Notify Clinical Lead and Clinic GM within 1 hour
3. **Document**: Complete incident report in AIMOS
4. **Investigate**: Root cause analysis within 48 hours
5. **Remediate**: Implement corrective actions
6. **Follow-up**: Verify effectiveness within 30 days

**Escalation**:
- All patient safety events → CCO
- All privacy breaches → Privacy Officer
- All serious incidents → CEO

---

## 7. AI Governance

### 7.1 Human-in-the-Loop (HITL) Principle

**Core Rule**: AI agents can propose, draft, and recommend. Humans must approve all final decisions affecting patient care, clinical documentation, financial transactions, and schedule changes.

### 7.2 Agent-Specific Approval Requirements

| Agent | Autonomous Functions | Requires Human Approval |
|-------|----------------------|-------------------------|
| Intake AI | Triage routing, intake form prefill | Red flag cases, ambiguous symptoms |
| Schedule Optimization | Utilization analysis, recommendations | Any schedule changes affecting patients |
| Clinical Documentation | SOAP note drafting, outcome measure suggestions | All clinical notes before signing |
| Revenue Optimization | Revenue tracking, alerts | Pricing changes, write-offs |
| Growth & Marketing | SEO monitoring, ad performance tracking | Ad copy publishing, content publishing |
| Employer RTW | Report drafting | All employer communications |

### 7.3 AI Agent Monitoring

**Daily**:
- Agent run success rate (target >95%)
- Escalations requiring human review

**Weekly**:
- Agent accuracy validation (clinician spot-checks)
- Recommendation adoption rate

**Monthly**:
- Full agent performance audit
- Model retraining needs assessment

**Quarterly**:
- Governance policy review
- Ethics and compliance audit

### 7.4 Overriding AI Recommendations

**Process**:
1. Clinician can override any AI recommendation
2. Reason for override documented
3. Override logged for continuous learning
4. Frequent overrides → model retraining triggered

---

## 8. KPIs & Performance Monitoring

### 8.1 Reporting Cadence

**Daily** (Clinic GM):
- Visits completed
- Cancellations and no-shows
- Room utilization
- Revenue generated

**Weekly** (Clinic GM → COO):
- Service mix breakdown
- Revenue per visit
- Referral sources
- Capacity gaps and idle time

**Monthly** (Executive Team):
- EBITDA proxy (revenue - expenses)
- AR aging
- Growth ROI (marketing spend vs new patient acquisition)
- Staffing plan and productivity
- Expansion readiness assessment

### 8.2 Key Performance Indicators

**Clinical KPIs**:
- Visits per day: Target 15 (Month 12)
- Revenue per visit: Target $135
- Pelvic utilization: 60-85%
- Concussion utilization: 60-85%
- RTW conversion rate: Target 85%

**Financial KPIs**:
- Monthly revenue: Target $60k (Month 7+)
- EBITDA margin: Target 25%
- Breakeven status: Month 5
- Revenue per sq ft: Monitor vs Edmonton main

**Operational KPIs**:
- Room utilization: 60-85% optimal
- Clinician utilization: Target 80%
- No-show rate: Target <8%
- Lead conversion: Target 70%

**Growth KPIs**:
- Google ranking average: Target top 3
- Employer contracts: Target 3 (Month 12)
- Physician referrals: Target 20/month (Month 12)
- Google review rating: Target 4.8/5

---

## 9. Expansion Triggers

### 9.1 Trigger 1: Revenue Threshold

**Condition**: Monthly revenue > $60,000 for 3 consecutive months

**Action**: Prepare business case for 2nd clinician or expand to 5 days/week

**Expected Impact**:
- Revenue potential: +$40-50k/month
- EBITDA impact: +$10-20k/month
- Investment: $30,000 (2nd clinician) or $5,000 (5 days/week)

---

### 9.2 Trigger 2: Utilization Threshold

**Condition**: Sustained utilization > 75% for 6 consecutive weeks

**Action**: Expand to Phase 2 (5 days/week from 3 days/week)

**Expected Impact**:
- Revenue potential: +$30k/month
- EBITDA impact: +$15k/month
- Investment: $5,000

---

### 9.3 Trigger 3: Waitlist Saturation

**Condition**: Waitlist > 7 days for priority services (pelvic, concussion)

**Action**:
1. Add specialist days for affected specialty
2. If sustained, add evening hours (5-8 PM select days)
3. If still saturated, add 2nd clinician

**Expected Impact**:
- Revenue potential: +$15-20k/month
- EBITDA impact: +$8-10k/month
- Investment: $8,000

---

### 9.4 Approval Process

**Step 1**: Clinic GM identifies trigger condition  
**Step 2**: Prepare expansion business case (financial model, clinician recruitment plan)  
**Step 3**: Submit to COO and CFO for review  
**Step 4**: Present to CEO for final approval  
**Step 5**: Execute expansion plan (3-month implementation timeline)

---

## Appendices

### Appendix A: Red Flag Checklist

**Immediate Medical Attention (DO NOT BOOK)**:
- Saddle anesthesia
- Acute neurological deficit
- Severe headache post-trauma with vomiting
- Loss of consciousness
- Seizure
- Weakness in limbs
- Sudden loss of bowel/bladder control
- Chest pain
- Shortness of breath
- Signs of stroke (FAST)
- Severe trauma

**Urgent Physician Referral (DO NOT BOOK)**:
- Fever with back pain
- Unexplained weight loss
- Night pain (non-mechanical)
- History of cancer with new onset pain
- Progressive neurological symptoms
- Suspected cauda equina

---

### Appendix B: Outcome Measures by Specialty

**Pelvic Health**:
- Pelvic Floor Distress Inventory (PFDI-20)
- Pelvic Floor Impact Questionnaire (PFIQ-7)
- Urogenital Distress Inventory (UDI-6)
- Visual Analog Scale (VAS) for pain

**Concussion**:
- Sport Concussion Assessment Tool (SCAT5)
- Post-Concussion Symptom Scale (PCSS)
- Vestibular Ocular Motor Screening (VOMS)
- Balance Error Scoring System (BESS)

**Vestibular**:
- Dizziness Handicap Inventory (DHI)
- Activities-Specific Balance Confidence Scale (ABC)
- Dynamic Gait Index (DGI)
- Timed Up and Go (TUG)

**RTW/Industrial Athlete**:
- Functional Capacity Evaluation (FCE)
- Job-specific testing against PDA
- Work tolerance measures
- Pain scale (VAS/NPRS)

---

### Appendix C: Emergency Contact Information

**Medical Emergencies**: 911  
**AHS Health Link**: 811  
**Poison Control**: 1-800-332-1414  
**Mental Health Crisis Line**: 1-877-303-2642  

**Internal Escalation**:
- Clinical Lead: [Phone]
- Clinic GM: [Phone]
- CCO (Chief Clinical Officer): [Phone]
- Privacy Officer: [Phone]

---

**Document Control**:
- **Author**: AIMOS Systems Architecture Team
- **Approved By**: COO, CCO, CFO
- **Version**: 1.0
- **Effective Date**: 2026-02-20
- **Next Review**: 2026-05-20
- **Distribution**: All Fort McMurray staff, AIMOS Portal

---

**END OF OPERATING MANUAL**
