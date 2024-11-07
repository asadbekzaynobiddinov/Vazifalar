import { Router } from "express"
import { createPostController, getAllPostsController, updatPostController, deletePostController } from "../controllers/index.js"


export const postRouter = Router()

postRouter.post('/create', createPostController)
postRouter.get('/all/:id', getAllPostsController)
postRouter.delete('/delete/:id', deletePostController)
postRouter.put('/update/:id', updatPostController)
