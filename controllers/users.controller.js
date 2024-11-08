import { registerAdmin, getAllUsers, updateUser, deleteUser, getMyAccountInfo } from "../service/index.js"


export const registerAdminController = async (req, res, next) => {
    try {
        const result = await registerAdmin(req.body)
        if(result.success){
            res.status(200).send({
                status: "Created",
                Admin: result.newUser
            })
        }else{
            return {
                status: "Rejected",
                error: result.error
            }
        }
    } catch (error) {
        next(error)
    }
}

export const getMyAccountInfoController = async (req, res, next) => {
    try {
        const result = await getMyAccountInfo(req.params.id)
        if(result.success){
            return res.status(200).json({
                status: 'Success',
                yourAccount: result.data
            })
        }else{
            return {
                status: "Rejected",
                error: result.error
            }
        }
    } catch (error) {
        next(error)
    }
}

export const getAllUsersController = async (req, res, next) => {
    try {
        const result = await getAllUsers()
        if(result.success){
            res.status(200).send({
                status: "Created",
                users: result.data
            })
        }else{
            return {
                status: "Rejected",
                error: result.error
            }
        }
    } catch (error) {
        next(error)
    }
}



export const updatedUserController = async (req, res, next) => {
    try {
        const result = await updateUser(req.params.id, req.body)
        if(result.success){
            res.status(200).send({
                status: "Updated",
                newUserData: result.updatedUser
            })
        }else{
            return {
                status: "Rejected",
                error: result.error
            }
        }
    } catch (error) {
        next(error)
    }
}



export const deleteUseController = async (req, res, next) => {
    try {
        const result = await deleteUser(req.params.id)
        if(result.success){
            res.status(200).send({
                status: "Deleted",
                message: result.message
            })
        }else{
            return {
                status: "Rejected",
                error: result.error
            }
        }
    } catch (error) {
        next(error)
    }
}