import { createPostService, getAllPostsService, updatePostService, deletePostService } from "../service/posts.service.js"

export const createPostController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await createPostService(data)
        if(result.success == true){
            res.status(200).send({
                status: 'Created',
                Post: result.data
            })
        }
    } catch (error) {
        next(error)
    }
}


export const getAllPostsController = async (req, res, next) => {
    try {
        const id = req.params.id;
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        // Servis funksiyamizni chaqiramiz va natijani tekshiramiz
        const result = await getAllPostsService(id, page, limit);

        // Diagnostic print - result ob'ektini ko'rish uchun
        console.log("Result:", result);

        if(result.success){
            res.status(200).send({
                status: 'Success',
                Posts: result.data
            });
        } else {
            res.status(404).send({
                status: 'Fail',
                message: 'No posts found for this author.'
            });
        }
    } catch (error) {
        next(error);
    }
};



export const updatPostController = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.bodt
        const result = await updatePostService(id, data)
        if(result.success == true){
            res.status(200).send({
                status: 'Updated',
                Posts: result.data
            })
        }
    } catch (error) {
        next(error)
    }
}


// Bu yerda id authorning id si

export const deletePostController = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await deletePostService(id)
        if(result.success == true){
            res.status(200).send({
                status: 'Deleted',
                deletedPost: result.data
            })
        }
    } catch (error) {
        next(error)
    }
}