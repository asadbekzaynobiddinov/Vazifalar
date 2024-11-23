import { AuthControler } from "../controllers/index.js";
import { Router } from "express";
import Validators from '../middlewares/index.js'

export const authRouter = Router()

authRouter.post('/register', Validators.validateUser, AuthControler.register)
authRouter.post('/login', AuthControler.login)
