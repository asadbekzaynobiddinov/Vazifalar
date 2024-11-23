import { CourseController } from "../controllers/index.js";
import { Router } from "express";
import Validators from '../middlewares/index.js'

export const courseRouter = Router()

courseRouter.get('/getAll', CourseController.getAll)
courseRouter.get('/getOne', CourseController.getOne)
courseRouter.post('/create', CourseController.create)
courseRouter.put('/update/:id', Validators.validateCourse, CourseController.update)
courseRouter.delete('/delete/:id', CourseController.delete)