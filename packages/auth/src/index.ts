import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { db } from "@base/db/client";
import * as schema from "@base/db/schema/user";

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: "pg",

		schema: schema,
	}),
	trustedOrigins: [process.env.CORS_ORIGIN || "", "base://"],
	emailAndPassword: {
		enabled: true,
	},
	plugins: [expo()],
});
