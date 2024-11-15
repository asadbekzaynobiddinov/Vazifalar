import { logionService, registerService } from "../service/index.js";

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
        const result = await logionService(req.body)
        res.send(result)
    } catch (error) {
        next(error)
    }
}