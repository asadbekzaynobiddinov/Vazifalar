import {registerController, loginController} from '../controllers/index.js'
import { Router } from 'express'

export const authRouter = Router()

authRouter.post('/register', registerController)
authRouter.post('/login', loginController)