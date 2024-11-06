import mongoose, { Schema } from "mongoose"

const authorSchema = new Schema({
    name: String,
    bio: String,
    password: String,
    createdAt: {type: Date, default: Date.now}
})


export const Author = mongoose.model("Author", authorSchema);
