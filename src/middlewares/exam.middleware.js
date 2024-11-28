import { examValidator } from "../validators/index.js";

export const validateExam = (req, res, next) => {
    const { error } = examValidator(req.body)
    if (error) {
        return res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: error.details.map((err) => err.message),
        })
    }
    next()
}