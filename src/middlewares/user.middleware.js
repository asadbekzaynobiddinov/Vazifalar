import { userSchema } from "../validators/index.js"

export const validateUser = (req, res, next) => {
    try {
        const {error, data} = userSchema.validate(req.body, {abortEarly: false})
        if(error){
            const errorMessages = error.details.map(detail => detail.message)
            return res.send(errorMessages)
        }
        next()
    } catch (error) {
        logger.error(error)
        throw new Error(error)
    }
}