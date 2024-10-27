import pkg from "pg"
const { Client } = pkg


export const getConnection = async () => {
    const client = new Client({
        user: "postgres",
        host: 'localhost',
        database: 'library',
        password: 'k7119zamu',
        port: 5432
    })
    try {
        await client.connect()
        return client
    } catch (error) {
        return null
    }
}