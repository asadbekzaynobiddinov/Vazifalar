import jwt, { decode } from 'jsonwebtoken'
import { config } from 'dotenv'
import { User } from '../models/users.model.js'

config()

export const checkUser = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Login qiling' });
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.decode(token, process.env.SECRET_KEY)
        const user = await User.findById(decoded.id)
        if(!user){
            return res.status(404).json({ message: "Foydalanuvchi topilmadi" })
        }
        req.user = user
        next()
    } catch (error) {
        
    }
}
