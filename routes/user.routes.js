import { Router } from "express"
import { registerAdminController, getAllUsersController, updatedUserController, deleteUseController, getMyAccountInfoController } from "../controllers/index.js"
import { checkRole } from "../middleware/index.js"

export const usersRouter = Router()

usersRouter.get('/me/:id', checkRole(['SuperAdmin', 'Admin', 'User']), getMyAccountInfoController)
usersRouter.post('/admin', checkRole(['SuperAdmin', 'Admin']), registerAdminController)
usersRouter.get('/all', checkRole(['SuperAdmin', 'Admin']), getAllUsersController)
usersRouter.put('/update/:id', checkRole(['SuperAdmin', 'Admin']), updatedUserController)
usersRouter.delete('/delete/:id', checkRole(['SuperAdmin']), deleteUseController)