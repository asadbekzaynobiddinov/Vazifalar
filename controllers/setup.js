import {createTables} from '../migrations/tables.js'

export const create = async (req, res) => {
    try {
        await createTables()
        res.send('OK')
    } catch (error) {
        console.log(error)
    }
}