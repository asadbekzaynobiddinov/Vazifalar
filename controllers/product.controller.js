import { addProduct, getProductInfo, updateProduct, deleteProduct } from "../service/export.js"


export const addProductController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await addProduct(data)
        return res.status(201).send({
            status: "Created",
            product: result
        })
    } catch (error) {
        next(error)
    }
}

export const getProductInfoController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const result = await getProductInfo(id)
        if(result){
            return res.status(200).send({
                status: 'Success',
                product: result
            })
        }else{
            return res.send(`"${id}" raqamli mahsulot bazadan topilmadi`)
        }
        
    } catch (error) {
        next(error)
    }
}

export const updateProductController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const data = req.body
        const result = await updateProduct(id, data)
        const product = await getProductInfo(id)

        if(!product){
            return res.send(`"${id}" raqamli mahsulot topilmadi`)
        }
        return res.status(200).send({
            status: 'Updated',
            yourProduct: result
        })
    } catch (error) {
        next(error)
    }
}

export const deleteProductController = async (req, res, next) => {
    try {
        const id = +req.params.id
        const result = await deleteProduct(id)
        if(result){
            return res.status(200).send({
                status: 'Deleted',
                deletedProduct: result
            })
        }else{
            return res.status(404).send(`"${id}" raqamli mahsulot topilmadi !!!`)
        }
        
    } catch (error) {
        next(error)
    }
}