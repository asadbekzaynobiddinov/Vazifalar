import { createMarketService, findMarketService, updateMarketService, deleteMarketService, getAllProductsService} from "../service/index.js";

export const createMarketController = async (req, res, next) => {
  try {

    const result = await createMarketService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const findMarketController = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await findMarketService(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};



export const updateMarketController = async (req, res, next) => {
  try {
    const data = req.body
    const id = req.params.id
    const result = await updateMarketService(data, id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};



export const deleteMarketController = async (req, res, next) => {
  try {
    const id = req.params.id
    const result = await deleteMarketService(id);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};


export const getAllProductsController = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1
    const pageSize = parseInt(req.query.pageSize) || 10
    const price = parseFloat(req.query.price) || 0
    const name = req.query.name || ''
    const result = getAllProductsService(page, pageSize, price, name)

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);

  } catch (error) {
    next(error)
  }
}