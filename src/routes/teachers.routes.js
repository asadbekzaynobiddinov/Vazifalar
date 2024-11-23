import { TeachersController } from "../controllers/index.js";
import { Router } from "express";
import Validators from '../middlewares/index.js'

export const teachersRouter = Router()

teachersRouter.get('/getAll', TeachersController.getAll)
teachersRouter.get('/getOne', TeachersController.getOne)
teachersRouter.post('/create', Validators.validateTeacher, TeachersController.create)
teachersRouter.put('/update/:id', Validators.validateTeacher, TeachersController.update)
teachersRouter.delete('/delete/:id', TeachersController.delete)