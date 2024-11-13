import { eq } from "drizzle-orm";
import { z } from "zod";
import { InformationSchema } from "~/lib/share/types/informations";
import { IdSchema } from "~/lib/share/utils";
import { authenticatedProcedure, createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { informations, InfoSchema } from "~/server/db/schema";

export const informationRouter = createTRPCRouter({
  getAll: publicProcedure
  .input(z.object({
    type:InfoSchema.optional(),
  }).optional())
  .query( async ({ctx, input}) =>{
    return await ctx.db.query.informations.findMany({
      where:input?.type ? eq(informations.type, input!.type!) : undefined
    })
  }),
  create: authenticatedProcedure
  .input(InformationSchema)
  .mutation( async ({ctx, input}) =>{
    await ctx.db.insert(informations)
      .values(input)
  }),
  update: authenticatedProcedure
  .input(InformationSchema.merge(IdSchema))
  .mutation( async ({ ctx, input }) =>{
    await ctx.db.update(informations)
      .set(input)
      .where(eq(informations.id, input.id))
  }),
  delete: authenticatedProcedure
  .input(IdSchema)
  .mutation( async ({ctx, input}) =>{
    await ctx.db.delete(informations).where(eq(informations.id, input.id))
  })
});
