import { createMarketService, findMarketService, updateMarketService, deleteMarketService} from "../service/index.js";

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

    const result = await createMarketService(req.body);

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

    const result = await createMarketService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }

    res.send(result);
  } catch (error) {
    next(error);
  }
};

