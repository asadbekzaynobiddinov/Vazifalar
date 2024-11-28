import { ExamController } from "../controllers/index.js";
import { Router } from "express";
import Validators from '../middlewares/index.js'
import { authGuard, roleGuard } from "../middlewares/guard/index.js";

export const examRouter = Router()

examRouter.get('/getAll', ExamController.getAll)
examRouter.get('/getOne', ExamController.getOne)
examRouter.post('/create', authGuard, roleGuard('admin'), Validators.validateExam, ExamController.create)
examRouter.put('/update/:id', authGuard, roleGuard('admin'), Validators.validateExam, ExamController.update)
examRouter.delete('/delete/:id', authGuard, roleGuard('admin'), ExamController.delete)