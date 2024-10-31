import {User} from '../model/export.js'
import mongoose from 'mongoose'


export const addUser = async (req, res, next) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send({
            status: 'Created',
            user: user
        })
    } catch (error) {
        next(error)
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await User.find({}, '-password')
        users.length > 0 ? res.status(200).json({ status: 'Success', data: users}) : res.status(404).send("User not found");
    } catch (error) {
        next(error)
    }
}

export const getOneUser = async (req, res, next) => {
    try {
        const id = req.params.id
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("Invalid User ID");
        }
        const user = await User.findById(id, '-password')
        user ? res.status(200).send({ status: 'Succes', data: user }) : res.status(404).send("User not found");
    } catch (error) {
        next(error)
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("Invalid User ID");
        }

        const data = req.body;
        const user = await User.findByIdAndUpdate(id, data, { new: true });

        user ? res.status(200).json({ status: 'Updated', data: user }) : res.status(404).send("User not found");
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("Invalid User ID");
        }

        const user = await User.findByIdAndDelete(id);

        user ? res.status(200).json({ status: 'Deleted', data: user }) : res.status(404).send("User not found");
    } catch (error) {
        next(error);
    }
};
