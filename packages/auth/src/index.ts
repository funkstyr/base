import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { APIError } from "better-auth/api";
import { admin, openAPI, organization, username } from "better-auth/plugins";

import { db } from "@base/db/client";
import * as schema from "@base/db/schema/auth";

export const auth: ReturnType<typeof betterAuth> = betterAuth({
  trustedOrigins: [process.env.CORS_ORIGIN || "", "base://"],

  database: drizzleAdapter(db, {
    provider: "pg",

    schema: schema,
  }),

  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "apple", "microsoft"],
    },
  },
  user: {
    deleteUser: {
      enabled: true,
      beforeDelete: async (user, _request) => {
        // TODO: do db soft delete here
        if (!user.email.includes("test@email.com")) {
          throw new APIError("BAD_REQUEST", {
            message: "accounts can't be deleted",
          });
        }
      },
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  plugins: [
    expo(),
    admin(),
    openAPI(),
    organization({
      teams: {
        enabled: true,
        maximumTeams: 4, // Optional: limit teams per organization
      },
    }),
    username(),
  ],
});
