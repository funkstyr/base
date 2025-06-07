import {
  adminClient,
  customSessionClient,
  organizationClient,
  usernameClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import type { auth as authClient } from "@base/auth";

export const auth = createAuthClient({
  baseURL: import.meta.env.VITE_SERVER_URL ?? "",
  plugins: [
    adminClient(),
    customSessionClient<typeof authClient>(),
    organizationClient({
      teams: {
        enabled: true,
      },
    }),
    usernameClient(),
  ],
});

export type AuthClient = typeof auth;
export type AuthSession = AuthClient["$Infer"]["Session"] | null;
