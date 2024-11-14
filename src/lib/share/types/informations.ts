import { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import { Router } from "~/server/api/main";
import { InfoSchema, InfoType } from "~/server/db/schema";



export const InformationNames:{
  [key in InfoType]:string
} = {
    "ANAEL":"Анаэль",
    "LADYNI":"Ладини",
    "PIFAGOR":"Пифагор"
}

export const InformationSchema = z.object({
  title:z.string({
    required_error:"Заголовок не заполнен",
    message:"Заголовок не является строкой"
  }).min(1,"Заголовок не заполнен") ,
  description: z.string({
    required_error:"Описание не заполнено",
    message:"Описание не является строкой"
  }).min(1, "Описание не заполнено"),
  type: InfoSchema
})


export type Information = inferRouterOutputs<Router>["information"]["getAll"][number]
