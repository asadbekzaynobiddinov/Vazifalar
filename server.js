import express from 'express'
import { userRouter, productsRouter, orderRouter, commentRouter } from './routes/export.js'

const app = express()
app.use(express.json())

app.use('/home', userRouter)
app.use('/home', productsRouter)
app.use('/home', orderRouter)
app.use('/home', commentRouter)

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/")
})


