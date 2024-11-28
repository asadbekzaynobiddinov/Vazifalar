import { HomeworkController } from "../controllers/index.js";
import { Router } from "express";
import Validators from '../middlewares/index.js'
import { authGuard, roleGuard } from "../middlewares/guard/index.js";

export const homeworkRouter = Router()

homeworkRouter.get('/getAll', HomeworkController.getAll)
homeworkRouter.get('/getOne', HomeworkController.getOne)
homeworkRouter.post('/create', authGuard, roleGuard('admin'), Validators.validateHomework, HomeworkController.create)
homeworkRouter.put('/update/:id', authGuard, roleGuard('admin'), Validators.validateHomework, HomeworkController.update)
homeworkRouter.delete('/delete/:id', authGuard, roleGuard('admin'), HomeworkController.delete)