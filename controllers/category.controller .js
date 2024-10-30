import { createCategoryService, findCategoryService, updateCategoryService, deleteCategoryService } from "../service/index.js";

export const createCategoryController = async (req, res, next) => {
  try {
    const result = await createCategoryService(req.body);

    if (result.error) {
      return res.status(409).send(result.message);
    }
    res.send(result);
  } catch (error) {
    next(error);
  }
};

export const findCategoryController = async (req, res, next) => {
  try {
    const id = +req.params.id
    const result = await findCategoryService(id)
    if(result.error){
      return res.status(409).send(result.message);
    }
    res.send(result)
  } catch (error) {
    next(error)
  }
}

export const updateCategoryController = async (req, res, next) => {
  try {
    const data = req.body
    const id = +req.params.id
    const result = await updateCategoryService(data, id)
    if(result.error){
      return res.status(409).send(result.message);
    }
  } catch (error) {
    next(error)
  }
}

export const deleteCategoryController = async (req, res, next) => {
  try {
    const id = +req.params.id
    const result = deleteCategoryService(id)
    if(result.error){
      return res.status(409).send(result.message);
    }
  } catch (error) {
    next(error)
  }
}


