import { getBoardsService, getOneBoardService, addBoardService, updateBoardService, deleteBoardService } from "../service/index.js"


export const getAllBoardsController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 10
        const result = await getBoardsService(page, pageSize)

        result ? res.send(result) : res.send('OOPS')

    } catch (error) {
        next(error)
    }
}


export const getOneBoardController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const result = await getOneBoardService(id)
        result ? res.send(result) : res.send('OOPS')
    } catch (error) {
        next(error)
    }
}


export const updateBoardController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const data = req.body
        const result = await updateBoardService(id, data)
        result ? res.send(result) : res.send('OOPS')
    } catch (error) {
        next(error)
    }
}


export const deleteBoardController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const result = await deleteBoardService(id)
        result ? res.send(result) : res.send('OOPS')
    } catch (error) {
        next(error)
    }
}


export const addBoardController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await addBoardService(data)
        result ? res.send(result) : res.send('OOPS')
    } catch (error) {
        next(error)
    }
}