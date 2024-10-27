import { addComment, getComments } from "../db_connection /comments.connection.js"
import { checkBookId, checkUserId } from "../db_connection /checkId.js"


export const addCommentController = async (req, res, next) => {
    try {
        const data = req.body
        const userExists = await checkUserId(data.user_id)
        const bookExists = await checkBookId(data.book_id)
        if(userExists && bookExists){
            const result = await addComment(data)
            res.status(200).send({
                status: "Success",
                ataddedComment: result
            })
        }else{
            res.status(404).send({
                status: 404,
                message: "Userning idsi yoki kitob idsi bazadan topilmadi"
            })
        }
    } catch (error) {
        next(error)
    }
}


export const getCommentsController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const comments = await getComments(id)
        res.status(200).send({
            status: 'Success',
            comments: comments
        })
    } catch (error) {
        next(error)
    }
}