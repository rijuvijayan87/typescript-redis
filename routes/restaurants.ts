import express from "express";
import { validate } from "../middlewares/validate.js";
import { RestaurantSchema, type Restaurant } from "../schemas/restaurants.js";
import { initiatliseRedisClient } from "../utils/client.js";
export const router = express.Router();

router.post("/", validate(RestaurantSchema), async (req, res, next) => {
  const data = req.body as Restaurant;
  const client = await initiatliseRedisClient();
  res.send("hey from restaurants");
});
