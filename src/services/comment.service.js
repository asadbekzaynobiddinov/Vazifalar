import { Comment } from "../models/index.js";


export const CommentService = {
    create: async (comment) => {
        try {
            const comment = await Comment.create(comment)
            if(!comment){
                return {
                    success: false,
                    status: 400,
                    message: "Not Created"
                }
            }
            return {
                success: true,
                status: 201,
                message: "Created"
            }
        } catch (error) {
            throw new Error(error.message)
        }
    },
    getAll: async (page, limit) => {
        try {
            const offset = (page - 1) * limit
            const comments = await Comment.findAll({
                offset,
                limit
            })
            if(!comments){
                return {
                    success: false,
                    status: 404,
                    message: "Comments not found"
                }
            }
            return {
                succes: true,
                status200,
                message: comments
            }
        } catch (error) {
            throw new Error(error.message)
        }
    },
    getOne: async (id) => {
        try {
            const comment = await Comment.findOne({where: {id}})
            if(!comment){
                return {
                    success: false,
                    status: 404,
                    message: "Comment not found"
                }
            }
            return {
                succes: true,
                status200,
                message: comments
            }
        } catch (error) {
            throw new Error(error.message)
        }
    },
    update: async (id, newComment) => {
        try {
            const updatedComment = await Comment.update(newComment, {where: {id}})
            if(!updatedComment){
                return {
                    success: false,
                    status: 404,
                    message: "Comment not found"
                }
            }
            return {
                succes: true,
                status200,
                message: "Comment is updated"
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    delete: async (id) => {
        try {
            const deletedComment = await Comment.destroy({where: {id}})
            if(!deletedComment){
                return {
                    success: false,
                    status: 404,
                    message: "Comment not found"
                }
            }
            return {
                succes: true,
                status200,
                message: "Comment is deleted"
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}