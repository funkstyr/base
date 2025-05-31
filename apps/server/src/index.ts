import "dotenv/config";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { openApiHtml, openApiSpec } from "@base/api/open-api";
import { rpc } from "@base/api/rpc";
import { auth } from "@base/auth";

const app = new Hono();

app.use(logger());
app.use(
  "/*",
  cors({
    origin: process.env.CORS_ORIGIN ?? "",
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

app.use("/rpc/*", async (c, next) => rpc.handler("/rpc", c, next));
app.get("/spec.json", (c) => c.json(openApiSpec));
app.get("/", (c) => c.html(openApiHtml("/spec.json")));

export default app;
