import { model, Schema } from "mongoose"

const userShema = new Schema({
    name: String,
    login: String,
    password: String
})

export const User = model("Users", userShema)