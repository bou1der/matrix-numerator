import { randomUUID } from "crypto";
import { sql } from "drizzle-orm";
import {
  pgTableCreator,
  text,
  timestamp,
  varchar,
  integer,
  pgEnum
} from "drizzle-orm/pg-core";
import { z } from "zod";

export const createTable = pgTableCreator((_name) => `soul_${_name}`);



export const calls = createTable("call",{
  id: text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  name: text("name")
    .notNull(),
  description: text("description")
    .notNull(),
  phone: text("phone")
    .notNull(),
  email:text("email")
    .notNull(),
  time: timestamp("time", {
    mode:"date",
    withTimezone:true
  })
  .notNull()
  .default(sql`now()`)
})

export const infoEnum = pgEnum("infoEnum", [
  "LADYNI",
  "PIFAGOR",
  "ANAEL"
])

export const InfoSchema = z.enum(infoEnum.enumValues,{ 
  required_error:"Матрица не выбранна",
  message:"Матрица не выбранна"
})
export type InfoType = z.infer<typeof InfoSchema>

export const informations = createTable("informations", {
  id:text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  type: infoEnum("infoEnum")
    .notNull(),
  title: text("title")
    .notNull(),
  description: text("description")
    .notNull(),
})

export const services = createTable("services", {
  id:text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  title: text("title")
    .notNull(),
  description: text("description")
    .notNull(),
  price: integer("price")
    .notNull()
})

export const education = createTable("education", {
  id:text("id")
    .notNull()
    .primaryKey()
    .$defaultFn(() => randomUUID()),
  title: text("title")
    .notNull(),
  description:text("description")
    .notNull(),
  price: integer("price")
    .notNull(),
})

export const ThemeEnum = pgEnum("Theme",[
  "PIFAGOR",
  "LADYNI",
  "ANAEL",
  "MAIN",
  "EDUCATION"
])

export const ThemeSchema = z.enum(ThemeEnum.enumValues)

export type ThemeRequest = z.infer<typeof ThemeSchema>

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
  theme:ThemeEnum("Theme")
    .notNull(),
  time: timestamp("time", {
    mode:"date",
    withTimezone:true
  })
  .notNull()
  .default(sql`now()`)
})

