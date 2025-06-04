import { expoClient } from "@better-auth/expo/client";
import {
  adminClient,
  organizationClient,
  usernameClient,
} from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";
import * as SecureStore from "expo-secure-store";

export const auth = createAuthClient({
  baseURL: process.env.EXPO_PUBLIC_SERVER_URL,
  plugins: [
    expoClient({
      storagePrefix: "base-app",
      storage: SecureStore,
    }),
    adminClient(),
    organizationClient({
      teams: {
        enabled: true,
      },
    }),
    usernameClient(),
  ],
});
