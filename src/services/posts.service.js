import { Post } from "../models/index.js";


export const PostService = {
    create: async (newPost) => {
        try {
            const Post = await Post.create(newPost)
            if(!Post){
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
            const Posts = await Post.findAll({
                offset,
                limit
            })
            if(!Posts){
                return {
                    success: false,
                    status: 404,
                    message: "Posts not found"
                }
            }
            return {
                succes: true,
                status200,
                message: Posts
            }
        } catch (error) {
            throw new Error(error.message)
        }
    },
    getOne: async (id) => {
        try {
            const Post = await Post.findOne({where: {id}})
            if(!Post){
                return {
                    success: false,
                    status: 404,
                    message: "Post not found"
                }
            }
            return {
                succes: true,
                status200,
                message: Post
            }
        } catch (error) {
            throw new Error(error.message)
        }
    },
    update: async (id, newPost) => {
        try {
            const updatedPost = await Post.update(newPost, {where: {id}})
            if(!updatedPost){
                return {
                    success: false,
                    status: 404,
                    message: "Post not found"
                }
            }
            return {
                succes: true,
                status200,
                message: "Post is updated"
            }
        } catch (error) {
            throw new Error(error)
        }
    },
    delete: async (id) => {
        try {
            const deletedPost = await Post.destroy({where: {id}})
            if(!deletedPost){
                return {
                    success: false,
                    status: 404,
                    message: "Post not found"
                }
            }
            return {
                succes: true,
                status200,
                message: "Post is deleted"
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}