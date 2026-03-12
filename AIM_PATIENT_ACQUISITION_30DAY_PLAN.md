# AIM Physiotherapy (Edmonton) — 30-Day Patient Acquisition Plan (15–20 New Patients/Day)
*Subagent deliverable | 2026-02-23*

## 0) Assumptions & Targets
- **Goal:** 15–20 *new patients/day* within 30 days.
- **Core constraint:** empty schedules → need immediate lead volume + high booking conversion.
- **Economics targets:**
  - **CPA (new booked patient):** <$50 target; optimize if $50–$75; pause/repair if >$75.
  - **LTV:** $500–$1,500 (6–15 visits typical).
  - **LTV:CAC:** >10:1.

## 1) Channel Mix (Target)
- **Google Search Ads (high intent):** 60–70% of new patients.
- **Meta (demand gen + retargeting):** 20–30%.
- **Referrals + partners:** 10–20%.
- **Local SEO / GBP:** accelerant (reviews + map pack) and lowers CAC over time.

---

## 2) Google Ads — PRIMARY (Campaign ID: 23589699257)
### 2.1 Current known status (from workspace)
- Baseline: **~0.8 patients/day** at **$75/day** (historical also referenced $25/day constraint earlier).
- CTR ~**5%** and CPC ~**$2.45** → *ad relevance is good; volume + conversion are the gaps.*
- **Phase-1 bulk upload is ready:** `GOOGLE_ADS_BULK_UPLOAD_COMPLETE.csv` + instructions `UPLOAD_TO_GOOGLE_ADS_NOW.md`.

### 2.2 Immediate action (today) — 5 minutes
- **Upload** `GOOGLE_ADS_BULK_UPLOAD_COMPLETE.csv` in Google Ads UI.
- After upload, verify:
  - new keywords active
  - new ads approved
  - new WCB employer ad group present

### 2.3 Budget plan (scale only when tracking is clean)
- **Day 1–3:** Hold at **$75/day** until conversion tracking verified.
- **If booked-patient CPA < $50** and schedules <80% → increase **20–30% every 48h** to **$150–$200/day**.
- **If CPA $50–$75:** keep budget flat; improve conversion + negatives.
- **If CPA >$75:** reduce spend 20–30% and repair (LP + intake + keyword hygiene).

### 2.4 Keyword expansion (build to 30–40 high-intent terms)
**Keep match types tight (exact/phrase) to protect CPA.** Add these beyond the Phase-1 list:

**General “near me / Edmonton”**
- [physio near me]
- "physiotherapy near me"
- [sports physiotherapy edmonton]
- "manual therapy edmonton"
- "pelvic floor physiotherapy edmonton" *(only if offered)*
- "IMS / dry needling edmonton" *(only if offered)*

**Pain / symptom intent**
- "back pain physiotherapy edmonton"
- "neck pain physiotherapy edmonton"
- "sciatica physiotherapy edmonton"
- "shoulder pain physiotherapy edmonton"
- "knee pain physiotherapy edmonton"
- "tmj physiotherapy edmonton" *(only if offered)*

**Work injury / WCB**
- "wcb physio near me"
- "work injury clinic edmonton"
- "wcb forms physiotherapy"
- "functional abilities evaluation physiotherapy" *(only if offered)*
- "return to work program physiotherapy"

**MVA / car accident**
- "whiplash treatment edmonton"
- "car accident rehab edmonton"
- "mva injury clinic edmonton"
- "insurance claim physiotherapy"

**Massage / combined care**
- [massage therapy edmonton north]
- "massage therapy near me"
- "physio and massage clinic edmonton"

**Negatives (starter list)**
- free, cheap, school, course, diploma, salary, job, jobs, definition, pdf, youtube, exercises, reddit, what is

### 2.5 Ad copy A/B testing (pain points, urgency, local)
Run 2–3 RSAs per ad group/campaign, each with a distinct angle:
- **Friction killer:** “No referral needed”, “Direct bill WCB/insurance”, “We handle paperwork”.
- **Urgency/availability:** “Same-day / next-day appointments”, “Evenings available”.
- **Trust/local:** “Edmonton injury clinic”, “5-star rated”, “Experienced therapists”.
- **Outcome:** “Back to work faster”, “Return to sport”, “Reduce pain + restore movement”.

### 2.6 Landing page requirements (conversion lift lever)
Minimum LP checklist per service (General / WCB / MVA):
- Above-the-fold: **single CTA** (Call + Book), phone number clickable, “Free assessment” claim consistent across channels.
- **Same-day/next-day availability** banner (truthful).
- Insurance section: WCB + auto insurance + direct billing.
- Map + address + parking note + short “what to expect”.
- Reviews snippet + trust badges.
- 6–10 FAQ items targeting objections (cost, referral, WCB paperwork, timelines).
- Form: 3–5 fields max + consent + “we call within X minutes during business hours”.
- Event tracking: calls, forms, booking page view.

### 2.7 Geo targeting
- Primary: Edmonton.
- Expand: **St. Albert, Sherwood Park, Leduc**.
- Use location option: **“Presence: People in or regularly in”** (avoid “interest in”).

### 2.8 Call tracking (non-negotiable)
- Use **CallRail** (or equivalent):
  - 1 dynamic number for website, 1 static for Google Ads extensions, 1 for Meta.
  - Recordings enabled (compliance notice).
  - Tag outcomes: booked / not booked / spam / after-hours.
- Import conversions into Google Ads as **Qualified Call** (e.g., >60 seconds) + booked appointment if possible.

---

## 3) Meta Ads — SECONDARY (5 creatives ready)
### 3.1 Known status (from workspace)
- Business Manager ID: **5251916228162089**
- Pixel ID: **1492939798724540**
- Campaign plan ready: **$45/day** (Core lead gen + retargeting).

### 3.2 Launch plan
- **Week 1:** $50/day (or $45/day per plan). Optimize for Leads (website).
- **Week 2:** if CPL-to-booked-patient CPA is good, scale to $75–$100/day.
- **Week 3–4:** $100–$150/day if booked-patient CPA < $50 and capacity remains.

### 3.3 Audience targeting
- Radius targeting around clinic + Edmonton metro.
- Ad sets by intent:
  - General pain/injury
  - MVA
  - WCB/work injury
- **Retargeting:** website visitors (30d), booking page visitors (7d), IG/FB engagers.

### 3.4 Creative rotation
- 5 creatives → rotate weekly; pause fatigue when frequency >2.5 and CTR drops.
- Add 2 new creatives/week (simple: therapist/patient, clinic, “what to expect”).

### 3.5 Lead capture optimization
- Prefer **website** conversion if booking works well.
- If website conversion weak, run **Instant Form** as backup with:
  - 3 qualifying questions (pain type, how soon want appointment, WCB/MVA?)
  - auto-SMS/email + immediate call-back SOP.

---

## 4) Conversion Optimization (the multiplier)
### 4.1 Phone answering (target >60% calls → booked)
Implement a simple intake SOP:
1) Answer within 3 rings: “AIM Physiotherapy, this is ____. How can I help?”
2) Triage: injury type (general/MVA/WCB), urgency, location.
3) Offer **2 appointment options** (same/next day if possible).
4) Insurance reassurance: “We direct bill where possible and handle the paperwork.”
5) Close: confirm date/time + text/email confirmation.
6) If missed call → callback within 5 minutes.

If staff cannot answer reliably:
- Use dedicated intake coordinator OR answering service with live transfer.

### 4.2 Online booking (target >40% visits → bookings)
- Reduce steps to 1–2 clicks from LP.
- Show real availability.
- Prominent “Call now” alternative.

### 4.3 First appointment optimization
- Protect urgent inventory: daily same-day slots.
- Extended hours at least 2–3 days/week.
- Insurance pre-verification checklist.

---

## 5) Local SEO — fast wins + compounding
### 5.1 Google Business Profile
- Ensure primary category: “Physiotherapist” + secondary categories (massage therapist, sports medicine clinic if applicable).
- Add services with prices (range ok), appointment link, messaging enabled.
- Post 2x/week (offer: free assessment, WCB/MVA info).

### 5.2 Review generation (daily system)
- Ask **every** patient at visit 2–3.
- QR code at front desk + SMS link.
- Script: “It helps local Edmontonians find us when they’re in pain.”
- Goal: **5–10 new reviews/week** until map pack improves.

### 5.3 Citations/directories
- HealthLink Alberta, RateMDs, Yelp, YellowPages, 411, Apple Maps, Bing Places.
- NAP consistency (name/address/phone identical).

---

## 6) Referral Program (immediate lift)
### 6.1 Patient referral incentive
- Offer: **$25–$50 credit** for each referred new patient who completes first paid visit.
- Give cards + SMS share link.

### 6.2 Physician / walk-in outreach
- Build list of 30 clinics within 10–15km.
- Drop-off package: one-pager (WCB/MVA capability, booking speed, direct billing) + fax referral form + direct line.
- Weekly follow-up cadence.

### 6.3 Corporate partnerships
- Target: trades, warehousing, construction companies.
- Offer: “rapid access injury triage” + RTW support.

---

## 7) Dashboard (daily operating system)
Track daily by channel:
- Spend, clicks, leads (calls/forms), **booked new patients**, show/no-show.
- CPA per stage: lead CPA, booked-patient CPA.
- Phone answer rate, call-to-book rate.
- Online booking conversion rate.
- Practitioner utilization (% booked capacity).
- Cash collected.

Tools:
- GA4 + GTM
- Google Ads conversions
- Meta Pixel + Conversions API (if possible)
- CallRail
- Looker Studio dashboard

---

## 8) 30-Day Execution Roadmap
### Week 1 (Immediate)
- Upload Google Ads Phase-1 bulk file; confirm conversions/call tracking.
- Launch Meta campaigns (core + retargeting) once pixel verified.
- Implement call tracking + intake SOP.
- GBP cleanup + begin review engine.

### Week 2
- Increase Google budget toward $150/day if CPA acceptable.
- Start referral program + physician drop-offs.
- LP improvements (service-specific) + A/B test headlines.

### Week 3–4
- Scale to $200–$300/day combined spend if booked CPA < $50.
- Add more keyword clusters + negatives.
- Retargeting expansion + lookalikes.
- Weekly reporting + reallocate budget to highest converting service lines.

---

## 9) Immediate “Owner Decisions” Needed (to unblock)
1) Confirm Google Ads bulk upload is applied.
2) Confirm Meta pixel installed + events firing.
3) Choose call tracking provider (CallRail recommended) + get numbers.
4) Confirm booking system + ensure real-time availability.
5) Confirm same-day/next-day capacity blocks.
