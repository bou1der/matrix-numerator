import { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import { Router } from "~/server/api/main";
import { ThemeRequest, ThemeSchema } from "~/server/db/schema";



export const RequestsSchema = z.object({
  name: z.string({
    required_error:"Имя не заполнено",
    message:"Имя не является строкой"
  }).min(1, "Имя слишком короткое").max(255),
  phone: z.string().min(5).max(64).regex(/^(?:\+7\d{10}|8\d{10})$/, "Неправильный формат номера"),
  type: ThemeSchema,
  email: z.string({
    required_error:"Почта не указана",
    message:"Почта не являеться строкой"
  }).email({
    message:"Неправильный формат почты"
  }),
})

export const ThemeNames : {
  [key in ThemeRequest]:string
} = {
    "MAIN":"Консультация",
    "ANAEL":"Анаэль",
    "LADYNI":"Ладини",
    "PIFAGOR":"Пифагор",
    "EDUCATION":"Обучение"

  }


export type Request = inferRouterOutputs<Router>["requests"]["getAll"][number];

