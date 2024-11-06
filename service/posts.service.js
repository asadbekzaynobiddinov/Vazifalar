import { Post } from '../model/post.model.js'


export const createPostService = async (data) => {
    try {

        if(typeof data == "string"){
            data = JSON.parse(data)
        }

        const post = new Post(data)
        const savedPost = await post.save()
        return { 
            success: true, 
            data: savedPost}
    } catch (error) {
        return { success: false, error: error.message }
    }
}


export const getAllPostsService = async (authorId, page = 1, limit = 10) => {
    try {
        const skip = (page - 1) * limit

        const posts = await Post.find({ authorId })
                                .skip(skip)
                                .limit(limit)

        const totalPosts = await Post.countDocuments({ authorId })

        return {
            success: true,
            data: posts,
            page,
            totalPages: Math.ceil(totalPosts / limit),
            totalPosts
        }

    } catch (error) {
        return { success: false, error: error.message }
    }
}



export const updatePostService = async (id, data) => {
    try {
        const newPost = Post.findByIdAndUpdate(id, data,{new: true}).select()
        return {
            success: true,
            newData: newPost
        }
    } catch (error) {
        return { success: false, error: error.message }
    }
}



export const deletePostService = async (id) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(id).select()
        return {
            success: true,
            deleted: deletedPost
        }
    } catch (error) {
        return { success: false, error: error.message }
    }
}