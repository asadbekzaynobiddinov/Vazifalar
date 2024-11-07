import { registerService, loginService } from "../service/index.js"


export const registerController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await registerService(data)
        if(result.success){
            return res.status(201).send({
                status: 'Created',
                data: result.newUser
            })
        }else{
            return res.status(400).send({
                status: "Rejected",
                error: result.error
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
        
        if (result.success) {
            return res.status(200).json({
                status: "Success",
                yourToken: result.token
            })
        }else{
            return res.status(400).json({
                status: "Rejected",
                message: result.error
            })
        }
    } catch (error) {
        next(error)
    }
}
