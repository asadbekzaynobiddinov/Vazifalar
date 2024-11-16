import { 
    addCategory, 
    getAllCategories, 
    getOneCategory, 
    updateCategory, 
    deletCategory 
} from "../dbFunctions/index.js";

export const CategoryService = {
    create: async (category) => {
        try {
            const result = await addCategory(category)
            return result
        } catch (error) {
            logger.error(error)
            throw new Error(error)
        }
    },
    getAll: async (page, limit) => {
        try {
            const result = await getAllCategories(page, limit)
            return result
        } catch (error) {
            logger.error(error)
        }
    },
    getOne: async (id) => {
        try {
            const result = await getOneCategory(id)
            return result
        } catch (error) {
            logger.error(error)
        }
    },
    update: async (id, newData) => {
        try {
            const result = await updateCategory(id, newData)
            return result
        } catch (error) {
            logger.error(error)
        }
    },
    delete: async (id) => {
        try {
            const result = await deletCategory(id)
            return result
        } catch (error) {
            logger.error(error)
        }
    }
}