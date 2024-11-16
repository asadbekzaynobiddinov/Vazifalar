import { loginController, registerController } from "../controllers/index.js"
import { Router } from "express"
import { validateUser } from "../middlewares/index.js"

export const authRouter = Router()

authRouter.post('/register',validateUser, registerController)
authRouter.post('/login', loginController)