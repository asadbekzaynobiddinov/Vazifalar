import { Hono } from "hono";
import { CommentController } from "../controllers/index.js";
import { authGuard, validateComment } from "../middlewares/index.js";

export const commentRouter = new Hono()

commentRouter.get('/comments/getAll', authGuard, CommentController.getAll)
commentRouter.get('/comments/getOne', authGuard, CommentController.getOne)
commentRouter.post('/comments/create', authGuard, validateComment, CommentController.create)
commentRouter.put('/comments/update/:id', authGuard, validateComment, CommentController.update)
commentRouter.delete('/comments/delete/:id', authGuard, CommentController.delete)