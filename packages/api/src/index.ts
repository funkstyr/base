import { protectedProcedure, publicProcedure } from "./orpc";
import { todoRouter } from "./todo";

export const appRouter = {
  // ai: aiRouter, // TODO: enable if the BAD_REQUEST error is resolved
  todo: todoRouter,

  health: publicProcedure
    .route({
      summary: "Health Check",
      tags: ["health"],
    })
    .handler(() => {
      return "OK";
    }),

  privateData: protectedProcedure
    .route({
      summary: "Get session user",
      tags: ["health"],
    })
    .handler(({ context }) => {
      return {
        message: "This is private",
        user: context.session?.user,
      };
    }),
};

export type AppRouter = typeof appRouter;
