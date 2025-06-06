import { createServerClient } from "@supabase/ssr";
import { parseCookies, setCookie } from "@tanstack/react-start/server";

import type { Database } from "../types";

const IGNORE_WARNINGS = [
  "Using the user object as returned from supabase.auth.getSession()",
];

console.warn = (...args) => {
  const match = args.find((arg) =>
    typeof arg === "string"
      ? IGNORE_WARNINGS.find((warning) => arg.includes(warning))
      : false,
  );
  if (!match) {
    console.warn(...args);
  }
};

console.log = (...args) => {
  const match = args.find((arg) =>
    typeof arg === "string"
      ? IGNORE_WARNINGS.find((warning) => arg.includes(warning))
      : false,
  );
  if (!match) {
    console.log(...args);
  }
};

type CreateClientOptions = {
  token?: string;
  admin?: boolean;
  schema?: "public" | "storage";
};

export async function createClient(options?: CreateClientOptions) {
  const { admin = false, token = "", ...rest } = options ?? {};

  const key = admin
    ? (process.env.SUPABASE_SERVICE_KEY ?? "")
    : (process.env.SUPABASE_ANON_KEY ?? "");

  const auth = admin
    ? {
        persistSession: false,
        autoRefreshToken: false,
        detectSessionInUrl: false,
      }
    : {};

  return createServerClient<Database>(process.env.SUPABASE_URL ?? "", key, {
    ...rest,
    cookies: {
      // @ts-ignore Wait till Supabase overload works
      getAll() {
        return Object.entries(parseCookies()).map(([name, value]) => ({
          name,
          value,
        }));
      },
      setAll(cookies) {
        for (const cookie of cookies) {
          const { name, value, options } = cookie;
          setCookie(name, value, options);
        }
      },
    },
    auth,
    global: {
      headers: {
        Autorization: `Bearer ${token}`,
      },
    },
  });
}
