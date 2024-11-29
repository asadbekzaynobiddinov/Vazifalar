import { Hono } from "hono";
import { AuthController } from "../controllers/index.js";
import { validateUser } from "../middlewares/index.js";

export const authRouter = new Hono()

authRouter.post('/auth/register', validateUser, AuthController.register)
authRouter.post('/auth/login', AuthController.login)
