import { NextFunction, Request, Response } from "express";
import * as healthCheckService from "app/services/health-check.service";
import { StatusCodes } from "http-status-codes";

export const healthCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  healthCheckService
    .healthCheck()
    .then((response) => res.status(StatusCodes.OK).json(response))
    .catch((err) => next(err));
};
