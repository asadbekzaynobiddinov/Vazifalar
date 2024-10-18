import express from "express";
import { createDebtController, updateDebtController, deleteDebtController, getDebtsController, getoneDebtController} from '../controllers/index.js'

export const debtRouter = express.Router()


debtRouter.get("/", getDebtsController)
debtRouter.get("/:id", getoneDebtController)
debtRouter.post("/", createDebtController)
debtRouter.put("/:id", updateDebtController)
debtRouter.delete("/:id", deleteDebtController)
