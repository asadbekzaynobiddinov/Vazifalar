import { Router } from 'express'
import { PostController } from '../controllers/post.controller.js'
import { authGuard } from '../middlewares/auth.guard.js'

export const postRouter = Router()


postRouter.get('/', PostController.getAll)

postRouter.get('/:id', PostController.getOne)

postRouter.post('/', authGuard, PostController.create)

postRouter.put('/:id', authGuard, PostController.update)

postRouter.delete('/:id', authGuard, PostController.delete)
