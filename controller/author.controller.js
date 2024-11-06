import { createAuthorService, getAllAuthorsService, updateAuthorService, deleteAuthorService} from "../service/author.service.js"

export const createAuthorController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await createAuthorService(data)
        if(result.success == true){
            res.status(200).send({
                status: 'Created',
                author: result.data
            })
        }
    } catch (error) {
        next(error)
    }
}


export const getAllauthorsController = async (req, res, next) => {
    try {
        const page = req.query.page || 1
        const limit = req.query.limit || 5
        const result = await getAllAuthorsService(page, limit)
        if(result.success == true){
            res.status(200).send({
                status: 'Success',
                authors: result.data
            })
        }
    } catch (error) {
        next(error)
    }
}



export const updatAuthorController = async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.bodt
        const result = await updateAuthorService(id, data)
        if(result.success == true){
            res.status(200).send({
                status: 'Updated',
                authors: result.data
            })
        }
    } catch (error) {
        next(error)
    }
}

export const deleteAuthorController = async (req, res, next) => {
    try {
        const id = req.params.id
        const result = await deleteAuthorService(id)
        if(result.success == true){
            res.status(200).send({
                status: 'Deleted',
                deletedAuthor: result.data
            })
        }
    } catch (error) {
        next(error)
    }
}