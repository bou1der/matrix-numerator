import { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import { Router } from "~/server/api/main";

export const CallsSchema = z.object({
  name: z.string({
    required_error:"Имя не заполнено",
    message:"Имя не является строкой"
  }).min(1, "Имя слишком короткое").max(255),
  phone: z.string().min(5).max(64).regex(/^(?:\+7\d{10}|8\d{10})$/, "Неправильный формат номера"),
  description: z.string().min(4, "Вопрос или отзыв слишком короткий"),
  email: z.string({
    required_error:"Почта не указана",
    message:"Почта не являеться строкой"
  }).email({
    message:"Неправильный формат почты"
  }),
})

export type Call = inferRouterOutputs<Router>["requests"]["getCalls"][number];

