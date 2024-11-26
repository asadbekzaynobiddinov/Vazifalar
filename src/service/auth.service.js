import db from "../db/index.js"
import { hashPassword, comparePassword, sendMail } from "../utils/index.js";
import { generateToken } from "../utils/index.js";
import { logger } from "../utils/index.js";


export const AuthService = {
    register: async (user) => {
        try {
            const existsUser = await db('users').select("*").where('email', '=', user.email)
            if (existsUser.length > 0) {
                return {
                    success: false,
                    status: 400,
                    message: "Email already exists"
                }
            }

            const otp = generateOtp()

            sendMail(
                user.email,
                'OTP',
                `<h1>Bu sizning OTP :${otp}iz buni begona qo'llarga bermang!</h1>`,
            )

            user.password = await hashPassword(user.password)
            const result = await db('users').insert(user).returning('*')
            if (result.length == 0) {
                return {
                    success: false,
                    status: 400,
                    message: `Ro'yxatdan o'tishda xato yuz berdi`
                }
            }
            const { password, ...registeredUser } = result[0]
            return {
                success: true,
                status: 200,
                message: registeredUser
            }
        } catch (error) {
            logger.error(error)
            throw new Error(error)
        }
    },
    login: async (user) => {
        try {
            const currentUser = await db('users').select('*').where('email', '=', user.email)
            if (currentUser.length == 0) {
                return {
                    success: false,
                    status: 400,
                    message: 'Email yoki parol hato'
                }
            }
            if (!await comparePassword(user.password, currentUser[0].password)) {
                return {
                    success: false,
                    status: 400,
                    message: 'Email yoki parol hato !!!'
                }
            }

            const payload = {
                sub: currentUser[0].email,
                role: currentUser[0].role
            }

            const accesToken = await generateToken('access', payload)
            const refreshToken = await generateToken('refresh', payload)

            return {
                success: true,
                status: 200,
                accesToken,
                refreshToken
            }

        } catch (error) {
            logger.error(error)
            throw new Error(error)
        }
    }
}