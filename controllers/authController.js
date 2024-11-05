import bcrypt from 'bcrypt'
import User from '../models/User.js'


export const register = async (req, res) => {
    const { username, password } = req.body
    try {
        const existingUser = await User.findOne({ username })
        if (existingUser) return res.status(400).send('Ushbu foydalanuvchi nomi allaqachon mavjud')

        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await User.create({ username, password: hashedPassword })

        res.redirect('/login') // Tizimga kirish sahifasiga yo'naltirish
    } catch (error) {
        res.status(500).send('Ro\'yxatdan o\'tishda xato yuz berdi')
    }
}


export const login = async (req, res) => {
    const { username, password } = req.body
    try {
        const user = await User.findOne({ username })
        if (!user) return res.status(404).send('Foydalanuvchi topilmadi')

        const isPasswordCorrect = await bcrypt.compare(password, user.password)
        if (!isPasswordCorrect) return res.status(400).send('Login yoki parol noto\'g\'ri')

        res.send('Tizimga muvaffaqiyatli kirdingiz!')
    } catch (error) {
        res.status(500).send('Kirishda xato yuz berdi')
    }
}
