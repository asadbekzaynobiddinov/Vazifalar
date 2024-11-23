import { AssigmentController } from "../controllers/index.js";
import { Router } from "express";
import Validators from '../middlewares/index.js'

export const assigmentRouter = Router()

assigmentRouter.get('/getAll', AssigmentController.getAll)
assigmentRouter.get('/getOne', AssigmentController.getOne)
assigmentRouter.post('/create', Validators.validateAssigment, AssigmentController.create)
assigmentRouter.put('/update/:id', Validators.validateAssigment,  AssigmentController.update)
assigmentRouter.delete('/delete/:id', AssigmentController.delete)