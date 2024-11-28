import Joi from "joi";

export const examValidator = (course) => {
    const schema = Joi.object({
        course_id: Joi.number().required().messages({
            'number.base': `Kurs id raqam bo'lishi kerak`,
            'number.empty': `Kurs id bo'sh bo'lishi mumkin emas`,
            'any.required': `Kurs idni kiritish majburiy`,
        }),
        student_id: Joi.number().required().messages({
            'number.base': `Student id raqam bo'lishi kerak`,
            'number.empty': `Student id bo'sh bo'lishi mumkin emas`,
            'any.required': `Student idni kiritish majburiy`,
        }),
        start_time: Joi.date().default(() => new Date(), `hozirgi vaqt`).messages({
            'date.base': `Boshlanish vaqti to'g'ri formatda bo'lishi kerak`,
        }),
        end_time: Joi.date().optional().greater(Joi.ref(`start_time`)).messages({
            'date.base': `Tugash vaqti to'g'ri formatda bo'lishi kerak`,
            'date.greater': `Tugash vaqti boshlanish vaqtidan keyin bo'lishi kerak`,
        }),
    });
    return schema.validate(course, {abortEarly: false})
}
    
