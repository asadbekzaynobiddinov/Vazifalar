import express from 'express'
import userRouter from './routes/users.routes.js'
import postsRouter from './routes/posts.routes.js'

const app = express()
app.use(express.json())

app.use(userRouter)
app.use(postsRouter)

app.listen(3000, () => {
    console.log('ishladi')
})