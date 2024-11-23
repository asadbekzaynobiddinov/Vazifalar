import Joi from "joi";

export const assigmentValidator = (assigment) => {
    const schema = Joi.object({
        course_id: Joi.number().integer().required().messages({
            'number.base': `Kurs ID raqam bo'lishi kerak`,
            'any.required': 'Kurs IDni kiritish majburiy',
        }),
        student_id: Joi.number().integer().required().messages({
            'number.base': `O'quvchi ID raqam bo'lishi kerak`,
            'any.required': `O'quvchi IDni kiritish majburiy`,
        }),
        teacher_id: Joi.number().integer().optional().allow(null).messages({
            'number.base': `O'qituvchi ID raqam bo'lishi kerak`,
        }),
    })
    return schema.validate(assigment, {abortEarly: false})
}
