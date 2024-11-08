import { Router } from "express"
import { createPostController, getAllPostsController, updatPostController, deletePostController } from "../controllers/index.js"
import { checkRole } from "../middleware/authorization.js"


export const postRouter = Router()

postRouter.post('/create',checkRole(['SuperAdmin', 'Admin', 'User']), createPostController)
postRouter.get('/all/:id',checkRole(['SuperAdmin', 'Admin', 'User']), getAllPostsController)
postRouter.delete('/delete/:id',checkRole(['SuperAdmin', 'Admin', 'User']), deletePostController)
postRouter.put('/update/:id',checkRole(['SuperAdmin', 'Admin', 'User']), updatPostController)
