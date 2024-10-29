import { addUserController, getProfileInfoController, updateProfileController, deleteProfileInfoController } from "../controllers/export.js"
import { validateUserPost, validateUserPut } from "../middleware/users.middleware.js"
import { Router } from "express"

export const userRouter = Router()

userRouter.post('/user/register', validateUserPost, addUserController)
userRouter.get('/user/profile/:username', getProfileInfoController)
userRouter.put('/user/update/:username', validateUserPut, updateProfileController)
userRouter.delete('/user/delete/:username', deleteProfileInfoController)