import { Router } from "express"
import { getAllUsersController, getOneUserController, updateUserController, deleteUserController } from "../controllers/index.js"

export const userRouter = Router()

userRouter.get('/users', getAllUsersController)
userRouter.get('/users/:id', getOneUserController)
userRouter.put('/users/:id', updateUserController)
userRouter.delete('/users/:id', deleteUserController)