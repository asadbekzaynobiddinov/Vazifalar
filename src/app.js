import express from 'express'
import morgan from 'morgan'
import { 
    CreateUsersTable, 
    createAddressTable,
    createSocialTable
} from './schema/index.js'
import { logger } from './utils/index.js'
import { userRouter, authRouter } from './routes/index.js'



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/users', userRouter)
app.use('/auth', authRouter)

app.get('/setup', async (req, res) => {
    try {
        await CreateUsersTable()
        await createAddressTable()
        await createSocialTable()
        res.send('ok')
    } catch (error) {
        logger.error(error)
    }
})

export default app
