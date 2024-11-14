import { createArticleService, deleteArticleService, getAllArticlesService, updateArticleService } from "../service/index.js"
import { logger } from "../utils/index.js"


export const createArticleController = async (req, res, next) => {
    try {
        const result = await createArticleService(req.body)
        if(!result.success){
            return res.send("Nimadur haqo ketdi")
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getAllArticlesController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 5
        const result = await getAllArticlesService(page, limit)
        if(!result.success){
            return res.status(result.status).send(result.message)
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const updateArticleController = async (req, res, next) => {
    try {
        const id = req.params.id
        const newArticle = req.body
        const result = await updateArticleService(id, newArticle)
        if(!result.success){
            return res.send('Nimadur hato ketdi')
        }
        return res.status(result.status).send(result.message.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const deleteArticleController = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await deleteArticleService(id)
        if(!result.success){
            return res.send('Nimadur hato ketdi')
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}