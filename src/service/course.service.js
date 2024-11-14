import { Course } from "../modules/index.js"
import { statusCodes, ApiError } from "../utils/index.js"


export const createCourseService = async (data) => {
    try {
        const course = new Course(data)
        await course.save()
        return {
            success: true,
            status: statusCodes.OK,
            message: "Course saqlandi"
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const getAllCoursesService = async (page, limit) => {
    try {
        const skip = (page - 1) * limit
        const courses = await Course.find().skip(skip).limit(limit)
        if(!courses){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: "Course lar mavjud emas"
            }
        }
        return{
            success: true,
            status: statusCodes.OK,
            message: courses
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const updateCourseService = async (id, data) => {
    try {
        await Course.findByIdAndUpdate(id, data)
        return {
            success: true,
            status: statusCodes.OK,
            message: "Course yangilandi"
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const deleteCourseService = async (id) => {
    try {
        await Course.findByIdAndDelete(id)
        return {
            success: true,
            status: statusCodes.OK,
            message: "Course o'chirildi"
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}