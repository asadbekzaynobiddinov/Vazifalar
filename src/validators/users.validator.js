import Joi from 'joi';


export const userValidator = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required().messages({
            'string.base': `Ism matn bo'lishi kerak`,
            'string.empty': `Ism bo'sh bo'lishi mumkin emas`,
            'string.min': `Ism kamida 3 ta belgi bo'lishi kerak`,
            'string.max': `Ism 255 ta belgi bo'lishi kerak`,
            'any.required': `Ismni kiritish majburiy`,
        }),
        email: Joi.string().email().required().messages({
            'string.base': `Email matn bo'lishi kerak`,
            'string.email': `Email to'g'ri formatda bo'lishi kerak`,
            'any.required': 'Emailni kiritish majburiy',
        }),
        password: Joi.string().min(6).required().messages({
            'string.base': `Parol matn bo'lishi kerak`,
            'string.min': `Parol kamida 6 ta belgi bo'lishi kerak`,
            'any.required': `Parolni kiritish majburiy`,
        }),
        role: Joi.string().valid('user', 'admin').default('user'),
    });
    return schema.validate(user, { abortEarly: false })
}

