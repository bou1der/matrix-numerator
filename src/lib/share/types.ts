import { z } from "zod";


export const dateSchema = z.object({
  date:z.number().min(1).max(31),
  month:z.number().min(1).max(12),
  year:z.number()
})

export type DateSchema = z.infer<typeof dateSchema>
