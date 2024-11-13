import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { templateRouter } from "./routers/template";
import { RequestsRouter } from "./routers/requests";
import { educationRouter } from "./routers/education";

export const router = createTRPCRouter({
  template: templateRouter,
  requests: RequestsRouter,
  education: educationRouter
});

export type Router = typeof router;
export const createCaller = createCallerFactory(router);
