import { AuthService } from "../services/auth.service.js";

export const AuthController = {
    register: async (req, res, next) => {
        try {
            const result = await AuthService.register(req.body)
            if(!result.success){
                return res.status(result.status).send(result.message)
            }
            return res.status(result.status).send(result.message)
        } catch (error) {
            next(error)
        }
    },
    login: async (req, res, next) => {
        try {
            const result = await AuthService.login(req.body)
            if(!result.success){
                return res.status(result.status).send(result.message)
            }
            return res.status(result.status).json({
                access: result.accessToken,
                refresh: result.refreshToken
            })
        } catch (error) {
            next(error)
        }
    }
}