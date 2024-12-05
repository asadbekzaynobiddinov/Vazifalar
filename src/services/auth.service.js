import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
import { User } from "../models/index.js"

export const AuthService = {
    register: async (user) => {
        try {
            const userExists = await User.findOne({ where: { email: user.email } })
            if (userExists) {
                return {
                    success: false,
                    status: 409,
                    message: `${user.email} already exists`
                }
            }
            const saltsRound = 10
            user.password = await bcrypt.hash(user.password, saltsRound)
            const newUser = await User.create(user)
            if(!newUser){
                return {
                    success: false,
                    status: 500,
                    message: `Error`
                }
            }
            return {
                success: true,
                status: 201,
                message: `Created`
            }
        } catch (error) {
            throw new Error(error.message)
        }
    },
    login: async (user) => {
        try {
            const {email, password} = user
            const currentUser = await User.findOne({where: {email}})
            if(!currentUser){
                return {
                    success: false,
                    status: 400,
                    message: `Email or password incorrect`
                }
            }
            const passwordEqual = await bcrypt.compare(currentUser.password, password)
            if(!passwordEqual){
                return {
                    success: false,
                    status: 400,
                    message: `Email or password incorrect`
                }
            }
            const payload = {
                id: currentUser.id
            }
            const accessToken = Jwt.sign(payload, 'supperSecret', {
                expiresIn: "1d"
            })
            const refreshToken = Jwt.sign(payload, 'supperSecret', {
                expiresIn: '3d'
            })
            return{
                success: true,
                status: 200,
                accessToken,
                refreshToken
            }
        } catch (error) {
            throw new Error(error.message)
        }
    }
}