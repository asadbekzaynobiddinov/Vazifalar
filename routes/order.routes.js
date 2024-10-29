import { buyProductController } from "../controllers/export.js"
import { Router } from "express"

export const orderRouter = Router()

orderRouter.post('/order/buy', buyProductController)