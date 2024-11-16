import { UsersController } from '../controllers/index.js'

import { Router } from 'express'

export const userRouter = Router()

userRouter.get('/getAll', UsersController.getAll)
userRouter.get('/getOne/:email', UsersController.getOne)
userRouter.post('/create', UsersController.create)
userRouter.put('/update/:email', UsersController.update)
userRouter.delete('/delete/:email', UsersController.delete)
