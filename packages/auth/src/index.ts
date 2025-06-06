import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { APIError } from "better-auth/api";
import {
  admin,
  customSession,
  openAPI,
  organization,
  username,
} from "better-auth/plugins";
import { SignJWT } from "jose/jwt/sign";

import { db } from "@base/db/client";
import * as schema from "@base/db/schema/auth";

export const auth: ReturnType<typeof betterAuth> = betterAuth({
  trustedOrigins: [process.env.CORS_ORIGIN || "", "base://"],
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "apple", "microsoft"],
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
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

  plugins: [
    admin(),
    customSession(async ({ user, session }) => {
      const signingSecret = process.env.SUPABASE_JWT_SECRET ?? "";
      if (signingSecret) {
        const payload = {
          aud: "authenticated",
          exp: Math.floor(new Date(session.expiresAt).getTime() / 1000),
          sub: user.id,
          email: user.email,
          role: "authenticated",
        };

        const secret = new TextEncoder().encode(signingSecret);

        const supabaseAccessToken = await new SignJWT(payload)
          .setIssuedAt()
          .setProtectedHeader({ alg: "HS256" })
          .sign(secret);

        return {
          user,
          session,
          supabaseAccessToken,
        };
      }

      return {
        user,
        session,
        supabaseAccessToken: null,
      };
    }),
    expo(),
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
