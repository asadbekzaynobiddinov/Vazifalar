import express from 'express'
import { connect } from './database/connection.js'
import { config } from 'dotenv'
import { authRouter, usersRouter, postRouter } from './routes/index.js'

connect()
config()
const port = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.use('/auth', authRouter)
app.use('/users', usersRouter)
app.use('/posts', postRouter)

app.listen(port, () => {
    console.log('Server Is Runnin on Port:', port)
})
