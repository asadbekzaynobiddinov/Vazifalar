import Joi from "joi";

export const lessonValidator = (assigment) => {
    const schema = Joi.object({
        teacher_id: Joi.number().integer().required().messages({
            'number.base': `Teacher ID raqam bo'lishi kerak`,
            'any.required': 'Teacher IDni kiritish majburiy',
        }),
        name: Joi.string().required().messages({
            'string.base': `Dars nomi text bo'lishi kerak`,
            'any.required': `Dars nomini kiritish majburiy`,
        }),
        end_time: Joi.date().required().messages({
            'string.base': `Tugash vaqti to'ri bo'lishi kerak`,
        }),
    })
    return schema.validate(assigment, {abortEarly: false})
}
