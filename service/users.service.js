import { getConnection } from "../database/connection.js"


export const register = async (data) => {
    const client = await getConnection()
    if (!client) {
        throw new Error("Database bilan bog'lanishda muammo yuz berdi !!!")
    }
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    try {
        const query = 'INSERT INTO users(full_name, username, email, password, card_number) VALUES ($1, $2, $3, $4, $5) RETURNING *'
        const values = [data.full_name, data.username, data.email, data.password, data.card_number]
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (error) {
        throw new Error(error.message)
    } finally{
        client.end()
    }
}


export const getProfileInfo = async (username) => {
    const client = await getConnection()
    if(!client){
        throw new Error("Database bilan bog'lanishda muammo yuz berdi !!!")
    }
    try {
        const query = 'SELECT * FROM users WHERE username = $1;'
        const res = await client.query(query, [username])
        return res.rows[0]
    } catch (error) {
        throw new Error(error.message)
    }finally{
        client.end()
    }
}


export const updateProfile = async (username, data) => {
    const client = await getConnection()
    if(!client){
        throw new Error("Database bilan bog'lanishda muammo yuz berdi !!!")
    }
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    try {
        const query = 'UPDATE users SET full_name = $1, username = $2, email = $3, password = $4, card_number = $5 WHERE username = $6 RETURNING *;'
        const values = [data.full_name, data.username, data.email, data.password, data.card_number, username]
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (error) {
        throw new Error(error.message)
    }finally{
        client.end()
    }
}


export const deleteProfile = async (username) => {
    const client = await getConnection()
    if(!client){
        throw new Error("Database bilan bog'lanishda muammo yuz berdi !!!")
    }
    try {
        const query = 'DELETE FROM users WHERE username = $1 RETURNING *'
        const res = await client.query(query, [username])
        return res.rows[0]
    } catch (error) {
        throw new Error(error.message)
    }finally{
        client.end()
    }
}