import { CategoryController } from '../controllers/index.js'

import { Router } from 'express'

export const categoryRoter = Router()

categoryRoter.get('/getAll', CategoryController.getAll)
categoryRoter.get('/getOne/:id', CategoryController.getOne)
categoryRoter.post('/create', CategoryController.create)
categoryRoter.put('/update/:id', CategoryController.update)
categoryRoter.delete('/delete/:id', CategoryController.delete)
