export const commentMiddleware = (req, res, next) => {
    const {text, book_id, user_id} = req.body
    
    if(!text || !book_id || !user_id){
        return res.status(400).send({message: `Iltimos kitobning barcha ma'lumotlarini kiriting !!!`})
    }
    next()
}