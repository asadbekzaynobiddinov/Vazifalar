import { ProductController } from '../controllers/index.js'

import { Router } from 'express'

export const productRouter = Router()

productRouter.get('/getAll', ProductController.getAll)
productRouter.get('/getOne/:id', ProductController.getOne)
productRouter.post('/create', ProductController.create)
productRouter.put('/update/:id', ProductController.update)
productRouter.delete('/delete/:id', ProductController.delete)
