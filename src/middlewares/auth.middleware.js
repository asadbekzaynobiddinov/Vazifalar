import { logger } from "../utils/index.js";

export const authGuard = async (req, res, next) => {
    try {
        const {email} = req.body

    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}