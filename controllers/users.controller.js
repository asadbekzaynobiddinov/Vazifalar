import { addUser, checkUser } from "../db_connection /users.connection.js"

export const addUserController = async (req, res, next) => {
    try {
        const data = req.body
        const check = await checkUser(data)
        if(!check){
            const result = await addUser(data)
            res.status(200).send({
                status: "Added",
                user: result
            })
        }else(
            res.status(300).send({
                message: `${data.username} nomli foydalanuvchi allaqachon mavjud iltimos boshqa bir username tanlang !!!`
            })
        )
        
    } catch (error) {
        next(error)
    }
}


export const checkUserController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await checkUser(data)
        if(result){
            res.status(200).send({
                status: "Found",
                user: result
            })
        }else{
            res.status(404).send({
                status: 404,
                message: `${data.username} bazada mavjud emas`
            })
        }
    } catch (error) {
        next(error)
    }
}