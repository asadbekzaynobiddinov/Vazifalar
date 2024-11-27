import db from '../db/index.js'


export const LessonService = {
    create: async (lesson) => {
        try {
            const result = await db('lessons').insert(lesson).returning("*")
            if(result.length === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'Lesson yaratilmadi'
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
            const result = await db('lessons').select("*").limit(limit).offset(offset)
            if(result.length === 0){
                return {
                    success: false,
                    status: 400,
                    message: 'Lesson topilmadi'
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
            const result = await db('lessons').select("*").where('id', id)
            if(result.length === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'Lesson topilmadi'
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
            const result = await db('lessons').update(data).where('id', id).returning('*')
            if(result.length === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'Lesson topilmadi'
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
            const result = await db('lessons').delete().where('id', id)
            if(result === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'lesson topilmadi'
                }
            }
            return {
                success: true,
                status: 200,
                message: 'Lesson muvaffaqiyatli o\'chirildi'
            }
        } catch (error) {
            logger.error(error)
            throw new Error(error)
        }
    }
}