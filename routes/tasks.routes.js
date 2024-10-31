import { Router } from "express"
import { addTask, getTasks, getOneTask, updateTask, deleteTask } from "../controllers/export.js"


export const taskRouter = Router()

taskRouter.post('/create', addTask)
taskRouter.get('/getAll', getTasks)
taskRouter.get("/getOne/:id", getOneTask)
taskRouter.put('/update/:id', updateTask)
taskRouter.delete('/delete/:id', deleteTask)