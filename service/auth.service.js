import { User } from "../models/index.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { config } from "dotenv"

config()

export const registerService = async (data) => {
    try {
        const {email} = data
        const emailExists = await User.exists({email: email})
        if(emailExists){
            return {
                success: false,
                message: `"${email}" emailli foydalanuvchi allaqachon mavjud`
            }
        }
        const saltsRound = 10
        data.password = await bcrypt.hash(data.password, saltsRound)
        const newUser = new User(data)
        const res = await newUser.save()
        const userObject = newUser.toObject()
        delete userObject.password
        return {
            success: true,
            data: userObject
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}


export const loginService = async (data) => {
    try {
        const {email, password} = data
        const user = await User.findOne({email: email})
        if(!user){
            return {
                success: false,
                message: `"${email}" emailli foydalanuvchi topilmadi`
            }
        }
        const correctPassword = await bcrypt.compare(password, user.password)
        if(!correctPassword){
            return {
                success: false,
                message: `email yoki parol hato`
            }
        }
        const token = jwt.sign({id: user._id}, process.env.SECRET_KEY)
        return {
            success: true,
            token: token
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}