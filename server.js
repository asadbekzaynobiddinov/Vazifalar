import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { userRouter, taskRouter } from './routes/export.js'

import { getOneUser } from './controllers/users.controller.js'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/users', userRouter)
app.use('/tasks', taskRouter)

app.get('/:id', getOneUser)

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.error('MongoDB connection error:', error))


const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
