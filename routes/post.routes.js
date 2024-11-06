import { Router } from "express"
import { createPostController, getAllPostsController, updatPostController, deletePostController } from "../controller/post.controller.js"
import { postMiddleware } from "../middleware/post.middleware.js" 

export const postRouter = Router()

postRouter.post('/create', postMiddleware, createPostController)
postRouter.get('/all/:id', getAllPostsController)
postRouter.delete('/delete/:id', deletePostController)
postRouter.put('/update/:id', postMiddleware, updatPostController)

