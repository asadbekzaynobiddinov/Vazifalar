import { createMarketService, findMarketService, updateMarketService, deleteMarketService, getAllMarketsService} from "../service/index.js";

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


export const getAllMarketsController = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    const name = req.query.name || '';
    
    const result = await getAllMarketsService(page, pageSize, name)

    if (!result) {
      return res.status(500).send({ error: true, message: "Service error" });
    }

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);

  } catch (error) {
    next(error);
  }
}