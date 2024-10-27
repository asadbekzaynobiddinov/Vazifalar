import { getConnection } from "./connection.js"


export const addUser = async (data) => {
    const client = await getConnection()
    if (typeof data === 'string') {
        data = JSON.parse(data)
    }
    if(client){
        try {
            const query = "INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING *;"
            const values = [data.username, data.email, data.password]
            const res = await client.query(query, values)
            return res.rows[0]
        } catch (error) {
            throw new Error(`Foydalanuvchini bazaga qo'shishda muammo yuz berdi.`)
        }finally{
            client.end()
        }
    }else{
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda hato yuiz berdi.`)
    }
}

export const checkUser = async (data) => {
    const client = await getConnection()
    if (typeof data === 'string') {
        data = JSON.parse(data)
    }
    if(client){
        try {
            const query = "SELECT * FROM users WHERE username = $1 AND password = $2;"
            const values = [data.username, data.password]
            const res = await client.query(query, values)
            return res.rows[0]
        } catch (error) {
            throw new Error(`Foydalanuvchini bazadan olishda muammo yuz berdi`)
        }finally{
            client.end()
        }
    }else{
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda hato yuiz berdi.`)
    }
}