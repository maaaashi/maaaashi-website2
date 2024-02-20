/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        SUPABASE_URL: string
        SUPABASE_API_KEY: string
      }
    }
  }
}
