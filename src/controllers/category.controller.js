import { CategoryService } from "../service/index.js"

const resultHanling = (res, result) => {
    if(!result.success){
        return res.status(result.status).send(result.message)
    }
    return res.status(result.status).send(result.message)
}

export const CategoryController = {
    create: async (req, res, next) => {
        try {
            const category = req.body
            const result = await CategoryService.create(category)
            resultHanling(res, result)
        } catch (error) {
            next(error)
        }
    },
    getAll: async (req, res, next) => {
        try {
            const page = req.query.page || 1
            const limit = req.query.limit || 10
            const result = await CategoryService.getAll(page, limit)
            resultHanling(res, result)
        } catch (error) {
            next(error)
        }
    },
    getOne: async () => {
        try {
            const id = req.params.id
            const result = await CategoryService.getOne(id)
            resultHanling(res, result)
        } catch (error) {
            next(error)
        }
    },
    update: async (req, res, next) => {
        try {
            const id = req.params.id
            const newData = req.body
            const result = await CategoryService.update(id, newData) 
            resultHanling(res, result)
        } catch (error) {
            next(error)
        }
    },
    delete: async (req, res, next) => {
        try {
            const id = req.params.id
            const result = await CategoryService.delete(id)
            resultHanling(res, result)
        } catch (error) {
            next(error)
        }
    }
}