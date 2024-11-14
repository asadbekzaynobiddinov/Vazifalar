import { addComentService, getMyComentsService, getAllComentsService, deleteComentService } from "../service/index.js"
import { logger } from "../utils/index.js"

export const addComentController = async (req, res, next) => {
    try {
        let data = req.body
        data.userId = req.user._id
        const result = await addComentService(data)
        if(!result.success){
            return res.send('Nimadur hato ketdi')
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}

export const getMyComentsController = async (req, res, next) => {
    try {
        const userId = req.user._id
        const page = req.query.page || 1
        const limit = req.query.limit || 5
        const result = await getMyComentsService(userId, page, limit)
        if(!result.success){
            return res.status(result.status).send(result.message)
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}


export const getAllComentsController = async (req, res, next) => {
    try {
        const page = req.query.page
        const limit = req.query.limit
        const result = await getAllComentsService(userId, page, limit)
        if(!result.success){
            return res.status(result.status).send(result.message)
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}


export const deleteComentController = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await deleteComentService(id)
        if(!result.success){
            return res.send('Nimadur hato ketdi')
        }
        return res.status(result.status).send(result.message)
    } catch (error) {
        logger.error(error)
        next(error)
    }
}