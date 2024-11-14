import { Article } from "../modules/index.js"
import { statusCodes, ApiError } from "../utils/index.js"


export const createArticleService = async (data) => {
    try {
        const newArticle = new Article(data)
        await newArticle.save()
        return {
            success: true,
            status: statusCodes.CREATED,
            message: 'Created'
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const getAllArticlesService = async (page, limit) => {
    try {
        const skip = (page - 1) * limit
        const articles = Article.find().skip(skip).limit(limit)
        if(!articles){
            return {
                success: false,
                status: statusCodes.NOT_FOUND,
                message: 'Article lar topilmadi'
            }
        }
        return{
            success: false,
            status: statusCodes.OK,
            message: articles
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const updateArticleService = async (id, data) => {
    try {
        await Article.findByIdAndUpdate(id, data)
        return {
            success: true, 
            status: statusCodes.OK,
            message: 'Updated'
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const deleteArticleService = async (id) => {
    try {
        await Article.findByIdAndUpdate(id, newCategfory)
        return {
            success: true,
            status: statusCodes.OK,
            message: `Article muvaffaqiyatli o'chirildi`
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}