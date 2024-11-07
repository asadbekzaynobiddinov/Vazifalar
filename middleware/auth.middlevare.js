import { userValidator } from "../validators/users.validator.js"
import { User } from "../model/index.js"


export const userMiddleware = async (req, res, next) => {
    try {
        const { error } = userValidator.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map(err => err.message);
            return res.status(400).json({
                success: false,
                errors: errors
            });
        }

        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({
                success: false,
                error: `Bu email allaqachon ro'yxatdan o'tgan`
            });
        }

        next();    
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Xatolik yuz berdi'
        });
    }
}