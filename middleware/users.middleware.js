import { getProfileInfo } from "../service/export.js"


export const validateUserPost = async (req, res, next) => {

    const {full_name, username, email, password, card_number } = req.body

    const profile = await getProfileInfo(username)

    if(profile){
        return res.send(`${username} nomli foydalanuvchi allaqachon mavjud !!!`)
    }

    if(!full_name || !username || !email || !password || !card_number){
        return res.send(`Iltimos barcha ma'lumotlarni to'ldiring !!!\nfull_name, username, email, password, card_number `)
    }
    next()
}

export const validateUserPut = async (req, res, next) => {

    const {full_name, username, email, password, card_number } = req.body

    if(!full_name || !username || !email || !password || !card_number){
        return res.send(`Iltimos barcha ma'lumotlarni to'ldiring !!!\nfull_name, username, email, password, card_number `)
    }
    next()
}