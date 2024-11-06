import { postValidationSchema } from "../validator/post.validation.js"


export const postMiddleware = (req, res, next) => {
    const {error} = postValidationSchema.validate(req.body)

    if(error){
        return res.status(400).send({
            status: "Failed",
            details: error.details
        })
    }
    next()
}