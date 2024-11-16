import { config } from './src/config/index.js'
import app from './src/app.js'
import { logger } from './src/utils/logger.js'
import pool from './src/database/index.js'

const bootsrap = () => {
    try {
        app.listen(config.app.port, () => {
            logger.info(`Server is runnung on port: ${config.app.port}`)
        })
        logger.info(pool.query('SELECT now()'))
    } catch (error) {
        logger.error(error)
    }
}

bootsrap()
