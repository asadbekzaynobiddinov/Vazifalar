import { AuthService } from "../service/index.js";

export const AuthControler = {
    register: async (req, res, next) => {
        try {
            const user = req.body
            const result = await AuthService.register(user)
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
            const user = req.body
            const result = await AuthService.login(user)
            if(!result.success){
                return res.status(result.status).send(result.message)
            }
            return res.status(result.status).send({
                access: result.accesToken, 
                refresh: result.refreshToken
            })
        } catch (error) {
            next(error)
        }
    }
}