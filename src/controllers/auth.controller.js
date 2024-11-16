import { loginService, registerService } from "../service/index.js";

export const registerController = async (req, res, next) => {
    try {
        const result = await registerService(req.body)
        res.send(result)
    } catch (error) {
        next(error)
    }
}


export const loginController = async (req, res, next) => {
    try {
        const result = await loginService(req.body)
        if(!result.success){
            return res.status(result.status).send(result.message)
        }
        return res.status(result.status).send({
            accesToken: result.access,
            refreshToken: result.refresh
        })
    } catch (error) {
        next(error)
    }
}