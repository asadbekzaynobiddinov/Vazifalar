import { Router } from "express"
import { addProductController, getProductInfoController, updateProductController, deleteProductController, updateProfileController } from "../controllers/export.js"
import { validateProductData } from "../middleware/product.middleware.js"

export const productsRouter = Router()

productsRouter.post('/products/add', validateProductData, addProductController)
productsRouter.get('/products/get/:id', getProductInfoController)
productsRouter.put('/products/update/:id', validateProductData, updateProfileController)
productsRouter.delete('/products/delete/:id', deleteProductController)