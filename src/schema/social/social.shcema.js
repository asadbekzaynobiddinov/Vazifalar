import pool from "../../database/index.js";
import { logger } from "../../utils/index.js";


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