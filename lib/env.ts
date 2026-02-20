function getEnvVar(key: string, required = true): string {
  const value = process.env[key];
  if (!value && required) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value || '';
}

export const env = {
  supabaseUrl: getEnvVar('NEXT_PUBLIC_SUPABASE_URL'),
  supabaseAnonKey: getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY'),
  supabaseServiceRoleKey: getEnvVar('SUPABASE_SERVICE_ROLE_KEY', false),
  posthogKey: getEnvVar('NEXT_PUBLIC_POSTHOG_KEY', false),
  posthogHost: getEnvVar('NEXT_PUBLIC_POSTHOG_HOST', false) || 'https://app.posthog.com',
  resendApiKey: getEnvVar('RESEND_API_KEY', false),
  resendFromEmail: getEnvVar('RESEND_FROM_EMAIL', false) || 'SyncAI <reports@syncai.ca>',
};

export function validateEnv(): void {
  const requiredVars = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY'];

  const missing = requiredVars.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.warn(`Warning: Missing environment variables: ${missing.join(', ')}`);
  }
}
