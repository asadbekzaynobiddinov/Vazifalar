import {
    getAllUsers,
    getOneUser,
    updateUser,
    deleteUser,
    createUser,
    emailExists,
    usernamelExists,
    phoneNumberExists
} from '../dbFunctions/index.js'


export const UsersService = {
    getAll: async (page, limit) => {
        try {
            const result = await getAllUsers(page, limit)
            return result
        } catch (error) {
            throw new Error(error)
        }
    },
    getOne: async (email) => {
        try {
            const result = await getOneUser(email)
            return result
        } catch (error) {
            throw new Error(error)
        }
    },
    create: async (newUser) => {
        try {
            if(!await emailExists(newUser.email)){
                return {
                    success: false,
                    status: 400,
                    message: 'Email already exists' 
                }
            }
            if(!await usernamelExists(newUser.username)){
                return {
                    success: false,
                    status: 400,
                    message: 'Username already exists' 
                }
            }
            if(!await phoneNumberExists(newUser.phone_number)){
                return {
                    success: false,
                    status: 400,
                    message: 'Phone Number already exists' 
                }
            }
            const result = await createUser(newUser)
            return result
        } catch (error) {
            throw new Error(error)
        }
    },
    update: async (email, newUserData) => {
        try {
            const result = await updateUser(email, newUserData)
            return result
        } catch (error) {
            throw new Error(error)
        }
    },
    delete: async (email) => {
        try {
            const result = await deleteUser(email)
            return result
        } catch (error) {
            throw new Error(error)
        }
    }
}