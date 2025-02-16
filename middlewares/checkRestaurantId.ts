import type { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/responses.js";
import { initiatliseRedisClient } from "../utils/client.js";
import { restaurantKeyById } from "../utils/keys.js";

export const checkRestaurantExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { restaurantId } = req.params;
  if (!restaurantId) return errorResponse(res, 400, "restaurant id not found");

  const client = await initiatliseRedisClient();
  const restaurantKey = restaurantKeyById(restaurantId);

  const isKeyExists = await client.exists(restaurantKey);
  if (!isKeyExists) return errorResponse(res, 404, "restaurant not found");
  return next();
};
