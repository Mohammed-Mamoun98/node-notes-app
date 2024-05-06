import { RequestHandler } from "express";


interface CustomResponse extends Response {
  success: (data: any, status?: number) => Response;
  failure: (error: string, status?: number) => Response;
  newStatusCode: number;
}

// Augment the Express response object to include a custom method
declare global {
  namespace Express {
    interface Response extends CustomResponse {}
  }
}

export const formatResponseMiddleware: RequestHandler = (req, res, next) => {
  //@ts-ignore
  res.success = (data: any, status: number = 200) => {
    return res.status(status).json({
      result: data,
      success: true,
      status: status,
    });
  };

  //@ts-ignore
  res.failure = (error: any, status: number = 500) => {

    return res.status(status).json({
      error,
      success: false,
      status: status,
    });
  };

  next();
};
