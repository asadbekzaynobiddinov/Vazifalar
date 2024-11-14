import { Coment } from "../modules/index.js"
import { statusCodes, ApiError } from "../utils/index.js"


export const addComentService = async (comment) => {
    try {
        const newComment = new Coment(comment)
        await newComment.save()
        return {
            success: true,
            status: statusCodes.CREATED,
            message: 'Coment qoldirildi'
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const getMyComentsService = async (userId, page, limit) => {
    try {
        const skip = (page - 1) * limit
        const comments = await Coment.find({userId: userId}).skip(skip).limit(limit)
        if(!comments){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: 'Siz hali hech qanday comment qoldirmagansiz !!!'
            }
        }
        return {
            success: true,
            status: statusCodes.OK,
            message: comments
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const getAllComentsService = async (page, limit) => {
    try {
        const skip = (page - 1) * limit
        const comments = await Coment.find().skip(skip).limit(limit)
        if(!comments){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: 'Foydalanuvchilarning commentlari mavjud emas !!!'
            }
        }
        return {
            success: true,
            status: statusCodes.OK,
            message: comments
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const deleteComentService = async (id) => {
    try {
        await Coment.findByIdAndDelete(id)
        return {
            success: true,
            status: statusCodes.OK,
            message: "Coment muvaffaqiyatli o'chirildi"
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}