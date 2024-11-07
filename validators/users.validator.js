import Joi from 'joi';


export const userValidator = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
        'string.base': `"Ism" matn turi bo'lishi kerak`,
        'string.empty': `"Ism" maydoni bo'sh bo'lmasligi kerak`,
        'string.min': `"Ism" kamida {#limit} belgidan iborat bo'lishi kerak`,
        'any.required': `"Ism" maydoni majburiy`
    }),
    email: Joi.string().email().required().messages({
        'string.base': `"Email" matn turi bo'lishi kerak`,
        'string.empty': `"Email" maydoni bo'sh bo'lmasligi kerak`,
        'string.email': `"Email" haqiqiy email manzili bo'lishi kerak`,
        'any.required': `"Email" maydoni majburiy`
    }),
    password: Joi.string().min(6).required().messages({
        'string.base': `"Parol" matn turi bo'lishi kerak`,
        'string.empty': `"Parol" maydoni bo'sh bo'lmasligi kerak`,
        'string.min': `"Parol" kamida {#limit} belgidan iborat bo'lishi kerak`,
        'any.required': `"Parol" maydoni majburiy`
    }),
    role: Joi.string().valid('SuperAdmin', 'Admin', 'User').default('User')
        .messages({ 'any.only': `"Role" faqat quyidagi qiymatlarni qabul qilishi mumkin: SuperAdmin, Admin yoki User`
    }),
    messages: Joi.array().items(Joi.string()).optional().messages({
        'array.base': `"Xabarlar" massiv bo'lishi kerak va har bir element matn bo'lishi kerak`
    })
});

