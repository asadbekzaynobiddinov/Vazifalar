import express from 'express'
import {booksRouter} from './routers/books.routes.js'
import { usersRouter } from './routers/users.routes.js'
import { commentsRouter } from './routers/comments.routes.js'
import { photosRouter } from './routers/photos.routes.js'


const app = express()

app.use(express.json())
app.use(booksRouter)
app.use(usersRouter)
app.use(commentsRouter)
app.use(photosRouter)

app.listen(3000, () => {
    console.log('Server is running on 3000 port')
})

