import {getConnection } from '../db/index.js'

export const getAllBoards = async (user_id, page, pageSize) => {
    const client = await getConnection()
    try {
        const offset = (page - 1) * pageSize
        const query = `SELECT * FROM boards WHERE user_id = $1 LIMIT $2 OFFSET $3;`
        const values = [user_id, pageSize, offset]
        const res = await client.query(query, values) 
        console.log(res.rows)
    } catch (error) {
        throw new Error(error)
    }finally{
        client.end()
    }
}


export const addBoard = async (data) => {
    const client = await getConnection()
    try {
        const query = `INSERT INTO boards(title, user_id) VALUES($1, $2) RETURNING *;`
        const values = [data.title, data.user_id]
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }finally {
        client.end()
    }
}


export const getBoardById = async (id) => {
    const client = await getConnection()
    try {
        const query = `SELECT * FROM boards WHERE id = $1;`
        const res = await client.query(query, [id])
        return res.rows
    } catch (error) {
        throw new Error(error)        
    }finally{
        client.end()
    }
}


export const updateBoards = async (id, data) => {
    const client = await getConnection()
    try {
        const query = `UPDATE boards SET title = $1, user_id = $2 WHERE id = $3 RETURNING *;`
        const values = [data.title, data.user_id, id]
        const res = await client.query(query, values)
        return res.rows[0] 
    } catch (error) {
        throw new Error(error)
    }finally{
        client.end()
    }
}


export const deleteBoard = async (id) => {
    const client = await getConnection()
    try {
        const query = `DELETE FROM boards WHERE id = $1 RETURNING *;`
        const res = await client.query(query, [id])
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }finally{
        client.end()
    }
}

