import {
  adminClient,
  organizationClient,
  usernameClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const auth = createAuthClient({
  baseURL: import.meta.env.VITE_SERVER_URL,
  plugins: [
    adminClient(),
    organizationClient({
      teams: {
        enabled: true,
      },
    }),
    usernameClient(),
  ],
});
