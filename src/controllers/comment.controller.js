import { CommentService } from "../services/comment.service.js"

export const CommentController = {
    create: async (req, res, next) => {
        try {
            const result = await CommentService.create(req.body)
            if(!result.success){
                return res.status(result.status).send(result.message)
            }
            return res.status(result.status).send(result.message)
        } catch (error) {
            next(error)
        }
    },
    getAll: async (req, res, next) => {
        try {
            const page = req.query.page || 1
            const limit = req.query.limit || 10
            const result = await CommentService.getAll(page, limit)
            if(!result.success){
                return res.status(result.status).send(result.message)
            }
            return res.status(result.status).send(result.message)
        } catch (error) {
            next(error)
        }
    },
    getOne: async (req, res, next) => {
        try {
            const result = await CommentService.getOne(req.params.id)
            if(!result.success){
                return res.status(result.status).send(result.message)
            }
            return res.status(result.status).send(result.message)
        } catch (error) {
            next(error)
        }
    },
    update: async (req, res, next) => {
        try {
            const result = await CommentService.update(req.params.id, req.body)
            if(!result.success){
                return res.status(result.status).send(result.message)
            }
            return res.status(result.status).send(result.message)
        } catch (error) {
            next(error)
            
        }
    },
    delete: async (req, res, next) => {
        try {
            const result = await CommentService.delete(req.params.id)
            if(!result.success){
                return res.status(result.status).send(result.message)
            }
            return res.status(result.status).send(result.message)
        } catch (error) {
            next(error)
        }
    }
} 