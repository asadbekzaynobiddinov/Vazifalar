import { 
    createCategoryController, getAllCategoriesController,
    updateCategoryController, deleteCategoryController
} from "../controllers/index.js";

import { Router } from 'express';
import { authGuard, roleGuard } from "../middleware/index.js";

export const categoryRouter = Router()

categoryRouter.post('/create', authGuard, roleGuard(['admin']), createCategoryController)
categoryRouter.get('/get', authGuard, roleGuard(['admin']), getAllCategoriesController)
categoryRouter.put('/update/:id', authGuard, roleGuard(['admin']), updateCategoryController)
categoryRouter.delete('/delete/:id', authGuard, roleGuard(['admin']), deleteCategoryController)
