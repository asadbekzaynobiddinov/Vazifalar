import { Router } from "express";
import { createMarketController, findMarketController, updateMarketController, deleteMarketController, getAllMarketsController } from "../controllers/index.js";


export const marketRoutes = new Router();

marketRoutes.post("/", createMarketController);
marketRoutes.get('/:id', findMarketController)
marketRoutes.put('/:id', updateMarketController)
marketRoutes.delete('/:id', deleteMarketController)
marketRoutes.get('/', getAllMarketsController)
