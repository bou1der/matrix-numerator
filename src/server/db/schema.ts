import { randomUUID } from "crypto";
import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((_name) => `project_{name}`);



export const requests = createTable("requests", {
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  name: varchar("name", {length:255})
    .notNull(),
  phone: varchar("number", {length:64})
    .notNull(),
  email: varchar("email", {length:255})
    .notNull(),
  time: timestamp("time", {
    mode:"date",
    withTimezone:true
  })
  .notNull()
  .default(sql`now()`)
})

