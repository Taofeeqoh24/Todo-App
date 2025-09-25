import { createClient } from '@supabase/supabase-js'

// Add this declaration to extend ImportMetaEnv
interface ImportMetaEnv {
  VITE_SUPABASE_URL: string;
  VITE_SUPABASE_ANON_KEY: string;
}

// Augment the global ImportMeta interface
declare global {
  interface ImportMeta {
    env: ImportMetaEnv;
  }
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL!
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Clean TypeScript types
export interface Todo {
  id: number
  title: string
  completed: boolean
  created_at?: string
}