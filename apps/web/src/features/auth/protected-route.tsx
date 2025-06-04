import { redirect } from "@tanstack/react-router";
import type { ParsedLocation } from "@tanstack/react-router";

import { auth } from "@base/auth/client/web";

export async function beforeLoad({ location }: { location: ParsedLocation }) {
  const { data: session } = await auth.getSession();

  if (!session) {
    throw redirect({
      to: "/login",
      search: {
        redirect: location.href,
      },
    });
  }
}
