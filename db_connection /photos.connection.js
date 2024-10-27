import { getConnection } from "./connection.js"


export const addPhoto = async (data) => {
    const client = await getConnection()
    if (typeof data === 'string') {
        data = JSON.parse(data)
    }
    if(client){
        try {
            const query = "INSERT INTO photos(book_id, photo_url) VALUES ($1, $2) RETURNING *;"
            const values = [data.book_id, data.photo_url]
            const res = await client.query(query, values)
            return res.rows[0]
        } catch (error) {
            throw new Error(`Kitobga rasm qo'shishda muammo yuz berdi.`)
        }finally{
            client.end()
        }
    }else{
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda hato yuiz berdi.`)
    }
}


export const getPhotos = async (id) => {
    const client = await getConnection();
    if(client) {
        try {
            const query = "SELECT * FROM photos WHERE book_id = $1;"
            const res = await client.query(query, [id]);
            return res.rows;
        } catch (error) {
            throw new Error(`URL larni bazadan olishda muammo yuz berdi.`);   
        }
    } else {
        throw new Error(`Ma'lumotlar bazasi bilan bog'lanishda hato yuz berdi.`);
    }
}
