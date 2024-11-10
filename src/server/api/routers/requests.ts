import { RequestsSchema } from "~/lib/share/types/requests";
import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";
import { requests } from "~/server/db/schema";




export const RequestsRouter = createTRPCRouter({
  create:publicProcedure
  .input(RequestsSchema)
  .mutation(({ctx, input}) =>{
    return ctx.db.insert(requests)
      .values(input)
  }),
  getAll: adminProcedure
  .query(({ctx}) =>{
    return ctx.db.query.requests.findMany()
  })

})
