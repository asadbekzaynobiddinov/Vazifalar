import app from "./src/app.js"
import { config } from "./src/config/index.js"
import { logger } from "./src/utils/index.js"

const bootstarp = () => {
    app.listen(config.app.PORT, () => {
        logger.info(`Server is running on: ${config.app.PORT}`)
    })
}

bootstarp()