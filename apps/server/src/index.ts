import "dotenv/config";
import { Scalar } from "@scalar/hono-api-reference";
import { createMarkdownFromOpenApi } from "@scalar/openapi-to-markdown";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { stream } from "hono/streaming";
import { handle } from "hono/vercel";

import { streamTextHandler } from "@base/ai/stream-text";
import { openApiSpec } from "@base/api/open-api";
import { rpc } from "@base/api/rpc";
import { auth } from "@base/auth";

const app = new Hono().basePath("/");

app.use(logger());
app.use(
  "/*",
  cors({
    // origin: process.env.CORS_ORIGIN ?? "",
    origin: (origin, _c) => {
      return origin.endsWith("base.gratis") || origin.endsWith("vercel.app")
        ? origin
        : (process.env.CORS_ORIGIN ?? "");
    },
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));
app.use("/rpc/*", async (c, next) => rpc.handler("/rpc", c, next));

app.post("/ai/chat", async (c) => {
  const body = await c.req.json();
  const messages = body.messages || [];
  const result = streamTextHandler(messages);

  return stream(c, (stream) => stream.pipe(result.toDataStream()));
});

if (process.env.NODE_ENV !== "production") {
  app.get("/rpc/openapi.json", (c) => c.json(openApiSpec));
  app.get(
    "/rpc/docs",
    Scalar({
      url: "/rpc/docs",
      pageTitle: "Base Api Docs",
      theme: "alternate",
      sources: [{ url: "/rpc/openapi.json" }],
    }),
  );

  app.get("/rpc/llms.txt", async (c) => {
    const markdown = await createMarkdownFromOpenApi(
      JSON.stringify(openApiSpec),
    );

    return c.text(markdown);
  });

  app.get("/auth/llms.txt", async (c) => {
    // @ts-expect-error learn to type this
    const authSpec = await auth.api.generateOpenAPISchema();
    const markdown = await createMarkdownFromOpenApi(JSON.stringify(authSpec));

    return c.text(markdown);
  });
}

app.use(
  "/assets/*",
  serveStatic({
    root: "./",
    // onNotFound: (path, c) => {
    //   console.log(`${path} is not found, you access ${c.req.path}`);
    // },
  }),
);

app.use(
  "*",
  serveStatic({
    path: "./index.html",
  }),
);

export const runetime = "edge";
const handler = handle(app);
export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const PATCH = handler;
export const DELETE = handler;
export const HEAD = handler;
export const OPTIONS = handler;

const server = process.env.VERCEL === "1" ? handler : app;
export default server;
