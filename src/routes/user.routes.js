import {
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    createUser,
} from '../controllers/index.js'

import { Router } from 'express'

export const userRouter = Router()

userRouter.get('/all', getAllUsers)
userRouter.get('/all/:id', getOneUser)
userRouter.post('/new', createUser)
userRouter.put('/update/:id', updateUser)
userRouter.get('delete/:id', deleteUser)
