import Joi from "joi";

export const homeworkValidator = (assigment) => {
    const schema = Joi.object({
        lesson_id: Joi.number().integer().required().messages({
            'number.base': `Dars ID raqam bo'lishi kerak`,
            'any.required': 'Dars IDni kiritish majburiy',
        }),
        description: Joi.number().integer().required().messages({
            'string.base': `Description text bo'lishi kerak`,
            'any.required': `Description kiritish majburiy`,
        }),
        end_time: Joi.date().required().messages({
            'string.base': `Tugash vaqti to'ri bo'lishi kerak`,
        }),
    })
    return schema.validate(assigment, {abortEarly: false})
}
