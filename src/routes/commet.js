import { Router } from 'express'
import { CommentController } from '../controllers/comment.controller.js'
import { authGuard } from '../middlewares/auth.guard.js'


export const commentRouter = Router()


commentRouter.get('/', CommentController.getAll)

commentRouter.get('/:id', CommentController.getOne)

commentRouter.post('/',authGuard, CommentController.create)

commentRouter.put('/:id',authGuard, CommentController.update)

commentRouter.delete('/:id', authGuard, CommentController.delete)
