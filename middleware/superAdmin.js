import jwt, { decode } from 'jsonwebtoken';
import { User } from '../model/index.js';
import { config } from 'dotenv'
config()



export const isSuperAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token topilmadi, iltimos tizimga kiring" });
        }

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
    
        const user = await User.findById(decoded.id);
        console.log(user)
        if (!user) {
            return res.status(404).json({ message: "Foydalanuvchi topilmadi" });
        }

        if (user.role !== 'SuperAdmin') {
            return res.status(403).json({ message: "Sizda SuperAdmin huquqlari mavjud emas" });
        }

        req.user = user;
        next();
        
    } catch (error) {
        return res.status(401).json({ message: "Token yaroqsiz yoki eskirgan", error: error.message });
    }
};
