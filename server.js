import express from 'express'
import { config } from 'dotenv'
import { connect } from './database/connection.js'
import { authRouter } from './routes/index.js'

config()

connect()

const port = process.env.PORT

const app = express()

app.use(express.json())

app.use('/auth', authRouter)

app.use((err, req, res, next) => {
    if(err){
        return res.status(500).send("Serverda Hato")
    }
    return res.status(404).send("Not Found")
})

app.listen(port, () => {
    console.log("Server 3000-portda ishga tushdi !!!")
})
