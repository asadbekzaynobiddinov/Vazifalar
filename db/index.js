import pkg from "pg"
const { Client } = pkg
import { config } from "dotenv"
config()

export const getConnection = async () => {
    try {
        const client = new Client({
            host: process.env.DB_HOST, 
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DATABASE
        })
        client.connect()
        return client
    } catch (error) {
        throw new Error(`Database bilan bog'lanishda xato yuz berdi`)
    }
}