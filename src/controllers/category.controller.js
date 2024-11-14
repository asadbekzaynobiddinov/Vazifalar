import { createCategoryService, getAllCategoriesService, updateCategoryService, deleteCategoryService } from "../service/index.js"
import { logger } from "../utils/index.js"


export const createCategoryController = async (req, res, next) => {
    try {
        const result = await createCategoryService(req.body)
        if(!result.success){
            return res.send('Nimadur hato ketdi')
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getAllCategoriesController = async (req, res, next) => {
    try {
        const page = req.query.page || 5
        const limit = req.query.limit || 5
        const result = await getAllCategoriesService(page, limit)
        if(!result.success){
            return res.status(result.status).send(result.message)
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id
        const newCategory = req.body
        const result = await updateCategoryService(id, newCategory)
        if(!result.success){
            return res.send("Nimadur hato ketdi")
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteCategoryController = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await deleteCategoryService(id)
        if(!result.success){
            return res.send("Nimadur hato ketdi")
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}