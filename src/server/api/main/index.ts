import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { templateRouter } from "./routers/template";
import { RequestsRouter } from "./routers/requests";
import { educationRouter } from "./routers/education";
import { servicesRouter } from "./routers/services";
import { informationRouter } from "./routers/information";

export const router = createTRPCRouter({
  template: templateRouter,
  requests: RequestsRouter,
  education: educationRouter,
  services: servicesRouter,
  information: informationRouter
});

export type Router = typeof router;
export const createCaller = createCallerFactory(router);
