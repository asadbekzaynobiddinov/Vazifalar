import mongoose from "mongoose"

const commentsSchema = mongoose.Schema({
    content: {type: String, required: true},
    userId: {type: mongoose.Schema.ObjectId, ref: 'users'},
    courseId: {type: mongoose.Schema.ObjectId, ref: 'courses'}
},
{
    timestamps: true}
)

export const Comment = mongoose.model('comment', commentsSchema)