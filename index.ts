import express from "express";
import { router as restaurantsRouter } from "./routes/restaurants.js";
import { router as cuisinesRouter } from "./routes/cuisines.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use("/restaurants", restaurantsRouter);
app.use("/cusines", cuisinesRouter);
app.use(errorHandler);

app
  .listen(PORT, () => {
    console.log(`Application is running on port: ${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
