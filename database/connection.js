import mongoose from 'mongoose'
import { config } from 'dotenv'

config() 

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('MongoDb ga ulandi')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}