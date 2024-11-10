import { Router } from "express"
import { createArticleController, getAllArticles, updateArticle, deleteArticle } from "../controllers/index.js"
import { roleGuard, authGuard } from "../middleware/index.js"

export const articleRoter = Router()

articleRoter.post('/create', authGuard, roleGuard(['admin', 'superAdmin']), createArticleController)
articleRoter.get('/get', authGuard, roleGuard(['admin', 'superAdmin']), getAllArticles)
articleRoter.put('/update/:id', authGuard, roleGuard(['admin', 'superAdmin']), updateArticle)
articleRoter.delete('/delete/:id', authGuard, roleGuard(['admin', 'superAdmin']), deleteArticle)

