import { authorSchema } from "../validator/author.validator.js"


export const authorMiddleware = (req, res, next) => {
    const {error} = authorSchema.validate(req.body)

    if(error){
        return res.status(400).send({
            status: "Failed",
            details: error.details
        })
    }
    next()
}