import { Router } from "express"
import { createCourseController, getAllCoursesController, updateCoursesController, deleteCourseController } from "../controller/index.js"
import { checkUser, roleGuard } from "../middlewares/index.js"

export const courseRouter = Router()

courseRouter.post('/create', checkUser, roleGuard(['admin']),createCourseController)
courseRouter.get('/course', checkUser,roleGuard(['admin']), getAllCoursesController)
courseRouter.put('/update/:id', checkUser, roleGuard(['admin']), updateCoursesController)
courseRouter.delete('/delete/:id', checkUser, roleGuard(['admin']), deleteCourseController)

