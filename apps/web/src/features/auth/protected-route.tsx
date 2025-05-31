import { redirect } from "@tanstack/react-router";
import type { ParsedLocation } from "@tanstack/react-router";

import { authClient } from "@/lib/auth-client";

export async function beforeLoad({ location }: { location: ParsedLocation }) {
  const { data: session } = await authClient.getSession();

  if (!session) {
    throw redirect({
      to: "/login",
      search: {
        redirect: location.href,
      },
    });
  }
}
