import Joi from "joi";

export const courseValidator = (course) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required().messages({
            'string.base': `Kurs nomi matn bo'lishi kerak`,
            'string.empty': `Kurs nomi bo'sh bo'lishi mumkin emas`,
            'string.min': `Kurs nomi kamida 3 ta belgi bo'lishi kerak`,
            'string.max': `Kurs nomi 255 ta belgi bo'lishi kerak`,
            'any.required': `Kurs nomini kiritish majburiy`,
        }),
        description: Joi.string().max(1000).optional().messages({
            'string.base': `Kurs tavsifi matn bo'lishi kerak`,
            'string.max': `Kurs tavsifi 1000 ta belgi bo'lishi kerak`,
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
    
