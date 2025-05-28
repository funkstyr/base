import { eq } from "drizzle-orm";

import { db } from "@base/db/client";
import {
  todo,
  todoDeleteSchema,
  todoInsertSchema,
  todoUpdateSchema,
} from "@base/db/schema/todo";

import { publicProcedure } from "./orpc";

export const todoRouter = {
  getAll: publicProcedure.handler(async () => {
    return await db.select().from(todo);
  }),

  create: publicProcedure.input(todoInsertSchema).handler(async ({ input }) => {
    const result = await db.insert(todo).values(input).returning();

    return result[0];
  }),

  toggle: publicProcedure.input(todoUpdateSchema).handler(async ({ input }) => {
    await db
      .update(todo)
      .set({ completed: input.completed })
      .where(eq(todo.id, Number(input.id)));

    return { success: true };
  }),

  delete: publicProcedure.input(todoDeleteSchema).handler(async ({ input }) => {
    await db.delete(todo).where(eq(todo.id, Number(input.id)));

    return { success: true };
  }),
};
