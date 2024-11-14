import { eq } from "drizzle-orm";
import { educationScheme } from "~/lib/share/types/education";
import { IdSchema } from "~/lib/share/utils";
import { authenticatedProcedure, createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { education } from "~/server/db/schema";

export const educationRouter = createTRPCRouter({
  getOne: publicProcedure
  .query(async ({ctx}) =>{
    return (await ctx.db.query.education.findMany()).reverse()[0]
  }),
  getAll: publicProcedure
  .query(async ({ctx}) =>{
    return (await ctx.db.query.education.findMany()).reverse()
  }),
  create: authenticatedProcedure
  .input(educationScheme)
  .mutation(async ({ctx, input}) =>{
    await ctx.db.insert(education)
      .values(input)
  }),
  update: authenticatedProcedure
  .input(educationScheme.merge(IdSchema))
  .mutation(async ({ctx, input}) =>{
    await ctx.db.update(education)
      .set(input)
      .where(eq(education.id, input.id))
  }),
  delete: authenticatedProcedure
  .input(IdSchema)
  .mutation(async ({ctx, input}) =>{
    await ctx.db.delete(education).where(eq(education.id, input.id))
  })

});
