import { createTRPCRouter, publicProcedure } from "../trpc";




export const TestRout = createTRPCRouter({
  test: publicProcedure
  .query(({ctx}) =>{
    return "Aaaaaaaaaaaaaaaa"
  })
})
