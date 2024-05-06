import { RequestHandler } from "express";

export const notFoundMiddleware: RequestHandler = (req, res, next) => {
  res.failure("Endpoint not found", 404);
};
