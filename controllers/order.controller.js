import { buyProduct } from "../service/export.js"


export const buyProductController = async (req, res, next) => {
    try {
        const data = req.body
        const result = await buyProduct(data)
        return res.status(201).send({
            status: "Bought",
            order: result
        })
    } catch (error) {
        next(error)
    }
}