import { Category } from "../modules/index.js"
import { statusCodes, ApiError } from "../utils/index.js"


export const createCategoryService = async (data) => {
    try {
        const newCategory = new Category(data)
        await newCategory.save()
        return {
            success: true,
            status: statusCodes.CREATED,
            message: 'Created'
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const getAllCategoriesService = async (page, limit) => {
    try {
        const skip = (page - 1) * limit
        const categories = Category.find().skip(skip).limit(limit)
        if(!categories){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: 'Categoryar topilmadi'
            }
        }
        return{
            success: false,
            status: statusCodes.OK,
            message: categories
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const updateCategoryService = async (id, newCategory) => {
    try {
        await Category.findByIdAndUpdate(id, newCategory)
        return {
            success: true,
            status: statusCodes.OK, 
            message: "Updated"
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const deleteCategoryService = async (id) => {
    try {
        await Category.findByIdAndDelete(id)
        return {
            success: true,
            status: statusCodes.OK, 
            message: 'Deleted'
        } 
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}