import { addPhoto, getPhotos } from "../db_connection /photos.connection.js"
import { checkBookId } from "../db_connection /checkId.js"


export const addPhotoController = async (req, res, next) => {
    try {
        const data = req.body
        const userExists = await checkBookId(data.book_id)
        if(userExists){
            const result = await addPhoto(data)
            res.status(200).send({
                status: "Success",
                ataddedPhoto: result
            })
        }else{
            res.status(404).send({
                status: 404,
                message: "Kitob idsi bazadan topilmadi"
            })
        }
    } catch (error) {
        next(error)
    }
}


export const getPhotosController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const photos = await getPhotos(id)
        res.status(200).send({
            status: 'Success',
            photos: photos
        })
    } catch (error) {
        next(error)
    }
}