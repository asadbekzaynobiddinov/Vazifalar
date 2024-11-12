import { Comment } from "../models/index.js"

export const addComment = async (comment) => {
    try {
        const newComment = new Comment(comment)
        await newComment.save()
        return {
            success: true,
            message: 'Comment qoldirildi'
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}


export const getMyComments = async (userId, page, limit) => {
    try {
        const skip = (page - 1) * limit
        const comments = await Comment.find({userId: userId}).skip(skip).limit(limit)
        if(!comments){
            return {
                success: false,
                message: 'Siz hali hech qanday comment qoldirmagansiz !!!'
            }
        }
        return {
            success: true,
            yourComments: comments
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}


export const getAllComments = async (page, limit) => {
    try {
        const skip = (page - 1) * limit
        const comments = await Comment.find().skip(skip).limit(limit)
        if(!comments){
            return {
                success: false,
                message: 'Foydalanuvchilarning commentlari mavjud emas !!!'
            }
        }
        return {
            success: true,
            yourComments: comments
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}


export const deleteComment = async (id) => {
    try {
        await Comment.findByIdAndDelete(id)
        return {
            success: true,
            message: "Comment muvaffaqiyatli o'chirildi"
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}