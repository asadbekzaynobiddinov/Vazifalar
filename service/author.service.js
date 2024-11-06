import { Author } from '../model/author.model.js'
import bcrypt from 'bcrypt'


export const createAuthorService = async (data) => {
    try {

        if(typeof data == "string"){
            data = JSON.parse(data)
        }

        const saltRound = 10
        data.password = await bcrypt.hash(data.password, saltRound)

        const author = new Author(data)
        const savedAuthor = await author.save()
        return { 
            success: true, 
            data: await Author.findById(savedAuthor._id).select('-password') }
    } catch (error) {
        return { success: false, error: error.message }
    }
}




export const getAllAuthorsService = async (page, limit) => {
    try {
        
        const skip = (page - 1) * limit
        
        const authors = await Author.find()
                                    .skip(skip)
                                    .limit(limit)
                                    .select('-password')

        const totalAuthors = await Author.countDocuments()

        return {
            success: true,
            data: authors,
            page,
            totalPages: Math.ceil(totalAuthors / limit), 
            totalAuthors
        };        
        
    } catch (error) {
        return { success: false, error: error.message }
    }
}


export const updateAuthorService = async (id, data) => {
    try {
        const newAuthor = Author.findByIdAndUpdate(id, data,{new: true}).select("-password")
        return {
            success: true,
            newData: newAuthor
        }
    } catch (error) {
        return { success: false, error: error.message }
    }
}



export const deleteAuthorService = async (id) => {
    try {
        const deletedAuthor = await Author.findByIdAndDelete(id).select("-password")
        return {
            success: true,
            deleted: deletedAuthor
        }
    } catch (error) {
        return { success: false, error: error.message }
    }
}