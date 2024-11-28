import db from '../db/index.js'


export const ExamsService = {
    create: async (exam) => {
        try {
            const result = await db('exams').insert(exam).returning("*")
            if(result.length === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'Exam yaratilmadi'
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
            const result = await db('exams').select("*").limit(limit).offset(offset)
            if(result.length === 0){
                return {
                    success: false,
                    status: 400,
                    message: 'Exam topilmadi'
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
            const result = await db('exams').select("*").where('id', id)
            if(result.length === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'Exam topilmadi'
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
            const result = await db('exams').update(data).where('id', id).returning('*')
            if(result.length === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'Exam topilmadi'
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
            const result = await db('exams').delete().where('id', id)
            if(result === 0){
                return {
                    success: false,
                    status: 404,
                    message: 'Exam topilmadi'
                }
            }
            return {
                success: true,
                status: 200,
                message: 'Exam muvaffaqiyatli o\'chirildi'
            }
        } catch (error) {
            logger.error(error)
            throw new Error(error)
        }
    }
}
