import { Router } from "express"
import { 
    addComentController, 
    getMyComentsController, 
    getAllComentsController, 
    deleteComentController 
} from "../controllers/index.js"
import { authGuard, roleGuard } from "../middleware/index.js"

export const comentRouter = Router()

comentRouter.post('/create', authGuard, addComentController)
comentRouter.get('/myComments', authGuard, getMyComentsController)
comentRouter.get('/allComments', authGuard, roleGuard(['admin']), getAllComentsController)
comentRouter.delete('/delete/:id', authGuard, roleGuard(['admin']), deleteComentController)
