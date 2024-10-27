export const validateBookData = (req, res, next) => {
    const {title, author, publication_date, genre, user_id} = req.body

    if(!title || !author || !publication_date || !genre || !user_id){
        return res.status(400).send({message: `Iltimos kitobning barcha ma'lumotlarini kiriting !!!`})
    }

    if(isNaN(Date.parse(publication_date))){
        return res.status(400).send({message: `Iltimos kitob nashr etilgan sanasini (yil-oy-kun) formatida kiriting !!!`})
    }

    if(isNaN(Number(user_id))){
        return res.status(400).send({message: `user_id raqam bo'lishi kerak !!!`})
    }

    next()
}