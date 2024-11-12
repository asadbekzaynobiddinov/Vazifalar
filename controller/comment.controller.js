import { addComment, getMyComments, getAllComments, deleteComment } from "../service/index.js"

export const addCommentController = async (req, res, next) => {
    try {
        let data = req.body
        data.userId = req.user._id
        const result = await addComment(data)
        if(!result){
            return res.status(409).send(result.message)
        }
        return res.status(200).send(result.message)
    } catch (error) {
        next(error)
    }
}

export const getMyCommentsController = async (req, res, next) => {
    try {
        const userId = req.user._id
        const page = req.query.page
        const limit = req.query.limit
        const result = await getMyComments(userId, page, limit)
        if(!result){
            return res.status(409).send(result.message)
        }
        return res.status(200).send(result.message)
    } catch (error) {
        next(error)
    }
}


export const getAllCommentsController = async (req, res, next) => {
    try {
        const page = req.query.page
        const limit = req.query.limit
        const result = await getAllComments(userId, page, limit)
        if(!result){
            return res.status(409).send(result.message)
        }
        return res.status(200).send(result.message)
    } catch (error) {
        next(error)
    }
}


export const deleteCommentController = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await deleteComment(id)
        if(!result){
            return res.status(409).send(result.message)
        }
        return res.status(200).send(result.message)
    } catch (error) {
        next(error)
    }
}
