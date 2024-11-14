import { 
    createCourseService, getAllCoursesService, 
    updateCourseService, deleteCourseService
} from "../service/index.js";
import { logger } from "../utils/index.js";


export const createCourseController = async (req, res, next) => {
    try {
        let data = req.body
        const result = await createCourseService(data)
        if(!result.success){
            return res.send('Nimadur hato ketdi')
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getAllCoursesController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 5
        const result = await getAllCoursesService(page, limit)
        if(!result.success){
            return res.status(result.status).send(result.message)
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateCourseController = async (req, res, next) => {
    try {
        const id = req.params.id
        const newCourse = req.body
        const result = await updateCourseService(id, newCourse)
        if(!result.success){
            return res.send('Nimadur hato ketdi')
        }
        return res.status(result.status).send(result.message.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteCourseController = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await deleteCourseService(id)
        if(!result.success){
            return res.send('Nimadur hato ketdi')
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}