import { addComment } from "../service/export.js"


export const addCommentController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await addComment(data)
        return res.status(201).send({
            status: "Commented",
            commentText: result.text
        })
    } catch (error) {
        next(error)
    }
}