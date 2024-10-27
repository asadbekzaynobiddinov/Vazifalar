import { getAllBooks, getOneBook, addBook, updateBook, deleteBook } from "../db_connection /books.connection.js"
import { checkUserId } from "../db_connection /checkId.js"

export const getAllBooksController = async (req, res, next) => {
    try {
        const books = await getAllBooks()
        res.status(200).send({
            status: "Success",
            data: books
        })
    } catch (error) {
        next(error)
    }
}

export const addBookController = async (req, res, next) => {
    try {
        const data = req.body;
        const userExists = await checkUserId(data.user_id)
        
        if (userExists) {
            const result = await addBook(data)
            res.status(200).send({
                status: "Added",
                addedData: result
            })
        } else {
            res.status(404).send({
                status: 404,
                message: `${data.user_id} id li foydalanuvchi topilmadi`
            })
        }
    } catch (error) {
        next(error)
    }
}

export const updateBookController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const data = req.body
        const result = await updateBook(id, data)
        res.status(400).send({
            status: "Updated",
            updatedData: result
        })
    } catch (error) {
        next(error)
    }
}

export const getOneBookController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const book = await getOneBook(id)
        res.status(200).send({
            status: "Success",
            data: book
        })
    } catch (error) {
        next(error)
    }
}

export const deleteBookController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const result = await deleteBook(id)

        if (result) {
            res.status(200).send({
                status: 'Deleted',
                deletedData: result
            })
        } else {
            res.status(400).send({ status: `Kitob mavjud emas yoki o'chirib bolingan` })
        }

    } catch (error) {
        next(error)
    }
}