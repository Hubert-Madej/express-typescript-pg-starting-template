import { Router } from "express";
import * as healthCheckController from "app/controllers/health-check.controller";

export const routing = (router: Router, scope: string) => {
  const resource = "health-check";

  router.get(`${scope}${resource}`, healthCheckController.healthCheck);
};
