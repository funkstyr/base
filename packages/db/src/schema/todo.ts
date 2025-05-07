import {
	createInsertSchema,
	createSelectSchema,
	createUpdateSchema,
} from "drizzle-arktype";
import { boolean, pgTable, text } from "drizzle-orm/pg-core";
import { type } from "arktype";

export const todo = pgTable("todo", {
	id: text("id").primaryKey(),
	text: text("text").notNull(),
	completed: boolean("completed").default(false).notNull(),
});

export const todoInsertSchema = createInsertSchema(todo, {
	text: (schema) =>
		type.pipe(
			schema,
			type.string.atLeastLength(3),
			type.string.atMostLength(100),
		),
});

export const todoSelectSchema = createSelectSchema(todo);
export const todoUpdateSchema = createUpdateSchema(todo);
