import { createClient as createBrowserClient } from "@supabase/supabase-js";

import type { Database } from "../types";

export const createClient = () => {
  return createBrowserClient<Database>(
    process.env.VITE_SUPABASE_URL ?? "",
    process.env.VITE_SUPABASE_ANON_KEY ?? "",
  );
};

export type { SupabaseClient } from "@supabase/supabase-js";
