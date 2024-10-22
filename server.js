import express from 'express'
import router from './routers/weather.routes.js'


const app = express()
app.use(express.json())


app.use(router)


app.use((req, res) => {
    res.status(404).json({ error: '404 Not Found' })
})

app.listen(3000, () => {
    console.log('Server is running on 3000 port')
})