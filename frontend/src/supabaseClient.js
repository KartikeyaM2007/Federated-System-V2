import { createClient } from "@supabase/supabase-js";

const rawSupabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

const normalizeSupabaseUrl = (url) => {
  if (!url) return "";
  let normalized = url.trim().replace(/\/+$/, "");

  // Users often paste project API URLs ending with /rest/v1 or /auth/v1.
  // Supabase client expects the base project URL only.
  normalized = normalized.replace(/\/(rest|auth)\/v1$/, "");
  normalized = normalized.replace(/\/(rest|auth)\/v1$/, "");

  return normalized;
};

const supabaseUrl = normalizeSupabaseUrl(rawSupabaseUrl);

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase config. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
