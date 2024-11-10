import { Category } from "../modules/index.js"
import { statusCodes, errorMessages, ApiError } from "../utils/index.js"


export const createCategoryController = async (req, res, next) => {
    try {
        const data = req.body
        const newCategory = new Category(data)
        const result = await newCategory.save()
        if(result){
            return res.status(statusCodes.CREATED).send('Created')
        }else{
            return res.status(statusCodes.CONFLICT).send('OOPS')
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const getAllCategories = async (req, res, next) => {
    try {
        const categories = await Category.find()
        if(!categories){
            return res.status(statusCodes.NOT_FOUND).send('Category Not Found')
        }
        return res.status(statusCodes.OK).send(categories)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const updateCategory = async (req, res, next) => {
    try {
        const id = req.params.id
        const newCategfory = req.body
        const result = await Category.findByIdAndUpdate(id, newCategfory)
        if(result){
            return res.status(statusCodes.CREATED).send('Created')
        }else{
            return res.status(statusCodes.CONFLICT).send('OOPS')
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const deleteCategory = async (req, res, next) => {
    try {
        const id = req.params.id
        const newCategfory = req.body
        const result = await Category.findByIdAndUpdate(id, newCategfory)
        if(result){
            return res.status(statusCodes.CREATED).send('Created')
        }else{
            return res.status(statusCodes.CONFLICT).send('OOPS')
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}