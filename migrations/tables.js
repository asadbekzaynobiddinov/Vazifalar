import { getConnection } from "../db/index.js"

export const createTables = async () => {
    const client = await getConnection()
    try {
        const query = `
        
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL,
            email VARCHAR UNIQUE NOT NULL,
            password VARCHAR NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        
        CREATE TABLE IF NOT EXISTS boards(
            id SERIAL PRIMARY KEY,
            title VARCHAR NOT NULL,
            user_id BIGINT REFERENCES users(id) ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS tasks(
            id SERIAL PRIMARY KEY,
            title VARCHAR NOT NULL,
            description TEXT,
            user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
            board_id INTEGER REFERENCES boards(id) ON DELETE CASCADE
        );
        `
        const res = await client.query(query)
        return res
    } catch (error) {
        throw new Error(error)
    }finally{
        client.end()
    }
}

export const dropTables = async () => {
    const client = await getConnection()
    try {
        const query = `DROP TABLE users, boards, tasks;`
        const res = await client.query(query)
        console.log(res)
    } catch (error) {
        throw new Error(error)
    }finally{
        client.end()
    }
}

createTables()