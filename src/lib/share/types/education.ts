import { type inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import { Router } from "~/server/api/main";



export const educationScheme = z.object({
  title:z.string({
    required_error:"Заголовок не заполнен",
    message:"Заголовок не является строкой"
  }).min(1,"Заголовок не заполнен").max(255),
  description:z.string().min(1,"Описание не заполнено"),
  price: z.number({
    required_error:"Цена не заполнена",
    message:"Цена не является числом"
  }).min(0, "Минимальная цена 0")
})


export type Education = inferRouterOutputs<Router>['education']['getAll'][number]
