import { Router } from "express";
import * as healthCheckRoutes from "./health-check.route";

export const router: Router = Router();
const apiPrefix = "/api/v1/";
healthCheckRoutes.routing(router, apiPrefix);
