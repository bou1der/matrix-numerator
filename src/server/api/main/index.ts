import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { templateRouter } from "./routers/template";
import { RequestsRouter } from "./routers/requests";

export const router = createTRPCRouter({
  template: templateRouter,
  requests: RequestsRouter
});

export type Router = typeof router;
export const createCaller = createCallerFactory(router);
