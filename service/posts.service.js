import { Post } from '../model/posts.model.js'


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


export const getAllPostsService = async (userId, page, limit) => {
    try {
        const skip = (page - 1) * limit

        const posts = await Post.find({ userId })
                                .skip(skip)
                                .limit(limit)


        return {
            success: true,
            data: posts,
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