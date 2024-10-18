import express from "express";
import { myProfile, updateMyProfile, deletemyProfile } from "../controllers/profile.controller.js";


export const profileRouter = express.Router()


profileRouter.get("/:id", myProfile)
profileRouter.put("/:id", updateMyProfile)
profileRouter.delete("/:id", deletemyProfile)
