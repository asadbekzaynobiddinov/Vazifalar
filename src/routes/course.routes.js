import { Router } from 'express'
import {
    createCourseController, getAllCoursesController,
    updateCourseController, deleteCourseController
} from '../controllers/index.js'
import { authGuard, roleGuard } from '../middleware/index.js'


export const courseRouter = Router()

courseRouter.post('/create', authGuard, roleGuard(['admin', 'superAdmin']), createCourseController)
courseRouter.get('/get', authGuard, roleGuard(['admin', 'superAdmin']), getAllCoursesController)
courseRouter.put('/update/:id', authGuard, roleGuard(['admin', 'superAdmin']), updateCourseController)
courseRouter.delete('/delete/:id', authGuard, roleGuard(['admin', 'superAdmin']), deleteCourseController)