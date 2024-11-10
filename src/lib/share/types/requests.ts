import { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import { AppRouter } from "~/server/api/root";



export const RequestsSchema = z.object({
  name: z.string().min(1).max(255),
  phone: z.string().min(5).max(64),
  email: z.string({
    required_error:"Почта не указанна",
    message:"Почта не являеться строкой"
  }).email({
    message:"Неправильный формат почты"
  }),
})


export type Request = inferRouterOutputs<AppRouter>["requests"]["getAll"][number];

