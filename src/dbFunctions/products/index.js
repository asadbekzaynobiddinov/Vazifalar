import { rules } from "eslint-config-prettier"
import pool from "../../database/index.js"
import { logger, statusCodes } from "../../utils/index.js"


export const createProducrsTable = async () => {
    try {
        const queryString = `
            CREATE TABLE IF NOT EXISTS products(
                id SERIAL PRIMARY KEY,
                category_id BIGINT NOT NULL,
                title VARCHAR(255) NOT NULL,
                picture VARCHAR(255),
                summary VARCHAR(255),
                description VARCHAR(255),
                price REAL NOT NULL,
                discount_type VARCHAR(255),
                discount_values REAL,
                tags VARCHAR(255),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (category_id) REFERENCES catories(id) ON DELETE CASCADE   
            )
        `
        await pool.query(queryString)
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}

export const addProduct = async (product) => {
    try {
        const {
            category_id,
            title,
            picture,
            summary,
            description,
            price,
            discount_type,
            discount_values,
            tags
        } = product
        const quertString = `
            INSERT INTO products(
                category_id,
                title,
                picture,
                summary,
                description,
                price,
                discount_type,
                discount_values,
                tags)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
            RESTURNING *
        `
        const result = await pool.query(quertString, [
            category_id,
            title,
            picture,
            summary,
            description,
            price,
            discount_type,
            discount_values,
            tags
        ])

        if (result.rows.length == 0) {
            return {
                success: false,
                status: statusCodes.BAD_REQUEST,
                message: "There was an error adding the product"
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

export const getAllProducts = async (page, limit) => {
    try {
        const offsett = (page - 1) * limit
        const quertString = `
            SELECT * FROM products LIMIT $1 OFFSET $2
        `
        const result = await pool.query(quertString, [limit, offsett])
        if (result.rows.length == 0) {
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: 'Products Not Found'
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

export const getProductById = async (id) => {
    try {
        const queryString = `
            SELECT * FROM products WHERE id = $1
        `
        const result = await pool.query(queryString, [id])
        if (result.rows.length == 0) {
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: "Products Not Found"
            }
        }
        return {
            success: true,
            status: statusCodes.OK,
            message: result.rows[0]
        }
    } catch (error) {
        logger.error(error)
        throw new Error(error);
    }
}

export const updateProduct = async (id, newData) => {
    try {
        const {
            category_id,
            title,
            picture,
            summary,
            description,
            price,
            discount_type,
            discount_values,
            tags
        } = newData
        const queryString = `
            UPDATE products SET 
                category_id = $1,
                title = $2,
                picture =$3,
                summary = $4, 
                description = $5,
                price = $6,
                discount_type = $7,
                discount_values =$8,
                tags = $9,
            WHERE id = $10
            RETURNING *
        `
        const result = await pool.query(queryString, [
            category_id,
            title,
            picture,
            summary,
            description,
            price,
            discount_type,
            discount_values,
            tags,
            id
        ])
        if(result.rows.length == 0){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: "Product Not Found"
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

export const deletProduct = async (id) => {
    try {
        const quertString = `
            DELETE FROM products WHERE id = $1 RETURNING *
        `
        const result = await pool.query(quertString, [id])
        if(rules.rows.length == 0){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: 'Product Not Found'
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