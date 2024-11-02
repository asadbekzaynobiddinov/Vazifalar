import {getConnection} from '../db/index.js'
import bcrypt from "bcrypt"

async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}

export const getAllUsers = async (page, pageSize) => {
    const client = await getConnection()
    try {
        const offset = (page - 1) * pageSize
        const query = `SELECT id, name, email, created_at FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2;`
        const values = [pageSize, offset]
        const res = await client.query(query, values) 
        return res.rows
    } catch (error) {
        throw new Error(error)
    }finally{
        client.end()
    }
}


export const getUserById = async (id) => {
    const client = await getConnection()
    try {
        const query = `SELECT id, name, email, created_at FROM users WHERE id = $1;`
        const res = await client.query(query, [id])
        return res.rows
    } catch (error) {
        throw new Error(error)        
    }finally{
        client.end()
    }
}


export const updateUser = async (id, data) => {
    const client = await getConnection()
    try {
        const query = `UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING name, email, created_at;`
        const values = [data.name, data.email, await hashPassword(data.password), id]
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }finally{
        client.end()
    }
}


export const deleteUser = async (id) => {
    const client = await getConnection()
    try {
        const query = `DELETE FROM users WHERE id = $1 RETURNING *;`
        const res = await client.query(query, [id])
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }finally{
        client.end()
    }
}

