import { getConnection } from "./connection.js"


export const checkUserId = async (user_id) => {
    const client = await getConnection()
    if (client) {
        try {
            const res = await client.query("SELECT id FROM users WHERE id = $1;", [user_id])
            return res.rowCount > 0
        } catch (error) {
            throw new Error(`Ma'lumotlarni olishda xato yuz berdi.`)
        } finally {
            await client.end()
        }
    } else {
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda xato yuz berdi.`)
    }
}

export const checkBookId = async (book_id) => {
    const client = await getConnection()
    if (client) {
        try {
            const res = await client.query("SELECT id FROM books WHERE id = $1;", [book_id])
            return res.rowCount > 0
        } catch (error) {
            throw new Error(`Ma'lumotlarni olishda xato yuz berdi.`)
        } finally {
            await client.end()
        }
    } else {
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda xato yuz berdi.`)
    }
}