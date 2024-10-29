import { register,getProfileInfo, updateProfile, deleteProfile } from "../service/export.js"

export const addUserController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await register(data)
        return res.status(201).send({
            status: "Created",
            newUser: result
        })
    } catch (error) {
        next(error)
    }
}

export const getProfileInfoController = async (req, res, next) => {
    try {
        const username = req.params.username
        const result = await getProfileInfo(username)
        if(result){
            return res.status(200).send({
                status: 'Success',
                yourProfile: result
            })
        }else{
            return res.send(`"${username}" bazadan topilmadi`)
        }
        
    } catch (error) {
        next(error)
    }
}

export const updateProfileController = async (req, res, next) => {
    try {
        const username = req.params.username
        const data = req.body
        const result = await updateProfile(username, data)
        const profile = await getProfileInfo(username)

        if(!profile){
            return res.send(`"${username}" nomli foydalanuvchi topilmadi`)
        }
        return res.status(200).send({
            status: 'Updated',
            yourProfile: result
        })
    } catch (error) {
        next(error)
    }
}

export const deleteProfileInfoController = async (req, res, next) => {
    try {
        const username = req.params.username
        const result = await deleteProfile(username)
        if(result){
            return res.status(200).send({
                status: 'Deleted',
                deletedProfile: result
            })
        }else{
            return res.status(404).send(`"${username}" nomli foydalanuvchi topilmadi !!!`)
        }
        
    } catch (error) {
        next(error)
    }
}