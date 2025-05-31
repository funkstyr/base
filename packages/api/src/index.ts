import { aiRouter } from "./ai";
import { protectedProcedure, publicProcedure } from "./orpc";
import { todoRouter } from "./todo";

export const appRouter = {
  ai: aiRouter,
  todo: todoRouter,

  health: publicProcedure.handler(() => {
    return "OK";
  }),
  privateData: protectedProcedure.handler(({ context }) => {
    return {
      message: "This is private",
      user: context.session?.user,
    };
  }),
};

export type AppRouter = typeof appRouter;
