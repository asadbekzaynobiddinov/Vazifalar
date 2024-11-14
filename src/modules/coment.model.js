import {Schema, model} from "mongoose"

const comentsSchema = Schema({
    content: {type: String, required: true},
    userId: {type: Schema.ObjectId, ref: 'users'},
    courseId: {type: Schema.ObjectId, ref: 'courses'}
},
{
    timestamps: true}
)

export const Coment = model('coment', comentsSchema)