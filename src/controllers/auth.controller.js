import { registerService, loginService, refreshService, verifyService } from "../service/index.js";

export const registerController = async (req, res, next) => {
  try {
    const result = await registerService(req.body)
    if(!result.success){
      return res.status(result.status).send(result.message);
    }
    return res.status(result.status).send(result.message)
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const loginController = async (req, res, next) => {
  try {
    const result = await loginService(req.body)
    if(!result.success){
      return res.status(result.status).send(result.message)
    }
    return res.status(result.status).send(result.message)
  } catch (error) {
    next(new ApiError(error.statusCode, error.message));
  }
};

export const refreshTokenController = async (req, res, next) => {
  try {
    const { token } = req.body;
    const result = await refreshService(token)
    return res.send({accesToken: result.access, refreshToken: result.refresh})
  } catch (error) {
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
    next(error);
  }
};
