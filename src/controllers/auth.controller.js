
import { registerService, loginService, refreshService, verifyService, forgetPasswordService, getTokenService } from "../service/index.js";
import { logger } from "../utils/index.js";

export const registerController = async (req, res, next) => {
  try {
    const result = await registerService(req.body)
    if(!result.success){
      return res.status(result.status).send(result.message);
    }
    return res.status(result.status).send(result.message)
  } catch (error) {
    logger.error(error)
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const result = await loginService(req.body)
    if(!result.success){
      return res.status(result.status).send(result.message)
    }
    return res.status(result.status).send({
      access: result.access,
      refresh: result.refresh
    })
  } catch (error) {
    logger.error(error)
    next(error);
  }
};

export const refreshTokenController = async (req, res, next) => {
  try {
    const { token } = req.body;
    const result = await refreshService(token)
    return res.send({accesToken: result.access, refreshToken: result.refresh})
  } catch (error) {
    logger.error(error)
    next(error);
  }
};

export const verifyController = async (req, res, next) => {
  try {
    const result = await verifyService(req.body)
    if(!result.success){
      return res.status(result.status).send(result.message)
    }
    return res.status(result.status).send(result.message)
  } catch (error) {
    logger.error(error)
    next(error);
  }
};

export const forgetPasswordController = async (req, res, next) => {
  try {
    const token = req.params.token
    const {password} = req.body
    const result = await forgetPasswordService(token, password)
    console.log(result)
    if(!result.success){
      return res.status(result.status).send(result.message)
    }
    return res.status(result.status).send(result.message)
  } catch (error) {
    logger.error(error)
    next(error);
  }
};

export const getTokenController = async (req, res, next) => {
  try {
    const { email } = req.body
    const result = await getTokenService(email)
    if(!result.success){
      return res.status(result.status).send(result.message)
    }
    return res.status(result.status).send(result.message)
  } catch (error) {
    logger.error(error)
    next(error)
  }
}