/*
  # Create AI Readiness Submissions Table

  1. New Tables
    - `ai_readiness_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `created_at` (timestamptz) - Timestamp of submission
      - `name` (text) - Contact name
      - `title` (text) - Job title
      - `company` (text) - Company name
      - `email` (text) - Contact email
      - `industry` (text) - Industry selection
      - `asset_count` (text) - Asset count range
      - `cmms_type` (text) - CMMS system type
      - `reactive_work_percent` (integer) - Percentage of reactive work
      - `annual_maintenance_labor_cost` (numeric) - Annual maintenance labor cost
      - `spare_parts_inventory_value` (numeric) - Spare parts inventory value
      - `hourly_downtime_cost` (numeric) - Hourly downtime cost
      - `annual_unplanned_downtime_hours` (integer) - Annual unplanned downtime hours
      - `audit_frequency` (text) - Audit frequency
      - `audit_difficulty` (text) - Audit difficulty level
      - `ai_adoption_level` (text) - Current AI adoption level
      - `readiness_score` (integer) - Calculated readiness score (0-100)
      - `roi_low` (numeric) - Low estimate ROI
      - `roi_high` (numeric) - High estimate ROI
      - `lead_priority` (text) - Lead priority classification

  2. Security
    - Enable RLS on `ai_readiness_submissions` table
    - Add policy for inserting new submissions (public access for form submissions)
    - Add policy for service role to read all submissions
*/

CREATE TABLE IF NOT EXISTS ai_readiness_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  name text NOT NULL,
  title text NOT NULL,
  company text NOT NULL,
  email text NOT NULL,
  industry text NOT NULL,
  asset_count text NOT NULL,
  cmms_type text NOT NULL,
  reactive_work_percent integer NOT NULL DEFAULT 0,
  annual_maintenance_labor_cost numeric NOT NULL DEFAULT 0,
  spare_parts_inventory_value numeric NOT NULL DEFAULT 0,
  hourly_downtime_cost numeric NOT NULL DEFAULT 0,
  annual_unplanned_downtime_hours integer NOT NULL DEFAULT 0,
  audit_frequency text NOT NULL,
  audit_difficulty text NOT NULL,
  ai_adoption_level text NOT NULL,
  readiness_score integer NOT NULL DEFAULT 0,
  roi_low numeric NOT NULL DEFAULT 0,
  roi_high numeric NOT NULL DEFAULT 0,
  lead_priority text NOT NULL DEFAULT 'Long Term Nurture'
);

ALTER TABLE ai_readiness_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert for form submissions"
  ON ai_readiness_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Service role can read all submissions"
  ON ai_readiness_submissions
  FOR SELECT
  TO service_role
  USING (true);
