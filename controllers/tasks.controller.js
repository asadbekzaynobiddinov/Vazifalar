import { Tasks } from "../model/export.js";
import mongoose from 'mongoose';

export const addTask = async (req, res, next) => {
    try {
        const data = req.body;
        const task = new Tasks(data);
        await task.save();
        res.status(201).send({
            status: 'Created',
            task: task
        });
    } catch (error) {
        next(error);
    }
};

export const getTasks = async (req, res, next) => {
    try {
        const tasks = await Tasks.find();
        tasks.length > 0 ? res.status(200).send({ status: 'Success', tasks: tasks }) : res.status(404).send("Tasks Not Found");
    } catch (error) {
        next(error);
    }
};

export const getOneTask = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("Invalid Task ID");
        }

        const task = await Tasks.findById(id);
        task ? res.status(200).send({ status: "Success", task: task }) : res.status(404).send("Task Not Found");
    } catch (error) {
        next(error);
    }
};

export const updateTask = async (req, res, next) => {
    try {
        const data = req.body;
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("Invalid Task ID");
        }

        const task = await Tasks.findByIdAndUpdate(id, data, { new: true });
        task ? res.status(200).send({ status: 'Updated', data: task }) : res.status(404).send("Task Not Found");
    } catch (error) {
        next(error);
    }
};

export const deleteTask = async (req, res, next) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("Invalid Task ID");
        }

        const task = await Tasks.findByIdAndDelete(id);
        task ? res.status(200).send({ status: 'Deleted', data: task }) : res.status(404).send("Task Not Found");
    } catch (error) {
        next(error);
    }
};
