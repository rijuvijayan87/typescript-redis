import type { Response } from "express";

export const successResonse = (
  res: Response,
  data: any,
  message: string = "Success"
) => {
  return res.status(200).send({ success: true, message, data });
};

export const errorResponse = (
  res: Response,
  status: number,
  error: string = "Error"
) => {
  return res.send(status).json({ success: false, error });
};
