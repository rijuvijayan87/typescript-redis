import type { Response } from "express";

export const successResponse = (
  res: Response,
  data: any,
  message: string = "Success"
) => {
  res.status(200).send({ success: true, message, data });
};

export const errorResponse = (
  res: Response,
  status: number,
  error: string = "Error"
) => {
  res.send(status).json({ success: false, error });
};
