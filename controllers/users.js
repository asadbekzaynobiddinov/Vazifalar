import { getAllUsersService, getOneUsersService, updateUserService, deleteUserService } from "../service/index.js"


export const getAllUsersController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 10
        const result = await getAllUsersService(page, pageSize)

        result ? res.send(result) : res.send('OOPS')

    } catch (error) {
        next(error)
    }
}


export const getOneUserController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const result = await getOneUsersService(id)
        result ? res.send(result) : res.send('OOPS')
    } catch (error) {
        next(error)
    }
}


export const updateUserController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const data = req.body
        const result = await updateUserService(id, data)
        result ? res.send(result) : res.send('OOPS')
    } catch (error) {
        next(error)
    }
}


export const deleteUserController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const result = await deleteUserService(id)
        result ? res.send(result) : res.send('OOPS')
    } catch (error) {
        next(error)
    }
}
