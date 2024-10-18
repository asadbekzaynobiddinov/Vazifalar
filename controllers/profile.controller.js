import { profileInfo, updateProfile, deleteUser } from "../services/index.js";


export const myProfile = (req, res) => {
    try{
        const user = profileInfo(req.params.id)
        res.status(200).send(user)
    }catch(err){
        res.status(404).send({ message: err.message });
    }
}

export const updateMyProfile = (req, res) => {
    try {
        updateProfile(req.params.id, req.body)
        return res.status(200).send({ message: 'Profil muvaffaqiyatli yangilandi' })
    } catch (error) {
        return res.status(404).send({ message: error.message })
    }
}


export const deletemyProfile = (req, res) => {
    try {
        deleteUser(req.params.id)
        return res.status(200).send({ message: `Foydalanuvchi muvaffaqiyatli o'chirildi` })
    } catch (error) {
        return res.status(404).send({ message: error.message })
    }
}