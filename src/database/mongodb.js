import mongoose from "mongoose";
import { logger } from "../utils/index.js";
import { config } from "dotenv"

config()

export const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    logger.info("MONGODB CONNECTED!");
  } catch (error) {
    throw new Error(error);
  }
}

