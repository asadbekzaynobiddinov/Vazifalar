import Joi from "joi";

export const teacherValidator = (teacher) => {
    const schema = Joi.object({
        user_id: Joi.number().integer().required().messages({
            'number.base': `Foydalanuvchi ID raqam bo'lishi kerak`,
            'any.required': 'Foydalanuvchi IDni kiritish majburiy',
        }),
    });
    return schema.validate(teacher, {abortEarly: false})
}
