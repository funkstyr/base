import { eq } from "drizzle-orm";

import { db } from "@base/db/client";
import {
  todo,
  todoDeleteSchema,
  todoInsertSchema,
  todoSelectSchema,
  todoUpdateSchema,
} from "@base/db/schema/todo";

import { type } from "arktype";
import { publicProcedure } from "./orpc";

export const todoRouter = {
  getAll: publicProcedure
    .route({
      summary: "Get All",
      description: "Get every todo",
      tags: ["todo"],
    })
    .output(todoSelectSchema.array())
    .handler(async () => {
      return await db.select().from(todo);
    }),

  create: publicProcedure
    .route({
      summary: "Create",
      description: "Create a new todo",
      tags: ["todo"],
    })
    .input(todoInsertSchema)
    .output(todoSelectSchema)
    .errors({
      NOT_FOUND: {},
    })
    .handler(async ({ input, errors }) => {
      const result = await db.insert(todo).values(input).returning();

      if (!result[0]) {
        throw errors.NOT_FOUND();
      }

      return result[0];
    }),

  toggle: publicProcedure
    .route({
      summary: "Toggle",
      description: "Toggle the completed status of a todo",
      tags: ["todo"],
    })
    .input(todoUpdateSchema)
    .output(type({ success: "boolean" }))
    .handler(async ({ input }) => {
      await db
        .update(todo)
        .set({ completed: input.completed })
        .where(eq(todo.id, Number(input.id)));

      return { success: true };
    }),

  delete: publicProcedure
    .route({
      summary: "Delete",
      description: "Delete a todo",
      tags: ["todo"],
    })
    .input(todoDeleteSchema)
    .output(type({ success: "boolean" }))
    .handler(async ({ input }) => {
      await db.delete(todo).where(eq(todo.id, Number(input.id)));

      return { success: true };
    }),
};
