import { Router } from "express";
import { createProductController, findProductController, updateProductController, deleteProductController} from "../controllers/index.js";

export const productRoutes = new Router();

productRoutes.post("/", createProductController);
productRoutes.get('/:id', findProductController)
productRoutes.put('/:id', updateProductController)
productRoutes.delete('/:id', deleteProductController)
