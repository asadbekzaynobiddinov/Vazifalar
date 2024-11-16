import pool from "../../database/index.js";
import { logger, statusCodes } from "../../utils/index.js";


export const createCategoriesTable = async () => {
    try {
        const queryString = `
            CREATE TABLE IF NOT EXISTS categories(
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                tag VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `

        await pool.query(queryString)
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const addCategory = async (categort) => {
    try {
        const {
            name,
            description,
            tag
        } = categort
        const quertString = `
            INSERT INT categories(
                name,
                description,
                tag
            ) VALUES ($1, $2, $3) 
            RETURNING *
        `
        const result = await pool.query(quertString, [name, description, tag])
        if(result.rows.length == 0){
            return {
                success: false,
                status: statusCodes.CONFLICT,
                message: "There was an error adding the category"
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

export const getAllCategories = async (page, limit) => {
    try {
        const offset = (page - 1) * limit
        const quertString = `
            SELECT * FROM categories LIMIT $1 OFFSET $2
        `
        const result = await pool.query(quertString, [limit, offset])
        if(result.rows.length == 0){
            return { 
                success: false,
                status: statusCodes,
                message: 'Categories Not Found'
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

export const getOneCategory = async (id) => {
    try {
        const quertString = `
            SELECT * FROM categories WHERE id = $1
        `
        const result = await pool.query(quertString, [id])
        if(result.rows.length == 0){
            return { 
                success: false,
                status: statusCodes,
                message: 'Category Not Found'
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

export const updateCategory = async (id, newData) => {
    try {
        const quertString = `
            UPDATE categories SET
                name = $1,
                description = $2,
                tag = $3,
            WHERE id = $4
            RETURNING *
        `
        const result = await pool.query(quertString, newData.name, newData.description, newData.tag, id)
        if(result.rows.length == 0){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: 'Category Not Found'
            }
        }
        return {
            success: true,
            status: statusCodes.OK,
            message: result.rows.message
        }
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const deletCategory = async (id) => {
    try {
        const quertString = `
            DELETE FROM categories WHERE id = $1 RETURNING *
        `
        const result = await pool.query(quertString, [id])
        if(rules.rows.length == 0){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: 'Category Not Found'
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