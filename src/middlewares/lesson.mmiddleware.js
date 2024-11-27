import { lessonValidator } from "../validators/index.js";

export const validateLesson = (req, res, next) => {
    const { error } = lessonValidator(req.body)
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map((err) => err.message),
        })
    }
    next()
}