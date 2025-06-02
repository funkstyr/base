import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { admin, openAPI, organization, username } from "better-auth/plugins";

import { db } from "@base/db/client";
import * as schema from "@base/db/schema/user";

export const auth: ReturnType<typeof betterAuth> = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",

    schema: schema,
  }),
  trustedOrigins: [process.env.CORS_ORIGIN || "", "base://"],
  emailAndPassword: {
    enabled: true,
  },
  plugins: [expo(), admin(), openAPI(), organization(), username()],
});
