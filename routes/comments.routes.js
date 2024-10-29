import { addCommentController } from "../controllers/export.js"
import { Router } from "express"

export const commentRouter = Router()

commentRouter.post('/comment/post', addCommentController)