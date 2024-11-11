import mongoose, {Schema} from "mongoose";

const usersSchema = new Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {
        type: String, 
        required: true, 
        enum: ['admin', 'user'], 
        default: 'user'
    } 
},
{
    timestamps: true
})

export const User = mongoose.model('Users', usersSchema)
