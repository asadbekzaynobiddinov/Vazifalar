import Joi from 'joi'

export const userValidator = new Joi.object({
    fullName: Joi.string().min(3).max(50).required().messages({
        'string.base': `"fullName" string turida bo'lishi shart`,
        'string.empty': `"fullName" maydoni bo'sh bo'lmasligi kerak`,
        'string.min': `"fullName" kamida {$limit} belgidan iborat bo'lishi kerak`,
        'any.required': `"fullname" majburiy`
    }),
    email: Joi.string().email().min(3).max(50).required().messages({
        'string.base': `"email" to'g'ri bo'lishi shart`,
        'string.email': `"email" to'g'ri formatda bo'lishi kerak`,
        'string.empty': `"email" maydoni bo'sh bo'lmasligi kerak`,
        'string.min': `"email" kamida #limit belgidan iborat bo'lishi kerak`,
        'string.max': `"email" ko'pi bilan #limit belgidan iborat bo'lishi kerak`,
        'any.required': `"email" majburiy`
    }),
    password: Joi.string().min(3).max(50).required().messages({
        'string.base': `"password" string turida bo'lishi shart`,
        'string.empty': `"password" maydoni bo'sh bo'lmasligi kerak`,
        'string.min': `"password" kamida {$limit} belgidan iborat bo'lishi kerak`,
        'any.required': `"password" majburiy`
    })
})