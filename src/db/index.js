import knex from "knex";
import { config } from "dotenv";


config()


export default db = knex({
    client: 'pg',
    connection: {
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        database: process.env.DB_DATABASE
      }
})