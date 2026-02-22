-- Digital Governance & Access Control Module - Database Schema
-- Created: 2026-02-20

-- Table: digital_assets
-- Stores all digital assets under governance
CREATE TABLE IF NOT EXISTS digital_assets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    asset_type VARCHAR(100) NOT NULL,
    asset_category VARCHAR(100),
    owner_email VARCHAR(255) NOT NULL,
    description TEXT,
    access_level VARCHAR(50) DEFAULT 'restricted',
    metadata JSONB,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(255) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);

-- Table: workspace_users
-- Stores all users with access to workspace
CREATE TABLE IF NOT EXISTS workspace_users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    groups TEXT[], -- Array of group names
    permissions JSONB, -- Custom permissions override
    mfa_enabled BOOLEAN DEFAULT FALSE,
    mfa_enforced_at TIMESTAMP,
    google_user_id VARCHAR(255) UNIQUE,
    status VARCHAR(50) DEFAULT 'active', -- active, suspended, pending
    last_login TIMESTAMP,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(255) NOT NULL
);

-- Table: access_audit_log
-- Comprehensive audit trail for all access events
CREATE TABLE IF NOT EXISTS access_audit_log (
    id SERIAL PRIMARY KEY,
    event_type VARCHAR(100) NOT NULL, -- create_user, suspend_user, access_asset, modify_permission, etc.
    user_email VARCHAR(255) NOT NULL,
    target_resource_type VARCHAR(100), -- user, asset, group, permission
    target_resource_id VARCHAR(255),
    action VARCHAR(100) NOT NULL,
    result VARCHAR(50) NOT NULL, -- success, failure, denied
    ip_address INET,
    user_agent TEXT,
    metadata JSONB,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    performed_by VARCHAR(255) NOT NULL
);

-- Table: onboarding_queue
-- Tracks users pending onboarding
CREATE TABLE IF NOT EXISTS onboarding_queue (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    role VARCHAR(100) NOT NULL,
    department VARCHAR(100),
    groups TEXT[],
    manager_email VARCHAR(255),
    start_date DATE,
    status VARCHAR(50) DEFAULT 'pending', -- pending, in_progress, completed, failed
    priority VARCHAR(20) DEFAULT 'normal', -- urgent, high, normal, low
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    created_by VARCHAR(255) NOT NULL,
    completed_at TIMESTAMP
);

-- Table: role_templates
-- Predefined role templates with permissions
CREATE TABLE IF NOT EXISTS role_templates (
    id SERIAL PRIMARY KEY,
    role_name VARCHAR(100) UNIQUE NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    permissions JSONB NOT NULL,
    default_groups TEXT[],
    requires_mfa BOOLEAN DEFAULT TRUE,
    max_users INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: groups
-- Group definitions and their permissions
CREATE TABLE IF NOT EXISTS groups (
    id SERIAL PRIMARY KEY,
    group_name VARCHAR(255) UNIQUE NOT NULL,
    display_name VARCHAR(255) NOT NULL,
    description TEXT,
    google_group_email VARCHAR(255),
    permissions JSONB,
    parent_group_id INTEGER REFERENCES groups(id),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: mfa_compliance
-- Tracks MFA compliance status
CREATE TABLE IF NOT EXISTS mfa_compliance (
    id SERIAL PRIMARY KEY,
    user_email VARCHAR(255) UNIQUE NOT NULL,
    mfa_method VARCHAR(50), -- totp, sms, hardware_key
    enrollment_date TIMESTAMP,
    last_verified TIMESTAMP,
    compliance_status VARCHAR(50) NOT NULL, -- compliant, non_compliant, grace_period
    grace_period_ends TIMESTAMP,
    reminder_sent_count INTEGER DEFAULT 0,
    last_reminder_sent TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_digital_assets_owner ON digital_assets(owner_email);
CREATE INDEX idx_digital_assets_type ON digital_assets(asset_type);
CREATE INDEX idx_workspace_users_email ON workspace_users(email);
CREATE INDEX idx_workspace_users_status ON workspace_users(status);
CREATE INDEX idx_access_audit_log_timestamp ON access_audit_log(timestamp DESC);
CREATE INDEX idx_access_audit_log_user ON access_audit_log(user_email);
CREATE INDEX idx_access_audit_log_event_type ON access_audit_log(event_type);
CREATE INDEX idx_onboarding_queue_status ON onboarding_queue(status);
CREATE INDEX idx_mfa_compliance_status ON mfa_compliance(compliance_status);

-- Triggers for updated_at timestamps
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_digital_assets_updated_at BEFORE UPDATE ON digital_assets
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_workspace_users_updated_at BEFORE UPDATE ON workspace_users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_onboarding_queue_updated_at BEFORE UPDATE ON onboarding_queue
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_role_templates_updated_at BEFORE UPDATE ON role_templates
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_groups_updated_at BEFORE UPDATE ON groups
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_mfa_compliance_updated_at BEFORE UPDATE ON mfa_compliance
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
