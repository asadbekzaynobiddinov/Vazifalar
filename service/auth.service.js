import { User } from "../model/index.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


export const registerService = async (data) => {
    try {
        const { role } = data

        if (role == 'SuperAdmin') {
            const superAdminExists = await User.exists({ role: 'SuperAdmin' });
            if (superAdminExists) {
                return {
                    success: false,
                    error: "SuperAdmin roli allaqachon mavjud, yangi SuperAdmin yaratib bo'lmaydi"
                }
            }
        }

        const existingUser = await User.findOne({ email: data.email });
        if (existingUser) {
            return {
                success: false,
                error: `Bu email allaqachon ro'yxatdan o'tgan`
            };
        }
        const saltRounds = 10
        data.password = await bcrypt.hash(data.password, saltRounds)
        const newUser = new User(data)
        const res = await newUser.save()

        const userObject = newUser.toObject()
        delete userObject.password

        return {
            success: true,
            newUser: userObject
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}


export const loginService = async (data) => {
    try {
        console.log(data)
        const user = await User.findOne({ email: data.email })
        console.log(user)
        if (!user) {
            return {
                success: false,
                error: 'Foydalanuvchi topilmadi'
            }
        }

        const isPasswordValid = await bcrypt.compare(data.password, user.password)

        if (!isPasswordValid) {
            return {
                success: false,
                error: `'Parol noto'g'ri`
            }
        }

        const token = jwt.sign(
            { id: user._id, role: user.role   },
            process.env.SECRET_KEY
        )

        return {
            success: true,
            token: token
        }

    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}
