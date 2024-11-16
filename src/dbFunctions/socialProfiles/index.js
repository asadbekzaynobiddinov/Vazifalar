import pool from "../../database/index.js"
import { logger, statusCodes } from "../../utils/index.js"


export const createSocialTable = async () => {
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS social_platforms(
                id SERIAL PRIMARY KEY,
                user_id BIGINT,
                platform VARCHAR(255) NOT NULL,
                platform_user VARCHAR(255),
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );
        `
        await pool.query(query)
    } catch (error) {
        logger.error(error)
        throw new Error(error)        
    }
}

export const addSocial = async (data) => {
    try {
        const {user_id, platform, platform_user} = data
        const queryString = `
            INSERT INTO social_platforms(
                user_id,
                platform,
                platform_user
            ) VALUES ($1, $2, $3) RETURNING *
        `
        const result = await pool.query(queryString, [user_id, platform, platform_user])
        if(result.rows.length == 0){
            return {
                success: false,
                status: statusCodes.CONFLICT,
                message: 'Social yaratisgda muammo yuz berdi'
            }
        }
        return {
            success: true,
            status: statusCodes.CREATED,
            message: result.rows[0]
        }
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const getUserSocial = async (userId) => {
    try {
        const quertString = `
            SELECT * FOM social_paltforms WHERE user_id = $1
        `
        const result = await pool.query(quertString, [userId])
        if(result.rows.length == 0){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: 'Social Not Found'
            }
        }
        return {
            success: true,
            status: statusCodes.OK,
            message: result.rows[0]
        }
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const getAllSocials = async (page, limit) => {
    try {
        const offset = (page - 1) * limit
        const queryString = `
            SELECT * FROM social_platform LIMIT $1 OFFSET $2
        `
        const result = await pool.query(queryString, [limit, offset])
        if(result.rows.length == 0){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: 'Socials Not Found'
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

export const updateSocial = async (userId, data) => {
    try {
        const quertString = `
            UPDATE social_platforms SET 
                platform = $1,
                platform_user = $2
            WHERE user_id = $3
            RETURNING *
            `

        const result = await pool.query(quertString, [data.platform, data.platform_user, userId])
        if(result.rows.length == 0){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: "Social Not found"
            }
        }
        return {
            success: true,
            status: statusCodes.OK,
            message: result.rows[0]
        }
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const deleteSocial = async (id) => {
    try {
        const quertString = `
            DELETE FROM social_platform WHERE id = $1 RETURNING *
        `
        const result = await pool.query(quertString, [id])
        if(result.rows.at.length == 0){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: "Social not found"
            }
        }
        return {
            success: true,
            status: statusCodes.OK,
            message: result.rows[0]
        }
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}