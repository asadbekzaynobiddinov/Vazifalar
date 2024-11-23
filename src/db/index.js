import { config } from '../config/index.js'
import knex from 'knex'

const db = knex({
    client: 'pg',
    connection: {
        user: config.db.user,
        password: config.db.password,
        host: config.db.host,
        port: config.db.port,
        database: config.db.database
    }
})

export default db