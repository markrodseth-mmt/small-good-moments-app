import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!url || !anonKey) {
  throw new Error(
    'Missing Supabase config. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (see .env.example).',
  );
}

export const supabase = createClient(url, anonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

/**
 * Ensure there is a signed-in session. We use anonymous auth so each device gets
 * a stable hidden user that owns its gathered moments (enforced by RLS).
 */
export async function ensureSession() {
  const { data } = await supabase.auth.getSession();
  if (data.session) return data.session;
  const { data: signed, error } = await supabase.auth.signInAnonymously();
  if (error) throw error;
  return signed.session;
}
