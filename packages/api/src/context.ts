import type { Context as HonoContext } from "hono";

import { auth } from "@base/auth";
// import { createClient } from "@base/supabase/client/server";

export type CreateContextOptions = {
  context: HonoContext;
};

export async function createContext({ context }: CreateContextOptions) {
  const session = await auth.api.getSession({
    headers: context.req.raw.headers,
  });

  // try {
  //   const supabase = createClient(
  //     // @ts-expect-error type thise
  //     { token: session?.supabaseAccessToken ?? "" }
  //   );
  // } catch (error) {
  //   console.log("error", error);
  // }

  return {
    session,
    // supabase,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
