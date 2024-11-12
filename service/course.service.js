import { Course } from "../models/index.js"

export const createCourse = async (data) => {
    try {
        const course = new Course(data)
        await course.save()
        return {
            success: true,
            message: "Course saqlandi"
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}

export const getAllCourses = async (page, limit) => {
    try {
        const skip = (page - 1) * limit
        const courses = await Course.find().skip(skip).limit(limit)
        if(!courses){
            return {
                success: false,
                message: "Course lar mavjud emas"
            }
        }
        return{
            success: true,
            message: courses
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}


export const updateCourse = async (id, data) => {
    try {
        await Course.findByIdAndUpdate(id, data)
        return {
            success: true,
            message: "Course yangilandi"
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}




export const deleteCourse = async (id) => {
    try {
        await Course.findByIdAndDelete(id)
        return {
            success: true,
            message: "Course o'chirildi"
        }
    } catch (error) {
        return {
            success: false,
            message: error.message
        }
    }
}