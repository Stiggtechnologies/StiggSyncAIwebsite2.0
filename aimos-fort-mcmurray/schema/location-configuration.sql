-- ================================================================
-- AIMOS Fort McMurray Satellite - Location Configuration Schema
-- ================================================================
-- Version: 1.0
-- Created: 2026-02-20
-- Purpose: Complete database schema for AIM Performance Fort McMurray

-- ================================================================
-- 1. LOCATION ENTITY
-- ================================================================

CREATE TABLE locations (
    location_id VARCHAR(50) PRIMARY KEY,
    location_name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR(100) NOT NULL,
    province VARCHAR(50) NOT NULL,
    postal_code VARCHAR(10),
    
    -- Operating model
    operating_model VARCHAR(100) NOT NULL,
    opening_phase VARCHAR(50) NOT NULL,
    days_per_week INTEGER NOT NULL,
    
    -- Status
    status VARCHAR(50) DEFAULT 'active',
    opening_date DATE,
    
    -- Facility specs
    total_sq_ft INTEGER,
    treatment_rooms INTEGER,
    gym_space BOOLEAN DEFAULT false,
    
    -- Tracking flags
    pl_tracking_enabled BOOLEAN DEFAULT true,
    utilization_tracking_enabled BOOLEAN DEFAULT true,
    productivity_tracking_enabled BOOLEAN DEFAULT true,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Fort McMurray location
INSERT INTO locations (
    location_id, 
    location_name, 
    address, 
    city, 
    province,
    operating_model,
    opening_phase,
    days_per_week,
    total_sq_ft,
    treatment_rooms,
    gym_space,
    opening_date
) VALUES (
    'AIM_FMM_001',
    'AIM Performance - Fort McMurray',
    'Fort McMurray, Alberta',
    'Fort McMurray',
    'Alberta',
    'Specialty Rehab + Industrial Athlete',
    'Phase 1',
    3,
    720, -- (3 x 120) + 300
    3,
    true,
    CURRENT_DATE
);

-- ================================================================
-- 2. ROOM CONFIGURATION
-- ================================================================

CREATE TABLE service_rooms (
    room_id VARCHAR(50) PRIMARY KEY,
    location_id VARCHAR(50) REFERENCES locations(location_id),
    room_name VARCHAR(255) NOT NULL,
    room_type VARCHAR(100) NOT NULL,
    
    -- Physical specs
    sq_ft INTEGER,
    privacy_level VARCHAR(50),
    
    -- Booking configuration
    default_booking_duration INTEGER, -- minutes
    assessment_duration INTEGER,
    followup_duration INTEGER,
    
    -- Capacity
    max_simultaneous_patients INTEGER DEFAULT 1,
    
    -- Utilization tracking
    target_utilization_min DECIMAL(5,2) DEFAULT 60.00,
    target_utilization_max DECIMAL(5,2) DEFAULT 85.00,
    
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Fort McMurray rooms
INSERT INTO service_rooms (
    room_id, location_id, room_name, room_type, sq_ft, privacy_level,
    assessment_duration, followup_duration, default_booking_duration
) VALUES
    ('AIM_FMM_001_R1', 'AIM_FMM_001', 'Room 1 - Pelvic Health Suite', 'Pelvic Health', 120, 'High', 60, 45, 45),
    ('AIM_FMM_001_R2', 'AIM_FMM_001', 'Room 2 - Concussion/Vestibular', 'Concussion/Vestibular', 120, 'Medium', 60, 45, 45),
    ('AIM_FMM_001_R3', 'AIM_FMM_001', 'Room 3 - General Physio', 'General Physio', 120, 'Medium', 45, 45, 45),
    ('AIM_FMM_001_R4', 'AIM_FMM_001', 'Room 4 - Performance Gym', 'Performance Gym', 300, 'Low', 60, 45, 45);

-- ================================================================
-- 3. SERVICE STACK CONFIGURATION
-- ================================================================

CREATE TABLE service_categories (
    category_id VARCHAR(50) PRIMARY KEY,
    location_id VARCHAR(50) REFERENCES locations(location_id),
    category_name VARCHAR(255) NOT NULL,
    category_type VARCHAR(100),
    display_order INTEGER,
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE services (
    service_id VARCHAR(50) PRIMARY KEY,
    category_id VARCHAR(50) REFERENCES service_categories(category_id),
    location_id VARCHAR(50) REFERENCES locations(location_id),
    service_name VARCHAR(255) NOT NULL,
    service_code VARCHAR(50),
    
    -- Billing
    billing_code VARCHAR(100),
    price DECIMAL(10,2) NOT NULL,
    
    -- Scheduling
    duration_minutes INTEGER NOT NULL,
    preferred_room_type VARCHAR(100),
    
    -- Tracking
    outcome_metrics JSONB,
    avg_visits_per_episode INTEGER,
    
    -- Revenue
    margin_category VARCHAR(50), -- high, medium, low
    
    status VARCHAR(50) DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Service Categories
INSERT INTO service_categories (category_id, location_id, category_name, category_type, display_order) VALUES
    ('CAT_PELVIC', 'AIM_FMM_001', 'Pelvic Health', 'Specialty', 1),
    ('CAT_CONCUSSION', 'AIM_FMM_001', 'Concussion', 'Specialty', 2),
    ('CAT_VESTIBULAR', 'AIM_FMM_001', 'Vestibular', 'Specialty', 3),
    ('CAT_INDUSTRIAL', 'AIM_FMM_001', 'Industrial Athlete', 'Specialty', 4);

-- Insert Services - Pelvic Health
INSERT INTO services (service_id, category_id, location_id, service_name, service_code, billing_code, price, duration_minutes, preferred_room_type, margin_category, outcome_metrics) VALUES
    ('SVC_PELVIC_001', 'CAT_PELVIC', 'AIM_FMM_001', 'Pelvic Health - Initial Assessment', 'PH-IA', 'PT-003', 165.00, 60, 'Pelvic Health', 'high', '{"pain_scale": true, "function_score": true, "qol_score": true}'),
    ('SVC_PELVIC_002', 'CAT_PELVIC', 'AIM_FMM_001', 'Pelvic Health - Follow-Up', 'PH-FU', 'PT-001', 125.00, 45, 'Pelvic Health', 'high', '{"pain_scale": true, "function_score": true}'),
    ('SVC_PELVIC_003', 'CAT_PELVIC', 'AIM_FMM_001', 'Postpartum Program', 'PH-PP', 'PT-005', 135.00, 45, 'Pelvic Health', 'high', '{"core_strength": true, "pelvic_function": true}'),
    ('SVC_PELVIC_004', 'CAT_PELVIC', 'AIM_FMM_001', 'Male Pelvic Health', 'PH-MPH', 'PT-003', 165.00, 60, 'Pelvic Health', 'high', '{"urinary_function": true, "pain_scale": true}');

-- Insert Services - Concussion
INSERT INTO services (service_id, category_id, location_id, service_name, service_code, billing_code, price, duration_minutes, preferred_room_type, margin_category, outcome_metrics) VALUES
    ('SVC_CONC_001', 'CAT_CONCUSSION', 'AIM_FMM_001', 'Concussion - Acute Assessment', 'CONC-AA', 'PT-007', 165.00, 60, 'Concussion/Vestibular', 'high', '{"symptom_score": true, "cognitive_test": true, "balance_test": true}'),
    ('SVC_CONC_002', 'CAT_CONCUSSION', 'AIM_FMM_001', 'Post-Concussion Management', 'CONC-PCM', 'PT-001', 125.00, 45, 'Concussion/Vestibular', 'high', '{"symptom_score": true, "return_to_activity": true}'),
    ('SVC_CONC_003', 'CAT_CONCUSSION', 'AIM_FMM_001', 'Return to Work Protocol', 'CONC-RTW', 'PT-008', 135.00, 45, 'Concussion/Vestibular', 'high', '{"work_tolerance": true, "cognitive_capacity": true}'),
    ('SVC_CONC_004', 'CAT_CONCUSSION', 'AIM_FMM_001', 'Return to Sport Protocol', 'CONC-RTS', 'PT-009', 135.00, 45, 'Concussion/Vestibular', 'high', '{"exertion_tolerance": true, "vestibular_function": true}');

-- Insert Services - Vestibular
INSERT INTO services (service_id, category_id, location_id, service_name, service_code, billing_code, price, duration_minutes, preferred_room_type, margin_category, outcome_metrics) VALUES
    ('SVC_VEST_001', 'CAT_VESTIBULAR', 'AIM_FMM_001', 'Dizziness Assessment', 'VEST-DA', 'PT-003', 165.00, 60, 'Concussion/Vestibular', 'high', '{"dizziness_score": true, "balance_test": true, "fall_risk": true}'),
    ('SVC_VEST_002', 'CAT_VESTIBULAR', 'AIM_FMM_001', 'BPPV Treatment', 'VEST-BPPV', 'PT-001', 125.00, 45, 'Concussion/Vestibular', 'high', '{"dizziness_resolution": true}'),
    ('SVC_VEST_003', 'CAT_VESTIBULAR', 'AIM_FMM_001', 'Balance Retraining', 'VEST-BR', 'PT-001', 125.00, 45, 'Performance Gym', 'medium', '{"balance_score": true, "fall_risk": true}');

-- Insert Services - Industrial Athlete
INSERT INTO services (service_id, category_id, location_id, service_name, service_code, billing_code, price, duration_minutes, preferred_room_type, margin_category, outcome_metrics) VALUES
    ('SVC_IND_001', 'CAT_INDUSTRIAL', 'AIM_FMM_001', 'RTW Assessment', 'IND-RTW', 'PT-010', 185.00, 60, 'Performance Gym', 'high', '{"functional_capacity": true, "work_readiness": true}'),
    ('SVC_IND_002', 'CAT_INDUSTRIAL', 'AIM_FMM_001', 'Work Conditioning Program', 'IND-WCP', 'PT-011', 145.00, 45, 'Performance Gym', 'high', '{"strength": true, "endurance": true, "work_simulation": true}'),
    ('SVC_IND_003', 'CAT_INDUSTRIAL', 'AIM_FMM_001', 'Functional Readiness Evaluation', 'IND-FRE', 'PT-012', 195.00, 60, 'Performance Gym', 'high', '{"job_specific_capacity": true, "clearance_status": true}');

-- ================================================================
-- 4. UTILIZATION TRACKING
-- ================================================================

CREATE TABLE room_utilization (
    utilization_id SERIAL PRIMARY KEY,
    room_id VARCHAR(50) REFERENCES service_rooms(room_id),
    location_id VARCHAR(50) REFERENCES locations(location_id),
    date DATE NOT NULL,
    
    -- Metrics
    total_available_minutes INTEGER NOT NULL,
    booked_minutes INTEGER DEFAULT 0,
    utilized_minutes INTEGER DEFAULT 0,
    utilization_percentage DECIMAL(5,2) GENERATED ALWAYS AS (
        CASE 
            WHEN total_available_minutes > 0 
            THEN (utilized_minutes::DECIMAL / total_available_minutes::DECIMAL) * 100
            ELSE 0
        END
    ) STORED,
    
    -- Alerts
    below_target BOOLEAN GENERATED ALWAYS AS (utilization_percentage < 60.00) STORED,
    above_target BOOLEAN GENERATED ALWAYS AS (utilization_percentage > 85.00) STORED,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(room_id, date)
);

CREATE INDEX idx_room_utilization_date ON room_utilization(date);
CREATE INDEX idx_room_utilization_location ON room_utilization(location_id, date);

-- ================================================================
-- 5. CLINICIAN PRODUCTIVITY TRACKING
-- ================================================================

CREATE TABLE clinician_productivity (
    productivity_id SERIAL PRIMARY KEY,
    clinician_id VARCHAR(50) NOT NULL,
    location_id VARCHAR(50) REFERENCES locations(location_id),
    date DATE NOT NULL,
    
    -- Volume metrics
    patients_seen INTEGER DEFAULT 0,
    visits_completed INTEGER DEFAULT 0,
    
    -- Revenue metrics
    revenue_generated DECIMAL(10,2) DEFAULT 0.00,
    avg_revenue_per_visit DECIMAL(10,2) GENERATED ALWAYS AS (
        CASE 
            WHEN visits_completed > 0 
            THEN revenue_generated / visits_completed
            ELSE 0
        END
    ) STORED,
    
    -- Time metrics
    clinical_hours DECIMAL(5,2) DEFAULT 0.00,
    utilization_rate DECIMAL(5,2),
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(clinician_id, location_id, date)
);

CREATE INDEX idx_clinician_prod_date ON clinician_productivity(date);
CREATE INDEX idx_clinician_prod_location ON clinician_productivity(location_id, date);

-- ================================================================
-- 6. FINANCIAL TRACKING (P&L by Location)
-- ================================================================

CREATE TABLE location_financials (
    financial_id SERIAL PRIMARY KEY,
    location_id VARCHAR(50) REFERENCES locations(location_id),
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,
    
    -- Revenue
    gross_revenue DECIMAL(12,2) DEFAULT 0.00,
    net_revenue DECIMAL(12,2) DEFAULT 0.00,
    
    -- Revenue by category
    revenue_pelvic DECIMAL(10,2) DEFAULT 0.00,
    revenue_concussion DECIMAL(10,2) DEFAULT 0.00,
    revenue_vestibular DECIMAL(10,2) DEFAULT 0.00,
    revenue_industrial DECIMAL(10,2) DEFAULT 0.00,
    
    -- Operating expenses
    rent_expense DECIMAL(10,2) DEFAULT 0.00,
    clinician_wages DECIMAL(10,2) DEFAULT 0.00,
    marketing_expense DECIMAL(10,2) DEFAULT 0.00,
    utilities_expense DECIMAL(10,2) DEFAULT 0.00,
    supplies_expense DECIMAL(10,2) DEFAULT 0.00,
    other_expenses DECIMAL(10,2) DEFAULT 0.00,
    
    total_expenses DECIMAL(12,2) GENERATED ALWAYS AS (
        rent_expense + clinician_wages + marketing_expense + 
        utilities_expense + supplies_expense + other_expenses
    ) STORED,
    
    -- Profitability
    ebitda DECIMAL(12,2) GENERATED ALWAYS AS (net_revenue - total_expenses) STORED,
    ebitda_margin DECIMAL(5,2) GENERATED ALWAYS AS (
        CASE 
            WHEN net_revenue > 0 
            THEN ((net_revenue - total_expenses) / net_revenue) * 100
            ELSE 0
        END
    ) STORED,
    
    -- Status
    breakeven_achieved BOOLEAN GENERATED ALWAYS AS (ebitda >= 0) STORED,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(location_id, period_start, period_end)
);

CREATE INDEX idx_location_financials_period ON location_financials(location_id, period_start, period_end);

-- ================================================================
-- 7. SERVICE MIX ANALYTICS
-- ================================================================

CREATE TABLE service_mix_analytics (
    analytics_id SERIAL PRIMARY KEY,
    location_id VARCHAR(50) REFERENCES locations(location_id),
    service_id VARCHAR(50) REFERENCES services(service_id),
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,
    
    -- Volume
    visits_delivered INTEGER DEFAULT 0,
    
    -- Revenue
    revenue_generated DECIMAL(10,2) DEFAULT 0.00,
    avg_revenue_per_visit DECIMAL(10,2),
    
    -- Percentage of total
    percentage_of_visits DECIMAL(5,2),
    percentage_of_revenue DECIMAL(5,2),
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(location_id, service_id, period_start, period_end)
);

CREATE INDEX idx_service_mix_period ON service_mix_analytics(location_id, period_start, period_end);

-- ================================================================
-- 8. ALERTS & NOTIFICATIONS
-- ================================================================

CREATE TABLE location_alerts (
    alert_id SERIAL PRIMARY KEY,
    location_id VARCHAR(50) REFERENCES locations(location_id),
    alert_type VARCHAR(100) NOT NULL,
    severity VARCHAR(50) NOT NULL, -- info, warning, critical
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    metadata JSONB,
    
    acknowledged BOOLEAN DEFAULT false,
    acknowledged_by VARCHAR(100),
    acknowledged_at TIMESTAMP,
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_location_alerts_unack ON location_alerts(location_id, acknowledged, created_at);

-- ================================================================
-- END SCHEMA
-- ================================================================
