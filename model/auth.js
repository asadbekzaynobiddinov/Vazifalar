import { getConnection } from "../db/index.js"
import bcrypt from 'bcrypt'




async function hashPassword(password) {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
}



async function verifyPassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}




export const register = async (data) => {
    const client = await getConnection()
    try {
        const query = `INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *;`
        const values = [data.name, data.email, await hashPassword(data.password)]
        const res = await client.query(query, values)
        return res.rows[0]
    } catch (error) {
        throw new Error(error)
    } finally {
        client.end()
    }
}




export const login = async (data) => {
    const client = await getConnection()
    try {
        const query = `SELECT * FROM users WHERE email = $1;`
        const values = [data.email]
        const res = await client.query(query, values);
        if (res.rows.length === 0) {
            throw new Error("Foydalanuvchi topilmadi");
        }
        const user = res.rows[0];
        const isPasswordValid = await verifyPassword(data.password, user.password);
        if (!isPasswordValid) {
            throw new Error("Parol noto'g'ri");
        }
        const { password, ...userWithoutPassword } = user;

        return userWithoutPassword;
    } catch (error) {
        throw new Error(error)
    } finally {
        client.end()
    }
}

