import { type } from "arktype";
import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-arktype";
import { boolean, pgTable, text } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: text("id").primaryKey(),
  text: text("text").notNull(),
  completed: boolean("completed").default(false).notNull(),
});

//? how to get id to be undefined/optional for create procedure
export const todoInsertSchema = createInsertSchema(todo, {
  id: (schema) => type.undefined,
  text: (schema) =>
    type.pipe(
      schema,
      type.string.atLeastLength(3),
      type.string.atMostLength(100),
    ),
});

export const todoSelectSchema = createSelectSchema(todo);

//? how to get id to be string and not optional
export const todoUpdateSchema = createUpdateSchema(todo, {
  id: (schema) => type.string,
});
