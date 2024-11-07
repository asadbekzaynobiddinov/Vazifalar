import { Router } from "express"
import { registerAdminController, getAllUsersController, updatedUserController, deleteUseController } from "../controllers/index.js"
import { isSuperAdmin } from "../middleware/superAdmin.js"

export const usersRouter = Router()

usersRouter.post('/admin', isSuperAdmin, registerAdminController)
usersRouter.get('/all', isSuperAdmin, getAllUsersController)
usersRouter.put('/update/:id', isSuperAdmin, updatedUserController)
usersRouter.delete('/delete/:id', isSuperAdmin, deleteUseController)