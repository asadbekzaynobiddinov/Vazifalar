import { logger } from '../../utils/index.js'
import pool from '../../database/index.js'

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

export const userExists = async (email, username, phone_number) => {
  try {
    const query = `
      SELECT id FROM users WHERE email = $1 OR username = $2 OR phone_number = $3
      `
      const result = await pool.query(query, [email, username, phone_number])
      if(result.rows.length > 0){
        return false
      }
      return true
  } catch (error) {
    logger.error(error)
  }
}

export const findByEmail = async (email) => {
  try {
    const query = `SELECT email, password FROM users WHERE email = $1`
    const result = await pool.query(query, [email])
    return result
  } catch (error) {
    logger.error(error)
    throw new Error(error)
  }
}