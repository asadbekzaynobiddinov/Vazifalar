import pool from "../database/index.js";
import jwt from 'jsonwebtoken'
import {
    statusCodes,
    errorMessages,
    ApiError,
    logger,
} from "../utils/index.js";
import { userExists, findByEmail } from "../schema/index.js";


export const registerService = async (data) => {
    try {
        const { name, email, password, avatar, username, birth_of_date, phone_number } = data
        if (await userExists(email, username, phone_number)) {
            const query = `
            INSERT INTO users(name, email, password, avatar, username, birth_of_date, phone_number) 
            VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING name, email, username, birth_of_date, phone_number;
            `
            const values = [name, email, password, avatar, username, birth_of_date, phone_number]
            const result = await pool.query(query, values)
            return {
                success: true,
                status: statusCodes.OK,
                message: result.rows[0]
            }
        }
        return {
            success: false,
            status: statusCodes.CONFLICT,
            message: `${email}, ${username} va ${phone_number} lar allaqachon band qilingan`
        }
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}


export const logionService = async (data) => {
    try {
        const { email, password } = data
        const user = await findByEmail(email)
        if (Object.keys(user).length == 0) {
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: `${email} Topilmadi`
            }
        }
        if (user.password != password) {
            return {
                success: false,
                status: statusCodes.CONFLICT,
                message: 'Email yoki parol xato'
            }
        }
        const payload = {
            sub: email,
            role: currentUser.role,
        }
        const accessSecretKey = process.env.JWT_ACCESS_SECRET;
        const refreshSecretKey = process.env.JWT_REFRESH_SECRET;

        const accessToken = jwt.sign(payload, accessSecretKey, {
            expiresIn: process.env.JWT_ACCESS_EXPIRES_IN,
        });

        const refreshToken = jwt.sign(payload, refreshSecretKey, {
            expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
        });

        return {
            success: true,
            status: statusCodes.OK,
            access: accessToken,
            refresh: refreshToken,
        }
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}