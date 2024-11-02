import { registerService, loginService } from "../service/index.js"


export const registerController = async (req, res, next) => {
    try {
        const data = req.body
        const result = registerService(data)

        result ? res.send(result): res.send('OOPS')

    } catch (error) {
        next(error)
    }
}

export const loginController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await loginService(data)

        result ? res.send(result): res.send('OOPS')

    } catch (error) {
        next(error)
    }
}