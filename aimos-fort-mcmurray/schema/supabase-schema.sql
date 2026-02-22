-- =========================================================================================
-- AIMOS Fort McMurray - Supabase-Optimized Schema
-- =========================================================================================
-- Version: 1.0
-- Database: PostgreSQL 14+ (Supabase-ready with auth.users integration)
-- Created: 2026-02-20
-- Purpose: Complete multi-tenant schema with UUID primary keys and Supabase Auth integration

-- =========================
-- Core org + location model
-- =========================

CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  code TEXT NOT NULL, -- e.g., AIM_FMM_001
  name TEXT NOT NULL,
  address_line1 TEXT,
  city TEXT,
  province TEXT,
  postal_code TEXT,
  country TEXT DEFAULT 'Canada',
  status TEXT NOT NULL DEFAULT 'active', -- active|planned|inactive
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(organization_id, code)
);

CREATE TABLE rooms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id UUID NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- Room 1, Room 2, Gym
  room_type TEXT NOT NULL, -- pelvic_suite|neuro|general|gym
  capacity INT NOT NULL DEFAULT 1, -- gym can be >1 for groups
  is_bookable BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_rooms_location ON rooms(location_id);
CREATE INDEX idx_rooms_type ON rooms(room_type);

-- =========================
-- Staff / providers
-- =========================

CREATE TABLE staff (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  auth_user_id UUID UNIQUE, -- references auth.users(id) logically
  full_name TEXT NOT NULL,
  role TEXT NOT NULL, -- CEO|COO|CCO|PT|PelvicPT|AT|MOT|RMT|Admin|Billing|Marketing
  employment_type TEXT NOT NULL DEFAULT 'contractor', -- employee|contractor
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE staff_locations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  staff_id UUID NOT NULL REFERENCES staff(id) ON DELETE CASCADE,
  location_id UUID NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
  is_primary BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (staff_id, location_id)
);

CREATE TABLE staff_credentials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  staff_id UUID NOT NULL REFERENCES staff(id) ON DELETE CASCADE,
  credential_type TEXT NOT NULL, -- pelvic|vestibular|concussion|acupuncture|etc
  credential_body TEXT,
  credential_id TEXT,
  issued_date DATE,
  expiry_date DATE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE staff_availability (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  staff_id UUID NOT NULL REFERENCES staff(id) ON DELETE CASCADE,
  location_id UUID NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
  day_of_week INT NOT NULL, -- 0=Sun ... 6=Sat
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_staff_availability_staff ON staff_availability(staff_id, day_of_week);
CREATE INDEX idx_staff_active ON staff(organization_id, active);

-- =========================
-- Patients (minimal PHI)
-- =========================

CREATE TABLE patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  date_of_birth DATE,
  preferred_contact TEXT DEFAULT 'phone', -- phone|email|sms
  consent_marketing BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_patients_org ON patients(organization_id);
CREATE INDEX idx_patients_name ON patients(last_name, first_name);

-- =========================
-- Services & pricing
-- =========================

CREATE TABLE service_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- Pelvic Health, Concussion, Vestibular, Industrial Athlete, General
  display_order INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  category_id UUID REFERENCES service_categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL, -- Pelvic Initial Assessment
  service_code TEXT, -- internal code
  default_duration_minutes INT NOT NULL,
  default_room_type TEXT NOT NULL, -- pelvic_suite|neuro|general|gym
  base_price_cents INT NOT NULL, -- store in cents
  is_group BOOLEAN NOT NULL DEFAULT FALSE,
  group_capacity INT,
  active BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_services_category ON services(category_id);
CREATE INDEX idx_services_active ON services(organization_id, active);

CREATE TABLE payor_types (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- Private|WCB|MVA|Employer
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =========================
-- Leads & intake
-- =========================

CREATE TABLE marketing_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  location_id UUID REFERENCES locations(id) ON DELETE SET NULL,
  source TEXT NOT NULL, -- google_ads|gbp|referral|walk_in|doctor|employer|meta
  utm_campaign TEXT,
  utm_adgroup TEXT,
  utm_keyword TEXT,
  lead_name TEXT,
  lead_phone TEXT,
  lead_email TEXT,
  presenting_issue TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_leads_location_date ON marketing_leads(location_id, created_at DESC);
CREATE INDEX idx_leads_source ON marketing_leads(source, created_at DESC);

CREATE TABLE intakes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  location_id UUID NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
  patient_id UUID REFERENCES patients(id) ON DELETE SET NULL,
  lead_id UUID REFERENCES marketing_leads(id) ON DELETE SET NULL,
  triage_category TEXT, -- pelvic|concussion|vestibular|general|rtw|unknown
  payor_type TEXT, -- Private|WCB|MVA|Employer (denorm ok)
  red_flags TEXT[], -- array
  status TEXT NOT NULL DEFAULT 'new', -- new|pending_review|booked|closed
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_intakes_status ON intakes(status, created_at DESC);

-- =========================
-- Appointments
-- =========================

CREATE TABLE appointments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  location_id UUID NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
  room_id UUID REFERENCES rooms(id) ON DELETE SET NULL,
  patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  staff_id UUID REFERENCES staff(id) ON DELETE SET NULL,
  service_id UUID REFERENCES services(id) ON DELETE SET NULL,
  payor_type TEXT,
  start_at TIMESTAMPTZ NOT NULL,
  end_at TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL DEFAULT 'scheduled', -- scheduled|arrived|completed|cancelled|no_show
  cancellation_reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_appointments_location_date ON appointments(location_id, start_at);
CREATE INDEX idx_appointments_staff_date ON appointments(staff_id, start_at);
CREATE INDEX idx_appointments_patient_date ON appointments(patient_id, start_at DESC);
CREATE INDEX idx_appointments_room_date ON appointments(room_id, start_at);
CREATE INDEX idx_appointments_status ON appointments(status);

-- =========================
-- Clinical notes & outcomes
-- =========================

CREATE TABLE clinical_notes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  appointment_id UUID NOT NULL REFERENCES appointments(id) ON DELETE CASCADE,
  author_staff_id UUID REFERENCES staff(id) ON DELETE SET NULL,
  note_type TEXT NOT NULL DEFAULT 'soap', -- soap|progress|discharge|employer|md_update
  content TEXT NOT NULL,
  is_signed BOOLEAN NOT NULL DEFAULT FALSE,
  signed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_clinical_notes_appointment ON clinical_notes(appointment_id);

CREATE TABLE outcome_measures (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL, -- DHI, PCS, PFDI-20, etc
  scale_description TEXT,
  min_score NUMERIC,
  max_score NUMERIC,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE patient_outcomes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
  outcome_measure_id UUID NOT NULL REFERENCES outcome_measures(id) ON DELETE CASCADE,
  score NUMERIC NOT NULL,
  recorded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_patient_outcomes_patient ON patient_outcomes(patient_id, recorded_at DESC);

-- =========================
-- Employers / RTW
-- =========================

CREATE TABLE employers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  industry TEXT,
  contact_name TEXT,
  contact_email TEXT,
  contact_phone TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE employer_contracts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  employer_id UUID NOT NULL REFERENCES employers(id) ON DELETE CASCADE,
  location_id UUID REFERENCES locations(id) ON DELETE SET NULL,
  contract_type TEXT NOT NULL, -- rtw|preferred_provider|package
  start_date DATE,
  end_date DATE,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- =========================
-- Billing (simple; can integrate external billing later)
-- =========================

CREATE TABLE invoices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  location_id UUID NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
  patient_id UUID REFERENCES patients(id) ON DELETE SET NULL,
  employer_id UUID REFERENCES employers(id) ON DELETE SET NULL,
  invoice_number TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'draft', -- draft|sent|paid|void
  subtotal_cents INT NOT NULL DEFAULT 0,
  tax_cents INT NOT NULL DEFAULT 0,
  total_cents INT NOT NULL DEFAULT 0,
  issued_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (organization_id, invoice_number)
);

CREATE TABLE invoice_lines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
  appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
  description TEXT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  unit_price_cents INT NOT NULL,
  line_total_cents INT NOT NULL
);

CREATE INDEX idx_invoice_lines_invoice ON invoice_lines(invoice_id);

CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id UUID NOT NULL REFERENCES invoices(id) ON DELETE CASCADE,
  amount_cents INT NOT NULL,
  method TEXT, -- card|etransfer|cash|insurance
  received_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_payments_invoice ON payments(invoice_id);

CREATE TABLE claims (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  location_id UUID NOT NULL REFERENCES locations(id) ON DELETE CASCADE,
  appointment_id UUID REFERENCES appointments(id) ON DELETE SET NULL,
  payor_type TEXT NOT NULL, -- WCB|MVA|Other
  claim_number TEXT,
  status TEXT NOT NULL DEFAULT 'draft', -- draft|submitted|paid|denied
  denial_reason TEXT,
  submitted_at TIMESTAMPTZ,
  paid_at TIMESTAMPTZ,
  amount_cents INT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_claims_status ON claims(status, created_at DESC);

-- =========================
-- AI agent runs + audit logs
-- =========================

CREATE TABLE agent_runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  location_id UUID REFERENCES locations(id) ON DELETE SET NULL,
  agent_name TEXT NOT NULL,
  input_summary TEXT,
  output_summary TEXT,
  confidence_score NUMERIC,
  status TEXT NOT NULL DEFAULT 'success', -- success|failed|needs_review
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_agent_runs_date ON agent_runs(created_at DESC);
CREATE INDEX idx_agent_runs_status ON agent_runs(status);

CREATE TABLE audit_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organization_id UUID NOT NULL REFERENCES organizations(id) ON DELETE CASCADE,
  actor_staff_id UUID REFERENCES staff(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id UUID,
  details JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_audit_logs_date ON audit_logs(created_at DESC);
CREATE INDEX idx_audit_logs_entity ON audit_logs(entity_type, entity_id);

-- =========================
-- Row Level Security (RLS) Policies - Supabase
-- =========================

-- Enable RLS on all tables
ALTER TABLE organizations ENABLE ROW LEVEL SECURITY;
ALTER TABLE locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE rooms ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_credentials ENABLE ROW LEVEL SECURITY;
ALTER TABLE staff_availability ENABLE ROW LEVEL SECURITY;
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE service_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE payor_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE marketing_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE intakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE clinical_notes ENABLE ROW LEVEL SECURITY;
ALTER TABLE outcome_measures ENABLE ROW LEVEL SECURITY;
ALTER TABLE patient_outcomes ENABLE ROW LEVEL SECURITY;
ALTER TABLE employers ENABLE ROW LEVEL SECURITY;
ALTER TABLE employer_contracts ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoices ENABLE ROW LEVEL SECURITY;
ALTER TABLE invoice_lines ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE claims ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Example RLS policy for staff (adjust based on your auth setup)
CREATE POLICY "Staff can view their organization data" ON staff
  FOR SELECT
  USING (
    organization_id IN (
      SELECT organization_id FROM staff WHERE auth_user_id = auth.uid()
    )
  );

-- Example RLS policy for patients
CREATE POLICY "Staff can view patients in their organization" ON patients
  FOR SELECT
  USING (
    organization_id IN (
      SELECT organization_id FROM staff WHERE auth_user_id = auth.uid()
    )
  );

-- Add more policies as needed for your security model

-- =========================
-- Utility Functions
-- =========================

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Apply trigger to appointments
CREATE TRIGGER update_appointments_updated_at
  BEFORE UPDATE ON appointments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- =========================
-- Initial Data Population
-- =========================

-- Insert default organization (modify as needed)
INSERT INTO organizations (name) VALUES ('Alberta Injury Management') RETURNING id;

-- Insert Fort McMurray location
INSERT INTO locations (organization_id, code, name, city, province) 
SELECT id, 'AIM_FMM_001', 'AIM Performance - Fort McMurray', 'Fort McMurray', 'Alberta'
FROM organizations WHERE name = 'Alberta Injury Management';

-- Insert rooms for Fort McMurray
INSERT INTO rooms (location_id, name, room_type, capacity)
SELECT l.id, 'Room 1 - Pelvic Health Suite', 'pelvic_suite', 1
FROM locations l WHERE l.code = 'AIM_FMM_001'
UNION ALL
SELECT l.id, 'Room 2 - Concussion/Vestibular', 'neuro', 1
FROM locations l WHERE l.code = 'AIM_FMM_001'
UNION ALL
SELECT l.id, 'Room 3 - General Physio', 'general', 1
FROM locations l WHERE l.code = 'AIM_FMM_001'
UNION ALL
SELECT l.id, 'Room 4 - Performance Gym', 'gym', 4
FROM locations l WHERE l.code = 'AIM_FMM_001';

-- Insert service categories
INSERT INTO service_categories (organization_id, name, display_order)
SELECT o.id, 'Pelvic Health', 1 FROM organizations o WHERE o.name = 'Alberta Injury Management'
UNION ALL
SELECT o.id, 'Concussion', 2 FROM organizations o WHERE o.name = 'Alberta Injury Management'
UNION ALL
SELECT o.id, 'Vestibular', 3 FROM organizations o WHERE o.name = 'Alberta Injury Management'
UNION ALL
SELECT o.id, 'Industrial Athlete', 4 FROM organizations o WHERE o.name = 'Alberta Injury Management'
UNION ALL
SELECT o.id, 'General Physiotherapy', 5 FROM organizations o WHERE o.name = 'Alberta Injury Management';

-- Insert services (example - add all 14 services)
INSERT INTO services (organization_id, category_id, name, service_code, default_duration_minutes, default_room_type, base_price_cents)
SELECT 
  o.id,
  (SELECT id FROM service_categories WHERE name = 'Pelvic Health' LIMIT 1),
  'Pelvic Health - Initial Assessment',
  'PH-IA',
  60,
  'pelvic_suite',
  16500
FROM organizations o WHERE o.name = 'Alberta Injury Management';

-- Insert outcome measures
INSERT INTO outcome_measures (organization_id, name, scale_description, min_score, max_score)
SELECT o.id, 'Dizziness Handicap Inventory (DHI)', '25-item questionnaire', 0, 100 FROM organizations o WHERE o.name = 'Alberta Injury Management'
UNION ALL
SELECT o.id, 'Post-Concussion Symptom Scale (PCSS)', 'Symptom severity 0-6', 0, 132 FROM organizations o WHERE o.name = 'Alberta Injury Management'
UNION ALL
SELECT o.id, 'Pelvic Floor Distress Inventory (PFDI-20)', 'Pelvic floor symptoms', 0, 300 FROM organizations o WHERE o.name = 'Alberta Injury Management';

-- =========================
-- Comments for Documentation
-- =========================

COMMENT ON TABLE organizations IS 'Top-level multi-tenant organization entity';
COMMENT ON TABLE locations IS 'Physical clinic locations within an organization';
COMMENT ON TABLE rooms IS 'Treatment rooms and service spaces within locations';
COMMENT ON TABLE staff IS 'Clinicians, admin, and other staff members';
COMMENT ON TABLE patients IS 'Patient demographic and contact information (minimal PHI)';
COMMENT ON TABLE appointments IS 'Scheduled patient visits and their status';
COMMENT ON TABLE clinical_notes IS 'SOAP notes and clinical documentation';
COMMENT ON TABLE agent_runs IS 'AI agent execution logs for audit and monitoring';
COMMENT ON TABLE audit_logs IS 'Complete audit trail of all system actions';

-- =========================
-- END SUPABASE SCHEMA
-- =========================
