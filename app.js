import express from "express";
import { authRouter } from "./src/routes/index.js";

export const app = express()

app.use(express.json())

app.use('/auth', authRouter)

app.use((err, req, res, next) => {
    if(err){
        res.send(err.message)
    }
    res.send("Not Found")
})

app.listen(3000, () => {
    console.log('server is running')
})