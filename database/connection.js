import mongoose from "mongoose"
import { config } from "dotenv"
config()

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB ga muvaffaqiyatli ulandi');
    } catch (error) {
        console.error('MongoDB ga ulanishda xatolik:', error);
        process.exit(1);
    }
}