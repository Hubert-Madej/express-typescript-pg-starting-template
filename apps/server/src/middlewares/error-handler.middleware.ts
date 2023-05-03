import { ApiError } from "app/commons/api-error";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    return res.status(err.getCode()).json({
      status: err.getCode(),
      message: err.getRawMessage(),
    });
  }

  console.log(err);

  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    status: StatusCodes.INTERNAL_SERVER_ERROR,
    message: "INTERNAL_SERVER_ERROR",
  });
};
