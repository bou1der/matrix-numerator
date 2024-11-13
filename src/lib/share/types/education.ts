import { z } from "zod";



export const educationScheme = z.object({
  title:z.string().min(1).max(255),
  description:z.string().min(1),
  price: z.number().min(0)
})
