import { Router } from "express"
import { registerController, loginController } from "../controllers/auth.controller.js"
import { userMiddleware } from "../middleware/auth.middlevare.js"


export const authRouter = Router()

authRouter.post('/register', userMiddleware, registerController)
authRouter.post('/login', loginController)