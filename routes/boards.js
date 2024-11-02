import { Router } from "express"
import { getAllBoardsController, getOneBoardController, updateBoardController, deleteBoardController, addBoardController } from "../controllers/index.js"

export const boardRouter = Router()

boardRouter.get('/boards', getAllBoardsController)
boardRouter.get('/boards/:id', getOneBoardController)
boardRouter.post('/boards', addBoardController)
boardRouter.put('/boards/:id', updateBoardController)
boardRouter.delete('/boards/:id', deleteBoardController)