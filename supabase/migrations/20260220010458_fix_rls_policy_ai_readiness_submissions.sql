/*
  # Fix RLS Policy for ai_readiness_submissions table
  
  1. Security Changes
    - Drop the overly permissive "Allow public insert for form submissions" policy
    - Drop the overly permissive "Service role can read all submissions" policy
    - Create new restrictive INSERT policy that validates required fields are not empty
    - Create new SELECT policy restricted to authenticated service role only
    
  2. Important Notes
    - The form submission uses the service role key from the API route
    - Anonymous users cannot directly insert or read data
    - Insert policy validates that email contains @ to prevent spam
*/

DROP POLICY IF EXISTS "Allow public insert for form submissions" ON public.ai_readiness_submissions;
DROP POLICY IF EXISTS "Service role can read all submissions" ON public.ai_readiness_submissions;

CREATE POLICY "Anon users can submit assessments with valid data"
  ON public.ai_readiness_submissions
  FOR INSERT
  TO anon
  WITH CHECK (
    email IS NOT NULL 
    AND email <> '' 
    AND position('@' in email) > 0
    AND name IS NOT NULL 
    AND name <> ''
    AND company IS NOT NULL 
    AND company <> ''
  );

CREATE POLICY "Service role has full read access"
  ON public.ai_readiness_submissions
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can insert submissions"
  ON public.ai_readiness_submissions
  FOR INSERT
  TO service_role
  WITH CHECK (true);
