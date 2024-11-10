import { Article } from "../modules/index.js"
import { statusCodes, errorMessages, ApiError } from "../utils/index.js"


export const createArticleController = async (req, res, next) => {
    try {
        const data = req.body
        const newArticle = new Article(data)
        const result = await newArticle.save()
        if(result){
            return res.status(statusCodes.CREATED).send('Created')
        }else{
            return res.status(statusCodes.CONFLICT).send('OOPS')
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const getAllArticles = async (req, res, next) => {
    try {
        const articles = await Article.find()
        if(!articles){
            return res.status(statusCodes.NOT_FOUND).send('Article Not Found')
        }
        return res.status(statusCodes.OK).send(articles)
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const updateArticle = async (req, res, next) => {
    try {
        const id = req.params.id
        const newCategfory = req.body
        const result = await Article.findByIdAndUpdate(id, newCategfory)
        if(result){
            return res.status(statusCodes.CREATED).send('Created')
        }else{
            return res.status(statusCodes.CONFLICT).send('OOPS')
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}

export const deleteArticle = async (req, res, next) => {
    try {
        const id = req.params.id
        const newCategfory = req.body
        const result = await Article.findByIdAndUpdate(id, newCategfory)
        if(result){
            return res.status(statusCodes.CREATED).send('Created')
        }else{
            return res.status(statusCodes.CONFLICT).send('OOPS')
        }
    } catch (error) {
        next(new ApiError(error.statusCode, error.message))
    }
}