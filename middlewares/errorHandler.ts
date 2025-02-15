import type { Request, Response, NextFunction } from "express";
import { errorResonse } from "../utils/responses.js";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  errorResonse(res, 500, err);
};
