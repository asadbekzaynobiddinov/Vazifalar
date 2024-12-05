import { PostService } from "../services/posts.service.js"

export const PostController = {
    create: async (req, res, next) => {
        try {
            const result = await PostService.create(req.body)
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
            const result = await PostService.getAll(page, limit)
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
            const result = await PostService.getOne(req.params.id)
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
            const result = await PostService.update(req.params.id, req.body)
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
            const result = await PostService.delete(req.params.id)
            if(!result.success){
                return res.status(result.status).send(result.message)
            }
            return res.status(result.status).send(result.message)
        } catch (error) {
            next(error)
        }
    }
} 