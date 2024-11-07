import  mongoose, { Schema } from "mongoose"

const postsSchema = new Schema({
    title: String,
    body: String,
    userId: {type: mongoose.Schema.ObjectId, ref: 'Users'}
})

export const Post = mongoose.model('Posts', postsSchema)