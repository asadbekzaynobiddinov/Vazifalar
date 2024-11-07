import { User } from "../model/index.js"
import bcrypt from 'bcrypt'


export const registerAdmin = async (data) => {
    try {

        const { role } = data

        if (role == 'SuperAdmin') {
            const superAdminExists = await User.exists({ role: 'SuperAdmin' });
            if (superAdminExists) {
                return {
                    success: false,
                    error: "SuperAdmin roli allaqachon mavjud, yangi SuperAdmin yaratib bo'lmaydi"
                }
            }
        }

        const existingUser = await User.findOne({ email: data.email });
        if (existingUser) {
            return {
                success: false,
                error: `Bu email allaqachon ro'yxatdan o'tgan`
            };
        }
        const saltRounds = 10
        data.password = await bcrypt.hash(data.password, saltRounds)
        const newUser = new User(data)
        const res = await newUser.save()

        const userObject = newUser.toObject()
        delete userObject.password

        return {
            success: true,
            newUser: userObject
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}


export const getAllUsers = async () => {
    try {
        const users = await User.find().select("-password")
        if(users){
            return {
                success: true,
                data: users
            }
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}


export const updateUser = async (id, data) => {
    try {
        const result = await User.findByIdAndUpdate(id, data, { new: true });
        
        if (result) {
            return {
                success: true,
                updatedUser: result
            };
        } else {
            return {
                success: false,
                error: "Foydalanuvchi topilmadi"
            };
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}


export const deleteUser = async (id) => {
    try {
        const result = await User.findByIdAndDelete(id);
        
        if (result) {
            return {
                success: true,
                message: "Foydalanuvchi muvaffaqiyatli o'chirildi",
                deletedUser: result
            };
        } else {
            return {
                success: false,
                error: "Foydalanuvchi topilmadi"
            };
        }
    } catch (error) {
        return {
            success: false,
            error: error.message
        };
    }
};
