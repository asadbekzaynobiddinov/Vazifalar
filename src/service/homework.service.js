import db from '../db/index.js'


export const HomeworkService = {
    create: async (homework) => {
        try {
            const result = await db('homeworks').insert(homework).returning("*")
            if(result.length === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'Homework yaratilmadi'
                }
            }
            return {
                success: true,
                status: 200,
                message: result
            }
        } catch (error) {
            logger.error(error)
            throw new Error(error)
        }
    },

    getAll: async (page, limit) => {
        try {
            const offset = (page - 1) * limit
            const result = await db('homeworks').select("*").limit(limit).offset(offset)
            if(result.length === 0){
                return {
                    success: false,
                    status: 400,
                    message: 'Homework topilmadi'
                }
            }
            return {
                success: true,
                status: 200,
                message: result
            }
        } catch (error) {
            logger.error(error)
            throw new Error(error)
        }
    },

    getOne: async (id) => {
        try {
            const result = await db('homeworks').select("*").where('id', id)
            if(result.length === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'Homework topilmadi'
                }
            }
            return {
                success: true,
                status: 200,
                message: result
            }
        } catch (error) {
            logger.error(error)
            throw new Error(error)
        }
    }, 

    update: async (id, data) => {
        try {
            const result = await db('homeworks').update(data).where('id', id).returning('*')
            if(result.length === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'Homework topilmadi'
                }
            }
            return {
                success: true,
                status: 200,
                message: result
            }
        } catch (error) {
            logger.error(error)
            throw new Error(error)
        }
    },

    delete: async (id) => {
        try {
            const result = await db('homeworks').delete().where('id', id)
            if(result === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'Homework topilmadi'
                }
            }
            return {
                success: true,
                status: 200,
                message: 'Homework muvaffaqiyatli o\'chirildi'
            }
        } catch (error) {
            logger.error(error)
            throw new Error(error)
        }
    }
}