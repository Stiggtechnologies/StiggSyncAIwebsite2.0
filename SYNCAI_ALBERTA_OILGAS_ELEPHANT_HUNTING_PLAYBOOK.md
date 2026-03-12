# SyncAI — Alberta Industrial (O&G / Mining / Petrochem) Elephant-Hunting Playbook
*Version: 2026-02-23 (draft for Orville review)*

> **Prime directive:** SyncAI is **industrial AI infrastructure** (on‑prem / hybrid) that enables **autonomous operations** with a suite of AI agents. This is **not** a SaaS app sale. Target deal shape: **$500K–$2M/year**, **3–5 year term**, enterprise security + OT integration.

---

## 0) One-page framing (what you say in 20 seconds)

**Positioning (simple):**
- **“SyncAI is an on-prem/hybrid industrial AI infrastructure layer that turns your OT + maintenance data into an autonomous operations system.”**
- It **connects** to historians/SCADA/CMMS/ERP, **observes** operations, **recommends** actions, and can **orchestrate** closed-loop workflows (human-in-the-loop by default).

**Where it fits:**
- Above: dashboards/CMMS/EAM/MES
- Below: SCADA/DCS/PLC, historians, sensors, OT networks
- Alongside: data platforms (Snowflake/Databricks), cloud hyperscalers

**Why it matters in Alberta:**
- Massive asset intensity + safety + compliance.
- Downtime costs often **$100K–$500K/hour** (upgraders/refineries/oilsands mining, major compressor trains).
- High cost of scarce reliability talent; retirees; tribal knowledge.
- Security + data sovereignty pressures push toward on‑prem/hybrid.

---

## 1) Target account list (Alberta) — Tiered

### Tier 1 “Whales” (aim: $1M–$2M/year)
These accounts have multi-site assets, large maintenance budgets, mature OT, and the political need for reliability + safety wins.

1) **Suncor Energy** (oilsands + upgrading + refining; Fort McMurray / Edmonton)
   - Likely buyers: VP Operations, VP Upstream/Upgrading, VP Reliability, CIO/VP Digital/OT Security, Plant GM
   - Wedge pain: unplanned downtime on critical trains, integrity management, work execution quality
   - Likely stack: Honeywell/Emerson/ABB DCS, OSIsoft PI/AVEVA historian, SAP/Maximo, AspenTech

2) **Cenovus Energy** (oilsands + Lloydminster + downstream via Husky legacy)
   - Buyers: EVP Downstream/Upstream Ops, VP Reliability, Refinery GM, Director Maintenance/Turnaround
   - Wedge: turnaround planning, reliability analytics across sites, operator assist

3) **Canadian Natural Resources (CNRL)** (Horizon + thermal, heavy oil; major operator)
   - Buyers: SVP Operations, VP Upstream Ops, Director Maintenance/Integrity, OT/IT Security
   - Wedge: predictive reliability + integrity + field ops triage at scale

4) **Imperial Oil** (Kearl + Strathcona refinery)
   - Buyers: Plant Manager/GM, Maintenance & Reliability leadership, Digital/IT
   - Wedge: high-criticality asset health + operations decision support

5) **Syncrude** (oilsands mining + upgrading; Fort McMurray)
   - Buyers: COO/VP Operations, VP Maintenance/Reliability, Asset Integrity
   - Wedge: catastrophic failure avoidance, throughput stability

6) **Shell Canada — Scotford complex** (upgrader + chemicals; Fort Saskatchewan)
   - Buyers: Site GM, Reliability manager, Process control leadership, OT security
   - Wedge: process stability, rotating equipment reliability, anomaly detection

7) **Pembina Pipeline** (midstream, gas plants, NGL, pipelines; AB HQ)
   - Buyers: EVP Operations, VP Midstream, VP Reliability/Integrity, CIO/CTO
   - Wedge: compressor station reliability, leak/incident prevention, integrity workflows

8) **Enbridge** (pipelines + terminals; major Canadian operator with AB footprint)
   - Buyers: VP Liquids Pipelines Ops, Integrity management, OT cybersecurity leadership
   - Wedge: integrity + risk-based inspection + anomaly detection

9) **TC Energy** (gas pipelines + compressor stations; AB footprint)
   - Buyers: VP Canadian Nat Gas Ops, Integrity, Maintenance, CIO
   - Wedge: compressor reliability + planning across stations

10) **NOVA Chemicals** (petrochem; Joffre site)
   - Buyers: Site leader, VP Manufacturing, Reliability/Engineering, IT/OT
   - Wedge: unplanned shutdown avoidance, quality stability, maintenance execution


### Tier 2 “Large Fish” (aim: $500K–$1M/year)
Good fit for a first Alberta design-partner cluster; faster than Tier 1 in some cases.

11) **MEG Energy** (Christina Lake SAGD)
   - Buyers: VP Operations, Maintenance/Reliability, Digital/Automation
   - Wedge: SAGD facility reliability, steam/oil ratio optimization support

12) **ConocoPhillips Canada** (Surmont SAGD)
   - Buyers: Asset GM, Ops + Reliability leadership, Digital/OT
   - Wedge: facility uptime + integrity; closed-loop work mgmt

13) **Athabasca Oil Corporation** (thermal assets; AB oilsands region)
   - Buyers: COO/VP Ops, Maintenance manager
   - Wedge: do more with lean teams (autonomous triage + planning)

14) **ARC Resources** (Montney; AB/BC operations, Calgary HQ)
   - Buyers: VP Operations, Asset integrity, Digital/IT
   - Wedge: compressor + gas plant reliability, field ops triage

15) **Tourmaline Oil** (gas producer; AB/BC; Calgary HQ)
   - Buyers: VP Operations, Maintenance/Reliability
   - Wedge: gas processing reliability, emissions + compliance support

16) **Paramount Resources** (Kaybob/Grande Prairie region)
   - Buyers: VP Ops, Facilities engineering, Reliability
   - Wedge: facility uptime + constraint management

17) **Birchcliff Energy** (Pouce Coupe area; AB/BC)
   - Buyers: VP Ops, Maintenance
   - Wedge: asset health + maintenance prioritization

18) **Vermilion Energy** (Canada assets + Calgary office)
   - Buyers: Ops leadership, Reliability
   - Wedge: standardize reliability program across diverse assets

19) **North West Redwater Partnership (NWR) / Sturgeon Refinery**
   - Buyers: Refinery GM, VP Ops, Maintenance/Reliability
   - Wedge: high-value downtime avoidance + turnaround planning

20) **Inter Pipeline / Heartland Petrochemical Complex (HPC)** *(Brookfield owned)*
   - Buyers: Complex GM, VP Manufacturing, Reliability
   - Wedge: new asset ramp/optimization, reliability-by-design

21) **AltaGas** (midstream, gas processing)
   - Buyers: EVP Midstream, VP Ops, Reliability/Integrity
   - Wedge: reliability + performance across plants

22) **ATCO / Canadian Utilities** (industrial utilities, power/energy infra)
   - Buyers: VP Ops, Asset management, OT security
   - Wedge: asset management + outage avoidance

23) **Keyera** (midstream gas plants/NGL; AB footprint)
   - Buyers: EVP Ops, VP Facilities, Reliability/Integrity
   - Wedge: compressor + gas plant reliability, integrity workflows

24) **Gibson Energy** (terminals incl. Hardisty; logistics)
   - Buyers: VP Terminals Ops, Reliability/Integrity, HSE
   - Wedge: terminal uptime + incident prevention + maintenance prioritization

25) **Dow Canada (Fort Saskatchewan)** (petrochem)
   - Buyers: Site leader, Reliability, Process control/automation
   - Wedge: unplanned shutdown avoidance, process stability

26) **Nutrien (Calgary HQ; industrial operations footprint)**
   - Buyers: VP Operations/Manufacturing, Reliability, IT/OT
   - Wedge: reliability standardization + maintenance execution intelligence


### Tier 3 “Strategic Design Partners” (optional; fast pilots that become references)
Not always $500K+ initially, but can become platform beachheads.

27) **Precision Drilling** (rig fleet)
28) **Enerflex** (compression + processing equipment; service + OEM relationships)
29) **Secure Energy Services** (waste mgmt + terminals)

---

## 2) Account intelligence template (use this for each target)
Copy/paste into a CRM note. Goal: convert “name on a list” → “actionable plan.”

**Account:**
- Segment: (oilsands mining / SAGD / refinery / pipeline / gas plant / petrochem)
- Alberta sites: (list major sites)
- Business priorities this year: (reliability, cost, safety, emissions, debottleneck)

**Decision-making unit (DMU):**
- Economic buyer: (EVP Ops / SVP / Site GM)
- Technical buyers: (Director OT / Chief Architect / Reliability Eng Manager)
- Influencers: (Process control, Integrity, Turnaround, HSE)
- Procurement/legal: (vendor onboarding, MSA, security review)

**Typical tech stack to confirm:**
- OT: DCS/SCADA vendor(s) (Emerson / Honeywell / ABB / Siemens)
- Historian: OSIsoft PI / AVEVA / Honeywell PHD
- EAM/CMMS: SAP PM / IBM Maximo / Infor EAM
- Data platform: Azure/AWS/GCP, Databricks/Snowflake, on-prem Hadoop
- Connectivity: OPC UA, MQTT, PI interfaces, REST APIs

**Primary pain hypotheses:**
- Top 3 “events” they fear: (trip, fire, environmental release, unplanned shutdown)
- Where downtime is most expensive: (critical trains, compressors, cokers, etc.)
- Where knowledge is leaving: (retiring SMEs)

**SyncAI wedge (pick one):**
- Reliability Copilot (triage + recommendations + work order drafting)
- Turnaround Copilot (scope optimization + schedule risk)
- Integrity Copilot (RBI assistance + anomaly monitoring)
- Operator Assist (procedures + abnormal situation mgmt)

**Warm-intro path:**
- Connector: (name)
- Relationship strength: (A/B/C)
- Proposed ask: “10 minutes to sanity-check a reliability infra idea”

---

## 3) Infrastructure positioning framework (how SyncAI “lands”)

### 3.1 Narrative: from point tools → infrastructure
**Old world:** point analytics, dashboards, siloed pilots, ‘data science projects’ that don’t ship to operations.

**New world:** an **industrial AI control plane** that:
1) connects to OT/IT data sources,
2) normalizes & governs data,
3) runs a suite of specialized AI agents,
4) orchestrates actions into existing workflows (CMMS/EAM, control room, integrity systems),
5) produces audit trails and measurable operational outcomes.

### 3.2 What SyncAI is (and is not)
**Is:**
- On‑prem / hybrid **AI infrastructure layer** for mission-critical operations
- Secure integration fabric + agent runtime + observability + governance
- “Autonomous ops” enablement (human-in-loop, role-based approvals)

**Is not:**
- A CMMS/EAM replacement (SAP/Maximo stay)
- A dashboard-only analytics tool
- A cloud-only SaaS that requires exporting OT data to a US region

### 3.3 Reference architecture (text)
**Data Sources (OT/IT)** → **Connectivity & Edge** → **SyncAI Core** → **Agents** → **Workflows/Users**

1) **Data Sources**
   - DCS/SCADA tags, alarms, events
   - Historian (PI), lab/LIMS, maintenance logs, vibration systems
   - CMMS/EAM (work orders), ERP (materials), HSE systems, integrity databases

2) **Connectivity & Edge Layer**
   - OPC UA/MQTT connectors
   - PI interfaces
   - Data diode support for one-way flows (where required)

3) **SyncAI Core (in customer environment)**
   - Agent runtime (containerized)
   - Feature store / time-series handling
   - Policy + governance (who can recommend/act)
   - Observability (audit logs, model drift, false positives)

4) **Agent Suite (examples of the “15”)**
   - Reliability triage agent
   - Root-cause analysis agent
   - Work order drafting agent
   - Spares/parts risk agent
   - Turnaround scope agent
   - Integrity/RBI assistant
   - Abnormal situation assistant

5) **Workflow Integrations**
   - Create/modify WO in SAP/Maximo
   - Notify control room / maintenance planner
   - Generate evidence pack for compliance

### 3.4 Differentiation vs hyperscalers and “AI pilots”
- **AWS/Azure IoT** are primitives: you still need to build the reliability/integrity agents + workflows.
- **Point solutions** solve one use case; SyncAI is a **platform** that can host multiple operational agents, under one security + governance model.
- **OT reality:** network segmentation, uptime requirements, constrained change windows → on‑prem/hybrid wins.

---

## 4) Warm intro playbook (relationship-led enterprise motion)

### 4.1 The intro ask (script)
**Subject:** Quick sanity-check — autonomous reliability infrastructure (10 min)

**Ask:**
“Hey [Name] — I’m working on an on‑prem/hybrid AI infrastructure layer that plugs into PI + SAP/Maximo and deploys a suite of reliability/integrity agents. Not a dashboard, not a CMMS replacement. Could I borrow 10 minutes to get your take on where this would (or wouldn’t) work inside [Company]?”

**Why it works:** low commitment, technical curiosity, framed as expertise request.

### 4.2 The credibility stack (what you bring into the room)
- **Infrastructure framing:** talk about deployment, governance, OT integration, auditability.
- **Safety + compliance literacy:** abnormal situation management, integrity management, MOC realities.
- **Alberta-first:** Canadian data sovereignty, on-prem options, local implementation.
- **“Stigg Technologies portfolio”** (if applicable): position as experienced operator-builder, not demoware.

### 4.3 First meeting framework (60 minutes)
1) **Context + guardrails (5 min):** “We deploy inside your environment; no OT data has to leave Canada; human-in-loop.”
2) **Asset map (10 min):** What sites? What are the top 10 critical assets/process units?
3) **Failure economics (10 min):** cost per hour + frequency + safety exposure.
4) **Current stack (10 min):** PI? SAP/Maximo? vibration? APM? previous AI pilots?
5) **Workflow reality (10 min):** who creates work orders? who approves? what’s the lead time?
6) **Pick a wedge + success metrics (10 min):** choose 1 wedge; define a 60-day POC outcome.
7) **Next steps (5 min):** security pre-check + data access + POC charter owners.

### 4.4 What you do NOT do in meeting 1
- No feature dump.
- No “AI magic.”
- No pricing discussion until wedge + scope + integration reality is understood.

---

## 5) Enterprise sales process (9–18 months) — stage gates

### Stage 0 — Warm intro & problem framing (Weeks 0–4)
**Outputs:**
- Identified wedge use case + sponsor + site
- Draft success metrics
- Agreement to explore security + data access

**Gate:** sponsor confirms problem is priority this quarter.

### Stage 1 — Discovery & architecture fit (Weeks 4–8)
**Outputs:**
- OT/IT architecture map (PI, SAP/Maximo, network zones)
- Security requirements (on‑prem, air-gapped, vendor onboarding)
- POC charter: scope, assets, timeline, roles

**Gate:** approved POC charter + named technical owner.

### Stage 2 — Proof of Concept (Months 2–5)
**Typical:** 30–60 days of runtime (after access is granted)

**Outputs:**
- Measured alerts/insights with false-positive accounting
- Workflow integration demo (WO creation draft; planner review)
- ROI model v1 and “evidence pack”

**Gate:** executive readout with quantified outcomes.

### Stage 3 — Pilot / Site deployment (Months 5–9)
**Outputs:**
- Expand to a site/process unit
- Hardened infra (HA, backup, monitoring)
- Change management + training

**Gate:** multi-year business case + reference architecture validated.

### Stage 4 — Enterprise contract & rollout (Months 9–18)
**Outputs:**
- 3–5 year MSA + order forms
- Multi-site rollout plan + governance model

---

## 6) Technical requirements (Alberta O&G reality)

### 6.1 Security / compliance (baseline)
- On‑prem or hybrid deployment; option for **air-gapped** / restricted zones
- Role-based access control; audit trails for recommendations/actions
- Evidence pack for regulatory/compliance audits
- Supports segmented networks, jump hosts, approved patch windows

### 6.2 OT integration requirements
- Historian connectivity (PI / AVEVA) with least privilege
- OPC UA/MQTT support (or connector strategy)
- CMMS/EAM integration (SAP PM / Maximo) for WO creation/update
- Read-only mode available for initial POC

### 6.3 Reliability requirements
- High availability options (active/passive), failover, backups
- Performance SLOs (latency for alerts, batch analytics windows)
- Model/agent observability: drift monitoring, false positives, explainability notes

### 6.4 Data sovereignty
- Canadian-hosted/housed; customer-controlled storage
- Explicit data retention + deletion policies

---

## 7) Case study & design-partner program (before “logo land”)

### 7.1 Design partner offer (2–3 Alberta operators)
**Offer:**
- Reduced year-1 platform fee OR additional agent modules included
- Priority roadmap influence + weekly working sessions

**In exchange:**
- Rights to publish a quantified case study (anonymized if needed)
- Permission to reference them in enterprise sales (under NDA)

### 7.2 ROI template (what to quantify)
- **Downtime avoided:** hours * $/hour (use ranges; validate with finance)
- **Maintenance efficiency:** planner time saved; wrench time % improvements
- **Safety risk reduction:** near-miss reduction proxy; fewer emergency jobs
- **Inventory:** reduced expedited parts; better spares forecasting
- **CAPEX deferral:** asset life extension narrative (careful, conservative)

**Evidence types:** PI trends, alarm/event logs, WO history, maintenance planner confirmations.

---

## 8) Competitive intelligence (how to win the comparison)

### Competitor sets you’ll be compared to
1) **Hyperscalers:** AWS IoT / Azure Industrial IoT
2) **Industrial suites:** GE Digital / Predix, Siemens, Honeywell Forge
3) **APM / reliability vendors:** AspenTech APM, AVEVA, IBM Maximo add-ons, C3 AI, Uptake
4) **Consulting / systems integrators:** big SI builds “custom platform”

### Win themes
- **Deployment reality:** “We run inside your network; we don’t demand OT data leave your control.”
- **Time-to-value:** agents + workflows packaged; not a 12‑month build.
- **Platform economics:** one platform, many agents; consistent governance.
- **Operationalization:** not dashboards; integration into work execution.

---

## 9) Pricing & contracting (infrastructure economics)

### 9.1 Packaging (recommended)
1) **Base Platform License:** **$300K–$500K/year**
   - Core runtime, connectors, governance, observability

2) **Agent Modules:** **$50K–$100K/agent/year**
   - Activate only what they need; expansion lever

3) **Deployment/Integration Services (one-time):** **$200K–$500K**
   - Architecture, connectors, HA setup, security hardening, training

4) **Managed Services / Support:** **15–20%** of annual license

5) **Optional gain-share:** **10–20%** of documented savings

### 9.2 Contract structure (defaults)
- **Term:** 3 years (minimum), 5 years preferred
- **Invoice:** annual in advance; services milestones
- **Scope:** sites, data sources, agent modules, support SLA
- **Security:** customer standard vendor onboarding; pen test option

---

## 10) “Ready to execute” — next 14 days checklist

### Build the first 3 warm intros (choose 3)
**Recommended:** Cenovus + CNRL + Pembina (or Suncor)

For each:
- Identify 1 connector (Orville’s network)
- Prepare 1-page wedge brief (problem, wedge, 60-day POC, success metrics)
- Book a 30-min pre-call with connector to craft the intro

### Create 3 assets (lightweight)
1) **1-page architecture diagram** (text + boxes) showing on‑prem/hybrid + integrations
2) **POC charter template** (scope, data, security, success metrics)
3) **ROI worksheet** tuned for oilsands/refinery/pipeline

---

## Appendix A — Wedge use-cases that sell infrastructure (not point tools)

1) **Reliability Copilot (work execution)**
- Inputs: PI, vibration, WO history
- Outputs: prioritized failure risks + recommended actions + WO draft

2) **Turnaround Copilot (planning + risk)**
- Inputs: scope lists, inspection findings, WO backlog, constraints
- Outputs: scope optimization, schedule risk, critical path warnings

3) **Integrity Copilot (RBI assist)**
- Inputs: inspection data, corrosion circuits, process conditions
- Outputs: anomaly flags, inspection prioritization evidence packs

4) **Operator Assist (abnormal situations)**
- Inputs: alarms/events + SOPs
- Outputs: guided response, capture of learning, post-event summary

---

## Appendix B — Warm-intro mapping sheet (fill with your network)

For each target account:
- Person you know (connector):
- Their role + where they sit:
- Who they can introduce you to (name/title):
- Strength (A/B/C):
- Best channel (text/call/email/LinkedIn):
- Proposed meeting: “sanity check” / “architecture review” / “POC scoping”

