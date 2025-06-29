import type { SupabaseClient } from "@supabase/supabase-js";

import type { Database } from "./db.generated";

export type Client = SupabaseClient<Database>;

export * from "./db.generated";
