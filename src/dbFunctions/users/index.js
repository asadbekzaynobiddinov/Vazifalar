import pool from "../../database/index.js";
import { logger, statusCodes } from "../../utils/index.js";


export const CreateUsersTable = async () => {
    try {
        // await pool.query(`
        //     CREATE TYPE USER_ROLE AS ENUM('user', 'admin', 'manager');
        //   `)

        await pool.query(`
             CREATE TABLE IF NOT EXISTS users (
               id SERIAL PRIMARY KEY,
               name VARCHAR,
               email VARCHAR UNIQUE NOT NULL,
               password VARCHAR NOT NULL,
               role USER_ROLE DEFAULT 'user',
               avatar VARCHAR,
               username VARCHAR UNIQUE NOT NULL,
               birth_of_date DATE,
               phone_number VARCHAR UNIQUE NOT NULL,
               is_active BOOLEAN DEFAULT false,
               created_at TIMESTAMPTZ,
               updated_at TIMESTAMPTZ
             )
           `)
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const createUser = async (user) => {
    try {

        const {
            name,
            email,
            password,
            avatar,
            username,
            birth_of_date,
            phone_number } = user

        const quertString = `
            INSERT INTO users(
                name,
                email, 
                password, 
                avatar, 
                username, 
                birth_of_date, 
                phone_number) 
            VALUES (
                $1, 
                $2, 
                $3, 
                $4, 
                $5, 
                $6, 
                $7) 
            RETURNING 
                name,
                email,
                username, 
                birth_of_date, 
                phone_number;
            `
        const result = await pool.query(quertString, [
            name,
            email,
            password,
            avatar,
            username,
            birth_of_date,
            phone_number
        ])
        return {
            success: true,
            status: statusCodes.CREATED,
            message: result.rows[0]
        }
    } catch (error) {
        throw new Error(error)
    }
}

export const emailExists = async (email) => {
    try {
        const query = `
            SELECT id FROM users WHERE email = $1;
        `
        const result = await pool.query(query, [email])
        if (result.rows.length > 0) {
            return false
        }
        return true
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const usernamelExists = async (username) => {
    try {
        const query = `
            SELECT id FROM users WHERE username = $1;
        `
        const result = await pool.query(query, [username])
        if (result.rows.length > 0) {
            return false
        }
        return true
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const phoneNumberExists = async (phone_number) => {
    try {
        const query = `
            SELECT id FROM users WHERE phone_number = $1;
        `
        const result = await pool.query(query, [phone_number])
        if (result.rows.length > 0) {
            return false
        }
        return true
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const getAllUsers = async (page, limit) => {
    try {
        const offset = (page - 1) * limit
        const quertString = `
            SELECT 
                id,
                name,
                email,
                role,
                avatar,
                username,
                birth_of_date,
                phone_number,
                is_active,
                created_at,
                updated_at
            FROM users LIMIT $1 OFFSET $2;
        `

        const result = await pool.query(quertString, [limit, offset])

        if (result.rows.length == 0) {
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: "Users Not Found"
            }
        }
        return {
            success: true,
            status: statusCodes.OK,
            message: result.rows
        }
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const updateUser = async (email, newUser) => {
    try {
        const {
            name,
            password,
            avatar,
            username,
            birth_of_date,
            phone_number } = newUser

        const queryString = `
            UPDATE users SET 
                name = $1,  
                password = $2,
                avatar = $3,
                username $4,
                birth_of_date = $5,
                phone_number = $6,
            WHERE email = $7
            RETURNING
                name,
                email,
                avatar,
                username,
                birth_of_date,
                phone_number;
        `

        const result = await pool.query(queryString, [
            name,
            password,
            avatar,
            username,
            birth_of_date,
            phone_number,
            email
        ])

        if(result.rows.length == 0){
            return{
                success: false,
                message: "User not found"
            }
        }

        return {
            success: true,
            message: result.rows[0]
        }
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const deleteUser = async (email) => {
    try {
        const quertString = `
            DELETE FROM users WHERE email = $1 RETURNING *;
        `

        const result = await pool.query(quertString, [email])

        if(result.rows.length == 0){
            return {
                success: false,
                message: "User Not Found"
            }
        }
        return {
            success: true,
            message: result.rows[0]
        }

    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const getOneUser = async (email) => {
    try {
        const query = `
            SELECT id FROM users WHERE email = $1;
        `
        const result = await pool.query(query, [email])
        if (result.rows.length == 0) {
            return {
                success: false,
                message: 'User Not Found'
            }
        }
        return {
            success: true,
            message: result.rows[0]
        }
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}