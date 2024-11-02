import { Router } from "express"
import { getAllTasksController, getOneTaskController, updateTaskController, deleteTaskController, addTaskController } from "../controllers/index.js"

export const taskRouter = Router()

taskRouter.get('/tasks/:boardId', getAllTasksController)
taskRouter.get('/tasks/:boardId/:id', getOneTaskController)
taskRouter.put('/tasks/:boardId/:id', updateTaskController)
taskRouter.post('/tasks', addTaskController)
taskRouter.delete('/tasks/:boardId/:id', deleteTaskController)