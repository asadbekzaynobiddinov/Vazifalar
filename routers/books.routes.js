import { addBookController, getAllBooksController, updateBookController, getOneBookController, deleteBookController } from "../controllers/booksControllers.js";
import { validateBookData } from "../middlewares/books.middleware.js";
import { Router } from "express";

export const booksRouter = Router()

booksRouter.get('/books', getAllBooksController)
booksRouter.post('/books', validateBookData, addBookController)
booksRouter.put('/books/:id', validateBookData, updateBookController)
booksRouter.get('/books/:id', getOneBookController)
booksRouter.delete('/books/:id', deleteBookController)