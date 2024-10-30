import { Router } from "express";
import { createCategoryController,findCategoryController, updateCategoryController, deleteCategoryController } from "../controllers/index.js";


export const categoryRoutes = new Router();

categoryRoutes.post("/", createCategoryController);
categoryRoutes.get('/:id', findCategoryController)
categoryRoutes.put('/:id', updateCategoryController)
categoryRoutes.delete('/:id', deleteCategoryController)