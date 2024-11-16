import express from 'express'
import morgan from 'morgan'
import { 
    CreateUsersTable, 
    createAddressTable,
    createSocialTable,
    createProducrsTable,
    createCategoriesTable
} from './dbFunctions/index.js'
import { logger } from './utils/index.js'
import { userRouter, authRouter, categoryRoter, productRouter } from './routes/index.js'



const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/users', userRouter)
app.use('/auth', authRouter)
app.use('/products', productRouter)
app.use('/category', categoryRoter)

app.get('/setup', async (req, res) => {
    try {
        await CreateUsersTable()
        await createAddressTable()
        await createSocialTable()
        await createCategoriesTable()
        await createProducrsTable()
        res.send('ok')
    } catch (error) {
        logger.error(error)
    }
})

export default app
