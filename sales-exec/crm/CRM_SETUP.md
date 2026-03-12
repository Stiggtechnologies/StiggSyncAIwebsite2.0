# CRM Setup — SyncAI Outbound (First 15 Customers)

This is CRM-agnostic (HubSpot, Pipedrive, Close, Salesforce). Use it to standardize pipeline, required fields, and reporting.

## Objects
### Accounts
- Name, website, HQ city/province
- Industry subsegment (dairy/bakery/beverage/meat/packaged)
- Employee range
- Tier (A/B/C) + priority score
- Trigger events (text)
- Pain hypothesis (text)

### Contacts
- Role group: Ops / Maintenance / Finance / IT
- Title + seniority
- Email verified (Y/N)
- Phone
- LinkedIn URL

### Deals (Opportunities)
- Deal name: {{Account}} — Predictive Maintenance
- Amount (ACV), term, start date
- Stage (below)
- Primary use case (packaging line / refrigeration / pumps / mixed)
- Pilot required (Y/N)
- Champion (contact)
- Economic buyer (contact)
- Competition (IBM/GE/CMMS/none)

## Pipeline stages (45–75 day cycle)
1) **Targeted** (Tiered, not yet contacted)
2) **Contacted** (sequence active)
3) **Engaged** (reply or LI convo)
4) **Meeting Scheduled**
5) **Meeting Held / Qualified** (MEDDICC-lite fields required)
6) **ROI Assessment Complete**
7) **Pilot Proposed**
8) **Pilot Active**
9) **Pilot Success / Pending Close**
10) **Closed Won**
11) **Closed Lost** (reason required)

## Required qualification fields (MEDDICC-lite)
- Metrics: downtime cost/hour, downtime %, incidents/year
- Economic buyer identified (Y/N)
- Decision criteria: what must be true to buy?
- Decision process: steps + stakeholders
- Paper process: procurement/security needs?
- Identified pain: top 1–2 operational pains
- Champion: who benefits personally?

## Activity tracking
Log every:
- Email sent/reply
- LI connection/message
- Call outcome
- Meeting outcome + next step date

## Dashboards / reports
1) **Top-of-funnel**
- New accounts enrolled/week
- Touches/day by channel
- Reply rate + positive reply rate

2) **Meetings**
- Meetings booked/week
- Meeting hold rate
- SQL rate (meetings → qualified)

3) **Pipeline health**
- # deals by stage
- Stage-to-stage conversion
- Avg days in stage

4) **Revenue**
- Pipeline $ and weighted pipeline
- Close rate (qualified opps)
- Sales cycle length

## Closed-lost reasons (standardize)
- No pain / low downtime
- Budget freeze
- Timing (later)
- Data access too hard
- Chose competitor
- Build internally
- Security/compliance concern

## Weekly operating rhythm
- **Mon:** pipeline review (stuck deals + next steps)
- **Wed:** outbound performance review (reply/meeting rates)
- **Fri:** pilot status review + ROI proof progress
