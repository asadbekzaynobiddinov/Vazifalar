import { createMarketModel, findMarketById, updateMarketById, deleteMarketById } from "../model/index.js";
import { getAllData, findProductById} from "../model/product.model.js";

export const createMarketService = async (market) => {
  try {
    const result = await createMarketModel(market);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findMarketService = async (id) => {
  try {
    const result = await findProductById(id);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateMarketService = async (product, id) => {
  try {
    const oldProduct = await findMarketById(id);

    const newProduct = {
      ...oldProduct[0],
      ...product,
    };

    const result = await updateMarketById(newProduct, id);

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};



export const deleteMarketService = async (id) => {
  try {
    const product = await findProductById(id);

    if(product.length ===0){
      return {
        error:true,
        message:"PRODUCT not found"
      }
    }

    await deleteMarketById(id)
  } catch (error) {
    throw new Error(error.message);
  }
};


export const getAllProductsService = async (page, pageSize, price, name) => {
  try {
    const products = getAllData(page, pageSize, price, name)

    if(products.length ===0){
      return {
        error:true,
        message:"PRODUCT not found"
      }
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
