import { logger } from "../utils/index.js";

export const blogController = (req, res, next) => {
  try {
    res.send(["blog1", "blog2"]);
  } catch (error) {
    logger.error(error)
    next(error);
  }
};