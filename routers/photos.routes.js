import { Router } from "express"
import { addPhotoController, getPhotosController } from "../controllers/photos.controller.js"
import { validateUrlMiddleware } from "../middlewares/url.middleware.js"

export const photosRouter = Router()

photosRouter.post('/books/photo', validateUrlMiddleware, addPhotoController)
photosRouter.get('/books/photos/:id', getPhotosController)