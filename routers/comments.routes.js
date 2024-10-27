import { Router } from "express"
import { addCommentController, getCommentsController } from "../controllers/comments.controller.js"
import { commentMiddleware } from "../middlewares/comments.middleware.js"

export const commentsRouter = Router()

commentsRouter.post('/books/comment', commentMiddleware, addCommentController)
commentsRouter.get('/books/comments/:id', getCommentsController)