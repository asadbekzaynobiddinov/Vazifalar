import { Router } from "express"
import { registerController, loginController, userController } from "../controller/index.js"
import { authMiddleware , checkUser} from "../middlewares/index.js"

export const authRouter = Router()

authRouter.post('/register',authMiddleware, registerController)
authRouter.post('/login', loginController)
authRouter.get('/me', checkUser, userController)