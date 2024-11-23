import { StudentsController } from "../controllers/index.js";
import { Router } from "express";
import Validators from '../middlewares/index.js'

export const studentsRouter = Router()

studentsRouter.get('/getAll', StudentsController.getAll)
studentsRouter.get('/getOne', StudentsController.getOne)
studentsRouter.post('/create', Validators.validateStudent, StudentsController.create)
studentsRouter.put('/update/:id', Validators.validateStudent, StudentsController.update)
studentsRouter.delete('/delete/:id', StudentsController.delete)