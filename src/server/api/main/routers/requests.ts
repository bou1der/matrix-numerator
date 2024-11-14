import { RequestsSchema } from "~/lib/share/types/requests";
import { calls, requests } from "~/server/db/schema";
import { createTRPCRouter, publicProcedure, authenticatedProcedure } from "../../trpc";
import { CallsSchema } from "~/lib/share/types/calls";




export const RequestsRouter = createTRPCRouter({
  create:publicProcedure
  .input(RequestsSchema)
  .mutation( async ({ctx, input}) =>{
    return (await ctx.db.insert(requests)
      .values({
        ...input,
        theme:input.type
      })).reverse()
  }),
  getAll: authenticatedProcedure
  .query( async ({ctx}) =>{
    return await ctx.db.query.requests.findMany()
  }),
  createCall: publicProcedure
  .input(CallsSchema)
  .mutation(async ({ctx, input}) =>{
    await ctx.db.insert(calls).values(input)
  }),
  getCalls: authenticatedProcedure
  .query(async ({ctx}) =>{
    return (await ctx.db.query.calls.findMany()).reverse()
  })



})
