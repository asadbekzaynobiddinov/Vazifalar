import { getConnection } from "../database/connection.js"

export const addProduct = async (data) => {
    const client = await getConnection()
    if (!client) {
        throw new Error("Database bilan bog'lanishda muammo yuz berdi !!!")
    }
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    try {
        const query = 'INSERT INTO product (name, count, price, category) VALUES ($1, $2, $3, $4) RETURNING *'
        const values = [data.name, data.count, data.price, data.category]
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (error) {
        throw new Error(error.message)
    } finally{
        client.end()
    }
}


export const getProductInfo = async (id) => {
    const client = await getConnection()
    if(!client){
        throw new Error("Database bilan bog'lanishda muammo yuz berdi !!!")
    }
    try {
        const query = 'SELECT * FROM product WHERE id = $1;'
        const res = await client.query(query, [id])
        return res.rows[0]
    } catch (error) {
        throw new Error(error.message)
    }finally{
        client.end()
    }
}


export const updateProduct = async (id, data) => {
    const client = await getConnection()
    if(!client){
        throw new Error("Database bilan bog'lanishda muammo yuz berdi !!!")
    }
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    try {
        const query = 'UPDATE product SET name = $1, count = $2, price = $3, category = $4 WHERE id = $5 RETURNING *;'
        const values = [data.name, data.count, data.price, data.category, id]
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (error) {
        throw new Error(error.message)
    }finally{
        client.end()
    }
}


export const deleteProduct = async (id) => {
    const client = await getConnection()
    if(!client){
        throw new Error("Database bilan bog'lanishda muammo yuz berdi !!!")
    }
    try {
        const query = 'DELETE FROM product WHERE id = $1 RETURNING *'
        const res = await client.query(query, [id])
        return res.rows[0]
    } catch (error) {
        throw new Error(error.message)
    }finally{
        client.end()
    }
}