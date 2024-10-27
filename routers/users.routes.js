import { Router } from "express"
import { addUserController, checkUserController } from "../controllers/users.controller.js"
import { validateUserData } from "../middlewares/users.middleware.js"

export const usersRouter = Router()

usersRouter.post('/users/register', validateUserData, addUserController)
usersRouter.post('/users/login', checkUserController)