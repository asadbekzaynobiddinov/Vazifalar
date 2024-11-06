import mongoose, { Schema } from "mongoose"


const postSchema = new Schema({
    title: String,
    body: String,
    authorId: {type: Schema.ObjectId, ref: "authors"}
})

export const Post = new mongoose.model("Post", postSchema)