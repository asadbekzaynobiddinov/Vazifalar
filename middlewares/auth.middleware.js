import fs from 'fs'
import path from 'path'

const dataBaseUrl = path.join(import.meta.dirname, '..', 'database', 'users.json')

export const validateUserData = (req, res, next) => {
    const { username, password, fullName, age, email, gender } = req.body

    const users = JSON.parse(fs.readFileSync(dataBaseUrl, 'utf-8'))

    if (!username || username.length < 3) {
        return res.status(400).send({ message: `Username kamida 3 belgidan iborat bo'lishi kerak` })
    }
    const userExists = users.find(user => user.username === username)
    if (userExists) {
        return res.status(400).send({ message: 'Username allaqachon mavjud' })
    }
    if (!password || password.length < 5) {
        return res.status(400).send({ message: `Parol kamida 5 belgidan iborat bo'lishi kerak` })
    }

    if (fullName && fullName.length < 10) {
        return res.status(400).send({ message: `FullName kamida 10 belgidan iborat bo'lishi kerak` })
    }
    if (!age || age < 10) {
        return res.status(400).send({ message: `Foydalanuvchi kamida 10 yosh bo'lishi kerak` })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
        return res.status(400).send({ message: 'To\'g\'ri email kiriting' })
    }
    if (gender && gender !== 'male' && gender !== 'female') {
        return res.status(400).send({ message: 'Gender faqat "male" yoki "female" bo\'lishi mumkin' })
    }
    next()
};
