// ==========================================
// SUPABASE CLIENT - Singleton instance for the entire app
// Import this wherever you need database access:
//   import { supabase } from '../lib/supabase'
// ==========================================
import { createClient } from '@supabase/supabase-js'

// ==========================================
// ENV VARIABLES - Set these in your .env file
// VITE_SUPABASE_URL      → Project Settings → API → Project URL
// VITE_SUPABASE_ANON_KEY → Project Settings → API → anon/public key
// ==========================================
const supabaseUrl  = import.meta.env.VITE_SUPABASE_URL
const supabaseAnon = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnon) {
  console.warn(
    '[SpeechBud] Supabase env variables are missing. ' +
    'Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.'
  )
}

// ==========================================
// EXPORTED CLIENT - Use this throughout the app
// ==========================================
export const supabase = createClient(supabaseUrl, supabaseAnon)
