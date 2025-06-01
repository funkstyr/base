import "dotenv/config";
import { Scalar } from "@scalar/hono-api-reference";
import { createMarkdownFromOpenApi } from "@scalar/openapi-to-markdown";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { stream } from "hono/streaming";

import { streamTextHandler } from "@base/ai/stream-text";
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
    url: "/",
    pageTitle: "Base Api Docs",
    theme: "alternate",
    sources: [{ url: "/openapi.json" }],
  }),
);

app.get("/llms.txt", async (c) => {
  const markdown = await createMarkdownFromOpenApi(JSON.stringify(openApiSpec));

  return c.text(markdown);
});

app.post("/ai/chat", async (c) => {
  const body = await c.req.json();
  const messages = body.messages || [];
  const result = streamTextHandler(messages);

  return stream(c, (stream) => stream.pipe(result.toDataStream()));
});

// app.post("/ai/chat", async (c) => {
//   const body = await c.req.json();
//   const messages = body.messages || [];

//   const result = await generateTextHandler(messages);

//   return c.json(result);
// });

export default app;
