import { getConnection } from "../db/index.js"


export const getAllTasks = async (boardId, page, pageSize) => {
    const client = await getConnection()
    try {
        const offset = (page - 1) * pageSize
        const query = `SELECT * FROM tasks WHERE board_id = $1 LIMIT $2 OFFSET $3`
        const values = [boardId, pageSize, offset]
        const res = await client.query(query, values)
        return res.rows
    } catch (error) {
        throw new Error(error)        
    }finally{
        client.end()
    }
}


export const getTaskById =  async (boardId, id) => {
    const client = await getConnection()
    try {
        const query = `SELECT * FROM tasks WHERE board_id = $1, id = $2;`
        const values = [boardId, id]
        const res = await client.query(query, values)
        return res.rows
    } catch (error) {
        throw new Error(error)        
    }finally{
        client.end()
    }
}


export const addTask = async (data) => {
    const client = await getConnection()
    try {
        const query = `INSERT INTO tasks(title, description, user_id, board_id) VALUES($1, $2, $3, $4) RETURNING *`
        const values = [data.title, data.description, data.user_id, data.board_id]
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }finally {
        client.end()
    }
}


export const updateTask = async (boardId, id, data) => {
    const client = await getConnection()
    try {
        const query = `UPDATE tasks SET title = $1, description = $2, user_id = $3,
                        board_id = $4 WHERE board_id = $5 AND id = $6 RETURNING *;`
        const values = [data.title, data.description, data.user_id, data.board_id, boardId, id]
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }finally{
        client.end()
    }
}


export const deleteTask = async  (boardId, id) => {
    const client = await getConnection()
    try {
        const query = `DELETE FROM tasks WHERE board_id = $1 AND id = $2 RETURNING *;`
        const values = [boardId, id]
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    }
}