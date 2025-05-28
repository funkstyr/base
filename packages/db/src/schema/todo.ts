import { type } from "arktype";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-arktype";
import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: serial("id").primaryKey(),
  text: text("text").notNull(),
  completed: boolean("completed").default(false).notNull(),
});

export const todoInsertSchema = createInsertSchema(todo, {
  id: (_schema) => type.never,
  text: (schema) =>
    type.pipe(
      schema,
      type.string.atLeastLength(3),
      type.string.atMostLength(100)
    ),
});
export type TodoInsertSchema = typeof todoInsertSchema.infer;

export const todoSelectSchema = createSelectSchema(todo);
export type TodoSelectSchema = typeof todoSelectSchema.infer;

export const todoUpdateSchema = createUpdateSchema(todo, {
  id: (_schema) => type.number,
});
export type TodoUpdateSchema = typeof todoUpdateSchema.infer;

export const todoDeleteSchema = type({
  id: type.number,
});
export type TodoDeleteSchema = typeof todoDeleteSchema.infer;
