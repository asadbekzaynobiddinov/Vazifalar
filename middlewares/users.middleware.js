export const validateUserData = (req, res, next) => {
    const {username, email, password} = req.body

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if(!username || !email || !password){
        return res.status(400).send({message: `Iltimos barcha malumotlar(username, email, password)ni kiriting !!!`})
    }

    if (!emailRegex.test(email)) {
        return res.status(400).send({
            message: "Iltimos, to'g'ri email kiriting!"
        })
    }

    next()
}