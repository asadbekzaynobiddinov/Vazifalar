import Joi from "joi";

export const postValidationSchema = Joi.object({
    title: Joi.string()
        .required()
        .messages({
            "string.empty": "Sarlavha maydoni bo'sh bo'lishi mumkin emas.",
            "any.required": "Sarlavha maydoni talab qilinadi."
        }),
    body: Joi.string()
        .required()
        .messages({
            "string.empty": "Matn maydoni bo'sh bo'lishi mumkin emas.",
            "any.required": "Matn maydoni talab qilinadi."
        }),
    authorId: Joi.string()
        .pattern(/^[0-9a-fA-F]{24}$/)
        .required()
        .messages({
            "string.pattern.base": "Author ID noto'g'ri formatda. U MongoDB ObjectId formatida bo'lishi kerak.",
            "any.required": "Author ID maydoni talab qilinadi."
        })
});
