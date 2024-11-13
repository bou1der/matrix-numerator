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
    required_error:"Пустой заголовок",
    message:"Пустое заголовок"
  }).min(1),
  description: z.string({
    required_error:"Пустое описание",
    message:"Пустое описание"
  }).min(1),
  type: InfoSchema
})


export type Information = inferRouterOutputs<Router>["information"]["getAll"][number]
