import { registerService, loginService } from "../service/index.js"


export const registerController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await registerService(data)
        if(result.success){
            return res.status(201).json({
                status: 'Created',
                yourProfile: result.data
            })
        }else{
            return res.status(400).json({
                status: 'Canceled',
                error: result.message
            })
        }
    } catch (error) {
        next(error)        
    }
}


export const loginController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await loginService(data)
        if(result.success){
            return res.status(200).json({
                status: 'Success',
                accessToken: result.accessToken,
                refreshToken: result.refreshToken
            })
        }else{
            return res.status(400).json({
                status: 'Canceled',
                error: result.message
            })
        }
    } catch (error) {
        next(error)
    }
}

export const userController = async (req, res, next) => {
    try {
        const user = req.user
        res.send(user)
    } catch (error) {
        next(error)
    }
}