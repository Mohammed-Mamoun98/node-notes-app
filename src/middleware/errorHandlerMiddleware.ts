import { NextFunction, Request, Response } from "express";
import { winstonLogger } from "../utils/loggers";
import { CustomError } from "../constants/types";
import { isHttpError } from "http-errors";

export const errorHandlerMiddleware = (
  err: CustomError,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  // @ts-ignore
  const errorStatusCode = isHttpError(err) ? err.status : 500;
  console.log("TESSST" + errorStatusCode);
  winstonLogger.error(err.stack); // Log the err1or stack trace
  res.statusCode = errorStatusCode;
  res.failure(err.message, res.statusCode); // Send a generic error response
};
