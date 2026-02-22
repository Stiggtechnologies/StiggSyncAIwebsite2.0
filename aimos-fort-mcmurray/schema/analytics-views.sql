-- =========================================================================================
-- AIMOS Fort McMurray - Revenue Analytics Views
-- =========================================================================================
-- Version: 1.0
-- Purpose: Pre-built SQL views for revenue analytics, KPI tracking, and dashboard reporting
-- Dependencies: Requires supabase-schema.sql or location-configuration.sql

-- =========================
-- Core Metrics Definitions
-- =========================

-- Gross Revenue = sum(invoices.total) + sum(claims.paid)
-- Revenue per Visit = Gross Revenue / completed visits
-- Utilization (Room) = booked minutes / available minutes
-- Utilization (Clinician) = patient-facing minutes / scheduled work minutes
-- No-show rate = no_show / (scheduled excluding in-time cancellations)
-- Revenue per Sq Ft = monthly revenue / leased area
-- EBITDA (proxy) = revenue – (rent + wages + contractor payouts + marketing + admin + supplies)

-- =========================
-- VIEW 1: Daily Revenue by Location
-- =========================

CREATE OR REPLACE VIEW v_daily_revenue AS
SELECT
  i.location_id,
  DATE_TRUNC('day', p.received_at) AS day,
  SUM(p.amount_cents)/100.0 AS payments_revenue,
  COUNT(DISTINCT p.invoice_id) AS invoices_paid,
  COUNT(p.id) AS payment_count
FROM payments p
JOIN invoices i ON i.id = p.invoice_id
GROUP BY 1, 2;

COMMENT ON VIEW v_daily_revenue IS 'Daily revenue aggregated from payments, grouped by location';

-- =========================
-- VIEW 2: Monthly KPIs (Revenue, Visits, No-Shows)
-- =========================

CREATE OR REPLACE VIEW v_monthly_kpis AS
WITH visits AS (
  SELECT
    location_id,
    DATE_TRUNC('month', start_at) AS month,
    COUNT(*) FILTER (WHERE status='completed') AS completed_visits,
    COUNT(*) FILTER (WHERE status='no_show') AS no_shows,
    COUNT(*) FILTER (WHERE status='cancelled') AS cancelled,
    COUNT(*) FILTER (WHERE status='scheduled') AS scheduled
  FROM appointments
  GROUP BY 1, 2
),
rev AS (
  SELECT
    i.location_id,
    DATE_TRUNC('month', p.received_at) AS month,
    SUM(p.amount_cents)/100.0 AS revenue
  FROM payments p
  JOIN invoices i ON i.id = p.invoice_id
  GROUP BY 1, 2
)
SELECT
  v.location_id,
  v.month,
  COALESCE(r.revenue, 0) AS revenue,
  v.completed_visits,
  CASE 
    WHEN v.completed_visits > 0 
    THEN COALESCE(r.revenue, 0) / v.completed_visits 
    ELSE 0 
  END AS revenue_per_visit,
  v.no_shows,
  CASE 
    WHEN (v.completed_visits + v.no_shows) > 0 
    THEN v.no_shows::NUMERIC / (v.completed_visits + v.no_shows) 
    ELSE 0 
  END AS no_show_rate,
  v.cancelled,
  v.scheduled
FROM visits v
LEFT JOIN rev r USING (location_id, month);

COMMENT ON VIEW v_monthly_kpis IS 'Monthly KPIs including revenue, visits, revenue per visit, and no-show rate';

-- =========================
-- VIEW 3: Revenue by Service Line (Category)
-- =========================

CREATE OR REPLACE VIEW v_revenue_by_service AS
SELECT
  a.location_id,
  DATE_TRUNC('month', a.start_at) AS month,
  s.name AS service_name,
  c.name AS category_name,
  COUNT(*) FILTER (WHERE a.status='completed') AS completed_visits,
  SUM(il.line_total_cents) FILTER (WHERE a.status='completed') / 100.0 AS revenue,
  CASE 
    WHEN COUNT(*) FILTER (WHERE a.status='completed') > 0 
    THEN SUM(il.line_total_cents) FILTER (WHERE a.status='completed') / 
         (100.0 * COUNT(*) FILTER (WHERE a.status='completed'))
    ELSE 0 
  END AS avg_revenue_per_visit
FROM appointments a
JOIN services s ON s.id = a.service_id
LEFT JOIN service_categories c ON c.id = s.category_id
LEFT JOIN invoice_lines il ON il.appointment_id = a.id
GROUP BY 1, 2, 3, 4;

COMMENT ON VIEW v_revenue_by_service IS 'Revenue breakdown by service line and category';

-- =========================
-- VIEW 4: Clinician Productivity (Revenue + Visits)
-- =========================

CREATE OR REPLACE VIEW v_clinician_productivity AS
SELECT
  a.location_id,
  a.staff_id,
  st.full_name AS clinician_name,
  st.role AS clinician_role,
  DATE_TRUNC('month', a.start_at) AS month,
  COUNT(*) FILTER (WHERE a.status='completed') AS completed_visits,
  COUNT(*) FILTER (WHERE a.status='no_show') AS no_shows,
  SUM(il.line_total_cents) FILTER (WHERE a.status='completed') / 100.0 AS revenue,
  CASE 
    WHEN COUNT(*) FILTER (WHERE a.status='completed') > 0 
    THEN SUM(il.line_total_cents) FILTER (WHERE a.status='completed') / 
         (100.0 * COUNT(*) FILTER (WHERE a.status='completed'))
    ELSE 0 
  END AS revenue_per_visit,
  SUM(EXTRACT(EPOCH FROM (a.end_at - a.start_at))/60) FILTER (WHERE a.status='completed') AS total_clinical_minutes
FROM appointments a
LEFT JOIN staff st ON st.id = a.staff_id
LEFT JOIN invoice_lines il ON il.appointment_id = a.id
GROUP BY 1, 2, 3, 4, 5;

COMMENT ON VIEW v_clinician_productivity IS 'Clinician productivity metrics including visits, revenue, and time';

-- =========================
-- VIEW 5: Room Utilization
-- =========================

CREATE OR REPLACE VIEW v_room_utilization AS
WITH room_availability AS (
  -- Assuming 8-hour days, 3 days/week initially (Phase 1)
  -- Adjust based on actual operating hours from staff_availability
  SELECT
    r.id AS room_id,
    r.location_id,
    r.name AS room_name,
    r.room_type,
    DATE_TRUNC('month', d.day) AS month,
    COUNT(d.day) * 480 AS available_minutes -- 8 hours * 60 minutes, simplified
  FROM rooms r
  CROSS JOIN GENERATE_SERIES(
    DATE_TRUNC('month', CURRENT_DATE),
    DATE_TRUNC('month', CURRENT_DATE) + INTERVAL '1 month' - INTERVAL '1 day',
    INTERVAL '1 day'
  ) AS d(day)
  WHERE r.is_bookable = TRUE
  GROUP BY 1, 2, 3, 4, 5
),
room_bookings AS (
  SELECT
    a.room_id,
    DATE_TRUNC('month', a.start_at) AS month,
    SUM(EXTRACT(EPOCH FROM (a.end_at - a.start_at))/60) AS booked_minutes
  FROM appointments a
  WHERE a.status IN ('completed', 'scheduled', 'arrived')
  GROUP BY 1, 2
)
SELECT
  ra.location_id,
  ra.room_id,
  ra.room_name,
  ra.room_type,
  ra.month,
  ra.available_minutes,
  COALESCE(rb.booked_minutes, 0) AS booked_minutes,
  CASE 
    WHEN ra.available_minutes > 0 
    THEN (COALESCE(rb.booked_minutes, 0) / ra.available_minutes) * 100 
    ELSE 0 
  END AS utilization_percentage
FROM room_availability ra
LEFT JOIN room_bookings rb ON rb.room_id = ra.room_id AND rb.month = ra.month;

COMMENT ON VIEW v_room_utilization IS 'Room utilization percentage by month';

-- =========================
-- VIEW 6: Lead Conversion Funnel
-- =========================

CREATE OR REPLACE VIEW v_lead_conversion_funnel AS
WITH lead_stages AS (
  SELECT
    ml.location_id,
    DATE_TRUNC('month', ml.created_at) AS month,
    ml.source,
    COUNT(ml.id) AS total_leads,
    COUNT(i.id) AS intakes_created,
    COUNT(a.id) FILTER (WHERE a.status != 'cancelled') AS bookings_made,
    COUNT(a.id) FILTER (WHERE a.status = 'completed') AS appointments_completed
  FROM marketing_leads ml
  LEFT JOIN intakes i ON i.lead_id = ml.id
  LEFT JOIN appointments a ON a.patient_id = i.patient_id
  GROUP BY 1, 2, 3
)
SELECT
  location_id,
  month,
  source,
  total_leads,
  intakes_created,
  bookings_made,
  appointments_completed,
  CASE WHEN total_leads > 0 THEN (intakes_created::NUMERIC / total_leads) * 100 ELSE 0 END AS lead_to_intake_rate,
  CASE WHEN intakes_created > 0 THEN (bookings_made::NUMERIC / intakes_created) * 100 ELSE 0 END AS intake_to_booking_rate,
  CASE WHEN bookings_made > 0 THEN (appointments_completed::NUMERIC / bookings_made) * 100 ELSE 0 END AS booking_to_completion_rate
FROM lead_stages;

COMMENT ON VIEW v_lead_conversion_funnel IS 'Marketing lead conversion funnel from lead to completed appointment';

-- =========================
-- VIEW 7: Service Mix (Percentage of Total)
-- =========================

CREATE OR REPLACE VIEW v_service_mix AS
WITH monthly_totals AS (
  SELECT
    location_id,
    DATE_TRUNC('month', start_at) AS month,
    COUNT(*) FILTER (WHERE status='completed') AS total_visits,
    SUM(il.line_total_cents) FILTER (WHERE status='completed') / 100.0 AS total_revenue
  FROM appointments a
  LEFT JOIN invoice_lines il ON il.appointment_id = a.id
  GROUP BY 1, 2
),
service_breakdown AS (
  SELECT
    a.location_id,
    DATE_TRUNC('month', a.start_at) AS month,
    c.name AS category_name,
    COUNT(*) FILTER (WHERE a.status='completed') AS category_visits,
    SUM(il.line_total_cents) FILTER (WHERE a.status='completed') / 100.0 AS category_revenue
  FROM appointments a
  JOIN services s ON s.id = a.service_id
  LEFT JOIN service_categories c ON c.id = s.category_id
  LEFT JOIN invoice_lines il ON il.appointment_id = a.id
  GROUP BY 1, 2, 3
)
SELECT
  sb.location_id,
  sb.month,
  sb.category_name,
  sb.category_visits,
  sb.category_revenue,
  CASE 
    WHEN mt.total_visits > 0 
    THEN (sb.category_visits::NUMERIC / mt.total_visits) * 100 
    ELSE 0 
  END AS percentage_of_visits,
  CASE 
    WHEN mt.total_revenue > 0 
    THEN (sb.category_revenue / mt.total_revenue) * 100 
    ELSE 0 
  END AS percentage_of_revenue
FROM service_breakdown sb
JOIN monthly_totals mt USING (location_id, month);

COMMENT ON VIEW v_service_mix IS 'Service mix showing percentage of visits and revenue by category';

-- =========================
-- VIEW 8: Payor Mix Analysis
-- =========================

CREATE OR REPLACE VIEW v_payor_mix AS
SELECT
  a.location_id,
  DATE_TRUNC('month', a.start_at) AS month,
  a.payor_type,
  COUNT(*) FILTER (WHERE a.status='completed') AS completed_visits,
  SUM(il.line_total_cents) FILTER (WHERE a.status='completed') / 100.0 AS revenue,
  CASE 
    WHEN COUNT(*) FILTER (WHERE a.status='completed') > 0 
    THEN SUM(il.line_total_cents) FILTER (WHERE a.status='completed') / 
         (100.0 * COUNT(*) FILTER (WHERE a.status='completed'))
    ELSE 0 
  END AS avg_revenue_per_visit
FROM appointments a
LEFT JOIN invoice_lines il ON il.appointment_id = a.id
GROUP BY 1, 2, 3;

COMMENT ON VIEW v_payor_mix IS 'Revenue breakdown by payor type';

-- =========================
-- VIEW 9: AR Aging (Accounts Receivable)
-- =========================

CREATE OR REPLACE VIEW v_ar_aging AS
WITH invoice_payments AS (
  SELECT
    invoice_id,
    SUM(amount_cents) / 100.0 AS total_paid
  FROM payments
  GROUP BY 1
)
SELECT
  i.location_id,
  i.invoice_number,
  i.issued_at,
  i.status,
  i.total_cents / 100.0 AS invoice_total,
  COALESCE(ip.total_paid, 0) AS total_paid,
  (i.total_cents / 100.0) - COALESCE(ip.total_paid, 0) AS balance_outstanding,
  CASE
    WHEN i.status = 'paid' THEN 'Paid'
    WHEN i.issued_at IS NULL THEN 'Not Issued'
    WHEN CURRENT_DATE - i.issued_at::DATE <= 30 THEN '0-30 days'
    WHEN CURRENT_DATE - i.issued_at::DATE <= 60 THEN '31-60 days'
    WHEN CURRENT_DATE - i.issued_at::DATE <= 90 THEN '61-90 days'
    ELSE '90+ days'
  END AS aging_bucket
FROM invoices i
LEFT JOIN invoice_payments ip ON ip.invoice_id = i.id
WHERE i.status != 'void';

COMMENT ON VIEW v_ar_aging IS 'Accounts receivable aging report';

-- =========================
-- VIEW 10: Breakeven Analysis
-- =========================

CREATE OR REPLACE VIEW v_breakeven_analysis AS
WITH monthly_revenue AS (
  SELECT
    location_id,
    DATE_TRUNC('month', received_at) AS month,
    SUM(amount_cents) / 100.0 AS revenue
  FROM payments p
  JOIN invoices i ON i.id = p.invoice_id
  GROUP BY 1, 2
),
fixed_costs AS (
  -- Placeholder - would come from expense tracking table
  SELECT
    location_id,
    month,
    7100.00 AS fixed_costs_monthly
  FROM monthly_revenue
),
variable_costs AS (
  SELECT
    a.location_id,
    DATE_TRUNC('month', a.start_at) AS month,
    COUNT(*) FILTER (WHERE a.status='completed') * 53.50 AS variable_costs
  FROM appointments a
  GROUP BY 1, 2
)
SELECT
  mr.location_id,
  mr.month,
  mr.revenue,
  fc.fixed_costs_monthly,
  COALESCE(vc.variable_costs, 0) AS variable_costs,
  fc.fixed_costs_monthly + COALESCE(vc.variable_costs, 0) AS total_costs,
  mr.revenue - (fc.fixed_costs_monthly + COALESCE(vc.variable_costs, 0)) AS ebitda,
  CASE 
    WHEN mr.revenue > 0 
    THEN ((mr.revenue - (fc.fixed_costs_monthly + COALESCE(vc.variable_costs, 0))) / mr.revenue) * 100 
    ELSE 0 
  END AS ebitda_margin_percent
FROM monthly_revenue mr
JOIN fixed_costs fc USING (location_id, month)
LEFT JOIN variable_costs vc USING (location_id, month);

COMMENT ON VIEW v_breakeven_analysis IS 'Monthly breakeven and EBITDA analysis';

-- =========================
-- VIEW 11: Expansion Readiness Dashboard
-- =========================

CREATE OR REPLACE VIEW v_expansion_readiness AS
WITH last_3_months AS (
  SELECT
    location_id,
    AVG(revenue) AS avg_monthly_revenue,
    MIN(revenue) AS min_monthly_revenue
  FROM v_monthly_kpis
  WHERE month >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '3 months'
  GROUP BY location_id
),
utilization_last_6_weeks AS (
  SELECT
    location_id,
    AVG(utilization_percentage) AS avg_utilization
  FROM v_room_utilization
  WHERE month >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '6 weeks'
  GROUP BY location_id
)
SELECT
  l.id AS location_id,
  l.name AS location_name,
  l3m.avg_monthly_revenue,
  l3m.min_monthly_revenue,
  u6w.avg_utilization,
  CASE 
    WHEN l3m.min_monthly_revenue > 60000 AND u6w.avg_utilization > 75 
    THEN 'Ready for Expansion'
    WHEN l3m.avg_monthly_revenue > 50000 AND u6w.avg_utilization > 70 
    THEN 'Approaching Readiness'
    ELSE 'Growth Phase'
  END AS expansion_status,
  CASE 
    WHEN l3m.min_monthly_revenue > 60000 AND u6w.avg_utilization > 75 
    THEN 'Add 2nd clinician or expand to 5 days/week'
    WHEN l3m.avg_monthly_revenue > 50000 AND u6w.avg_utilization > 70 
    THEN 'Continue growth trajectory'
    ELSE 'Focus on patient acquisition and utilization'
  END AS recommended_action
FROM locations l
LEFT JOIN last_3_months l3m ON l3m.location_id = l.id
LEFT JOIN utilization_last_6_weeks u6w ON u6w.location_id = l.id;

COMMENT ON VIEW v_expansion_readiness IS 'Expansion readiness dashboard based on revenue and utilization triggers';

-- =========================
-- VIEW 12: AI Agent Performance
-- =========================

CREATE OR REPLACE VIEW v_agent_performance AS
SELECT
  agent_name,
  DATE_TRUNC('day', created_at) AS day,
  COUNT(*) AS total_runs,
  COUNT(*) FILTER (WHERE status = 'success') AS successful_runs,
  COUNT(*) FILTER (WHERE status = 'failed') AS failed_runs,
  COUNT(*) FILTER (WHERE status = 'needs_review') AS needs_review_runs,
  AVG(confidence_score) AS avg_confidence_score,
  CASE 
    WHEN COUNT(*) > 0 
    THEN (COUNT(*) FILTER (WHERE status = 'success')::NUMERIC / COUNT(*)) * 100 
    ELSE 0 
  END AS success_rate_percent
FROM agent_runs
GROUP BY 1, 2;

COMMENT ON VIEW v_agent_performance IS 'AI agent performance metrics including success rates and confidence scores';

-- =========================
-- Example Queries Using Views
-- =========================

-- Get current month KPIs for Fort McMurray
-- SELECT * FROM v_monthly_kpis 
-- WHERE location_id = 'AIM_FMM_001_UUID' 
-- AND month = DATE_TRUNC('month', CURRENT_DATE);

-- Get revenue by service line for last 6 months
-- SELECT * FROM v_revenue_by_service 
-- WHERE location_id = 'AIM_FMM_001_UUID'
-- AND month >= DATE_TRUNC('month', CURRENT_DATE) - INTERVAL '6 months'
-- ORDER BY month DESC, revenue DESC;

-- Check expansion readiness
-- SELECT * FROM v_expansion_readiness;

-- Get room utilization for current month
-- SELECT * FROM v_room_utilization 
-- WHERE location_id = 'AIM_FMM_001_UUID'
-- AND month = DATE_TRUNC('month', CURRENT_DATE);

-- =========================
-- END ANALYTICS VIEWS
-- =========================
