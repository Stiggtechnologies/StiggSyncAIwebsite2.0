/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_AIM_SUPABASE_URL: string
  readonly VITE_AIM_SUPABASE_KEY: string
  readonly VITE_STIGG_SUPABASE_URL: string
  readonly VITE_STIGG_SUPABASE_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
