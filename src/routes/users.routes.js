import { UsersController } from "../controllers/index.js";
import { Router } from "express";
import Validators from '../middlewares/index.js'
import { authGuard, roleGuard } from "../middlewares/guard/index.js";

export const usersRouter = Router()

usersRouter.get('/getAll', UsersController.getAll)
usersRouter.get('/getOne/:id', UsersController.getOne)
usersRouter.post('/create', authGuard, roleGuard('admin'), Validators.validateUser, UsersController.create)
usersRouter.put('/update/:id', authGuard, roleGuard('admin'), Validators.validateUser, UsersController.update)
usersRouter.delete('/delete/:id', authGuard, roleGuard('admin'), UsersController.delete)