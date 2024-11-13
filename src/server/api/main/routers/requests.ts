import { RequestsSchema } from "~/lib/share/types/requests";
import { requests } from "~/server/db/schema";
import { createTRPCRouter, publicProcedure, authenticatedProcedure } from "../../trpc";




export const RequestsRouter = createTRPCRouter({
  create:publicProcedure
  .input(RequestsSchema)
  .mutation( async ({ctx, input}) =>{
    return (await ctx.db.insert(requests)
      .values(input)).reverse()
  }),
  getAll: authenticatedProcedure
  .query(({ctx}) =>{
    return ctx.db.query.requests.findMany()
  })

})
