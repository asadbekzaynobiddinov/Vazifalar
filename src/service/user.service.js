import pool from "../database/index.js";

export const getAllUsersService = async () => {
    try {
        const query = `SELECT * FROM users;`
        const allData = await pool.query(query) 
        return allData.rows
    } catch (error) {
        throw new Error(error)
    }
}