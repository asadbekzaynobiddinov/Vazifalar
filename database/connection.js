import mongoose, { mongo } from 'mongoose'
import { config } from 'dotenv'

config()

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Mongodb ga muvaffaqiyatli ulandi')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
