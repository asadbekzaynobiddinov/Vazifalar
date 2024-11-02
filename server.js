import express from 'express'
import { setupRouter } from './routes/setup.js'
import { authRouter, userRouter, boardRouter, taskRouter } from './routes/index.js'
import { config } from 'dotenv'

config()

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(setupRouter)

app.use('/auth', authRouter)
app.use(userRouter)
app.use(boardRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('ishladi')
})