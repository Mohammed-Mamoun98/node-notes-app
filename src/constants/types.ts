import { RequestHandler, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";

export type CustomResponseBody = Response<{ customSuccess: string }>;

export type CustomRequestHandler = RequestHandler<
  ParamsDictionary,
  CustomResponseBody
>;


export class CustomError extends Error {
  statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}
