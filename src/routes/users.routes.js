import { Hono } from "hono";
import { UsersController } from "../controllers/index.js";
import { authGuard, validateUser} from "../middlewares/index.js";

export const usersRouter = new Hono()

usersRouter.get('/users/getAll', authGuard, UsersController.getAll)
usersRouter.get('/users/getOne', authGuard, UsersController.getOne)
usersRouter.post('/users/create', authGuard, validateUser, UsersController.create)
usersRouter.put('/users/update/:id', authGuard, validateUser, UsersController.update)
usersRouter.delete('/users/delete/:id', authGuard, validateUser, UsersController.delete)