import { getConnection } from "./connection.js"


export const addComment = async (data) => {
    const client = await getConnection()
    if (typeof data === 'string') {
        data = JSON.parse(data)
    }
    if(client){
        try {
            const query = "INSERT INTO comments(text, book_id, user_id) VALUES ($1, $2, $3) RETURNING *;"
            const values = [data.text, data.book_id, data.user_id]
            const res = await client.query(query, values)
            return res.rows[0]
        } catch (error) {
            throw new Error(`Kitobga izoh qo'shishda muammo yuz berdi.`)
        }finally{
            client.end()
        }
    }else{
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda hato yuiz berdi.`)
    }
}


export const getComments = async (id) => {
    const client = await getConnection();
    if(client) {
        try {
            const query = "SELECT * FROM comments WHERE book_id = $1;"
            const res = await client.query(query, [id]);
            return res.rows;
        } catch (error) {
            throw new Error(`Commentlarni bazadan olishda muammo yuz berdi.`);   
        }
    } else {
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda hato yuz berdi.`);
    }
}
