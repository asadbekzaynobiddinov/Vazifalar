import { LessonController } from "../controllers/index.js";
import { Router } from "express";
import Validators from '../middlewares/index.js'
import { authGuard, roleGuard } from "../middlewares/guard/index.js";

export const lessonRouter = Router()

lessonRouter.get('/getAll', LessonController.getAll)
lessonRouter.get('/getOne', LessonController.getOne)
lessonRouter.post('/create', authGuard, roleGuard('admin'), LessonController.create)
lessonRouter.put('/update/:id', authGuard, roleGuard('admin'), Validators.validateCourse, LessonController.update)
lessonRouter.delete('/delete/:id', authGuard, roleGuard('admin'), LessonController.delete)