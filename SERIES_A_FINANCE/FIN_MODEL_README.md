# SyncAI — 5-Year Financial Model (Series A)

This folder contains an **Excel/Sheets-friendly financial model** broken into separate CSV “tabs” plus notes.

## How to use
1. Open the CSVs in Google Sheets (File → Import) or Excel.
2. Start with `ASSUMPTIONS.csv` and edit the **blue inputs** (raise size, pricing, GM, hiring timing, etc.).
3. `REVENUE_BUILD.csv` is driven by the customer/ARR path from `MARKET_SIZING_MODEL.csv` (base case).
4. `HEADCOUNT_PLAN.csv` rolls into payroll in `PNL.csv` and `CASH_FLOW.csv`.
5. `SENSITIVITY.csv` applies a simple multiplier to the base-case customer & ARR path (Downside 70%, Upside 130%).

## Model structure
- **Revenue**: subscription ARR by segment (F&B primary, T&L secondary, Mfg tertiary). Revenue is recognized ratably.
- **COGS**: hosting + support tooling + (optional) customer success cost classified as OpEx (standard SaaS). Gross margin target 82%.
- **OpEx**: Sales & Marketing, R&D, G&A, Customer Success (as OpEx).
- **Headcount**: role-based plan with fully loaded annual cost and start year.
- **Cash**: beginning cash + funding + burn; simple working capital assumption.

## Notes / disclaimers
- This is a **planning model**, not GAAP financials.
- The customer acquisition/ARR path reflects the provided thesis: **15 customers Y1 → 730 Y5 → ~$25.7M ARR**.
- Replace placeholder founder salary, cloud costs, and tooling with actuals as you incur spend.

## Files
- `ASSUMPTIONS.csv`
- `REVENUE_BUILD.csv`
- `HEADCOUNT_PLAN.csv`
- `PNL.csv`
- `CASH_FLOW.csv`
- `SAAS_METRICS.csv`
- `SENSITIVITY.csv`
