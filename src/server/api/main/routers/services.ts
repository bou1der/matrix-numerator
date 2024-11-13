import { eq } from "drizzle-orm";
import { serviceScheme } from "~/lib/share/types/services";
import { IdSchema } from "~/lib/share/utils";
import { authenticatedProcedure, createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { services } from "~/server/db/schema";


export const servicesRouter = createTRPCRouter({
  getAll:publicProcedure
  .query( async ({ctx}) =>{
    return await ctx.db.query.services.findMany()
  }),
  create: authenticatedProcedure
  .input(serviceScheme)
  .mutation(async ({ctx,input}) =>{
    await ctx.db.insert(services)
      .values(input)
  }),
  update: authenticatedProcedure
  .input(serviceScheme.merge(IdSchema))
  .mutation(async ({ctx, input}) =>{
    await ctx.db.update(services)
      .set(input)
      .where(eq(services.id, input.id))
  })

});
