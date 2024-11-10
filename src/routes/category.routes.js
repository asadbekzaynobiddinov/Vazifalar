import { Router } from "express"
import { createCategoryController, getAllCategories, updateCategory, deleteCategory } from "../controllers/index.js"
import { roleGuard, authGuard } from "../middleware/index.js"

export const categoryRoter = Router()

categoryRoter.post('/create', authGuard, roleGuard(['admin', 'superAdmin']), createCategoryController)
categoryRoter.get('/get', authGuard, roleGuard(['admin', 'superAdmin']), getAllCategories)
categoryRoter.put('/update/:id', authGuard, roleGuard(['admin', 'superAdmin']), updateCategory)
categoryRoter.delete('/delete/:id', authGuard, roleGuard(['admin', 'superAdmin']), deleteCategory)

