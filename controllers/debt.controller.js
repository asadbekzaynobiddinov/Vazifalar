import { createDebt, updateDebt, deleteDebt, getAllDebts, getOneDebt } from "../services/index.js";

export const createDebtController = async (req, res, next) => {
    try {
        const newDebt = req.body
        const debtData = await createDebt(newDebt)
        res.status(201).send({
            status: "Created",
            data: newDebt,
        })
    } catch (error) {
        next(error)
    }
}

export const updateDebtController = async (req, res, next) => {
    try {
        const debtId = req.params.id
        const newData = req.body
        await updateDebt(debtId, newData)
        res.status(200).send({
            status: "Updated",
            id: debtId,
        })
    } catch (error) {
        next(error)
    }
}

export const deleteDebtController = async (req, res, next) => {
    try {
        const debtId = req.params.id
        await deleteDebt(debtId)
        res.status(200).send({
            status: "Deleted",
            id: debtId,
        })
    } catch (error) {
        next(error)
    }
}

export const getDebtsController = async (req, res, next) => {
    try {
        const debts = await getAllDebts()
        res.status(200).send({
            status: "Success",
            data: debts,
        })
    } catch (error) {
        next(error)
    }
}

export const getoneDebtController = async (req, res, next) => {
    try {
        const debt = await getOneDebt(req.params.id)
        return res.status(200).send({
            status: 'Success',
            data: debt
        })
    } catch (error) {
        next(error)
    }
}