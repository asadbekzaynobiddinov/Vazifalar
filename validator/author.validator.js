import Joi from "joi"


export const authorSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        "string.base": `"name" maydoni matn bo'lishi kerak`,
        "string.empty": `"name" maydoni bo'sh bo'lmasligi kerak`,
        "string.min": `"name" maydoni kamida 3 belgidan iborat bo'lishi kerak`,
        "any.required": `"name" maydoni talab qilinadi`,
    }),
    bio: Joi.string().optional(),
    password: Joi.string().min(6).required().messages({
        "string.base": `"password" maydoni matn bo'lishi kerak`,
        "string.empty": `"password" maydoni bo'sh bo'lmasligi kerak`,
        "string.min": `"password" maydoni kamida 6 belgidan iborat bo'lishi kerak`,
        "any.required": `"password" maydoni talab qilinadi`,
    })
})