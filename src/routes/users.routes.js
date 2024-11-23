import { UsersController } from "../controllers/index.js";
import { Router } from "express";
import Validators from '../middlewares/index.js'

export const usersRouter = Router()

usersRouter.get('/getAll', UsersController.getAll)
usersRouter.get('/getOne/:id', UsersController.getOne)
usersRouter.post('/create', Validators.validateUser, UsersController.create)
usersRouter.put('/update/:id', Validators.validateUser,UsersController.update)
usersRouter.delete('/delete/:id', UsersController.delete)