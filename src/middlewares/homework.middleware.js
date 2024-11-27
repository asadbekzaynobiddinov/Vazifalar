import { homeworkValidator } from "../validators/index.js";

export const validateHomework = (req, res, next) => {
    const { error } = homeworkValidator(req.body)
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map((err) => err.message),
        })
    }
    next()
}