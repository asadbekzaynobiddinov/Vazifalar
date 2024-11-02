import { getAllUsers, getUserById, updateUser, deleteUser } from "../model/index.js"


export const getAllUsersService = async (page, pageSize) => {
    const result = await getAllUsers(page, pageSize)
    if(result){
        return result
    }else{
        return null
    }
}


export const getOneUsersService = async (id) => {
    const result = await getUserById(id)
    if(result){
        return result
    }else{
        return null
    }
}


export const updateUserService = async (id, data) => {
    if(typeof data == 'string'){
        data = JSON.parse(data)
    }
    const result = await updateUser(id, data)
    if(result){
        return result
    }else{
        return null
    }
}


export const deleteUserService = async (id) => {
    const result = await deleteUser(id)
    if(result){
        return result
    }else{
        return null
    }
}
