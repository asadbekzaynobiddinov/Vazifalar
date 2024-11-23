import Joi from "joi";

export const studentValidator = (student) => {
    const schema = Joi.object({
        pemission: Joi.boolean().default(false),
        user_id: Joi.number().integer().required().messages({
            'number.base': `Foydalanuvchi ID raqam bo'lishi kerak`,
            'any.required': `Foydalanuvchi IDni kiritish majburiy`,
        }),
    });
    return schema.validate(student, { abortEarly: false })
}