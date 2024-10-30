import { createProductService, findProduct, updateProduct, deleteProduct, getAllProductsService } from "../service/index.js";

export const createProductController = async (req, res, next) => {
  try {

    const result = await createProductService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const findProductController = async (req, res, next) => {
  try {
    const id = +req.params.id
    const result = await findProduct(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const updateProductController = async (req, res, next) => {
  try {
    const data = req.body
    const id = req.params.id
    const result = await updateProduct(data, id);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const deleteProductController = async (req, res, next) => {
  try {
    const id = +req.params.id
    const result = await deleteProduct(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};



export const getAllProductController = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const price = parseFloat(req.query.price) || 0;
    const name = req.query.name || '';
    const result = await getAllProductsService(page, pageSize, price, name);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};

