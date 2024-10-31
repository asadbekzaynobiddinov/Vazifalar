import { Router } from "express"
import { addUser, getAllUsers, getOneUser, updateUser, deleteUser } from "../controllers/export.js"


export const userRouter = Router()

userRouter.post('/create', addUser)
userRouter.get('/getAll', getAllUsers)
userRouter.get("/getOne/:id", getOneUser)
userRouter.put('/update/:id', updateUser)
userRouter.delete('/delete/:id', deleteUser)