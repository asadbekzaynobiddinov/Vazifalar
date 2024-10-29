import { getConnection } from "../database/connection.js"


export const addComment = async (data) => {
    const client = await getConnection()
    if (!client) {
        throw new Error("Database bilan bog'lanishda muammo yuz berdi !!!")
    }
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    try {
        const query = 'INSERT INTO comments (user_id, product_id, text) VALUES ($1, $2, $3) RETURNING *'
        const values = [data.user_id, data.product_id, data.text]
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (error) {
        throw new Error(error.message)
    } finally{
        client.end()
    }
}