import { RPCHandler } from "@orpc/server/fetch";
import type { Context, Next } from "hono";

import { appRouter } from ".";
import { createContext } from "./context";

const handler = new RPCHandler(appRouter);

export const rpc = {
  handler: async (prefix: `/${string}`, c: Context, next: Next) => {
    const context = await createContext({ context: c });

    const { matched, response } = await handler.handle(c.req.raw, {
      prefix,
      context,
    });
    if (matched) {
      return c.newResponse(response.body, response);
    }
    await next();
  },
};
