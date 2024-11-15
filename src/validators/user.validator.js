import Joi from 'joi';

export const userSchema = Joi.object({
    name: Joi.string().max(255).required().messages({
        'string.base': `Ism matn ko'rinishida bo'lishi kerak.`,
        'string.max': `Ism uzunligi 255 belgidan oshmasligi kerak.`,
        'any.required': `Ism majburiy maydon.`
    }),
    email: Joi.string().email().required().messages({
        'string.email': `Email manzil to'g'ri formatda kiritilishi kerak.`,
        'any.required': `Email majburiy maydon.`
    }),
    password: Joi.string().min(8).required().messages({
        'string.min': `Parol kamida 8 belgidan iborat bo'lishi kerak.`,
        'any.required': `Parol majburiy maydon.`
    }),
    avatar: Joi.string().uri().optional().messages({
        'string.uri': `Avatar to'g'ri URI formatida bo'lishi kerak.`
    }),
    username: Joi.string().alphanum().min(3).max(30).required().messages({
        'string.alphanum': `Username faqat harf va raqamlardan iborat bo'lishi kerak.`,
        'string.min': `Username kamida 3 belgidan iborat bo'lishi kerak.`,
        'string.max': `Username 30 belgidan oshmasligi kerak.`,
        'any.required': `Username majburiy maydon.`
    }),
    birth_of_date: Joi.date().optional().messages({
        'date.base': `Tug'ilgan sana to'g'ri formatda bo'lishi kerak.`
    }),
    phone_number: Joi.string().pattern(/^[0-9]+$/).min(10).max(15).required().messages({
        'string.pattern.base': `Telefon raqami faqat raqamlardan iborat bo'lishi kerak.`,
        'string.min': `Telefon raqami kamida 10 belgidan iborat bo'lishi kerak.`,
        'string.max': `Telefon raqami 15 belgidan oshmasligi kerak.`,
        'any.required': `Telefon raqami majburiy maydon.`
    })
});


