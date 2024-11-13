import { educationScheme } from "~/lib/share/types/education";
import { authenticatedProcedure, createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { education } from "~/server/db/schema";

export const educationRouter = createTRPCRouter({
  getOne: publicProcedure
  .query(async ({ctx}) =>{
    return (await ctx.db.query.education.findMany()).reverse()[0]
  }),
  updateSelf: authenticatedProcedure
  .input(educationScheme)
  .mutation(async ({ctx, input}) =>{
    await ctx.db.insert(education)
      .values(input)
  }) 

});
