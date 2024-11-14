import mongoose from "mongoose"

const courseSchema = mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String}
})

export const Course = mongoose.model('course', courseSchema)
