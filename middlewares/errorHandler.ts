import type { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/responses.js";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  return errorResponse(res, 500, err);
};
