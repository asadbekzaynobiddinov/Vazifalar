import mongoose from "mongoose"

const articleSchema = mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Schema.ObjectId, 
        ref: 'users',
        required: true
    },
    categoryId: {
        type: mongoose.Schema.ObjectId, 
        ref: 'categorys',
        required: true
    }
},
{
    timestamp: true
})

export const Article = mongoose.model('article', articleSchema)