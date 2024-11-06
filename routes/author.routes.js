import { Router } from "express"
import { createAuthorController, getAllauthorsController, updatAuthorController, deleteAuthorController } from "../controller/author.controller.js"
import { authorMiddleware } from "../middleware/author.middleware.js"

export const authorRouter = Router()

authorRouter.post('/create', authorMiddleware, createAuthorController)
authorRouter.get('/all', getAllauthorsController)
authorRouter.put('/update/:id', authorMiddleware, updatAuthorController)
authorRouter.delete('/delete/:id', deleteAuthorController)