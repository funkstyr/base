import { aiRouter } from "./ai";
import { protectedProcedure, publicProcedure } from "./orpc";
import { todoRouter } from "./todo";

export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return "OK";
  }),
  privateData: protectedProcedure.handler(({ context }) => {
    return {
      message: "This is private",
      user: context.session?.user,
    };
  }),

  ai: aiRouter,
  todo: todoRouter,
};

export type AppRouter = typeof appRouter;
