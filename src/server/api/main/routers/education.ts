import { authenticatedProcedure, createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const educationRouter = createTRPCRouter({
  get: publicProcedure
    .query(async ({ctx}) =>{

  }),
  updateSelf: authenticatedProcedure
    .input({})
    .mutation(async ({ctx, input}) =>{
  }) 

});
