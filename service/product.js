import { pool } from "../databases/index.js";
import { createProductModel, findProductById, updateProductById, deleteProductById, getAllProducts } from "../model/product.model.js";

export const createProductService = async (product) => {
  try {
    const result = await createProductModel(product);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findProduct = async (id) => {
  try {
    const result = await findProductById(id);
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updateProduct = async (product, id) => {
  try {
    const oldProduct = await findProductById(id);

    const newProduct = {
      ...oldProduct[0],
      ...product,
    };

    const result = await updateProductById(newProduct, id);

    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const deleteProduct = async (id) => {
  try {
    const product = await findProductById(id);

    if(product.length ===0){
      return {
        error:true,
        message:"PRODUCT not found"
      }
    }

    await deleteProductById(id)
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getData = async (page, pageSize) => {
  try {
    const product = await getAllData(page, pageSize);

    if(product.length === 0){
      return {
        error:true,
        message:"PRODUCTS not found"
      }
    }

    return product
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getAllProductsService = async (page, pageSize, price, name) => {
  try {
    const products = await getAllProducts(page, pageSize, price, name)

    if(products.length ===0){
      return {
        error:true,
        message:"PRODUCT not found"
      }
    }
    return products
  } catch (error) {
    throw new Error(error.message);
  }
}