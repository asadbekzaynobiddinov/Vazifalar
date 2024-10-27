import { getConnection } from "./connection.js"


export const getAllBooks = async () => {
    const client = await getConnection()
    if (client) {
        try {
            const res = await client.query("SELECT * FROM books;")
            return res.rows
        } catch (error) {
            throw new Error(`Ma'lumotlarni olishda hato yuz berdi.`)
        } finally {
            await client.end()
        }
    } else {
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda hato yuiz berdi.`)
    }
}


export const getOneBook = async (id) => {
    const client = await getConnection()
    if(client){
        try {
            const res = await client.query("SELECT * FROM books WHERE id = $1", [id])
            return res.rows
        } catch (error) {
            throw new Error(`Kitob malumotlarini olishda hato yuz berdi.`) 
        }finally{
            await client.end()
        }
    }else{
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda hato yuiz berdi.`)
    }
}


export const addBook = async (data) => {
    const client = await getConnection()
    if (typeof data === 'string') {
        data = JSON.parse(data)
    }
    if(client){
        try {
            const query = "INSERT INTO books(title, author, publication_date, genre, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *;"
            const values = [data.title, data.author, data.publication_date, data.genre, data.user_id]
            const res = await client.query(query, values)
            return res.rows[0]
        } catch (error) {
            console.log('user idsi topilmadi')
        }finally{
            client.end()
        }
    }else{
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda hato yuiz berdi.`)
    }
}


export const updateBook = async (id, data) => {
    const client = await getConnection()
    if (typeof data === 'string') {
        data = JSON.parse(data)
    }
    if(client){
        try {
            const query = "UPDATE books set title = $1, author = $2, publication_date = $3, genre = $4 where id = $5 RETURNING *;"
            const values = [data.title, data.author, data.publication_date, data.genre, id]
            const res = await client.query(query, values)
            return res.rows[0]
        } catch (error) {
            throw new Error(`Kitob malumotlarini o'zgartirishda hato yuz berdi.`)   
        }finally{
            await client.end()
        }
    }else{
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda hato yuiz berdi.`)
    }
}

export const deleteBook = async (id) => {
    const client = await getConnection()
    if(client){
        try {
            const query = "DELETE FROM books WHERE id = $1 RETURNING *;"
            const res = await client.query(query, [id])
            return res.rows[0]
        } catch (error) {
            throw new Error(`Kitobni o'chirishda muammo yuz berdi.`)
        }finally{
            await client.end()
        }
    }else{
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda hato yuiz berdi.`)
    }
}
