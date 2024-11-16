import { 
    addProduct, 
    getAllProducts, 
    getProductById, 
    updateProduct,
    deletProduct 
} from "../dbFunctions/index.js";

export const ProductService = {
    create: async (product) => {
        try {
            const result = await addProduct(product)
            return result
        } catch (error) {
            logger.error(error)
            throw new Error(error)
        }
    },
    getAll: async (page, limit) => {
        try {
            const result = await getAllProducts(page, limit)
            return result
        } catch (error) {
            logger.error(error)
        }
    },
    getOne: async (id) => {
        try {
            const result = await getProductById(id)
            return result
        } catch (error) {
            logger.error(error)
        }
    },
    update: async (id, newData) => {
        try {
            const result = await updateProduct(id, newData)
            return result
        } catch (error) {
            logger.error(error)
        }
    },
    delete: async (id) => {
        try {
            const result = await deletProduct(id)
            return result
        } catch (error) {
            logger.error(error)
        }
    }
}