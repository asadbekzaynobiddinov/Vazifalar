import { userValidator } from "../validators/index.js"
import { User } from "../models/users.model.js"

export const authMiddleware = async (req, res, next) => {
    try {
        const {error} = userValidator.validate(req.body, {abortEarly: false})
        if(error){
            const errors = error.details.map(err => err.message)
            return res.status(400).json({
                status: "Rejected",
                message: errors
            })
        }
        const user = await User.findOne({username: req.body.username})
        if(user){
            return res.status(400).json({
                status: "Rejected",
                message: `${req.body.username} nomli foydalanuvchi allaqachon mavjud`
            })
        }
        next()
    } catch (error) {
        return res.status(500).send({
            status: "Rejected",
            message: error
        })
    }
}
