import { saveUser, profileInfo, updateProfile, deleteUser } from '../services/user.service.js';

export const registerUser = (req, res) => {
    try {
        const newUser = saveUser(req.body)
        res.status(201).send({message: `Muvaffaqiyatli ro'yxatdan o'tdingiz`})
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}

export const getProfile = (req, res) => {
    try {
        const user = profileInfo(req.params.username)
        res.status(200).send(user)
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

export const updateUserProfile = (req, res) => {
    try {
        updateProfile(req.params.username, req.body)
        res.status(200).send({ message: 'Profil muvaffaqiyatli yangilandi' })
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}

export const removeUser = (req, res) => {
    try {
        deleteUser(req.params.username)
        res.status(200).send({ message: `Foydalanuvchi muvaffaqiyatli o'chirildi` })
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}                                         

