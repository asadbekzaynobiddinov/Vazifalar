import { Hono } from "hono";
import { PostsController } from "../controllers/index.js";
import { authGuard, validatePost } from "../middlewares/index.js";

export const postsRouter = new Hono()

postsRouter.get('/posts/getAll', authGuard, PostsController.getAll)
postsRouter.get('/posts/getOne', authGuard, PostsController.getOne)
postsRouter.post('/posts/create', authGuard, validatePost, PostsController.create)
postsRouter.put('/posts/update/:id', authGuard, validatePost, PostsController.update)
postsRouter.delete('/posts/delete/:id', authGuard, PostsController.delete)