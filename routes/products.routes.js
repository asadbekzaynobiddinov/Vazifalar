import { Router } from "express"
import { addProductController, getProductInfoController, updateProductController, deleteProductController, updateProfileController } from "../controllers/export.js"

export const productsRouter = Router()

productsRouter.post('/products/add', addProductController)
productsRouter.get('/products/get/:id', getProductInfoController)
productsRouter.put('/products/update/:id', updateProfileController)
productsRouter.delete('/products/delete/:id', deleteProductController)