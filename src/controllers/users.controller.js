import { UsersService } from "../service/index.js"


const resultHanling = (res, result) => {
    if(!result.success){
        return res.status(result.status).send(result.message)
    }
    return res.status(result.status).send(result.message)
}

export const UsersController = {
    create: async (req, res, next) => {
        try {
            const usersData = req.body
            const result = await UsersService.create(usersData)
            resultHanling(res, result)
        } catch (error) {
            next(error)
        }
    },
    getAll: async (req, res, next) => {
        try {
            const page = req.query.page || 1
            const limit = req.query.limit || 10
            const result = await UsersService.getAll(page, limit)
            resultHanling(res, result)
        } catch (error) {
            next(error)
        }
    },
    getOne: async () => {
        try {
            const email = req.params.email
            const result = await UsersService.getOne(email)
            resultHanling(res, result)
        } catch (error) {
            next(error)
        }
    },
    update: async (req, res, next) => {
        try {
            const email = req.params.email
            const usersData = req.body
            const result = await UsersService.update(email, usersData)
            resultHanling(res, result)
        } catch (error) {
            next(error)
        }
    },
    delete: async (req, res, next) => {
        try {
            const email = req.params.email
            const result = await UsersService.delete(email)
            resultHanling(res, result)
        } catch (error) {
            next(error)
        }
    }
}