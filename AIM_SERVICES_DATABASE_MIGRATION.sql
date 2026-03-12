-- AIM Service Expansion - Database Migration
-- Add Chiropractor and Pelvic Health services to AIMOS
-- Date: 2026-02-23

-- Add new services to crm_service_lines
INSERT INTO crm_service_lines (name, slug, description, priority, target_clv, active) VALUES
('Chiropractic Care', 'chiropractic', 'Chiropractic treatment for back pain, neck pain, sports injuries, and auto accident recovery. WCB and MVA direct billing available.', 20, 1000.00, true),
('Pelvic Floor Therapy - Women', 'pelvic-health-women', 'Specialized pelvic floor physiotherapy for postpartum recovery, incontinence, pelvic pain, and women''s health conditions.', 30, 2000.00, true),
('Pelvic Floor Therapy - Men', 'pelvic-health-men', 'Male pelvic floor therapy for post-prostate surgery recovery, incontinence, and chronic pelvic pain.', 40, 1500.00, true)
ON CONFLICT (slug) DO UPDATE SET
  description = EXCLUDED.description,
  priority = EXCLUDED.priority,
  target_clv = EXCLUDED.target_clv,
  active = EXCLUDED.active;

-- Add appointment types for new services
CREATE TABLE IF NOT EXISTS appointment_types (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  service_line_id uuid REFERENCES crm_service_lines(id),
  name text NOT NULL,
  duration_minutes integer NOT NULL,
  description text,
  default_price numeric(10,2),
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Chiropractor appointment types
INSERT INTO appointment_types (service_line_id, name, duration_minutes, description, default_price, active)
SELECT 
  sl.id,
  'Initial Chiropractic Assessment',
  60,
  'Comprehensive first visit including history, examination, diagnosis, and treatment',
  120.00,
  true
FROM crm_service_lines sl WHERE sl.slug = 'chiropractic'
ON CONFLICT DO NOTHING;

INSERT INTO appointment_types (service_line_id, name, duration_minutes, description, default_price, active)
SELECT 
  sl.id,
  'Chiropractic Adjustment',
  30,
  'Follow-up chiropractic adjustment and treatment',
  80.00,
  true
FROM crm_service_lines sl WHERE sl.slug = 'chiropractic'
ON CONFLICT DO NOTHING;

-- Pelvic health appointment types (Women)
INSERT INTO appointment_types (service_line_id, name, duration_minutes, description, default_price, active)
SELECT 
  sl.id,
  'Initial Pelvic Health Assessment',
  75,
  'Comprehensive pelvic floor assessment including internal examination (if appropriate)',
  150.00,
  true
FROM crm_service_lines sl WHERE sl.slug = 'pelvic-health-women'
ON CONFLICT DO NOTHING;

INSERT INTO appointment_types (service_line_id, name, duration_minutes, description, default_price, active)
SELECT 
  sl.id,
  'Pelvic Floor Therapy',
  60,
  'Follow-up pelvic floor physiotherapy treatment',
  120.00,
  true
FROM crm_service_lines sl WHERE sl.slug = 'pelvic-health-women'
ON CONFLICT DO NOTHING;

-- Pelvic health appointment types (Men)
INSERT INTO appointment_types (service_line_id, name, duration_minutes, description, default_price, active)
SELECT 
  sl.id,
  'Initial Pelvic Health Assessment - Men',
  75,
  'Comprehensive pelvic floor assessment for men',
  150.00,
  true
FROM crm_service_lines sl WHERE sl.slug = 'pelvic-health-men'
ON CONFLICT DO NOTHING;

INSERT INTO appointment_types (service_line_id, name, duration_minutes, description, default_price, active)
SELECT 
  sl.id,
  'Pelvic Floor Therapy - Men',
  60,
  'Follow-up pelvic floor physiotherapy treatment for men',
  120.00,
  true
FROM crm_service_lines sl WHERE sl.slug = 'pelvic-health-men'
ON CONFLICT DO NOTHING;

-- Update lead sources to include new service-specific sources
INSERT INTO crm_lead_sources (name, slug, description, category, cost_per_lead, priority, active) VALUES
('Google Ads - Chiropractic', 'google-ads-chiro', 'Google Ads campaigns targeting chiropractic keywords', 'paid', 45.00, 20, true),
('Google Ads - Pelvic Health', 'google-ads-pelvic', 'Google Ads campaigns targeting pelvic floor therapy keywords', 'paid', 35.00, 30, true),
('Meta Ads - Pelvic Health', 'meta-ads-pelvic', 'Facebook/Instagram ads targeting pelvic health', 'paid', 40.00, 40, true),
('Referral - OB/GYN', 'referral-obgyn', 'Referrals from OB/GYN physicians', 'referral', 0.00, 50, true),
('Referral - Urologist', 'referral-urologist', 'Referrals from urologists', 'referral', 0.00, 60, true)
ON CONFLICT (slug) DO UPDATE SET
  description = EXCLUDED.description,
  cost_per_lead = EXCLUDED.cost_per_lead,
  active = EXCLUDED.active;

-- Add service-specific tags for lead categorization
INSERT INTO crm_lead_tags (name, slug, category, color) VALUES
('Chiropractic Interest', 'chiro-interest', 'service', '#10B981'),
('Pelvic Health Interest', 'pelvic-interest', 'service', '#8B5CF6'),
('Postpartum', 'postpartum', 'condition', '#EC4899'),
('WCB Chiropractic', 'wcb-chiro', 'payor', '#F59E0B'),
('Post-Prostate Surgery', 'post-prostate', 'condition', '#6366F1')
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  color = EXCLUDED.color;

COMMENT ON TABLE appointment_types IS 'Appointment types and durations for each service line';
COMMENT ON COLUMN appointment_types.duration_minutes IS 'Standard appointment duration in minutes';
COMMENT ON COLUMN appointment_types.default_price IS 'Standard price for this appointment type';
