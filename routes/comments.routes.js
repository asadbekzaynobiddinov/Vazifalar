import { Router } from "express"
import { 
    addCommentController, 
    getMyCommentsController, 
    getAllCommentsController, 
    deleteCommentController 
} from "../controller/index.js"
import { checkUser, roleGuard } from "../middlewares/index.js"

export const commentRouter = Router()

commentRouter.post('/create', checkUser, addCommentController)
commentRouter.get('/myComments', checkUser, getMyCommentsController)
commentRouter.get('/allComments', checkUser, roleGuard(['admin']), getAllCommentsController)
commentRouter.delete('/delete/:id', checkUser, roleGuard(['admin']), deleteCommentController)

