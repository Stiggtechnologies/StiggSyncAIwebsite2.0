# AIM Schedule Operations Agent — Maximize Practitioner Utilization (Execution Plan)

**Objective:** Reach **70–80% practitioner utilization within 30 days** while protecting patient experience and cash flow.

> This doc is designed to be “plug-and-play”: fill the **inputs** (practitioners, hours, appointment mix, pricing) and it outputs capacity, utilization gaps, and an execution plan.

---

## 0) Definitions (to avoid confusion)

- **Slot** = one bookable appointment unit (e.g., 30 min).
- **Capacity (slots)** = total slots available in a period.
- **Booked (slots)** = total slots actually filled.
- **Utilization** = Booked / Capacity.
- **New patient (NP)** = initial assessment/first visit.
- **Returning patient (RP)** = follow-up/treatment.

**Recommended baselines (adjust per specialty):**
- NP: 60 min (2 slots if slots are 30 min)
- RP: 30–45 min (1–1.5 slots)

---

## 1) Current State Assessment (what to collect + how to calculate)

### 1A. Practitioner capacity inventory (inputs)
Create a simple table (one row per practitioner):

- **Name**
- **Specialty / service line** (physio, chiro, massage, etc.)
- **Days worked** (Mon–Sat)
- **Clinic hours per day**
- **Patients/hour realistic capacity** (e.g., 2/hr for 30-min follow-ups; 1/hr for 60-min)
- **Room constraints** (which room(s), shared equipment)

**Formula (weekly slot capacity):**
- If scheduling in 30-min slots:  
  `Weekly slots = Weekly clinical hours × 2`

**Example:** 28 clinical hrs/week → 56 slots/week.

### 1B. Current utilization (outputs)
Pull from your EMR/scheduling system for last **2 full weeks** + current week:

- **Booked slots** per practitioner per day
- **Available (open) slots** per practitioner per day
- **No-shows** (count)
- **Late cancels** (count)

**Key outputs to compute:**
- **Utilization % by practitioner** (weekly)
- **Utilization % by day-of-week** (all practitioners aggregated)
- **Utilization % by time block** (7–9, 9–12, 12–1, 1–4, 4–7, Sat)

**Gap map (must-have):**
- “Heatmap” of open slots by **practitioner × time block × day**.

### 1C. Bottleneck diagnosis (decision tree)
Use these checks to locate the true constraint:

1) **Open slots exist?**
- If *no open slots* and utilization >80% → capacity constraint (hire/extend hours)
- If *yes* → go to #2

2) **Inbound inquiries adequate?** (calls, web forms, DMs)
- If inquiries low → intake/marketing constraint
- If inquiries OK → go to #3

3) **Conversion rate OK?** (inquiries → booked NP)
- If conversion low → front-desk scripting, speed-to-lead, booking friction
- If conversion OK → go to #4

4) **Retention / plan adherence OK?** (NP → 2nd visit booked; visits completed)
- If low → clinician plan-of-care + checkout pre-booking

**Operational metrics to measure weekly:**
- **Speed-to-lead:** median minutes from inquiry → contact
- **Inquiry→Booked NP conversion**
- **NP show rate**
- **NP→2nd visit pre-booked rate**
- **Avg visits per case** (by provider + diagnosis category)

---

## 2) Schedule Optimization Strategy (tactics you can execute immediately)

### 2A. Protect and expand high-demand blocks
**Priority blocks:**
- Early: **7–9 AM**
- Lunch: **12–1 PM**
- Evening: **5–7 PM**
- Saturday (optional but powerful)

**Rules:**
1) **Reserve** 30–50% of the high-demand blocks for **NP** until your NP/day target is consistently met.
2) Put RP in high-demand only if:
   - patient preference requires it **and**
   - the schedule is trending ≥70% utilization.
3) Use **mid-day (9–4)** as the “RP engine” + discounted/off-peak levers.

### 2B. Appointment type design (reduce friction + increase throughput)
Standardize to 2–3 core appointment types to simplify booking:

- **NP Assessment (60 min)** — premium
- **Treatment / Follow-up (30 or 45 min)** — default
- **Re-assessment / Progress Check (30 min)** — used every N visits

**Operational best practice:**
- At NP checkout: **pre-book the next 3–5 visits** based on plan of care.
- Use “**floating holds**”: book 2 preferred times + 1 off-peak backup.

### 2C. Slot templates and guardrails
**Template suggestion (per practitioner/day):**
- 7–9: 2 NP slots (or 1 NP + 2 RP)
- 9–12: RP-heavy
- 12–1: 1 NP or 2 RP (depending on local demand)
- 1–4: RP-heavy + re-assessments
- 4–7: 1–2 NP + remainder RP

**Guardrails:**
- Don’t let NP consume >40–50% of daily capacity unless staffed for it (NP visits are longer + more admin).
- Ensure each practitioner has protected admin time (documentation) to prevent burnout.

### 2D. Pricing & packaging (cash flow + utilization smoothing)
**Peak vs off-peak:**
- Peak (5–7 PM, Sat): **standard or +$10–$20** convenience fee (if market tolerates)
- Off-peak (9–3): **$10–$15 credit** (or add-on value) *only for self-pay* to move demand into open capacity

**Packages (recommended):**
- 5-pack (RP) paid upfront → improves cash flow and adherence
- “NP + 2 follow-ups” starter bundle → raises conversion

**Insurance friction reducers:**
- Direct billing where possible
- Clear estimate at booking: “Typical out-of-pocket is $X–$Y”

---

## 3) Capacity Planning (scenarios + hiring triggers)

### 3A. The key relationship
If **Avg sessions per new patient = S**, and **new patients per day = N**, then **future RP volume per day** grows roughly as:
- Additional visits/day generated ≈ `N × (S - 1)` spread over following weeks.

So NP growth *creates* the RP load; capacity must absorb both.

### 3B. Scenario A — 15 new patients/day
Assumptions to fill:
- Clinic days/week = D (often 5.5 if Sat)
- Avg sessions/case = S (target 8–10)
- NP duration slots = 2 (60 min in 30-min slots)
- RP duration slots = 1 (30 min)

**Weekly NP visits:** `15 × D`
**Weekly total visits created over time:** `15 × D × S`

**Practical implication:** within weeks, RP volume will rise sharply; you need:
- enough total slots/week for steady-state: `15×D×S` visits/week

### 3C. Scenario B — 20 new patients/day
Compute the same and compare to **current weekly slot capacity**.

**Hiring trigger (operational):**
- If **utilization >80% for 2 consecutive weeks** *and* NP slots are constrained (patients can’t get in within 48–72 hours), start recruiting.

**Lead time:** 4–6 weeks to hire + onboard.

### 3D. Expansion levers (ranked by speed)
1) Extend hours 2 days/week (early or evening)
2) Add Saturday half-day
3) Rebalance appointment lengths (move appropriate follow-ups to 30 min)
4) Add a part-time practitioner
5) Add room capacity / equipment

---

## 4) Waitlist & Fill Rate Optimization (get cancellations rebooked within 24h)

### 4A. Minimum viable waitlist system
Maintain a list segmented by:
- Provider preference
- Time preference (AM/lunch/PM)
- “Can come today” / “Need 48h notice”

At booking time, always ask:
- “Would you like to be on the **short-notice list** for earlier openings?”

### 4B. Cancellation workflow (SOP)
**Goal:** >80% of cancelled slots filled within 24 hours.

**SOP steps (front desk):**
1) When cancellation occurs, immediately tag the slot as **Priority Fill**.
2) Search waitlist matches (same provider + time preference).
3) Send SMS/call blast to top 10 matches.
4) Hold slot for **15 minutes** for first responders.
5) Confirm booking + send prep instructions.

**SMS script (copy/paste):**
- “An earlier appointment opened today at **2:00 PM** with **{Provider}**. Reply **YES** to claim it. First come, first served.”

### 4C. Reduce late cancels/no-shows
- Confirmations: 72h + 24h + 2h reminders
- Clear policy: late cancel fee (when appropriate)
- Offer telehealth (if clinically appropriate) to save the slot

---

## 5) Patient Flow & Experience (retain and pre-book)

### 5A. The “NP → plan → prebook” protocol
At the end of NP appointment, clinician must:
1) State diagnosis hypothesis + goals
2) Present plan of care (e.g., “2x/week for 3 weeks, then reassess”)
3) Walk patient to checkout or send internal message: “Book 6 visits”

**Front desk close:**
- “Let’s get your next **3–5** visits scheduled now so you get the best times.”

### 5B. KPIs (targets)
- NP→2nd visit booked before leaving: **≥70%**
- Plan-of-care completion: **≥70%**
- Average sessions/case: **8–10**
- 12-month retention: **>50%**

### 5C. Re-engagement
- 30/60/90-day follow-up campaign for lapsed patients
- Maintenance offers (monthly tune-up)

---

## 6) Financial Modeling (simple, actionable model)

### 6A. Revenue model skeleton
Inputs:
- Avg $/NP
- Avg $/RP
- NP/day
- RP/day
- Clinic days/month

Outputs:
- Monthly gross revenue
- Revenue per provider hour

**Cash flow boosters:**
- Pay at time of service
- Offer 5-pack and “NP + 2” bundle
- Reduce A/R lag via direct billing

### 6B. Break-even utilization (how to compute)
You need:
- Fixed monthly overhead (rent, admin salaries, software)
- Variable costs (% clinician comp, supplies)
- Gross margin per visit

Then:
- Break-even visits/month = `Fixed costs / Contribution margin per visit`
- Break-even utilization = `Break-even visits / Capacity visits`

---

## 7) 30-Day Execution Plan (week-by-week)

### Week 1 — Measure + fix booking friction
- Build capacity table + utilization heatmap
- Standardize appointment types + lengths
- Implement speed-to-lead SLA: **<5 minutes during business hours**
- Script training for booking calls

### Week 2 — Template redesign + NP slot protection
- Lock high-demand blocks
- Reserve NP slots in peak windows
- Introduce off-peak incentives (self-pay)

### Week 3 — Waitlist automation + cancellation fill
- Launch short-notice waitlist
- Start SMS blast workflow
- Track fill rate within 24h

### Week 4 — Retention + capacity decision
- Enforce NP checkout pre-booking (3–5 visits)
- Review utilization trend
- If >80% for 2 weeks → start recruiting / extend hours

---

## 8) Data request checklist (send this to the clinic owner/ops lead)

1) Practitioner list + weekly hours + typical appointment lengths
2) Last 2 weeks schedule export (booked/open by slot)
3) Inquiry counts by channel (calls, web, ads) + booked NPs
4) No-show + cancellation counts
5) Avg visits per case (if available)
6) Prices and payer mix (cash/insurance)

---

## 9) Deliverable templates (copy/paste)

### 9A. Utilization report (weekly)
- Clinic utilization (target 70–80%): __%
- Lowest-utilization provider: __% (name)
- Emptiest time block: __ (e.g., Tue 1–4)
- Cancel fill rate within 24h: __%
- NP/day: __ (target 15–20)

### 9B. Daily huddle prompts (10 minutes)
- Any same-day open slots to fill?
- Any NPs not pre-booked for follow-ups?
- Any provider over/under capacity today?

