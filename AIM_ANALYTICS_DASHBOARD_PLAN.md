# AIM Analytics & Dashboard Plan (Real-Time Performance Tracking)

**Objective:** Daily, near-real-time visibility into patient acquisition, conversion, utilization, and cash collected—so the clinic can reliably hit **15–20 new patient bookings/day**, **70–80% utilization**, **CPA < $50**, and **>$5,000/day revenue**.

This document is **execution-ready**: defines metrics, data model, connectors, dashboards, alerts, and forecasting.

---

## 0) Recommended Approach (2-Phase)

### Phase A — MVP in 3–7 days (Fast + reliable)
- **Dashboard platform:** Looker Studio (Google Data Studio)
- **Storage:** Google Sheet as the “daily fact table” + optional CSV exports
- **Automations:** Scheduled imports (where possible) + **manual daily entry** for anything without an API (2–5 minutes/day)
- **Output:** A single **Daily Command Center** view + Monday weekly report.

### Phase B — Automated “Real-Time” system in 2–4 weeks
- **Storage:** Postgres (Supabase or existing DB)
- **Pipelines:** scheduled pulls from APIs (Google Ads, Meta Ads, GA4, CallRail, booking system)
- **Model:** normalized tables + attribution + cohort/retention
- **Alerts:** Slack/email/webhook alerts based on thresholds.

You can run Phase A immediately and migrate the same metric definitions to Phase B later.

---

## 1) Core Metrics Dashboard (Daily View)

### 1.1 Metric definitions (single source of truth)

**Date grain:** daily (clinic local time). If sources report in UTC, convert to local.

#### Patient acquisition
- **New patient inquiries (by channel)**
  - Definition: unique inbound lead events that indicate intent (call, form lead, walk-in logged, referral submitted).
  - Channels: `google_ads`, `meta_ads`, `organic`, `referral_patient`, `referral_physician`, `walk_in`, `phone_other`.
- **New patient bookings (by channel)**
  - Definition: count of *new patient* appointments created for first visit (or first scheduled appointment) with source.
  - Recommended: split into `booked_new_patients` and `booked_total_appointments`.
- **CPA (cost per acquisition)**
  - Default: `marketing_spend / booked_new_patients` (or `/ first_visits_completed` if you want only “attended”).
  - Compute both:
    - **CPA-booked** = spend ÷ new patient bookings
    - **CPA-attended** = spend ÷ first visits completed
- **Conversion rate (inquiries → bookings)**
  - `booked_new_patients / new_patient_inquiries`

#### Practitioner utilization
- **Total available slots**
  - Definition: number of bookable appointment slots per practitioner per day (from schedule template).
- **Booked slots**
  - Total number of appointments booked for that day (new + returning).
- **Utilization %**
  - `booked_slots / available_slots`
- **Empty slots**
  - `available_slots - booked_slots`
  - Breakdown requirements:
    - by practitioner
    - by time-of-day bucket (e.g., `morning`, `midday`, `evening`)

#### Financial
- **Daily revenue (cash collected)**
  - Prefer: payments collected (cash/credit/debit) posted on that date.
  - Alternative: charges created (less accurate for cash flow).
- **Weekly revenue (rolling 7 days)**
  - `SUM(daily_revenue) over last 7 days`
- **Monthly revenue (projected)**
  - Simple projection: `rolling_7_day_avg * days_remaining_in_month + month_to_date`
  - Better: weekday-seasonality projection (Phase B).
- **Marketing spend (daily)**
  - `google_ads_spend + meta_ads_spend + other_spend`
- **Net revenue**
  - `daily_revenue - marketing_spend`

#### Patient journey
- **Website traffic**
  - GA4: `Users` (or `Sessions`) per day.
- **Phone calls received**
  - total + answered (from call tracking or phone system)
- **Online booking attempts**
  - started + completed (from booking widget events or booking platform)
- **No-shows & cancellations**
  - No-show rate: `no_show_count / total_appointments`
  - Cancel rate: `cancel_count / total_appointments`

### 1.2 Daily targets (scoreboard)
- New patient bookings: **15–20**
- Total appointments: **45–70**
- Utilization: **70–80%**
- CPA: **< $50**
- Revenue: **> $5,000/day**

---

## 2) Channel Performance Analysis

### Google Ads (daily + rolling 7)
- Impressions
- Clicks
- CTR = clicks / impressions
- CPC = spend / clicks
- Conversions (split): calls + form fills (ideally separate conversion actions)
- Cost / conversion = spend / conversions
- **ROI (attributed)** = attributed_revenue / spend

### Meta Ads
- Impressions, clicks, CTR
- CPC
- Leads (native lead forms / onsite)
- CPL = spend / leads
- Lead→booking rate = booked_new_patients_from_meta / meta_leads

### Referrals
- Patient referrals (#, %)
- Physician referrals (#, %)
- Source tracking: “How did you hear about us?” standardized picklist.

### Channel mix optimization outputs (dashboard cards)
- **Lowest CPA channel (7d)**
- **Highest ROI channel (7d)**
- **Volume contribution** by channel (stacked bar)
- **Recommendation module** (rule-based):
  - If CPA-booked for a channel is below target and there is capacity → suggest budget shift to that channel.

---

## 3) Conversion Funnel Tracking (Drop-off detection)

### Funnel events (daily counts)
1. Awareness: impressions, website users
2. Interest: calls, form submissions
3. Consideration: booking page views, booking starts
4. Booking: booking completes, booked appointments
5. Attendance: showed, no-show
6. Retention: 2nd appointment booked, sessions/patient

### Key derived rates
- Visit→lead rate = (calls + forms) / website_users
- Lead→booking rate = bookings / inquiries
- Booking completion rate = booking_completes / booking_starts
- Show rate = attended_first_visits / booked_first_visits
- 2nd visit rate = second_appointment_booked / first_visits_completed

### Drop-off flags
- Any stage rate down **>10% vs 7-day baseline** = “investigate”
- Booking completion rate < 50% = “booking friction”
- Show rate < 90% = “reminders / patient fit / scheduling delay”

---

## 4) Predictive Analytics & Forecasting (Phase B-ready)

### Growth projection (simple)
- If **CPA holds** and spend is stable:
  - expected_new_patients = spend / CPA-booked
- With trend:
  - expected_new_patients = (rolling_7_avg_new_patients) * (1 + WoW_growth_rate)^(t)

### Date-to-target (15/day, 20/day)
- Fit a line to last 14–28 days of new patient bookings.
- Compute projected day when trend crosses 15/day and 20/day.

### Capacity planning
- Trigger: utilization >80% for **10 of last 14 days** OR empty slots concentrated only in undesirable times.
- ROI of adding capacity:
  - incremental_capacity_slots * fill_rate * avg_revenue_per_visit - incremental_costs

---

## 5) Alert System (Proactive Monitoring)

### Thresholds (as specified)
**Red (immediate):**
- CPA > $75
- Inquiry→booking conversion < 30%
- No-show rate > 10%
- Daily bookings < 10
- Utilization < 50%

**Yellow:**
- CPA $50–$75
- Conversion 30–40%
- No-show 5–10%
- Daily bookings 10–14

**Green:**
- CPA < $50
- Conversion > 50%
- No-show < 5%
- Daily bookings 15–20+
- Utilization 70–80%

### Alert delivery
- MVP: Looker Studio conditional formatting + daily email snapshot.
- Phase B: webhook alerts (Slack/email/SMS) generated from a scheduled job.

---

## 6) Weekly/Monthly Reporting

### Weekly report (Monday)
- Prior week vs targets
- Channel breakdown (volume + CPA + ROI)
- Funnel conversion by stage vs previous week
- Top 3 constraints + top 3 actions
- Budget move suggestions (increase/decrease per channel)

### Monthly report
- MoM bookings + revenue
- Attribution + channel mix evolution
- Retention and LTV trend (if data available)
- Staffing/capacity recommendation

---

## 7) Data Sources & Connections

### Preferred sources (typical stack)
- **GA4**: website users, key events
- **Google Ads**: spend, clicks, conversions
- **Meta Ads**: spend, clicks, leads
- **Call tracking (CallRail)** or phone system: calls, answered
- **Booking/EHR (Jane App / SimplePractice)**: appointments, new-vs-returning, practitioner schedule, cancellations/no-shows
- **Payments system**: cash collected (often inside EHR; or Stripe/Square)

### If APIs aren’t available
- Daily exports (CSV) + Google Sheets import
- Or manual entry into a “Daily Inputs” sheet

---

## 8) Data Model (works for Sheet MVP and Postgres)

### 8.1 MVP: single daily fact table (Sheet)
**Sheet: `daily_metrics`** (one row per date)
- date
- website_users
- google_ads_impressions, google_ads_clicks, google_ads_spend, google_ads_conversions_calls, google_ads_conversions_forms
- meta_impressions, meta_clicks, meta_spend, meta_leads
- calls_total, calls_answered
- inquiries_total, inquiries_google, inquiries_meta, inquiries_referral, inquiries_walk_in, inquiries_phone_other
- bookings_new_total, bookings_new_google, bookings_new_meta, bookings_new_referral, bookings_new_walk_in, bookings_new_other
- appointments_total
- available_slots_total
- booked_slots_total
- no_shows
- cancellations
- revenue_cash_collected
- other_marketing_spend

**Calculated fields** in Looker Studio:
- CPA-booked = (google_ads_spend + meta_spend + other_marketing_spend) / bookings_new_total
- Conversion = bookings_new_total / inquiries_total
- Utilization = booked_slots_total / available_slots_total
- Net revenue = revenue_cash_collected - (google_ads_spend + meta_spend + other_marketing_spend)
- Answer rate = calls_answered / calls_total

### 8.2 Phase B: normalized model (Postgres)
Tables (minimum):
- `dim_date(date, week, month, dow, is_holiday)`
- `dim_channel(channel_id, channel_name)`
- `fact_ad_platform_daily(date, platform, impressions, clicks, spend, conversions, conversion_type)`
- `fact_web_analytics_daily(date, users, sessions, event_counts_jsonb)`
- `fact_calls_daily(date, source, calls_total, calls_answered, calls_missed)`
- `fact_bookings_daily(date, channel, new_patient_bookings, total_appointments, cancels, no_shows)`
- `fact_capacity_daily(date, practitioner_id, available_slots, booked_slots)`
- `fact_payments_daily(date, amount_collected, refunds, payment_method)`

Attribution (optional but recommended):
- `fact_leads(lead_id, created_at, channel, utm_source, gclid, fbclid, phone, email)`
- `fact_patient_first_visit(patient_id, first_booking_at, first_attended_at, channel_attributed)`

---

## 9) Dashboard Layout (Looker Studio)

### Page 1: Daily Command Center (today + last 7)
Top KPI tiles (today):
- New patient bookings (vs 15–20 target)
- Total appointments (vs 45–70)
- Utilization % (vs 70–80)
- CPA-booked (vs <$50)
- Revenue collected (vs >$5,000)

Middle: Funnel mini-cards
- Website users → inquiries → bookings → attended first visits
- Conversion rates shown between each.

Bottom: “Where to fill the day”
- Empty slots by time-of-day + practitioner

### Page 2: Channel Performance
- Spend, bookings, CPA, ROI by channel (table)
- 7-day trends for spend vs bookings

### Page 3: Funnel Diagnostics
- Trend lines for each rate (7/14/28 day)
- Drop-off flags

### Page 4: Finance / Cash Flow
- Revenue collected vs marketing spend vs net revenue
- Rolling 7
- Month projection

### Page 5: Capacity & Staffing
- Utilization by practitioner
- Forecast “days to 80%”
- Hiring trigger status

---

## 10) Implementation Checklist

### MVP (Sheet + Looker Studio)
1. Create Google Sheet `AIM_Daily_Metrics`
2. Add `daily_metrics` tab with columns above
3. Connect Looker Studio to the Sheet
4. Build Page 1 (Daily Command Center) + conditional formatting for alerts
5. Add a daily process:
   - import Google Ads + Meta spend/clicks (manual paste or connector)
   - enter bookings, revenue, capacity (from booking system report)

### Automated (Postgres + connectors)
1. Decide the booking system and call tracking system (confirm APIs)
2. Stand up Supabase project (or existing DB) + tables
3. Build daily ingestion jobs (cron/scheduler):
   - Google Ads API → `fact_ad_platform_daily`
   - Meta Marketing API → `fact_ad_platform_daily`
   - GA4 Data API → `fact_web_analytics_daily`
   - CallRail API → `fact_calls_daily`
   - EHR export/API → bookings + capacity + payments
4. Add alert job (runs at 10am and 4pm)
5. Publish weekly report generator (PDF/email)

---

## 11) “Minimum Daily Inputs” (if fully manual)
If nothing else is available, you can still run the system with:
- New patient bookings (total + by channel)
- Total appointments
- Available slots
- Revenue collected
- Google Ads spend, Meta spend
- Calls total + answered

This alone supports CPA, utilization, and cash flow tracking.
