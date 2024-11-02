import { Router } from "express"
import {create} from '../controllers/setup.js'

export const setupRouter = Router()

setupRouter.get('/setup', create)