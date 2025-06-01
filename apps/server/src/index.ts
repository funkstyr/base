import "dotenv/config";
import { Scalar } from "@scalar/hono-api-reference";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { openApiSpec } from "@base/api/open-api";
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
app.get("/openapi.json", (c) => c.json(openApiSpec));
app.get(
  "/",
  Scalar({
    pageTitle: "Base Api Docs",
    url: "/",
    sources: [{ url: "/openapi.json" }],
  }),
);

export default app;
