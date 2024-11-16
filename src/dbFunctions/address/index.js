import pool from '../../database/index.js'
import {logger} from '../../utils/index.js'


export const createAddressTable = async () => {
    try {
        const query = `
            CREATE TABLE IF NOT EXISTS address(
                id SERIAL PRIMARY KEY,
                user_id BIGINT NOT NULL,
                title VARCHAR(255) DEFAULT CURRENT_TIMESTAMP,
                address_line_1 VARCHAR(255),
                address_line_2 VARCHAR(255),
                country VARCHAR(255) NOT NULL,
                city VARCHAR(255) NOT NULL,
                postal_code VARCHAR(255) NOT NULL,
                phone_number VARCHAR(255) NOT NULL,
                landmark VARCHAR(255),
                FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );
        `
        await pool.query(query)
    } catch (error) {
        logger.error(error)
        throw new Error(error)        
    }
}