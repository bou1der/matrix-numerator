import { type inferRouterOutputs } from "@trpc/server";
import { z } from "zod";
import { Router } from "~/server/api/main";



export const educationScheme = z.object({
  title:z.string().min(1).max(255),
  description:z.string().min(1),
  price: z.number().min(0)
})


export type Education = inferRouterOutputs<Router>['education']['getOne']
