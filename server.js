import express from 'express'
import { userRouter, productsRouter } from './routes/export.js'

const app = express()
app.use(express.json())

app.use('/home', userRouter)
app.use('/home', productsRouter)

app.listen(3000, () => {
    console.log("Server is running on 3000 port")
})


