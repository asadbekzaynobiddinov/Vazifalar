import express from 'express'
import { authorRouter } from './routes/author.routes.js'
import { connectDB } from './database/connection.js'
import { config } from 'dotenv'

config()

const port = process.env.PORT || 3000

connectDB()

const app = express()
app.use(express.json())

app.use('/authors', authorRouter)

app.listen(port, () => {
    console.log('Server is running on port: ', port)
})