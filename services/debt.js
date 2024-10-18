import {writeDebtDb, readDebtDb} from './db.js'
import path from 'path'
import { v4 } from 'uuid'

const dbFilePath = path.join(
    import.meta.dirname,
    "..",
    "database",
    "debt.json"
)

export const createDebt = async (debt) => {
    const id = v4()
    debt.id = id

    const debts = (await readDebtDb(dbFilePath)) || []

    debts.push(debt)

    await writeDebtDb(dbFilePath, debts)
    return debt
}

export const getAllDebts = () => {
    const debts = readDebtDb(dbFilePath)
    if (!debts) {
        throw new Error("Qarz topilmadi")
    }
    return debts
}

export const getOneDebt = (id) => {
    const debts = readDebtDb(dbFilePath)
    const debt = debts.find(debt => debt.id == id)
    if (!debt) {
        throw new Error("Qarz topilmadi")
    }
    return debt
}

export const updateDebt = (id, newData) => {
    const debts = readDebtDb(dbFilePath)
    let debtFound = false

    for (let debt of debts) {
        if (debt.id == id) {
            Object.assign(debt, newData)
            debtFound = true
            break
        }
    }

    if (debtFound) {
        writeDebtDb(dbFilePath, debts)
    } else {
        throw new Error(`Qarz ${id} topilmadi`)
    }
}

export const deleteDebt = (id) => {
    const debts = readDebtDb(dbFilePath)
    const newDebts = debts.filter(debt => debt.id != id)

    if (debts.length === newDebts.length) {
        throw new Error(`Qarz ${id} topilmadi`)
    } else {
        writeDebtDb(dbFilePath, newDebts)
    }
}

