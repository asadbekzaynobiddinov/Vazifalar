import mongoose from "mongoose"

const categorySchema = mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    description: {
        type: String
    }
})

export const Category = mongoose.model('category', categorySchema)