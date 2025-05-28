import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "./schema";

const connection = process.env.DATABASE_URL || "";

export const db = drizzle({
  connection,
  schema,
  casing: "snake_case",
});
