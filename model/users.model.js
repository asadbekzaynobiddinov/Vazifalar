import mongoose, {Schema} from "mongoose"


const usersSchema = new Schema({
    name: String,
    email: String,
    password: String,
    role: String
})

export const User = mongoose.model('Users', usersSchema)