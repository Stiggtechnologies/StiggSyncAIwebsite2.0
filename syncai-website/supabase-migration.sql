-- Newsletter Signups Table for SyncAI Website
-- Run this in Supabase SQL Editor to create the table

-- Create table
CREATE TABLE IF NOT EXISTS newsletter_signups (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT NOT NULL,
  source TEXT,
  article TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_signups(email);

-- Create index on source for analytics
CREATE INDEX IF NOT EXISTS idx_newsletter_source ON newsletter_signups(source);

-- Create index on created_at for time-based queries
CREATE INDEX IF NOT EXISTS idx_newsletter_created_at ON newsletter_signups(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts from anyone (public anon key)
CREATE POLICY "Allow public inserts" ON newsletter_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Create policy to allow authenticated users to read all records
CREATE POLICY "Allow authenticated reads" ON newsletter_signups
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policy to allow service role full access
CREATE POLICY "Allow service role full access" ON newsletter_signups
  TO service_role
  USING (true)
  WITH CHECK (true);

COMMENT ON TABLE newsletter_signups IS 'Email captures from SyncAI website (newsletter signups and PDF downloads)';
COMMENT ON COLUMN newsletter_signups.source IS 'Source of signup: "insights", "homepage", "pdf:<article-name>"';
COMMENT ON COLUMN newsletter_signups.article IS 'Article name for PDF downloads';
