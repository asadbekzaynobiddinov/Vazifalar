import { createCourse, getAllCourses, updateCourse, deleteCourse } from "../service/index.js"

export const createCourseController = async (req, res, next) => {
    try {
        const result = await createCourse(req.body)
        if(!result){
            return res.status(409).send(result.message)
        }
        return res.status(201).send(result.message)
    } catch (error) {
        next(error)
    }
}

export const getAllCoursesController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 5
        const result = await getAllCourses(page, limit)
        if(!result){
            return res.status(409).send(result.message)
        }
        return res.status(200).send(result.message)
    } catch (error) {
        next(error)
    }
}


export const updateCoursesController = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body
        const result = await updateCourse(id, data)
        if(!result){
            return res.status(409).send(result.message)
        }
        return res.status(200).send(result.message)
    } catch (error) {
        next(error)
    }
}


export const deleteCourseController = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await deleteCourse(id)
        if(!result){
            return res.status(409).send(result.message)
        }
        return res.status(200).send(result.message)
    } catch (error) {
        next(error)
    }
}

