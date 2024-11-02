import { getTasksService, getOneTaskService, addTaskService, updateTaskService, deleteTaskService } from "../service/index.js"


export const getAllTasksController = async (req, res, next) => {
    try {
        const boardId = +req.params.boardId
        const page = req.query.page || 1
        const pageSize = req.query.pageSize || 10
        const result = await getTasksService(boardId, page, pageSize)
        result ? res.send(result) : res.send('OOPS')
    } catch (error) {
        next(error)
    }
}


export const getOneTaskController = async (req, res, next) => {
    try {
        const boardId = +req.params.boardId
        const id = +req.params.id
        const result = await getOneTaskService(boardId, id)
        result ? res.send(result) : res.send('OOPS')
    } catch (error) {
        next(error)
    }
}


export const updateTaskController = async (req, res, next) => {
    try {
        const boardId = +req.params.boardId
        const id = +req.params.id
        const data = req.body
        const result = await updateTaskService(boardId, id, data)
        result ? res.send(result) : res.send('OOPS')
    } catch (error) {
        next(error)
    }
}


export const deleteTaskController = async (req, res, next) => {
    try {
        const boardId = +req.params.boardId
        const id = +req.params.id
        const result = await deleteTaskService(boardId, id)
        result ? res.send(result) : res.send("OOPS")
    } catch (error) {
        next(error)
    }
}


export const addTaskController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await addTaskService(data)
        result ? res.send(result) : res.send('OOPS')
    } catch (error) {
        next(error)
    }
}